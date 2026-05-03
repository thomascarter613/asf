---
title: "ADR-0018: Work Packet Lifecycle"
description: "Accepts a formal lifecycle for work packets from draft through closure and exceptional states."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0018"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - sdlc
  - lifecycle
---

# ADR-0018: Work Packet Lifecycle

## Status

Accepted

## Date

2026-04-28

## Decision Owner

Project Owner

## Related Documents

- `docs/foundry/00-foundry-charter.md`
- `governance/CLEAN_ROOM_POLICY.md`
- `docs/adr/ADR-0001-repository-based-context-continuity.md`
- `docs/adr/ADR-0002-clean-room-architecture-and-pattern-adoption.md`
- `docs/adr/ADR-0003-foundry-control-plane.md`
- `docs/adr/ADR-0004-canonical-repository-plus-vector-retrieval.md`
- `docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md`
- `docs/adr/ADR-0006-directive-compiler-and-work-protocols.md`
- `docs/adr/ADR-0007-multi-agent-runtime-and-role-separation.md`
- `docs/adr/ADR-0008-worktree-based-parallel-execution.md`
- `docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md`
- `docs/adr/ADR-0010-manifest-driven-project-contracts.md`

## 1. Context

ADR-0006 establishes that the Agentic Software Foundry will convert human directives into structured work packets.

ADR-0009 establishes that work packets are central integration contracts between human intent, Charon context packs, Foundry runs, verification, session chronicles, memory candidates, handoff packets, and commit recommendations.

The Foundry now needs an explicit lifecycle for work packets.

A work packet should not be a loose note.

It should be a governed unit of work with a status, scope, lifecycle, verification boundary, handoff obligation, and completion standard.

This ADR defines the Work Packet Lifecycle.

## 2. Problem

Without an explicit lifecycle, work packets can become ambiguous.

The Foundry needs to know:

1. whether a work packet is only a draft;
2. whether it is ready to execute;
3. whether work has started;
4. whether implementation is complete;
5. whether verification has started;
6. whether verification passed;
7. whether documentation has been updated;
8. whether the work has been committed;
9. whether the packet is closed;
10. whether it was blocked, cancelled, superseded, rejected, or failed.

A vague work packet status creates several problems.

### 2.1 Weak Resumability

A new session cannot reliably continue work if it does not know the packet state.

### 2.2 Weak Verification

A packet may be treated as done even though it was only implemented, not verified.

### 2.3 Weak Commit Discipline

A packet may produce changes but no atomic commit boundary.

### 2.4 Scope Creep

A packet may grow indefinitely unless its lifecycle encourages closure and follow-up packets.

### 2.5 Hidden Failure

A failed packet may remain in an ambiguous state instead of recording why it failed.

### 2.6 Poor Handoff

A handoff packet cannot summarize project state accurately if work packet status is vague.

### 2.7 Weak Evaluation

The Evaluation Harness cannot test work-packet resumption if lifecycle states are not defined.

## 3. Decision

The Agentic Software Foundry will define and use a formal **Work Packet Lifecycle**.

Every work packet will have an explicit status.

The lifecycle will distinguish planning, readiness, execution, implementation, verification, documentation, commit, closure, and terminal exception states.

The lifecycle will be represented first in Markdown work packets and later in machine-readable schemas.

The AI SDLC Framework owns work-packet semantics.

The Foundry Control Plane coordinates work-packet run state.

The Event Bus records lifecycle events.

Charon consumes completed work-packet outputs through chronicles, memory candidates, and handoffs.

## 4. Decision Summary

The accepted normal lifecycle is:

```text
draft
→ ready
→ in_progress
→ implemented
→ verifying
→ verified
→ documented
→ committed
→ closed
```

Accepted exceptional states are:

```text
blocked
failed
cancelled
superseded
rejected
deferred
```

The core rule is:

```text
Implemented is not verified.
Verified is not documented.
Documented is not committed.
Committed is not necessarily closed until handoff and memory obligations are resolved.
```

## 5. Core Rule

The core lifecycle rule is:

```text
A work packet is not complete merely because files were changed.
```

Completion requires:

1. scope satisfied or exception documented;
2. verification passed or failure documented;
3. documentation updated when required;
4. events recorded when required;
5. handoff produced when required;
6. memory candidates produced when required;
7. commit recommendation made;
8. final status recorded.

## 6. Work Packet States

### 6.1 `draft`

A work packet is in `draft` when it is being written or compiled.

A draft packet may be incomplete.

Allowed activities:

1. clarify scope;
2. define objective;
3. define non-goals;
4. identify required context;
5. identify verification;
6. identify affected files;
7. identify policy gates;
8. refine commit recommendation.

A draft packet should not be executed as authoritative scope.

### 6.2 `ready`

A work packet is `ready` when it has enough information to begin work.

A ready packet must have:

1. objective;
2. scope;
3. non-goals;
4. required context;
5. acceptance criteria;
6. verification expectations;
7. recommended commit message;
8. risk level;
9. policy gates, if any.

A ready packet may still be refined, but its scope is sufficiently clear.

### 6.3 `in_progress`

A work packet is `in_progress` when implementation, documentation, scaffolding, or other work has begun.

Only scoped work should occur.

If scope expansion is needed, it should be documented and usually moved to a follow-up packet.

### 6.4 `implemented`

A work packet is `implemented` when the planned files or artifacts have been created or modified.

Implemented does not mean complete.

The next expected step is verification.

### 6.5 `verifying`

A work packet is `verifying` when checks are being run or reviewed.

Verification may include:

1. tests;
2. linting;
3. typechecking;
4. repo contract checks;
5. documentation checks;
6. schema validation;
7. manual inspection;
8. expected file tree review.

### 6.6 `verified`

A work packet is `verified` when the verification criteria have passed or a documented acceptable verification method has completed.

A verified packet should include verification evidence.

Verification evidence may include:

1. command output summary;
2. pass/fail status;
3. manual inspection note;
4. repo contract result;
5. test result reference;
6. reason a command was not run.

### 6.7 `documented`

A work packet is `documented` when required documentation updates have been completed.

Not every packet needs major documentation, but the packet must state whether documentation was required.

Documentation may include:

1. ADR update;
2. README update;
3. tutorial update;
4. policy update;
5. work-packet note;
6. handoff note;
7. generated docs;
8. implementation comment where appropriate.

### 6.8 `committed`

A work packet is `committed` when its durable changes have been committed to Git with an appropriate Conventional Commit.

The packet should record the commit message.

Later versions may record commit SHA.

### 6.9 `closed`

A work packet is `closed` when all required obligations are complete.

Closure requires:

1. work outcome recorded;
2. verification status recorded;
3. documentation status recorded;
4. commit status recorded;
5. handoff status recorded when required;
6. memory candidate status recorded when required;
7. next action identified when relevant.

Closed means no further work remains inside that packet.

Follow-up work should use new packets.

## 7. Exceptional States

### 7.1 `blocked`

A work packet is `blocked` when it cannot proceed without some missing input, decision, dependency, permission, or repair.

A blocked packet must state:

1. blocker;
2. blocking source;
3. required action;
4. owner of unblock action;
5. recommended next step.

### 7.2 `failed`

A work packet is `failed` when the work could not be completed and should not continue in its current form.

A failed packet must state:

1. what failed;
2. why it failed;
3. what was attempted;
4. verification result;
5. whether changes were reverted;
6. recommended follow-up.

### 7.3 `cancelled`

A work packet is `cancelled` when the work is intentionally stopped before completion.

A cancelled packet must state:

1. cancellation reason;
2. who cancelled it;
3. whether any changes were made;
4. whether cleanup is required;
5. whether follow-up is needed.

### 7.4 `superseded`

A work packet is `superseded` when a newer packet replaces it.

A superseded packet must reference the replacement packet.

### 7.5 `rejected`

A work packet is `rejected` when the proposed work should not be done.

A rejected packet must state:

1. rejection reason;
2. controlling policy, ADR, or decision;
3. whether a safer alternative exists.

