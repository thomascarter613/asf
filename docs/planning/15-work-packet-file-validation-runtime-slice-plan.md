---
title: "Work Packet File Validation Runtime Slice Plan"
description: "Plans the next work-packet-core runtime slice: validating a full work-packet Markdown document by combining frontmatter parsing, metadata validation, and Markdown section validation."
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
related_documents:
  - "docs/planning/14-work-packet-frontmatter-parser-runtime-slice-plan.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-frontmatter.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet File Validation Runtime Slice Plan

## 1. Purpose

This document plans the next runtime slice for `packages/work-packet-core`.

The next runtime capability should validate a full work-packet Markdown document by combining:

1. frontmatter detection;
2. frontmatter parsing;
3. metadata validation;
4. Markdown section validation;
5. combined error and warning reporting.

This document does not implement the validator.

It defines the intended implementation scope for WP-0040.

## 2. Current Runtime Status

Runtime implementation has started with the bounded package:

```text
packages/work-packet-core/
```

Current runtime capability:

```text
Typed work-packet statuses, metadata types, validation result types, metadata validation, Markdown section validation, hardened validation constants, validation edge-case coverage, and dependency-free frontmatter parsing.
```

## 3. Next Runtime Slice Decision

The next runtime slice should be:

```text
WP-0040: Work Packet File Validation Runtime Baseline
```

The target package remains:

```text
packages/work-packet-core/
```

The target capability is:

```text
Validate a full work-packet Markdown document from one string input.
```

## 4. Why File Validation Comes Next

File validation is the correct next slice because:

1. metadata validation already exists;
2. Markdown section validation already exists;
3. frontmatter parsing now exists;
4. the missing bridge is a single high-level validation function for complete work-packet Markdown documents;
5. this supports future CLI validation;
6. this supports future repo-wide work-packet checks;
7. this supports future CI work-packet governance;
8. this can be implemented without external services;
9. this can remain dependency-free;
10. this directly improves the repository’s governed SDLC model.

## 5. Dependency Decision

The first file validator should be dependency-free.

It should not add:

1. Markdown parser dependency;
2. YAML parser dependency;
3. schema validator dependency;
4. filesystem dependency;
5. CLI dependency.

The validator should operate on caller-provided strings.

## 6. Proposed Public API

WP-0040 should add:

```text
validateWorkPacketDocument
```

Optional helper:

```text
createWorkPacketDocumentValidationResult
```

Only add the helper if it improves clarity without broadening the public API unnecessarily.

The package should export the new API from:

```text
packages/work-packet-core/src/index.ts
```

## 7. Proposed Result Type

WP-0040 should add a combined document validation result type.

Suggested type:

```ts
export interface WorkPacketDocumentValidationResult {
  valid: boolean;
  metadata: Partial<WorkPacketMetadata>;
  body: string;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}
```

The result should include:

1. parsed metadata;
2. parsed body;
3. parser errors;
4. parser warnings;
5. metadata validation errors;
6. metadata validation warnings;
7. Markdown validation errors;
8. Markdown validation warnings;
9. final `valid` boolean.

## 8. Proposed Files for WP-0040

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

WP-0040 should not need to modify CI because the current CI already runs:

```bash
bun test packages/work-packet-core
```

## 9. Validator Behavior

### 9.1 Valid Document

For a valid work-packet Markdown document, the validator should:

1. parse frontmatter;
2. validate parsed metadata;
3. validate Markdown body sections;
4. return parsed metadata;
5. return Markdown body;
6. return no errors;
7. return `valid: true`.

### 9.2 Missing Frontmatter

For missing frontmatter, the validator should:

1. return `missing-frontmatter` error;
2. preserve original body;
3. run Markdown section validation on the original Markdown if safe;
4. return `valid: false`.

Recommended behavior:

```text
Parser errors should not prevent Markdown section validation when the body is still usable.
```

### 9.3 Unclosed Frontmatter

For unclosed frontmatter, the validator should:

1. return `unclosed-frontmatter` error;
2. return `valid: false`;
3. avoid pretending metadata was parsed correctly.

