---
title: "WP-0027: Current State and README CI Status Update"
description: "Updates README.md and docs/ai/00-current-state.md so repository orientation documents accurately record that the baseline GitHub Actions CI workflow now exists and verifies the repository baseline."
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
work_packet_id: "WP-0027"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0023"
related_documents:
  - "README.md"
  - "docs/ai/00-current-state.md"
  - ".github/workflows/ci.yml"
  - "docs/planning/08-ci-baseline-planning.md"
  - "docs/work-packets/WP-0026-ci-workflow-baseline.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md"
  - "README.md"
  - "docs/ai/00-current-state.md"
recommended_commit: "docs(project): update ci current state"
---

# WP-0027: Current State and README CI Status Update

## 1. Purpose

This work packet updates the repository orientation documents after the baseline GitHub Actions CI workflow has been added.

The repository now needs `README.md` and `docs/ai/00-current-state.md` to accurately state that:

1. CI workflow baseline exists.
2. `.github/workflows/ci.yml` exists.
3. CI runs repository baseline verification.
4. CI uses Bun.
5. CI installs with `bun install --frozen-lockfile`.
6. CI runs `bun run verify`.
7. CI runs `git diff --check`.
8. CI does not deploy.
9. CI does not publish packages.
10. CI does not require secrets.
11. Runtime implementation has not started.
12. Executable evaluation harness implementation does not exist yet.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because WP-0026 created the initial CI workflow and updated the repo contract script so the workflow is part of the enforced baseline.

## 3. Scope

In scope:

1. Create this work packet.
2. Update `README.md`.
3. Update `docs/ai/00-current-state.md`.
4. Record the baseline CI workflow.
5. Record the current CI verification behavior.
6. Preserve the runtime-not-started boundary.
7. Preserve the executable-evaluation-harness-not-started boundary.
8. Preserve Bun package/tooling status.
9. Preserve ADR-0019 and ADR-0023 package-manager history.
10. Preserve known ADR gaps and baseline caveats.

## 4. Non-Goals

Out of scope:

1. Changing `.github/workflows/ci.yml`.
2. Changing `tools/check-repo-contract.sh`.
3. Starting runtime implementation.
4. Adding runtime tests.
5. Adding lint dependencies.
6. Adding TypeScript configuration.
7. Adding deployment workflows.
8. Adding release workflows.
9. Adding package publishing.
10. Adding secrets.
11. Adding executable evaluation harness implementation.
12. Renumbering ADRs.
13. Deleting ADR-0019.
14. Resolving ADR-0013 and ADR-0015.
15. Moving architecture overview documents.
16. Removing or regenerating the root `tree` file.

## 5. Affected Files

Create:

```text
docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md
```

Modify:

```text
README.md
docs/ai/00-current-state.md
```

## 6. Acceptance Criteria

This packet is complete when:

1. `README.md` states CI workflow baseline exists.
2. `README.md` references `.github/workflows/ci.yml`.
3. `README.md` states CI runs `bun install --frozen-lockfile`.
4. `README.md` states CI runs `bun run verify`.
5. `README.md` states CI runs `git diff --check`.
6. `README.md` states CI does not deploy.
7. `README.md` states CI does not publish packages.
8. `README.md` states runtime implementation has not started.
9. `docs/ai/00-current-state.md` records the same status.
10. `docs/ai/00-current-state.md` records WP-0027 as the current active packet.
11. Existing baseline caveats remain preserved.
12. `bun run verify` passes locally.
13. `./tools/check-repo-contract.sh` passes locally.
14. `git diff --check` passes locally.
15. The change is committed atomically.

## 7. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md && \
test -f README.md && \
test -f docs/ai/00-current-state.md && \
test -f .github/workflows/ci.yml && \
grep -q 'CI workflow baseline exists' README.md && \
grep -q '.github/workflows/ci.yml' README.md && \
grep -q 'bun install --frozen-lockfile' README.md && \
grep -q 'bun run verify' README.md && \
grep -q 'git diff --check' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'CI workflow baseline exists' docs/ai/00-current-state.md && \
grep -q '.github/workflows/ci.yml' docs/ai/00-current-state.md && \
grep -q 'WP-0027' docs/ai/00-current-state.md && \
grep -q 'Runtime implementation has not started' docs/ai/00-current-state.md && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 8. Security and Privacy Notes

