---
title: "Context Packs"
description: "Directory for Charon context pack templates and generated context packs."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* daedalus
* context-packs

---

# Context Packs

## Purpose

A context pack is a task-specific bundle of selected context.

It answers:

```text
What does this session or run need to know?
```

## Rules

1. Context packs are derived artifacts.
2. Context packs must identify source artifacts.
3. Context packs must not include secrets.
4. Context packs must label stale or disputed context.
5. Context packs do not become canonical memory by default.

## Template

Use:

```text
.charon/daedalus/context-packs/context-pack-template.md
```

