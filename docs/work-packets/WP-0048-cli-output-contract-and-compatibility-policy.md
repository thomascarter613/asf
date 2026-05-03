---
id: WP-0048
title: CLI Output Contract and Compatibility Policy
status: planned
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
decision_authority: Principal Software Engineer / Product Architect
type: work-packet
scope: work-packet-governance
phase: runtime-hardening
commit: docs(work-packet): define cli output contract
canonical: true
description: >
  Define the human-readable CLI output contract and compatibility policy for the
  work-packet validation CLI before adding JSON output, repository-wide
  validation, directory traversal, glob support, or CI-specific output modes.
audience:
  - maintainers
  - contributors
  - principal-engineering-reviewers
  - qa-reviewers
  - ci-maintainers
related_documents:
  - docs/work-packets/WP-0046-work-packet-cli-runtime-baseline.md
  - docs/work-packets/WP-0047-work-packet-cli-status-and-hardening-review.md
related_packages:
  - packages/work-packet-core
  - packages/work-packet-cli
affected_files:
  - docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
  - packages/work-packet-cli/src/format.ts
  - packages/work-packet-cli/src/cli.ts
  - packages/work-packet-cli/src/exit-codes.ts
  - packages/work-packet-cli/src/cli.test.ts
  - packages/work-packet-cli/README.md
---

# WP-0048: CLI Output Contract and Compatibility Policy

## 1. Purpose

WP-0048 defines the output contract and compatibility policy for the ASF work-packet validation CLI.

The CLI currently validates one caller-provided work-packet Markdown file and prints plain-text output. Before adding JSON output, repo-wide validation, safe-path policy, glob support, directory traversal, or CI-specific modes, ASF needs a stable statement of what maintainers may rely on when reading or automating around the CLI.

This packet is documentation-first.

It does not require runtime code changes unless later verification proves that the current implementation violates this contract.

## 2. Current State

The work-packet CLI currently exposes the following intended command surface:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate --help
bun run work-packet validate <path>
````

The current intended exit-code contract is:

| Name                | Code | Meaning                                                             |
| ------------------- | ---: | ------------------------------------------------------------------- |
| `SUCCESS`           |  `0` | Command completed successfully.                                     |
| `VALIDATION_FAILED` |  `1` | A work-packet file was loaded and validated, but validation failed. |
| `USAGE_ERROR`       |  `2` | The user invoked the CLI incorrectly.                               |
| `UNEXPECTED_ERROR`  |  `3` | The command encountered an unexpected runtime error.                |

The current intended plain-text validation result markers are:

| Marker | Meaning                                                           |
| ------ | ----------------------------------------------------------------- |
| `PASS` | The validated file satisfied the work-packet validation contract. |
| `FAIL` | The validated file was loaded and parsed, but failed validation.  |

## 3. Policy Summary

The ASF work-packet CLI must support two categories of output:

1. Human-readable plain-text output.
2. Future machine-readable output modes.

The current baseline only formalizes human-readable plain-text output.

Machine-readable output must be added later as an explicit mode and must not silently replace the plain-text default.

## 4. Output Design Principles

The CLI output should follow these principles:

1. Be readable in local terminals.
2. Be readable in CI logs.
3. Be readable when redirected to a plain file.
4. Avoid color as required meaning.
5. Avoid terminal control sequences by default.
6. Preserve explicit `PASS` and `FAIL` result markers.
7. Separate validation errors from validation warnings.
8. Keep validation failures distinct from CLI usage errors.
9. Keep unexpected runtime failures distinct from validation failures.
10. Avoid exposing stack traces during expected validation failures.
11. Avoid output churn unless a later work packet intentionally revises the contract.
12. Avoid introducing external formatting dependencies until there is a clear need.

## 5. Streams Policy

The CLI should use standard output and standard error intentionally.

### 5.1 Standard Output

Standard output is for successful command content and ordinary validation result content.

Examples:

* Help text.
* `PASS` result output.
* `FAIL` result output when validation completed normally.
* Validation issue summaries.
* Human-readable validation details.

### 5.2 Standard Error

Standard error is for invocation and runtime problems.

Examples:

* Missing command.
* Unknown command.
* Missing required path.
* Too many arguments.
* Unreadable file.
* Unexpected runtime error.

### 5.3 Validation Failure Is Not a Runtime Error

A validation failure means the CLI successfully loaded and evaluated a file, but the file did not satisfy the work-packet contract.

Therefore, validation failure should produce exit code `1`, not `2` or `3`.

