---
title: "Tools"
description: "Local helper tooling for verifying and maintaining the Agentic Software Foundry repository."
status: "active"
version: "0.2.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - tools
  - verification
  - local-tooling
---

# Tools

## Purpose

This directory contains local helper tooling for the Agentic Software Foundry.

The tools in this directory make the repository easier to verify, maintain, and evolve without requiring cloud services, remote automation, external dependencies, or heavyweight package tooling.

## Current Tooling Policy

The current post-v1 tooling baseline is maximal local-first.

It prioritizes:

1. maximum local confidence;
2. maximum repeatability;
3. maximum repository hygiene;
4. maximum verification coverage;
5. minimum external dependency risk;
6. zero cloud dependency;
7. zero remote automation;
8. zero Bazel.

## Current Structure

```text
tools/
├── README.md
├── config/
│   ├── README.md
│   ├── frontmatter-required-fields.json
│   ├── jsonl-event-required-fields.json
│   └── markdown-required-sections.json
└── scripts/
    ├── README.md
    ├── check-file-hygiene.py
    ├── check-frontmatter.py
    ├── check-jsonl.py
    ├── check-local-state.py
    ├── check-markdown-sections.py
    └── verify.sh
````

## Primary Command

Run:

```bash
tools/scripts/verify.sh
```

Or:

```bash
make verify
```

## Rules

Local tooling must:

1. preserve safe defaults;
2. avoid secrets;
3. avoid external network calls unless explicitly approved;
4. avoid dependency installation unless justified by a work packet;
5. keep verification reproducible;
6. report failures clearly;
7. avoid Bazel;
8. run from a clean local checkout with Python standard library only.

## Status

The maximal local tooling baseline is active.