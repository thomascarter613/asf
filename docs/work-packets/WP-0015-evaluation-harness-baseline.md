---
title: "WP-0015: Evaluation Harness Baseline"
description: "Creates the initial evaluation harness baseline for the Agentic Software Framework, defining evaluation categories, scenarios, expected outcomes, quality gates, and future executable harness direction without implementing runtime evaluation code yet."
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
work_packet_id: "WP-0015"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0006"
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "README.md"
  - "tree"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0002-repository-based-context-continuity.md"
  - "docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md"
  - "docs/adr/ADR-0018-work-packet-lifecycle.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
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
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "tools/check-repo-contract.sh"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0015-evaluation-harness-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
recommended_commit: "docs(verification): add evaluation harness baseline"
---

# WP-0015: Evaluation Harness Baseline

## 1. Purpose

This work packet governs creation of the initial evaluation harness baseline for the Agentic Software Framework.

The uploaded repository tree is the active baseline.

The repository now has:

1. Product documents.
2. Architecture documents.
3. ADR governance.
4. Baseline inventory.
5. Domain model baseline.
6. Planning baseline.
7. ADR normalization review.
8. Architecture overview placement review.
9. Baseline tree artifact policy.
10. Persistence ADR overlap review.
11. Verification baseline.
12. Repo contract baseline.
13. Executable repo contract script.
14. Context-continuity artifacts.
15. Root README.
16. Work-packet governance.

The next stabilization step is to define how the project will evaluate whether context continuity, work-packet execution, repo contract behavior, future retrieval behavior, and future agent execution are working correctly.

This packet authorizes creation of:

```text
docs/verification/02-evaluation-harness-baseline.md
````

This packet does **not** authorize creating executable evaluation harness code yet.

It defines the baseline evaluation model first.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because ADR-0022 establishes evaluation harness direction, repo contract checks now have an executable local script, and the project needs an evaluation baseline before building runtime harness code.
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
WP-0014: Executable Repo Contract Script
```

## 3.4 Related ADRs

```text
ADR-0002: Repository-Based Context Continuity
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Verification Documents

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

## 3.6 Related Context Documents

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0015-evaluation-harness-baseline.md`.
2. Create `docs/verification/02-evaluation-harness-baseline.md`.
3. Define the purpose of the evaluation harness.
4. Define evaluation categories.
5. Define evaluation case structure.
6. Define evaluation scenario structure.
7. Define expected outcomes.
8. Define observed outcomes.
9. Define result statuses.
10. Define baseline evaluation cases.
11. Define context-continuity evaluations.
12. Define work-packet evaluations.
13. Define repo contract evaluations.
14. Define future retrieval evaluations.
15. Define future agent-execution evaluations.
16. Define failure and regression handling.
17. Define future executable harness direction.
18. Preserve the uploaded baseline without mutation.

---

## 5. Non-Goals

Out of scope:

1. Creating executable evaluation harness code.
2. Creating a test framework.
3. Creating package-manager files.
4. Creating runtime implementation code.
5. Creating database schema.
6. Creating API contracts.
7. Creating vector retrieval code.
8. Creating Qdrant collections.
9. Creating embedding pipelines.
10. Creating agent runtime code.
11. Creating CI workflows.
12. Modifying ADR files.
13. Modifying the ADR index.
14. Modifying repo contract script.
15. Modifying current-state documents.
16. Modifying README.
17. Modifying planning documents.
18. Modifying verification documents other than the new baseline artifact.
19. Installing dependencies.
20. Running model evaluations.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. ADR-0022 establishes evaluation harness direction.
3. Evaluation should begin as documentation before code.
4. The first evaluation baseline should be technology-neutral.
5. The repository does not yet have package-manager setup.
6. The repository does not yet have runtime implementation.
7. The repository does not yet have retrieval implementation.
8. The repository does not yet have agent execution infrastructure.
9. The first executable evaluation harness will come later.
10. The evaluation harness should evaluate repository-grounded behavior, not merely unit tests.
11. Evaluation cases should be reproducible.
12. Failed evaluations should produce follow-up work.
13. Evaluation results must not be hidden or inflated.
14. Evaluation should respect context source rules and secret exclusions.

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

1. This packet may create `docs/verification/02-evaluation-harness-baseline.md`.
2. This packet may create only this work packet and the evaluation harness baseline.
3. This packet must not modify existing ADRs.
4. This packet must not modify existing verification documents.
5. This packet must not modify repo contract script.
6. This packet must not create runtime code.
7. This packet must not create executable evaluation code.
8. This packet must not create package-manager setup.
9. This packet must not create CI.
10. This packet must not claim evaluation harness implementation exists.

---

## 8. Risks

