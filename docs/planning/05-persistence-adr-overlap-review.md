---
title: "Persistence ADR Overlap Review"
description: "Review-only planning artifact for the apparent overlap between ADR-0013 and ADR-0015 on polyglot persistence and Qdrant retrieval, preserving both ADRs while identifying likely overlap, possible distinctions, risks, future resolution options, and implementation guidance."
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
  - "documentation"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "persistence-adr-overlap-review"
canonical: false
related_documents:
  - "README.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md"
  - "docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/work-packets/WP-0013-persistence-adr-overlap-review.md"
---

# Persistence ADR Overlap Review

## 1. Purpose

This document reviews the apparent overlap between two Architecture Decision Records in the current Agentic Software Framework repository baseline:

```text
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

The uploaded repository tree is the active baseline.

Both ADR filenames reference:

```text
Polyglot Persistence and Qdrant Retrieval
```

This review preserves both ADRs.

This review does not:

1. Edit either ADR.
2. Rename either ADR.
3. Delete either ADR.
4. Merge either ADR.
5. Supersede either ADR.
6. Change either ADR’s status.
7. Update the ADR index.
8. Create a replacement ADR.
9. Begin persistence or retrieval implementation.

The purpose is to make the overlap explicit, reduce implementation ambiguity, and define future resolution options.

---

## 2. Review Boundary

This document is review-only.

It is authorized by:

```text
WP-0013: Persistence ADR Overlap Review
```

This review is intentionally conservative because ADR-0013 and ADR-0015 are part of the accepted baseline and may both contain valuable decision history.

No mutation is authorized by this document.

---

## 3. Baseline Rule

The uploaded repository tree is the active baseline.

Therefore:

1. ADR-0013 is preserved.
2. ADR-0015 is preserved.
3. Their filenames are preserved.
4. Their numbering is preserved.
5. Their content is preserved.
6. Their possible overlap remains visible.
7. Any future correction requires an explicit work packet.
8. No implementation should silently choose one ADR and ignore the other.

---

## 4. Review Method

This review uses the current baseline evidence available from:

1. ADR filenames.
2. ADR index annotation.
3. Baseline inventory.
4. ADR normalization review.
5. Domain model.
6. Planning baseline.
7. Repo contract baseline.
8. Context-continuity documents.
9. Root README caveats.

A deeper future review may compare the full text of ADR-0013 and ADR-0015 line-by-line.

Until that deeper comparison is performed, this document should be treated as a conservative overlap review, not a final supersession decision.

---

## 5. ADRs Under Review

## 5.1 ADR-0013

File:

```text
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
```

Known topic from filename and index:

```text
Polyglot Persistence and Qdrant Retrieval
```

Current baseline status:

```text
Present in baseline; possible overlap with ADR-0015.
```

Current interpretation:

```text
ADR-0013 appears to be part of the persistence and retrieval decision lineage.
```

This review does not assert whether ADR-0013 is accepted, superseded, draft, implemented, or obsolete unless the ADR file itself explicitly says so.

---

## 5.2 ADR-0015

File:

```text
docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

Known topic from filename and index:

```text
Polyglot Persistence and Qdrant Retrieval
```

Current baseline status:

```text
Present in baseline; possible overlap with ADR-0013.
```

Current interpretation:

```text
ADR-0015 appears to be part of the persistence and retrieval decision lineage.
```

This review does not assert whether ADR-0015 is accepted, superseded, draft, implemented, or obsolete unless the ADR file itself explicitly says so.

---

## 6. Apparent Overlap

The overlap is visible because both ADR filenames share the same topic:

```text
polyglot-persistence-and-qdrant-retrieval
```

The likely overlapping decision areas are:

1. Persistence strategy.
2. Polyglot storage strategy.
3. Retrieval strategy.
4. Qdrant usage.
5. Canonical repository versus vector retrieval relationship.
6. Structured versus semantic storage boundaries.
7. Future implementation implications for persistence services.
8. Retrieval quality and evaluation concerns.

