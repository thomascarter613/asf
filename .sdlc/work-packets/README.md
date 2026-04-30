---
title: "Work Packets"
description: "Directory for scoped, verifiable units of Foundry work."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* sdlc
* work-packets
* lifecycle

---

# Work Packets

## Purpose

This directory stores work packets.

A work packet is the Foundry's canonical unit of planned work.

It defines objective, scope, non-goals, required context, files, implementation steps, acceptance criteria, verification, documentation obligations, handoff requirements, memory candidate expectations, rollback plan, and commit recommendation.

## Lifecycle

Normal lifecycle:

```text
draft
→ ready
→ in_progress
→ implemented
→ verifying
→ verified
→ documented
→ committed
→ closed
```

Exceptional states:

```text
blocked
failed
cancelled
superseded
rejected
deferred
```

## Directories

```text
.sdlc/work-packets/
├── drafts/
├── active/
├── completed/
└── superseded/
```

## Core Rule

Implemented does not mean verified.

Verified does not mean documented.

Documented does not mean committed.

Committed does not always mean closed.
