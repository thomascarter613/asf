---
title: "Hephaestus"
description: "Indexing and build pipeline boundary for Charon."
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

# Hephaestus

## Purpose

Hephaestus defines the indexing and build pipeline for Charon retrieval.

It is responsible for source discovery, chunking, content hashing, embedding policy, reindexing policy, and source artifact manifests.

## Files

```text
.charon/hephaestus/
├── indexing-pipeline.md
├── embedding-policy.md
├── reindexing-policy.md
└── source-artifact-manifest.json
```

## Status

Indexing is not implemented yet.

The v1.0 skeleton defines the contracts first.
