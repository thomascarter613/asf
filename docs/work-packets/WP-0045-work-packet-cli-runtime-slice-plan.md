---
title: "WP-0045: Work Packet CLI Runtime Slice Plan"
description: "Plans the next runtime slice: a developer-facing CLI command for validating work-packet Markdown files using the existing work-packet-core file validation APIs."
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
work_packet_id: "WP-0045"
milestone: "Runtime Implementation"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/19-work-packet-cli-runtime-slice-plan.md"
  - "docs/planning/18-work-packet-file-loading-status-and-hardening-review.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet-file.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
affected_files:
  - "docs/work-packets/WP-0045-work-packet-cli-runtime-slice-plan.md"
  - "docs/planning/19-work-packet-cli-runtime-slice-plan.md"
recommended_commit: "docs(work-packet): plan validation cli slice"
---

# WP-0045: Work Packet CLI Runtime Slice Plan

## 1. Purpose

This work packet plans the next runtime slice for the Agentic Software Framework.

The next capability should provide a developer-facing CLI command for validating one work-packet Markdown file using the existing `packages/work-packet-core` file validation APIs.

This packet is planning-only.

It does not create CLI code.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready after WP-0044 because:

1. runtime implementation has started;
2. `packages/work-packet-core` exists;
3. document validation exists;
4. file validation exists;
5. file-loading hardening review exists;
6. package tests exist;
7. evaluation harness coverage exists;
8. repo contract checks exist;
9. filesystem behavior remains caller-path-only.

## 3. Scope

In scope:

1. create this work packet;
2. create `docs/planning/19-work-packet-cli-runtime-slice-plan.md`;
3. define CLI package scope;
4. define dependency decision;
5. define command contract;
6. define help contract;
7. define exit codes;
8. define output contract;
9. define proposed CLI package files;
10. define tests;
11. define CI strategy;
12. define root script strategy;
13. define evaluation harness updates;
14. define repo contract updates;
15. define security and runtime boundaries.

## 4. Non-Goals

Out of scope:

1. implementing the CLI package;
2. creating CLI source files;
3. creating CLI tests;
4. adding dependencies;
5. updating CI;
6. updating repo contract script;
7. updating evaluation harness cases;
8. adding repo-wide discovery;
9. adding directory walking;
10. adding glob validation;
11. adding database behavior;
12. adding vector retrieval;
13. adding agent runtime;
14. adding web UI;
15. adding API service;
16. adding deployment.

## 5. Planning Decision

The next runtime slice should be:

```text
WP-0046: Work Packet CLI Runtime Baseline
```

The new package should be:

```text
packages/work-packet-cli/
```

The CLI should be dependency-free in the first implementation.

The first command should be:

```bash
bun run work-packet validate <path>
```

## 6. Proposed Public CLI Contract

WP-0046 should support:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate --help
bun run work-packet validate <path>
```

The command should validate one caller-provided file.

The command should not walk directories.

The command should not validate globs.

The command should not scan the repository.

## 7. Proposed Exit Codes

WP-0046 should define:

```text
SUCCESS = 0
VALIDATION_FAILED = 1
USAGE_ERROR = 2
UNEXPECTED_ERROR = 3
```

## 8. Proposed Output

Valid file output should include:

```text
PASS
path
work packet id
title
```

Invalid file output should include:

```text
FAIL
path
errors
warnings
```

## 9. Proposed File Scope for WP-0046

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
tools/eval/cases/EVAL-0012-work-packet-cli.json
```

WP-0046 should modify:

```text
package.json
.github/workflows/ci.yml
tools/eval/README.md
tools/eval/cases/README.md
tools/check-repo-contract.sh
```

## 10. Proposed Verification Commands for WP-0046

WP-0046 should verify with:

```bash
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

Manual CLI checks:

```bash
bun run work-packet --help
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
```

## 11. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0045-work-packet-cli-runtime-slice-plan.md` exists;
2. `docs/planning/19-work-packet-cli-runtime-slice-plan.md` exists;
3. the planning document identifies WP-0046 as the CLI implementation packet;
4. the planning document identifies `packages/work-packet-cli/` as the CLI package;
5. the planning document defines the command contract;
6. the planning document defines help behavior;
7. the planning document defines exit codes;
8. the planning document defines output behavior;
9. the planning document defines tests;
10. the planning document defines CI strategy;
11. the planning document defines evaluation harness strategy;
12. the planning document defines repo contract strategy;
13. no CLI source is created;
14. no dependencies are added;
15. local verification passes.

## 12. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0045-work-packet-cli-runtime-slice-plan.md && \
test -f docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q '^# Work Packet CLI Runtime Slice Plan$' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'WP-0046: Work Packet CLI Runtime Baseline' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'packages/work-packet-cli/' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'bun run work-packet validate <path>' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'SUCCESS = 0' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'VALIDATION_FAILED = 1' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'USAGE_ERROR = 2' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
grep -q 'UNEXPECTED_ERROR = 3' docs/planning/19-work-packet-cli-runtime-slice-plan.md && \
test ! -d packages/work-packet-cli && \
bun test packages/work-packet-core && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 13. Security and Privacy Notes

This packet is documentation-only.

It must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. `.env` values;
5. private keys;
6. network calls;
7. deployment credentials;
8. package publishing credentials;
9. cloud credentials;
10. external dependencies;
11. CLI behavior.

## 14. Recommended Atomic Commit

```text
docs(work-packet): plan validation cli slice
```

## 15. Follow-Up Work

Recommended next work:

```text
WP-0046: Work Packet CLI Runtime Baseline
```

Recommended commit for WP-0046:

```text
feat(work-packet): add validation cli
```