### 7.6 `deferred`

A work packet is `deferred` when the work is valid but intentionally postponed.

A deferred packet must state:

1. deferral reason;
2. possible future trigger;
3. priority;
4. dependency, if any.

## 8. State Transition Rules

### 8.1 Normal Transitions

Allowed normal transitions:

```text
draft → ready
ready → in_progress
in_progress → implemented
implemented → verifying
verifying → verified
verified → documented
documented → committed
committed → closed
```

### 8.2 Documentation-Only Shortcut

For documentation-only packets, the implementation and documentation phases may collapse conceptually, but the status should still be explicit.

Allowed documentation flow:

```text
draft
→ ready
→ in_progress
→ implemented
→ verified
→ documented
→ committed
→ closed
```

Manual inspection may serve as verification if appropriate.

### 8.3 Exception Transitions

Any active state may transition to:

```text
blocked
failed
cancelled
superseded
deferred
```

A `rejected` state usually applies before work begins, but it may also apply if a packet is discovered to violate policy.

### 8.4 Reopening

A closed packet should generally not be reopened.

If new work is needed, create a follow-up packet.

A closed packet may be amended only to correct metadata, add commit SHA, or clarify historical record.

### 8.5 Repair Work

Failed verification should usually create either:

1. a repair step within the same packet, if small and still in scope;
2. a follow-up repair packet, if the repair is substantial.

## 9. Work Packet Metadata

Each work packet should include metadata.

Initial Markdown metadata:

```markdown
## Metadata

- ID: `wp-0001`
- Status: `draft`
- Created: `2026-04-28`
- Updated: `2026-04-28`
- Directive: `<directive-id-or-text>`
- Owner: `project-owner`
- Risk: `low`
- Target Commit: `docs(sdlc): define work packet lifecycle`
```

Future machine-readable metadata may use frontmatter or JSON.

Example future frontmatter:

```yaml
---
schemaVersion: 0.1.0
id: wp-0001
status: ready
risk: low
created: 2026-04-28
updated: 2026-04-28
targetCommit: "docs(sdlc): define work packet lifecycle"
---
```

## 10. Work Packet Location by State

The repository may eventually organize work packets by state.

Expected structure:

```text
.sdlc/work-packets/
├── drafts/
├── active/
├── completed/
├── superseded/
└── README.md
```

Recommended convention:

1. `draft` and `ready` packets may live under `drafts/` until accepted;
2. `in_progress` through `documented` may live under `active/`;
3. `committed` and `closed` packets may move to `completed/`;
4. `superseded` packets may move to `superseded/`.

For v1.0, moving files by state may be manual.

## 11. Work Packet ID Format

Initial work packet IDs should be simple and ordered.

Recommended v1.0 format:

```text
wp-0001
wp-0002
wp-0003
```

File names should include a slug:

```text
wp-0001-initial-foundry-loop.md
wp-0002-charon-skeleton.md
wp-0003-repo-contract-tests.md
```

Future versions may use timestamped IDs or ULIDs.

The important requirement is stable referenceability.

## 12. Work Packet Required Sections

Every work packet should include:

1. metadata;
2. objective;
3. rationale;
4. scope;
5. non-goals;
6. required context;
7. files to create;
8. files to modify;
9. files to avoid;
10. implementation steps;
11. acceptance criteria;
12. verification;
13. documentation updates;
14. event emissions;
15. policy gates;
16. handoff requirements;
17. memory candidate expectations;
18. rollback plan;
19. recommended commit;
20. lifecycle log.

For very small packets, some sections may say `None`, but the absence should be explicit.

## 13. Lifecycle Log

Each work packet should include a lifecycle log.

Example:

```markdown
## Lifecycle Log

- 2026-04-28 — `draft` — Packet created.
- 2026-04-28 — `ready` — Scope and verification accepted.
- 2026-04-28 — `implemented` — Files created.
- 2026-04-28 — `verified` — Manual inspection passed.
- 2026-04-28 — `committed` — Commit: `docs(sdlc): define work packet lifecycle`.
- 2026-04-28 — `closed` — No follow-up required.
```

