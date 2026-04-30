---
title: "Repo Contract Tests"
description: "Repository contract definitions for validating required structure, forbidden paths, manifest fields, and Foundry invariants."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - evals
  - repo-contracts
  - verification
---

# Repo Contract Tests

## Purpose

This directory contains repository contract definitions for the Agentic Software Foundry.

Repo contract tests answer this question:

```text
Does the repository still satisfy the structure, safety defaults, policies, manifests, and invariants that the architecture says it must have?
````

A generated or scaffolded repository is not valid merely because files exist.

A repository is valid only when it satisfies its declared contract.

## Current Files

```text
evals/repo-contracts/
├── README.md
├── repo-contract.manifest.json
├── required-paths.json
├── forbidden-paths.json
└── required-manifest-fields.json
```

## Contract Categories

The first repo contract definitions cover:

1. required paths;
2. forbidden paths;
3. required project manifest fields;
4. required safe defaults;
5. forbidden tools and behaviors.

## V1.0 Position

These files define the contracts.

The executable repo contract checker is created in the next milestone.

## Related Documents

Read:

1. `docs/adr/ADR-0013-repo-contract-testing.md`;
2. `docs/adr/ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md`;
3. `docs/foundry/02-v1-mvp-definition.md`;
4. `.foundry/manifests/foundry.project.json`.

## Status

Repo contract definitions are active.

Executable validation is not implemented yet.
