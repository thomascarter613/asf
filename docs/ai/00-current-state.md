---
title: "Current State"
description: "Current repository state and continuation guide for the Agentic Software Framework after runtime MVP hardening and repo-wide work-packet validation gating."
status: "active"
version: "1.0.0-mvp-readiness"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "future-ai-agents"
  - "future-contributors"
document_type: "current-state"
canonical: false
related_documents:
  - "README.md"
  - "package.json"
  - "bun.lock"
  - ".github/workflows/ci.yml"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/ai/03-runtime-mvp-handoff.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "tools/check-repo-contract.sh"
  - "tools/eval/run-evaluations.sh"
  - "docs/verification/02-evaluation-harness-baseline.md"
---

# Current State

## 1. Purpose

This document records the current state of the Agentic Software Framework repository so future humans and AI sessions can resume from repository artifacts rather than fragile chat memory.

The uploaded repository tree is the active baseline, as historically established, but the live continuation point is now the latest committed work-packet sequence on `main`.

## 2. Current Repository Phase

Current phase:

```text
Runtime MVP Hardening / v1.0 MVP Readiness
```

Current objective:

```text
Complete the local, repository-governed v1.0 MVP by ensuring the work-packet runtime, repo-wide validation, evaluation harness, repo-contract checks, CI verification, and handoff documentation are coherent, current, and enforceable.
```

Runtime implementation status:

```text
Runtime implementation has started.
```

Historical superseded baseline phrase retained for repo-contract traceability:

```text
Runtime implementation has not started.
```

The superseded phrase above is historical only. The current repository state includes runtime packages and runtime tests for work-packet validation.

## 3. Latest Completed Work

Latest confirmed completed work:

```text
WP-0056: Add Repo-Wide Validation Verification Gate
Commit: test(work-packet): gate verification on repo-wide validation
```

Important immediately preceding work:

```text
WP-0052: Repo-Wide Work-Packet Validation Command
WP-0053: Repo-Wide Validation Integration Audit
WP-0054: Normalize Historical Work-Packet Corpus
WP-0055: Harden Frontmatter Parser Warning Behavior
WP-0056: Add Repo-Wide Validation Verification Gate
```

## 4. Current Runtime Capability

The repository now includes a work-packet runtime foundation.

Runtime package directories:

```text
packages/work-packet-core/
packages/work-packet-cli/
```

Core capabilities:

```text
typed work-packet statuses
typed validation issues and results
metadata validation
required Markdown section validation
dependency-free frontmatter parsing
document validation
file loading
file validation
```

