---
title: "Documentation"
description: "Documentation index for the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - documentation
  - index
  - foundry
---

# Documentation

## 1. Purpose

This directory contains the durable documentation for the Agentic Software Foundry.

The Foundry is being built documentation-first because its core purpose is to make AI-assisted software work durable, governable, repeatable, auditable, and resumable.

Documentation in this repository is not an afterthought.

It is part of the architecture, the governance model, the tutorial, the memory system, and the verification surface.

## 2. Documentation Philosophy

The Foundry treats documentation as a first-class project artifact.

Documentation should:

1. preserve architectural intent;
2. explain why decisions were made;
3. define system boundaries;
4. make future work resumable;
5. guide implementation order;
6. support clean-room development;
7. support repo contract testing;
8. support context rehydration;
9. support handoff between sessions;
10. teach the system as it is built.

The goal is not to create decorative documentation.

The goal is to create documentation that constrains, explains, verifies, and preserves the system.

## 3. Current Documentation Map

```text
docs/
├── README.md
├── adr/
│   ├── ADR-0001-repository-based-context-continuity.md
│   ├── ADR-0002-clean-room-architecture-and-pattern-adoption.md
│   ├── ADR-0003-foundry-control-plane.md
│   ├── ADR-0004-canonical-repository-plus-vector-retrieval.md
│   ├── ADR-0005-foundry-event-bus-and-notification-router.md
│   ├── ADR-0006-directive-compiler-and-work-protocols.md
│   ├── ADR-0007-multi-agent-runtime-and-role-separation.md
│   ├── ADR-0008-worktree-based-parallel-execution.md
│   ├── ADR-0009-charon-sdlc-factory-runtime-integration.md
│   ├── ADR-0010-manifest-driven-project-contracts.md
│   ├── ADR-0011-work-packet-lifecycle.md
│   ├── ADR-0012-context-pack-and-handoff-lifecycle.md
│   ├── ADR-0013-repo-contract-testing.md
│   └── ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md
└── foundry/
    ├── 00-foundry-charter.md
    ├── 01-system-boundaries.md
    └── 02-v1-mvp-definition.md
````

Governance documents currently live outside `docs/`:

```text
governance/
├── CLEAN_ROOM_POLICY.md
└── PROJECT_CONSTITUTION.md
```

## 4. Foundry Documents

The `docs/foundry/` directory contains high-level Foundry definition documents.

### 4.1 `00-foundry-charter.md`

The Foundry Charter defines the project’s purpose, thesis, primary user, architectural pillars, non-goals, v1.0 boundary, and foundational identity.

Read this first.

### 4.2 `01-system-boundaries.md`

The System Boundaries document defines what each subsystem owns and does not own.

It exists to prevent Charon, the SDLC Framework, the Factory, the Control Plane, the Event Bus, the Agent Runtime, the Evaluation Harness, and other subsystems from collapsing into one another.

### 4.3 `02-v1-mvp-definition.md`

The V1.0 MVP Definition defines what must exist before the first MVP is considered complete.

It also defines the milestone sequence from architectural lock through the first local Foundry loop.

## 5. ADR Documents

The `docs/adr/` directory contains Architecture Decision Records.

ADRs are durable decisions.

They explain:

1. the context;
2. the problem;
3. the decision;
4. the alternatives considered;
5. the consequences;
6. the acceptance criteria;
7. the future work created by the decision.

### 5.1 Initial ADR Set

The initial ADR set is:

1. `ADR-0001` — Repository-Based Context Continuity;
2. `ADR-0002` — Clean-Room Architecture and Pattern Adoption;
3. `ADR-0003` — Foundry Control Plane;
4. `ADR-0004` — Canonical Repository Plus Vector Retrieval;
5. `ADR-0005` — Foundry Event Bus and Notification Router;
6. `ADR-0006` — Directive Compiler and Work Protocols;
7. `ADR-0007` — Multi-Agent Runtime and Role Separation;
8. `ADR-0008` — Worktree-Based Parallel Execution;
9. `ADR-0009` — Charon, SDLC, Factory, and Runtime Integration;
10. `ADR-0010` — Manifest-Driven Project Contracts;
11. `ADR-0011` — Work Packet Lifecycle;
12. `ADR-0012` — Context Pack and Handoff Lifecycle;
13. `ADR-0013` — Repo Contract Testing;
14. `ADR-0014` — Evaluation Harness for Context Continuity and Agent Execution.

This ADR set establishes the architectural lock for the first MVP.

## 6. Governance Documents

Governance documents live in:

```text
governance/
```

Current governance documents:

1. `CLEAN_ROOM_POLICY.md`;
2. `PROJECT_CONSTITUTION.md`.

The clean-room policy governs how the project may study, learn from, and independently implement public architectural patterns without copying protected implementation.

The project constitution defines the governing principles, non-negotiable invariants, system authority model, safety defaults, and amendment rules.

## 7. Reading Order

A new human or AI-assisted session should read the documents in this order:

```text
1. docs/foundry/00-foundry-charter.md
2. docs/foundry/01-system-boundaries.md
3. docs/foundry/02-v1-mvp-definition.md
4. governance/PROJECT_CONSTITUTION.md
5. governance/CLEAN_ROOM_POLICY.md
6. docs/adr/ADR-0001-repository-based-context-continuity.md
7. docs/adr/ADR-0003-foundry-control-plane.md
8. docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md
9. docs/adr/ADR-0010-manifest-driven-project-contracts.md
10. docs/adr/ADR-0013-repo-contract-testing.md
11. docs/adr/ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md
```

The remaining ADRs should be read when working on their related subsystem.

## 8. Documentation Status

Current project status:

```text
Milestone: Milestone 0 — Architectural Lock
Status: In progress
Runtime code: Not started
Repository scaffold: Not started
Primary next step: Complete documentation index and then add root README
```

Milestone 0 is complete when the repository contains:

1. Foundry Charter;
2. System Boundaries;
3. V1.0 MVP Definition;
4. Clean-Room Policy;
5. Project Constitution;
6. ADR-0001 through ADR-0014;
7. documentation index;
8. root project README.

## 9. Documentation Rules

Documentation should follow these rules:

1. use clear headings;
2. describe purpose before mechanics;
3. distinguish accepted decisions from future plans;
4. identify ownership boundaries;
5. avoid hidden assumptions;
6. avoid placeholder prose where a real explanation is needed;
7. preserve clean-room language;
8. state when something is deferred;
9. include commit recommendations when used in tutorial steps;
10. align with existing ADRs and policies.

## 10. Documentation and Charon

Future Charon context packs and handoff packets will rely on this documentation.

Important docs should be:

1. source-traceable;
2. stable enough to cite;
3. clear enough for new sessions;
4. explicit about status;
5. explicit about supersession when changed.

Documentation is one of the primary source materials for context rehydration.

## 11. Documentation and Repo Contracts

Future repo contract tests should verify that required documentation exists.

Required documentation for the first MVP includes:

```text
docs/README.md
docs/foundry/00-foundry-charter.md
docs/foundry/01-system-boundaries.md
docs/foundry/02-v1-mvp-definition.md
docs/adr/ADR-0001-repository-based-context-continuity.md
docs/adr/ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md
governance/CLEAN_ROOM_POLICY.md
governance/PROJECT_CONSTITUTION.md
```

More required documentation will be added as the repository scaffold is created.

## 12. Documentation and Commits

Documentation changes should be committed atomically.

Good examples:

```text
docs(foundry): define system responsibility boundaries
docs(governance): add project constitution
docs(adr): define evaluation harness architecture
docs: add documentation index
```

Avoid broad, vague commit messages such as:

```text
update docs
misc changes
more stuff
```

## 13. Next Documentation Work

After this document, the next documentation artifact should be the root project README:

```text
README.md
```

The root README should explain:

1. what the project is;
2. why it exists;
3. current status;
4. how the repository is organized;
5. where to start reading;
6. what is intentionally not implemented yet;
7. how to verify the repository once repo contract tests exist.

## 14. Status

This documentation index is part of Milestone 0.

It exists so the repository has a clear documentation entrypoint before scaffolding begins.
