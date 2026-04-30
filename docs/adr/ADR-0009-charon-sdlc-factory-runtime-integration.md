---
title: "ADR-0009: Charon, SDLC, Factory, and Runtime Integration"
description: "Accepts the integration model connecting Charon, the AI SDLC Framework, the Monorepo Factory, and runtime/operator patterns through the Foundry Control Plane."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0009"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - integration
  - foundry
---

# ADR-0009: Charon, SDLC, Factory, and Runtime Integration

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

## 1. Context

The Agentic Software Foundry is not a single-purpose tool.

It is an integrated system composed of several cooperating subsystems:

1. Charon for context continuity;
2. the AI SDLC Framework for disciplined work execution;
3. the Monorepo Factory for repeatable project generation;
4. the Foundry Control Plane for coordination;
5. the Event Bus and Notification Router for operator visibility;
6. the Multi-Agent Runtime for role separation;
7. the vector retrieval layer for semantic recall;
8. the worktree execution model for isolated parallel work;
9. the Evaluation Harness for proof and regression testing.

Each subsystem is valuable by itself.

The Foundry becomes powerful when these systems cooperate without collapsing into one another.

This ADR defines how Charon, the AI SDLC Framework, the Monorepo Factory, and runtime/operator patterns integrate into one coherent Agentic Software Foundry.

## 2. Problem

The Foundry needs integration without confusion.

Several risks must be avoided.

### 2.1 Charon Becomes Too Large

Charon should not become the workflow engine, template generator, event router, agent runtime, and project orchestrator.

Charon should own context continuity.

### 2.2 The AI SDLC Framework Becomes the Control Plane

The AI SDLC Framework should not own all runtime state, event routing, adapters, manifests, and project orchestration.

It should own work protocol.

### 2.3 The Monorepo Factory Becomes the Product

The Monorepo Factory is essential, but it is not the whole Foundry.

It generates project structures and templates.

It should not become the canonical memory system or agent runtime.

### 2.4 Runtime Patterns Become the Core Identity

Patterns inspired by OmX, clawhip, OmO, Astra-Code, and similar systems are useful.

They should strengthen the Foundry.

They must not redefine it as a clone of any external system.

### 2.5 Generated Output Becomes Trusted Too Quickly

The Factory may generate files.

Agents may generate code.

The SDLC Framework may generate work packets.

Charon may generate context packs.

None of those outputs should become trusted automatically.

### 2.6 No Clear Integration Contracts

Without explicit contracts, subsystems may pass vague prose to each other, making the system difficult to test, automate, or evolve.

The Foundry needs clear integration boundaries and artifact flow.

## 3. Decision

The Agentic Software Foundry will integrate Charon, the AI SDLC Framework, the Monorepo Factory, and runtime/operator patterns through the **Foundry Control Plane** using explicit contracts, events, manifests, work packets, context packs, run records, and policy gates.

The core identity of the system remains:

> A governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.

The external/public runtime patterns are adopted only as Foundry-native patterns inside appropriate layers.

The Foundry Control Plane coordinates the systems.

It does not replace them.

## 4. Decision Summary

The accepted integration model is:

```text
Human directive
  ↓
Foundry Control Plane
  ↓
AI SDLC Directive Compiler
  ↓
Work Packet
  ↓
Charon Context Pack
  ↓
Run Record
  ↓
Agent Runtime / Executor / Human Implementation
  ↓
Verification
  ↓
Event Bus and Notification Router
  ↓
Session Chronicle
  ↓
Memory Candidates
  ↓
Handoff Packet
  ↓
Atomic Commit
  ↓
New Session Bootstrap
```

For scaffolding work, the flow expands to:

```text
Human directive
  ↓
Work Packet
  ↓
Monorepo Factory Profile
  ↓
Scaffold Manifest
  ↓
Generated Files
  ↓
Repo Contract Tests
  ↓
Scaffold Events
  ↓
Review
  ↓
Commit
  ↓
Handoff and Memory Candidates
```

## 5. Core Rule

The core integration rule is:

