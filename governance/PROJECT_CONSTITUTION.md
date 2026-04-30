---
title: "Project Constitution"
description: "Constitutional governance document defining non-negotiable principles and authority boundaries for the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - governance
  - constitution
  - policy
  - architecture
---

# Project Constitution

## 1. Purpose

This Project Constitution defines the governing principles of the Agentic Software Foundry.

The Foundry is not merely a software repository, coding assistant, template generator, memory system, workflow runner, or agent experiment.

It is a governance-grade, repo-canonical, vector-assisted, policy-gated, model-agnostic software engineering system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.

This constitution exists to preserve architectural intent, prevent drift, protect clean-room implementation, preserve human authority, and keep the project aligned with its founding purpose.

## 2. Authority

The human project owner is the final authority over:

1. project direction;
2. architectural commitments;
3. canonical memory admission;
4. project scope;
5. policy changes;
6. destructive operations;
7. release decisions;
8. external publication;
9. remote push approval;
10. final acceptance of major work.

AI agents, tools, scripts, templates, manifests, repo contracts, and evaluation harnesses may assist.

They do not become sovereign authorities.

## 3. Foundational Principle

The Foundry exists to make AI-assisted software work more serious, not less serious.

AI may accelerate planning, implementation, verification, documentation, retrieval, handoff, and scaffolding.

AI must not replace explicit architecture, human review, safety defaults, source control, verification, or policy.

## 4. Constitutional Identity

The Foundry is:

```text
repo-canonical
vector-assisted
policy-gated
model-agnostic
manifest-driven
event-recorded
work-packet-driven
context-pack-rehydrated
handoff-preserving
repo-contract-verified
clean-room compliant
human-governed
````

The Foundry is not:

```text
a provider-specific agent clone
a leaked-code derivative
a prompt collection only
a template repository only
an unbounded autonomous coding bot
a vector database product only
an IDE replacement
a CI/CD replacement
a system that treats generated output as trusted by default
```

## 5. Non-Negotiable Invariants

The following invariants are constitutional.

### 5.1 Repository-Canonical Truth

The repository is the durable source of truth.

The vector database, runtime state, generated summaries, provider memory, and event logs are secondary artifacts, indexes, projections, or evidence.

If the vector database and repository disagree, the repository wins.

### 5.2 Human Authority

The human project owner remains the final authority.

No agent, runtime, adapter, workflow, template, or policy engine may silently override the human project owner.

### 5.3 Clean-Room Implementation

The Foundry may learn from public ideas.

The Foundry must not copy protected implementation.

Leaked proprietary code, private implementation details, private prompts, private tests, private schemas, private comments, unauthorized secrets, and license-incompatible material are forbidden.

### 5.4 Explicit Over Implicit

Important behavior must be explicit.

The project prefers manifests, policies, ADRs, lifecycle states, event records, templates, source pointers, and repo contracts over hidden defaults.

### 5.5 No Silent Canonicalization

No generated note, chat message, retrieved result, session summary, event, handoff, or context pack becomes canonical memory merely because it exists.

Canonical memory requires admission.

### 5.6 Verification Before Completion

A work packet is not complete merely because files were created or changed.

Completion requires verification or an explicit, honest record of why verification could not be completed.

### 5.7 Safe-by-Default Automation

The Foundry defaults to:

1. local-first operation;
2. no automatic remote push;
3. no automatic merge;
4. no external notification delivery by default;
5. no automatic canonical memory promotion;
6. no destructive file changes without explicit instruction or policy approval;
7. no unbounded autonomous loops.

### 5.8 Model Agnosticism

The Foundry must not be architecturally dependent on a single AI provider, model, IDE, coding agent, or external runtime.

Provider-specific behavior belongs behind adapters.

### 5.9 Source Traceability

Important claims, context inclusions, memory candidates, retrieval results, scaffold outputs, and work-packet decisions should be traceable to repository artifacts where practical.

### 5.10 No Silent Drift

Any meaningful change to architecture, policy, memory, scope, runtime behavior, scaffolding rules, safety defaults, or system identity must be explicit, documented, and reviewable.

## 6. System Boundaries

The Foundry is composed of cooperating systems with distinct responsibilities.

```text
Foundry Control Plane
= coordinates

Charon
= remembers and rehydrates context

AI SDLC Framework
= structures work

Monorepo Factory
= generates repeatable project artifacts

Event Bus and Notification Router
= records and routes activity

Multi-Agent Runtime
= separates responsibility

Vector Retrieval Layer
= accelerates semantic recall

Worktree Execution Model
= isolates future parallel work

Evaluation Harness
= proves behavior

Governance and Policy Layer
= constrains behavior

Adapter Layer
= integrates external tools

