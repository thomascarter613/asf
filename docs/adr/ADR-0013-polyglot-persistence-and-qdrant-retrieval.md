---
title: "ADR-0013: Adopt Polyglot Persistence with Qdrant as the Specialized Vector Retrieval Index"
document_id: "asf-adr-0013-polyglot-persistence-and-qdrant-retrieval"
adr_number: "0013"
version: "1.0.0"
status: "accepted"
date_created: "2026-04-30"
date_updated: "2026-04-30"
document_type: "architecture-decision-record"
project: "Agentic Software Foundry"
domain:
  - "architecture"
  - "data"
  - "retrieval"
  - "charon"
  - "foundry-control-plane"
related_specifications:
  - "docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md"
supersedes: []
superseded_by: null
canonical: true
---

# ADR-0013: Adopt Polyglot Persistence with Qdrant as the Specialized Vector Retrieval Index

## Status

Accepted.

## Date

2026-04-30.

## Decision

The Agentic Software Foundry shall use a polyglot persistence architecture.

The approved storage model is:

```text
Git
  Canonical human-authored artifacts, docs, specs, ADRs, policies, prompts,
  source files, and version-controlled project memory.

PostgreSQL
  Canonical relational, transactional, workflow, authorization, governance,
  and audit state.

MongoDB
  Canonical document-shaped, semi-structured, context-oriented, memory-packet,
  chunk-tree, source-map, and ingestion-manifest state.

Qdrant
  Derived specialized semantic retrieval index.

Object Storage
  Canonical storage for raw files, uploads, generated artifacts, large exports,
  binary assets, and snapshots.

Optional Lexical Search
  Derived keyword-first search index where needed.
````

Qdrant is selected as the default specialized vector database.

Qdrant shall not be canonical.

Every Qdrant point must resolve back to canonical state in Git, PostgreSQL, MongoDB, object storage, or a combination thereof.

The system must retain the ability to rebuild Qdrant from canonical sources.

## Context

The Agentic Software Foundry requires durable, auditable, policy-aware context management for agentic software development.

The system is expected to support:

```text
repository-aware memory
architecture documentation
ADRs
work packets
agent handoffs
context rehydration
semantic retrieval
source provenance
supersession
document versioning
policy-aware context assembly
auditability
future multi-tenancy
```

A single database is not the best fit for all of these responsibilities.

The project requires relational state, document-shaped state, vector retrieval, and raw artifact storage. Combining all of these into a single persistence engine would either overburden one database or encourage ambiguous ownership boundaries.

The system therefore needs a deliberate polyglot persistence model.

The central architectural invariant is:

```text
Canonical stores own truth.

Retrieval stores own indexes.

