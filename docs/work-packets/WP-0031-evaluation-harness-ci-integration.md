---
title: "WP-0031: Evaluation Harness CI Integration"
description: "Integrates the local executable evaluation harness into the baseline GitHub Actions CI workflow and updates the repository contract so the harness and CI integration are enforced."
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
work_packet_id: "WP-0031"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/10-evaluation-harness-ci-integration-planning.md"
  - "docs/planning/09-executable-evaluation-harness-planning.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "tools/eval/README.md"
  - "tools/eval/run-evaluations.sh"
  - "tools/eval/cases/README.md"
  - ".github/workflows/ci.yml"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0031-evaluation-harness-ci-integration.md"
  - ".github/workflows/ci.yml"
  - "tools/check-repo-contract.sh"
recommended_commit: "ci(eval): run evaluation harness in baseline workflow"
---

# WP-0031: Evaluation Harness CI Integration

## 1. Purpose

This work packet integrates the local executable evaluation harness into the baseline GitHub Actions CI workflow.

It also updates the repository contract script so the evaluation harness files and CI integration are part of the enforced repository baseline.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. baseline GitHub Actions CI exists;
2. local executable evaluation harness baseline exists;
3. evaluation harness CI integration planning exists;
4. Bun package/tooling setup exists;
5. local repo contract verification exists;
6. runtime implementation has not started.

## 3. Scope

In scope:

1. Create this work packet.
2. Update `.github/workflows/ci.yml`.
3. Add a CI step that runs `bash tools/eval/run-evaluations.sh`.
4. Place the evaluation harness step after `bun run verify`.
5. Place the evaluation harness step before `git diff --check`.
6. Update `tools/check-repo-contract.sh`.
7. Require evaluation harness files in the repo contract.
8. Require the CI workflow to call the evaluation harness.
9. Preserve existing CI behavior.
10. Preserve runtime-not-started status.

## 4. Non-Goals

Out of scope:

1. Starting runtime implementation.
2. Adding runtime tests.
3. Adding app or service code.
4. Adding dependencies.
5. Adding package scripts.
6. Adding deployment jobs.
7. Adding package publishing jobs.
8. Adding secrets.
9. Writing evaluation result artifacts by default.
10. Uploading CI artifacts.
11. Changing evaluation case semantics.
12. Creating retrieval evaluation.
13. Creating agent runtime evaluation.
14. Creating model-output evaluation.

## 5. CI Integration Decision

The CI workflow should run:

```bash
bash tools/eval/run-evaluations.sh
```

The resulting CI command sequence should be:

```bash
bun install --frozen-lockfile
bun run verify
bash tools/eval/run-evaluations.sh
git diff --check
```

The evaluation harness does not replace repo contract verification.

It extends baseline verification with executable evaluation cases.

## 6. Affected Files

Create:

```text
docs/work-packets/WP-0031-evaluation-harness-ci-integration.md
```

Modify:

```text
.github/workflows/ci.yml
tools/check-repo-contract.sh
```

## 7. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0031-evaluation-harness-ci-integration.md` exists.
2. `.github/workflows/ci.yml` runs `bash tools/eval/run-evaluations.sh`.
3. The evaluation harness CI step appears after `bun run verify`.
4. The evaluation harness CI step appears before `git diff --check`.
5. `tools/check-repo-contract.sh` requires `tools/eval/README.md`.
6. `tools/check-repo-contract.sh` requires `tools/eval/run-evaluations.sh`.
7. `tools/check-repo-contract.sh` requires initial evaluation case files.
8. `tools/check-repo-contract.sh` requires `tools/eval/results/.gitkeep`.
9. `tools/check-repo-contract.sh` requires `.github/workflows/ci.yml` to call the evaluation harness.
10. `bash tools/eval/run-evaluations.sh` passes locally.
11. `bun run verify` passes locally.
12. `./tools/check-repo-contract.sh` passes locally.
13. `git diff --check` passes locally.
14. No runtime implementation is added.
15. No secrets are introduced.
16. The change is committed atomically.

## 8. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0031-evaluation-harness-ci-integration.md && \
test -f .github/workflows/ci.yml && \
test -f tools/check-repo-contract.sh && \
grep -q 'bash tools/eval/run-evaluations.sh' .github/workflows/ci.yml && \
grep -q 'tools/eval/README.md' tools/check-repo-contract.sh && \
grep -q 'tools/eval/run-evaluations.sh' tools/check-repo-contract.sh && \
grep -q 'EVAL-0001-active-baseline.json' tools/check-repo-contract.sh && \
grep -q 'EVAL-0005-runtime-not-started-boundary.json' tools/check-repo-contract.sh && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 9. Security and Privacy Notes

This packet must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. deployment keys;
5. package publishing credentials;
6. cloud credentials;
7. private registry credentials;
8. private API keys;
9. `.env` values.

The CI workflow must continue to use read-only repository contents permissions.

## 10. Runtime Boundary

Runtime implementation has not started.

This packet does not add:

1. app code;
2. service code;
3. database code;
4. retrieval code;
5. agent runtime code;
6. runtime tests;
7. deployment behavior.

## 11. Recommended Atomic Commit

```text
ci(eval): run evaluation harness in baseline workflow
```

## 12. Follow-Up Work

Recommended next work:

```text
WP-0032: Current State and README Evaluation Harness CI Status Update
```

That packet should update `README.md` and `docs/ai/00-current-state.md` so future sessions know the executable evaluation harness is now part of CI.