This packet updates documentation only.

It must not introduce:

1. secrets;
2. tokens;
3. deployment keys;
4. cloud credentials;
5. registry credentials;
6. private API keys;
7. `.env` values;
8. private operational values.

## 9. Recommended Atomic Commit

```text
docs(project): update ci current state
```

## 10. Follow-Up Work

Recommended next work:

```text
WP-0028: Executable Evaluation Harness Planning
```

Rationale:

1. Local verification exists.
2. Bun package/tooling exists.
3. CI baseline exists.
4. The repo contract is enforced locally and in CI.
5. Runtime implementation has not started.
6. The next readiness step should plan executable evaluation harness implementation before runtime work begins.
````

---

# 2. Update `README.md`

Use the full replacement below.

````markdown
# Agentic Software Framework

The Agentic Software Framework is a repository-governed software product initiative for disciplined AI-assisted software development.

Its purpose is to help transform product intent, architecture decisions, context continuity, work protocols, work packets, verification evidence, and implementation work into a durable, auditable repository-centered system.

The uploaded repository tree is the active baseline.

Current phase:

```text
Baseline Stabilization / Implementation Readiness
```

Runtime implementation has not started.

This repository currently contains planning, architecture, ADR, domain, verification, work-packet, context-continuity, root orientation, local repo-contract, minimal Bun package/tooling, and baseline CI workflow artifacts.

It does not yet contain runtime application code, database schema, vector retrieval implementation, Qdrant collections, embedding pipelines, agent runtime code, or executable evaluation harness implementation.

---

## Current Status

The repository is currently being stabilized before runtime implementation begins.

The current stabilization and implementation-readiness work has established:

1. Root governance files.
2. Product documents.
3. Architecture overview documents.
4. ADR index and ADR lineage.
5. Baseline inventory.
6. Domain model baseline.
7. Planning baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Executable local repo contract script.
11. Evaluation harness baseline.
12. Work-packet governance.
13. Context-continuity artifacts.
14. Root README.
15. Package/tooling baseline.
16. Bun package/tooling setup.
17. Bun-aware repo contract checks.
18. CI baseline planning.
19. CI workflow baseline.

The repository should continue to evolve through explicit work packets.

---

## Start Here

Future humans and AI sessions should start with:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
```

These files explain the current continuation point and the rules for choosing repository context.

Then read:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

These files define how non-trivial work should be scoped, verified, completed, and committed.

---

## Canonical Orientation Documents

The most important current orientation documents are:

```text
README.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
docs/planning/08-ci-baseline-planning.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
tools/check-repo-contract.sh
.github/workflows/ci.yml
```

---

## Product Documents

Product artifacts live in:

```text
docs/product/
```

Current product documents:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
```

These documents describe the product idea, mission, user model, requirements, and product-level architecture direction.

---

## Architecture Documents

Architecture artifacts live in:

```text
docs/architecture/
```

Current architecture document:

```text
docs/architecture/00-architecture-overview.md
```

Known caveat:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Both architecture overview files exist in the accepted baseline. They should not be moved, deleted, or merged without a future explicit work packet.

---

## Architecture Decision Records

ADRs live in:

```text
docs/adr/
```

Current ADR support files:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

Current ADR lineage includes decisions about:

1. ADRs as first-class engineering artifacts.
2. Repository-based context continuity.
3. Repository topology.
4. Access tier classification.
5. Clean-room architecture and pattern adoption.
6. Canonical repository plus vector retrieval.
7. Foundry Control Plane.
8. Dependency pinning.
9. Polyglot persistence and Qdrant retrieval.
10. Polyglot language strategy.
11. Worktree-based parallel execution.
12. Event bus and notification routing.
13. Work packet lifecycle.
14. Package manager strategy.
15. Directive compiler and work protocols.
16. Repo contract testing.
17. Evaluation harness.
18. Bun, uv, and cargo package-manager direction.

