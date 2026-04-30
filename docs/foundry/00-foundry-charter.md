---
title: "Agentic Software Foundry Charter"
description: "Controlling charter defining the purpose, identity, scope, and principles of the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - charter
  - architecture
  - governance
---

# Agentic Software Foundry Charter

## 1. Purpose

The Agentic Software Foundry exists to make serious software work with AI durable, governable, repeatable, auditable, and resumable.

It is not merely a coding assistant, template generator, memory system, workflow runner, or multi-agent demo. It is a software engineering operating system for turning human intent into structured, verified, documented, and persistent project progress.

The Foundry is designed for long-running software projects where architecture matters, context continuity matters, decisions must not be lost, generated work must be inspectable, and AI-assisted development must remain subordinate to explicit human-governed project truth.

## 2. Product Thesis

Modern AI tools are powerful but fragile.

They can generate code quickly, but they often lose context, forget prior decisions, blur temporary discussion with durable truth, repeat work across sessions, hallucinate architectural intent, and operate without a stable memory or governance model.

The Agentic Software Foundry addresses this by combining:

1. repo-canonical project memory;
2. vector-assisted retrieval;
3. context-pack rehydration;
4. work-packet-driven execution;
5. repeatable monorepo scaffolding;
6. policy-gated automation;
7. event-driven operator feedback;
8. multi-agent runtime patterns;
9. verification-first software delivery;
10. tutorial-grade documentation.

The Foundry treats the repository as the durable artifact, the human as the sovereign project authority, and AI agents as governed collaborators.

## 3. Core Identity

The Agentic Software Foundry is a governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.

Its core identity is not any single model, provider, framework, agent harness, workflow tool, or leaked/private implementation.

The Foundry may study and absorb public architectural patterns from systems such as OmX, clawhip, OmO, Astra-Code, Claude Code public documentation, and other open or publicly documented tools, but only as independently implemented runtime, operator, workflow, or architectural patterns.

The Foundry must remain its own system.

## 4. Primary User

The primary user is a serious software builder who wants AI assistance without surrendering architectural control.

This includes:

1. solo engineers building large projects;
2. technical founders creating production-grade systems;
3. maintainers of complex monorepos;
4. AI-assisted development teams;
5. documentation-first builders;
6. governance-grade software projects;
7. long-running projects that must survive context resets, tool changes, and model changes.

The initial primary user is the project owner building this system as both a practical tool and a portfolio-grade software engineering platform.

## 5. Problems the Foundry Solves

The Foundry is intended to solve the following problems.

### 5.1 Context Loss

AI chat sessions are temporary. Long-running work requires durable memory that survives new sessions, new tools, new agents, and new models.

### 5.2 Memory Pollution

Not everything said in a chat should become truth. The system must distinguish raw notes, candidate memories, canonical decisions, stale information, disputed claims, and superseded conclusions.

### 5.3 Unstructured AI Execution

A short directive should not produce unbounded improvisation. It should become a structured work packet with scope, context, acceptance criteria, verification steps, documentation obligations, and commit guidance.

### 5.4 Repeated Project Scaffolding

Serious monorepos require recurring structure: applications, packages, services, docs, governance files, CI, tests, repo contracts, templates, policy, and operational conventions. The Foundry should make this repeatable.

### 5.5 Weak Verification

Generated work is not complete merely because files exist. Work is complete only when it is verified, documented, reviewed, and committed according to the project protocol.

### 5.6 Hidden Agent Behavior

Agent actions must be inspectable. Important events, decisions, context transitions, memory promotions, verification results, and file mutations should be recorded.

### 5.7 Model Lock-In

Project continuity should not depend on a single AI provider. The Foundry should be model-agnostic and should support ChatGPT, Claude, Codex-like tools, local models, IDE agents, and future systems through adapters.

### 5.8 Operator Noise in Agent Context

Status routing, notifications, event monitoring, and operator delivery should not consume the coding agent’s limited reasoning context. These concerns belong in the Foundry Control Plane.

## 6. Foundational Architecture

The Foundry is composed of several cooperating systems with strict responsibility boundaries.

### 6.1 Foundry Control Plane

