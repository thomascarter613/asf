---
title: "Notification Router"
description: "Directory for local Foundry notification route configuration."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - router
  - notifications
---

# Notification Router

## Purpose

This directory contains local notification routing configuration.

The router decides which events matter, how they should be rendered, and where local status should be written.

For v1.0, the router is local-first.

External notification sinks are disabled by default.

## Primary Route File

```text
.foundry/router/routes.json
```

## Rules

The router must not:

1. enable external sinks by default;
2. treat notification delivery as work completion;
3. include secrets in rendered status;
4. bypass policy gates.

## Related Documents

Read:

1. `docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md`;
2. `docs/foundry/01-system-boundaries.md`.

## Status

Routing configuration exists.

Automated routing is not implemented yet.