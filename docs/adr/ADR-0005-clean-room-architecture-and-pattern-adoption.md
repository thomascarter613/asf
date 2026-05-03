---
title: "ADR-0005: Clean-Room Architecture and Pattern Adoption"
description: "Accepts clean-room pattern adoption as the rule for learning from public systems without copying protected implementation."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0005"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - clean-room
  - governance
---

# ADR-0005: Clean-Room Architecture and Pattern Adoption

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

## 1. Context

The Agentic Software Foundry is being designed in a software ecosystem where many AI-assisted development tools, agent harnesses, workflow engines, memory systems, coding agents, and orchestration frameworks are emerging quickly.

The Foundry should learn from useful public architecture patterns.

At the same time, the Foundry must remain independent, defensible, ethical, auditable, and clean-room.

The project has already identified several public or user-owned sources of architectural inspiration:

1. OmX / oh-my-codex-style workflow layering;
2. clawhip-style event routing and notification delivery;
3. OmO / oh-my-openagent-style multi-agent coordination;
4. Astra-Code-style runtime/operator philosophy;
5. Claude Code public documentation around repo-backed memory and context continuity;
6. general software engineering patterns such as event logs, policy gates, work packets, vector indexes, and repository-backed documentation.

These sources may inform the Foundry, but they must not define it.

The Foundry’s core identity remains:

> A governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.

## 2. Problem

The Foundry needs a disciplined way to absorb useful external architecture patterns without becoming a clone, derivative, or confused mixture of other systems.

Without a clean-room pattern adoption decision, the project risks:

1. copying implementation instead of learning architecture;
2. importing incompatible assumptions;
3. blurring licensing boundaries;
4. adopting unsafe autonomous behaviors too early;
5. overfitting to one provider, tool, or agent runtime;
6. contaminating the repository with material of unclear provenance;
7. losing the Foundry’s own architectural identity;
8. creating a system that is difficult to explain, publish, or commercialize.

The Foundry must be able to say:

1. what it learned from public patterns;
2. what it intentionally did not copy;
3. where each pattern belongs inside the Foundry;
4. how the Foundry-specific implementation differs;
5. what safety boundaries govern adoption.

## 3. Decision

The Agentic Software Foundry will use a **clean-room pattern adoption model**.

The Foundry may study public architecture patterns, public documentation, open-source projects, and the project owner’s own prior work.

The Foundry must not incorporate leaked proprietary source code, copied private implementation details, unauthorized material, license-incompatible material, or derivative implementations of non-open-source systems.

The Foundry will absorb useful external ideas only as independently implemented Foundry-native patterns.

External systems may influence architecture, but they do not become the Foundry’s identity.

## 4. Decision Summary

The Foundry will use this rule:

```text
Study public ideas.
Do not copy protected implementation.
Integrate only through Foundry-native architecture.
Preserve provenance.
Respect licenses.
Keep responsibility boundaries explicit.
````

The Foundry may adopt general patterns such as:

```text
directive-to-workflow compilation
event routing
notification sinks
agent role separation
verification loops
worktree isolation
repo-backed memory
vector-assisted retrieval
context-pack assembly
handoff generation
policy gates
manifest-driven configuration
append-only run logs
```

The Foundry must not copy:

```text
leaked source code
private implementation details
private prompts
private tests
private comments
private schemas
unauthorized secrets
license-incompatible code
proprietary file structures
unlicensed vendor internals
```

## 5. Core Principle

The Foundry may be inspired by patterns.

The Foundry must be implemented from first principles.

A public pattern may answer:

```text
What class of problem exists?
What shape of solution is useful?
What trade-offs should be considered?
What risks should be avoided?
```

A public pattern must not become:

```text
a copied module
a copied prompt
a copied schema
a copied test suite
a copied runtime
a copied product identity
```

## 6. Approved Pattern Categories

The following categories of patterns are approved for study and independent adoption.

### 6.1 Workflow Layer Patterns

The Foundry may study workflow systems that turn short human directives into structured execution.

Useful pattern concepts include:

1. directive parsing;
2. planning keywords;
3. execution modes;
4. persistent verification;
5. structured plans;
6. task decomposition;
7. run logs;
8. team execution;
9. resumable work;
10. project-local state.

Foundry home:

```text
AI SDLC Framework
Foundry Directive Compiler
Foundry Control Plane
```

### 6.2 Event Router Patterns

The Foundry may study systems that route operational events outside the coding agent’s context window.

Useful pattern concepts include:

1. typed events;
2. event sources;
3. append-only logs;
4. dispatchers;
5. routers;
6. renderers;
7. sinks;
8. git event monitoring;
9. GitHub event monitoring;
10. process or tmux event monitoring;
11. agent lifecycle events;
12. operator notifications.

Foundry home:

```text
Foundry Event Bus
Foundry Notification Router
Foundry Control Plane
```

### 6.3 Multi-Agent Runtime Patterns

The Foundry may study multi-agent orchestration systems.

Useful pattern concepts include:

1. planner/executor separation;
2. reviewer/verifier separation;
3. agent role definitions;
4. capability boundaries;
5. model routing;
6. tool routing;
7. disagreement resolution;
8. verification-before-completion;
9. background workers;
10. wisdom accumulation.

Foundry home:

```text
Foundry Agent Runtime
AI SDLC Framework
Charon memory candidate pipeline
```

### 6.4 Repository-Backed Memory Patterns

The Foundry may study repo-backed memory and context continuity patterns.

Useful pattern concepts include:

1. human-readable memory files;
2. project instruction files;
3. memory indexes;
4. topic-specific memory;
5. context loading at session start;
6. lazy retrieval;
7. handoff files;
8. summaries;
9. editable project memory;
10. repo as durable truth substrate.

Foundry home:

```text
Charon
Mnemosyne
Argos
Anamnesis
Daedalus
```

### 6.5 Monorepo Generation Patterns

The Foundry may study project scaffolding and template generation systems.

Useful pattern concepts include:

1. project profiles;
2. feature flags;
3. template registries;
4. scaffold manifests;
5. generated docs;
6. generated CI;
7. generated tests;
8. repo contract validation;
9. package/workspace conventions;
10. template provenance.

Foundry home:

```text
Monorepo Factory
Repo Contract Tests
Foundry Project Manifest
```

### 6.6 Verification and Evaluation Patterns

The Foundry may study verification systems, evaluation harnesses, CI pipelines, and repo contract checks.

Useful pattern concepts include:

1. static repo checks;
2. generated scaffold validation;
3. context continuity evaluation;
4. work-packet resumption tests;
5. event routing tests;
6. policy compliance tests;
7. agent coordination tests;
8. deterministic local verification;
9. recorded pass/fail results;
10. regression cases.

Foundry home:

```text
Evaluation Harness
Repo Contract Tests
AI SDLC Verification Layer
Foundry Run Ledger
```

## 7. Specific Pattern Source Positioning

This ADR accepts the following source positioning.

### 7.1 OmX / oh-my-codex

OmX-like ideas are useful as workflow and directive patterns.

The Foundry may absorb:

1. short directive to structured workflow;
2. planning keywords;
3. execution modes;
4. persistent verification loops;
5. team execution concepts;
6. project-local state;
7. reusable workflow conventions.

These patterns belong in:

```text
.sdlc/directives/
.sdlc/protocols/
.sdlc/work-packets/
.foundry/runs/
.foundry/state/
```

The Foundry will not become an OmX clone.

### 7.2 clawhip

clawhip-like ideas are useful as event routing and operator notification patterns.

The Foundry may absorb:

1. daemon-first event routing;
2. typed event models;
3. source, dispatcher, router, renderer, and sink separation;
4. git event monitoring;
5. GitHub event monitoring;
6. tmux or process event monitoring;
7. agent lifecycle monitoring;
8. operator notification outside the coding agent context window.

These patterns belong in:

```text
.foundry/events/
.foundry/router/
.foundry/sources/
.foundry/renderers/
.foundry/sinks/
```

The Foundry will not become a clawhip clone.

### 7.3 OmO / oh-my-openagent

OmO-like ideas are useful as multi-agent runtime and coordination patterns.

The Foundry may absorb:

1. intent gates;
2. planner/executor/reviewer/verifier separation;
3. model-agnostic orchestration;
4. multi-agent role definitions;
5. disagreement resolution;
6. category-based routing;
7. wisdom accumulation;
8. verification-before-completion loops.

These patterns belong in:

```text
.foundry/agents/
.foundry/agents/roles/
.foundry/agents/capabilities/
.foundry/agents/routing/
.foundry/agents/disagreement/
.sdlc/protocols/
.charon/mnemosyne/candidates/
```

The Foundry will not become an OmO clone.

### 7.4 Astra-Code

Astra-Code is the project owner’s prior work and may be studied more directly than unrelated external projects.

Astra-Code-like ideas are useful for:

1. human direction as controlling input;
2. repository as the artifact;
3. runtime/operator discipline;
4. orchestration and execution separation;
5. agent-based design;
6. clean-room educational posture;
7. defensive implementation philosophy;
8. Rust/Python runtime research.

These patterns belong in:

```text
Foundry Control Plane
Runtime and Operator Layer
AI SDLC Framework
Agent Runtime
Future Execution Engine
```

The Foundry may reuse owner-authored concepts where appropriate, but the Foundry remains its own system.

### 7.5 Claude Code Public Documentation and Reporting

Publicly documented Claude Code-style ideas are useful for understanding repo-backed project memory, project instruction files, and context continuity.

The Foundry may absorb:

1. project memory files;
2. memory indexes;
3. topic-specific memory;
4. context loading at session start;
5. human-editable memory;
6. on-demand retrieval;
7. context continuity across fresh sessions.

These patterns belong in:

```text
Charon
Mnemosyne
Argos
Anamnesis
Daedalus
```

The Foundry must not use leaked Claude Code source, leaked source maps, private prompts, private tests, or private implementation details.

## 8. Responsibility Boundary Rules

External patterns must be mapped into the correct Foundry layer.

### 8.1 Charon Owns Memory

Charon owns:

1. canonical memory;
2. memory candidates;
3. context packs;
4. handoff packets;
5. rehydration;
6. retrieval contracts;
7. memory provenance;
8. conflict and drift analysis.

Runtime tools may produce memory candidates, but they must not directly mutate canonical memory without policy admission.

### 8.2 AI SDLC Owns Work Protocol

The AI SDLC framework owns:

1. directives;
2. work packets;
3. implementation protocols;
4. verification steps;
5. commit recommendations;
6. review checklists;
7. task lifecycle states.

Runtime tools may execute work packets, but they must not redefine the SDLC protocol silently.

### 8.3 Monorepo Factory Owns Generation

The Monorepo Factory owns:

1. templates;
2. profiles;
3. scaffold manifests;
4. generated structures;
5. repo contracts;
6. template provenance.

Runtime tools may call the factory, but they must not become the factory.

### 8.4 Foundry Control Plane Owns Orchestration

The Foundry Control Plane owns:

1. manifests;
2. events;
3. routing;
4. runs;
5. agent runtime coordination;
6. adapters;
7. policy gates;
8. operator-facing status.

The control plane coordinates systems. It does not swallow their responsibilities.

### 8.5 Evaluation Harness Owns Proof

The Evaluation Harness owns:

1. context continuity tests;
2. scaffold correctness checks;
3. policy compliance tests;
4. event routing tests;
5. directive compilation tests;
6. work-packet resumption tests;
7. agent coordination tests.

No subsystem can declare itself complete without appropriate verification.

## 9. Clean-Room Implementation Workflow

When adopting a pattern, the Foundry will follow this workflow.

### 9.1 Identify the Foundry Problem

Example:

```text
The coding agent should not waste context on notification formatting.
```

### 9.2 Describe the General Pattern

Example:

```text
Use event sources, typed events, a router, renderers, and sinks.
```

### 9.3 Define the Foundry-Native Version

Example:

```text
The Foundry Event Bus records JSONL events in .foundry/events/events.jsonl.
The Notification Router renders selected events to console and filesystem sinks in v1.0.
```

### 9.4 Implement Independently

Implementation must be written from scratch according to Foundry requirements.

### 9.5 Add Tests or Contract Checks

The pattern must be verifiable.

### 9.6 Document Provenance

The relevant ADR or architecture document should note that the design is informed by public patterns.

### 9.7 Commit Atomically

The change should be committed as a focused Conventional Commit.

## 10. Pattern Adoption Record

Each major pattern adoption should eventually be recorded.

A future pattern adoption record may include:

```yaml
id: pattern_0001
name: typed-event-router
sourceCategory:
  - public architecture pattern
  - open-source inspiration
