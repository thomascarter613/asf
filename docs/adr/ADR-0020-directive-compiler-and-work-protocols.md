---
title: "ADR-0020: Directive Compiler and Work Protocols"
description: "Accepts directive compilation and work protocols as the mechanism for turning human intent into structured work packets."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0020"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - sdlc
  - work-packets
---

# ADR-0020: Directive Compiler and Work Protocols

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

## 1. Context

The Agentic Software Foundry is designed to turn human intent into structured, verified, documented, and resumable software work.

Human input often begins as a short directive:

```text
Add the first Foundry event bus implementation.
````

or:

```text
Generate the initial Charon filesystem scaffold.
```

or:

```text
Create the repo contract tests for the MVP.
```

A normal coding assistant may treat that directive as permission to improvise.

The Foundry must do something more disciplined.

A directive should become a structured work protocol before implementation begins.

This ADR establishes the Directive Compiler and Work Protocol model.

The design is informed by public workflow-layer patterns such as short directive to structured workflow, planning keywords, execution modes, persistent verification loops, and team execution concepts. The implementation will be Foundry-native and governed by the Clean-Room Pattern Adoption Policy.

## 2. Problem

Short human directives are convenient, but they are underspecified.

Without a directive compiler, the Foundry risks:

1. unbounded implementation scope;
2. accidental architecture drift;
3. missing context;
4. missing tests;
5. missing documentation;
6. weak verification;
7. poor commit boundaries;
8. repeated clarification questions;
9. inconsistent execution style;
10. hidden assumptions;
11. non-resumable work;
12. agent improvisation outside project policy.

The system needs a way to turn a human directive into a work packet that states:

1. what is being done;
2. why it is being done;
3. what is in scope;
4. what is out of scope;
5. what context is required;
6. what files may be created or modified;
7. what verification is required;
8. what documentation must be updated;
9. what events should be emitted;
10. what commit message should be used;
11. what handoff information must be produced.

## 3. Decision

The Agentic Software Foundry will include a **Directive Compiler** and **Work Protocol** system.

The Directive Compiler converts human directives into structured work packets.

The Work Protocol defines how those work packets are planned, executed, verified, documented, committed, and handed off.

The Directive Compiler belongs primarily to the AI SDLC Framework and is coordinated by the Foundry Control Plane.

The initial v1.0 implementation will be simple, local-first, file-backed, and deterministic enough to inspect.

## 4. Decision Summary

The accepted model is:

```text
Human directive
  ↓
Directive record
  ↓
Directive compiler
  ↓
Work packet
  ↓
Context-pack request
  ↓
Execution protocol
  ↓
Verification loop
  ↓
Session chronicle
  ↓
Memory candidates
  ↓
Handoff packet
  ↓
Atomic commit recommendation
```

The Foundry does not treat a directive as direct permission to mutate the repository.

A directive first becomes a work packet.

A work packet defines the contract for implementation.

## 5. Core Rule

The core rule is:

```text
A directive is intent.
A work packet is authorized scope.
A protocol is execution discipline.
Verification is completion evidence.
A commit is the durable project record.
```

No serious implementation should begin until the directive has been converted into a sufficiently explicit work packet.

## 6. Directory Implications

This ADR implies the future creation of:

```text
.sdlc/
├── README.md
├── directives/
│   ├── README.md
│   └── examples/
├── work-packets/
│   ├── README.md
│   ├── drafts/
│   ├── active/
│   ├── completed/
│   └── superseded/
├── protocols/
│   ├── README.md
│   ├── default-work-protocol.md
│   ├── documentation-work-protocol.md
│   ├── implementation-work-protocol.md
│   ├── verification-work-protocol.md
│   └── scaffold-work-protocol.md
├── verification/
│   ├── README.md
│   └── verification-record-template.md
├── checklists/
│   ├── README.md
│   ├── implementation-checklist.md
│   ├── documentation-checklist.md
│   └── review-checklist.md
├── implementation-order/
│   └── README.md
├── commit-plan/
│   └── README.md
└── retrospectives/
    └── README.md
