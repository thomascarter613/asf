---
title: "Current State"
description: "Current repository state and continuation guide for the Agentic Software Framework, aligned to the uploaded repository tree baseline, current ADR lineage, planning baseline, domain model, verification baseline, work-packet sequence, Bun package/tooling setup, executable repo contract script, and evaluation harness baseline."
status: "active"
version: "0.4.0"
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
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "tools/check-repo-contract.sh"
---

# Current State

## 1. Purpose

This document records the current state of the Agentic Software Framework repository so future humans and AI sessions can resume work from the repository rather than fragile chat memory.

The uploaded repository tree is the active baseline.

This document should be updated when meaningful repository state changes occur, especially when work packets are completed, baseline structure changes, ADR status changes, verification behavior changes, package/tooling behavior changes, runtime implementation begins, or implementation-readiness planning changes.

---

## 2. Current Repository Phase

Current phase:

```text
Baseline Stabilization / Implementation Readiness
````

Current objective:

```text
Stabilize the uploaded repository baseline, preserve the current ADR lineage, maintain work-packet discipline, keep context-continuity artifacts current, keep executable local repo contract checks aligned, preserve the Bun package/tooling baseline, and prepare for CI and runtime implementation sequencing before runtime implementation begins.
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
CI workflows do not exist yet.
```

Repo contract testing status:

```text
Executable local repo contract script exists at tools/check-repo-contract.sh.
The repo contract script is Bun-aware.
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

## 6. Current Documentation Structure

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

Current local repo contract script:

```text
tools/check-repo-contract.sh
```

---

## 7. Current Product and Architecture Documents

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

## 8. Current ADR Lineage

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

## 9. Current Work Packet State

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
```

Current active packet:

```text
WP-0024: Current State and README Bun Tooling Status Update
```

Recommended next packet:

```text
WP-0025: CI Baseline Planning
```

---

## 10. Completed Baseline Stabilization and Readiness Artifacts

Current stabilization and readiness artifacts:

```text
README.md
package.json
bun.lock
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
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 11. Verification State

Current verification level:

```text
Documentation-level verification baseline exists.
```

Current repo contract level:

```text
Documentation-level repo contract baseline exists.
Executable local repo contract script exists.
Bun-aware repo contract checks exist.
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

Current evaluation harness level:

```text
Documentation-level evaluation harness baseline exists.
Executable evaluation harness implementation does not exist yet.
```

Evaluation harness baseline:

```text
docs/verification/02-evaluation-harness-baseline.md
```

CI verification:

```text
CI workflows do not exist yet.
```

Runtime tests:

```text
Not applicable yet because runtime implementation has not started.
```

Current verification command for WP-0024:

```bash
test -f README.md && \
test -f docs/ai/00-current-state.md && \
test -f docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md && \
test -f package.json && \
test -f bun.lock && \
test ! -f pnpm-workspace.yaml && \
test ! -f pnpm-lock.yaml && \
test -x tools/check-repo-contract.sh && \
grep -q 'Bun package/tooling setup exists' docs/ai/00-current-state.md && \
grep -q 'ADR-0023 supersedes ADR-0019' docs/ai/00-current-state.md && \
grep -q 'Runtime implementation has not started' docs/ai/00-current-state.md && \
grep -q 'CI workflows do not exist yet' docs/ai/00-current-state.md && \
grep -q 'Executable evaluation harness implementation does not exist yet' docs/ai/00-current-state.md && \
grep -q 'Bun is canonical' README.md && \
grep -q 'package.json' README.md && \
grep -q 'bun.lock' README.md && \
grep -q 'pnpm-workspace.yaml' README.md && \
grep -q 'pnpm-lock.yaml' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'CI workflows do not exist yet' README.md && \
grep -q 'Executable evaluation harness implementation does not exist yet' README.md && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

---

## 12. Current Known Risks

| Risk                                                         | Status | Handling                                                            |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------- |
| ADR gaps confuse future work.                                | Known  | Preserved and documented in ADR normalization review and ADR index. |
| ADR-0013 and ADR-0015 overlap.                               | Known  | Preserved pending future resolution.                                |
| ADR-0019 filename mentions pnpm.                             | Known  | Preserved as historical context; superseded by ADR-0023.            |
| Architecture overview exists in two places.                  | Known  | Preserved pending future resolution.                                |
| Root `tree` file becomes stale.                              | Known  | Treated as historical baseline artifact, not live state.            |
| Repo contract script becomes stale as new packets are added. | Active | Update script through explicit packets when baseline expands.       |
| Evaluation harness is documentation-only.                    | Known  | Executable evaluation harness is future work.                       |
| Context files become stale.                                  | Active | Update this file after meaningful status changes.                   |
| Runtime implementation starts too soon.                      | Active | Require implementation-readiness planning first.                    |
| CI begins without plan.                                      | Active | Create CI baseline planning before CI workflow implementation.      |

---

## 13. Recommended Next Work

After WP-0024 is completed, the recommended next work is:

```text
WP-0025: CI Baseline Planning
```

Rationale:

1. Baseline stabilization has created core repository orientation.
2. The repository now has local executable repo contract verification.
3. Bun package/tooling setup exists.
4. The repo contract script is Bun-aware.
5. The evaluation harness model exists at the documentation level.
6. README and current-state documentation are synchronized.
7. Runtime implementation has not started.
8. CI should be planned before creating workflows.

Recommended later work:

```text
WP-0026: CI Workflow Baseline
WP-0027: Executable Evaluation Harness Planning
WP-0028: Runtime Implementation Slice Plan
```

---

## 14. Rules for Future Sessions

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

---

## 15. Update Triggers

Update this file when:

1. A work packet is completed.
2. A new work packet becomes active.
3. ADR status changes.
4. ADR index changes.
5. Root README changes.
6. Architecture overview placement is resolved.
7. Repo contract script changes.
8. Evaluation harness baseline changes.
9. Executable evaluation harness implementation begins.
10. CI is added.
11. Package-manager setup changes.
12. Runtime implementation begins.
13. Context source rules change.
14. A major planning artifact is added or superseded.

---

## 16. Current State Summary

Current summary:

```text
The repository is in Baseline Stabilization / Implementation Readiness. The uploaded tree is the active baseline. Product, architecture, ADR, domain, planning, verification, work-packet, context-continuity, root README, Bun package/tooling, executable local repo contract, and evaluation harness baseline artifacts now exist. ADR-0023 supersedes ADR-0019 for active package-manager direction, while ADR-0019 remains preserved as historical context. Runtime implementation has not started. CI workflows do not exist yet. Executable evaluation harness implementation does not exist yet. Known baseline caveats are preserved. The next recommended step after WP-0024 is CI baseline planning.
```