```text
Charon remembers.
The AI SDLC Framework structures the work.
The Monorepo Factory generates repeatable project artifacts.
The Foundry Control Plane coordinates the systems.
The Event Bus records and routes what happened.
The Agent Runtime separates responsibilities.
The Evaluation Harness proves the system works.
```

No subsystem should silently absorb the responsibilities of another.

## 6. System Responsibility Matrix

| System | Owns | Does Not Own |
|---|---|---|
| Foundry Control Plane | manifests, runs, events, adapters, routing, coordination, policy-gate invocation | canonical memory, work semantics, template internals, generated app logic |
| Charon | memory, context packs, handoffs, chronicles, retrieval contracts, context continuity | runtime orchestration, template generation, general work protocol |
| AI SDLC Framework | directives, work packets, protocols, verification expectations, commit guidance | canonical memory, event delivery, template rendering |
| Monorepo Factory | templates, profiles, scaffolds, repo contracts, scaffold manifests, template provenance | memory admission, agent coordination, context rehydration |
| Event Bus and Notification Router | event log, routes, renderers, sinks, operator status | implementation, verification authority, memory truth |
| Multi-Agent Runtime | roles, capabilities, routing, disagreement, handoffs | project authority, canonical memory, final acceptance |
| Vector Retrieval Layer | semantic retrieval, indexing, source pointers, ranking support | canonical truth |
| Evaluation Harness | tests and evaluations proving behavior | architecture ownership |

## 7. Integration Contracts

The Foundry should integrate through durable artifacts rather than hidden in-memory assumptions.

Initial integration artifacts include:

1. project manifest;
2. directive record;
3. work packet;
4. context-pack request;
5. context pack;
6. run record;
7. event record;
8. verification record;
9. scaffold manifest;
10. repo contract result;
11. session chronicle;
12. memory candidate;
13. handoff packet;
14. commit recommendation.

These artifacts should be human-inspectable, versionable, and testable.

## 8. Project Manifest Contract

The project manifest identifies the project and enabled subsystems.

Expected location:

```text
.foundry/manifests/foundry.project.json
```

The manifest should eventually define:

1. project ID;
2. project name;
3. project profile;
4. enabled subsystems;
5. package manager;
6. documentation mode;
7. memory mode;
8. retrieval mode;
9. autonomy mode;
10. verification policy;
11. forbidden tools;
12. policy references;
13. adapter references.

The Control Plane reads the manifest to coordinate behavior.

Other subsystems may reference the manifest but should not silently rewrite it.

## 9. Directive Record Contract

A directive record preserves original human intent.

Expected location:

```text
.sdlc/directives/
```

A directive record should include:

1. directive ID;
2. original directive text;
3. author;
4. timestamp;
5. source;
6. interpreted objective;
7. compilation status;
8. related work packet;
9. related run ID;
10. supersession status.

The Directive Compiler uses the directive record to create a work packet.

## 10. Work Packet Contract

The work packet is the central work contract.

Expected location:

```text
.sdlc/work-packets/
```

A work packet defines:

1. objective;
2. scope;
3. non-goals;
4. required context;
5. files to create;
6. files to modify;
7. files to avoid;
8. implementation steps;
9. acceptance criteria;
10. verification commands;
11. policy gates;
12. handoff requirements;
13. memory candidate expectations;
14. recommended commit message.

The work packet is the bridge between human intent and implementation.

## 11. Context Pack Contract

A context pack is a task-specific bundle of relevant context.

Expected location:

```text
.charon/daedalus/context-packs/
```

A context pack should identify:

1. purpose;
2. target work packet;
3. included source artifacts;
4. included ADRs;
5. included policies;
6. included canonical memory;
7. included chronicles;
8. included handoffs;
9. excluded material;
10. stale or disputed material;
11. trust levels;
12. context budget;
13. generation timestamp.

The context pack is derived.

It is not canonical memory.

## 12. Run Record Contract

A run record links work, context, execution, verification, events, and outputs.

Expected location:

```text
.foundry/runs/
```

A run record should include:

