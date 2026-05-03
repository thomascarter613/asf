---
title: "Work Packet File Loading Runtime Slice Plan"
description: "Plans the next work-packet-core runtime slice: loading a work-packet Markdown file from disk and validating it through the existing document validator."
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
  - "WP-0040"
  - "WP-0041"
  - "WP-0042"
  - "WP-0043"
related_documents:
  - "docs/planning/16-work-packet-file-validation-status-and-hardening-review.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-document.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet File Loading Runtime Slice Plan

## 1. Purpose

This document plans the next runtime slice for `packages/work-packet-core`.

The next runtime capability should load a work-packet Markdown file from disk and validate it through the existing document validator.

This document does not implement file loading.

It defines the intended implementation scope for WP-0043.

## 2. Current Runtime Status

Runtime implementation has started with the bounded package:

```text
packages/work-packet-core/
```

Current runtime capability:

```text
Typed work-packet statuses, metadata types, validation result types, metadata validation, Markdown section validation, dependency-free frontmatter parsing, and full work-packet Markdown document validation from caller-provided strings.
```

Current missing capability:

```text
The package does not yet load work-packet Markdown files from disk.
```

## 3. Next Runtime Slice Decision

The next runtime slice should be:

```text
WP-0043: Work Packet File Loading Runtime Baseline
```

The target package remains:

```text
packages/work-packet-core/
```

The target capability is:

```text
Load a repository-relative or caller-provided work-packet Markdown file path and validate the file contents.
```

## 4. Why File Loading Comes Next

File loading is the correct next slice because:

1. metadata validation exists;
2. Markdown section validation exists;
3. frontmatter parsing exists;
4. full document validation exists;
5. the next useful bridge is validating actual files instead of only caller-provided strings;
6. this supports future CLI behavior;
7. this supports future repo-wide work-packet validation;
8. this supports future CI governance over work-packet documents;
9. this can remain local and deterministic;
10. this should be planned before implementation because it introduces filesystem behavior.

## 5. Dependency Decision

The first file-loading runtime slice should remain dependency-free.

It may use runtime-provided file APIs.

Preferred implementation target:

```text
Bun.file(...).text()
```

Fallback acceptable implementation:

```text
node:fs/promises readFile
```

Recommended first implementation:

```text
Use node:fs/promises because it is stable, explicit, and portable across Bun and Node-compatible TypeScript environments.
```

No external dependency should be added.

## 6. Proposed Public API

WP-0043 should add:

```text
validateWorkPacketFile
loadWorkPacketFile
```

Recommended behavior:

```text
loadWorkPacketFile reads a Markdown file and returns file contents plus path metadata.
validateWorkPacketFile reads a Markdown file and validates it through validateWorkPacketDocument.
```

The package should export both APIs from:

```text
packages/work-packet-core/src/index.ts
```

## 7. Proposed Result Types

WP-0043 should add file-loading result types.

Suggested types:

```ts
export interface WorkPacketFileLoadResult {
  path: string;
  content: string;
}

export interface WorkPacketFileValidationResult extends WorkPacketDocumentValidationResult {
  path: string;
}
```

If the implementation needs to report file-read errors without throwing, use:

```ts
export interface WorkPacketFileValidationFailure {
  valid: false;
  path: string;
  metadata: Partial<WorkPacketMetadata>;
  body: string;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}
```

Recommended first behavior:

```text
validateWorkPacketFile should catch normal filesystem read errors and return a validation result with a file-read error.
```

It should not throw for common missing-file behavior.

## 8. Proposed Files for WP-0043

WP-0043 should create:

```text
packages/work-packet-core/src/work-packet-file.ts
packages/work-packet-core/src/work-packet-file.test.ts
tools/eval/cases/EVAL-0011-work-packet-file-loading.json
```

WP-0043 should modify:

```text
packages/work-packet-core/src/index.ts
packages/work-packet-core/README.md
tools/eval/README.md
tools/eval/cases/README.md
tools/check-repo-contract.sh
```

WP-0043 should not need to modify CI because the current CI already runs:

```bash
bun test packages/work-packet-core
```

## 9. Proposed Test Fixture Strategy

The first file-loading tests should avoid depending on large repository state.

