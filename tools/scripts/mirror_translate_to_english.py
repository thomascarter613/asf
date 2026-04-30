#!/usr/bin/env python3
"""
mirror_translate_to_english.py

Recursively mirrors a directory tree while translating Chinese folder names,
file names, and text file contents into English.

Features:
- Recurses through all subdirectories.
- Translates CJK/Chinese-looking folder and file names.
- Translates text file contents that contain CJK characters.
- Copies binary files unchanged.
- Preserves file metadata where possible.
- Avoids translated filename collisions.
- Supports dry-run mode.
- Uses a LibreTranslate-compatible API endpoint.
- Maintains a translation cache to avoid retranslating the same strings.

Example:

    export LIBRETRANSLATE_URL="http://localhost:5000"
    python3 mirror_translate_to_english.py ./source_dir ./english_mirror

With API key:

    export LIBRETRANSLATE_URL="https://your-libretranslate-server.example.com"
    export LIBRETRANSLATE_API_KEY="your-api-key"
    python3 mirror_translate_to_english.py ./source_dir ./english_mirror

Dry run:

    python3 mirror_translate_to_english.py ./source_dir ./english_mirror --dry-run

Translate every decodable text file, even if no Chinese characters are detected:

    python3 mirror_translate_to_english.py ./source_dir ./english_mirror --translate-all-text

Only translate names, not file contents:

    python3 mirror_translate_to_english.py ./source_dir ./english_mirror --names-only
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import sys
import time
import unicodedata
import urllib.error
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, Optional


# Broad CJK ranges. This catches Chinese Han characters and related CJK ranges.
CJK_RE = re.compile(
    r"[\u3400-\u4DBF"      # CJK Unified Ideographs Extension A
    r"\u4E00-\u9FFF"      # CJK Unified Ideographs
    r"\uF900-\uFAFF"      # CJK Compatibility Ideographs
    r"\U00020000-\U0002A6DF"  # CJK Extension B
    r"\U0002A700-\U0002B73F"  # CJK Extension C
    r"\U0002B740-\U0002B81F"  # CJK Extension D
    r"\U0002B820-\U0002CEAF"  # CJK Extension E/F-ish
    r"\U0002CEB0-\U0002EBEF"
    r"]"
)

WINDOWS_INVALID_FILENAME_CHARS_RE = re.compile(r'[<>:"/\\|?*\x00-\x1F]')
WHITESPACE_RE = re.compile(r"\s+")

DEFAULT_CACHE_FILE_NAME = ".translation-cache.json"

# Conservative list of encodings commonly relevant to Chinese or mixed archives.
TEXT_ENCODINGS_TO_TRY = [
    "utf-8-sig",
    "utf-8",
    "utf-16",
    "utf-16-le",
    "utf-16-be",
    "gb18030",
    "gbk",
    "big5",
]


@dataclass(frozen=True)
class TranslationConfig:
    endpoint_url: str
    api_key: Optional[str]
    source_lang: str
    target_lang: str
    max_chunk_chars: int
    retries: int
    retry_delay_seconds: float


class TranslationCache:
    def __init__(self, cache_path: Path, enabled: bool = True) -> None:
        self.cache_path = cache_path
        self.enabled = enabled
        self._data: Dict[str, str] = {}

        if self.enabled and self.cache_path.exists():
            try:
                self._data = json.loads(self.cache_path.read_text(encoding="utf-8"))
            except Exception:
                print(
                    f"Warning: could not read cache file {self.cache_path}; starting with empty cache.",
                    file=sys.stderr,
                )
                self._data = {}

    def _key(self, text: str, source_lang: str, target_lang: str) -> str:
        payload = f"{source_lang}\0{target_lang}\0{text}".encode("utf-8")
        return hashlib.sha256(payload).hexdigest()

    def get(self, text: str, source_lang: str, target_lang: str) -> Optional[str]:
        if not self.enabled:
            return None
        return self._data.get(self._key(text, source_lang, target_lang))

    def set(self, text: str, source_lang: str, target_lang: str, translated: str) -> None:
        if not self.enabled:
            return
        self._data[self._key(text, source_lang, target_lang)] = translated

    def save(self) -> None:
        if not self.enabled:
            return

        self.cache_path.parent.mkdir(parents=True, exist_ok=True)
        tmp_path = self.cache_path.with_suffix(self.cache_path.suffix + ".tmp")
        tmp_path.write_text(
            json.dumps(self._data, ensure_ascii=False, indent=2, sort_keys=True),
            encoding="utf-8",
        )
        tmp_path.replace(self.cache_path)


class LibreTranslateClient:
    def __init__(self, config: TranslationConfig, cache: TranslationCache) -> None:
        self.config = config
        self.cache = cache

    def translate(self, text: str) -> str:
        text = text.strip()
        if not text:
            return text

        cached = self.cache.get(text, self.config.source_lang, self.config.target_lang)
        if cached is not None:
            return cached

        translated = self._translate_uncached(text)
        self.cache.set(text, self.config.source_lang, self.config.target_lang, translated)
        return translated

    def _translate_uncached(self, text: str) -> str:
        url = self.config.endpoint_url.rstrip("/") + "/translate"

        request_body = {
            "q": text,
            "source": self.config.source_lang,
            "target": self.config.target_lang,
            "format": "text",
        }

        if self.config.api_key:
            request_body["api_key"] = self.config.api_key

        encoded_body = json.dumps(request_body).encode("utf-8")

        last_error: Optional[BaseException] = None

        for attempt in range(1, self.config.retries + 1):
            request = urllib.request.Request(
                url=url,
                data=encoded_body,
                headers={
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                method="POST",
            )

            try:
                with urllib.request.urlopen(request, timeout=120) as response:
                    raw = response.read().decode("utf-8")
                    payload = json.loads(raw)

                    translated = payload.get("translatedText")
                    if not isinstance(translated, str):
                        raise RuntimeError(f"Unexpected translation response: {payload!r}")

                    return translated.strip()

            except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, RuntimeError, json.JSONDecodeError) as exc:
                last_error = exc
                if attempt < self.config.retries:
                    time.sleep(self.config.retry_delay_seconds * attempt)

        raise RuntimeError(f"Translation failed after {self.config.retries} attempts: {last_error}")


def contains_cjk(text: str) -> bool:
    return bool(CJK_RE.search(text))


def is_probably_binary(data: bytes) -> bool:
    if not data:
        return False

    if b"\x00" in data:
        return True

    # Heuristic: if many bytes are control characters, treat as binary.
    sample = data[:4096]
    control_bytes = sum(
        1
        for byte in sample
        if byte < 32 and byte not in (9, 10, 13)  # allow tab/newline/carriage return
    )

    return control_bytes / max(1, len(sample)) > 0.10


def decode_text_file(path: Path) -> tuple[Optional[str], Optional[str]]:
    try:
        data = path.read_bytes()
    except OSError:
        return None, None

    if is_probably_binary(data):
        return None, None

    for encoding in TEXT_ENCODINGS_TO_TRY:
        try:
            return data.decode(encoding), encoding
        except UnicodeDecodeError:
            continue

    return None, None


def split_text_for_translation(text: str, max_chunk_chars: int) -> list[str]:
    """
    Splits text into chunks suitable for translation.

    It prefers paragraph boundaries. If a paragraph is too large,
    it falls back to line boundaries. If a line is still too large,
    it hard-splits.
    """
    if len(text) <= max_chunk_chars:
        return [text]

    chunks: list[str] = []
    current: list[str] = []
    current_len = 0

    paragraphs = re.split(r"(\n\s*\n)", text)

    def flush_current() -> None:
        nonlocal current, current_len
        if current:
            chunks.append("".join(current))
            current = []
            current_len = 0

    for part in paragraphs:
        if not part:
            continue

        if len(part) > max_chunk_chars:
            flush_current()
            chunks.extend(split_large_piece(part, max_chunk_chars))
            continue

        if current_len + len(part) > max_chunk_chars:
            flush_current()

        current.append(part)
        current_len += len(part)

    flush_current()
    return chunks


def split_large_piece(text: str, max_chunk_chars: int) -> list[str]:
    pieces: list[str] = []

    lines = text.splitlines(keepends=True)
    current: list[str] = []
    current_len = 0

    def flush_current() -> None:
        nonlocal current, current_len
        if current:
            pieces.append("".join(current))
            current = []
            current_len = 0

    for line in lines:
        if len(line) > max_chunk_chars:
            flush_current()
            for i in range(0, len(line), max_chunk_chars):
                pieces.append(line[i : i + max_chunk_chars])
            continue

        if current_len + len(line) > max_chunk_chars:
            flush_current()

        current.append(line)
        current_len += len(line)

    flush_current()
    return pieces


def sanitize_filename(name: str, fallback: str = "untitled") -> str:
    """
    Makes a translated file or directory name filesystem-safe.
    """
    name = unicodedata.normalize("NFKC", name)
    name = WINDOWS_INVALID_FILENAME_CHARS_RE.sub("-", name)
    name = WHITESPACE_RE.sub(" ", name).strip()
    name = name.strip(". ")

    if not name:
        name = fallback

    # Avoid very long path components.
    if len(name) > 180:
        stem, suffix = split_name_suffix(name)
        max_stem_len = max(1, 180 - len(suffix))
        name = stem[:max_stem_len].rstrip() + suffix

    return name


def split_name_suffix(name: str) -> tuple[str, str]:
    path = Path(name)

    if path.suffix and path.name != path.suffix:
        return name[: -len(path.suffix)], path.suffix

    return name, ""


def unique_child_path(parent: Path, desired_name: str, used_names: set[str]) -> Path:
    """
    Returns a unique child path under parent.

    Collision examples:
        Document.txt
        Document--2.txt
        Document--3.txt
    """
    desired_name = sanitize_filename(desired_name)
    stem, suffix = split_name_suffix(desired_name)

    candidate = desired_name
    counter = 2

    while candidate in used_names or (parent / candidate).exists():
        candidate = f"{stem}--{counter}{suffix}"
        counter += 1

    used_names.add(candidate)
    return parent / candidate


def translate_path_component(
    original_name: str,
    translator: LibreTranslateClient,
    translate_all_names: bool,
) -> str:
    stem, suffix = split_name_suffix(original_name)

    should_translate_stem = translate_all_names or contains_cjk(stem)
    should_translate_suffix = False  # Extensions should usually remain unchanged.

    translated_stem = translator.translate(stem) if should_translate_stem else stem
    translated_suffix = translator.translate(suffix) if should_translate_suffix else suffix

    translated_name = translated_stem + translated_suffix
    return sanitize_filename(translated_name, fallback="untitled")


def translate_text_content(
    text: str,
    translator: LibreTranslateClient,
    max_chunk_chars: int,
) -> str:
    chunks = split_text_for_translation(text, max_chunk_chars=max_chunk_chars)

    translated_chunks: list[str] = []
    for chunk in chunks:
        if contains_cjk(chunk):
            translated_chunks.append(translator.translate(chunk))
        else:
            translated_chunks.append(chunk)

    return "".join(translated_chunks)


def copy_or_translate_file(
    src_file: Path,
    dst_file: Path,
    translator: LibreTranslateClient,
    *,
    dry_run: bool,
    names_only: bool,
    translate_all_text: bool,
    max_chunk_chars: int,
) -> None:
    if dry_run:
        print(f"[DRY-RUN] FILE {src_file} -> {dst_file}")
        return

    dst_file.parent.mkdir(parents=True, exist_ok=True)

    if names_only:
        shutil.copy2(src_file, dst_file)
        return

    text, encoding = decode_text_file(src_file)

    if text is None:
        shutil.copy2(src_file, dst_file)
        return

    should_translate_content = translate_all_text or contains_cjk(text)

    if not should_translate_content:
        shutil.copy2(src_file, dst_file)
        return

    translated = translate_text_content(
        text=text,
        translator=translator,
        max_chunk_chars=max_chunk_chars,
    )

    # Write translated text as UTF-8. This is usually what you want for an English mirror.
    dst_file.write_text(translated, encoding="utf-8")

    try:
        shutil.copystat(src_file, dst_file)
    except OSError:
        pass


def copy_symlink(src_link: Path, dst_link: Path, *, dry_run: bool) -> None:
    target = os.readlink(src_link)

    if dry_run:
        print(f"[DRY-RUN] SYMLINK {src_link} -> {dst_link} points to {target}")
        return

    dst_link.parent.mkdir(parents=True, exist_ok=True)

    if dst_link.exists() or dst_link.is_symlink():
        dst_link.unlink()

    os.symlink(target, dst_link)


def mirror_directory(
    src_dir: Path,
    dst_dir: Path,
    translator: LibreTranslateClient,
    *,
    dry_run: bool,
    names_only: bool,
    translate_all_names: bool,
    translate_all_text: bool,
    follow_symlinks: bool,
    max_chunk_chars: int,
) -> None:
    if dry_run:
        print(f"[DRY-RUN] DIR  {src_dir} -> {dst_dir}")
    else:
        dst_dir.mkdir(parents=True, exist_ok=True)

    used_names: set[str] = set()

    try:
        entries = sorted(src_dir.iterdir(), key=lambda p: p.name.casefold())
    except OSError as exc:
        print(f"Warning: cannot read directory {src_dir}: {exc}", file=sys.stderr)
        return

    for entry in entries:
        try:
            translated_name = translate_path_component(
                entry.name,
                translator=translator,
                translate_all_names=translate_all_names,
            )
        except Exception as exc:
            print(
                f"Warning: failed to translate name {entry.name!r}; using original. Error: {exc}",
                file=sys.stderr,
            )
            translated_name = sanitize_filename(entry.name)

        dst_child = unique_child_path(dst_dir, translated_name, used_names)

        try:
            if entry.is_symlink() and not follow_symlinks:
                copy_symlink(entry, dst_child, dry_run=dry_run)

            elif entry.is_dir():
                mirror_directory(
                    entry,
                    dst_child,
                    translator,
                    dry_run=dry_run,
                    names_only=names_only,
                    translate_all_names=translate_all_names,
                    translate_all_text=translate_all_text,
                    follow_symlinks=follow_symlinks,
                    max_chunk_chars=max_chunk_chars,
                )

            elif entry.is_file():
                copy_or_translate_file(
                    entry,
                    dst_child,
                    translator,
                    dry_run=dry_run,
                    names_only=names_only,
                    translate_all_text=translate_all_text,
                    max_chunk_chars=max_chunk_chars,
                )

            else:
                print(f"Warning: skipping unsupported filesystem entry: {entry}", file=sys.stderr)

        except Exception as exc:
            print(f"Error processing {entry}: {exc}", file=sys.stderr)

    if not dry_run:
        try:
            shutil.copystat(src_dir, dst_dir)
        except OSError:
            pass


def validate_paths(src: Path, dst: Path) -> None:
    src_resolved = src.resolve()
    dst_resolved = dst.resolve()

    if not src_resolved.exists():
        raise SystemExit(f"Source directory does not exist: {src}")

    if not src_resolved.is_dir():
        raise SystemExit(f"Source path is not a directory: {src}")

    if src_resolved == dst_resolved:
        raise SystemExit("Destination directory must be different from source directory.")

    try:
        dst_resolved.relative_to(src_resolved)
        raise SystemExit(
            "Destination directory cannot be inside the source directory, "
            "because the script would recursively copy its own output."
        )
    except ValueError:
        pass


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Mirror a directory while translating Chinese names and text contents into English."
    )

    parser.add_argument(
        "source",
        type=Path,
        help="Source directory to translate and mirror.",
    )

    parser.add_argument(
        "destination",
        type=Path,
        help="Destination directory for the English mirror.",
    )

    parser.add_argument(
        "--endpoint",
        default=os.environ.get("LIBRETRANSLATE_URL", "http://localhost:5000"),
        help="LibreTranslate-compatible server URL. Default: env LIBRETRANSLATE_URL or http://localhost:5000",
    )

    parser.add_argument(
        "--api-key",
        default=os.environ.get("LIBRETRANSLATE_API_KEY"),
        help="Translation API key. Default: env LIBRETRANSLATE_API_KEY",
    )

    parser.add_argument(
        "--source-lang",
        default="zh",
        help="Source language code. Default: zh",
    )

    parser.add_argument(
        "--target-lang",
        default="en",
        help="Target language code. Default: en",
    )

    parser.add_argument(
        "--max-chunk-chars",
        type=int,
        default=3500,
        help="Maximum characters per translation request. Default: 3500",
    )

    parser.add_argument(
        "--retries",
        type=int,
        default=3,
        help="Translation retry count. Default: 3",
    )

    parser.add_argument(
        "--retry-delay-seconds",
        type=float,
        default=1.5,
        help="Base retry delay. Default: 1.5",
    )

    parser.add_argument(
        "--cache-file",
        type=Path,
        default=None,
        help=f"Translation cache path. Default: DESTINATION/{DEFAULT_CACHE_FILE_NAME}",
    )

    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Disable translation cache.",
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print planned operations without writing files.",
    )

    parser.add_argument(
        "--names-only",
        action="store_true",
        help="Translate folder/file names only; copy file contents unchanged.",
    )

    parser.add_argument(
        "--translate-all-names",
        action="store_true",
        help="Send every folder/file name stem to the translator, even if no Chinese is detected.",
    )

    parser.add_argument(
        "--translate-all-text",
        action="store_true",
        help="Translate every decodable text file, even if no Chinese is detected.",
    )

    parser.add_argument(
        "--follow-symlinks",
        action="store_true",
        help="Follow symlinks instead of recreating symlinks.",
    )

    return parser.parse_args()


def main() -> int:
    args = parse_args()

    src = args.source
    dst = args.destination

    validate_paths(src, dst)

    cache_path = args.cache_file or (dst / DEFAULT_CACHE_FILE_NAME)

    config = TranslationConfig(
        endpoint_url=args.endpoint,
        api_key=args.api_key,
        source_lang=args.source_lang,
        target_lang=args.target_lang,
        max_chunk_chars=args.max_chunk_chars,
        retries=args.retries,
        retry_delay_seconds=args.retry_delay_seconds,
    )

    cache = TranslationCache(cache_path=cache_path, enabled=not args.no_cache)
    translator = LibreTranslateClient(config=config, cache=cache)

    print(f"Source:      {src.resolve()}")
    print(f"Destination: {dst.resolve()}")
    print(f"Translator:  {config.endpoint_url}")
    print(f"Source lang: {config.source_lang}")
    print(f"Target lang: {config.target_lang}")
    print(f"Dry run:     {args.dry_run}")
    print()

    try:
        mirror_directory(
            src,
            dst,
            translator,
            dry_run=args.dry_run,
            names_only=args.names_only,
            translate_all_names=args.translate_all_names,
            translate_all_text=args.translate_all_text,
            follow_symlinks=args.follow_symlinks,
            max_chunk_chars=args.max_chunk_chars,
        )
    finally:
        if not args.dry_run:
            cache.save()

    print()
    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())