Known ADR caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 is preserved as historical context and superseded by ADR-0023 for active package-manager direction.
```

These caveats are accepted baseline facts. Do not renumber, delete, rename, fill, or supersede ADRs without an explicit work packet.

---

## Package and Tooling Status

Bun is canonical for JavaScript/TypeScript package management and script execution.

Current package/tooling files:

```text
package.json
bun.lock
```

Forbidden package/tooling files:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

Canonical local verification command:

```bash
bun run verify
```

Direct repo contract command:

```bash
./tools/check-repo-contract.sh
```

Package-manager ADR status:

```text
ADR-0023 supersedes ADR-0019 for active package-manager direction.
ADR-0019 remains preserved as historical context.
```

Future Python package/environment work should use `uv` unless a later ADR changes that direction.

Future Rust package/build work should use `cargo` unless a later ADR changes that direction.

---

## CI Status

CI workflow baseline exists.

Current CI workflow:

```text
.github/workflows/ci.yml
```

Current CI provider:

```text
GitHub Actions
```

Current CI triggers:

```text
push to main
pull_request
```

Current CI verification behavior:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

Current CI boundaries:

```text
CI does not deploy.
CI does not publish packages.
CI does not require secrets.
CI does not run runtime tests because runtime implementation has not started.
```

The CI workflow verifies the repository baseline. It does not verify runtime application behavior because runtime implementation has not started.

---

## Work Packets

Work packets live in:

```text
docs/work-packets/
```

Work packets are the repository’s governed execution unit.

A work packet defines:

1. Purpose.
2. Source inputs.
3. Scope.
4. Non-goals.
5. Assumptions.
6. Constraints.
7. Risks.
8. Readiness checklist.
9. Affected files.
10. Implementation plan.
11. Acceptance criteria.
12. Verification plan.
13. Security and privacy notes.
14. Completion record.
15. Recommended atomic commit.
16. Follow-up work.

Current work-packet governance files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Current baseline and readiness work packets include:

```text
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
docs/work-packets/WP-0006-adr-index-normalization-review.md
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
docs/work-packets/WP-0008-context-continuity-baseline.md
docs/work-packets/WP-0009-root-readme-baseline.md
docs/work-packets/WP-0010-architecture-overview-placement-review.md
docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
docs/work-packets/WP-0013-persistence-adr-overlap-review.md
docs/work-packets/WP-0014-executable-repo-contract-script.md
docs/work-packets/WP-0015-evaluation-harness-baseline.md
docs/work-packets/WP-0016-repo-contract-script-baseline-update.md
docs/work-packets/WP-0017-current-state-and-readme-status-update.md
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/work-packets/WP-0019-package-and-tooling-baseline.md
docs/work-packets/WP-0020-repo-contract-script-readiness-update.md
docs/work-packets/WP-0021-package-and-tooling-setup.md
docs/work-packets/WP-0022-package-manager-adr-correction.md
docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md
docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md
docs/work-packets/WP-0025-ci-baseline-planning.md
docs/work-packets/WP-0026-ci-workflow-baseline.md
docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md
```

Non-trivial work should proceed through a work packet.

---

## Planning

Planning artifacts live in:

```text
docs/planning/
```

Current planning documents:

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
docs/planning/08-ci-baseline-planning.md
```

The planning baseline currently recommends continuing through implementation-readiness work before runtime implementation.

---

## Domain Model

Domain artifacts live in:

```text
docs/domain/
```

Current domain model:

```text
docs/domain/00-domain-model.md
```

The domain model defines the current conceptual model, including repository governance, ADRs, context continuity, Foundry Control Plane, work packets, directive compiler concepts, persistence and retrieval, repo contract testing, evaluation harness concepts, access tiers, and clean-room pattern adoption.

