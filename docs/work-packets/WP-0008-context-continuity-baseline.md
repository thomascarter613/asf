---
title: "WP-0008: Context Continuity Baseline"
description: "Creates the initial context-continuity baseline for the uploaded repository tree, defining current-state, handoff, and context-source artifacts aligned with repository-based context continuity and canonical repository plus vector retrieval decisions."
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
work_packet_id: "WP-0008"
milestone: "Baseline Stabilization"
backlog_refs: []
adr_refs:
  - "ADR-0002"
  - "ADR-0006"
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/work-packets/WP-0005-repository-verification-baseline.md"
  - "docs/work-packets/WP-0006-adr-index-normalization-review.md"
  - "docs/work-packets/WP-0007-repo-contract-testing-baseline.md"
  - "docs/adr/ADR-0002-repository-based-context-continuity.md"
  - "docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
affected_files:
  - "docs/work-packets/WP-0008-context-continuity-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
recommended_commit: "docs(ai): add context continuity baseline"
---

# WP-0008: Context Continuity Baseline

## 1. Purpose

This work packet governs creation of the initial context-continuity baseline for the current uploaded repository tree.

The repository already contains strong decisions around repository-based context continuity, canonical repository memory, vector retrieval, evaluation, work packets, and repo contract testing.

The next stabilization step is to create durable AI/context-continuity artifacts so future humans and AI sessions can resume work without relying on fragile chat memory.

This packet authorizes creation of:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
````

This packet does not implement vector retrieval, embeddings, Qdrant, agent execution, evaluation harness code, or runtime context assembly.

It creates the documentation baseline for context continuity.

---

## 2. Current Status

Current status:

```text
ready
```

Status notes:

```text
This packet is ready because the repository baseline, domain model, planning baseline, verification baseline, repo contract baseline, and ADR normalization review exist. The next required stabilization step is durable context-continuity documentation.
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
```

## 3.4 Related ADRs

```text
ADR-0002: Repository-Based Context Continuity
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

## 3.5 Related Planning, Domain, and Verification Documents

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

---

## 4. Scope

In scope:

1. Create `docs/work-packets/WP-0008-context-continuity-baseline.md`.
2. Create `docs/ai/00-current-state.md`.
3. Create `docs/ai/01-handoff-packet-template.md`.
4. Create `docs/ai/02-context-source-rules.md`.
5. Define the current repository state for future continuation.
6. Define how a future handoff packet should be structured.
7. Define which repository files are authoritative context sources.
8. Define context source priority.
9. Define context staleness risks.
10. Define known baseline caveats that future sessions must preserve.
11. Define what context should not be included.
12. Define how context continuity relates to future vector retrieval.
13. Define how context continuity relates to evaluation.
14. Preserve the uploaded baseline without mutation.

---

## 5. Non-Goals

Out of scope:

1. Implementing vector search.
2. Implementing Qdrant.
3. Creating embeddings.
4. Creating a retrieval service.
5. Creating context-pack assembler code.
6. Creating runtime implementation code.
7. Creating evaluation harness code.
8. Creating repo contract scripts.
9. Creating CI workflows.
10. Creating package-manager files.
11. Renaming ADRs.
12. Renumbering ADRs.
13. Filling ADR gaps.
14. Removing duplicate ADR topics.
15. Moving architecture overview files.
16. Removing the `tree` file.
17. Adding root `README.md`.
18. Modifying existing baseline documents.
19. Creating an application memory database.
20. Creating agent runtime tooling.

---

## 6. Assumptions

Assumptions:

1. The uploaded repository tree is the active baseline.
2. ADR-0002 establishes repository-based context continuity as a central project decision.
3. ADR-0006 establishes canonical repository plus vector retrieval as a future retrieval direction.
4. ADR-0022 establishes evaluation of context continuity as an important future concern.
5. Repository files should remain the durable source of truth.
6. Vector retrieval should eventually augment repository context, not replace it.
7. Future AI sessions need a current-state document.
8. Future AI sessions need clear source-selection rules.
9. Future handoff packets should be structured and repeatable.
10. Context continuity artifacts must not include secrets or sensitive values.
11. Context continuity artifacts must preserve known baseline caveats.
12. This packet is documentation-only.

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

1. This packet may create `docs/ai/`.
2. This packet may create the three context-continuity artifacts listed in scope.
3. This packet may create only this work packet and the context-continuity artifacts.
4. This packet must not modify existing ADRs.
5. This packet must not modify product documents.
6. This packet must not modify architecture documents.
7. This packet must not modify domain, planning, or verification documents.
8. This packet must not create runtime implementation code.
9. This packet must not claim vector retrieval exists.
10. This packet must not claim evaluation harness implementation exists.
11. This packet must preserve known baseline exceptions.

---

## 8. Risks

| Risk                                                                  | Severity | Mitigation                                                                                               |
| --------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| Future sessions rely on chat history instead of repository artifacts. | High     | Create current-state and context-source rules.                                                           |
| Context artifacts become stale.                                       | High     | Include update triggers and staleness warnings.                                                          |
| Context source rules accidentally override ADRs.                      | Medium   | Treat ADRs as high-priority source inputs.                                                               |
| Context docs imply vector retrieval already exists.                   | Medium   | State clearly that vector retrieval is future implementation.                                            |
| Handoff packet becomes too broad to use.                              | Medium   | Keep handoff structure focused on current state, next work, risks, and verification.                     |
| Sensitive data is included in context artifacts.                      | High     | Define exclusions and security notes.                                                                    |
| Baseline caveats are lost in future sessions.                         | Medium   | Include ADR gaps, architecture duplication, root README absence, and ADR overlap in current-state notes. |

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
This packet is ready for execution. It creates context-continuity documentation only and does not introduce retrieval tooling, runtime code, CI, scripts, or agent execution infrastructure.
```

