---
title: "WP-0036: Work Packet Core Hardening"
description: "Hardens the first runtime package by strengthening validation constants, validation behavior, tests, evaluation coverage, and repo-contract anchors without adding dependencies or broadening runtime scope."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0036"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/13-work-packet-core-hardening.md"
  - "docs/planning/12-runtime-status-and-verification-hardening-review.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-validation.test.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0036-work-packet-core-hardening.md"
  - "docs/planning/13-work-packet-core-hardening.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-validation.test.ts"
  - "tools/eval/README.md"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0008-work-packet-core-validation-behavior.json"
  - "tools/check-repo-contract.sh"
recommended_commit: "test(work-packet): harden core validation coverage"
---

# WP-0036: Work Packet Core Hardening

## 1. Purpose

This work packet hardens the first runtime package:

```text
packages/work-packet-core/
```

It strengthens validation behavior, test coverage, evaluation harness coverage, and repo-contract anchors.

This packet does not add a new runtime feature area.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. runtime implementation has started;
2. the bounded work-packet core package exists;
3. package tests exist;
4. local verification exists;
5. CI verification exists;
6. the repo contract checks the package baseline;
7. the executable evaluation harness checks the package baseline.

## 3. Scope

In scope:

1. export `WORK_PACKET_ID_PATTERN`;
2. export `REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS`;
3. strengthen Markdown validation edge cases;
4. strengthen metadata validation edge cases;
5. expand tests;
6. add evaluation harness case `EVAL-0008`;
7. update repo contract anchors;
8. update package/evaluation documentation.

## 4. Non-Goals

Out of scope:

1. YAML frontmatter parsing;
2. file loading;
3. CLI implementation;
4. dependencies;
5. schema libraries;
6. workflow engine behavior;
7. agent runtime behavior;
8. database behavior;
9. API behavior;
10. UI behavior;
11. deployment behavior;
12. package publishing behavior.

## 5. Acceptance Criteria

This packet is complete when:

1. `WORK_PACKET_ID_PATTERN` is exported.
2. `REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS` is exported.
3. whitespace-only metadata fields fail validation.
4. lowercase work-packet IDs fail validation.
5. whitespace-only Markdown fails validation.
6. unnumbered required Markdown headings pass validation.
7. validation tests cover hardened behavior.
8. `EVAL-0008-work-packet-core-validation-behavior.json` exists.
9. repo contract checks hardened validation anchors.
10. `bun test packages/work-packet-core` passes.
11. `bash tools/eval/run-evaluations.sh` passes.
12. `bun run verify` passes.
13. `./tools/check-repo-contract.sh` passes.
14. `git diff --check` passes.
15. no dependencies are added.
16. runtime scope remains bounded.

## 6. Verification Commands

Run:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Do not claim verification passed unless these commands were actually run.

## 7. Security and Privacy Notes

This packet must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. `.env` values;
5. private keys;
6. network calls;
7. deployment credentials;
8. package publishing credentials;
9. cloud credentials;
10. external dependencies.

## 8. Recommended Atomic Commit

```text
test(work-packet): harden core validation coverage
```

## 9. Follow-Up Work

Recommended next work:

```text
WP-0037: Work Packet Frontmatter Parser Runtime Slice Plan
```

Rationale:

1. the first runtime package exists;
2. core validation is hardened;
3. the next useful capability is parsing Markdown frontmatter into metadata;
4. parser planning should happen before implementation.