---

## Verification

Verification artifacts live in:

```text
docs/verification/
```

Current verification documents:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
```

Current executable local verification script:

```text
tools/check-repo-contract.sh
```

The script is local, executable, read-only, and non-mutating. It checks required repository files, directories, ADRs, planning documents, verification documents, work packets, AI/context-continuity files, package/tooling files, forbidden pnpm artifacts, CI workflow files, and key content anchors.

Current verification status:

```text
Documentation-level verification baseline exists.
Documentation-level repo contract baseline exists.
Executable local repo contract script exists.
Bun-aware repo contract checks exist.
CI workflow baseline exists.
Documentation-level evaluation harness baseline exists.
Executable evaluation harness implementation does not exist yet.
Runtime tests do not exist yet because runtime implementation has not started.
```

Run local verification with:

```bash
bun run verify
```

Run the repo contract directly with:

```bash
./tools/check-repo-contract.sh
```

CI runs baseline verification with:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

---

## AI and Context Continuity

Context-continuity artifacts live in:

```text
docs/ai/
```

Current files:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

These files exist so future humans and AI sessions can resume from repository artifacts instead of relying on chat memory.

Important context rule:

```text
Vector retrieval augments repository memory; it does not replace it.
```

Vector retrieval has not been implemented yet.

---

## Evaluation Harness

The evaluation harness baseline lives at:

```text
docs/verification/02-evaluation-harness-baseline.md
```

This document defines how future evaluation should assess:

1. Context continuity.
2. Work-packet discipline.
3. Repo-contract compliance.
4. Verification truthfulness.
5. ADR preservation.
6. Baseline caveat preservation.
7. Future retrieval quality.
8. Future agent execution.
9. Future runtime behavior.
10. Security and exclusion compliance.

The evaluation harness baseline is documentation-level only.

Executable evaluation harness implementation does not exist yet.

---

## Known Baseline Caveats

The following caveats are known and intentional for the current baseline:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 remains preserved as historical context and is superseded by ADR-0023 for active package-manager direction.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured baseline artifact.
Runtime implementation has not started.
Executable evaluation harness implementation does not exist yet.
Vector retrieval implementation does not exist yet.
```

Do not silently fix these caveats.

Use explicit work packets.

---

## Current Rules for Future Work

Future work must follow these rules:

1. Treat the uploaded repository tree as the active baseline until a newer baseline supersedes it.
2. Use work packets for non-trivial changes.
3. Preserve existing ADR numbering and filenames.
4. Do not fill ADR number gaps automatically.
5. Do not delete or supersede duplicate-looking ADRs without review.
6. Do not delete ADR-0019.
7. Do not move architecture documents without a work packet.
8. Do not remove the root `tree` file without a work packet.
9. Do not claim verification passed unless it actually ran.
10. Do not claim runtime implementation exists before it exists.
11. Do not claim executable evaluation harness implementation exists before it exists.
12. Do not introduce `pnpm-workspace.yaml`.
13. Do not introduce `pnpm-lock.yaml`.
14. Do not introduce secrets, credentials, tokens, private keys, or sensitive operational values.
15. Do not add deployment or package-publishing CI without an explicit work packet.

---

## Recommended Next Work

After `WP-0027: Current State and README CI Status Update`, the recommended next work is:

```text
WP-0028: Executable Evaluation Harness Planning
```

Rationale:

1. Baseline stabilization has produced core orientation, planning, ADR, verification, context, repo-contract, package/tooling, and CI artifacts.
2. Local Bun verification now exists.
3. CI baseline verification now exists.
4. Runtime implementation has not started.
5. The evaluation harness is still documentation-level only.
6. The next readiness step should plan executable evaluation harness implementation before runtime implementation begins.

Recommended later work:

```text
WP-0029: Executable Evaluation Harness Baseline
WP-0030: Runtime Implementation Slice Plan
```

---

## Current Minimal Verification

Run:

```bash
bun run verify
./tools/check-repo-contract.sh
git diff --check
```

Expected result:

```text
Repo contract checks pass.
```

Do not claim this result unless the commands actually ran locally.
````

---

# 3. Update `docs/ai/00-current-state.md`

Use the full replacement below.

````markdown
---
title: "Current State"
description: "Current repository state and continuation guide for the Agentic Software Framework, aligned to the uploaded repository tree baseline, current ADR lineage, planning baseline, domain model, verification baseline, work-packet sequence, Bun package/tooling setup, executable repo contract script, CI workflow baseline, and evaluation harness baseline."
status: "active"
version: "0.5.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "future-ai-agents"
  - "future-contributors"
document_type: "current-state"
canonical: false
related_documents:
  - "README.md"
  - "tree"
  - "package.json"
  - "bun.lock"
  - ".github/workflows/ci.yml"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
  - "docs/planning/05-persistence-adr-overlap-review.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/planning/08-ci-baseline-planning.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "tools/check-repo-contract.sh"
---

# Current State

## 1. Purpose

This document records the current state of the Agentic Software Framework repository so future humans and AI sessions can resume work from the repository rather than fragile chat memory.

The uploaded repository tree is the active baseline.

This document should be updated when meaningful repository state changes occur, especially when work packets are completed, baseline structure changes, ADR status changes, verification behavior changes, package/tooling behavior changes, CI behavior changes, runtime implementation begins, or implementation-readiness planning changes.

---

## 2. Current Repository Phase

Current phase:

```text
Baseline Stabilization / Implementation Readiness
```

Current objective:

```text
Stabilize the uploaded repository baseline, preserve the current ADR lineage, maintain work-packet discipline, keep context-continuity artifacts current, keep executable local repo contract checks aligned, preserve the Bun package/tooling baseline, preserve the CI baseline, and prepare for executable evaluation harness planning before runtime implementation begins.
```

Runtime implementation status:

```text
Runtime implementation has not started.
```

Package-manager setup status:

```text
Bun package/tooling setup exists.
```

Package/tooling files:

```text
package.json
bun.lock
```

Forbidden package/tooling files:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

CI status:

```text
CI workflow baseline exists.
```

CI workflow file:

```text
.github/workflows/ci.yml
```

CI verification behavior:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

CI boundaries:

```text
CI does not deploy.
CI does not publish packages.
CI does not require secrets.
CI does not run runtime tests because runtime implementation has not started.
```

Repo contract testing status:

```text
Executable local repo contract script exists at tools/check-repo-contract.sh.
The repo contract script is Bun-aware.
The repo contract script requires the baseline CI workflow.
```

Evaluation harness status:

```text
Documentation-level evaluation harness baseline exists at docs/verification/02-evaluation-harness-baseline.md.
Executable evaluation harness implementation does not exist yet.
```

Context continuity status:

```text
Documentation-level context-continuity artifacts exist under docs/ai/.
```

---

## 3. Active Baseline Rule

The uploaded repository tree is the active baseline.

This means:

1. Existing ADR files are preserved.
2. Existing ADR number gaps are preserved.
3. Existing ADR topic overlap is preserved until explicitly reviewed.
4. Existing product documents are preserved.
5. Existing architecture documents are preserved.
6. Root governance files are preserved.
7. The root `tree` file is treated as a captured baseline artifact.
8. Runtime code should not begin until implementation readiness is explicitly planned.
9. Cleanup must happen through explicit work packets.

---

## 4. Current Root Files

