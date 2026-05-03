---
title: "Baseline Inventory"
description: "Inventory and consistency review of the uploaded repository tree accepted as the active baseline for the Agentic Software Framework."
status: "proposed"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "product-manager"
  - "technical-program-manager"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "baseline-inventory"
canonical: false
related_documents:
  - "tree"
  - "CODEOWNERS"
  - "CONTRIBUTING.md"
  - "LICENSE"
  - "SECURITY.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
---

# Baseline Inventory

## 1. Purpose

This document records the uploaded repository tree as the active baseline for the **Agentic Software Framework**.

The goal is not to clean, rename, delete, or rewrite the baseline. The goal is to make the current repository state explicit so future work can proceed safely through work packets.

This document identifies:

1. Current root files.
2. Current documentation directories.
3. Current ADR lineage.
4. Empty expansion directories.
5. Known gaps.
6. Known duplicates or overlaps.
7. Follow-up work.
8. Verification expectations.

This document executes the review intent of:

```text
WP-0002: Baseline Inventory and Consistency Review
```

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

This means:

1. Existing files are preserved.
2. Existing ADR numbers are preserved.
3. Existing ADR number gaps are preserved.
4. Existing topic overlaps are preserved until explicitly reviewed.
5. Existing directory placement is preserved.
6. Empty directories are treated as intentional expansion points.
7. Cleanup must happen through explicit work packets.
8. No silent normalization is allowed.

---

## 3. Baseline Root Inventory

