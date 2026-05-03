---
title: "WP-0016: Repo Contract Script Baseline Update"
description: "Updates the executable repo contract script baseline to include WP-0015 and the evaluation harness baseline artifact, keeping the script non-mutating and aligned with the current repository baseline."
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
work_packet_id: "WP-0016"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "README.md"
  - "tree"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/WP-0014-executable-repo-contract-script.md"
  - "docs/work-packets/WP-0015-evaluation-harness-baseline.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0016-repo-contract-script-baseline-update.md"
  - "tools/check-repo-contract.sh"
recommended_commit: "chore(verification): update repo contract script baseline"
---

# WP-0016: Repo Contract Script Baseline Update

## 1. Purpose

This work packet governs a narrow update to the executable repo contract script.

The uploaded repository tree is the active baseline.

`WP-0015` added the documentation-level evaluation harness baseline:

```text
docs/work-packets/WP-0015-evaluation-harness-baseline.md
docs/verification/02-evaluation-harness-baseline.md
````

The executable repo contract script created by `WP-0014` may not yet check those files.

This packet authorizes updating:

```text
tools/check-repo-contract.sh
```

so the executable contract baseline includes:

1. `docs/work-packets/WP-0015-evaluation-harness-baseline.md`
2. `docs/verification/02-evaluation-harness-baseline.md`
3. Relevant heading anchors.
4. Relevant content anchors.

This packet does not authorize changing the evaluation harness baseline, ADRs, planning documents, README, current-state documents, package tooling, CI, or runtime code.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the evaluation harness baseline exists and the repo contract script should now be updated to recognize it as part of the accepted baseline.
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
WP-0014: Executable Repo Contract Script
WP-0015: Evaluation Harness Baseline
```

## 3.4 Related ADRs

```text
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Verification Documents

```text
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0016-repo-contract-script-baseline-update.md`.
2. Update `tools/check-repo-contract.sh`.
3. Add `docs/work-packets/WP-0015-evaluation-harness-baseline.md` to required work packet checks.
4. Add `docs/verification/02-evaluation-harness-baseline.md` to required verification checks.
5. Add heading anchor check for `# Evaluation Harness Baseline`.
6. Add content anchor checks for evaluation harness baseline.
7. Preserve the script’s non-mutating behavior.
8. Preserve known ADR gap behavior.
9. Preserve known baseline exceptions.
10. Run the updated script.
11. Preserve the uploaded baseline without unrelated mutation.

---

## 5. Non-Goals

Out of scope:

1. Creating executable evaluation harness code.
2. Creating CI workflows.
3. Creating package-manager files.
4. Creating runtime implementation code.
5. Creating database schema.
6. Creating API contracts.
7. Creating vector retrieval implementation.
8. Creating Qdrant collections.
9. Creating embedding pipelines.
10. Modifying ADR files.
11. Modifying the ADR index.
12. Modifying README.
13. Modifying current-state documents.
14. Modifying planning documents.
15. Modifying verification documents.
16. Changing the root `tree` policy.
17. Moving architecture overview files.
18. Changing ADR gap behavior.
19. Installing dependencies.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. `tools/check-repo-contract.sh` exists.
3. `tools/check-repo-contract.sh` is executable.
4. `docs/work-packets/WP-0015-evaluation-harness-baseline.md` exists.
5. `docs/verification/02-evaluation-harness-baseline.md` exists.
6. The script should remain Bash-based.
7. The script should remain local and non-mutating.
8. The script should remain dependency-light.
9. The script should not require package-manager files.
10. The script should not require CI.
11. The script should not require runtime code.

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

1. This packet may modify only `tools/check-repo-contract.sh`.
2. This packet may create only `docs/work-packets/WP-0016-repo-contract-script-baseline-update.md`.
3. This packet must not modify ADRs.
4. This packet must not modify README.
5. This packet must not modify docs under `docs/verification/`.
6. This packet must not modify docs under `docs/planning/`.
7. This packet must not modify docs under `docs/ai/`.
8. This packet must not create runtime code.
9. This packet must not create CI.
10. This packet must not create package-manager setup.
11. The script must remain non-mutating.

---

## 8. Risks