1. run ID;
2. directive ID;
3. work packet path;
4. context pack path;
5. assigned roles;
6. run status;
7. start time;
8. end time;
9. event references;
10. verification result;
11. output artifacts;
12. handoff packet;
13. memory candidates;
14. commit recommendation.

The run record is operational evidence.

It is not canonical memory by itself.

## 13. Event Record Contract

Events record what happened.

Expected location:

```text
.foundry/events/events.jsonl
```

An event should include:

1. event ID;
2. schema version;
3. event type;
4. timestamp;
5. actor;
6. source subsystem;
7. run ID when available;
8. message;
9. severity;
10. related artifacts.

Events connect subsystem activity into an auditable timeline.

## 14. Verification Record Contract

A verification record captures evidence of completion or failure.

Expected location:

```text
.sdlc/verification/
```

A verification record should include:

1. work packet ID;
2. run ID;
3. command or check;
4. expected result;
5. actual result;
6. status;
7. timestamp;
8. actor;
9. notes;
10. related events.

Verification is completion evidence.

Unverified work must not be presented as complete.

## 15. Scaffold Manifest Contract

A scaffold manifest records generated artifacts from the Monorepo Factory.

Expected location:

```text
.foundry/runs/<run-id>/scaffold-manifest.json
```

or later:

```text
templates/manifests/
```

A scaffold manifest should include:

1. generator version;
2. template name;
3. template version;
4. profile;
5. feature flags;
6. generated files;
7. skipped files;
8. overwritten files;
9. protected files;
10. repo contract expectations;
11. provenance.

The scaffold manifest makes generation auditable.

## 16. Session Chronicle Contract

A session chronicle records what happened in a session or run.

Expected location:

```text
.charon/clio/sessions/
```

A chronicle should include:

1. session or run ID;
2. date;
3. directive;
4. work performed;
5. files changed;
6. decisions made;
7. verification result;
8. open risks;
9. next action;
10. memory candidates;
11. handoff reference.

The chronicle is a historical record.

It is not automatically canonical memory.

## 17. Memory Candidate Contract

A memory candidate is proposed durable knowledge.

Expected location:

```text
.charon/mnemosyne/candidates/
```

A memory candidate should include:

1. candidate ID;
2. proposed memory;
3. source artifact;
4. source run;
5. trust level;
6. rationale;
7. related decisions;
8. possible conflicts;
9. admission status;
10. reviewer.

Memory candidates require admission before becoming canonical.

## 18. Handoff Packet Contract

A handoff packet prepares future work.

Expected location:

```text
.charon/daedalus/handoff-packets/
```

A handoff packet should include:

1. project identity;
2. current milestone;
3. completed work;
4. active work packet;
5. verification status;
6. open risks;
7. next recommended action;
8. relevant context pack;
9. memory candidates;
10. commit status;
11. new-session bootstrap guidance.

The handoff packet enables continuity.

It does not automatically become canonical memory.

## 19. Commit Recommendation Contract

Each completed work packet should produce an atomic Conventional Commit recommendation.

Examples:

```text
docs(adr): define foundry integration model
feat(foundry): add jsonl event writer
test(repo): add contract tests for foundry scaffold
docs(charon): add context pack policy
```

The commit recommendation should reflect the durable change.

It should not merely repeat the chat directive.

## 20. Integration Flow: Documentation Work

Documentation work follows this flow:

```text
Directive
  ↓
Directive record
  ↓
Documentation work packet
  ↓
Required context
  ↓
Document creation or update
  ↓
Review
  ↓
Verification by inspection or repo contract
  ↓
Chronicle if material
  ↓
Commit recommendation
```

Documentation work may not require code execution, but it still requires placement, coherence, and commit discipline.

## 21. Integration Flow: Implementation Work

Implementation work follows this flow:

```text
Directive
  ↓
Work packet
  ↓
Context pack
  ↓
Run record
  ↓
Executor implementation
  ↓
Verifier checks
  ↓
Reviewer review
  ↓
Events
  ↓
Chronicle
  ↓
Memory candidates
  ↓
Handoff
  ↓
Commit
```

Implementation work is not complete until verification passes or failure is documented.

