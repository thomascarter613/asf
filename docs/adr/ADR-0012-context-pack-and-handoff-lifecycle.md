---
title: "ADR-0012: Context Pack and Handoff Lifecycle"
description: "Accepts formal lifecycles for context packs and handoff packets as source-traceable continuity artifacts."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0012"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - context-packs
  - handoffs
  - charon
---

# ADR-0012: Context Pack and Handoff Lifecycle

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
- `docs/adr/ADR-0011-work-packet-lifecycle.md`

## 1. Context

ADR-0001 establishes repository-based context continuity.

ADR-0004 establishes the canonical repository plus vector retrieval model.

ADR-0009 establishes the integrated Foundry loop, where human directives become work packets, context packs, runs, verification records, chronicles, memory candidates, handoffs, and commits.

The Foundry now needs an explicit lifecycle for two of its most important continuity artifacts:

1. context packs;
2. handoff packets.

A context pack prepares the current session or run.

A handoff packet prepares the next session or run.

Together, they are the bridge across time, tools, agents, and context windows.

Without these artifacts, every new AI session must reconstruct project state from scratch.

With these artifacts, the Foundry can preserve useful continuity while avoiding uncontrolled memory bloat.

## 2. Problem

AI-assisted work breaks down when context is missing, stale, excessive, or unstructured.

The Foundry must solve several continuity problems.

### 2.1 New Session Recovery

A new session needs to know the project identity, current milestone, relevant decisions, active work packet, recent progress, verification status, and next recommended action.

### 2.2 Context Bloat

Loading every ADR, note, work packet, chronicle, and memory file into every session is wasteful and dangerous.

The system needs task-specific context packs.

### 2.3 Stale or Superseded Context

Old decisions may have been replaced.

A context pack must distinguish current truth from superseded or disputed context.

### 2.4 Lost Work State

A session may end before all work is complete.

A handoff packet must preserve current state so the next session can resume.

### 2.5 Weak Traceability

A context pack should say what it includes and why.

A handoff packet should say what changed and what remains.

### 2.6 Vendor and Model Lock-In

Context continuity must not depend on one model provider’s memory system.

The Foundry needs portable repo-backed artifacts.

### 2.7 Memory Pollution

Handoff summaries and context packs are derived artifacts.

They must not automatically become canonical memory.

## 3. Decision

The Agentic Software Foundry will define formal lifecycles for context packs and handoff packets.

Charon owns both artifacts through Daedalus, Anamnesis, Mnemosyne, Argos, Hephaestus, Themis, Athena, and Clio.

The Foundry Control Plane coordinates when context packs and handoffs are requested, generated, referenced by runs, and recorded in events.

The AI SDLC Framework references context packs and handoffs through work packets.

The Event Bus records context-pack and handoff lifecycle events.

Context packs and handoffs are repository-backed, human-readable, source-traceable, and task-specific.

They are derived artifacts, not canonical memory.

## 4. Decision Summary

The accepted model is:

```text
Repository artifacts
  ↓
Argos retrieval
  ↓
Anamnesis selection
  ↓
Daedalus context pack
  ↓
Work packet / run execution
  ↓
Clio session chronicle
  ↓
Memory candidates
  ↓
Daedalus handoff packet
  ↓
New session bootstrap
```

Context packs answer:

```text
What does this session or run need to know?
```

Handoff packets answer:

```text
What should the next session or run know?
```

## 5. Core Rule

The core rule is:

```text
A context pack is a selected view of existing context.
A handoff packet is a continuity bridge to future work.
Neither is canonical memory by default.
```

Canonical memory requires admission through Charon’s memory admission process.

## 6. Context Pack Definition

A context pack is a task-specific bundle of selected context assembled for a particular purpose.

A context pack may support:

1. a new chat session;
2. a work packet;
3. a Foundry run;
4. an agent role;
5. a verification task;
6. a scaffold generation task;
7. a review task;
8. a handoff continuation;
9. a documentation task;
10. a repair task.

A context pack is not a raw dump of all memory.

It is a curated, source-aware, trust-aware, budget-aware artifact.

## 7. Handoff Packet Definition

A handoff packet is a structured continuity artifact created after meaningful work.