The Foundry Control Plane coordinates the ecosystem.

It owns:

1. project manifests;
2. run state;
3. event logs;
4. event routing;
5. notification sinks;
6. agent runtime coordination;
7. directive compilation orchestration;
8. policy gates;
9. adapters;
10. capability boundaries.

It does not own canonical memory, project domain logic, template internals, or generated application code.

### 6.2 Charon — Context Bridge

Charon provides context continuity.

It owns:

1. canonical memory;
2. session chronicles;
3. source provenance;
4. context packs;
5. handoff packets;
6. memory candidates;
7. memory admission policy;
8. conflict and drift analysis;
9. rehydration rules;
10. vector-assisted retrieval contracts.

Charon’s repo-backed memory is canonical. The vector database is an index over canonical and candidate source artifacts, not the source of truth.

### 6.3 AI SDLC Framework

The AI SDLC Framework converts human intent into disciplined software work.

It owns:

1. directives;
2. work packets;
3. execution protocols;
4. implementation order;
5. verification loops;
6. review checklists;
7. documentation obligations;
8. commit recommendations;
9. retrospectives;
10. task lifecycle states.

It does not silently alter canonical memory or bypass policy gates.

### 6.4 Monorepo Factory

The Monorepo Factory generates repeatable project structures.

It owns:

1. templates;
2. project profiles;
3. scaffold manifests;
4. feature flags;
5. repo contracts;
6. generated docs;
7. generated CI;
8. generated test baselines;
9. template provenance;
10. project bootstrap flows.

It does not become the memory system or the runtime orchestrator.

### 6.5 Runtime and Operator Pattern Layer

The Runtime and Operator Pattern Layer absorbs useful public architectural ideas from systems such as OmX, clawhip, OmO, Astra-Code, and similar tools.

It may include:

1. directive-to-workflow compilation;
2. execution modes;
3. persistent verification loops;
4. event routers;
5. notification sinks;
6. agent lifecycle events;
7. multi-agent role separation;
8. worktree-based execution;
9. disagreement resolution;
10. wisdom accumulation.

These patterns support the Foundry Control Plane. They do not define the Foundry’s core identity.

### 6.6 Evaluation and Verification Harness

The Evaluation and Verification Harness proves that the Foundry works.

It owns tests and evaluations for:

1. context continuity;
2. directive compilation;
3. work-packet resumption;
4. repo scaffold correctness;
5. event routing;
6. memory admission;
7. policy compliance;
8. agent coordination;
9. handoff generation;
10. new-session bootstrap quality.

## 7. Non-Negotiable Invariants

The following invariants must not be violated.

### 7.1 Repository-Canonical Truth

The repository is the durable source of truth.

The vector database, runtime state, generated summaries, and agent memory are secondary indexes, caches, views, or derived artifacts.

If the vector database is deleted, the system must be able to rebuild it from repository artifacts.

### 7.2 Human Authority

The human project owner remains the final authority over project direction, canonical memory, architectural changes, destructive operations, and release decisions.

AI agents may propose, execute, verify, summarize, and recommend. They do not become sovereign authorities.

### 7.3 No Silent Canonicalization

No AI-generated note, chat message, retrieved context item, event, or generated summary becomes canonical merely because it exists.

Canonical memory requires admission according to explicit policy.

### 7.4 Clean-Room Pattern Adoption

The Foundry may learn from public documentation, public reporting, open-source projects, and independently developed prior notes.

It must not incorporate leaked proprietary code, copied private implementation details, translated proprietary code, copied proprietary prompts, copied tests, copied comments, or derivative implementations of non-open-source material.

### 7.5 Explicit Over Implicit

Important behavior must be explicit.

The system should prefer manifests, schemas, policies, lifecycle states, logs, and contracts over hidden defaults and implicit behavior.

### 7.6 Policy-Gated Automation

Any action that affects canonical memory, project architecture, repository structure, security posture, releases, destructive file changes, or external publication must pass through an explicit policy gate.

### 7.7 Verification Before Completion

A work packet is not complete until its verification criteria have been satisfied or the failure has been documented.

“Generated” does not mean “done.”

