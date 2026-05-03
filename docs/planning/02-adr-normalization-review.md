---
title: "ADR Normalization Review"
description: "Review-only ADR normalization artifact for the Agentic Software Framework baseline, identifying ADR inventory, number gaps, topic overlaps, index consistency concerns, prohibited automatic actions, and follow-up work without changing ADR files."
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
document_type: "adr-normalization-review"
canonical: false
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
  - "docs/work-packets/WP-0006-adr-index-normalization-review.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
---

# ADR Normalization Review

## 1. Purpose

This document records a review-only normalization assessment of the current ADR set in the **Agentic Software Framework** repository baseline.

The uploaded repository tree is the active baseline.

This document identifies:

1. Current ADR inventory.
2. ADR support files.
3. ADR number gaps.
4. Potential ADR topic overlaps.
5. ADR index consistency concerns.
6. ADR gap policy recommendations.
7. ADR overlap handling recommendations.
8. Prohibited automatic actions.
9. Follow-up work.

This document does **not** change the ADR lineage.

This document does **not** rename, delete, renumber, rewrite, supersede, or create ADRs.

---

## 2. Review Boundary

This is a planning review artifact.

It is authorized by:

```text
WP-0006: ADR Index Normalization Review
```

This review is intentionally conservative.

The repository’s ADR files are treated as decision-history artifacts. Even when gaps or overlaps are visible, they must be preserved until a future explicit work packet authorizes a change.

---

## 3. Baseline Rule

The uploaded repository tree is the active baseline.

This means:

1. Existing ADR files are preserved.
2. Existing ADR numbers are preserved.
3. Existing ADR filenames are preserved.
4. Existing ADR number gaps are preserved.
5. Existing potential topic overlaps are preserved.
6. The ADR index is preserved.
7. The ADR template is preserved.
8. Any cleanup must happen through a future explicit work packet.
9. Any supersession must be explicit and documented.
10. No silent normalization is allowed.

---

## 4. ADR Support File Inventory

The current ADR support files are:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

| File | Status | Notes |
| --- | --- | --- |
| `docs/adr/README.md` | Present | ADR index. |
| `docs/adr/ADR-TEMPLATE.md` | Present | ADR creation template. |

## 4.1 Support File Findings

1. The repository already has an ADR index.
2. The repository already has an ADR template.
3. The ADR system is established and should be preserved.
4. This review does not modify either support file.

---

## 5. Current ADR Inventory

The current baseline contains the following ADR files:

| ADR | File | Topic |
| --- | --- | --- |
| `ADR-0001` | `docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md` | ADRs as first-class engineering artifacts. |
| `ADR-0002` | `docs/adr/ADR-0002-repository-based-context-continuity.md` | Repository-based context continuity. |
| `ADR-0003` | `docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md` | Repository topology and bounded monorepos. |
| `ADR-0004` | `docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md` | Four-tier repository access classification. |
| `ADR-0005` | `docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md` | Clean-room architecture and pattern adoption. |
| `ADR-0006` | `docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md` | Canonical repository plus vector retrieval. |
| `ADR-0008` | `docs/adr/ADR-0008-foundry-control-plane.md` | Foundry Control Plane. |
| `ADR-0011` | `docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md` | Dependency pinning and exact lockfiles. |
| `ADR-0013` | `docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md` | Polyglot persistence and Qdrant retrieval. |
| `ADR-0014` | `docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md` | Polyglot language strategy. |
| `ADR-0015` | `docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md` | Polyglot persistence and Qdrant retrieval. |
| `ADR-0016` | `docs/adr/ADR-0016-worktree-based-parallel-execution.md` | Worktree-based parallel execution. |
| `ADR-0017` | `docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md` | Foundry event bus and notification router. |
| `ADR-0018` | `docs/adr/ADR-0018-work-packet-lifecycle.md` | Work packet lifecycle. |
| `ADR-0019` | `docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md` | Primary package managers. |
| `ADR-0020` | `docs/adr/ADR-0020-directive-compiler-and-work-protocols.md` | Directive compiler and work protocols. |
| `ADR-0021` | `docs/adr/ADR-0021-repo-contract-testing.md` | Repo contract testing. |
| `ADR-0022` | `docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md` | Evaluation harness for context continuity and agent execution. |

