---
title: "Work Packet File Loading Status and Hardening Review"
description: "Reviews and hardens work-packet file loading after adding caller-provided file path validation to the work-packet core runtime package."
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
  - "WP-0042"
  - "WP-0043"
  - "WP-0044"
related_documents:
  - "docs/planning/17-work-packet-file-loading-runtime-slice-plan.md"
  - "docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-file.ts"
  - "packages/work-packet-core/src/work-packet-file.test.ts"
  - "tools/eval/cases/EVAL-0011-work-packet-file-loading.json"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet File Loading Status and Hardening Review

## 1. Purpose

This document reviews the repository after adding work-packet file loading and file validation to `packages/work-packet-core`.

WP-0043 added filesystem behavior for caller-provided work-packet Markdown file paths.

This review ensures that file loading is bounded, deterministic, tested, evaluated, and enforced before the project adds CLI behavior, repo-wide discovery, directory walking, or broader filesystem access.

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
Caller-provided work-packet file loading.
Caller-provided work-packet file validation.
```

Current runtime test command:

```bash
bun test packages/work-packet-core
```

## 3. Current File Loading APIs

Current file-loading source:

```text
packages/work-packet-core/src/work-packet-file.ts
```

Current file-loading tests:

```text
packages/work-packet-core/src/work-packet-file.test.ts
```

Current public APIs:

```text
loadWorkPacketFile
validateWorkPacketFile
WorkPacketFileLoadResult
WorkPacketFileValidationResult
```

The file-loading APIs should operate only on caller-provided paths.

They must not discover files, recursively scan directories, walk repositories, read `.env` files by default, inspect secrets, or introduce CLI behavior.

## 4. File Loading Composition Review

The file validator should compose existing runtime behavior:

```text
loadWorkPacketFile
validateWorkPacketDocument
```

Expected behavior:

```text
read caller-provided file path
pass file contents to validateWorkPacketDocument
return path
return parsed metadata
return parsed body
return errors
return warnings
return final valid status
```

For normal read failures, the file validator should return:

```text
file-read-error
```

It should not throw for common missing-file behavior.

## 5. Expected Behavior

### 5.1 Valid Work Packet File

A valid work-packet Markdown file should:

1. be read successfully;
2. validate through `validateWorkPacketDocument`;
3. return `valid: true`;
4. return the file path;
5. return parsed metadata;
6. return body without frontmatter;
7. return no errors.

### 5.2 Missing File

A missing file should:

1. return `valid: false`;
2. return the attempted path;
3. include a `file-read-error` error;
4. return empty metadata;
5. return empty body;
6. avoid throwing during normal validation flow.

### 5.3 Invalid Readable File

A readable but invalid Markdown file should:

1. be read successfully;
2. be passed to `validateWorkPacketDocument`;
3. return document validation errors such as `missing-frontmatter`;
4. return `valid: false`.

### 5.4 Bounded Path Behavior

The current API accepts caller-provided paths.

It does not yet enforce repository-relative path restrictions.

It does not yet perform safe-path policy validation.

Those may be future hardening slices.

## 6. Current Test Expectations

The package test suite should verify:

1. `loadWorkPacketFile` returns path and content for readable files;
2. valid work-packet files pass;
3. returned result includes file path;
4. returned metadata includes `id`;
5. returned body excludes frontmatter;
6. missing files return `file-read-error`;
7. invalid readable files return document validation errors;
8. file validation composes document validation;
9. temporary test files are cleaned up.

## 7. Current Evaluation Harness Expectations

The executable evaluation harness should include:

```text
EVAL-0011 Work packet file loading exists
```

Expected case file:

```text
tools/eval/cases/EVAL-0011-work-packet-file-loading.json
```

The case should verify:

1. file-loading source exists;
2. file-loading test exists;
3. index exports `loadWorkPacketFile`;
4. index exports `validateWorkPacketFile`;
5. source contains `file-read-error`;
6. source composes `validateWorkPacketDocument`;
7. tests include valid file behavior;
8. tests include missing file behavior;
9. tests include document validation composition;
10. package tests pass.

## 8. Current Repo Contract Expectations

The repo contract should require:

```text
packages/work-packet-core/src/work-packet-file.ts
packages/work-packet-core/src/work-packet-file.test.ts
tools/eval/cases/EVAL-0011-work-packet-file-loading.json
docs/planning/17-work-packet-file-loading-runtime-slice-plan.md
docs/work-packets/WP-0042-work-packet-file-loading-runtime-slice-plan.md
docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
```

The repo contract should also check anchors for:

```text
loadWorkPacketFile
validateWorkPacketFile
file-read-error
validateWorkPacketDocument
valid work-packet file passes
missing file returns file-read-error
file validation composes document validation
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
2. repo-wide work-packet discovery;
3. directory walking;
4. glob matching;
5. database persistence;
6. vector retrieval;
7. embedding pipeline;
8. agent runtime;
9. API service;
10. web UI;
11. deployment behavior;
12. package publishing behavior.

## 11. Security Boundary

The file-loading runtime must not:

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

## 12. Hardening Search Commands

Use these commands to inspect the file-loading baseline:

```bash
grep -R "loadWorkPacketFile" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
grep -R "validateWorkPacketFile" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
grep -R "file-read-error" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
grep -R "missing file returns file-read-error" packages/work-packet-core tools docs/planning docs/work-packets 2>/dev/null || true
```

Expected result:

1. source and tests contain file-loading anchors;
2. evaluation cases reference file-loading anchors;
3. repo contract references file-loading anchors;
4. planning and work-packet docs describe file-loading scope.

## 13. Risk Review

| Risk | Status | Handling |
| --- | --- | --- |
| File loading expands into repo-wide scanning too soon. | Active | Keep API caller-path-only. |
| Missing file behavior throws instead of returning structured result. | Active | Preserve `file-read-error` result. |
| File loader begins reading implicit sensitive files. | Active | Do not add implicit discovery or default path scanning. |
| CLI behavior starts without planning. | Active | Plan CLI separately. |
| Repo contract misses file-loading files. | Active | Require source, tests, and EVAL-0011. |
| Evaluation harness misses file-loading behavior. | Active | EVAL-0011 guards source, exports, tests, and command. |
| Runtime scope expands too quickly. | Active | Preserve bounded package statement. |
| Safe-path policy is not explicit yet. | Known | Plan later if repo-wide or CLI behavior needs path policy. |

## 14. Review Findings

Initial findings before local execution:

```text
pending-local-verification
```

Expected findings after WP-0043 and WP-0044 are complete:

```text
File loading is implemented as a caller-path-only layer.
File validator tests pass.
File validator is covered by executable evaluation case EVAL-0011.
Repo contract anchors require the file-loading baseline.
Runtime scope remains bounded to packages/work-packet-core.
No CLI, repo-wide walking, database, retrieval, agent runtime, API, UI, or deployment behavior has been introduced.
```

## 15. Acceptance Criteria

This review is complete when:

1. current file-loading status is documented;
2. file-loading composition is documented;
3. expected file-loading behavior is documented;
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
WP-0045: Work Packet CLI Runtime Slice Plan
```

Rationale:

1. document validation exists;
2. file validation exists;
3. developers now need an executable interface for validating work-packet files;
4. CLI behavior should be planned before implementation because it introduces user-facing commands, process exit codes, and command output contracts.

Alternative follow-up:

```text
WP-0045: Work Packet Safe Path Policy Planning
```

Use the safe-path policy option if we want to harden path constraints before adding CLI behavior.
