---
title: "Work Packet CLI Runtime Slice Plan"
description: "Plans the next runtime slice: a developer-facing CLI for validating work-packet Markdown files using the existing work-packet-core file validation APIs."
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
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_work_packets:
  - "WP-0043"
  - "WP-0044"
  - "WP-0045"
  - "WP-0046"
related_documents:
  - "docs/planning/18-work-packet-file-loading-status-and-hardening-review.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-file.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet CLI Runtime Slice Plan

## 1. Purpose

This document plans the next runtime slice for the Agentic Software Framework.

The next capability should provide a developer-facing CLI command for validating a work-packet Markdown file using the existing `packages/work-packet-core` validation APIs.

This document does not implement CLI behavior.

It defines the intended implementation scope for WP-0046.

## 2. Current Runtime Status

Runtime implementation has started and remains bounded.

Current runtime package:

```text
packages/work-packet-core/
```

Current runtime capabilities:

```text
Typed work-packet statuses.
Typed work-packet metadata.
Typed validation issues.
Typed validation results.
Metadata validation.
Markdown section validation.
Dependency-free frontmatter parsing.
Full work-packet Markdown document validation.
Caller-provided work-packet file loading.
Caller-provided work-packet file validation.
```

Current missing capability:

```text
There is no developer-facing CLI command for validating a work-packet file.
```

## 3. Next Runtime Slice Decision

The next runtime slice should be:

```text
WP-0046: Work Packet CLI Runtime Baseline
```

The new CLI package should be:

```text
packages/work-packet-cli/
```

The package name should be:

```text
@asf/work-packet-cli
```

The CLI should call into:

```text
@asf/work-packet-core
```

The first CLI should validate a single caller-provided work-packet Markdown file.

## 4. Why CLI Comes Next

CLI behavior is the correct next slice because:

1. work-packet metadata validation exists;
2. Markdown section validation exists;
3. frontmatter parsing exists;
4. full document validation exists;
5. file validation exists;
6. developers need an executable command surface;
7. CI and local verification can later use the same command;
8. CLI behavior creates practical repository governance value;
9. CLI behavior can remain local and deterministic;
10. CLI behavior should be planned before implementation because it introduces command names, arguments, output format, and exit-code contracts.

## 5. Dependency Decision

The first CLI implementation should be dependency-free.

Do not add Clipanion, Commander, Yargs, oclif, or other CLI frameworks in WP-0046.

Rationale:

1. the first command surface is intentionally small;
2. Bun and TypeScript are already available;
3. dependency-free argument parsing is sufficient for one command;
4. avoiding dependencies preserves the current small runtime surface;
5. a future ADR or work packet can introduce a CLI framework if command complexity grows.

## 6. Proposed CLI Package Layout

WP-0046 should create:

```text
packages/work-packet-cli/package.json
packages/work-packet-cli/README.md
packages/work-packet-cli/tsconfig.json
packages/work-packet-cli/src/index.ts
packages/work-packet-cli/src/cli.ts
packages/work-packet-cli/src/exit-codes.ts
packages/work-packet-cli/src/format.ts
packages/work-packet-cli/src/cli.test.ts
```

WP-0046 should modify:

```text
package.json
tools/eval/README.md
tools/eval/cases/README.md
tools/check-repo-contract.sh
```

WP-0046 should add:

```text
tools/eval/cases/EVAL-0012-work-packet-cli.json
```

WP-0046 may modify:

```text
.github/workflows/ci.yml
```

only if it adds a CLI-specific test command to CI.

## 7. Proposed Command Contract

The first command should be:

```bash
bun run work-packet validate <path>
```

Recommended root script:

```json
{
  "scripts": {
    "work-packet": "bun run packages/work-packet-cli/src/index.ts"
  }
}
```

Example usage:

```bash
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
```

The command should validate exactly one caller-provided file path.

## 8. Proposed Help Contract