## 22. Integration Flow: Scaffold Work

Scaffold work follows this flow:

```text
Directive
  ↓
Scaffold work packet
  ↓
Factory profile
  ↓
Scaffold generation
  ↓
Scaffold manifest
  ↓
Repo contract tests
  ↓
Review generated structure
  ↓
Events
  ↓
Chronicle
  ↓
Commit
```

The Factory generates files.

The SDLC Framework defines work scope.

The Control Plane records the run.

Repo contracts prove the scaffold.

## 23. Integration Flow: Context Continuity Work

Context continuity work follows this flow:

```text
Directive or run event
  ↓
Charon context operation
  ↓
Memory candidate, context pack, chronicle, or handoff
  ↓
Policy gate if canonical memory is affected
  ↓
Event record
  ↓
Review
  ↓
Commit if durable
```

Charon artifacts are part of the project’s continuity layer.

They must not be treated as hidden state.

## 24. Integration Flow: Agent Runtime Work

Agent runtime work follows this flow:

```text
Work packet
  ↓
Suggested roles
  ↓
Control Plane role assignment
  ↓
Agent handoff
  ↓
Execution / Review / Verification
  ↓
Disagreement protocol if needed
  ↓
Events
  ↓
Chronicle
  ↓
Memory candidates
```

For v1.0, this is mostly procedural and documented.

Full autonomous runtime execution is deferred.

## 25. Integration Flow: Event and Notification Work

Event and notification work follows this flow:

```text
Subsystem activity
  ↓
Event emitted
  ↓
Event written to JSONL
  ↓
Router evaluates route
  ↓
Renderer creates message
  ↓
Sink delivers locally
  ↓
Notification event recorded
```

For v1.0, local console and filesystem sinks are sufficient.

External delivery is deferred and policy-gated.

## 26. Integration Flow: Vector Retrieval Work

Vector retrieval work follows this flow:

```text
Repository source artifact
  ↓
Hephaestus source discovery
  ↓
Chunking
  ↓
Embedding or stub indexing
  ↓
Argos retrieval contract
  ↓
Anamnesis context selection
  ↓
Daedalus context-pack generation
```

The vector index is derived.

The repository remains authoritative.

## 27. Runtime/Operator Pattern Integration

The Foundry will absorb runtime/operator patterns into its own architecture.

### 27.1 OmX-Style Pattern Placement

OmX-style workflow ideas belong in:

```text
.sdlc/directives/
.sdlc/protocols/
.sdlc/work-packets/
.foundry/runs/
.foundry/state/
```

Absorbed patterns:

1. directive-to-workflow conversion;
2. planning keywords;
3. execution modes;
4. persistent verification loops;
5. team execution concepts;
6. project-local state.

### 27.2 clawhip-Style Pattern Placement

clawhip-style event routing ideas belong in:

```text
.foundry/events/
.foundry/router/
.foundry/sources/
.foundry/renderers/
.foundry/sinks/
```

Absorbed patterns:

1. daemon/event-router shape;
2. typed event model;
3. source/dispatcher/router separation;
4. renderer/sink separation;
5. notification outside coding context;
6. git, GitHub, process, and agent lifecycle sources later.

### 27.3 OmO-Style Pattern Placement

OmO-style multi-agent orchestration ideas belong in:

```text
.foundry/agents/
.foundry/agents/roles/
.foundry/agents/capabilities/
.foundry/agents/routing/
.foundry/agents/disagreement/
.sdlc/protocols/
.charon/mnemosyne/candidates/
```

Absorbed patterns:

1. planner/executor/reviewer separation;
2. intent gates;
3. disagreement resolution;
4. wisdom accumulation;
5. model/category routing later;
6. verification-before-completion loops.

### 27.4 Astra-Code-Style Pattern Placement

Astra-Code-style runtime/operator ideas belong in:

```text
.foundry/
.sdlc/
.charon/
future runtime packages
future execution engine
```

Absorbed patterns:

1. human direction as controlling input;
2. repository as artifact;
3. runtime/operator discipline;
4. separation of orchestration and execution;
5. clean-room defensive implementation posture;
6. future Rust/Python runtime research where appropriate.

