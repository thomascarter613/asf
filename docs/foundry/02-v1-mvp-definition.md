---
title: "V1.0 MVP Definition"
description: "Defines the minimum viable product boundary and milestone sequence for the Agentic Software Foundry v1.0."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - mvp
  - roadmap
  - v1
---

# V1.0 MVP Definition

## 1. Purpose

This document defines the v1.0 minimum viable product for the Agentic Software Foundry.

The purpose of v1.0 is not to build every future subsystem. The purpose of v1.0 is to prove the smallest complete Foundry loop end to end.

The v1.0 MVP must demonstrate that a human directive can become structured, contextualized, executed or simulated, verified, recorded, handed off, and resumed through repository-backed artifacts.

The MVP is successful when the repository proves that the Foundry architecture is real enough to operate locally, even if many advanced automations remain deferred.

## 2. Product Thesis for V1.0

The v1.0 thesis is:

> A serious AI-assisted software project can preserve continuity, structure work, record evidence, and resume across sessions by using repository-backed artifacts before it needs full autonomous agents, a production vector database, a daemon, external notifications, or a web UI.

V1.0 should prove the architecture.

It should not try to become the final platform.

## 3. MVP North Star

The v1.0 MVP must prove this loop:

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

If this loop works locally, the Foundry has a real foundation.

## 4. V1.0 Definition of Done

V1.0 is done when a user can perform one complete local Foundry loop and verify that all required artifacts exist.

The completed loop must show:

1. a human directive was captured;
2. the directive became a work packet;
3. the work packet identified scope, non-goals, context, verification, and commit guidance;
4. a context pack was assembled for the work;
5. a run record was created;
6. events were written to the local event log;
7. a verification record was produced;
8. a session chronicle was written;
9. at least one memory candidate was created;
10. a handoff packet was generated;
11. latest project status was updated;
12. repo contract tests verified the required structure;
13. the work was committed with an atomic Conventional Commit.

## 5. V1.0 Scope

The v1.0 MVP includes the following.

### 5.1 Repository Foundation

The repository must contain:

1. Foundry charter;
2. clean-room policy;
3. accepted ADR set;
4. v1.0 MVP definition;
5. Foundry Control Plane scaffold;
6. Charon scaffold;
7. AI SDLC scaffold;
8. template scaffold;
9. evaluation scaffold;
10. repo contract definitions.

### 5.2 Foundry Control Plane

V1.0 must include:

```text
.foundry/
├── README.md
├── manifests/
│   └── foundry.project.json
├── events/
│   ├── README.md
│   ├── events.jsonl
│   └── schemas/
├── router/
│   ├── README.md
│   └── routes.json
├── runs/
│   └── README.md
├── agents/
│   └── README.md
├── worktrees/
│   └── README.md
├── adapters/
│   └── README.md
├── policies/
│   └── README.md
└── state/
    ├── README.md
    └── latest-status.md
```

The Control Plane does not need a daemon in v1.0.

It must provide local file-backed coordination artifacts.

### 5.3 Charon Context Continuity

V1.0 must include:

```text
.charon/
├── README.md
├── mnemosyne/
│   ├── README.md
│   ├── canonical/
│   ├── candidates/
│   └── superseded/
├── clio/
│   ├── README.md
│   └── sessions/
├── argos/
│   ├── README.md
│   ├── retrieval-policy.md
│   ├── chunking-policy.md
│   ├── ranking-policy.md
│   ├── index-manifest.json
│   └── query-contract.json
├── hephaestus/
│   ├── README.md
│   ├── indexing-pipeline.md
│   ├── embedding-policy.md
│   ├── reindexing-policy.md
│   └── source-artifact-manifest.json
├── anamnesis/
│   ├── README.md
│   └── rehydration-rules.md
├── daedalus/
│   ├── README.md
│   ├── context-packs/
│   │   ├── README.md
│   │   └── context-pack-template.md
│   └── handoff-packets/
│       ├── README.md
│       └── handoff-packet-template.md
├── athena/
│   ├── README.md
│   ├── conflict-rules.md
│   └── drift-rules.md
└── themis/
    ├── README.md
    ├── memory-admission-policy.md
    ├── redaction-policy.md
    └── trust-levels.md
```

The vector database does not need to be production-ready in v1.0.

Argos and Hephaestus must define the retrieval and indexing contracts.

### 5.4 AI SDLC Framework

V1.0 must include:

```text
.sdlc/
├── README.md
├── directives/
│   └── README.md
├── work-packets/
│   ├── README.md
│   ├── work-packet-template.md
│   ├── drafts/
│   ├── active/
│   ├── completed/
│   └── superseded/
├── protocols/
│   ├── README.md
│   ├── default-work-protocol.md
│   ├── documentation-work-protocol.md
│   ├── implementation-work-protocol.md
│   └── verification-work-protocol.md
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

The Directive Compiler may be manual or template-driven in v1.0.

Full natural-language automation is deferred.

### 5.5 Agent Runtime Skeleton

V1.0 must include:

```text
.foundry/agents/
├── README.md
├── roles/
│   ├── architect.md
│   ├── executor.md
│   ├── reviewer.md
│   ├── verifier.md
│   ├── librarian.md
│   └── operator.md
├── capabilities/
│   ├── README.md
│   └── default-capabilities.md
├── routing/
│   ├── README.md
│   └── routing-policy.md
├── disagreement/
│   ├── README.md
│   └── disagreement-protocol.md
└── handoffs/
    ├── README.md
    └── agent-handoff-template.md
```

V1.0 does not require real autonomous multi-agent execution.

It requires explicit role boundaries.

### 5.6 Worktree Execution Skeleton

V1.0 must include:

```text
.foundry/worktrees/
├── README.md
├── worktree-policy.md
├── allocation-policy.md
├── cleanup-policy.md
└── worktree-manifest.example.json
```

V1.0 does not require automatic worktree creation.

It requires the policy and structure for future worktree-based isolation.

### 5.7 Event Bus and Notification Router

V1.0 must include:

1. local JSONL event log;
2. local route config;
3. latest status artifact;
4. console/filesystem sink concept;
5. no external notification sinks enabled by default.

Required files:

```text
.foundry/events/events.jsonl
.foundry/router/routes.json
.foundry/state/latest-status.md
```

### 5.8 Evaluation Harness

V1.0 must include:

```text
evals/
├── README.md
└── repo-contracts/
    ├── README.md
    ├── repo-contract.manifest.json
    ├── required-paths.json
    ├── forbidden-paths.json
    └── required-manifest-fields.json
