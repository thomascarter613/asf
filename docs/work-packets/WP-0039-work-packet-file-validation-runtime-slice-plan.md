---
title: "WP-0039: Work Packet File Validation Runtime Slice Plan"
description: "Plans the next work-packet-core runtime slice: validating a full work-packet Markdown document by composing frontmatter parsing, metadata validation, and Markdown section validation."
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
work_packet_id: "WP-0039"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/15-work-packet-file-validation-runtime-slice-plan.md"
  - "docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-frontmatter.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0039-work-packet-file-validation-runtime-slice-plan.md"
  - "docs/planning/15-work-packet-file-validation-runtime-slice-plan.md"
recommended_commit: "docs(work-packet): plan document validation slice"
---

# WP-0039: Work Packet File Validation Runtime Slice Plan

## 1. Purpose

This work packet plans the next runtime slice for `packages/work-packet-core`.

The next capability should validate a full work-packet Markdown document by composing:

1. `parseWorkPacketFrontmatter`;
2. `validateWorkPacketMetadata`;
3. `validateWorkPacketMarkdown`.

This packet is planning-only.

It does not create document validator code.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready after WP-0038 because:

1. runtime implementation has started;
2. `packages/work-packet-core` exists;
3. metadata validation exists;
4. Markdown validation exists;
5. frontmatter parsing exists;
6. package tests exist;
7. evaluation harness coverage exists;
8. repo contract checks exist.

## 3. Scope

In scope:

1. create this work packet;
2. create `docs/planning/15-work-packet-file-validation-runtime-slice-plan.md`;
3. define document validation scope;
4. define proposed public API;
5. define proposed result type;
6. define files for WP-0040;
7. define validator behavior;
8. define validation composition;
9. define tests;
10. define evaluation harness updates;
11. define repo contract updates;
12. define security and runtime boundaries.

## 4. Non-Goals

Out of scope:

1. implementing `validateWorkPacketDocument`;
2. creating document validator source files;
3. creating document validator tests;
4. adding dependencies;
5. updating CI;
6. updating repo contract script;
7. updating evaluation harness cases;
8. adding CLI commands;
9. adding file walking;
10. adding database behavior;
11. adding vector retrieval;
12. adding agent runtime;
13. adding web UI;
14. adding API service;
15. adding deployment.

## 5. Planning Decision

The next runtime slice should be:

```text
WP-0040: Work Packet File Validation Runtime Baseline
```

The package should remain:

```text
packages/work-packet-core/
```

The validator should be dependency-free and should validate caller-provided Markdown strings only.

## 6. Proposed Public API

WP-0040 should add:

```text
validateWorkPacketDocument
```

The validator should return:

```text
valid
metadata
body
errors
warnings
```

## 7. Proposed File Scope for WP-0040

WP-0040 should create:

```text
packages/work-packet-core/src/work-packet-document.ts
packages/work-packet-core/src/work-packet-document.test.ts
tools/eval/cases/EVAL-0010-work-packet-document-validation.json
```

WP-0040 should modify:

```text
packages/work-packet-core/src/index.ts
packages/work-packet-core/README.md
tools/eval/README.md
tools/eval/cases/README.md
tools/check-repo-contract.sh
```

## 8. Proposed Verification Commands for WP-0040

WP-0040 should verify with:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

## 9. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0039-work-packet-file-validation-runtime-slice-plan.md` exists;
2. `docs/planning/15-work-packet-file-validation-runtime-slice-plan.md` exists;
3. the planning document identifies WP-0040 as the document validator implementation packet;
4. the planning document states the validator should be dependency-free;
5. the planning document defines validation composition;
6. the planning document defines result type;
7. the planning document defines validator behavior;
8. the planning document defines validator tests;
9. the planning document defines evaluation harness strategy;
10. the planning document defines repo contract strategy;
11. no document validator source is created;
12. no dependencies are added;
13. local verification passes.

## 10. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0039-work-packet-file-validation-runtime-slice-plan.md && \
test -f docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q '^# Work Packet File Validation Runtime Slice Plan$' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q 'WP-0040: Work Packet File Validation Runtime Baseline' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q 'validateWorkPacketDocument' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q 'parseWorkPacketFrontmatter' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q 'validateWorkPacketMetadata' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q 'validateWorkPacketMarkdown' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
grep -q 'dependency-free' docs/planning/15-work-packet-file-validation-runtime-slice-plan.md && \
test ! -f packages/work-packet-core/src/work-packet-document.ts && \
test ! -f packages/work-packet-core/src/work-packet-document.test.ts && \
bun test packages/work-packet-core && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 11. Security and Privacy Notes

This packet is documentation-only.

It must not introduce:

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

## 12. Recommended Atomic Commit

```text
docs(work-packet): plan document validation slice
```

## 13. Follow-Up Work

Recommended next work:

```text
WP-0040: Work Packet File Validation Runtime Baseline
```

Recommended commit for WP-0040:

```text
feat(work-packet): add document validator
```
