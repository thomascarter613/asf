---
title: "Evaluation Harness CI Integration Planning"
description: "Plans how the executable evaluation harness should be integrated into GitHub Actions CI after the local harness baseline is stable."
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
  - "ADR-0022"
  - "ADR-0023"
related_work_packets:
  - "WP-0030"
  - "WP-0031"
related_documents:
  - "docs/planning/09-executable-evaluation-harness-planning.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "tools/eval/README.md"
  - "tools/eval/run-evaluations.sh"
  - "tools/eval/cases/README.md"
  - ".github/workflows/ci.yml"
  - "tools/check-repo-contract.sh"
---

# Evaluation Harness CI Integration Planning

## 1. Purpose

This document plans how the executable evaluation harness should be integrated into CI.

The executable evaluation harness exists locally under:

```text
tools/eval/
```

The baseline CI workflow exists at:

```text
.github/workflows/ci.yml
```

This document defines how those two pieces should be connected in a future implementation packet.

## 2. Current Phase

Current phase:

```text
Baseline Stabilization / Implementation Readiness
```

Runtime implementation status:

```text
Runtime implementation has not started.
```

Executable evaluation harness status:

```text
Local executable evaluation harness baseline exists.
```

CI integration status:

```text
The executable evaluation harness is not yet part of CI.
```

## 3. Planning Boundary

This document does not modify CI.

This document does not modify the executable evaluation harness.

This document does not modify the repo contract script.

This document does not start runtime implementation.

It only defines the intended CI integration plan for a future packet.

## 4. CI Integration Goal

The goal of CI integration is to make GitHub Actions run the same local executable evaluation harness that developers can run manually.

The future CI workflow should run:

```bash
bash tools/eval/run-evaluations.sh
```

after the existing repository verification step:

```bash
bun run verify
```

The initial CI evaluation-harness integration should remain small and strict.

## 5. Current CI Behavior

The current baseline CI workflow verifies the repository baseline using:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

This should remain intact.

The evaluation harness should be added as an additional verification step, not as a replacement for `bun run verify`.

## 6. Proposed Future CI Command Sequence

The future CI command sequence should become:

```bash
bun install --frozen-lockfile
bun run verify
bash tools/eval/run-evaluations.sh
git diff --check
```

Rationale:

1. `bun install --frozen-lockfile` verifies lockfile integrity.
2. `bun run verify` verifies the repository contract.
3. `bash tools/eval/run-evaluations.sh` verifies executable evaluation cases.
4. `git diff --check` verifies whitespace safety.

## 7. Proposed Workflow Step

The future workflow should add this step:

```yaml
      - name: Run executable evaluation harness
        run: bash tools/eval/run-evaluations.sh
```

Recommended placement:

```text
After "Verify repository"
Before "Check whitespace"
```

## 8. Repo Contract Update Requirement

When CI integration is implemented, the repo contract script should also be updated to require:

```text
tools/eval/README.md
tools/eval/run-evaluations.sh
tools/eval/cases/README.md
tools/eval/cases/EVAL-0001-active-baseline.json
tools/eval/cases/EVAL-0002-adr-gap-preservation.json
tools/eval/cases/EVAL-0003-package-manager-boundary.json
tools/eval/cases/EVAL-0004-ci-baseline-presence.json
tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json
tools/eval/results/.gitkeep
```

It should also require `.github/workflows/ci.yml` to contain:

```text
bash tools/eval/run-evaluations.sh
```

## 9. Package Script Decision

Do not add a package script yet.

The future CI integration should call:

```bash
bash tools/eval/run-evaluations.sh
```

directly.

Rationale:

1. It avoids expanding `package.json` too early.
2. It keeps the evaluation harness independent from package-manager scripts.
3. It avoids changing the package contract in the same packet.
4. It keeps the first integration easy to reason about.

A future packet may add:

```json
{
  "scripts": {
    "eval": "bash tools/eval/run-evaluations.sh"
  }
}
```

but that should not happen in the first CI integration packet.

## 10. Security Boundary

CI integration must not introduce secrets.

The future CI workflow must not reference:

```text
secrets.
env secrets
deployment tokens
package publishing tokens
cloud credentials
registry credentials
SSH keys
private API keys
```

The evaluation harness should only inspect explicitly listed repository-relative files.

## 11. Runtime Boundary

CI integration must not start runtime implementation.

The future packet must not add:

1. app code;
2. service code;
3. database code;
4. retrieval code;
5. agent runtime code;
6. product runtime tests;
7. deployment jobs;
8. package publishing jobs.

## 12. Acceptance Criteria for Future WP-0031

The future CI integration packet is acceptable when:

1. `.github/workflows/ci.yml` runs `bash tools/eval/run-evaluations.sh`.
2. The evaluation harness step runs after `bun run verify`.
3. The evaluation harness step runs before `git diff --check`.
4. `tools/check-repo-contract.sh` requires the evaluation harness files.
5. `tools/check-repo-contract.sh` requires the CI workflow to call the evaluation harness.
6. `bun run verify` passes locally.
7. `bash tools/eval/run-evaluations.sh` passes locally.
8. `./tools/check-repo-contract.sh` passes locally.
9. `git diff --check` passes locally.
10. No runtime implementation is added.
11. No secrets are introduced.
12. No package publishing or deployment is added.

## 13. Future Workflow Shape

The future workflow should be structurally equivalent to:

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read

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

      - name: Run executable evaluation harness
        run: bash tools/eval/run-evaluations.sh

      - name: Check whitespace
        run: git diff --check
```

## 14. Follow-Up Work

After this planning document is committed, the next work should be:

```text
WP-0031: Evaluation Harness CI Integration
```

That packet should modify:

```text
.github/workflows/ci.yml
tools/check-repo-contract.sh
```

and create:

```text
docs/work-packets/WP-0031-evaluation-harness-ci-integration.md
```

## 15. Current Boundary

This document does not integrate the evaluation harness into CI.

This document does not update the repo contract script.

This document does not start runtime implementation.

This document only plans the future CI integration.