```

Before v1.0 is complete, there should be a simple executable repo contract checker.

The first checker may be implemented in TypeScript, Python, shell, Go, or Rust. The implementation language will be selected during the tooling milestone.

### 5.9 Templates Area

V1.0 must include:

```text
templates/
└── README.md
```

The Monorepo Factory does not need to generate complete production monorepos in v1.0.

It must reserve the template boundary and document its role.

## 6. V1.0 Non-Goals

The following are explicitly out of scope for v1.0:

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
11. multi-user authentication;
12. cloud deployment;
13. plugin marketplace;
14. full monorepo generator implementation;
15. full natural-language directive compiler;
16. self-launching agent teams;
17. automatic canonical memory promotion;
18. automatic release publication.

These may be future milestones.

They are not v1.0 requirements.

## 7. Safety Defaults

V1.0 must be safe-by-default.

Required defaults:

1. local-first operation;
2. no automatic remote push;
3. no automatic merge;
4. no external notification sink by default;
5. no canonical memory promotion without admission;
6. no destructive file operation without explicit instruction;
7. no leaked-code ingestion;
8. no provider lock-in;
9. no unbounded autonomous loops;
10. no secrets in manifests;
11. no Bazel files by default.

These defaults must be represented in the project manifest and repo contract tests.

## 8. Primary V1.0 Demonstration

The primary demonstration should be called:

```text
Initial Foundry Loop
```

The demonstration should begin with a directive such as:

```text
Create a sample Foundry status artifact proving the local loop.
```

The demo should produce:

```text
.sdlc/directives/dir-0001-initial-foundry-loop.md
.sdlc/work-packets/active/wp-0001-initial-foundry-loop.md
.charon/daedalus/context-packs/ctx-0001-initial-foundry-loop.md
.foundry/runs/run-0001-initial-foundry-loop/run.md
.sdlc/verification/verification-0001-initial-foundry-loop.md
.charon/clio/sessions/session-0001-initial-foundry-loop.md
.charon/mnemosyne/candidates/candidate-0001-initial-foundry-loop.md
.charon/daedalus/handoff-packets/handoff-0001-initial-foundry-loop.md
.foundry/state/latest-status.md
```

It should also write events to:

```text
.foundry/events/events.jsonl
```

## 9. Required Events for the Demo Loop

The initial demo should record at least these events:

```text
directive.received
work_packet.created
context_pack.generated
run.started
verification.recorded
session_chronicle.written
memory_candidate.created
handoff.generated
run.completed
```

These may be written manually at first.

A later implementation should automate event writing.

## 10. Required Verification for the Demo Loop

The initial demo must verify:

1. required Foundry files exist;
2. required Charon files exist;
3. required SDLC files exist;
4. required evaluation files exist;
5. required governance files exist;
6. project manifest exists;
7. no Bazel config files exist;
8. latest status exists;
9. handoff packet exists;
10. context pack exists.

This can be manual first, then scripted.

## 11. V1.0 Milestone Sequence

The recommended milestone sequence is:

```text
Milestone 0 — Architectural Lock
Milestone 1 — Repository Scaffold
Milestone 2 — Foundry Manifest and Control Plane Files
Milestone 3 — Charon Skeleton
Milestone 4 — AI SDLC Skeleton
Milestone 5 — Agent Runtime and Worktree Policies
Milestone 6 — Evaluation and Repo Contract Definitions
Milestone 7 — First Executable Repo Contract Checker
Milestone 8 — Initial Foundry Loop Artifacts
Milestone 9 — Handoff and Bootstrap Flow
Milestone 10 — V1.0 MVP Review
```

## 12. Milestone 0 Completion Criteria

Milestone 0 is complete when the repository contains:

1. Foundry charter;
2. clean-room policy;
3. ADR-0001 through ADR-0014;
4. v1.0 MVP definition;
5. all artifacts committed atomically.

No runtime code is required for Milestone 0.

## 13. Milestone 1 Completion Criteria

Milestone 1 is complete when the repository contains:

1. `.foundry/`;
2. `.charon/`;
3. `.sdlc/`;
4. `templates/`;
5. `evals/`;
6. initial README files;
7. `.gitkeep` files where needed;
8. no runtime implementation yet unless required for verification.

Recommended commit:

```text
chore(scaffold): add initial foundry repository structure
```

## 14. Milestone 2 Completion Criteria

Milestone 2 is complete when the repository contains:

1. `.foundry/manifests/foundry.project.json`;
2. `.foundry/events/events.jsonl`;
3. `.foundry/router/routes.json`;
4. `.foundry/state/latest-status.md`;
5. basic Foundry Control Plane README documentation.

Recommended commit:

```text
chore(foundry): add project manifest and local control plane files
```

## 15. Milestone 3 Completion Criteria

Milestone 3 is complete when the repository contains the Charon skeleton:

1. Mnemosyne directories;
2. Clio directories;
3. Argos retrieval policy files;
4. Hephaestus indexing policy files;
5. Anamnesis rehydration rules;
6. Daedalus context-pack and handoff templates;
7. Athena conflict and drift rules;
8. Themis trust, redaction, and admission policy files.

Recommended commit:

```text
chore(charon): add context continuity skeleton
```

## 16. Milestone 4 Completion Criteria

Milestone 4 is complete when the repository contains the AI SDLC skeleton:

1. directive directory;
2. work packet template;
3. work packet state directories;
4. protocol documents;
5. verification record template;
6. review and implementation checklists;
7. commit-plan directory;
8. retrospectives directory.

Recommended commit:

```text
chore(sdlc): add work packet and protocol skeleton
```

## 17. Milestone 5 Completion Criteria

Milestone 5 is complete when the repository contains:

1. agent role documents;
2. default capabilities;
3. routing policy;
4. disagreement protocol;
5. agent handoff template;
6. worktree policy;
7. allocation policy;
8. cleanup policy;
9. example worktree manifest.

Recommended commit:

```text
chore(runtime): add agent role and worktree policy skeleton
```

## 18. Milestone 6 Completion Criteria

Milestone 6 is complete when the repository contains:

1. `evals/README.md`;
2. `evals/repo-contracts/README.md`;
3. repo contract manifest;
4. required paths contract;
5. forbidden paths contract;
6. required manifest fields contract.

Recommended commit:

```text
chore(evals): add repo contract definitions
```

## 19. Milestone 7 Completion Criteria

Milestone 7 is complete when a local command can verify the initial repo contract.

The command should check at least:

1. required paths;
2. forbidden paths;
3. manifest exists;
4. critical manifest fields.

Recommended commit:

```text
test(repo): add initial repo contract checker
```

## 20. Milestone 8 Completion Criteria

Milestone 8 is complete when the Initial Foundry Loop artifacts exist:

1. directive record;
2. work packet;
3. context pack;
4. run record;
5. verification record;
6. session chronicle;
7. memory candidate;
8. handoff packet;
9. latest status update;
10. event log entries.

Recommended commit:

```text
docs(foundry): add initial foundry loop artifacts
```

## 21. Milestone 9 Completion Criteria

Milestone 9 is complete when the repository contains:

1. handoff packet suitable for a new session;
2. bootstrap guidance;
3. current-state summary;
4. next recommended action;
5. repo contract verification result.

Recommended commit:

```text
docs(ai): add bootstrap and handoff guidance
```

## 22. Milestone 10 Completion Criteria

Milestone 10 is complete when:

1. all v1.0 required files exist;
2. repo contract checker passes;
3. initial Foundry loop is documented;
4. handoff packet exists;
5. next milestone is identified;
6. README explains project purpose and local verification.

Recommended commit:

```text
docs(foundry): complete v1 mvp review
```

## 23. V1.0 Acceptance Checklist

V1.0 is accepted when all of the following are true:

```text
[ ] Foundry charter exists.
[ ] Clean-room policy exists.
[ ] ADR-0001 through ADR-0014 exist.
[ ] V1.0 MVP definition exists.
[ ] .foundry scaffold exists.
[ ] .charon scaffold exists.
[ ] .sdlc scaffold exists.
[ ] templates scaffold exists.
[ ] evals scaffold exists.
[ ] Project manifest exists.
[ ] Safe defaults are declared.
[ ] No Bazel config files exist.
[ ] Event log exists.
[ ] Latest status exists.
[ ] Work packet template exists.
[ ] Context pack template exists.
[ ] Handoff packet template exists.
[ ] Repo contract definitions exist.
[ ] Repo contract checker exists.
[ ] Initial Foundry Loop artifacts exist.
[ ] Verification record exists.
[ ] Handoff packet exists.
[ ] New-session bootstrap guidance exists.
[ ] Final v1.0 repo contract check passes.
```

## 24. What V1.0 Proves

V1.0 proves:

1. the Foundry has a coherent architecture;
2. the repository can hold durable project state;
3. the system can preserve continuity without relying on provider memory;
4. work can be structured through work packets;
5. context can be prepared through context packs;
6. progress can be preserved through handoffs;
7. events can record project activity;
8. repo contracts can verify structure;
9. the architecture is implementable in local-first form;
10. the system can be built tutorial-style.

## 25. What V1.0 Does Not Prove

V1.0 does not prove:

1. full autonomous coding;
2. production-grade multi-agent execution;
3. production vector retrieval quality;
4. large-scale project generation;
5. cloud operation;
6. team collaboration;
7. external notifications;
8. CI/CD maturity;
9. release automation;
10. enterprise readiness.

Those require later milestones.

## 26. V1.0 Quality Bar

V1.0 should be:

1. coherent;
2. local-first;
3. safe-by-default;
4. documented;
5. inspectable;
6. committed atomically;
7. repo-contract verified;
8. clean-room compliant;
9. model-agnostic;
10. tutorial-ready.

It does not need to be flashy.

It needs to be solid.

## 27. V1.0 Commit Discipline

Every v1.0 milestone should end with an atomic Conventional Commit.

Commit examples:

```text
docs(foundry): define v1 mvp boundary
chore(scaffold): add initial foundry repository structure
chore(foundry): add project manifest and local control plane files
chore(charon): add context continuity skeleton
chore(sdlc): add work packet and protocol skeleton
chore(runtime): add agent role and worktree policy skeleton
chore(evals): add repo contract definitions
test(repo): add initial repo contract checker
docs(foundry): add initial foundry loop artifacts
docs(ai): add bootstrap and handoff guidance
docs(foundry): complete v1 mvp review
```

## 28. V1.0 Risk Register

### 28.1 Risk: Overbuilding

Mitigation:

Build only the local loop first.

### 28.2 Risk: Documentation Without Operation

Mitigation:

Add repo contract tests and the Initial Foundry Loop artifacts before calling v1.0 complete.

### 28.3 Risk: Context Bloat

Mitigation:

Use task-specific context packs and handoffs.

### 28.4 Risk: Fake Verification

Mitigation:

Record verification status honestly, including `not-run` or `manual`.

### 28.5 Risk: Architecture Drift

Mitigation:

Use manifests and repo contract tests.

### 28.6 Risk: Unsafe Autonomy

Mitigation:

Keep v1.0 human-directed and safe-by-default.

### 28.7 Risk: Tool Lock-In

Mitigation:

Use adapters later; keep v1.0 model-agnostic.

### 28.8 Risk: Leaked or Unauthorized Material

Mitigation:

Follow the Clean-Room Pattern Adoption Policy.

## 29. Post-V1.0 Direction

After v1.0, the next major direction should be implementation of the first real runtime capabilities:

1. executable repo contract checker;
2. event writer library;
3. directive-to-work-packet helper;
4. context-pack generator;
5. handoff generator;
6. local vector adapter stub;
7. CLI command surface;
8. tutorial documentation site;
9. Monorepo Factory profile for Foundry-ready repos;
10. optional worktree command support.

## 30. Status

This document defines the v1.0 MVP boundary for the Agentic Software Foundry.

Any attempt to expand v1.0 beyond this boundary should be treated as scope expansion and should either be rejected, deferred, or documented through a new work packet and decision.

V1.0 is not the final product.

V1.0 is the first proof that the Foundry loop works.
