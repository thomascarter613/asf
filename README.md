---
title: "Agentic Software Foundry"
description: "Repository front door for the Agentic Software Foundry project."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - readme
  - foundry
  - project-overview
---

# Agentic Software Foundry

## 1. What This Is

The Agentic Software Foundry is a governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic software engineering system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.

It is being built to make AI-assisted development more durable, structured, auditable, and resumable.

The Foundry is not merely a coding assistant, memory system, template generator, multi-agent demo, or prompt collection. It is an integrated software delivery system built around explicit architecture, repository-backed context, structured work packets, repeatable scaffolding, event-recorded execution, and handoff-driven continuity.

## 2. Current Status

Current milestone:

```text
Milestone 0 — Architectural Lock
```

Current implementation status:

```text
Runtime code: not started
Repository scaffold: not started
Architecture documents: in progress
Foundry loop: not yet implemented
Repo contract tests: not yet implemented
```

The project is currently in its architecture-first phase. The initial goal is to lock the governing documents before scaffolding runtime structure or writing code.

## 3. Core Thesis

Modern AI tools can generate code quickly, but they often lose context, blur temporary discussion with durable truth, repeat work across sessions, and operate without stable governance.

The Foundry addresses this by combining:

1. repository-based context continuity;
2. vector-assisted retrieval;
3. Charon context packs and handoff packets;
4. work-packet-driven execution;
5. monorepo factory scaffolding;
6. manifest-driven project contracts;
7. local event logging;
8. policy-gated automation;
9. multi-agent role separation;
10. repo contract testing;
11. tutorial-grade documentation.

The repository is the durable artifact.

The human project owner remains the final authority.

AI agents are governed collaborators.

## 4. Core Systems

The Foundry is composed of cooperating subsystems.

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
```

The controlling boundary rule is:

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

## 5. What This Project Is Not

The Foundry is not:

1. a Claude Code clone;
2. a Codex CLI clone;
3. an OmX clone;
4. a clawhip clone;
5. an OmO clone;
6. an Astra-Code clone;
7. a generic chatbot wrapper;
8. a prompt collection only;
9. a template repository only;
10. an unbounded autonomous coding bot;
11. a vector database product only;
12. a CI/CD platform replacement;
13. an IDE replacement.

The project may study public ideas and open architectural patterns, but it must remain clean-room, independently implemented, and Foundry-native.

## 6. Design Influences

The Foundry may study and absorb public architecture patterns from systems such as:

1. OmX / oh-my-codex-style workflow layers;
2. clawhip-style event routing;
3. OmO / oh-my-openagent-style multi-agent coordination;
4. Astra-Code-style runtime/operator discipline;
5. public documentation and reporting about repo-backed memory and context continuity;
6. general software engineering patterns such as event logs, policy gates, worktrees, repo contracts, manifests, and retrieval indexes.

These influences are treated as pattern inspiration, not as product identity.

The clean-room rule is:

```text
Learn from public ideas.
Do not copy protected implementation.
```

## 7. Repository Philosophy

This project is being built documentation-first and contract-first.

That means:

1. purpose comes before tooling;
2. architecture comes before scaffolding;
3. policy comes before autonomy;
4. manifests come before automation;
5. work packets come before implementation;
6. verification comes before completion;
7. handoff comes before context reset;
8. repo contracts come before scaffold trust.

The repository should always be understandable to a future human or AI-assisted session.

## 8. Current Repository Map

```text
agentic-software-foundry/
├── README.md
├── docs/
│   ├── README.md
│   ├── adr/
│   │   ├── ADR-0001-repository-based-context-continuity.md
│   │   ├── ADR-0002-clean-room-architecture-and-pattern-adoption.md
│   │   ├── ADR-0003-foundry-control-plane.md
│   │   ├── ADR-0004-canonical-repository-plus-vector-retrieval.md
│   │   ├── ADR-0005-foundry-event-bus-and-notification-router.md
│   │   ├── ADR-0006-directive-compiler-and-work-protocols.md
│   │   ├── ADR-0007-multi-agent-runtime-and-role-separation.md
│   │   ├── ADR-0008-worktree-based-parallel-execution.md
│   │   ├── ADR-0009-charon-sdlc-factory-runtime-integration.md
│   │   ├── ADR-0010-manifest-driven-project-contracts.md
│   │   ├── ADR-0011-work-packet-lifecycle.md
│   │   ├── ADR-0012-context-pack-and-handoff-lifecycle.md
│   │   ├── ADR-0013-repo-contract-testing.md
│   │   └── ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md
│   └── foundry/
│       ├── 00-foundry-charter.md
│       ├── 01-system-boundaries.md
│       └── 02-v1-mvp-definition.md
└── governance/
    ├── CLEAN_ROOM_POLICY.md
    └── PROJECT_CONSTITUTION.md
```

Future repository structure will add:

```text
.foundry/
.charon/
.sdlc/
templates/
evals/
docs/ai/
docs/tutorial/
```

Those are not present yet unless a later milestone has created them.

## 9. Reading Order

A new contributor, human session, or AI-assisted session should read these first:

```text
1. README.md
2. docs/foundry/00-foundry-charter.md
3. docs/foundry/01-system-boundaries.md
4. docs/foundry/02-v1-mvp-definition.md
5. governance/PROJECT_CONSTITUTION.md
6. governance/CLEAN_ROOM_POLICY.md
7. docs/README.md
```

Then read the ADRs relevant to the work being performed.

For the core architecture, read:

```text
docs/adr/ADR-0001-repository-based-context-continuity.md
docs/adr/ADR-0003-foundry-control-plane.md
docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md
docs/adr/ADR-0010-manifest-driven-project-contracts.md
docs/adr/ADR-0013-repo-contract-testing.md
docs/adr/ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md
```

## 10. Initial ADR Set

The initial ADR set establishes the architectural lock for the v1.0 MVP.

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

## 11. V1.0 MVP Goal

The v1.0 MVP must prove one complete local Foundry loop:

```text
Human directive
  ↓
