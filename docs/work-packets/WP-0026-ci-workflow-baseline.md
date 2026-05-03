---
title: "WP-0026: CI Workflow Baseline"
description: "Creates the initial GitHub Actions CI workflow for the Agentic Software Framework and updates the repository contract so the CI workflow becomes part of the enforced baseline."
status: "ready"
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
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0026"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0023"
related_documents:
  - "docs/planning/08-ci-baseline-planning.md"
  - "docs/work-packets/WP-0025-ci-baseline-planning.md"
  - "package.json"
  - "bun.lock"
  - "tools/check-repo-contract.sh"
  - ".github/workflows/ci.yml"
affected_files:
  - "docs/work-packets/WP-0026-ci-workflow-baseline.md"
  - ".github/workflows/ci.yml"
  - "tools/check-repo-contract.sh"
recommended_commit: "ci(repo): add baseline verification workflow"
---

# WP-0026: CI Workflow Baseline

## 1. Purpose

This work packet creates the first GitHub Actions workflow for the Agentic Software Framework.

The workflow verifies the repository baseline. It does not build runtime code, deploy, publish packages, run application tests, or require secrets.

This packet also updates the executable repository contract script so the new CI workflow becomes part of the enforced repository baseline.

## 2. Current Status

Current status:

```text
ready
````

This packet is ready after WP-0025 because CI baseline planning has defined the intended first CI behavior.

## 3. Source Inputs

Source inputs:

```text
docs/planning/08-ci-baseline-planning.md
docs/work-packets/WP-0025-ci-baseline-planning.md
package.json
bun.lock
tools/check-repo-contract.sh
```

## 4. Scope

In scope:

1. Create this work packet.
2. Create `.github/workflows/ci.yml`.
3. Update `tools/check-repo-contract.sh`.
4. Require `.github/workflows/ci.yml` in the repo contract.
5. Require the CI workflow to use GitHub Actions.
6. Require the CI workflow to install Bun.
7. Require the CI workflow to run `bun install --frozen-lockfile`.
8. Require the CI workflow to run `bun run verify`.
9. Require the CI workflow to run `git diff --check`.
10. Preserve runtime-not-started status.
11. Preserve executable evaluation harness-not-started status.

## 5. Non-Goals

Out of scope:

1. Starting runtime implementation.
2. Creating application packages.
3. Creating service packages.
4. Creating frontend app code.
5. Creating backend app code.
6. Creating database schema.
7. Adding test framework dependencies.
8. Adding lint dependencies.
9. Adding TypeScript configuration.
10. Adding deployment workflows.
11. Adding release workflows.
12. Adding package publishing.
13. Adding cloud credentials.
14. Adding secrets.
15. Adding Docker builds.
16. Adding executable evaluation harness implementation.

## 6. CI Workflow Decision

Create:

```text
.github/workflows/ci.yml
```

The workflow should run on:

```text
push to main
pull_request
```

The workflow should execute:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

The workflow must not require secrets.

The workflow must not deploy.

The workflow must not publish packages.

The workflow must not pretend runtime tests exist.

## 7. Risks

| Risk                                                    | Severity | Mitigation                                          |
| ------------------------------------------------------- | -------- | --------------------------------------------------- |
| CI starts too broad.                                    | High     | Limit workflow to repository baseline verification. |
| CI pretends runtime implementation exists.              | High     | Do not add build or runtime test jobs.              |
| CI introduces secrets too early.                        | High     | Initial CI uses no secrets.                         |
| CI drifts from Bun.                                     | High     | Use Bun setup and frozen Bun lockfile install.      |
| CI workflow exists but repo contract does not check it. | Medium   | Update `tools/check-repo-contract.sh`.              |
| Repo contract becomes too strict for current baseline.  | Medium   | Only require files and anchors that now exist.      |

## 8. Affected Files

Create:

```text
docs/work-packets/WP-0026-ci-workflow-baseline.md
.github/workflows/ci.yml
```

Modify:

```text
tools/check-repo-contract.sh
```

## 9. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0026-ci-workflow-baseline.md` exists.
2. `.github/workflows/ci.yml` exists.
3. CI runs on push to `main`.
4. CI runs on pull requests.
5. CI uses `actions/checkout`.
6. CI uses `oven-sh/setup-bun`.
7. CI runs `bun install --frozen-lockfile`.
8. CI runs `bun run verify`.
9. CI runs `git diff --check`.
10. CI does not require secrets.
11. CI does not deploy.
12. CI does not publish packages.
13. `tools/check-repo-contract.sh` requires the CI workflow.
14. `bun run verify` passes locally.
15. `./tools/check-repo-contract.sh` passes locally.
16. `git diff --check` passes locally.
17. The change is committed atomically.

## 10. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0026-ci-workflow-baseline.md && \
test -f .github/workflows/ci.yml && \
grep -q 'name: CI' .github/workflows/ci.yml && \
grep -q 'oven-sh/setup-bun@v2' .github/workflows/ci.yml && \
grep -q 'bun install --frozen-lockfile' .github/workflows/ci.yml && \
grep -q 'bun run verify' .github/workflows/ci.yml && \
grep -q 'git diff --check' .github/workflows/ci.yml && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 11. Security and Privacy Notes

This packet introduces a CI workflow with no secrets.

The workflow must not include:

1. deployment tokens;
2. package publishing tokens;
3. cloud credentials;
4. registry credentials;
5. SSH keys;
6. private API keys;
7. environment secrets.

## Recommended Atomic Commit

```text
ci(repo): add baseline verification workflow
```
