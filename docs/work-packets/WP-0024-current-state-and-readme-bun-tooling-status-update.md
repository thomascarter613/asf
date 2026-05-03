---
title: "WP-0024: Current State and README Bun Tooling Status Update"
description: "Updates README.md and docs/ai/00-current-state.md so the repository orientation documents accurately record the completed Bun package/tooling setup, ADR-0023 supersession, Bun-aware repo contract checks, and remaining implementation-readiness boundaries."
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
work_packet_id: "WP-0024"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0019"
  - "ADR-0021"
  - "ADR-0023"
related_documents:
  - "README.md"
  - "docs/ai/00-current-state.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/WP-0021-package-and-tooling-setup.md"
  - "docs/work-packets/WP-0022-package-manager-adr-correction.md"
  - "docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md"
  - "README.md"
  - "docs/ai/00-current-state.md"
recommended_commit: "docs(project): update bun tooling current state"
---

# WP-0024: Current State and README Bun Tooling Status Update

## 1. Purpose

This work packet updates the repository orientation documents after the Bun package/tooling correction and Bun-aware repo contract hardening.

The repository now needs its human and AI handoff surfaces to accurately state that:

1. Bun package/tooling setup is complete.
2. `package.json` exists.
3. `bun.lock` exists.
4. `pnpm-workspace.yaml` is forbidden.
5. `pnpm-lock.yaml` is forbidden.
6. ADR-0023 supersedes ADR-0019 for active package-manager direction.
7. ADR-0019 remains preserved as historical context.
8. `tools/check-repo-contract.sh` is Bun-aware.
9. Runtime implementation has not started.
10. CI workflows do not exist yet.
11. Executable evaluation harness implementation does not exist yet.

## 2. Current Status

Current status:

```text
ready
````

This packet is ready because WP-0021, WP-0022, and WP-0023 have established the Bun tooling path and repo contract enforcement path.

## 3. Scope

In scope:

1. Create this work packet.
2. Update `README.md`.
3. Update `docs/ai/00-current-state.md`.
4. Preserve baseline caveats.
5. Preserve ADR gaps.
6. Preserve ADR-0013 and ADR-0015 overlap.
7. Preserve both architecture overview files.
8. Preserve the root `tree` file as a captured historical baseline artifact.
9. Preserve the rule that runtime implementation has not started.
10. Preserve the rule that CI workflows do not exist yet.
11. Preserve the rule that executable evaluation harness implementation does not exist yet.

## 4. Non-Goals

Out of scope:

1. Starting runtime implementation.
2. Creating CI workflows.
3. Creating executable evaluation harness implementation.
4. Adding dependencies.
5. Changing `package.json`.
6. Regenerating `bun.lock`.
7. Updating `tools/check-repo-contract.sh`.
8. Renumbering ADRs.
9. Deleting ADR-0019.
10. Resolving ADR-0013 and ADR-0015.
11. Moving architecture overview documents.
12. Removing or regenerating the root `tree` file.

## 5. Affected Files

Create:

```text
docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md
```

Modify:

```text
README.md
docs/ai/00-current-state.md
```

## 6. Acceptance Criteria

This packet is complete when:

1. `README.md` states Bun package/tooling setup is complete.
2. `README.md` references `package.json`.
3. `README.md` references `bun.lock`.
4. `README.md` states pnpm files are forbidden.
5. `README.md` states ADR-0023 supersedes ADR-0019.
6. `README.md` states runtime implementation has not started.
7. `README.md` states CI workflows do not exist yet.
8. `README.md` states executable evaluation harness implementation does not exist yet.
9. `docs/ai/00-current-state.md` records the same status.
10. Existing baseline caveats remain preserved.
11. `bun run verify` passes locally.
12. `./tools/check-repo-contract.sh` passes locally.
13. `git diff --check` passes locally.
14. The change is committed atomically.

## 7. Verification Commands

Run:

```bash
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Do not claim verification passed unless these commands were actually run.

## 8. Recommended Atomic Commit

```text
docs(project): update bun tooling current state
```

## 9. Follow-Up Work

Recommended next work:

```text
WP-0025: CI Baseline Planning
```

Rationale:

1. Local Bun verification now exists.
2. Repo contract enforcement now exists.
3. README and current-state handoff surfaces will be synchronized.
4. The next readiness step should define CI before runtime implementation begins.