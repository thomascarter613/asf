---
title: "Planning Baseline"
description: "Initial planning baseline for the Agentic Software Framework, derived from the uploaded repository tree, baseline inventory, domain model, product documents, architecture overview, and current ADR lineage."
status: "proposed"
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
document_type: "planning-baseline"
canonical: false
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/domain/00-domain-model.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/product/00-product-inception-brief.md"
  - "docs/product/01-product-charter.md"
  - "docs/product/02-stakeholder-and-user-model.md"
  - "docs/product/03-software-requirements-specification.md"
  - "docs/product/00-architecture-overview.md"
  - "docs/architecture/00-architecture-overview.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
---

# Planning Baseline

## 1. Purpose

This document defines the initial planning baseline for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

This planning baseline converts the current repository state into an actionable planning structure without silently changing, renaming, deleting, or normalizing existing files.

It exists to answer:

1. What is the current planning position?
2. What work has already been established?
3. What must happen before runtime implementation begins?
4. Which work streams should be pursued first?
5. What work packet sequence should guide the next phase?
6. What unresolved baseline issues must remain visible?
7. What criteria determine implementation readiness?

This document is not a full backlog, sprint plan, release plan, or implementation specification. It is the first planning layer for stabilizing the repository baseline and preparing for governed implementation.

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

This means:

1. Existing ADR files are preserved.
2. Existing ADR number gaps are preserved.
3. Existing ADR topic overlaps are preserved until reviewed.
4. Existing product documents are preserved.
5. Existing architecture documents are preserved.
6. Existing root governance files are preserved.
7. Empty directories are treated as planned expansion points.
8. Future cleanup requires explicit work packets.
9. Runtime implementation should not begin until baseline verification and contract rules are established.
10. Planning must derive from the current baseline, not from an alternate file plan.

---

## 3. Current Planning Position

The repository currently has:

1. Root governance files.
2. Product inception and charter documents.
3. Stakeholder and user model.
4. Software requirements specification.
5. Product-level architecture overview.
6. Architecture directory overview.
7. ADR index and ADR template.
8. Mature ADR lineage.
9. Baseline inventory.
10. Domain model baseline.
11. Work packet index.
12. Work packet template.
13. Initial work packets.

The repository is currently in:

```text
Baseline Stabilization
```

The immediate objective is:

```text
Stabilize the repository baseline, define verification rules, clarify planning direction, and prepare for governed implementation.
```

---

## 4. Planning Principles

## 4.1 Preserve the Baseline

Planning must start from the actual repository tree.

Do not silently replace the baseline with a cleaner imagined structure.

## 4.2 Stabilize Before Implementing

The repository contains strong architectural intent but does not yet have enough local verification and repo contract enforcement.

Before runtime implementation, the project needs:

1. Planning baseline.
2. Repository verification baseline.
3. ADR normalization review.
4. Repo contract testing baseline.
5. Context continuity baseline.

## 4.3 Work Packets Govern Execution

All non-trivial work should proceed through work packets.

A work packet should define:

1. Purpose.
2. Scope.
3. Non-goals.
4. Source inputs.
5. Affected files.
6. Acceptance criteria.
7. Verification plan.
8. Security and privacy notes.
9. Completion record.
10. Recommended atomic commit.

## 4.4 ADRs Constrain Planning

The current ADR lineage is a planning source of truth.

Planning must respect the architectural decisions already present, including:

1. ADRs as first-class artifacts.
2. Repository-based context continuity.
3. Bounded monorepo topology.
4. Four-tier repository classification.
5. Clean-room pattern adoption.
6. Canonical repository plus vector retrieval.
7. Foundry Control Plane.
8. Polyglot persistence and retrieval.
9. Polyglot language strategy.
10. Worktree-based parallel execution.
11. Event bus and notification router.
12. Work packet lifecycle.
13. Package manager strategy.
14. Directive compiler and work protocols.
15. Repo contract testing.
16. Evaluation harness.

## 4.5 Gaps Are Planning Inputs

ADR number gaps, duplicate-looking ADR topics, and duplicate architecture overview placement are not errors to hide.

They are planning inputs.

## 4.6 Verification Must Become Concrete

The project should not rely on manual confidence alone.

The next planning priority is to turn baseline expectations into runnable checks.

## 4.7 Runtime Code Comes After Repository Contracts

The product should not start runtime implementation until at least a minimal repo contract baseline exists.

---

## 5. Planning Layers

The current planning model should use the following layers.

## 5.1 Baseline Inventory

Purpose:

```text
Record the repository as it exists.
```

Current file:

```text
docs/planning/00-baseline-inventory.md
```

## 5.2 Domain Model

Purpose:

```text
Translate baseline documents and ADRs into conceptual domain vocabulary.
```

Current file:

```text
docs/domain/00-domain-model.md
```

## 5.3 Planning Baseline

Purpose:

```text
Turn the baseline and domain model into a near-term execution plan.
```

Current file:

```text
docs/planning/01-planning-baseline.md
```

## 5.4 Work Packets

Purpose:

```text
Define bounded execution units.
```

Current files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
```

## 5.5 Future Backlog

Purpose:

```text
Decompose planning themes into ordered implementation work.
```

Status:

```text
Not created yet.
```

## 5.6 Future Milestone Plan

Purpose:

```text
Sequence backlog into milestone outcomes.
```

Status:

```text
Not created yet.
```

## 5.7 Future Verification Baseline

Purpose:

```text
Define local checks and repository contract tests.
```

Status:

```text
Next high-priority step.
```

---

## 6. Baseline Stabilization Themes

The near-term work should be organized into the following stabilization themes.

| Theme | Title | Priority | Purpose |
| --- | --- | --- | --- |
| `BST-001` | Work Packet Governance | High | Establish work packet index, template, and first packets. |
| `BST-002` | Baseline Inventory | High | Record the uploaded tree and visible inconsistencies. |
| `BST-003` | Domain Baseline | High | Define the conceptual model from existing documents and ADRs. |
| `BST-004` | Planning Baseline | High | Convert baseline into near-term execution direction. |
| `BST-005` | Repository Verification | High | Create local checks for expected files and structure. |
| `BST-006` | ADR Normalization Review | Medium | Review gaps, overlaps, and ADR index consistency. |
| `BST-007` | Repo Contract Testing | High | Convert repository expectations into testable contract checks. |
| `BST-008` | Context Continuity | Medium | Create current-state and handoff artifacts aligned with ADR-0002 and ADR-0006. |
| `BST-009` | Root Orientation | Medium | Add or review root README if desired. |
| `BST-010` | Architecture Placement Review | Medium | Resolve or document duplicate architecture overview placement. |

---

## 7. Initial Delivery Themes

After baseline stabilization, implementation planning should move through the following delivery themes.

## 7.1 Repository Contract Foundation

Goal:

```text
Make repository expectations executable.
```

Expected outputs:

1. Repo contract document.
2. Repo contract check script or test harness.
3. Required-file checks.
4. Required-directory checks.
5. ADR/work-packet metadata checks.
6. Verification command.

Related ADR:

```text
ADR-0021: Repo Contract Testing
```

## 7.2 Context Continuity Foundation

Goal:

```text
Make repository-based context continuity durable and repeatable.
```

Expected outputs:

1. Current-state document.
2. Handoff packet template.
3. Context pack template.
4. Context source rules.
5. Retrieval-readiness notes.

Related ADRs:

```text
ADR-0002: Repository-Based Context Continuity
ADR-0006: Canonical Repository plus Vector Retrieval
```

## 7.3 Foundry Control Plane Planning

Goal:

```text
Define the first implementable slice of the Foundry Control Plane.
```

Expected outputs:

1. Control plane responsibilities.
2. Initial module boundaries.
3. Work packet orchestration rules.
4. Execution policy baseline.
5. Human approval boundary.

Related ADR:

```text
ADR-0008: Foundry Control Plane
```

## 7.4 Directive Compiler Planning

Goal:

```text
Prepare for converting product intent and work protocols into structured execution directives.
```

Expected outputs:

1. Directive vocabulary.
2. Work protocol schema.
3. Compilation rules.
4. Validation expectations.
5. Test cases.

Related ADR:

```text
ADR-0020: Directive Compiler and Work Protocols
```

## 7.5 Evaluation Harness Planning

Goal:

```text
Define how agentic execution and context continuity will be evaluated.
```

Expected outputs:

1. Evaluation categories.
2. First evaluation cases.
3. Expected outcomes.
4. Failure criteria.
5. Regression records.

Related ADR:

```text
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 7.6 Persistence and Retrieval Planning

Goal:

```text
Clarify storage and retrieval implementation boundaries.
```

Expected outputs:

1. Persistence boundary map.
2. Qdrant collection plan.
3. Structured metadata plan.
4. Retrieval evaluation rules.
5. ADR overlap review.

Related ADRs:

```text
ADR-0013: Polyglot Persistence and Qdrant Retrieval
ADR-0015: Polyglot Persistence and Qdrant Retrieval
ADR-0014: Polyglot Language Strategy
```

---

## 8. Initial Work Streams

## 8.1 Baseline Stabilization Work Stream

Purpose:

```text
Make the current repository baseline explicit, governed, and verifiable.
```

Includes:

1. Work packet index.
2. Work packet template.
3. Baseline inventory.
4. Domain model.
5. Planning baseline.
6. Repository verification baseline.
7. Repo contract testing baseline.

Status:

```text
In progress.
```

## 8.2 ADR Governance Work Stream

Purpose:

```text
Clarify ADR status, gaps, overlaps, and index accuracy.
```

Includes:

1. ADR index review.
2. ADR gap policy.
3. ADR duplicate/overlap review.
4. ADR status normalization.
5. ADR supersession recommendations.

Status:

```text
Planned.
```

## 8.3 Context Continuity Work Stream

Purpose:

```text
Ensure future humans and AI agents can resume work reliably.
```

Includes:

1. Current-state file.
2. Handoff packet.
3. Context pack source rules.
4. Retrieval-readiness notes.
5. AI continuation instructions.

Status:

```text
Planned.
```

## 8.4 Repo Contract Work Stream

Purpose:

```text
Convert repository expectations into executable checks.
```

Includes:

1. Required file checks.
2. Required directory checks.
3. Frontmatter checks.
4. ADR index checks.
5. Work packet checks.
6. Baseline drift checks.

Status:

```text
Planned.
```

## 8.5 Implementation Architecture Work Stream

Purpose:

```text
Prepare the first runtime implementation slice.
```

Includes:

1. Module map.
2. Package manager setup.
3. Dependency pinning.
4. Language boundary plan.
5. Service boundaries.
6. Local development commands.

Status:

```text
Deferred until baseline verification and repo contract work begin.
```

---

## 9. Near-Term Work Packet Sequence

