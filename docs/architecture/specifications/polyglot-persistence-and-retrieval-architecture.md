docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md
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
  - "docs/adr/ADR-0006-polyglot-persistence-and-qdrant-retrieval.md"
canonical: true
implementation_status: "not-started"
---

# Polyglot Persistence and Retrieval Architecture Specification

## 1. Purpose

This specification defines the canonical persistence and retrieval architecture for the Agentic Software Foundry.

The system shall use a polyglot persistence model in which each storage engine has a clear, bounded responsibility. The purpose of this architecture is to avoid collapsing all system state into a single database while also preventing architectural drift, duplicated authority, or ambiguous sources of truth.

The governing principle is:

> Git and canonical operational databases are sources of truth.  
> Specialized retrieval indexes are derived, rebuildable, and non-canonical.

This specification applies to the broader Agentic Software Foundry, including Charon — Context Bridge, Mnemosyne — Canonical Memory Repository, Argos — Semantic Retrieval Index, Anamnesis — Rehydration Engine, the Foundry Control Plane, and all future services that ingest, store, index, retrieve, assemble, or reason over project context.

## 2. Normative Language

The terms **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are used in their ordinary specification sense.

A requirement marked **MUST** is mandatory.

A requirement marked **SHOULD** is strongly recommended and may be departed from only with an explicit ADR or implementation note.

A requirement marked **MAY** is optional.

## 3. Architectural Summary

The system shall use the following storage roles:

```text
Git
  Canonical human-authored artifacts, source files, specifications, ADRs,
  policies, prompts, docs, and version-controlled project memory.

PostgreSQL
  Canonical relational, transactional, governance, workflow, authorization,
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

Optional Lexical Search Engine
  Keyword-first search, faceting, typo tolerance, and user-facing document
  discovery where Qdrant hybrid retrieval is insufficient.
````

The approved default stack is:

```text
PostgreSQL + MongoDB + Qdrant + object storage
```

The preferred local object storage implementation is MinIO.

The preferred production object storage implementation is S3-compatible storage, with Cloudflare R2 as the default candidate unless superseded by a later infrastructure decision.

## 4. Core Architectural Invariant

The system MUST preserve the following invariant:

```text
Canonical state lives in Git, PostgreSQL, MongoDB, and object storage.

Qdrant stores derived retrieval indexes only.

Every Qdrant point MUST resolve back to canonical source records.
```

Qdrant MUST NOT become the sole source of truth for any document, chunk, policy, memory packet, work packet, audit event, or project artifact.

The system MUST be able to rebuild Qdrant from canonical sources.

## 5. Storage Authority Matrix

| Storage System              |                 Canonical? | Primary Responsibility                                                      | Rebuildable? | Notes                                            |
| --------------------------- | -------------------------: | --------------------------------------------------------------------------- | -----------: | ------------------------------------------------ |
| Git                         |                        Yes | Human-authored source artifacts, docs, specs, ADRs, policies, prompts, code |           No | Historical source of reviewable truth            |
| PostgreSQL                  |                        Yes | Relational and transactional operational state                              |           No | Strong constraints, state machines, auditability |
| MongoDB                     |                        Yes | Document-shaped context and semi-structured operational memory              |           No | Flexible schemas and context documents           |
| Qdrant                      |                         No | Semantic retrieval index                                                    |          Yes | Must be rebuildable from canonical stores        |
| Object Storage              |                        Yes | Raw files, uploads, generated artifacts, large blobs                        |           No | Referenced by metadata records                   |
| Meilisearch/OpenSearch/etc. | No, unless later specified | Lexical/user-facing search index                                            |          Yes | Optional derived index                           |

## 6. Git Responsibilities

Git is the canonical home for human-authored, reviewable, version-controlled project artifacts.

Git MUST own:

```text
source code
Markdown documentation
architecture specifications
ADRs
governance documents
policy documents
prompt documents
agent context bootstrap documents
handoff packets committed as files
configuration templates
schemas where source-controlled
migration files
test fixtures where source-controlled
```

Git SHOULD remain the highest-trust source for documents that require human review, diffing, branching, pull requests, commit signatures, code review, and historical traceability.

Git MUST NOT be treated as the only runtime state store. Operational state belongs in canonical databases.

## 7. PostgreSQL Responsibilities

PostgreSQL is the canonical store for relational, transactional, and governance-grade operational state.

PostgreSQL MUST own state where correctness depends on:

```text
identity
authorization
roles
permissions
organizations
projects
repositories
work packets
jobs
runs
state transitions
approvals
task queues where durable state is required
policy assignments
audit events
governance records
integration records
deployment records
billing records, if later introduced
```

PostgreSQL SHOULD be used where the system needs:

```text
foreign keys
unique constraints
transactional integrity
relational joins
strict state machines
strong auditability
append-only event records
structured reporting
authorization boundaries
```

PostgreSQL MAY use JSONB for flexible attributes attached to otherwise relational records.

PostgreSQL SHOULD NOT be used as the primary store for large, deeply nested, frequently evolving, polymorphic context documents when those documents are more naturally represented as whole document objects.

## 8. MongoDB Responsibilities

MongoDB is the canonical store for document-shaped, semi-structured, context-oriented operational records.

MongoDB MUST own records where the primary shape is naturally document-like, nested, polymorphic, schema-evolving, or best read and written as a whole object.

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
intermediate parsing artifacts
memory packets
context assembly records
```

MongoDB documents MUST include schema version metadata when their shape is expected to evolve.

MongoDB documents SHOULD include provenance metadata linking them back to Git, object storage, PostgreSQL records, or external source systems.