```

The exact structure may evolve, but the responsibility boundary is accepted.

## 7. Directive Definition

A directive is a human-authored instruction that expresses desired work.

Examples:

```text
Create the Charon skeleton.
```

```text
Add the event bus JSONL writer.
```

```text
Generate the first repo contract test.
```

```text
Write ADR-0007 for multi-agent runtime and role separation.
```

A directive may be short, informal, or incomplete.

The directive compiler’s job is to turn it into structured work.

## 8. Directive Record

A directive record preserves the original user intent.

A directive record should eventually include:

1. directive ID;
2. original text;
3. author;
4. timestamp;
5. source;
6. intended project;
7. interpreted objective;
8. compilation status;
9. related work packet;
10. related run ID;
11. notes;
12. supersession status.

Example future directive record:

```json
{
  "schemaVersion": "0.1.0",
  "directiveId": "dir_20260428_000001",
  "text": "Create the first Foundry event bus implementation.",
  "author": "project-owner",
  "source": "chat",
  "createdAt": "2026-04-28T00:00:00Z",
  "status": "compiled",
  "relatedWorkPacket": ".sdlc/work-packets/active/0001-foundry-event-bus-v0.md",
  "relatedRunId": "run_20260428_000001"
}
```

For v1.0, directive records may be represented as Markdown or JSON.

## 9. Directive Compiler Responsibilities

The Directive Compiler owns the transformation from directive to work packet.

It should identify:

1. objective;
2. scope;
3. non-goals;
4. relevant subsystem;
5. likely affected files;
6. required context;
7. required ADRs;
8. required policies;
9. required verification;
10. expected outputs;
11. risk level;
12. policy gates;
13. handoff obligations;
14. recommended commit boundary.

The Directive Compiler should not execute the work directly.

It produces the plan and work packet.

## 10. Work Packet Definition

A work packet is the Foundry’s canonical unit of planned work.

A work packet is more specific than a directive.

It should define the implementation contract for one atomic change or tightly related set of changes.

A work packet should be small enough to complete, verify, document, and commit atomically.

## 11. Work Packet Required Fields

A work packet should eventually include:

1. work packet ID;
2. title;
3. status;
4. directive source;
5. objective;
6. rationale;
7. scope;
8. non-goals;
9. affected subsystems;
10. required context;
11. files to create;
12. files to modify;
13. files to avoid;
14. implementation steps;
15. acceptance criteria;
16. verification commands;
17. documentation updates;
18. event emissions;
19. policy gates;
20. risk level;
21. rollback plan;
22. handoff requirements;
23. memory candidate expectations;
24. recommended commit message.

## 12. Work Packet Template

The initial Markdown work packet template should look like this:

````markdown
# Work Packet: <Title>

## Metadata

- ID: `<id>`
- Status: `draft`
- Created: `<date>`
- Directive: `<directive-id-or-text>`
- Owner: `project-owner`
- Risk: `low | medium | high`
- Target Commit: `<conventional-commit-message>`

## Objective

Describe the specific outcome this work packet must produce.

## Rationale

Explain why this work matters now.

## Scope

This work packet includes:

1. item one;
2. item two;
3. item three.

## Non-Goals

This work packet does not include:

1. item one;
2. item two;
3. item three.

## Required Context

Read or include:

1. `path/to/context.md`;
2. `path/to/adr.md`;
3. `path/to/policy.md`.

## Files to Create

1. `path/to/new-file.md`

## Files to Modify

1. `path/to/existing-file.md`

## Files to Avoid

1. `path/to/avoid.md`

## Implementation Steps

1. Step one.
2. Step two.
3. Step three.

## Acceptance Criteria

The work is accepted when:

1. criterion one;
2. criterion two;
3. criterion three.

## Verification

Run:

```bash
<command>
````

Expected result:

```text
<expected-result>
```

## Documentation Updates

Update or create:

1. `path/to/doc.md`

## Event Emissions

Expected events:

