---
title: "Foundry Control Plane"
description: "Repository boundary for Foundry Control Plane manifests, runs, events, routing, adapters, policies, and runtime state."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - control-plane
  - scaffold
---

# Foundry Control Plane

## Purpose

This directory is the repository boundary for the Foundry Control Plane.

The Foundry Control Plane coordinates the Agentic Software Foundry ecosystem through manifests, run records, event logs, routing configuration, adapter registration, policy-gate coordination, agent runtime coordination, worktree metadata, and operator-visible status.

It coordinates the system.

It does not replace Charon, the AI SDLC Framework, the Monorepo Factory, the Evaluation Harness, or the human project owner.

## Owns

The Foundry Control Plane owns:

1. project manifests;
2. run records;
3. event log locations;
4. routing configuration;
5. adapter registry;
6. policy-gate coordination;
7. agent runtime coordination;
8. worktree metadata;
9. latest status artifacts;
10. local runtime state pointers.

## Does Not Own

The Foundry Control Plane does not own:

1. canonical memory;
2. memory admission;
3. work-packet semantics;
4. template internals;
5. generated application logic;
6. vector database authority;
7. final human approval.

## Future Structure

Future milestones will add:

```text
.foundry/
├── manifests/
├── events/
├── router/
├── runs/
├── agents/
├── worktrees/
├── adapters/
├── policies/
└── state/
```

Those subdirectories are intentionally deferred until their dedicated milestone.

## Related Documents

Read:

1. `docs/adr/ADR-0003-foundry-control-plane.md`;
2. `docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md`;
3. `docs/adr/ADR-0007-multi-agent-runtime-and-role-separation.md`;
4. `docs/adr/ADR-0008-worktree-based-parallel-execution.md`;
5. `docs/adr/ADR-0010-manifest-driven-project-contracts.md`.

## Status

This directory is scaffolded.

Runtime behavior is not implemented yet.
