---
title: "Rehydration Rules"
description: "Rules for selecting context for future Charon context rehydration."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* anamnesis
* rehydration
* context

---

# Rehydration Rules

## Purpose

These rules define how Charon should select context for a future session or run.

## Default Rehydration Order

Prefer:

1. root `README.md`;
2. `docs/foundry/00-foundry-charter.md`;
3. `docs/foundry/01-system-boundaries.md`;
4. `docs/foundry/02-v1-mvp-definition.md`;
5. `governance/PROJECT_CONSTITUTION.md`;
6. `governance/CLEAN_ROOM_POLICY.md`;
7. active work packet;
8. active context pack;
9. latest handoff;
10. latest status;
11. relevant ADRs;
12. canonical memory.

## Rules

1. Do not load all history by default.
2. Prefer task-specific context.
3. Label stale or superseded material.
4. Do not treat handoffs as canonical memory.
5. Do not include secrets.
6. Preserve source paths.

## Status

Rules are active.

Automation is deferred.
