#!/usr/bin/env python3
"""
Foundry Markdown Section Checker

Validates required sections in important Foundry Markdown templates.
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


def extract_headings(path: Path) -> set[str]:
    headings: set[str] = set()
    heading_pattern = re.compile(r"^(#{1,6})\s+(.+?)\s*$")

    for line in path.read_text(encoding="utf-8").splitlines():
        match = heading_pattern.match(line)

        if not match:
            continue

        heading_text = match.group(2).strip()
        headings.add(heading_text)

    return headings


def check_sections(root: Path, config: dict[str, Any]) -> list[CheckResult]:
    results: list[CheckResult] = []

    for document in config["documents"]:
        relative_path = document["path"]
        path = root / relative_path

        exists = path.is_file()

        results.append(
            CheckResult(
                rule_id=f"markdown.sections.file-exists.{relative_path}",
                passed=exists,
                message=(
                    f"Markdown section target exists: {relative_path}"
                    if exists
                    else f"Markdown section target missing: {relative_path}"
                ),
            )
        )

        if not exists:
            continue

        headings = extract_headings(path)

        for section in document["requiredSections"]:
            passed = section in headings
            results.append(
                CheckResult(
                    rule_id=f"markdown.sections.required.{relative_path}.{section}",
                    passed=passed,
                    message=(
                        f"Required section present: {relative_path} -> {section}"
                        if passed
                        else f"Missing required section: {relative_path} -> {section}"
                    ),
                )
            )

    return results


def print_results(results: list[CheckResult]) -> int:
    failed = [result for result in results if not result.passed]

    print("Foundry Markdown Section Checker")
    print("===============================")
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
    config = load_json(root, "tools/config/markdown-required-sections.json")
    return print_results(check_sections(root, config))


if __name__ == "__main__":
    sys.exit(main())