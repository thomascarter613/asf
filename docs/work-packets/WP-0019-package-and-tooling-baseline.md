---
title: "WP-0019: Package and Tooling Baseline"
description: "Creates the package and tooling baseline plan for the Agentic Software Framework, defining package-manager strategy, local command conventions, lockfile expectations, formatting, linting, typechecking, test command direction, and repo contract integration before package files or runtime code are introduced."
status: "ready"
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
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0019"
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
  - "tree"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md"
  - "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
  - "docs/domain/00-domain-model.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "tools/check-repo-contract.sh"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0019-package-and-tooling-baseline.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
recommended_commit: "docs(planning): add package and tooling baseline"
---

# WP-0019: Package and Tooling Baseline

## 1. Purpose

This work packet governs creation of the package and tooling baseline plan for the Agentic Software Framework.

The uploaded repository tree is the active baseline.

The repository has reached implementation-readiness planning, but package-manager setup has not been introduced yet.

This packet authorizes creation of:

```text
docs/planning/07-package-and-tooling-baseline.md
```

The purpose of that baseline is to define the local package/tooling strategy before the project introduces package files, lockfiles, source-code directories, CI workflows, runtime modules, or executable evaluation harness code.

This packet does **not** authorize creating package-manager files yet.

It does **not** authorize creating:

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

or any runtime implementation file.

The package and tooling baseline must be planned first.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because implementation-readiness planning exists or is being completed, the executable repo contract script exists, and the repository needs an explicit package/tooling baseline before any package files or runtime source code are introduced.
```

---

## 3. Source Inputs

## 3.1 Baseline Context

```text
The uploaded repository tree is the active baseline.
```

## 3.2 Related Work Packet Index

```text
docs/work-packets/README.md
```

## 3.3 Related Work Packets

```text
WP-0014: Executable Repo Contract Script
WP-0015: Evaluation Harness Baseline
WP-0016: Repo Contract Script Baseline Update
WP-0017: Current State and README Status Update
WP-0018: Implementation Readiness Planning
```

## 3.4 Related ADRs

```text
ADR-0011: Dependency Pinning Policy
ADR-0014: Polyglot Language Strategy
ADR-0019: Primary Package Managers
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Planning and Verification Documents

```text
docs/planning/06-implementation-readiness-plan.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0019-package-and-tooling-baseline.md`.
2. Create `docs/planning/07-package-and-tooling-baseline.md`.
3. Define package/tooling baseline purpose.
4. Define current tooling status.
5. Define package-manager decision inputs.
6. Define local command conventions.
7. Define lockfile expectations.
8. Define formatting direction.
9. Define linting direction.
10. Define typechecking direction.
11. Define testing direction.
12. Define repo contract script integration.
13. Define future CI integration expectations.
14. Define future evaluation harness integration expectations.
15. Define prohibited premature tooling work.
16. Define recommended next packet sequence.
17. Preserve the uploaded baseline without mutation.

---

## 5. Non-Goals

Out of scope:

1. Creating `package.json`.
2. Creating lockfiles.
3. Creating package-manager configuration.
4. Installing dependencies.
5. Creating source-code directories.
6. Creating runtime implementation.
7. Creating CI workflows.
8. Creating executable evaluation harness code.
9. Creating database schema.
10. Creating API contracts.
11. Creating vector retrieval implementation.
12. Creating Qdrant collections.
13. Creating embedding pipelines.
14. Creating agent runtime code.
15. Modifying ADRs.
16. Modifying the ADR index.
17. Modifying README.
18. Modifying current-state documents.
19. Modifying verification documents.
20. Modifying `tools/check-repo-contract.sh`.
21. Creating a devcontainer.
22. Creating pre-commit hooks.
23. Creating formatter/linter configs.
24. Creating TypeScript, Python, Rust, or other runtime configs.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. Runtime implementation has not started.
3. Package-manager setup does not exist yet.
4. CI workflows do not exist yet.
5. The executable repo contract script exists.
6. Documentation-level evaluation harness baseline exists.
7. Package/tooling choices should follow existing ADRs unless explicitly changed.
8. Package/tooling setup should be introduced through a later explicit execution packet.
9. Lockfiles should be committed when package managers are introduced, consistent with dependency pinning policy.
10. Local commands should be defined before CI automates them.
11. CI should automate local checks rather than invent unrelated checks.
12. Runtime source code should wait until package/tooling and implementation slice planning are accepted.
13. This packet is planning-only.

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

1. This packet may create `docs/planning/07-package-and-tooling-baseline.md`.
2. This packet may create only this work packet and the package/tooling baseline plan.
3. This packet must not create package-manager files.
4. This packet must not create lockfiles.
5. This packet must not install dependencies.
6. This packet must not create source-code directories.
7. This packet must not create runtime code.
8. This packet must not create CI workflows.
9. This packet must not modify `tools/check-repo-contract.sh`.
10. This packet must not claim package/tooling setup exists after the plan is created.

