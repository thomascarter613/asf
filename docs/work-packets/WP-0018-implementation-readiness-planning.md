---
title: "WP-0018: Implementation Readiness Planning"
description: "Creates the implementation readiness planning packet for the Agentic Software Framework, defining what must be true before package tooling, CI, runtime implementation, executable evaluation harness work, and first product code begin."
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
work_packet_id: "WP-0018"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0001"
  - "ADR-0002"
  - "ADR-0003"
  - "ADR-0006"
  - "ADR-0014"
  - "ADR-0018"
  - "ADR-0019"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "README.md"
  - "tree"
  - "docs/adr/README.md"
  - "docs/domain/00-domain-model.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
  - "docs/planning/05-persistence-adr-overlap-review.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "tools/check-repo-contract.sh"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
affected_files:
  - "docs/work-packets/WP-0018-implementation-readiness-planning.md"
  - "docs/planning/06-implementation-readiness-plan.md"
recommended_commit: "docs(planning): add implementation readiness plan"
---

# WP-0018: Implementation Readiness Planning

## 1. Purpose

This work packet governs creation of the implementation readiness plan for the Agentic Software Framework.

The uploaded repository tree is the active baseline.

The project has completed a substantial baseline stabilization sequence. The repository now has:

1. Product documents.
2. Architecture documents.
3. ADR governance.
4. ADR index gap and status annotation.
5. Domain model baseline.
6. Planning baseline.
7. Verification baseline.
8. Repo contract baseline.
9. Executable local repo contract script.
10. Evaluation harness baseline.
11. Context-continuity artifacts.
12. Root README.
13. Work-packet governance.
14. Review artifacts for known baseline caveats.

The next step is not to start coding randomly.

The next step is to define what must be true before the project begins:

1. Package and tooling setup.
2. CI baseline.
3. Runtime implementation.
4. Executable evaluation harness work.
5. First source-code slice.
6. Future persistence/retrieval work.
7. Future agent execution work.

This packet authorizes creation of:

```text
docs/planning/06-implementation-readiness-plan.md
````

This packet does **not** authorize package-manager setup, CI creation, runtime code, executable evaluation harness code, database schema, API implementation, vector retrieval implementation, or agent runtime implementation.

It creates the bridge from baseline stabilization to controlled implementation readiness.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the repository has root orientation, current-state documentation, work-packet governance, baseline planning, domain modeling, verification baselines, an executable repo contract script, and a documentation-level evaluation harness baseline.
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
WP-0009: Root README Baseline
WP-0010: Architecture Overview Placement Review
WP-0011: Baseline Tree Artifact Policy
WP-0012: ADR Index Gap and Status Annotation
WP-0013: Persistence ADR Overlap Review
WP-0014: Executable Repo Contract Script
WP-0015: Evaluation Harness Baseline
WP-0016: Repo Contract Script Baseline Update
WP-0017: Current State and README Status Update
```

## 3.4 Related ADRs

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0003: Repository Topology — Bounded Monorepos Over Monolith or Full Fragmentation
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0014: Polyglot Language Strategy
ADR-0018: Work Packet Lifecycle
ADR-0019: Primary Package Managers
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Planning, Verification, and Context Documents

```text
README.md
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/domain/00-domain-model.md
docs/planning/01-planning-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0018-implementation-readiness-planning.md`.
2. Create `docs/planning/06-implementation-readiness-plan.md`.
3. Define implementation readiness purpose.
4. Define readiness gates.
5. Define what is ready now.
6. Define what is not ready yet.
7. Define pre-implementation blockers.
8. Define implementation sequencing.
9. Define package/tooling readiness expectations.
10. Define CI readiness expectations.
11. Define runtime readiness expectations.
12. Define evaluation harness readiness expectations.
13. Define persistence/retrieval readiness expectations.
14. Define security readiness expectations.
15. Define documentation readiness expectations.
16. Define recommended next work packets.
17. Preserve the uploaded baseline without mutation.

---

