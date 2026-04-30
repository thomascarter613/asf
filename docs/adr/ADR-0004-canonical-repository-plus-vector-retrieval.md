---
title: "ADR-0004: Canonical Repository Plus Vector Retrieval"
description: "Accepts the repository as canonical truth and vector retrieval as a derived semantic recall layer."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0004"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - vector-retrieval
  - charon
---

# ADR-0004: Canonical Repository Plus Vector Retrieval

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
- `docs/adr/ADR-0003-foundry-control-plane.md`

## 1. Context

ADR-0001 establishes that the Agentic Software Foundry will use repository-based context continuity.

The repository is the durable source of truth for project memory, decisions, chronicles, context packs, handoff packets, policies, manifests, and other long-lived project artifacts.

However, a repository alone is not enough for high-quality context retrieval.

As the Foundry grows, important information may live across many files:

1. ADRs;
2. architecture documents;
3. project charters;
4. clean-room policies;
5. Charon canonical memories;
6. Charon candidate memories;
7. session chronicles;
8. handoff packets;
9. work packets;
10. run records;
11. scaffold manifests;
12. generated documentation;
13. source code;
14. tests;
15. evaluation cases;
16. event logs;
17. project manifests.

A human can navigate these files, but an AI-assisted system needs a way to discover relevant context quickly and selectively.

The Foundry therefore needs semantic retrieval.

The system must balance two requirements:

1. durable, auditable, human-reviewable canonical truth;
2. fast, semantic, task-specific context retrieval.

The decision is not repository versus vector database.

The decision is repository as canonical truth plus vector database as retrieval accelerator.

## 2. Problem

The Foundry must solve several retrieval problems.

### 2.1 Context Discovery

When a user begins a new session or gives a new directive, the system needs to find relevant prior context.

Keyword search alone may miss related material if the wording differs.

### 2.2 Context Budgeting

A model context window is limited.

The system must identify the most relevant context instead of loading everything.

### 2.3 Memory Recall

The system needs to retrieve relevant memories, prior decisions, implementation notes, and handoff records based on semantic similarity.

### 2.4 Conflict Discovery

The system should eventually detect when a new proposed memory or decision may conflict with existing context.

Semantic retrieval can help identify related or contradictory material.

### 2.5 Drift Detection

The system needs to identify when context is stale, superseded, duplicated, or inconsistent.

### 2.6 Model-Agnostic Retrieval

The retrieval system should support multiple AI tools and sessions, not just one provider’s memory mechanism.

### 2.7 Rebuildability

The retrieval system must not become a hidden, unrecoverable source of truth.

If the vector database is lost, the Foundry must be able to rebuild it from repository artifacts.

## 3. Decision

The Agentic Software Foundry will use a **canonical repository plus vector retrieval** architecture.

The repository remains the source of truth.

The vector database is a derived retrieval index.

Charon will preserve canonical and candidate context artifacts in repository files.

Argos will define retrieval contracts and query behavior.

Hephaestus will define indexing, chunking, embedding, and rebuild behavior.

The Foundry Control Plane may coordinate indexing and retrieval operations, but it does not make the vector database authoritative.

## 4. Decision Summary

The accepted model is:

```text
Repository
= canonical truth, review, provenance, Git history, branchability, diffs

Vector database
= semantic retrieval, similarity search, context discovery, ranking support

Argos
= retrieval interface, retrieval contracts, ranking policy, query policy

Hephaestus
= indexing pipeline, chunking policy, embedding policy, reindexing policy

Anamnesis
= uses retrieval results to rehydrate task-specific context

Daedalus
= compiles retrieved and selected context into context packs and handoff packets

Themis
= governs trust, admission, redaction, and policy constraints

Athena
= uses retrieval to support conflict, drift, and supersession analysis
````

The vector database must never contain untraceable canonical truth.

Every vector entry must point back to a repository source artifact.

## 5. Core Rule

The core rule is:

```text
The repository is authoritative.
The vector database is derived.
The retrieval result is advisory.
The context pack is assembled.
Canonical memory is admitted.
```

If the repository and vector database disagree, the repository wins.

If a vector result points to a missing source artifact, that vector result is invalid.

If a generated summary exists only in the vector database, it is not canonical.

## 6. Repository Responsibilities

The repository owns durable source artifacts.

Repository artifacts include:

1. canonical memory files;
2. memory candidate files;
3. session chronicles;
4. handoff packets;
5. context packs;
6. ADRs;
7. architecture documents;
8. project manifests;
9. work packets;
10. verification records;
11. run records;
12. scaffold manifests;
13. policies;
14. schemas;
15. source code;
16. tests;
17. evaluation cases;
18. documentation.

The repository provides:

1. Git history;
2. diffs;
3. branches;
4. commits;
5. review;
6. auditability;
7. human readability;
8. rollback;
9. provenance;
10. rebuildability.

## 7. Vector Database Responsibilities

The vector database owns derived semantic retrieval artifacts.

The vector database may store:

1. embedding vectors;
2. chunk IDs;
3. source file paths;
4. source content hashes;
5. commit references;
6. line ranges or section anchors;
7. trust metadata;
8. lifecycle metadata;
9. artifact type;
10. source title;
11. source summary;
12. chunk text where appropriate;
13. generated embedding metadata;
14. index version;
15. embedding model version.

The vector database must not be treated as:

1. canonical memory;
2. permanent project truth;
3. the only copy of an important fact;
4. a replacement for Git;
5. a replacement for documentation;
6. a replacement for memory admission;
7. a place for orphan context;
8. a hidden authority.

## 8. Required Source Pointer Model

Every vector entry must include a source pointer.

A source pointer should identify:

1. source artifact ID;
2. source artifact type;
3. repository path;
4. content hash;
5. commit SHA when available;
6. chunk ID;
7. chunk index;
8. heading path or section ID when available;
9. line range when available;
10. trust level;
11. lifecycle status;
12. last indexed timestamp.

Example source pointer:

```json
{
  "sourceArtifactId": "adr-0001",
  "sourceArtifactType": "adr",
  "repositoryPath": "docs/adr/ADR-0001-repository-based-context-continuity.md",
  "commit": "pending",
  "contentHash": "sha256:pending",
  "chunkId": "adr-0001:chunk:0003",
  "chunkIndex": 3,
  "headingPath": ["9. Vector Retrieval Position"],
  "lineRange": null,
  "trustLevel": "canonical",
  "lifecycleStatus": "accepted",
  "indexedAt": "2026-04-28T00:00:00Z"
}
```

For v1.0, exact commit and line metadata may be simplified, but the architecture must preserve the source-pointer requirement.

## 9. No Orphan Vectors

The Foundry must not permit orphan vectors.

An orphan vector is an embedding or retrieval record that cannot be traced to a repository artifact.

Orphan vectors are forbidden because they create hidden memory.

If a source file is deleted, moved, superseded, or materially changed, the index must eventually be updated.

If a vector entry points to a missing or hash-mismatched source, it should be treated as stale or invalid.

## 10. Index Rebuild Rule

The vector index must be rebuildable from repository artifacts.

This implies:

1. repository artifacts must contain enough information to reconstruct chunks;
2. chunking policy must be documented;
3. embedding model choice must be recorded;
4. index schema must be documented;
5. source inclusion rules must be documented;
6. trust and lifecycle metadata must be derivable or stored in repository files;
7. rebuild commands must eventually exist;
8. stale index detection must eventually exist.

For v1.0, a vector adapter interface and local stub are acceptable.

A production-grade vector database is deferred.

## 11. Argos Responsibilities

Argos is the Semantic Retrieval Index and query interface layer.

Argos owns:

1. retrieval policy;
2. ranking policy;
3. query contract;
4. source filtering rules;
5. trust-aware retrieval behavior;
6. result metadata;
7. retrieval result formatting;
8. result confidence conventions;
9. retrieval adapter interface;
10. index manifest.

Expected location:

```text
.charon/argos/
```

Initial files should eventually include:

```text
.charon/argos/
├── README.md
├── retrieval-policy.md
├── chunking-policy.md
├── ranking-policy.md
├── index-manifest.json
└── query-contract.json
```

Argos does not own canonical memory.

Argos retrieves and ranks candidate context from indexed artifacts.

## 12. Hephaestus Responsibilities

Hephaestus is the Indexing and Build Pipeline.

Hephaestus owns:

1. source discovery;
2. chunk generation;
3. content hashing;
4. embedding policy;
5. indexing pipeline;
6. reindexing policy;
7. stale index detection;
8. source artifact manifests;
9. index build logs;
10. vector database synchronization.

Expected location:

```text
.charon/hephaestus/
```

Initial files should eventually include:

```text
.charon/hephaestus/
├── README.md
├── indexing-pipeline.md
├── embedding-policy.md
├── reindexing-policy.md
└── source-artifact-manifest.json
```

Hephaestus does not decide what is canonical.

Hephaestus builds indexes over artifacts according to policy.

## 13. Relationship to Mnemosyne

Mnemosyne is the canonical memory repository.

Mnemosyne owns the durable memory files.

Expected location:

```text
.charon/mnemosyne/
```

Mnemosyne may contain:

1. canonical memories;
2. candidate memories;
3. superseded memories;
4. rejected memories;
5. memory indexes;
6. memory metadata.

The vector database may index Mnemosyne files, but it does not replace them.

If a memory exists only in the vector database, it is not a Mnemosyne memory.

## 14. Relationship to Anamnesis

Anamnesis is the Rehydration Engine.

Anamnesis uses Argos retrieval results, project manifests, active work packets, trust policies, and context budgets to determine what context should be loaded into a new session or run.

Anamnesis owns:

1. rehydration rules;
2. context selection strategy;
3. startup context requirements;
4. task-specific context assembly instructions;
5. inclusion and exclusion logic;
6. context budget application.

Expected location:

```text
.charon/anamnesis/
```

Anamnesis does not make the vector database authoritative.

It uses retrieval results as input to context assembly.

## 15. Relationship to Daedalus

Daedalus is the Context Pack and Handoff Compiler.

Daedalus turns selected context into structured artifacts.

Expected location:

```text
.charon/daedalus/
```

Daedalus owns:

1. context-pack templates;
2. generated context packs;
3. handoff packet templates;
4. generated handoff packets;
5. context-pack metadata;
6. handoff metadata.

Daedalus may include vector-retrieved material in a context pack, but every included item must be traceable to its repository source.

A context pack is a derived artifact.

A handoff packet is a derived artifact.

Neither is automatically canonical memory.

## 16. Relationship to Themis

Themis is the Policy and Governance Layer.

Themis owns:

1. memory admission policy;
2. trust levels;
3. redaction policy;
4. retention policy;
5. sensitive context rules;
6. canonical promotion rules;
7. context inclusion constraints;
8. policy gates.

Expected location:

```text
.charon/themis/
```

Themis governs whether certain artifacts can be indexed, retrieved, included, promoted, redacted, or excluded.

Themis may prevent sensitive or untrusted context from entering a context pack even when Argos retrieves it.

## 17. Relationship to Athena

Athena is the Conflict and Drift Analyzer.

Athena may use retrieval to find:

1. related decisions;
2. duplicate memories;
3. contradictory context;
4. superseded claims;
5. stale implementation notes;
6. conflicting work packets;
7. inconsistent architecture statements;
8. outdated handoff references.

Expected location:

```text
.charon/athena/
```

Athena does not decide canonical truth alone.

It flags conflicts and drift for review according to policy.

## 18. Relationship to the Foundry Control Plane

The Foundry Control Plane may coordinate retrieval and indexing operations.

The Control Plane may record events such as:

1. `indexing.started`;
2. `indexing.completed`;
3. `indexing.failed`;
4. `retrieval.requested`;
5. `retrieval.completed`;
6. `context_pack.generated`;
7. `vector_index.stale`;
8. `source_artifact.changed`.

The Control Plane may invoke Argos, Hephaestus, Anamnesis, or Daedalus.

The Control Plane does not own retrieval truth.

The repository remains canonical.

## 19. Trust-Aware Retrieval

Retrieval must account for trust levels.

Initial trust levels include:

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

Default retrieval ranking should prefer:

1. canonical over candidate;
2. accepted ADRs over draft notes;
3. verified context over generated summaries;
4. current context over superseded context;
5. human-approved material over inferred material;
6. source artifacts over summaries.

Superseded, disputed, stale, or rejected content may be retrievable for audit or comparison, but it must be labeled clearly.

## 20. Lifecycle-Aware Retrieval

Retrieval should respect artifact lifecycle.

Examples:

1. accepted ADRs should rank higher than draft ADRs;
2. active work packets should rank higher than closed work packets for current execution;
3. superseded memories should not be treated as active truth;
4. candidate memories should not be presented as canonical;
5. rejected memories should be retrieved only when explicitly relevant;
6. stale context should require a warning.

This is essential to avoid context pollution.

## 21. Context Budgeting

The retrieval layer must support context budgeting.

A context pack should not simply include the top results blindly.

It should classify results into:

```text
required
important
supporting
optional
deferred
excluded
```

The context pack should explain major exclusions when relevant.

For v1.0, budgeting may be manual or simple.

Later versions should support token-aware or size-aware budgeting.

## 22. Inclusion Policy

Not every repository artifact should be indexed by default.

Indexable artifacts may include:

1. accepted ADRs;
2. Foundry charter documents;
3. governance policies;
4. Charon canonical memory;
5. Charon candidate memory;
6. session chronicles;
7. handoff packets;
8. work packets;
9. run summaries;
10. documentation;
11. source code;
12. tests;
13. evaluation cases.

Potentially excluded artifacts include:

1. secrets;
2. `.env` files;
3. credentials;
4. build outputs;
5. dependency directories;
6. binary artifacts;
7. generated coverage output;
8. temporary files;
9. private local notes;
10. files excluded by policy.

The inclusion and exclusion rules belong in repository policy.

## 23. Redaction Policy

Before indexing, the system should eventually apply redaction rules.

Redaction may be required for:

1. secrets;
2. credentials;
3. tokens;
4. personal data;
5. private keys;
6. internal endpoints;
7. sensitive operational details;
8. security vulnerabilities;
9. proprietary third-party material;
10. forbidden clean-room material.

For v1.0, the project may begin with a simple “do not index known secret-bearing files” rule.

More sophisticated redaction can come later.

## 24. Chunking Policy

Chunking must be deterministic enough to support rebuildability.

Chunking should consider:

1. file type;
2. heading structure;
3. semantic sections;
4. code blocks;
5. line ranges;
6. frontmatter;
7. maximum chunk size;
8. overlap policy;
9. artifact type;
10. trust metadata.

Markdown documents should generally be chunked by heading-aware sections.

Code files may require language-aware chunking later.

For v1.0, simple heading-aware Markdown chunking and file-level indexing stubs are sufficient.

## 25. Embedding Policy

The embedding policy should eventually record:

1. embedding provider;
2. embedding model;
3. embedding dimension;
4. version;
5. date indexed;
6. chunking version;
7. index schema version;
8. source hash;
9. privacy constraints;
10. rebuild procedure.

For v1.0, the embedding policy may be documented before a real embedding provider is integrated.

The first implementation may use a local stub.

## 26. Index Manifest

The index manifest should describe the retrieval index.

Expected file:

```text
.charon/argos/index-manifest.json
```

The manifest should eventually include:

```json
{
  "schemaVersion": "0.1.0",
  "indexId": "agentic-software-foundry-default",
  "status": "planned",
  "canonicalSource": "repository",
  "vectorStore": {
    "provider": "stub",
    "location": "local",
    "authoritative": false
  },
  "chunkingPolicy": ".charon/argos/chunking-policy.md",
  "rankingPolicy": ".charon/argos/ranking-policy.md",
  "embeddingPolicy": ".charon/hephaestus/embedding-policy.md",
  "lastIndexedAt": null
}
```

For v1.0, this may exist as a placeholder manifest.

## 27. Query Contract

Argos should define a query contract.

Expected file:

```text
.charon/argos/query-contract.json
```

A future query contract may support:

1. query text;
2. target artifact types;
3. trust filters;
4. lifecycle filters;
5. path filters;
6. recency filters;
7. maximum results;
8. context budget;
9. required sources;
10. excluded sources.

Example:

```json
{
  "query": "What context is needed to continue implementing the event router?",
  "artifactTypes": ["adr", "work-packet", "canonical-memory", "handoff"],
  "trustLevels": ["canonical", "human-approved", "verified"],
  "excludeLifecycleStatuses": ["rejected", "superseded"],
  "maxResults": 10,
  "purpose": "context-pack-generation"
}
```

For v1.0, the query contract may be documented but not fully implemented.

## 28. Retrieval Result Contract

Retrieval results should eventually include:

1. result ID;
2. source artifact ID;
3. source path;
4. artifact type;
5. trust level;
6. lifecycle status;
7. score;
8. rank;
9. excerpt;
10. summary;
11. source pointer;
12. warnings;
13. inclusion recommendation.

Example:

```json
{
  "resultId": "ret_000001",
  "rank": 1,
  "score": 0.91,
  "sourceArtifactId": "adr-0003",
  "sourcePath": "docs/adr/ADR-0003-foundry-control-plane.md",
  "artifactType": "adr",
  "trustLevel": "canonical",
  "lifecycleStatus": "accepted",
  "excerpt": "The Foundry Control Plane is the orchestration and coordination layer...",
  "warnings": [],
  "inclusionRecommendation": "required"
}
```

## 29. v1.0 Scope

For v1.0, the Foundry must not overbuild the retrieval system.

Required v1.0 capabilities:

1. document the canonical repository plus vector retrieval architecture;
2. create Argos directory structure;
3. create Hephaestus directory structure;
4. define retrieval policy;
5. define chunking policy;
6. define ranking policy;
7. define embedding policy;
8. define index manifest placeholder;
9. define query contract placeholder;
10. create a vector adapter interface or stub;
11. ensure context packs cite repository source paths;
12. ensure repo contract tests verify required retrieval paths.

Not required for v1.0:

1. production vector database;
2. remote vector service;
3. sophisticated embedding provider integration;
4. automatic semantic search across all files;
5. advanced conflict detection;
6. advanced drift detection;
7. real-time indexing daemon;
8. large-scale multi-project retrieval;
9. web search integration;
10. multi-user retrieval permissions.

## 30. Future Vector Store Options

Future vector store options may include:

1. local JSON/vector stub;
2. SQLite with vector extension;
3. LanceDB;
4. Qdrant;
5. Weaviate;
6. Chroma;
7. Postgres with pgvector;
8. cloud vector stores;
9. custom embedding cache.

No final production vector store is selected by this ADR.

This ADR selects the architecture, not the final storage product.

The first implementation should prefer a simple local adapter interface that can be replaced later.

## 31. Source Artifact Manifest

Hephaestus should eventually maintain a source artifact manifest.

Expected file:

```text
.charon/hephaestus/source-artifact-manifest.json
```

The manifest may include:

1. artifact ID;
2. artifact type;
3. repository path;
4. lifecycle status;
5. trust level;
6. indexable flag;
7. last modified time;
8. content hash;
9. last indexed time;
10. chunk count;
11. exclusion reason.

This manifest helps ensure the vector index is tied to repository truth.

## 32. Events

Indexing and retrieval should emit events through the Foundry Control Plane.

Potential events:

```text
index.source_discovered
index.source_excluded
index.chunk_created
index.embedding_created
index.vector_upserted
index.vector_deleted
index.rebuild_started
index.rebuild_completed
index.rebuild_failed
retrieval.query_received
retrieval.results_returned
retrieval.no_results
retrieval.stale_index_detected
context_pack.retrieval_attached
```

For v1.0, event emission may be limited to basic local JSONL records.

## 33. Security and Privacy

The retrieval layer introduces security and privacy risks.

Risks include:

1. indexing secrets;
2. retrieving sensitive material into context;
3. exposing private notes;
4. leaking credentials into generated packs;
5. preserving forbidden material in embeddings;
6. indexing untrusted external content;
7. storing sensitive chunks in third-party vector stores;
8. confusing generated summaries with canonical truth.

Mitigations:

1. repository exclusion rules;
2. redaction policy;
3. trust levels;
4. lifecycle labels;
5. local-first v1.0 implementation;
6. source pointer requirement;
7. no orphan vectors;
8. clean-room policy;
9. policy-gated context-pack generation;
10. human review for canonical promotion.

## 34. Clean-Room Considerations

The retrieval layer must comply with the Clean-Room Pattern Adoption Policy.

The system may study public repo-backed memory and retrieval patterns.

It must not import leaked proprietary implementation details, private prompts, private tests, private schemas, or unauthorized source code.

Any retrieval of external material must respect licensing, provenance, and project policy.

The vector database must not become a hiding place for forbidden material.

## 35. Alternatives Considered

### 35.1 Repository Only

The Foundry could use only repository files and manual search.

This was rejected because semantic retrieval, similarity search, and task-specific context assembly are central to the long-term vision.

### 35.2 Vector Database as Canonical Store

The Foundry could use the vector database as the primary memory system.

This was rejected because vector stores are not ideal for canonical truth, review, diffs, Git history, branch workflows, explicit admission, or durable governance.

### 35.3 Relational Database as Canonical Store

The Foundry could store canonical memory in a relational database.

This is deferred because v1.0 should remain simple, local-first, Git-native, and human-readable.

A relational database may become a projection or multi-user backend later.

### 35.4 Provider-Native Memory

The Foundry could rely on AI-provider memory features.

This was rejected as the canonical approach because provider-native memory is not sufficiently model-agnostic, portable, inspectable, or repository-controlled.

Provider-native memory may be an adapter target later.

### 35.5 Search Index Without Embeddings

The Foundry could use only keyword search.

This may be useful as a supplement, but it is insufficient for semantic recall and related-context discovery.

Keyword search and vector search may coexist.

## 36. Consequences

### 36.1 Positive Consequences

This decision provides:

1. strong canonical truth model;
2. better semantic recall;
3. better context-pack generation;
4. model-agnostic retrieval;
5. rebuildable indexes;
6. source traceability;
7. trust-aware retrieval;
8. better conflict detection later;
9. better drift detection later;
10. scalable context continuity.

### 36.2 Negative Consequences

This decision introduces:

1. more architecture;
2. indexing complexity;
3. vector store dependency later;
4. embedding model choices;
5. potential stale index issues;
6. privacy and redaction concerns;
7. need for source manifests;
8. need for retrieval policies;
9. more tests;
10. more operational thinking.

These costs are accepted because semantic retrieval is essential to the Foundry’s long-term value.

### 36.3 Risk Mitigations

The Foundry will mitigate risk by:

1. keeping the repository canonical;
2. starting with a local stub;
3. requiring source pointers;
4. forbidding orphan vectors;
5. documenting policies before deep automation;
6. making vector integration replaceable;
7. using repo contract tests;
8. keeping v1.0 scope modest.

## 37. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.charon/argos/README.md`;
2. `.charon/argos/retrieval-policy.md`;
3. `.charon/argos/chunking-policy.md`;
4. `.charon/argos/ranking-policy.md`;
5. `.charon/argos/index-manifest.json`;
6. `.charon/argos/query-contract.json`;
7. `.charon/hephaestus/README.md`;
8. `.charon/hephaestus/indexing-pipeline.md`;
9. `.charon/hephaestus/embedding-policy.md`;
10. `.charon/hephaestus/reindexing-policy.md`;
11. `.charon/hephaestus/source-artifact-manifest.json`;
12. a vector adapter interface or stub;
13. repo contract tests validating required retrieval files;
14. context packs that identify repository source paths.

The full production vector implementation is not required for this ADR to be accepted.

## 38. Future Work

This decision creates the need for later work on:

1. Argos retrieval policy;
2. Hephaestus indexing policy;
3. source artifact manifest schema;
4. chunking implementation;
5. vector adapter interface;
6. local vector stub;
7. retrieval result contract;
8. context-pack source citation rules;
9. stale index detection;
10. redaction rules;
11. source exclusion rules;
12. trust-aware ranking;
13. conflict detection support;
14. drift detection support;
15. production vector database selection.

## 39. Decision

Accepted.

The Agentic Software Foundry will use a canonical repository plus vector retrieval architecture.

The repository is the source of truth.

The vector database is a derived retrieval accelerator.

Argos owns retrieval contracts.

Hephaestus owns indexing and embedding policy.

Anamnesis uses retrieval for context rehydration.

Daedalus compiles retrieved context into context packs and handoff packets.

Themis governs trust, redaction, and admission.

Athena uses retrieval to support conflict, drift, and supersession analysis.

The Foundry Control Plane coordinates retrieval operations without making the vector database authoritative.

No orphan vectors are allowed.

The index must be rebuildable from repository artifacts.
