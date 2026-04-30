---
title: "Argos"
description: "Semantic retrieval contract boundary for Charon."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* argos
* retrieval

---

# Argos

## Purpose

Argos defines Charon's semantic retrieval contracts.

Argos does not own canonical truth. It defines how repository-backed context may be searched, ranked, filtered, and returned for context-pack assembly.

## Files

```text
.charon/argos/
├── retrieval-policy.md
├── chunking-policy.md
├── ranking-policy.md
├── index-manifest.json
└── query-contract.json
```

## Core Rule

The repository is authoritative.

The retrieval index is derived.

No orphan vectors are allowed.
