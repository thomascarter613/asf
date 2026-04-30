---
title: "Polyglot Persistence and Retrieval Architecture Specification"
document_id: "asf-spec-polyglot-persistence-and-retrieval-architecture"
version: "0.1.0"
status: "accepted"
date_created: "2026-04-30"
date_updated: "2026-04-30"
document_type: "architecture-specification"
project: "Agentic Software Foundry"
domain:
  - "architecture"
  - "data"
  - "retrieval"
  - "charon"
  - "foundry-control-plane"
related_adrs:
  - "docs/adr/ADR-0007-polyglot-persistence-and-qdrant-retrieval.md"
canonical: true
implementation_status: "not-started"
---

# Polyglot Persistence and Retrieval Architecture Specification

## 1. Purpose

This specification defines the persistence and retrieval architecture for the Agentic Software Foundry.

The system shall use a polyglot persistence model in which each storage engine has a bounded responsibility. The purpose of this model is to preserve explicit ownership of truth while allowing each storage technology to be used where it is strongest.

The governing rule is:

```text
Canonical stores own truth.

Derived indexes support access, retrieval, and search.

Derived indexes must be rebuildable.
````

This specification applies to the Foundry Control Plane, Charon — Context Bridge, Mnemosyne — Canonical Memory Repository, Argos — Semantic Retrieval Index, Anamnesis — Rehydration Engine, and future services that ingest, store, index, retrieve, assemble, or govern project context.

## 2. Normative Language

The terms MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are used in their ordinary specification sense.

A MUST requirement is mandatory.

A SHOULD requirement is strongly recommended and may be departed from only with an explicit implementation note or ADR.

A MAY requirement is optional.

## 3. Approved Storage Model

The approved persistence model is:

```text
Git
  Canonical human-authored artifacts, source files, specifications, ADRs,
  policies, prompts, docs, and version-controlled project memory.

PostgreSQL
  Canonical relational, transactional, workflow, authorization, governance,
  audit, and operational state.

MongoDB
  Canonical document-shaped, semi-structured, context-oriented, memory-packet,
  chunk-tree, source-map, and ingestion-manifest state.

Qdrant
  Derived semantic retrieval index for dense, sparse, hybrid, filtered,
  multi-vector, and provenance-aware retrieval.

Object Storage
  Raw blobs, uploaded files, generated artifacts, large exports, snapshots,
  PDFs, DOCX files, archives, and binary assets.

Optional Lexical Search
  Keyword-first search, faceting, typo tolerance, and user-facing document
  discovery where Qdrant hybrid retrieval is insufficient.
```

The default local stack SHOULD be:

```text
PostgreSQL
MongoDB
Qdrant
MinIO
```

The default production object storage candidate SHOULD be S3-compatible storage, with Cloudflare R2 as the preferred candidate unless superseded by a later infrastructure ADR.

## 4. Core Invariant

The system MUST preserve this invariant:

```text
Git, PostgreSQL, MongoDB, and object storage may contain canonical truth.

Qdrant is a derived retrieval index.

Every Qdrant point must resolve back to canonical truth.

