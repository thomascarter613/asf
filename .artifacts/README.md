---
title: "Artifacts"
description: "Local generated artifact boundary for verification reports and other non-source outputs."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - artifacts
  - verification
  - local-output
---

# Artifacts

## Purpose

This directory reserves a local boundary for generated artifacts.

Generated artifacts may include verification reports, local run outputs, temporary summaries, and other non-source outputs.

## Rules

1. Generated artifacts are not canonical memory by default.
2. Generated artifacts should not contain secrets.
3. Generated artifacts should not be required for normal repository understanding unless explicitly documented.
4. Generated reports may be ignored by Git unless they are intentionally promoted to durable documentation.
5. README files in this directory are committed to preserve the directory contract.

## Current Structure

```text
.artifacts/
└── verification/
    └── README.md
````

## Status

This directory is scaffolded for future generated outputs.