1. `<event.name>`

## Policy Gates

Required policy gates:

1. `<policy-gate-or-none>`

## Handoff Requirements

The handoff should mention:

1. completed work;
2. verification result;
3. next recommended action.

## Memory Candidate Expectations

This work may produce memory candidates for:

1. decision;
2. invariant;
3. project status.

## Rollback Plan

Describe how to revert this work if needed.

## Recommended Commit

```text
<type>(<scope>): <description>
```

````

## 13. Work Packet Lifecycle

The Foundry will use the following work packet lifecycle:

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
````

Alternative terminal states:

```text
blocked
failed
cancelled
superseded
rejected
```

The lifecycle prevents vague work status.

## 14. Directive Lifecycle

The Foundry will use the following directive lifecycle:

```text
received
→ recorded
→ parsed
→ compiled
→ accepted
→ converted_to_work_packet
```

Alternative terminal states:

```text
needs_clarification
rejected
superseded
deferred
```

A directive may produce one work packet or many work packets.

For v1.0, one directive should generally produce one work packet.

## 15. Protocol Definition

A protocol is the standard execution discipline for a type of work.

The Foundry should define protocols for different work categories.

Initial protocols:

1. documentation work protocol;
2. implementation work protocol;
3. scaffold work protocol;
4. verification work protocol;
5. ADR work protocol;
6. handoff work protocol.

A protocol defines expected phases, checks, and completion standards.

## 16. Default Work Protocol

The default protocol is:

```text
1. Read required context.
2. Confirm work packet scope.
3. Identify affected files.
4. Make the smallest complete change.
5. Run verification.
6. Update documentation if required.
7. Record events.
8. Produce handoff notes if required.
9. Recommend atomic Conventional Commit.
10. Do not expand scope silently.
```

This default applies unless a more specific protocol overrides it.

## 17. Documentation Work Protocol

Documentation work should:

1. identify where the document sits in the architecture;
2. preserve terminology consistency;
3. cite related ADRs or policies by path;
4. avoid premature implementation details unless needed;
5. include status and ownership where appropriate;
6. be committed atomically;
7. update indexes later when indexes exist.

Documentation work is complete when the document is coherent, placed correctly, and committed.

## 18. Implementation Work Protocol

Implementation work should:

1. start from an accepted work packet;
2. use the relevant context pack;
3. create or modify only scoped files;
4. preserve architectural boundaries;
5. include tests where appropriate;
6. run verification commands;
7. emit or record status events;
8. update documentation if behavior changes;
9. produce memory candidates for durable decisions;
10. recommend one atomic commit.

Implementation work is not complete merely because code was generated.

It is complete only when verified or when failure is documented.

## 19. Scaffold Work Protocol

Scaffold work should:

1. identify the project profile;
2. identify generated files;
3. preserve template provenance;
4. avoid overwriting user-authored files without policy approval;
5. generate repo contract tests when applicable;
6. verify the scaffold after generation;
7. record scaffold events;
8. recommend a commit.

The Monorepo Factory owns scaffold mechanics.

The AI SDLC Framework owns the work protocol.

## 20. Verification Work Protocol

Verification work should:

1. identify commands to run;
2. identify expected results;
3. capture pass/fail status;
4. record failures clearly;
5. avoid hiding skipped checks;
6. create follow-up work packets if needed;
7. emit verification events;
8. update handoff state.

Verification can be automated or manual, but the result must be explicit.

## 21. ADR Work Protocol

ADR work should:

1. identify the decision being made;
2. describe context and problem;
3. state the decision clearly;
4. document alternatives considered;
5. document consequences;
6. include acceptance criteria;
7. link related documents;
8. commit atomically;
9. avoid mixing multiple decisions in one ADR unless tightly related.

ADR work is complete when the decision is reviewable and committed.

## 22. Handoff Work Protocol

Handoff work should:

1. identify current project state;
2. identify completed work;
3. identify open work;
4. identify verification status;
5. identify next recommended action;
6. include relevant context pack references;
7. identify memory candidates;
8. warn about risks or blockers;
9. provide new-session bootstrap guidance.

