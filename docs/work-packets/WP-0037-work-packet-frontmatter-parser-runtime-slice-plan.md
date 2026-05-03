---
title: "WP-0037: Work Packet Frontmatter Parser Runtime Slice Plan"
description: "Plans the next work-packet-core runtime slice: parsing work-packet Markdown frontmatter into normalized WorkPacketMetadata."
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
work_packet_id: "WP-0037"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md"
  - "docs/planning/13-work-packet-core-hardening.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0037-work-packet-frontmatter-parser-runtime-slice-plan.md"
  - "docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md"
recommended_commit: "docs(work-packet): plan frontmatter parser slice"
---

# WP-0037: Work Packet Frontmatter Parser Runtime Slice Plan

## 1. Purpose

This work packet plans the next runtime slice for `packages/work-packet-core`.

The next runtime capability should parse work-packet Markdown frontmatter into normalized `WorkPacketMetadata`.

This packet is planning-only.

It does not create parser code.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready after WP-0036 because:

1. runtime implementation has started;
2. `packages/work-packet-core` exists;
3. core validation has been hardened;
4. validation constants are exported;
5. validation tests exist;
6. evaluation harness coverage exists;
7. repo contract checks exist.

## 3. Scope

In scope:

1. create this work packet;
2. create `docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md`;
3. define parser scope;
4. define dependency decision;
5. define supported frontmatter subset;
6. define field mapping;
7. define parser result type;
8. define public API;
9. define files for WP-0038;
10. define parser behavior;
11. define validation integration;
12. define tests;
13. define evaluation harness updates;
14. define repo contract updates;
15. define security and runtime boundaries.

## 4. Non-Goals

Out of scope:

1. implementing `parseWorkPacketFrontmatter`;
2. implementing `hasWorkPacketFrontmatter`;
3. creating parser source files;
4. creating parser tests;
5. adding dependencies;
6. updating CI;
7. updating repo contract script;
8. updating evaluation harness cases;
9. adding CLI commands;
10. adding file walking;
11. adding database behavior;
12. adding vector retrieval;
13. adding agent runtime;
14. adding web UI;
15. adding API service;
16. adding deployment.

## 5. Planning Decision

The next runtime slice should be:

```text
WP-0038: Work Packet Frontmatter Parser Runtime Baseline
```

The package should remain:

```text
packages/work-packet-core/
```

The parser should be dependency-free in the first implementation.

## 6. Proposed Public API

WP-0038 should add:

```text
parseWorkPacketFrontmatter
hasWorkPacketFrontmatter
```

The parser should return:

```text
metadata
body
errors
warnings
```

## 7. Proposed File Scope for WP-0038

WP-0038 should create:

```text
packages/work-packet-core/src/work-packet-frontmatter.ts
packages/work-packet-core/src/work-packet-frontmatter.test.ts
tools/eval/cases/EVAL-0009-work-packet-frontmatter-parser.json
```

WP-0038 should modify:

```text
packages/work-packet-core/src/index.ts
packages/work-packet-core/README.md
tools/eval/README.md
tools/eval/cases/README.md
tools/check-repo-contract.sh
```

## 8. Proposed Verification Commands for WP-0038

WP-0038 should verify with:

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

1. `docs/work-packets/WP-0037-work-packet-frontmatter-parser-runtime-slice-plan.md` exists;
2. `docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md` exists;
3. the planning document identifies WP-0038 as the parser implementation packet;
4. the planning document states the parser should be dependency-free;
5. the planning document defines supported frontmatter subset;
6. the planning document defines field mapping;
7. the planning document defines parser behavior;
8. the planning document defines parser tests;
9. the planning document defines evaluation harness strategy;
10. the planning document defines repo contract strategy;
11. no parser source is created;
12. no dependencies are added;
13. local verification passes.

## 10. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0037-work-packet-frontmatter-parser-runtime-slice-plan.md && \
test -f docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
grep -q '^# Work Packet Frontmatter Parser Runtime Slice Plan$' docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
grep -q 'WP-0038: Work Packet Frontmatter Parser Runtime Baseline' docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
grep -q 'parseWorkPacketFrontmatter' docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
grep -q 'hasWorkPacketFrontmatter' docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
grep -q 'dependency-free' docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
grep -q 'recommended_commit' docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md && \
test ! -f packages/work-packet-core/src/work-packet-frontmatter.ts && \
test ! -f packages/work-packet-core/src/work-packet-frontmatter.test.ts && \
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
docs(work-packet): plan frontmatter parser slice
```

## 13. Follow-Up Work

Recommended next work:

```text
WP-0038: Work Packet Frontmatter Parser Runtime Baseline
```

Recommended commit for WP-0038:

```text
feat(work-packet): add frontmatter parser
```