| Risk                                                 | Severity | Mitigation                                                |
| ---------------------------------------------------- | -------- | --------------------------------------------------------- |
| Script becomes stale after WP-0015.                  | Medium   | Update script to include WP-0015 and evaluation baseline. |
| Script overreaches into evaluation implementation.   | Medium   | Only check file existence and content anchors.            |
| Script mutates files.                                | High     | Preserve read-only behavior.                              |
| Script begins requiring future runtime files.        | Medium   | Do not add runtime requirements.                          |
| Script begins requiring package-manager or CI files. | Medium   | Keep package and CI checks deferred.                      |
| Script checks too much brittle prose.                | Low      | Use stable headings and core phrase anchors only.         |

---

## 9. Readiness Checklist

```text
[x] Purpose is clear.
[x] Source inputs are identified.
[x] Related baseline documents or ADRs are listed.
[x] Scope is bounded.
[x] Non-goals are explicit.
[x] Affected files are listed.
[x] Acceptance criteria are observable.
[x] Verification plan is defined.
[x] Security and privacy notes are considered.
[x] Recommended atomic commit is present.
[x] No blocking open question remains unresolved.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0016-repo-contract-script-baseline-update.md
```

## 10.2 Files to Modify

```text
tools/check-repo-contract.sh
```

## 10.3 Files to Review

```text
tools/check-repo-contract.sh
docs/work-packets/WP-0015-evaluation-harness-baseline.md
docs/verification/02-evaluation-harness-baseline.md
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
docs/domain/*
docs/planning/*
docs/verification/*
docs/ai/*
```

---

## 11. Implementation Plan

1. Confirm `tools/check-repo-contract.sh` exists.
2. Confirm `tools/check-repo-contract.sh` is executable.
3. Confirm `docs/work-packets/WP-0015-evaluation-harness-baseline.md` exists.
4. Confirm `docs/verification/02-evaluation-harness-baseline.md` exists.
5. Create `docs/work-packets/WP-0016-repo-contract-script-baseline-update.md`.
6. Update the script’s verification document checks to include `docs/verification/02-evaluation-harness-baseline.md`.
7. Update the script’s work packet checks to include `docs/work-packets/WP-0015-evaluation-harness-baseline.md`.
8. Update the script’s heading anchor checks to include `# Evaluation Harness Baseline`.
9. Update the script’s baseline phrase/content anchor checks to include evaluation harness anchors.
10. Run `./tools/check-repo-contract.sh`.
11. Run `git diff --check`.
12. Commit this packet and the updated script atomically, unless this packet is committed separately.

---

## 12. Required Script Updates

## 12.1 Add Verification File Check

Add:

```bash
check_file "docs/verification/02-evaluation-harness-baseline.md"
```

near the existing verification document checks.

## 12.2 Add Work Packet File Check

Add:

```bash
check_file "docs/work-packets/WP-0015-evaluation-harness-baseline.md"
```

near the existing work packet file checks.

## 12.3 Add Heading Anchor Check

Add:

```bash
check_contains "docs/verification/02-evaluation-harness-baseline.md" '^# Evaluation Harness Baseline$' "evaluation harness baseline has expected heading"
```

near the existing heading anchor checks.

## 12.4 Add Content Anchor Checks

Add:

```bash
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Evaluation Categories' "evaluation harness baseline defines categories"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Evaluation Case Structure' "evaluation harness baseline defines case structure"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Expected Outcome' "evaluation harness baseline defines expected outcome"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Observed Outcome' "evaluation harness baseline defines observed outcome"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Regression Handling' "evaluation harness baseline defines regression handling"
```

near the existing baseline phrase anchors or in a new evaluation-specific section.

---

## 13. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0016-repo-contract-script-baseline-update.md` exists.
2. `tools/check-repo-contract.sh` still exists.
3. `tools/check-repo-contract.sh` is still executable.
4. The script checks `docs/work-packets/WP-0015-evaluation-harness-baseline.md`.
5. The script checks `docs/verification/02-evaluation-harness-baseline.md`.
6. The script checks `# Evaluation Harness Baseline`.
7. The script checks `Evaluation Categories`.
8. The script checks `Evaluation Case Structure`.
9. The script checks `Expected Outcome`.
10. The script checks `Observed Outcome`.
11. The script checks `Regression Handling`.
12. The script remains non-mutating.
13. The script does not require runtime code.
14. The script does not require package-manager files.
15. The script does not require CI workflows.
16. No ADR files are modified.
17. No documentation files other than this packet are modified.
18. No secrets or sensitive values are introduced.
19. `./tools/check-repo-contract.sh` passes.
20. `git diff --check` passes.

---

