---
title: "WP-0005: Repository Verification Baseline"
description: "Creates the initial repository verification baseline for the uploaded repository tree, defining local checks for required files, baseline documentation, work-packet artifacts, and whitespace safety before repo contract testing begins."
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
work_packet_id: "WP-0005"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0018"
  - "ADR-0021"
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/domain/00-domain-model.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/adr/README.md"
affected_files:
  - "docs/work-packets/WP-0005-repository-verification-baseline.md"
  - "docs/verification/00-verification-baseline.md"
recommended_commit: "docs(verification): add repository verification baseline"
---

# WP-0005: Repository Verification Baseline

## 1. Purpose

This work packet governs creation of the initial repository verification baseline for the current uploaded repository tree.

The repository now has baseline inventory, domain model, planning baseline, and work-packet governance. Before runtime implementation begins, the project needs a documented verification baseline that defines what should be checked locally.

This packet authorizes creation of:

```text
docs/verification/00-verification-baseline.md
````

This packet does not yet create repo contract test scripts. It defines the verification baseline that repo contract testing can later implement and expand.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the repository baseline has been inventoried, the domain model and planning baseline exist, and the next needed stabilization step is explicit local verification guidance.
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
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
```

## 3.5 Related Product, Domain, and Planning Documents

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/domain/00-domain-model.md
docs/adr/README.md
docs/work-packets/README.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0005-repository-verification-baseline.md`.
2. Create `docs/verification/00-verification-baseline.md`.
3. Define the purpose of repository verification.
4. Define baseline file existence checks.
5. Define baseline directory checks.
6. Define ADR checks.
7. Define work-packet checks.
8. Define planning and domain document checks.
9. Define whitespace safety checks.
10. Define manual review checks.
11. Define what is intentionally not checked yet.
12. Define follow-up work for repo contract testing.
13. Preserve the uploaded baseline without renaming or deleting files.

---

## 5. Non-Goals

Out of scope:

1. Creating executable repo contract scripts.
2. Creating CI workflows.
3. Creating package-manager files.
4. Creating runtime implementation code.
5. Creating database schema.
6. Creating API contracts.
7. Creating Qdrant collections.
8. Creating event bus code.
9. Creating directive compiler code.
10. Creating evaluation harness code.
11. Renaming ADRs.
12. Renumbering ADRs.
13. Filling ADR gaps.
14. Removing duplicate ADR topics.
15. Moving architecture overview files.
16. Removing the `tree` file.
17. Adding root `README.md`.
18. Modifying existing baseline documents.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. Verification should begin as documentation and shell-checkable commands.
3. Repo contract testing will come after this verification baseline.
4. The baseline may not yet have a `tools/` directory.
5. The baseline may not yet have CI.
6. The baseline may not yet have package-manager files.
7. The verification baseline should not require runtime tooling that does not exist yet.
8. `git diff --check` is available.
9. Required-file checks can be expressed with POSIX-compatible shell commands.
10. This packet should not introduce scripts until the project explicitly creates a tools/verification work packet.

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

1. This packet may create `docs/verification/00-verification-baseline.md`.
2. This packet may create only this work packet and the verification baseline.
3. This packet must not modify existing ADRs.
4. This packet must not modify product documents.
5. This packet must not modify architecture documents.
6. This packet must not modify domain or planning baseline documents.
7. This packet must not create executable scripts.
8. This packet must not create CI workflows.
9. This packet must not claim repo contract testing exists yet.

---

## 8. Risks

| Risk                                                                      | Severity | Mitigation                                                              |
| ------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- |
| Verification baseline is mistaken for executable repo contract tests.     | Medium   | State clearly that this document precedes repo contract implementation. |
| Checks overfit to current baseline and block legitimate future evolution. | Medium   | Treat checks as baseline checks, not immutable product law.             |
| Verification ignores ADR and work-packet files.                           | High     | Include ADR/work-packet presence checks.                                |
| Verification claims tooling exists before scripts exist.                  | Medium   | Keep this packet documentation-only.                                    |
| Runtime implementation begins before checks exist.                        | Medium   | Make repo contract testing the next high-priority packet.               |
| The baseline has known inconsistencies.                                   | Medium   | Verify presence, not correctness, until normalization review.           |

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
This packet is ready for execution. It creates a verification baseline document only and does not introduce runtime, scripts, or CI.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0005-repository-verification-baseline.md
docs/verification/00-verification-baseline.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
tree
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/domain/00-domain-model.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
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
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
```

---

## 11. Implementation Plan

