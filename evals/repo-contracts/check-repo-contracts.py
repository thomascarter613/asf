#!/usr/bin/env python3
"""
Foundry Repo Contract Checker

This script validates the initial repository contract for the Agentic Software
Foundry using only the Python standard library.

It checks:

1. required paths;
2. forbidden paths;
3. required manifest fields;
4. expected manifest values;
5. required array membership;
6. manifest path references;
7. Markdown frontmatter;
8. JSON syntax.

Run from the repository root:

    python evals/repo-contracts/check-repo-contracts.py
"""

from __future__ import annotations

import json
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any


@dataclass(frozen=True)
class CheckResult:
    rule_id: str
    passed: bool
    message: str


MISSING = object()


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def load_json(root: Path, relative_path: str) -> Any:
    path = root / relative_path
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def get_by_dot_path(data: Any, dot_path: str) -> Any:
    current = data

    for part in dot_path.split("."):
        if isinstance(current, dict) and part in current:
            current = current[part]
        else:
            return MISSING

    return current


def iter_repo_paths(root: Path) -> list[Path]:
    ignored_segments = {
        ".git",
        "__pycache__",
    }

    paths: list[Path] = []

    for path in root.rglob("*"):
        relative = path.relative_to(root)

        if any(segment in ignored_segments for segment in relative.parts):
            continue

        paths.append(relative)

    return paths


def check_required_paths(root: Path) -> list[CheckResult]:
    contract = load_json(root, "evals/repo-contracts/required-paths.json")
    results: list[CheckResult] = []

    for entry in contract.get("requiredPaths", []):
        rule_id = entry["id"]
        relative_path = entry["path"]
        expected_type = entry.get("type", "any")
        path = root / relative_path

        if expected_type == "file":
            passed = path.is_file()
            expected = "file"
        elif expected_type == "directory":
            passed = path.is_dir()
            expected = "directory"
        else:
            passed = path.exists()
            expected = "path"

        results.append(
            CheckResult(
                rule_id=rule_id,
                passed=passed,
                message=(
                    f"Required {expected} exists: {relative_path}"
                    if passed
                    else f"Missing required {expected}: {relative_path}"
                ),
            )
        )

    return results


def forbidden_path_detected(
    relative_path: Path,
    forbidden_value: str,
    match_type: str,
) -> bool:
    relative_text = relative_path.as_posix()

    if match_type == "exact":
        return relative_text == forbidden_value

    if match_type == "suffix":
        return relative_text.endswith(forbidden_value)

    if match_type == "contains-path-segment":
        return forbidden_value in relative_path.parts

    if match_type == "contains":
        return forbidden_value in relative_text

    raise ValueError(f"Unknown forbidden path match type: {match_type}")


def check_forbidden_paths(root: Path) -> list[CheckResult]:
    contract = load_json(root, "evals/repo-contracts/forbidden-paths.json")
    repo_paths = iter_repo_paths(root)
    results: list[CheckResult] = []

    for entry in contract.get("forbiddenPaths", []):
        rule_id = entry["id"]
        forbidden_value = entry["path"]
        match_type = entry.get("match", "exact")

        matches = [
            path
            for path in repo_paths
            if forbidden_path_detected(path, forbidden_value, match_type)
        ]

        passed = len(matches) == 0

        if passed:
            message = f"Forbidden path not present: {forbidden_value}"
        else:
            matched = ", ".join(path.as_posix() for path in matches[:10])
            if len(matches) > 10:
                matched += f", and {len(matches) - 10} more"
            message = f"Forbidden path detected for {forbidden_value}: {matched}"

        results.append(
            CheckResult(
                rule_id=rule_id,
                passed=passed,
                message=message,
            )
        )

    return results