This helps future sessions understand the packet history.

## 14. Verification Status

Work packets should not collapse verification into general status.

A packet should record verification separately.

Recommended fields:

```markdown
## Verification Status

- Required: `yes`
- Method: `manual inspection`
- Status: `passed`
- Evidence: `Document reviewed for placement, related ADRs, lifecycle completeness, and commit recommendation.`
```

If verification is skipped, the reason must be explicit.

Example:

```markdown
- Status: `not-run`
- Reason: `No runtime tooling exists yet; documentation-only packet verified by inspection.`
```

## 15. Documentation Status

Documentation status should be explicit.

Examples:

```markdown
## Documentation Status

- Required: `yes`
- Status: `complete`
- Updated:
  - `docs/adr/ADR-0011-work-packet-lifecycle.md`
```

or:

```markdown
## Documentation Status

- Required: `no`
- Reason: `Internal test-only change with no user-facing behavior change.`
```

## 16. Commit Status

Commit status should be explicit.

Examples:

```markdown
## Commit Status

- Status: `recommended`
- Recommended Commit: `docs(adr): define work packet lifecycle`
```

After commit:

```markdown
## Commit Status

- Status: `committed`
- Commit Message: `docs(adr): define work packet lifecycle`
- Commit SHA: `pending-or-recorded`
```

For v1.0, commit SHA recording may be manual.

## 17. Handoff Status

A packet should say whether handoff is required.

Examples:

```markdown
## Handoff Status

- Required: `yes`
- Status: `pending`
- Handoff Packet: `pending`
```

or:

```markdown
## Handoff Status

- Required: `no`
- Reason: `Small documentation-only change with no implementation state.`
```

For major packets, handoff should be required.

## 18. Memory Candidate Status

A packet should say whether memory candidates are expected.

Examples:

```markdown
## Memory Candidate Status

- Expected: `yes`
- Status: `created`
- Candidates:
  - `.charon/mnemosyne/candidates/candidate-0001-work-packet-lifecycle.md`
```

or:

```markdown
## Memory Candidate Status

- Expected: `no`
- Reason: `No durable project decision was introduced.`
```

Memory candidates must not become canonical automatically.

## 19. Event Requirements

Work packet lifecycle transitions should eventually emit events.

Potential events:

```text
work_packet.created
work_packet.ready
work_packet.started
work_packet.implemented
work_packet.verification_started
work_packet.verified
work_packet.documented
work_packet.committed
work_packet.closed
work_packet.blocked
work_packet.failed
work_packet.cancelled
work_packet.superseded
work_packet.rejected
work_packet.deferred
```

For v1.0, events may be emitted manually or simulated during the first Foundry loop.

## 20. Relationship to Directives

A directive may produce one or more work packets.

For v1.0, the preferred model is:

```text
one directive
→ one work packet
```

If a directive is too large, the Directive Compiler should split it into multiple packets.

A work packet should reference its source directive.

## 21. Relationship to Runs

A run executes or processes a work packet.

A work packet may have:

1. zero runs if still draft;
2. one run for normal work;
3. multiple runs if verification or repair requires repeated attempts.

Run records belong under:

```text
.foundry/runs/
```

The work packet should reference relevant run IDs when known.

## 22. Relationship to Context Packs

A work packet may request or reference a context pack.

A context pack should be task-specific to the packet.

The work packet should state required context.

Daedalus and Anamnesis may use that required context to assemble a pack.

## 23. Relationship to Verification Records

A work packet should reference verification records when available.

Verification records belong under:

```text
.sdlc/verification/
```

For v1.0, verification may be recorded inline in the work packet and later extracted into separate records.

## 24. Relationship to Charon

Charon uses work packet status to support continuity.

Charon may consume work packet information for:

1. session chronicles;
2. handoff packets;
3. memory candidates;
4. context-pack assembly;
5. current-state summaries;
6. future retrieval.

Work packet completion may produce memory candidates.

Work packet status is important context, but not all work-packet text becomes canonical memory.

## 25. Relationship to Event Bus

