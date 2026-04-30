#!/usr/bin/env python3
"""
Foundry Frontmatter Checker

Validates required YAML-style frontmatter metadata for Markdown documents using
only the Python standard library.

This is intentionally a conservative parser for the subset of YAML used by the
Foundry documentation standard. It verifies field presence, status values,
version/date shape, ADR-specific fields, and template-specific metadata.
"""

from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class CheckResult:
    rule_id: str
    passed: bool
    message: str


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def load_json(root: Path, relative_path: str) -> Any:
    with (root / relative_path).open("r", encoding="utf-8") as file:
        return json.load(file)


def iter_markdown_files(root: Path, exempt_paths: set[str]) -> list[Path]:
    ignored_segments = {
        ".git",
        "__pycache__",
    }

    files: list[Path] = []

    for path in root.rglob("*.md"):
        relative = path.relative_to(root)

        if any(segment in ignored_segments for segment in relative.parts):
            continue

        if relative.as_posix() in exempt_paths:
            continue

        files.append(path)

    return sorted(files)


def extract_frontmatter(path: Path) -> tuple[dict[str, Any], list[str] | None]:
    lines = path.read_text(encoding="utf-8").splitlines()

    if not lines or lines[0] != "---":
        return {}, None

    closing_index: int | None = None

    for index in range(1, len(lines)):
        if lines[index] == "---":
            closing_index = index
            break

    if closing_index is None:
        return {}, None

    frontmatter_lines = lines[1:closing_index]
    parsed: dict[str, Any] = {}
    current_key: str | None = None

    key_pattern = re.compile(r"^([A-Za-z0-9_-]+):\s*(.*)$")

    for line in frontmatter_lines:
        if not line.strip():
            continue

        key_match = key_pattern.match(line)

        if key_match:
            key = key_match.group(1)
            raw_value = key_match.group(2).strip()
            current_key = key

            if raw_value == "[]":
                parsed[key] = []
            elif raw_value == "":
                parsed[key] = []
            elif raw_value in {"true", "false"}:
                parsed[key] = raw_value == "true"
            else:
                parsed[key] = raw_value.strip('"').strip("'")

            continue

        if line.startswith("  - ") and current_key is not None:
            value = line[4:].strip().strip('"').strip("'")
            if not isinstance(parsed.get(current_key), list):
                parsed[current_key] = []
            parsed[current_key].append(value)

    return parsed, frontmatter_lines


def check_file(root: Path, path: Path, config: dict[str, Any]) -> list[CheckResult]:
    relative = path.relative_to(root).as_posix()
    parsed, raw_frontmatter = extract_frontmatter(path)
    results: list[CheckResult] = []

    has_frontmatter = raw_frontmatter is not None

    results.append(
        CheckResult(
            rule_id=f"frontmatter.exists.{relative}",
            passed=has_frontmatter,
            message=(
                f"Frontmatter block exists: {relative}"
                if has_frontmatter
                else f"Missing frontmatter block: {relative}"
            ),
        )
    )

    if not has_frontmatter:
        return results

    for field in config["requiredFields"]:
        passed = field in parsed
        results.append(
            CheckResult(
                rule_id=f"frontmatter.field.{field}.{relative}",
                passed=passed,
                message=(
                    f"Required frontmatter field exists: {relative} -> {field}"
                    if passed
                    else f"Missing frontmatter field: {relative} -> {field}"
                ),
            )
        )

    status = parsed.get("status")
    allowed_statuses = set(config["allowedStatuses"])

    results.append(
        CheckResult(
            rule_id=f"frontmatter.status.{relative}",
            passed=status in allowed_statuses,
            message=(
                f"Frontmatter status allowed: {relative} -> {status}"
                if status in allowed_statuses
                else f"Invalid frontmatter status: {relative} -> {status}"
            ),
        )
    )

    version = str(parsed.get("version", ""))
    version_pattern = re.compile(config["versionPattern"])

    results.append(
        CheckResult(
            rule_id=f"frontmatter.version.{relative}",
            passed=bool(version_pattern.match(version)),
            message=(
                f"Frontmatter version valid: {relative} -> {version}"
                if version_pattern.match(version)
                else f"Invalid frontmatter version: {relative} -> {version}"
            ),
        )
    )

    date_pattern = re.compile(config["datePattern"])

    for date_field in ("created", "updated"):
        value = str(parsed.get(date_field, ""))
        passed = bool(date_pattern.match(value))
        results.append(
            CheckResult(
                rule_id=f"frontmatter.date.{date_field}.{relative}",
                passed=passed,
                message=(
                    f"Frontmatter date valid: {relative} -> {date_field}={value}"
                    if passed
                    else f"Invalid frontmatter date: {relative} -> {date_field}={value}"
                ),
            )
        )

    canonical_value = parsed.get("canonical")
    results.append(
        CheckResult(
            rule_id=f"frontmatter.canonical.{relative}",
            passed=isinstance(canonical_value, bool),
            message=(
                f"Frontmatter canonical is boolean: {relative}"
                if isinstance(canonical_value, bool)
                else f"Frontmatter canonical must be boolean: {relative}"
            ),
        )
    )

    tags_value = parsed.get("tags")
    results.append(
        CheckResult(
            rule_id=f"frontmatter.tags.{relative}",
            passed=isinstance(tags_value, list) and len(tags_value) > 0,
            message=(
                f"Frontmatter tags present: {relative}"
                if isinstance(tags_value, list) and len(tags_value) > 0
                else f"Frontmatter tags must be a non-empty list: {relative}"
            ),
        )
    )

    adr_config = config["adr"]

    if relative.startswith(adr_config["pathPrefix"]):
        for field in adr_config["requiredFields"]:
            passed = field in parsed
            results.append(
                CheckResult(
                    rule_id=f"frontmatter.adr.field.{field}.{relative}",
                    passed=passed,
                    message=(
                        f"ADR field exists: {relative} -> {field}"
                        if passed
                        else f"Missing ADR field: {relative} -> {field}"
                    ),
                )
            )

        expected_status = adr_config["requiredStatus"]
        passed = status == expected_status
        results.append(
            CheckResult(
                rule_id=f"frontmatter.adr.status.{relative}",
                passed=passed,
                message=(
                    f"ADR status is accepted: {relative}"
                    if passed
                    else f"ADR status must be accepted: {relative} -> {status}"
                ),
            )
        )

    if "template" in tags_value if isinstance(tags_value, list) else False:
        template_field = config["templates"]["requiredField"]
        passed = template_field in parsed
        results.append(
            CheckResult(
                rule_id=f"frontmatter.template.field.{relative}",
                passed=passed,
                message=(
                    f"Template frontmatter field exists: {relative} -> {template_field}"
                    if passed
                    else f"Missing template frontmatter field: {relative} -> {template_field}"
                ),
            )
        )

    return results


def print_results(results: list[CheckResult]) -> int:
    failed = [result for result in results if not result.passed]

    print("Foundry Frontmatter Checker")
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
    config = load_json(root, "tools/config/frontmatter-required-fields.json")
    exempt_paths = set(config.get("exemptPaths", []))

    results: list[CheckResult] = []

    for path in iter_markdown_files(root, exempt_paths):
        results.extend(check_file(root, path, config))

    return print_results(results)


if __name__ == "__main__":
    sys.exit(main())