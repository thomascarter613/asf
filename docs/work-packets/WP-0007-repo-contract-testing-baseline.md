---
title: "WP-0007: Repo Contract Testing Baseline"
description: "Creates the initial repo contract testing baseline for the uploaded repository tree, defining contract categories, required checks, expected files, expected directories, ADR checks, work-packet checks, and future executable contract test direction."
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
work_packet_id: "WP-0007"
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
  - "docs/planning/02-adr-normalization-review.md"
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
  - "docs/adr/ADR-0021-repo-contract-testing.md"
affected_files:
  - "docs/work-packets/WP-0007-repo-contract-testing-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
recommended_commit: "docs(verification): add repo contract testing baseline"
---

# WP-0007: Repo Contract Testing Baseline

## 1. Purpose

This work packet governs creation of the initial repo contract testing baseline for the current uploaded repository tree.

The repository now has:

1. Baseline inventory.
2. Domain model baseline.
3. Planning baseline.
4. Repository verification baseline.
5. ADR normalization review.
6. Work-packet governance.

The next stabilization step is to define which repository expectations should become executable contract checks.

This packet authorizes creation of:

```text
docs/verification/01-repo-contract-baseline.md
````

This packet does not yet create executable scripts, CI workflows, runtime code, package-manager files, or automated tests.

It defines the contract model first.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the verification baseline and ADR normalization review exist, ADR-0021 establishes repo contract testing as a project concern, and the scope is limited to creating a documentation-level repo contract baseline.
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
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
```

## 3.5 Related Planning, Domain, and Verification Documents

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0007-repo-contract-testing-baseline.md`.
2. Create `docs/verification/01-repo-contract-baseline.md`.
3. Define the purpose of repo contract testing.
4. Define initial contract categories.
5. Define required root file contracts.
6. Define required directory contracts.
7. Define product document contracts.
8. Define architecture document contracts.
9. Define ADR contracts.
10. Define work-packet contracts.
11. Define planning/domain/verification contracts.
12. Define allowed ADR gap behavior.
13. Define known baseline exceptions.
14. Define future executable script direction.
15. Define future CI direction.
16. Preserve the uploaded baseline without mutation.

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
19. Changing package manager strategy.
20. Creating full test framework scaffolding.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. ADR-0021 establishes repo contract testing as an important project mechanism.
3. Contract testing should begin with documented expectations before scripts are introduced.
4. The current repository may not yet have a `tools/` directory.
5. The current repository may not yet have package-manager files.
6. The current repository may not yet have CI.
7. The current repository may not yet have runtime code.
8. Initial contracts should verify the documentation and governance baseline.
9. ADR number gaps should be allowed by initial contracts.
10. Duplicate-looking ADR topics should be allowed by initial contracts until explicit review.
11. Future executable repo contract checks should be introduced through their own packet.

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

1. This packet may create `docs/verification/01-repo-contract-baseline.md`.
2. This packet may create only this work packet and the repo contract baseline.
3. This packet must not modify existing ADRs.
4. This packet must not modify product documents.
5. This packet must not modify architecture documents.
6. This packet must not modify domain, planning, or previous verification documents.
7. This packet must not create executable scripts.
8. This packet must not create CI workflows.
9. This packet must not claim automated contract tests exist yet.
10. This packet must not require a contiguous ADR sequence.

---

## 8. Risks

| Risk                                                                           | Severity | Mitigation                                                                 |
| ------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------- |
| Repo contract baseline is mistaken for executable tests.                       | Medium   | State clearly that executable scripts are deferred.                        |
| Contracts enforce a cleaned-up imagined repo instead of the accepted baseline. | High     | Anchor contracts to the uploaded repository tree.                          |
| ADR gaps cause false contract failures.                                        | High     | Explicitly allow known ADR gaps.                                           |
| Contract checks become too strict before implementation begins.                | Medium   | Start with documentation and governance checks only.                       |
| Future scripts drift from this baseline.                                       | Medium   | Use this document as the source input for future script work.              |
| Contract testing becomes too broad.                                            | Medium   | Defer package, runtime, CI, and language checks until those systems exist. |

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
This packet is ready for execution. It creates a repo contract baseline document only and does not introduce scripts, CI, package tooling, or runtime code.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
docs/verification/01-repo-contract-baseline.md
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
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/adr/README.md
docs/adr/ADR-0021-repo-contract-testing.md
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
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
docs/work-packets/WP-0006-adr-index-normalization-review.md
```

---

## 11. Implementation Plan

