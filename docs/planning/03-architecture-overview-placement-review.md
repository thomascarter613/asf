---
title: "Architecture Overview Placement Review"
description: "Review-only planning artifact for the current duplicate architecture overview placement in docs/product and docs/architecture, preserving both files while identifying possible interpretations, risks, options, and follow-up work."
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
  - "future-contributors"
  - "future-ai-agents"
document_type: "architecture-placement-review"
canonical: false
related_documents:
  - "README.md"
  - "tree"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/product/00-architecture-overview.md"
  - "docs/architecture/00-architecture-overview.md"
  - "docs/work-packets/WP-0010-architecture-overview-placement-review.md"
---

# Architecture Overview Placement Review

## 1. Purpose

This document reviews the current placement of architecture overview material in the Agentic Software Framework repository.

The uploaded repository tree is the active baseline.

The repository currently contains two architecture overview files:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
````

This document is review-only.

It does not:

1. Move either file.
2. Delete either file.
3. Rename either file.
4. Merge either file.
5. Declare either file canonical.
6. Supersede either file.
7. Modify either file.

The purpose is to record the ambiguity, identify possible interpretations, preserve the current baseline, and recommend explicit follow-up work.

---

## 2. Current Finding

The current baseline includes architecture overview content in two places:

| File                                            | Current State | Initial Interpretation                                                            |
| ----------------------------------------------- | ------------- | --------------------------------------------------------------------------------- |
| `docs/product/00-architecture-overview.md`      | Present       | May be a product-adjacent architecture overview or historical placement artifact. |
| `docs/architecture/00-architecture-overview.md` | Present       | May be the intended architecture directory overview.                              |

Both files are currently allowed by the accepted baseline.

Neither file should be treated as wrong merely because the other exists.

---

## 3. Baseline Rule

The uploaded repository tree is the active baseline.

Therefore:

1. Both architecture overview files are preserved.
2. Duplicate placement is a known baseline caveat.
3. No automatic cleanup is allowed.
4. Future resolution requires an explicit work packet.
5. Any canonical-source decision should be deliberate.
6. If architecture governance changes, ADR impact should be considered.

---

## 4. Possible Explanations

The duplicate placement may mean one of several things.

## 4.1 Product Architecture Summary

`docs/product/00-architecture-overview.md` may be intended as a product-facing architectural summary attached to product planning.

In this interpretation:

1. It belongs near product docs.
2. It explains architecture from a product/SRS perspective.
3. It may be less technical than the architecture directory file.
4. It may remain in place if clearly cross-referenced.

## 4.2 Canonical Architecture Overview

`docs/architecture/00-architecture-overview.md` may be intended as the canonical architecture overview.

In this interpretation:

1. Architecture content belongs under `docs/architecture/`.
2. Product docs should link to it rather than duplicate it.
3. The product copy may eventually be renamed, moved, merged, or superseded.
4. Future architecture docs should probably live under `docs/architecture/`.

## 4.3 Transitional Duplication

Both files may exist because the repository evolved through a transitional period.

In this interpretation:

1. One file may have been generated before the architecture directory was established.
2. One file may be an older copy.
3. Both may contain partially useful content.
4. A content comparison is required before action.

## 4.4 Intentional Layering

Both files may be intentional but serve different layers.

In this interpretation:

1. `docs/product/00-architecture-overview.md` explains architecture in product terms.
2. `docs/architecture/00-architecture-overview.md` explains architecture in engineering terms.
3. Both can remain if their roles are clarified.
4. Cross-links and titles may need improvement.

---

## 5. Risks of Leaving the Issue Unresolved

If both files remain without clarification:

1. Future contributors may not know which file to update.
2. Future AI sessions may cite or rely on the wrong file.
3. The files may drift.
4. Architecture decisions may be duplicated.
5. Product and engineering narratives may diverge.
6. Repo contract checks may preserve ambiguity.
7. README and current-state references may remain caveated.

