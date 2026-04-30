---
title: "Charon Context Bridge"
description: "Repository boundary for Charon, the Foundry context continuity system."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - charon
  - context-continuity
  - memory
  - scaffold
---

# Charon Context Bridge

## Purpose

This directory is the repository boundary for Charon, the Foundry Context Bridge.

Charon exists to make project context durable, reviewable, retrievable, rehydratable, and transferable across sessions, models, tools, agents, and time.

The repository is the canonical memory substrate.

Vector retrieval is a derived index.

Context packs and handoff packets are derived continuity artifacts.

Canonical memory requires admission.

## Owns

Charon owns:

1. canonical memory;
2. memory candidates;
3. superseded memory;
4. session chronicles;
5. context packs;
6. handoff packets;
7. rehydration rules;
8. retrieval contracts;
9. indexing policy;
10. trust levels;
11. conflict and drift analysis;
12. memory admission policy.

## Does Not Own

Charon does not own:

1. the entire runtime control plane;
2. monorepo template generation;
3. work-packet semantics;
4. notification delivery;
5. provider-specific model behavior;
6. final human approval.

## Future Structure

Future milestones will add:

```text
.charon/
├── mnemosyne/
├── clio/
├── argos/
├── hephaestus/
├── anamnesis/
├── daedalus/
├── athena/
└── themis/
```

Those subdirectories are intentionally deferred until the Charon skeleton milestone.

## Related Documents

Read:

1. `docs/adr/ADR-0001-repository-based-context-continuity.md`;
2. `docs/adr/ADR-0004-canonical-repository-plus-vector-retrieval.md`;
3. `docs/adr/ADR-0012-context-pack-and-handoff-lifecycle.md`;
4. `docs/foundry/01-system-boundaries.md`.

## Status

This directory is scaffolded.

Context continuity artifacts are not implemented yet.