## 28. What the Foundry Will Not Do

The Foundry will not:

1. become a clone of OmX;
2. become a clone of clawhip;
3. become a clone of OmO;
4. become a clone of Astra-Code;
5. become a clone of Claude Code;
6. treat leaked or private code as source material;
7. let generated output become canonical automatically;
8. let one agent own planning, implementation, verification, approval, and memory;
9. use the vector database as source of truth;
10. enable automatic remote push by default;
11. enable automatic merge by default;
12. require external notification channels for v1.0;
13. require full autonomous multi-agent execution for v1.0.

## 29. Policy Gates Across Integration Boundaries

The following integration transitions require policy gates:

1. candidate memory to canonical memory;
2. draft ADR to accepted ADR;
3. architecture change affecting accepted boundaries;
4. scaffold overwrite of existing files;
5. destructive file deletion;
6. dependency addition;
7. external notification enablement;
8. remote push;
9. merge after autonomous execution;
10. release publication;
11. secret handling;
12. clean-room policy amendment;
13. enabling aggressive autonomy.

For v1.0, many gates may be manual.

They still must be explicit.

## 30. Event Requirements Across Integration Boundaries

Major integration steps should emit events.

Examples:

```text
directive.received
directive.compiled
work_packet.created
context_pack.generated
run.started
scaffold.started
scaffold.completed
verification.started
verification.passed
verification.failed
session_chronicle.written
memory_candidate.created
handoff.generated
run.completed
```

Events make integration visible.

## 31. Evaluation Requirements

The integrated system must eventually be evaluated end to end.

The most important v1.0 evaluation is the Foundry loop:

```text
directive
→ work packet
→ context pack
→ run record
→ event log
→ verification record
→ chronicle
→ memory candidate
→ handoff packet
→ commit recommendation
```

A successful v1.0 proves this loop locally.

## 32. v1.0 MVP Boundary

The v1.0 MVP must implement or scaffold enough of the integration to prove the loop.

Required for v1.0:

1. project manifest exists;
2. Charon directory structure exists;
3. SDLC directory structure exists;
4. Foundry Control Plane directory structure exists;
5. Event Bus JSONL file exists;
6. work-packet template exists;
7. context-pack template exists;
8. handoff template exists;
9. run record template exists;
10. memory candidate template exists;
11. verification record template exists;
12. repo contract tests exist;
13. one directive is manually or semi-automatically compiled into a work packet;
14. one context pack is generated or assembled;
15. one run record is created;
16. one verification result is recorded;
17. one handoff packet is created;
18. one memory candidate is created;
19. events are written for the loop;
20. a Conventional Commit is recommended.

Not required for v1.0:

1. full autonomous coding agent;
2. full multi-agent runtime;
3. production vector database;
4. external notification integrations;
5. daemon process;
6. tmux orchestration;
7. GitHub PR automation;
8. automatic worktree creation;
9. automatic merge;
10. automatic remote push.

## 33. Initial Repository Shape Implied by Integration

This ADR implies the following major directories:

```text
.foundry/
.charon/
.sdlc/
templates/
evals/
docs/
governance/
```

The first implementation scaffold should create these directories with meaningful README and policy files.

The scaffold should not create placeholder noise without purpose.

Every initial directory should have a clear responsibility.

## 34. Integration With Tutorial Documentation

The Foundry should be built tutorial-style.

Every major build step should document:

1. where the step fits;
2. what problem it solves;
3. what files are created;
4. why they exist;
5. what verification applies;
6. when to commit;
7. recommended Conventional Commit message;
8. what the next step is.

The Foundry should be both the product and the demonstration of its own development method.

## 35. Integration With Commit Discipline

Each integration artifact should be committed atomically.

Examples:

```text
docs(adr): define foundry integration model
docs(foundry): define v1 mvp boundary
chore(scaffold): add foundry control plane directories
chore(scaffold): add charon context continuity directories
chore(scaffold): add sdlc work packet directories
test(repo): add repository contract tests
feat(foundry): add jsonl event writer
feat(sdlc): add directive to work packet compiler
feat(charon): add context pack generator
```

