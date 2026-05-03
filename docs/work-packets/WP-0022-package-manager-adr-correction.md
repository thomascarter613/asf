---
title: "WP-0022: Package Manager ADR Correction"
description: "Corrects the package-manager direction for the Agentic Software Framework by making Bun canonical for JavaScript/TypeScript tooling through an explicit ADR correction path, rather than silently preserving the prior pnpm-oriented wording."
status: "ready"
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
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0022"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0011"
  - "ADR-0014"
  - "ADR-0019"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "docs/adr/README.md"
  - "docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md"
  - "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/WP-0021-package-and-tooling-setup.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0022-package-manager-adr-correction.md"
  - "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md"
  - "docs/adr/README.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/WP-0021-package-and-tooling-setup.md"
recommended_commit: "docs(adr): correct package manager decision to bun"
---

# WP-0022: Package Manager ADR Correction

## 1. Purpose

This work packet governs correction of the package-manager decision for the Agentic Software Framework.

The uploaded repository tree is the active baseline.

The Project Steward has clarified that the project is using:

```text
Bun
````

not:

```text
pnpm
```

A prior package/tooling packet incorrectly carried forward the `pnpm` direction from the existing ADR-0019 filename:

```text
docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
```

This packet exists to correct that mismatch deliberately.

The correction must not be handled by silently pretending the mismatch never happened.

Instead, the correction should:

1. Preserve ADR history.
2. Create a new superseding ADR.
3. Make Bun canonical for JavaScript/TypeScript package tooling.
4. Update the ADR index.
5. Correct package/tooling planning documents.
6. Correct the package/tooling setup packet before package files are committed.
7. Prevent `pnpm` files from entering the repository.
8. Preserve the rule that runtime implementation has not started.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the Project Steward has explicitly clarified that Bun, not pnpm, is the intended JavaScript/TypeScript package manager.
```

---

## 3. Source Inputs

## 3.1 Baseline Context

```text
The uploaded repository tree is the active baseline.
```

## 3.2 Explicit Steward Direction

The Project Steward clarified:

```text
we are using bun
```

This is now the governing correction input.

## 3.3 Related ADRs

