---
title: "Memory Admission Policy"
description: "Policy governing how Charon memory candidates may become canonical memory."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* themis
* memory
* admission

---

# Memory Admission Policy

## Purpose

This policy governs how memory candidates become canonical Charon memory.

## Core Rule

No generated output becomes canonical memory automatically.

## Admission Requirements

A memory candidate should identify:

1. proposed memory;
2. source artifact;
3. source run or session;
4. trust level;
5. rationale;
6. possible conflicts;
7. reviewer or admitting authority;
8. admission status.

## Admission States

```text
candidate
→ reviewed
→ admitted
```

Alternative terminal states:

```text
rejected
superseded
deferred
disputed
```

## Authority

For v1.0, canonical memory admission is manual and requires human project owner approval.

## Status

This policy is active.

No canonical memories have been admitted yet.