---

## 10. Affected Files

## 10.1 Files to Create

```text
docs/work-packets/WP-0008-context-continuity-baseline.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
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
docs/verification/01-repo-contract-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/adr/ADR-0002-repository-based-context-continuity.md
docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md
docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
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
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
docs/work-packets/WP-0006-adr-index-normalization-review.md
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
```

---

## 11. Implementation Plan

1. Confirm `docs/planning/01-planning-baseline.md` exists.
2. Confirm `docs/domain/00-domain-model.md` exists.
3. Confirm `docs/verification/01-repo-contract-baseline.md` exists.
4. Confirm current work-packet system exists.
5. Create `docs/work-packets/WP-0008-context-continuity-baseline.md`.
6. Create `docs/ai/`.
7. Create `docs/ai/00-current-state.md`.
8. Create `docs/ai/01-handoff-packet-template.md`.
9. Create `docs/ai/02-context-source-rules.md`.
10. In the current-state document, summarize the repository baseline, stabilization status, active caveats, and next work.
11. In the handoff template, define a repeatable handoff format for future continuation.
12. In the context-source rules document, define source priority, inclusion rules, exclusion rules, update triggers, and future retrieval relationship.
13. Run verification.
14. Commit this packet and the context-continuity artifacts atomically, unless this packet is committed separately.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. `docs/work-packets/WP-0008-context-continuity-baseline.md` exists.
2. `docs/ai/00-current-state.md` exists.
3. `docs/ai/01-handoff-packet-template.md` exists.
4. `docs/ai/02-context-source-rules.md` exists.
5. Each new context-continuity document includes YAML frontmatter.
6. `00-current-state.md` includes `# Current State`.
7. `01-handoff-packet-template.md` includes `# Handoff Packet Template`.
8. `02-context-source-rules.md` includes `# Context Source Rules`.
9. Each document states that the uploaded repository tree is the active baseline where relevant.
10. Current state identifies the next recommended work.
11. Handoff template includes verification state.
12. Context source rules define source priority.
13. Context source rules define exclusions.
14. Context source rules state that vector retrieval augments repository memory and does not replace it.
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
test -f docs/work-packets/WP-0008-context-continuity-baseline.md && \
test -f docs/ai/00-current-state.md && \
test -f docs/ai/01-handoff-packet-template.md && \
test -f docs/ai/02-context-source-rules.md && \
grep -q '^title: "WP-0008: Context Continuity Baseline"$' docs/work-packets/WP-0008-context-continuity-baseline.md && \
grep -q '^# WP-0008: Context Continuity Baseline$' docs/work-packets/WP-0008-context-continuity-baseline.md && \
grep -q '^title: "Current State"$' docs/ai/00-current-state.md && \
grep -q '^# Current State$' docs/ai/00-current-state.md && \
grep -q '^title: "Handoff Packet Template"$' docs/ai/01-handoff-packet-template.md && \
grep -q '^# Handoff Packet Template$' docs/ai/01-handoff-packet-template.md && \
grep -q '^title: "Context Source Rules"$' docs/ai/02-context-source-rules.md && \
grep -q '^# Context Source Rules$' docs/ai/02-context-source-rules.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/ai/00-current-state.md && \
grep -q 'Verification State' docs/ai/01-handoff-packet-template.md && \
grep -q 'Source Priority' docs/ai/02-context-source-rules.md && \
grep -q 'Vector retrieval augments repository memory' docs/ai/02-context-source-rules.md && \
git diff --check
```

## 13.2 Manual Checks

Manual verification:

1. Confirm the context-continuity baseline is documentation-only.
2. Confirm it does not claim vector retrieval exists.
3. Confirm it does not claim evaluation harness implementation exists.
4. Confirm it does not modify existing ADRs.
5. Confirm it does not modify product or architecture documents.
6. Confirm current-state notes preserve known baseline caveats.
7. Confirm context-source rules do not include sensitive files.
8. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, and manual review confirms the context-continuity baseline is aligned to the uploaded repository baseline.
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
This packet creates AI/context-continuity documentation only. It must not include secrets, credentials, private keys, tokens, infrastructure secrets, local absolute paths, or sensitive operational values.
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
8. Do not include content from outside the repository baseline unless explicitly authorized.

---

## 15. Documentation Updates

Required documentation updates:

1. Create `docs/ai/00-current-state.md`.
2. Create `docs/ai/01-handoff-packet-template.md`.
3. Create `docs/ai/02-context-source-rules.md`.
4. Create `docs/work-packets/WP-0008-context-continuity-baseline.md`.

Documentation intentionally deferred:

1. Vector retrieval implementation is deferred.
2. Qdrant setup is deferred.
3. Embedding pipeline is deferred.
4. Evaluation harness implementation is deferred.
5. Runtime context assembly is deferred.
6. Repo contract script is deferred.
7. Root README baseline is deferred to a later packet.
8. Architecture overview placement review is deferred to a later packet.

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
git add docs/work-packets/WP-0008-context-continuity-baseline.md docs/ai/00-current-state.md docs/ai/01-handoff-packet-template.md docs/ai/02-context-source-rules.md
git commit -m "docs(ai): add context continuity baseline"
```

