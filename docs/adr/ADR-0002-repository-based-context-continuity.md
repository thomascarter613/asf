---
title: "ADR-0002: Repository-Based Context Continuity"
description: "Accepts repository-backed context continuity as the canonical memory foundation for the Foundry."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0002"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - charon
  - context-continuity
---

# ADR-0001: Repository-Based Context Continuity

## Status

Accepted

## Date

2026-04-28

## Decision Owner

Project Owner

## Related Documents

- `docs/foundry/00-foundry-charter.md`
- `governance/CLEAN_ROOM_POLICY.md`

## 1. Context

AI-assisted software development is powerful but fragile when project context lives only inside a chat session, model memory, IDE extension, vendor-specific agent runtime, or temporary prompt history.

A serious long-running project requires durable continuity across:

1. new chat sessions;
2. new AI tools;
3. different model providers;
4. local and remote development environments;
5. human review cycles;
6. architectural revisions;
7. implementation milestones;
8. documentation updates;
9. verification results;
10. handoff events.

The Agentic Software Foundry needs a context continuity model that preserves important project truth without treating every conversation fragment as authoritative.

The Foundry must support memory, retrieval, rehydration, handoff, and project continuity while remaining model-agnostic and auditable.

## 2. Problem

AI tools commonly lose or distort project context because their working memory is bounded, temporary, provider-specific, and difficult to audit.

This creates several recurring problems.

### 2.1 Session Discontinuity

When a chat or agent session ends, the next session may not know:

1. what the project is;
2. what decisions were already made;
3. what work was completed;
4. what work remains;
5. which options were rejected;
6. what constraints are non-negotiable;
7. what files exist;
8. what verification results matter;
9. what the next correct action is;
10. what context is stale or superseded.

### 2.2 Unreviewed Memory

A model may remember or infer something incorrectly.

If unreviewed memories become durable context automatically, future work can drift away from the actual project intent.

### 2.3 Vendor Lock-In

Provider-specific memory systems are useful, but they are not sufficient as the Foundry’s canonical continuity layer.

The Foundry must support multiple tools and models.

### 2.4 Context Bloat

Loading all historical notes into every new session is wasteful and dangerous.

The system needs focused, task-specific context packs rather than unbounded memory dumps.

### 2.5 Weak Auditability

If project memory lives only in a vendor-side memory system or opaque agent runtime, it is difficult to inspect, diff, review, branch, revert, or cite.

## 3. Decision

The Agentic Software Foundry will use a **repository-based context continuity model**.

The repository is the canonical substrate for durable project context.

Charon, the Foundry’s Context Bridge, will store canonical memory, session chronicles, context packs, handoff packets, memory candidates, policies, indexes, and related context artifacts in repository files.

A vector database may supplement the repository as a retrieval accelerator, but it will not be the source of truth.

The repository is authoritative.

The vector index is derived.

The chat session is temporary.

The model is replaceable.

## 4. Decision Summary

The Foundry will use the following hierarchy:

```text
Repository
= canonical truth substrate

Vector database
= semantic retrieval index over repository artifacts

Runtime state
= temporary execution state

Chat/model context
= ephemeral reasoning workspace

Generated summaries
= derived artifacts requiring review before becoming canonical
````

The Foundry will implement context continuity through Charon.

Charon will include:

```text
Mnemosyne
= canonical memory repository

Clio
= session chronicles and task records

Argos
= semantic retrieval index and retrieval contracts

Hephaestus
= indexing and embedding pipeline

Anamnesis
= rehydration engine

Daedalus
= context-pack and handoff compiler

Athena
= conflict, drift, and supersession analyzer

