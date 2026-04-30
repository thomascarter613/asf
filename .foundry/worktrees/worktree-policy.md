---
title: "Worktree Policy"
description: "Policy for future Git worktree-based Foundry execution."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - worktrees
  - policy
---

# Worktree Policy

## Purpose

This policy defines the preferred future model for isolated execution using Git worktrees.

## Core Rule

```text
Parallel work must be isolated by work packet, branch, run, and working tree before it is trusted, reviewed, or merged.
````

## Default Model

```text
one work packet
→ one branch
→ one worktree
→ one run
→ one scoped change set
→ one verification loop
→ one review decision
→ one merge or discard decision
```

## Rules

1. Worktree content is not canonical until merged or admitted.
2. Worktree observations may produce memory candidates.
3. Worktree observations do not become canonical memory automatically.
4. Worktree content should not be indexed as canonical retrieval context.
5. Verification should occur inside the relevant worktree when automation exists.
6. Merge requires review and policy compliance.
7. Remote push is disabled by default.
8. Automatic merge is disabled by default.

## Status

This policy is active.

Automation is deferred.