Severity:

```text
Medium
```

Reason:

The issue does not block baseline stabilization, but it can create confusion before implementation.

---

## 6. Risks of Premature Cleanup

If either file is moved, deleted, merged, or renamed too quickly:

1. Useful content may be lost.
2. Git history may become harder to interpret.
3. Existing references may break.
4. Product/architecture separation may be weakened.
5. Baseline integrity may be violated.
6. ADR or planning assumptions may be accidentally contradicted.

Severity:

```text
High
```

Reason:

The repository is still in baseline stabilization. Cleanup should be deliberate and traceable.

---

## 7. Prohibited Automatic Actions

Do not automatically:

1. Delete `docs/product/00-architecture-overview.md`.
2. Delete `docs/architecture/00-architecture-overview.md`.
3. Rename either file.
4. Move either file.
5. Merge either file.
6. Declare either file canonical.
7. Supersede either file.
8. Edit either file as part of this review.
9. Update repo contract checks to require only one file.
10. Update README or current-state documents to claim the issue is resolved.

Any of those actions requires a future explicit work packet.

---

## 8. Possible Resolution Options

## 8.1 Option A — Preserve Both With Clarified Roles

Description:

```text
Keep both files and clarify that one is product-facing while the other is architecture-facing.
```

Potential follow-up actions:

1. Add cross-links.
2. Add role statements to each file.
3. Update README and context-state docs.
4. Update repo contract baseline.

Pros:

1. Preserves all content.
2. Avoids destructive cleanup.
3. Supports product and engineering audiences.

Cons:

1. Requires discipline to prevent drift.
2. Requires clear ownership rules.

## 8.2 Option B — Make `docs/architecture/` Canonical

Description:

```text
Treat docs/architecture/00-architecture-overview.md as the canonical architecture overview.
```

Potential follow-up actions:

1. Compare both files.
2. Merge unique useful content into `docs/architecture/00-architecture-overview.md`.
3. Mark product copy as superseded or redirecting.
4. Update README/current-state/repo contract.

Pros:

1. Clear technical source of truth.
2. Fits directory semantics.
3. Reduces future duplication.

Cons:

1. Product-facing architecture context may be lost unless preserved.
2. Requires careful migration.

## 8.3 Option C — Rename Product Copy as Product Architecture Brief

Description:

```text
Keep product-level architecture content but rename it to clarify scope.
```

Possible future path:

```text
docs/product/04-product-architecture-brief.md
```

Pros:

1. Preserves product architecture context.
2. Reduces filename ambiguity.
3. Keeps architecture overview canonical under `docs/architecture/`.

Cons:

1. Renaming changes baseline structure.
2. Requires reference updates and repo contract changes.

## 8.4 Option D — Merge Then Supersede One File

Description:

```text
Merge useful content into one canonical file and mark the other superseded or remove it in a controlled packet.
```

Pros:

1. Eliminates duplication.
2. Reduces maintenance burden.

Cons:

1. Most invasive.
2. Requires careful content comparison.
3. Should not happen without explicit approval.

---

## 9. Recommended Near-Term Action

Recommended next action:

```text
Do not change either architecture overview file yet.
```

Recommended follow-up:

```text
Create a future architecture overview resolution packet only after comparing file contents.
```

Suggested future packet:

```text
WP-0016: Architecture Overview Resolution
```

Purpose:

```text
Compare docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md at content level, recommend canonical placement, and define exact file edits if approved.
```

Until that packet exists, both files remain accepted baseline artifacts.

---

## 10. Impact on Repo Contract Testing

The repo contract baseline should continue to allow both files.

Current expected contract behavior:

```text
docs/product/00-architecture-overview.md must exist.
docs/architecture/00-architecture-overview.md must exist.
```

Do not change contract behavior until a resolution packet is accepted.

If future architecture resolution changes file placement, update:

```text
docs/verification/01-repo-contract-baseline.md
```

