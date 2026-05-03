---
id: WP-0052
title: Repo-Wide Work-Packet Validation Command
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0052
milestone: Runtime Hardening
recommended_commit: "feat(work-packet): add repo-wide validation command"
canonical: true
description: >
  Add a repo-wide work-packet validation command that discovers canonical
  work-packet files under docs/work-packets/ and validates them with
  deterministic text and JSON aggregate output.
audience:
  - maintainers
  - contributors
  - security-reviewers
  - qa-reviewers
  - ci-maintainers
related_documents:
  - docs/work-packets/WP-0050-work-packet-cli-safe-path-policy.md
  - docs/work-packets/WP-0051-repository-work-packet-discovery-policy.md
affected_files:
  - docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md
  - packages/work-packet-cli/README.md
  - packages/work-packet-cli/src/index.ts
  - packages/work-packet-cli/src/cli.ts
  - packages/work-packet-cli/src/format.ts
  - packages/work-packet-cli/src/path-policy.ts
  - packages/work-packet-cli/src/repository-discovery.ts
  - packages/work-packet-cli/src/repository-validation.ts
  - packages/work-packet-cli/src/cli.test.ts
  - tools/eval/cases/EVAL-0015-work-packet-cli-repo-validation.json
---

# WP-0052: Repo-Wide Work-Packet Validation Command

## 1. Purpose

Add a repo-wide work-packet validation command to the ASF work-packet CLI.

The command discovers canonical work-packet files under `docs/work-packets/`, validates each discovered file, and reports aggregate text or JSON output.

This is the first implementation slice after the repository discovery policy defined in WP-0051.

## 2. Scope

WP-0052 includes:

- a repository work-packet discovery module,
- a repository work-packet validation module,
- a distinct `validate-repo` CLI command,
- deterministic discovery ordering,
- exclusion of known work-packet support files,
- malformed filename reporting,
- filename/frontmatter ID mismatch reporting,
- duplicate work-packet ID reporting,
- text aggregate output,
- JSON aggregate output,
- CLI tests using temporary workspaces,
- README documentation,
- an evaluation case anchoring the repo-wide command.

## 3. Non-Goals

WP-0052 does not add:

- recursive traversal,
- glob support,
- auto-fixing,
- Markdown rewriting,
- work-packet index generation,
- Git repository root detection,
- output file writing,
- network access,
- external CLI dependencies,
- broad repository scanning outside `docs/work-packets/`.

## 4. Acceptance Criteria

WP-0052 is complete when:

- `bun run work-packet validate-repo --help` exits successfully.
- `validate-repo` discovers canonical direct children under `docs/work-packets/`.
- discovery excludes `README.md`.
- discovery excludes `WORK-PACKET-TEMPLATE.md`.
- discovery reports malformed `WP-*` Markdown filenames.
- repo validation validates discovered work packets.
- repo validation detects filename/frontmatter ID mismatches.
- repo validation detects duplicate work-packet IDs.
- repo validation supports plain-text output.
- repo validation supports JSON output.
- single-file `validate <path>` behavior remains stable.
- no recursion, glob support, or auto-fix behavior is introduced.

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
bun run work-packet validate-repo --help
bun run work-packet validate docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md
bun run work-packet validate docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md --format json
git status --short
```

Do not claim verification passed unless the command output proves it.

## 6. Recommended Atomic Commit

If verification passes and the working tree contains only the intended WP-0052 changes, commit with:

```bash
git add \
  docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md \
  packages/work-packet-cli/README.md \
  packages/work-packet-cli/src/index.ts \
  packages/work-packet-cli/src/cli.ts \
  packages/work-packet-cli/src/format.ts \
  packages/work-packet-cli/src/path-policy.ts \
  packages/work-packet-cli/src/repository-discovery.ts \
  packages/work-packet-cli/src/repository-validation.ts \
  packages/work-packet-cli/src/cli.test.ts \
  tools/eval/cases/EVAL-0015-work-packet-cli-repo-validation.json

git commit -m "feat(work-packet): add repo-wide validation command"
git push
```