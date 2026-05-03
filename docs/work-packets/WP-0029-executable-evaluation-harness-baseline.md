---
title: "WP-0029: Executable Evaluation Harness Baseline"
description: "Adds the first local, read-only, dependency-free executable evaluation harness for repository-governed SDLC baseline checks without changing CI or starting runtime implementation."
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
work_packet_id: "WP-0029"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/09-executable-evaluation-harness-planning.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "tools/eval/README.md"
  - "tools/eval/run-evaluations.sh"
  - "tools/eval/cases/README.md"
affected_files:
  - "docs/work-packets/WP-0029-executable-evaluation-harness-baseline.md"
  - "tools/eval/README.md"
  - "tools/eval/run-evaluations.sh"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0001-active-baseline.json"
  - "tools/eval/cases/EVAL-0002-adr-gap-preservation.json"
  - "tools/eval/cases/EVAL-0003-package-manager-boundary.json"
  - "tools/eval/cases/EVAL-0004-ci-baseline-presence.json"
  - "tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json"
  - "tools/eval/results/.gitkeep"
recommended_commit: "test(eval): add executable evaluation harness baseline"
---

# WP-0029: Executable Evaluation Harness Baseline

## 1. Purpose

This work packet adds the first executable evaluation harness baseline for the Agentic Software Framework.

The harness is local, read-only by default, dependency-free, and scoped to repository-governed SDLC baseline checks.

It does not start runtime product implementation.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. documentation-level evaluation harness baseline exists;
2. executable evaluation harness planning exists;
3. Bun package/tooling setup exists;
4. local repo contract verification exists;
5. baseline CI workflow exists;
6. runtime implementation has not started;
7. executable evaluation harness implementation has not yet been created.

## 3. Scope

In scope:

1. Create this work packet.
2. Create `tools/eval/README.md`.
3. Create `tools/eval/run-evaluations.sh`.
4. Create `tools/eval/cases/README.md`.
5. Create five initial JSON evaluation cases.
6. Create `tools/eval/results/.gitkeep`.
7. Keep the harness read-only by default.
8. Support `file_exists`.
9. Support `file_absent`.
10. Support `file_contains`.
11. Support `file_not_contains`.
12. Support `command_succeeds`.
13. Exit non-zero when a required active evaluation case fails.
14. Preserve runtime-not-started status.

## 4. Non-Goals

Out of scope:

1. Adding the evaluation harness to CI.
2. Updating `.github/workflows/ci.yml`.
3. Updating `package.json`.
4. Updating `tools/check-repo-contract.sh`.
5. Adding dependencies.
6. Adding TypeScript.
7. Adding Python.
8. Adding runtime product code.
9. Adding application tests.
10. Adding retrieval evaluation.
11. Adding model-output evaluation.
12. Adding agent-runtime evaluation.
13. Writing evaluation result files by default.
14. Creating reports.
15. Uploading CI artifacts.

## 5. Affected Files

Create:

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

Also create:

```text
docs/work-packets/WP-0029-executable-evaluation-harness-baseline.md
```

## 6. Initial Evaluation Cases

Initial cases:

1. `EVAL-0001` — active baseline is documented.
2. `EVAL-0002` — ADR gap preservation is documented.
3. `EVAL-0003` — package-manager boundary is enforced.
4. `EVAL-0004` — CI baseline exists.
5. `EVAL-0005` — runtime-not-started boundary is preserved.

## 7. Acceptance Criteria

This packet is complete when:

1. `tools/eval/README.md` exists.
2. `tools/eval/run-evaluations.sh` exists.
3. `tools/eval/run-evaluations.sh` is executable.
4. `tools/eval/cases/README.md` exists.
5. five initial case JSON files exist.
6. `tools/eval/results/.gitkeep` exists.
7. the runner supports `file_exists`.
8. the runner supports `file_absent`.
9. the runner supports `file_contains`.
10. the runner supports `file_not_contains`.
11. the runner supports `command_succeeds`.
12. the runner exits `0` when all required active cases pass.
13. the runner exits non-zero when a required active case fails.
14. `bash tools/eval/run-evaluations.sh` passes locally.
15. `bun run verify` passes locally.
16. `./tools/check-repo-contract.sh` passes locally.
17. `git diff --check` passes locally.
18. CI is not modified.
19. Runtime implementation is not started.
20. The change is committed atomically.

## 8. Verification Commands

Run:

```bash
chmod +x tools/eval/run-evaluations.sh

test -f docs/work-packets/WP-0029-executable-evaluation-harness-baseline.md && \
test -f tools/eval/README.md && \
test -x tools/eval/run-evaluations.sh && \
test -f tools/eval/cases/README.md && \
test -f tools/eval/cases/EVAL-0001-active-baseline.json && \
test -f tools/eval/cases/EVAL-0002-adr-gap-preservation.json && \
test -f tools/eval/cases/EVAL-0003-package-manager-boundary.json && \
test -f tools/eval/cases/EVAL-0004-ci-baseline-presence.json && \
test -f tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json && \
test -f tools/eval/results/.gitkeep && \
grep -q 'file_exists' tools/eval/run-evaluations.sh && \
grep -q 'file_absent' tools/eval/run-evaluations.sh && \
grep -q 'file_contains' tools/eval/run-evaluations.sh && \
grep -q 'file_not_contains' tools/eval/run-evaluations.sh && \
grep -q 'command_succeeds' tools/eval/run-evaluations.sh && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 9. Security and Privacy Notes

The harness must not inspect secrets or sensitive files.

The initial harness only reads explicitly listed repository-relative files in committed evaluation cases.

It must not read:

1. `.env` files;
2. private keys;
3. tokens;
4. credentials;
5. cloud secrets;
6. SSH keys;
7. local absolute paths;
8. dependency directories;
9. generated caches;
10. files outside the repository.

## 10. Recommended Atomic Commit

```text
test(eval): add executable evaluation harness baseline
```

## 11. Follow-Up Work

Recommended next work:

```text
WP-0030: Evaluation Harness CI Integration Planning
```

Rationale:

1. The local executable harness should be created first.
2. CI integration should be planned before modifying CI.
3. The repo contract can later be updated to require the harness after the local baseline stabilizes.