This overlap has already been identified in:

```text
docs/planning/00-baseline-inventory.md
docs/planning/02-adr-normalization-review.md
docs/adr/README.md
docs/verification/01-repo-contract-baseline.md
README.md
docs/ai/00-current-state.md
```

---

## 7. Possible Relationship Categories

The relationship between ADR-0013 and ADR-0015 may fall into one of the following categories.

## 7.1 Exact Duplicate

Description:

```text
Both ADRs record the same decision with materially similar content.
```

Implication:

```text
One ADR may need to be marked superseded, duplicate, or historical in a future packet.
```

Risk:

```text
Future implementation may not know which ADR to follow.
```

Current recommendation:

```text
Do not assume exact duplication without line-by-line content comparison.
```

---

## 7.2 Revision or Refinement

Description:

```text
ADR-0015 may revise or refine ADR-0013.
```

Implication:

```text
ADR-0013 might remain as historical decision context while ADR-0015 becomes the more precise current decision.
```

Risk:

```text
If the relationship is not documented, future contributors may treat both as equally current.
```

Current recommendation:

```text
Do not mark either ADR superseded until the relationship is confirmed.
```

---

## 7.3 Split-Scope Decisions

Description:

```text
Both ADRs may share a broad title but cover different scopes.
```

Possible split examples:

1. One ADR may focus on persistence.
2. One ADR may focus on Qdrant retrieval.
3. One ADR may focus on architectural direction.
4. One ADR may focus on implementation boundaries.
5. One ADR may focus on local proof-of-concept.
6. One ADR may focus on production strategy.

Implication:

```text
Both ADRs may remain valid if their scopes are clarified.
```

Current recommendation:

```text
Preserve both and clarify their roles in a future ADR maintenance packet if split-scope is confirmed.
```

---

## 7.4 Complementary Decisions

Description:

```text
The ADRs may support the same overall persistence/retrieval theme while making complementary decisions.
```

Implication:

```text
Both ADRs may remain active and should be cross-referenced.
```

Current recommendation:

```text
If complementary, update the ADR index and possibly both ADRs in a future packet to explain the relationship.
```

---

## 7.5 Conflicting Decisions

Description:

```text
The ADRs may contain conflicting decisions about persistence, Qdrant, retrieval, language boundaries, or canonical storage.
```

Implication:

```text
A future architecture decision is needed before implementation proceeds in that area.
```

Current recommendation:

```text
If conflict is confirmed, create a dedicated resolution ADR rather than silently choosing one.
```

---

## 7.6 Historical Artifact plus Current Decision

Description:

```text
One ADR may represent earlier historical thinking, while the other may represent the current accepted strategy.
```

Implication:

```text
The historical ADR should remain preserved but may need a supersession note.
```

Current recommendation:

```text
Use explicit supersession only through a future ADR maintenance packet.
```

---

## 8. Current Conservative Classification

Current conservative classification:

```text
Unresolved potential overlap.
```

This means:

1. Both ADRs remain present.
2. Both ADRs remain protected by repo contract expectations.
3. Neither ADR is declared canonical over the other.
4. Neither ADR is superseded.
5. Neither ADR is deleted or renamed.
6. Future implementation should reference both until the relationship is clarified.

---

## 9. Decision Areas to Compare in Future Content Review

A future line-by-line comparison should evaluate whether ADR-0013 and ADR-0015 differ across the following areas.

## 9.1 Persistence Scope

Questions:

1. Does each ADR define the same persistence stores?
2. Does either ADR distinguish repository files from database records?
3. Does either ADR define structured metadata storage?
4. Does either ADR define document storage?
5. Does either ADR define relational persistence?
6. Does either ADR define local-first or production persistence boundaries?

---

## 9.2 Retrieval Scope

Questions:

1. Does each ADR define semantic retrieval?
2. Does each ADR mention Qdrant for vector retrieval?
3. Does either ADR define retrieval indexes?
4. Does either ADR define embedding records?
5. Does either ADR describe retrieval evaluation?
6. Does either ADR distinguish retrieval from canonical storage?

---

## 9.3 Canonical Source of Truth

Questions:

1. Does each ADR preserve repository files as canonical memory?
2. Does either ADR risk making Qdrant or a database canonical?
3. Does either ADR define how retrieval output should cite source files?
4. Does either ADR define source-of-truth precedence?

---

## 9.4 Polyglot Boundary

Questions:

1. Does each ADR assign responsibilities by language?
2. Does either ADR define Python responsibilities?
3. Does either ADR define TypeScript responsibilities?
4. Does either ADR define Rust or Go responsibilities?
5. Does either ADR conflict with ADR-0014 or ADR-0019?

---

## 9.5 Implementation Readiness

Questions:

1. Does either ADR imply implementation already exists?
2. Does either ADR define future implementation phases?
3. Does either ADR depend on package setup that does not exist yet?
4. Does either ADR depend on runtime modules that do not exist yet?
5. Does either ADR require repo contract or evaluation work first?

---

## 9.6 Evaluation and Quality

Questions:

1. Does either ADR define retrieval quality metrics?
2. Does either ADR mention evaluation harness requirements?
3. Does either ADR connect to ADR-0022?
4. Does either ADR require regression testing for retrieval?
5. Does either ADR require context-continuity evaluation?

---

## 10. Risks of Leaving the Overlap Unresolved

If the overlap remains unresolved:

1. Future implementation may reference the wrong ADR.
2. Persistence boundaries may be unclear.
3. Qdrant may be over- or under-prioritized.
4. Repository-as-canonical-memory rules may be misapplied.
5. Retrieval implementation may begin before source-of-truth rules are clear.
6. Future repo contract checks may preserve ambiguity.
7. Future context-continuity artifacts may summarize the persistence strategy inconsistently.
8. Developers may create storage abstractions before the decision lineage is clear.

Severity:

```text
Medium to High
```

Reason:

Persistence and retrieval are central architectural areas. Ambiguity here can affect system shape, data ownership, tooling, evaluation, and future implementation sequence.

---

## 11. Risks of Premature Resolution

If one ADR is prematurely deleted, renamed, merged, or superseded:

1. Decision history may be lost.
2. Useful rationale may be removed.
3. Git history may become harder to understand.
4. Future work may lose context about why a later strategy was chosen.
5. Repo contract assumptions may break.
6. ADR index annotations may become misleading.
7. Implementation may proceed on an incomplete understanding.

Severity:

```text
High
```

Reason:

ADR mutation changes decision history. It should only happen after content review and explicit approval.

---

## 12. Prohibited Automatic Actions

Do not automatically:

1. Delete ADR-0013.
2. Delete ADR-0015.
3. Rename ADR-0013.
4. Rename ADR-0015.
5. Renumber either ADR.
6. Merge either ADR.
7. Rewrite either ADR.
8. Mark either ADR superseded.
9. Change either ADR’s status.
10. Create a replacement ADR.
11. Update the ADR index to resolve the overlap.
12. Update repo contract checks to require only one ADR.
13. Start persistence implementation by silently choosing one ADR.
14. Treat filename duplication as proof of duplicate content.
15. Treat baseline presence as proof of implementation.

Any of these actions requires a future explicit work packet.

---

## 13. Possible Future Resolution Options

## 13.1 Option A — Preserve Both as Complementary

Description:

```text
Keep both ADRs and clarify that they cover different aspects of persistence and retrieval.
```

Potential future actions:

1. Update ADR index with relationship note.
2. Add cross-references to both ADRs.
3. Clarify implementation guidance.
4. Keep both files in repo contract checks.

Pros:

1. Preserves all decision history.
2. Avoids destructive cleanup.
3. Supports split-scope architecture.

