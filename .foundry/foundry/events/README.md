---
title: "Foundry Events"
description: "Directory for local Foundry event logs and event schema documentation."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - events
  - control-plane
---

# Foundry Events

## Purpose

This directory contains local Foundry event artifacts.

Events record what happened during Foundry work.

Events are operational records. They are not canonical memory by default.

## Primary Event Log

The v1.0 local event log is:

```text
.foundry/events/events.jsonl
```

Each line should eventually contain one JSON event.

## Event Rules

Events should:

1. be append-only in normal operation;
2. avoid secrets;
3. reference related repository artifacts where practical;
4. use stable event type names;
5. support future notification routing;
6. support handoff and run reconstruction.

## Related Documents

Read:

1. `docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md`;
2. `docs/adr/ADR-0003-foundry-control-plane.md`.

## Status

The event log exists.

Automated event writing is not implemented yet.