---
title: "Run Repo Contracts"
description: "Manual guide for running the initial executable Foundry repo contract checker."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - evals
  - repo-contracts
  - verification
  - runbook
---

# Run Repo Contracts

## Purpose

This runbook explains how to run the initial executable repo contract checker.

Repo contract checks verify that the repository satisfies its required structure, safe defaults, manifest fields, and documentation frontmatter expectations.

## Command

Run from the repository root:

```bash
python evals/repo-contracts/check-repo-contracts.py
````

Or, if the file is executable:

```bash
./evals/repo-contracts/check-repo-contracts.py
```

## Expected Result

The checker should print a list of passing checks and end with:

```text
Failed: 0
```

## What This Checker Validates

The initial checker validates:

1. required paths from `required-paths.json`;
2. forbidden paths from `forbidden-paths.json`;
3. required manifest fields from `required-manifest-fields.json`;
4. expected manifest safe defaults;
5. required array values in the project manifest;
6. required manifest path references;
7. Markdown frontmatter on all Markdown files;
8. JSON syntax on all JSON files.

## What This Checker Does Not Validate Yet

The initial checker does not yet validate:

1. complete YAML frontmatter schema;
2. frontmatter allowed status values;
3. Markdown heading structure;
4. template required sections;
5. JSONL event schema;
6. context-pack quality;
7. handoff quality;
8. work-packet lifecycle transitions;
9. secret scanning;
10. CI integration.

Those checks are future work.

## Failure Handling

If the checker fails:

1. read the failed rule ID;
2. inspect the failed message;
3. repair the missing, forbidden, or invalid artifact;
4. rerun the checker;
5. do not mark the related work as verified until the checker passes.

## Related Files

1. `evals/repo-contracts/check-repo-contracts.py`;
2. `evals/repo-contracts/repo-contract.manifest.json`;
3. `evals/repo-contracts/required-paths.json`;
4. `evals/repo-contracts/forbidden-paths.json`;
5. `evals/repo-contracts/required-manifest-fields.json`.

## Status

This runbook is active.

The repo contract checker is the first executable verification tool in the Agentic Software Foundry.