Validation failure output may appear on standard output because it is expected command output, not a crash.

## 6. Default Plain-Text Validation Output

The default validation command should produce a stable plain-text shape.

For a valid file, output should include:

```text
PASS
```

For an invalid file, output should include:

```text
FAIL
```

If errors exist, output should identify them under an errors section.

If warnings exist, output should identify them under a warnings section.

The exact formatting may remain human-oriented, but the category labels and result markers should remain stable.

## 7. Required Human-Readable Fields

For single-file validation, the plain-text output should make the following information clear:

| Field            | Required                 | Notes                                             |
| ---------------- | ------------------------ | ------------------------------------------------- |
| Result marker    | Yes                      | Must clearly show `PASS` or `FAIL`.               |
| File path        | Yes                      | Should identify the validated path.               |
| Error count      | Yes, when nonzero        | Should make failure scale visible.                |
| Warning count    | Yes, when nonzero        | Should make warning scale visible.                |
| Errors section   | Yes, when errors exist   | Should be separate from warnings.                 |
| Warnings section | Yes, when warnings exist | Should be separate from errors.                   |
| Issue codes      | Yes, when available      | Should help maintainers search and test failures. |
| Issue messages   | Yes                      | Should explain the problem.                       |

## 8. Human-Readable Output Stability

The plain-text output is a maintainer interface, not a public API with strict semantic versioning yet.

However, ASF maintainers may rely on the following as stable within the current CLI maturity stage:

1. `PASS` means validation succeeded.
2. `FAIL` means validation completed but failed.
3. Exit code `0` means command success.
4. Exit code `1` means validation failure.
5. Exit code `2` means usage error.
6. Exit code `3` means unexpected runtime error.
7. Errors and warnings are separate categories.
8. Help commands exit successfully.
9. The default output mode remains plain text.
10. The CLI remains dependency-free unless changed by a later work packet.

## 9. Compatibility Policy

### 9.1 Additive Changes

The following changes are considered additive and may be introduced in later packets:

* Adding JSON output behind an explicit flag.
* Adding a summary line to existing plain-text output.
* Adding issue codes where absent.
* Adding documentation links.
* Adding a `--quiet` mode.
* Adding a `--strict` mode.
* Adding a `--format` flag.
* Adding CI-oriented output after the default contract is stable.

### 9.2 Breaking Changes

The following changes are considered breaking within the current CLI contract:

* Removing `PASS`.
* Removing `FAIL`.
* Changing validation failure exit code from `1`.
* Changing usage error exit code from `2`.
* Changing unexpected error exit code from `3`.
* Making JSON the default output without an explicit compatibility decision.
* Mixing errors and warnings into a single undifferentiated list.
* Requiring color or terminal capabilities to understand results.
* Requiring network access.
* Requiring global package installation.
* Requiring a package manager other than Bun.
* Moving validation domain rules from `work-packet-core` into `work-packet-cli`.

### 9.3 Allowed Internal Refactors

The implementation may be refactored without a compatibility concern if the observable contract remains intact.

Allowed refactors include:

* Renaming internal functions.
* Reorganizing formatter helpers.
* Adding internal test helpers.
* Improving issue sorting.
* Improving help text wording.
* Improving TypeScript types.
* Reorganizing command parsing internals.

## 10. Output Mode Policy

The default output mode is plain text.

Future output modes should be explicit.

Recommended future flag shape:

```bash
bun run work-packet validate <path> --format text
bun run work-packet validate <path> --format json
```

The shorthand below may be considered later, but should not be introduced before the explicit format policy is implemented:

```bash
bun run work-packet validate <path> --json
```

If both forms are eventually supported, `--json` should be equivalent to `--format json`.

## 11. JSON Output Deferral

JSON output is intentionally deferred.

It should be introduced in a later work packet because it requires a stronger schema contract.

Before JSON output is implemented, ASF should decide:

1. Top-level JSON shape.
2. Schema versioning policy.
3. Whether paths are absolute, relative, or caller-preserved.
4. Whether issue ordering is stable.
5. Whether warnings can exist when validation passes.
6. Whether machine-readable output includes human-readable messages.
7. Whether JSON output writes only to standard output.
8. Whether runtime errors also produce JSON when JSON mode is requested.
9. Whether JSON output should include package version information.
10. Whether JSON output should be covered by snapshot tests or structural assertions.

## 12. Issue Ordering Policy

Plain-text output should use deterministic ordering.

Recommended ordering:

1. Validation errors before warnings.
2. Within each category, preserve core validator issue ordering unless there is a reason to sort.
3. Avoid nondeterministic ordering based on object key enumeration if it can affect output.
4. Avoid path ordering questions until repo-wide validation is introduced.

Issue ordering becomes more important after multi-file validation exists.

## 13. Path Display Policy

For the current single-file command, the CLI should display the path supplied by the caller or a normalized repository-relative path.

The CLI should not expose unrelated absolute host details unless necessary to explain a runtime failure.

Future safe-path work should decide:

* Whether inputs must remain inside the repository root.
* Whether absolute paths are allowed.
* Whether symlinks are followed.
* Whether path traversal patterns are rejected.
* Whether output paths are normalized relative to the repository root.

## 14. Color Policy

Color must not be required for comprehension.

A future packet may add optional color, but the default output must remain understandable without it.

Color support must not be used as the only distinction between:

* pass and fail,
* errors and warnings,
* usage errors and runtime errors.

## 15. Help Output Policy

Help output should be stable enough for maintainers to understand command usage.

Help output must include:

* Primary command form.
* Available commands.
* Validation command usage.
* Exit-code summary or pointer to documented exit-code behavior.
* Statement that the current validation command accepts one caller-provided file path.

Help output should not promise future features until those features exist.

## 16. Error Message Policy

Usage errors should be concise and actionable.

A usage error should tell the caller:

1. What was wrong.
2. Which command form is expected.
3. How to request help.

Unexpected runtime errors should avoid pretending that validation completed.

For example:

* Missing path: usage error.
* Unknown command: usage error.
* File cannot be read: unexpected error.
* File loads and fails validation: validation failure.

## 17. Test Policy

CLI output tests should avoid overfitting to decorative formatting.

Tests should assert:

* Exit code.
* Presence of `PASS` or `FAIL`.
* Presence of expected issue categories.
* Presence of meaningful issue codes or messages.
* Help command success.
* Usage error exit codes.
* Unexpected error exit codes where practical.

Tests should avoid fragile assertions against whitespace unless whitespace is part of the explicit contract.

## 18. Evaluation Policy

Evaluation cases should describe externally meaningful behavior.

The evaluation suite should cover:

* CLI package presence.
* Root script presence.
* Validation command existence.
* Help behavior.
* Exit-code expectations.
* Plain-text output expectations.
* Relationship between CLI and core package.

Evaluation cases should not duplicate all unit tests.

## 19. Runtime Boundary

WP-0048 does not expand runtime behavior.

The CLI remains bounded to:

* receiving a caller-provided path,
* validating one file,
* printing human-readable output,
* returning an explicit exit code.

The following remain deferred:

* JSON output,
* repo-wide validation,
* directory traversal,
* glob support,
* safe-path enforcement,
* output schema versioning,
* automatic fixing,
* machine-readable reports.

## 20. Security Considerations

The output contract should not encourage unsafe future behavior.

The CLI should avoid:

* writing files during validation,
* following broad traversal behavior without policy,
* reading outside intended project boundaries once safe-path policy exists,
* leaking unrelated environment details,
* printing stack traces for normal validation failures,
* treating untrusted Markdown as executable content.

## 21. Documentation Updates for Later Packets

Later implementation packets should update:

* `packages/work-packet-cli/README.md`
* relevant work-packet docs,
* CLI tests,
* evaluation cases,
* repo-contract checks if new structural anchors are introduced.

The README should remain aligned with the actual CLI behavior.

## 22. Acceptance Criteria

WP-0048 is complete when:

* This output contract document exists.
* The document defines the default plain-text output contract.
* The document defines the stream policy.
* The document defines compatibility expectations.
* The document distinguishes additive changes from breaking changes.
* The document defers JSON output to a later implementation packet.
* The document preserves the current exit-code contract.
* The document preserves the separation between validation errors and warnings.
* The document does not add runtime behavior.
* Repository verification passes before commit.

## 23. Verification

Run from the repository root:

```bash
git status --short
git diff --check
bun run work-packet validate docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git status --short
```

Do not claim verification passed unless the command output proves it.

## 24. Commit

If verification passes and the only intended change is this document, commit with:

```bash
git add docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
git commit -m "docs(work-packet): define cli output contract"
```

Then push:

```bash
git push
```

## 25. Done State

WP-0048 is done when the documentation contract is committed and pushed with:

```text
docs(work-packet): define cli output contract
```

No runtime feature work should be included in this commit.