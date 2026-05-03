---
title: "ADR Index"
description: "Architecture Decision Record index for the Agentic Software Framework, including current ADR inventory, known ADR number gaps, baseline caveats, and guidance against silent ADR renumbering, deletion, or supersession."
status: "proposed"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "architecture"
  - "engineering"
  - "documentation"
  - "future-contributors"
  - "future-ai-agents"
document_type: "adr-index"
canonical: false
related_documents:
  - "docs/adr/ADR-TEMPLATE.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md"
---

# ADR Index

## 1. Purpose

This document is the Architecture Decision Record index for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

This index records:

1. Current ADR support files.
2. Current ADR inventory.
3. Known ADR number gaps.
4. Known ADR topic overlap.
5. ADR status annotation guidance.
6. Rules against silent ADR renumbering, deletion, gap filling, or supersession.
7. Future ADR maintenance work.

This index does not rename, delete, renumber, rewrite, supersede, or create ADRs.

---

## 2. ADR Governance Rule

ADRs are durable architecture decision-history artifacts.

Rules:

1. ADR numbers are historical identifiers.
2. ADR numbers must not be reused.
3. ADR files must not be silently renamed.
4. ADR files must not be silently deleted.
5. ADR gaps must not be silently filled.
6. ADRs must not be superseded without an explicit follow-up decision.
7. Duplicate-looking ADRs must not be deleted without content-level review.
8. ADR index updates must not mutate individual ADR decisions.
9. Future ADR maintenance must happen through explicit work packets.

---

## 3. ADR Support Files

| File | Purpose | Status |
| --- | --- | --- |
| `docs/adr/README.md` | ADR index. | Present |
| `docs/adr/ADR-TEMPLATE.md` | Reusable ADR template. | Present |

---

## 4. Current ADR Inventory

The current baseline contains the following ADR files.

| ADR | File | Topic | Baseline Status |
| --- | --- | --- | --- |
| `ADR-0001` | `docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md` | ADRs as first-class engineering artifacts. | Present in baseline |
| `ADR-0002` | `docs/adr/ADR-0002-repository-based-context-continuity.md` | Repository-based context continuity. | Present in baseline |
| `ADR-0003` | `docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md` | Repository topology and bounded monorepos. | Present in baseline |
| `ADR-0004` | `docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md` | Four-tier repository access classification. | Present in baseline |
| `ADR-0005` | `docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md` | Clean-room architecture and pattern adoption. | Present in baseline |
| `ADR-0006` | `docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md` | Canonical repository plus vector retrieval. | Present in baseline |
| `ADR-0008` | `docs/adr/ADR-0008-foundry-control-plane.md` | Foundry Control Plane. | Present in baseline |
| `ADR-0011` | `docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md` | Dependency pinning and exact lockfiles. | Present in baseline |
| `ADR-0013` | `docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md` | Polyglot persistence and Qdrant retrieval. | Present in baseline; possible overlap with ADR-0015 |
| `ADR-0014` | `docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md` | Polyglot language strategy. | Present in baseline |
| `ADR-0015` | `docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md` | Polyglot persistence and Qdrant retrieval. | Present in baseline; possible overlap with ADR-0013 |
| `ADR-0016` | `docs/adr/ADR-0016-worktree-based-parallel-execution.md` | Worktree-based parallel execution. | Present in baseline |
| `ADR-0017` | `docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md` | Foundry event bus and notification router. | Present in baseline |
| `ADR-0018` | `docs/adr/ADR-0018-work-packet-lifecycle.md` | Work packet lifecycle. | Present in baseline |
| `ADR-0019` | `docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md` | Primary package managers. | Present in baseline |
| `ADR-0020` | `docs/adr/ADR-0020-directive-compiler-and-work-protocols.md` | Directive compiler and work protocols. | Present in baseline |
| `ADR-0021` | `docs/adr/ADR-0021-repo-contract-testing.md` | Repo contract testing. | Present in baseline |
| `ADR-0022` | `docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md` | Evaluation harness for context continuity and agent execution. | Present in baseline |

---

## 5. Known ADR Number Gaps

The accepted baseline has known ADR number gaps.

Known absent numbers:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
````

These are **known gaps**, not automatic errors.

