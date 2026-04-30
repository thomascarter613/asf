#!/usr/bin/env python3
"""
Foundry JSONL Checker

Validates JSON Lines event logs used by the Agentic Software Foundry.
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


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def load_json(root: Path, relative_path: str) -> Any:
    with (root / relative_path).open("r", encoding="utf-8") as file:
        return json.load(file)


def validate_event_log(root: Path, path: Path, config: dict[str, Any]) -> list[CheckResult]:
    results: list[CheckResult] = []
    required_fields = set(config["requiredFields"])
    allowed_severities = set(config["allowedSeverities"])
    event_ids: set[str] = set()

    if not path.exists():
        return [
            CheckResult(
                rule_id="jsonl.exists",
                passed=False,
                message=f"Missing JSONL file: {path}",
            )
        ]

    lines = path.read_text(encoding="utf-8").splitlines()

    for line_number, line in enumerate(lines, start=1):
        stripped = line.strip()

        if not stripped:
            continue

        try:
            value = json.loads(stripped)
            results.append(
                CheckResult(
                    rule_id=f"jsonl.syntax.line-{line_number}",
                    passed=True,
                    message=f"JSONL line parses: {path}:{line_number}",
                )
            )
        except json.JSONDecodeError as error:
            results.append(
                CheckResult(
                    rule_id=f"jsonl.syntax.line-{line_number}",
                    passed=False,
                    message=(
                        f"Invalid JSON at {path}:{line_number}: "
                        f"line {error.lineno}, column {error.colno}: {error.msg}"
                    ),
                )
            )
            continue

        if not isinstance(value, dict):
            results.append(
                CheckResult(
                    rule_id=f"jsonl.object.line-{line_number}",
                    passed=False,
                    message=f"Event must be a JSON object: {path}:{line_number}",
                )
            )
            continue

        missing_fields = sorted(required_fields - set(value.keys()))

        results.append(
            CheckResult(
                rule_id=f"jsonl.fields.line-{line_number}",
                passed=not missing_fields,
                message=(
                    f"Required event fields present: {path}:{line_number}"
                    if not missing_fields
                    else (
                        f"Missing required event fields at {path}:{line_number}: "
                        f"{', '.join(missing_fields)}"
                    )
                ),
            )
        )

        event_id = value.get("eventId")

        if isinstance(event_id, str):
            duplicate = event_id in event_ids
            event_ids.add(event_id)

            results.append(
                CheckResult(
                    rule_id=f"jsonl.event-id.unique.{event_id}",
                    passed=not duplicate,
                    message=(
                        f"Event ID unique: {event_id}"
                        if not duplicate
                        else f"Duplicate event ID detected: {event_id}"
                    ),
                )
            )

        severity = value.get("severity")

        results.append(
            CheckResult(
                rule_id=f"jsonl.severity.line-{line_number}",
                passed=severity in allowed_severities,
                message=(
                    f"Event severity allowed: {severity}"
                    if severity in allowed_severities
                    else f"Invalid event severity at {path}:{line_number}: {severity}"
                ),
            )
        )

        related_artifacts = value.get("relatedArtifacts")

        if isinstance(related_artifacts, list):
            for index, artifact in enumerate(related_artifacts):
                if not isinstance(artifact, str):
                    results.append(
                        CheckResult(
                            rule_id=f"jsonl.related-artifact.type.line-{line_number}.{index}",
                            passed=False,
                            message=(
                                f"relatedArtifacts entry must be string at "
                                f"{path}:{line_number}[{index}]"
                            ),
                        )
                    )
                    continue

                exists = (root / artifact).exists()

                results.append(
                    CheckResult(
                        rule_id=f"jsonl.related-artifact.exists.line-{line_number}.{index}",
                        passed=exists,
                        message=(
                            f"Related artifact exists: {artifact}"
                            if exists
                            else f"Related artifact missing: {artifact}"
                        ),
                    )
                )
        else:
            results.append(
                CheckResult(
                    rule_id=f"jsonl.related-artifacts.array.line-{line_number}",
                    passed=False,
                    message=f"relatedArtifacts must be an array at {path}:{line_number}",
                )
            )

    return results


def print_results(results: list[CheckResult]) -> int:
    failed = [result for result in results if not result.passed]

    print("Foundry JSONL Checker")
    print("====================")
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
    config = load_json(root, "tools/config/jsonl-event-required-fields.json")

    if len(sys.argv) > 1:
        targets = [Path(argument) for argument in sys.argv[1:]]
    else:
        targets = [Path(".foundry/events/events.jsonl")]

    results: list[CheckResult] = []

    for target in targets:
        path = target if target.is_absolute() else root / target
        results.extend(validate_event_log(root, path, config))

    return print_results(results)


if __name__ == "__main__":
    sys.exit(main())