Commit boundaries should align with work packets.

## 36. Integration With Repo Contract Tests

Repo contract tests are essential.

They should eventually verify:

1. required Foundry directories exist;
2. required Charon directories exist;
3. required SDLC directories exist;
4. required governance files exist;
5. required ADRs exist;
6. required templates exist;
7. required event files exist;
8. required manifests exist;
9. forbidden tools are absent;
10. scaffold invariants hold.

The repo should be able to prove its own shape.

## 37. Integration With Memory Admission

The integrated system must preserve memory discipline.

Execution may produce observations.

Observations may become memory candidates.

Memory candidates may become canonical only through policy.

Flow:

```text
run observation
  ↓
session chronicle
  ↓
memory candidate
  ↓
Themis admission review
  ↓
Athena conflict/drift check
  ↓
canonical memory, if accepted
```

No subsystem may bypass this flow.

## 38. Integration With Handoff

The integrated system must preserve handoff discipline.

After meaningful work, Daedalus should produce or update a handoff packet.

The handoff should make clear:

1. what was done;
2. what was verified;
3. what was not verified;
4. what changed;
5. what remains;
6. what context matters next;
7. what commit should exist;
8. what the next session should do.

Handoff is central to context continuity.

## 39. Integration With Operator Visibility

The Operator should not need to inspect every artifact to know the project state.

The Event Bus and Notification Router should eventually provide concise operator-visible status.

For v1.0, this can be:

```text
.foundry/state/latest-status.md
```

It should summarize:

1. active run;
2. active work packet;
3. latest event;
4. verification status;
5. required human action;
6. next recommended action.

## 40. Integration With Vector Retrieval

Vector retrieval must integrate into Charon without becoming authority.

The correct flow is:

```text
repository artifacts
  ↓
Hephaestus indexing
  ↓
Argos retrieval
  ↓
Anamnesis rehydration
  ↓
Daedalus context pack
```

The vector database is not a memory source.

It is an index.

## 41. Integration With Monorepo Factory

The Monorepo Factory should eventually be able to generate Foundry-ready repositories.

A Foundry-ready repo may include:

1. `.foundry/`;
2. `.charon/`;
3. `.sdlc/`;
4. `docs/ai/`;
5. `docs/adr/`;
6. `governance/`;
7. `evals/`;
8. repo contract tests;
9. project manifest;
10. clean-room policy;
11. bootstrap prompt;
12. handoff template.

The Factory should preserve template provenance.

## 42. Integration With External Tools

External tools should integrate through adapters.

Potential adapters:

1. ChatGPT;
2. Claude;
3. Codex-like CLI;
4. local LLMs;
5. Cursor;
6. Aider;
7. Continue;
8. GitHub;
9. vector stores;
10. notification channels;
11. shell;
12. tmux;
13. Docker.

Adapters are replaceable.

They do not define the Foundry.

## 43. Integration With Safety Defaults

The integrated Foundry must remain safe-by-default.

Default v1.0 posture:

1. local-first;
2. no automatic remote push;
3. no automatic merge;
4. no external notification sinks by default;
5. no canonical memory promotion without admission;
6. no unbounded autonomous loops;
7. no generated output trusted by default;
8. no leaked or unauthorized material;
9. no destructive changes without explicit approval;
10. no provider lock-in.

## 44. Integration With Clean-Room Policy

All integration work must comply with the Clean-Room Pattern Adoption Policy.

External systems may inform architecture.

They may not contribute unauthorized implementation.

Any material public inspiration should be documented in ADRs or architecture notes when significant.

The Foundry should remain defensible as an original system.

## 45. Initial End-to-End Demo Loop

The first end-to-end demo should be intentionally small.

Example directive:

```text
Create a sample Foundry status artifact.
```

The demo should produce:

1. directive record;
2. work packet;
3. context pack;
4. run record;
5. events;
6. verification record;
7. session chronicle;
8. memory candidate;
9. handoff packet;
10. commit recommendation.