Indexes are rebuildable.
```

## Drivers

This decision is driven by the following requirements:

```text
local-first development
self-hostability
production credibility
clear ownership boundaries
auditability
source provenance
schema evolution
retrieval specialization
policy-aware filtering
future multi-tenancy
minimal vendor lock-in
clean path from MVP to production
```

The architecture must support early local development without foreclosing future production deployment.

The architecture must also support serious retrieval correctness, not merely “chat with documents.”

## Considered Options

The following options were considered.

### Option 1: PostgreSQL Only

Under this option, PostgreSQL would store relational state, document-shaped state through JSONB, and vectors through pgvector.

This option is attractive because it minimizes infrastructure and keeps the operational footprint small.

Advantages:

```text
simple deployment
fewer moving parts
strong relational guarantees
excellent transaction model
possible vector support through pgvector
possible semi-structured support through JSONB
```

Disadvantages:

```text
couples OLTP state with retrieval workloads
puts document-shaped context records into a relational database even when unnatural
makes embedding migrations and retrieval experiments more invasive
risks overloading PostgreSQL with unrelated responsibilities
less clean separation between canonical state and derived retrieval
```

Decision:

Rejected as the full architecture.

PostgreSQL remains approved for relational canonical state.

pgvector may be used for lightweight or local vector-adjacent relational use cases, but it is not selected as the primary retrieval substrate.

### Option 2: MongoDB Only

Under this option, MongoDB would store document state, relational-like state, and vector search indexes.

This option is attractive because MongoDB is flexible and well suited for document-shaped records.

Advantages:

```text
natural fit for context documents
flexible schemas
good for nested and polymorphic records
possible vector search support
possible change-stream-driven indexing
fewer persistence engines than the selected architecture
```

Disadvantages:

```text
less ideal for strongly relational authorization, workflow, and audit state
risks making document flexibility substitute for explicit domain modeling
couples canonical document storage with retrieval concerns
does not provide the cleanest specialized vector retrieval boundary
```

Decision:

Rejected as the full architecture.

MongoDB is approved as the canonical document/context database.

MongoDB Vector Search may be used for limited in-place search where appropriate, but it is not selected as the primary specialized retrieval engine.

### Option 3: PostgreSQL + MongoDB, No Dedicated Vector Database

Under this option, PostgreSQL and MongoDB would be canonical stores, and retrieval would be implemented through PostgreSQL, MongoDB, or application-layer logic.

Advantages:

```text
fewer services
clear canonical data ownership
reasonable early MVP path
less operational complexity
```

Disadvantages:

```text
weakens retrieval as a first-class subsystem
limits vector retrieval experimentation
creates pressure to make canonical stores do retrieval-specialist work
makes future dense/sparse/hybrid retrieval evolution less clean
```

Decision:

Rejected.

The system requires a dedicated retrieval subsystem.

### Option 4: PostgreSQL + MongoDB + Pinecone

Under this option, Pinecone would be the managed vector database.

Advantages:

```text
managed service
low operational burden
production-ready vector infrastructure
strong SaaS ergonomics
```

Disadvantages:

```text
external managed dependency
less local-first by default
greater vendor coupling
less aligned with self-hostable architecture sovereignty
less desirable for early fully reproducible local development
```

Decision:

Rejected as the default.

Pinecone remains a possible future managed deployment option if operational requirements outweigh local-first and self-hosting requirements.

### Option 5: PostgreSQL + MongoDB + Weaviate

Under this option, Weaviate would be the vector and semantic search platform.

Advantages:

```text
strong semantic search capabilities
hybrid search support
broader AI-native search platform
schema-aware object model
```

Disadvantages:

```text
more platform-like than required
pulls more conceptual ownership into the search layer
less focused than desired for a sharp retrieval-index boundary
potentially heavier than necessary for the first implementation
```

Decision:

Rejected as the default.

Weaviate remains a credible alternative if the project later wants a broader semantic search platform rather than a focused vector retrieval engine.

### Option 6: PostgreSQL + MongoDB + Milvus

Under this option, Milvus would be the vector database.

Advantages:

```text
large-scale vector infrastructure
strong high-volume search capabilities
suitable for serious vector workloads
```

Disadvantages:

```text
heavier operational footprint
more infrastructure than needed for early Foundry/Charon milestones
better suited when vector search infrastructure itself is the core scaling problem
```

Decision:

Rejected as the default.

Milvus remains a possible future option if the system reaches vector-search scale that justifies heavier infrastructure.

### Option 7: PostgreSQL + MongoDB + OpenSearch or Elasticsearch

Under this option, OpenSearch or Elasticsearch would serve as the primary search and vector layer.

Advantages:

```text
excellent lexical search
faceting
analytics-style search
mature search ecosystem
vector search capabilities
```

Disadvantages:

```text
keyword/search-platform first rather than retrieval-index first
heavier than necessary for semantic retrieval
best suited when user-facing search is the dominant product requirement
```

Decision:

Rejected as the default vector layer.

OpenSearch, Elasticsearch, or Meilisearch may be introduced later for lexical/user-facing search.

### Option 8: PostgreSQL + MongoDB + LanceDB

Under this option, LanceDB would be the vector store.

Advantages:

```text
interesting local-first properties
strong fit for dataset-oriented and multimodal retrieval
useful for AI dataset workflows
```

Disadvantages:

```text
less preferred as the primary standalone retrieval service for this architecture
better fit for local/lakehouse/dataset-oriented workflows than the central Foundry retrieval subsystem
```

Decision:

Rejected as the default.

LanceDB remains worth monitoring for local, dataset, or multimodal subsystems.

### Option 9: PostgreSQL + MongoDB + Chroma

Under this option, Chroma would be the vector store.

Advantages:

```text
simple AI prototyping
good developer ergonomics
fast RAG experiments
```

Disadvantages:

```text
less compelling as the long-term production retrieval substrate
less aligned with governance-grade retrieval boundaries
better suited to prototypes than the central Foundry retrieval system
```

Decision:

Rejected as the default.

Chroma may be used for prototypes, experiments, or disposable local demos.

### Option 10: PostgreSQL + MongoDB + Qdrant

Under this option, PostgreSQL and MongoDB serve as canonical databases, and Qdrant serves as the specialized vector retrieval engine.

Advantages:

```text
clear separation of canonical state and derived retrieval
self-hostable
local-first
production-credible
retrieval-native
metadata-filtering-first
supports dense and sparse retrieval patterns
supports payload-based filtering
supports multi-vector evolution
supports snapshots and rebuild workflows
fits service-oriented architecture
does not try to become the canonical application database
```

Disadvantages:

```text
adds another infrastructure component
requires index synchronization discipline
requires payload schema design
requires rebuild and migration tooling
requires retrieval service boundary
```

Decision:

Accepted.

This option provides the best balance of specialization, operational realism, architectural clarity, local development, and long-term production viability.

## Selected Architecture

The selected architecture is:

```text
                      ┌────────────────────────┐
                      │          Git            │
                      │ docs, specs, prompts,   │
                      │ policies, ADRs, source  │
                      └───────────┬────────────┘
                                  │
                                  ▼
                       ┌─────────────────────┐
                       │  Ingestion Pipeline  │
                       │ parse, normalize,    │
                       │ chunk, classify      │
                       └───────┬───────┬─────┘
                               │       │
                 ┌─────────────▼─┐   ┌─▼────────────────┐
                 │  PostgreSQL    │   │     MongoDB       │
                 │ relational     │   │ document/context  │
                 │ state + audit  │   │ records + chunks  │
                 └───────┬───────┘   └──────┬───────────┘
                         │                  │
                         │                  ▼
                         │          ┌──────────────┐
                         │          │   Qdrant      │
                         │          │ vector index  │
                         │          └──────┬───────┘
                         │                 │
                         └──────────┬──────┘
                                    ▼
                          ┌──────────────────┐
                          │ Retrieval / RAG   │
                          │ policy-aware      │
                          │ context assembly  │
                          └──────────────────┘
