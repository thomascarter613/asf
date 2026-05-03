---
id: WP-0047
title: Work Packet CLI Status and Hardening Review
status: "ready"
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
decision_authority: Principal Software Engineer / Product Architect
type: work-packet
scope: work-packet-governance
phase: runtime-hardening
commit: docs(work-packet): review validation cli hardening
canonical: true
description: >
  Review the newly added work-packet validation CLI baseline before expanding it
  with JSON output, repository-wide validation, safe-path policy, glob support, or
  directory traversal behavior.
audience:
  - maintainers
  - contributors
  - principal-engineering-reviewers
  - qa-reviewers
  - security-reviewers
related_documents:
  - docs/work-packets/WP-0045-work-packet-cli-runtime-baseline-plan.md
  - docs/work-packets/WP-0046-work-packet-cli-runtime-baseline.md
related_packages:
  - packages/work-packet-core
  - packages/work-packet-cli
affected_files:
  - package.json
  - .github/workflows/ci.yml
  - tools/check-repo-contract.sh
  - tools/eval/README.md
  - tools/eval/cases/README.md
  - tools/eval/cases/EVAL-0012-work-packet-cli.json
  - packages/work-packet-core/src/work-packet-frontmatter.ts
  - packages/work-packet-core/src/work-packet-frontmatter.test.ts
  - packages/work-packet-cli/package.json
  - packages/work-packet-cli/README.md
  - packages/work-packet-cli/tsconfig.json
  - packages/work-packet-cli/src/index.ts
  - packages/work-packet-cli/src/cli.ts
  - packages/work-packet-cli/src/exit-codes.ts
  - packages/work-packet-cli/src/format.ts
  - packages/work-packet-cli/src/cli.test.ts
recommended_commit: "docs(work-packet): review validation cli hardening"
---

# WP-0047: Work Packet CLI Status and Hardening Review

## 1. Purpose

WP-0047 is a documentation and engineering review packet for the work-packet validation CLI introduced in WP-0046.

The purpose of this packet is to pause after the first CLI runtime slice and confirm that the CLI baseline is coherent, bounded, testable, and ready for future hardening work.

This packet must not add new runtime features.

## 2. Current State

WP-0046 introduced a dependency-free CLI runtime package for validating individual work-packet Markdown files.

The expected baseline is:

- A workspace package at `packages/work-packet-cli/`.
- A root script named `work-packet`.
- A command form:

  ```bash
  bun run work-packet validate <path>
````

* Help command support:

  ```bash
  bun run work-packet --help
  bun run work-packet help
  bun run work-packet validate --help
  ```

* Explicit process exit codes:

  | Name                | Code | Meaning                                                                 |
  | ------------------- | ---: | ----------------------------------------------------------------------- |
  | `SUCCESS`           |  `0` | Command completed successfully.                                         |
  | `VALIDATION_FAILED` |  `1` | A work-packet document was loaded and validated, but validation failed. |
  | `USAGE_ERROR`       |  `2` | The user invoked the CLI incorrectly.                                   |
  | `UNEXPECTED_ERROR`  |  `3` | The command encountered an unexpected runtime error.                    |

* Plain-text validation output:

  * `PASS` for valid files.
  * `FAIL` for invalid files.
  * Errors and warnings displayed separately.

## 3. Review Scope

This packet reviews the WP-0046 CLI baseline across the following areas:

1. Command surface.
2. Exit-code contract.
3. Plain-text output contract.
4. Root package script integration.
5. Workspace package boundaries.
6. CI integration.
7. Repo-contract coverage.
8. Evaluation coverage.
9. Frontmatter parser warning behavior.
10. Runtime feature boundaries.
11. Next hardening sequence.

## 4. Non-Goals

WP-0047 must not implement any of the following:

* JSON output.
* Repository-wide validation.
* Recursive directory traversal.
* Glob support.
* Safe-path policy.
* File discovery policy.
* Work-packet index generation.
* Automatic fixing.
* Markdown rewriting.
* Frontmatter rewriting.
* Additional command groups.
* Network access.
* External CLI framework dependencies.
* Persistent state.

Those capabilities should be handled in later work packets after this review confirms the current baseline.

## 5. Review Finding: Command Surface

### 5.1 Expected Command Surface

The CLI should expose one primary runtime operation:

```bash
bun run work-packet validate <path>
```

The CLI should also expose help surfaces:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate --help
```

### 5.2 Review Standard

The command surface is acceptable if:

* The root script is discoverable from `package.json`.
* The CLI package owns command parsing.
* `validate` requires exactly one path argument.
* Missing command names produce a usage error.
* Unknown command names produce a usage error.
* Unknown flags produce a usage error unless they are recognized help flags.
* Help output exits successfully.
* Validation does not silently pass when no path is provided.

### 5.3 Review Outcome

The WP-0046 command surface is acceptable as an initial baseline if it meets the above standard.

No new commands should be added until the validation command is hardened.

## 6. Review Finding: Exit-Code Contract

### 6.1 Expected Exit Codes

The CLI should use the following explicit exit-code contract:

| Scenario                                      | Expected Exit Code |
| --------------------------------------------- | -----------------: |
| Help requested successfully                   |                `0` |
| Valid work-packet file                        |                `0` |
| Invalid work-packet file                      |                `1` |
| Missing command                               |                `2` |
| Unknown command                               |                `2` |
| Missing validate path                         |                `2` |
| Too many validate arguments                   |                `2` |
| Unreadable file or unexpected runtime failure |                `3` |

### 6.2 Review Standard

The exit-code contract is acceptable if:

* Exit codes are centralized.
* Tests assert the meaningful exit-code cases.
* Validation failures are not conflated with CLI usage errors.
* Usage errors are not conflated with unexpected runtime errors.
* Unexpected errors remain visibly distinct.

### 6.3 Review Outcome

The current split between validation failure, usage error, and unexpected error should be preserved.

Future work must not collapse these categories.

## 7. Review Finding: Plain-Text Output Contract

### 7.1 Expected Output

For valid files, output should clearly include:

```text
PASS
```

For invalid files, output should clearly include:

```text
FAIL
```

Validation errors and warnings should be printed separately.

### 7.2 Review Standard

The output contract is acceptable if:

* Human-readable output is stable enough for maintainers.
* Error and warning categories are not mixed together.
* Valid files do not produce warning floods for known ASF metadata.
* Output remains dependency-free.
* Output does not require terminal color support.
* Output remains readable in CI logs.
* Output remains readable when redirected to a plain file.

### 7.3 Review Outcome

Plain-text output is the correct first baseline.

JSON output should be introduced later as an additive mode, not as a replacement for the human-readable output.

## 8. Review Finding: Root Script Integration

### 8.1 Expected Root Script

The repository root should expose:

```bash
bun run work-packet
```

The root script should delegate to the CLI package without requiring maintainers to manually enter the package directory.

### 8.2 Review Standard

Root script integration is acceptable if:

* `bun run work-packet --help` works from the repository root.
* `bun run work-packet validate <path>` works from the repository root.
* Workspace imports resolve after a normal `bun install`.
* The root script does not assume `pnpm`.
* The root script does not introduce Bazel.
* The root script does not require global installation.

### 8.3 Review Outcome

The root script is part of the CLI’s public maintainer contract and should be preserved.

Any future package or script reorganization must keep this root-level maintainer entrypoint stable unless superseded by an ADR or later work packet.

## 9. Review Finding: Workspace Package Boundary

### 9.1 Expected Boundary

The CLI package should be responsible for:

* Argument parsing.
* Help text.
* Process exit-code selection.
* Human-readable CLI output.
* Calling the core validation API.

The core package should remain responsible for:

* Work-packet status typing.
* Metadata validation.
* Markdown section validation.
* Frontmatter parsing.
* Full work-packet document validation.
* File loading and validation primitives.

### 9.2 Review Standard

The boundary is acceptable if:

* The CLI package does not duplicate validation rules from the core package.
* The CLI package does not own work-packet domain semantics.
* The core package does not own CLI rendering.
* The core package does not own process exit behavior.
* The CLI package depends on the core package, not the reverse.
* Both packages remain dependency-free unless a later packet intentionally changes that constraint.

### 9.3 Review Outcome

The current package boundary is correct.

Future hardening should preserve this separation.

## 10. Review Finding: CI Integration

### 10.1 Expected CI Coverage

The repository verification path should include enough coverage to catch obvious regressions in:

* TypeScript compilation.
* Core validation behavior.
* CLI behavior.
* Evaluation fixtures.
* Repo-contract anchors.
* Formatting and diff hygiene.

### 10.2 Review Standard

CI integration is acceptable if the following commands are expected to pass before committing:

```bash
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
bun run work-packet --help
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
git status --short
```

### 10.3 Review Outcome

The current verification set is appropriate for this maturity stage.

Later packets may add narrower command-specific verification, but the broad baseline should remain available.

## 11. Review Finding: Repo-Contract Anchors

### 11.1 Expected Anchors

The repo-contract checker should be aware that the CLI baseline exists.

At minimum, repo-contract checks should protect against accidental removal of:

* The CLI package directory.
* The CLI package manifest.
* The CLI source entrypoint.
* The root `work-packet` script.
* The CLI evaluation fixture.

### 11.2 Review Standard

Repo-contract coverage is acceptable if it prevents silent removal of the work-packet CLI baseline.

The repo-contract checker does not need to validate every implementation detail.

### 11.3 Review Outcome

The repo-contract checker should remain a structural guardrail, not a replacement for unit tests or evaluations.

## 12. Review Finding: Evaluation Coverage

### 12.1 Expected Evaluation Coverage

The evaluation suite should include a case for the work-packet CLI baseline.

The evaluation case should document the expected CLI contract in a machine-readable or reviewable form.

### 12.2 Review Standard

Evaluation coverage is acceptable if:

* The CLI baseline appears in `tools/eval/cases/`.
* The evaluation README references the existence or purpose of evaluation cases.
* The CLI evaluation case is stable enough to prevent accidental behavioral drift.
* Evaluation fixtures do not require network access.
* Evaluation fixtures do not require external service credentials.