This proves the architecture without requiring full autonomous coding.

## 46. Alternatives Considered

### 46.1 Keep Subsystems Separate With No Integration

The Foundry could maintain Charon, SDLC, Factory, and runtime concepts as separate projects.

This was rejected because the value comes from the integrated loop.

### 46.2 Collapse Everything Into One Tool

The Foundry could combine all responsibilities into one command, one runtime, or one agent.

This was rejected because it would destroy responsibility boundaries and make the system fragile.

### 46.3 Make Charon the Central Product

Charon could become the whole system.

This was rejected because context continuity is essential but not sufficient.

The Foundry also needs work protocols, scaffolding, event routing, runtime roles, and verification.

### 46.4 Make the Monorepo Factory the Central Product

The Factory could become the whole system.

This was rejected because generation is only one phase of software work.

The Foundry must also remember, execute, verify, and resume.

### 46.5 Make an Autonomous Agent Team the Central Product

The system could focus primarily on autonomous agents.

This was rejected because autonomy without canonical memory, policy gates, verification, scaffolding, and documentation discipline is not enough.

### 46.6 Adopt an Existing Runtime Directly

The Foundry could directly adopt an existing workflow or multi-agent runtime.

This is deferred because the Foundry needs a clean, original, governed architecture first.

External runtimes may later become adapters or optional integrations.

## 47. Consequences

### 47.1 Positive Consequences

This decision provides:

1. coherent architecture;
2. clear subsystem boundaries;
3. durable context continuity;
4. structured work execution;
5. repeatable project generation;
6. operator visibility;
7. safer runtime autonomy;
8. better verification discipline;
9. model-agnostic extensibility;
10. stronger portfolio and product identity.

### 47.2 Negative Consequences

This decision adds:

1. more architecture;
2. more documentation;
3. more artifacts;
4. more coordination overhead;
5. more repo structure;
6. more schemas later;
7. more testing requirements.

These costs are accepted because the Foundry is designed as a serious system, not a quick script.

## 48. Risk Mitigations

The Foundry will mitigate integration risks by:

1. implementing one vertical slice first;
2. deferring full automation;
3. keeping v1.0 local-first;
4. using Markdown and JSON before complex databases;
5. enforcing clean responsibility boundaries;
6. relying on repo contract tests;
7. keeping external integrations optional;
8. preserving human authority;
9. using policy gates;
10. documenting all major decisions.

## 49. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.foundry/`;
2. `.charon/`;
3. `.sdlc/`;
4. `templates/`;
5. `evals/`;
6. project manifest;
7. work-packet template;
8. context-pack template;
9. handoff template;
10. run record template;
11. memory candidate template;
12. event log;
13. latest status artifact;
14. repo contract tests;
15. at least one end-to-end local Foundry loop.

Full autonomous multi-agent execution, production vector retrieval, external notifications, and worktree automation are not required for this ADR to be accepted.

## 50. Future Work

This decision creates future work on:

1. manifest-driven project contracts;
2. work packet lifecycle implementation;
3. context pack and handoff lifecycle;
4. repo contract testing;
5. evaluation harness;
6. project scaffold;
7. CLI implementation;
8. event writer;
9. directive compiler v0;
10. context pack generator v0;
11. handoff generator v0;
12. memory candidate generator v0;
13. vector adapter stub;
14. operator status writer;
15. first end-to-end loop.

## 51. Decision

Accepted.

The Agentic Software Foundry will integrate Charon, the AI SDLC Framework, the Monorepo Factory, and runtime/operator patterns through the Foundry Control Plane using explicit contracts, events, manifests, work packets, context packs, run records, handoffs, memory candidates, policy gates, and repo contract tests.

Charon remembers.

The AI SDLC Framework structures the work.

The Monorepo Factory generates repeatable project artifacts.

The Foundry Control Plane coordinates.

The Event Bus records and routes activity.

The Multi-Agent Runtime separates responsibility.

The vector retrieval layer accelerates recall without becoming truth.

The Evaluation Harness proves the system works.

The Foundry remains its own governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic software engineering platform.
