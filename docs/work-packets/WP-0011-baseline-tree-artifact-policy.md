---
title: "WP-0011: Baseline Tree Artifact Policy"
description: "Defines a review-only policy packet for the root tree baseline artifact, preserving it as part of the accepted uploaded repository baseline while evaluating whether it should remain at root, move under docs, be regenerated, or be superseded later."
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
  - "documentation"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0011"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0003"
  - "ADR-0018"
  - "ADR-0021"
related_documents:
  - "README.md"
  - "tree"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0011-baseline-tree-artifact-policy.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
recommended_commit: "docs(planning): add baseline tree artifact policy"
---

# WP-0011: Baseline Tree Artifact Policy

## 1. Purpose

This work packet governs creation of a baseline tree artifact policy for the current uploaded repository baseline.

The repository currently contains a root-level file named:

```text
tree
````

The uploaded repository tree is the active baseline.

The `tree` file has been treated as a captured baseline artifact during stabilization. It records or represents the repository shape that the Project Steward accepted as the new baseline.

This packet does **not** authorize deleting, moving, renaming, regenerating, or replacing the `tree` file.

This packet authorizes creation of:

```text
docs/planning/04-baseline-tree-artifact-policy.md
```

The policy should answer:

1. What is the current role of the root `tree` file?
2. Why has it been preserved?
3. What risks does it create?
4. What future options exist?
5. What actions are prohibited without explicit approval?
6. How should future repo contract checks treat it?
7. When should it be moved, regenerated, superseded, or removed?

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the root tree file has been repeatedly identified as a known baseline caveat, the baseline has now been documented, and the scope is limited to policy review without changing the artifact itself.
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
WP-0002: Baseline Inventory and Consistency Review
WP-0004: Planning Baseline
WP-0005: Repository Verification Baseline
WP-0007: Repo Contract Testing Baseline
WP-0008: Context Continuity Baseline
WP-0009: Root README Baseline
WP-0010: Architecture Overview Placement Review
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0003: Repository Topology — Bounded Monorepos Over Monolith or Full Fragmentation
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
```

## 3.5 Related Documents

```text
README.md
tree
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/03-architecture-overview-placement-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0011-baseline-tree-artifact-policy.md`.
2. Create `docs/planning/04-baseline-tree-artifact-policy.md`.
3. Record that the root `tree` file exists.
4. Record that the root `tree` file is currently treated as a captured baseline artifact.
5. Identify the benefits of preserving it.
6. Identify the risks of leaving it at the repository root.
7. Identify the risks of deleting or moving it prematurely.
8. Define possible future options for the artifact.
9. Define prohibited automatic actions.
10. Define recommended near-term handling.
11. Define future repo contract implications.
12. Preserve the `tree` file unchanged.

---

## 5. Non-Goals

Out of scope:

1. Editing the root `tree` file.
2. Moving the root `tree` file.
3. Deleting the root `tree` file.
4. Renaming the root `tree` file.
5. Regenerating the root `tree` file.
6. Replacing the root `tree` file with a new tree output.
7. Creating a generated baseline snapshot process.
8. Creating executable repo contract scripts.
9. Creating CI workflows.
10. Creating package-manager files.
11. Creating runtime implementation code.
12. Modifying `README.md`.
13. Modifying current-state or context-source files.
14. Modifying repo contract baseline.
15. Modifying verification baseline.
16. Modifying ADRs.
17. Modifying architecture or product documents.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. The root `tree` file was retained because it represented the accepted baseline state.
3. The `tree` file may become stale as the repository evolves.
4. The `tree` file may be useful as a historical snapshot.
5. The `tree` file may not belong at repository root long-term.
6. Moving or deleting it without policy would weaken baseline traceability.
7. A future packet may move it under `docs/`, `.artifacts/`, or another approved location.
8. A future packet may replace it with a generated repository inventory process.
9. Current repo contract expectations allow the root `tree` file.
10. Any change to the artifact should update verification, repo contract, current-state, and README references.

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

1. This packet may create `docs/planning/04-baseline-tree-artifact-policy.md`.
2. This packet may create only this work packet and the baseline tree artifact policy.
3. This packet must not modify the root `tree` file.
4. This packet must not move the root `tree` file.
5. This packet must not delete the root `tree` file.
6. This packet must not regenerate the root `tree` file.
7. This packet must not modify verification or repo contract documents.
8. This packet must not modify current-state or README documents.
9. This packet must not create executable scripts or CI workflows.

---

## 8. Risks

| Risk                                                         | Severity | Mitigation                                                         |
| ------------------------------------------------------------ | -------- | ------------------------------------------------------------------ |
| The root `tree` file becomes stale.                          | Medium   | Treat it as historical baseline unless explicitly regenerated.     |
| Future readers confuse the `tree` file with live repo state. | Medium   | Create policy explaining its role.                                 |
| The file is deleted prematurely.                             | Medium   | This packet explicitly forbids deletion.                           |
| The file remains at root forever without purpose.            | Low      | Recommend future artifact-location review if needed.               |
| Repo contract checks overfit to a stale tree artifact.       | Medium   | Contract should check presence only until a future policy changes. |
| A regenerated tree overwrites historical baseline evidence.  | Medium   | Forbid regeneration in this packet.                                |
| The root artifact clutters repository entry point.           | Low      | Defer movement decision to a future explicit packet.               |

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
This packet is ready for execution. It creates a policy artifact only and does not modify the tree file or any existing baseline artifact.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
docs/planning/04-baseline-tree-artifact-policy.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
README.md
tree
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/work-packets/README.md
```

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
README.md
tree
docs/adr/*
docs/product/*
docs/architecture/*
docs/domain/00-domain-model.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
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
```

