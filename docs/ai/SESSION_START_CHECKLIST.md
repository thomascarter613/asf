---
title: "Session Start Checklist"
description: "Checklist for starting a new AI-assisted Foundry session from repository-backed context."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* ai
* checklist
* session-start
* context-continuity

---

# Session Start Checklist

## Purpose

This checklist helps a new AI-assisted session resume work from repository-backed context.

## Checklist

```text
[ ] Read README.md.
[ ] Read docs/ai/BOOTSTRAP_PROMPT.md.
[ ] Read docs/ai/CURRENT_STATE.md.
[ ] Read .foundry/state/latest-status.md.
[ ] Read the active handoff packet.
[ ] Identify the current milestone.
[ ] Identify the next recommended action.
[ ] Identify required human action.
[ ] Run or request the repo contract checker.
[ ] Confirm expected verification result.
[ ] Preserve safe defaults.
[ ] Preserve clean-room policy.
[ ] Preserve subsystem boundaries.
[ ] Use full file contents for file creation walkthroughs.
[ ] Recommend an atomic Conventional Commit.
```

## Verification Command

```bash
python evals/repo-contracts/check-repo-contracts.py
```

Expected result:

```text
Failed: 0
```

## Session Rule

Do not begin implementation from memory alone.

Start from repository artifacts.