The Event Bus records work packet transitions.

This makes the work packet timeline auditable and supports latest-status summaries.

The event log is not the source of truth for the packet content.

It is an operational record of lifecycle changes.

## 26. Relationship to Multi-Agent Runtime

Different agent roles participate in different lifecycle phases.

Typical mapping:

```text
draft
→ Architect / Directive Compiler

ready
→ Architect / Human Project Owner

in_progress
→ Executor

implemented
→ Executor

verifying
→ Verifier

verified
→ Verifier

documented
→ Librarian / Executor

committed
→ Human Project Owner or authorized committer

closed
→ Operator / Librarian
```

For v1.0, this role separation may be procedural.

## 27. Relationship to Worktrees

A work packet may eventually map to a branch and worktree.

Default future model:

```text
one work packet
→ one branch
→ one worktree
→ one run
```

For v1.0, worktree automation is deferred.

The lifecycle still supports future worktree isolation.

## 28. Relationship to Monorepo Factory

Scaffold work should be represented by work packets.

A scaffold work packet should include:

1. selected template;
2. selected profile;
3. feature flags;
4. generated files;
5. protected files;
6. scaffold manifest;
7. repo contract verification;
8. commit recommendation.

The Factory generates.

The work packet governs.

## 29. Relationship to Evaluation Harness

The Evaluation Harness should eventually test work packet lifecycle behavior.

Possible evaluations:

1. work packet has required sections;
2. work packet has valid status;
3. closed packet includes verification status;
4. committed packet includes commit message;
5. blocked packet includes blocker reason;
6. superseded packet references replacement;
7. work packet includes non-goals;
8. work packet includes verification;
9. work packet does not claim completion without evidence;
10. active packet is referenced by latest-status.

## 30. State Machine Validation

Future tooling should validate state transitions.

Invalid transitions may include:

1. `draft → verified`;
2. `in_progress → closed` without verification;
3. `implemented → committed` without verification status;
4. `blocked → closed` without unblock or cancellation note;
5. `superseded → in_progress`;
6. `rejected → in_progress`.

For v1.0, validation may be manual.

Later versions should enforce this through repo contract tests or CLI validation.

## 31. Safe Defaults

The work packet lifecycle should enforce safe defaults:

1. verification required unless explicitly waived;
2. scope expansion creates follow-up packets;
3. memory candidates are not canonical;
4. failed work is documented;
5. destructive changes require policy gate;
6. commit recommendation required;
7. handoff required for material changes;
8. closed means no hidden remaining obligations.

## 32. v1.0 Scope

Required for v1.0:

1. `.sdlc/work-packets/` exists;
2. state directories exist;
3. work packet template exists;
4. lifecycle states are documented;
5. lifecycle events are documented;
6. at least one work packet is created for the first Foundry loop;
7. work packet includes verification status;
8. work packet includes commit recommendation;
9. work packet includes handoff status;
10. repo contract tests eventually validate required work-packet paths.

Not required for v1.0:

1. automated state transition validation;
2. full work packet database;
3. web UI;
4. automatic packet movement between directories;
5. automatic commit creation;
6. automatic worktree allocation;
7. multi-agent execution;
8. advanced workflow engine.

## 33. Initial Work Packet Template Location

The initial template should live at:

```text
.sdlc/work-packets/work-packet-template.md
```

or:

```text
.sdlc/work-packets/templates/work-packet-template.md
```

My recommendation for v1.0:

```text
.sdlc/work-packets/work-packet-template.md
```

Keep it simple first.

## 34. Initial Work Packet for MVP

The first real work packet should probably be:

```text
.sdlc/work-packets/active/wp-0001-initial-foundry-loop.md
```

It should prove the loop:

```text
directive
→ work packet
→ context pack
→ run record
→ event log
→ verification record
→ chronicle
→ memory candidate
→ handoff
→ commit recommendation
```

This is the smallest meaningful Foundry demonstration.

## 35. Clean-Room Considerations

Work packet lifecycle patterns are general software engineering and workflow concepts.

The Foundry may study public workflow systems, issue trackers, task systems, and agent orchestration patterns.

