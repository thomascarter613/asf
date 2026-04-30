---
title: "Daedalus"
description: "Context pack and handoff compiler boundary for Charon."
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
* handoffs

---

# Daedalus

## Purpose

Daedalus compiles context packs and handoff packets.

Context packs prepare the current session or run.

Handoff packets prepare the next session or run.

Both are derived artifacts.

Neither becomes canonical memory by default.

## Directories

```text
.charon/daedalus/
├── context-packs/
└── handoff-packets/
```

## Status

Templates exist.

Generated context packs and handoffs begin during the Initial Foundry Loop.
