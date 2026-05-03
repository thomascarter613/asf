---
title: "Work Packet File Validation Status and Hardening Review"
description: "Reviews and hardens the composed work-packet document validator after adding full Markdown document validation to the work-packet core runtime package."
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
  - "WP-0038"
  - "WP-0039"
  - "WP-0040"
  - "WP-0041"
related_documents:
  - "docs/planning/15-work-packet-file-validation-runtime-slice-plan.md"
  - "docs/work-packets/WP-0040-work-packet-file-validation-runtime-baseline.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-frontmatter.ts"
  - "packages/work-packet-core/src/work-packet-document.ts"
  - "packages/work-packet-core/src/work-packet-document.test.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet File Validation Status and Hardening Review

## 1. Purpose

This document reviews the repository after adding full work-packet Markdown document validation to `packages/work-packet-core`.

WP-0040 added a composed runtime validator that combines:

1. frontmatter parsing;
2. metadata validation;
3. Markdown section validation;
4. parser error preservation;
5. parser warning preservation;
6. metadata warning preservation;
7. final validity calculation.

This review ensures the new validator is correctly bounded, tested, evaluated, and ready before the project adds file loading, repo-wide validation, or CLI behavior.

## 2. Current Runtime Status

Runtime implementation has started and remains bounded.

Current runtime package:

```text
packages/work-packet-core/
```

Current runtime package name:

```text
@asf/work-packet-core
```

Current runtime capabilities:

```text
Typed work-packet statuses.
Typed work-packet metadata.
Typed validation issues.
Typed validation results.
Metadata validation.
Markdown section validation.
Dependency-free frontmatter parsing.
Full work-packet Markdown document validation.
```

Current runtime test command:

```bash
bun test packages/work-packet-core
```

## 3. Current Document Validator

Current document validator source:

```text
packages/work-packet-core/src/work-packet-document.ts
```

Current document validator tests:

```text
packages/work-packet-core/src/work-packet-document.test.ts
```

Current public API:

```text
validateWorkPacketDocument
WorkPacketDocumentValidationResult
```

The validator should operate on caller-provided Markdown strings only.

It must not read files from disk, walk directories, access the network, load environment variables, evaluate parsed values, or write files.

## 4. Validation Composition Review

The composed validator should use the existing runtime functions:

```text
parseWorkPacketFrontmatter
validateWorkPacketMetadata
validateWorkPacketMarkdown
```

Expected composition:

```text
parse Markdown frontmatter
validate parsed metadata
validate Markdown body sections
combine parser errors
combine parser warnings
combine metadata validation errors
combine metadata validation warnings
combine Markdown validation errors
combine Markdown validation warnings
return final valid status
```

The validator should avoid duplicating validation logic already owned by parser or validation modules.

## 5. Expected Behavior

### 5.1 Valid Work Packet Document

A valid work-packet Markdown document should:

1. include supported frontmatter;
2. include required metadata fields;
3. include a valid work-packet ID;
4. include a valid status;
5. include a recommended commit;
6. include required Markdown sections;
7. return parsed metadata;
8. return body without frontmatter;
9. return `valid: true`.

### 5.2 Missing Frontmatter

A document missing frontmatter should:

1. include a `missing-frontmatter` error;
2. return `valid: false`;
3. preserve body content when possible;
4. still surface other validation errors when safe.

### 5.3 Unclosed Frontmatter

A document with unclosed frontmatter should:

1. include an `unclosed-frontmatter` error;
2. return `valid: false`;
3. avoid pretending metadata was parsed correctly.

### 5.4 Invalid Metadata

A document with invalid metadata should return metadata validation errors such as:

```text
missing-work-packet-id
invalid-work-packet-id
missing-title
missing-status
invalid-status
missing-version
missing-owner
missing-recommended-commit
```

### 5.5 Missing Markdown Sections

A document missing required Markdown sections should return Markdown validation errors such as:

```text
missing-purpose-section
missing-scope-section
missing-non-goals-section
missing-acceptance-criteria-section
missing-verification-commands-section
missing-recommended-atomic-commit-section
```

### 5.6 Warnings

Warnings should be preserved but should not make the document invalid.

Current warning examples:

```text
unknown-frontmatter-key
unsupported-frontmatter-value
work-packet-id-mismatch
```

## 6. Current Test Expectations

The package test suite should verify:

1. valid document passes;
2. parsed metadata is returned;
3. parsed body excludes frontmatter;
4. missing frontmatter fails;
5. unclosed frontmatter fails;
6. invalid metadata fails;
7. missing Markdown section fails;
8. unknown frontmatter key warning is preserved;
9. metadata warning is preserved;
10. valid document with unnumbered headings passes;
11. document validation composes parser, metadata validator, and Markdown validator.

## 7. Current Evaluation Harness Expectations

The executable evaluation harness should include:

```text
EVAL-0010 Work packet document validation exists
```

Expected case file:

```text
tools/eval/cases/EVAL-0010-work-packet-document-validation.json
```

The case should verify:

1. document validator source exists;
2. document validator test exists;
3. index exports `validateWorkPacketDocument`;
4. source contains `WorkPacketDocumentValidationResult`;
5. source composes `parseWorkPacketFrontmatter`;
6. source composes `validateWorkPacketMetadata`;
7. source composes `validateWorkPacketMarkdown`;
8. tests include missing frontmatter behavior;
9. tests include unclosed frontmatter behavior;
10. tests include missing Markdown section behavior;
11. tests include warning preservation behavior;
12. package tests pass.

## 8. Current Repo Contract Expectations

The repo contract should require:

```text
packages/work-packet-core/src/work-packet-document.ts
packages/work-packet-core/src/work-packet-document.test.ts
tools/eval/cases/EVAL-0010-work-packet-document-validation.json
docs/planning/15-work-packet-file-validation-runtime-slice-plan.md
docs/work-packets/WP-0039-work-packet-file-validation-runtime-slice-plan.md
docs/work-packets/WP-0040-work-packet-file-validation-runtime-baseline.md
```

The repo contract should also check anchors for:

```text
validateWorkPacketDocument
WorkPacketDocumentValidationResult
parseWorkPacketFrontmatter
validateWorkPacketMetadata
validateWorkPacketMarkdown
missing frontmatter fails
unclosed frontmatter fails
missing Markdown section fails
unknown frontmatter key warning is preserved
```

## 9. Current Verification Commands

Current local verification sequence:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Current CI sequence:

```bash
bun install --frozen-lockfile
bun run verify
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
git diff --check
```

## 10. Runtime Boundary

The runtime boundary remains intentionally narrow.

The repository still does not include:

1. CLI command for work-packet validation;
2. file-system work-packet loading;
3. repo-wide work-packet discovery;
4. database persistence;
5. vector retrieval;
6. embedding pipeline;
7. agent runtime;
8. API service;
9. web UI;
10. deployment behavior;
11. package publishing behavior.

## 11. Security Boundary

The document validator must not:

1. read files from disk;
2. access the network;
3. execute parsed values;
4. evaluate expressions;
5. load environment variables;
6. inspect secrets;
7. write files;
8. import new dependencies;
9. parse files outside caller-provided strings.

## 12. Hardening Search Commands

Use these commands to inspect the document validator baseline:

```bash
grep -R "validateWorkPacketDocument" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
grep -R "WorkPacketDocumentValidationResult" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
grep -R "missing frontmatter fails" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
grep -R "unknown frontmatter key warning is preserved" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
```

Expected result:

1. source and tests contain document validator anchors;
2. evaluation cases reference document validator anchors;
3. repo contract references document validator anchors;
4. planning and work-packet docs describe document validation scope.

## 13. Risk Review

| Risk | Status | Handling |
| --- | --- | --- |
| Validator duplicates parser or metadata validation logic. | Active | Keep validator as composition layer. |
| Validator hides parser errors. | Active | Preserve parser errors in final result. |
| Validator hides parser warnings. | Active | Preserve parser warnings in final result. |
| Warnings incorrectly make results invalid. | Active | Only errors determine `valid`. |
| Validator begins reading files too soon. | Active | Keep string-only API. |
| CLI behavior starts without planning. | Active | Plan CLI separately. |
| Repo contract misses document validator files. | Active | Require source, tests, and EVAL-0010. |
| Evaluation harness misses document validator behavior. | Active | EVAL-0010 guards source, exports, tests, and command. |
| Runtime scope expands too quickly. | Active | Preserve bounded package statement. |

## 14. Review Findings

Initial findings before local execution:

```text
pending-local-verification
```

Expected findings after WP-0040 and WP-0041 are complete:

```text
Document validation is implemented as a composition layer.
Document validator tests pass.
Document validator is covered by executable evaluation case EVAL-0010.
Repo contract anchors require the document validator baseline.
Runtime scope remains bounded to packages/work-packet-core.
No file loading, CLI, repo-wide walking, database, retrieval, agent runtime, API, UI, or deployment behavior has been introduced.
```

## 15. Acceptance Criteria

This review is complete when:

1. current document validator status is documented;
2. validation composition is documented;
3. expected document validator behavior is documented;
4. test expectations are documented;
5. evaluation harness expectations are documented;
6. repo contract expectations are documented;
7. local verification commands are documented;
8. runtime boundary is preserved;
9. security boundary is preserved;
10. no runtime feature expansion is introduced;
11. no dependencies are added;
12. local verification passes.

## 16. Follow-Up Work

Recommended next work:

```text
WP-0042: Work Packet File Loading Runtime Slice Plan
```

Rationale:

1. document validation now operates on caller-provided Markdown strings;
2. the next useful capability is loading a work-packet Markdown file from disk and validating it;
3. file loading should be planned before implementation because it introduces filesystem behavior.

Alternative follow-up:

```text
WP-0042: Work Packet CLI Runtime Slice Plan
```

Use the CLI planning option instead if we want to expose validation behavior to developers before adding reusable file-loading utilities.