It explains what happened, what changed, what was verified, what failed, what remains, what risks exist, what memory candidates were produced, and what the next session should do.

A handoff packet may support:

1. a new chat session;
2. a new agent run;
3. a reviewer;
4. a verifier;
5. a future human operator;
6. a project resume point;
7. a session transition;
8. an implementation continuation;
9. a repair run;
10. a milestone closeout.

A handoff packet is not canonical memory by default.

It is source evidence and continuity guidance.

## 8. Context Pack Location

Context packs will live under:

```text
.charon/daedalus/context-packs/
```

Recommended v1.0 structure:

```text
.charon/daedalus/context-packs/
├── README.md
├── context-pack-template.md
├── active/
├── archived/
└── superseded/
```

For v1.0, a simpler structure is acceptable if the template exists and generated packs are clearly located.

## 9. Handoff Packet Location

Handoff packets will live under:

```text
.charon/daedalus/handoff-packets/
```

Recommended v1.0 structure:

```text
.charon/daedalus/handoff-packets/
├── README.md
├── handoff-packet-template.md
├── active/
├── archived/
└── superseded/
```

For v1.0, a simpler structure is acceptable if the template exists and generated handoffs are clearly located.

## 10. Context Pack Lifecycle

The Foundry will use the following context pack lifecycle:

```text
requested
→ assembling
→ assembled
→ validated
→ active
→ used
→ archived
```

Alternative states:

```text
stale
superseded
rejected
failed
```

## 11. Context Pack State: `requested`

A context pack is `requested` when a session, run, work packet, agent role, or human operator needs focused context.

The request should identify:

1. purpose;
2. target work packet;
3. target run, if known;
4. target agent role, if known;
5. required source categories;
6. excluded source categories;
7. context budget;
8. trust requirements.

## 12. Context Pack State: `assembling`

A context pack is `assembling` when Anamnesis, Argos, Hephaestus, or a manual process is selecting relevant context.

Assembly may include:

1. reading required ADRs;
2. reading policies;
3. reading canonical memory;
4. retrieving related artifacts;
5. selecting work packets;
6. selecting recent chronicles;
7. selecting handoffs;
8. applying trust filters;
9. applying lifecycle filters;
10. applying context budget.

## 13. Context Pack State: `assembled`

A context pack is `assembled` when the selected context has been written into a draft context pack.

At this stage, it may still need validation.

## 14. Context Pack State: `validated`

A context pack is `validated` when it has been checked for:

1. source traceability;
2. obvious stale context;
3. trust labels;
4. required files;
5. context budget;
6. policy exclusions;
7. purpose alignment;
8. no known secret exposure;
9. no forbidden material;
10. correct target work packet.

For v1.0, validation may be manual.

## 15. Context Pack State: `active`

A context pack is `active` when it is the selected context pack for a current session, run, or work packet.

Only a small number of context packs should be active at once.

## 16. Context Pack State: `used`

A context pack is `used` after it has supported a session, run, or work packet.

A used context pack may remain useful for audit, but it may no longer represent current state.

## 17. Context Pack State: `archived`

A context pack is `archived` when preserved for history but no longer active.

Archived packs should not be used as current project truth without checking for staleness.

## 18. Context Pack State: `stale`

A context pack is `stale` when its contents no longer reliably represent current project state.

Reasons include:

1. related ADRs changed;
2. active work packet changed;
3. memory was superseded;
4. verification status changed;
5. project manifest changed;
6. handoff packet replaced it;
7. relevant source files changed.

A stale context pack should not be used without warning.

## 19. Context Pack State: `superseded`

A context pack is `superseded` when a newer pack replaces it.

A superseded pack should reference its replacement.

## 20. Context Pack State: `rejected`

A context pack is `rejected` when it is not suitable for use.

Reasons may include:

1. wrong scope;
2. missing required context;
3. includes forbidden material;
4. includes stale material without warning;
5. too large;
6. untraceable sources;
7. policy violation.

## 21. Context Pack State: `failed`

A context pack is `failed` when assembly could not complete.

A failed pack or failed request should state:

1. failure reason;
2. missing source;
3. retrieval failure;
4. policy gate issue;
5. next recommended action.