Qdrant must be rebuildable from canonical sources.
```

Qdrant MUST NOT become the only store for source text, documents, chunks, policies, work packets, audit records, memory packets, permissions, or project state.

## 5. Storage Authority Matrix

| Store          | Canonical? | Primary Responsibility                                                          | Rebuildable? |
| -------------- | ---------: | ------------------------------------------------------------------------------- | -----------: |
| Git            |        Yes | Human-authored artifacts, source files, docs, ADRs, specs, policies, prompts    |           No |
| PostgreSQL     |        Yes | Relational, transactional, workflow, authorization, audit, and governance state |           No |
| MongoDB        |        Yes | Document-shaped context, chunk trees, source maps, memory packets, manifests    |           No |
| Qdrant         |         No | Semantic vector retrieval index                                                 |          Yes |
| Object Storage |        Yes | Raw files, uploads, generated artifacts, large blobs, snapshots                 |           No |
| Lexical Search | Usually no | Keyword search, faceting, user-facing discovery                                 |          Yes |

## 6. Git Responsibilities

Git MUST own human-authored, reviewable, version-controlled artifacts, including:

```text
source code
Markdown documentation
architecture specifications
ADRs
policy documents
prompt documents
agent bootstrap documents
handoff packets committed as files
configuration templates
schemas where source-controlled
migration files
test fixtures where source-controlled
```

Git SHOULD remain the highest-trust source for artifacts that require review, diffing, branching, pull requests, commit signatures, and historical traceability.

Git MUST NOT be treated as the only runtime state store.

## 7. PostgreSQL Responsibilities

PostgreSQL MUST own relational, transactional, authorization, workflow, audit, and governance-grade operational state.

PostgreSQL SHOULD own:

```text
users
accounts
organizations
projects
repositories
work packets
jobs
runs
tasks
agents
tools
roles
permissions
policy assignments
approval state
state transitions
audit events
integration records
deployment records
billing records, if later introduced
```

PostgreSQL SHOULD be used where correctness depends on:

```text
foreign keys
unique constraints
transactions
joins
strict state machines
append-only audit records
authorization boundaries
structured reporting
```

PostgreSQL MAY use JSONB for flexible attributes attached to otherwise relational records.

PostgreSQL SHOULD NOT be used as the primary store for large, deeply nested, polymorphic, frequently evolving context documents when those records are naturally document-shaped.

## 8. MongoDB Responsibilities

MongoDB MUST own document-shaped, semi-structured, context-oriented operational records.

MongoDB SHOULD own:

```text
parsed document records
document manifests
frontmatter snapshots
chunk trees
source maps
session chronicles
context packets
handoff packet projections
retrieval packs
tool result envelopes
LLM trace summaries
ingestion manifests
indexing manifests
heterogeneous metadata records
memory packets
context assembly records
```

MongoDB documents MUST include schema version metadata when their shape is expected to evolve.

MongoDB documents SHOULD include provenance metadata linking them back to Git, object storage, PostgreSQL records, or external source systems.

MongoDB MUST NOT silently replace Git as the source of truth for human-authored artifacts. When MongoDB stores a parsed or projected form of a Git file, it MUST include source provenance.

## 9. Qdrant Responsibilities

Qdrant MUST own derived retrieval indexes, including:

```text
dense vector embeddings
sparse vector embeddings
hybrid retrieval points
multi-vector retrieval representations
payload-filtered retrieval points
semantic search collections
retrieval experiment collections
```

Qdrant MUST NOT own canonical:

```text
documents
chunks
policies
work packets
audit records
permissions
project state
memory packets
source files
```

Every Qdrant point MUST contain enough payload metadata to resolve the point back to canonical truth.

At minimum, each Qdrant payload SHOULD include:

```json
{
  "canonical_store": "mongodb",
  "canonical_id": "docChunk_01HX0000000000000000000000",
  "source_kind": "git_file",
  "source_path": "docs/architecture/retrieval.md",
  "commit_sha": "abc123",
  "document_id": "retrieval-architecture",
  "document_version": "0.1.0",
  "chunk_id": "retrieval-architecture#chunk-018",
  "tenant_id": "default",
  "project_id": "agentic-software-foundry",
  "domain": "architecture",
  "classification": "internal",
  "canonical": true,
  "superseded": false,
  "created_at": "2026-04-30T00:00:00Z",
  "embedding_model": "text-embedding-model-name",
  "embedding_dimension": 1536,
  "index_schema_version": "1"
}
```

The exact payload schema MUST be formalized before the first production retrieval index is created.

## 10. Object Storage Responsibilities

Object storage MUST own large files, generated artifacts, binary assets, uploads, and export bundles.

Object storage SHOULD own:

```text
uploaded PDFs
uploaded DOCX files
uploaded images
generated PDFs
generated DOCX files
screenshots
archives
large JSON exports
retrieval snapshots
index exports
test artifacts
model artifacts
large logs not suitable for PostgreSQL
large traces not suitable for PostgreSQL
```

Metadata for object storage records SHOULD live in PostgreSQL or MongoDB depending on whether the metadata is relational or document-shaped.

Object storage MUST NOT be the only place where provenance is recorded.

## 11. Lexical Search Responsibilities

A lexical search engine MAY be introduced when keyword-first search, faceting, typo tolerance, user-facing search UX, or large-scale exact matching becomes important enough to justify dedicated infrastructure.

Candidate engines include:

```text
Meilisearch
OpenSearch
Elasticsearch
PostgreSQL full-text search
MongoDB Search
```

A lexical search engine SHOULD be treated as a derived index unless an ADR explicitly grants it canonical authority.

## 12. Cross-Store Identity

The system MUST use stable identifiers for cross-store references.

Identifiers SHOULD be globally unique, URL-safe, sortable where useful, and suitable for logs and audit trails.

ULID-style identifiers are preferred unless superseded by a later identifier specification.

The system MUST NOT rely on implicit naming conventions alone for cross-store joins.

Example:

```text
PostgreSQL project
  id: project_01HX...