### 7.8 Context Budget Discipline

The system must not blindly load all memory into every session.

Context packs should be task-specific, trust-aware, budget-aware, and explicit about what was included, excluded, summarized, or deferred.

### 7.9 Model Agnosticism

The Foundry must not be architecturally dependent on one model provider.

Provider-specific integrations are adapters, not foundations.

### 7.10 Auditability

Important transitions must be traceable.

This includes memory admission, work-packet state changes, verification results, scaffold generation, context-pack creation, handoff generation, and policy exceptions.

## 8. Scope

The Foundry includes the following in scope.

### 8.1 In Scope for the Overall System

1. repo-backed context continuity;
2. vector-assisted retrieval;
3. structured memory admission;
4. context-pack generation;
5. handoff generation;
6. directive compilation;
7. work-packet execution;
8. verification loops;
9. monorepo scaffolding;
10. repo contract tests;
11. event logging;
12. notification routing;
13. multi-agent runtime patterns;
14. model/tool adapters;
15. tutorial documentation;
16. governance and policy files;
17. evaluation harnesses.

### 8.2 In Scope for v1.0 MVP

The v1.0 MVP must prove the minimum complete Foundry loop:

1. accept a human directive;
2. compile it into a work packet;
3. assemble a relevant context pack;
4. create a run record;
5. emit events to an append-only event log;
6. execute or simulate a verification step;
7. generate notification-renderable status;
8. write a session chronicle;
9. produce memory candidates;
10. generate a handoff packet;
11. support new-session bootstrap from the handoff;
12. verify repository structure with repo contract tests.

### 8.3 Deferred Until After v1.0

The following are important but deferred:

1. full autonomous multi-agent execution;
2. full tmux orchestration;
3. Discord integration as a default operator channel;
4. GitHub PR automation;
5. automatic remote pushes;
6. production-grade vector database deployment;
7. complex agent marketplace/plugin system;
8. multi-tenant SaaS operation;
9. enterprise identity management;
10. distributed task execution;
11. full web studio interface.

## 9. Non-Goals

The Foundry is not intended to be:

1. a Claude Code clone;
2. a Codex CLI clone;
3. an OmX clone;
4. a clawhip clone;
5. an OmO clone;
6. an Astra-Code clone;
7. a generic chatbot wrapper;
8. a prompt collection only;
9. a template repository only;
10. a vector database product only;
11. a CI/CD platform replacement;
12. an IDE replacement;
13. an unbounded autonomous coding bot;
14. a system that prioritizes speed over correctness;
15. a system that treats generated output as trusted by default.

## 10. Architectural Pillars

The Foundry is governed by the following pillars.

### 10.1 Durability

Important project context must survive across sessions, models, tools, and time.

### 10.2 Explicitness

The system should make assumptions, state transitions, policies, and generated artifacts visible.

### 10.3 Auditability

Important actions and decisions should leave a trace.

### 10.4 Reproducibility

The system should be able to regenerate derived artifacts from canonical sources where practical.

### 10.5 Verifiability

Work should include acceptance criteria and verification commands or documented verification reasoning.

### 10.6 Modularity

Memory, workflow, scaffolding, runtime, retrieval, and notifications should remain separate cooperating systems.

### 10.7 Model Agnosticism

The Foundry should support multiple AI tools through adapters.

### 10.8 Safety

Dangerous, destructive, architectural, or canonical operations should be policy-gated.

### 10.9 Operator Clarity

The human operator should know what happened, what changed, what passed, what failed, what needs review, and what comes next.

### 10.10 Documentation as Product

Documentation is not an afterthought. It is part of the product, the interface, the governance model, and the tutorial.

## 11. Runtime Pattern Adoption

The Foundry will study and absorb useful public architecture patterns from other systems.

### 11.1 OmX-Inspired Patterns

The Foundry may adopt the following patterns:

1. short directive to structured workflow;
2. planning keywords;
3. execution modes;
4. persistent verification loops;
5. team execution concepts;
6. project-local state;
7. reusable workflow conventions.

These belong primarily in the AI SDLC Framework and Directive Compiler.

### 11.2 clawhip-Inspired Patterns

