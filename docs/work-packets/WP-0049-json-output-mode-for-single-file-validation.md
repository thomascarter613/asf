---
id: WP-0049
title: JSON Output Mode for Single-File Validation
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0049
milestone: Runtime Hardening
recommended_commit: "feat(work-packet): add json validation output"
canonical: true
description: >
  Add an explicit JSON output mode to the work-packet validation CLI for one
  caller-provided work-packet Markdown file while preserving the default
  human-readable plain-text output contract.
audience:
  - maintainers
  - contributors
  - qa-reviewers
  - ci-maintainers
related_documents:
  - docs/work-packets/WP-0047-work-packet-cli-status-and-hardening-review.md
  - docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
affected_files:
  - docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md
  - packages/work-packet-cli/README.md
  - packages/work-packet-cli/src/index.ts
  - packages/work-packet-cli/src/cli.ts
  - packages/work-packet-cli/src/format.ts
  - packages/work-packet-cli/src/cli.test.ts
  - tools/eval/cases/EVAL-0013-work-packet-cli-json-output.json
---

# WP-0049: JSON Output Mode for Single-File Validation

## 1. Purpose

Add an explicit JSON output mode to the ASF work-packet validation CLI.

This packet implements the next narrow runtime hardening step after defining the CLI output contract in WP-0048.

The command remains bounded to validating one caller-provided work-packet Markdown file.

## 2. Scope

WP-0049 includes:

- `--format text` support for the existing default human-readable output.
- `--format json` support for machine-readable validation output.
- `--format=json` support for equivalent explicit JSON mode.
- JSON formatting helpers in the CLI formatter module.
- CLI tests for JSON output success and validation failure.
- CLI tests for unsupported and missing `--format` values.
- README documentation for the new explicit format flag.
- An executable evaluation case anchoring the JSON output mode.

The default output remains plain text.

## 3. Non-Goals

WP-0049 does not add:

- repo-wide validation,
- directory traversal,
- glob support,
- safe-path policy,
- automatic fixing,
- output file writing,
- network access,
- external CLI dependencies,
- color output,
- CI-specific output modes,
- JSON output for usage errors,
- JSON output for unexpected runtime errors,
- schema publication outside the source tree.

Usage errors and unexpected errors remain plain text in this packet.

## 4. Acceptance Criteria

WP-0049 is complete when:

- `bun run work-packet validate <path>` still prints the existing plain-text output.
- `bun run work-packet validate <path> --format text` prints plain-text output.
- `bun run work-packet validate <path> --format json` prints JSON output.
- `bun run work-packet validate <path> --format=json` prints JSON output.
- JSON output includes a stable schema version.
- JSON output includes the validation result, path, metadata, summary counts, errors, and warnings.
- Validation failures in JSON mode still exit with `1`.
- Usage errors still exit with `2`.
- Unsupported format values exit with `2`.
- The CLI remains dependency-free except for the internal workspace dependency on `@asf/work-packet-core`.
- No repo-wide discovery, traversal, globbing, or safe-path behavior is introduced.

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
bun run work-packet validate docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md
bun run work-packet validate docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md --format text
bun run work-packet validate docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md --format json
bun run work-packet validate docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md --format=json
git status --short
```

Do not claim verification passed unless the command output proves it.

## 6. Recommended Atomic Commit

If verification passes and the working tree contains only the intended WP-0049 changes, commit with:

```bash
git add \
  docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md \
  packages/work-packet-cli/README.md \
  packages/work-packet-cli/src/index.ts \
  packages/work-packet-cli/src/cli.ts \
  packages/work-packet-cli/src/format.ts \
  packages/work-packet-cli/src/cli.test.ts \
  tools/eval/cases/EVAL-0013-work-packet-cli-json-output.json

git commit -m "feat(work-packet): add json validation output"
git push
```
