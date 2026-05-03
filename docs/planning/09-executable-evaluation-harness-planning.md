---
title: "Executable Evaluation Harness Planning"
description: "Plans the first executable evaluation harness for the Agentic Software Framework without creating harness code or starting runtime implementation."
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
  - "WP-0028"
  - "WP-0029"
related_documents:
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/work-packets/WP-0015-evaluation-harness-baseline.md"
  - "docs/planning/08-ci-baseline-planning.md"
  - "tools/check-repo-contract.sh"
  - "package.json"
  - "bun.lock"
  - ".github/workflows/ci.yml"
---

# Executable Evaluation Harness Planning

## 1. Purpose

This document plans the first executable evaluation harness for the Agentic Software Framework.

The existing evaluation harness baseline defines the evaluation model at the documentation level. This planning document defines how to introduce the first executable harness implementation later, without starting runtime product implementation.

The first executable harness should evaluate repository-governed SDLC behavior, not application runtime behavior.

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
Executable evaluation harness implementation does not exist yet.
```

Existing evaluation baseline:

```text
docs/verification/02-evaluation-harness-baseline.md
```

Current local verification command:

```bash
bun run verify
```

Current CI verification command sequence:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

## 3. Planning Boundary

This document does not create executable harness code.

This document does not create runtime implementation code.

This document does not add dependencies.

This document does not change CI.

This document defines the intended shape, scope, file layout, data model, commands, and acceptance criteria for the future executable harness packet.

## 4. Evaluation Harness Role

The executable evaluation harness should answer:

```text
Does the repository, contributor, future AI session, or future agent behavior satisfy the repository-governed SDLC contract?
```

It should initially evaluate:

1. repository baseline preservation;
2. work-packet discipline;
3. ADR preservation;
4. package-manager boundary preservation;
5. verification truthfulness;
6. CI baseline presence;
7. context-continuity source rules;
8. security and exclusion compliance;
9. runtime-not-started boundary preservation;
10. executable-evaluation-harness status accuracy.

It should not initially evaluate:

1. runtime application behavior;
2. frontend behavior;
3. backend API behavior;
4. database behavior;
5. vector retrieval quality;
6. model output quality;
7. agent runtime behavior;
8. deployment behavior.

Those categories should remain future work until the corresponding implementation exists.

## 5. Proposed Initial File Layout

The first executable harness should use a small repository-local layout under `tools/eval/`.

Proposed future files:

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

The future packet may add or reduce initial cases if needed, but should keep the first implementation intentionally small.

## 6. Proposed Initial Command

The first executable harness command should be:

```bash
bash tools/eval/run-evaluations.sh
```

A package script may be added later:

```json
{
  "scripts": {
    "eval": "bash tools/eval/run-evaluations.sh"
  }
}
```

The first implementation may avoid adding a package script if doing so would broaden the package contract too soon.

If a package script is added, the repo contract script should verify it.

## 7. Proposed Initial Result Model

The executable harness should use the result statuses already defined by the documentation-level baseline:

```text
not_run
passed
failed
blocked
skipped
limited
```

For the first executable harness, machine output should be simple and deterministic.

A future JSON result may look like:

```json
{
  "evaluation_id": "EVAL-0001",
  "title": "Active baseline is documented",
  "category": "context-continuity",
  "result": "passed",
  "evidence": [
    "README.md contains active baseline phrase",
    "docs/ai/00-current-state.md contains active baseline phrase"
  ]
}
```

The first implementation does not need a complex test framework.

## 8. Proposed Initial Case Format

Initial cases should use JSON for machine readability.

Proposed case format:

```json
{
  "id": "EVAL-0001",
  "title": "Active baseline is documented",
  "category": "context-continuity",
  "status": "active",
  "required": true,
  "purpose": "Verify that active baseline language exists in orientation documents.",
  "checks": [
    {
      "type": "file_contains",
      "path": "README.md",
      "pattern": "The uploaded repository tree is the active baseline"
    },
    {
      "type": "file_contains",
      "path": "docs/ai/00-current-state.md",
      "pattern": "The uploaded repository tree is the active baseline"
    }
  ]
}
```

The first harness should support only the minimum check types required for baseline evaluation.

## 9. Proposed Initial Check Types

The first executable harness should support these check types:

```text
file_exists
file_absent
file_contains
file_not_contains
command_succeeds
```

Recommended meanings:

| Check Type | Meaning |
| --- | --- |
| `file_exists` | Required file must exist. |
| `file_absent` | Forbidden file must not exist. |
| `file_contains` | Required file must contain a pattern. |
| `file_not_contains` | Required file must not contain a forbidden pattern. |
| `command_succeeds` | Command must exit with status 0. |

The first implementation may use `grep` and shell logic rather than introducing a dependency-heavy runner.

## 10. Proposed Initial Evaluation Cases

The first executable harness should include a small case set.

### EVAL-0001 — Active Baseline Is Documented

Purpose:

```text
Verify that README.md and docs/ai/00-current-state.md preserve active baseline language.
```

Required checks:

```text
README.md contains active baseline phrase.
docs/ai/00-current-state.md contains active baseline phrase.
```

### EVAL-0002 — ADR Gap Preservation Is Documented

Purpose:

```text
Verify that known ADR gaps remain documented and are not treated as accidental missing files.
```

Required checks:

```text
docs/adr/README.md contains ADR-0007.
docs/adr/README.md contains ADR-0009.
docs/adr/README.md contains ADR-0010.
docs/adr/README.md contains ADR-0012.
```

### EVAL-0003 — Package Manager Boundary Is Enforced

Purpose:

```text
Verify that Bun files exist and pnpm files are absent.
```

Required checks:

```text
package.json exists.
bun.lock exists.
pnpm-workspace.yaml is absent.
pnpm-lock.yaml is absent.
package.json contains bun run verify:repo.
```

### EVAL-0004 — CI Baseline Exists

Purpose:

```text
Verify that baseline CI exists and uses Bun verification.
```

Required checks:

```text
.github/workflows/ci.yml exists.
.github/workflows/ci.yml contains oven-sh/setup-bun@v2.
.github/workflows/ci.yml contains bun install --frozen-lockfile.
.github/workflows/ci.yml contains bun run verify.
.github/workflows/ci.yml contains git diff --check.
```

### EVAL-0005 — Runtime Not Started Boundary Is Preserved

Purpose:

```text
Verify that orientation documents do not claim runtime implementation exists.
```

Required checks:

```text
README.md contains Runtime implementation has not started.
docs/ai/00-current-state.md contains Runtime implementation has not started.
```

## 11. Proposed Initial Runner Behavior

The first runner should:

1. require execution from the repository root;
2. discover JSON cases in `tools/eval/cases/`;
3. run each case in sorted filename order;
4. print readable output;
5. count passed, failed, blocked, skipped, limited, and not-run results;
6. exit `0` only when all required active cases pass;
7. exit non-zero when any required active case fails;
8. avoid modifying tracked repository files;
9. write no output files by default;
10. optionally support writing results later.

The first runner should be read-only by default.

## 12. Relationship to Repo Contract Script

The repo contract script asks:

```text
Does the repository satisfy required structure and anchor checks?
```

The evaluation harness asks:

```text
Does the repository-governed SDLC behavior satisfy evaluation cases?
```

For the first executable harness, overlap is acceptable.

The future harness may call:

```bash
./tools/check-repo-contract.sh
```

as one evaluation case.

The repo contract script should remain the primary structural guard.

The evaluation harness should become the broader behavior and regression guard.

## 13. Relationship to CI

The first executable harness should not be added to CI in the same packet that creates the harness unless explicitly authorized.

Recommended sequence:

```text
WP-0028: Plan executable evaluation harness.
WP-0029: Add local executable evaluation harness baseline.
WP-0030: Add evaluation harness to CI.
```

This avoids making CI depend on new harness behavior before the harness has been reviewed locally.

## 14. Dependency Policy

The first executable harness should not add external dependencies.

Preferred first implementation:

```text
Bash + POSIX/core GNU utilities available on typical Linux/macOS development environments.
```

Rationale:

1. no dependency install required;
2. simple local execution;
3. easy CI compatibility;
4. minimal attack surface;
5. no premature runtime package structure;
6. no TypeScript configuration required yet.

If the project later outgrows shell-based evaluation, a future packet may move the harness to TypeScript, Python, or Rust.

## 15. Security and Privacy Boundary

The first executable harness must not read or print:

1. `.env` files;
2. private keys;
3. tokens;
4. credentials;
5. cloud secrets;
6. SSH keys;
7. private local absolute paths;
8. dependency directories;
9. generated caches;
10. user-private files outside the repository.

The first harness should only inspect explicitly listed repository-relative files.

## 16. Future Expansion

Future executable harness expansion may include:

1. JSON result reports;
2. Markdown summary reports;
3. CI artifact upload;
4. snapshot comparison;
5. regression records;
6. retrieval-quality cases;
7. agent-execution cases;
8. runtime behavior cases;
9. policy checks;
10. work-packet lifecycle checks.

Future directories may include:

```text
tools/eval/results/
tools/eval/fixtures/
tools/eval/schemas/
tools/eval/reports/
```

These should not be created until needed.

## 17. Acceptance Criteria for Future WP-0029

The future executable harness baseline is acceptable when:

1. `tools/eval/README.md` exists.
2. `tools/eval/run-evaluations.sh` exists.
3. `tools/eval/run-evaluations.sh` is executable.
4. `tools/eval/cases/README.md` exists.
5. at least five initial evaluation case files exist;
6. the runner supports `file_exists`;
7. the runner supports `file_absent`;
8. the runner supports `file_contains`;
9. the runner supports `file_not_contains`;
10. the runner exits non-zero on failed required checks;
11. the runner is read-only by default;
12. the runner avoids secrets and sensitive files;
13. `bash tools/eval/run-evaluations.sh` passes locally;
14. `bun run verify` still passes locally;
15. CI is not modified unless separately authorized.

## 18. Recommended Next Work

After this planning document is committed, the next work should be:

```text
WP-0029: Executable Evaluation Harness Baseline
```

That packet should create the first local executable harness files under:

```text
tools/eval/
```

## 19. Current Boundary

This document does not create the executable evaluation harness.

This document does not add the harness to CI.

This document does not start runtime implementation.

This document only plans the future executable harness baseline.