---
title: "WP-0003: Domain Model Baseline"
description: "Creates the initial domain model baseline for the uploaded repository tree, aligning domain contexts, entities, invariants, and lifecycle concepts with the current product documents and ADR lineage."
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
work_packet_id: "WP-0003"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0003"
  - "ADR-0004"
  - "ADR-0005"
  - "ADR-0006"
  - "ADR-0008"
  - "ADR-0013"
  - "ADR-0014"
  - "ADR-0016"
  - "ADR-0017"
  - "ADR-0018"
  - "ADR-0020"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "docs/planning/00-baseline-inventory.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/product/00-product-inception-brief.md"
  - "docs/product/01-product-charter.md"
  - "docs/product/02-stakeholder-and-user-model.md"
  - "docs/product/03-software-requirements-specification.md"
  - "docs/product/00-architecture-overview.md"
  - "docs/architecture/00-architecture-overview.md"
  - "docs/adr/README.md"
affected_files:
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/domain/00-domain-model.md"
recommended_commit: "docs(domain): add domain model baseline"
---

# WP-0003: Domain Model Baseline

## 1. Purpose

This work packet governs creation of the initial domain model baseline for the current uploaded repository tree.

The domain model is needed because the repository already contains substantial product, architecture, and ADR material, but `docs/domain/` is currently empty. Before implementation proceeds, the project needs a durable domain vocabulary that translates the existing baseline into bounded contexts, entities, relationships, lifecycle states, invariants, and domain events.

This packet authorizes creation of:

```text
docs/domain/00-domain-model.md
````

The domain model must align with the uploaded baseline, not with any discarded alternate plan.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the purpose, source inputs, baseline constraints, affected files, acceptance criteria, verification plan, and recommended atomic commit are defined.
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
WP-0001: Work Packet Template
WP-0002: Baseline Inventory and Consistency Review
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0003: Repository Topology — Bounded Monorepos Over Monolith or Full Fragmentation
ADR-0004: Access Tier Model — Four-Tier Repository Classification
ADR-0005: Clean Room Architecture and Pattern Adoption
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0008: Foundry Control Plane
ADR-0013: Polyglot Persistence and Qdrant Retrieval
ADR-0014: Polyglot Language Strategy
ADR-0016: Worktree-Based Parallel Execution
ADR-0017: Foundry Event Bus and Notification Router
ADR-0018: Work Packet Lifecycle
ADR-0020: Directive Compiler and Work Protocols
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Product or Architecture Documents

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

## 3.6 Related Existing Files

```text
docs/planning/00-baseline-inventory.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/adr/README.md
```

---

## 4. Scope

In scope:

1. Create `docs/domain/00-domain-model.md`.
2. Define the purpose of the domain model.
3. Define the baseline domain mission.
4. Define bounded contexts aligned to the current ADR lineage.
5. Define core domain entities.
6. Define entity responsibilities.
7. Define high-level entity attributes.
8. Define ownership and containment relationships.
9. Define lifecycle states for core entities.
10. Define domain events.
11. Define domain invariants.
12. Define repository/context-continuity concepts.
13. Define work packet lifecycle concepts.
14. Define foundry control plane concepts.
15. Define directive compiler/work protocol concepts.
16. Define evaluation harness concepts.
17. Define repo contract testing concepts.
18. Define persistence and retrieval concepts.
19. Define access tier concepts.
20. Define open domain questions.
21. Define follow-up work for planning baseline.

---

## 5. Non-Goals

Out of scope:

1. Runtime implementation code.
2. Database schema implementation.
3. API contract implementation.
4. UI implementation.
5. Vector database implementation.
6. Qdrant collection creation.
7. Event bus implementation.
8. Directive compiler implementation.
9. Worktree automation.
10. Repo contract test implementation.
11. Evaluation harness implementation.
12. ADR renaming.
13. ADR renumbering.
14. ADR gap filling.
15. ADR deduplication.
16. Moving architecture documents.
17. Rewriting product documents.
18. Creating the planning baseline.
19. Creating verification scripts.
20. Creating CI workflows.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. Existing ADRs represent the current architectural lineage.
3. ADR number gaps are accepted as baseline facts.
4. Similar ADR topics are not resolved by this packet.
5. The domain model should describe the current product architecture, not redesign it.
6. The domain model should be conceptual, not a database schema.
7. The domain model should support future planning, backlog, work packets, verification, and implementation.
8. The domain model should preserve repository-based context continuity as a central concern.
9. The domain model should treat the Foundry Control Plane as a major conceptual component.
10. The domain model should treat work packets as core execution objects.
11. The domain model should treat repo contract testing as a first-class verification concept.
12. The domain model should treat evaluation harness concepts as part of product quality.
13. The domain model should not silently resolve duplicate or overlapping ADRs.

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

1. This packet may create `docs/domain/00-domain-model.md`.
2. This packet may create only this work packet and the domain model.
3. This packet must not modify existing ADRs.
4. This packet must not modify product or architecture documents.
5. The domain model must mention unresolved baseline issues as open questions rather than silently correcting them.
6. The domain model must not claim implementation exists where it does not.
7. The domain model must not introduce new architecture decisions that require ADRs.
8. The domain model must align to the baseline ADR lineage.

---

## 8. Risks

| Risk                                                                              | Severity | Mitigation                                                                 |
| --------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| Domain model accidentally redesigns the product instead of modeling the baseline. | High     | Treat existing ADRs as source inputs and record open questions separately. |
| Domain model resolves ADR conflicts silently.                                     | High     | Explicitly list duplicate/overlap concerns as open questions.              |
| Domain model becomes too implementation-specific.                                 | Medium   | Keep it conceptual and defer schemas/APIs to later work packets.           |
| Domain model ignores repository context continuity.                               | High     | Include context repository, handoff, retrieval, and evaluation concepts.   |
| Domain model ignores work packet lifecycle.                                       | High     | Include work packet as a core domain entity.                               |
| Domain model overstates completed implementation.                                 | Medium   | Use language that distinguishes planned model from implemented system.     |
| Domain model becomes too large to use.                                            | Medium   | Organize by bounded contexts and entity catalog.                           |

---

## 9. Readiness Checklist

```text
[x] Purpose is clear.
[x] Source inputs are identified.
[x] Related baseline documents or ADRs are listed.
[x] Scope is bounded.
[x] Non-goals are explicit.
[x] Affected files are listed or intentionally marked as to be discovered.
[x] Acceptance criteria are observable.
[x] Verification plan is defined.
[x] Security and privacy notes are considered.
[x] Recommended atomic commit is present.
[x] No blocking open question remains unresolved.
```

Readiness notes:

```text
This packet is ready for execution. It creates the domain model baseline without modifying existing ADRs, product documents, architecture documents, or repository structure outside docs/domain/.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0003-domain-model-baseline.md
docs/domain/00-domain-model.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
docs/planning/00-baseline-inventory.md
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
docs/adr/README.md
docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md
docs/adr/ADR-0002-repository-based-context-continuity.md
docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md
docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md
docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md
docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md
docs/adr/ADR-0008-foundry-control-plane.md
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md
docs/adr/ADR-0016-worktree-based-parallel-execution.md
docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md
docs/adr/ADR-0018-work-packet-lifecycle.md
docs/adr/ADR-0020-directive-compiler-and-work-protocols.md
docs/adr/ADR-0021-repo-contract-testing.md
docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
```

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
tree
docs/adr/*
docs/product/*
docs/architecture/*
docs/planning/00-baseline-inventory.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
```

---

## 11. Implementation Plan

