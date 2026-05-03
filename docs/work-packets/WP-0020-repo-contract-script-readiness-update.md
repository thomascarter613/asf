---
title: "WP-0020: Repo Contract Script Readiness Update"
description: "Updates the executable repo contract script so it recognizes the current implementation-readiness and package/tooling planning baseline, including WP-0017, WP-0018, WP-0019, and their associated orientation and planning artifacts."
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
work_packet_id: "WP-0020"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0011"
  - "ADR-0014"
  - "ADR-0018"
  - "ADR-0019"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "README.md"
  - "docs/ai/00-current-state.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/WP-0017-current-state-and-readme-status-update.md"
  - "docs/work-packets/WP-0018-implementation-readiness-planning.md"
  - "docs/work-packets/WP-0019-package-and-tooling-baseline.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0020-repo-contract-script-readiness-update.md"
  - "tools/check-repo-contract.sh"
recommended_commit: "chore(verification): update repo contract script for readiness planning"
---

# WP-0020: Repo Contract Script Readiness Update

## 1. Purpose

This work packet governs a narrow update to the executable repo contract script.

The uploaded repository tree is the active baseline.

Since the last repo contract script update, the repository has added or planned the following baseline artifacts:

```text
docs/work-packets/WP-0017-current-state-and-readme-status-update.md
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/work-packets/WP-0019-package-and-tooling-baseline.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
````

The repo contract script should now recognize these files as part of the accepted baseline.

This packet authorizes updating:

```text
tools/check-repo-contract.sh
```

This packet does not authorize package-manager setup, CI workflows, runtime source code, lockfiles, executable evaluation harness implementation, or dependency installation.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because implementation-readiness planning and package/tooling baseline planning have expanded the documentation baseline, and the repo contract script should be kept synchronized with the accepted repository state.
```

---

## 3. Source Inputs

## 3.1 Baseline Context

```text
The uploaded repository tree is the active baseline.
```

## 3.2 Related Work Packets

```text
WP-0014: Executable Repo Contract Script
WP-0016: Repo Contract Script Baseline Update
WP-0017: Current State and README Status Update
WP-0018: Implementation Readiness Planning
WP-0019: Package and Tooling Baseline
```

## 3.3 Related Planning Documents

```text
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
```

## 3.4 Related Verification Documents

```text
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md`.
2. Update `tools/check-repo-contract.sh`.
3. Add required file checks for:

   * `docs/work-packets/WP-0017-current-state-and-readme-status-update.md`
   * `docs/work-packets/WP-0018-implementation-readiness-planning.md`
   * `docs/work-packets/WP-0019-package-and-tooling-baseline.md`
   * `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md`
   * `docs/planning/06-implementation-readiness-plan.md`
   * `docs/planning/07-package-and-tooling-baseline.md`
4. Add heading anchor checks for:

   * `# Implementation Readiness Plan`
   * `# Package and Tooling Baseline`
5. Add content anchor checks for implementation-readiness planning.
6. Add content anchor checks for package/tooling baseline.
7. Preserve all existing repo contract checks.
8. Preserve known ADR gap behavior.
9. Preserve known architecture and persistence ADR caveats.
10. Preserve non-mutating script behavior.
11. Run the updated repo contract script.
12. Run `git diff --check`.

---

## 5. Non-Goals

Out of scope:

1. Creating package-manager files.
2. Creating lockfiles.
3. Installing dependencies.
4. Creating CI workflows.
5. Creating runtime source code.
6. Creating source directories.
7. Creating executable evaluation harness code.
8. Creating database schema.
9. Creating API contracts.
10. Creating vector retrieval implementation.
11. Creating Qdrant collections.
12. Creating embedding pipelines.
13. Modifying ADR files.
14. Modifying the ADR index.
15. Modifying planning documents.
16. Modifying verification documents.
17. Modifying README.
18. Modifying current-state documents.
19. Moving architecture overview files.
20. Moving, deleting, or regenerating the root `tree` file.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. `tools/check-repo-contract.sh` exists.
3. `tools/check-repo-contract.sh` is executable.
4. `docs/work-packets/WP-0017-current-state-and-readme-status-update.md` exists.
5. `docs/work-packets/WP-0018-implementation-readiness-planning.md` exists.
6. `docs/work-packets/WP-0019-package-and-tooling-baseline.md` exists.
7. `docs/planning/06-implementation-readiness-plan.md` exists.
8. `docs/planning/07-package-and-tooling-baseline.md` exists.
9. Runtime implementation has not started.
10. Package-manager setup does not exist yet.
11. CI workflows do not exist yet.
12. The script should remain local, Bash-based, dependency-light, read-only, and non-mutating.

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
2. This packet may create only `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md`.
3. This packet must not modify ADRs.
4. This packet must not modify README.
5. This packet must not modify current-state documents.
6. This packet must not modify planning documents.
7. This packet must not modify verification documents.
8. This packet must not create package files.
9. This packet must not create lockfiles.
10. This packet must not create CI workflows.
11. This packet must not create runtime code.
12. The script must remain non-mutating.

