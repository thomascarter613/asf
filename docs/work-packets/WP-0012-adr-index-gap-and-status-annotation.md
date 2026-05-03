---
title: "WP-0012: ADR Index Gap and Status Annotation"
description: "Authorizes a controlled update to the ADR index to document known ADR number gaps, current ADR inventory, possible status annotations, and known ADR overlap without renaming, renumbering, deleting, rewriting, or superseding ADR files."
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
work_packet_id: "WP-0012"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0018"
  - "ADR-0021"
related_documents:
  - "README.md"
  - "tree"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md"
  - "docs/adr/README.md"
recommended_commit: "docs(adr): annotate adr index gaps and statuses"
---

# WP-0012: ADR Index Gap and Status Annotation

## 1. Purpose

This work packet governs a controlled update to the ADR index.

The uploaded repository tree is the active baseline.

The repository currently contains a mature ADR lineage with known number gaps and at least one potential topic overlap. Earlier baseline stabilization documents identified these facts but did not modify the ADR index.

This packet authorizes a future update to:

```text
docs/adr/README.md
````

The purpose of that update is to make the ADR index more useful and explicit by documenting:

1. Current ADR inventory.
2. Known ADR number gaps.
3. Known potential ADR overlap.
4. ADR status annotation guidance.
5. Rules against silent renumbering, deletion, or supersession.
6. Future ADR maintenance work.

This packet does **not** authorize editing individual ADR files.

It does **not** authorize renaming, renumbering, deleting, creating, rewriting, or superseding ADRs.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the ADR gap and overlap findings have already been documented in the baseline inventory and ADR normalization review. The next controlled step is to annotate the ADR index itself without mutating individual ADR files.
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
WP-0006: ADR Index Normalization Review
WP-0007: Repo Contract Testing Baseline
WP-0008: Context Continuity Baseline
WP-0009: Root README Baseline
WP-0011: Baseline Tree Artifact Policy
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
```

## 3.5 Related Documents

```text
README.md
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md`.
2. Authorize a later controlled edit to `docs/adr/README.md`.
3. Define what the ADR index annotation should include.
4. Document known ADR number gaps.
5. Document the known potential overlap between ADR-0013 and ADR-0015.
6. Define that ADR number gaps are accepted baseline facts.
7. Define that missing ADR numbers must not be automatically filled.
8. Define that ADR files must not be renamed or renumbered.
9. Define that individual ADR status changes are out of scope unless already clearly present in ADR metadata.
10. Define verification expectations for the ADR index update.
11. Preserve all existing ADR files unchanged.

---

## 5. Non-Goals

Out of scope:

1. Editing individual ADR files.
2. Renaming ADR files.
3. Renumbering ADR files.
4. Creating placeholder ADRs for missing numbers.
5. Filling ADR gaps.
6. Deleting ADR files.
7. Superseding ADRs.
8. Changing ADR statuses inside ADR files.
9. Rewriting ADR titles.
10. Rewriting ADR content.
11. Moving ADR files.
12. Creating new ADRs.
13. Modifying product documents.
14. Modifying architecture documents.
15. Modifying domain documents.
16. Modifying planning documents other than this work packet’s follow-up index edit.
17. Modifying verification documents.
18. Creating runtime implementation code.
19. Creating executable repo contract scripts.
20. Creating CI workflows.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. `docs/adr/README.md` already exists.
3. `docs/adr/ADR-TEMPLATE.md` already exists.
4. ADR number gaps are known and accepted as baseline facts.
5. ADR-0013 and ADR-0015 may overlap by topic.
6. ADR overlap should be documented but not resolved in this packet.
7. The ADR index should help future readers understand gaps and caveats.
8. The ADR index should not pretend the sequence is contiguous.
9. The ADR index should not silently classify missing ADR numbers without evidence.
10. Any actual ADR supersession or status change should happen in a future explicit packet.

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

1. This packet may create only `docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md`.
2. Execution of this packet may modify only `docs/adr/README.md`.
3. This packet must not modify any `docs/adr/ADR-*.md` file.
4. This packet must not modify `docs/adr/ADR-TEMPLATE.md`.
5. This packet must not create new ADR files.
6. This packet must not delete existing ADR files.
7. This packet must not require contiguous ADR numbering.
8. This packet must not resolve ADR-0013 and ADR-0015 overlap.
9. This packet must not claim supersession without a future explicit decision.