Recommended approach:

```text
Create temporary files inside the test process using a safe temporary directory.
```

Recommended APIs:

```text
mkdtemp
writeFile
rm
tmpdir
join
```

Use Node-compatible built-ins:

```ts
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
```

Tests must clean up temporary directories.

## 10. File Loading Behavior

### 10.1 Valid File

For a valid work-packet Markdown file, `validateWorkPacketFile` should:

1. read the file;
2. call `validateWorkPacketDocument`;
3. return file path;
4. return parsed metadata;
5. return parsed body;
6. return errors;
7. return warnings;
8. return `valid: true`.

### 10.2 Missing File

For a missing file, `validateWorkPacketFile` should return:

```text
file-read-error
```

The result should be:

```text
valid: false
```

It should include the attempted file path.

### 10.3 Non-Markdown Content

For readable but invalid content, `validateWorkPacketFile` should:

1. read the content successfully;
2. pass content to `validateWorkPacketDocument`;
3. return document validation errors.

### 10.4 Path Handling

The first implementation should accept caller-provided paths.

It should not attempt repo-wide path discovery.

It should not normalize paths into absolute paths in output unless needed.

It should not read outside the path explicitly provided by the caller.

## 11. Proposed Validation Composition

Expected internal sequence:

```ts
const file = await loadWorkPacketFile(path);
const validation = validateWorkPacketDocument(file.content);
return { path: file.path, ...validation };
```

For read errors:

```ts
return {
  valid: false,
  path,
  metadata: {},
  body: "",
  errors: [
    {
      code: "file-read-error",
      message: "...",
      path,
      severity: "error"
    }
  ],
  warnings: []
};
```

## 12. Test Strategy

WP-0043 should test:

1. valid work-packet file passes;
2. returned result includes file path;
3. returned metadata includes `id`;
4. returned body excludes frontmatter;
5. missing file returns `file-read-error`;
6. invalid readable file returns document validation errors;
7. temporary test files are cleaned up;
8. file validation composes document validation;
9. `loadWorkPacketFile` returns path and content;
10. file API does not add external dependencies.

## 13. Evaluation Harness Strategy

WP-0043 should add:

```text
EVAL-0011 Work packet file loading exists
```

The case should check:

1. file-loading source exists;
2. file-loading test exists;
3. index exports `validateWorkPacketFile`;
4. index exports `loadWorkPacketFile`;
5. source contains `file-read-error`;
6. tests include missing file behavior;
7. tests include valid work-packet file behavior;
8. `bun test packages/work-packet-core` succeeds.

## 14. Repo Contract Strategy

WP-0043 should update `tools/check-repo-contract.sh` to require:

```text
packages/work-packet-core/src/work-packet-file.ts
packages/work-packet-core/src/work-packet-file.test.ts
tools/eval/cases/EVAL-0011-work-packet-file-loading.json
```

It should also check anchors:

```text
validateWorkPacketFile
loadWorkPacketFile
file-read-error
validateWorkPacketDocument
missing file
valid work-packet file
```

## 15. Security Boundary

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

## 16. Runtime Boundary

WP-0043 must not add:

1. CLI commands;
2. repo-wide file discovery;
3. database persistence;
4. vector retrieval;
5. agent runtime;
6. API server;
7. web UI;
8. deployment behavior.

Those are future slices.

## 17. Acceptance Criteria for WP-0043

WP-0043 is acceptable when:

1. file-loading source exists;
2. file-loading tests exist;
3. file loader is dependency-free;
4. file loader reads caller-provided Markdown file paths;
5. file validator composes document validator;
6. missing files return `file-read-error`;
7. valid work-packet files pass;
8. invalid readable files fail through document validation;
9. index exports file-loading APIs;
10. tests pass locally;
11. evaluation harness passes locally;
12. repo contract passes locally;
13. CI remains green;
14. runtime scope remains bounded.

## 18. Verification Commands for WP-0043

Expected commands:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

## 19. Recommended Commit for WP-0043

Recommended commit:

```text
feat(work-packet): add file validation
```

## 20. Current Boundary

This document plans file loading.

It does not implement file loading.

It does not modify CI.

It does not add dependencies.