---

## 8. Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Package files are introduced before strategy is clear. | High | This packet creates planning only and forbids package files. |
| CI is added before local command conventions exist. | Medium | Define local command expectations first. |
| Tooling conflicts with ADR-0019. | Medium | Require alignment with ADR-0019 or explicit ADR update. |
| Runtime implementation starts before package setup. | High | Keep runtime code prohibited until slice planning. |
| Lockfiles are omitted. | Medium | Define lockfile expectations in baseline. |
| Too many tools are added too early. | Medium | Separate planning from later setup packet. |
| Repo contract script becomes stale after package/tooling files are added. | Medium | Require future script update after tooling setup. |
| Package setup overfits to one language before runtime slice is selected. | Medium | Define language-specific tooling in stages. |

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

Readiness notes:

```text
This packet is ready. It creates the planning baseline for package and tooling decisions without introducing package files, dependencies, CI, or runtime implementation.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0019-package-and-tooling-baseline.md
docs/planning/07-package-and-tooling-baseline.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
README.md
docs/ai/00-current-state.md
docs/adr/README.md
docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md
docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md
docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
docs/planning/06-implementation-readiness-plan.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
README.md
tree
tools/check-repo-contract.sh
docs/adr/*
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
```

---

## 11. Implementation Plan

1. Confirm `docs/planning/06-implementation-readiness-plan.md` exists.
2. Confirm `tools/check-repo-contract.sh` exists and is executable.
3. Confirm ADR-0011 exists.
4. Confirm ADR-0014 exists.
5. Confirm ADR-0019 exists.
6. Create `docs/work-packets/WP-0019-package-and-tooling-baseline.md`.
7. Create `docs/planning/07-package-and-tooling-baseline.md`.
8. In the baseline plan, state that the uploaded repository tree is the active baseline.
9. Define current package/tooling status.
10. Define package-manager strategy inputs.
11. Define local command categories.
12. Define lockfile policy expectations.
13. Define formatting/linting/typechecking/test direction.
14. Define repo contract integration.
15. Define future package/tooling execution packet.
16. Define future CI packet relationship.
17. Run verification.
18. Run `./tools/check-repo-contract.sh`.
19. Commit this packet and the baseline plan atomically, unless this packet is committed separately.

---

## 12. Required Package and Tooling Baseline Content

The package and tooling baseline must include:

1. Purpose.
2. Baseline rule.
3. Current package/tooling status.
4. Related ADRs.
5. Package-manager strategy.
6. Dependency pinning and lockfile expectations.
7. Local command taxonomy.
8. Formatting baseline.
9. Linting baseline.
10. Typechecking baseline.
11. Testing baseline.
12. Repo contract integration.
13. Evaluation harness integration.
14. CI relationship.
15. Future tooling setup sequence.
16. What is explicitly not created yet.
17. Prohibited premature work.
18. Recommended next work.
19. Acceptance criteria.
20. Verification.

---

## 13. Package-Manager Strategy to Define

The baseline should discuss existing ADR direction:

```text
ADR-0019: Primary Package Managers
```

The current ADR name indicates:

```text
uv
cargo
pnpm
```

The plan should not silently change ADR-0019.

The plan may state:

1. `uv` is expected for Python package/dependency workflows if Python modules are introduced.
2. `cargo` is expected for Rust package/dependency workflows if Rust modules are introduced.
3. `pnpm` is expected for TypeScript/package workspace workflows if TypeScript modules are introduced.
4. Any change to package-manager strategy should be handled by explicit ADR update or supersession.
5. Package files should not be created until the package/tooling setup packet explicitly authorizes them.

---

## 14. Local Command Categories to Define

The baseline should define future command categories such as:

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

The plan should make clear:

1. These commands may not exist yet.
2. `./tools/check-repo-contract.sh` is the current local executable verification command.
3. Future package scripts should wrap or call the repo contract script.
4. CI should later call stable local commands.

---

## 15. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0019-package-and-tooling-baseline.md` exists.
2. `docs/planning/07-package-and-tooling-baseline.md` exists after execution.
3. The baseline plan includes YAML frontmatter.
4. The baseline plan includes `# Package and Tooling Baseline`.
5. The baseline plan states that the uploaded repository tree is the active baseline.
6. The baseline plan defines current package/tooling status.
7. The baseline plan references ADR-0011.
8. The baseline plan references ADR-0014.
9. The baseline plan references ADR-0019.
10. The baseline plan defines package-manager strategy.
11. The baseline plan defines lockfile expectations.
12. The baseline plan defines local command categories.
13. The baseline plan defines repo contract integration.
14. The baseline plan defines future CI relationship.
15. The baseline plan identifies prohibited premature work.
16. The baseline plan does not create package files.
17. The baseline plan does not create lockfiles.
18. The baseline plan does not create runtime code.
19. The baseline plan does not create CI workflows.
20. No ADR files are modified.
21. No verification files are modified.
22. `tools/check-repo-contract.sh` is not modified.
23. No secrets or sensitive values are introduced.
24. `./tools/check-repo-contract.sh` passes.
25. `git diff --check` passes.

