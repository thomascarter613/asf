#!/usr/bin/env python3
"""
Foundry Local State Checker

Validates that the Agentic Software Foundry's local state and AI handoff
documents are present, internally usable, and aligned enough for a fresh
session to continue work safely.

This checker intentionally uses only the Python standard library.
"""

from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class CheckResult:
    rule_id: str
    passed: bool
    message: str


REQUIRED_LOCAL_STATE_FILES = [
    ".foundry/state/latest-status.md",
    "docs/ai/CURRENT_STATE.md",
    "docs/ai/BOOTSTRAP_PROMPT.md",
    "docs/ai/FRESH_CHAT_HANDOFF.md",
]

PREFERRED_ACTIVE_HANDOFF = (
    ".charon/daedalus/handoff-packets/handoff-0005-chat-session-transfer.md"
)

ACCEPTABLE_ACTIVE_HANDOFFS = [
    ".charon/daedalus/handoff-packets/handoff-0005-chat-session-transfer.md",
    ".charon/daedalus/handoff-packets/handoff-0004-tooling-baseline.md",
    ".charon/daedalus/handoff-packets/handoff-0003-v1-mvp-complete.md",
]


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def extract_frontmatter(content: str) -> dict[str, str]:
    """
    Extract a small YAML-frontmatter subset without depending on PyYAML.

    This intentionally supports the scalar fields this repo currently needs:
    title, description, status, version, created, updated, owner, canonical.
    List values like tags are ignored by this checker.
    """
    lines = content.splitlines()

    if not lines or lines[0] != "---":
        return {}

    frontmatter: dict[str, str] = {}

    for line in lines[1:]:
        if line == "---":
            break

        if not line.strip():
            continue

        if line.startswith(" ") or line.startswith("-"):
            continue

        if ":" not in line:
            continue

        key, value = line.split(":", 1)
        frontmatter[key.strip()] = value.strip().strip('"').strip("'")

    return frontmatter


