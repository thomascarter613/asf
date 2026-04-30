---
title: "Drift Rules"
description: "Rules for identifying stale, superseded, or drifting context in Charon."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* athena
* drift

---

# Drift Rules

## Purpose

These rules define how Charon should identify context drift.

## Drift Indicators

Context may be drifting when:

1. a handoff references a completed work packet as active;
2. latest status references an old milestone;
3. an ADR has been superseded but still appears active;
4. a context pack includes stale source material without warning;
5. a manifest says a subsystem is enabled but required files are missing;
6. a memory candidate has remained unreviewed too long;
7. documentation describes behavior that no longer exists.

## Rule

Drift should produce review work, not silent correction.
