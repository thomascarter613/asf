---
title: "Ranking Policy"
description: "Policy for ranking retrieved context in Argos."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* argos
* ranking
* retrieval

---

# Ranking Policy

## Purpose

This policy defines how retrieved context should be prioritized.

## Default Ranking Principles

Prefer:

1. canonical over candidate;
2. accepted ADRs over draft notes;
3. active policies over archived policies;
4. verified context over inferred context;
5. current context over superseded context;
6. source artifacts over generated summaries;
7. task-specific relevance over broad historical relevance.

## Warnings

Retrieved material should be labeled when it is:

1. stale;
2. superseded;
3. disputed;
4. candidate;
5. rejected;
6. external;
7. inferred.

## Status

This policy is active.

Automated ranking is not implemented yet.