and any executable repo contract script that exists at that time.

---

## 11. Impact on Context Continuity

Future AI and handoff context should continue to mention this caveat.

Current caveat to preserve:

```text
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
```

If future resolution occurs, update:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
README.md
```

as needed.

---

## 12. Impact on Planning

Planning should treat this as a known documentation architecture issue, not a runtime blocker.

This issue should not block:

1. Executable repo contract script work.
2. ADR index annotation work.
3. Persistence ADR overlap review.
4. Evaluation harness baseline.
5. Implementation readiness planning.

This issue should block only work that depends on a single canonical architecture overview before the placement is resolved.

---

## 13. Review Findings Summary

| Finding                                                  | Status      | Recommended Handling                       |
| -------------------------------------------------------- | ----------- | ------------------------------------------ |
| Two architecture overview files exist.                   | Confirmed   | Preserve both for now.                     |
| Canonical file is not declared.                          | Confirmed   | Do not declare one in this review.         |
| Product copy may be product-facing architecture context. | Possible    | Review content later.                      |
| Architecture copy may be canonical technical overview.   | Possible    | Review content later.                      |
| Premature deletion would be risky.                       | Confirmed   | Prohibit deletion in this review.          |
| Future resolution packet is needed.                      | Recommended | Create only when ready to compare content. |

---

## 14. Architecture Overview Placement Review Acceptance Criteria

This review is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It references `docs/product/00-architecture-overview.md`.
3. It references `docs/architecture/00-architecture-overview.md`.
4. It identifies possible explanations for duplicate placement.
5. It identifies risks of leaving the issue unresolved.
6. It identifies risks of premature cleanup.
7. It defines Prohibited Automatic Actions.
8. It defines possible resolution options.
9. It recommends preserving both files for now.
10. It identifies a future resolution packet.
11. It does not declare either file canonical.
12. It does not modify either architecture overview file.

---

## 15. Verification

Run:

```bash
test -f docs/work-packets/WP-0010-architecture-overview-placement-review.md && \
test -f docs/planning/03-architecture-overview-placement-review.md && \
test -f docs/product/00-architecture-overview.md && \
test -f docs/architecture/00-architecture-overview.md && \
grep -q '^title: "WP-0010: Architecture Overview Placement Review"$' docs/work-packets/WP-0010-architecture-overview-placement-review.md && \
grep -q '^# WP-0010: Architecture Overview Placement Review$' docs/work-packets/WP-0010-architecture-overview-placement-review.md && \
grep -q '^title: "Architecture Overview Placement Review"$' docs/planning/03-architecture-overview-placement-review.md && \
grep -q '^# Architecture Overview Placement Review$' docs/planning/03-architecture-overview-placement-review.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/03-architecture-overview-placement-review.md && \
grep -q 'docs/product/00-architecture-overview.md' docs/planning/03-architecture-overview-placement-review.md && \
grep -q 'docs/architecture/00-architecture-overview.md' docs/planning/03-architecture-overview-placement-review.md && \
grep -q 'Prohibited Automatic Actions' docs/planning/03-architecture-overview-placement-review.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```

Manual verification:

1. Confirm neither architecture overview file was modified.
2. Confirm no ADRs were modified.
3. Confirm neither architecture overview file is declared canonical.
4. Confirm the review is recommendation-only.
5. Confirm no secrets or private values were introduced.

---

## 16. Recommended Atomic Commit

```bash
git add docs/planning/03-architecture-overview-placement-review.md docs/work-packets/WP-0010-architecture-overview-placement-review.md
git commit -m "docs(planning): add architecture overview placement review"
```

If `WP-0010` was already committed separately, use:

```bash
git add docs/planning/03-architecture-overview-placement-review.md
git commit -m "docs(planning): add architecture overview placement review"
```

---

## 17. Next Step

Next create:

```text
docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
```

Then execute it by creating:

```text
docs/planning/04-baseline-tree-artifact-policy.md
```