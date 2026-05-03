---
title: "WP-0028: Executable Evaluation Harness Planning"
description: "Plans the first executable evaluation harness for the Agentic Software Framework without creating harness code, changing CI, or starting runtime implementation."
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
work_packet_id: "WP-0028"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/09-executable-evaluation-harness-planning.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/WP-0015-evaluation-harness-baseline.md"
  - "docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md"
  - "tools/check-repo-contract.sh"
  - "package.json"
  - "bun.lock"
  - ".github/workflows/ci.yml"
affected_files:
  - "docs/work-packets/WP-0028-executable-evaluation-harness-planning.md"
  - "docs/planning/09-executable-evaluation-harness-planning.md"
recommended_commit: "docs(verification): plan executable evaluation harness"
---

# WP-0028: Executable Evaluation Harness Planning

## 1. Purpose

This work packet plans the first executable evaluation harness for the Agentic Software Framework.

The repository already has a documentation-level evaluation harness baseline. This packet defines the executable harness direction before any harness code is created.

The goal is to preserve disciplined sequencing:

1. baseline evaluation model;
2. local repo contract verification;
3. CI baseline verification;
4. executable evaluation harness planning;
5. executable evaluation harness baseline;
6. CI integration for evaluation harness;
7. runtime implementation planning.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. documentation-level evaluation harness baseline exists;
2. Bun package/tooling setup exists;
3. local repo contract verification exists;
4. baseline CI workflow exists;
5. runtime implementation has not started;
6. executable evaluation harness implementation does not exist yet.

## 3. Source Inputs

Source inputs:

```text
docs/verification/02-evaluation-harness-baseline.md
docs/work-packets/WP-0015-evaluation-harness-baseline.md
docs/planning/08-ci-baseline-planning.md
docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md
tools/check-repo-contract.sh
package.json
bun.lock
.github/workflows/ci.yml
```

## 4. Scope

In scope:

1. Create this work packet.
2. Create `docs/planning/09-executable-evaluation-harness-planning.md`.
3. Define the purpose of the executable evaluation harness.
4. Define initial executable harness file layout.
5. Define initial case format.
6. Define initial check types.
7. Define initial evaluation cases.
8. Define runner behavior.
9. Define relationship to repo contract script.
10. Define relationship to CI.
11. Define security and privacy boundaries.
12. Define acceptance criteria for WP-0029.

## 5. Non-Goals

Out of scope:

1. Creating `tools/eval/`.
2. Creating executable harness scripts.
3. Creating evaluation case JSON files.
4. Adding package scripts.
5. Adding dependencies.
6. Updating CI.
7. Updating repo contract script.
8. Starting runtime implementation.
9. Creating runtime tests.
10. Evaluating retrieval quality.
11. Evaluating model output quality.
12. Evaluating agent runtime behavior.
13. Creating database schema.
14. Creating application source code.
15. Adding deployment or publishing steps.

## 6. Planning Decision

The first executable evaluation harness should be local, deterministic, dependency-free, read-only by default, and repository-scoped.

The recommended future layout is:

```text
tools/eval/
```

The recommended future command is:

```bash
bash tools/eval/run-evaluations.sh
```

The first harness should use Bash and repository-relative files.

The first harness should not add dependencies.

The first harness should not be added to CI until a follow-up packet.

## 7. Initial Evaluation Scope

Initial executable cases should evaluate:

1. active baseline language;
2. ADR gap preservation;
3. package-manager boundary preservation;
4. CI baseline presence;
5. runtime-not-started boundary.

Initial executable cases should not evaluate:

1. runtime product behavior;
2. retrieval quality;
3. agent execution;
4. model output;
5. database behavior;
6. deployment behavior.

## 8. Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Harness scope becomes too broad. | High | Limit first executable cases to baseline repository behavior. |
| Harness starts runtime implementation by accident. | High | Keep all files under `tools/eval/` and avoid app/service code. |
| Harness duplicates repo contract too heavily. | Medium | Accept limited overlap initially; refine later. |
| Harness is added to CI before stable. | Medium | Keep CI integration as a follow-up packet. |
| Harness reads sensitive files. | High | Only inspect explicitly listed repository-relative files. |
| Harness introduces unnecessary dependencies. | Medium | Use shell-only first implementation. |
| Harness output is ambiguous. | Medium | Use explicit pass/fail/blocked/skipped/limited status vocabulary. |

## 9. Affected Files

Create:

```text
docs/work-packets/WP-0028-executable-evaluation-harness-planning.md
docs/planning/09-executable-evaluation-harness-planning.md
```

Do not create:

```text
tools/eval/
tools/eval/run-evaluations.sh
tools/eval/cases/
tools/eval/results/
```

Those are reserved for WP-0029.

## 10. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0028-executable-evaluation-harness-planning.md` exists.
2. `docs/planning/09-executable-evaluation-harness-planning.md` exists.
3. The planning document states executable harness implementation does not exist yet.
4. The planning document defines proposed `tools/eval/` layout.
5. The planning document defines proposed runner command.
6. The planning document defines initial case format.
7. The planning document defines initial check types.
8. The planning document defines at least five initial evaluation cases.
9. The planning document states the harness should be read-only by default.
10. The planning document states no dependencies should be added initially.
11. The planning document states CI should not be modified until a follow-up packet.
12. No executable harness files are created.
13. No runtime code is created.
14. No CI changes are made.
15. Local verification passes.

## 11. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0028-executable-evaluation-harness-planning.md && \
test -f docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q '^# Executable Evaluation Harness Planning$' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'Executable evaluation harness implementation does not exist yet' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'tools/eval/' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'bash tools/eval/run-evaluations.sh' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'file_exists' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'file_absent' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'file_contains' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'file_not_contains' docs/planning/09-executable-evaluation-harness-planning.md && \
grep -q 'command_succeeds' docs/planning/09-executable-evaluation-harness-planning.md && \
test ! -d tools/eval && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 12. Security and Privacy Notes

This packet creates documentation only.

It must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. deployment keys;
5. cloud credentials;
6. registry credentials;
7. private API keys;
8. `.env` values;
9. private operational values;
10. private local absolute paths.

The future harness should only inspect explicitly listed repository-relative files.

## 13. Recommended Atomic Commit

```text
docs(verification): plan executable evaluation harness
```

## 14. Follow-Up Work

Recommended next work:

```text
WP-0029: Executable Evaluation Harness Baseline
```

Expected future affected files:

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

WP-0029 should not modify CI unless explicitly authorized.
