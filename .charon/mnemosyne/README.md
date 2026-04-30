---
title: "Mnemosyne"
description: "Canonical memory repository boundary for Charon."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - charon
  - mnemosyne
  - memory
---

# Mnemosyne

## Purpose

Mnemosyne is Charon's canonical memory repository.

It separates durable project memory from raw session notes, generated summaries, context packs, handoff packets, and candidate memories.

## Directories

```text
.charon/mnemosyne/
├── canonical/
├── candidates/
└── superseded/
```

## Rules

1. Canonical memory requires admission.
2. Candidate memory is not canonical.
3. Superseded memory remains available for audit.
4. Generated output does not become memory merely because it exists.
5. Memory should preserve source provenance where practical.

## Status

The memory directories exist.

No canonical memories have been admitted yet.
