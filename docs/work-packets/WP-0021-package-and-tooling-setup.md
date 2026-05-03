---
title: "WP-0021: Package and Tooling Setup"
description: "Authorizes the first minimal package/tooling setup for the Agentic Software Framework by creating root package-manager files and local verification command wrappers without adding runtime source code, dependencies, CI workflows, or executable evaluation harness implementation."
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
work_packet_id: "WP-0021"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0011"
  - "ADR-0014"
  - "ADR-0018"
  - "ADR-0019"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "README.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md"
  - "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/ai/00-current-state.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0021-package-and-tooling-setup.md"
  - "package.json"
  - "pnpm-workspace.yaml"
  - ".npmrc"
  - "pnpm-lock.yaml"
recommended_commit: "chore(tooling): add minimal package tooling setup"
---

# WP-0021: Package and Tooling Setup

## 1. Purpose

This work packet governs the first actual package/tooling setup for the Agentic Software Framework.

The uploaded repository tree is the active baseline.

The repository has completed package/tooling planning through:

```text
docs/planning/07-package-and-tooling-baseline.md
````

This packet authorizes a deliberately minimal package setup so the repository has a stable root command entry point for local verification.

This packet authorizes creating:

```text
package.json
pnpm-workspace.yaml
.npmrc
pnpm-lock.yaml
```

The package setup must remain minimal.

It must not introduce runtime implementation.

It must not introduce source directories.

It must not introduce dependencies unless explicitly justified.

It must not introduce CI.

It must not introduce executable evaluation harness implementation.

The immediate goal is:

```text
Create a root package/tooling shell around the existing local repo contract script.
```

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because package/tooling planning exists, the repo contract script exists, and the next readiness step is to create a minimal root package command wrapper around existing local verification.
```

---

## 3. Source Inputs

## 3.1 Baseline Context

```text
The uploaded repository tree is the active baseline.
```

## 3.2 Related Work Packets

```text
WP-0018: Implementation Readiness Planning
WP-0019: Package and Tooling Baseline
WP-0020: Repo Contract Script Readiness Update
```

## 3.3 Related ADRs