informedBy:
  - clawhip-style event routing
foundryLayer: Foundry Control Plane
implementationStatus: planned
directCodeReuse: false
licenseImpact: none
notes: >
  Implemented as a Foundry-native event bus using JSONL events,
  independent schemas, and console/filesystem sinks for v1.0.
```

This record is not required for every small idea, but it is useful for major architectural imports.

## 11. Safety Rules

The following safety rules apply.

### 11.1 No Leaked Proprietary Code

Leaked proprietary source code must not be downloaded, studied, copied, translated, ported, rewritten, or incorporated.

### 11.2 No Suspicious Leak Repositories

Repositories claiming to contain leaked proprietary systems must not be used.

### 11.3 No Unreviewed External Code Reuse

Direct reuse of open-source code requires license review and explicit documentation.

For v1.0, independent implementation is preferred.

### 11.4 No Silent Behavior Import

The Foundry must not import aggressive autonomous behavior merely because another system does it.

Examples requiring policy gates include:

1. automatic remote push;
2. destructive file changes;
3. secret access;
4. credential handling;
5. release publication;
6. canonical memory mutation;
7. architecture modification;
8. dependency installation;
9. external notification delivery;
10. issue or PR mutation.

### 11.5 No Provider Lock-In

A pattern from a provider-specific tool must be adapted into model-agnostic Foundry terms.

Provider-specific support belongs in adapters.

## 12. Default Autonomy Position

The Foundry v1.0 default is **safe-by-default**.

The system may support increasingly autonomous modes later, but the initial default must be:

```text
ask before destructive changes
policy-gated for canonical changes
local-first
audited
reviewable
model-agnostic
human-directed
verification-first
```

The Foundry must not default to unbounded “do not ask” execution.

Autonomous modes may exist later as explicit project profiles or runtime modes, but they must be visible, documented, and policy-governed.

## 13. Implications for v1.0 MVP

This decision implies that v1.0 should implement pattern-inspired capabilities in a modest, safe form.

### 13.1 Directive Compiler v0

A short directive should be convertible into a structured work packet.

The v1.0 version may be simple and deterministic.

### 13.2 Event Bus v0

The Foundry should record events in an append-only local JSONL event log.

### 13.3 Notification Router v0

The Foundry should support local console and filesystem notification sinks.

External sinks such as Discord, Slack, email, and GitHub comments are deferred.

### 13.4 Agent Runtime v0

The Foundry should define agent roles and capabilities, but full autonomous multi-agent execution is deferred.

### 13.5 Wisdom Accumulation v0

Execution lessons may become Charon memory candidates.

They must not become canonical automatically.

### 13.6 Worktree Execution v0

The architecture should support worktree-based isolation.

Full parallel worktree orchestration may be deferred until after the first local Foundry loop is proven.

## 14. Consequences

### 14.1 Positive Consequences

This decision allows the Foundry to:

1. learn from strong public systems;
2. avoid reinventing every concept blindly;
3. preserve clean-room independence;
4. keep a clear product identity;
5. integrate runtime/operator patterns safely;
6. protect against legal and provenance risks;
7. remain model-agnostic;
8. maintain governance-grade discipline;
9. document external influence honestly;
10. support future commercialization or public release.

### 14.2 Negative Consequences

This decision adds:

1. documentation overhead;
2. provenance discipline;
3. review burden;
4. slower pattern adoption;
5. reduced ability to copy convenient implementations;
6. more design work before coding;
7. need for clean-room review habits.

These costs are accepted because the Foundry is intended to be serious, defensible, and trustworthy.

## 15. Risks

The main risks are:

1. overcomplicating the architecture with too many borrowed ideas;
2. accidentally importing another project’s assumptions;
3. confusing inspiration with dependency;
4. allowing external tool shape to distort Foundry boundaries;
5. delaying implementation due to excessive research;
6. creating a system that is too abstract for v1.0.

Mitigation:

1. implement only the minimum Foundry loop for v1.0;
2. keep external patterns subordinate to Foundry architecture;
3. document responsibility boundaries;
4. prefer simple local implementations first;
5. defer full autonomous runtime behavior;
6. prove the system through end-to-end workflow before expanding.

## 16. Alternatives Considered

### 16.1 Ignore External Systems Entirely

The Foundry could ignore all external tools and design everything in isolation.

This was rejected because public systems provide useful lessons about real agent runtime problems, event routing, workflows, and multi-agent coordination.

### 16.2 Directly Clone an Existing System

The Foundry could choose one system and imitate it closely.

This was rejected because the Foundry has a broader mission and stronger governance requirements than a single workflow tool or agent harness.

### 16.3 Use External Projects as Dependencies Immediately

The Foundry could directly depend on existing tools for workflow, routing, or orchestration.

This is deferred because v1.0 should establish Foundry-native boundaries first.

External dependencies may be added later when they are clearly beneficial, licensed, and compatible.

### 16.4 Treat Public Pattern Adoption as Informal

The Foundry could adopt ideas casually without policy or documentation.

This was rejected because the project needs a clean, defensible, auditable architecture from the beginning.

## 17. Acceptance Criteria

This ADR is satisfied when:

1. the repository contains a clean-room policy;
2. the repository contains this ADR;
3. external patterns are mapped to Foundry layers;
4. v1.0 avoids direct external code reuse by default;
5. the initial scaffold includes places for pattern-inspired systems;
6. future ADRs preserve Foundry-native responsibility boundaries.

## 18. Future Work

This ADR creates the need for later work on:

1. Foundry Control Plane;
2. Event Bus and Notification Router;
3. Directive Compiler and Work Protocols;
4. Multi-Agent Runtime and Role Separation;
5. Worktree-Based Parallel Execution;
6. Pattern Adoption Records;
7. policy checks for forbidden material;
8. license review process;
9. external dependency policy;
10. adapter architecture.

## 19. Decision

Accepted.

The Agentic Software Foundry will study public architecture patterns and independently implement Foundry-native versions where useful.

External systems may inspire the Foundry.

They do not define it.

The Foundry may learn from public ideas, but it must not copy protected implementation.

The Foundry remains a governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic software engineering platform.