def check_required_files(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for relative_path in REQUIRED_LOCAL_STATE_FILES:
        path = root / relative_path
        passed = path.is_file()

        results.append(
            CheckResult(
                rule_id=f"local-state.required-file.{relative_path}",
                passed=passed,
                message=(
                    f"Required local state file exists: {relative_path}"
                    if passed
                    else f"Missing required local state file: {relative_path}"
                ),
            )
        )

    return results


def check_frontmatter(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for relative_path in REQUIRED_LOCAL_STATE_FILES:
        path = root / relative_path

        if not path.is_file():
            results.append(
                CheckResult(
                    rule_id=f"local-state.frontmatter.{relative_path}",
                    passed=False,
                    message=f"Cannot check frontmatter because file is missing: {relative_path}",
                )
            )
            continue

        content = read_text(path)
        frontmatter = extract_frontmatter(content)
        passed = bool(frontmatter)

        results.append(
            CheckResult(
                rule_id=f"local-state.frontmatter.{relative_path}",
                passed=passed,
                message=(
                    f"Frontmatter present: {relative_path}"
                    if passed
                    else f"Frontmatter missing or malformed: {relative_path}"
                ),
            )
        )

    return results


def check_status_active(root: Path) -> list[CheckResult]:
    results: list[CheckResult] = []

    for relative_path in REQUIRED_LOCAL_STATE_FILES:
        path = root / relative_path

        if not path.is_file():
            continue

        frontmatter = extract_frontmatter(read_text(path))
        status = frontmatter.get("status")
        passed = status == "active"

        results.append(
            CheckResult(
                rule_id=f"local-state.status-active.{relative_path}",
                passed=passed,
                message=(
                    f"Document status is active: {relative_path}"
                    if passed
                    else f"Document status should be active: {relative_path}; got {status!r}"
                ),
            )
        )

    return results


def check_active_handoff_exists(root: Path) -> list[CheckResult]:
    existing = [
        relative_path
        for relative_path in ACCEPTABLE_ACTIVE_HANDOFFS
        if (root / relative_path).is_file()
    ]

    preferred_exists = (root / PREFERRED_ACTIVE_HANDOFF).is_file()

    return [
        CheckResult(
            rule_id="local-state.active-handoff.exists",
            passed=bool(existing),
            message=(
                f"At least one acceptable active handoff exists: {', '.join(existing)}"
                if existing
                else (
                    "No acceptable active handoff exists. Expected one of: "
                    + ", ".join(ACCEPTABLE_ACTIVE_HANDOFFS)
                )
            ),
        ),
        CheckResult(
            rule_id="local-state.active-handoff.preferred",
            passed=preferred_exists,
            message=(
                f"Preferred active handoff exists: {PREFERRED_ACTIVE_HANDOFF}"
                if preferred_exists
                else (
                    "Preferred active handoff is missing: "
                    f"{PREFERRED_ACTIVE_HANDOFF}"
                )
            ),
        ),
    ]


def check_handoff_mentions_verification(root: Path) -> list[CheckResult]:
    path = root / "docs/ai/FRESH_CHAT_HANDOFF.md"

    if not path.is_file():
        return [
            CheckResult(
                rule_id="local-state.fresh-handoff.verification-command",
                passed=False,
                message="Cannot check verification command because docs/ai/FRESH_CHAT_HANDOFF.md is missing.",
            )
        ]

    content = read_text(path)

    mentions_verify = "tools/scripts/verify.sh" in content
    mentions_expected = "All local verification checks passed" in content

    return [
        CheckResult(
            rule_id="local-state.fresh-handoff.verification-command",
            passed=mentions_verify,
            message=(
                "Fresh handoff mentions tools/scripts/verify.sh"
                if mentions_verify
                else "Fresh handoff does not mention tools/scripts/verify.sh"
            ),
        ),
        CheckResult(
            rule_id="local-state.fresh-handoff.expected-result",
            passed=mentions_expected,
            message=(
                "Fresh handoff mentions expected verification success output"
                if mentions_expected
                else "Fresh handoff does not mention expected verification success output"
            ),
        ),
    ]


def check_no_stale_milestone_zero_claim(root: Path) -> list[CheckResult]:
    """
    Guard against the known drift where README/docs still claimed Milestone 0
    after the repo had advanced to post-v1 work.
    """
    files_to_check = [
        "README.md",
        "docs/README.md",
        "docs/ai/CURRENT_STATE.md",
        ".foundry/state/latest-status.md",
    ]

    stale_pattern = re.compile(r"Current milestone:\s*```text\s*Milestone 0", re.IGNORECASE)

    results: list[CheckResult] = []

    for relative_path in files_to_check:
        path = root / relative_path

        if not path.is_file():
            results.append(
                CheckResult(
                    rule_id=f"local-state.no-stale-milestone-zero.{relative_path}",
                    passed=False,
                    message=f"Cannot check stale milestone claim because file is missing: {relative_path}",
                )
            )
            continue

        content = read_text(path)
        stale = bool(stale_pattern.search(content))

        results.append(
            CheckResult(
                rule_id=f"local-state.no-stale-milestone-zero.{relative_path}",
                passed=not stale,
                message=(
                    f"No stale Milestone 0 current-status claim found: {relative_path}"
                    if not stale
                    else f"Stale Milestone 0 current-status claim found: {relative_path}"
                ),
            )
        )

    return results


def print_results(results: list[CheckResult]) -> int:
    failed = [result for result in results if not result.passed]

    print("Foundry Local State Checker")
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


def run_checks() -> list[CheckResult]:
    root = repo_root()

    results: list[CheckResult] = []
    results.extend(check_required_files(root))
    results.extend(check_frontmatter(root))
    results.extend(check_status_active(root))
    results.extend(check_active_handoff_exists(root))
    results.extend(check_handoff_mentions_verification(root))
    results.extend(check_no_stale_milestone_zero_claim(root))

    return results


def main() -> int:
    return print_results(run_checks())


if __name__ == "__main__":
    sys.exit(main())