### 9.4 Metadata Errors

For invalid metadata, the validator should include metadata validation errors.

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
```

### 9.5 Markdown Section Errors

For Markdown section errors, the validator should include Markdown validation errors.

Examples:

```text
missing-purpose-section
missing-scope-section
missing-non-goals-section
missing-acceptance-criteria-section
missing-verification-commands-section
missing-recommended-atomic-commit-section
```

### 9.6 Warnings

The validator should preserve warnings from:

1. frontmatter parsing;
2. metadata validation.

Warnings should not make the document invalid unless a future packet explicitly changes that policy.

## 10. Validation Composition

The implementation should compose existing functions rather than duplicate logic.

Expected internal sequence:

```ts
const parsed = parseWorkPacketFrontmatter(markdown);
const metadataValidation = validateWorkPacketMetadata(parsed.metadata);
const markdownValidation = validateWorkPacketMarkdown(parsed.body || markdown);
```

Then combine:

```text
errors = parsed.errors + metadataValidation.errors + markdownValidation.errors
warnings = parsed.warnings + metadataValidation.warnings + markdownValidation.warnings
valid = errors.length === 0
```

## 11. Test Strategy

WP-0040 should test:

1. valid document passes;
2. returned metadata includes `id`;
3. returned metadata includes `recommendedCommit`;
4. returned body excludes frontmatter;
5. missing frontmatter fails;
6. unclosed frontmatter fails;
7. invalid metadata fails;
8. missing Markdown section fails;
9. unknown frontmatter key warns but does not fail by itself;
10. parsed metadata warning is preserved;
11. valid document with unnumbered headings passes;
12. document validation composes parser, metadata validator, and Markdown validator.

## 12. Evaluation Harness Strategy

WP-0040 should add:

```text
EVAL-0010 Work packet document validation exists
```

The case should check:

1. document validator source exists;
2. document validator test exists;
3. index exports `validateWorkPacketDocument`;
4. tests include missing frontmatter;
5. tests include unclosed frontmatter;
6. tests include missing Markdown section;
7. tests include unknown frontmatter key warning;
8. `bun test packages/work-packet-core` succeeds.

## 13. Repo Contract Strategy

WP-0040 should update `tools/check-repo-contract.sh` to require:

```text
packages/work-packet-core/src/work-packet-document.ts
packages/work-packet-core/src/work-packet-document.test.ts
tools/eval/cases/EVAL-0010-work-packet-document-validation.json
```

It should also check anchors:

```text
validateWorkPacketDocument
WorkPacketDocumentValidationResult
parseWorkPacketFrontmatter
validateWorkPacketMetadata
validateWorkPacketMarkdown
missing-frontmatter
unclosed-frontmatter
missing-scope-section
```

## 14. Security Boundary

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

It should operate only on strings provided by the caller.

## 15. Runtime Boundary

WP-0040 must not add:

1. CLI commands;
2. repo-wide file walking;
3. database persistence;
4. vector retrieval;
5. agent runtime;
6. API server;
7. web UI;
8. deployment behavior.

Those are future slices.

## 16. Acceptance Criteria for WP-0040

WP-0040 is acceptable when:

1. document validator source exists;
2. document validator tests exist;
3. validator is dependency-free;
4. validator returns metadata, body, errors, warnings, and valid status;
5. validator composes parser, metadata validator, and Markdown validator;
6. validator handles missing frontmatter;
7. validator handles unclosed frontmatter;
8. validator handles invalid metadata;
9. validator handles missing Markdown sections;
10. validator preserves warnings;
11. index exports document validator API;
12. tests pass locally;
13. evaluation harness passes locally;
14. repo contract passes locally;
15. CI remains green;
16. runtime scope remains bounded.

## 17. Verification Commands for WP-0040

Expected commands:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

## 18. Recommended Commit for WP-0040

Recommended commit:

```text
feat(work-packet): add document validator
```

## 19. Current Boundary

This document plans document validation implementation.

It does not implement document validation code.

It does not modify CI.

It does not add dependencies.
