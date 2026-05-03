---
title: "CI Baseline Planning"
description: "Defines the initial continuous integration baseline for the Agentic Software Framework before any GitHub Actions workflow is created."
status: "active"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "planning"
canonical: false
related_adrs:
  - "ADR-0021"
  - "ADR-0023"
related_work_packets:
  - "WP-0025"
  - "WP-0026"
related_documents:
  - "package.json"
  - "bun.lock"
  - "tools/check-repo-contract.sh"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md"
---

# CI Baseline Planning

## 1. Purpose

This document defines the intended first continuous integration baseline for the Agentic Software Framework.

The goal is to plan CI before creating workflow files, so CI is introduced deliberately, minimally, and in alignment with the current Bun-based repository contract.

## 2. Current Phase

Current phase:

```text
Baseline Stabilization / Implementation Readiness
````

Runtime implementation status:

```text
Runtime implementation has not started.
```

CI status:

```text
CI workflows do not exist yet.
```

Package/tooling status:

```text
Bun package/tooling setup exists.
```

Current local verification command:

```bash
bun run verify
```

Current direct repo contract command:

```bash
./tools/check-repo-contract.sh
```

## 3. CI Design Principle

The first CI workflow should verify the repository baseline, not application runtime behavior.

Because runtime implementation has not started, the first CI baseline should not pretend that application tests, build jobs, service checks, database migrations, container builds, or deployment checks exist.

The first CI baseline should be intentionally small:

1. checkout repository;
2. install Bun;
3. install dependencies from the committed lockfile;
4. run repository verification;
5. run whitespace diff checks;
6. fail on forbidden package-manager drift.

## 4. Initial CI Provider

The first CI provider should be:

```text
GitHub Actions
```

Rationale:

1. The repository is hosted on GitHub.
2. GitHub Actions is the simplest native CI path.
3. It requires no additional service integration for the first baseline.
4. It can run the same Bun verification command used locally.
5. It supports future expansion into tests, linting, typechecking, security scanning, artifact upload, and deployment workflows.

## 5. Initial Workflow Scope

The initial workflow should be created later at:

```text
.github/workflows/ci.yml
```

The initial workflow should run on:

```text
push
pull_request
```

The initial workflow should target the default branch:

```text
main
```

The initial job should verify:

```text
bun run verify
git diff --check
```

Because `bun run verify` delegates to the repo contract script, this also verifies:

1. required root files;
2. required documentation directories;
3. required ADR files;
4. known ADR gap preservation;
5. work packet baseline files;
6. Bun package/tooling files;
7. forbidden pnpm files;
8. package script correctness;
9. baseline phrase anchors;
10. evaluation harness anchors;
11. implementation readiness anchors.

## 6. Initial CI Non-Goals

The initial CI workflow must not introduce:

1. runtime application build steps;
2. frontend app build steps;
3. backend service build steps;
4. database startup;
5. Docker image builds;
6. deployment jobs;
7. release jobs;
8. test framework installation;
9. TypeScript typechecking unless a future packet adds TypeScript configuration;
10. linting unless a future packet adds a linter;
11. formatting unless a future packet adds a formatter;
12. secrets;
13. cloud credentials;
14. registry publishing;
15. package publication.

## 7. Expected Initial Workflow Shape

The later CI workflow should be structurally equivalent to:

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  verify:
    name: Verify repository baseline
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Verify repository
        run: bun run verify

      - name: Check whitespace
        run: git diff --check
```

This is a planning target only. The workflow should not be created by this planning document.

## 8. Lockfile Policy

The first CI workflow should require the committed Bun lockfile.

Expected command:

```bash
bun install --frozen-lockfile
```

Rationale:

1. CI should not rewrite lockfiles.
2. CI should detect missing or stale lockfiles.
3. CI should preserve reproducibility.
4. CI should align with ADR-0023.
5. CI should prevent accidental package-manager drift.

## 9. Package-Manager Drift Protection

The repository contract already forbids:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

The first CI workflow should rely on `bun run verify` to enforce this locally and remotely.

If pnpm files are introduced later, CI should fail.

## 10. Security Baseline

The first CI workflow should not require secrets.

The first CI workflow should not introduce:

1. package publishing tokens;
2. deployment credentials;
3. cloud credentials;
4. database passwords;
5. API keys;
6. private registry credentials;
7. SSH keys.

This keeps CI safe while the repository is still in baseline stabilization.

## 11. Future CI Expansion

Future CI packets may add:

1. Markdown linting;
2. YAML validation;
3. shellcheck;
4. actionlint;
5. dependency review;
6. secret scanning;
7. TypeScript typechecking;
8. unit tests;
9. integration tests;
10. executable evaluation harness checks;
11. container build checks;
12. OpenAPI validation;
13. database migration checks;
14. security scanning;
15. artifact uploads.

Those should be added only when the repository has the corresponding source files, configuration files, or runtime implementation to justify them.

## 12. Acceptance Criteria for Future CI Workflow

The future CI workflow is acceptable when:

1. `.github/workflows/ci.yml` exists.
2. The workflow runs on `push` to `main`.
3. The workflow runs on `pull_request`.
4. The workflow uses Bun.
5. The workflow runs `bun install --frozen-lockfile`.
6. The workflow runs `bun run verify`.
7. The workflow runs `git diff --check`.
8. The workflow does not require secrets.
9. The workflow does not deploy.
10. The workflow does not publish packages.
11. The workflow does not pretend runtime tests exist.
12. Local verification passes before commit.

## 13. Recommended Next Work

After this planning document is committed, the next work should be:

```text
WP-0026: CI Workflow Baseline
```

That packet should create:

```text
.github/workflows/ci.yml
```

and update the repo contract script to require the CI workflow only after the workflow file exists.

## 14. Current Boundary

This document does not create CI.

This document does not start runtime implementation.

This document only defines the baseline CI plan.