### 12.3 Review Outcome

Evaluation coverage should continue to track public maintainer behavior, not internal implementation details.

## 13. Review Finding: Frontmatter Parser Warning Cleanup

### 13.1 Context

The dependency-free frontmatter parser must tolerate known ASF metadata fields without producing warning floods.

Known ASF metadata includes fields such as:

* `description`
* `audience`
* `canonical`
* `backlog_refs`
* `adr_refs`
* `related_documents`
* `affected_files`

### 13.2 Review Standard

The parser behavior is acceptable if:

* Known ASF metadata fields are ignored when they are not part of the core validation metadata model.
* Known ASF list blocks do not generate warning floods.
* Real parsing issues can still surface as warnings.
* Explicit `id` and `work_packet_id` mismatches can still produce a mismatch warning through metadata validation.
* Parser cleanup does not broaden into a general YAML implementation.

### 13.3 Review Outcome

The warning cleanup is correct for the current dependency-free parser strategy.

The parser should remain intentionally narrow until an ADR or later work packet authorizes a general YAML dependency.

## 14. Review Finding: Runtime Boundary

### 14.1 Current Runtime Boundary

The current runtime boundary is intentionally small:

* Load one caller-provided work-packet file.
* Validate the document using the core package.
* Print a plain-text result.
* Exit with an explicit code.

### 14.2 Boundary Standard

The CLI should not expand beyond this boundary in WP-0047.

The following capabilities require separate packets:

| Capability               | Reason It Requires Separate Packet                         |
| ------------------------ | ---------------------------------------------------------- |
| JSON output              | Introduces machine-readable output contract.               |
| Directory validation     | Introduces traversal semantics and result aggregation.     |
| Glob support             | Introduces shell/platform behavior concerns.               |
| Safe-path policy         | Introduces security and repository-boundary policy.        |
| Repo-wide validation     | Introduces discovery, ignore rules, and ordering concerns. |
| Output format versioning | Introduces API-like compatibility commitments.             |
| Automatic fixing         | Introduces write behavior and data-loss risk.              |

### 14.3 Review Outcome

The current narrow runtime boundary is correct.

The next implementation packet should add one capability at a time.

## 15. Hardening Risks

The main risks after WP-0046 are:

1. CLI behavior may expand too quickly without a stable output contract.
2. JSON output could be added before the plain-text behavior is stable.
3. Directory traversal could be added before safe-path policy exists.
4. Glob handling could produce inconsistent behavior across shells and platforms.
5. Validation rules could be duplicated in the CLI package.
6. The frontmatter parser could drift toward an incomplete YAML parser.
7. Exit codes could become inconsistent as commands are added.
8. Evaluation cases could become stale if they describe files but do not protect behavior.
9. Repo-contract checks could become too broad and brittle.
10. Future contributors may confuse validation failures with usage errors.

## 16. Recommended Next Sequence

The recommended post-review implementation sequence is:

1. `WP-0048`: Define CLI output contract and compatibility policy.
2. `WP-0049`: Add JSON output mode for single-file validation.
3. `WP-0050`: Add safe-path policy for work-packet CLI file access.
4. `WP-0051`: Add repository work-packet discovery policy.
5. `WP-0052`: Add repo-wide work-packet validation command.
6. `WP-0053`: Add directory and glob validation support if still needed.
7. `WP-0054`: Add work-packet validation summary reports.
8. `WP-0055`: Add CI-facing validation mode.

This sequence keeps behavior review, output contracts, safety policy, and traversal semantics separated.

## 17. Acceptance Criteria

WP-0047 is complete when:

* This review document exists.
* The review remains documentation-only.
* The document confirms the expected WP-0046 CLI baseline.
* The document identifies the correct boundaries for future runtime work.
* The document preserves the distinction between validation failure, usage error, and unexpected error.
* The document explicitly defers JSON output, repo-wide validation, safe-path policy, glob support, and directory traversal to later packets.
* Repository verification passes locally before commit.

## 18. Verification

Run the following from the repository root:

```bash
git status --short
git diff --check
bun run work-packet validate docs/work-packets/WP-0047-work-packet-cli-status-and-hardening-review.md
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git status --short
```

Do not claim verification passed unless the command output proves it.

## 19. Commit

If verification passes and the only intended change is this document, commit with:

```bash
git add docs/work-packets/WP-0047-work-packet-cli-status-and-hardening-review.md
git commit -m "docs(work-packet): review validation cli hardening"
```

Then push:

```bash
git push
```

## 20. Done State

WP-0047 is done when the documentation review is committed and pushed with:

```text
docs(work-packet): review validation cli hardening
```

No runtime feature work should be included in this commit.

## Scope

This normalization section preserves the historical work-packet intent while aligning the document with the current ASF work-packet validation contract.

## Verification Commands

Run the relevant repository verification commands for this historical packet:

```bash
bun run verify
bash tools/eval/run-evaluations.sh
bun run work-packet validate-repo
```

## Recommended Atomic Commit

```text
docs(work-packet): review validation cli hardening
```