---

## 11. Implementation Plan

1. Confirm the root `tree` file exists.
2. Confirm baseline inventory exists.
3. Confirm planning baseline exists.
4. Confirm repo contract baseline exists.
5. Confirm current-state and README mention the `tree` caveat.
6. Create `docs/work-packets/WP-0011-baseline-tree-artifact-policy.md`.
7. Create `docs/planning/04-baseline-tree-artifact-policy.md`.
8. In the policy artifact, state that the uploaded repository tree is the active baseline.
9. Record the current role of the root `tree` file.
10. Record preservation rationale.
11. Record risks and future options.
12. Record prohibited automatic actions.
13. Record recommended near-term policy.
14. Run verification.
15. Commit this packet and policy artifact atomically, unless this packet is committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0011-baseline-tree-artifact-policy.md` exists.
2. `docs/planning/04-baseline-tree-artifact-policy.md` exists.
3. The policy artifact includes YAML frontmatter.
4. The policy artifact includes `# Baseline Tree Artifact Policy`.
5. The policy states that the uploaded repository tree is the active baseline.
6. The policy references the root `tree` file.
7. The policy explains the current role of the root `tree` file.
8. The policy identifies risks of staleness.
9. The policy identifies risks of premature deletion or movement.
10. The policy defines prohibited automatic actions.
11. The policy defines future options.
12. The policy recommends preserving the file for now.
13. The root `tree` file is not modified.
14. No existing ADRs are modified.
15. No product or architecture documents are modified.
16. No runtime implementation code is introduced.
17. No executable scripts are introduced.
18. No CI workflows are introduced.
19. No secrets or sensitive values are introduced.
20. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0011-baseline-tree-artifact-policy.md && \
test -f docs/planning/04-baseline-tree-artifact-policy.md && \
test -f tree && \
grep -q '^title: "WP-0011: Baseline Tree Artifact Policy"$' docs/work-packets/WP-0011-baseline-tree-artifact-policy.md && \
grep -q '^# WP-0011: Baseline Tree Artifact Policy$' docs/work-packets/WP-0011-baseline-tree-artifact-policy.md && \
grep -q '^title: "Baseline Tree Artifact Policy"$' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q '^# Baseline Tree Artifact Policy$' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q 'root `tree` file' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q 'Prohibited Automatic Actions' docs/planning/04-baseline-tree-artifact-policy.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the root `tree` file was not modified.
2. Confirm the root `tree` file was not moved.
3. Confirm the root `tree` file was not deleted.
4. Confirm no ADRs were modified.
5. Confirm no product or architecture documents were modified.
6. Confirm the policy does not require immediate cleanup.
7. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the artifact is policy-only.
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
This packet creates planning documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, or sensitive operational values.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use repository-relative paths, role-based references, and baseline artifact names only.
```

Additional safety notes:

1. Do not include local absolute paths.
2. Do not paste local command output if it includes private machine information.
3. Do not include private repository URLs.
4. Do not include credentials or tokens in examples.
5. Do not regenerate the tree output if doing so would expose files that should not be in context.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `docs/planning/04-baseline-tree-artifact-policy.md`.
2. Create `docs/work-packets/WP-0011-baseline-tree-artifact-policy.md`.

Documentation intentionally deferred:

1. Moving the `tree` file is deferred.
2. Regenerating the `tree` file is deferred.
3. Replacing the `tree` file with a generated inventory is deferred.
4. Updating repo contract checks is deferred.
5. Updating README/current-state is deferred unless the policy later changes the artifact’s role.
6. Creating executable repo contract scripts is deferred.
7. Runtime implementation is deferred.

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
git add docs/work-packets/WP-0011-baseline-tree-artifact-policy.md docs/planning/04-baseline-tree-artifact-policy.md
git commit -m "docs(planning): add baseline tree artifact policy"
```

Commit message:

```text
docs(planning): add baseline tree artifact policy
```

Commit guidance:

1. The commit should include only this packet and the tree artifact policy.
2. Do not include edits to the root `tree` file.
3. Do not include ADR edits.
4. Do not include product document edits.
5. Do not include architecture document edits.
6. Do not include README edits.
7. Do not include current-state edits.
8. Do not include repo contract edits.
9. Do not include executable scripts.
10. Do not include CI workflows.
11. Do not include runtime implementation code.
12. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/planning/04-baseline-tree-artifact-policy.md`.
2. Create `WP-0012: ADR Index Gap and Status Annotation`.
3. Create `WP-0013: Persistence ADR Overlap Review`.
4. Create `WP-0014: Executable Repo Contract Script`.
5. Create `WP-0015: Evaluation Harness Baseline`.
6. Create a future packet if the Project Steward chooses to move, regenerate, supersede, or remove the root `tree` file.

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
This packet treats the root tree file as a historical baseline artifact. It intentionally avoids changing the file until the Project Steward explicitly approves a policy change through a later work packet.
```