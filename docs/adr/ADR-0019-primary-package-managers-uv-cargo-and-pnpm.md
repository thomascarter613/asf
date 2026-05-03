---
title: "ADR-0019: Primary Package Managers: uv, Cargo, and bun"
description: "Adopts uv for Python, Cargo for Rust, and bun for TypeScript as the primary package managers for the Agentic Software Foundry ecosystem."
status: "accepted"
version: "0.1.0"
created: "2026-04-30"
updated: "2026-04-30"
owner: "project-owner"
canonical: true
adr: "ADR-0019"
decision_date: "2026-04-30"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - package-management
  - uv
  - cargo
  - bun
  - python
  - rust
  - typescript
---

# ADR-0019: Primary Package Managers: uv, Cargo, and bun

## 1. Status

Accepted.

## 2. Context

ADR-0004 adopts a disciplined polyglot language strategy:

```text
Python     = ML, data, evaluations, scripting, and research-adjacent workflows
Rust       = serving, runtime, performance-critical, and safety-sensitive systems
TypeScript = product, frontend, SDK, documentation, and developer-facing surfaces
````

A polyglot strategy requires explicit package-management decisions.

Without clear package-manager standards, the repository may accumulate inconsistent dependency tools, duplicate lockfiles, non-reproducible installs, conflicting workflows, weak CI behavior, and unnecessary developer confusion.

The project needs package managers that support:

1. reproducible installs;
2. committed lockfiles;
3. local-first development;
4. fast dependency resolution;
5. CI determinism;
6. dependency auditing;
7. workspace support where appropriate;
8. compatibility with the selected language ecosystems;
9. future generated monorepo profiles;
10. clear onboarding instructions;
11. AI-assisted implementation without ambiguity.

The package manager choice must align with the language strategy but should not force package tooling into the repository before there is real runtime code requiring it.

The project is currently documentation-first and verification-first. Package-manager initialization should be deliberate, not ceremonial.

## 3. Decision

The project will use these primary package managers:

```text
Python     → uv
Rust       → Cargo
TypeScript → bun
```

The project will not use multiple competing package managers within the same language ecosystem by default.

The package-manager baseline is:

1. `uv` for Python dependency management and Python project execution;
2. `Cargo` for Rust crate management, builds, tests, and workspace orchestration;
3. `bun` for TypeScript/JavaScript workspace dependency management.

The project will not use Bazel by default.

The project will not introduce npm, bun, Yarn, Poetry, Pipenv, Rye, Hatch, or other package managers as primary tooling unless a future ADR supersedes or narrows this decision.

## 4. Package Manager Assignments

## 4.1 Python: uv

Python projects in the Foundry ecosystem will use `uv` as the primary package manager and project runner.

`uv` is selected for:

1. fast dependency resolution;
2. modern Python project support;
3. lockfile-centered workflows;
4. virtual environment management;
5. compatibility with `pyproject.toml`;
6. good local developer ergonomics;
7. reduced need for multiple Python dependency tools;
8. suitability for scripts, tools, evaluation harnesses, and Python packages.

Python package metadata should be declared through:

```text
pyproject.toml
```

Python lock state should be committed through the appropriate `uv` lockfile when a Python project is initialized.

Python tools should avoid ad hoc `pip install` instructions as the normal workflow.

## 4.2 Rust: Cargo

Rust projects in the Foundry ecosystem will use Cargo as the primary package manager, build system, and test runner.

Cargo is selected because it is the standard Rust toolchain package manager.

Rust package metadata should live in:

```text
Cargo.toml
```

Rust lock state should live in:

```text
Cargo.lock
```

For application and service crates, `Cargo.lock` must be committed.

For library crates, the repository should still generally commit `Cargo.lock` when the crate is part of a workspace or when reproducibility matters.

Cargo workspaces may be used when the repository contains multiple related Rust crates.

## 4.3 TypeScript: bun

TypeScript and JavaScript projects in the Foundry ecosystem will use `bun` as the primary package manager.

`bun` is selected for:

1. efficient dependency storage;
2. strict dependency linking;
3. workspace support;
4. fast installs;
5. deterministic lockfile behavior;
6. good monorepo ergonomics;
7. broad ecosystem compatibility;
8. lower risk of accidental undeclared dependency usage compared with flatter install models.

TypeScript package metadata should live in:

```text
package.json
```

Workspace configuration should live in:

```text
TODO
```

Lock state must live in:

```text
TODO
```

The project should not mix `package-lock.json`, `yarn.lock`, or other JavaScript lockfiles with `TODO`.

## 5. Package Tooling Introduction Rule

Package managers should be introduced when there is actual code or tooling requiring them.

The project should not initialize `uv`, `Cargo`, or `bun` merely because the ADR exists.

The correct progression is:

```text
architecture decision
→ work packet
→ real package/tool/service need
→ package manager initialization
→ lockfile commit
→ verification update
```

For example:

1. a Python CLI or evaluation package justifies `uv`;
2. a Rust service or crate justifies `Cargo`;
3. a TypeScript web app or SDK justifies `bun`.

Documentation-only phases may remain package-manager-free.

This preserves the project’s local-first, minimal-dependency posture until runtime code requires tooling.

## 6. Rationale

The selected package managers align with the project’s language strategy and quality goals.

`uv` fits the Python domain because the project will likely need fast, reproducible Python workflows for evaluation, data, ML-adjacent tooling, and repository automation.

Cargo is the natural and canonical Rust package manager and requires no meaningful alternative for normal Rust development.

`bun` fits TypeScript monorepo development because it provides strong workspace support and more disciplined dependency resolution than npm’s traditional flat installation behavior.

Together, these package managers provide:

1. speed;
2. reproducibility;
3. ecosystem alignment;
4. workspace support;
5. lockfile support;
6. CI friendliness;
7. future monorepo compatibility;
8. clear developer instructions.

## 7. Non-Goals

This ADR does not decide:

1. exact Python formatter;
2. exact Python linter;
3. exact Python type checker;
4. exact Rust web framework;
5. exact Rust async runtime;
6. exact TypeScript frontend framework;
7. exact TypeScript linter;
8. exact test runner;
9. exact CI configuration;
10. exact release automation;
11. exact container build strategy.

Those decisions belong in separate ADRs or work packets.

This ADR chooses primary package managers only.

## 8. Tooling Boundary Rules

## 8.1 One Primary Package Manager Per Ecosystem

Each language ecosystem has one primary package manager:

```text
Python     → uv
Rust       → Cargo
TypeScript → bun
```

Mixing competing tools in the same ecosystem is forbidden by default.

## 8.2 Lockfiles Are Required When Package Managers Are Initialized

A package-managed ecosystem must commit its lockfile unless a later ADR defines a specific exception.

Expected lockfiles:

```text
uv.lock
Cargo.lock
bun-lock.yaml
```

The dependency pinning ADR will define lockfile strictness in more detail.

## 8.3 No Ad Hoc Install Instructions as Primary Workflow

Documentation should not tell contributors to install dependencies through ad hoc commands when a package manager exists.

Avoid primary workflow instructions such as:

```text
pip install -r requirements.txt
npm install
yarn install
```

unless explicitly justified.

## 8.4 No Hidden Global Dependency Requirement

Local verification should not depend on globally installed packages except the package manager itself and baseline language toolchains.

A command should work from a clean checkout once the documented toolchain is installed.

## 8.5 No Premature Toolchain Initialization

The repository should not add `package.json`, `Cargo.toml`, or `pyproject.toml` at the root until there is a real need.

Package files should be meaningful.

They should not exist as empty ceremony.

## 9. Repository Layout Implications

Package manager files should live at the correct boundary.

Possible future layout:

```text id="iuz7vj"
.
├── pyproject.toml
├── uv.lock
├── Cargo.toml
├── Cargo.lock
├── package.json
├── bun-workspace.yaml
├── bun-lock.yaml
├── apps/
├── services/
├── packages/
├── tools/
└── evals/
```

However, root-level package-manager files should be added only when root-level workspace orchestration is needed.

Subprojects may have their own package files if the repository structure calls for it.

When root-level workspace files exist, they should orchestrate the relevant ecosystem clearly.

## 10. Python Package Management Rules

When Python package tooling is introduced:

1. use `pyproject.toml`;
2. use `uv.lock`;
3. prefer `uv run` for running managed Python commands;
4. avoid committed virtual environments;
5. avoid unpinned `requirements.txt` as the primary dependency source;
6. avoid `pip install` as the normal documented workflow;
7. document Python version expectations;
8. commit dependency lockfiles;
9. ensure CI uses the lockfile;
10. ensure repo contracts detect missing lockfiles where applicable.

Python scripts that use only the standard library may remain outside `uv` management until packaging is justified.

That is especially acceptable for early repo-contract and local hygiene scripts.

## 11. Rust Package Management Rules

When Rust tooling is introduced:

1. use `Cargo.toml`;
2. use `Cargo.lock`;
3. use Cargo workspaces for multiple related crates;
4. use `cargo fmt`;
5. use `cargo clippy`;
6. use `cargo test`;
7. avoid alternative Rust package managers;
8. commit lockfiles for applications, services, and workspaces;
9. document Rust toolchain expectations;
10. consider `rust-toolchain.toml` if toolchain pinning becomes necessary.

Rust should not be introduced for simple local scripts unless performance, safety, packaging, or runtime concerns justify it.

## 12. TypeScript Package Management Rules

When TypeScript tooling is introduced:

1. use `bun`;
2. use `bun-lock.yaml`;
3. use `bun-workspace.yaml` for workspaces;
4. avoid `package-lock.json`;
5. avoid `yarn.lock`;
6. avoid `bun.lockb` or `bun.lock` as primary lockfiles unless a future ADR changes this;
7. document required Node version;
8. use workspace scripts consistently;
9. ensure CI installs with frozen lockfile behavior;
10. ensure repo contracts detect forbidden lockfiles.

The project may use Node-based tooling where justified, but package management remains through `bun`.

## 13. Relationship to Dependency Pinning

This ADR selects package managers.

The dependency pinning ADR will define exact lockfile policy.

The expected direction is:

```text id="gq4uj8"
All package-managed ecosystems commit exact lockfiles.
CI installs from lockfiles.
Unpinned dependency drift is forbidden.
```

This ADR should be read together with ADR-0006 once ADR-0006 exists.

## 14. Relationship to CI/CD

CI/CD must use the selected package managers.

Expected future CI behavior:

```text id="m2r1sb"
uv sync --locked
cargo test --locked
bun install --frozen-lockfile
```

Exact commands may vary by ecosystem and project maturity.

CI should fail if lockfiles are missing, stale, or inconsistent.

CI should not use a different package manager than the documented local workflow.

## 15. Relationship to Repo Contracts

Repo contracts should eventually validate package-manager policy.

Possible checks include:

1. no `package-lock.json`;
2. no `yarn.lock`;
3. no `bun.lockb` or `bun.lock` unless allowed;
4. no `requirements.txt` as primary dependency source unless exempted;
5. no `Pipfile` or `Pipfile.lock`;
6. no `poetry.lock` unless a future ADR allows Poetry;
7. `uv.lock` exists when `pyproject.toml` declares managed dependencies;
8. `Cargo.lock` exists when `Cargo.toml` exists for workspace or application code;
9. `bun-lock.yaml` exists when `package.json` exists at workspace root;
10. documentation references the selected package managers.

Repo contracts should also enforce the no-Bazel default unless a future ADR supersedes that rule.

## 16. Relationship to Monorepo Factory

The Monorepo Factory should generate package-manager files according to this ADR.

For generated Foundry-aligned repositories:

1. Python templates should use `uv`;
2. Rust templates should use `Cargo`;
3. TypeScript templates should use `bun`;
4. mixed-language templates should preserve ecosystem boundaries;
5. generated READMEs should document the correct commands;
6. generated CI should use the correct package managers;
7. generated repo contracts should forbid competing package-manager files.

The Factory must not generate npm, Yarn, Poetry, Pipenv, or Bazel defaults unless explicitly requested through a future supported profile and ADR.

## 17. Relationship to AI-Assisted Work

AI-assisted implementation must follow this package-manager decision.

An AI assistant must not introduce:

1. npm as the default TypeScript package manager;
2. Yarn as the default TypeScript package manager;
3. Poetry as the default Python package manager;
4. Pipenv as the default Python package manager;
5. Bazel as a build/package layer;
6. ad hoc dependency installation in documentation;
7. uncommitted lockfile workflows.

If a generated file requires package tooling, the assistant should update:

1. package metadata;
2. lockfile instructions;
3. verification commands;
4. repo contracts if applicable;
5. documentation.

## 18. Relationship to Local Tooling Baseline

The current local verification scripts may use only the Python standard library.

That remains acceptable.

A script does not require `uv` merely because it is written in Python.

Package management becomes necessary when the Python code needs external dependencies, packaging, repeatable environment installation, or distribution.

Until then, standard-library Python scripts are an intentional low-dependency choice.

## 19. Alternatives Considered

### 19.1 Python: pip and requirements.txt

The project could use `pip` with `requirements.txt`.

Benefits:

1. universally known;
2. simple;
3. widely supported.

Rejected as the primary strategy because:

1. weaker project metadata model;
2. weaker modern workflow ergonomics;
3. more fragmented environment management;
4. less suitable for a modern multi-package project;
5. more likely to produce ad hoc install habits.

`requirements.txt` may still appear as generated compatibility output if explicitly justified, but not as the primary source of truth.

### 19.2 Python: Poetry

The project could use Poetry.

Benefits:

1. mature;
2. widely used;
3. supports lockfiles;
4. supports project metadata.

Rejected as the primary strategy because `uv` better matches the desired speed, modern workflow, and lower-friction local execution posture.

### 19.3 Python: Pipenv

Rejected due to weaker fit for modern Python project workflows and lower preference compared with `uv`.

### 19.4 TypeScript: npm

The project could use npm.

Benefits:

1. default with Node;
2. broad compatibility;
3. simple for small projects.

Rejected as the primary strategy because bun provides better workspace ergonomics, stricter dependency behavior, and more efficient installs.

### 19.5 TypeScript: Yarn

The project could use Yarn.

Benefits:

1. workspace support;
2. mature ecosystem;
3. strong adoption in some monorepos.

Rejected as the primary strategy to avoid package-manager ambiguity and because bun better matches the project’s desired strictness and install efficiency.

### 19.6 TypeScript: Bun

The project could use Bun as package manager and runtime.

Benefits:

1. speed;
2. integrated runtime;
3. growing ecosystem;
4. good developer ergonomics in some contexts.

Rejected as the primary package manager for now because the project wants conservative, broadly compatible TypeScript package management.

Bun may be used in future generated profiles only if explicitly justified and governed by a separate ADR.

### 19.7 Bazel

The project could use Bazel for build orchestration.

Rejected by default.

Bazel is intentionally outside the project’s default tooling posture.

The project prefers simpler, ecosystem-native package managers and verification commands unless scale eventually demands a stronger build system.

Using Bazel would require a future explicit ADR.

## 20. Consequences

### 20.1 Positive Consequences

The project gains:

1. clear package-manager expectations;
2. fewer conflicting lockfiles;
3. better developer onboarding;
4. deterministic dependency workflows;
5. stronger repo contract possibilities;
6. package-manager alignment with language strategy;
7. better generated repository consistency;
8. fewer AI-generated tooling mistakes;
9. cleaner CI/CD design;
10. reduced dependency ambiguity.

### 20.2 Negative Consequences

The project accepts:

1. multiple package-manager toolchains;
2. need to document each ecosystem;
3. need to install `uv`, Rust/Cargo, and bun when relevant;
4. possible contributor unfamiliarity with `uv` or bun;
5. additional repo-contract complexity;
6. need to keep package manager versions reasonably current.

### 20.3 Neutral Consequences

This ADR does not require immediate initialization of package manager files.

The project may remain documentation-only or standard-library-only until runtime code justifies package tooling.

## 21. Security Considerations

Package managers affect supply-chain security.

The selected package managers must be used with:

1. committed lockfiles;
2. dependency review;
3. vulnerability scanning;
4. no secrets in package files;
5. no unreviewed postinstall behavior where avoidable;
6. package source trust;
7. minimal dependency addition;
8. explicit license review where needed.

Dependency addition should be treated as a policy-gated or review-worthy change when it affects production, security, or public distribution.

## 22. Operational Considerations

CI and local verification must eventually use the same package managers.

A command that passes locally should not fail in CI because CI used a different package tool.

Documentation should include exact commands for each initialized ecosystem.

Build caches may be optimized later, but correctness and reproducibility are more important than speed during early phases.

## 23. Documentation Requirements

When package tooling is initialized, the repository must document:

1. required package manager;
2. installation command or reference;
3. dependency install command;
4. verification command;
5. lockfile policy;
6. update procedure;
7. common troubleshooting notes;
8. CI equivalence.

The root README should not claim package tooling exists until it actually exists.

## 24. Future Work

Future ADRs or work packets may define:

1. exact dependency pinning;
2. Python version support;
3. Rust toolchain pinning;
4. Node version support;
5. CI installation commands;
6. dependency scanning tools;
7. release automation;
8. SDK package publishing;
9. workspace layout;
10. package naming conventions.

## 25. Acceptance Criteria

This ADR is accepted when:

1. `uv` is the selected Python package manager;
2. `Cargo` is the selected Rust package manager;
3. `bun` is the selected TypeScript package manager;
4. competing package managers are rejected by default;
5. Bazel is not part of the default tooling posture;
6. package managers are introduced only when real code requires them;
7. lockfiles are expected when package-managed ecosystems are initialized;
8. repo contracts are expected to enforce package-manager consistency over time.

## 26. Decision Summary

The project adopts:

```text id="1h8c6q"
Python     → uv
Rust       → Cargo
TypeScript → bun
```

These are the primary package managers for the Foundry ecosystem.

The project remains disciplined: no package manager is initialized without need, no competing package manager is introduced by default, and lockfile-backed reproducibility is required once package tooling exists.

## 27. Commit Guidance

Recommended commit message:

```text id="62f6r0"
docs(adr): define primary package managers
```