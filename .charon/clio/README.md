---
title: "Clio"
description: "Session chronicle boundary for Charon."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* clio
* chronicles

---

# Clio

## Purpose

Clio records session chronicles and task histories.

A chronicle is historical evidence of what happened during a session or run. It may inform memory candidates and handoff packets, but it is not canonical memory by default.

## Directories

```text
.charon/clio/
└── sessions/
```

## Rules

Chronicles should record:

1. directive or task;
2. work performed;
3. files changed;
4. verification status;
5. decisions made;
6. open risks;
7. next recommended action;
8. memory candidates produced.

## Status

Session chronicle storage exists.

The first chronicle will be created during the Initial Foundry Loop.
