#!/usr/bin/env python3
"""
Foundry File Hygiene Checker

Checks local repository hygiene using only the Python standard library.
"""

from __future__ import annotations

import os
import sys
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class CheckResult:
    rule_id: str
    passed: bool
    message: str


TEXT_SUFFIXES = {
    ".md",
    ".json",
    ".jsonl",
    ".py",
    ".sh",
    ".txt",
    ".yml",
    ".yaml",
    ".toml",
    ".ini",
    ".cfg",
    ".editorconfig",
    ".gitignore",
}

REQUIRED_EXECUTABLES = [
    "evals/repo-contracts/check-repo-contracts.py",
    "tools/scripts/check-frontmatter.py",
    "tools/scripts/check-jsonl.py",
    "tools/scripts/check-markdown-sections.py",
    "tools/scripts/check-file-hygiene.py",
    "tools/scripts/check-local-state.py",
    "tools/scripts/verify.sh",
]


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def is_text_candidate(path: Path) -> bool:
    if path.name in {".gitignore", ".editorconfig"}:
        return True

    return path.suffix in TEXT_SUFFIXES


def iter_files(root: Path) -> list[Path]:
    ignored_segments = {
        ".git",
        "__pycache__",
        ".venv",
        "node_modules",
    }

    files: list[Path] = []

    for path in root.rglob("*"):
        if not path.is_file():
            continue

        relative = path.relative_to(root)

        if any(segment in ignored_segments for segment in relative.parts):
            continue

        files.append(path)

    return sorted(files)


def check_final_newline(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for path in iter_files(root):
        relative = path.relative_to(root)

        if not is_text_candidate(path):
            continue

        content = path.read_bytes()

        if not content:
            passed = True
        else:
            passed = content.endswith(b"\n")

        results.append(
            CheckResult(
                rule_id=f"hygiene.final-newline.{relative.as_posix()}",
                passed=passed,
                message=(
                    f"File ends with newline: {relative.as_posix()}"
                    if passed
                    else f"File missing final newline: {relative.as_posix()}"
                ),
            )
        )

    return results


def check_executable_bits(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for relative_path in REQUIRED_EXECUTABLES:
        path = root / relative_path
        exists = path.is_file()
        executable = exists and os.access(path, os.X_OK)

        results.append(
            CheckResult(
                rule_id=f"hygiene.executable.{relative_path}",
                passed=executable,
                message=(
                    f"Executable bit set: {relative_path}"
                    if executable
                    else f"Executable bit missing or file absent: {relative_path}"
                ),
            )
        )

    return results


def check_obvious_secret_files(root: Path) -> list[CheckResult]:
    forbidden_names = {
        ".env",
        "id_rsa",
        "id_dsa",
        "id_ecdsa",
        "id_ed25519",
    }

    forbidden_suffixes = {
        ".pem",
        ".p12",
        ".pfx",
    }

    matches: list[str] = []

    for path in iter_files(root):
        relative = path.relative_to(root)

        if path.name in forbidden_names or path.suffix in forbidden_suffixes:
            matches.append(relative.as_posix())

    passed = not matches

    return [
        CheckResult(
            rule_id="hygiene.no-obvious-secret-files",
            passed=passed,
            message=(
                "No obvious secret files detected"
                if passed
                else f"Obvious secret-like files detected: {', '.join(matches)}"
            ),
        )
    ]


def print_results(results: list[CheckResult]) -> int:
    failed = [result for result in results if not result.passed]

    print("Foundry File Hygiene Checker")
    print("===========================")
    print()

    for result in results:
        marker = "PASS" if result.passed else "FAIL"
        print(f"[{marker}] {result.rule_id}")
        print(f"       {result.message}")

    print()
    print("Summary")
    print("-------")
    print(f"Passed: {len(results) - len(failed)}")
    print(f"Failed: {len(failed)}")
    print(f"Total:  {len(results)}")

    return 0 if not failed else 1


def main() -> int:
    root = repo_root()
    results: list[CheckResult] = []
    results.extend(check_final_newline(root))
    results.extend(check_executable_bits(root))
    results.extend(check_obvious_secret_files(root))
    return print_results(results)


if __name__ == "__main__":
    sys.exit(main())
