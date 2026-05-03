---
title: "WP-0034: Work Packet Model and Validation Runtime Baseline"
description: "Creates the first actual runtime package for the Agentic Software Framework by adding typed work-packet domain models, validation utilities, tests, evaluation coverage, CI coverage, and repo-contract enforcement."
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
work_packet_id: "WP-0034"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/11-runtime-implementation-slice-plan.md"
  - "docs/domain/00-domain-model.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "tools/check-repo-contract.sh"
  - "tools/eval/run-evaluations.sh"
affected_files:
  - "docs/work-packets/WP-0034-work-packet-model-and-validation-runtime-baseline.md"
  - "package.json"
  - "bun.lock"
  - ".github/workflows/ci.yml"
  - "packages/work-packet-core/package.json"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/tsconfig.json"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-status.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-validation.test.ts"
  - "tools/eval/README.md"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json"
  - "tools/eval/cases/EVAL-0006-work-packet-core-package.json"
  - "tools/eval/cases/EVAL-0007-runtime-implementation-status.json"
  - "tools/check-repo-contract.sh"
  - "README.md"
  - "docs/ai/00-current-state.md"
recommended_commit: "feat(work-packet): add core validation model"
---

# WP-0034: Work Packet Model and Validation Runtime Baseline

## 1. Purpose

This work packet starts actual runtime implementation for the Agentic Software Framework.

The first runtime slice creates a small TypeScript package for typed work-packet models and validation utilities.

This package establishes the first bridge from repository-governed documentation to executable product behavior.

## 2. Current Status

Current status:

```text
ready
```

After this packet is completed, runtime implementation status changes from:

```text
Runtime implementation has not started.
```

to:

```text
Runtime implementation has started with the bounded work-packet core package.
```

## 3. Scope

In scope:

1. Create `packages/work-packet-core/`.
2. Add work-packet status types.
3. Add work-packet metadata and validation result types.
4. Add metadata validation.
5. Add Markdown section validation.
6. Add Bun tests.
7. Add root package workspace metadata.
8. Add CI test step for the new package.
9. Add executable evaluation harness coverage for the new package.
10. Update repo contract coverage for the new package.
11. Update README and current-state docs to record that runtime implementation has started in a narrow bounded slice.

## 4. Non-Goals

Out of scope:

1. Web UI.
2. API service.
3. Database.
4. Vector retrieval.
5. Embeddings.
6. Agent runtime.
7. Event bus.
8. Authentication.
9. Authorization.
10. Deployment.
11. Package publishing.
12. External dependencies.
13. Secrets.
14. Runtime tests outside `packages/work-packet-core`.

## 5. Acceptance Criteria

This packet is complete when:

1. `packages/work-packet-core/` exists.
2. The package exports work-packet statuses.
3. The package exports metadata validation.
4. The package exports Markdown validation.
5. Bun tests exist and pass.
6. CI runs `bun test packages/work-packet-core`.
7. The executable evaluation harness includes coverage for the runtime package.
8. The repo contract checks the runtime package files.
9. README and current-state docs record that runtime implementation has started.
10. Runtime scope remains explicitly bounded.
11. No secrets are introduced.
12. No deployment or package publishing is introduced.
13. Verification passes locally.

## 6. Verification Commands

Run:

```bash
bun install --lockfile-only
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Do not claim verification passed unless these commands were actually run.

## 7. Recommended Atomic Commit

```text
feat(work-packet): add core validation model
```

## 8. Follow-Up Work

Recommended next work:

```text
WP-0035: Runtime Status and Verification Hardening Review
```

Rationale:

1. Runtime implementation has started.
2. The repository status language has changed.
3. Existing checks must be reviewed for stale “runtime not started” assumptions.
4. The first runtime package should be hardened before the next runtime slice.