Themis
= policy, trust, admission, redaction, and governance layer
```

## 5. Architectural Principles

### 5.1 Repository-Canonical Truth

The repository is the durable source of truth for project context.

If the vector database, runtime cache, or generated summaries are deleted, the system should be able to rebuild or regenerate them from repository artifacts where practical.

### 5.2 Human-Reviewable Memory

Important project memory must be stored in human-readable files whenever possible.

Markdown, JSON, YAML, and other inspectable text formats are preferred for v1.0.

### 5.3 Explicit Memory Admission

No chat message, generated note, retrieved result, or agent-produced summary becomes canonical merely because it exists.

Candidate memories must pass through an admission process before becoming canonical.

### 5.4 Task-Specific Rehydration

New sessions should not load all memory.

The system should assemble context packs based on the current task, project scope, trust level, recency, relevance, and context budget.

### 5.5 Model Agnosticism

Context continuity must not depend on a single AI provider.

The same repository-backed memory should support ChatGPT, Claude, Codex-like tools, IDE agents, local models, and future systems through adapters.

### 5.6 Traceability

Important context artifacts should be traceable to their source.

A canonical memory should be able to identify where it came from, when it was admitted, why it was trusted, and whether it supersedes or is superseded by another memory.

### 5.7 Rebuildable Retrieval

The vector database is a derived index.

Every vector entry should reference a repository artifact, file path, content hash, commit, chunk, memory ID, or other durable source pointer.

No orphan vectors are allowed.

## 6. Charon Context Layers

Charon will distinguish between several context layers.

### 6.1 Raw Session Material

Raw session material includes conversation notes, tool outputs, working observations, partial reasoning summaries, task logs, and unresolved discussion.

Raw session material is useful but not canonical.

Expected location:

```text
.charon/clio/sessions/
```

### 6.2 Memory Candidates

Memory candidates are proposed durable memories.

They may come from:

1. session summaries;
2. agent observations;
3. user decisions;
4. completed work packets;
5. architecture notes;
6. verification results;
7. retrospectives;
8. handoff packets.

Memory candidates must be reviewed before admission.

Expected location:

```text
.charon/mnemosyne/candidates/
```

### 6.3 Canonical Memory

Canonical memory contains admitted project truth.

It may include:

1. project identity;
2. architecture decisions;
3. user preferences;
4. system invariants;
5. terminology;
6. active constraints;
7. accepted patterns;
8. rejected patterns;
9. active project state;
10. durable implementation facts.

Expected location:

```text
.charon/mnemosyne/canonical/
```

### 6.4 Superseded Memory

Superseded memory remains available for audit but must not be treated as active truth.

Expected location:

```text
.charon/mnemosyne/superseded/
```

### 6.5 Context Packs

Context packs are task-specific bundles assembled for a specific session, agent run, or work packet.

Expected location:

```text
.charon/daedalus/context-packs/
```

### 6.6 Handoff Packets

Handoff packets summarize current state, completed work, open risks, next actions, verification status, and context needed for a future session.

Expected location:

```text
.charon/daedalus/handoff-packets/
```

### 6.7 Retrieval Index Contracts

Retrieval metadata, chunking policies, ranking policies, and index manifests live in the repository even when embeddings live in an external vector database.

Expected location:

```text
.charon/argos/
.charon/hephaestus/
```

## 7. Memory Lifecycle

The Foundry will use the following memory lifecycle:

```text
captured
→ candidate
→ reviewed
→ admitted
→ canonical
→ superseded
→ archived
```

Rejected memories follow a separate path:

```text
captured
→ candidate
→ reviewed
→ rejected
```

The lifecycle exists to prevent accidental promotion of unverified context into durable truth.

## 8. Trust Levels

Context artifacts should support trust levels.

Initial trust levels:

```text
canonical
human-approved
verified
generated
inferred
candidate
external
stale
superseded
disputed
rejected
```

Context packs should prefer higher-trust sources.

Disputed, stale, superseded, or rejected material may be included only when relevant and clearly labeled.

## 9. Vector Retrieval Position

The Foundry will supplement repository-backed context with vector-assisted retrieval.

The vector database is useful for:

1. semantic search;
2. similarity matching;
3. context discovery;
4. finding related decisions;
5. locating prior work;
6. recovering relevant memories;
7. assembling context packs;
8. detecting possible duplicate or conflicting memories.

The vector database is not authoritative.

The vector database must not contain canonical context that cannot be traced back to repository artifacts.

If the vector database and repository disagree, the repository wins.

## 10. Context Pack Requirements

A context pack must be explicit about what it includes.

A context pack should identify:

1. purpose;
2. target task;
3. source files;
4. included memories;
5. included ADRs;
6. included work packets;
7. included chronicles;
8. excluded material;
9. stale or disputed material;
10. token or size budget;
11. generated timestamp;
12. generation method.

A context pack is not canonical memory.

It is a derived task-specific artifact.

## 11. Handoff Packet Requirements

A handoff packet should include:

1. project identity;
2. current milestone;
3. completed work;
4. active work packet;
5. modified files;
6. verification results;
7. open issues;
8. risks;
9. next recommended action;
10. relevant context pack;
11. memory candidates produced;
12. commit recommendation;
13. instructions for starting a new session.

A handoff packet helps preserve continuity but does not automatically become canonical memory.

## 12. Repository Layout Implications

This ADR implies the future creation of the following directory structure:

```text
.charon/
├── mnemosyne/
│   ├── canonical/
│   ├── candidates/
│   ├── superseded/
│   └── README.md
├── clio/
│   ├── sessions/
│   ├── task-runs/
│   └── README.md
├── argos/
│   ├── retrieval-policy.md
│   ├── chunking-policy.md
│   ├── ranking-policy.md
│   ├── index-manifest.json
│   └── README.md
├── hephaestus/
│   ├── indexing-pipeline.md
│   ├── embedding-policy.md
│   ├── reindexing-policy.md
│   └── README.md
├── anamnesis/
│   ├── rehydration-rules.md
│   └── README.md
├── daedalus/
│   ├── context-packs/
│   ├── handoff-packets/
│   ├── context-pack-template.md
│   └── README.md
├── athena/
│   ├── conflict-rules.md
│   ├── drift-rules.md
│   └── README.md
└── themis/
    ├── memory-admission-policy.md
    ├── redaction-policy.md
    ├── trust-levels.md
    └── README.md