The current baseline contains the following root-level files:

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
tree
```

## 3.1 Root Files Present

| File | Present | Purpose |
| --- | --- | --- |
| `CODEOWNERS` | Yes | Repository ownership placeholder or rule file. |
| `CONTRIBUTING.md` | Yes | Contribution guidance. |
| `LICENSE` | Yes | Licensing status or selected license. |
| `SECURITY.md` | Yes | Security policy and reporting guidance. |
| `tree` | Yes | Captured repository tree baseline artifact. |

## 3.2 Root Files Not Present

| File | Present | Note |
| --- | --- | --- |
| `README.md` | No | Missing from uploaded baseline. Add only through explicit work packet. |
| `.gitignore` | No | Not present in uploaded baseline. Add only when project tooling requires it. |
| `.gitattributes` | No | Not present in uploaded baseline. Add only through repository hygiene packet. |
| `.editorconfig` | No | Not present in uploaded baseline. Add only through tooling/formatting packet. |
| `.github/workflows/*` | No | CI is not present yet. Add through a CI work packet. |

---

## 4. Baseline Directory Inventory

The current baseline contains:

```text
docs/
docs/adr/
docs/architecture/
docs/domain/
docs/planning/
docs/product/
docs/work-packets/
```

## 4.1 Directory Status

| Directory | Status | Notes |
| --- | --- | --- |
| `docs/adr/` | Populated | Contains ADR index, template, and current ADR lineage. |
| `docs/architecture/` | Populated | Contains architecture overview. |
| `docs/domain/` | Empty | Intentional future expansion point. |
| `docs/planning/` | Empty before this file | This file begins planning baseline inventory. |
| `docs/product/` | Populated | Contains product documents and an architecture overview copy. |
| `docs/work-packets/` | Populated after WP index/template | Contains work packet governance and packets. |

---

## 5. Product Document Inventory

The baseline product directory contains:

```text
docs/product/00-architecture-overview.md
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
```

## 5.1 Product Document Table

| File | Status | Notes |
| --- | --- | --- |
| `docs/product/00-product-inception-brief.md` | Present | Product inception artifact. |
| `docs/product/01-product-charter.md` | Present | Product charter artifact. |
| `docs/product/02-stakeholder-and-user-model.md` | Present | Stakeholder and user model artifact. |
| `docs/product/03-software-requirements-specification.md` | Present | SRS artifact. |
| `docs/product/00-architecture-overview.md` | Present | Architecture overview exists inside product directory; may overlap with `docs/architecture/00-architecture-overview.md`. |

## 5.2 Product Document Findings

1. Product inception, charter, stakeholder model, and SRS exist.
2. Product directory contains an architecture overview file.
3. The architecture overview also exists under `docs/architecture/`.
4. This duplication should not be changed silently.
5. A future work packet should compare the two architecture overview files and decide whether both are intentional.

---

## 6. Architecture Document Inventory

The baseline architecture directory contains:

```text
docs/architecture/00-architecture-overview.md
```

## 6.1 Architecture Document Table

| File | Status | Notes |
| --- | --- | --- |
| `docs/architecture/00-architecture-overview.md` | Present | Architecture overview artifact. |

## 6.2 Architecture Findings

1. The architecture directory has a canonical-looking architecture overview.
2. A second architecture overview exists under `docs/product/`.
3. A future work packet should decide whether the product copy is historical, misplaced, a different artifact, or should be superseded.

---

## 7. ADR Inventory

The baseline ADR directory contains:

```text
docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md
docs/adr/ADR-0002-repository-based-context-continuity.md
docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md
docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md
docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md
docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md
docs/adr/ADR-0008-foundry-control-plane.md
docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md
docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0016-worktree-based-parallel-execution.md
docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md
docs/adr/ADR-0018-work-packet-lifecycle.md
docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md
docs/adr/ADR-0020-directive-compiler-and-work-protocols.md
docs/adr/ADR-0021-repo-contract-testing.md
docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
docs/adr/ADR-TEMPLATE.md
docs/adr/README.md
```

## 7.1 ADR Table

| ADR | Title / Topic | Status |
| --- | --- | --- |
| `ADR-0001` | Architecture Decision Records as first-class engineering artifact | Present |
| `ADR-0002` | Repository-based context continuity | Present |
| `ADR-0003` | Repository topology: bounded monorepos | Present |
| `ADR-0004` | Four-tier repository access classification | Present |
| `ADR-0005` | Clean-room architecture and pattern adoption | Present |
| `ADR-0006` | Canonical repository plus vector retrieval | Present |
| `ADR-0008` | Foundry control plane | Present |
| `ADR-0011` | Dependency pinning and exact lockfiles | Present |
| `ADR-0013` | Polyglot persistence and Qdrant retrieval | Present |
| `ADR-0014` | Polyglot language strategy | Present |
| `ADR-0015` | Polyglot persistence and Qdrant retrieval | Present |
| `ADR-0016` | Worktree-based parallel execution | Present |
| `ADR-0017` | Foundry event bus and notification router | Present |
| `ADR-0018` | Work packet lifecycle | Present |
| `ADR-0019` | Primary package managers: uv, cargo, pnpm | Present |
| `ADR-0020` | Directive compiler and work protocols | Present |
| `ADR-0021` | Repo contract testing | Present |
| `ADR-0022` | Evaluation harness | Present |

## 7.2 ADR Support Files

| File | Status | Notes |
| --- | --- | --- |
| `docs/adr/README.md` | Present | ADR index. |
| `docs/adr/ADR-TEMPLATE.md` | Present | ADR template. |

## 7.3 ADR Number Gaps

The baseline has ADR number gaps.

Missing from the visible sequence:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

These gaps are accepted as baseline facts.

They should not be filled or renumbered silently.

## 7.4 ADR Topic Overlaps

Potential overlap exists between:

```text
ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

The filenames indicate similar or duplicate topic coverage.

This should be reviewed through a future ADR normalization packet.

## 7.5 ADR Findings

1. ADR system exists and is populated.
2. ADR numbering has gaps.
3. Some ADR topics may overlap.
4. ADRs appear to reflect a mature architecture-planning lineage.
5. Future work should respect this existing ADR lineage.
6. Cleanup should be review-based, not automatic.

---

## 8. Work Packet Inventory

The work-packet directory now contains or is expected to contain:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
```

## 8.1 Work Packet Table

| File | Status | Purpose |
| --- | --- | --- |
| `docs/work-packets/README.md` | Present | Work packet index and operating rules. |
| `docs/work-packets/WORK-PACKET-TEMPLATE.md` | Present | Reusable packet template. |
| `docs/work-packets/WP-0001-work-packet-template.md` | Present | Governs template creation. |
| `docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md` | Present | Governs baseline inventory review. |

## 8.2 Work Packet Findings

1. The work-packet system has been added after the uploaded baseline.
2. `WP-0001` bootstraps the reusable template.
3. `WP-0002` governs this baseline inventory review.
4. Future work should proceed through numbered work packets.

---

## 9. Domain Directory Inventory

The domain directory exists:

```text
docs/domain/
```

Current state:

```text
empty
```

## 9.1 Domain Findings

1. `docs/domain/` exists as an expansion point.
2. No domain model baseline exists yet.
3. A future work packet should create the initial domain model aligned to the current ADR lineage.

Recommended follow-up:

```text
WP-0003: Domain Model Baseline
```

---

## 10. Planning Directory Inventory

The planning directory exists:

```text
docs/planning/
```

Before this file, it was empty.

After this file, it contains:

```text
docs/planning/00-baseline-inventory.md
```

## 10.1 Planning Findings

1. Planning directory exists as an expansion point.
2. This file is the first planning artifact under the new baseline stabilization sequence.
3. Future planning artifacts should follow from the current ADR/product baseline, not from the discarded alternate ADR sequence.

Recommended follow-up:

```text
WP-0004: Planning Baseline
```

---

## 11. Known Baseline Findings

## 11.1 Missing Root README

Finding:

```text
README.md is not present in the uploaded baseline.
```

Impact:

1. New readers may not know where to start.
2. Future AI sessions may not have a root orientation file.
3. Repository purpose may be less discoverable.

Recommendation:

Create a future work packet for root README baseline.

Possible packet:

```text
WP-0009: Root README Baseline
```

## 11.2 Architecture Overview Exists in Two Places

Finding:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Impact:

1. Readers may not know which file is authoritative.
2. Future updates may diverge.
3. Documentation navigation may become confusing.

Recommendation:

Create a future work packet to compare both files and decide whether to preserve, rename, move, supersede, or cross-reference them.

Possible packet:

```text
WP-0010: Architecture Overview Placement Review
```

## 11.3 ADR Number Gaps Exist

Finding:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

are not present.

Impact:

1. New readers may wonder whether files are missing.
2. ADR index may need an explicit gap policy.
3. Numbering continuity may be unclear.

Recommendation:

Create a future ADR index normalization review packet. Do not renumber existing ADRs.

Possible packet:

```text
WP-0006: ADR Index Normalization Review
```

## 11.4 ADR Persistence/Retrieval Overlap Exists

Finding:

```text
ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

appear to cover similar topics.

Impact:

1. Architecture intent may be duplicated or conflicting.
2. Future implementation may reference the wrong ADR.
3. ADR index may need status clarification.

Recommendation:

Review both ADRs in a future normalization packet. Preserve both until explicitly superseded or clarified.

## 11.5 `tree` File Exists as Baseline Artifact

Finding:

```text
tree
```

exists at the repository root.

Impact:

1. It can serve as a captured snapshot.
2. It can become stale quickly.
3. It may confuse users if not explained.

Recommendation:

Keep it for now as part of the accepted baseline. Later decide whether to move it under documentation, replace it with a generated inventory, or remove it.

Possible packet:

```text
WP-0011: Baseline Tree Artifact Policy
```

## 11.6 Empty Directories Exist

Finding:

```text
docs/domain/
docs/planning/
docs/work-packets/
```

were empty or partially empty in the uploaded baseline.

Impact:

1. Expansion points exist.
2. Missing contents must be created through work packets.
3. Empty directories may not persist in Git unless tracked by files.

Recommendation:

Populate them intentionally through baseline work packets.

---

## 12. Baseline Preservation Rules

Future work must obey the following rules:

1. Do not rename existing ADRs without a work packet.
2. Do not renumber ADRs.
3. Do not delete duplicate-looking ADRs without review.
4. Do not move architecture files without review.
5. Do not remove `tree` without a work packet.
6. Do not introduce runtime code before baseline planning and verification are established.
7. Do not treat empty directories as mistakes.
8. Do not silently normalize the repository to a different plan.
9. Do not rewrite history further unless explicitly requested by the Project Steward.
10. Use work packets for all non-trivial changes.

---

## 13. Follow-up Work Register

| Follow-up | Proposed Packet | Priority | Notes |
| --- | --- | --- | --- |
| Create domain model baseline. | `WP-0003` | High | Populate `docs/domain/`. |
| Create planning baseline. | `WP-0004` | High | Populate planning artifacts aligned to current ADRs. |
| Add repository verification baseline. | `WP-0005` | High | Local checks for baseline files. |
| Review ADR index normalization. | `WP-0006` | Medium | Clarify gaps/duplicates/status. |
| Add repo contract testing baseline. | `WP-0007` | Medium | Align with ADR-0021. |
| Add context continuity baseline. | `WP-0008` | Medium | Align with ADR-0002 and ADR-0006. |
| Add root README baseline. | `WP-0009` | Medium | Improve repo orientation. |
| Review architecture overview placement. | `WP-0010` | Medium | Compare product vs architecture copies. |
| Define baseline tree artifact policy. | `WP-0011` | Low | Decide fate of root `tree` file. |

---

## 14. Baseline Inventory Acceptance Criteria

This baseline inventory is complete for the current phase when:

1. Root files are inventoried.
2. Documentation directories are inventoried.
3. Product documents are inventoried.
4. Architecture documents are inventoried.
5. ADRs are inventoried.
6. Work-packet files are inventoried.
7. Empty directories are identified.
8. ADR number gaps are identified.
9. Potential ADR overlap is identified.
10. Architecture overview duplication is identified.
11. Missing root README is identified.
12. Follow-up work is registered.
13. Baseline preservation rules are documented.
14. Verification command passes.

---