The baseline root files are:

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
README.md
SECURITY.md
tree
package.json
bun.lock
```

Current root-level caveat:

```text
tree exists at the repository root as a captured historical baseline artifact.
```

Current decision:

```text
The root tree file should remain unchanged until a future explicit work packet authorizes a move, regeneration, supersession, or removal.
```

---

## 5. Package and Tooling State

Bun is canonical for JavaScript/TypeScript package management and script execution.

Current package/tooling files:

```text
package.json
bun.lock
```

Current package scripts:

```text
verify
verify:repo
```

Canonical local verification command:

```bash
bun run verify
```

Direct repo contract command:

```bash
./tools/check-repo-contract.sh
```

Forbidden files:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

Package-manager ADR state:

```text
ADR-0023 supersedes ADR-0019 for active package-manager direction.
ADR-0019 remains preserved as historical context.
```

Future Python package/environment work should use `uv` unless a later ADR changes that direction.

Future Rust package/build work should use `cargo` unless a later ADR changes that direction.

---

## 6. CI State

CI workflow baseline exists.

Current CI workflow:

```text
.github/workflows/ci.yml
```

Current CI provider:

```text
GitHub Actions
```

Current CI triggers:

```text
push to main
pull_request
```

Current CI verification behavior:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

Current CI security boundary:

```text
The baseline CI workflow does not require secrets.
```

Current CI delivery boundary:

```text
The baseline CI workflow does not deploy.
The baseline CI workflow does not publish packages.
```

Current runtime boundary:

```text
The baseline CI workflow does not run runtime tests because runtime implementation has not started.
```

---

## 7. Current Documentation Structure

Current documentation directories:

```text
docs/adr/
docs/architecture/
docs/domain/
docs/planning/
docs/product/
docs/verification/
docs/work-packets/
docs/ai/
```

Current tooling directory:

```text
tools/
```

Current CI directory:

```text
.github/workflows/
```

Current local repo contract script:

```text
tools/check-repo-contract.sh
```

Current CI workflow:

```text
.github/workflows/ci.yml
```

---

## 8. Current Product and Architecture Documents

Current product documents:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
```

Current architecture document:

```text
docs/architecture/00-architecture-overview.md
```

Known caveat:

```text
An architecture overview exists both in docs/product/ and docs/architecture/.
```

Current decision:

```text
Both are preserved until a future Architecture Overview Resolution work packet decides how to handle them.
```

---

## 9. Current ADR Lineage

Current ADR support files:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

Current ADR files:

```text
ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md
ADR-0002-repository-based-context-continuity.md
ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md
ADR-0004-access-tier-model-four-tier-repository-classification.md
ADR-0005-clean-room-architecture-and-pattern-adoption.md
ADR-0006-canonical-repository-plus-vector-retrieval.md
ADR-0008-foundry-control-plane.md
ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md
ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md
ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
ADR-0016-worktree-based-parallel-execution.md
ADR-0017-foundry-event-bus-and-notification-router.md
ADR-0018-work-packet-lifecycle.md
ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
ADR-0020-directive-compiler-and-work-protocols.md
ADR-0021-repo-contract-testing.md
ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
ADR-0023-primary-package-managers-bun-uv-and-cargo.md
```

Known ADR number gaps:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

Known ADR topic overlap:

```text
ADR-0013
ADR-0015
```

Package-manager supersession:

```text
ADR-0019 remains preserved as historical context.
ADR-0023 supersedes ADR-0019 for active package-manager direction.
```

Current decision:

```text
Do not renumber, delete, rename, supersede, or fill ADRs automatically.
```

---

## 10. Current Work Packet State

Work-packet governance exists:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Current work packets:

```text
WP-0001 Work Packet Template
WP-0002 Baseline Inventory and Consistency Review
WP-0003 Domain Model Baseline
WP-0004 Planning Baseline
WP-0005 Repository Verification Baseline
WP-0006 ADR Index Normalization Review
WP-0007 Repo Contract Testing Baseline
WP-0008 Context Continuity Baseline
WP-0009 Root README Baseline
WP-0010 Architecture Overview Placement Review
WP-0011 Baseline Tree Artifact Policy
WP-0012 ADR Index Gap and Status Annotation
WP-0013 Persistence ADR Overlap Review
WP-0014 Executable Repo Contract Script
WP-0015 Evaluation Harness Baseline
WP-0016 Repo Contract Script Baseline Update
WP-0017 Current State and README Status Update
WP-0018 Implementation Readiness Planning
WP-0019 Package and Tooling Baseline
WP-0020 Repo Contract Script Readiness Update
WP-0021 Package and Tooling Setup
WP-0022 Package Manager ADR Correction
WP-0023 Repo Contract Script Bun Tooling Update
WP-0024 Current State and README Bun Tooling Status Update
WP-0025 CI Baseline Planning
WP-0026 CI Workflow Baseline
WP-0027 Current State and README CI Status Update
```