```text
ADR-0011: Dependency Pinning Policy
ADR-0014: Polyglot Language Strategy
ADR-0019: Primary Package Managers
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.4 Related Planning and Work-Packet Documents

```text
docs/planning/07-package-and-tooling-baseline.md
docs/work-packets/WP-0021-package-and-tooling-setup.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0022-package-manager-adr-correction.md`.
2. Create a new superseding ADR:

   ```text
   docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
   ```
3. Update `docs/adr/README.md` to include ADR-0023.
4. Mark ADR-0019 as superseded by ADR-0023 in the ADR index.
5. Update `docs/planning/07-package-and-tooling-baseline.md` to replace `pnpm` direction with Bun direction.
6. Update `docs/work-packets/WP-0021-package-and-tooling-setup.md` to replace `pnpm` setup with Bun setup.
7. Ensure the corrected package/tooling setup authorizes:

   ```text
   package.json
   bun.lock
   ```
8. Ensure the corrected package/tooling setup does **not** authorize:

   ```text
   pnpm-workspace.yaml
   pnpm-lock.yaml
   ```
9. Ensure verification uses:

   ```bash
   bun run verify
   ```
10. Preserve runtime-not-started status.
11. Preserve CI-not-started status.
12. Preserve executable evaluation harness-not-started status.

---

## 5. Non-Goals

Out of scope:

1. Creating runtime source code.
2. Creating `src/`.
3. Creating `packages/`.
4. Creating `apps/`.
5. Creating `services/`.
6. Creating CI workflows.
7. Creating executable evaluation harness implementation.
8. Creating database schema.
9. Creating API contracts.
10. Creating vector retrieval implementation.
11. Creating Qdrant collections.
12. Creating embedding pipelines.
13. Creating agent runtime code.
14. Installing runtime dependencies.
15. Installing development dependencies.
16. Modifying unrelated ADRs.
17. Renumbering ADRs.
18. Deleting ADR-0019.
19. Rewriting Git history.
20. Creating `pnpm` files.

---

## 6. Assumptions

Assumptions:

1. Bun is the intended JavaScript/TypeScript package manager.
2. ADR-0019 currently names `pnpm`, which conflicts with the corrected direction.
3. The correct ADR preservation method is to create a superseding ADR rather than silently renaming ADR-0019.
4. `uv` remains acceptable for future Python work unless separately changed.
5. `cargo` remains acceptable for future Rust work unless separately changed.
6. Runtime implementation has not started.
7. CI workflows do not exist yet.
8. Executable evaluation harness implementation does not exist yet.
9. Package/tooling setup should remain minimal.
10. Bun setup should not introduce dependencies in the first tooling packet.
11. `bun.lock` should be generated by Bun, not hand-authored if Bun is available locally.
12. If `pnpm` files were created locally but not committed, they should be removed.
13. If `pnpm` files were committed, a corrective commit must remove them.

---

## 7. Constraints

Baseline constraints:

1. The uploaded repository tree is the active baseline.
2. Existing ADR numbering, naming, and gaps must not be changed silently.
3. Existing files must not be renamed, deleted, or rewritten unless explicitly authorized.
4. Proposed cleanup must happen through explicit work packets.
5. Work must remain atomic and commit-ready.
6. Verification must be defined before completion.
7. No secrets or sensitive values may be introduced.
8. Commit messages must follow Conventional Commit style.

Packet-specific constraints:

1. This packet may create `docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md`.
2. This packet may update `docs/adr/README.md`.
3. This packet may update `docs/planning/07-package-and-tooling-baseline.md`.
4. This packet may update `docs/work-packets/WP-0021-package-and-tooling-setup.md`.
5. This packet must not rename ADR-0019.
6. This packet must not delete ADR-0019.
7. This packet must not renumber any ADR.
8. This packet must not create package files itself.
9. This packet must not create `bun.lock` itself.
10. This packet must not create runtime source code.
11. This packet must not create CI workflows.

---

## 8. Risks

| Risk                                                   | Severity | Mitigation                                                           |
| ------------------------------------------------------ | -------- | -------------------------------------------------------------------- |
| `pnpm` becomes accidentally canonical.                 | High     | Create ADR-0023 superseding ADR-0019.                                |
| ADR history is silently rewritten.                     | High     | Preserve ADR-0019 and supersede it explicitly.                       |
| Wrong package files are committed.                     | High     | Forbid `pnpm-workspace.yaml` and `pnpm-lock.yaml`.                   |
| Package setup starts before correction lands.          | Medium   | Correct WP-0021 before executing or committing package files.        |
| Repo contract script later checks wrong package files. | Medium   | Future script update must check Bun files, not pnpm files.           |
| Bun setup introduces dependencies too early.           | Medium   | Keep first Bun setup dependency-free.                                |
| Current-state docs become stale.                       | Medium   | Update current-state later after correction and setup are committed. |

---

## 9. Readiness Checklist

```text
[x] Purpose is clear.
[x] Source inputs are identified.
[x] Related baseline documents or ADRs are listed.
[x] Scope is bounded.
[x] Non-goals are explicit.
[x] Affected files are listed.
[x] Acceptance criteria are observable.
[x] Verification plan is defined.
[x] Security and privacy notes are considered.
[x] Recommended atomic commit is present.
[x] No blocking open question remains unresolved.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0022-package-manager-adr-correction.md
docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
```

## 10.2 Files to Modify

```text
docs/adr/README.md
docs/planning/07-package-and-tooling-baseline.md
docs/work-packets/WP-0021-package-and-tooling-setup.md
```

## 10.3 Files to Remove If Accidentally Created

If present and uncommitted, remove:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

If present and committed, remove them in the corrective execution commit.

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
README.md
SECURITY.md
tree
tools/check-repo-contract.sh
docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
docs/product/*
docs/architecture/*
docs/domain/*
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/planning/06-implementation-readiness-plan.md
docs/verification/*
docs/ai/*
src/
packages/
apps/
services/
.github/workflows/*
```

---

