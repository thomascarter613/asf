---
title: "Bootstrap Prompt"
description: "Prompt for starting a new AI-assisted session on the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* ai
* bootstrap
* prompt
* context-continuity

---

# Bootstrap Prompt

## Purpose

This document provides the recommended startup prompt for a new AI-assisted session working on the Agentic Software Foundry.

The goal is to recover project context from repository artifacts rather than relying on provider memory, raw chat history, or unstated assumptions.

## Bootstrap Prompt

Use this prompt when starting a new session:

```text
You are continuing work on the Agentic Software Foundry.

Treat the repository as the canonical source of truth.

Do not rely on provider memory, prior chat memory, or assumptions if the repository gives a different answer.

Begin by reading these files in order:

1. README.md
2. docs/ai/CURRENT_STATE.md
3. .foundry/state/latest-status.md
4. .charon/daedalus/handoff-packets/handoff-0002-bootstrap-flow.md
5. docs/foundry/00-foundry-charter.md
6. docs/foundry/01-system-boundaries.md
7. docs/foundry/02-v1-mvp-definition.md
8. docs/foundry/03-document-versioning-and-frontmatter.md
9. governance/PROJECT_CONSTITUTION.md
10. governance/CLEAN_ROOM_POLICY.md
11. evals/repo-contracts/run-repo-contracts.md

Then summarize:

1. the current milestone;
2. the last completed milestone;
3. the next recommended action;
4. any required human action;
5. the verification command;
6. the expected commit message.

Follow these rules:

1. Preserve the project constitution.
2. Preserve the clean-room policy.
3. Preserve the subsystem boundaries.
4. Use YAML frontmatter for meaningful Markdown files.
5. Give full file contents in coding walkthroughs.
6. Recommend atomic Conventional Commits at the correct points.
7. Do not introduce Bazel.
8. Do not enable automatic remote push.
9. Do not enable automatic merge.
10. Do not promote memory candidates to canonical memory without admission.

Current next milestone after the bootstrap flow is:

Milestone 10 — V1.0 MVP Review
```

## Required First Verification

After reading the startup files, run:

```bash
python evals/repo-contracts/check-repo-contracts.py
```

Expected result:

```text
Failed: 0
```

## Session Behavior

A new session should:

1. read before generating;
2. identify the current milestone;
3. state any uncertainty;
4. preserve safe defaults;
5. continue from the latest handoff;
6. avoid changing scope without a work packet;
7. avoid claiming completion without verification.

## Status

This bootstrap prompt is active for the Agentic Software Foundry.
