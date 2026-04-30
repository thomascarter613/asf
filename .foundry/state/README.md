---
title: "Foundry State"
description: "Directory for local Foundry runtime state pointers and latest status artifacts."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - state
  - latest-status
---

# Foundry State

## Purpose

This directory contains local Foundry state artifacts.

State files are operational pointers and summaries.

They are not canonical memory by default.

## Primary File

```text
.foundry/state/latest-status.md
```

The latest status artifact should summarize the current Foundry state for humans and future sessions.

## Rules

State artifacts should:

1. avoid secrets;
2. identify active work clearly;
3. distinguish verified from unverified work;
4. reference source artifacts;
5. avoid claiming completion without evidence.

## Status

The initial latest status file is created during Milestone 2.