1. Confirm `docs/domain/` exists.
2. Confirm `docs/planning/00-baseline-inventory.md` exists.
3. Confirm current work-packet system exists.
4. Create `docs/work-packets/WP-0003-domain-model-baseline.md`.
5. Create `docs/domain/00-domain-model.md`.
6. In the domain model, define the purpose and baseline rule.
7. Define bounded contexts aligned to the current ADR lineage.
8. Define core domain entities.
9. Define entity relationships.
10. Define lifecycle states.
11. Define domain events.
12. Define invariants.
13. Define open domain questions.
14. Define follow-up work and next planning artifact.
15. Run verification.
16. Commit this packet and the domain model atomically.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0003-domain-model-baseline.md` exists.
2. `docs/domain/00-domain-model.md` exists.
3. The domain model includes YAML frontmatter.
4. The domain model includes `# Domain Model`.
5. The domain model states that the uploaded repository tree is the active baseline.
6. The domain model defines bounded contexts.
7. The domain model defines core domain entities.
8. The domain model defines relationships.
9. The domain model defines lifecycle states.
10. The domain model defines domain events.
11. The domain model defines invariants.
12. The domain model references work packets.
13. The domain model references repository context continuity.
14. The domain model references the Foundry Control Plane.
15. The domain model references repo contract testing.
16. The domain model references evaluation harness concepts.
17. The domain model records open domain questions.
18. No existing ADRs are modified.
19. No product or architecture documents are modified.
20. No secrets or sensitive values are introduced.
21. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0003-domain-model-baseline.md && \
test -f docs/domain/00-domain-model.md && \
grep -q '^title: "WP-0003: Domain Model Baseline"$' docs/work-packets/WP-0003-domain-model-baseline.md && \
grep -q '^# WP-0003: Domain Model Baseline$' docs/work-packets/WP-0003-domain-model-baseline.md && \
grep -q '^title: "Domain Model"$' docs/domain/00-domain-model.md && \
grep -q '^# Domain Model$' docs/domain/00-domain-model.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/domain/00-domain-model.md && \
grep -q 'Bounded Contexts' docs/domain/00-domain-model.md && \
grep -q 'WorkPacket' docs/domain/00-domain-model.md && \
grep -q 'Foundry Control Plane' docs/domain/00-domain-model.md && \
grep -q 'Repo Contract' docs/domain/00-domain-model.md && \
grep -q 'Evaluation Harness' docs/domain/00-domain-model.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the domain model represents the uploaded baseline rather than replacing it.
2. Confirm the domain model does not silently resolve ADR gaps.
3. Confirm the domain model does not modify existing ADRs.
4. Confirm the domain model does not claim implementation exists.
5. Confirm the domain model is useful for deriving planning artifacts.
6. Confirm no secrets, credentials, tokens, or private operational values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the domain model is aligned to the current baseline.
```

## 13.4 Verification Result Status

Current result:

```text
not_run
```

---

## 14. Security and Privacy Notes

Security notes:

```text
This packet creates domain documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, or sensitive operational values.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use role-based references such as Project Steward and architectural concepts rather than private personal details.
```

Additional safety notes:

1. Do not include private repository URLs with embedded credentials.
2. Do not include local filesystem paths containing private information.
3. Do not paste sensitive logs.
4. Do not paste secret examples that look like real credentials.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `docs/domain/00-domain-model.md`.
2. Create `docs/work-packets/WP-0003-domain-model-baseline.md`.

Documentation intentionally deferred:

1. Planning baseline is deferred to `WP-0004`.
2. Repository verification baseline is deferred to `WP-0005`.
3. ADR index normalization review is deferred to `WP-0006`.
4. Repo contract testing baseline is deferred to `WP-0007`.
5. Context continuity baseline is deferred to `WP-0008`.
6. Root README baseline is deferred to a later packet.
7. Architecture overview placement review is deferred to a later packet.

---

## 16. Completion Record

This section must be completed before the packet is marked `complete`.

## 16.1 Completion Summary

```text
Not completed yet.
```

## 16.2 Files Created

```text
None yet.
```

## 16.3 Files Modified

```text
None yet.
```

## 16.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 16.5 Verification Commands Run

```bash
# Not run yet.
```

## 16.6 Verification Result

```text
not_run
```

## 16.7 Known Limitations

```text
None recorded yet.
```

## 16.8 Follow-up Work Created

```text
None yet.
```

## 16.9 Completion Actor

```text
Not completed yet.
```

## 16.10 Completion Date

```text
Not completed yet.
```

---

## 17. Recommended Atomic Commit

Recommended command:

```bash
git add docs/work-packets/WP-0003-domain-model-baseline.md docs/domain/00-domain-model.md
git commit -m "docs(domain): add domain model baseline"
```

Commit message:

```text
docs(domain): add domain model baseline
```

Commit guidance:

1. The commit should include only this packet and the domain model.
2. Do not include planning documents.
3. Do not include ADR edits.
4. Do not include product document edits.
5. Do not include architecture document edits.
6. Do not include verification scripts.
7. Do not include runtime implementation code.
8. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/domain/00-domain-model.md`.
2. Create `WP-0004: Planning Baseline`.
3. Create `WP-0005: Repository Verification Baseline`.
4. Create `WP-0006: ADR Index Normalization Review`.
5. Create `WP-0007: Repo Contract Testing Baseline`.
6. Create `WP-0008: Context Continuity Baseline`.

---

## 19. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. All acceptance criteria are satisfied or explicitly deferred with rationale.
3. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
4. Failed verification is not hidden.
5. Completion Record is filled in.
6. Recommended commit is accurate.
7. Follow-up work is recorded.
8. The packet status is updated to `complete`.

---

## 20. Notes

```text
This packet is intentionally scoped to the domain model baseline. It does not normalize ADRs, rewrite architecture documents, or produce planning artifacts. Its purpose is to give the current repository baseline an explicit conceptual model before planning and implementation continue.
```
