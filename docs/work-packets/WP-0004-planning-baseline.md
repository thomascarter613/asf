---
title: "WP-0004: Planning Baseline"
description: "Creates the planning baseline for the uploaded repository tree, deriving planning structure from the current product documents, architecture overview, ADR lineage, baseline inventory, and domain model."
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
work_packet_id: "WP-0004"
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
  - "ADR-0011"
  - "ADR-0013"
  - "ADR-0014"
  - "ADR-0016"
  - "ADR-0017"
  - "ADR-0018"
  - "ADR-0019"
  - "ADR-0020"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "docs/planning/00-baseline-inventory.md"
  - "docs/domain/00-domain-model.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/product/00-product-inception-brief.md"
  - "docs/product/01-product-charter.md"
  - "docs/product/02-stakeholder-and-user-model.md"
  - "docs/product/03-software-requirements-specification.md"
  - "docs/product/00-architecture-overview.md"
  - "docs/architecture/00-architecture-overview.md"
  - "docs/adr/README.md"
affected_files:
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/planning/01-planning-baseline.md"
recommended_commit: "docs(planning): add planning baseline"
---

# WP-0004: Planning Baseline

## 1. Purpose

This work packet governs creation of the first planning baseline for the current uploaded repository tree.

The planning baseline is needed because the repository now has:

1. Product documents.
2. Architecture overview documents.
3. A mature ADR lineage.
4. A baseline inventory.
5. A domain model baseline.
6. Work packet governance.

The repository does not yet have an explicit planning document that turns those inputs into ordered delivery themes, implementation phases, work packet sequence, and stabilization priorities.

This packet authorizes creation of:

```text
docs/planning/01-planning-baseline.md
````

The planning baseline must align with the uploaded repository tree and current ADR lineage. It must not silently replace the baseline with a different plan.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the source documents, scope, non-goals, affected files, acceptance criteria, verification plan, and recommended atomic commit are defined.
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
WP-0003: Domain Model Baseline
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
ADR-0011: Dependency Pinning Policy — Exact Lockfiles Committed for All Ecosystems
ADR-0013: Polyglot Persistence and Qdrant Retrieval
ADR-0014: Polyglot Language Strategy
ADR-0016: Worktree-Based Parallel Execution
ADR-0017: Foundry Event Bus and Notification Router
ADR-0018: Work Packet Lifecycle
ADR-0019: Primary Package Managers — uv, cargo, and pnpm
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
docs/domain/00-domain-model.md
docs/adr/README.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0004-planning-baseline.md`.
2. Create `docs/planning/01-planning-baseline.md`.
3. Define the planning baseline purpose.
4. Identify planning assumptions from the current repository baseline.
5. Define planning principles.
6. Define planning layers.
7. Define baseline stabilization themes.
8. Define initial delivery themes.
9. Define initial work streams.
10. Define implementation readiness criteria.
11. Define near-term work packet sequence.
12. Define planning risks.
13. Define follow-up planning artifacts.
14. Preserve unresolved ADR gaps and overlaps as explicit review items.
15. Avoid runtime implementation or repository restructuring.

---

## 5. Non-Goals

Out of scope:

1. Runtime implementation code.
2. Database schema.
3. API contracts.
4. Package manager setup.
5. CI workflows.
6. Verification scripts.
7. Repo contract tests.
8. Domain model changes.
9. ADR renaming.
10. ADR renumbering.
11. ADR gap filling.
12. ADR deduplication.
13. Moving architecture documents.
14. Removing the `tree` file.
15. Creating a root `README.md`.
16. Creating full epics/backlog/milestone documents as separate files.
17. Creating project management board configuration.
18. Creating GitHub Issues.
19. Creating sprint plans.
20. Creating release notes.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. The current ADR lineage is authoritative enough for planning but may need later normalization.
3. `docs/domain/00-domain-model.md` exists or will exist before the planning baseline is completed.
4. `docs/planning/00-baseline-inventory.md` exists.
5. The planning baseline should be lightweight enough to guide next work without pretending a full backlog exists.
6. Full epics, requirements map, backlog, and milestone plan can be created later if needed.
7. The immediate goal is baseline stabilization, not runtime implementation.
8. Work packets remain the execution control layer.
9. Planning should preserve open questions instead of silently resolving them.
10. Repo contract testing and verification baseline are high-priority next steps.

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

1. This packet may create `docs/planning/01-planning-baseline.md`.
2. This packet may create only this work packet and the planning baseline.
3. This packet must not modify existing ADRs.
4. This packet must not modify product documents.
5. This packet must not modify architecture documents.
6. This packet must not modify the domain model.
7. This packet must not create runtime implementation code.
8. This packet must preserve unresolved baseline issues as follow-up work.

---

## 8. Risks

