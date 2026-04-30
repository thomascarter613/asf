---
title: "Foundry Manifests"
description: "Directory for machine-readable Foundry Control Plane manifests."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - manifests
  - control-plane
---

# Foundry Manifests

## Purpose

This directory contains machine-readable manifests for the Agentic Software Foundry.

Manifests declare operational contracts. They do not replace the charter, ADRs, policies, or human judgment.

The primary manifest is:

```text
.foundry/manifests/foundry.project.json
```

## Rules

Manifests must:

1. be human-inspectable;
2. be machine-readable;
3. avoid secrets;
4. declare safe defaults explicitly;
5. reference controlling policies where appropriate;
6. support future repo contract validation.

## Status

The initial project manifest is created during Milestone 2.
