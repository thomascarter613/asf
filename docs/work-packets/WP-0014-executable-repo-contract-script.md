---
title: "WP-0014: Executable Repo Contract Script"
description: "Creates the first executable local repo contract script for the Agentic Software Framework, turning the documentation-level repo contract baseline into a non-mutating shell check for required files, directories, ADRs, work packets, planning artifacts, verification artifacts, and known allowed exceptions."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0014"
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
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
  - "docs/planning/05-persistence-adr-overlap-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0014-executable-repo-contract-script.md"
  - "tools/check-repo-contract.sh"
recommended_commit: "chore(verification): add executable repo contract script"
---

# WP-0014: Executable Repo Contract Script

## 1. Purpose

This work packet governs creation of the first executable local repo contract script for the Agentic Software Framework.

The uploaded repository tree is the active baseline.

The repository now has:

1. Baseline inventory.
2. Planning baseline.
3. ADR normalization review.
4. Architecture overview placement review.
5. Baseline tree artifact policy.
6. Persistence ADR overlap review.
7. Domain model baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Context-continuity artifacts.
11. Root README.
12. Work-packet governance.

The next stabilization step is to convert the documentation-level repo contract baseline into a local, executable, non-mutating shell script.

This packet authorizes creation of:

```text
tools/check-repo-contract.sh
````

The script should check expected repository structure and key baseline artifacts.

The script must not modify files.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the repo contract baseline exists, known allowed exceptions have been documented, ADR caveats are annotated, and the next implementation-readiness step is a local executable check.
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
WP-0005: Repository Verification Baseline
WP-0007: Repo Contract Testing Baseline
WP-0008: Context Continuity Baseline
WP-0009: Root README Baseline
WP-0010: Architecture Overview Placement Review
WP-0011: Baseline Tree Artifact Policy
WP-0012: ADR Index Gap and Status Annotation
WP-0013: Persistence ADR Overlap Review
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
```

## 3.5 Related Verification Documents

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0014-executable-repo-contract-script.md`.
2. Create `tools/`.
3. Create `tools/check-repo-contract.sh`.
4. Make the script executable.
5. Check required root files.
6. Check required documentation directories.
7. Check product documents.
8. Check architecture documents.
9. Check ADR support files.
10. Check current ADR files.
11. Check known ADR gaps are allowed by not requiring missing ADR files.
12. Check work-packet governance files.
13. Check current work-packet files.
14. Check planning files.
15. Check domain files.
16. Check verification files.
17. Check AI/context-continuity files.
18. Check root README.
19. Check key content anchors with `grep`.
20. Run `git diff --check`.
21. Print readable pass/fail output.
22. Exit non-zero on failure.
23. Avoid file mutation.

---

## 5. Non-Goals

Out of scope:

1. Creating CI workflows.
2. Creating package-manager files.
3. Creating runtime implementation code.
4. Creating database schema.
5. Creating API contracts.
6. Creating vector retrieval code.
7. Creating Qdrant collections.
8. Creating evaluation harness implementation.
9. Creating a test framework.
10. Creating language-specific package scripts.
11. Editing ADR files.
12. Renaming ADR files.
13. Renumbering ADR files.
14. Filling ADR gaps.
15. Removing duplicate ADR topics.
16. Moving architecture overview files.
17. Moving, deleting, or regenerating the root `tree` file.
18. Modifying README.
19. Modifying planning, domain, verification, or AI documents.
20. Installing dependencies.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. The script should be POSIX-friendly Bash.
3. Bash is available locally.
4. Git is available locally.
5. The script should run from the repository root.
6. The repository does not yet require package managers.
7. The repository does not yet require CI.
8. The repository does not yet include runtime implementation.
9. The first repo contract script should check documentation and governance baseline only.
10. Known ADR gaps must not cause failure.
11. ADR-0013 and ADR-0015 must both remain present for now.
12. The root `tree` file should be checked for presence only.
13. The script should not compare the root `tree` file to live tree output.

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

1. This packet may create `tools/check-repo-contract.sh`.
2. This packet may create `tools/`.
3. This packet may create only this work packet and the script.
4. This packet must not modify existing ADRs.
5. This packet must not modify existing documentation artifacts.
6. This packet must not create CI.
7. This packet must not create package-manager setup.
8. This packet must not create runtime code.
9. This packet must not install dependencies.
10. The script must not mutate repository files.
11. The script must not auto-fix failures.
12. The script must not require missing ADR numbers.
13. The script must not require runtime files that do not exist.

---

## 8. Risks

| Risk                                                                        | Severity | Mitigation                                                                 |
| --------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| Script overfits to current baseline and blocks legitimate future evolution. | Medium   | Future structural changes must update the script through explicit packets. |
| Script accidentally requires missing ADR numbers.                           | High     | Explicitly avoid requiring ADR-0007, ADR-0009, ADR-0010, and ADR-0012.     |
| Script mutates files.                                                       | High     | Make script read-only and non-mutating.                                    |
| Script claims more maturity than exists.                                    | Medium   | Check documentation baseline only.                                         |
| Script becomes too noisy.                                                   | Medium   | Use clear check names and summarized output.                               |
| Script assumes package tooling exists.                                      | Medium   | Do not use package managers.                                               |
| Script fails outside repo root.                                             | Low      | Detect repository root or fail with clear message.                         |

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
This packet is ready. It creates the first executable local repo contract script without introducing package tooling, CI, or runtime implementation.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0014-executable-repo-contract-script.md
tools/check-repo-contract.sh
```

