---
title: "WP-0006: ADR Index Normalization Review"
description: "Reviews the current ADR index, numbering gaps, duplicate or overlapping topics, and index consistency without renaming, deleting, renumbering, or silently superseding baseline ADRs."
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
work_packet_id: "WP-0006"
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
  - "ADR-0015"
  - "ADR-0016"
  - "ADR-0017"
  - "ADR-0018"
  - "ADR-0019"
  - "ADR-0020"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/work-packets/WP-0005-repository-verification-baseline.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0006-adr-index-normalization-review.md"
  - "docs/planning/02-adr-normalization-review.md"
recommended_commit: "docs(planning): add adr normalization review"
---

# WP-0006: ADR Index Normalization Review

## 1. Purpose

This work packet governs creation of an ADR normalization review for the current uploaded repository baseline.

The repository already contains a mature ADR lineage, but the baseline inventory, domain model, planning baseline, and verification baseline have identified several visible ADR concerns:

1. ADR number gaps.
2. Potential topic overlap.
3. Possible index consistency questions.
4. Need for explicit gap policy.
5. Need for explicit normalization rules.
6. Need to clarify whether any ADRs should later be superseded, cross-referenced, or left unchanged.

This packet authorizes creation of:

```text
docs/planning/02-adr-normalization-review.md
````

This packet does **not** authorize changing ADR files.

It does **not** authorize renaming, deleting, renumbering, filling gaps, or silently superseding ADRs.

The purpose is review, not cleanup.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the ADR baseline is visible, known gaps and potential overlaps have been identified, the review scope is bounded, and the packet explicitly forbids silent ADR mutation.
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
WP-0004: Planning Baseline
WP-0005: Repository Verification Baseline
```

## 3.4 Related ADRs

Current ADR files in the uploaded baseline:

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
ADR-0015: Polyglot Persistence and Qdrant Retrieval
ADR-0016: Worktree-Based Parallel Execution
ADR-0017: Foundry Event Bus and Notification Router
ADR-0018: Work Packet Lifecycle
ADR-0019: Primary Package Managers — uv, cargo, and pnpm
ADR-0020: Directive Compiler and Work Protocols
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Planning, Domain, and Verification Documents

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
```

## 3.6 Related Existing Files

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0006-adr-index-normalization-review.md`.
2. Create `docs/planning/02-adr-normalization-review.md`.
3. Inventory the current ADR files.
4. Identify missing ADR numbers.
5. Identify potential duplicate or overlapping ADR topics.
6. Identify possible ADR index consistency issues.
7. Define an ADR gap policy recommendation.
8. Define an ADR overlap handling recommendation.
9. Define an ADR supersession review recommendation.
10. Define what should not be normalized automatically.
11. Define future work packets that may modify ADRs only if explicitly approved.
12. Preserve all existing ADR files unchanged.
13. Preserve the uploaded baseline as the source of truth.

---

## 5. Non-Goals

Out of scope:

1. Editing `docs/adr/README.md`.
2. Editing `docs/adr/ADR-TEMPLATE.md`.
3. Editing any ADR file.
4. Renaming ADR files.
5. Renumbering ADR files.
6. Filling ADR number gaps.
7. Deleting duplicate-looking ADRs.
8. Superseding ADRs.
9. Changing ADR statuses.
10. Moving ADR files.
11. Creating new ADRs.
12. Rewriting the architecture overview.
13. Rewriting product documents.
14. Rewriting the domain model.
15. Creating repo contract tests.
16. Creating runtime implementation code.
17. Creating CI workflows.
18. Creating package-manager files.
19. Implementing persistence, retrieval, worktree, event bus, directive compiler, or evaluation harness code.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. Current ADR files represent valuable decision history.
3. ADR number gaps may be intentional, historical, or accidental.
4. Potential ADR overlap should be reviewed before any supersession decision.
5. Renumbering ADRs would damage decision history and should not be done.
6. Duplicate-looking ADRs may represent distinct decisions, revisions, or unresolved drift.
7. ADR index normalization should produce findings and recommendations first.
8. Any actual ADR changes should require a separate work packet.
9. Any actual ADR supersession should be explicit and documented.
10. The current review can proceed without reading every ADR in full, but deeper content review may be recommended as follow-up.

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

1. This packet may create `docs/planning/02-adr-normalization-review.md`.
2. This packet may create only this work packet and the ADR normalization review artifact.
3. This packet must not modify existing ADRs.
4. This packet must not modify the ADR index.
5. This packet must not modify the ADR template.
6. This packet must not create new ADRs.
7. This packet must not supersede ADRs.
8. This packet must preserve all findings as review findings, not automatic changes.

---

## 8. Risks

