---
title: "Local Core Persistence Stack Runbook"
document_id: "asf-runbook-local-core-persistence-stack"
version: "0.1.0"
status: "accepted"
date_created: "2026-04-30"
date_updated: "2026-04-30"
document_type: "runbook"
project: "Agentic Software Foundry"
domain:
  - "operations"
  - "local-development"
  - "data"
  - "retrieval"
related_adrs:
  - "docs/adr/ADR-0007-polyglot-persistence-and-qdrant-retrieval.md"
related_specifications:
  - "docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md"
canonical: true
---

# Local Core Persistence Stack Runbook

## 1. Purpose

This runbook explains how to run the local core persistence stack for the Agentic Software Foundry.

The local core persistence stack provides:

- PostgreSQL for relational, transactional, workflow, authorization, governance, and audit state.
- MongoDB for document-shaped context, memory, chunk, source-map, and ingestion records.
- Qdrant for derived semantic retrieval indexes.

Object storage is intentionally deferred to a follow-up commit.

## 2. Architecture Boundary

The local core persistence stack follows the project’s polyglot persistence decision:

```text
Git
  Human-authored canonical artifacts.

PostgreSQL
  Canonical relational operational state.

MongoDB
  Canonical document-shaped context state.

Qdrant
  Derived vector retrieval index.
