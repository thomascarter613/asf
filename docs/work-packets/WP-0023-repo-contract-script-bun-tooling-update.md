---
title: "WP-0023: Repo Contract Script Bun Tooling Update"
description: "Updates the repository contract script so the repository mechanically enforces the Bun package-manager baseline, forbidden pnpm artifacts, ADR-0023 presence, and ADR-0019 historical preservation."
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
work_packet_id: "WP-0023"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0019"
  - "ADR-0021"
  - "ADR-0023"
related_documents:
  - "package.json"
  - "bun.lock"
  - "docs/adr/README.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/WP-0021-package-and-tooling-setup.md"
  - "docs/work-packets/WP-0022-package-manager-adr-correction.md"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md"
  - "tools/check-repo-contract.sh"
recommended_commit: "test(repo): enforce bun tooling contract"
---

# WP-0023: Repo Contract Script Bun Tooling Update

## 1. Purpose

This work packet updates the executable repository contract script so the current Bun package-manager decision is mechanically enforced.

The repository has corrected its package-manager direction:

```text
Bun is canonical for JavaScript/TypeScript package management and script execution.
````

The repository contract script must now enforce that decision instead of merely documenting it.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready after:

1. WP-0022 exists.
2. ADR-0023 exists.
3. WP-0021 has been corrected to Bun.
4. `package.json` exists.
5. `bun.lock` exists.
6. `pnpm-workspace.yaml` does not exist.
7. `pnpm-lock.yaml` does not exist.

## 3. Source Inputs

Primary source inputs:

```text
docs/work-packets/WP-0022-package-manager-adr-correction.md
docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md
docs/work-packets/WP-0021-package-and-tooling-setup.md
package.json
bun.lock
tools/check-repo-contract.sh
```

## 4. Scope

In scope:

1. Create this work packet.
2. Update `tools/check-repo-contract.sh`.
3. Require `package.json`.
4. Require `bun.lock`.
5. Forbid `pnpm-workspace.yaml`.
6. Forbid `pnpm-lock.yaml`.
7. Verify `package.json` contains `verify`.
8. Verify `package.json` contains `verify:repo`.
9. Verify `verify` delegates to `bun run verify:repo`.
10. Verify `verify:repo` delegates to `bash tools/check-repo-contract.sh`.
11. Require ADR-0023.
12. Require ADR-0019 to remain present as superseded historical context.
13. Require the ADR index to reference ADR-0023.
14. Require the package/tooling baseline to reference Bun.
15. Require WP-0021 to reference `bun.lock`.
16. Require WP-0022 to remain present.
17. Require WP-0023 to remain present.

## 5. Non-Goals

Out of scope:

1. Creating runtime source code.
2. Creating app packages.
3. Creating service packages.
4. Creating CI workflows.
5. Creating test framework dependencies.
6. Installing dependencies.
7. Creating TypeScript configuration.
8. Creating executable evaluation harness implementation.
9. Renumbering ADRs.
10. Deleting ADR-0019.
11. Resolving ADR-0013 and ADR-0015 overlap.
12. Moving architecture overview documents.

## 6. Required Contract Additions

The repository contract script must check:

```text
package.json exists
bun.lock exists
pnpm-workspace.yaml does not exist
pnpm-lock.yaml does not exist
package.json contains verify
package.json contains verify:repo
verify uses bun run verify:repo
verify:repo calls bash tools/check-repo-contract.sh
ADR-0023 exists
ADR-0019 remains present
ADR index references ADR-0023
package/tooling baseline references Bun
WP-0021 references bun.lock
WP-0022 exists
WP-0023 exists
```

## 7. Acceptance Criteria

This work packet is complete when:

1. `docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md` exists.
2. `tools/check-repo-contract.sh` checks for `package.json`.
3. `tools/check-repo-contract.sh` checks for `bun.lock`.
4. `tools/check-repo-contract.sh` fails if `pnpm-workspace.yaml` exists.
5. `tools/check-repo-contract.sh` fails if `pnpm-lock.yaml` exists.
6. `tools/check-repo-contract.sh` checks the Bun verification scripts in `package.json`.
7. `tools/check-repo-contract.sh` requires ADR-0023.
8. `tools/check-repo-contract.sh` preserves ADR-0019.
9. `tools/check-repo-contract.sh` requires WP-0023.
10. `bun run verify` passes locally.
11. `./tools/check-repo-contract.sh` passes locally.
12. `git diff --check` passes.
13. No runtime code is introduced.
14. No CI workflow is introduced.
15. The change is committed atomically.

## 8. Verification Commands

Run:

```bash
chmod +x tools/check-repo-contract.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Do not claim verification passed unless these commands were actually run.

## 9. Recommended Atomic Commit

```text
test(repo): enforce bun tooling contract
```

## 10. Notes

This packet is the mechanical enforcement follow-up to the Bun package-manager correction.

It intentionally does not start runtime implementation.
