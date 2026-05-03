---
title: "ADR-0008: Foundry Control Plane"
description: "Accepts the Foundry Control Plane as the coordination layer for manifests, runs, events, adapters, policies, and runtime state."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0008"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - foundry-control-plane
---

# ADR-0008: Foundry Control Plane

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

## 1. Context

The Agentic Software Foundry is composed of multiple cooperating systems:

1. Charon for context continuity;
2. the AI SDLC Framework for structured work execution;
3. the Monorepo Factory for repeatable project scaffolding;
4. the vector retrieval layer for semantic recall;
5. the event bus and notification router for operator feedback;
6. the agent runtime for role-based execution;
7. the evaluation harness for proof and regression testing.

Each subsystem has a clear responsibility. However, the overall Foundry needs a coordination layer that can connect these systems without collapsing their responsibilities.

Without a coordination layer, the project risks becoming a pile of powerful but disconnected tools.

The Foundry needs a control plane.

## 2. Problem

The Foundry must coordinate many project-level concerns:

1. project manifests;
2. active profile;
3. runtime state;
4. run records;
5. event logs;
6. policy gates;
7. directive compilation;
8. agent roles;
9. model/tool adapters;
10. notification routes;
11. worktree state;
12. scaffold metadata;
13. handoff state;
14. context-pack references;
15. verification results.

None of the existing core systems should own all of this.

Charon should not become the orchestrator.

The AI SDLC Framework should not become the runtime control plane.

The Monorepo Factory should not become the memory system.

The event router should not become the project authority.

The agent runtime should not become the architecture owner.

The Foundry therefore needs a distinct control-plane layer whose job is coordination, not ownership of every domain.

## 3. Decision

The Agentic Software Foundry will include a **Foundry Control Plane**.

The Foundry Control Plane is the orchestration and coordination layer for the ecosystem.

It owns manifests, run state, event coordination, routing configuration, adapter registration, agent runtime coordination, policy-gate invocation, and operator-facing status.

It does not own canonical memory, work-packet semantics, template internals, generated application code, or project domain logic.

The Foundry Control Plane will be represented in the repository under:

```text
.foundry/
````

The initial v1.0 implementation will be local-first, file-backed, inspectable, and simple.

## 4. Decision Summary

The Foundry Control Plane will coordinate the system through:

```text
.foundry/
├── manifests/
├── events/
├── router/
├── runs/
├── agents/
├── worktrees/
├── adapters/
├── policies/
├── state/
└── README.md
```

The Control Plane answers questions such as:

1. What project is this?
2. What Foundry profile is active?
3. What run is currently active?
4. What directive is being processed?
5. What work packet is being executed?
6. What context pack is attached?
7. What agent roles are available?
8. What adapters are configured?
9. What events have occurred?
10. What policy gates apply?
11. What notifications should be emitted?
12. What verification status is known?
13. What handoff was generated?
14. What next action is recommended?

The Control Plane coordinates.

It does not replace the subsystems it coordinates.

## 5. Architectural Role

The Foundry Control Plane is the system-of-systems layer.

Its responsibilities are:

1. coordination;
2. lifecycle tracking;
3. event recording;
4. adapter registry;
5. policy gate routing;
6. runtime state;
7. run ledger;
8. operator status;
9. agent role coordination;
10. integration contracts.

Its non-responsibilities are:

1. canonical memory authorship;
2. direct memory admission;
3. work-packet domain semantics;
4. template rendering internals;
5. generated application architecture;
6. vector embedding generation internals;
7. model-provider ownership;
8. replacing Git;
9. replacing CI;
10. replacing human review.

## 6. Foundry Control Plane Principles

### 6.1 Coordination Over Ownership

The Control Plane coordinates subsystems but does not absorb them.

It may call Charon to assemble context, but Charon owns context continuity.

It may call the AI SDLC Framework to create work packets, but the AI SDLC Framework owns work protocol.

It may call the Monorepo Factory to generate scaffolds, but the Monorepo Factory owns templates and profiles.

It may call the Event Router to deliver status, but the Event Router owns routing mechanics.

### 6.2 Explicit State

Important runtime and project state must be explicit.

The system should avoid invisible state where possible.

For v1.0, state should be represented in files under `.foundry/`.

### 6.3 Local-First Operation

The v1.0 Control Plane should run locally.

Remote services, SaaS control planes, multi-user backends, and distributed execution are deferred.

### 6.4 Human-Inspectable Artifacts

Control-plane artifacts should be readable, reviewable, and diffable.

JSON, JSONL, YAML, Markdown, and other text formats are preferred.

### 6.5 Policy-Gated Transitions

The Control Plane must route sensitive transitions through policy gates.

Examples include:

1. canonical memory promotion;
2. destructive file operations;
3. external publication;
4. remote push;
5. release creation;
6. architecture changes;
7. scaffold overwrite;
8. security policy changes.

### 6.6 Event-First Auditability

Important control-plane activity should emit events.

Events make the system inspectable and later support replay, debugging, notifications, metrics, and evaluation.

### 6.7 Model Agnosticism

The Control Plane must not assume one model provider.

Provider-specific tools belong behind adapters.

### 6.8 Incremental Autonomy

The Foundry may grow toward more autonomous workflows, but v1.0 defaults to local, explicit, reviewable, safe-by-default behavior.

## 7. Control Plane Responsibilities

### 7.1 Project Manifest Coordination

The Control Plane owns the project-level Foundry manifest.

Expected file:

```text
.foundry/manifests/foundry.project.json
```

The project manifest should eventually describe:

1. project ID;
2. project name;
3. project type;
4. Foundry profile;
5. active subsystems;
6. package manager;
7. preferred build system;
8. documentation mode;
9. memory mode;
10. retrieval mode;
11. autonomy mode;
12. verification requirements;
13. forbidden tools;
14. adapter configuration references;
15. policy references.

### 7.2 Run Ledger

The Control Plane owns the run ledger.

A run is a bounded unit of Foundry activity.

A run may correspond to:

1. directive compilation;
2. work-packet execution;
3. context-pack generation;
4. scaffold generation;
5. verification;
6. handoff generation;
7. memory review;
8. evaluation.

Expected location:

```text
.foundry/runs/
```

Each run should eventually have:

1. run ID;
2. start time;
3. end time;
4. directive;
5. work packet;
6. context pack;
7. actor;
8. agent role;
9. status;
10. events;
11. verification result;
12. outputs;
13. handoff reference.

### 7.3 Event Coordination

The Control Plane owns the event log location and event schema registration.

Expected location:

```text
.foundry/events/
```

The initial event log should be append-only JSONL:

```text
.foundry/events/events.jsonl
```

Events may include:

1. `foundry.project.initialized`;
2. `directive.received`;
3. `work_packet.created`;
4. `context_pack.generated`;
5. `run.started`;
6. `run.completed`;
7. `verification.started`;
8. `verification.passed`;
9. `verification.failed`;
10. `handoff.generated`;
11. `memory_candidate.created`;
12. `policy_gate.required`;
13. `policy_gate.approved`;
14. `policy_gate.rejected`;
15. `notification.emitted`.

### 7.4 Notification Routing

The Control Plane owns routing configuration and coordinates notification delivery.

The router itself belongs under the Foundry event and notification subsystem.

Expected locations:

```text
.foundry/router/
.foundry/sources/
.foundry/renderers/
.foundry/sinks/
```

For v1.0, the only required sinks are:

1. console;
2. filesystem.

External notification sinks are deferred.

Deferred sinks may include:

1. Discord;
2. Slack;
3. email;
4. GitHub comments;
5. webhooks;
6. desktop notifications.

### 7.5 Agent Runtime Coordination

The Control Plane owns the registration and coordination of agent roles.

Expected location:

```text
.foundry/agents/
```

Initial role definitions may include:

1. Architect;
2. Executor;
3. Reviewer;
4. Verifier;
5. Librarian;
6. Operator.

For v1.0, these are definitions and protocols, not fully autonomous agents.

### 7.6 Adapter Registry

The Control Plane owns adapter registration.

Adapters allow the Foundry to communicate with different tools without becoming dependent on them.

Expected location:

```text
.foundry/adapters/
```

Future adapters may include:

1. ChatGPT;
2. Claude;
3. Codex-like CLI tools;
4. local LLMs;
5. Cursor;
6. Aider;
7. Continue;
8. GitHub;
9. vector databases;
10. notification services;
11. shell execution;
12. tmux;
13. Docker.

### 7.7 Policy Gate Coordination

The Control Plane coordinates policy checks.

Policy definitions may live in:

```text
.foundry/policies/
.charon/themis/
governance/
```

Policy gates may apply to:

1. memory admission;
2. destructive changes;
3. generated scaffold overwrite;
4. dependency installation;
5. external network access;
6. secret handling;
7. release publication;
8. remote push;
9. architecture amendment;
10. clean-room compliance.

### 7.8 Worktree Coordination

The Control Plane owns the future coordination of isolated execution worktrees.

Expected location:

```text
.foundry/worktrees/
```

The v1.0 architecture should reserve space for worktree-based execution, but full parallel orchestration is deferred.

Future worktree support may include:

1. one branch per work packet;
2. one worktree per agent run;
3. isolated verification;
4. merge review;
5. conflict handling;
6. cleanup policy.

### 7.9 Runtime State

The Control Plane owns non-canonical runtime state.

Expected location:

```text
.foundry/state/
```

Runtime state may include:

1. active run pointer;
2. active work packet pointer;
3. active context pack pointer;
4. active profile;
5. last verification result;
6. last handoff pointer;
7. router state;
8. adapter availability.

Runtime state is not canonical memory.

It is operational state.

## 8. Relationship to Charon

The Control Plane coordinates with Charon but does not replace Charon.

Charon owns:

1. canonical memory;
2. memory candidates;
3. session chronicles;
4. context packs;
5. handoff packets;
6. rehydration;
7. retrieval contracts;
8. conflict and drift checks;
9. memory admission policies.

The Control Plane may request:

1. context-pack generation;
2. handoff generation;
3. memory candidate creation;
4. session chronicle creation;
5. retrieval operations;
6. conflict checks;
7. policy checks.

The Control Plane must not silently promote memory into canonical state.

That remains governed by Charon and Themis.

## 9. Relationship to the AI SDLC Framework

The Control Plane coordinates with the AI SDLC Framework but does not replace it.

The AI SDLC Framework owns:

1. directives;
2. work packets;
3. protocols;
4. verification requirements;
5. implementation order;
6. review checklists;
7. commit recommendations;
8. retrospectives.

The Control Plane may request:

1. directive compilation;
2. work-packet creation;
3. work-packet state transitions;
4. verification execution;
5. status events;
6. commit recommendation retrieval.

The Control Plane must not redefine work semantics silently.

## 10. Relationship to the Monorepo Factory

The Control Plane coordinates with the Monorepo Factory but does not replace it.

The Monorepo Factory owns:

1. templates;
2. profiles;
3. scaffold generation;
4. feature flags;
5. scaffold manifests;
6. repo contracts;
7. template provenance.

The Control Plane may request:

1. scaffold generation;
2. profile selection;
3. repo contract verification;
4. template metadata;
5. scaffold status events.

The Control Plane must not become the template engine.

## 11. Relationship to the Event Router

The Control Plane owns the overall event domain and routing configuration.

The event router owns the mechanics of routing.

The router should eventually support:

1. event filtering;
2. event rendering;
3. delivery sinks;
4. delivery status;
5. retry policy;
6. sink-specific formatting.

For v1.0, the event router can be simple.

It may write human-readable status messages to local files and print to console.

## 12. Relationship to the Agent Runtime

The Control Plane coordinates the Agent Runtime.

The Agent Runtime owns:

1. role definitions;
2. capability boundaries;
3. agent handoff protocols;
4. disagreement protocols;
5. model/tool routing;
6. execution mode definitions.

For v1.0, the Foundry will define agent roles but will not implement full autonomous multi-agent execution.

The initial goal is to make the protocol explicit before automation becomes powerful.

## 13. Relationship to Vector Retrieval

The Control Plane may coordinate vector retrieval operations, but it does not own canonical memory or embeddings.

Vector retrieval responsibilities are split:

```text
Mnemosyne
= canonical memory source

