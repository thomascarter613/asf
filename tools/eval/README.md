# Executable Evaluation Harness

This directory contains the first executable evaluation harness for the Agentic Software Framework.

The harness is intentionally small, local, dependency-free, and read-only by default.

It evaluates repository-governed SDLC baseline behavior, not runtime product behavior.

## Current Status

Current status:

```text
baseline
````

Runtime implementation status:

```text
Runtime implementation has started with the bounded work-packet core package.
```

CI integration status:

```text
The executable evaluation harness runs locally and in CI.
```

## Command

Run from the repository root:

```bash
bash tools/eval/run-evaluations.sh
```

## Initial Scope

The initial harness evaluates:

1. active baseline language;
2. ADR gap preservation;
3. package-manager boundary preservation;
4. CI baseline presence;
5. runtime-not-started boundary preservation.

## Initial Case Directory

Evaluation cases live in:

```text
tools/eval/cases/
```

Initial cases:

```text
tools/eval/cases/EVAL-0001-active-baseline.json
tools/eval/cases/EVAL-0002-adr-gap-preservation.json
tools/eval/cases/EVAL-0003-package-manager-boundary.json
tools/eval/cases/EVAL-0004-ci-baseline-presence.json
tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json
tools/eval/cases/EVAL-0006-work-packet-core-package.json
tools/eval/cases/EVAL-0007-runtime-implementation-status.json
tools/eval/cases/EVAL-0008-work-packet-core-validation-behavior.json
tools/eval/cases/EVAL-0009-work-packet-frontmatter-parser.json
tools/eval/cases/EVAL-0010-work-packet-document-validation.json
```

## Supported Check Types

The initial runner supports:

```text
file_exists
file_absent
file_contains
file_not_contains
command_succeeds
```

## Result Statuses

The runner reports:

```text
passed
failed
blocked
skipped
limited
not_run
```

The initial runner primarily emits:

```text
passed
failed
blocked
skipped
```

## Read-Only Boundary

The runner must not mutate repository files.

The initial harness does not write result files by default.

The `tools/eval/results/` directory is reserved for future result artifacts.

## Security Boundary

Evaluation cases must only inspect explicitly listed repository-relative files.

Do not add evaluation cases that read:

1. `.env` files;
2. private keys;
3. tokens;
4. credentials;
5. cloud secrets;
6. SSH keys;
7. dependency directories;
8. generated caches;
9. user-private files;
10. files outside the repository.

## Relationship to Repo Contract

The repo contract script checks repository structure and anchor expectations.

The evaluation harness checks repository-governed SDLC behavior.

The two intentionally overlap at first.

Over time, the evaluation harness may become the broader behavioral and regression layer, while `tools/check-repo-contract.sh` remains the structural guard.

## Relationship to CI

This harness is not added to CI in the baseline packet.

A future packet should plan and implement CI integration after local execution is stable.

## Runtime Hardening Cases

The harness includes runtime hardening coverage for the work-packet core package.

Current hardening case:

```text
EVAL-0008 Work packet core validation behavior is covered.
```

This case verifies validation constants, edge-case tests, and the local Bun test command.

## Runtime Parser Cases

The harness includes runtime parser coverage for the work-packet core package.

Current parser case:

```text
EVAL-0009 Work packet frontmatter parser exists.
```

This case verifies parser source, parser tests, public exports, parser error codes, key field mapping, and the local Bun test command.

## Runtime Document Validation Cases

The harness includes runtime document validation coverage for the work-packet core package.

Current document validation case:

```text
EVAL-0010 Work packet document validation exists.
```

This case verifies document validator source, tests, public exports, validation composition, parser integration, metadata validation integration, Markdown validation integration, error behavior, warning preservation, and the local Bun test command.


## Runtime File Loading Cases

The harness includes runtime file-loading coverage for the work-packet core package.

Current file-loading case:

```text
EVAL-0011 Work packet file loading exists.
```

This case verifies file-loading source, tests, public exports, file-read error behavior, document validator composition, valid file behavior, missing file behavior, and the local Bun test command.