1. Confirm `docs/verification/00-verification-baseline.md` exists.
2. Confirm `docs/planning/02-adr-normalization-review.md` exists.
3. Confirm `docs/domain/00-domain-model.md` exists.
4. Confirm current work-packet system exists.
5. Create `docs/work-packets/WP-0007-repo-contract-testing-baseline.md`.
6. Create `docs/verification/01-repo-contract-baseline.md`.
7. In the repo contract baseline, state that the uploaded repository tree is the active baseline.
8. Define contract testing purpose.
9. Define initial contract categories.
10. Define root file contracts.
11. Define directory contracts.
12. Define ADR contracts.
13. Define work-packet contracts.
14. Define planning/domain/verification contracts.
15. Define allowed baseline exceptions.
16. Define future executable contract test direction.
17. Run verification.
18. Commit this packet and the repo contract baseline atomically, unless this packet is committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0007-repo-contract-testing-baseline.md` exists.
2. `docs/verification/01-repo-contract-baseline.md` exists.
3. The repo contract baseline includes YAML frontmatter.
4. The repo contract baseline includes `# Repo Contract Baseline`.
5. The repo contract baseline states that the uploaded repository tree is the active baseline.
6. The repo contract baseline defines contract categories.
7. The repo contract baseline defines root file contracts.
8. The repo contract baseline defines directory contracts.
9. The repo contract baseline defines ADR contracts.
10. The repo contract baseline defines work-packet contracts.
11. The repo contract baseline defines planning/domain/verification contracts.
12. The repo contract baseline allows known ADR gaps.
13. The repo contract baseline identifies future executable checks.
14. The repo contract baseline identifies deferred checks.
15. No existing ADRs are modified.
16. No product or architecture documents are modified.
17. No runtime implementation code is introduced.
18. No executable scripts are introduced.
19. No CI workflows are introduced.
20. No secrets or sensitive values are introduced.
21. `git diff --check` passes.

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
test -f docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
test -f docs/verification/01-repo-contract-baseline.md && \
grep -q '^title: "WP-0007: Repo Contract Testing Baseline"$' docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
grep -q '^# WP-0007: Repo Contract Testing Baseline$' docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
grep -q '^title: "Repo Contract Baseline"$' docs/verification/01-repo-contract-baseline.md && \
grep -q '^# Repo Contract Baseline$' docs/verification/01-repo-contract-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Contract Categories' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Root File Contracts' docs/verification/01-repo-contract-baseline.md && \
grep -q 'ADR Contracts' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Work Packet Contracts' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Known Allowed Exceptions' docs/verification/01-repo-contract-baseline.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the repo contract baseline is documentation-only.
2. Confirm it does not claim executable tests exist.
3. Confirm it does not require a contiguous ADR sequence.
4. Confirm it explicitly allows known ADR gaps.
5. Confirm it preserves ADR-0013 and ADR-0015.
6. Confirm it does not modify existing ADRs.
7. Confirm it does not modify product or architecture documents.
8. Confirm no secrets, credentials, tokens, or private operational values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the repo contract baseline is aligned to the uploaded repository baseline.
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
This packet should not introduce personal data. It should use repository-relative paths and role-based references only.
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

1. Create `docs/verification/01-repo-contract-baseline.md`.
2. Create `docs/work-packets/WP-0007-repo-contract-testing-baseline.md`.

Documentation intentionally deferred:

1. Executable repo contract script is deferred to a future packet.
2. CI workflow is deferred to a future packet.
3. Runtime tests are deferred until runtime implementation exists.
4. Package-manager checks are deferred until package-manager files exist.
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
git add docs/work-packets/WP-0007-repo-contract-testing-baseline.md docs/verification/01-repo-contract-baseline.md
git commit -m "docs(verification): add repo contract testing baseline"
```

Commit message:

```text
docs(verification): add repo contract testing baseline
```

Commit guidance:

1. The commit should include only this packet and the repo contract baseline.
2. Do not include ADR edits.
3. Do not include product document edits.
4. Do not include architecture document edits.
5. Do not include domain model edits.
6. Do not include planning document edits.
7. Do not include executable scripts.
8. Do not include CI workflows.
9. Do not include runtime implementation code.
10. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/verification/01-repo-contract-baseline.md`.
2. Create `WP-0008: Context Continuity Baseline`.
3. Create a future packet for executable repo contract script.
4. Create a future packet for CI verification workflow.
5. Create a future packet for root README baseline.
6. Create a future packet for architecture overview placement review.

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
This packet intentionally defines repo contract testing at the documentation level first. Executable contract checks should come next, after the contract categories and baseline exceptions are explicit.
```
