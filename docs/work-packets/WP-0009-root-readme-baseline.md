---
title: "WP-0009: Root README Baseline"
description: "Creates the root README baseline for the uploaded repository tree, providing a clear repository entry point while preserving the existing baseline, ADR lineage, work-packet system, planning artifacts, verification artifacts, and context-continuity documents."
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
work_packet_id: "WP-0009"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0003"
  - "ADR-0006"
  - "ADR-0018"
  - "ADR-0021"
related_documents:
  - "tree"
  - "docs/ai/00-current-state.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0008-context-continuity-baseline.md"
  - "docs/adr/README.md"
affected_files:
  - "docs/work-packets/WP-0009-root-readme-baseline.md"
  - "README.md"
recommended_commit: "docs(project): add root readme baseline"
---

# WP-0009: Root README Baseline

## 1. Purpose

This work packet governs creation of the root `README.md` baseline for the current uploaded repository tree.

The repository now has:

1. Root governance files.
2. Product documents.
3. Architecture documents.
4. ADR index and ADR lineage.
5. Baseline inventory.
6. Domain model baseline.
7. Planning baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Work-packet governance.
11. Context-continuity artifacts.

The uploaded baseline did **not** include a root `README.md`.

Now that the baseline has been stabilized and documented, the repository needs a clear root entry point for humans, future contributors, and future AI sessions.

This packet authorizes creation of:

```text
README.md
````

The root README must orient readers without silently changing the repository baseline.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the baseline has been inventoried, planning and verification baselines exist, context-continuity artifacts exist, and README absence has been repeatedly identified as a known baseline caveat.
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
WP-0006: ADR Index Normalization Review
WP-0007: Repo Contract Testing Baseline
WP-0008: Context Continuity Baseline
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0003: Repository Topology — Bounded Monorepos Over Monolith or Full Fragmentation
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
```

## 3.5 Related Planning, Domain, Verification, and AI Documents

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0009-root-readme-baseline.md`.
2. Create root `README.md`.
3. Explain the project at a high level.
4. State that the uploaded repository tree is the active baseline.
5. State that the repository is in baseline stabilization.
6. Explain that runtime implementation has not started.
7. Point readers to current-state and context-source documents.
8. Point readers to product documents.
9. Point readers to architecture documents.
10. Point readers to ADR documents.
11. Point readers to work-packet documents.
12. Point readers to planning, domain, and verification baselines.
13. Preserve known baseline caveats.
14. Explain the next recommended work.
15. Avoid claiming scripts, CI, package setup, or runtime implementation exist.

---

## 5. Non-Goals

Out of scope:

1. Runtime implementation code.
2. Package-manager setup.
3. CI workflow creation.
4. Verification script creation.
5. Repo contract script creation.
6. ADR edits.
7. ADR renaming.
8. ADR renumbering.
9. ADR gap filling.
10. ADR supersession.
11. Product document edits.
12. Architecture document edits.
13. Domain model edits.
14. Planning document edits.
15. Verification document edits.
16. Context-continuity document edits.
17. Removing the root `tree` file.
18. Moving architecture overview files.
19. Changing license terms.
20. Creating a public documentation site.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. The absence of `README.md` was a known baseline caveat.
3. Adding a root README is now appropriate because context-continuity, planning, and verification baselines exist.
4. The README should be an orientation document, not an implementation claim.
5. The README should link readers to repository source-of-truth documents.
6. The README should preserve known caveats.
7. The README should not replace `docs/ai/00-current-state.md`.
8. The README should not replace the work-packet index.
9. The README should not modify ADR status or interpretation.
10. The README should make clear that executable repo contract scripts do not exist yet.

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

1. This packet may create `README.md`.
2. This packet may create only this work packet and the root README.
3. This packet must not modify existing ADRs.
4. This packet must not modify product documents.
5. This packet must not modify architecture documents.
6. This packet must not modify domain, planning, verification, or AI documents.
7. This packet must not create executable scripts.
8. This packet must not create CI workflows.
9. This packet must not create runtime implementation code.
10. This packet must not claim implementation, scripts, package setup, or CI exist.

---

## 8. Risks

| Risk                                                      | Severity | Mitigation                                                         |
| --------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| README overclaims implementation maturity.                | High     | State clearly that runtime implementation has not started.         |
| README silently replaces current-state document.          | Medium   | Link to `docs/ai/00-current-state.md` as the continuation source.  |
| README hides known baseline caveats.                      | Medium   | Include a Known Baseline Caveats section.                          |
| README implies root README was part of uploaded baseline. | Low      | State that README is now being added after baseline stabilization. |
| README becomes too large.                                 | Medium   | Keep it orienting and link to deeper docs.                         |
| README duplicates every document.                         | Low      | Summarize and point to canonical docs.                             |
| README claims repo contract scripts exist.                | Medium   | State that repo contract baseline is documentation-level only.     |

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
This packet is ready for execution. It creates root orientation documentation only and does not modify existing baseline artifacts.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0009-root-readme-baseline.md
README.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/work-packets/README.md
docs/adr/README.md
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
docs/planning/02-adr-normalization-review.md
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
```

---

## 11. Implementation Plan