---

## 6. ADR Number Gaps

## 6.1 Observed Gaps

The visible ADR sequence has the following number gaps:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

## 6.2 Gap Finding

These gaps are accepted as baseline facts.

The existence of gaps does not prove that files are missing. Possible explanations include:

1. ADRs were intentionally skipped.
2. ADRs were removed before the current baseline was accepted.
3. ADRs were renamed in earlier history.
4. ADRs were superseded outside the visible tree.
5. ADRs were planned but never created.
6. ADR numbers were reserved.
7. The repository lineage changed before this baseline was accepted.

## 6.3 Gap Policy Recommendation

Recommended policy:

```text
Do not renumber existing ADRs.
```

Recommended supporting rules:

1. ADR numbers are historical identifiers.
2. ADR numbers should never be reused.
3. Missing ADR numbers should be recorded as gaps.
4. A future ADR gap policy may add index notes for missing numbers.
5. Gap notes should live in the ADR index or a dedicated ADR governance note only after an explicit work packet.
6. Future ADRs should continue from the next available number unless the Project Steward explicitly chooses another policy.

## 6.4 Gap Handling Recommendation

Recommended follow-up options:

1. Leave gaps as-is and document them in the ADR index.
2. Add an “ADR Number Gaps” section to `docs/adr/README.md`.
3. Add placeholder entries marked `Reserved`, `Missing`, `Retired`, or `Intentionally absent` only if the Project Steward confirms the correct classification.
4. Avoid creating retroactive ADRs solely to fill numbers.
5. Avoid changing filenames to create a perfectly continuous sequence.

---

## 7. ADR Topic Overlap

## 7.1 Observed Potential Overlap

The following files appear to have overlapping topics based on filenames:

```text
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

Both titles reference:

```text
Polyglot Persistence and Qdrant Retrieval
```

## 7.2 Overlap Finding

This appears to be a potential duplicate or revision relationship.

However, filename similarity alone is not enough to decide whether one should be superseded.

Possible explanations include:

1. `ADR-0015` may revise or refine `ADR-0013`.
2. `ADR-0013` and `ADR-0015` may address different parts of persistence and retrieval.
3. One ADR may be obsolete.
4. One ADR may have been created accidentally.
5. Both may be valid but need clearer titles.
6. The ADR index may already distinguish them.
7. The distinction may be in the body content rather than filename.

## 7.3 Overlap Handling Recommendation

Recommended handling:

1. Preserve both ADRs for now.
2. Perform a content-level comparison in a future work packet.
3. Determine whether the relationship is:
   - duplicate,
   - revision,
   - supersession,
   - refinement,
   - split-scope,
   - or legitimate coexistence.
4. If one supersedes the other, update both ADRs and the ADR index through an explicit ADR maintenance packet.
5. If both remain active, clarify titles or index descriptions through an explicit packet.
6. Do not delete either ADR.
7. Do not rename either ADR in this review.

---

## 8. ADR Index Consistency Review

## 8.1 Index Presence

The ADR index exists:

```text
docs/adr/README.md
```

## 8.2 Index Review Needs

The ADR index should eventually answer:

1. Which ADRs are present?
2. Which ADRs are accepted, proposed, superseded, rejected, or deprecated?
3. Which ADR numbers are missing?
4. Whether missing numbers are intentional.
5. Whether any ADR supersedes another.
6. Whether any ADRs have known overlap.
7. Which ADRs constrain implementation immediately.
8. Which ADRs require review before runtime work.
9. Which ADRs are foundational.
10. Which ADRs are implementation-phase-specific.

## 8.3 Current Review Limitation

This review does not modify the ADR index.

A future work packet may update `docs/adr/README.md` if the Project Steward chooses.

Recommended future packet:

```text
WP-0012: ADR Index Gap and Status Annotation
```

---

## 9. ADR Status Normalization

## 9.1 Need

A mature ADR system should make ADR status easy to determine.

Useful statuses include:

1. `draft`
2. `proposed`
3. `accepted`
4. `superseded`
5. `deprecated`
6. `rejected`

## 9.2 Current Baseline Position

This review does not assert that every ADR has normalized status metadata.

This review does not inspect every file for frontmatter status consistency.

## 9.3 Recommendation

A future packet should review ADR metadata and status consistency.

Possible output:

```text
docs/planning/03-adr-status-review.md
```

Possible future commit:

```text
docs(planning): add adr status review
```

---

## 10. ADR Thematic Grouping

The current ADR lineage can be grouped conceptually.

## 10.1 Governance and Repository Memory

Relevant ADRs:

```text
ADR-0001
ADR-0002
ADR-0003
ADR-0006
ADR-0021
```

Theme:

```text
Repository as governed durable memory and enforceable structure.
```

## 10.2 Access, Safety, and Clean-Room Boundaries

Relevant ADRs:

```text
ADR-0004
ADR-0005
```

Theme:

```text
Access tiers, sensitivity boundaries, and safe pattern adoption.
```

## 10.3 Foundry Execution Model

Relevant ADRs:

```text
ADR-0008
ADR-0016
ADR-0017
ADR-0018
ADR-0020
```

Theme:

```text
Foundry orchestration, work packet lifecycle, worktree execution, event routing, and directive protocols.
```

## 10.4 Persistence, Retrieval, and Language Strategy

Relevant ADRs:

```text
ADR-0013
ADR-0014
ADR-0015
ADR-0019
ADR-0011
```

Theme:

```text
Polyglot implementation, package managers, dependency pinning, persistence, and retrieval.
```

## 10.5 Evaluation and Quality

Relevant ADRs:

```text
ADR-0022
ADR-0021
```

Theme:

```text
Evaluation harness and repo contract testing.
```

## 10.6 Recommendation

A future ADR index update may include thematic grouping to improve navigability.

This review does not update the index.

---

## 11. Prohibited Automatic Actions

The following actions are explicitly prohibited by this review.

Do not automatically:

1. Rename ADR files.
2. Renumber ADR files.
3. Delete ADR files.
4. Fill ADR number gaps.
5. Create placeholder ADRs.
6. Supersede ADRs.
7. Change ADR statuses.
8. Rewrite ADR titles.
9. Rewrite ADR content.
10. Move ADR files.
11. Modify the ADR index.
12. Modify the ADR template.
13. Treat ADR-0013 as superseded.
14. Treat ADR-0015 as superseded.
15. Treat gaps as errors.
16. Treat duplicate-looking filenames as proof of duplicate decisions.
17. Rewrite Git history to hide ADR lineage.

Any of those actions requires a future explicit work packet.

---

## 12. Recommended Future ADR Maintenance Packets

## 12.1 ADR Index Gap and Status Annotation

Proposed packet:

```text
WP-0012: ADR Index Gap and Status Annotation
```

Purpose:

```text
Update docs/adr/README.md to document ADR gaps, visible ADR list, and status notes.
```

Allowed only if explicitly approved.

## 12.2 ADR-0013 and ADR-0015 Content Comparison

Proposed packet:

```text
WP-0013: Persistence ADR Overlap Review
```

Purpose:

```text
Compare ADR-0013 and ADR-0015 at content level and recommend preserve, clarify, or supersede.
```

## 12.3 ADR Status Metadata Review

Proposed packet:

```text
WP-0014: ADR Status Metadata Review
```

Purpose:

```text
Review ADR frontmatter/status consistency and recommend metadata normalization.
```

## 12.4 ADR Thematic Index Update

Proposed packet:

```text
WP-0015: ADR Thematic Index Update
```

Purpose:

```text
Improve ADR index navigation with thematic grouping, implementation relevance, and constraints.
```

---

## 13. Normalization Recommendation Summary

## 13.1 Immediate Recommendation

Do not modify ADR files yet.

The current baseline should proceed to:

```text
WP-0007: Repo Contract Testing Baseline
```

Rationale:

Repo contract testing can enforce current expectations without altering ADR history.

## 13.2 Medium-Term Recommendation

Create an ADR index update packet after repo contract baseline and context continuity baseline exist.

Rationale:

The ADR index should be improved once the baseline is verifiable and continuity artifacts exist.

## 13.3 Long-Term Recommendation

Use explicit supersession only when a decision has been reviewed and clearly replaced.

Rationale:

ADR supersession is a decision act, not a cleanup act.

---

## 14. Impact on Planning

This review affects planning in the following ways:

1. Future work packets should reference ADRs by exact current filenames or numbers.
2. Future planning should not assume missing ADR numbers are errors.
3. Future implementation should be cautious when referencing persistence/retrieval ADRs.
4. Future repo contract checks should verify present ADR files, not a perfectly contiguous ADR sequence.
5. Future ADR maintenance should be explicit and separately committed.
6. Future AI/handoff context should mention known ADR gaps and overlap if ADR context is relevant.

---

## 15. Impact on Repo Contract Testing

Repo contract testing should initially check:

1. ADR index exists.
2. ADR template exists.
3. Present ADR files exist.
4. Work-packet docs exist.
5. ADR gaps are allowed.
6. ADR-0013 and ADR-0015 both exist.
7. No required check assumes contiguous ADR numbers.
8. No required check deletes duplicate-looking files.
9. Repo contract failures are reported, not auto-fixed.

Repo contract testing should not enforce ADR normalization decisions that have not been made.

---

## 16. Impact on Context Continuity

Context continuity artifacts should mention:

1. ADRs are the current architecture decision lineage.
2. ADR number gaps exist.
3. Persistence/retrieval ADR overlap may require later review.
4. ADR normalization is review-only at this stage.
5. Future AI sessions must not rename or delete ADRs without explicit instruction.

---

## 17. ADR Normalization Review Acceptance Criteria

This ADR normalization review is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It inventories current ADR files.
3. It identifies ADR Number Gaps.
4. It identifies ADR Topic Overlap.
5. It identifies ADR index review needs.
6. It recommends not renumbering ADRs.
7. It recommends preserving current ADRs until explicit review.
8. It defines Prohibited Automatic Actions.
9. It defines future ADR maintenance packets.
10. It identifies impact on planning.
11. It identifies impact on repo contract testing.
12. It identifies impact on context continuity.
13. It does not modify any ADR file.
14. It does not modify the ADR index.
15. It does not modify the ADR template.
16. It does not claim any ADR is superseded.

---

## 18. Verification

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

Expected result:

```text
All checks pass.
```

Manual verification:

1. Confirm no files under `docs/adr/` were modified.
2. Confirm `docs/adr/README.md` was not modified.
3. Confirm `docs/adr/ADR-TEMPLATE.md` was not modified.
4. Confirm this review is recommendation-only.
5. Confirm no ADR is marked superseded by this review.

---

## 19. Recommended Atomic Commit

```bash
git add docs/planning/02-adr-normalization-review.md docs/work-packets/WP-0006-adr-index-normalization-review.md
git commit -m "docs(planning): add adr normalization review"
```

If `WP-0006` was already committed separately, use:

```bash
git add docs/planning/02-adr-normalization-review.md
git commit -m "docs(planning): add adr normalization review"
```

---

## 20. Next Step

Next create:

```text
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
```

Then execute it by creating:

```text
docs/verification/01-repo-contract-baseline.md
```