```text
ADR-0011: Dependency Pinning Policy
ADR-0014: Polyglot Language Strategy
ADR-0019: Primary Package Managers
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.4 Related Planning and Verification Documents

```text
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0021-package-and-tooling-setup.md`.
2. Create root `package.json`.
3. Create `pnpm-workspace.yaml`.
4. Create `.npmrc`.
5. Generate `pnpm-lock.yaml` with no runtime dependencies.
6. Add root package scripts for local verification.
7. Add root package metadata.
8. Ensure `pnpm run verify:repo` calls `tools/check-repo-contract.sh`.
9. Ensure `pnpm run verify` calls `pnpm run verify:repo`.
10. Keep setup dependency-free unless the package manager itself writes lockfile metadata.
11. Preserve runtime-not-started status.
12. Preserve CI-not-started status.
13. Preserve executable evaluation harness-not-started status.
14. Run local verification.

---

## 5. Non-Goals

Out of scope:

1. Creating runtime source code.
2. Creating `src/`.
3. Creating `packages/`.
4. Creating `apps/`.
5. Creating `services/`.
6. Creating TypeScript source files.
7. Creating Python packages.
8. Creating Rust crates.
9. Creating Go modules.
10. Installing runtime dependencies.
11. Installing development dependencies.
12. Creating CI workflows.
13. Creating executable evaluation harness code.
14. Creating database schema.
15. Creating API contracts.
16. Creating vector retrieval implementation.
17. Creating Qdrant collections.
18. Creating embedding pipelines.
19. Creating agent runtime implementation.
20. Modifying ADR files.
21. Modifying planning documents.
22. Modifying verification documents.
23. Modifying `tools/check-repo-contract.sh`.
24. Updating README or current-state documents in this packet.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. Runtime implementation has not started.
3. CI workflows do not exist yet.
4. Executable evaluation harness implementation does not exist yet.
5. `tools/check-repo-contract.sh` exists and is executable.
6. The package/tooling baseline selected `pnpm` as the TypeScript/package workspace package manager by reference to ADR-0019.
7. The first package setup should be root-level and minimal.
8. No dependencies are required for the first package setup.
9. `pnpm-lock.yaml` should be generated by `pnpm`.
10. If `pnpm` is not available locally, execution should be blocked rather than silently substituting `npm`, `yarn`, or another package manager.
11. Future package/tooling expansion should happen through explicit work packets.

---

## 7. Constraints

Baseline constraints:

1. The uploaded repository tree is the active baseline.
2. Existing ADR numbering, naming, and gaps must not be changed silently.
3. Existing files must not be renamed, deleted, or rewritten unless this packet explicitly authorizes it.
4. Proposed cleanup must happen through explicit work packets.
5. Work must remain atomic and commit-ready.
6. Verification must be defined before completion.
7. No secrets or sensitive values may be introduced.
8. Commit messages must follow Conventional Commit style.

Packet-specific constraints:

1. This packet may create only:

   * `package.json`
   * `pnpm-workspace.yaml`
   * `.npmrc`
   * `pnpm-lock.yaml`
   * `docs/work-packets/WP-0021-package-and-tooling-setup.md`
2. This packet must not create source-code directories.
3. This packet must not add dependencies.
4. This packet must not create CI workflows.
5. This packet must not create runtime implementation.
6. This packet must not modify ADRs.
7. This packet must not modify existing planning or verification documents.
8. This packet must not modify `tools/check-repo-contract.sh`.
9. This packet must not claim runtime implementation has started.
10. This packet must not claim CI exists.
11. This packet must not claim executable evaluation harness implementation exists.

---

## 8. Risks

| Risk                                                              | Severity | Mitigation                                                              |
| ----------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- |
| Package setup accidentally becomes runtime implementation.        | High     | Forbid source directories, runtime code, and dependencies.              |
| Wrong package manager is introduced.                              | Medium   | Use `pnpm` per ADR-0019 unless an ADR changes.                          |
| Lockfile is omitted.                                              | Medium   | Require `pnpm-lock.yaml` generation.                                    |
| Package scripts duplicate repo contract logic.                    | Medium   | Scripts should call `tools/check-repo-contract.sh`.                     |
| Setup assumes CI exists.                                          | Medium   | Keep CI deferred.                                                       |
| Setup assumes TypeScript source exists.                           | Medium   | Do not add TypeScript config yet.                                       |
| `pnpm` is unavailable locally.                                    | Medium   | Block execution and report missing prerequisite.                        |
| Repo contract script becomes stale after package files are added. | Low      | Create a later script update packet if package files should be checked. |

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
docs/work-packets/WP-0021-package-and-tooling-setup.md
package.json
pnpm-workspace.yaml
.npmrc
pnpm-lock.yaml
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
docs/planning/07-package-and-tooling-baseline.md
docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md
docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
tools/check-repo-contract.sh
```

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
README.md
SECURITY.md
tree
tools/check-repo-contract.sh
docs/adr/*
docs/product/*
docs/architecture/*
docs/domain/*
docs/planning/*
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

1. Confirm `docs/planning/07-package-and-tooling-baseline.md` exists.
2. Confirm `tools/check-repo-contract.sh` exists and is executable.
3. Confirm `pnpm` is available:

   ```bash
   command -v pnpm
   ```
4. Create `docs/work-packets/WP-0021-package-and-tooling-setup.md`.
5. Create root `package.json`.
6. Create `pnpm-workspace.yaml`.
7. Create `.npmrc`.
8. Run:

   ```bash
   pnpm install --lockfile-only
   ```
9. Confirm `pnpm-lock.yaml` exists.
10. Run:

    ```bash
    pnpm run verify
    ```
11. Run:

    ```bash
    ./tools/check-repo-contract.sh
    git diff --check
    ```
12. Commit this packet and package/tooling files atomically, unless this packet is committed separately.

---

## 12. Required `package.json` Shape

The root `package.json` should be minimal.

It should include:

1. `name`
2. `version`
3. `private`
4. `description`
5. `license`
6. `packageManager` if a local pnpm version is intentionally recorded
7. `scripts`

Required scripts:

```json
{
  "verify": "pnpm run verify:repo",
  "verify:repo": "bash tools/check-repo-contract.sh"
}
```

Optional placeholder scripts may be included only if they do not pretend tooling exists.

Do not include scripts such as:

```text
lint
typecheck
test
build
eval
```

unless they are explicit no-op placeholders or are deferred. Prefer not to include them until real tooling exists.

---

## 13. Required `pnpm-workspace.yaml` Shape

Because no packages exist yet, the workspace file should be conservative.

Recommended content:

```yaml
packages: []
```

or a documented future-ready pattern only if directories are intentionally created later.

Do not create `packages/`, `apps/`, or `services/` in this packet.

---

## 14. Required `.npmrc` Shape

The `.npmrc` should enforce disciplined dependency behavior.

Recommended settings:

```text
save-exact=true
engine-strict=true
strict-peer-dependencies=true
auto-install-peers=false
```

Do not include registry tokens, private registry credentials, or local machine paths.

---

## 15. Lockfile Expectations

`pnpm-lock.yaml` should be generated with:

```bash
pnpm install --lockfile-only
```

Expected result:

1. Lockfile exists.
2. No dependencies are added.
3. Lockfile reflects an empty/minimal root workspace.
4. Lockfile is committed with package setup.
5. Lockfile changes are not hand-edited.

If `pnpm` is not installed:

1. Do not create a fake lockfile.
2. Do not substitute another package manager.
3. Mark the packet execution as blocked.
4. Install or enable `pnpm` outside this packet’s repository changes, then retry.

---

## 16. Verification Commands

After execution, these commands should pass:

```bash
command -v pnpm
pnpm install --lockfile-only
pnpm run verify
./tools/check-repo-contract.sh
git diff --check
```

`pnpm run verify` should call:

```bash
bash tools/check-repo-contract.sh
```

The repo contract script may not yet check the new package files until a later repo contract update packet. That is acceptable for this packet.

---

## 17. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0021-package-and-tooling-setup.md` exists.
2. `package.json` exists.
3. `pnpm-workspace.yaml` exists.
4. `.npmrc` exists.
5. `pnpm-lock.yaml` exists.
6. `package.json` is marked private.
7. `package.json` includes `verify`.
8. `package.json` includes `verify:repo`.
9. `verify:repo` calls `tools/check-repo-contract.sh`.
10. `pnpm-workspace.yaml` does not require source directories that do not exist.
11. `.npmrc` does not include secrets.
12. No runtime dependencies are added.
13. No development dependencies are added.
14. No runtime source directories are created.
15. No CI workflows are created.
16. No ADR files are modified.
17. No planning documents are modified.
18. No verification documents are modified.
19. `tools/check-repo-contract.sh` is not modified.
20. `pnpm run verify` passes.
21. `./tools/check-repo-contract.sh` passes.
22. `git diff --check` passes.

---

## 18. Verification Plan

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0021-package-and-tooling-setup.md && \
grep -q '^title: "WP-0021: Package and Tooling Setup"$' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
grep -q '^# WP-0021: Package and Tooling Setup$' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
grep -q 'package.json' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
grep -q 'pnpm-workspace.yaml' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
grep -q 'pnpm-lock.yaml' docs/work-packets/WP-0021-package-and-tooling-setup.md && \
git diff --check
```

Run after creating package/tooling files:

```bash
test -f package.json && \
test -f pnpm-workspace.yaml && \
test -f .npmrc && \
test -f pnpm-lock.yaml && \
grep -q '"private": true' package.json && \
grep -q '"verify"' package.json && \
grep -q '"verify:repo"' package.json && \
grep -q 'tools/check-repo-contract.sh' package.json && \
grep -q 'save-exact=true' .npmrc && \
pnpm run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Expected result:

```text
Package/tooling setup exists, pnpm verification passes, repo contract checks pass, and whitespace checks pass.
```

Manual verification:

1. Confirm no runtime dependencies were added.
2. Confirm no development dependencies were added.
3. Confirm no source-code directories were created.
4. Confirm no runtime code was created.
5. Confirm no CI workflows were created.
6. Confirm no ADR files were modified.
7. Confirm no planning or verification documents were modified except this packet if committed together.
8. Confirm `.npmrc` contains no tokens, credentials, registry secrets, or local paths.

---

## 19. Security and Privacy Notes

Security notes:

```text
This packet creates package/tooling metadata only. It must not include registry tokens, private registry credentials, environment values, private keys, package publishing credentials, or local absolute paths.
```

Privacy notes:

```text
Package metadata should use project-level public-safe values only and should not include private personal or machine-specific information.
```

Additional safety notes:

1. Do not include `.env` values.
2. Do not include `NPM_TOKEN`.
3. Do not include private registry credentials.
4. Do not include local absolute paths.
5. Do not add dependencies from private registries.
6. Do not publish anything.
7. Do not run network-heavy or dependency-installing commands beyond generating the minimal lockfile.

---

## 20. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0021-package-and-tooling-setup.md`.
2. In the execution step, create package/tooling files.

Documentation intentionally deferred:

1. Updating README is deferred.
2. Updating current-state is deferred.
3. Updating repo contract script is deferred.
4. Updating repo contract baseline is deferred.
5. Updating package/tooling baseline is deferred.
6. Creating CI baseline is deferred.
7. Runtime implementation is deferred.
8. Executable evaluation harness implementation is deferred.

---

## 21. Completion Record

This section must be completed before the packet is marked `complete`.

## 21.1 Completion Summary

```text
Not completed yet.
```

## 21.2 Files Created

```text
None yet.
```

## 21.3 Files Modified

```text
None yet.
```

## 21.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 21.5 Verification Commands Run

```bash
# Not run yet.
```

## 21.6 Verification Result

```text
not_run
```

## 21.7 Known Limitations

```text
None recorded yet.
```

## 21.8 Follow-up Work Created

```text
None yet.
```

## 21.9 Completion Actor

```text
Not completed yet.
```

## 21.10 Completion Date

```text
Not completed yet.
```

---

## 22. Recommended Atomic Commit

If committing the packet by itself first:

```bash
git add docs/work-packets/WP-0021-package-and-tooling-setup.md
git commit -m "docs(work-packets): add package and tooling setup packet"
```

If committing this packet together with package/tooling setup:

```bash
git add docs/work-packets/WP-0021-package-and-tooling-setup.md package.json pnpm-workspace.yaml .npmrc pnpm-lock.yaml
git commit -m "chore(tooling): add minimal package tooling setup"
```

Recommended final commit message after execution:

```text
chore(tooling): add minimal package tooling setup
```

---

## 23. Follow-up Work

Follow-up items:

1. Execute this packet by creating the minimal package/tooling files.
2. Create a repo contract script update packet to check package files.
3. Create a README/current-state update packet to record package/tooling setup.
4. Create `WP-0022: CI Baseline`.
5. Create `WP-0023: Executable Evaluation Harness Planning`.
6. Create `WP-0024: Runtime Implementation Slice Plan`.

---

## 24. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. Package/tooling files are created.
3. `pnpm-lock.yaml` is generated by `pnpm`.
4. `pnpm run verify` passes.
5. `./tools/check-repo-contract.sh` passes.
6. `git diff --check` passes.
7. All acceptance criteria are satisfied or explicitly deferred with rationale.
8. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
9. Failed verification is not hidden.
10. Completion Record is filled in.
11. Recommended commit is accurate.
12. Follow-up work is recorded.
13. The packet status is updated to `complete`.

---

## 25. Notes

```text
This packet is the first controlled transition from documentation-only readiness into minimal package/tooling setup. It intentionally creates command wrappers only and does not begin runtime implementation.
```

## Historical Correction Note

This work packet is part of the package and tooling setup sequence that now uses Bun as the JavaScript/TypeScript package manager.

The current package/tooling baseline includes:

```text
bun.lock
```


## Current Bun Verification Anchor

The current canonical local verification command is:

```bash
bun run verify
```

This historical packet is preserved, but the active package/tooling baseline now uses Bun and `bun.lock`.
