---
title: "Commit Plan"
description: "Directory for Foundry commit planning guidance."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* sdlc
* commits
* conventional-commits

---

# Commit Plan

## Purpose

This directory stores commit planning guidance.

The Foundry should be built through atomic Conventional Commits.

## Rules

1. Commit one coherent durable change at a time.
2. Prefer explicit scopes.
3. Commit messages should describe the artifact, not the chat instruction.
4. Do not bundle unrelated milestones.
5. Do not claim implementation when the change is only documentation.

## Examples

```text
docs(foundry): define v1 mvp boundary
chore(scaffold): add initial foundry repository structure
chore(foundry): add project manifest and local control plane files
chore(charon): add context continuity skeleton
chore(sdlc): add work packet and protocol skeleton
test(repo): add initial repo contract checker
```