Handoff work is complete when a new session can resume without reconstructing the whole conversation.

## 23. Relationship to the Foundry Control Plane

The Foundry Control Plane coordinates directive compilation and work execution.

It may:

1. record directives;
2. create run records;
3. invoke the Directive Compiler;
4. associate work packets with runs;
5. emit events;
6. track status;
7. invoke policy gates;
8. coordinate context-pack generation;
9. coordinate handoff generation.

The Control Plane does not own the semantics of every work packet.

The AI SDLC Framework owns work protocol.

## 24. Relationship to Charon

Charon provides context for directive compilation and work execution.

The Directive Compiler may request a context pack from Charon.

Charon may use:

1. canonical memory;
2. ADRs;
3. policies;
4. work-packet history;
5. session chronicles;
6. handoff packets;
7. vector retrieval results.

The Directive Compiler may produce memory candidates, but those candidates must enter Charon’s candidate pipeline.

The Directive Compiler must not directly promote canonical memory.

## 25. Relationship to the Event Bus

Directive and work-packet activity should emit events.

Examples:

```text
directive.received
directive.recorded
directive.compiled
directive.rejected
work_packet.created
work_packet.ready
work_packet.started
work_packet.verified
work_packet.closed
```

Events make work visible and resumable.

## 26. Relationship to the Monorepo Factory

The Directive Compiler may produce work packets that invoke the Monorepo Factory.

Examples:

1. generate a new repo;
2. add a Foundry-compatible scaffold;
3. add Charon structure;
4. add repo contract tests;
5. add a new template;
6. add a new profile.

The work packet defines scope and verification.

The factory performs generation.

The Control Plane records events.

## 27. Relationship to Multi-Agent Runtime

The Directive Compiler may eventually select or recommend agent roles for a work packet.

Example:

```yaml
agents:
  architect:
    required: true
  executor:
    required: true
  reviewer:
    required: true
  verifier:
    required: true
```

For v1.0, these role assignments may be documented but not automatically executed.

Full autonomous multi-agent execution is deferred.

## 28. Planning Keywords and Execution Modes

The Foundry may support planning keywords and execution modes.

Examples of future planning keywords:

```text
plan
implement
verify
review
handoff
scaffold
repair
document
```

Examples of future execution modes:

```text
documentation-only
implementation
scaffold
verification
repair
handoff
research
```

These are useful patterns, but they must be Foundry-native.

The v1.0 system should not overbuild a full command language.

## 29. Persistent Verification Loops

The Foundry should support persistent verification loops.

A verification loop is:

```text
implement
→ verify
→ if failed, diagnose
→ repair
→ verify again
→ record result
```

For v1.0, the loop may be manual or simple.

The work packet must still define expected verification.

The Foundry should never claim completion while verification is unknown or failed.

## 30. Scope Discipline

A work packet must control scope.

The implementer should not silently add unrelated features.

If new necessary work is discovered, the correct action is to:

1. document it;
2. create a follow-up work packet;
3. mark the current packet as blocked or partially complete if needed;
4. avoid scope creep in the current commit.

This keeps commits atomic and reviewable.

## 31. Commit Discipline

Each work packet should recommend an atomic Conventional Commit.

Examples:

```text
docs(adr): define directive compiler and work protocols
```

```text
feat(foundry): add jsonl event writer
```

```text
test(repo): add contract checks for foundry scaffold
```

```text
docs(charon): add context pack generation policy
```

The commit message should reflect the actual durable change, not the chat instruction.

## 32. Policy Gates

Some work packets require policy gates.

Examples:

1. changing canonical memory;
2. amending ADRs;
3. changing clean-room policy;
4. deleting files;
5. adding dependencies;
6. enabling external notifications;
7. adding provider-specific integrations;
8. enabling autonomous execution;
9. changing security posture;
10. modifying release behavior.

The Directive Compiler should identify likely policy gates.

