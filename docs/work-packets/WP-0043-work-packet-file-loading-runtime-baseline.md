---
title: "WP-0043: Work Packet File Loading Runtime Baseline"
description: "Adds dependency-free work-packet file loading and file validation to the work-packet core runtime package."
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
work_packet_id: "WP-0043"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/17-work-packet-file-loading-runtime-slice-plan.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-document.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-file.ts"
  - "packages/work-packet-core/src/work-packet-file.test.ts"
  - "tools/eval/README.md"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0011-work-packet-file-loading.json"
  - "tools/check-repo-contract.sh"
recommended_commit: "feat(work-packet): add file validation"
---

# WP-0043: Work Packet File Loading Runtime Baseline

## 1. Purpose

This work packet adds dependency-free work-packet file loading and file validation to `packages/work-packet-core`.

The new runtime capability reads a caller-provided Markdown file path and validates its contents through the existing document validator.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. metadata validation exists;
2. Markdown section validation exists;
3. frontmatter parsing exists;
4. document validation exists;
5. file-loading planning exists;
6. package tests exist;
7. evaluation harness coverage exists;
8. repo contract checks exist;
9. runtime implementation remains bounded to `packages/work-packet-core`.

## 3. Scope

In scope:

1. add `work-packet-file.ts`;
2. add `work-packet-file.test.ts`;
3. export `loadWorkPacketFile`;
4. export `validateWorkPacketFile`;
5. export `WorkPacketFileLoadResult`;
6. export `WorkPacketFileValidationResult`;
7. read caller-provided Markdown file paths;
8. validate file contents through `validateWorkPacketDocument`;
9. return `file-read-error` for normal read failures;
10. add evaluation coverage;
11. add repo-contract anchors;
12. update package documentation.

## 4. Non-Goals

Out of scope:

1. CLI commands;
2. repo-wide file discovery;
3. directory walking;
4. glob matching;
5. database behavior;
6. vector retrieval;
7. agent runtime;
8. web UI;
9. API service;
10. deployment behavior;
11. package publishing behavior;
12. external dependencies.

## 5. Acceptance Criteria

This packet is complete when:

1. `packages/work-packet-core/src/work-packet-file.ts` exists.
2. `packages/work-packet-core/src/work-packet-file.test.ts` exists.
3. `loadWorkPacketFile` is exported.
4. `validateWorkPacketFile` is exported.
5. valid work-packet files pass.
6. returned result includes file path.
7. returned metadata includes `id`.
8. returned body excludes frontmatter.
9. missing files return `file-read-error`.
10. invalid readable files return document validation errors.
11. temporary test files are cleaned up.
12. `EVAL-0011-work-packet-file-loading.json` exists.
13. repo contract checks file-loading files and anchors.
14. `bun test packages/work-packet-core` passes.
15. `bash tools/eval/run-evaluations.sh` passes.
16. `bun run verify` passes.
17. `./tools/check-repo-contract.sh` passes.
18. `git diff --check` passes.
19. no dependencies are added.

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

The file-loading runtime slice must not:

1. walk directories;
2. recursively scan repositories;
3. read files other than the caller-provided path;
4. read `.env` files by default;
5. inspect secrets;
6. access the network;
7. execute file contents;
8. evaluate parsed values;
9. write files except temporary files created by tests;
10. add external dependencies;
11. introduce CLI behavior;
12. introduce deployment behavior.

## 8. Recommended Atomic Commit

```text
feat(work-packet): add file validation
```

## 9. Follow-Up Work

Recommended next work:

```text
WP-0044: Work Packet File Loading Status and Hardening Review
```

Rationale:

1. file loading introduces filesystem behavior;
2. filesystem behavior should be reviewed before CLI or repo-wide validation;
3. the runtime boundary must remain explicit.
