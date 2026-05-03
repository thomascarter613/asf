---
title: "Package and Tooling Baseline"
description: "Package and tooling baseline plan for the Agentic Software Framework, defining package-manager strategy, lockfile expectations, local command categories, formatting, linting, typechecking, testing, repo contract integration, CI relationship, and future tooling setup sequence before package files or runtime code are introduced."
status: "proposed"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "product-manager"
  - "technical-program-manager"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "package-and-tooling-baseline"
canonical: false
related_documents:
  - "README.md"
  - "tree"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md"
  - "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
  - "docs/domain/00-domain-model.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/work-packets/WP-0019-package-and-tooling-baseline.md"
  - "tools/check-repo-contract.sh"
---

# Package and Tooling Baseline

## 1. Purpose

This document defines the package and tooling baseline for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

The purpose of this baseline is to define package-manager strategy, local command conventions, lockfile expectations, formatting, linting, typechecking, testing, repo contract integration, future CI relationship, and future evaluation harness integration before package files, source-code directories, runtime code, or CI workflows are introduced.

This document is planning-only.

It does not create:

1. `package.json`
2. `pnpm-lock.yaml`
3. `bun.lock`
4. `pyproject.toml`
5. `uv.lock`
6. `Cargo.toml`
7. `Cargo.lock`
8. `.github/workflows/ci.yml`
9. `src/`
10. `packages/`
11. `apps/`
12. `services/`
13. Runtime implementation code.

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

Package and tooling work must proceed from the actual accepted repository state.

Therefore:

1. Package tooling must not be added silently.
2. Lockfiles must not be created accidentally.
3. Runtime directories must not be scaffolded before an authorized packet.
4. CI must not be introduced before local command conventions are defined.
5. Existing ADRs must not be changed by tooling setup.
6. The repo contract script remains the current executable local verification entry point.
7. Future package scripts should wrap stable local verification behavior rather than invent new behavior.

---

## 3. Current Package and Tooling Status

Current status:

| Area | Status | Notes |
| --- | --- | --- |
| Package-manager setup | Not present | No package files or lockfiles exist yet. |
| Runtime code | Not present | Runtime implementation has not started. |
| CI workflows | Not present | No `.github/workflows/ci.yml` exists yet. |
| Repo contract script | Present | `tools/check-repo-contract.sh` exists and is executable. |
| Evaluation harness | Documentation-level only | No executable evaluation harness exists yet. |
| Formatting config | Not present | No formatter config has been introduced. |
| Linting config | Not present | No linter config has been introduced. |
| Typechecking config | Not present | No typechecker config has been introduced. |
| Test framework | Not present | No test framework has been introduced. |

Current executable verification command:

```bash
./tools/check-repo-contract.sh
git diff --check
```

---

## 4. Related ADRs

This baseline should remain aligned with these ADRs:

```text
ADR-0011: Dependency Pinning Policy
ADR-0014: Polyglot Language Strategy
ADR-0019: Primary Package Managers
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

Important constraint:

```text
This plan does not silently change ADR-0019.
```

The current ADR-0019 filename indicates the expected package-manager direction:

```text
uv
cargo
pnpm
```

Any change to this strategy should happen through an explicit ADR update or supersession packet.

---

## 5. Package-Manager Strategy

## 5.1 Strategy Statement

The package-manager strategy should be polyglot but disciplined.

Current intended direction:

| Ecosystem | Expected Tool | Use When |
| --- | --- | --- |
| Python | `uv` | Python modules, evaluation tooling, retrieval experiments, scripting, or ML-adjacent work. |
| Rust | `cargo` | Rust crates, performance-sensitive tooling, runners, parsers, or future execution components. |
| TypeScript / JavaScript | `pnpm` | TypeScript packages, CLI tooling, web interfaces, contract tooling, and monorepo package orchestration. |

## 5.2 Strategy Rules

Rules:

1. Do not introduce a package manager before an explicit tooling setup packet authorizes it.
2. Do not create lockfiles until the associated package manager is introduced.
3. Commit exact lockfiles when package managers are introduced.
4. Keep package-manager usage aligned with ADR-0011 and ADR-0019.
5. Do not mix package managers for the same ecosystem without an explicit decision.
6. Do not add runtime dependencies before the first runtime slice is authorized.
7. Do not add CI before local package/tooling commands are stable.

## 5.3 Current Decision Boundary

This baseline defines strategy.

It does not execute setup.

A future packet must authorize actual package files.

Suggested future packet:

```text
Package and Tooling Setup
```

Potential outputs only after explicit approval:

```text
package.json
pnpm-lock.yaml
pyproject.toml
uv.lock
Cargo.toml
Cargo.lock
```

---

## 6. Dependency Pinning and Lockfile Expectations

## 6.1 Lockfile Expectations

Lockfile expectations:

1. Lockfiles should be committed.
2. Dependency versions should be pinned or locked.
3. Package-manager commands should use frozen or locked installs in verification and CI.
4. Runtime dependency introduction should be scoped to the active work packet.
5. Development dependencies should be justified by tooling need.
6. Generated lockfile changes should be reviewed in the same commit as the dependency change.

## 6.2 Ecosystem-Specific Expectations

Expected lockfiles by ecosystem:

| Ecosystem | Expected Lockfile |
| --- | --- |
| Python / `uv` | `uv.lock` |
| Rust / `cargo` | `Cargo.lock` |
| TypeScript / `pnpm` | `pnpm-lock.yaml` |

## 6.3 What Is Not Created Yet

This baseline does not create:

```text
uv.lock
Cargo.lock
pnpm-lock.yaml
```

Lockfiles should appear only after package-manager setup is explicitly authorized.

---

## 7. Local Command Categories

Future package scripts or local commands should use a stable command taxonomy.

These commands may not exist yet.

## 7.1 Core Verification Commands

Expected future command categories:

```text
verify
verify:repo
format
format:check
lint
typecheck
test
test:unit
test:integration
eval
eval:check
```

## 7.2 Current Command

Current executable verification command:

```bash
./tools/check-repo-contract.sh
```

## 7.3 Future Command Intent

Future commands should mean:

| Command | Intended Meaning |
| --- | --- |
| `verify` | Run all stable local checks appropriate for current repo maturity. |
| `verify:repo` | Run repo contract and repository-structure checks. |
| `format` | Apply formatting if formatting tools exist. |
| `format:check` | Check formatting without mutation. |
| `lint` | Run static lint checks. |
| `typecheck` | Run typecheckers for configured languages. |
| `test` | Run all available tests. |
| `test:unit` | Run unit tests. |
| `test:integration` | Run integration tests. |
| `eval` | Run executable evaluation harness when it exists. |
| `eval:check` | Validate evaluation cases or run non-mutating evaluation checks. |

## 7.4 Command Rules

Rules:

1. `verify` should be the primary local confidence command.
2. CI should call stable local commands.
3. Package scripts should call `tools/check-repo-contract.sh` rather than duplicating its logic.
4. Mutating commands should be clearly distinguished from non-mutating commands.
5. Verification commands must not hide failures.
6. Commands must not require runtime code before runtime code exists.

---

## 8. Formatting Baseline

Current status:

```text
No formatter has been introduced yet.
```

Future formatting baseline should define:

1. Which file types are formatted.
2. Which formatter is used per ecosystem.
3. Whether formatting is automatic or check-only in CI.
4. How Markdown formatting is handled.
5. Whether generated files are excluded.
6. How formatting interacts with `git diff --check`.

Potential future direction:

| File Type | Potential Formatter |
| --- | --- |
| Markdown | Formatter or linting policy to be selected later. |
| TypeScript / JavaScript | Tooling to be selected in package setup. |
| Python | Tooling to be selected in Python setup. |
| Rust | `rustfmt` if Rust is introduced. |

This baseline does not select or install formatters.

---

## 9. Linting Baseline

Current status:

```text
No linter has been introduced yet.
```

Future linting baseline should define:

1. Linter per ecosystem.
2. Scope of lint checks.
3. Whether docs are linted.
4. Whether shell scripts are linted.
5. Whether ADR/work-packet conventions are linted.
6. Which lint failures are blocking.
7. How linting is invoked locally and in CI.

Potential future lint targets:

1. Shell scripts.
2. Markdown documents.
3. TypeScript code.
4. Python code.
5. Rust code.
6. YAML files.
7. JSON files.

This baseline does not introduce lint tooling.

---

## 10. Typechecking Baseline

Current status:

```text
No typechecking configuration has been introduced yet.
```

Future typechecking should be introduced only after language-specific package setup exists.

Potential typecheck paths:

| Ecosystem | Future Typecheck |
| --- | --- |
| TypeScript | `tsc --noEmit` or equivalent configured command. |
| Python | Static type checker to be selected later if Python package exists. |
| Rust | `cargo check`. |

Rules:

1. Do not add typechecking before language package boundaries exist.
2. Do not require typechecking for languages not yet present.
3. Do not make CI depend on typecheck commands before local commands exist.

---

## 11. Testing Baseline

Current status:

```text
No runtime test framework exists yet.
```

Existing test-like checks:

```text
tools/check-repo-contract.sh
git diff --check
```

Future testing categories:

1. Repo contract tests.
2. Unit tests.
3. Integration tests.
4. Evaluation harness tests.
5. Retrieval quality evaluations.
6. Agent execution evaluations.
7. Security and exclusion checks.

Rules:

1. Runtime tests should follow runtime code.
2. Evaluation harness tests should follow evaluation harness planning.
3. Repo contract checks should remain available before runtime implementation.
4. Tests must be reproducible locally before CI depends on them.

---

## 12. Repo Contract Integration

The current repo contract script is:

```text
tools/check-repo-contract.sh
```

The package/tooling baseline should eventually integrate this script into package commands.

Future package command expectation:

```text
verify:repo -> ./tools/check-repo-contract.sh
```

Future root verification expectation:

```text
verify -> verify:repo plus other stable checks
```

Rules:

1. Do not duplicate repo contract logic in package scripts.
2. Package scripts should call the existing script.
3. CI should call the same local verification entry points.
4. The repo contract script should remain non-mutating.
5. The script should be updated through explicit packets when the baseline expands.

Known follow-up:

```text
The repo contract script may need a future update to include WP-0018, WP-0019, docs/planning/06-implementation-readiness-plan.md, and docs/planning/07-package-and-tooling-baseline.md.
```

---

## 13. Evaluation Harness Integration

The evaluation harness baseline exists at:

```text
docs/verification/02-evaluation-harness-baseline.md
```

Current status:

```text
Documentation-level only.
```

Executable evaluation harness implementation does not exist yet.

Future package/tooling should reserve space for evaluation commands, but should not implement them prematurely.

Future command categories:

```text
eval
eval:check
```

Rules:

1. Do not create executable evaluation harness code in this baseline.
2. Do not add evaluation commands until executable evaluation planning is accepted.
3. Do not make CI depend on evaluation commands before they exist.
4. Future evaluation tooling should call repo contract checks where relevant.
5. Evaluation evidence must not include secrets or sensitive values.

---

## 14. CI Relationship

CI does not exist yet.

CI should be introduced after package/tooling strategy is accepted.

Future CI should:

1. Check out the repository.
2. Install only required package ecosystems.
3. Use frozen lockfile installs.
4. Run stable local verification commands.
5. Run repo contract checks.
6. Run format/lint/typecheck/test only when those tools exist.
7. Avoid pretending runtime tests exist before runtime code exists.
8. Avoid adding unrelated checks that are not locally reproducible.

Recommended future packet:

```text
WP-0020: CI Baseline
```

Expected planning output:

```text
docs/planning/08-ci-baseline.md
```

Possible later file only after explicit authorization:

```text
.github/workflows/ci.yml
```

---

## 15. Future Tooling Setup Sequence

Recommended sequence:

```text
1. Package and Tooling Baseline
2. Repo Contract Script Baseline Update
3. Package and Tooling Setup
4. CI Baseline
5. CI Workflow Setup
6. Executable Evaluation Harness Planning
7. Runtime Implementation Slice Plan
8. First Runtime Slice
```

This plan is step 1 in that sequence.

---

## 16. Prohibited Premature Work

Do not create any of the following in this packet:

```text
package.json
pnpm-lock.yaml
bun.lock
pyproject.toml
uv.lock
Cargo.toml
Cargo.lock
.github/workflows/ci.yml
src/
packages/
apps/
services/
```

Do not:

1. Install dependencies.
2. Initialize package managers.
3. Create source-code directories.
4. Create runtime code.
5. Create CI workflows.
6. Create executable evaluation harness code.
7. Modify ADRs.
8. Modify the repo contract script.
9. Modify verification documents.
10. Claim package/tooling setup exists.

---

## 17. Recommended Next Work

Recommended immediate next work:

```text
WP-0020: Repo Contract Script Readiness Update
```

Purpose:

```text
Update tools/check-repo-contract.sh so it recognizes WP-0018, WP-0019, docs/planning/06-implementation-readiness-plan.md, and docs/planning/07-package-and-tooling-baseline.md.
```

Recommended subsequent work:

```text
WP-0021: Package and Tooling Setup
WP-0022: CI Baseline
WP-0023: Executable Evaluation Harness Planning
WP-0024: Runtime Implementation Slice Plan
```

Rationale:

1. The repo contract script should remain aligned with the accepted baseline.
2. Package files should be created only after this baseline is accepted.
3. CI should be planned only after local package/tooling expectations are stable.
4. Runtime implementation should remain blocked until slice planning is accepted.

---

## 18. Current Decision

Current decision:

```text
The repository may proceed to package/tooling setup planning, but package files, lockfiles, CI workflows, and runtime code are not authorized by this document.
```

Current non-decision:

```text
This document does not choose to create package files yet.
```

---

## 19. Acceptance Criteria

This package and tooling baseline is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It defines current package/tooling status.
3. It references ADR-0011.
4. It references ADR-0014.
5. It references ADR-0019.
6. It defines Package-Manager Strategy.
7. It defines Lockfile Expectations.
8. It defines Local Command Categories.
9. It defines Formatting Baseline.
10. It defines Linting Baseline.
11. It defines Typechecking Baseline.
12. It defines Testing Baseline.
13. It defines Repo Contract Integration.
14. It defines Evaluation Harness Integration.
15. It defines CI relationship.
16. It identifies Prohibited Premature Work.
17. It recommends next work.
18. It does not create package files.
19. It does not create lockfiles.
20. It does not create runtime code.
21. It does not create CI workflows.

---

## 20. Verification

Run:

```bash
test -f docs/planning/07-package-and-tooling-baseline.md && \
grep -q '^title: "Package and Tooling Baseline"$' docs/planning/07-package-and-tooling-baseline.md && \
grep -q '^# Package and Tooling Baseline$' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'Package-Manager Strategy' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'Lockfile Expectations' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'Local Command Categories' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'Repo Contract Integration' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'Prohibited Premature Work' docs/planning/07-package-and-tooling-baseline.md && \
./tools/check-repo-contract.sh && \
git diff --check
```

Expected result:

```text
Repo contract checks pass, package/tooling baseline exists, and whitespace checks pass.
```

Known caveat:

```text
The current repo contract script may not yet check WP-0018, WP-0019, docs/planning/06-implementation-readiness-plan.md, or docs/planning/07-package-and-tooling-baseline.md until a future script update packet adds them.
```

Manual verification:

1. Confirm no package-manager files were created.
2. Confirm no lockfiles were created.
3. Confirm no dependencies were installed.
4. Confirm no source-code directories were created.
5. Confirm no runtime code was created.
6. Confirm no CI workflows were created.
7. Confirm no ADR files were modified.
8. Confirm no verification files were modified.
9. Confirm `tools/check-repo-contract.sh` was not modified.
10. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

---

## 21. Recommended Atomic Commit

```bash
git add docs/planning/07-package-and-tooling-baseline.md docs/work-packets/WP-0019-package-and-tooling-baseline.md
git commit -m "docs(planning): add package and tooling baseline"
```

If `WP-0019` was already committed separately, use:

```bash
git add docs/planning/07-package-and-tooling-baseline.md
git commit -m "docs(planning): add package and tooling baseline"
```

---

## 22. Next Step

Next create:

```text
docs/work-packets/WP-0020-repo-contract-script-readiness-update.md
```

Expected execution output:

```text
tools/check-repo-contract.sh
```

The script update should add checks for:

```text
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/work-packets/WP-0019-package-and-tooling-baseline.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
```