```

The exact structure may evolve through later ADRs, but the core responsibility boundaries are accepted by this decision.

## 13. Alternatives Considered

### 13.1 Provider-Native Memory Only

The Foundry could rely on AI-provider memory features.

This was rejected because provider-native memory is not sufficiently portable, auditable, versioned, reviewable, or project-controlled.

Provider-native memory may be useful as an adapter target, but it cannot be the Foundry’s canonical continuity layer.

### 13.2 Vector Database as Source of Truth

The Foundry could store memory primarily in a vector database.

This was rejected because vector databases are poor canonical truth stores.

They are excellent retrieval accelerators, but they are not ideal for human review, diffs, branching, provenance, or long-term governance.

### 13.3 Chat Transcript as Source of Truth

The Foundry could treat raw transcripts as the durable context record.

This was rejected because transcripts are too noisy, too large, too ambiguous, and too full of temporary reasoning, rejected ideas, and outdated assumptions.

Transcripts may be source evidence, but they are not canonical memory.

### 13.4 Documentation Files Only, No Retrieval Layer

The Foundry could store everything in Markdown and rely only on manual reading.

This was rejected because serious projects will eventually need semantic retrieval, similarity search, context discovery, and targeted rehydration.

The accepted model is repository-canonical plus vector-assisted.

### 13.5 Database-First Memory

The Foundry could store canonical memory in a relational or document database.

This was rejected for v1.0 because Git-backed text files are simpler, more auditable, easier to bootstrap, easier to review, and better aligned with documentation-as-code.

A database may be added later as a projection, cache, query layer, or multi-user backend, but not as the initial canonical substrate.

## 14. Consequences

### 14.1 Positive Consequences

This decision provides:

1. durable memory;
2. Git history;
3. human review;
4. model agnosticism;
5. branchable context;
6. diffable decisions;
7. portable project continuity;
8. rebuildable vector indexes;
9. explicit context boundaries;
10. stronger auditability.

### 14.2 Negative Consequences

This decision introduces:

1. more files;
2. more structure;
3. memory admission overhead;
4. need for repo hygiene;
5. need for context-pack tooling;
6. need for index rebuild logic;
7. potential ceremony for small projects.

These costs are accepted because the Foundry is intended for serious, long-running, AI-assisted software work.

### 14.3 Risks

The main risks are:

1. memory bloat;
2. stale context;
3. over-documentation;
4. candidate memory backlog;
5. vector index drift;
6. inconsistent trust labels;
7. manual review fatigue;
8. context packs becoming too large.

These risks will be addressed through later policies, repo contract tests, lifecycle states, and evaluation harnesses.

## 15. Implementation Guidance

The v1.0 implementation should start simple.

Initial implementation should use:

1. repository folders;
2. Markdown files;
3. JSON manifests;
4. append-only logs;
5. simple context-pack generation;
6. simple handoff generation;
7. simple memory candidate files;
8. repo contract tests.

The vector database integration should begin as an interface and local stub.

A production-grade vector store is deferred until after the first end-to-end Foundry loop is proven.

## 16. Acceptance Criteria

This ADR is satisfied when the repository contains:

1. a Charon directory structure;
2. canonical memory directory;
3. memory candidate directory;
4. session chronicle directory;
5. context-pack directory;
6. handoff-packet directory;
7. retrieval policy placeholder;
8. indexing policy placeholder;
9. memory admission policy placeholder;
10. repo contract tests verifying required context-continuity paths.

The full implementation may be delivered over multiple later commits.

## 17. Future ADRs

This decision creates the need for later ADRs covering:

1. clean-room architecture and pattern adoption;
2. Foundry Control Plane;
3. canonical repository plus vector retrieval;
4. context-pack lifecycle;
5. handoff lifecycle;
6. memory admission policy;
7. trust levels;
8. retrieval ranking;
9. indexing pipeline;
10. evaluation harness.

## 18. Decision

Accepted.

The Agentic Software Foundry will use repository-based context continuity as the canonical basis for durable AI-assisted project memory.

The repository is the source of truth.

The vector database is a retrieval accelerator.

The session is temporary.

The model is replaceable.

The context pack is a derived artifact.

Canonical memory requires explicit admission.
