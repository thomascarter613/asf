---
title: "Retrieval Policy"
description: "Policy for retrieving repository-backed context through Argos."
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
* policy

---

# Retrieval Policy

## Purpose

This policy defines the initial retrieval posture for Charon.

Retrieval exists to help assemble relevant context for a task, run, work packet, handoff, review, or future session.

## Rules

1. Retrieval results are advisory.
2. The repository remains authoritative.
3. Every retrieved result should identify its source artifact.
4. Higher-trust sources should rank above lower-trust sources.
5. Superseded, stale, rejected, or disputed context must be labeled.
6. Context packs must not include secrets or forbidden material.
7. Retrieval must not treat generated summaries as canonical memory.

## Initial Source Priority

Default retrieval should prefer:

1. accepted ADRs;
2. active governance policies;
3. Foundry charter and system boundary documents;
4. canonical memory;
5. active work packets;
6. latest handoff packets;
7. verification records;
8. session chronicles;
9. candidate memory;
10. supporting documentation.

## Status

This policy is active.

Automated retrieval is not implemented yet.