Commit message:

```text
docs(ai): add context continuity baseline
```

Commit guidance:

1. The commit should include only this packet and the three context-continuity artifacts.
2. Do not include ADR edits.
3. Do not include product document edits.
4. Do not include architecture document edits.
5. Do not include domain model edits.
6. Do not include planning document edits.
7. Do not include verification document edits.
8. Do not include executable scripts.
9. Do not include CI workflows.
10. Do not include runtime implementation code.
11. Run verification before committing.

---

## 18. Follow-up Work

Follow-up items:

1. Execute this packet by creating `docs/ai/00-current-state.md`.
2. Execute this packet by creating `docs/ai/01-handoff-packet-template.md`.
3. Execute this packet by creating `docs/ai/02-context-source-rules.md`.
4. Create a future packet for root README baseline.
5. Create a future packet for architecture overview placement review.
6. Create a future packet for executable repo contract script.
7. Create a future packet for context pack generation rules.
8. Create a future packet for evaluation harness baseline.

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
This packet makes context continuity operational at the documentation level. It gives future sessions a stable current-state file, a handoff template, and source-selection rules before runtime retrieval or evaluation tooling exists.
```

## Verification Commands

Run the relevant repository verification commands for this historical packet:

```bash
bun run verify
bash tools/eval/run-evaluations.sh
bun run work-packet validate-repo
```
