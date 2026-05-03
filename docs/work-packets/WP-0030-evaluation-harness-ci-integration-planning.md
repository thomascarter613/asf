---
title: "WP-0030: Evaluation Harness CI Integration Planning"
description: "Plans how the local executable evaluation harness should be integrated into the baseline GitHub Actions CI workflow without modifying CI yet."
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
work_packet_id: "WP-0030"
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
  - "docs/work-packets/WP-0030-evaluation-harness-ci-integration-planning.md"
  - "docs/planning/10-evaluation-harness-ci-integration-planning.md"
recommended_commit: "docs(ci): plan evaluation harness ci integration"
---

# WP-0030: Evaluation Harness CI Integration Planning

## 1. Purpose

This work packet plans how the local executable evaluation harness should be integrated into CI.

It does not modify CI.

It does not modify the evaluation harness.

It does not modify the repo contract script.

It defines the future integration path for WP-0031.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. the local executable evaluation harness baseline exists;
2. baseline GitHub Actions CI exists;
3. local Bun verification exists;
4. the repository contract script exists;
5. runtime implementation has not started;
6. the evaluation harness is not yet part of CI.

## 3. Source Inputs

Source inputs:

```text
tools/eval/README.md
tools/eval/run-evaluations.sh
tools/eval/cases/README.md
tools/eval/cases/EVAL-0001-active-baseline.json
tools/eval/cases/EVAL-0002-adr-gap-preservation.json
tools/eval/cases/EVAL-0003-package-manager-boundary.json
tools/eval/cases/EVAL-0004-ci-baseline-presence.json
tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json
.github/workflows/ci.yml
tools/check-repo-contract.sh
docs/planning/09-executable-evaluation-harness-planning.md
```

## 4. Scope

In scope:

1. Create this work packet.
2. Create `docs/planning/10-evaluation-harness-ci-integration-planning.md`.
3. Define how CI should run the evaluation harness.
4. Define the future CI workflow step.
5. Define where the future CI workflow step should be placed.
6. Define repo contract updates required in the future integration packet.
7. Define security boundaries.
8. Define runtime boundaries.
9. Define acceptance criteria for WP-0031.

## 5. Non-Goals

Out of scope:

1. Updating `.github/workflows/ci.yml`.
2. Updating `tools/check-repo-contract.sh`.
3. Updating `package.json`.
4. Adding package scripts.
5. Adding dependencies.
6. Creating runtime implementation.
7. Creating runtime tests.
8. Creating deployment workflows.
9. Creating package publishing workflows.
10. Adding secrets.
11. Changing evaluation case files.
12. Writing evaluation result artifacts.
13. Uploading CI artifacts.

## 6. Planned CI Integration

The future CI integration should add this command:

```bash
bash tools/eval/run-evaluations.sh
```

The future CI sequence should be:

```bash
bun install --frozen-lockfile
bun run verify
bash tools/eval/run-evaluations.sh
git diff --check
```

The evaluation harness should be run after repo verification and before whitespace checks.

## 7. Planned Repo Contract Integration

The future repo contract update should require:

1. evaluation harness files exist;
2. evaluation harness runner is executable;
3. initial evaluation case files exist;
4. CI workflow calls `bash tools/eval/run-evaluations.sh`;
5. CI workflow still runs `bun run verify`;
6. CI workflow still runs `git diff --check`;
7. CI workflow still does not reference secrets;
8. CI workflow still does not deploy;
9. CI workflow still does not publish packages.

## 8. Security and Privacy Notes

This packet creates documentation only.

The future integration must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. deployment keys;
5. package publishing credentials;
6. cloud credentials;
7. private registry credentials;
8. private API keys;
9. `.env` values.

The future workflow should continue using:

```yaml
permissions:
  contents: read
```

## 9. Runtime Boundary

This packet and the future integration packet must preserve:

```text
Runtime implementation has not started.
```

The future integration packet must not create runtime code.

The future integration packet must not add runtime tests.

The future integration packet must not claim application behavior is verified.

## 10. Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Evaluation harness becomes CI-enforced before stable. | Medium | Keep this packet planning-only and integrate in WP-0031. |
| CI step placement causes confusing failures. | Medium | Run harness after repo contract verification. |
| CI expands into runtime behavior too early. | High | Do not add runtime tests or build steps. |
| CI begins using secrets. | High | Keep contents read-only and no secrets. |
| Repo contract does not enforce harness integration. | Medium | WP-0031 should update the repo contract. |
| Package scripts expand too early. | Low | Call harness directly with Bash. |

## 11. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0030-evaluation-harness-ci-integration-planning.md` exists.
2. `docs/planning/10-evaluation-harness-ci-integration-planning.md` exists.
3. The planning document references `bash tools/eval/run-evaluations.sh`.
4. The planning document defines the future CI command sequence.
5. The planning document states that CI is not modified by this packet.
6. The planning document states that runtime implementation has not started.
7. The planning document states that no secrets should be introduced.
8. `.github/workflows/ci.yml` is not modified.
9. `tools/check-repo-contract.sh` is not modified.
10. Local verification passes.

## 12. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0030-evaluation-harness-ci-integration-planning.md && \
test -f docs/planning/10-evaluation-harness-ci-integration-planning.md && \
grep -q '^# Evaluation Harness CI Integration Planning$' docs/planning/10-evaluation-harness-ci-integration-planning.md && \
grep -q 'bash tools/eval/run-evaluations.sh' docs/planning/10-evaluation-harness-ci-integration-planning.md && \
grep -q 'bun run verify' docs/planning/10-evaluation-harness-ci-integration-planning.md && \
grep -q 'git diff --check' docs/planning/10-evaluation-harness-ci-integration-planning.md && \
grep -q 'This document does not modify CI' docs/planning/10-evaluation-harness-ci-integration-planning.md && \
grep -q 'Runtime implementation has not started' docs/planning/10-evaluation-harness-ci-integration-planning.md && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 13. Recommended Atomic Commit

```text
docs(ci): plan evaluation harness ci integration
```

## 14. Follow-Up Work

Recommended next work:

```text
WP-0031: Evaluation Harness CI Integration
```

Expected future affected files:

```text
docs/work-packets/WP-0031-evaluation-harness-ci-integration.md
.github/workflows/ci.yml
tools/check-repo-contract.sh
```