## 5. Non-Goals

Out of scope:

1. Creating package-manager files.
2. Creating `package.json`.
3. Creating lockfiles.
4. Creating CI workflows.
5. Creating runtime implementation code.
6. Creating source directories.
7. Creating database schema.
8. Creating API contracts.
9. Creating vector retrieval code.
10. Creating Qdrant collections.
11. Creating embedding pipelines.
12. Creating agent runtime code.
13. Creating executable evaluation harness code.
14. Modifying ADRs.
15. Modifying ADR index.
16. Modifying repo contract script.
17. Modifying README.
18. Modifying current-state files.
19. Moving architecture overview files.
20. Moving, deleting, or regenerating the root `tree` file.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. Runtime implementation has not started.
3. Package-manager setup does not exist yet.
4. CI workflows do not exist yet.
5. Executable evaluation harness implementation does not exist yet.
6. Local repo contract script exists.
7. Documentation-level evaluation harness baseline exists.
8. Work-packet governance is the required execution model.
9. Runtime implementation should not begin until readiness gates are explicit.
10. Package/tooling baseline should likely precede runtime code.
11. CI baseline should likely follow local tooling baseline.
12. First runtime implementation should be a deliberately scoped slice.
13. Persistence/retrieval implementation should not proceed until ADR-0013 and ADR-0015 relationship is resolved or explicitly accepted.
14. Implementation readiness planning should produce an ordered roadmap.

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

1. This packet may create `docs/planning/06-implementation-readiness-plan.md`.
2. This packet may create only this work packet and the implementation readiness plan.
3. This packet must not modify existing ADRs.
4. This packet must not modify existing verification documents.
5. This packet must not modify `tools/check-repo-contract.sh`.
6. This packet must not create runtime code.
7. This packet must not create package-manager files.
8. This packet must not create CI workflows.
9. This packet must not claim implementation readiness is complete.
10. This packet must define readiness gates before implementation begins.

---

## 8. Risks

| Risk                                                                            | Severity | Mitigation                                                                 |
| ------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| Runtime implementation begins before tooling and verification are ready.        | High     | Define implementation readiness gates.                                     |
| Package setup is added without clear language/runtime boundaries.               | Medium   | Tie package/tooling baseline to ADR-0014 and ADR-0019.                     |
| CI is added before local checks are stable.                                     | Medium   | Require local verification baseline first.                                 |
| Evaluation harness implementation begins before case model is stable.           | Medium   | Use `docs/verification/02-evaluation-harness-baseline.md` as source input. |
| Persistence/retrieval work begins while ADR-0013 and ADR-0015 remain ambiguous. | High     | Require resolution or explicit accepted interpretation first.              |
| Implementation readiness plan becomes too broad.                                | Medium   | Focus on gates, sequence, and next packets.                                |
| Future sessions confuse planning with implementation.                           | Medium   | State clearly that this packet is planning-only.                           |

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

Readiness notes:

```text
This packet is ready. It creates implementation-readiness planning only and does not start runtime implementation.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/planning/06-implementation-readiness-plan.md
```

## 10.2 Files to Modify

```text
None.
```

## 10.3 Files to Review

```text
README.md
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/adr/README.md
docs/domain/00-domain-model.md
docs/planning/01-planning-baseline.md
docs/planning/05-persistence-adr-overlap-review.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md
tools/check-repo-contract.sh
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
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/verification/*
docs/ai/*
```

---

## 11. Implementation Plan

1. Confirm `README.md` exists.
2. Confirm `docs/ai/00-current-state.md` exists.
3. Confirm `docs/domain/00-domain-model.md` exists.
4. Confirm `docs/verification/02-evaluation-harness-baseline.md` exists.
5. Confirm `tools/check-repo-contract.sh` exists and is executable.
6. Create `docs/work-packets/WP-0018-implementation-readiness-planning.md`.
7. Create `docs/planning/06-implementation-readiness-plan.md`.
8. In the readiness plan, state that the uploaded repository tree is the active baseline.
9. Define readiness gates.
10. Define current readiness status.
11. Define blockers.
12. Define allowed next work.
13. Define prohibited premature work.
14. Define recommended packet sequence.
15. Run verification.
16. Run `./tools/check-repo-contract.sh`.
17. Commit this packet and readiness plan atomically, unless this packet is committed separately.