| Risk                                                               | Severity | Mitigation                                                                             |
| ------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------- |
| Planning baseline becomes too broad and turns into a full backlog. | Medium   | Limit it to planning structure, themes, sequence, and readiness criteria.              |
| Planning silently replaces existing ADR direction.                 | High     | Treat ADR lineage as source input and record conflicts as follow-up review.            |
| Runtime implementation begins before verification baseline exists. | Medium   | Make repository verification baseline a near-term next packet.                         |
| Planning ignores baseline inconsistencies.                         | Medium   | Carry ADR gaps, architecture duplication, and root README absence into follow-up work. |
| Planning becomes disconnected from work packets.                   | High     | Make near-term work packet sequence explicit.                                          |
| Planning claims implementation readiness prematurely.              | Medium   | Define readiness criteria and state what is still missing.                             |

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
This packet is ready for execution. It creates the planning baseline without modifying existing ADRs, product documents, architecture documents, domain documents, or runtime files.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0004-planning-baseline.md
docs/planning/01-planning-baseline.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
docs/planning/00-baseline-inventory.md
docs/domain/00-domain-model.md
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
docs/adr/README.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
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
docs/domain/00-domain-model.md
docs/planning/00-baseline-inventory.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
```

---

## 11. Implementation Plan

1. Confirm `docs/planning/00-baseline-inventory.md` exists.
2. Confirm `docs/domain/00-domain-model.md` exists.
3. Confirm current work-packet system exists.
4. Create `docs/work-packets/WP-0004-planning-baseline.md`.
5. Create `docs/planning/01-planning-baseline.md`.
6. In the planning baseline, state that the uploaded repository tree is the active baseline.
7. Identify planning principles.
8. Identify planning layers.
9. Identify baseline stabilization themes.
10. Identify initial delivery themes.
11. Identify immediate work packet sequence.
12. Identify implementation readiness criteria.
13. Identify planning risks.
14. Identify follow-up artifacts.
15. Run verification.
16. Commit this packet and the planning baseline atomically, unless this packet was committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0004-planning-baseline.md` exists.
2. `docs/planning/01-planning-baseline.md` exists.
3. The planning baseline includes YAML frontmatter.
4. The planning baseline includes `# Planning Baseline`.
5. The planning baseline states that the uploaded repository tree is the active baseline.
6. The planning baseline defines planning principles.
7. The planning baseline defines planning layers.
8. The planning baseline defines baseline stabilization themes.
9. The planning baseline defines initial delivery themes.
10. The planning baseline defines initial work streams.
11. The planning baseline defines near-term work packet sequence.
12. The planning baseline defines implementation readiness criteria.
13. The planning baseline identifies planning risks.
14. The planning baseline identifies follow-up artifacts.
15. No existing ADRs are modified.
16. No product or architecture documents are modified.
17. No domain documents are modified.
18. No runtime implementation code is introduced.
19. No secrets or sensitive values are introduced.
20. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0004-planning-baseline.md && \
test -f docs/planning/01-planning-baseline.md && \
grep -q '^title: "WP-0004: Planning Baseline"$' docs/work-packets/WP-0004-planning-baseline.md && \
grep -q '^# WP-0004: Planning Baseline$' docs/work-packets/WP-0004-planning-baseline.md && \
grep -q '^title: "Planning Baseline"$' docs/planning/01-planning-baseline.md && \
grep -q '^# Planning Baseline$' docs/planning/01-planning-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/01-planning-baseline.md && \
grep -q 'Planning Principles' docs/planning/01-planning-baseline.md && \
grep -q 'Implementation Readiness Criteria' docs/planning/01-planning-baseline.md && \
grep -q 'WP-0005: Repository Verification Baseline' docs/planning/01-planning-baseline.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the planning baseline is aligned to the current uploaded-tree baseline.
2. Confirm the planning baseline does not silently normalize ADR gaps.
3. Confirm the planning baseline does not rewrite product direction.
4. Confirm the planning baseline does not modify existing baseline documents.
5. Confirm the planning baseline is useful for deciding the next work packet.
6. Confirm no secrets, credentials, tokens, or private operational values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the planning baseline is aligned to the current baseline.
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
This packet creates planning documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, or sensitive operational values.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use role-based references such as Project Steward and architectural concepts rather than private personal details.
```

Additional safety notes:

1. Do not include private repository URLs with embedded credentials.
2. Do not include local filesystem paths containing private information.
3. Do not paste sensitive logs.
4. Do not add production deployment details.
5. Do not add real API keys or environment values.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `docs/planning/01-planning-baseline.md`.
2. Create `docs/work-packets/WP-0004-planning-baseline.md`.

Documentation intentionally deferred:

1. Repository verification baseline is deferred to `WP-0005`.
2. ADR index normalization review is deferred to `WP-0006`.
3. Repo contract testing baseline is deferred to `WP-0007`.
4. Context continuity baseline is deferred to `WP-0008`.
5. Root README baseline is deferred to a later packet.
6. Architecture overview placement review is deferred to a later packet.
7. Full epics/backlog/milestones may be derived later if the planning baseline identifies them as necessary.

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
git add docs/work-packets/WP-0004-planning-baseline.md docs/planning/01-planning-baseline.md
git commit -m "docs(planning): add planning baseline"
```

Commit message:

```text
docs(planning): add planning baseline
```

Commit guidance:

1. The commit should include only this packet and the planning baseline.
2. Do not include ADR edits.
3. Do not include product document edits.
4. Do not include architecture document edits.
5. Do not include domain model edits.
6. Do not include verification scripts.
7. Do not include runtime implementation code.
8. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/planning/01-planning-baseline.md`.
2. Create `WP-0005: Repository Verification Baseline`.
3. Create `WP-0006: ADR Index Normalization Review`.
4. Create `WP-0007: Repo Contract Testing Baseline`.
5. Create `WP-0008: Context Continuity Baseline`.
6. Create a root README baseline packet if the Project Steward wants repository orientation at the root.

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
This packet is intentionally scoped to planning baseline creation. It does not create runtime implementation, rewrite ADRs, or normalize repository structure. Its purpose is to make the current baseline actionable before verification and repo contract work begin.
```