---

## 8. Risks

| Risk                                                  | Severity | Mitigation                                                                  |
| ----------------------------------------------------- | -------- | --------------------------------------------------------------------------- |
| ADR index annotation is mistaken for ADR mutation.    | Medium   | Clearly state that individual ADR files are not changed.                    |
| Missing ADR numbers are classified incorrectly.       | Medium   | Mark them as known gaps unless evidence supports a stronger classification. |
| ADR-0013 and ADR-0015 overlap is treated as resolved. | High     | Document it as a potential overlap only.                                    |
| Index becomes too verbose.                            | Low      | Keep annotation concise and link to planning review.                        |
| Future repo contract checks require contiguous ADRs.  | Medium   | Explicitly document that gaps are allowed.                                  |
| Future AI sessions rename or delete ADRs.             | High     | Add strong index warnings against silent normalization.                     |

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
This packet is ready. It creates the work packet first, then the next step may update docs/adr/README.md under this packet’s explicit authorization.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
```

## 10.2 Files to Modify During Packet Execution

```text
docs/adr/README.md
```

## 10.3 Files to Review

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
docs/planning/00-baseline-inventory.md
docs/planning/02-adr-normalization-review.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
README.md
```

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
README.md
tree
docs/adr/ADR-*.md
docs/adr/ADR-TEMPLATE.md
docs/product/*
docs/architecture/*
docs/domain/00-domain-model.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

---

## 11. Implementation Plan

1. Confirm `docs/adr/README.md` exists.
2. Confirm `docs/adr/ADR-TEMPLATE.md` exists.
3. Confirm known ADR files exist.
4. Confirm `docs/planning/02-adr-normalization-review.md` exists.
5. Create `docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md`.
6. In the follow-up execution step, update `docs/adr/README.md`.
7. Add or refine an ADR inventory section.
8. Add or refine an ADR number gap section.
9. Add or refine a known overlap section.
10. Add or refine ADR status annotation guidance.
11. Add explicit “do not renumber/delete/fill gaps” guidance.
12. Add future ADR maintenance references.
13. Run verification.
14. Commit the packet and ADR index update atomically, unless this packet is committed separately.

---

## 12. Expected ADR Index Annotation Content

The `docs/adr/README.md` update should include or preserve:

1. A list of current ADR files.
2. A statement that ADR numbers are historical identifiers.
3. A statement that ADR numbers must not be reused.
4. A statement that missing numbers are known gaps.
5. Known gaps:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

6. Known potential overlap:

```text
ADR-0013
ADR-0015
```

7. A statement that the overlap is not resolved yet.
8. A statement that future supersession requires explicit work.
9. A statement that ADR files must not be silently renamed, deleted, or renumbered.
10. A link or reference to:

```text
docs/planning/02-adr-normalization-review.md
```

---

## 13. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md` exists.
2. The packet states that the uploaded repository tree is the active baseline.
3. The packet authorizes a later controlled update to `docs/adr/README.md`.
4. The packet does not authorize editing individual ADR files.
5. The packet identifies known ADR number gaps.
6. The packet identifies the potential ADR-0013 and ADR-0015 overlap.
7. The packet defines expected ADR index annotation content.
8. The packet defines prohibited ADR mutations.
9. The packet includes verification commands.
10. No `docs/adr/ADR-*.md` files are modified by this packet-creation step.
11. No runtime implementation code is introduced.
12. No executable scripts are introduced.
13. No CI workflows are introduced.
14. No secrets or sensitive values are introduced.
15. `git diff --check` passes.

---

## 14. Verification Plan

Verification must be performed before the packet can be marked complete.

## 14.1 Packet-Creation Verification

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
grep -q '^title: "WP-0012: ADR Index Gap and Status Annotation"$' docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
grep -q '^# WP-0012: ADR Index Gap and Status Annotation$' docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
grep -q 'docs/adr/README.md' docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
grep -q 'ADR-0007' docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
grep -q 'ADR-0013' docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
grep -q 'ADR-0015' docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md && \
git diff --check
```

## 14.2 Follow-Up ADR Index Verification

Run after updating `docs/adr/README.md`:

```bash
test -f docs/adr/README.md && \
grep -q 'ADR-0007' docs/adr/README.md && \
grep -q 'ADR-0009' docs/adr/README.md && \
grep -q 'ADR-0010' docs/adr/README.md && \
grep -q 'ADR-0012' docs/adr/README.md && \
grep -q 'ADR-0013' docs/adr/README.md && \
grep -q 'ADR-0015' docs/adr/README.md && \
grep -q 'docs/planning/02-adr-normalization-review.md' docs/adr/README.md && \
git diff --check
```

## 14.3 Manual Checks

Manual verification:

1. Confirm no individual ADR files were modified.
2. Confirm `docs/adr/ADR-TEMPLATE.md` was not modified.
3. Confirm ADR index annotations are factual and conservative.
4. Confirm ADR gaps are not presented as errors.
5. Confirm ADR-0013 and ADR-0015 overlap is not resolved or superseded.
6. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

## 14.4 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the ADR index was annotated without mutating ADR decision files.
```

## 14.5 Verification Result Status

Current result:

```text
not_run
```

---

## 15. Security and Privacy Notes

Security notes:

```text
This packet creates and later authorizes documentation-only ADR index annotation. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, or sensitive operational values.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use repository-relative paths, role-based references, and baseline artifact names only.
```

Additional safety notes:

1. Do not include local absolute paths.
2. Do not paste private repository URLs.
3. Do not include logs containing credentials.
4. Do not include real secrets in examples.
5. Do not include private contact details.

---

## 16. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md`.
2. In the execution step, update `docs/adr/README.md`.

Documentation intentionally deferred:

1. Editing individual ADR files is deferred.
2. ADR status normalization inside each ADR is deferred.
3. ADR-0013 and ADR-0015 content comparison is deferred.
4. ADR supersession decisions are deferred.
5. Repo contract updates are deferred unless required after index annotation.
6. Current-state updates are deferred unless the Project Steward chooses to update continuation docs.
7. Runtime implementation is deferred.

---

## 17. Completion Record

This section must be completed before the packet is marked `complete`.

## 17.1 Completion Summary

```text
Not completed yet.
```

## 17.2 Files Created

```text
None yet.
```

## 17.3 Files Modified

```text
None yet.
```

## 17.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 17.5 Verification Commands Run

```bash
# Not run yet.
```

## 17.6 Verification Result

```text
not_run
```

## 17.7 Known Limitations

```text
None recorded yet.
```

## 17.8 Follow-up Work Created

```text
None yet.
```

## 17.9 Completion Actor

```text
Not completed yet.
```

## 17.10 Completion Date

```text
Not completed yet.
```

---

## 18. Recommended Atomic Commit

If committing the packet by itself first:

```bash
git add docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
git commit -m "docs(work-packets): add adr index annotation packet"
```

If committing this packet together with the ADR index update:

```bash
git add docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md docs/adr/README.md
git commit -m "docs(adr): annotate adr index gaps and statuses"
```

Recommended final commit message after execution:

```text
docs(adr): annotate adr index gaps and statuses
```

Commit guidance:

1. The final execution commit may include this packet and `docs/adr/README.md`.
2. Do not include individual ADR edits.
3. Do not include ADR template edits.
4. Do not include product document edits.
5. Do not include architecture document edits.
6. Do not include runtime code.
7. Do not include executable scripts.
8. Do not include CI workflows.
9. Run verification before committing.

---

## 19. Follow-up Work

Follow-up items:

1. Execute this packet by updating `docs/adr/README.md`.
2. Create `WP-0013: Persistence ADR Overlap Review`.
3. Create `WP-0014: Executable Repo Contract Script`.
4. Create `WP-0015: Evaluation Harness Baseline`.
5. Create a future packet for ADR status metadata review if needed.
6. Create a future packet for ADR-0013 and ADR-0015 content comparison.
7. Create a future packet for ADR thematic index improvement if needed.

---

## 20. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. Authorized `docs/adr/README.md` annotation is complete, or explicitly deferred.
3. All acceptance criteria are satisfied or explicitly deferred with rationale.
4. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
5. Failed verification is not hidden.
6. Completion Record is filled in.
7. Recommended commit is accurate.
8. Follow-up work is recorded.
9. The packet status is updated to `complete`.

---

## 21. Notes

```text
This packet is the first packet in the current sequence that explicitly authorizes editing an existing baseline file: docs/adr/README.md. The authorization is narrow. It permits index annotation only. It does not permit changing individual ADR files or the ADR template.
```