The near-term work packet sequence should be:

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
```

## 9.1 Completed or In Progress

```text
WP-0001 Work Packet Template
WP-0002 Baseline Inventory and Consistency Review
WP-0003 Domain Model Baseline
WP-0004 Planning Baseline
```

## 9.2 Recommended Next Packets

```text
WP-0005 Repository Verification Baseline
WP-0006 ADR Index Normalization Review
WP-0007 Repo Contract Testing Baseline
WP-0008 Context Continuity Baseline
```

## 9.3 Later Baseline Cleanup Packets

```text
WP-0009 Root README Baseline
WP-0010 Architecture Overview Placement Review
WP-0011 Baseline Tree Artifact Policy
```

---

## 10. Implementation Readiness Criteria

Runtime implementation should not begin until the following are true.

## 10.1 Required Before Runtime Code

1. Work packet index exists.
2. Work packet template exists.
3. Baseline inventory exists.
4. Domain model baseline exists.
5. Planning baseline exists.
6. Repository verification baseline exists.
7. Minimal repo contract checks exist.
8. Current-state or handoff artifact exists.
9. ADR normalization findings are at least documented.
10. Package manager strategy is confirmed against ADR-0019.
11. Dependency pinning expectations are confirmed against ADR-0011.
12. Runtime module map is defined.

## 10.2 Strongly Recommended Before Runtime Code

1. Root README exists or absence is explicitly accepted.
2. Architecture overview placement is clarified.
3. ADR overlap between ADR-0013 and ADR-0015 is reviewed.
4. Initial evaluation harness categories are defined.
5. Context continuity baseline is created.
6. Local verification command exists.
7. Repo contract check runs locally.

## 10.3 Not Required Before Runtime Code

1. Full evaluation harness implementation.
2. Full vector database setup.
3. Full Foundry Control Plane implementation.
4. Full directive compiler implementation.
5. Event bus implementation.
6. Worktree automation.
7. CI pipeline.
8. Deployment infrastructure.
9. Billing system.
10. Public documentation site.

---

## 11. Planning Risks

## 11.1 Risk: Baseline Drift Before Verification

The repository may continue changing before verification checks exist.

Mitigation:

1. Create `WP-0005: Repository Verification Baseline`.
2. Add explicit file existence checks.
3. Add ADR/work-packet checks.
4. Add `git diff --check`.

## 11.2 Risk: ADR Confusion

ADR number gaps and overlapping titles may confuse future implementation.

Mitigation:

1. Create `WP-0006: ADR Index Normalization Review`.
2. Do not renumber ADRs.
3. Record gap policy.
4. Record overlap findings.
5. Use supersession only if explicitly decided.

## 11.3 Risk: Planning Outruns Implementation Reality

The planning baseline could imply runtime capabilities that do not yet exist.

Mitigation:

1. Use clear “planned” language.
2. Distinguish documentation baseline from implementation.
3. Require verification before completion.
4. Delay runtime work until repo contract baseline exists.

## 11.4 Risk: Work Packets Become Ceremony

Work packets may become too heavy for practical development.

Mitigation:

1. Keep packets bounded.
2. Allow concise sections for small work.
3. Use templates consistently.
4. Keep verification concrete.
5. Prefer one atomic commit per packet.

## 11.5 Risk: Context Continuity Remains Abstract

ADR-0002 and ADR-0006 establish continuity and retrieval ideas, but they need operational artifacts.

Mitigation:

1. Create current-state document.
2. Create handoff packet template.
3. Create context source rules.
4. Add retrieval-readiness plan.

## 11.6 Risk: Repo Contract Testing Is Delayed

ADR-0021 identifies repo contract testing as important, but checks do not yet exist.

Mitigation:

1. Prioritize `WP-0007`.
2. Start with file/directory/frontmatter checks.
3. Expand later to language/package checks.

---

## 12. Follow-Up Planning Artifacts

Future planning may need these artifacts.

| Artifact | Proposed Path | Purpose |
| --- | --- | --- |
| Epics | `docs/planning/02-epics.md` | Group major delivery areas. |
| Requirements Map | `docs/planning/03-requirements-map.md` | Connect requirements to ADRs and work packets. |
| Backlog | `docs/planning/04-backlog.md` | Define actionable backlog items. |
| Milestone Plan | `docs/planning/05-milestone-plan.md` | Sequence backlog into deliverable milestones. |
| Implementation Readiness Checklist | `docs/planning/06-implementation-readiness.md` | Gate runtime implementation. |
| Release Slice Plan | `docs/planning/07-release-slice-plan.md` | Define the first shippable slice. |

These are not required immediately. The current priority is baseline verification and repo contract testing.

---

## 13. Initial Planning Decisions

This planning baseline makes the following planning decisions.

## 13.1 Baseline Stabilization Comes Before Runtime Code

Decision:

```text
Proceed with baseline stabilization before runtime implementation.
```

Rationale:

The repository has significant architectural intent but does not yet have sufficient verification or contract enforcement.

## 13.2 Repo Contract Testing Is a Near-Term Priority

Decision:

```text
Prioritize repo contract testing before deeper implementation.
```

Rationale:

ADR-0021 makes repository structure enforceability a first-class concern.

## 13.3 ADR Normalization Is Review Work, Not Automatic Cleanup

Decision:

```text
Review ADR gaps and overlaps through a dedicated work packet.
```

Rationale:

Renumbering or deleting ADRs would destroy decision history.

## 13.4 Context Continuity Needs Operational Artifacts

Decision:

```text
Create current-state and handoff/context artifacts before long implementation sessions.
```

Rationale:

ADR-0002 and ADR-0006 are central to the project identity.

## 13.5 Root README Is Useful but Not Blocking

Decision:

```text
Root README should be added, but repository verification and contract baseline are higher priority.
```

Rationale:

The repository is already navigable through planning and work-packet documents, but root orientation will help future users.

---

## 14. Near-Term Execution Plan

## 14.1 Next Packet: Repository Verification Baseline

Create:

```text
docs/work-packets/WP-0005-repository-verification-baseline.md
```

Then execute by creating a local verification baseline.

Possible outputs:

```text
docs/verification/00-verification-baseline.md
```

Potential future script:

```text
tools/verify-repository-baseline.sh
```

The script may be deferred if the repo does not yet have a `tools/` directory.

## 14.2 Following Packet: ADR Index Normalization Review

Create:

```text
docs/work-packets/WP-0006-adr-index-normalization-review.md
```

Possible output:

```text
docs/planning/02-adr-normalization-review.md
```

## 14.3 Following Packet: Repo Contract Testing Baseline

Create:

```text
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
```

Possible outputs:

```text
docs/verification/01-repo-contract-baseline.md
```

Potential future script:

```text
tools/check-repo-contract.sh
```

## 14.4 Following Packet: Context Continuity Baseline

Create:

```text
docs/work-packets/WP-0008-context-continuity-baseline.md
```

Possible outputs:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

---

## 15. Planning Baseline Acceptance Criteria

This planning baseline is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It defines Planning Principles.
3. It defines planning layers.
4. It defines baseline stabilization themes.
5. It defines initial delivery themes.
6. It defines initial work streams.
7. It defines near-term work packet sequence.
8. It defines Implementation Readiness Criteria.
9. It identifies planning risks.
10. It identifies follow-up planning artifacts.
11. It makes near-term planning decisions.
12. It identifies the next work packet.
13. It does not rename, delete, rewrite, or normalize existing files.
14. It does not claim runtime implementation exists.

---

## 16. Verification

Run:

```bash
test -f docs/planning/01-planning-baseline.md && \
grep -q '^title: "Planning Baseline"$' docs/planning/01-planning-baseline.md && \
grep -q '^# Planning Baseline$' docs/planning/01-planning-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/01-planning-baseline.md && \
grep -q 'Planning Principles' docs/planning/01-planning-baseline.md && \
grep -q 'Implementation Readiness Criteria' docs/planning/01-planning-baseline.md && \
grep -q 'WP-0005: Repository Verification Baseline' docs/planning/01-planning-baseline.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```