MongoDB document
  projectId: project_01HX...
  sourcePath: docs/architecture/retrieval.md

Qdrant point
  project_id: project_01HX...
  canonical_store: mongodb
  canonical_id: docChunk_01HX...
  source_path: docs/architecture/retrieval.md
```

## 13. Ingestion Pipeline

The ingestion pipeline SHOULD follow this flow:

```text
1. Discover source artifact.
2. Read source artifact.
3. Parse content and metadata.
4. Normalize document identity.
5. Validate frontmatter and schema.
6. Store or update canonical document/context records.
7. Chunk content.
8. Store canonical chunk records.
9. Generate embeddings.
10. Upsert Qdrant points.
11. Record indexing manifest.
12. Emit audit or run record.
```

The ingestion pipeline MUST be idempotent.

Repeated ingestion of the same source version SHOULD NOT create duplicate canonical records or duplicate active Qdrant points.

## 14. Supersession and Versioning

The system MUST support supersession.

When a source artifact changes, the system MUST be able to identify whether existing chunks are:

```text
unchanged
modified
deleted
new
superseded
```

Superseded chunks MUST NOT be returned by default retrieval queries.

Retrieval MAY include superseded chunks only when explicitly requested for historical, audit, debugging, or comparison purposes.

Qdrant payloads MUST include a `superseded` field or equivalent retrieval filter.

Canonical stores MUST retain enough information to explain why a chunk was superseded.

## 15. Retrieval Contract

Retrieval MUST be policy-aware.

A retrieval request SHOULD include:

```text
tenant scope
project scope
repository scope
user or agent identity
classification boundary
source type constraints
document status constraints
freshness constraints
query text
retrieval mode
top-k
reranking options
```

Retrieval MUST apply authorization and policy filters before results are used for context assembly.

Retrieval MUST NOT return unauthorized records and rely on downstream filtering to hide them.

Retrieval results MUST include provenance.

A retrieval result SHOULD include:

```json
{
  "score": 0.842,
  "canonical_store": "mongodb",
  "canonical_id": "docChunk_01HX0000000000000000000000",
  "source_path": "docs/architecture/retrieval.md",
  "commit_sha": "abc123",
  "document_id": "retrieval-architecture",
  "document_version": "0.1.0",
  "chunk_id": "retrieval-architecture#chunk-018",
  "heading_path": ["Architecture", "Retrieval"],
  "line_start": 42,
  "line_end": 87,
  "superseded": false
}
```

## 16. Context Assembly

Anamnesis — Rehydration Engine shall assemble context from retrieval results.

Context assembly MUST NOT blindly concatenate retrieved chunks.

Context assembly SHOULD:

```text
deduplicate results
prefer canonical current records
exclude superseded content by default
include source provenance
group related chunks
respect token budgets
preserve document hierarchy
prefer higher-trust sources
record why content was included
record materially relevant exclusions
```

Context packs SHOULD be stored in MongoDB when they are document-shaped operational records.

Context pack metadata MAY also be recorded in PostgreSQL when needed for workflow state, audit state, or authorization.

## 17. Auditability

The system MUST preserve enough information to answer:

```text
What source artifact produced this retrieved content?
What commit or source version did it come from?
What parser and schema version processed it?
What embedding model generated the vector?
When was it indexed?
What retrieval query selected it?
What filters were applied?
What agent or user consumed it?
What context pack included it?
```

PostgreSQL SHOULD store durable audit events for consequential operations.

MongoDB SHOULD store document-shaped trace records when trace detail is too nested or variable for relational modeling.

Qdrant MUST NOT be the only place where retrieval events are recorded.

## 18. Security and Access Control

The system MUST enforce access control before context reaches an agent, model, user, or tool.

Security-relevant metadata SHOULD include:

```text
tenant_id
project_id
repository_id
classification
source_visibility
owner
allowed_roles
policy_version
superseded
deleted
embargoed
```

Qdrant payload filters MAY participate in access filtering, but Qdrant MUST NOT be the sole enforcement layer for authorization.

The retrieval service MUST enforce policy at the application layer.

## 19. Multi-Tenancy

The system SHOULD assume future multi-tenancy.

Tenant and project scope MUST be included in canonical records and retrieval payloads.

The system MAY begin with a single-tenant deployment, but the data model SHOULD avoid assumptions that prevent future tenant isolation.

Qdrant collection strategy SHOULD be decided explicitly before production use.

Acceptable strategies include:

```text
single collection with tenant/project payload filters
collection per tenant
collection per project
hybrid model with large tenants isolated
```

The initial default SHOULD be a single collection per major corpus with strict tenant/project payload filters unless performance or isolation requirements justify stronger separation.

## 20. Backup, Restore, and Rebuild

Canonical stores MUST be backed up.

Qdrant SHOULD be snapshotted for operational convenience, but Qdrant snapshots MUST NOT replace canonical backups.

The system MUST retain the ability to rebuild Qdrant from canonical sources.

The rebuild process SHOULD support:

```text
full rebuild
project-scoped rebuild
repository-scoped rebuild
document-scoped rebuild
failed-run retry
embedding-model migration
schema-version migration
```

## 21. Local Development Topology

The local development environment SHOULD include:

```text
PostgreSQL
MongoDB
Qdrant
MinIO
application services
retrieval service
indexing worker
```

Local development MUST be reproducible.

Secrets MUST NOT be committed.

Recommended future locations:

```text
infra/docker/postgres/
infra/docker/mongodb/
infra/docker/qdrant/
infra/docker/minio/
services/retrieval/
services/indexer/
packages/retrieval-contracts/
packages/context-schemas/
```

## 22. Non-Goals

This specification does not require every database to be fully implemented immediately.

This specification does not require Qdrant to be exposed directly to application clients.

This specification does not require MongoDB Vector Search.

This specification does not require PostgreSQL pgvector.

This specification does not require OpenSearch, Elasticsearch, Meilisearch, Neo4j, Redis, Kafka, or ClickHouse in the initial implementation.

This specification does not define the final embedding model.

This specification does not define the final chunking algorithm.

## 23. Initial Implementation Sequence

The recommended implementation sequence is:

```text
1. Add this specification and ADR-0007.
2. Add local Docker Compose services for PostgreSQL, MongoDB, Qdrant, and MinIO.
3. Add health checks for all local services.
4. Add connection configuration and typed environment validation.
5. Add canonical schema packages for document records, chunks, and retrieval payloads.
6. Add a minimal indexer that reads repository Markdown.
7. Store parsed document and chunk records in MongoDB.
8. Store indexing run metadata in PostgreSQL.
9. Generate embeddings through a provider boundary.
10. Upsert points into Qdrant.
11. Add retrieval smoke test proving Qdrant point to MongoDB record to Git source resolution.
12. Add rebuild command for the retrieval index.
```

## 24. Acceptance Criteria

This architecture is correctly implemented when the system can demonstrate:

```text
PostgreSQL stores relational operational state.
MongoDB stores canonical document/context records.
Qdrant stores only derived vector points.
Every Qdrant point resolves to canonical data.
A Qdrant collection can be deleted and rebuilt.
Retrieval excludes superseded chunks by default.
Retrieval returns provenance with every result.
A local developer can run the full persistence stack.
The system has at least one end-to-end retrieval smoke test.
```

## 25. Guardrails

The following are prohibited unless superseded by a later ADR:

```text
Using Qdrant as the only store for canonical chunks.
Using Qdrant as the only store for source text.
Using MongoDB as an unstructured dumping ground without schema versions.
Using PostgreSQL JSONB as a substitute for all document modeling.
Using multiple databases with overlapping ownership of the same state.
Returning retrieval results without provenance.
Allowing unauthorized records to enter context assembly.
Allowing superseded chunks into default retrieval.
Treating vector search results as inherently trustworthy.
```

## 26. Placement Rule

When deciding where data belongs, use this rule:

```text
If it is human-authored, reviewable, and version-controlled, store it in Git.

If it is relational, transactional, permissioned, stateful, or auditable,
store it in PostgreSQL.

If it is document-shaped, nested, polymorphic, context-oriented, or schema-evolving,
store it in MongoDB.

If it is an embedding or semantic retrieval point, store it in Qdrant.

If it is a large file or binary artifact, store it in object storage.

If it is an index, make it rebuildable.