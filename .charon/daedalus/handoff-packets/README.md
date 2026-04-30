---
title: "Handoff Packets"
description: "Directory for Charon handoff packet templates and generated handoffs."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* daedalus
* handoffs

---

# Handoff Packets

## Purpose

A handoff packet is a structured continuity artifact for the next session or run.

It answers:

```text
What should the next session or run know?
```

## Rules

1. Handoff packets are derived artifacts.
2. Handoff packets must identify verification status.
3. Handoff packets must identify commit status.
4. Handoff packets must identify next recommended action.
5. Handoff packets do not become canonical memory by default.

## Template

Use:

```text
.charon/daedalus/handoff-packets/handoff-packet-template.md
```

