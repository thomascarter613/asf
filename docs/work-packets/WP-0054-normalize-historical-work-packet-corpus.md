---
id: WP-0054
title: Normalize Historical Work-Packet Corpus
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0054
milestone: Runtime Hardening
recommended_commit: "docs(work-packet): normalize historical work-packet corpus"
canonical: true
description: >
  Normalize historical work-packet documents so the actual repository corpus can
  pass repo-wide work-packet validation before the validate-repo command becomes
  a CI or repo-contract gate.
audience:
  - maintainers
  - contributors
  - qa-reviewers
  - ci-maintainers
  - principal-engineering-reviewers
related_documents:
  - docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md
  - docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md
affected_files:
  - docs/work-packets/WP-0001-work-packet-template.md
  - docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
  - docs/work-packets/WP-0003-domain-model-baseline.md
  - docs/work-packets/WP-0004-planning-baseline.md
  - docs/work-packets/WP-0005-repository-verification-baseline.md
  - docs/work-packets/WP-0006-adr-index-normalization-review.md
  - docs/work-packets/WP-0007-repo-contract-testing-baseline.md
  - docs/work-packets/WP-0008-context-continuity-baseline.md
  - docs/work-packets/WP-0009-root-readme-baseline.md
  - docs/work-packets/WP-0010-architecture-overview-placement-review.md
  - docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
  - docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
  - docs/work-packets/WP-0013-persistence-adr-overlap-review.md
  - docs/work-packets/WP-0014-executable-repo-contract-script.md
  - docs/work-packets/WP-0015-evaluation-harness-baseline.md
  - docs/work-packets/WP-0016-repo-contract-script-baseline-update.md
  - docs/work-packets/WP-0017-current-state-and-readme-status-update.md
  - docs/work-packets/WP-0018-implementation-readiness-planning.md
  - docs/work-packets/WP-0019-package-and-tooling-baseline.md
  - docs/work-packets/WP-0020-repo-contract-script-readiness-update.md
  - docs/work-packets/WP-0022-package-manager-adr-correction.md
  - docs/work-packets/WP-0026-ci-workflow-baseline.md
  - docs/work-packets/WP-0047-work-packet-cli-status-and-hardening-review.md
  - docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
---

# WP-0054: Normalize Historical Work-Packet Corpus

## 1. Purpose

Normalize the historical ASF work-packet corpus so the actual repository can pass repo-wide work-packet validation.

WP-0053 confirmed that `bun run work-packet validate-repo` works against the real repository, but the historical corpus contains older packets that predate the current validation contract.

This packet fixes the historical documents rather than weakening the validator.

## 2. Scope

WP-0054 includes:

- adding missing `Verification Commands` sections to historical work packets,
- adding missing `Recommended Atomic Commit` sections where absent,
- adding missing `Scope` sections where absent,
- adding missing `Non-Goals` sections where absent,
- normalizing invalid `status` values in historical work-packet frontmatter,
- adding missing `recommended_commit` values where older frontmatter used a non-canonical field,
- preserving historical document intent,
- avoiding runtime code changes.

The goal is for repo-wide validation to report no validation errors for the repository work-packet corpus.

## 3. Non-Goals

WP-0054 does not add:

- new runtime behavior,
- new CLI commands,
- new validator rules,
- new discovery rules,
- CI enforcement,
- repo-contract enforcement,
- automatic fixing inside the committed product runtime,
- parser warning hardening,
- YAML parser replacement,
- recursive traversal,
- glob support.

Parser warning cleanup is intentionally deferred to a later packet.

## 4. Audit Baseline

WP-0053 observed the following repo-wide validation baseline:

```text
Discovered Files: 53
Validated Files: 53
Valid Files: 29
Invalid Files: 24
Errors: 34
Warnings: 32
```

The failures were concentrated in historical packets that predated the current work-packet validation contract.

## 5. Normalization Strategy

The normalization strategy is conservative.

For each historical work packet, this packet should:

1. Preserve existing frontmatter where possible.
2. Preserve existing prose where possible.
3. Add missing required sections at the end of the document.
4. Use existing `recommended_commit` metadata where available.
5. Use existing `commit` metadata as the source for `recommended_commit` where needed.
6. Use `status: ready` when an older packet uses a status value not accepted by the runtime validator.
7. Avoid rewriting historical narrative content unless necessary for validation.

## 6. Required Sections

The runtime validator requires these sections:

```text
Purpose
Scope
Non-Goals
Acceptance Criteria
Verification Commands
Recommended Atomic Commit
```

Historical packets that are missing one or more required sections should receive concise normalization sections.

## 7. Parser Warnings Deferred

The WP-0053 audit also revealed parser warnings for richer ASF metadata and YAML continuation lines.

Those warnings should not be addressed in this packet unless they are required to eliminate validation errors.

A later packet should harden the dependency-free frontmatter parser so known ASF metadata fields and accepted list/folded-block patterns do not produce warning noise.

## 8. Acceptance Criteria

WP-0054 is complete when:

- this work packet exists,
- historical work packets with missing required sections are normalized,
- historical work packets with invalid statuses are normalized,
- historical work packets missing canonical `recommended_commit` metadata are normalized,
- `bun run work-packet validate-repo` exits successfully,
- `bun run work-packet validate-repo --format json` reports `"valid": true`,
- no runtime code changes are included,
- repository verification passes before commit.

## 9. Verification Commands

Run from the repository root:

```bash
git status --short
git diff --check
bun run work-packet validate docs/work-packets/WP-0054-normalize-historical-work-packet-corpus.md
bun run work-packet validate docs/work-packets/WP-0054-normalize-historical-work-packet-corpus.md --format json
bun run work-packet validate-repo
bun run work-packet validate-repo --format json
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git status --short
```

Do not claim verification passed unless the command output proves it.

## 10. Recommended Atomic Commit

If verification passes and the working tree contains only intended work-packet corpus normalization changes, commit with:

```bash
git add docs/work-packets
git commit -m "docs(work-packet): normalize historical work-packet corpus"
git push
```