Current active packet:

```text
WP-0027: Current State and README CI Status Update
```

Recommended next packet:

```text
WP-0028: Executable Evaluation Harness Planning
```

---

## 11. Completed Baseline Stabilization and Readiness Artifacts

Current stabilization and readiness artifacts:

```text
README.md
package.json
bun.lock
.github/workflows/ci.yml
docs/planning/00-baseline-inventory.md
docs/domain/00-domain-model.md
docs/planning/01-planning-baseline.md
docs/verification/00-verification-baseline.md
docs/planning/02-adr-normalization-review.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/adr/README.md
docs/planning/05-persistence-adr-overlap-review.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
docs/planning/08-ci-baseline-planning.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 12. Verification State

Current verification level:

```text
Documentation-level verification baseline exists.
```

Current repo contract level:

```text
Documentation-level repo contract baseline exists.
Executable local repo contract script exists.
Bun-aware repo contract checks exist.
CI workflow baseline is required by the repo contract.
```

Executable repo contract script:

```text
tools/check-repo-contract.sh
```

The script is local, executable, read-only, and non-mutating.

Run:

```bash
bun run verify
```

or:

```bash
./tools/check-repo-contract.sh
```

Current CI verification:

```text
Baseline GitHub Actions CI exists.
```

CI workflow:

```text
.github/workflows/ci.yml
```

CI runs:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

Current evaluation harness level:

```text
Documentation-level evaluation harness baseline exists.
Executable evaluation harness implementation does not exist yet.
```

Evaluation harness baseline:

```text
docs/verification/02-evaluation-harness-baseline.md
```

Runtime tests:

```text
Not applicable yet because runtime implementation has not started.
```

Current verification command for WP-0027:

```bash
test -f docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md && \
test -f README.md && \
test -f docs/ai/00-current-state.md && \
test -f .github/workflows/ci.yml && \
grep -q 'CI workflow baseline exists' README.md && \
grep -q '.github/workflows/ci.yml' README.md && \
grep -q 'bun install --frozen-lockfile' README.md && \
grep -q 'bun run verify' README.md && \
grep -q 'git diff --check' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'CI workflow baseline exists' docs/ai/00-current-state.md && \
grep -q '.github/workflows/ci.yml' docs/ai/00-current-state.md && \
grep -q 'WP-0027' docs/ai/00-current-state.md && \
grep -q 'Runtime implementation has not started' docs/ai/00-current-state.md && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

---

## 13. Current Known Risks

| Risk                                                         | Status | Handling                                                            |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------- |
| ADR gaps confuse future work.                                | Known  | Preserved and documented in ADR normalization review and ADR index. |
| ADR-0013 and ADR-0015 overlap.                               | Known  | Preserved pending future resolution.                                |
| ADR-0019 filename mentions pnpm.                             | Known  | Preserved as historical context; superseded by ADR-0023.            |
| Architecture overview exists in two places.                  | Known  | Preserved pending future resolution.                                |
| Root `tree` file becomes stale.                              | Known  | Treated as historical baseline artifact, not live state.            |
| Repo contract script becomes stale as new packets are added. | Active | Update script through explicit packets when baseline expands.       |
| CI may expand too early.                                     | Active | Keep CI limited to baseline verification until future packets.      |
| Evaluation harness is documentation-only.                    | Known  | Executable evaluation harness is future work.                       |
| Context files become stale.                                  | Active | Update this file after meaningful status changes.                   |
| Runtime implementation starts too soon.                      | Active | Require implementation-readiness planning first.                    |

---

## 14. Recommended Next Work

