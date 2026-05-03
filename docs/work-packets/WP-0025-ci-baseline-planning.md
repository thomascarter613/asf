---
title: "WP-0025: CI Baseline Planning"
description: "Plans the first GitHub Actions CI baseline for the Agentic Software Framework without creating workflows or starting runtime implementation."
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
work_packet_id: "WP-0025"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0023"
related_documents:
  - "docs/planning/08-ci-baseline-planning.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md"
  - "package.json"
  - "bun.lock"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0025-ci-baseline-planning.md"
  - "docs/planning/08-ci-baseline-planning.md"
recommended_commit: "docs(ci): add ci baseline planning"
---

# WP-0025: CI Baseline Planning

## 1. Purpose

This work packet plans the first continuous integration baseline for the Agentic Software Framework.

The purpose is to define what CI should do before creating `.github/workflows/ci.yml`.

This preserves the project’s current discipline:

1. plan before implementation;
2. verify before committing;
3. avoid premature runtime work;
4. keep CI aligned with Bun;
5. keep CI aligned with the repository contract.

## 2. Current Status

Current status:

```text
ready
````

This packet is ready because:

1. Bun package/tooling setup exists.
2. `package.json` exists.
3. `bun.lock` exists.
4. `bun run verify` is the canonical verification command.
5. `tools/check-repo-contract.sh` exists.
6. The repo contract script is Bun-aware.
7. README and current-state documentation have been synchronized.
8. CI workflows do not exist yet.
9. Runtime implementation has not started.

## 3. Source Inputs

Source inputs:

```text
package.json
bun.lock
tools/check-repo-contract.sh
docs/planning/07-package-and-tooling-baseline.md
docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md
docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md
```

## 4. Scope

In scope:

1. Create this work packet.
2. Create `docs/planning/08-ci-baseline-planning.md`.
3. Define the first CI provider.
4. Define the first CI trigger model.
5. Define the first CI job.
6. Define CI verification commands.
7. Define what CI must not do yet.
8. Define acceptance criteria for the future workflow packet.
9. Preserve runtime-not-started status.
10. Preserve executable evaluation harness-not-started status.

## 5. Non-Goals

Out of scope:

1. Creating `.github/workflows/ci.yml`.
2. Creating `.github/workflows/`.
3. Starting runtime implementation.
4. Adding application code.
5. Adding test framework dependencies.
6. Adding lint dependencies.
7. Adding TypeScript configuration.
8. Adding deployment configuration.
9. Adding cloud credentials.
10. Adding package publishing.
11. Adding Docker builds.
12. Adding database services.
13. Adding executable evaluation harness implementation.

## 6. CI Baseline Decision

The first CI baseline should use:

```text
GitHub Actions
```

The first workflow should eventually be:

```text
.github/workflows/ci.yml
```

The first workflow should run:

```text
bun install --frozen-lockfile
bun run verify
git diff --check
```

The first workflow should not require secrets.

The first workflow should not deploy.

The first workflow should not publish packages.

The first workflow should not run runtime tests because runtime implementation has not started.

## 7. Risks

| Risk                                                  | Severity | Mitigation                                                          |
| ----------------------------------------------------- | -------- | ------------------------------------------------------------------- |
| CI starts too broad.                                  | High     | Limit first workflow to repository verification.                    |
| CI pretends runtime implementation exists.            | High     | Do not add runtime test/build steps yet.                            |
| CI introduces secrets too early.                      | High     | Initial CI must require no secrets.                                 |
| CI drifts from Bun.                                   | High     | Use Bun setup and `bun install --frozen-lockfile`.                  |
| CI becomes inconsistent with local verification.      | Medium   | Run `bun run verify` in CI.                                         |
| CI workflow is created before planning is accepted.   | Medium   | This packet creates planning only.                                  |
| Repo contract script becomes stale after CI is added. | Medium   | Future WP-0026 should update repo contract after workflow creation. |

## 8. Affected Files

Create:

```text
docs/work-packets/WP-0025-ci-baseline-planning.md
docs/planning/08-ci-baseline-planning.md
```

Do not create:

```text
.github/workflows/ci.yml
```

## 9. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0025-ci-baseline-planning.md` exists.
2. `docs/planning/08-ci-baseline-planning.md` exists.
3. The planning document identifies GitHub Actions as the first CI provider.
4. The planning document defines `push` and `pull_request` triggers.
5. The planning document defines Bun setup.
6. The planning document defines `bun install --frozen-lockfile`.
7. The planning document defines `bun run verify`.
8. The planning document defines `git diff --check`.
9. The planning document states CI must not require secrets.
10. The planning document states CI must not deploy.
11. The planning document states CI must not publish packages.
12. The planning document states runtime implementation has not started.
13. No workflow file is created.
14. No runtime code is created.
15. Local verification passes.

## 10. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0025-ci-baseline-planning.md && \
test -f docs/planning/08-ci-baseline-planning.md && \
grep -q 'GitHub Actions' docs/planning/08-ci-baseline-planning.md && \
grep -q 'bun install --frozen-lockfile' docs/planning/08-ci-baseline-planning.md && \
grep -q 'bun run verify' docs/planning/08-ci-baseline-planning.md && \
grep -q 'git diff --check' docs/planning/08-ci-baseline-planning.md && \
grep -q 'Runtime implementation has not started' docs/planning/08-ci-baseline-planning.md && \
test ! -f .github/workflows/ci.yml && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 11. Security and Privacy Notes

This packet introduces documentation only.

It must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. deployment keys;
5. package publishing credentials;
6. cloud provider credentials;
7. private registry credentials;
8. environment files.

The future CI baseline should also avoid secrets.

## 12. Recommended Atomic Commit

```text
docs(ci): add ci baseline planning
```

## 13. Follow-Up Work

Recommended next work:

```text
WP-0026: CI Workflow Baseline
```

Expected future affected files:

```text
.github/workflows/ci.yml
tools/check-repo-contract.sh
docs/work-packets/WP-0026-ci-workflow-baseline.md
```

WP-0026 should create the actual workflow and update the repo contract script to require it.