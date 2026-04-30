---
title: "Fresh Chat Handoff"
description: "Self-contained handoff document for transferring the Agentic Software Foundry context to a fresh AI-assisted chat session."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - ai
  - handoff
  - context-continuity
  - fresh-chat
---

# Fresh Chat Handoff

## 1. Purpose

This document transfers the current Agentic Software Foundry project context from the current chat session to a fresh AI-assisted chat session.

The fresh session should treat the repository as the canonical source of truth.

The fresh session should not rely on provider memory, raw chat history, unstated assumptions, or recalled summaries when repository artifacts provide a different answer.

## 2. Project Identity

Project name:

```text
Agentic Software Foundry
```

Project profile:

```text
governance-grade
```

Project purpose:

```text
A repo-canonical, vector-assisted, policy-gated, model-agnostic software engineering system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.
```

The project integrates:

1. Charon context continuity;
2. AI SDLC work packets;
3. Monorepo Factory scaffolding;
4. Foundry Control Plane runtime/operator patterns;
5. event logs and notification routing;
6. multi-agent role separation;
7. vector-assisted retrieval contracts;
8. worktree execution policy;
9. repo contract evaluation;
10. local-first verification tooling.

## 3. Locked Architectural Decisions

The repository should already contain accepted ADRs:

```text
ADR-0001 — Repository-Based Context Continuity
ADR-0002 — Clean-Room Architecture and Pattern Adoption
ADR-0003 — Foundry Control Plane
ADR-0004 — Canonical Repository Plus Vector Retrieval
ADR-0005 — Foundry Event Bus and Notification Router
ADR-0006 — Directive Compiler and Work Protocols
ADR-0007 — Multi-Agent Runtime and Role Separation
ADR-0008 — Worktree-Based Parallel Execution
ADR-0009 — Charon, SDLC, Factory, and Runtime Integration
ADR-0010 — Manifest-Driven Project Contracts
ADR-0011 — Work Packet Lifecycle
ADR-0012 — Context Pack and Handoff Lifecycle
ADR-0013 — Repo Contract Testing
ADR-0014 — Evaluation Harness for Context Continuity and Agent Execution
```

## 4. Locked Component Names

Core Charon names:

```text
Charon      = Context Bridge
Mnemosyne   = Canonical Memory Repository
Argos       = Semantic Retrieval Index
Anamnesis   = Rehydration Engine
```

Supporting Charon names:

```text
Themis      = Policy and Governance Layer
Hephaestus  = Indexing and Build Pipeline
Athena      = Conflict and Drift Analyzer
Clio        = Session Chronicle
Daedalus    = Context Pack Assembler
```

## 5. Current System Shape

The project has progressed through:

```text
Milestone 0  — Architectural Lock
Milestone 1  — Repository Scaffold
Milestone 2  — Foundry Manifest and Control Plane Files
Milestone 3  — Charon Skeleton
Milestone 4  — AI SDLC Skeleton
Milestone 5  — Agent Runtime and Worktree Policies
Milestone 6  — Evaluation and Repo Contract Definitions
Milestone 7  — First Executable Repo Contract Checker
Milestone 8  — Initial Foundry Loop Artifacts
Milestone 9  — Handoff and Bootstrap Flow
Milestone 10 — V1.0 MVP Review
Post-V1 Milestone 1 — Maximal Local Tooling Baseline
```

The fresh session should verify actual repository state before assuming all files were committed.

## 6. Current Recommended Continuation Point

The current recommended continuation point is:

```text
Post-V1 Milestone 2 — Repo Contract Checker Hardening
```

The next milestone should consolidate and harden verification now that the maximal local tooling baseline exists.

## 7. What Was Just Decided

The project should use a maximal local-first tooling baseline before adding package-manager or runtime complexity.

The preferred tooling posture is:

```text
maximum local confidence
maximum repeatability
maximum repository hygiene
maximum verification coverage
minimum external dependency risk
zero cloud dependency
zero remote automation
zero Bazel
```

The project should not initialize Bun, Node, pnpm, npm, or other package tooling merely for its own sake.

Package tooling should be introduced only when a real CLI/runtime command surface justifies it.

## 8. Current Verification Command

If the maximal local tooling baseline has been applied, run:

```bash
tools/scripts/verify.sh
```

Expected result:

```text
All local verification checks passed.
```