This index does not classify these gaps as retired, reserved, missing, rejected, or deleted because the current baseline does not contain enough evidence to assign that meaning safely.

Current policy:

```text
Treat ADR-0007, ADR-0009, ADR-0010, and ADR-0012 as known baseline gaps.
```

Rules:

1. Do not create placeholder ADRs solely to fill these numbers.
2. Do not renumber later ADRs to remove these gaps.
3. Do not reuse the missing numbers for unrelated future decisions without explicit approval.
4. Do not treat the absence of these numbers as a repo contract failure.
5. Document the gaps as baseline facts until a future ADR maintenance packet decides otherwise.

---

## 6. Known ADR Topic Overlap

The current baseline has a known potential overlap:

```text
ADR-0013
ADR-0015
```

Files:

```text
docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

Both filenames reference:

```text
Polyglot Persistence and Qdrant Retrieval
```

Current policy:

```text
Preserve both ADR-0013 and ADR-0015 until a future content-level review determines their relationship.
```

This index does not decide whether they are:

1. Duplicates.
2. Revisions.
3. Split-scope decisions.
4. Supersession candidates.
5. Complementary decisions.
6. Historical artifacts.

Future follow-up should compare the content of both files before making any decision.

Recommended future packet:

```text
WP-0013: Persistence ADR Overlap Review
```

---

## 7. Status Annotation Guidance

The `Baseline Status` column in this index means:

```text
Whether the ADR file is present in the accepted uploaded repository baseline.
```

It does **not** necessarily mean:

```text
accepted
rejected
deprecated
superseded
implemented
```

Decision status should be taken from the individual ADR file if that file contains explicit status metadata.

Until a dedicated ADR status metadata review is completed:

1. Do not infer decision status from the index alone.
2. Do not assume every present ADR is fully implemented.
3. Do not assume every present ADR has normalized metadata.
4. Do not assume a duplicate-looking topic is superseded.
5. Do not change ADR statuses without an explicit packet.

Recommended future packet:

```text
ADR Status Metadata Review
```

or, if using the current work-packet sequence:

```text
WP-0014 or later: ADR Status Metadata Review
```

---

## 8. Thematic ADR Groups

The current ADR lineage may be understood through these themes.

## 8.1 Governance and Repository Memory

Relevant ADRs:

```text
ADR-0001
ADR-0002
ADR-0003
ADR-0006
ADR-0021
```

Theme:

```text
Repository as governed durable memory and enforceable structure.
```

## 8.2 Access, Safety, and Clean-Room Boundaries

Relevant ADRs:

```text
ADR-0004
ADR-0005
```

Theme:

```text
Repository access classification, sensitivity boundaries, and safe pattern adoption.
```

## 8.3 Foundry Execution Model

Relevant ADRs:

```text
ADR-0008
ADR-0016
ADR-0017
ADR-0018
ADR-0020
```

Theme:

```text
Foundry orchestration, work packet lifecycle, worktree execution, event routing, and directive protocols.
```

## 8.4 Persistence, Retrieval, and Language Strategy

Relevant ADRs:

```text
ADR-0011
ADR-0013
ADR-0014
ADR-0015
ADR-0019
```

Theme:

```text
Polyglot implementation, dependency pinning, package managers, persistence, and retrieval.
```

## 8.5 Evaluation and Quality

Relevant ADRs:

```text
ADR-0021
ADR-0022
```

Theme:

```text
Repo contract testing and evaluation harness design.
```

---

## 9. Prohibited ADR Index Interpretations

Do not interpret this index as permission to:

1. Rename ADR files.
2. Renumber ADR files.
3. Delete ADR files.
4. Fill ADR number gaps.
5. Create placeholder ADRs.
6. Supersede ADRs.
7. Change ADR statuses.
8. Rewrite ADR titles.
9. Rewrite ADR content.
10. Move ADR files.
11. Treat ADR-0013 as superseded.
12. Treat ADR-0015 as superseded.
13. Treat missing ADR numbers as repo contract failures.
14. Treat baseline presence as proof of runtime implementation.
15. Rewrite Git history to hide ADR lineage.

---

## 10. Relationship to ADR Normalization Review

The current ADR gap and overlap findings are described in more detail in:

```text
docs/planning/02-adr-normalization-review.md
```

That document is the review artifact.

This index is the reader-facing ADR directory annotation.

The review artifact should be consulted before making any ADR maintenance decision.

---

## 11. Relationship to Repo Contract Testing

Repo contract testing should verify:

1. `docs/adr/README.md` exists.
2. `docs/adr/ADR-TEMPLATE.md` exists.
3. Current baseline ADR files exist.
4. Known ADR gaps are allowed.
5. ADR-0013 and ADR-0015 both remain present until explicitly reviewed.
6. ADR contract checks do not assume contiguous numbering.
7. ADR contract checks do not auto-fix or mutate ADR files.

Repo contract testing should not fail merely because these files do not exist:

```text
docs/adr/ADR-0007-*.md
docs/adr/ADR-0009-*.md
docs/adr/ADR-0010-*.md
docs/adr/ADR-0012-*.md
```

---

## 12. Relationship to Context Continuity

Future AI and handoff sessions should preserve these ADR facts:

1. ADRs are first-class architecture decision artifacts.
2. Current ADR numbers are historical identifiers.
3. ADR gaps exist.
4. ADR-0013 and ADR-0015 may overlap.
5. No ADR should be silently renamed, deleted, renumbered, or superseded.
6. The ADR normalization review is the relevant planning reference for ADR cleanup.

Relevant context documents:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
```

