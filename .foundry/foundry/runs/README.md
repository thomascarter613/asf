---
title: "Foundry Runs"
description: "Directory for Foundry run records."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - runs
  - control-plane
---

# Foundry Runs

## Purpose

This directory will contain Foundry run records.

A run is a bounded unit of Foundry activity.

A run may represent directive compilation, work-packet execution, context-pack generation, verification, handoff generation, repo contract evaluation, scaffold generation, or another coordinated activity.

## Future Run Shape

Future runs may look like:

```text
.foundry/runs/run-0001-initial-foundry-loop/
├── run.md
├── run.json
└── artifacts/
```

## Rules

A run record should eventually identify:

1. run ID;
2. directive;
3. work packet;
4. context pack;
5. assigned role;
6. status;
7. events;
8. verification result;
9. outputs;
10. handoff reference.

## Status

Run records are not created yet.

The first real run will be created during the Initial Foundry Loop.