CLI capabilities:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate <path>
bun run work-packet validate <path> --format text
bun run work-packet validate <path> --format json
bun run work-packet validate-repo
bun run work-packet validate-repo --format text
bun run work-packet validate-repo --format json
```

The CLI enforces safe-path behavior for single-file validation and repository discovery policy for repo-wide validation.

## 5. Current Verification Contract

Canonical local verification command:

```bash
bun run verify
```

Current root verification scripts:

```text
verify: bun run verify:repo && bun run verify:work-packets
verify:repo: bash tools/check-repo-contract.sh
verify:work-packets: bun run work-packet validate-repo
```

Direct verification commands:

```bash
./tools/check-repo-contract.sh
bun run work-packet validate-repo
bash tools/eval/run-evaluations.sh
bun test packages/work-packet-core
bun test packages/work-packet-cli
git diff --check
```

Current meaning of `bun run verify`:

```text
Repository structure and required anchors pass.
The canonical work-packet corpus passes repo-wide validation.
```

## 6. CI State

CI workflow:

```text
.github/workflows/ci.yml
```

CI provider:

```text
GitHub Actions
```

CI triggers:

```text
push to main
pull_request
```

Current CI behavior:

```bash
bun install --frozen-lockfile
bun run verify
bun test packages/work-packet-core
bun test packages/work-packet-cli
bun run verify:work-packets
bash tools/eval/run-evaluations.sh
git diff --check
```

CI boundaries:

```text
CI does not deploy.
CI does not publish packages.
CI does not require secrets.
```

## 7. Package and Tooling State

Bun is canonical for JavaScript/TypeScript package management and script execution.

Current package/tooling files:

```text
package.json
bun.lock
```

Forbidden package/tooling files:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

Package-manager ADR state:

```text
ADR-0023 supersedes ADR-0019 for active package-manager direction.
ADR-0019 remains preserved as historical context.
```

Future Python package/environment work should use `uv` unless a later ADR changes that direction.

Future Rust package/build work should use `cargo` unless a later ADR changes that direction.

## 8. Evaluation Harness State

Executable evaluation harness exists.

Current harness directory:

```text
tools/eval/
```

Current harness runner:

```bash
bash tools/eval/run-evaluations.sh
```

The executable evaluation harness runs locally and in CI.

The evaluation harness now includes runtime-package and work-packet verification cases in addition to baseline repository-governance cases.

## 9. Current Work-Packet State

Work packets live in:

```text
docs/work-packets/
```

Work-packet governance files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

The work-packet corpus has been normalized for repo-wide validation.

Current verification:

```bash
bun run work-packet validate-repo
```

Expected result:

```text
PASS
```

## 10. Current Documentation Structure

Current documentation directories:

```text
docs/adr/
docs/architecture/
docs/ai/
docs/domain/
docs/planning/
docs/product/
docs/verification/
docs/work-packets/
```

Current tooling directories:

```text
packages/
tools/
.github/workflows/
```

## 11. Current ADR Lineage

ADR support files:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

Known ADR gaps remain accepted historical facts:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

Known ADR topic overlap remains accepted historical context:

```text
ADR-0013
ADR-0015
```

Package-manager supersession:

```text
ADR-0019 remains preserved as historical context.
ADR-0023 supersedes ADR-0019 for active package-manager direction.
```

Do not renumber, delete, rename, supersede, or fill ADRs automatically.

## 12. Known Baseline Caveats

Known accepted caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 is preserved as historical context and superseded by ADR-0023.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured historical baseline artifact.
Vector retrieval implementation does not exist yet.
A SaaS UI does not exist yet.
Multi-user authentication does not exist yet.
Database persistence does not exist yet.
```

Do not silently fix these caveats. Use explicit work packets.

## 13. Current Rules for Future Sessions

Future sessions must:

1. Treat the repository as the source of truth.
2. Read this file before continuing work.
3. Use work packets for non-trivial changes.
4. Preserve ADR numbering and filenames.
5. Preserve ADR-0019 as historical context.
6. Treat ADR-0023 as the active package-manager direction.
7. Use Bun for JavaScript/TypeScript package and script execution.
8. Do not create `pnpm-workspace.yaml`.
9. Do not create `pnpm-lock.yaml`.
10. Do not claim verification passed unless it actually ran.
11. Run or reference `bun run verify` for the canonical local gate.
12. Keep context-continuity artifacts updated after meaningful state changes.
13. Do not add deployment or publishing CI without an explicit work packet.
14. Do not add SaaS/product-service scope before the local runtime MVP is reviewed.

## 14. Recommended Next Work

Recommended next work after WP-0057:

```text
WP-0058: v1.0 MVP Readiness Review
```

Purpose:

```text
Review whether the local repo-governed ASF MVP has the minimum required documentation spine, runtime work-packet validation, repo-wide validation, repo-contract enforcement, evaluation harness, CI gate, and handoff continuity to qualify as v1.0 MVP.
```

Likely follow-up after WP-0058:

```text
WP-0059: Cut v1.0 MVP Baseline
```

## 15. Current State Summary

Current summary:

```text
ASF is now in Runtime MVP Hardening / v1.0 MVP Readiness. The repository contains a Bun-based monorepo baseline, product and architecture documents, ADR governance, work-packet governance, executable repo-contract checks, an executable evaluation harness, work-packet core runtime validation, a work-packet CLI, single-file validation, JSON output, safe-path policy, repo-wide work-packet validation, normalized historical work packets, hardened frontmatter parser warning behavior, and a verification gate where bun run verify includes repo-wide work-packet validation. The next recommended packet is WP-0058: v1.0 MVP Readiness Review.
```