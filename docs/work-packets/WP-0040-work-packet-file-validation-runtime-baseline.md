---
title: "WP-0040: Work Packet File Validation Runtime Baseline"
description: "Adds full work-packet Markdown document validation by composing frontmatter parsing, metadata validation, and Markdown section validation."
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
work_packet_id: "WP-0040"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/15-work-packet-file-validation-runtime-slice-plan.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-frontmatter.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0040-work-packet-file-validation-runtime-baseline.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-document.ts"
  - "packages/work-packet-core/src/work-packet-document.test.ts"
  - "tools/eval/README.md"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0010-work-packet-document-validation.json"
  - "tools/check-repo-contract.sh"
recommended_commit: "feat(work-packet): add document validator"
---

# WP-0040: Work Packet File Validation Runtime Baseline

## 1. Purpose

This work packet adds full work-packet Markdown document validation to `packages/work-packet-core`.

The validator composes:

1. frontmatter parsing;
2. metadata validation;
3. Markdown section validation;
4. combined error and warning reporting.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. metadata validation exists;
2. Markdown section validation exists;
3. dependency-free frontmatter parsing exists;
4. parser tests exist;
5. evaluation harness coverage exists;
6. repo contract checks exist;
7. runtime implementation remains bounded to `packages/work-packet-core`.

## 3. Scope

In scope:

1. add `work-packet-document.ts`;
2. add `work-packet-document.test.ts`;
3. export `validateWorkPacketDocument`;
4. export `WorkPacketDocumentValidationResult`;
5. return parsed metadata;
6. return parsed body;
7. combine parser errors;
8. combine parser warnings;
9. combine metadata validation errors and warnings;
10. combine Markdown validation errors and warnings;
11. add evaluation coverage;
12. add repo-contract anchors;
13. update package documentation.

## 4. Non-Goals

Out of scope:

1. file loading;
2. CLI commands;
3. repo-wide file walking;
4. YAML parser dependency;
5. Markdown parser dependency;
6. database behavior;
7. vector retrieval;
8. agent runtime;
9. web UI;
10. API service;
11. deployment behavior;
12. package publishing behavior.

## 5. Acceptance Criteria

This packet is complete when:

1. `packages/work-packet-core/src/work-packet-document.ts` exists.
2. `packages/work-packet-core/src/work-packet-document.test.ts` exists.
3. `validateWorkPacketDocument` is exported.
4. `WorkPacketDocumentValidationResult` is exported.
5. valid work-packet Markdown passes.
6. metadata is returned.
7. body is returned without frontmatter.
8. missing frontmatter fails.
9. unclosed frontmatter fails.
10. invalid metadata fails.
11. missing Markdown section fails.
12. parser warnings are preserved.
13. metadata warnings are preserved.
14. `EVAL-0010-work-packet-document-validation.json` exists.
15. repo contract checks document validator files and anchors.
16. `bun test packages/work-packet-core` passes.
17. `bash tools/eval/run-evaluations.sh` passes.
18. `bun run verify` passes.
19. `./tools/check-repo-contract.sh` passes.
20. `git diff --check` passes.
21. no dependencies are added.

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

The document validator must not:

1. read files from disk;
2. access the network;
3. execute parsed values;
4. evaluate expressions;
5. load environment variables;
6. inspect secrets;
7. write files;
8. import dependencies;
9. parse files outside caller-provided strings.

## 8. Recommended Atomic Commit

```text
feat(work-packet): add document validator
```

## 9. Follow-Up Work

Recommended next work:

```text
WP-0041: Work Packet File Validation Status and Hardening Review
```

Rationale:

1. the runtime package now validates complete work-packet Markdown strings;
2. the next step should review correctness, status language, evaluation coverage, and repo-contract anchors before adding file-loading or CLI behavior.
