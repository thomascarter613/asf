---
title: "WP-0038: Work Packet Frontmatter Parser Runtime Baseline"
description: "Adds dependency-free work-packet Markdown frontmatter parsing to the work-packet core runtime package."
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
work_packet_id: "WP-0038"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0038-work-packet-frontmatter-parser-runtime-baseline.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-frontmatter.ts"
  - "packages/work-packet-core/src/work-packet-frontmatter.test.ts"
  - "tools/eval/README.md"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0009-work-packet-frontmatter-parser.json"
  - "tools/check-repo-contract.sh"
recommended_commit: "feat(work-packet): add frontmatter parser"
---

# WP-0038: Work Packet Frontmatter Parser Runtime Baseline

## 1. Purpose

This work packet adds dependency-free Markdown frontmatter parsing to `packages/work-packet-core`.

The parser converts supported work-packet frontmatter fields into `WorkPacketMetadata`-compatible metadata and returns the Markdown body separately.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. runtime implementation has started;
2. `packages/work-packet-core` exists;
3. core validation has been hardened;
4. parser planning exists;
5. package tests exist;
6. evaluation harness coverage exists;
7. repo contract checks exist.

## 3. Scope

In scope:

1. add `work-packet-frontmatter.ts`;
2. add `work-packet-frontmatter.test.ts`;
3. export `parseWorkPacketFrontmatter`;
4. export `hasWorkPacketFrontmatter`;
5. parse simple frontmatter key/value pairs;
6. map supported frontmatter keys to `WorkPacketMetadata`;
7. return Markdown body separately;
8. return errors and warnings instead of throwing for normal invalid input;
9. add evaluation coverage;
10. add repo-contract anchors;
11. update documentation.

## 4. Non-Goals

Out of scope:

1. YAML parser dependency;
2. full YAML support;
3. nested objects;
4. YAML anchors;
5. YAML aliases;
6. multiline block scalar support;
7. frontmatter array support as metadata values;
8. file loading;
9. CLI commands;
10. repo-wide validation;
11. database behavior;
12. vector retrieval;
13. agent runtime;
14. web UI;
15. API service;
16. deployment behavior.

## 5. Acceptance Criteria

This packet is complete when:

1. `packages/work-packet-core/src/work-packet-frontmatter.ts` exists.
2. `packages/work-packet-core/src/work-packet-frontmatter.test.ts` exists.
3. `parseWorkPacketFrontmatter` is exported.
4. `hasWorkPacketFrontmatter` is exported.
5. valid frontmatter parses metadata.
6. Markdown body is returned separately.
7. `work_packet_id` maps to `id` and `workPacketId`.
8. `document_type` maps to `documentType`.
9. `recommended_commit` maps to `recommendedCommit`.
10. missing frontmatter returns an error.
11. unclosed frontmatter returns an error.
12. unknown keys return warnings.
13. unsupported array values return warnings.
14. parsed metadata can pass `validateWorkPacketMetadata`.
15. `EVAL-0009-work-packet-frontmatter-parser.json` exists.
16. repo contract checks parser files and anchors.
17. `bun test packages/work-packet-core` passes.
18. `bash tools/eval/run-evaluations.sh` passes.
19. `bun run verify` passes.
20. `./tools/check-repo-contract.sh` passes.
21. `git diff --check` passes.
22. no dependencies are added.

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

The parser must not:

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
feat(work-packet): add frontmatter parser
```

## 9. Follow-Up Work

Recommended next work:

```text
WP-0039: Work Packet File Validation Runtime Slice Plan
```

Rationale:

1. frontmatter parsing exists;
2. metadata validation exists;
3. Markdown section validation exists;
4. the next useful runtime slice is validating a full work-packet Markdown document from parsed metadata plus Markdown body.