After WP-0027 is completed, the recommended next work is:

```text
WP-0028: Executable Evaluation Harness Planning
```

Rationale:

1. Baseline stabilization has created core repository orientation.
2. The repository now has local executable repo contract verification.
3. Bun package/tooling setup exists.
4. CI baseline verification exists.
5. The evaluation harness model exists at the documentation level.
6. Runtime implementation has not started.
7. Executable evaluation harness implementation should be planned before runtime implementation begins.

Recommended later work:

```text
WP-0029: Executable Evaluation Harness Baseline
WP-0030: Runtime Implementation Slice Plan
```

---

## 15. Rules for Future Sessions

Future sessions must:

1. Read this file first.
2. Treat the uploaded repository tree as the active baseline until superseded.
3. Respect existing ADR files and gaps.
4. Preserve ADR-0019 as historical context.
5. Treat ADR-0023 as the active package-manager direction.
6. Use work packets for non-trivial changes.
7. Avoid runtime implementation before implementation readiness is accepted.
8. Never silently rename, delete, or normalize baseline files.
9. Never claim verification passed unless it actually ran.
10. Run or reference `bun run verify` when verifying local baseline structure.
11. Run or reference `tools/check-repo-contract.sh` when verifying repo contract structure.
12. Distinguish the evaluation harness baseline from executable evaluation harness implementation.
13. Keep context-continuity artifacts updated after meaningful state changes.
14. Do not create `pnpm-workspace.yaml`.
15. Do not create `pnpm-lock.yaml`.
16. Do not add deployment CI without a work packet.
17. Do not add package-publishing CI without a work packet.
18. Do not add runtime test claims before runtime implementation exists.

---

## 16. Update Triggers

Update this file when:

1. A work packet is completed.
2. A new work packet becomes active.
3. ADR status changes.
4. ADR index changes.
5. Root README changes.
6. Architecture overview placement is resolved.
7. Repo contract script changes.
8. CI behavior changes.
9. Evaluation harness baseline changes.
10. Executable evaluation harness implementation begins.
11. Package-manager setup changes.
12. Runtime implementation begins.
13. Context source rules change.
14. A major planning artifact is added or superseded.

---

## 17. Current State Summary

Current summary:

```text
The repository is in Baseline Stabilization / Implementation Readiness. The uploaded tree is the active baseline. Product, architecture, ADR, domain, planning, verification, work-packet, context-continuity, root README, Bun package/tooling, executable local repo contract, baseline GitHub Actions CI, and evaluation harness baseline artifacts now exist. ADR-0023 supersedes ADR-0019 for active package-manager direction, while ADR-0019 remains preserved as historical context. Runtime implementation has not started. Executable evaluation harness implementation does not exist yet. Known baseline caveats are preserved. The next recommended step after WP-0027 is executable evaluation harness planning.
```
````

---

# 4. Verify

Run:

```bash
test -f docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md && \
test -f README.md && \
test -f docs/ai/00-current-state.md && \
test -f .github/workflows/ci.yml && \
grep -q 'CI workflow baseline exists' README.md && \
grep -q '.github/workflows/ci.yml' README.md && \
grep -q 'bun install --frozen-lockfile' README.md && \
grep -q 'bun run verify' README.md && \
grep -q 'git diff --check' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'CI workflow baseline exists' docs/ai/00-current-state.md && \
grep -q '.github/workflows/ci.yml' docs/ai/00-current-state.md && \
grep -q 'WP-0027' docs/ai/00-current-state.md && \
grep -q 'Runtime implementation has not started' docs/ai/00-current-state.md && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Then:

```bash
git status --short
```

I am not claiming verification passed until you run it locally.

---

# 5. Commit

If verification passes:

```bash
git add README.md \
  docs/ai/00-current-state.md \
  docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md

git commit -m "docs(project): update ci current state"
git push origin main
```

---

# 6. Next

After this commit, proceed to:

```text
WP-0028: Executable Evaluation Harness Planning
```