## 22. Handoff Packet Lifecycle

The Foundry will use the following handoff packet lifecycle:

```text
needed
→ drafting
→ drafted
→ validated
→ active
→ consumed
→ archived
```

Alternative states:

```text
stale
superseded
rejected
failed
```

## 23. Handoff State: `needed`

A handoff is `needed` when meaningful work has occurred or a session is ending.

A handoff is usually needed when:

1. a work packet changed state;
2. files were created or modified;
3. verification was run;
4. verification failed;
5. a decision was made;
6. memory candidates were produced;
7. a context pack was used;
8. a run completed;
9. a blocker was discovered;
10. the next session needs guidance.

## 24. Handoff State: `drafting`

A handoff is `drafting` when Daedalus, the Librarian role, the Operator role, or a human is preparing the handoff.

Drafting should collect:

1. directive;
2. work packet;
3. run record;
4. event summary;
5. verification result;
6. files changed;
7. decisions made;
8. memory candidates;
9. open risks;
10. next action.

## 25. Handoff State: `drafted`

A handoff is `drafted` when the handoff text exists but has not been validated.

## 26. Handoff State: `validated`

A handoff is `validated` when it has been checked for:

1. accurate completed-work summary;
2. accurate verification status;
3. clear next action;
4. relevant context references;
5. no secrets;
6. no forbidden material;
7. memory candidates identified;
8. commit status identified;
9. no false claim of completion;
10. enough information for new-session bootstrap.

For v1.0, validation may be manual.

## 27. Handoff State: `active`

A handoff is `active` when it is the current recommended continuation point for the next session or run.

The active handoff should be referenced by latest-status or current-state artifacts.

## 28. Handoff State: `consumed`

A handoff is `consumed` when a later session or run uses it as startup context.

A consumed handoff may remain useful for history but should not necessarily remain active.

## 29. Handoff State: `archived`

A handoff is `archived` when preserved for history but no longer active.

Archived handoffs should not be treated as current state without checking for supersession.

## 30. Handoff State: `stale`

A handoff is `stale` when its next action, verification status, or project state no longer applies.

Reasons include:

1. follow-up work completed;
2. active work packet changed;
3. new ADR superseded the handoff;
4. verification result changed;
5. project structure changed;
6. memory admission changed the canonical context.

## 31. Handoff State: `superseded`

A handoff is `superseded` when a newer handoff replaces it.

A superseded handoff should reference the replacement.

## 32. Handoff State: `rejected`

A handoff is `rejected` when it is inaccurate, incomplete, unsafe, or not useful.

Reasons may include:

1. false summary;
2. missing verification failure;
3. misleading next action;
4. inclusion of secret material;
5. inclusion of forbidden material;
6. wrong work packet;
7. missing commit status.

## 33. Handoff State: `failed`

A handoff is `failed` when generation could not complete.

The failure should state:

1. missing context;
2. missing run record;
3. missing verification result;
4. policy issue;
5. next recommended action.

## 34. Context Pack Required Sections

Every context pack should include:

1. metadata;
2. purpose;
3. target task or work packet;
4. target role or session type;
5. included source artifacts;
6. included canonical memory;
7. included ADRs;
8. included policies;
9. included work packets;
10. included chronicles or handoffs;
11. excluded material;
12. stale or disputed warnings;
13. context budget;
14. source traceability notes;
15. usage instructions.

## 35. Context Pack Template

The initial context pack template should look like this:

```markdown
# Context Pack: <Title>

## Metadata

- ID: `<context-pack-id>`
- Status: `draft`
- Created: `<date>`
- Purpose: `<purpose>`
- Target Work Packet: `<path-or-none>`
- Target Run: `<run-id-or-none>`
- Target Role: `<role-or-general>`
- Generated By: `Daedalus`
- Trust Policy: `default`

## Purpose

Explain why this context pack exists.

## Use This Context For

1. item one;
2. item two;
3. item three.

## Do Not Use This Context For

1. item one;
2. item two;
3. item three.

## Critical Context

The following context is required.

1. `path/to/source.md` — reason included.

## Supporting Context

The following context may be useful.

1. `path/to/source.md` — reason included.

## Canonical Memory Included

1. `path/to/memory.md` — reason included.

## ADRs Included

1. `docs/adr/ADR-0001-example.md` — reason included.

## Policies Included

1. `governance/CLEAN_ROOM_POLICY.md` — reason included.

## Work Packets Included

1. `.sdlc/work-packets/active/wp-0001-example.md` — reason included.

## Chronicles or Handoffs Included

1. `.charon/clio/sessions/example.md` — reason included.

## Excluded Material

1. `path/to/source.md` — reason excluded.

## Stale, Superseded, or Disputed Context

1. `path/to/source.md` — warning.

## Context Budget Notes

Describe budget limits and compression choices.

## Source Traceability

Every material claim in this context pack should be traceable to repository artifacts.

## Usage Instructions

State how the receiving session, agent, or human should use the pack.

## Lifecycle Log

- `<date>` — `draft` — Created.
```

## 36. Handoff Required Sections

Every handoff packet should include:

1. metadata;
2. project identity;
3. session or run summary;
4. completed work;
5. changed files;
6. verification status;
7. documentation status;
8. commit status;
9. active work packet;
10. open risks or blockers;
11. memory candidates;
12. context pack reference;
13. next recommended action;
14. new-session bootstrap guidance;
15. lifecycle log.

## 37. Handoff Packet Template

The initial handoff packet template should look like this:

```markdown
# Handoff Packet: <Title>

## Metadata

- ID: `<handoff-id>`
- Status: `draft`
- Created: `<date>`
- Source Run: `<run-id-or-none>`
- Source Work Packet: `<path-or-none>`
- Related Context Pack: `<path-or-none>`
- Generated By: `Daedalus`

## Project Identity

- Project: `Agentic Software Foundry`
- Profile: `governance-grade`
- Current Milestone: `<milestone>`

## Summary

Briefly summarize what happened.

## Completed Work

1. item one;
2. item two;
3. item three.

## Changed Files

1. `path/to/file.md` — change summary.

## Verification Status

- Required: `yes | no`
- Status: `passed | failed | not-run | partial`
- Evidence: `<evidence>`

## Documentation Status

- Required: `yes | no`
- Status: `complete | partial | not-required`

## Commit Status

- Status: `not-committed | recommended | committed`
- Recommended Commit: `<commit message>`
- Commit SHA: `<sha-or-pending>`

## Active Work Packet

- Work Packet: `<path>`
- Status: `<status>`

## Open Risks or Blockers

1. risk or blocker one;
2. risk or blocker two.

## Memory Candidates Produced

1. `path/to/candidate.md` — summary.

## Context for Next Session

Read these first:

1. `path/to/context-pack.md`;
2. `path/to/work-packet.md`;
3. `path/to/adr.md`.

## Next Recommended Action

State the next precise action.

## New-Session Bootstrap Guidance

Paste or reference the instruction a future session should use.

## Lifecycle Log

- `<date>` — `draft` — Created.
```

## 38. Context Pack Metadata

A context pack should include metadata.

Recommended fields:

1. ID;
2. status;
3. created date;
4. updated date;
5. purpose;
6. target work packet;
7. target run;
8. target role;
9. generated by;
10. source selection method;
11. trust policy;
12. context budget;
13. supersedes;
14. superseded by.

For v1.0, Markdown metadata is sufficient.

## 39. Handoff Metadata

A handoff packet should include metadata.

Recommended fields:

1. ID;
2. status;
3. created date;
4. updated date;
5. source run;
6. source session;
7. source work packet;
8. related context pack;
9. generated by;
10. next action;
11. supersedes;
12. superseded by.

For v1.0, Markdown metadata is sufficient.

## 40. Context Pack ID Format

Recommended v1.0 context pack ID format:

```text
ctx-0001
ctx-0002
ctx-0003
```

Recommended file names:

```text
ctx-0001-initial-foundry-loop.md
ctx-0002-event-bus-implementation.md
ctx-0003-charon-skeleton.md
```

Future versions may use timestamps or ULIDs.

## 41. Handoff Packet ID Format

Recommended v1.0 handoff ID format:

```text
handoff-0001
handoff-0002
handoff-0003
```

Recommended file names:

```text
handoff-0001-initial-foundry-loop.md
handoff-0002-event-bus-implementation.md
handoff-0003-charon-skeleton.md
```

Future versions may use timestamps or ULIDs.

## 42. Source Traceability

Every context pack should list its source artifacts.

A context pack should not make important claims that cannot be traced to repository artifacts.

Acceptable source artifacts include:

1. ADRs;
2. charter documents;
3. policies;
4. canonical memory files;
5. work packets;
6. handoff packets;
7. session chronicles;
8. run records;
9. manifests;
10. source files;
11. tests;
12. verification records.

If a claim is inferred, the pack should label it as inferred.

## 43. Trust and Lifecycle Awareness

Context packs and handoffs must respect trust and lifecycle status.

They should distinguish:

1. canonical;
2. human-approved;
3. verified;
4. generated;
5. inferred;
6. candidate;
7. external;
8. stale;
9. superseded;
10. disputed;
11. rejected.

A context pack may include stale or superseded content only when it is relevant and clearly labeled.

A handoff should warn if its next action depends on uncertain or unverified context.

## 44. Context Budgeting

Context packs must be budget-aware.

They should classify included context as:

```text
critical
important
supporting
optional
deferred
excluded
```

A pack should avoid dumping entire histories unless the task requires it.

For v1.0, context budget may be described qualitatively.

Future versions may calculate token or byte budgets.

## 45. Inclusion Policy

A context pack should include material based on:

1. target work packet;
2. active milestone;
3. relevant ADRs;
4. relevant policies;
5. canonical memory;
6. recent handoff;
7. verification status;
8. current project manifest;
9. trust level;
10. context budget.

A context pack should avoid:

1. secrets;
2. irrelevant history;
3. stale context without warning;
4. rejected material unless relevant;
5. untraceable summaries;
6. raw transcripts unless necessary;
7. large generated artifacts;
8. dependency directories;
9. build outputs;
10. forbidden material.

## 46. Handoff Inclusion Policy

A handoff should include:

1. what happened;
2. what changed;
3. what was verified;
4. what failed;
5. what remains;
6. what should happen next;
7. what files matter;
8. what context matters;
9. what memory candidates exist;
10. what commit should exist.

A handoff should not hide:

1. failed verification;
2. skipped checks;
3. incomplete work;
4. policy gates;
5. known risks;
6. unresolved disagreements;
7. uncommitted changes.

## 47. Context Pack Events

The Event Bus should eventually emit context-pack events.

Potential events:

```text
context_pack.requested
context_pack.assembling
context_pack.assembled
context_pack.validated
context_pack.active
context_pack.used
context_pack.archived
context_pack.stale_detected
context_pack.superseded
context_pack.rejected
context_pack.failed
```

For v1.0, a subset may be manually recorded.

## 48. Handoff Events

The Event Bus should eventually emit handoff events.

Potential events:

```text
handoff.needed
handoff.drafting
handoff.drafted
handoff.validated
handoff.active
handoff.consumed
handoff.archived
handoff.stale_detected
handoff.superseded
handoff.rejected
handoff.failed
```

For v1.0, `handoff.generated` or `handoff.drafted` is sufficient.

## 49. Relationship to Foundry Control Plane

The Foundry Control Plane coordinates context pack and handoff use.

It may:

1. request context packs;
2. associate packs with runs;
3. mark active context pack pointers;
4. request handoffs;
5. associate handoffs with runs;
6. update latest-status references;
7. emit events;
8. coordinate policy gates.

The Control Plane does not make context packs canonical memory.

## 50. Relationship to AI SDLC Framework

The AI SDLC Framework uses context packs and handoffs through work packets.

A work packet should state:

1. required context;
2. context pack reference;
3. handoff requirements;
4. memory candidate expectations.

A completed work packet may trigger a handoff.

A failed or blocked work packet should usually trigger a handoff.

## 51. Relationship to Charon Components

### 51.1 Mnemosyne

Mnemosyne provides canonical and candidate memory that may be included in context packs.

### 51.2 Argos

Argos retrieves semantically relevant source artifacts.

### 51.3 Hephaestus

Hephaestus indexes repository artifacts to support retrieval.