## 14. Verification Plan

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0016-repo-contract-script-baseline-update.md && \
grep -q '^title: "WP-0016: Repo Contract Script Baseline Update"$' docs/work-packets/WP-0016-repo-contract-script-baseline-update.md && \
grep -q '^# WP-0016: Repo Contract Script Baseline Update$' docs/work-packets/WP-0016-repo-contract-script-baseline-update.md && \
grep -q 'tools/check-repo-contract.sh' docs/work-packets/WP-0016-repo-contract-script-baseline-update.md && \
grep -q 'WP-0015' docs/work-packets/WP-0016-repo-contract-script-baseline-update.md && \
grep -q 'docs/verification/02-evaluation-harness-baseline.md' docs/work-packets/WP-0016-repo-contract-script-baseline-update.md && \
git diff --check
```

Run after updating the script:

```bash
test -x tools/check-repo-contract.sh && \
grep -q 'docs/work-packets/WP-0015-evaluation-harness-baseline.md' tools/check-repo-contract.sh && \
grep -q 'docs/verification/02-evaluation-harness-baseline.md' tools/check-repo-contract.sh && \
grep -q '# Evaluation Harness Baseline' tools/check-repo-contract.sh && \
grep -q 'Evaluation Categories' tools/check-repo-contract.sh && \
grep -q 'Evaluation Case Structure' tools/check-repo-contract.sh && \
grep -q 'Expected Outcome' tools/check-repo-contract.sh && \
grep -q 'Observed Outcome' tools/check-repo-contract.sh && \
grep -q 'Regression Handling' tools/check-repo-contract.sh && \
./tools/check-repo-contract.sh && \
git diff --check
```

Expected result:

```text
Repo contract checks pass.
```

Manual verification:

1. Confirm the script does not modify files.
2. Confirm the script does not install dependencies.
3. Confirm the script does not require CI.
4. Confirm the script does not require package-manager files.
5. Confirm the script does not require runtime code.
6. Confirm no ADR files were modified.
7. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

---

## 15. Security and Privacy Notes

Security notes:

```text
This packet updates a local shell verification script. The script must remain read-only and must not inspect secrets, credentials, private keys, environment variables, or sensitive logs.
```

Privacy notes:

```text
The script should use repository-relative paths and should not print local absolute paths or environment values.
```

Additional safety notes:

1. Do not inspect `.env` files.
2. Do not inspect private keys.
3. Do not print environment variables.
4. Do not run network commands.
5. Do not install dependencies.
6. Do not auto-fix files.
7. Do not delete files.
8. Do not modify files.

---

## 16. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0016-repo-contract-script-baseline-update.md`.
2. Update `tools/check-repo-contract.sh`.

Documentation intentionally deferred:

1. Updating README is deferred.
2. Updating current-state is deferred.
3. Updating repo contract baseline is deferred.
4. Creating CI workflow is deferred.
5. Creating package-manager baseline is deferred.
6. Runtime implementation is deferred.
7. Executable evaluation harness implementation is deferred.

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
git add docs/work-packets/WP-0016-repo-contract-script-baseline-update.md
git commit -m "docs(work-packets): add repo contract script baseline update packet"
```

If committing this packet together with the script update:

```bash
git add docs/work-packets/WP-0016-repo-contract-script-baseline-update.md tools/check-repo-contract.sh
git commit -m "chore(verification): update repo contract script baseline"
```

Recommended final commit message after execution:

```text
chore(verification): update repo contract script baseline
```

---

## 19. Follow-up Work

Follow-up items:

1. Execute this packet by updating `tools/check-repo-contract.sh`.
2. Create a future packet to update `README.md` and `docs/ai/00-current-state.md` with the executable script and evaluation baseline status.
3. Create a future implementation-readiness planning packet.
4. Create a future package/tooling baseline packet.
5. Create a future CI baseline packet.
6. Create a future executable evaluation harness packet.

---

## 20. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. The script is updated.
3. The script passes locally.
4. All acceptance criteria are satisfied or explicitly deferred with rationale.
5. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
6. Failed verification is not hidden.
7. Completion Record is filled in.
8. Recommended commit is accurate.
9. Follow-up work is recorded.
10. The packet status is updated to `complete`.

---

## 21. Notes

```text
This packet keeps the executable repo contract script aligned with the newly added evaluation harness baseline. It is intentionally narrow and does not begin CI, package tooling, runtime implementation, or executable evaluation harness work.
```