Directive record
  ↓
Work packet
  ↓
Context pack
  ↓
Run record
  ↓
Event log
  ↓
Verification record
  ↓
Session chronicle
  ↓
Memory candidate
  ↓
Handoff packet
  ↓
Latest status
  ↓
New-session bootstrap
```

V1.0 does not need full autonomous agents, a daemon, external notifications, a production vector database, or a web UI.

V1.0 must prove the architecture can operate locally through repository-backed artifacts.

## 12. V1.0 Non-Goals

The following are deferred until after v1.0:

1. full autonomous multi-agent execution;
2. tmux orchestration;
3. Discord integration;
4. Slack integration;
5. GitHub issue or PR automation;
6. automatic remote push;
7. automatic merge;
8. production vector database;
9. web dashboard;
10. SaaS control plane;
11. plugin marketplace;
12. full monorepo generator implementation;
13. automatic canonical memory promotion;
14. release automation.

## 13. Safety Defaults

The Foundry is safe-by-default.

Required defaults:

1. local-first operation;
2. no automatic remote push;
3. no automatic merge;
4. no external notification sink by default;
5. no canonical memory promotion without admission;
6. no destructive file operation without explicit instruction or policy approval;
7. no leaked-code ingestion;
8. no provider lock-in;
9. no unbounded autonomous loops;
10. no secrets in manifests;
11. no Bazel files by default.

## 14. Clean-Room Policy

The project follows a clean-room pattern adoption policy.

Allowed:

```text
public concepts
public architecture patterns
public documentation
open-source projects used according to license
first-principles reasoning
the project owner's own prior work
```

Forbidden:

```text
leaked proprietary source code
private implementation details
private prompts
private tests
private schemas
private comments
unauthorized secrets
license-incompatible material
```

See:

```text
governance/CLEAN_ROOM_POLICY.md
```

## 15. Development Method

The project is built through small, atomic, tutorial-style steps.

Each meaningful step should identify:

1. where the step fits;
2. what files are created or modified;
3. why the files exist;
4. how to verify the result;
5. where to commit;
6. the recommended Conventional Commit message;
7. what comes next.

Commits should be atomic and use Conventional Commits.

Examples:

```text
docs(foundry): define v1 mvp boundary
docs(governance): add project constitution
docs: add documentation index
chore(scaffold): add initial foundry repository structure
test(repo): add initial repo contract checker
```

## 16. Verification Status

At this stage, verification is primarily manual review.

Executable repo contract tests have not been added yet.

The first executable verification target will be the repo contract checker, introduced after the initial scaffold.

Until then, verification consists of:

1. file existence checks;
2. documentation review;
3. Git status review;
4. atomic commit review.

## 17. Local Setup

At the current stage, there is no runtime setup.

No package manager has been initialized.

No dependencies have been installed.

No build command exists yet.

That is intentional.

The project is still in architectural lock.

Runtime tooling will be introduced only after the governing documents and initial repository scaffold are complete.

## 18. Immediate Next Steps

The immediate next steps are:

1. complete Milestone 0 documentation;
2. add the initial repository scaffold;
3. add the Foundry project manifest;
4. add Charon skeleton;
5. add AI SDLC skeleton;
6. add agent runtime and worktree policy skeleton;
7. add evaluation and repo contract definitions;
8. add the first executable repo contract checker;
9. create the Initial Foundry Loop artifacts;
10. generate the first handoff and bootstrap guidance.

## 19. Milestone 0 Completion Criteria

Milestone 0 is complete when the repository contains:

```text
[ ] README.md
[ ] docs/README.md
[ ] docs/foundry/00-foundry-charter.md
[ ] docs/foundry/01-system-boundaries.md
[ ] docs/foundry/02-v1-mvp-definition.md
[ ] governance/CLEAN_ROOM_POLICY.md
[ ] governance/PROJECT_CONSTITUTION.md
[ ] docs/adr/ADR-0001-repository-based-context-continuity.md
[ ] docs/adr/ADR-0002-clean-room-architecture-and-pattern-adoption.md
[ ] docs/adr/ADR-0003-foundry-control-plane.md
[ ] docs/adr/ADR-0004-canonical-repository-plus-vector-retrieval.md
[ ] docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md
[ ] docs/adr/ADR-0006-directive-compiler-and-work-protocols.md
[ ] docs/adr/ADR-0007-multi-agent-runtime-and-role-separation.md
[ ] docs/adr/ADR-0008-worktree-based-parallel-execution.md
[ ] docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md
[ ] docs/adr/ADR-0010-manifest-driven-project-contracts.md
[ ] docs/adr/ADR-0011-work-packet-lifecycle.md
[ ] docs/adr/ADR-0012-context-pack-and-handoff-lifecycle.md
[ ] docs/adr/ADR-0013-repo-contract-testing.md
[ ] docs/adr/ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md
```

After this checklist is satisfied and committed, the project can move to Milestone 1.

## 20. Project Status Statement

This repository currently represents the architecture-lock phase of the Agentic Software Foundry.

The project has not yet implemented runtime behavior.

That is intentional.

The Foundry is being built in the order it expects serious AI-assisted software to be built:

```text
purpose
→ policy
→ architecture
→ boundaries
→ manifests
→ scaffold
→ contracts
→ verification
→ implementation
→ handoff
```

## 21. License

License selection is not finalized yet.

A license should be chosen before public release or external collaboration.

## 22. Status

This README is part of Milestone 0.

It exists to give the repository a clear front door before scaffolding and implementation begin.