## 11. Implementation Plan

1. Create `docs/work-packets/WP-0022-package-manager-adr-correction.md`.
2. Create `docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md`.
3. In ADR-0023, state that Bun supersedes `pnpm` for JavaScript/TypeScript package management.
4. Preserve `uv` for future Python work.
5. Preserve `cargo` for future Rust work.
6. Update `docs/adr/README.md` to include ADR-0023.
7. In `docs/adr/README.md`, annotate ADR-0019 as superseded by ADR-0023.
8. Update `docs/planning/07-package-and-tooling-baseline.md` to replace `pnpm` package/tooling direction with Bun.
9. Update `docs/work-packets/WP-0021-package-and-tooling-setup.md` to authorize Bun files only.
10. Ensure WP-0021 execution files are:

    ```text
    package.json
    bun.lock
    ```
11. Ensure WP-0021 does not authorize:

    ```text
    pnpm-workspace.yaml
    pnpm-lock.yaml
    ```
12. Remove any accidentally created `pnpm` files if present.
13. Run verification.
14. Commit the correction atomically.

---

## 12. Required ADR-0023 Content

ADR-0023 must include:

1. Title:

   ```text
   ADR-0023: Primary Package Managers — Bun, uv, and cargo
   ```
2. Status:

   ```text
   accepted
   ```
3. Supersedes:

   ```text
   ADR-0019
   ```
4. Decision:

   ```text
   Bun is the canonical JavaScript/TypeScript package manager and script runner for this repository.
   ```
5. Continued decisions:

   ```text
   uv remains the expected Python package workflow when Python packages are introduced.
   cargo remains the expected Rust package workflow when Rust crates are introduced.
   ```
6. Consequences:

   * Do not introduce `pnpm-workspace.yaml`.
   * Do not introduce `pnpm-lock.yaml`.
   * Use `bun.lock`.
   * Use `bun run verify`.
   * Future repo contract checks should check Bun package files if package setup exists.

---

## 13. Corrected WP-0021 Direction

`WP-0021` should authorize:

```text
package.json
bun.lock
```

It should not authorize:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
.npmrc
```

unless a future Bun-specific reason is explicitly accepted.

Corrected package setup should use:

```json
{
  "scripts": {
    "verify": "bun run verify:repo",
    "verify:repo": "bash tools/check-repo-contract.sh"
  }
}
```

Corrected lockfile generation should use:

```bash
bun install --lockfile-only
```

Corrected verification should use:

```bash
bun run verify
./tools/check-repo-contract.sh
git diff --check
```

---

## 14. Prohibited Premature Work

Do not create or commit:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

Do not create:

```text
src/
packages/
apps/
services/
.github/workflows/
```

Do not install dependencies.

Do not create runtime implementation code.

Do not create CI workflows.

Do not create executable evaluation harness implementation.

---

## 15. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0022-package-manager-adr-correction.md` exists.
2. `docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md` exists after execution.
3. `docs/adr/README.md` references ADR-0023 after execution.
4. `docs/adr/README.md` indicates ADR-0019 is superseded by ADR-0023 after execution.
5. `docs/planning/07-package-and-tooling-baseline.md` references Bun instead of pnpm after execution.
6. `docs/work-packets/WP-0021-package-and-tooling-setup.md` authorizes Bun setup instead of pnpm setup after execution.
7. `pnpm-workspace.yaml` does not exist.
8. `pnpm-lock.yaml` does not exist.
9. No runtime source directories are created.
10. No CI workflows are created.
11. No runtime code is created.
12. No dependencies are added.
13. `tools/check-repo-contract.sh` is not modified by this correction packet.
14. `git diff --check` passes.

---