If the maximal local tooling baseline has not yet been applied, run:

```bash
python evals/repo-contracts/check-repo-contracts.py
```

Expected result:

```text
Failed: 0
```

## 9. Current Active Handoff

The current active handoff should be:

```text
.charon/daedalus/handoff-packets/handoff-0005-chat-session-transfer.md
```

If that file does not exist, use this document as the active handoff.

## 10. Critical Project Rules

The fresh session must preserve these rules:

1. repository is canonical;
2. vector database is derived, not authoritative;
3. no automatic canonical memory promotion;
4. no leaked-code ingestion;
5. no Bazel by default;
6. no automatic remote push;
7. no automatic merge;
8. no external notifications by default;
9. no provider lock-in as architecture;
10. no destructive changes without explicit approval;
11. full file contents should be provided in coding walkthroughs;
12. new meaningful Markdown files need YAML frontmatter;
13. recommend atomic Conventional Commits at proper commit points.

## 11. User Preferences Relevant to Continuation

The user prefers:

1. exhaustive, tutorial-style guidance;
2. full file contents, not snippets, for coding walkthroughs;
3. being told exactly when action is required;
4. atomic Conventional Commit recommendations;
5. proceeding automatically with the best recommendation rather than asking among options;
6. no Bazel;
7. Markdown frontmatter and document versioning;
8. maximal refinement, safeguards, and strong wording.

## 12. Read These First in the Fresh Chat

The fresh session should ask the user to confirm these files exist locally, then read or be given their contents if needed:

```text
README.md
docs/ai/FRESH_CHAT_HANDOFF.md
docs/ai/BOOTSTRAP_PROMPT.md
docs/ai/CURRENT_STATE.md
.foundry/state/latest-status.md
.charon/daedalus/handoff-packets/handoff-0005-chat-session-transfer.md
docs/foundry/04-v1-mvp-review.md
docs/foundry/05-post-v1-tooling-baseline.md
evals/repo-contracts/run-repo-contracts.md
tools/README.md
tools/scripts/README.md
```

## 13. Immediate Fresh-Chat Task

The fresh session should begin by saying:

```text
We are continuing the Agentic Software Foundry after the maximal local tooling baseline. The next recommended milestone is Post-V1 Milestone 2 — Repo Contract Checker Hardening.
```

Then it should ask the user to run:

```bash
tools/scripts/verify.sh
```

If the command passes, continue to the hardening milestone.

If it fails, repair failures first.

## 14. Recommended Next Commit

If this handoff bundle is added before switching chats, use:

```text
docs(ai): add fresh chat transfer handoff
```

## 15. Fresh Chat Opening Prompt

Paste this into the fresh chat:

```text
You are continuing work on my Agentic Software Foundry repository.

Treat the repository as the canonical source of truth.

We are transferring from a previous long chat session. The previous session built the project from architectural lock through v1.0 local proof and then began post-v1 implementation readiness with a maximal local tooling baseline.

First, orient yourself from these files:

1. README.md
2. docs/ai/FRESH_CHAT_HANDOFF.md
3. docs/ai/BOOTSTRAP_PROMPT.md
4. docs/ai/CURRENT_STATE.md
5. .foundry/state/latest-status.md
6. .charon/daedalus/handoff-packets/handoff-0005-chat-session-transfer.md
7. docs/foundry/04-v1-mvp-review.md
8. docs/foundry/05-post-v1-tooling-baseline.md
9. tools/README.md
10. tools/scripts/README.md

The current recommended continuation point is:

Post-V1 Milestone 2 — Repo Contract Checker Hardening.

Before generating new files, tell me what local verification command I should run. If the maximal tooling baseline exists, the command should be:

tools/scripts/verify.sh

Expected result:

All local verification checks passed.

Preserve these rules:

- no Bazel;
- no automatic remote push;
- no automatic merge;
- no external notification sinks by default;
- no automatic canonical memory promotion;
- no leaked-code ingestion;
- repository is canonical;
- vector retrieval is derived;
- full file contents in walkthroughs;
- every meaningful Markdown file needs YAML frontmatter;
- recommend atomic Conventional Commits at the correct points.

Proceed tutorial-style and tell me exactly when I need to act.
```

## 16. Status

This file is the durable fresh-chat bridge for continuing the Agentic Software Foundry in a new session.