Tutorial Documentation System
= teaches and preserves build knowledge
```

No subsystem may silently absorb the responsibilities of another subsystem.

## 7. Charon Constitutional Rules

Charon is the Context Bridge.

Charon owns:

1. canonical memory;
2. memory candidates;
3. session chronicles;
4. context packs;
5. handoff packets;
6. rehydration rules;
7. retrieval contracts;
8. source provenance;
9. trust levels;
10. conflict and drift analysis.

Charon must not become:

1. the monorepo generator;
2. the entire runtime orchestrator;
3. the unrestricted implementation engine;
4. the event router;
5. the final human authority.

Charon must preserve the distinction between:

```text
raw session material
memory candidate
canonical memory
superseded memory
context pack
handoff packet
retrieval index
```

## 8. AI SDLC Constitutional Rules

The AI SDLC Framework owns disciplined work execution.

It must preserve the distinction between:

```text
directive
work packet
implementation
verification
documentation
commit
handoff
closure
```

A directive is intent.

A work packet is scope.

A protocol is discipline.

Verification is completion evidence.

A commit is the durable project record.

The AI SDLC Framework must not allow short directives to become unbounded implementation permission.

## 9. Monorepo Factory Constitutional Rules

The Monorepo Factory generates repeatable project artifacts.

Generated scaffolds must be:

1. profile-aware;
2. manifest-backed;
3. provenance-aware;
4. repo-contract verifiable;
5. safe-by-default;
6. clean-room compliant.

A scaffold is not valid merely because files exist.

A scaffold is valid only when it satisfies its declared contract.

The Factory must not overwrite user-authored files without policy approval.

## 10. Foundry Control Plane Constitutional Rules

The Foundry Control Plane coordinates.

It may own:

1. manifests;
2. run records;
3. event locations;
4. adapter registry;
5. policy-gate coordination;
6. latest status;
7. worktree metadata;
8. runtime state pointers.

It must not own:

1. canonical memory;
2. final policy authority;
3. template internals;
4. generated application logic;
5. provider-specific foundations;
6. work-packet semantics.

The Control Plane must coordinate through explicit artifacts.

## 11. Event Bus Constitutional Rules

Events record what happened.

Events are not canonical memory by default.

The Event Bus and Notification Router must preserve this separation:

```text
event
route
renderer
sink
status
```

External notification sinks must be disabled by default.

Notification delivery must not be treated as work completion.

## 12. Multi-Agent Runtime Constitutional Rules

The Foundry must preserve role separation.

No single agent should be trusted to plan, implement, verify, approve, canonicalize, and publish its own work without separation of responsibility.

Initial role boundaries:

```text
Architect   = plan and architecture alignment
Executor    = scoped implementation
Reviewer    = critique and scope review
Verifier    = evidence and checks
Librarian   = documentation and memory candidates
Operator    = status and human-facing run visibility
Policy Gate = approval boundary
Human Owner = final authority
```

Full autonomous multi-agent execution is deferred until after the local Foundry loop is proven.

## 13. Vector Retrieval Constitutional Rules

The vector database is a retrieval accelerator.

It is not the source of truth.

Every vector entry must point back to a repository artifact.

No orphan vectors are allowed.

Retrieval results must preserve trust, lifecycle, and source-pointer metadata where practical.

## 14. Worktree Constitutional Rules

Worktrees isolate future parallel execution.

They do not make work trusted.

Default future model:

```text
one work packet
→ one branch
→ one worktree
→ one run
→ one verification loop
→ one review decision
```

No automatic remote push.

No automatic merge.

No silent deletion of uncommitted work.

No worktree observation becomes canonical memory automatically.

## 15. Evaluation Constitutional Rules

A Foundry capability is not mature until it can be evaluated.

Repo contract testing is the first evaluation category.

Evaluations should eventually cover:

1. repository structure;
2. context continuity;
3. directive compilation;
4. work-packet lifecycle;
5. context-pack quality;
6. handoff quality;
7. event routing;
8. manifest consistency;
9. vector retrieval;
10. memory admission;
11. policy compliance;
12. scaffold correctness;
13. agent coordination;
14. worktree execution.

## 16. Documentation Constitutional Rules

Documentation is part of the product.

The Foundry must be built tutorial-style.

Every major step should explain:

1. where the step fits;
2. what problem it solves;
3. what files are created;
4. why they exist;
5. how to verify the result;
6. when to commit;
7. what Conventional Commit message to use;
8. what comes next.

Documentation must align with ADRs, manifests, policies, repo contracts, and actual implementation.

## 17. Commit Constitutional Rules

The Foundry should be built through atomic Conventional Commits.

A commit should represent one coherent durable change.

Commit messages should describe the durable project artifact, not merely the chat instruction.

Examples:

```text
docs(foundry): define project constitution
docs(adr): define repo contract testing
chore(scaffold): add initial foundry repository structure
test(repo): add initial repo contract checker
feat(foundry): add event writer
```

## 18. Forbidden Defaults

The following are forbidden by default:

1. Bazel configuration files;
2. leaked-code ingestion;
3. automatic remote push;
4. automatic merge;
5. external notification delivery without policy;
6. silent canonical memory promotion;
7. unreviewed destructive file change;
8. generated output trusted as canonical;
9. orphan vector entries;
10. provider lock-in as architecture.

These defaults may only change through explicit documented decision and human approval.

## 19. Policy Gates

The following require policy gates:

1. canonical memory promotion;
2. architecture amendment;
3. clean-room policy amendment;
4. project constitution amendment;
5. destructive file deletion;
6. dependency addition;
7. external notification enablement;
8. remote push automation;
9. automatic merge enablement;
10. release publication;
11. secret handling;
12. external code reuse;
13. aggressive autonomous execution.

For v1.0, policy gates may be manual.

They must still be explicit.

## 20. Amendment Rule

This constitution may be amended only through explicit documented change.

An amendment must:

1. state the reason;
2. identify affected sections;
3. identify related ADRs;
4. identify safety implications;
5. identify whether repo contracts or manifests must change;
6. be committed atomically.

Recommended commit format:

```text
docs(governance): amend project constitution for <reason>
```

## 21. Initial Constitutional Status

This constitution is active from the beginning of the Agentic Software Foundry project.

It governs all future architecture, scaffolding, implementation, documentation, runtime behavior, memory handling, pattern adoption, and verification.

The Foundry may evolve.

It must not drift silently.

