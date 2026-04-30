---
title: "ADR-0006: Dependency Pinning Policy: Exact Lockfiles Committed for All Ecosystems"
description: "Requires exact dependency lockfiles to be committed for all package-managed ecosystems to ensure reproducible local development, CI, builds, deployments, and generated artifacts."
status: "accepted"
version: "0.1.0"
created: "2026-04-30"
updated: "2026-04-30"
owner: "project-owner"
canonical: true
adr: "ADR-0006"
decision_date: "2026-04-30"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - dependency-management
  - lockfiles
  - reproducibility
  - supply-chain
---

# ADR-0006: Dependency Pinning Policy: Exact Lockfiles Committed for All Ecosystems

## 1. Status

Accepted.

## 2. Context

ADR-0004 adopts a disciplined polyglot language strategy.

ADR-0005 adopts the primary package managers:

```text
Python     → uv
Rust       → Cargo
TypeScript → pnpm
````

Those package managers introduce dependency resolution into the repository.

Dependency resolution is a source of risk.

If dependencies are not pinned and lockfiles are not committed, the same repository revision may install different dependency versions at different times, on different machines, or in different CI runs.

That undermines:

1. reproducibility;
2. debugging;
3. security review;
4. CI determinism;
5. release confidence;
6. generated artifact consistency;
7. model and evaluation reproducibility;
8. local onboarding;
9. incident response;
10. supply-chain auditability.

The Agentic Software Foundry is designed to be governance-grade.

It cannot rely on vague dependency ranges, implicit resolver behavior, or uncommitted local dependency state.

A package-managed ecosystem must have an exact, committed dependency resolution record.

## 3. Decision

The project will require exact dependency lockfiles to be committed for every package-managed ecosystem.

The baseline lockfiles are:

```text id="tuwpb3"
Python     → uv.lock
Rust       → Cargo.lock
TypeScript → pnpm-lock.yaml
```

When a package-managed ecosystem is initialized, its lockfile must be committed with the package metadata that created it.

The repository must not depend on uncommitted local dependency resolution.

CI, local verification, builds, tests, generated artifacts, deployments, and release workflows must install dependencies from committed lockfiles.

The default policy is:

```text id="p2q1jk"
No package-managed ecosystem is complete without its lockfile.
```

## 4. Scope

This policy applies to all dependency-managed code and tooling in the Foundry ecosystem, including:

1. Python packages;
2. Python applications;
3. Python evaluation tooling;
4. Rust crates;
5. Rust services;
6. Rust CLIs;
7. Rust workspaces;
8. TypeScript packages;
9. TypeScript applications;
10. TypeScript SDKs;
11. documentation sites with package dependencies;
12. generated project templates;
13. internal developer tools;
14. build tooling;
15. test tooling;
16. CI helper packages.

This policy applies whether the dependency is runtime, development, build-time, test-time, evaluation-time, or documentation-time.

## 5. Non-Scope

This ADR does not require lockfiles for files that are not package-managed.

Examples:

1. Markdown documents;
2. JSON manifests with no package resolution;
3. shell scripts with no dependency manager;
4. Python standard-library-only scripts;
5. static templates;
6. plain configuration files.

A Python script using only the standard library does not require `uv.lock`.

A repository only needs a lockfile once package-managed dependencies exist.

## 6. Python Lockfile Policy

Python package-managed projects must use:

```text id="jawb75"
uv.lock
```

When a Python package, service, tool, evaluation harness, or application introduces external dependencies, the repository must include:

```text id="xxyl7e"
pyproject.toml
uv.lock
```

The lockfile must be generated and committed as part of the same atomic change that introduces or modifies the dependency set.

Python dependency installation should use locked behavior.

Expected future command pattern:

```bash id="vs8zin"
uv sync --locked
```

If a Python dependency update is required, the work packet or commit should make clear whether the update is:

1. routine maintenance;
2. security remediation;
3. compatibility update;
4. feature-enabling dependency addition;
5. transitive dependency refresh.

The project must avoid treating uncommitted virtual environments as dependency state.

The following must not be committed:

```text id="v111lh"
.venv/
venv/
__pycache__/
```

## 7. Rust Lockfile Policy

Rust projects must use:

```text id="zc3ijh"
Cargo.lock
```

For Rust applications, services, CLIs, and workspaces, `Cargo.lock` must be committed.

For internal Rust libraries that live inside a workspace, the workspace `Cargo.lock` must be committed.

The default policy is to commit `Cargo.lock` for Foundry repositories even when some crates are libraries, because the project values reproducible local verification and CI over minimal library-publishing conventions.

Expected future command patterns include:

```bash id="vebzhd"
cargo build --locked
cargo test --locked
```

Rust dependency changes must be visible in both `Cargo.toml` and `Cargo.lock` where applicable.

The repository must not rely on a locally resolved lockfile that is excluded from version control.

## 8. TypeScript Lockfile Policy

TypeScript and JavaScript package-managed projects must use:

```text id="z1083f"
pnpm-lock.yaml
```

When a TypeScript package, application, SDK, documentation site, frontend, or tool introduces dependencies, the repository must include:

```text id="ka83c7"
package.json
pnpm-lock.yaml
```

If the repository uses a pnpm workspace, it must include:

```text id="twikc3"
pnpm-workspace.yaml
```

Expected future command pattern:

```bash id="85eprm"
pnpm install --frozen-lockfile
```

The project must not commit competing JavaScript lockfiles by default.

Forbidden by default:

```text id="if08o6"
package-lock.json
yarn.lock
bun.lock
bun.lockb
```

A future ADR may allow an exception for a specific generated profile, but this repository’s default is `pnpm-lock.yaml`.

## 9. Lockfile Commit Rule

A dependency change is incomplete unless the lockfile change is included.

Examples of incomplete changes:

```text id="1rkymh"
package.json changed but pnpm-lock.yaml not updated
pyproject.toml changed but uv.lock not updated
Cargo.toml changed but Cargo.lock not updated
```

A complete dependency change includes:

1. package metadata update;
2. lockfile update;
3. verification command update if needed;
4. documentation update if needed;
5. repo contract update if applicable;
6. security or license review if applicable.

Dependency and lockfile changes should be committed atomically.

## 10. Lockfile Review Rule

Lockfiles are not noise.

Lockfiles are reviewable supply-chain artifacts.

Reviewers should inspect lockfile changes for:

1. unexpected package additions;
2. unexpected major version changes;
3. unexpected transitive dependency growth;
4. suspicious package names;
5. dependency source changes;
6. registry changes;
7. license-sensitive packages;
8. post-install or build-script risk;
9. known vulnerable versions;
10. large dependency tree expansion.

Automated dependency update tools may propose lockfile changes, but the resulting changes still require verification and review.

## 11. CI Policy

CI must install dependencies from lockfiles.

CI must fail when lockfiles are missing, stale, or inconsistent.

Expected future CI patterns include:

```bash id="b4vpnb"
uv sync --locked
cargo test --locked
pnpm install --frozen-lockfile
```

CI must not silently regenerate lockfiles as part of normal verification.

If CI modifies a lockfile, the verification should fail and require the lockfile to be committed explicitly.

CI and local verification should use the same lockfile policy.

## 12. Local Verification Policy

Local verification commands must use committed lockfiles once package tooling exists.

The project’s local verification should eventually validate:

1. lockfiles exist when package metadata exists;
2. forbidden lockfiles are absent;
3. package-manager files are internally consistent;
4. install commands use locked or frozen modes;
5. documentation does not recommend unlocked installs;
6. CI uses the same package managers as local tooling.

During documentation-only phases or standard-library-only tooling phases, package lockfile checks may be absent or no-op because no package-managed ecosystem exists yet.

## 13. Dependency Update Policy

Dependency updates should be intentional.

Dependency updates may occur for:

1. security remediation;
2. bug fixes;
3. compatibility with runtime or compiler versions;
4. feature requirements;
5. routine maintenance;
6. transitive dependency refresh;
7. major-version migration.

Dependency updates should not be mixed into unrelated feature work unless necessary.

Prefer separate commits for dependency updates when practical.

Recommended commit examples:

```text id="m362di"
chore(deps): update python dependencies
chore(deps): update rust dependencies
chore(deps): update typescript dependencies
fix(deps): update vulnerable package
```

If a dependency update is required for a feature, the commit or work packet should explain why.

## 14. Dependency Addition Policy

New dependencies must be justified.

Before adding a dependency, consider:

1. whether standard library functionality is sufficient;
2. whether the dependency is actively maintained;
3. whether the dependency has a reasonable license;
4. whether it introduces native code;
5. whether it has known vulnerabilities;
6. whether it brings excessive transitive dependencies;
7. whether it is compatible with the project’s security posture;
8. whether it will complicate builds or deployment;
9. whether it is necessary for production or only development;
10. whether a smaller alternative exists.

This does not mean dependencies are forbidden.

It means dependency addition is an architectural and supply-chain decision, not casual clutter.

## 15. Lockfile Regeneration Policy

Lockfiles should be regenerated only when necessary.

Valid reasons include:

1. adding a dependency;
2. removing a dependency;
3. updating a dependency;
4. changing supported language/toolchain versions;
5. resolving security vulnerabilities;
6. resolving dependency conflicts;
7. updating package metadata that affects resolution;
8. refreshing transitive dependencies intentionally.

Lockfile regeneration should not happen as incidental noise.

A lockfile-only diff should explain why the lockfile changed.

## 16. Generated Repository Policy

The Monorepo Factory must generate lockfile expectations according to this ADR.

Generated repositories should:

1. include lockfiles when dependencies are generated;
2. omit package-manager files when no package-managed code exists;
3. use `uv.lock` for Python;
4. use `Cargo.lock` for Rust;
5. use `pnpm-lock.yaml` for TypeScript;
6. forbid competing lockfiles by default;
7. document locked install commands;
8. include repo contract checks for lockfile presence.

Generated templates should not create fake or empty lockfiles.

Lockfiles should reflect actual dependency resolution.

## 17. Relationship to Reproducibility

Lockfiles are part of the project’s reproducibility foundation.

A reproducible system needs:

1. version-controlled source;
2. version-controlled manifests;
3. version-controlled dependency resolution;
4. version-controlled build configuration;
5. deterministic verification commands;
6. documented toolchain versions;
7. controlled environment configuration.

Lockfiles address dependency resolution.

They do not solve every reproducibility problem by themselves.

Toolchain pinning, container images, CI configuration, and infrastructure reproducibility are addressed by other ADRs.

## 18. Relationship to Security

Dependency pinning improves supply-chain security by making dependency changes explicit.

However, pinning can also preserve vulnerable versions if dependencies are never updated.

Therefore, lockfiles must be paired with:

1. dependency vulnerability scanning;
2. dependency update workflow;
3. security review for sensitive dependencies;
4. license review where needed;
5. CI gates;
6. Dependabot or equivalent update automation where appropriate;
7. human review.

A locked vulnerable dependency is still vulnerable.

Pinning is a control, not a cure.

## 19. Relationship to Clean-Room Policy

Lockfiles help preserve provenance.

They record the exact third-party packages used by the project.

However, lockfiles do not prove that a dependency is license-compatible or clean-room safe.

Any direct code reuse, vendoring, or dependency inclusion must still comply with the clean-room policy.

Suspicious packages, unofficial leak-related packages, or packages of unclear provenance must not be added merely because a package manager can install them.

## 20. Relationship to Access Tiers

Public repositories must be especially careful about lockfile review because dependency metadata is visible externally.

Internal repositories must still treat lockfiles as reviewable supply-chain artifacts.

Restricted repositories may need stricter dependency review.

Sealed repositories should minimize dependencies and avoid unnecessary package-manager complexity.

Generated public templates must not include internal package sources or private registries in lockfiles.

## 21. Relationship to Containers

Container builds must use committed lockfiles.

A container image should not install floating dependency versions during build.

Container build steps should use locked install modes where available.

Examples:

```dockerfile id="xyswgc"
RUN uv sync --locked
RUN pnpm install --frozen-lockfile
RUN cargo build --locked --release
```

Exact Dockerfile patterns will be defined by containerization ADRs and implementation work packets.

## 22. Relationship to Model and Evaluation Reproducibility

Evaluation harnesses must use lockfiles once they depend on external packages.

Eval results are only meaningful when the evaluation code and dependency environment are reproducible.

An evaluation run should be traceable to:

1. repository commit;
2. dependency lockfile state;
3. model version;
4. dataset version;
5. eval configuration;
6. runtime environment.

This ADR covers the dependency lockfile portion of that chain.

## 23. Alternatives Considered

### 23.1 Do Not Commit Lockfiles

The project could allow developers and CI to resolve dependencies independently.

Rejected.

This would undermine reproducibility, security review, and CI determinism.

### 23.2 Commit Lockfiles Only for Applications

The project could commit lockfiles for deployable applications but not for libraries or internal packages.

Rejected as the general policy.

The Foundry values reproducible repository-level verification across bounded monorepos.

Even internal libraries participate in shared verification.

### 23.3 Use Floating Version Ranges with Frequent Updates

The project could rely on version ranges and frequent update runs.

Rejected.

Floating dependency resolution makes failures harder to reproduce and hides supply-chain changes.

Updates should be explicit.

### 23.4 Vendor All Dependencies

The project could vendor all dependencies into the repository.

Rejected as the default.

Vendoring increases repository size, complicates licensing, and creates maintenance overhead.

Vendoring may be justified for special cases, but it requires explicit review.

### 23.5 Use Container Images as the Only Dependency Lock

The project could rely on container images to freeze dependencies.

Rejected.

Container images are useful build artifacts, but source-level dependency lockfiles are still needed for review, local development, and reproducibility.

## 24. Consequences

### 24.1 Positive Consequences

The project gains:

1. reproducible dependency installs;
2. deterministic CI;
3. clearer supply-chain review;
4. easier debugging;
5. safer dependency updates;
6. better generated repository consistency;
7. stronger repo contracts;
8. better evaluation reproducibility;
9. better local onboarding;
10. alignment with governance-grade engineering.

### 24.2 Negative Consequences

The project accepts:

1. larger diffs for dependency changes;
2. lockfile merge conflicts;
3. need to keep lockfiles updated;
4. possible noise from transitive dependency changes;
5. additional repo contract complexity;
6. more review burden for dependency updates.

These costs are acceptable because reproducibility and supply-chain traceability are core project values.

### 24.3 Neutral Consequences

Lockfiles do not replace dependency scanning, license review, security review, or toolchain pinning.

They support those practices.

## 25. Implementation Implications

When a package-managed ecosystem is added, the implementing work packet must include:

1. package metadata file;
2. lockfile;
3. install command;
4. verification command;
5. documentation update;
6. repo contract update if applicable;
7. CI update if applicable.

If a package metadata file exists without a lockfile, verification should eventually fail.

If a forbidden lockfile appears, verification should eventually fail.

## 26. Verification Expectations

Future repo contract and tooling checks should validate:

1. `uv.lock` exists when Python dependencies exist;
2. `Cargo.lock` exists when Rust workspace/application code exists;
3. `pnpm-lock.yaml` exists when TypeScript package metadata exists;
4. `package-lock.json` is absent;
5. `yarn.lock` is absent;
6. `bun.lock` and `bun.lockb` are absent unless explicitly allowed;
7. `Pipfile` and `Pipfile.lock` are absent;
8. `poetry.lock` is absent unless explicitly allowed;
9. documentation uses locked install commands;
10. CI uses locked install commands.

## 27. Risks

### 27.1 Risk: Lockfiles Become Stale

Mitigation:

1. CI locked install;
2. dependency update workflow;
3. scheduled dependency reviews;
4. automated vulnerability scanning.

### 27.2 Risk: Large Lockfile Diffs Hide Malicious Changes

Mitigation:

1. dependency review tooling;
2. small dependency commits;
3. human review;
4. package source verification;
5. vulnerability scanning.

### 27.3 Risk: Developers Bypass Lockfiles Locally

Mitigation:

1. clear documentation;
2. repo contract checks;
3. CI enforcement;
4. consistent commands;
5. pre-commit checks where appropriate.

### 27.4 Risk: Premature Package Tooling

Mitigation:

1. do not initialize package managers without real code;
2. keep standard-library-only scripts simple;
3. require work-packet justification for new package ecosystems.

## 28. Acceptance Criteria

This ADR is accepted when:

1. exact lockfiles are required for all package-managed ecosystems;
2. `uv.lock` is required for Python package-managed projects;
3. `Cargo.lock` is required for Rust projects and workspaces;
4. `pnpm-lock.yaml` is required for TypeScript projects and workspaces;
5. CI and local verification are expected to use locked install modes;
6. dependency changes are incomplete without lockfile updates;
7. repo contracts are expected to enforce lockfile policy over time;
8. competing lockfiles are forbidden by default.

## 29. Decision Summary

The project requires committed exact lockfiles for all package-managed ecosystems.

The standard lockfiles are:

```text id="7l4sqz"
Python     → uv.lock
Rust       → Cargo.lock
TypeScript → pnpm-lock.yaml
```

A dependency-managed project without a committed lockfile is incomplete.

Lockfiles are not noise.

They are part of the project’s reproducibility, auditability, and supply-chain security posture.

## 30. Commit Guidance

Recommended commit message:

```text id="tjfb73"
docs(adr): define dependency lockfile policy
```