```

## Consequences

### Positive Consequences

This decision creates clean ownership boundaries.

PostgreSQL can focus on relational and transactional state.

MongoDB can focus on document-shaped and context-oriented state.

Qdrant can focus on semantic retrieval.

Git can remain the canonical human-reviewed artifact layer.

Object storage can own raw and generated artifacts.

The system gains a clean path toward:

```text
rebuildable retrieval indexes
source-provenance-aware retrieval
supersession-aware retrieval
embedding model migrations
multi-vector search
dense/sparse hybrid retrieval
document-shaped context packets
relational governance and audit records
future multi-tenancy
```

### Negative Consequences

This decision increases operational complexity.

The project must operate multiple persistence engines.

The project must define cross-store identifiers, payload schemas, indexing manifests, and rebuild workflows.

The project must avoid accidental duplication of canonical responsibility.

The project must provide developer tooling that makes the local stack easy to run.

### Neutral Consequences

The selected architecture does not require all services to be fully implemented immediately.

The project may introduce the databases incrementally as long as the architectural boundaries are preserved.

## Mandatory Guardrails

The following guardrails are mandatory:

```text
Qdrant must not become canonical.
Every Qdrant point must resolve to canonical data.
Qdrant must be rebuildable from canonical stores.
PostgreSQL owns relational hard state.
MongoDB owns document/context hard state.
Git owns human-authored version-controlled artifacts.
Object storage owns large blobs and generated artifacts.
No storage engine may silently duplicate another storage engine's authority.
Retrieval results must include provenance.
Superseded chunks must be excluded by default.
Authorization and policy filters must be applied before context assembly.
```

## Required Follow-Up Work

The following work should follow this ADR:

```text
1. Add the polyglot persistence architecture specification.
2. Add local Docker Compose services for PostgreSQL, MongoDB, Qdrant, and MinIO.
3. Add typed environment validation.
4. Define canonical IDs and cross-store reference rules.
5. Define MongoDB document schemas for parsed documents, chunks, context packets, and indexing manifests.
6. Define PostgreSQL tables for projects, repositories, indexing runs, jobs, and audit events.
7. Define Qdrant collection and payload schemas.
8. Add an indexing worker.
9. Add a retrieval service.
10. Add an end-to-end retrieval smoke test.
11. Add a Qdrant rebuild command.
12. Add documentation for backup, restore, and rebuild operations.
```

## Implementation Notes

The first implementation milestone should not attempt to build the entire retrieval platform.

The first implementation milestone should prove the architecture with a minimal vertical slice:

```text
1. Read one Markdown file from the repository.
2. Parse frontmatter and content.
3. Store document and chunk records in MongoDB.
4. Store indexing run metadata in PostgreSQL.
5. Generate or stub an embedding through a provider boundary.
6. Upsert one or more points into Qdrant.
7. Retrieve a point from Qdrant.
8. Resolve the point back to MongoDB and Git provenance.
9. Assert that the retrieved result includes source path, commit SHA, document ID, and chunk ID.
```

This vertical slice is sufficient to validate the storage boundaries.

## Reversal Criteria

This decision may be revisited if:

```text
Qdrant becomes operationally unsuitable.
The project chooses a managed-only deployment model.
MongoDB Vector Search becomes sufficient for all retrieval requirements.
PostgreSQL + pgvector becomes sufficient and dramatically simpler.
The retrieval scale requires Milvus-class infrastructure.
A future platform requirement makes Weaviate or OpenSearch a better architectural center.
```

Any reversal must preserve the core invariant:

```text
Canonical truth must remain separate from rebuildable retrieval indexes.
```

## Final Rationale

Qdrant is selected because it is the best fit for the specific role required by the Agentic Software Foundry:

```text
a self-hostable, production-serious, retrieval-native vector engine
with strong metadata filtering, hybrid retrieval capabilities,
multi-vector evolution paths, snapshots, and a clean local-to-production story.
```

The decision is not that Qdrant is universally better than every alternative.

The decision is that Qdrant is the best default specialized retrieval engine for this architecture.

The final architectural rule is:

```text
PostgreSQL records what happened.

MongoDB records document-shaped context.

Git records human-reviewed artifact history.

Object storage records large artifacts.

Qdrant retrieves what is semantically relevant.

Only the canonical stores own truth.
```

````

---

## Commit Point

After adding both files, this is a clean atomic documentation commit.

```bash
git add docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md \
        docs/adr/ADR-0006-polyglot-persistence-and-qdrant-retrieval.md

git commit -m "docs: record polyglot persistence retrieval architecture"
````

Recommended verification before commit:

```bash
git status --short
```

If your repo has the full verification baseline available, also run:

```bash
bun run verify
```
