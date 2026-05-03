---
title: "Runtime Implementation Slice Plan"
description: "Defines the first actual runtime implementation slice for the Agentic Software Framework after baseline stabilization, Bun tooling, CI, repo contract verification, and executable evaluation harness readiness."
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
  - "WP-0033"
  - "WP-0034"
related_documents:
  - "docs/domain/00-domain-model.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/planning/09-executable-evaluation-harness-planning.md"
  - "docs/planning/10-evaluation-harness-ci-integration-planning.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "tools/check-repo-contract.sh"
  - "tools/eval/run-evaluations.sh"
---

# Runtime Implementation Slice Plan

## 1. Purpose

This document defines the first actual runtime implementation slice for the Agentic Software Framework.

The project has completed enough baseline stabilization to begin planning runtime implementation:

1. repository orientation exists;
2. product and architecture documents exist;
3. ADR lineage exists;
4. work-packet governance exists;
5. Bun package/tooling exists;
6. local repo contract verification exists;
7. baseline CI exists;
8. executable evaluation harness exists;
9. evaluation harness CI integration exists.

This document does not create runtime implementation code.

It defines what the first runtime implementation packet should do.

## 2. Current Phase

Current phase:

```text
Baseline Stabilization / Implementation Readiness
```

Runtime implementation status:

```text
Runtime implementation has not started.
```

This document is the final planning step before runtime implementation begins.

## 3. Runtime Implementation Entry Standard

Runtime implementation may begin only when the first runtime packet:

1. identifies the exact bounded scope;
2. identifies affected files;
3. defines non-goals;
4. uses Bun;
5. preserves repository-governed work-packet discipline;
6. introduces tests or executable checks with the runtime code;
7. updates verification commands;
8. avoids secrets;
9. avoids deployment;
10. avoids broad architecture changes;
11. commits atomically.

## 4. First Runtime Slice Decision

The first runtime implementation slice should be:

```text
WP-0034: Work Packet Model and Validation Runtime Baseline
```

This is the correct first runtime slice because work packets are the central governed execution unit of the Agentic Software Framework.

The first product/runtime code should encode a minimal typed model for work packets and validate work-packet metadata and required content fields.

## 5. Why This Slice Comes First

The work-packet model is the right first runtime slice because:

1. work packets already govern all non-trivial repository changes;
2. work packets connect product planning to implementation;
3. work packets are central to future agent execution;
4. work packets are concrete enough to validate now;
5. work packets can be tested without external services;
6. work packets do not require a database yet;
7. work packets do not require a web UI yet;
8. work packets do not require vector retrieval yet;
9. work packets provide immediate value to the existing repository;
10. work-packet validation creates the first bridge from documentation to executable product behavior.

## 6. First Runtime Package

The first runtime package should be created under:

```text
packages/work-packet-core/
```

Package purpose:

```text
Provide typed work-packet domain models and validation utilities for the Agentic Software Framework.
```

This package should be intentionally small.

It should not become a full workflow engine yet.

## 7. Proposed WP-0034 File Layout

WP-0034 should create:

```text
packages/work-packet-core/package.json
packages/work-packet-core/README.md
packages/work-packet-core/src/index.ts
packages/work-packet-core/src/work-packet.ts
packages/work-packet-core/src/work-packet-status.ts
packages/work-packet-core/src/work-packet-validation.ts
packages/work-packet-core/src/work-packet-validation.test.ts
packages/work-packet-core/tsconfig.json
```

It should also update root files if needed:

```text
package.json
tools/check-repo-contract.sh
tools/eval/cases/
```

The exact root updates should be defined in WP-0034.

## 8. Proposed Runtime Concepts

The first package should define the minimum work-packet runtime concepts.

### 8.1 WorkPacketStatus

Initial statuses:

```text
draft
ready
active
blocked
completed
superseded
deprecated
```

### 8.2 WorkPacketMetadata

Initial metadata fields:

```text
id
title
status
version
created
updated
owner
documentType
workPacketId
milestone
recommendedCommit
```

### 8.3 WorkPacketValidationResult

Validation result fields:

```text
valid
errors
warnings
```

### 8.4 WorkPacketValidationIssue

Validation issue fields:

```text
code
message
path
severity
```

## 9. Initial Validation Rules

The first validation rules should check:

1. work packet ID exists;
2. work packet ID matches `WP-0000` format;
3. title exists;
4. status exists;
5. status is allowed;
6. version exists;
7. owner exists;
8. recommended commit exists;
9. purpose section exists;
10. scope section exists;
11. non-goals section exists;
12. acceptance criteria section exists;
13. verification commands section exists;
14. recommended atomic commit section exists.

The first validator may validate structured objects and plain Markdown text separately.

## 10. Initial Public API

The package should expose:

```ts
validateWorkPacketMetadata
validateWorkPacketMarkdown
isWorkPacketStatus
WORK_PACKET_STATUSES
```

Future APIs may include:

```ts
parseWorkPacketFrontmatter
loadWorkPacketFile
validateWorkPacketFile
```

Those should not be required in the first slice unless the implementation remains simple.

## 11. Test Strategy

WP-0034 should introduce tests using Bun’s built-in test runner.

Initial tests should cover:

1. valid metadata passes;
2. missing ID fails;
3. invalid ID format fails;
4. invalid status fails;
5. missing recommended commit fails;
6. Markdown missing required sections fails;
7. Markdown with required sections passes.

The first runtime tests should run with:

```bash
bun test packages/work-packet-core
```

A future packet may add root scripts for runtime tests.

## 12. Root Script Strategy

WP-0034 may update root `package.json` to include:

```json
{
  "scripts": {
    "test": "bun test"
  }
}
```

However, if this creates unnecessary repo-contract churn, WP-0034 may instead keep verification commands explicit:

```bash
bun test packages/work-packet-core
```

Recommended WP-0034 approach:

```text
Add a root test script only if the repo contract is updated in the same packet.
```

## 13. Repo Contract Strategy

WP-0034 should update `tools/check-repo-contract.sh` only enough to enforce the new runtime package baseline.

It should require:

```text
packages/
packages/work-packet-core/
packages/work-packet-core/package.json
packages/work-packet-core/README.md
packages/work-packet-core/src/index.ts
packages/work-packet-core/src/work-packet.ts
packages/work-packet-core/src/work-packet-status.ts
packages/work-packet-core/src/work-packet-validation.ts
packages/work-packet-core/src/work-packet-validation.test.ts
packages/work-packet-core/tsconfig.json
```

If root `package.json` gains a `test` script, the repo contract should check that script.

## 14. Evaluation Harness Strategy

WP-0034 should add one evaluation case for the first runtime package.

Recommended case:

```text
EVAL-0006 Work packet core package exists
```

Suggested file:

```text
tools/eval/cases/EVAL-0006-work-packet-core-package.json
```

The case should check:

1. package directory exists;
2. package manifest exists;
3. source index exists;
4. validation source exists;
5. validation test exists;
6. package README exists.

The harness should not yet evaluate runtime behavior unless the case remains deterministic and local.

## 15. CI Strategy

The current CI already runs:

```bash
bun install --frozen-lockfile
bun run verify
bash tools/eval/run-evaluations.sh
git diff --check
```

WP-0034 must decide whether to add runtime tests to CI immediately.

Recommended decision:

```text
WP-0034 should update CI to run the package test if and only if the package test is stable locally and requires no external services.
```

Recommended CI addition:

```yaml
      - name: Test work packet core
        run: bun test packages/work-packet-core
```

This should be placed after repository verification and before the executable evaluation harness, or after the evaluation harness if the evaluation case only checks file presence.

Preferred sequence after WP-0034:

```bash
bun install --frozen-lockfile
bun run verify
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
git diff --check
```

## 16. Security Boundary

The first runtime slice must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. `.env` files;
5. network calls;
6. deployment logic;
7. package publishing;
8. cloud credentials;
9. private registry credentials;
10. filesystem writes outside test-safe temporary behavior.

## 17. Runtime Boundary

The first runtime slice should not introduce:

1. web app;
2. API service;
3. database;
4. vector retrieval;
5. agent runtime;
6. queue system;
7. event bus;
8. authentication;
9. authorization;
10. deployment configuration.

It should stay focused on the work-packet core model and validation baseline.

## 18. Acceptance Criteria for WP-0034

WP-0034 is acceptable when:

1. `packages/work-packet-core/` exists;
2. work-packet core package has a package manifest;
3. work-packet core package has typed source files;
4. work-packet statuses are encoded;
5. work-packet validation functions exist;
6. validation tests exist;
7. tests pass locally;
8. repo contract is updated;
9. executable evaluation harness has a case for the new package;
10. CI is updated if tests are added to CI;
11. no secrets are introduced;
12. no deployment is introduced;
13. no database or retrieval implementation is introduced;
14. runtime implementation is accurately described as started after WP-0034;
15. commit is atomic.

## 19. Verification Commands for WP-0034

Expected WP-0034 verification commands:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

If CI is updated in WP-0034, also verify the workflow contains the runtime test command.

## 20. Recommended Commit for WP-0034

Recommended commit message:

```text
feat(work-packet): add core validation model
```

This is the first feature commit because it begins actual runtime implementation.

## 21. Current Boundary

This document does not start runtime implementation.

This document does not create `packages/`.

This document does not create product code.

This document defines the first runtime slice so WP-0034 can begin implementation deliberately.