## 16. Verification Plan

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0022-package-manager-adr-correction.md && \
grep -q '^title: "WP-0022: Package Manager ADR Correction"$' docs/work-packets/WP-0022-package-manager-adr-correction.md && \
grep -q '^# WP-0022: Package Manager ADR Correction$' docs/work-packets/WP-0022-package-manager-adr-correction.md && \
grep -q 'Bun' docs/work-packets/WP-0022-package-manager-adr-correction.md && \
grep -q 'ADR-0023' docs/work-packets/WP-0022-package-manager-adr-correction.md && \
grep -q 'ADR-0019' docs/work-packets/WP-0022-package-manager-adr-correction.md && \
git diff --check
```

Run after executing the correction:

```bash
test -f docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md && \
grep -q '^# ADR-0023: Primary Package Managers — Bun, uv, and cargo$' docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md && \
grep -q 'Supersedes: ADR-0019' docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md && \
grep -q 'Bun is the canonical JavaScript/TypeScript package manager' docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md && \
grep -q 'ADR-0023' docs/adr/README.md && \
grep -q 'superseded by ADR-0023' docs/adr/README.md && \
grep -q 'Bun' docs/planning/07-package-and-tooling-baseline.md && \
grep -q 'bun.lock' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
grep -q 'bun run verify' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
test ! -f pnpm-workspace.yaml && \
test ! -f pnpm-lock.yaml && \
git diff --check
```

Manual verification:

1. Confirm ADR-0019 was not renamed.
2. Confirm ADR-0019 was not deleted.
3. Confirm no ADRs were renumbered.
4. Confirm Bun is canonical for JavaScript/TypeScript package tooling.
5. Confirm `pnpm` is not used as the current package-manager direction.
6. Confirm no package files are created by this correction packet unless separately authorized.
7. Confirm no runtime code is created.
8. Confirm no CI workflow is created.
9. Confirm no secrets or private values are introduced.

---

## 17. Security and Privacy Notes

Security notes:

```text
This packet updates architecture and planning documentation only. It must not include registry tokens, private registry credentials, environment values, private keys, package publishing credentials, or local absolute paths.
```

Privacy notes:

```text
Package-manager correction documentation should use repository-relative paths and project-level public-safe values only.
```

Additional safety notes:

1. Do not include `.env` values.
2. Do not include registry tokens.
3. Do not include private registry URLs.
4. Do not include local absolute paths.
5. Do not include credentials in examples.
6. Do not publish anything.
7. Do not install dependencies in this correction packet.

---

## 18. Recommended Atomic Commit

If committing this packet by itself first:

```bash
git add docs/work-packets/WP-0022-package-manager-adr-correction.md
git commit -m "docs(work-packets): add package manager adr correction packet"
```

If committing this packet together with the correction execution:

```bash
git add docs/work-packets/WP-0022-package-manager-adr-correction.md \
  docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md \
  docs/adr/README.md \
  docs/planning/07-package-and-tooling-baseline.md \
  docs/work-packets/WP-0021-package-and-tooling-setup.md

git rm -f pnpm-workspace.yaml pnpm-lock.yaml 2>/dev/null || true

git commit -m "docs(adr): correct package manager decision to bun"
```

Recommended final commit message after execution:

```text
docs(adr): correct package manager decision to bun
```

---

## 19. Follow-up Work

Follow-up items:

1. Execute this packet by creating ADR-0023 and updating affected docs.
2. Re-execute corrected WP-0021 using Bun:

   ```text
   package.json
   bun.lock
   ```
3. Create a repo contract script update packet to check Bun package files.
4. Create a README/current-state update packet to record Bun tooling setup.
5. Continue later with CI baseline only after Bun local verification is stable.

---

## 20. Packet Acceptance Criteria

This packet is complete when:

1. All in-scope correction artifacts exist.
2. ADR-0023 exists.
3. ADR index references ADR-0023.
4. ADR-0019 is preserved but marked superseded in the index.
5. Package/tooling baseline uses Bun.
6. WP-0021 uses Bun.
7. No `pnpm` package files remain.
8. No runtime code is introduced.
9. No CI workflow is introduced.
10. Verification is passed, limited, or explicitly deferred with rationale.
11. Recommended commit is accurate.
12. Follow-up work is recorded.

---

## 21. Notes

```text
This packet corrects a package-manager direction error before it becomes architectural drift. The correction is intentionally explicit: Bun becomes canonical through a superseding ADR, while ADR-0019 remains preserved as historical decision context.
```