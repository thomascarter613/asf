---
id: WP-0055
title: Harden Frontmatter Parser Warning Behavior
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0055
milestone: Runtime Hardening
recommended_commit: "fix(work-packet): reduce known frontmatter warning noise"
canonical: true
description: >
  Harden the dependency-free work-packet frontmatter parser so known ASF
  metadata fields and their YAML-style list or folded-block continuations do not
  produce warning noise during repo-wide validation.
audience:
  - maintainers
  - contributors
  - qa-reviewers
  - ci-maintainers
  - principal-engineering-reviewers
related_documents:
  - docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md
  - docs/work-packets/WP-0054-normalize-historical-work-packet-corpus.md
affected_files:
  - docs/work-packets/WP-0055-harden-frontmatter-parser-warning-behavior.md
  - packages/work-packet-core/src/work-packet-frontmatter.ts
  - packages/work-packet-core/src/work-packet-frontmatter.test.ts
  - tools/eval/cases/EVAL-0016-work-packet-frontmatter-warning-hardening.json
---

# WP-0055: Harden Frontmatter Parser Warning Behavior

## 1. Purpose

Harden the dependency-free work-packet frontmatter parser so known ASF metadata fields do not create warning noise during repo-wide validation.

WP-0053 proved that repo-wide validation works. WP-0054 normalized historical work-packet validation errors. WP-0055 now cleans up remaining warning behavior caused by accepted ASF metadata styles.

## 2. Scope

WP-0055 includes:

- expanding the known ignored ASF metadata key set,
- ignoring YAML-style list continuations for known ignored metadata keys,
- ignoring YAML-style folded-block continuations for known ignored metadata keys,
- preserving warnings for truly unknown scalar metadata keys,
- preserving metadata validation behavior,
- preserving the dependency-free parser boundary,
- adding parser tests for the warning cleanup behavior,
- adding an evaluation case for the parser hardening.

## 3. Non-Goals

WP-0055 does not add:

- a full YAML parser,
- an external YAML dependency,
- runtime command changes,
- repository discovery changes,
- repo-wide validation command changes,
- CI enforcement,
- automatic fixing,
- Markdown rewriting,
- frontmatter rewriting.

## 4. Acceptance Criteria

WP-0055 is complete when:

- known ASF metadata fields no longer produce warnings,
- known ASF list blocks no longer produce warnings,
- known ASF folded block continuations no longer produce warnings,
- truly unknown scalar keys still produce warnings,
- frontmatter parser tests pass,
- repo-wide validation remains valid,
- no external dependencies are introduced.

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
bun run work-packet validate docs/work-packets/WP-0055-harden-frontmatter-parser-warning-behavior.md
bun run work-packet validate docs/work-packets/WP-0055-harden-frontmatter-parser-warning-behavior.md --format json
bun run work-packet validate-repo
bun run work-packet validate-repo --format json
git status --short
```

Do not claim verification passed unless the command output proves it.

## 6. Recommended Atomic Commit

If verification passes and the working tree contains only the intended WP-0055 changes, commit with:

```bash
git add \
  docs/work-packets/WP-0055-harden-frontmatter-parser-warning-behavior.md \
  packages/work-packet-core/src/work-packet-frontmatter.ts \
  packages/work-packet-core/src/work-packet-frontmatter.test.ts \
  tools/eval/cases/EVAL-0016-work-packet-frontmatter-warning-hardening.json

git commit -m "fix(work-packet): reduce known frontmatter warning noise"
git push
```