## 10.2 Directories to Create

```text
tools/
```

## 10.3 Files to Modify

```text
None.
```

## 10.4 Files to Review

```text
README.md
tree
docs/adr/README.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/domain/00-domain-model.md
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

## 10.5 Files Intentionally Not Touched

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
docs/domain/*
docs/planning/*
docs/verification/*
docs/ai/*
docs/work-packets/*
```

---

## 11. Implementation Plan

1. Confirm `docs/verification/01-repo-contract-baseline.md` exists.
2. Confirm `docs/adr/README.md` exists.
3. Confirm `README.md` exists.
4. Create `docs/work-packets/WP-0014-executable-repo-contract-script.md`.
5. Create `tools/`.
6. Create `tools/check-repo-contract.sh`.
7. Implement helper functions for required file checks.
8. Implement helper functions for required directory checks.
9. Implement helper functions for content checks.
10. Implement `git diff --check`.
11. Print pass/fail status for each check.
12. Exit `0` only when all checks pass.
13. Exit non-zero if any check fails.
14. Make the script executable.
15. Run the script.
16. Run `git diff --check`.
17. Commit the packet and script atomically, unless this packet is committed separately.

---

## 12. Script Design Requirements

The script must:

1. Start with Bash shebang.
2. Use strict mode.
3. Run from repository root or fail clearly.
4. Avoid dependencies beyond shell, Git, and standard Unix commands.
5. Print readable check output.
6. Check required files with `test -f`.
7. Check required directories with `test -d`.
8. Check content anchors with `grep -q`.
9. Check executable bit expectations only for itself.
10. Run `git diff --check`.
11. Avoid auto-fixing.
12. Avoid formatting.
13. Avoid file writes.
14. Avoid package-manager commands.
15. Avoid network access.
16. Avoid reading secrets.
17. Exit non-zero on failure.

---

## 13. Required Contract Checks

## 13.1 Root Files

The script must check:

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
README.md
tree
```

## 13.2 Directories

The script must check:

```text
docs/
docs/adr/
docs/architecture/
docs/domain/
docs/planning/
docs/product/
docs/verification/
docs/work-packets/
docs/ai/
tools/
```

## 13.3 Product Documents

The script must check:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
```

## 13.4 Architecture Documents

The script must check:

```text
docs/architecture/00-architecture-overview.md
```

## 13.5 ADR Files

The script must check:

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
```

The script must **not** require:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

## 13.6 Planning Documents

The script must check:

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
```

## 13.7 Domain Documents

The script must check:

```text
docs/domain/00-domain-model.md
```

## 13.8 Verification Documents

The script must check:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

## 13.9 AI / Context Documents

The script must check:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

## 13.10 Work Packet Documents

The script must check:

```text
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
docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
docs/work-packets/WP-0013-persistence-adr-overlap-review.md
docs/work-packets/WP-0014-executable-repo-contract-script.md
```

## 13.11 Script Self-Check

The script must check:

```text
tools/check-repo-contract.sh exists
tools/check-repo-contract.sh is executable
```

---

## 14. Required Content Anchor Checks

The script must check key headings and phrases.

Required heading anchors:

```text
# Agentic Software Framework
# ADR Index
# Baseline Inventory
# Planning Baseline
# ADR Normalization Review
# Architecture Overview Placement Review
# Baseline Tree Artifact Policy
# Persistence ADR Overlap Review
# Domain Model
# Verification Baseline
# Repo Contract Baseline
# Current State
# Handoff Packet Template
# Context Source Rules
# Work Packet Index
# WP-0000: Work Packet Title
```

Required phrase anchors:

```text
The uploaded repository tree is the active baseline
Runtime implementation has not started
Vector retrieval augments repository memory
ADR-0007
ADR-0013
ADR-0015
Known Allowed Exceptions
Prohibited Automatic Actions
```

---

## 15. Known Allowed Exceptions

The script must preserve these known exceptions:

1. `README.md` is now required because WP-0009 added it.
2. ADR gaps are allowed:

   * ADR-0007
   * ADR-0009
   * ADR-0010
   * ADR-0012
3. Both ADR-0013 and ADR-0015 are required for now.
4. Both architecture overview files are required for now.
5. Root `tree` is required for now.
6. CI is not required.
7. Package-manager files are not required.
8. Runtime code is not required.
9. Evaluation harness implementation is not required.
10. Vector retrieval implementation is not required.

---

## 16. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0014-executable-repo-contract-script.md` exists.
2. `tools/check-repo-contract.sh` exists.
3. `tools/check-repo-contract.sh` is executable.
4. The script checks required root files.
5. The script checks required directories.
6. The script checks product documents.
7. The script checks architecture documents.
8. The script checks ADR files.
9. The script allows known ADR gaps by not requiring missing ADR files.
10. The script checks work-packet files.
11. The script checks planning files.
12. The script checks domain files.
13. The script checks verification files.
14. The script checks AI/context files.
15. The script checks key content anchors.
16. The script runs `git diff --check`.
17. The script does not mutate files.
18. The script does not require CI.
19. The script does not require package tooling.
20. The script does not require runtime code.
21. No existing ADRs are modified.
22. No existing documentation artifacts are modified.
23. No secrets or sensitive values are introduced.
24. The script exits `0` when checks pass.
25. The script exits non-zero when checks fail.

---

## 17. Verification Plan

Verification must be performed before the packet can be marked complete.

## 17.1 Packet-Creation Verification

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0014-executable-repo-contract-script.md && \
grep -q '^title: "WP-0014: Executable Repo Contract Script"$' docs/work-packets/WP-0014-executable-repo-contract-script.md && \
grep -q '^# WP-0014: Executable Repo Contract Script$' docs/work-packets/WP-0014-executable-repo-contract-script.md && \
grep -q 'tools/check-repo-contract.sh' docs/work-packets/WP-0014-executable-repo-contract-script.md && \
grep -q 'ADR-0007' docs/work-packets/WP-0014-executable-repo-contract-script.md && \
grep -q 'ADR-0013' docs/work-packets/WP-0014-executable-repo-contract-script.md && \
grep -q 'ADR-0015' docs/work-packets/WP-0014-executable-repo-contract-script.md && \
git diff --check
```

## 17.2 Script Execution Verification

Run after creating the script:

```bash
test -x tools/check-repo-contract.sh && \
./tools/check-repo-contract.sh && \
git diff --check
```

Expected result:

```text
Repo contract checks pass.
```

## 17.3 Failure Behavior Verification

Optional manual failure test:

1. Temporarily rename a required file.
2. Run `./tools/check-repo-contract.sh`.
3. Confirm it exits non-zero and prints a failure.
4. Restore the file.
5. Run the script again.
6. Confirm it passes.

Do not commit the temporary failure state.

## 17.4 Manual Checks

Manual verification:

1. Confirm the script does not modify files.
2. Confirm the script does not install dependencies.
3. Confirm the script does not require CI.
4. Confirm the script does not require package-manager files.
5. Confirm the script does not require runtime code.
6. Confirm missing ADR numbers are not required.
7. Confirm ADR-0013 and ADR-0015 are both required.
8. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

## 17.5 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the script is local, non-mutating, and aligned to the current baseline.
```