def check_manifest_fields(root: Path) -> list[CheckResult]:
    contract = load_json(root, "evals/repo-contracts/required-manifest-fields.json")
    manifest_path = contract["manifestPath"]
    manifest = load_json(root, manifest_path)
    results: list[CheckResult] = []

    for entry in contract.get("requiredFields", []):
        rule_id = entry["id"]
        dot_path = entry["path"]
        value = get_by_dot_path(manifest, dot_path)
        passed = value is not MISSING

        results.append(
            CheckResult(
                rule_id=rule_id,
                passed=passed,
                message=(
                    f"Manifest field exists: {dot_path}"
                    if passed
                    else f"Missing manifest field: {dot_path}"
                ),
            )
        )

    for entry in contract.get("expectedValues", []):
        rule_id = entry["id"]
        dot_path = entry["path"]
        expected = entry["equals"]
        actual = get_by_dot_path(manifest, dot_path)
        passed = actual == expected

        results.append(
            CheckResult(
                rule_id=rule_id,
                passed=passed,
                message=(
                    f"Manifest value matches: {dot_path} = {expected!r}"
                    if passed
                    else (
                        f"Manifest value mismatch: {dot_path}; "
                        f"expected {expected!r}, got {actual!r}"
                    )
                ),
            )
        )

    for entry in contract.get("requiredArrayIncludes", []):
        rule_id = entry["id"]
        dot_path = entry["path"]
        required_value = entry["includes"]
        actual = get_by_dot_path(manifest, dot_path)
        passed = isinstance(actual, list) and required_value in actual

        results.append(
            CheckResult(
                rule_id=rule_id,
                passed=passed,
                message=(
                    f"Manifest array includes {required_value!r}: {dot_path}"
                    if passed
                    else (
                        f"Manifest array missing {required_value!r}: "
                        f"{dot_path}; got {actual!r}"
                    )
                ),
            )
        )

    for entry in contract.get("requiredPathReferences", []):
        rule_id = entry["id"]
        dot_path = entry["path"]
        referenced_path = get_by_dot_path(manifest, dot_path)
        passed = isinstance(referenced_path, str) and (root / referenced_path).exists()

        results.append(
            CheckResult(
                rule_id=rule_id,
                passed=passed,
                message=(
                    f"Manifest path reference exists: {dot_path} -> {referenced_path}"
                    if passed
                    else (
                        f"Manifest path reference missing or invalid: "
                        f"{dot_path} -> {referenced_path!r}"
                    )
                ),
            )
        )

    return results


def check_markdown_frontmatter(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for path in sorted(root.rglob("*.md")):
        relative = path.relative_to(root)

        if ".git" in relative.parts:
            continue

        with path.open("r", encoding="utf-8") as file:
            first_line = file.readline().rstrip("\n")

        passed = first_line == "---"

        results.append(
            CheckResult(
                rule_id=f"markdown.frontmatter.{relative.as_posix()}",
                passed=passed,
                message=(
                    f"Markdown frontmatter present: {relative.as_posix()}"
                    if passed
                    else f"Markdown frontmatter missing: {relative.as_posix()}"
                ),
            )
        )

    return results


def check_json_syntax(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for path in sorted(root.rglob("*.json")):
        relative = path.relative_to(root)

        if ".git" in relative.parts:
            continue

        try:
            with path.open("r", encoding="utf-8") as file:
                json.load(file)

            results.append(
                CheckResult(
                    rule_id=f"json.syntax.{relative.as_posix()}",
                    passed=True,
                    message=f"JSON parses: {relative.as_posix()}",
                )
            )
        except json.JSONDecodeError as error:
            results.append(
                CheckResult(
                    rule_id=f"json.syntax.{relative.as_posix()}",
                    passed=False,
                    message=(
                        f"JSON parse failed: {relative.as_posix()} "
                        f"line {error.lineno}, column {error.colno}: {error.msg}"
                    ),
                )
            )

    return results


def run_checks() -> list[CheckResult]:
    root = repo_root()

    checks: list[CheckResult] = []

    checks.extend(check_required_paths(root))
    checks.extend(check_forbidden_paths(root))
    checks.extend(check_manifest_fields(root))
    checks.extend(check_markdown_frontmatter(root))
    checks.extend(check_json_syntax(root))

    return checks


def print_results(results: list[CheckResult]) -> int:
    passed_count = 0
    failed_count = 0

    print("Foundry Repo Contract Checker")
    print("=============================")
    print()

    for result in results:
        marker = "PASS" if result.passed else "FAIL"

        if result.passed:
            passed_count += 1
        else:
            failed_count += 1

        print(f"[{marker}] {result.rule_id}")
        print(f"       {result.message}")

    print()
    print("Summary")
    print("-------")
    print(f"Passed: {passed_count}")
    print(f"Failed: {failed_count}")
    print(f"Total:  {len(results)}")

    return 0 if failed_count == 0 else 1


def main() -> int:
    try:
        return print_results(run_checks())
    except FileNotFoundError as error:
        print("Foundry Repo Contract Checker")
        print("=============================")
        print()
        print(f"[FAIL] required.contract-file")
        print(f"       Missing file: {error.filename}")
        return 1
    except ValueError as error:
        print("Foundry Repo Contract Checker")
        print("=============================")
        print()
        print(f"[FAIL] contract.value-error")
        print(f"       {error}")
        return 1


if __name__ == "__main__":
    sys.exit(main())

