---
title: "Indexing Pipeline"
description: "Defines the planned Charon indexing pipeline."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* hephaestus
* indexing

---

# Indexing Pipeline

## Purpose

This document defines the future indexing pipeline for Charon.

## Planned Pipeline

```text
repository artifact
→ source discovery
→ policy exclusion check
→ content hash
→ chunking
→ metadata attachment
→ embedding or stub index
→ source pointer validation
→ index manifest update
```

## Initial Rules

1. Do not index secrets.
2. Do not index forbidden material.
3. Do not create orphan vectors.
4. Preserve source path and content hash where practical.
5. Treat the index as derived.
6. Rebuild from repository artifacts where practical.

## Status

The pipeline is documented.

No executable indexer exists yet.
