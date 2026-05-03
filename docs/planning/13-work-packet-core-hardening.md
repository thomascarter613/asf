---
title: "Work Packet Core Hardening"
description: "Hardens the first runtime package by strengthening validation semantics, issue codes, tests, evaluation coverage, and verification expectations without broadening runtime scope."
status: "active"
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
document_type: "planning"
canonical: false
related_adrs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_work_packets:
  - "WP-0034"
  - "WP-0035"
  - "WP-0036"
related_documents:
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-status.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-validation.test.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet Core Hardening

## 1. Purpose

This document defines the hardening plan for the first runtime package:

```text
packages/work-packet-core/
```

The goal is to improve correctness, clarity, and regression coverage before adding the next runtime feature.

This is a hardening slice, not a scope expansion.

## 2. Current Runtime Status

Runtime implementation has started with the bounded work-packet core package.

Current runtime scope:

```text
packages/work-packet-core/
```

Current runtime capability:

```text
Typed work-packet statuses, work-packet metadata types, validation result types, metadata validation, and Markdown section validation.
```

## 3. Hardening Goal

The hardening goal is to make the package safer and clearer by improving:

1. validation issue code consistency;
2. validation issue path consistency;
3. work-packet ID format handling;
4. required Markdown section handling;
5. empty and whitespace-only input behavior;
6. exported validation constants;
7. test coverage;
8. evaluation harness coverage;
9. repo contract anchors.

## 4. Scope

In scope:

1. strengthen `packages/work-packet-core/src/work-packet-validation.ts`;
2. export required Markdown section definitions;
3. export the work-packet ID pattern;
4. preserve existing public APIs;
5. add tests for edge cases;
6. add evaluation coverage for validation behavior;
7. update repo contract anchors;
8. update package README if needed.

## 5. Non-Goals

Out of scope:

1. parsing YAML frontmatter;
2. loading files from disk;
3. adding dependencies;
4. adding CLI commands;
5. adding a workflow engine;
6. adding a database;
7. adding vector retrieval;
8. adding agent runtime;
9. adding web UI;
10. adding API service;
11. adding deployment behavior;
12. changing CI beyond what is already required for the package tests.

## 6. Hardening Decisions

### 6.1 Preserve Dependency-Free Implementation

The package remains dependency-free.

No YAML parser, Markdown parser, schema validator, or external assertion library should be added in this packet.

### 6.2 Preserve Existing Public API

The following exports must remain available:

```text
WORK_PACKET_STATUSES
isWorkPacketStatus
validateWorkPacketMetadata
validateWorkPacketMarkdown
```

### 6.3 Add Useful Public Constants

The package should additionally export:

```text
WORK_PACKET_ID_PATTERN
REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS
```

These constants make validation behavior explicit and testable.

### 6.4 Strengthen Issue Codes

Validation issue codes should be stable, specific, and easy to assert in tests.

Examples:

```text
missing-work-packet-id
invalid-work-packet-id
missing-title
missing-status
invalid-status
missing-version
missing-owner
missing-recommended-commit
work-packet-id-mismatch
missing-purpose-section
missing-scope-section
missing-non-goals-section
missing-acceptance-criteria-section
missing-verification-commands-section
missing-recommended-atomic-commit-section
empty-markdown
```

### 6.5 Preserve Warnings

A `workPacketId` / `id` mismatch should remain a warning, not an error.

That lets the package warn about redundant metadata mismatch without rejecting otherwise usable content.

## 7. Test Expectations

The hardened test suite should verify:

1. all baseline statuses exist;
2. allowed statuses pass;
3. unknown statuses fail;
4. valid metadata passes;
5. missing ID fails;
6. whitespace-only ID fails;
7. invalid ID format fails;
8. lowercase work-packet ID fails;
9. invalid status fails;
10. missing recommended commit fails;
11. mismatched `workPacketId` warns;
12. valid Markdown passes;
13. Markdown with unnumbered headings passes;
14. Markdown missing required sections fails;
15. empty Markdown fails;
16. whitespace-only Markdown fails;
17. required section constants include expected sections.

## 8. Evaluation Harness Expectations

The executable evaluation harness should gain a new case:

```text
EVAL-0008 Work packet core validation behavior is covered
```

The case should verify:

1. validation test file exists;
2. validation test file references edge cases;
3. validation source exports the ID pattern;
4. validation source exports required Markdown sections;
5. package index exports the new constants.

## 9. Repo Contract Expectations

The repo contract should be hardened to check:

1. `WORK_PACKET_ID_PATTERN`;
2. `REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS`;
3. `whitespace-only Markdown fails`;
4. `lowercase work-packet ID fails`;
5. `EVAL-0008-work-packet-core-validation-behavior.json`.

## 10. Verification Commands

The hardening packet should verify with:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

## 11. Security Boundary

This hardening packet must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. `.env` files;
5. network calls;
6. deployment logic;
7. package publishing;
8. external dependencies;
9. file-system writes outside test-safe behavior.

## 12. Acceptance Criteria

This hardening plan is satisfied when:

1. validation constants are exported;
2. validation edge cases are tested;
3. evaluation harness coverage is extended;
4. repo contract anchors are updated;
5. all verification commands pass;
6. runtime scope remains bounded to `packages/work-packet-core`;
7. no dependencies are added.

## 13. Follow-Up Work

Recommended next work:

```text
WP-0037: Work Packet Frontmatter Parser Runtime Slice Plan
```

That packet should plan parsing Markdown frontmatter into `WorkPacketMetadata`.