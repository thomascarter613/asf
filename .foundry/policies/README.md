---
title: "Foundry Runtime Policies"
description: "Directory for future Foundry runtime policy references and local policy-gate documentation."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - policies
  - control-plane
---

# Foundry Runtime Policies

## Purpose

This directory reserves the boundary for Foundry runtime policy references.

Primary governance documents currently live in:

```text
governance/
```

Charon-specific policy documents will live under:

```text
.charon/themis/
```

This directory is for Control Plane policy-gate coordination and runtime policy references.

## Policy Gate Categories

Policy gates are required for:

1. canonical memory promotion;
2. architecture amendments;
3. destructive file changes;
4. dependency additions;
5. external notification enablement;
6. remote push automation;
7. automatic merge enablement;
8. release publication;
9. secret handling;
10. external code reuse;
11. aggressive autonomous execution.

## Status

Runtime policy enforcement is not implemented yet.

Policy gates are manual for v1.0.