1. Confirm `docs/planning/00-baseline-inventory.md` exists.
2. Confirm `docs/planning/01-planning-baseline.md` exists.
3. Confirm `docs/domain/00-domain-model.md` exists.
4. Confirm current work-packet system exists.
5. Create `docs/verification/`.
6. Create `docs/work-packets/WP-0005-repository-verification-baseline.md`.
7. Create `docs/verification/00-verification-baseline.md`.
8. In the verification baseline, state that the uploaded repository tree is the active baseline.
9. Define root file checks.
10. Define documentation directory checks.
11. Define ADR checks.
12. Define work-packet checks.
13. Define planning/domain checks.
14. Define manual review checks.
15. Define deferred checks.
16. Run verification.
17. Commit this packet and the verification baseline atomically, unless this packet is committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0005-repository-verification-baseline.md` exists.
2. `docs/verification/00-verification-baseline.md` exists.
3. The verification baseline includes YAML frontmatter.
4. The verification baseline includes `# Verification Baseline`.
5. The verification baseline states that the uploaded repository tree is the active baseline.
6. The verification baseline defines root file checks.
7. The verification baseline defines directory checks.
8. The verification baseline defines ADR checks.
9. The verification baseline defines work-packet checks.
10. The verification baseline defines planning/domain checks.
11. The verification baseline defines whitespace safety checks.
12. The verification baseline defines manual checks.
13. The verification baseline defines deferred checks.
14. The verification baseline identifies repo contract testing as follow-up work.
15. No existing ADRs are modified.
16. No product or architecture documents are modified.
17. No runtime implementation code is introduced.
18. No executable scripts are introduced.
19. No secrets or sensitive values are introduced.
20. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0005-repository-verification-baseline.md && \
test -f docs/verification/00-verification-baseline.md && \
grep -q '^title: "WP-0005: Repository Verification Baseline"$' docs/work-packets/WP-0005-repository-verification-baseline.md && \
grep -q '^# WP-0005: Repository Verification Baseline$' docs/work-packets/WP-0005-repository-verification-baseline.md && \
grep -q '^title: "Verification Baseline"$' docs/verification/00-verification-baseline.md && \
grep -q '^# Verification Baseline$' docs/verification/00-verification-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/00-verification-baseline.md && \
grep -q 'Root File Checks' docs/verification/00-verification-baseline.md && \
grep -q 'ADR Checks' docs/verification/00-verification-baseline.md && \
grep -q 'Work Packet Checks' docs/verification/00-verification-baseline.md && \
grep -q 'Repo Contract Testing' docs/verification/00-verification-baseline.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the verification baseline is documentation-only.
2. Confirm it does not claim scripts or CI exist.
3. Confirm it verifies baseline presence without silently normalizing the baseline.
4. Confirm it does not modify existing ADRs.
5. Confirm it does not modify product or architecture documents.
6. Confirm no secrets, credentials, tokens, or private operational values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the verification baseline is aligned to the uploaded repository baseline.
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
This packet creates verification documentation only. It does not touch authentication, authorization, secrets detection, repository access, AI context assembly, runtime code, CI, or deployment infrastructure.
```

Privacy notes:

```text
This packet should not introduce personal data. It should use role-based references and repository-relative paths only.
```

Additional safety notes:

1. Do not include local absolute paths.
2. Do not include private repository URLs.
3. Do not include logs containing tokens.
4. Do not include example secrets that look real.
5. Do not add environment-specific values.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `docs/verification/00-verification-baseline.md`.
2. Create `docs/work-packets/WP-0005-repository-verification-baseline.md`.

Documentation intentionally deferred:

1. Executable verification script is deferred to a future packet.
2. CI workflow is deferred to a future packet.
3. Repo contract testing baseline is deferred to `WP-0007`.
4. ADR normalization review is deferred to `WP-0006`.
5. Context continuity baseline is deferred to `WP-0008`.
6. Root README baseline is deferred to a later packet.

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
git add docs/work-packets/WP-0005-repository-verification-baseline.md docs/verification/00-verification-baseline.md
git commit -m "docs(verification): add repository verification baseline"
```

Commit message:

```text
docs(verification): add repository verification baseline
```

Commit guidance:

1. The commit should include only this packet and the verification baseline.
2. Do not include ADR edits.
3. Do not include product document edits.
4. Do not include architecture document edits.
5. Do not include domain model edits.
6. Do not include planning baseline edits.
7. Do not include executable scripts.
8. Do not include CI workflows.
9. Do not include runtime implementation code.
10. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/verification/00-verification-baseline.md`.
2. Create `WP-0006: ADR Index Normalization Review`.
3. Create `WP-0007: Repo Contract Testing Baseline`.
4. Create `WP-0008: Context Continuity Baseline`.
5. Create a future packet for an executable verification script.
6. Create a future packet for CI once local verification stabilizes.

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
This packet intentionally creates a documentation-level verification baseline before introducing executable repo contract tests. The purpose is to define what should be checked before encoding those checks in scripts or CI.
```

## Verification Commands

Run the relevant repository verification commands for this historical packet:

```bash
bun run verify
bash tools/eval/run-evaluations.sh
bun run work-packet validate-repo
```