Cons:

1. Requires clear relationship annotation.
2. Both files must remain maintained.

---

## 13.2 Option B — Mark One as Superseded

Description:

```text
One ADR is preserved as historical but marked superseded by the other.
```

Potential future actions:

1. Update superseded ADR status.
2. Update current ADR status.
3. Update ADR index.
4. Update repo contract expectations.
5. Update context-continuity docs.
6. Preserve both files.

Pros:

1. Clarifies current decision.
2. Preserves history.
3. Avoids deletion.

Cons:

1. Requires confidence from content comparison.
2. Requires careful status updates.

---

## 13.3 Option C — Create a New Superseding ADR

Description:

```text
Create a new ADR that resolves the overlap and supersedes or reconciles ADR-0013 and ADR-0015.
```

Potential future actions:

1. Create new ADR with next appropriate number.
2. Explicitly reference ADR-0013 and ADR-0015.
3. State what remains valid.
4. State what is superseded.
5. Update ADR index.
6. Update repo contract and context docs.

Pros:

1. Cleanest way to resolve genuine conflict.
2. Preserves both historical ADRs.
3. Creates a clear current architecture decision.

Cons:

1. Adds another ADR.
2. Requires careful drafting.
3. May be unnecessary if one ADR already resolves the relationship.

---

## 13.4 Option D — Rename for Scope Clarity

Description:

```text
Keep both ADRs but rename one or both to clarify their distinct scopes.
```

Potential future actions:

1. Rename files.
2. Update ADR index.
3. Update references.
4. Update repo contract checks.
5. Preserve Git history.

Pros:

1. Reduces filename ambiguity.
2. May be appropriate if content is distinct.

Cons:

1. File renaming changes baseline structure.
2. Requires many reference updates.
3. Should not happen until scope distinction is proven.

---

## 13.5 Option E — Leave Unresolved Temporarily

Description:

```text
Preserve both ADRs and carry the caveat forward.
```

Pros:

1. Safest immediate action.
2. Avoids premature mutation.
3. Does not block unrelated stabilization work.

Cons:

1. Persistence implementation remains partially blocked.
2. Future sessions must keep caveat visible.
3. Repo contract checks continue preserving both files.

---

## 14. Recommendation

Recommended near-term action:

```text
Preserve both ADR-0013 and ADR-0015 unchanged.
```

Recommended implementation guidance:

```text
Do not begin runtime persistence or retrieval implementation until the relationship between ADR-0013 and ADR-0015 is either resolved or explicitly accepted as complementary.
```

Recommended future action:

```text
Create a future ADR resolution packet only after comparing the full text of both ADRs.
```

Suggested future packet:

```text
WP-0016: Persistence ADR Resolution
```

Possible scope:

1. Compare full ADR contents.
2. Determine exact relationship.
3. Decide preserve, cross-reference, supersede, rename, or replace.
4. Update ADR index.
5. Update affected ADR files if authorized.
6. Update repo contract baseline.
7. Update context-continuity docs.
8. Update implementation planning.

---

## 15. Impact on Repo Contract Testing

Current repo contract behavior should remain:

```text
ADR-0013 must exist.
ADR-0015 must exist.
Known overlap is allowed.
Contiguous ADR numbering is not required.
```

Repo contract tests should not:

1. Fail because both ADRs exist.
2. Fail because the filenames overlap.
3. Delete either ADR.
4. Require only one persistence ADR.
5. Decide supersession.

Future executable repo contract scripts should preserve both ADRs until an explicit resolution packet changes the contract.

---

## 16. Impact on Context Continuity

Context-continuity artifacts should continue to preserve this caveat:

```text
ADR-0013 and ADR-0015 appear to overlap by topic.
```

Future sessions should:

1. Read both ADRs before persistence/retrieval implementation.
2. Avoid relying on only one ADR.
3. Avoid claiming the relationship is resolved.
4. Carry this review forward as planning context.
5. Use a future resolution packet before mutation.

