---
title: "Trust Levels"
description: "Defines Charon trust levels for memory, retrieval, context packs, and handoff artifacts."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* themis
* trust

---

# Trust Levels

## Purpose

Trust levels help Charon distinguish reliable context from uncertain context.

## Baseline Trust Levels

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

## Definitions

### `canonical`

Admitted durable project truth.

### `human-approved`

Approved by the human project owner but not necessarily admitted as canonical memory.

### `verified`

Supported by verification evidence.

### `generated`

Produced by an AI, tool, or template and not yet reviewed.

### `inferred`

Reasoned from available evidence but not directly stated.

### `candidate`

Proposed memory or context awaiting review.

### `external`

Derived from outside sources.

### `stale`

Possibly outdated.

### `superseded`

Replaced by newer context.

### `disputed`

Known to conflict with other context.

### `rejected`

Reviewed and rejected.

## Rule

Context packs should prefer higher-trust sources and clearly label lower-trust sources.