| Risk                                             | Severity | Mitigation                                                                      |
| ------------------------------------------------ | -------- | ------------------------------------------------------------------------------- |
| ADR normalization is mistaken for ADR rewriting. | High     | State repeatedly that this packet is review-only.                               |
| ADR number gaps are filled incorrectly.          | High     | Forbid gap filling in this packet.                                              |
| Duplicate-looking ADRs are deleted prematurely.  | High     | Preserve both and recommend content review.                                     |
| ADR index issues are fixed without a packet.     | Medium   | Defer ADR index updates to a future explicit packet.                            |
| Review becomes too shallow to be useful.         | Medium   | Require an inventory table, gap findings, overlap findings, and follow-up work. |
| Future implementation references the wrong ADR.  | Medium   | Recommend future ADR reference guidance after normalization review.             |
| Existing decision history is damaged.            | High     | Do not rename, renumber, delete, or rewrite ADRs.                               |

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
This packet is ready for execution. It creates a review artifact only and does not alter the ADR lineage.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0006-adr-index-normalization-review.md
docs/planning/02-adr-normalization-review.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md
docs/adr/ADR-0002-repository-based-context-continuity.md
docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md
docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md
docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md
docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md
docs/adr/ADR-0008-foundry-control-plane.md
docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md
docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0016-worktree-based-parallel-execution.md
docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md
docs/adr/ADR-0018-work-packet-lifecycle.md
docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
docs/adr/ADR-0020-directive-compiler-and-work-protocols.md
docs/adr/ADR-0021-repo-contract-testing.md
docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
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
docs/planning/01-planning-baseline.md
docs/verification/00-verification-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
```

---

## 11. Implementation Plan

1. Confirm `docs/adr/README.md` exists.
2. Confirm `docs/adr/ADR-TEMPLATE.md` exists.
3. Confirm current ADR files exist.
4. Confirm planning/domain/verification baseline files exist.
5. Create `docs/work-packets/WP-0006-adr-index-normalization-review.md`.
6. Create `docs/planning/02-adr-normalization-review.md`.
7. In the review artifact, state that the uploaded repository tree is the active baseline.
8. Inventory current ADR files.
9. Identify missing ADR numbers.
10. Identify potential topic overlap.
11. Identify index and metadata concerns.
12. Define normalization recommendations.
13. Define prohibited automatic actions.
14. Define follow-up work.
15. Run verification.
16. Commit this packet and the review artifact atomically, unless this packet is committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0006-adr-index-normalization-review.md` exists.
2. `docs/planning/02-adr-normalization-review.md` exists.
3. The ADR normalization review includes YAML frontmatter.
4. The ADR normalization review includes `# ADR Normalization Review`.
5. The review states that the uploaded repository tree is the active baseline.
6. The review inventories current ADR files.
7. The review identifies ADR number gaps.
8. The review identifies potential ADR topic overlap.
9. The review defines an ADR gap policy recommendation.
10. The review defines ADR overlap handling recommendations.
11. The review defines prohibited automatic actions.
12. The review defines follow-up work.
13. No ADR files are modified.
14. The ADR index is not modified.
15. The ADR template is not modified.
16. No product or architecture documents are modified.
17. No runtime implementation code is introduced.
18. No secrets or sensitive values are introduced.
19. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0006-adr-index-normalization-review.md && \
test -f docs/planning/02-adr-normalization-review.md && \
grep -q '^title: "WP-0006: ADR Index Normalization Review"$' docs/work-packets/WP-0006-adr-index-normalization-review.md && \
grep -q '^# WP-0006: ADR Index Normalization Review$' docs/work-packets/WP-0006-adr-index-normalization-review.md && \
grep -q '^title: "ADR Normalization Review"$' docs/planning/02-adr-normalization-review.md && \
grep -q '^# ADR Normalization Review$' docs/planning/02-adr-normalization-review.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/02-adr-normalization-review.md && \
grep -q 'ADR Number Gaps' docs/planning/02-adr-normalization-review.md && \
grep -q 'ADR Topic Overlap' docs/planning/02-adr-normalization-review.md && \
grep -q 'Prohibited Automatic Actions' docs/planning/02-adr-normalization-review.md && \
grep -q 'ADR-0013' docs/planning/02-adr-normalization-review.md && \
grep -q 'ADR-0015' docs/planning/02-adr-normalization-review.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm no ADR files were modified.
2. Confirm the ADR index was not modified.
3. Confirm the ADR template was not modified.
4. Confirm the review does not renumber ADRs.
5. Confirm the review does not claim any ADR is superseded unless explicitly marked as a recommendation for future review.
6. Confirm all ADR gaps are documented as findings, not fixed.
7. Confirm potential overlap between ADR-0013 and ADR-0015 is documented as a finding, not resolved.
8. Confirm no secrets, credentials, tokens, or private operational values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms this is a review-only ADR normalization artifact.
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
This packet creates planning documentation only. It does not touch authentication, authorization, repository access, secrets detection, AI context assembly, runtime code, CI, or deployment infrastructure.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use repository-relative paths and role-based references only.
```

Additional safety notes:

1. Do not include local absolute paths.
2. Do not include private repository URLs.
3. Do not include confidential implementation details.
4. Do not paste logs containing credentials.
5. Do not include real secret examples.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `docs/planning/02-adr-normalization-review.md`.
2. Create `docs/work-packets/WP-0006-adr-index-normalization-review.md`.

Documentation intentionally deferred:

1. Any ADR index edits are deferred to a future packet.
2. Any ADR file edits are deferred to a future packet.
3. Any ADR supersession decisions are deferred to future explicit ADR work.
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
git add docs/work-packets/WP-0006-adr-index-normalization-review.md docs/planning/02-adr-normalization-review.md
git commit -m "docs(planning): add adr normalization review"
```

Commit message:

```text
docs(planning): add adr normalization review
```

Commit guidance:

1. The commit should include only this packet and the ADR normalization review artifact.
2. Do not include ADR edits.
3. Do not include ADR index edits.
4. Do not include ADR template edits.
5. Do not include product document edits.
6. Do not include architecture document edits.
7. Do not include runtime implementation code.
8. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/planning/02-adr-normalization-review.md`.
2. Create `WP-0007: Repo Contract Testing Baseline`.
3. Create `WP-0008: Context Continuity Baseline`.
4. Create a future packet if the Project Steward chooses to update `docs/adr/README.md`.
5. Create a future packet if any ADR should be superseded.
6. Create a future packet if ADR-0013 and ADR-0015 should be reconciled.
7. Create a future packet if ADR gap policy should be added to ADR governance.

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
This packet is intentionally review-only. The repository's ADR lineage is valuable decision history. Normalization begins with visibility and recommendations, not destructive cleanup.
```