The CLI should support:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate --help
```

The help output should describe:

1. command name;
2. supported subcommands;
3. usage;
4. arguments;
5. exit codes;
6. examples.

## 9. Proposed Exit Codes

The CLI should define explicit exit codes.

Suggested constants:

```text
SUCCESS = 0
VALIDATION_FAILED = 1
USAGE_ERROR = 2
UNEXPECTED_ERROR = 3
```

Expected behavior:

| Scenario | Exit Code |
| --- | --- |
| Valid work-packet file | `0` |
| Invalid work-packet file | `1` |
| Missing required CLI arguments | `2` |
| Unknown command | `2` |
| Unexpected runtime error | `3` |

## 10. Proposed Output Contract

The first CLI output should be plain text.

No JSON output is required in WP-0046.

For valid files, output should include:

```text
PASS
path
work packet id
title
```

For invalid files, output should include:

```text
FAIL
path
errors
warnings
```

Warnings should be printed separately from errors.

Warnings should not make the command fail unless errors are present.

## 11. Proposed CLI API Shape

The CLI package should expose testable functions.

Suggested public/internal functions:

```text
runWorkPacketCli
parseWorkPacketCliArgs
formatWorkPacketValidationResult
```

Suggested types:

```ts
export interface WorkPacketCliResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}
```

The command entrypoint should call `runWorkPacketCli(process.argv.slice(2))`.

Tests should call `runWorkPacketCli` directly rather than spawning processes in the first implementation.

## 12. Proposed Test Strategy

WP-0046 should test:

1. `--help` exits `0`;
2. `help` exits `0`;
3. unknown command exits usage error;
4. `validate` without path exits usage error;
5. valid file exits `0`;
6. invalid file exits `1`;
7. missing file exits `1` and reports `file-read-error`;
8. valid file output includes `PASS`;
9. invalid file output includes `FAIL`;
10. warnings are included when present;
11. tests use temporary files and clean them up.

## 13. Proposed CI Strategy

Current CI already runs:

```bash
bun install --frozen-lockfile
bun run verify
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
git diff --check
```

WP-0046 should add CLI tests to CI if the package is created.

Recommended CI addition:

```bash
bun test packages/work-packet-cli
```

Preferred CI sequence after WP-0046:

```bash
bun install --frozen-lockfile
bun run verify
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
git diff --check
```

## 14. Proposed Root Script Strategy

WP-0046 should add:

```json
{
  "scripts": {
    "work-packet": "bun run packages/work-packet-cli/src/index.ts",
    "test:work-packet-cli": "bun test packages/work-packet-cli"
  }
}
```

It should preserve existing scripts.

It should not remove or rename existing verification scripts.

## 15. Evaluation Harness Strategy

WP-0046 should add:

```text
EVAL-0012 Work packet CLI exists
```

The case should check:

1. CLI package exists;
2. CLI package manifest exists;
3. CLI entrypoint exists;
4. CLI runner source exists;
5. CLI exit-code source exists;
6. CLI formatter source exists;
7. CLI tests exist;
8. root `package.json` exposes `work-packet`;
9. root `package.json` exposes `test:work-packet-cli`;
10. CI runs `bun test packages/work-packet-cli`;
11. `bun test packages/work-packet-cli` succeeds.

## 16. Repo Contract Strategy

WP-0046 should update `tools/check-repo-contract.sh` to require:

```text
packages/work-packet-cli/package.json
packages/work-packet-cli/README.md
packages/work-packet-cli/tsconfig.json
packages/work-packet-cli/src/index.ts
packages/work-packet-cli/src/cli.ts
packages/work-packet-cli/src/exit-codes.ts
packages/work-packet-cli/src/format.ts
packages/work-packet-cli/src/cli.test.ts
tools/eval/cases/EVAL-0012-work-packet-cli.json
```

It should also check anchors:

```text
runWorkPacketCli
parseWorkPacketCliArgs
formatWorkPacketValidationResult
WORK_PACKET_CLI_EXIT_CODES
validateWorkPacketFile
PASS
FAIL
file-read-error
bun test packages/work-packet-cli
```

## 17. Security Boundary

The CLI runtime slice must not:

1. walk directories;
2. recursively scan repositories;
3. validate multiple files by glob;
4. read files other than the caller-provided path;
5. read `.env` files by default;
6. inspect secrets;
7. access the network;
8. execute file contents;
9. evaluate parsed values;
10. add external dependencies;
11. introduce deployment behavior;
12. introduce package publishing behavior.

## 18. Runtime Boundary

WP-0046 must not add:

1. repo-wide file discovery;
2. directory walking;
3. glob matching;
4. database persistence;
5. vector retrieval;
6. agent runtime;
7. API server;
8. web UI;
9. deployment behavior.

Those are future slices.

## 19. Acceptance Criteria for WP-0046

WP-0046 is acceptable when:

1. CLI package exists;
2. CLI command validates one caller-provided work-packet file;
3. CLI uses `validateWorkPacketFile`;
4. CLI has explicit exit codes;
5. CLI has help output;
6. CLI tests exist;
7. CLI tests pass locally;
8. CI runs CLI tests;
9. evaluation harness includes CLI case;
10. repo contract checks CLI files and anchors;
11. no dependencies are added;
12. runtime scope remains bounded.

## 20. Verification Commands for WP-0046

Expected commands:

```bash
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Also verify the CLI manually:

```bash
bun run work-packet --help
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
```

## 21. Recommended Commit for WP-0046

Recommended commit:

```text
feat(work-packet): add validation cli
```

## 22. Current Boundary

This document plans CLI behavior.

It does not implement CLI behavior.

It does not modify CI.

It does not add dependencies.
