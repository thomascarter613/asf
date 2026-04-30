---
title: "Conflict Rules"
description: "Rules for identifying conflicting context in Charon."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* athena
* conflict

---

# Conflict Rules

## Purpose

These rules define how Charon should think about conflicting context.

## Conflict Types

Possible conflicts include:

1. two ADRs making incompatible decisions;
2. a policy contradicting a manifest;
3. a handoff contradicting latest status;
4. a memory candidate contradicting canonical memory;
5. a work packet exceeding accepted scope;
6. generated documentation contradicting accepted architecture.

## Resolution Order

Prefer:

1. human instruction in the current work context;
2. project constitution;
3. accepted ADRs;
4. active governance policies;
5. project manifest;
6. canonical memory;
7. active work packet;
8. latest handoff;
9. session chronicles;
10. generated summaries.

## Rule

Conflicts should be surfaced, not hidden.
