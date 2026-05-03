---
id: WP-0056
title: Add Repo-Wide Validation Verification Gate
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0056
milestone: Runtime Hardening
recommended_commit: "test(work-packet): gate verification on repo-wide validation"
canonical: true
description: >
  Promote repo-wide work-packet validation from an available CLI command to a
  first-class repository verification gate used by local verification, CI, the
  repo-contract checker, and the evaluation harness.
audience:
  - maintainers
  - contributors
  - qa-reviewers
  - ci-maintainers
  - principal-engineering-reviewers
related_documents:
  - docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md
  - docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md
  - docs/work-packets/WP-0054-normalize-historical-work-packet-corpus.md
  - docs/work-packets/WP-0055-harden-frontmatter-parser-warning-behavior.md
affected_files:
  - docs/work-packets/WP-0056-add-repo-wide-validation-verification-gate.md
  - package.json
  - .github/workflows/ci.yml
  - tools/check-repo-contract.sh
  - tools/eval/cases/EVAL-0017-work-packet-repo-validation-gate.json
---

# WP-0056: Add Repo-Wide Validation Verification Gate

## 1. Purpose

Promote repo-wide work-packet validation from an available CLI command to a first-class repository verification gate.

WP-0052 added `validate-repo`. WP-0053 audited the actual repository. WP-0054 normalized historical work packets. WP-0055 reduced frontmatter warning noise. WP-0056 now makes repo-wide validation part of the local and CI verification contract.

## 2. Scope

WP-0056 includes:

- adding a root `verify:work-packets` script,
- updating root `verify` to run both repo-contract checks and repo-wide work-packet validation,
- adding an explicit CI step for repo-wide work-packet validation,
- updating repo-contract anchors to protect the new verification gate,
- adding an evaluation case for the gate.

## 3. Non-Goals

WP-0056 does not add:

- new work-packet validation rules,
- new CLI commands,
- recursive traversal,
- glob support,
- auto-fixing,
- deployment,
- package publishing,
- secrets,
- runtime background services.

## 4. Acceptance Criteria

WP-0056 is complete when:

- `bun run verify:work-packets` runs `bun run work-packet validate-repo`,
- `bun run verify` runs both repo-contract checks and repo-wide work-packet validation,
- CI includes an explicit repo-wide work-packet validation step,
- repo-contract checks protect the new script and CI step,
- the evaluation harness includes a case for the new gate,
- `bun run work-packet validate-repo` passes,
- no deployment or publishing behavior is added.

## 5. Verification Commands

Run from the repository root:

```bash
git status --short
git diff --check
bun run verify:work-packets
bun run verify
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
./tools/check-repo-contract.sh
bun run work-packet validate docs/work-packets/WP-0056-add-repo-wide-validation-verification-gate.md
bun run work-packet validate docs/work-packets/WP-0056-add-repo-wide-validation-verification-gate.md --format json
bun run work-packet validate-repo
bun run work-packet validate-repo --format json
git status --short
```

Do not claim verification passed unless the command output proves it.

## 6. Recommended Atomic Commit

If verification passes and the working tree contains only the intended WP-0056 changes, commit with:

```bash
git add \
  docs/work-packets/WP-0056-add-repo-wide-validation-verification-gate.md \
  package.json \
  .github/workflows/ci.yml \
  tools/check-repo-contract.sh \
  tools/eval/cases/EVAL-0017-work-packet-repo-validation-gate.json

git commit -m "test(work-packet): gate verification on repo-wide validation"
git push
```