Hephaestus
= indexing and embedding pipeline

Argos
= semantic retrieval and index contracts

Control Plane
= coordinates when retrieval/indexing is needed
```

The vector database remains a derived index.

The repository remains authoritative.

## 14. Initial Directory Implication

This ADR implies the future creation of:

```text
.foundry/
├── README.md
├── manifests/
│   └── foundry.project.json
├── events/
│   ├── events.jsonl
│   └── schemas/
├── router/
│   ├── routes.json
│   └── README.md
├── runs/
│   └── README.md
├── agents/
│   ├── roles/
│   ├── capabilities/
│   ├── routing/
│   ├── disagreement/
│   └── README.md
├── worktrees/
│   └── README.md
├── adapters/
│   └── README.md
├── policies/
│   └── README.md
└── state/
    └── README.md
```

The exact structure may evolve, but the control-plane boundary is accepted by this ADR.

## 15. Control Plane Lifecycle Concepts

The Control Plane should eventually recognize lifecycle states for its major objects.

### 15.1 Run Lifecycle

```text
created
→ initialized
→ running
→ waiting_for_policy
→ verifying
→ completed
→ failed
→ cancelled
→ archived
```

### 15.2 Directive Lifecycle

```text
received
→ parsed
→ compiled
→ accepted
→ converted_to_work_packet
→ superseded
→ rejected
```

### 15.3 Notification Lifecycle

```text
created
→ routed
→ rendered
→ delivered
→ failed
→ archived
```

### 15.4 Policy Gate Lifecycle

```text
required
→ pending
→ approved
→ rejected
→ waived
→ expired
```

### 15.5 Adapter Lifecycle

```text
registered
→ available
→ unavailable
→ degraded
→ disabled
```

These lifecycles are not all required in v1.0 code, but they should shape future schemas.

## 16. v1.0 Control Plane Scope

The v1.0 Control Plane must support the minimum complete Foundry loop.

Required v1.0 capabilities:

1. project manifest exists;
2. event log exists;
3. run record can be created;
4. directive can be associated with a run;
5. work packet can be associated with a run;
6. context pack can be associated with a run;
7. verification status can be recorded;
8. event messages can be written to JSONL;
9. notification-renderable status can be written to a local file;
10. handoff packet can be referenced;
11. repo contract tests can verify required paths.

Not required for v1.0:

1. full daemon process;
2. full tmux integration;
3. Discord delivery;
4. GitHub issue/PR mutation;
5. autonomous multi-agent execution;
6. remote control plane;
7. distributed state;
8. production vector database;
9. web dashboard;
10. multi-user authentication.

## 17. Manifest-Driven Operation

The Control Plane should be manifest-driven.

The initial project manifest should eventually contain fields such as:

```json
{
  "schemaVersion": "0.1.0",
  "projectId": "agentic-software-foundry",
  "projectName": "Agentic Software Foundry",
  "profile": "governance-grade",
  "status": "pre-mvp",
  "subsystems": {
    "charon": true,
    "sdlc": true,
    "monorepoFactory": true,
    "eventRouter": true,
    "agentRuntime": true,
    "vectorRetrieval": true
  },
  "defaults": {
    "autonomyMode": "safe-by-default",
    "verificationRequired": true,
    "canonicalMemoryRequiresAdmission": true
  },
  "forbidden": {
    "tools": ["bazel"],
    "behaviors": [
      "silent-canonical-memory-promotion",
      "unreviewed-destructive-file-change",
      "automatic-remote-push"
    ]
  }
}
```

The exact schema will be defined later.

## 18. Events as Control Plane Backbone

The Control Plane should treat events as its primary audit backbone.

An event should eventually include:

1. event ID;
2. event type;
3. timestamp;
4. actor;
5. run ID;
6. subject;
7. status;
8. payload;
9. related artifacts;
10. trust level;
11. policy references.

Example event:

```json
{
  "id": "evt_20260428_000001",
  "type": "run.started",
  "timestamp": "2026-04-28T00:00:00Z",
  "actor": "human",
  "runId": "run_20260428_000001",
  "subject": "initial-foundry-loop",
  "status": "started",
  "relatedArtifacts": [
    ".sdlc/work-packets/0001-initial-foundry-loop.md"
  ]
}
```

For v1.0, this can remain simple JSONL.

## 19. Policy Position

The Control Plane must respect policy gates.

It must not silently perform or authorize sensitive actions.

Initial sensitive action categories:

1. canonical memory mutation;
2. architecture amendment;
3. scaffold overwrite;
4. deletion of files;
5. dependency addition;
6. networked notification delivery;
7. remote push;
8. release publication;
9. secret handling;
10. external code adoption.

The Control Plane should record when a policy gate is required, approved, rejected, or deferred.

## 20. Safety Position

The Control Plane default is safe-by-default.

Default v1.0 behavior:

1. local-first;
2. no automatic remote push;
3. no automatic release;
4. no destructive action without explicit instruction;
5. no canonical memory promotion without admission;
6. no external notification sink by default;
7. no provider lock-in;
8. no unbounded autonomous loops;
9. no hidden background daemon required for MVP;
10. no use of leaked or unauthorized material.

Aggressive autonomy may be added later only through explicit profiles and policy gates.

## 21. Alternatives Considered

### 21.1 No Control Plane

The Foundry could allow each subsystem to coordinate itself.

This was rejected because the integration would become inconsistent, hard to audit, and difficult to extend.

### 21.2 Charon as the Control Plane

Charon could coordinate everything.

This was rejected because Charon should remain focused on context continuity, memory, retrieval, handoff, and rehydration.

Making Charon the orchestrator would blur its responsibility.

### 21.3 AI SDLC Framework as the Control Plane

The AI SDLC Framework could coordinate everything.

This was rejected because the SDLC layer should own work protocol, not all runtime state, adapters, events, notifications, and project manifests.

### 21.4 Monorepo Factory as the Control Plane

The Monorepo Factory could become the central system.

This was rejected because generation is only one part of the Foundry lifecycle.

The factory should generate projects, not coordinate all runtime behavior.

### 21.5 External Orchestrator First

The Foundry could adopt an existing orchestration tool immediately.

This was rejected for v1.0 because the Foundry needs to establish its own responsibility boundaries and local-first model before adopting external orchestration dependencies.

## 22. Consequences

### 22.1 Positive Consequences

This decision provides:

1. clear system coordination;
2. better subsystem boundaries;
3. explicit runtime state;
4. event-driven auditability;
5. adapter-friendly architecture;
6. safer autonomy;
7. better operator visibility;
8. clearer v1.0 implementation path;
9. easier future daemonization;
10. stronger project identity.

### 22.2 Negative Consequences

This decision adds:

1. another top-level subsystem;
2. more files;
3. more manifests;
4. more lifecycle concepts;
5. coordination overhead;
6. risk of overengineering.

These costs are accepted because the Foundry is intentionally a serious, long-running system.

### 22.3 Mitigations

To prevent overengineering:

1. v1.0 remains local-first;
2. no daemon is required at first;
3. events use JSONL;
4. state uses files;
5. external integrations are deferred;
6. agent runtime begins as role definitions;
7. vector retrieval begins with an interface/stub;
8. only the minimum Foundry loop is implemented.

## 23. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.foundry/README.md`;
2. `.foundry/manifests/foundry.project.json`;
3. `.foundry/events/events.jsonl`;
4. `.foundry/runs/`;
5. `.foundry/router/`;
6. `.foundry/agents/`;
7. `.foundry/adapters/`;
8. `.foundry/policies/`;
9. `.foundry/state/`;
10. repo contract tests validating required Control Plane paths.

Full runtime implementation is not required for this ADR to be accepted.

This ADR establishes the architectural decision.

## 24. Future Work

This decision creates the need for later work on:

1. Foundry project manifest schema;
2. event schema;
3. run schema;
4. route schema;
5. adapter schema;
6. policy gate schema;
7. agent role schema;
8. state file schema;
9. event router implementation;
10. directive compiler integration;
11. handoff generator integration;
12. repo contract tests.

## 25. Decision

Accepted.

The Agentic Software Foundry will include a distinct Foundry Control Plane.

The Control Plane coordinates the ecosystem through manifests, events, run state, routing, adapters, agent runtime coordination, policy gates, and operator-visible status.

It coordinates Charon, the AI SDLC Framework, the Monorepo Factory, vector retrieval, event routing, and agent runtime patterns without replacing their responsibilities.

The Foundry Control Plane is the orchestration layer.

It is not the memory system.

It is not the work protocol.

It is not the template engine.

It is not the model provider.

It is the coordination boundary that makes the Foundry a coherent system.