## 17.6 Verification Result Status

Current result:

```text
not_run
```

---

## 18. Security and Privacy Notes

Security notes:

```text
This packet creates a local shell verification script. It must not read, print, create, modify, or validate secrets. It must not traverse ignored dependency directories or expose private machine paths.
```

Privacy notes:

```text
The script should use repository-relative paths only. It should not print local absolute paths or environment values.
```

Additional safety notes:

1. Do not inspect `.env` files.
2. Do not inspect private keys.
3. Do not inspect credentials.
4. Do not print environment variables.
5. Do not run network commands.
6. Do not install dependencies.
7. Do not auto-fix files.
8. Do not delete files.
9. Do not modify files.

---

## 19. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0014-executable-repo-contract-script.md`.
2. In the execution step, create `tools/check-repo-contract.sh`.

Documentation intentionally deferred:

1. Updating README to mention the script is deferred until after the script exists and passes.
2. Updating current-state is deferred until after script creation.
3. Updating repo contract baseline is deferred unless the Project Steward wants the script path recorded there.
4. CI workflow is deferred.
5. Package-manager setup is deferred.
6. Runtime implementation is deferred.
7. Evaluation harness implementation is deferred.

---

## 20. Completion Record

This section must be completed before the packet is marked `complete`.

## 20.1 Completion Summary

```text
Not completed yet.
```

## 20.2 Files Created

```text
None yet.
```

## 20.3 Files Modified

```text
None yet.
```

## 20.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 20.5 Verification Commands Run

```bash
# Not run yet.
```

## 20.6 Verification Result

```text
not_run
```

## 20.7 Known Limitations

```text
None recorded yet.
```

## 20.8 Follow-up Work Created

```text
None yet.
```

## 20.9 Completion Actor

```text
Not completed yet.
```

## 20.10 Completion Date

```text
Not completed yet.
```

---

## 21. Recommended Atomic Commit

If committing the packet by itself first:

```bash
git add docs/work-packets/WP-0014-executable-repo-contract-script.md
git commit -m "docs(work-packets): add executable repo contract script packet"
```

If committing this packet together with the script:

```bash
git add docs/work-packets/WP-0014-executable-repo-contract-script.md tools/check-repo-contract.sh
git commit -m "chore(verification): add executable repo contract script"
```

Recommended final commit message after execution:

```text
chore(verification): add executable repo contract script
```

Commit guidance:

1. The final execution commit may include this packet and `tools/check-repo-contract.sh`.
2. Do not include ADR edits.
3. Do not include documentation edits outside this packet unless explicitly authorized.
4. Do not include CI workflows.
5. Do not include package-manager files.
6. Do not include runtime code.
7. Run verification before committing.

---

## 22. Follow-up Work

Follow-up items:

1. Execute this packet by creating `tools/check-repo-contract.sh`.
2. Run `./tools/check-repo-contract.sh`.
3. Create a future packet to update README/current-state with the script path if desired.
4. Create `WP-0015: Evaluation Harness Baseline`.
5. Create a future CI packet after local checks are stable.
6. Create a future package/tooling baseline packet after implementation readiness is confirmed.

---

## 23. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. The script exists and is executable.
3. The script passes locally.
4. All acceptance criteria are satisfied or explicitly deferred with rationale.
5. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
6. Failed verification is not hidden.
7. Completion Record is filled in.
8. Recommended commit is accurate.
9. Follow-up work is recorded.
10. The packet status is updated to `complete`.

---

## 24. Notes

```text
This packet is the first transition from documentation-level verification to executable local verification. It intentionally remains narrow: repository contract checks only, no CI, no package tooling, no runtime implementation.
```

## Verification Commands

Run the relevant repository verification commands for this historical packet:

```bash
bun run verify
bash tools/eval/run-evaluations.sh
bun run work-packet validate-repo
```