---

## 16. Verification Plan

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0019-package-and-tooling-baseline.md && \
grep -q '^title: "WP-0019: Package and Tooling Baseline"$' docs/work-packets/WP-0019-package-and-tooling-baseline.md && \
grep -q '^# WP-0019: Package and Tooling Baseline$' docs/work-packets/WP-0019-package-and-tooling-baseline.md && \
grep -q 'docs/planning/07-package-and-tooling-baseline.md' docs/work-packets/WP-0019-package-and-tooling-baseline.md && \
grep -q 'ADR-0019' docs/work-packets/WP-0019-package-and-tooling-baseline.md && \
grep -q 'Package-Manager Strategy' docs/work-packets/WP-0019-package-and-tooling-baseline.md && \
git diff --check
```

Run after creating `docs/planning/07-package-and-tooling-baseline.md`:

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
The current repo contract script may not yet check WP-0019 or docs/planning/07-package-and-tooling-baseline.md until a future script update packet adds them.
```

Manual verification:

1. Confirm no package-manager files were created.
2. Confirm no lockfiles were created.
3. Confirm no dependencies were installed.
4. Confirm no runtime source directories were created.
5. Confirm no runtime code was created.
6. Confirm no CI workflows were created.
7. Confirm no ADR files were modified.
8. Confirm no verification files were modified.
9. Confirm `tools/check-repo-contract.sh` was not modified.
10. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

---

## 17. Security and Privacy Notes

Security notes:

```text
This packet creates planning documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, dependency credentials, registry tokens, or sensitive operational values.
```

Privacy notes:

```text
The package/tooling baseline should use repository-relative paths and synthetic examples only.
```

Additional safety notes:

1. Do not include `.env` values.
2. Do not include package registry tokens.
3. Do not include private repository URLs.
4. Do not include local absolute paths.
5. Do not include command output containing private machine details.
6. Do not include credentials in examples.

---

## 18. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0019-package-and-tooling-baseline.md`.
2. In the execution step, create `docs/planning/07-package-and-tooling-baseline.md`.

Documentation intentionally deferred:

1. Updating README is deferred.
2. Updating current-state is deferred.
3. Updating repo contract script is deferred.
4. Creating package files is deferred.
5. Creating lockfiles is deferred.
6. Creating CI baseline is deferred.
7. Creating executable evaluation harness implementation is deferred.
8. Runtime implementation is deferred.

---

## 19. Completion Record

This section must be completed before the packet is marked `complete`.

## 19.1 Completion Summary

```text
Not completed yet.
```

## 19.2 Files Created

```text
None yet.
```

## 19.3 Files Modified

```text
None yet.
```

## 19.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 19.5 Verification Commands Run

```bash
# Not run yet.
```

## 19.6 Verification Result

```text
not_run
```

## 19.7 Known Limitations

```text
None recorded yet.
```

## 19.8 Follow-up Work Created

```text
None yet.
```

## 19.9 Completion Actor

```text
Not completed yet.
```

## 19.10 Completion Date

```text
Not completed yet.
```

---

## 20. Recommended Atomic Commit

If committing the packet by itself first:

```bash
git add docs/work-packets/WP-0019-package-and-tooling-baseline.md
git commit -m "docs(work-packets): add package and tooling baseline packet"
```

If committing this packet together with the package/tooling baseline plan:

```bash
git add docs/work-packets/WP-0019-package-and-tooling-baseline.md docs/planning/07-package-and-tooling-baseline.md
git commit -m "docs(planning): add package and tooling baseline"
```

Recommended final commit message after execution:

```text
docs(planning): add package and tooling baseline
```

---

## 21. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/planning/07-package-and-tooling-baseline.md`.
2. Create a future packet to update `tools/check-repo-contract.sh` after WP-0018 and WP-0019 are executed.
3. Create `WP-0020: CI Baseline`.
4. Create `WP-0021: Executable Evaluation Harness Planning`.
5. Create `WP-0022: Runtime Implementation Slice Plan`.
6. Create a future package/tooling setup packet if the Project Steward approves creating package files.

---

## 22. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. The package/tooling baseline plan exists.
3. All acceptance criteria are satisfied or explicitly deferred with rationale.
4. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
5. Failed verification is not hidden.
6. Completion Record is filled in.
7. Recommended commit is accurate.
8. Follow-up work is recorded.
9. The packet status is updated to `complete`.

---

## 23. Notes

```text
This packet keeps the project disciplined at the boundary between implementation readiness and actual tooling setup. The package/tooling baseline must be accepted before package files, lockfiles, CI workflows, or runtime source code are introduced.
```

## Verification Commands

Run the relevant repository verification commands for this historical packet:

```bash
bun run verify
bash tools/eval/run-evaluations.sh
bun run work-packet validate-repo
```
