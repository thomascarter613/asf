---
id: WP-0050
title: Work Packet CLI Safe-Path Policy
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0050
milestone: Runtime Hardening
recommended_commit: "feat(work-packet): add cli safe-path policy"
canonical: true
description: >
  Add a safe-path policy to the work-packet validation CLI so caller-provided
  file paths must resolve inside the configured working directory before the CLI
  reads and validates a work-packet Markdown file.
audience:
  - maintainers
  - contributors
  - security-reviewers
  - qa-reviewers
  - ci-maintainers
related_documents:
  - docs/work-packets/WP-0047-work-packet-cli-status-and-hardening-review.md
  - docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
  - docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md
affected_files:
  - docs/work-packets/WP-0050-work-packet-cli-safe-path-policy.md
  - packages/work-packet-cli/README.md
  - packages/work-packet-cli/src/index.ts
  - packages/work-packet-cli/src/cli.ts
  - packages/work-packet-cli/src/path-policy.ts
  - packages/work-packet-cli/src/cli.test.ts
  - tools/eval/cases/EVAL-0014-work-packet-cli-safe-path-policy.json
---

# WP-0050: Work Packet CLI Safe-Path Policy

## 1. Purpose

Add a safe-path policy to the ASF work-packet validation CLI.

The CLI validates one caller-provided work-packet Markdown file. Before it reads that file, it should confirm that the requested path resolves inside the configured working directory.

This prevents accidental validation of files outside the intended repository or working tree boundary.

## 2. Scope

WP-0050 includes:

- a dependency-free CLI path policy module,
- lexical path containment checks,
- existing-path realpath containment checks,
- rejection of paths that resolve outside the configured working directory,
- rejection of NUL-byte path input,
- CLI usage-error behavior for rejected unsafe paths,
- test coverage for safe relative paths,
- test coverage for absolute paths inside the configured working directory,
- test coverage for paths outside the configured working directory,
- README documentation for the path policy,
- an evaluation case anchoring the safe-path policy.

The default CLI behavior remains single-file validation.

## 3. Non-Goals

WP-0050 does not add:

- repository-wide validation,
- directory traversal,
- glob support,
- work-packet discovery,
- Git repository root detection,
- automatic fixing,
- output file writing,
- JSON output for usage errors,
- external CLI dependencies,
- sandboxing beyond path containment,
- persistent policy configuration.

Git repository root detection may be added later. For this packet, the configured working directory is the boundary.

## 4. Acceptance Criteria

WP-0050 is complete when:

- `bun run work-packet validate <path>` still validates one caller-provided file.
- Relative paths resolving inside the current working directory are allowed.
- Absolute paths resolving inside the current working directory are allowed.
- Paths resolving outside the current working directory are rejected before validation.
- Existing symlink paths that resolve outside the current working directory are rejected.
- NUL-byte path input is rejected.
- Rejected unsafe paths exit with `USAGE_ERROR = 2`.
- Validation failures for safe paths still exit with `VALIDATION_FAILED = 1`.
- JSON output remains available for safe paths.
- Plain-text output remains the default.
- The CLI remains dependency-free except for `@asf/work-packet-core`.
- No repo-wide discovery, traversal, globbing, or auto-fix behavior is introduced.

## 5. Verification Commands

Run from the repository root:

```bash
git status --short
git diff --check
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
bun run work-packet --help
bun run work-packet validate docs/work-packets/WP-0050-work-packet-cli-safe-path-policy.md
bun run work-packet validate docs/work-packets/WP-0050-work-packet-cli-safe-path-policy.md --format json
git status --short
```

Do not claim verification passed unless the command output proves it.

## 6. Recommended Atomic Commit

If verification passes and the working tree contains only the intended WP-0050 changes, commit with:

```bash
git add \
  docs/work-packets/WP-0050-work-packet-cli-safe-path-policy.md \
  packages/work-packet-cli/README.md \
  packages/work-packet-cli/src/index.ts \
  packages/work-packet-cli/src/cli.ts \
  packages/work-packet-cli/src/path-policy.ts \
  packages/work-packet-cli/src/cli.test.ts \
  tools/eval/cases/EVAL-0014-work-packet-cli-safe-path-policy.json

git commit -m "feat(work-packet): add cli safe-path policy"
git push
```
