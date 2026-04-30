---
title: "System Boundaries"
description: "Defines subsystem ownership boundaries for the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - boundaries
  - architecture
---

# System Boundaries

## 1. Purpose

This document defines the major system boundaries of the Agentic Software Foundry.

The Foundry is intentionally composed of multiple cooperating systems. It must not become a vague collection of agent prompts, scripts, templates, memory files, and runtime experiments.

Each subsystem must have a clear responsibility.

Each subsystem must know what it owns.

Each subsystem must know what it does not own.

The purpose of this document is to prevent architectural drift before implementation begins.

## 2. Boundary Principle

The controlling principle is:

> The Foundry is a system of cooperating subsystems, not a single god object.

No subsystem should silently absorb the responsibilities of another subsystem.

The Foundry Control Plane coordinates.

Charon remembers.

The AI SDLC Framework structures the work.

The Monorepo Factory generates repeatable project artifacts.

The Event Bus records and routes activity.

The Agent Runtime separates responsibility.

The Vector Retrieval Layer accelerates recall.

The Evaluation Harness proves behavior.

The repository remains the durable artifact.

## 3. Top-Level System Map

The Agentic Software Foundry is composed of the following primary systems:

```text
Agentic Software Foundry
├── Foundry Control Plane
├── Charon / Context Bridge
├── AI SDLC Framework
├── Monorepo Factory
├── Event Bus and Notification Router
├── Multi-Agent Runtime
├── Vector Retrieval Layer
├── Worktree Execution Model
├── Evaluation Harness
├── Governance and Policy Layer
├── Adapter Layer
└── Tutorial Documentation System
````

These systems cooperate through explicit artifacts:

```text
manifests
directives
work packets
context packs
run records
events
verification records
session chronicles
memory candidates
handoff packets
scaffold manifests
repo contract results
commit recommendations
```

## 4. Foundry Control Plane Boundary

### 4.1 Owns

The Foundry Control Plane owns coordination.

It owns:

1. project manifests;
2. enabled subsystem declarations;
3. local run records;
4. runtime state pointers;
5. event log location;
6. routing configuration;
7. adapter registry;
8. agent role coordination;
9. policy gate coordination;
10. latest status artifact;
11. worktree coordination metadata;
12. integration-level state.

Expected location:

```text
.foundry/
```

### 4.2 Does Not Own

The Foundry Control Plane does not own:

1. canonical memory;
2. memory admission decisions;
3. work-packet semantics;
4. template rendering internals;
5. generated application code;
6. vector embedding internals;
7. project domain logic;
8. final human approval;
9. provider-specific model behavior;
10. CI/CD platform behavior.

### 4.3 Boundary Rule

The Control Plane coordinates subsystems through explicit contracts.

It must not become the memory system, workflow engine, template engine, or model runtime.

## 5. Charon Boundary

### 5.1 Owns

Charon owns context continuity.

It owns:

1. canonical memory;
2. memory candidates;
3. superseded memory;
4. session chronicles;
5. context packs;
6. handoff packets;
7. rehydration rules;
8. retrieval contracts;
9. source provenance;
10. trust levels;
11. memory admission policy;
12. conflict and drift analysis.

Expected location:

```text
.charon/
```

Primary Charon components:

```text
Mnemosyne  = canonical memory repository
Clio       = session chronicles
Argos      = semantic retrieval contracts
Hephaestus = indexing and build pipeline
Anamnesis  = rehydration engine
Daedalus   = context pack and handoff compiler
Athena     = conflict and drift analyzer
Themis     = policy and governance layer
```

### 5.2 Does Not Own

Charon does not own:

1. monorepo template generation;
2. general runtime orchestration;
3. all project events;
4. implementation work protocol;
5. source code execution;
6. remote pushes;
7. CI/CD;
8. external notification delivery;
9. final human approval;
10. generated application architecture.

### 5.3 Boundary Rule

Charon is the Context Bridge.

It preserves, retrieves, prepares, and hands off context.

It does not become the entire Foundry.

## 6. AI SDLC Framework Boundary

### 6.1 Owns

The AI SDLC Framework owns disciplined work execution.

It owns:

1. directives;
2. directive records;
3. work packets;
4. work packet lifecycle;
5. work protocols;
6. verification expectations;
7. implementation order;
8. review checklists;
9. documentation obligations;
10. commit recommendations;
11. retrospectives;
12. repair packet recommendations.

Expected location:

```text
.sdlc/
```

### 6.2 Does Not Own

The AI SDLC Framework does not own:

1. canonical memory;
2. memory promotion;
3. event delivery mechanics;
4. template rendering internals;
5. generated application source of truth;
6. vector database indexing;
7. external notifications;
8. project manifests;
9. agent runtime implementation;
10. final human approval.

### 6.3 Boundary Rule

The AI SDLC Framework turns intent into disciplined work.

It must not bypass Charon, the Control Plane, policy gates, or verification.

## 7. Monorepo Factory Boundary

### 7.1 Owns

The Monorepo Factory owns repeatable project generation.

It owns:

1. templates;
2. project profiles;
3. scaffold manifests;
4. feature flags;
5. generated directory structures;
6. generated policy files;
7. generated docs;
8. generated CI baselines;
9. generated repo contract definitions;
10. template provenance;
11. scaffold validation expectations.

Expected location:

```text
templates/
```

Later implementation may also include:

```text
packages/factory-*
apps/cli
```

### 7.2 Does Not Own

The Monorepo Factory does not own:

1. canonical memory;
2. context rehydration;
3. all runtime coordination;
4. work-packet lifecycle;
5. agent role boundaries;
6. event routing mechanics;
7. human approval;
8. project-specific domain behavior;
9. vector retrieval;
10. final architectural authority.

### 7.3 Boundary Rule

The Factory generates.

Repo contracts verify.

The SDLC Framework scopes the generation work.

The Control Plane records the run.

Charon preserves the resulting context.

## 8. Event Bus and Notification Router Boundary

### 8.1 Owns

The Event Bus and Notification Router own operational visibility.

They own:

1. typed event records;
2. append-only local event log;
3. event schemas;
4. routing configuration;
5. renderer concepts;
6. sink concepts;
7. latest status updates;
8. notification-renderable summaries;
9. local console sink;
10. local filesystem sink.

Expected locations:

```text
.foundry/events/
.foundry/router/
.foundry/sources/
.foundry/renderers/
.foundry/sinks/
.foundry/state/
```

### 8.2 Does Not Own

The Event Bus and Notification Router do not own:

1. implementation;
2. verification authority;
3. canonical memory;
4. work packet scope;
5. project decisions;
6. generated code;
7. template generation;
8. external notification approval;
9. final completion claims;
10. policy approval.

### 8.3 Boundary Rule

Events record what happened.

Routes decide what matters.

Renderers format messages.

Sinks deliver messages.

Agents should not own notification delivery.

## 9. Multi-Agent Runtime Boundary

### 9.1 Owns

The Multi-Agent Runtime owns role separation and agent coordination concepts.

It owns:

1. role definitions;
2. capability boundaries;
3. routing policy;
4. disagreement protocol;
5. agent handoff templates;
6. agent lifecycle event concepts;
7. model/tool routing concepts;
8. future multi-agent coordination policy.

Expected location:

```text
.foundry/agents/
```

Initial roles:

```text
Architect
Executor
Reviewer
Verifier
Librarian
Operator
Policy Gate
Human Project Owner
```

### 9.2 Does Not Own

The Multi-Agent Runtime does not own:

1. final human authority;
2. canonical memory admission;
3. work-packet semantics;
4. event storage;
5. template generation;
6. repository truth;
7. verification criteria definition;
8. automatic merge approval;
9. remote push approval;
10. release approval.

### 9.3 Boundary Rule

The Agent Runtime separates responsibilities.

It must not allow a single agent to plan, implement, verify, approve, canonicalize, and publish its own work without separation of responsibility.

## 10. Vector Retrieval Layer Boundary

### 10.1 Owns

The Vector Retrieval Layer owns semantic recall as a derived capability.

It owns:

1. retrieval policies;
2. chunking policies;
3. ranking policies;
4. index manifests;
5. query contracts;
6. source artifact manifests;
7. embedding policies;
8. reindexing policies;
9. source pointer requirements;
10. no-orphan-vector rules.

Expected locations:

```text
.charon/argos/
.charon/hephaestus/
```

### 10.2 Does Not Own

The Vector Retrieval Layer does not own:

1. canonical truth;
2. memory admission;
3. project decisions;
4. raw source authority;
5. final context-pack content;
6. work-packet scope;
7. event routing;
8. external model memory;
9. human approval;
10. policy exceptions.

### 10.3 Boundary Rule

The repository is authoritative.

The vector database is derived.

If the vector index and repository disagree, the repository wins.

## 11. Worktree Execution Boundary

### 11.1 Owns

The Worktree Execution Model owns future isolated execution policy.

It owns:

1. worktree policy;
2. allocation policy;
3. cleanup policy;
4. example worktree manifest;
5. branch/worktree naming conventions;
6. merge safety principles;
7. no automatic push default;
8. no automatic merge default;
9. stale worktree concepts;
10. conflict handling concepts.

Expected location:

```text
.foundry/worktrees/
```

### 11.2 Does Not Own

The Worktree Execution Model does not own:

1. Git itself;
2. all run state;
3. work-packet semantics;
4. verification criteria;
5. final merge approval;
6. remote push approval;
7. canonical memory;
8. agent role definitions;
9. generated code correctness;
10. repository policy exceptions.

### 11.3 Boundary Rule

Worktrees isolate execution.

They do not make work trusted.

Verification, review, policy, and human approval still matter.

## 12. Evaluation Harness Boundary

### 12.1 Owns

The Evaluation Harness owns proof.

It owns:

1. repo contract tests;
2. context continuity evaluations;
3. directive compilation evaluations;
4. work-packet lifecycle evaluations;
5. event routing evaluations;
6. scaffold correctness evaluations;
7. policy compliance evaluations;
8. agent coordination scenarios;
9. evaluation result formats;
10. repair recommendation concepts.

Expected location:

```text
evals/
```

### 12.2 Does Not Own

The Evaluation Harness does not own:

1. architecture decisions;
2. canonical memory;
3. work execution;
4. template generation;
5. event routing mechanics;
6. provider integrations;
7. human approval;
8. release decisions.

### 12.3 Boundary Rule

The Evaluation Harness proves behavior.

It does not define product purpose by itself.

## 13. Governance and Policy Boundary

### 13.1 Owns

The Governance and Policy Layer owns project rules.

It owns:

1. clean-room policy;
2. project constitution later;
3. security policy later;
4. dependency policy later;
5. contribution policy later;
6. release policy later;
7. external code adoption policy;
8. policy amendment process;
9. human authority statements;
10. safety rules.

Expected location:

```text
governance/
```

### 13.2 Does Not Own

Governance and policy documents do not execute the system.

They define boundaries that implementation must honor.

They do not replace:

1. tests;
2. manifests;
3. runtime checks;
4. repo contracts;
5. human judgment;
6. ADRs.

### 13.3 Boundary Rule

Policies constrain behavior.

They do not implement behavior alone.

Implementation must eventually enforce or verify them.

## 14. Adapter Layer Boundary

### 14.1 Owns

The Adapter Layer owns integration with external tools and providers.

Potential adapters include:

1. ChatGPT;
2. Claude;
3. Codex-like CLIs;
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

Expected location:

```text
.foundry/adapters/
```

Future code may live under:

```text
packages/adapters-*
```

### 14.2 Does Not Own

Adapters do not own:

1. core architecture;
2. canonical memory;
3. project truth;
4. work-packet semantics;
5. final approval;
6. provider lock-in;
7. policy exceptions.

### 14.3 Boundary Rule

Provider-specific integrations are adapters, not foundations.

The Foundry must remain model-agnostic.

## 15. Tutorial Documentation Boundary

### 15.1 Owns

The Tutorial Documentation System owns build guidance.

It owns:

1. step-by-step walkthroughs;
2. implementation order;
3. explanatory docs;
4. bootstrap prompts;
5. current state summaries;
6. handoff guidance;
7. “where this fits” explanations;
8. commit timing recommendations;
9. expected command outputs;
10. troubleshooting notes.

Expected future locations:

```text
docs/tutorial/
docs/ai/
docs/foundry/
```

### 15.2 Does Not Own

Tutorial documentation does not own:

1. canonical memory by default;
2. runtime state;
3. verification results;
4. source code behavior;
5. project policy;
6. final architecture decisions.

### 15.3 Boundary Rule

Documentation is part of the product.

But documentation must align with ADRs, manifests, policies, and tested behavior.

## 16. Repository Boundary

The repository is the durable artifact.

The repository owns:

1. source files;
2. documentation;
3. manifests;
4. policies;
5. ADRs;
6. Charon artifacts;
7. SDLC artifacts;
8. Foundry control artifacts;
9. templates;
10. evaluation assets;
11. commit history.

The repository does not own:

1. private provider-side model memory;
2. secrets;
3. local-only credentials;
4. uncommitted external runtime state;
5. production service data;
6. cloud-only logs;
7. unauthorized external material.

The repository is the truth substrate, but not everything belongs in Git.

High-volume, sensitive, or local-only runtime artifacts may later be ignored or projected elsewhere.

## 17. Human Project Owner Boundary

The human project owner owns final authority.

The human project owner decides:

1. project direction;
2. architectural commitments;
3. canonical memory admission;
4. policy changes;
5. scope changes;
6. destructive operations;
7. release decisions;
8. external publication;
9. remote push approval;
10. final acceptance.

Agents may propose.

Tools may execute.

Tests may verify.

Policies may constrain.

The human project owner remains sovereign over the project.

## 18. Integration Boundary

Subsystems integrate through explicit artifacts, not vague assumptions.

Primary integration artifacts:

```text
.foundry/manifests/foundry.project.json
.sdlc/directives/
.sdlc/work-packets/
.charon/daedalus/context-packs/
.foundry/runs/
.foundry/events/events.jsonl
.sdlc/verification/
.charon/clio/sessions/
.charon/mnemosyne/candidates/
.charon/daedalus/handoff-packets/
.foundry/state/latest-status.md
evals/repo-contracts/
```

If a subsystem needs information from another subsystem, it should reference a durable artifact.

## 19. Boundary Violations

The following are boundary violations.

### 19.1 Charon Boundary Violations

1. Charon directly generates monorepo templates.
2. Charon silently promotes generated notes to canonical memory.
3. Charon becomes the entire runtime orchestrator.
4. Charon bypasses work packets for implementation work.

### 19.2 SDLC Boundary Violations

1. Work packets mutate canonical memory directly.
2. The Directive Compiler performs unbounded implementation.
3. Work packets omit verification but claim completion.
4. The SDLC Framework becomes the event router.

### 19.3 Factory Boundary Violations

1. The Monorepo Factory becomes the source of project truth.
2. Generated scaffolds are trusted without repo contract tests.
3. The Factory overwrites user files without policy.
4. The Factory mutates canonical memory directly.

### 19.4 Control Plane Boundary Violations

1. The Control Plane stores canonical memory as hidden state.
2. The Control Plane replaces subsystem policies.
3. The Control Plane performs external actions without policy gates.
4. The Control Plane silently changes project architecture.

### 19.5 Event Router Boundary Violations

1. Events are treated as canonical memory.
2. Notifications claim verification without evidence.
3. External sinks are enabled by default.
4. Notification delivery is treated as work completion.

### 19.6 Agent Runtime Boundary Violations

1. One agent plans, implements, verifies, approves, and canonicalizes its own work.
2. An Executor promotes memory directly.
3. A Reviewer silently rewrites implementation while claiming only to review.
4. An Operator mutates code or memory.

### 19.7 Vector Retrieval Boundary Violations

1. The vector database stores untraceable memory.
2. Retrieval results override repository truth.
3. Orphan vectors exist.
4. Stale context is presented as active truth.

### 19.8 Worktree Boundary Violations

1. Worktree content is treated as canonical before merge.
2. Worktrees automatically push remotely.
3. Worktrees automatically merge.
4. Worktree cleanup deletes uncommitted work silently.

## 20. Boundary Enforcement

Boundary enforcement will happen through:

1. ADRs;
2. project manifest;
3. governance policies;
4. repo contract tests;
5. work packet reviews;
6. event records;
7. context-pack source traceability;
8. handoff reviews;
9. future runtime checks;
10. human project owner review.

V1.0 will enforce many boundaries by documentation and repo contracts.

Later versions should enforce more boundaries through tooling.

## 21. V1.0 Boundary Scope

For v1.0, the boundaries are primarily structural and procedural.

V1.0 must create:

1. `.foundry/`;
2. `.charon/`;
3. `.sdlc/`;
4. `templates/`;
5. `evals/`;
6. `governance/`;
7. `docs/adr/`;
8. `docs/foundry/`.

V1.0 must not attempt to automate everything.

The priority is to create the correct system shape, prove the first local loop, and prevent role confusion.

## 22. Post-V1.0 Boundary Evolution

After v1.0, boundaries should become more enforceable.

Possible future enforcement:

1. JSON Schema validation;
2. repo contract checker;
3. work-packet validator;
4. manifest drift checker;
5. event schema validator;
6. context-pack validator;
7. handoff validator;
8. memory admission workflow;
9. adapter permission system;
10. sandboxed execution.

The system should become stricter over time without becoming opaque.

## 23. Summary

The Agentic Software Foundry depends on clear boundaries.

The essential boundaries are:

```text
Control Plane coordinates.
Charon remembers.
SDLC structures work.
Factory generates.
Events record and route.
Agents separate responsibility.
Vector retrieval accelerates recall.
Worktrees isolate execution.
Evaluations prove behavior.
Governance constrains.
Adapters integrate.
The repository endures.
The human decides.
```

These boundaries are now part of the architectural lock for the project.