For v1.0, this may be documented in the work packet rather than automatically enforced.

## 33. Risk Levels

Work packets should identify risk.

Initial risk levels:

```text
low
medium
high
critical
```

Examples:

1. adding a documentation ADR: low;
2. adding local event writer: medium;
3. adding dependency execution: medium or high;
4. enabling automatic push: high;
5. handling secrets: critical.

Risk level should influence review and policy requirements.

## 34. Context Requirements

A work packet should identify required context.

Context may include:

1. Foundry charter;
2. ADRs;
3. clean-room policy;
4. Charon memory;
5. active work packets;
6. prior handoffs;
7. repository structure;
8. implementation files;
9. tests;
10. run records.

The work packet may request a context pack from Charon.

## 35. Output Requirements

A work packet should identify outputs.

Outputs may include:

1. source files;
2. documentation;
3. manifests;
4. tests;
5. event records;
6. run records;
7. context packs;
8. handoff packets;
9. memory candidates;
10. commit recommendations.

Outputs should be explicit.

## 36. Verification Requirements

A work packet should define verification.

Verification may include:

1. command execution;
2. repo contract tests;
3. linting;
4. typechecking;
5. unit tests;
6. integration tests;
7. documentation presence checks;
8. schema validation;
9. manual review;
10. expected file tree.

If verification cannot be run, the reason must be documented.

## 37. Handoff Requirements

Work packets that materially advance the project should produce handoff notes.

A handoff should state:

1. what changed;
2. why it changed;
3. what passed;
4. what failed;
5. what remains;
6. what context matters next;
7. what commit was recommended or made.

The handoff packet belongs to Charon/Daedalus.

## 38. Memory Candidate Expectations

Some work packets produce durable knowledge.

Examples:

1. a new architectural invariant;
2. a new user preference;
3. a new project decision;
4. a superseded assumption;
5. a failure mode;
6. a reusable implementation lesson.

Such knowledge should become a memory candidate, not canonical memory directly.

## 39. v1.0 Scope

Required for v1.0:

1. `.sdlc/` structure exists;
2. directive records can exist;
3. work packets can be written;
4. work-packet template exists;
5. default work protocol exists;
6. at least one directive can be converted into a work packet;
7. at least one work packet can be associated with a run;
8. work-packet status can be recorded;
9. verification result can be recorded;
10. commit recommendation can be included;
11. handoff requirements can be included;
12. repo contract tests verify required `.sdlc/` paths.

Not required for v1.0:

1. full natural-language compiler;
2. full autonomous planning agent;
3. multi-agent execution;
4. automatic dependency selection;
5. automatic PR generation;
6. remote workflow execution;
7. web UI;
8. complex command language;
9. persistent daemon;
10. automatic commit creation.

## 40. Clean-Room Considerations

This subsystem may be informed by public workflow-layer patterns, including systems that convert short directives into structured work protocols.

The implementation must be original and Foundry-native.

The Foundry must not copy proprietary prompts, private workflow definitions, private tests, private command catalogs, or private implementation details from external systems.

Public concepts are allowed.

Protected implementation is forbidden.

## 41. Evaluation Implications

The Directive Compiler makes several evaluations possible.

Future evaluations can test:

1. whether a directive produces a valid work packet;
2. whether work packet scope is explicit;
3. whether non-goals are present;
4. whether verification is defined;
5. whether commit recommendation is conventional;
6. whether required context is identified;
7. whether policy gates are identified;
8. whether handoff requirements are included;
9. whether memory candidates are suggested correctly;
10. whether the generated packet avoids scope creep.

This supports the Foundry Evaluation Harness.

## 42. Repo Contract Implications

Future repo contract tests should verify:

1. `.sdlc/` exists;
2. `.sdlc/directives/` exists;
3. `.sdlc/work-packets/` exists;
4. `.sdlc/protocols/` exists;
5. `.sdlc/verification/` exists;
6. `.sdlc/checklists/` exists;
7. `.sdlc/commit-plan/` exists;
8. `.sdlc/retrospectives/` exists;
9. default work protocol exists;
10. work packet template exists.

