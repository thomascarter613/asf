---
title: "AI Continuity Documents"
description: "Index for AI-facing bootstrap, current-state, and session-start guidance."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - ai
  - bootstrap
  - context-continuity
  - handoff
---

# AI Continuity Documents

## Purpose

This directory contains AI-facing continuity documents for the Agentic Software Foundry.

These documents help a new AI-assisted session quickly recover project identity, current state, required reading, active milestone, safety defaults, and next action.

## Files

```text
docs/ai/
├── README.md
├── BOOTSTRAP_PROMPT.md
├── CURRENT_STATE.md
└── SESSION_START_CHECKLIST.md
````

## Reading Order

A new session should read:

```text
1. README.md
2. docs/ai/BOOTSTRAP_PROMPT.md
3. docs/ai/CURRENT_STATE.md
4. .foundry/state/latest-status.md
5. .charon/daedalus/handoff-packets/handoff-0002-bootstrap-flow.md
6. docs/foundry/02-v1-mvp-definition.md
7. evals/repo-contracts/run-repo-contracts.md
```

## Rules

AI-facing continuity documents must:

1. preserve repository-canonical truth;
2. distinguish current state from future work;
3. avoid secrets;
4. reference source artifacts;
5. avoid claiming verification without evidence;
6. preserve clean-room policy;
7. preserve human project owner authority.

## Status

AI continuity documents are active.

They support Milestone 9 and future session transitions.
