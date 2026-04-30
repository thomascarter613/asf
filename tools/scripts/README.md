---
title: "Tool Scripts"
description: "Local executable scripts for verifying the Agentic Software Foundry repository."
status: "active"
version: "0.2.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* tools
* scripts
* verification

---

# Tool Scripts

## Purpose

This directory contains local executable scripts for the Agentic Software Foundry.

These scripts are dependency-free and use only shell plus the Python standard library.

## Scripts

```text
tools/scripts/
├── check-file-hygiene.py
├── check-frontmatter.py
├── check-jsonl.py
├── check-local-state.py
├── check-markdown-sections.py
└── verify.sh
```

## Primary Command

Run from the repository root:

```bash
tools/scripts/verify.sh
```

Expected final result:

```text
All local verification checks passed.
```

## Checks

The local verification suite checks:

1. repo contract rules;
2. JSON syntax;
3. JSONL event structure;
4. duplicate event IDs;
5. event related artifact references;
6. Markdown frontmatter fields;
7. ADR frontmatter fields;
8. template frontmatter fields;
9. Markdown required sections;
10. file hygiene;
11. executable script bits;
12. latest local state and active handoff.

## Status

This is the maximal local tooling baseline.