## 43. Alternatives Considered

### 43.1 Direct Execution From Human Directive

The Foundry could allow agents to execute directly from short directives.

This was rejected because it creates too much ambiguity and weakens auditability.

### 43.2 Manual Work Packets Only

The Foundry could require all work packets to be written manually.

This was rejected because the system should assist in turning intent into structure.

Manual editing remains allowed, but compilation should be supported.

### 43.3 Full Autonomous Planner First

The Foundry could begin with a full AI planner that decomposes directives into multiple agent tasks.

This was rejected for v1.0 because it is too complex and too risky before the core loop is proven.

### 43.4 External Workflow Tool First

The Foundry could adopt an existing workflow wrapper directly.

This is deferred because the Foundry needs to establish its own protocol, terminology, and clean-room architecture first.

## 44. Consequences

### 44.1 Positive Consequences

This decision provides:

1. structured execution;
2. scope control;
3. better verification;
4. better documentation discipline;
5. clearer commit boundaries;
6. stronger resumability;
7. better agent coordination later;
8. reduced improvisation;
9. better tutorial flow;
10. better evaluation surface.

### 44.2 Negative Consequences

This decision adds:

1. more process;
2. more files;
3. more upfront planning;
4. possible ceremony for small tasks;
5. need for templates and schemas;
6. need for lifecycle management.

These costs are accepted because the Foundry is designed for serious software work.

## 45. Risk Mitigations

The Foundry will mitigate risk by:

1. keeping v1.0 work packets simple;
2. supporting documentation-only packets;
3. using Markdown first;
4. deferring full autonomous compilation;
5. keeping work packets atomic;
6. requiring verification but allowing documented manual verification;
7. using repo contract tests;
8. treating scope expansion as follow-up work.

## 46. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.sdlc/README.md`;
2. `.sdlc/directives/README.md`;
3. `.sdlc/work-packets/README.md`;
4. `.sdlc/work-packets/drafts/`;
5. `.sdlc/work-packets/active/`;
6. `.sdlc/work-packets/completed/`;
7. `.sdlc/work-packets/superseded/`;
8. `.sdlc/protocols/default-work-protocol.md`;
9. `.sdlc/protocols/documentation-work-protocol.md`;
10. `.sdlc/protocols/implementation-work-protocol.md`;
11. `.sdlc/protocols/verification-work-protocol.md`;
12. `.sdlc/verification/verification-record-template.md`;
13. `.sdlc/checklists/review-checklist.md`;
14. `.sdlc/commit-plan/README.md`;
15. repo contract tests validating required `.sdlc/` paths;
16. at least one real work packet used in the first Foundry loop.

Full autonomous directive compilation is not required for this ADR to be accepted.

## 47. Future Work

This decision creates future work on:

1. directive schema;
2. work-packet schema;
3. work-packet template;
4. protocol templates;
5. directive compiler implementation;
6. work-packet validator;
7. work-packet lifecycle events;
8. work-packet status updater;
9. verification record format;
10. policy gate detection;
11. context-pack request generation;
12. handoff generation integration;
13. commit recommendation validation;
14. agent role recommendation;
15. multi-packet decomposition.

## 48. Decision

Accepted.

The Agentic Software Foundry will include a Directive Compiler and Work Protocol system.

Human directives will be converted into structured work packets before serious implementation begins.

Work packets define scope, context, acceptance criteria, verification, documentation obligations, handoff requirements, memory candidate expectations, and commit recommendations.

The AI SDLC Framework owns work protocol.

The Foundry Control Plane coordinates runs, events, and policy gates.

Charon provides context and receives memory candidates.

The Event Bus records directive and work-packet activity.

The Monorepo Factory may be invoked through work packets, but it does not replace the work protocol.

The Foundry will not treat short directives as permission for unbounded improvisation.

A directive is intent.

A work packet is scope.

A protocol is discipline.

Verification is completion evidence.