---

## 8. Risks

| Risk                                                                               | Severity | Mitigation                                                                            |
| ---------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| Repo contract script becomes stale after WP-0017 through WP-0019.                  | Medium   | Update script to include the new baseline files and anchors.                          |
| Script overreaches and starts requiring package files before package setup exists. | High     | Do not add package file checks.                                                       |
| Script starts requiring CI before CI exists.                                       | High     | Do not add CI checks.                                                                 |
| Script starts requiring runtime code before runtime implementation starts.         | High     | Do not add runtime file checks.                                                       |
| Script mutates files.                                                              | High     | Preserve read-only behavior.                                                          |
| Script checks overly brittle prose.                                                | Medium   | Use stable headings and core anchor phrases.                                          |
| Future packets forget to update the script.                                        | Medium   | Continue using explicit repo contract script update packets after baseline expansion. |

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
docs/work-packets/WP-0020-repo-contract-script-readiness-update.md
```

## 10.2 Files to Modify

```text
tools/check-repo-contract.sh
```

## 10.3 Files to Review

```text
tools/check-repo-contract.sh
docs/work-packets/WP-0017-current-state-and-readme-status-update.md
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/work-packets/WP-0019-package-and-tooling-baseline.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
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
3. Confirm `docs/work-packets/WP-0017-current-state-and-readme-status-update.md` exists.
4. Confirm `docs/work-packets/WP-0018-implementation-readiness-planning.md` exists.
5. Confirm `docs/work-packets/WP-0019-package-and-tooling-baseline.md` exists.
6. Confirm `docs/planning/06-implementation-readiness-plan.md` exists.
7. Confirm `docs/planning/07-package-and-tooling-baseline.md` exists.
8. Create `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md`.
9. Update `tools/check-repo-contract.sh` work-packet checks.
10. Update `tools/check-repo-contract.sh` planning document checks.
11. Update heading anchor checks.
12. Update baseline phrase/content anchor checks.
13. Preserve all existing checks.
14. Run `./tools/check-repo-contract.sh`.
15. Run `git diff --check`.
16. Commit this packet and script update atomically, unless this packet is committed separately.

---

## 12. Required Script Updates

## 12.1 Work Packet File Checks

Add:

```bash
check_file "docs/work-packets/WP-0017-current-state-and-readme-status-update.md"
check_file "docs/work-packets/WP-0018-implementation-readiness-planning.md"
check_file "docs/work-packets/WP-0019-package-and-tooling-baseline.md"
check_file "docs/work-packets/WP-0020-repo-contract-script-readiness-update.md"
```

near the existing work-packet file checks.

## 12.2 Planning Document Checks

Add:

```bash
check_file "docs/planning/06-implementation-readiness-plan.md"
check_file "docs/planning/07-package-and-tooling-baseline.md"
```

near the existing planning document checks.

## 12.3 Heading Anchor Checks

Add:

```bash
check_contains "docs/planning/06-implementation-readiness-plan.md" '^# Implementation Readiness Plan$' "implementation readiness plan has expected heading"
check_contains "docs/planning/07-package-and-tooling-baseline.md" '^# Package and Tooling Baseline$' "package and tooling baseline has expected heading"
```

near the existing heading anchor checks.

## 12.4 Implementation Readiness Anchor Checks

Add:

```bash
check_contains "docs/planning/06-implementation-readiness-plan.md" 'Readiness Gates' "implementation readiness plan defines readiness gates"
check_contains "docs/planning/06-implementation-readiness-plan.md" 'What Is Ready Now' "implementation readiness plan defines ready state"
check_contains "docs/planning/06-implementation-readiness-plan.md" 'What Is Not Ready Yet' "implementation readiness plan defines not-ready state"
check_contains "docs/planning/06-implementation-readiness-plan.md" 'Prohibited Premature Work' "implementation readiness plan defines prohibited premature work"
```

## 12.5 Package and Tooling Anchor Checks

Add:

```bash
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'Package-Manager Strategy' "package and tooling baseline defines package-manager strategy"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'Lockfile Expectations' "package and tooling baseline defines lockfile expectations"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'Local Command Categories' "package and tooling baseline defines local command categories"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'Repo Contract Integration' "package and tooling baseline defines repo contract integration"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'Prohibited Premature Work' "package and tooling baseline defines prohibited premature work"
```

---

