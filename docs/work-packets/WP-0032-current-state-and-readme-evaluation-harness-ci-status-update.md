---
title: "WP-0032: Current State and README Evaluation Harness CI Status Update"
description: "Updates README.md and docs/ai/00-current-state.md so repository orientation documents accurately record that the executable evaluation harness exists locally and now runs in the baseline CI workflow."
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
work_packet_id: "WP-0032"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "README.md"
  - "docs/ai/00-current-state.md"
  - ".github/workflows/ci.yml"
  - "tools/check-repo-contract.sh"
  - "tools/eval/README.md"
  - "tools/eval/run-evaluations.sh"
  - "docs/work-packets/WP-0031-evaluation-harness-ci-integration.md"
affected_files:
  - "docs/work-packets/WP-0032-current-state-and-readme-evaluation-harness-ci-status-update.md"
  - "README.md"
  - "docs/ai/00-current-state.md"
recommended_commit: "docs(project): update evaluation harness ci current state"
---

# WP-0032: Current State and README Evaluation Harness CI Status Update

## 1. Purpose

This work packet updates the repository orientation documents after the executable evaluation harness has been integrated into CI.

The repository now needs `README.md` and `docs/ai/00-current-state.md` to accurately state that:

1. the executable evaluation harness exists locally;
2. the executable evaluation harness lives under `tools/eval/`;
3. the evaluation runner is `tools/eval/run-evaluations.sh`;
4. the evaluation harness runs in CI;
5. `.github/workflows/ci.yml` calls `bash tools/eval/run-evaluations.sh`;
6. the repo contract script requires the evaluation harness files;
7. the repo contract script requires the CI workflow to call the evaluation harness;
8. runtime implementation has not started;
9. runtime tests still do not exist;
10. the next work should plan the first runtime implementation slice.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because WP-0031 integrates the executable evaluation harness into CI and updates the repository contract script to enforce the harness and CI integration.

## 3. Scope

In scope:

1. Create this work packet.
2. Update `README.md`.
3. Update `docs/ai/00-current-state.md`.
4. Record that executable evaluation harness implementation exists.
5. Record that the executable evaluation harness runs in CI.
6. Record that CI now runs `bash tools/eval/run-evaluations.sh`.
7. Record that runtime implementation has not started.
8. Record that runtime tests do not exist yet.
9. Preserve Bun package/tooling status.
10. Preserve ADR-0019 and ADR-0023 package-manager history.
11. Preserve known ADR gaps and baseline caveats.
12. Set up the next recommended packet as runtime implementation slice planning.

## 4. Non-Goals

Out of scope:

1. Changing `.github/workflows/ci.yml`.
2. Changing `tools/check-repo-contract.sh`.
3. Changing `tools/eval/run-evaluations.sh`.
4. Changing evaluation case files.
5. Starting runtime implementation.
6. Adding runtime tests.
7. Adding TypeScript configuration.
8. Adding package scripts.
9. Adding dependencies.
10. Adding deployment workflows.
11. Adding package publishing workflows.
12. Adding secrets.
13. Renumbering ADRs.
14. Deleting ADR-0019.
15. Resolving ADR-0013 and ADR-0015.
16. Moving architecture overview documents.
17. Removing or regenerating the root `tree` file.

## 5. Affected Files

Create:

```text
docs/work-packets/WP-0032-current-state-and-readme-evaluation-harness-ci-status-update.md
```

Modify:

```text
README.md
docs/ai/00-current-state.md
```

## 6. Acceptance Criteria

This packet is complete when:

1. `README.md` states the executable evaluation harness exists.
2. `README.md` references `tools/eval/`.
3. `README.md` references `tools/eval/run-evaluations.sh`.
4. `README.md` states the evaluation harness runs in CI.
5. `README.md` states CI runs `bash tools/eval/run-evaluations.sh`.
6. `README.md` states runtime implementation has not started.
7. `README.md` states runtime tests do not exist yet.
8. `docs/ai/00-current-state.md` records the same status.
9. `docs/ai/00-current-state.md` records WP-0032 as the current active packet.
10. `docs/ai/00-current-state.md` recommends WP-0033 as the next packet.
11. Existing baseline caveats remain preserved.
12. `bash tools/eval/run-evaluations.sh` passes locally.
13. `bun run verify` passes locally.
14. `./tools/check-repo-contract.sh` passes locally.
15. `git diff --check` passes locally.
16. The change is committed atomically.

## 7. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0032-current-state-and-readme-evaluation-harness-ci-status-update.md && \
test -f README.md && \
test -f docs/ai/00-current-state.md && \
grep -q 'Executable evaluation harness exists' README.md && \
grep -q 'tools/eval/run-evaluations.sh' README.md && \
grep -q 'bash tools/eval/run-evaluations.sh' README.md && \
grep -q 'Runtime implementation has not started' README.md && \
grep -q 'Runtime tests do not exist yet' README.md && \
grep -q 'Executable evaluation harness exists' docs/ai/00-current-state.md && \
grep -q 'tools/eval/run-evaluations.sh' docs/ai/00-current-state.md && \
grep -q 'bash tools/eval/run-evaluations.sh' docs/ai/00-current-state.md && \
grep -q 'WP-0032' docs/ai/00-current-state.md && \
grep -q 'WP-0033' docs/ai/00-current-state.md && \
grep -q 'Runtime implementation has not started' docs/ai/00-current-state.md && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 8. Security and Privacy Notes

This packet updates documentation only.

It must not introduce:

1. secrets;
2. tokens;
3. deployment keys;
4. cloud credentials;
5. registry credentials;
6. private API keys;
7. `.env` values;
8. private operational values.

## 9. Runtime Boundary

Runtime implementation has not started.

This packet does not add:

1. app code;
2. service code;
3. database code;
4. retrieval code;
5. agent runtime code;
6. runtime tests;
7. deployment behavior.

## 10. Recommended Atomic Commit

```text
docs(project): update evaluation harness ci current state
```

## 11. Follow-Up Work

Recommended next work:

```text
WP-0033: Runtime Implementation Slice Plan
```

Rationale:

1. local repository verification exists;
2. Bun package/tooling exists;
3. baseline CI exists;
4. executable evaluation harness exists;
5. executable evaluation harness runs in CI;
6. repository contract enforces the current baseline;
7. runtime implementation has not started;
8. the next step should define the first actual product/runtime code slice.
