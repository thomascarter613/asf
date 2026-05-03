# Agentic Software Framework

The Agentic Software Framework is a repository-governed software product initiative for disciplined AI-assisted software development.

Its purpose is to help transform product intent, architecture decisions, context continuity, work protocols, work packets, verification evidence, and implementation work into a durable, auditable repository-centered system.

The uploaded repository tree is the active baseline.

Current phase:

```text
Baseline Stabilization
````

Runtime implementation has not started.

This repository currently contains planning, architecture, ADR, domain, verification, work-packet, context-continuity, root orientation, and local repo-contract artifacts.

It does not yet contain runtime application code, CI workflows, package-manager setup, database schema, vector retrieval implementation, Qdrant collections, embedding pipelines, agent runtime code, or executable evaluation harness implementation.

Executable evaluation harness implementation does not exist yet.

---

## Current Status

The repository is currently being stabilized before runtime implementation begins.

The current stabilization work has established:

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
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
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

Known ADR caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
```

These caveats are accepted baseline facts. Do not renumber, delete, rename, fill, or supersede ADRs without an explicit work packet.

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

Current baseline work packets:

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
```

The planning baseline currently recommends continuing with baseline stabilization and implementation readiness before runtime implementation.

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

The script is local, executable, read-only, and non-mutating. It checks required repository files, directories, ADRs, planning documents, verification documents, work packets, AI/context-continuity files, and key content anchors.

Current verification status:

```text
Documentation-level verification baseline exists.
Documentation-level repo contract baseline exists.
Executable local repo contract script exists.
Documentation-level evaluation harness baseline exists.
Executable evaluation harness implementation does not exist yet.
CI verification does not exist yet.
Runtime tests do not exist yet because runtime implementation has not started.
```

Run the local repo contract check with:

```bash
./tools/check-repo-contract.sh
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
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured baseline artifact.
CI workflows do not exist yet.
Package-manager files do not exist yet.
Runtime implementation has not started.
Executable evaluation harness implementation does not exist yet.
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
6. Do not move architecture documents without a work packet.
7. Do not remove the root `tree` file without a work packet.
8. Do not claim verification passed unless it actually ran.
9. Do not claim runtime implementation exists before it exists.
10. Do not claim executable evaluation harness implementation exists before it exists.
11. Do not introduce secrets, credentials, tokens, private keys, or sensitive operational values.

---

## Recommended Next Work

After `WP-0017: Current State and README Status Update`, the recommended next work is:

```text
WP-0018: Implementation Readiness Planning
```

Rationale:

1. Baseline stabilization has produced core orientation, planning, ADR, verification, context, and repo-contract artifacts.
2. The repository now has an executable local repo contract script.
3. The evaluation model has been defined at the documentation level.
4. Runtime implementation should still wait until implementation readiness is explicitly planned.
5. The next step should bridge baseline stabilization into package/tooling, CI, and implementation-readiness sequencing.

Recommended later work:

```text
WP-0019: Package and Tooling Baseline
WP-0020: CI Baseline
WP-0021: Executable Evaluation Harness Planning
WP-0022: Runtime Implementation Slice Plan
```

---

## Current Minimal Verification

Run:

```bash
./tools/check-repo-contract.sh
git diff --check
```

Expected result:

```text
Repo contract checks pass.
```

---

## Commit

Recommended commit:

```bash
git add README.md docs/ai/00-current-state.md docs/work-packets/WP-0017-current-state-and-readme-status-update.md
git commit -m "docs(project): update current state and readme status"
```

````

---

## `docs/ai/00-current-state.md`

```markdown
---
title: "Current State"
description: "Current repository state and continuation guide for the Agentic Software Framework, aligned to the uploaded repository tree baseline, current ADR lineage, planning baseline, domain model, verification baseline, work-packet sequence, executable repo contract script, and evaluation harness baseline."
status: "proposed"
version: "0.2.0"
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
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
  - "docs/planning/05-persistence-adr-overlap-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0017-current-state-and-readme-status-update.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "tools/check-repo-contract.sh"
---

# Current State

## 1. Purpose

This document records the current state of the Agentic Software Framework repository so future humans and AI sessions can resume work from the repository rather than fragile chat memory.

The uploaded repository tree is the active baseline.

This document should be updated when meaningful repository state changes occur, especially when work packets are completed, baseline structure changes, ADR status changes, verification behavior changes, runtime implementation begins, or implementation-readiness planning is accepted.

---

## 2. Current Repository Phase

Current phase:

```text
Baseline Stabilization
````

Current objective:

```text
Stabilize the uploaded repository baseline, preserve the current ADR lineage, maintain work-packet discipline, keep context-continuity artifacts current, keep executable local repo contract checks aligned, and prepare for implementation readiness before runtime implementation begins.
```

Runtime implementation status:

```text
Runtime implementation has not started.
```

Package-manager setup status:

```text
Package-manager setup does not exist yet.
```

CI status:

```text
CI workflows do not exist yet.
```

Repo contract testing status:

```text
Executable local repo contract script exists at tools/check-repo-contract.sh.
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

## 5. Current Documentation Structure

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

## 6. Current Product and Architecture Documents

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

## 7. Current ADR Lineage

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

Current decision:

```text
Do not renumber, delete, rename, supersede, or fill ADRs automatically.
```

---

## 8. Current Work Packet State

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
```

Current active packet:

```text
WP-0017: Current State and README Status Update
```

Recommended next packet:

```text
WP-0018: Implementation Readiness Planning
```

---

## 9. Completed Baseline Stabilization Artifacts

Current stabilization artifacts:

```text
README.md
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
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 10. Verification State

Current verification level:

```text
Documentation-level verification baseline exists.
```

Current repo contract level:

```text
Documentation-level repo contract baseline exists.
Executable local repo contract script exists.
```

Executable repo contract script:

```text
tools/check-repo-contract.sh
```

The script is local, executable, read-only, and non-mutating.

Run:

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

Current verification command for WP-0017:

```bash
test -f README.md && \
test -f docs/ai/00-current-state.md && \
test -x tools/check-repo-contract.sh && \
grep -q 'tools/check-repo-contract.sh' README.md && \
grep -q 'docs/verification/02-evaluation-harness-baseline.md' README.md && \
grep -q 'Executable evaluation harness implementation does not exist yet' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'tools/check-repo-contract.sh' docs/ai/00-current-state.md && \
grep -q 'docs/verification/02-evaluation-harness-baseline.md' docs/ai/00-current-state.md && \
grep -q 'Executable evaluation harness implementation does not exist yet' docs/ai/00-current-state.md && \
grep -q 'Runtime implementation has not started' docs/ai/00-current-state.md && \
./tools/check-repo-contract.sh && \
git diff --check
```

---

## 11. Current Known Risks

| Risk                                                         | Status | Handling                                                            |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------- |
| ADR gaps confuse future work.                                | Known  | Preserved and documented in ADR normalization review and ADR index. |
| ADR-0013 and ADR-0015 overlap.                               | Known  | Preserved pending future resolution.                                |
| Architecture overview exists in two places.                  | Known  | Preserved pending future resolution.                                |
| Root `tree` file becomes stale.                              | Known  | Treated as historical baseline artifact, not live state.            |
| Repo contract script becomes stale as new packets are added. | Active | Update script through explicit packets when baseline expands.       |
| Evaluation harness is documentation-only.                    | Known  | Executable evaluation harness is future work.                       |
| Context files become stale.                                  | Active | Update this file after meaningful status changes.                   |
| Runtime implementation starts too soon.                      | Active | Require implementation-readiness planning first.                    |
| CI/package setup begins without plan.                        | Active | Create package/tooling and CI baseline packets first.               |

---

## 12. Recommended Next Work

After WP-0017 is completed, the recommended next work is:

```text
WP-0018: Implementation Readiness Planning
```

Rationale:

1. Baseline stabilization has created core repository orientation.
2. The repository now has local executable repo contract verification.
3. The evaluation harness model exists at the documentation level.
4. Runtime implementation has not started.
5. Package tooling, CI, and implementation slice planning still need explicit sequencing.
6. Implementation readiness should bridge documentation baseline into controlled build/tool/runtime work.

Recommended later work:

```text
WP-0019: Package and Tooling Baseline
WP-0020: CI Baseline
WP-0021: Executable Evaluation Harness Planning
WP-0022: Runtime Implementation Slice Plan
```

---

## 13. Rules for Future Sessions

Future sessions must:

1. Read this file first.
2. Treat the uploaded repository tree as the active baseline until superseded.
3. Respect existing ADR files and gaps.
4. Use work packets for non-trivial changes.
5. Avoid runtime implementation before implementation readiness is accepted.
6. Never silently rename, delete, or normalize baseline files.
7. Never claim verification passed unless it actually ran.
8. Run or reference `tools/check-repo-contract.sh` when verifying baseline structure.
9. Distinguish the evaluation harness baseline from executable evaluation harness implementation.
10. Keep context-continuity artifacts updated after meaningful state changes.

---

## 14. Update Triggers

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
11. Package-manager setup is added.
12. Runtime implementation begins.
13. Context source rules change.
14. A major planning artifact is added or superseded.

---

## 15. Current State Summary

Current summary:

```text
The repository is in baseline stabilization. The uploaded tree is the active baseline. Product, architecture, ADR, domain, planning, verification, work-packet, context-continuity, root README, executable local repo contract, and evaluation harness baseline artifacts now exist. Runtime implementation has not started. CI workflows and package-manager setup do not exist yet. Executable evaluation harness implementation does not exist yet. Known baseline caveats are preserved. The next recommended step after WP-0017 is implementation-readiness planning.
```