### 51.4 Anamnesis

Anamnesis selects and rehydrates relevant context for a task.

### 51.5 Daedalus

Daedalus compiles context packs and handoff packets.

### 51.6 Clio

Clio records session chronicles that inform handoffs and future context packs.

### 51.7 Athena

Athena identifies conflict, drift, staleness, and supersession.

### 51.8 Themis

Themis governs admission, redaction, trust levels, and policy restrictions.

## 52. Relationship to Vector Retrieval

Vector retrieval may help assemble context packs.

Retrieval results must include source pointers.

A context pack may include vector-retrieved context only if it identifies the repository source.

The vector database is not the source of truth.

If retrieval returns stale, disputed, or superseded content, the context pack must label it appropriately.

## 53. Relationship to Multi-Agent Runtime

Different agent roles may require different context packs.

Examples:

```text
Architect
→ architecture decisions, charter, policies, active work packet

Executor
→ implementation steps, scoped files, acceptance criteria

Reviewer
→ work packet, diffs, policies, architecture boundaries

Verifier
→ verification commands, acceptance criteria, expected outputs

Librarian
→ documentation, memory candidates, handoff requirements

Operator
→ run status, events, blockers, next action
```

Future versions may generate role-specific context packs.

For v1.0, one general context pack per work packet is enough.

## 54. Relationship to Worktrees

A worktree-based run should receive a context pack.

The handoff should record:

1. worktree path;
2. branch name;
3. run ID;
4. verification result;
5. merge status;
6. cleanup status.

For v1.0, worktree automation is deferred.

## 55. Relationship to Monorepo Factory

Factory-generated projects should include context-pack and handoff templates.

A Foundry-ready scaffold should contain:

```text
.charon/daedalus/context-packs/context-pack-template.md
.charon/daedalus/handoff-packets/handoff-packet-template.md
```

The Factory may also generate initial project context packs for bootstrapping.

## 56. Relationship to Evaluation Harness

The Evaluation Harness should eventually test:

1. context pack required sections;
2. source traceability;
3. stale context warnings;
4. context budget notes;
5. handoff required sections;
6. accurate verification status;
7. next action presence;
8. memory candidate references;
9. new-session bootstrap usefulness;
10. no false completion claims.

Context continuity is one of the most important evaluation categories.

## 57. Relationship to Latest Status

The latest status artifact should reference the active context pack and active handoff.

Expected future path:

```text
.foundry/state/latest-status.md
```

It should include:

1. active work packet;
2. active run;
3. active context pack;
4. active handoff;
5. verification status;
6. next action;
7. required human action.

## 58. Bootstrap Prompt Relationship

A handoff packet may include or reference new-session bootstrap guidance.

Future expected path:

```text
docs/ai/BOOTSTRAP_PROMPT.md
```

The bootstrap prompt should tell a new AI session which files to read first.

The handoff packet should provide the latest project-specific continuation state.

## 59. v1.0 Scope

Required for v1.0:

1. context-pack directory exists;
2. context-pack template exists;
3. handoff-packet directory exists;
4. handoff-packet template exists;
5. context-pack lifecycle documented;
6. handoff lifecycle documented;
7. at least one context pack is created for the first Foundry loop;
8. at least one handoff is created for the first Foundry loop;
9. events can reference context pack and handoff paths;
10. repo contract tests eventually verify required paths and templates.

Not required for v1.0:

1. fully automated semantic retrieval;
2. production vector database;
3. token-counting context budgeting;
4. role-specific automatic packs;
5. automatic stale detection;
6. automatic supersession management;
7. full bootstrap prompt compiler;
8. external provider memory sync;
9. web UI;
10. multi-agent dynamic context routing.

## 60. Clean-Room Considerations

Context pack and handoff patterns are general architecture patterns.

The Foundry may learn from public systems that use memory files, handoff notes, context packs, session summaries, and project instructions.

The implementation must remain Foundry-native.

The Foundry must not copy private prompts, private memory schemas, leaked source, proprietary summaries, private tests, or unauthorized implementation details from external systems.

## 61. Repo Contract Implications

Future repo contract tests should verify:

1. `.charon/daedalus/context-packs/` exists;
2. `.charon/daedalus/context-packs/context-pack-template.md` exists;
3. `.charon/daedalus/handoff-packets/` exists;
4. `.charon/daedalus/handoff-packets/handoff-packet-template.md` exists;
5. context-pack template includes required sections;
6. handoff template includes required sections;
7. generated context packs identify source artifacts;
8. generated handoffs identify verification status;
9. generated handoffs identify next action;
10. active latest-status can reference active handoff.

## 62. Alternatives Considered

### 62.1 Raw Transcript as Handoff

The Foundry could use raw chat transcripts as handoffs.

This was rejected because raw transcripts are too noisy, long, and full of temporary reasoning, rejected ideas, and irrelevant material.

### 62.2 One Giant Project Context File

The Foundry could maintain one large project context file.

This was rejected because it creates context bloat and makes task-specific relevance difficult.

### 62.3 Provider-Native Memory Only

The Foundry could rely on provider memory systems.

This was rejected because the Foundry must remain model-agnostic, repo-canonical, inspectable, and portable.

### 62.4 Vector Retrieval Without Context Packs

The Foundry could retrieve context dynamically without writing context-pack artifacts.

This was rejected because context packs provide traceability, auditability, handoff value, and reproducibility.

### 62.5 Handoff Only, No Context Pack

The Foundry could generate handoffs but not context packs.

This was rejected because current-session context selection and next-session continuity are related but distinct needs.

## 63. Consequences

### 63.1 Positive Consequences

This decision provides:

1. better new-session continuity;
2. reduced context bloat;
3. source-traceable context;
4. clearer task-specific context;
5. better handoffs;
6. better operator visibility;
7. stronger memory discipline;
8. better evaluation surface;
9. model-agnostic continuity;
10. better long-running project support.

### 63.2 Negative Consequences

This decision adds:

1. more artifacts;
2. context-pack maintenance;
3. handoff maintenance;
4. risk of stale packs;
5. validation requirements;
6. possible ceremony for small tasks.

These costs are accepted because context continuity is central to the Foundry.

## 64. Risk Mitigations

The Foundry will mitigate risk by:

1. keeping v1.0 templates simple;
2. requiring source traceability;
3. labeling stale and superseded context;
4. making packs task-specific;
5. preserving handoff next actions;
6. treating packs and handoffs as derived;
7. using repo contract tests;
8. deferring full automation;
9. keeping canonical memory admission separate.

## 65. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.charon/daedalus/context-packs/README.md`;
2. `.charon/daedalus/context-packs/context-pack-template.md`;
3. `.charon/daedalus/handoff-packets/README.md`;
4. `.charon/daedalus/handoff-packets/handoff-packet-template.md`;
5. context pack lifecycle documentation;
6. handoff lifecycle documentation;
7. at least one generated context pack in the first Foundry loop;
8. at least one generated handoff packet in the first Foundry loop;
9. repo contract tests validating required paths and template sections.

Full automated context assembly is not required for this ADR to be accepted.

## 66. Future Work

This decision creates future work on:

1. context-pack template;
2. handoff-packet template;
3. context-pack generator;
4. handoff generator;
5. context-pack validator;
6. handoff validator;
7. active context pointer;
8. active handoff pointer;
9. bootstrap prompt integration;
10. source traceability checks;
11. stale context detection;
12. role-specific context packs;
13. vector-assisted context assembly;
14. context budget calculation;
15. handoff consumption events;
16. context continuity evaluations.

## 67. Decision

Accepted.

The Agentic Software Foundry will use formal lifecycles for context packs and handoff packets.

Context packs prepare the current session or run.

Handoff packets prepare the next session or run.

Both are repository-backed, source-traceable, task-specific, and model-agnostic.

Both are derived artifacts.

Neither becomes canonical memory by default.

Charon owns context continuity.

Daedalus compiles context packs and handoffs.

Anamnesis selects relevant context.

Argos and Hephaestus support retrieval.

Themis governs policy and trust.

Athena flags stale, disputed, superseded, or conflicting context.

Clio records session chronicles.

The Foundry Control Plane coordinates when these artifacts are requested, used, and recorded.

Context continuity is not accidental.

It is a governed lifecycle.