## 13. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md` exists.
2. `tools/check-repo-contract.sh` still exists.
3. `tools/check-repo-contract.sh` is still executable.
4. The script checks `docs/work-packets/WP-0017-current-state-and-readme-status-update.md`.
5. The script checks `docs/work-packets/WP-0018-implementation-readiness-planning.md`.
6. The script checks `docs/work-packets/WP-0019-package-and-tooling-baseline.md`.
7. The script checks `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md`.
8. The script checks `docs/planning/06-implementation-readiness-plan.md`.
9. The script checks `docs/planning/07-package-and-tooling-baseline.md`.
10. The script checks `# Implementation Readiness Plan`.
11. The script checks `# Package and Tooling Baseline`.
12. The script checks readiness-plan anchors.
13. The script checks package/tooling anchors.
14. The script remains non-mutating.
15. The script does not require package files.
16. The script does not require lockfiles.
17. The script does not require CI workflows.
18. The script does not require runtime code.
19. No ADR files are modified.
20. No documentation files other than this packet are modified.
21. No secrets or sensitive values are introduced.
22. `./tools/check-repo-contract.sh` passes.
23. `git diff --check` passes.

---

## 14. Verification Plan

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
grep -q '^title: "WP-0020: Repo Contract Script Readiness Update"$' docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
grep -q '^# WP-0020: Repo Contract Script Readiness Update$' docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
grep -q 'tools/check-repo-contract.sh' docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
grep -q 'WP-0018' docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
grep -q 'WP-0019' docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
grep -q 'docs/planning/07-package-and-tooling-baseline.md' docs/work-packets/WP-0020-repo-contract-script-readiness-update.md && \
git diff --check
```

Run after updating the script:

```bash
test -x tools/check-repo-contract.sh && \
grep -q 'docs/work-packets/WP-0017-current-state-and-readme-status-update.md' tools/check-repo-contract.sh && \
grep -q 'docs/work-packets/WP-0018-implementation-readiness-planning.md' tools/check-repo-contract.sh && \
grep -q 'docs/work-packets/WP-0019-package-and-tooling-baseline.md' tools/check-repo-contract.sh && \
grep -q 'docs/work-packets/WP-0020-repo-contract-script-readiness-update.md' tools/check-repo-contract.sh && \
grep -q 'docs/planning/06-implementation-readiness-plan.md' tools/check-repo-contract.sh && \
grep -q 'docs/planning/07-package-and-tooling-baseline.md' tools/check-repo-contract.sh && \
grep -q '# Implementation Readiness Plan' tools/check-repo-contract.sh && \
grep -q '# Package and Tooling Baseline' tools/check-repo-contract.sh && \
grep -q 'Readiness Gates' tools/check-repo-contract.sh && \
grep -q 'Package-Manager Strategy' tools/check-repo-contract.sh && \
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
5. Confirm the script does not require lockfiles.
6. Confirm the script does not require runtime code.
7. Confirm no ADR files were modified.
8. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

---

## 15. Security and Privacy Notes

Security notes:

```text
This packet updates a local shell verification script. The script must remain read-only and must not inspect secrets, credentials, private keys, environment variables, local absolute paths, or sensitive logs.
```

Privacy notes:

```text
The script should use repository-relative paths and should not print private machine or account information.
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

1. Create `docs/work-packets/WP-0020-repo-contract-script-readiness-update.md`.
2. Update `tools/check-repo-contract.sh`.

Documentation intentionally deferred:

1. Updating README is deferred.
2. Updating current-state is deferred.
3. Updating repo contract baseline is deferred.
4. Creating package files is deferred.
5. Creating lockfiles is deferred.
6. Creating CI workflow is deferred.
7. Creating runtime code is deferred.
8. Creating executable evaluation harness implementation is deferred.

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
git add docs/work-packets/WP-0020-repo-contract-script-readiness-update.md
git commit -m "docs(work-packets): add repo contract script readiness update packet"
```

If committing this packet together with the script update:

```bash
git add docs/work-packets/WP-0020-repo-contract-script-readiness-update.md tools/check-repo-contract.sh
git commit -m "chore(verification): update repo contract script for readiness planning"
```

Recommended final commit message after execution:

```text
chore(verification): update repo contract script for readiness planning
```

---

## 19. Follow-up Work

Follow-up items:

1. Execute this packet by updating `tools/check-repo-contract.sh`.
2. Create `WP-0021: Package and Tooling Setup` if the Project Steward approves creating package files.
3. Create `WP-0022: CI Baseline`.
4. Create `WP-0023: Executable Evaluation Harness Planning`.
5. Create `WP-0024: Runtime Implementation Slice Plan`.
6. Create a future status update packet after package/tooling or CI readiness changes.

---

## 20. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. The repo contract script is updated.
3. The repo contract script passes locally.
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
This packet keeps executable local verification synchronized with the growing implementation-readiness documentation baseline. It deliberately does not introduce package files, lockfiles, CI, runtime code, or executable evaluation harness code.
```