MongoDB MUST NOT silently replace Git as the source of truth for human-authored artifacts. When a MongoDB document represents a parsed or projected form of a Git file, it MUST include source provenance.

## 9. Qdrant Responsibilities

Qdrant is the specialized semantic retrieval index.

Qdrant MUST own:

```text
dense vector embeddings
sparse vector embeddings
hybrid retrieval indexes
multi-vector retrieval representations
payload-filtered retrieval points
semantic search collections
retrieval experiment collections
```

Qdrant MUST be treated as derived infrastructure.

Qdrant MUST NOT own:

```text
canonical documents
canonical chunks
canonical policies
canonical work packets
canonical audit records
canonical permissions
canonical project state
canonical memory packets
canonical source files
```

Every Qdrant point MUST contain enough payload metadata to resolve the point back to canonical truth.

At minimum, each Qdrant point SHOULD include:

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

Object storage is the canonical store for large files, generated artifacts, binary assets, uploads, and export bundles.

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

Object storage records MUST be referenced by durable identifiers.

Object storage MUST NOT be the only place where provenance is recorded.

## 11. Optional Lexical Search Responsibilities

A lexical search engine MAY be introduced when keyword-first search, faceting, typo tolerance, user-facing search UX, or large-scale exact matching becomes important enough to justify dedicated infrastructure.

Candidates include:

```text
Meilisearch
OpenSearch
Elasticsearch
PostgreSQL full-text search
MongoDB Search
```

A lexical search engine, if introduced, SHOULD be treated as a derived index unless an ADR explicitly grants it canonical authority.

For the initial architecture, lexical search is optional.

Qdrant hybrid retrieval MAY be sufficient for early semantic and exact retrieval needs.

## 12. Canonical Identity and Cross-Store References

The system MUST use stable identifiers for cross-store references.

Identifiers SHOULD be globally unique, URL-safe, sortable where useful, and suitable for logs and audit trails.

ULID-style identifiers are preferred unless superseded by a later identifier specification.

A record that crosses storage boundaries MUST preserve resolvability.

For example:

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

The system MUST NOT rely on implicit naming conventions alone for cross-store joins.

## 13. Ingestion Pipeline

The ingestion pipeline is responsible for converting canonical artifacts into canonical operational records and derived retrieval indexes.

The pipeline SHOULD follow this flow:

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

Repeated ingestion of the same source at the same version SHOULD NOT create duplicate canonical records or duplicate active Qdrant points.

## 14. Indexing Lifecycle

Document and chunk indexing SHOULD model explicit lifecycle states.

Recommended states:

```text
discovered
parsed
validated
stored
chunked
embedded
indexed
failed
superseded
deleted
```

Failures MUST be explicit.

Failures SHOULD include:

```text
source identifier
stage
error code
human-readable message
retryability
timestamp
run identifier
correlation identifier
```

## 15. Supersession and Versioning

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

Retrieval queries MAY include superseded chunks only when explicitly requested for historical, audit, debugging, or comparison purposes.

Qdrant payloads MUST include a `superseded` field or equivalent retrieval filter.

Canonical stores MUST retain enough information to explain why a chunk was superseded.

## 16. Retrieval Contract

Retrieval MUST be policy-aware.

A retrieval request SHOULD include:

```text
tenant scope
project scope
repository scope, where applicable
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

## 17. Context Assembly

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
record what was excluded when materially relevant
```

Context packs SHOULD be stored in MongoDB when they are document-shaped operational records.

Context pack metadata MAY also be recorded in PostgreSQL when needed for workflow state, audit state, or authorization.

## 18. Auditability

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

## 19. Security and Access Control

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

## 20. Multi-Tenancy

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

The initial default SHOULD be a single collection per major corpus with strict tenant/project payload filters, unless performance or isolation requirements justify stronger separation.

## 21. Backup, Restore, and Rebuild

Canonical stores MUST be backed up.

Qdrant SHOULD be snapshotted for operational convenience, but Qdrant snapshots MUST NOT replace canonical backups.

The system MUST retain the ability to rebuild Qdrant from canonical sources.

The rebuild process SHOULD be documented and tested.

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

## 22. Local Development Topology

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

Local service configuration SHOULD live under the repository’s canonical infrastructure structure.

Secrets MUST NOT be committed.

Example future locations:

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

## 23. Non-Goals

This specification does not require the system to implement all databases immediately.

This specification does not require Qdrant to be exposed directly to application clients.

This specification does not require MongoDB Vector Search to be used.

This specification does not require PostgreSQL `pgvector` to be used.

This specification does not require OpenSearch, Elasticsearch, Meilisearch, Neo4j, Redis, Kafka, or ClickHouse in the initial implementation.

This specification does not define the final embedding model.

This specification does not define the final chunking algorithm.

Those decisions require separate implementation specifications or ADRs.

## 24. Initial Implementation Sequence

The recommended implementation sequence is:

```text
1. Add architecture specification and ADR.
2. Add local Docker Compose services for PostgreSQL, MongoDB, Qdrant, and MinIO.
3. Add health checks for all local services.
4. Add connection configuration and typed environment validation.
5. Add canonical schema packages for document records, chunks, and retrieval payloads.
6. Add a minimal indexer that reads repository Markdown.
7. Store parsed document and chunk records in MongoDB.
8. Store indexing run metadata in PostgreSQL.
9. Generate embeddings through a provider boundary.
10. Upsert points into Qdrant.
11. Add retrieval smoke test proving Qdrant point → MongoDB record → Git source resolution.
12. Add rebuild command for the retrieval index.
```

## 25. Acceptance Criteria

This architecture is considered correctly implemented when the system can demonstrate:

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

## 26. Architectural Guardrails

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

## 27. Final Decision Rule

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