The implementation must be Foundry-native and must comply with the Clean-Room Pattern Adoption Policy.

The Foundry must not copy proprietary workflow schemas, private prompts, private command catalogs, private tests, or unauthorized implementation details.

## 36. Repo Contract Implications

Future repo contract tests should verify:

1. `.sdlc/work-packets/` exists;
2. `.sdlc/work-packets/drafts/` exists;
3. `.sdlc/work-packets/active/` exists;
4. `.sdlc/work-packets/completed/` exists;
5. `.sdlc/work-packets/superseded/` exists;
6. `.sdlc/work-packets/work-packet-template.md` exists;
7. template contains required sections;
8. active work packets have valid status;
9. closed work packets include verification status;
10. work packets include recommended commit messages.

## 37. Alternatives Considered

### 37.1 No Lifecycle

The Foundry could use work packets as informal notes.

This was rejected because informal packets weaken resumability, verification, and auditability.

### 37.2 Issue-Tracker-Only Lifecycle

The Foundry could use GitHub issues or another issue tracker as the canonical lifecycle system.

This is deferred because v1.0 should be local-first and repo-canonical.

Issue trackers may become adapters later.

### 37.3 Kanban-Only Lifecycle

The Foundry could use a simple kanban status model such as todo, doing, done.

This was rejected because the Foundry needs to distinguish implementation, verification, documentation, commit, and closure.

### 37.4 Full Workflow Engine First

The Foundry could implement a complete workflow/state-machine engine immediately.

This was rejected as too much for v1.0.

The lifecycle should be documented first, then validated later.

## 38. Consequences

### 38.1 Positive Consequences

This decision provides:

1. clearer work status;
2. better resumability;
3. stronger verification discipline;
4. better handoff quality;
5. better commit discipline;
6. better agent role separation;
7. better event modeling;
8. better future automation;
9. better evaluation surface;
10. reduced scope creep.

### 38.2 Negative Consequences

This decision adds:

1. more process;
2. more status fields;
3. more documentation;
4. more lifecycle maintenance;
5. possible ceremony for small tasks.

These costs are accepted because the Foundry is intended for serious AI-assisted software work.

## 39. Risk Mitigations

The Foundry will mitigate risk by:

1. keeping the lifecycle simple;
2. allowing manual verification notes;
3. allowing small documentation-only packets;
4. deferring full automation;
5. using repo contract tests later;
6. keeping packet IDs simple;
7. encouraging follow-up packets instead of scope creep.

## 40. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.sdlc/work-packets/README.md`;
2. `.sdlc/work-packets/drafts/`;
3. `.sdlc/work-packets/active/`;
4. `.sdlc/work-packets/completed/`;
5. `.sdlc/work-packets/superseded/`;
6. `.sdlc/work-packets/work-packet-template.md`;
7. documentation of lifecycle states;
8. at least one work packet using the lifecycle;
9. repo contract tests validating required paths and template sections.

Full automated lifecycle enforcement is not required for this ADR to be accepted.

## 41. Future Work

This decision creates future work on:

1. work packet template;
2. work packet schema;
3. lifecycle validator;
4. lifecycle event writer;
5. state transition rules;
6. packet status updater;
7. packet directory movement policy;
8. verification record integration;
9. handoff integration;
10. memory candidate integration;
11. run record integration;
12. worktree integration;
13. issue tracker adapter;
14. work packet dashboard;
15. work packet evaluation tests.

## 42. Decision

Accepted.

The Agentic Software Foundry will use a formal Work Packet Lifecycle.

Work packets will distinguish draft, ready, in progress, implemented, verifying, verified, documented, committed, closed, blocked, failed, cancelled, superseded, rejected, and deferred states.

Implemented does not mean verified.

Verified does not mean documented.

Documented does not mean committed.

Committed does not always mean closed.

A work packet is complete only when its scope, verification, documentation, commit, handoff, memory candidate, and lifecycle obligations are satisfied or explicitly waived with reason.

The work packet is the Foundry’s canonical unit of planned work.
