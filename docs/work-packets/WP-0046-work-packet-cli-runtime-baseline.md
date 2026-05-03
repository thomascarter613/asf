---
title: "WP-0046: Work Packet CLI Runtime Baseline"
description: "Adds the first dependency-free developer-facing CLI for validating a single work-packet Markdown file using the work-packet-core file validation APIs."
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
work_packet_id: "WP-0046"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/19-work-packet-cli-runtime-slice-plan.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-file.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0046-work-packet-cli-runtime-baseline.md"
  - "package.json"
  - "bun.lock"
  - ".github/workflows/ci.yml"
  - "packages/work-packet-cli/package.json"
  - "packages/work-packet-cli/README.md"
  - "packages/work-packet-cli/tsconfig.json"
  - "packages/work-packet-cli/src/index.ts"
  - "packages/work-packet-cli/src/cli.ts"
  - "packages/work-packet-cli/src/exit-codes.ts"
  - "packages/work-packet-cli/src/format.ts"
  - "packages/work-packet-cli/src/cli.test.ts"
  - "tools/eval/README.md"
  - "tools/eval/cases/README.md"
  - "tools/eval/cases/EVAL-0012-work-packet-cli.json"
  - "tools/check-repo-contract.sh"
recommended_commit: "feat(work-packet): add validation cli"
---

# WP-0046: Work Packet CLI Runtime Baseline

## 1. Purpose

This work packet adds the first developer-facing CLI package for validating one work-packet Markdown file.

The CLI delegates validation to `@asf/work-packet-core`.

The first supported command is:

```bash
bun run work-packet validate <path>
```

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. work-packet metadata validation exists;
2. Markdown section validation exists;
3. frontmatter parsing exists;
4. full document validation exists;
5. caller-provided file validation exists;
6. CLI planning exists;
7. package tests exist;
8. evaluation harness coverage exists;
9. repo contract checks exist;
10. runtime implementation remains bounded.

## 3. Scope

In scope:

1. create `packages/work-packet-cli/`;
2. add dependency-free CLI argument parsing;
3. add explicit exit codes;
4. add plain-text output formatting;
5. add CLI tests;
6. add root `work-packet` script;
7. add root `test:work-packet-cli` script;
8. add CI CLI test step;
9. add executable evaluation case;
10. update repo-contract anchors;
11. update documentation.

## 4. Non-Goals

Out of scope:

1. CLI framework dependencies;
2. repo-wide discovery;
3. directory walking;
4. glob matching;
5. validating multiple files;
6. JSON output;
7. machine report files;
8. database behavior;
9. vector retrieval;
10. agent runtime;
11. web UI;
12. API service;
13. deployment behavior;
14. package publishing behavior.

## 5. Acceptance Criteria

This packet is complete when:

1. `packages/work-packet-cli/` exists.
2. CLI package manifest exists.
3. CLI entrypoint exists.
4. CLI runner exists.
5. CLI exit codes exist.
6. CLI formatter exists.
7. CLI tests exist.
8. `bun run work-packet --help` works.
9. `bun run work-packet validate <path>` validates one file.
10. valid files exit `0`.
11. invalid files exit `1`.
12. usage errors exit `2`.
13. unexpected errors exit `3`.
14. root `package.json` exposes `work-packet`.
15. root `package.json` exposes `test:work-packet-cli`.
16. CI runs `bun test packages/work-packet-cli`.
17. evaluation harness includes `EVAL-0012`.
18. repo contract checks CLI files and anchors.
19. no external dependencies are added.
20. verification passes locally.

## 6. Verification Commands

Run:

```bash
bun install --lockfile-only
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
bun run work-packet --help
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
git status --short
```

Do not claim verification passed unless these commands were actually run.

## 7. Security and Privacy Notes

The CLI runtime slice must not:

1. walk directories;
2. recursively scan repositories;
3. validate globs;
4. read files other than the caller-provided path;
5. read `.env` files by default;
6. inspect secrets;
7. access the network;
8. execute file contents;
9. evaluate parsed values;
10. add external dependencies;
11. introduce deployment behavior;
12. introduce package publishing behavior.

## 8. Recommended Atomic Commit

```text
feat(work-packet): add validation cli
```

## 9. Follow-Up Work

Recommended next work:

```text
WP-0047: Work Packet CLI Status and Hardening Review
```

Rationale:

1. the CLI introduces developer-facing command behavior;
2. command output and exit codes should be reviewed before adding JSON output, repo-wide validation, or CI usage of the CLI;
3. the runtime boundary must remain explicit.
