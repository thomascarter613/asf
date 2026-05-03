---
id: ADR-0023
title: Primary Package Managers — Bun, uv, and Cargo
status: accepted
supersedes:
  - ADR-0019
superseded_by: null
date_created: 2026-05-03
date_updated: 2026-05-03
version: 1.0.0
owner: architecture-council
decision_type: tooling
scope:
  - repository
  - tooling
  - verification
  - implementation-readiness
---

# ADR-0023: Primary Package Managers — Bun, uv, and Cargo

## Status

Accepted.

This ADR supersedes ADR-0019 for active package-manager direction.

ADR-0019 remains preserved as historical architectural context and must not be deleted, renumbered, silently normalized, or rewritten to hide the earlier decision path.

## Context

The Agentic Software Framework is currently in Baseline Stabilization / Implementation Readiness.

Runtime implementation has not started. The repository is still establishing the minimum governed tooling surface required to support disciplined AI-assisted software development.

Earlier package-manager direction referenced a JavaScript/TypeScript tooling posture based on pnpm, alongside uv for Python and cargo for Rust. That direction has since been corrected.

The project has now selected Bun as the canonical JavaScript/TypeScript package manager and script runner.

This correction matters because package-manager choice affects:

1. root repository files;
2. generated lockfiles;
3. local verification commands;
4. future CI workflows;
5. workspace conventions;
6. contributor setup;
7. work-packet execution instructions;
8. repository contract checks.

The correction must be recorded explicitly rather than silently editing history, because the repository uses ADRs as durable architectural memory.

## Decision

Bun is the canonical JavaScript/TypeScript package manager and script runner for this repository.

Supersedes: ADR-0019

The Agentic Software Framework adopts the following package-manager and toolchain direction:

1. Bun is the canonical package manager and script runner for JavaScript and TypeScript work.
2. `package.json` is the canonical JavaScript/TypeScript package manifest at the repository root when JavaScript/TypeScript tooling is needed.
3. `bun.lock` is the canonical JavaScript/TypeScript lockfile.
4. `pnpm-workspace.yaml` must not be created or committed.
5. `pnpm-lock.yaml` must not be created or committed.
6. uv remains the intended future package and environment tool for Python work.
7. cargo remains the intended future package and build tool for Rust work.
8. Tooling must remain minimal until runtime implementation or a specific work packet justifies additional dependencies.
9. Repository verification must check that the active package-manager files and scripts match this ADR.
10. ADR-0019 remains preserved as superseded historical context.

## Canonical Root JavaScript/TypeScript Tooling

The minimal root JavaScript/TypeScript setup is:

```text
package.json
bun.lock
````

The root `package.json` must include at least:

```json
{
  "scripts": {
    "verify": "bun run verify:repo",
    "verify:repo": "bash tools/check-repo-contract.sh"
  }
}
```

The canonical lockfile generation command is:

```bash
bun install --lockfile-only
```

## Explicitly Forbidden Files

The following files are forbidden unless a future ADR explicitly reverses this decision:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

If either file exists from previous drift, it must be removed as part of the Bun correction.

## Relationship to ADR-0019

ADR-0019 is superseded by this ADR only for the active package-manager decision.

ADR-0019 remains valuable as historical context because it records the earlier tooling direction and helps future contributors understand the decision path.

The correct treatment is:

1. keep ADR-0019 in the repository;
2. mark ADR-0019 as superseded by ADR-0023 in the ADR index;
3. do not delete ADR-0019;
4. do not renumber ADRs;
5. do not rewrite ADR history to make the decision sequence appear cleaner than it was.

## Consequences

### Positive Consequences

1. The project has a single canonical JavaScript/TypeScript package-manager direction.
2. Local commands become simpler and align with the user's preferred tooling.
3. The repository avoids carrying pnpm artifacts that no longer represent the intended architecture.
4. Future CI can be built around Bun without ambiguity.
5. Work packets can reference one active JavaScript/TypeScript tooling path.
6. Repository contract checks can enforce the active decision deterministically.

### Negative Consequences

1. Any earlier pnpm-oriented instructions must be corrected.
2. Existing docs that mention pnpm may need to be reviewed.
3. Contributors familiar with pnpm may need to adjust to Bun.
4. Some future tooling may require compatibility checks before adoption.

### Neutral Consequences

1. This decision does not start runtime implementation.
2. This decision does not require adding application packages yet.
3. This decision does not require CI workflows yet.
4. This decision does not change the future role of uv for Python.
5. This decision does not change the future role of cargo for Rust.

## Implementation Requirements

The Bun correction requires the following repository changes:

1. create this ADR;
2. update `docs/adr/README.md` so ADR-0019 is marked superseded by ADR-0023;
3. update package/tooling planning docs so Bun is canonical instead of pnpm;
4. update WP-0021 so it authorizes `package.json` and `bun.lock`, not pnpm files;
5. remove `pnpm-workspace.yaml` if present;
6. remove `pnpm-lock.yaml` if present;
7. create or correct the minimal `package.json`;
8. generate `bun.lock` with `bun install --lockfile-only`;
9. update repository contract checks in a follow-up work packet;
10. verify before committing.

## Verification Requirements

The repository should be considered aligned with this ADR when:

```bash
test -f package.json
test -f bun.lock
test ! -f pnpm-workspace.yaml
test ! -f pnpm-lock.yaml
grep -q '"verify": "bun run verify:repo"' package.json
grep -q '"verify:repo": "bash tools/check-repo-contract.sh"' package.json
test -f docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
test -f docs/adr/ADR-0019-*.md
```

The normal verification command after the minimal Bun setup is:

```bash
bun run verify
```

The direct repository contract command is:

```bash
./tools/check-repo-contract.sh
```

## Supersession

This ADR remains in effect until replaced or amended by a later ADR.

Any future move away from Bun for JavaScript/TypeScript package management requires a new ADR that explicitly supersedes this one.

````

---

## 2.2 Update the ADR index

Open:

```text
docs/adr/README.md
````

Make sure the ADR index reflects these two facts:

```markdown
| ADR-0019 | Existing package-manager/tooling decision | Superseded by ADR-0023 | Preserved as historical context. Do not delete, renumber, or silently rewrite. |
| ADR-0023 | Primary Package Managers — Bun, uv, and Cargo | Accepted | Supersedes ADR-0019 for active package-manager direction. |
```

Preserve the rest of the ADR index. Do not normalize ADR gaps. Do not remove ADR-0007, ADR-0009, ADR-0010, or ADR-0012 gaps if the index already records them.

---

## 2.3 Update package/tooling planning

Open:

```text
docs/planning/07-package-and-tooling-baseline.md
```

Use this full replacement only if the current file does not contain additional project-specific detail you intentionally want to preserve.

````markdown
---
id: planning-07-package-and-tooling-baseline
title: Package and Tooling Baseline
status: active
date_created: 2026-05-03
date_updated: 2026-05-03
version: 1.0.0
owner: architecture-council
scope:
  - tooling
  - repository
  - verification
  - implementation-readiness
related_adrs:
  - ADR-0023
related_work_packets:
  - WP-0021
  - WP-0022
  - WP-0023
---

# Package and Tooling Baseline

## Purpose

This document defines the current package-manager and minimal tooling baseline for the Agentic Software Framework during Baseline Stabilization / Implementation Readiness.

The goal is to establish enough tooling to support governed repository verification without prematurely starting runtime implementation or introducing unnecessary dependency surface area.

## Current Phase

The project is currently in:

```text
Baseline Stabilization / Implementation Readiness
````

Runtime implementation has not started.

This means tooling should be:

1. minimal;
2. explicit;
3. easy to verify;
4. aligned with ADRs;
5. dependency-light;
6. suitable for future CI;
7. safe for incremental work packets.

## Canonical JavaScript/TypeScript Tooling

Bun is the canonical JavaScript/TypeScript package manager and script runner.

The minimal root files are:

```text
package.json
bun.lock
```

The root `package.json` should define:

```json
{
  "scripts": {
    "verify": "bun run verify:repo",
    "verify:repo": "bash tools/check-repo-contract.sh"
  }
}
```

The canonical lockfile generation command is:

```bash
bun install --lockfile-only
```

## Forbidden JavaScript/TypeScript Package Artifacts

The following files must not exist in the active repository baseline:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

If either exists, it should be removed as package-manager drift.

## Future Python Tooling

Python runtime implementation has not started.

When Python tooling is introduced, uv is the preferred package and environment manager unless a later ADR changes that decision.

No Python dependency baseline should be expanded without a work packet that justifies the need.

## Future Rust Tooling

Rust runtime implementation has not started.

When Rust tooling is introduced, cargo remains the canonical Rust package and build tool unless a later ADR changes that decision.

No Rust crate structure should be introduced without a work packet that justifies the need.

## Current Verification Entry Points

The canonical root verification command is:

```bash
bun run verify
```

The direct repository contract command is:

```bash
./tools/check-repo-contract.sh
```

The `verify` script delegates to `verify:repo`, and `verify:repo` delegates to the repository contract shell script.

## Tooling Boundary

The current tooling baseline does not authorize:

1. application runtime implementation;
2. package workspace expansion;
3. CI workflow creation;
4. test framework installation;
5. frontend app scaffolding;
6. backend service scaffolding;
7. database migrations;
8. evaluation harness implementation beyond existing planning;
9. dependency additions not required for the minimal Bun baseline.

Those items require separate work packets.

## Repository Contract Expectations

The repository contract should eventually enforce:

1. `package.json` exists;
2. `bun.lock` exists;
3. `pnpm-workspace.yaml` does not exist;
4. `pnpm-lock.yaml` does not exist;
5. `package.json` contains `verify`;
6. `package.json` contains `verify:repo`;
7. `verify` runs `bun run verify:repo`;
8. `verify:repo` runs `bash tools/check-repo-contract.sh`;
9. ADR-0023 exists;
10. ADR-0019 remains present as superseded historical context.

The contract hardening should occur in WP-0023.

## Related Decisions

The active package-manager decision is recorded in:

```text
docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
```

ADR-0023 supersedes ADR-0019 for active package-manager direction while preserving ADR-0019 as historical context.

## Definition of Done

This baseline is satisfied when:

1. the package-manager ADR correction exists;
2. package/tooling planning references Bun, not pnpm;
3. WP-0021 authorizes Bun files only;
4. pnpm lock/workspace files are absent;
5. `package.json` exists;
6. `bun.lock` exists;
7. `bun run verify` executes the repo verification path;
8. the repo contract script is updated in WP-0023 to enforce the Bun baseline.

````

---

## 2.4 Update WP-0021

Open:

```text
docs/work-packets/WP-0021-package-and-tooling-setup.md
````

Use this full replacement only if your current file is the drifted pnpm-oriented WP-0021 and does not contain extra content you want to preserve.

````markdown
---
id: WP-0021
title: Package and Tooling Setup
status: ready
date_created: 2026-05-03
date_updated: 2026-05-03
version: 1.0.0
owner: architecture-council
work_type: tooling
phase: baseline-stabilization
related_adrs:
  - ADR-0023
depends_on:
  - WP-0022
supersedes: null
superseded_by: null
---

# WP-0021: Package and Tooling Setup

## Purpose

Establish the minimal Bun-based package and script baseline needed for repository verification.

This work packet does not start runtime implementation.

## Current Context

The project is in Baseline Stabilization / Implementation Readiness.

The repository needs a minimal root package manifest so local verification can be executed consistently through Bun.

Earlier pnpm-oriented package setup has been corrected by ADR-0023.

## Scope

This work packet authorizes:

1. creating `package.json`;
2. generating `bun.lock`;
3. adding minimal verification scripts;
4. confirming pnpm files are absent;
5. running local verification.

## Out of Scope

This work packet does not authorize:

1. creating `pnpm-workspace.yaml`;
2. creating `pnpm-lock.yaml`;
3. adding application packages;
4. adding workspace package manifests;
5. adding frontend runtime implementation;
6. adding backend runtime implementation;
7. adding CI workflows;
8. adding test framework dependencies;
9. adding linting or formatting dependencies;
10. adding TypeScript configuration.

## Required Files

The intended root files are:

```text
package.json
bun.lock
````

## Forbidden Files

The following files must not exist after this work packet:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

## Required package.json Scripts

The root `package.json` must include:

```json
{
  "scripts": {
    "verify": "bun run verify:repo",
    "verify:repo": "bash tools/check-repo-contract.sh"
  }
}
```

## Execution Steps

1. Confirm WP-0022 has corrected the package-manager ADR direction.
2. Remove forbidden pnpm files if present.
3. Create or update `package.json`.
4. Run `bun install --lockfile-only`.
5. Run `bun run verify`.
6. Run `./tools/check-repo-contract.sh`.
7. Commit as an atomic tooling setup change.

## Verification Commands

Run:

```bash
bun install --lockfile-only
bun run verify
./tools/check-repo-contract.sh
git status --short
```

Do not claim verification passed unless these commands were actually run.

## Expected Result

Expected repository state:

```text
package.json exists
bun.lock exists
pnpm-workspace.yaml does not exist
pnpm-lock.yaml does not exist
bun run verify executes repository verification
```

## Commit

Recommended commit message:

```text
chore(tooling): add minimal bun tooling setup
```

## Definition of Done

This work packet is done when:

1. `package.json` exists;
2. `bun.lock` exists;
3. forbidden pnpm files are absent;
4. `bun run verify` has been run;
5. `./tools/check-repo-contract.sh` has been run;
6. results are reviewed;
7. the change is committed atomically.

````

---

## 2.5 Create WP-0022 if it does not exist

Create this only if missing:

```text
docs/work-packets/WP-0022-correct-package-manager-decision-to-bun.md
````

Full file contents:

````markdown
---
id: WP-0022
title: Correct Package Manager Decision to Bun
status: ready
date_created: 2026-05-03
date_updated: 2026-05-03
version: 1.0.0
owner: architecture-council
work_type: adr-correction
phase: baseline-stabilization
related_adrs:
  - ADR-0019
  - ADR-0023
depends_on: []
supersedes: null
superseded_by: null
---

# WP-0022: Correct Package Manager Decision to Bun

## Purpose

Correct the package-manager decision from the earlier pnpm-oriented direction to the current Bun-based direction.

This work packet preserves architectural history while establishing Bun as canonical for JavaScript/TypeScript package management and script execution.

## Context

The project previously drifted toward pnpm-oriented package tooling.

That direction is no longer correct.

The active decision is:

1. Bun for JavaScript/TypeScript package management and scripts;
2. uv for future Python package and environment management;
3. cargo for future Rust package and build management.

ADR-0019 must remain present as historical context.

ADR-0023 must supersede ADR-0019 for active package-manager direction.

## Scope

This work packet authorizes:

1. creating ADR-0023;
2. updating the ADR index to mark ADR-0019 superseded by ADR-0023;
3. updating package/tooling planning documentation to make Bun canonical;
4. updating WP-0021 so it authorizes `package.json` and `bun.lock`;
5. removing `pnpm-workspace.yaml` if present;
6. removing `pnpm-lock.yaml` if present.

## Out of Scope

This work packet does not authorize:

1. deleting ADR-0019;
2. renumbering ADRs;
3. filling ADR gaps;
4. resolving overlap between ADR-0013 and ADR-0015;
5. moving architecture overview documents;
6. creating CI workflows;
7. starting runtime implementation;
8. adding application packages;
9. adding package dependencies beyond the minimal Bun setup.

## Required Changes

Create:

```text
docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
````

Update:

```text
docs/adr/README.md
docs/planning/07-package-and-tooling-baseline.md
docs/work-packets/WP-0021-package-and-tooling-setup.md
```

Remove if present:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

## Verification Commands

Run:

```bash
test -f docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
test ! -f pnpm-workspace.yaml
test ! -f pnpm-lock.yaml
grep -R "ADR-0023" docs/adr/README.md
grep -R "Bun" docs/planning/07-package-and-tooling-baseline.md
grep -R "bun.lock" docs/work-packets/WP-0021-package-and-tooling-setup.md
git status --short
```

If `tools/check-repo-contract.sh` already exists and is executable, also run:

```bash
./tools/check-repo-contract.sh
```

Do not claim verification passed unless it was actually run.

## Commit

Recommended commit message:

```text
docs(adr): correct package manager decision to bun
```

## Definition of Done

This work packet is done when:

1. ADR-0023 exists;
2. ADR-0019 remains present;
3. ADR index records ADR-0019 as superseded by ADR-0023;
4. package/tooling planning references Bun as canonical;
5. WP-0021 references `package.json` and `bun.lock`;
6. forbidden pnpm files are absent;
7. verification has been run;
8. the change is committed atomically.