If the relationship is resolved later, update:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
README.md
docs/adr/README.md
docs/verification/01-repo-contract-baseline.md
```

as needed.

---

## 17. Impact on Future Implementation

Persistence and retrieval implementation should not proceed from an ambiguous ADR basis.

Before implementing persistence/retrieval code, the project should have one of:

1. A confirmed complementary interpretation of ADR-0013 and ADR-0015.
2. A supersession decision.
3. A new resolving ADR.
4. An implementation-readiness note that explicitly states how both ADRs should be applied.

Until then, implementation should remain focused on baseline stabilization, repo contract scripting, evaluation harness planning, and other non-conflicting foundation work.

---

## 18. Review Findings Summary

| Finding | Status | Recommendation |
| --- | --- | --- |
| ADR-0013 exists. | Confirmed | Preserve. |
| ADR-0015 exists. | Confirmed | Preserve. |
| Both filenames share the same persistence/retrieval topic. | Confirmed | Treat as potential overlap. |
| Relationship is unresolved. | Confirmed | Do not supersede either ADR yet. |
| Content-level comparison is still needed for final resolution. | Confirmed | Perform in future resolution packet. |
| Runtime persistence implementation would be risky before clarification. | Confirmed | Defer or proceed only with explicit caveat. |
| Repo contract should preserve both files. | Confirmed | Keep both required for now. |

---

## 19. Persistence ADR Overlap Review Acceptance Criteria

This review is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It references ADR-0013.
3. It references ADR-0015.
4. It identifies the apparent overlap.
5. It identifies possible relationship categories.
6. It identifies decision areas for future comparison.
7. It identifies risks of unresolved overlap.
8. It identifies risks of premature resolution.
9. It defines Prohibited Automatic Actions.
10. It defines possible future resolution options.
11. It recommends preserving both ADRs for now.
12. It explains repo contract impact.
13. It explains context-continuity impact.
14. It explains future implementation impact.
15. It does not modify either ADR.
16. It does not modify the ADR index.
17. It does not claim either ADR is superseded.

---

## 20. Verification

Run:

```bash
test -f docs/planning/05-persistence-adr-overlap-review.md && \
test -f docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md && \
test -f docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md && \
grep -q '^title: "Persistence ADR Overlap Review"$' docs/planning/05-persistence-adr-overlap-review.md && \
grep -q '^# Persistence ADR Overlap Review$' docs/planning/05-persistence-adr-overlap-review.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/05-persistence-adr-overlap-review.md && \
grep -q 'ADR-0013' docs/planning/05-persistence-adr-overlap-review.md && \
grep -q 'ADR-0015' docs/planning/05-persistence-adr-overlap-review.md && \
grep -q 'Prohibited Automatic Actions' docs/planning/05-persistence-adr-overlap-review.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```

Manual verification:

1. Confirm ADR-0013 was not modified.
2. Confirm ADR-0015 was not modified.
3. Confirm `docs/adr/README.md` was not modified by this packet.
4. Confirm `docs/adr/ADR-TEMPLATE.md` was not modified.
5. Confirm the review does not declare either ADR superseded.
6. Confirm the review does not direct immediate ADR deletion, renaming, or merging.

---

## 21. Recommended Atomic Commit

```bash
git add docs/planning/05-persistence-adr-overlap-review.md docs/work-packets/WP-0013-persistence-adr-overlap-review.md
git commit -m "docs(planning): add persistence adr overlap review"
```

If `WP-0013` was already committed separately, use:

```bash
git add docs/planning/05-persistence-adr-overlap-review.md
git commit -m "docs(planning): add persistence adr overlap review"
```

---

## 22. Next Step

Next create:

```text
docs/work-packets/WP-0014-executable-repo-contract-script.md
```

Then execute it by creating an executable local repo contract script, likely at:

```text
tools/check-repo-contract.sh
```

or another explicitly approved path.
````