| Risk                                                                   | Severity | Mitigation                                                                     |
| ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ |
| Evaluation baseline is mistaken for implemented harness.               | Medium   | State clearly that this is documentation-level only.                           |
| Evaluation cases are too vague to implement later.                     | Medium   | Define concrete case structure and expected outcomes.                          |
| Evaluation tries to test runtime behavior before runtime exists.       | Medium   | Separate current baseline evaluations from future runtime evaluations.         |
| Agent execution evaluation becomes subjective.                         | High     | Define expected outcomes, observed outcomes, pass/fail criteria, and evidence. |
| Retrieval evaluation starts before retrieval architecture is resolved. | Medium   | Mark retrieval evaluation as future and dependent on ADR clarity.              |
| Failed evaluations are hidden.                                         | High     | Define regression and failure handling.                                        |
| Evaluation includes sensitive content.                                 | High     | Reuse context source exclusions and security notes.                            |

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
This packet is ready. It creates the evaluation harness baseline as documentation only and does not implement executable evaluation tooling.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0015-evaluation-harness-baseline.md
docs/verification/02-evaluation-harness-baseline.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
README.md
docs/adr/README.md
docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
tools/check-repo-contract.sh
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

## 10.4 Files Intentionally Not Touched

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
README.md
tree
tools/check-repo-contract.sh
docs/adr/*
docs/product/*
docs/architecture/*
docs/domain/*
docs/planning/*
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/ai/*
docs/work-packets/*
```

---

## 11. Implementation Plan

1. Confirm `docs/verification/01-repo-contract-baseline.md` exists.
2. Confirm `docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md` exists.
3. Confirm `docs/domain/00-domain-model.md` exists.
4. Confirm `docs/ai/02-context-source-rules.md` exists.
5. Confirm `tools/check-repo-contract.sh` exists.
6. Create `docs/work-packets/WP-0015-evaluation-harness-baseline.md`.
7. Create `docs/verification/02-evaluation-harness-baseline.md`.
8. In the baseline artifact, state that the uploaded repository tree is the active baseline.
9. Define evaluation harness purpose.
10. Define evaluation categories.
11. Define evaluation case structure.
12. Define evaluation result vocabulary.
13. Define baseline evaluation cases.
14. Define future evaluation cases.
15. Define regression handling.
16. Define future executable harness direction.
17. Run verification.
18. Commit this packet and baseline artifact atomically, unless this packet is committed separately.

---

## 12. Evaluation Categories to Define

The evaluation harness baseline should define these categories:

```text
context-continuity
work-packet-discipline
repo-contract-compliance
verification-truthfulness
adr-preservation
baseline-caveat-preservation
future-retrieval-quality
future-agent-execution
future-runtime-behavior
security-and-exclusion-compliance
```

---

## 13. Initial Evaluation Case Candidates

The baseline should include initial cases such as:

1. Future session identifies active baseline.
2. Future session preserves ADR gaps.
3. Future session does not delete overlapping ADRs.
4. Future session chooses the active work packet.
5. Future session reports verification truthfully.
6. Repo contract script passes on expected baseline.
7. Repo contract script fails when a required file is missing.
8. Context source rules exclude secrets.
9. Handoff packet includes verification state.
10. Persistence ADR overlap remains unresolved until explicit resolution.

These cases are documentation-level definitions until an executable harness exists.

---

## 14. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0015-evaluation-harness-baseline.md` exists.
2. `docs/verification/02-evaluation-harness-baseline.md` exists after execution.
3. The baseline artifact includes YAML frontmatter.
4. The baseline artifact includes `# Evaluation Harness Baseline`.
5. The baseline states that the uploaded repository tree is the active baseline.
6. The baseline defines evaluation categories.
7. The baseline defines evaluation case structure.
8. The baseline defines expected outcomes.
9. The baseline defines observed outcomes.
10. The baseline defines result statuses.
11. The baseline defines initial evaluation cases.
12. The baseline defines future retrieval evaluation.
13. The baseline defines future agent-execution evaluation.
14. The baseline defines regression handling.
15. The baseline defines future executable harness direction.
16. The baseline does not claim executable evaluation code exists.
17. No existing ADRs are modified.
18. No existing verification docs are modified.
19. No runtime implementation code is introduced.
20. No executable evaluation scripts are introduced.
21. No CI workflows are introduced.
22. No secrets or sensitive values are introduced.
23. `git diff --check` passes.

---

## 15. Verification Plan

Verification must be performed before the packet can be marked complete.

## 15.1 Packet-Creation Verification

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
grep -q '^title: "WP-0015: Evaluation Harness Baseline"$' docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
grep -q '^# WP-0015: Evaluation Harness Baseline$' docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
grep -q 'docs/verification/02-evaluation-harness-baseline.md' docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
grep -q 'ADR-0022' docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
grep -q 'context-continuity' docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
grep -q 'repo-contract-compliance' docs/work-packets/WP-0015-evaluation-harness-baseline.md && \
git diff --check
```

## 15.2 Follow-Up Baseline Artifact Verification

Run after creating `docs/verification/02-evaluation-harness-baseline.md`:

```bash
test -f docs/verification/02-evaluation-harness-baseline.md && \
grep -q '^title: "Evaluation Harness Baseline"$' docs/verification/02-evaluation-harness-baseline.md && \
grep -q '^# Evaluation Harness Baseline$' docs/verification/02-evaluation-harness-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/02-evaluation-harness-baseline.md && \
grep -q 'Evaluation Categories' docs/verification/02-evaluation-harness-baseline.md && \
grep -q 'Evaluation Case Structure' docs/verification/02-evaluation-harness-baseline.md && \
grep -q 'Expected Outcome' docs/verification/02-evaluation-harness-baseline.md && \
grep -q 'Observed Outcome' docs/verification/02-evaluation-harness-baseline.md && \
grep -q 'Regression Handling' docs/verification/02-evaluation-harness-baseline.md && \
git diff --check
```

## 15.3 Optional Repo Contract Check

After both files exist, run:

```bash
./tools/check-repo-contract.sh
```

Expected current behavior:

```text
This may fail until the repo contract script is updated to include WP-0015 and the new evaluation baseline.
```

If it fails only because the new files are not yet included in the script’s expected baseline, that is an accepted limitation for this packet unless the Project Steward chooses to update the script in a separate packet.

## 15.4 Manual Checks

Manual verification:

1. Confirm no executable evaluation harness code was created.
2. Confirm no existing ADRs were modified.
3. Confirm no existing verification documents were modified.
4. Confirm no repo contract script changes were made.
5. Confirm the baseline clearly separates current documentation-level evaluation from future executable harness implementation.
6. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

## 15.5 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the evaluation harness baseline is documentation-level only.
```

## 15.6 Verification Result Status

Current result:

```text
not_run
```

---

## 16. Security and Privacy Notes

Security notes:

```text
This packet creates verification documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, or sensitive operational values.
```

Privacy notes:

```text
The evaluation baseline should use repository-relative paths, synthetic scenarios, and role-based references only.
```

Additional safety notes:

1. Do not include `.env` values.
2. Do not include API keys.
3. Do not include private repository URLs.
4. Do not include raw logs containing sensitive values.
5. Do not include personal private data.
6. Do not include secrets in sample evaluation inputs.
7. Do not create evaluation cases that require sensitive files.

---

## 17. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0015-evaluation-harness-baseline.md`.
2. In the execution step, create `docs/verification/02-evaluation-harness-baseline.md`.

Documentation intentionally deferred:

1. Updating the repo contract script to check this new file is deferred.
2. Updating README is deferred.
3. Updating current-state is deferred.
4. Creating executable evaluation harness code is deferred.
5. Creating package-manager setup is deferred.
6. Creating CI workflows is deferred.
7. Runtime implementation is deferred.

---

## 18. Completion Record

This section must be completed before the packet is marked `complete`.

## 18.1 Completion Summary

```text
Not completed yet.
```

## 18.2 Files Created

```text
None yet.
```

## 18.3 Files Modified

```text
None yet.
```

## 18.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 18.5 Verification Commands Run

```bash
# Not run yet.
```

## 18.6 Verification Result

```text
not_run
```

## 18.7 Known Limitations

```text
None recorded yet.
```

## 18.8 Follow-up Work Created

```text
None yet.
```

## 18.9 Completion Actor

```text
Not completed yet.
```

## 18.10 Completion Date

```text
Not completed yet.
```

---

## 19. Recommended Atomic Commit

If committing the packet by itself first:

```bash
git add docs/work-packets/WP-0015-evaluation-harness-baseline.md
git commit -m "docs(work-packets): add evaluation harness baseline packet"
```

If committing this packet together with the evaluation harness baseline:

```bash
git add docs/work-packets/WP-0015-evaluation-harness-baseline.md docs/verification/02-evaluation-harness-baseline.md
git commit -m "docs(verification): add evaluation harness baseline"
```

Recommended final commit message after execution:

```text
docs(verification): add evaluation harness baseline
```

Commit guidance:

1. The final execution commit may include this packet and `docs/verification/02-evaluation-harness-baseline.md`.
2. Do not include ADR edits.
3. Do not include repo contract script edits.
4. Do not include README edits.
5. Do not include current-state edits.
6. Do not include CI workflows.
7. Do not include package-manager files.
8. Do not include runtime code.
9. Run verification before committing.

---

## 20. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/verification/02-evaluation-harness-baseline.md`.
2. Create a future packet to update `tools/check-repo-contract.sh` to include WP-0015 and the evaluation baseline.
3. Create a future packet to update README/current-state with the evaluation baseline if desired.
4. Create a future packet for implementation-readiness planning.
5. Create a future packet for package/tooling baseline.
6. Create a future packet for CI baseline.
7. Create a future packet for executable evaluation harness implementation.

---

## 21. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. The evaluation harness baseline exists.
3. All acceptance criteria are satisfied or explicitly deferred with rationale.
4. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
5. Failed verification is not hidden.
6. Completion Record is filled in.
7. Recommended commit is accurate.
8. Follow-up work is recorded.
9. The packet status is updated to `complete`.

---

## 22. Notes

```text
This packet defines how the project will evaluate its own agentic software-development behavior before implementing the evaluation harness. It keeps the evaluation model grounded in repository artifacts, work packets, context continuity, repo contract checks, and future retrieval/agent execution scenarios.
```