---

## 12. Required Readiness Plan Content

The implementation readiness plan must include:

1. Purpose.
2. Baseline rule.
3. Current readiness status.
4. Readiness gates.
5. Gate 1: repository baseline.
6. Gate 2: ADR and architecture clarity.
7. Gate 3: verification and repo contract.
8. Gate 4: package/tooling baseline.
9. Gate 5: CI baseline.
10. Gate 6: evaluation baseline.
11. Gate 7: runtime slice planning.
12. Gate 8: security and exclusions.
13. Gate 9: context-continuity.
14. Blockers.
15. Approved next work.
16. Prohibited premature work.
17. Recommended packet sequence.
18. Acceptance criteria.
19. Verification.

---

## 13. Readiness Gates to Define

The readiness plan should define the following gates.

## 13.1 Gate 1 — Repository Baseline Ready

The repository baseline is ready when:

1. Required root files exist.
2. Required documentation directories exist.
3. Baseline inventory exists.
4. Root README exists.
5. Current-state document exists.
6. Repo contract script passes.

## 13.2 Gate 2 — Decision Lineage Ready

Decision lineage is ready when:

1. ADR index exists.
2. ADR template exists.
3. ADR gaps are documented.
4. ADR overlap caveats are documented.
5. No unresolved ADR issue blocks the next implementation slice.

## 13.3 Gate 3 — Verification Ready

Verification is ready when:

1. Verification baseline exists.
2. Repo contract baseline exists.
3. Executable repo contract script exists.
4. The script passes locally.
5. Verification result vocabulary is clear.

## 13.4 Gate 4 — Package and Tooling Ready

Package/tooling readiness is not complete yet.

It should be addressed by:

```text
WP-0019: Package and Tooling Baseline
```

## 13.5 Gate 5 — CI Ready

CI readiness is not complete yet.

It should be addressed by:

```text
WP-0020: CI Baseline
```

## 13.6 Gate 6 — Evaluation Ready

Evaluation baseline exists at documentation level.

Executable evaluation readiness is not complete yet.

It should be addressed by:

```text
WP-0021: Executable Evaluation Harness Planning
```

## 13.7 Gate 7 — Runtime Slice Ready

Runtime slice readiness is not complete yet.

It should be addressed by:

```text
WP-0022: Runtime Implementation Slice Plan
```

---

## 14. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0018-implementation-readiness-planning.md` exists.
2. `docs/planning/06-implementation-readiness-plan.md` exists after execution.
3. The readiness plan includes YAML frontmatter.
4. The readiness plan includes `# Implementation Readiness Plan`.
5. The readiness plan states that the uploaded repository tree is the active baseline.
6. The readiness plan defines readiness gates.
7. The readiness plan identifies what is ready now.
8. The readiness plan identifies what is not ready yet.
9. The readiness plan identifies blockers.
10. The readiness plan identifies approved next work.
11. The readiness plan identifies prohibited premature work.
12. The readiness plan recommends an ordered packet sequence.
13. The readiness plan does not claim runtime implementation has started.
14. The readiness plan does not create package-manager files.
15. The readiness plan does not create CI workflows.
16. The readiness plan does not create runtime code.
17. No ADR files are modified.
18. No verification files are modified.
19. No repo contract script changes are made.
20. No secrets or sensitive values are introduced.
21. `./tools/check-repo-contract.sh` passes.
22. `git diff --check` passes.

---

## 15. Verification Plan

Run after creating this packet:

```bash
test -f docs/work-packets/WP-0018-implementation-readiness-planning.md && \
grep -q '^title: "WP-0018: Implementation Readiness Planning"$' docs/work-packets/WP-0018-implementation-readiness-planning.md && \
grep -q '^# WP-0018: Implementation Readiness Planning$' docs/work-packets/WP-0018-implementation-readiness-planning.md && \
grep -q 'docs/planning/06-implementation-readiness-plan.md' docs/work-packets/WP-0018-implementation-readiness-planning.md && \
grep -q 'Package and Tooling Baseline' docs/work-packets/WP-0018-implementation-readiness-planning.md && \
grep -q 'Runtime Implementation Slice Plan' docs/work-packets/WP-0018-implementation-readiness-planning.md && \
git diff --check
```

Run after creating `docs/planning/06-implementation-readiness-plan.md`:

```bash
test -f docs/planning/06-implementation-readiness-plan.md && \
grep -q '^title: "Implementation Readiness Plan"$' docs/planning/06-implementation-readiness-plan.md && \
grep -q '^# Implementation Readiness Plan$' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'Readiness Gates' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'What Is Ready Now' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'What Is Not Ready Yet' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'Prohibited Premature Work' docs/planning/06-implementation-readiness-plan.md && \
./tools/check-repo-contract.sh && \
git diff --check
```

Expected result:

```text
Repo contract checks pass, readiness plan exists, and whitespace checks pass.
```

Manual verification:

1. Confirm no runtime code was created.
2. Confirm no package-manager files were created.
3. Confirm no CI workflows were created.
4. Confirm no ADR files were modified.
5. Confirm no verification documents were modified.
6. Confirm `tools/check-repo-contract.sh` was not modified.
7. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

---

## 16. Security and Privacy Notes

Security notes:

```text
This packet creates planning documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, or sensitive operational values.
```

Privacy notes:

```text
The readiness plan should use repository-relative paths, synthetic examples, and role-based references only.
```

Additional safety notes:

1. Do not include `.env` values.
2. Do not include API keys.
3. Do not include private repository URLs.
4. Do not include local absolute paths.
5. Do not include command output containing private machine details.
6. Do not include credentials in examples.

---

## 17. Documentation Updates

Required documentation updates:

1. Create `docs/work-packets/WP-0018-implementation-readiness-planning.md`.
2. In the execution step, create `docs/planning/06-implementation-readiness-plan.md`.

Documentation intentionally deferred:

1. Updating README is deferred.
2. Updating current-state is deferred.
3. Updating repo contract script is deferred.
4. Creating package/tooling baseline is deferred.
5. Creating CI baseline is deferred.
6. Creating executable evaluation harness implementation is deferred.
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
git add docs/work-packets/WP-0018-implementation-readiness-planning.md
git commit -m "docs(work-packets): add implementation readiness planning packet"
```

If committing this packet together with the readiness plan:

```bash
git add docs/work-packets/WP-0018-implementation-readiness-planning.md docs/planning/06-implementation-readiness-plan.md
git commit -m "docs(planning): add implementation readiness plan"
```

Recommended final commit message after execution:

```text
docs(planning): add implementation readiness plan
```

---

## 20. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/planning/06-implementation-readiness-plan.md`.
2. Create `WP-0019: Package and Tooling Baseline`.
3. Create `WP-0020: CI Baseline`.
4. Create `WP-0021: Executable Evaluation Harness Planning`.
5. Create `WP-0022: Runtime Implementation Slice Plan`.
6. Create a future packet to update `tools/check-repo-contract.sh` after WP-0018 is executed.
7. Create a future packet to update README/current-state after implementation-readiness planning is accepted.

---

## 21. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope files exist.
2. The implementation readiness plan exists.
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
This packet is the formal bridge between baseline stabilization and implementation readiness. It keeps the project from jumping into runtime code before tooling, CI, evaluation, security, and first-slice planning are explicitly ordered.
```

## Verification Commands

Run the relevant repository verification commands for this historical packet:

```bash
bun run verify
bash tools/eval/run-evaluations.sh
bun run work-packet validate-repo
```