The Foundry may adopt the following patterns:

1. daemon-first event routing;
2. typed events;
3. event source extraction;
4. dispatcher/router separation;
5. renderer/sink separation;
6. notification routing outside the agent context window;
7. git, GitHub, tmux, and agent lifecycle events.

These belong primarily in the Foundry Event Bus and Notification Router.

### 11.3 OmO-Inspired Patterns

The Foundry may adopt the following patterns:

1. multi-agent role separation;
2. planner, executor, reviewer, and verifier distinction;
3. model/category routing;
4. disagreement resolution;
5. wisdom accumulation;
6. parallel subagent work;
7. verification-before-completion loops.

These belong primarily in the Foundry Agent Runtime and AI SDLC Framework.

### 11.4 Astra-Code-Inspired Patterns

The Foundry may adopt the following patterns:

1. human direction as the controlling input;
2. repository as the artifact;
3. runtime/operator discipline;
4. autonomous workflow research patterns;
5. separation of orchestration and execution;
6. defensive, educational, clean-room implementation posture.

These belong primarily in the Foundry Control Plane and Runtime/Operator Layer.

## 12. Memory and Retrieval Position

The Foundry uses a dual memory model:

1. the repository is the canonical memory substrate;
2. the vector database is a retrieval accelerator.

The vector database may store embeddings, chunks, metadata, and retrieval indexes. It must reference canonical or candidate source artifacts and must not contain orphaned, untraceable memory.

Every retrievable item should be traceable to one or more source artifacts such as:

1. canonical memory files;
2. ADRs;
3. work packets;
4. session chronicles;
5. handoff packets;
6. project manifests;
7. source code files;
8. documentation files;
9. event records;
10. scaffold manifests.

## 13. Work Philosophy

The Foundry should be built the same way it expects other projects to be built.

Therefore, development must be:

1. documented step by step;
2. organized into small milestones;
3. implemented through atomic changes;
4. committed with Conventional Commits;
5. verified continuously;
6. explained tutorial-style;
7. aligned with ADRs;
8. protected by repo contract tests;
9. updated with handoff notes;
10. treated as a real software product from the beginning.

## 14. v1.0 MVP Definition of Done

The v1.0 MVP is done when a user can run one complete Foundry loop locally.

The MVP must demonstrate:

1. a project manifest exists;
2. Charon filesystem structure exists;
3. AI SDLC work-packet structure exists;
4. Foundry event log exists;
5. a directive can be converted into a work packet;
6. a context pack can be generated from project files;
7. a run record can be created;
8. verification status can be recorded;
9. event messages can be routed to at least console and filesystem sinks;
10. a session chronicle can be written;
11. memory candidates can be produced;
12. a handoff packet can be generated;
13. a new session can resume from the handoff;
14. repo contract tests can verify required files and directories;
15. all of the above is documented in tutorial form.

The MVP does not need to implement fully autonomous coding agents. It must prove the architecture and the loop.

## 15. Initial Build Order

The initial build order is:

1. Foundry Charter;
2. Clean-Room Pattern Adoption Policy;
3. Repository-Based Context Continuity ADR;
4. Foundry Control Plane ADR;
5. Canonical Repository Plus Vector Retrieval ADR;
6. Event Bus and Notification Router ADR;
7. Directive Compiler and Work Protocol ADR;
8. Multi-Agent Runtime and Role Separation ADR;
9. v1.0 MVP Definition;
10. initial repository scaffold;
11. repo contract tests;
12. first end-to-end local Foundry loop.

## 16. First Architectural Commitment

The first architectural commitment is this:

The Foundry will not be a bag of agent tricks. It will be a disciplined software engineering system.

Its purpose is to preserve intent, structure work, govern memory, scaffold repeatable projects, route operational signals, coordinate agents, verify outcomes, and make long-running AI-assisted software development trustworthy.

The Foundry should make it easier to build serious software with AI without making the software process less serious.

## 17. Status

This charter is the first controlling document of the Agentic Software Foundry project.

All future architecture, scaffolding, implementation, documentation, and runtime design should align with this charter unless the charter is explicitly amended through a documented decision.
