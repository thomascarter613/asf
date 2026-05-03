---
title: "WP-0033: Runtime Implementation Slice Plan"
description: "Defines the first actual runtime implementation slice for the Agentic Software Framework before product runtime code begins."
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
work_packet_id: "WP-0033"
milestone: "Implementation Readiness"
backlog_refs: []
adr_refs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_documents:
  - "docs/planning/11-runtime-implementation-slice-plan.md"
  - "docs/domain/00-domain-model.md"
  - "docs/planning/06-implementation-readiness-plan.md"
  - "docs/planning/07-package-and-tooling-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "tools/check-repo-contract.sh"
  - "tools/eval/run-evaluations.sh"
affected_files:
  - "docs/work-packets/WP-0033-runtime-implementation-slice-plan.md"
  - "docs/planning/11-runtime-implementation-slice-plan.md"
recommended_commit: "docs(implementation): plan first runtime slice"
---

# WP-0033: Runtime Implementation Slice Plan

## 1. Purpose

This work packet defines the first actual runtime implementation slice for the Agentic Software Framework.

It is the final planning packet before runtime implementation begins.

The next packet should start product/runtime code deliberately, with a bounded scope and verification plan.

## 2. Current Status

Current status:

```text
ready
```

This packet is ready because:

1. baseline repository orientation exists;
2. work-packet governance exists;
3. Bun package/tooling exists;
4. repo contract verification exists;
5. baseline CI exists;
6. executable evaluation harness exists;
7. evaluation harness runs in CI;
8. runtime implementation has not started.

## 3. Scope

In scope:

1. Create this work packet.
2. Create `docs/planning/11-runtime-implementation-slice-plan.md`.
3. Choose the first runtime implementation slice.
4. Define why that slice comes first.
5. Define intended package location.
6. Define proposed files for WP-0034.
7. Define initial runtime concepts.
8. Define initial validation rules.
9. Define test strategy.
10. Define repo contract strategy.
11. Define evaluation harness strategy.
12. Define CI strategy.
13. Define security boundaries.
14. Define acceptance criteria for WP-0034.

## 4. Non-Goals

Out of scope:

1. Creating `packages/`.
2. Creating runtime source code.
3. Creating tests.
4. Updating package scripts.
5. Updating CI.
6. Updating repo contract script.
7. Updating evaluation harness cases.
8. Adding dependencies.
9. Adding app code.
10. Adding service code.
11. Adding database code.
12. Adding vector retrieval code.
13. Adding agent runtime code.
14. Adding deployment behavior.
15. Adding secrets.

## 5. First Runtime Slice Decision

The first runtime slice should be:

```text
WP-0034: Work Packet Model and Validation Runtime Baseline
```

The first runtime package should be:

```text
packages/work-packet-core/
```

The first runtime implementation should create typed work-packet models and validation utilities.

## 6. Rationale

This is the correct first runtime slice because:

1. work packets are the central governed execution unit;
2. the repository already contains many work-packet documents;
3. work-packet validation can be tested locally;
4. work-packet validation does not require external infrastructure;
5. the scope is small and bounded;
6. the package can be added with Bun;
7. it creates product value immediately;
8. it creates a foundation for future agent execution;
9. it helps prevent future process drift;
10. it is safer than starting with UI, API, database, retrieval, or agent runtime code.

## 7. Proposed WP-0034 File Scope

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

WP-0034 may modify:

```text
package.json
tools/check-repo-contract.sh
tools/eval/cases/
.github/workflows/ci.yml
```

only if needed to verify the new runtime package correctly.

## 8. Proposed Public API

The first runtime package should expose:

```text
WORK_PACKET_STATUSES
isWorkPacketStatus
validateWorkPacketMetadata
validateWorkPacketMarkdown
```

## 9. Proposed Validation Scope

The first validation layer should check:

1. work packet ID format;
2. title presence;
3. status presence;
4. allowed status;
5. version presence;
6. owner presence;
7. recommended commit presence;
8. required Markdown sections;
9. validation result structure;
10. validation issue severity.

## 10. Proposed Test Scope

The first runtime tests should verify:

1. valid metadata passes;
2. missing ID fails;
3. invalid ID format fails;
4. invalid status fails;
5. missing recommended commit fails;
6. Markdown with all required sections passes;
7. Markdown missing a required section fails.

## 11. Proposed Verification Commands for WP-0034

WP-0034 should verify with:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

If CI is updated, verify that `.github/workflows/ci.yml` contains:

```text
bun test packages/work-packet-core
```

## 12. Security Boundary

WP-0034 must not introduce:

1. secrets;
2. tokens;
3. credentials;
4. `.env` values;
5. network calls;
6. deployment logic;
7. package publishing;
8. private registry credentials;
9. cloud credentials.

## 13. Runtime Boundary

WP-0034 must not introduce:

1. web UI;
2. API server;
3. database;
4. vector retrieval;
5. embedding pipeline;
6. agent runtime;
7. event bus;
8. authentication;
9. authorization;
10. deployment.

## 14. Acceptance Criteria

This packet is complete when:

1. `docs/work-packets/WP-0033-runtime-implementation-slice-plan.md` exists;
2. `docs/planning/11-runtime-implementation-slice-plan.md` exists;
3. the planning document identifies WP-0034 as the first runtime implementation slice;
4. the planning document identifies `packages/work-packet-core/` as the first runtime package;
5. the planning document defines proposed WP-0034 files;
6. the planning document defines proposed runtime concepts;
7. the planning document defines proposed validation rules;
8. the planning document defines proposed tests;
9. the planning document defines proposed verification commands;
10. no runtime source code is created;
11. no `packages/` directory is created;
12. no CI changes are made;
13. no repo contract changes are made;
14. local verification passes.

## 15. Verification Commands

Run:

```bash
test -f docs/work-packets/WP-0033-runtime-implementation-slice-plan.md && \
test -f docs/planning/11-runtime-implementation-slice-plan.md && \
grep -q '^# Runtime Implementation Slice Plan$' docs/planning/11-runtime-implementation-slice-plan.md && \
grep -q 'WP-0034: Work Packet Model and Validation Runtime Baseline' docs/planning/11-runtime-implementation-slice-plan.md && \
grep -q 'packages/work-packet-core/' docs/planning/11-runtime-implementation-slice-plan.md && \
grep -q 'validateWorkPacketMetadata' docs/planning/11-runtime-implementation-slice-plan.md && \
grep -q 'validateWorkPacketMarkdown' docs/planning/11-runtime-implementation-slice-plan.md && \
grep -q 'bun test packages/work-packet-core' docs/planning/11-runtime-implementation-slice-plan.md && \
test ! -d packages && \
bash tools/eval/run-evaluations.sh && \
bun run verify && \
./tools/check-repo-contract.sh && \
git diff --check
```

Do not claim verification passed unless these commands were actually run.

## 16. Recommended Atomic Commit

```text
docs(implementation): plan first runtime slice
```

## 17. Follow-Up Work

Recommended next work:

```text
WP-0034: Work Packet Model and Validation Runtime Baseline
```

This will be the first actual product/runtime implementation packet.

Recommended commit for WP-0034:

```text
feat(work-packet): add core validation model
```