1. Confirm `docs/ai/00-current-state.md` exists.
2. Confirm `docs/ai/02-context-source-rules.md` exists.
3. Confirm `docs/planning/01-planning-baseline.md` exists.
4. Confirm `docs/verification/01-repo-contract-baseline.md` exists.
5. Confirm current work-packet system exists.
6. Create `docs/work-packets/WP-0009-root-readme-baseline.md`.
7. Create root `README.md`.
8. In the README, explain the project purpose.
9. In the README, state the active baseline rule.
10. In the README, state the current phase.
11. In the README, link to where to start reading.
12. In the README, summarize known baseline caveats.
13. In the README, summarize verification and implementation status.
14. In the README, define next recommended work.
15. Run verification.
16. Commit this packet and README atomically, unless this packet is committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0009-root-readme-baseline.md` exists.
2. `README.md` exists.
3. `README.md` includes `# Agentic Software Framework`.
4. `README.md` states that the uploaded repository tree is the active baseline.
5. `README.md` states that the repository is in baseline stabilization.
6. `README.md` states that runtime implementation has not started.
7. `README.md` links to or references `docs/ai/00-current-state.md`.
8. `README.md` links to or references `docs/ai/02-context-source-rules.md`.
9. `README.md` links to or references `docs/work-packets/README.md`.
10. `README.md` links to or references `docs/planning/01-planning-baseline.md`.
11. `README.md` links to or references `docs/verification/01-repo-contract-baseline.md`.
12. `README.md` mentions known baseline caveats.
13. `README.md` does not claim executable repo contract tests exist.
14. `README.md` does not claim CI exists.
15. `README.md` does not claim runtime code exists.
16. No existing ADRs are modified.
17. No product or architecture documents are modified.
18. No runtime implementation code is introduced.
19. No executable scripts are introduced.
20. No CI workflows are introduced.
21. No secrets or sensitive values are introduced.
22. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0009-root-readme-baseline.md && \
test -f README.md && \
grep -q '^title: "WP-0009: Root README Baseline"$' docs/work-packets/WP-0009-root-readme-baseline.md && \
grep -q '^# WP-0009: Root README Baseline$' docs/work-packets/WP-0009-root-readme-baseline.md && \
grep -q '^# Agentic Software Framework$' README.md && \
grep -q 'The uploaded repository tree is the active baseline' README.md && \
grep -q 'Baseline Stabilization' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'docs/ai/00-current-state.md' README.md && \
grep -q 'docs/ai/02-context-source-rules.md' README.md && \
grep -q 'docs/work-packets/README.md' README.md && \
grep -q 'docs/planning/01-planning-baseline.md' README.md && \
grep -q 'docs/verification/01-repo-contract-baseline.md' README.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the README is orientation-only.
2. Confirm the README does not claim runtime implementation exists.
3. Confirm the README does not claim executable repo contract tests exist.
4. Confirm the README preserves known baseline caveats.
5. Confirm the README points readers to current-state and context-source rules.
6. Confirm no existing ADRs were modified.
7. Confirm no product or architecture documents were modified.
8. Confirm no secrets, credentials, tokens, or private operational values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the root README accurately orients readers without changing the accepted baseline.
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
This packet creates repository orientation documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, or sensitive operational values.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use repository-relative paths, role-based references, and baseline artifact names only.
```

Additional safety notes:

1. Do not include `.env` values.
2. Do not include API keys.
3. Do not include private repository URLs.
4. Do not include local filesystem paths containing private information.
5. Do not include sensitive logs.
6. Do not include private personal contact details.
7. Do not include credentials in examples.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `README.md`.
2. Create `docs/work-packets/WP-0009-root-readme-baseline.md`.

Documentation intentionally deferred:

1. Architecture overview placement review is deferred.
2. Baseline tree artifact policy is deferred.
3. ADR index gap/status annotation is deferred.
4. Persistence ADR overlap review is deferred.
5. Executable repo contract script is deferred.
6. Evaluation harness baseline is deferred.
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
git add docs/work-packets/WP-0009-root-readme-baseline.md README.md
git commit -m "docs(project): add root readme baseline"
```

Commit message:

```text
docs(project): add root readme baseline
```

Commit guidance:

1. The commit should include only this packet and the root README.
2. Do not include ADR edits.
3. Do not include product document edits.
4. Do not include architecture document edits.
5. Do not include domain model edits.
6. Do not include planning document edits.
7. Do not include verification document edits.
8. Do not include AI/context-continuity document edits.
9. Do not include executable scripts.
10. Do not include CI workflows.
11. Do not include runtime implementation code.
12. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `README.md`.
2. Create `WP-0010: Architecture Overview Placement Review`.
3. Create `WP-0011: Baseline Tree Artifact Policy`.
4. Create `WP-0012: ADR Index Gap and Status Annotation`.
5. Create `WP-0013: Persistence ADR Overlap Review`.
6. Create `WP-0014: Executable Repo Contract Script`.
7. Create `WP-0015: Evaluation Harness Baseline`.

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
This packet adds the root README after the repository has enough baseline documentation to describe itself accurately. It intentionally preserves all known baseline caveats rather than presenting the repository as cleaner or more implemented than it is.
```