---

## 13. Future ADR Maintenance Work

Recommended future ADR maintenance packets include:

## 13.1 Persistence ADR Overlap Review

Suggested packet:

```text
WP-0013: Persistence ADR Overlap Review
```

Purpose:

```text
Compare ADR-0013 and ADR-0015 at content level and recommend whether to preserve, clarify, rename, supersede, or split scope.
```

## 13.2 ADR Status Metadata Review

Suggested packet:

```text
WP-0014 or later: ADR Status Metadata Review
```

Purpose:

```text
Review ADR frontmatter/status consistency and determine whether the repository should normalize ADR metadata.
```

## 13.3 ADR Thematic Index Improvement

Suggested packet:

```text
Future packet: ADR Thematic Index Improvement
```

Purpose:

```text
Improve the ADR index with thematic grouping, implementation relevance, supersession links, and status metadata after the status model is confirmed.
```

---

## 14. Maintenance Rules

When updating this index:

1. Preserve existing ADR numbers.
2. Preserve known ADR gaps unless a future explicit decision changes their classification.
3. Add new ADRs in chronological order.
4. Do not reuse ADR numbers.
5. Do not remove ADR rows unless the removal is authorized by a packet.
6. Do not mark ADRs superseded unless individual ADR files and the index are updated together under an explicit packet.
7. Keep references repository-relative.
8. Keep gap and overlap caveats visible.
9. Update repo contract expectations if the ADR inventory changes.
10. Update context-continuity docs if ADR state changes meaningfully.

---

## 15. Verification

Run:

```bash
test -f docs/adr/README.md && \
grep -q '^# ADR Index$' docs/adr/README.md && \
grep -q 'ADR-0007' docs/adr/README.md && \
grep -q 'ADR-0009' docs/adr/README.md && \
grep -q 'ADR-0010' docs/adr/README.md && \
grep -q 'ADR-0012' docs/adr/README.md && \
grep -q 'ADR-0013' docs/adr/README.md && \
grep -q 'ADR-0015' docs/adr/README.md && \
grep -q 'docs/planning/02-adr-normalization-review.md' docs/adr/README.md && \
grep -q 'must not be silently renamed' docs/adr/README.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```

Manual verification:

1. Confirm no individual ADR files were modified.
2. Confirm `docs/adr/ADR-TEMPLATE.md` was not modified.
3. Confirm ADR gaps are documented as known gaps, not errors.
4. Confirm ADR-0013 and ADR-0015 overlap is documented as potential overlap, not resolved supersession.
5. Confirm this index does not claim runtime implementation exists.

---

## 16. Recommended Atomic Commit

```bash
git add docs/adr/README.md docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
git commit -m "docs(adr): annotate adr index gaps and statuses"
```

If `WP-0012` was already committed separately, use:

```bash
git add docs/adr/README.md
git commit -m "docs(adr): annotate adr index gaps and statuses"
```