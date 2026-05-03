---
title: "Work Packet Index"
description: "Index and operating rules for work packets in the Agentic Software Framework baseline, including numbering, statuses, readiness rules, completion rules, verification linkage, commit linkage, and the initial work packet sequence."
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
document_type: "work-packet-index"
canonical: false
related_documents:
  - "README.md"
  - "CONTRIBUTING.md"
  - "SECURITY.md"
  - "docs/product/00-product-inception-brief.md"
  - "docs/product/01-product-charter.md"
  - "docs/product/02-stakeholder-and-user-model.md"
  - "docs/product/03-software-requirements-specification.md"
  - "docs/product/00-architecture-overview.md"
  - "docs/architecture/00-architecture-overview.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
  - "docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md"
  - "docs/adr/ADR-0002-repository-based-context-continuity.md"
  - "docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md"
  - "docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md"
  - "docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md"
  - "docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md"
  - "docs/adr/ADR-0008-foundry-control-plane.md"
  - "docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md"
  - "docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md"
  - "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
  - "docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md"
  - "docs/adr/ADR-0016-worktree-based-parallel-execution.md"
  - "docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md"
  - "docs/adr/ADR-0018-work-packet-lifecycle.md"
  - "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
  - "docs/adr/ADR-0020-directive-compiler-and-work-protocols.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
---

# Work Packet Index

## 1. Purpose

This document is the Work Packet Index for the current **Agentic Software Framework** repository baseline.

The uploaded repository tree is now treated as the active baseline. This index therefore assumes the current repository already contains:

1. Root governance files.
2. Product documents.
3. Architecture overview documents.
4. ADR index and template.
5. ADRs through the current baseline sequence.
6. Empty `docs/domain/`, `docs/planning/`, and `docs/work-packets/` directories.

This document establishes the rules for creating future work packets so future implementation and documentation work proceeds through bounded, verifiable, atomic units.

---

## 2. Current Baseline Rule

The current repository tree is the baseline.

This means:

1. Existing ADR names and numbers are preserved.
2. Existing ADR number gaps are not corrected automatically.
3. Existing duplicate or overlapping ADR topics are not changed by this index.
4. Existing product and architecture document placement is preserved.
5. Empty directories are treated as intentional future expansion points.
6. Future cleanup must happen through explicit work packets.

This index does not rename, delete, rewrite, or supersede existing baseline files.

---

## 3. Work Packet Definition

A **Work Packet** is the canonical unit of controlled execution.

A work packet defines:

1. What work will be done.
2. Why the work exists.
3. Which milestone, backlog item, ADR, or document justifies it.
4. What is in scope.
5. What is out of scope.
6. Which files are affected.
7. What acceptance criteria must be satisfied.
8. What verification must be performed.
9. What security and privacy concerns apply.
10. What atomic commit should result.

A work packet is not merely a task title. It is an executable contract.

---

## 4. Why Work Packets Matter

This repository is intended to support serious AI-assisted software development.

Without work packets, implementation can drift into:

```text
prompt
→ generated files
→ unclear scope
→ missing tests
→ stale documentation
→ mixed commits
→ weak handoff
```

With work packets, the flow becomes:

```text
baseline document / ADR / backlog need
→ bounded work packet
→ readiness check
→ implementation
→ verification
→ completion record
→ atomic commit
```

This protects the project from architectural drift, vague AI-generated work, mixed commits, and unverifiable completion.

---

## 5. Work Packet Numbering

Work packet files must use this format:

```text
WP-0001-short-kebab-case-title.md
WP-0002-short-kebab-case-title.md
WP-0003-short-kebab-case-title.md
```

Rules:

1. Work packet numbers are sequential.
2. Work packet numbers are never reused.
3. Cancelled work packets keep their numbers.
4. Superseded work packets keep their numbers.
5. Replacement work packets receive new numbers.
6. File names use lowercase kebab-case after the work packet number.
7. The work packet number must match the title and frontmatter.

Example:

```text
docs/work-packets/WP-0001-work-packet-template.md
```

---

## 6. Work Packet Status Values

Allowed statuses:

1. `draft`
2. `ready`
3. `blocked`
4. `in_progress`
5. `verifying`
6. `complete`
7. `superseded`
8. `cancelled`

## 6.1 Draft

The packet is being shaped and is not ready for execution.

## 6.2 Ready

The packet has enough information to begin execution.

Ready requires:

1. Purpose.
2. Source inputs.
3. Scope.
4. Non-goals.
5. Affected files.
6. Acceptance criteria.
7. Verification plan.
8. Security and privacy notes.
9. Recommended atomic commit.
10. No unresolved blocker.

## 6.3 Blocked

The packet cannot proceed because a required input, decision, file, tool, or approval is missing.

## 6.4 In Progress

Execution has begun.

## 6.5 Verifying

Implementation or documentation changes are complete enough to verify.

## 6.6 Complete

The packet is complete only after acceptance criteria and verification are satisfied or explicitly limited with rationale.

## 6.7 Superseded

The packet has been replaced by another packet.

## 6.8 Cancelled

The packet was intentionally abandoned.

---

## 7. Required Work Packet Frontmatter

Every work packet must include YAML frontmatter.

Minimum frontmatter:

```yaml
---
title: "WP-0000: Work Packet Title"
description: ""
status: "draft"
version: "0.1.0"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
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
work_packet_id: "WP-0000"
milestone: ""
backlog_refs: []
adr_refs: []
related_documents: []
affected_files: []
recommended_commit: ""
---
```

Additional fields may be added when needed.

---

## 8. Required Work Packet Sections

Every work packet should include:

1. Purpose.
2. Status.
3. Source Inputs.
4. Scope.
5. Non-Goals.
6. Assumptions.
7. Constraints.
8. Risks.
9. Readiness Checklist.
10. Affected Files.
11. Implementation Plan.
12. Acceptance Criteria.
13. Verification Plan.
14. Security and Privacy Notes.
15. Documentation Updates.
16. Completion Record.
17. Recommended Atomic Commit.
18. Follow-up Work.
19. Notes.

Small packets may be concise, but sections should not be omitted without reason.

---

## 9. Readiness Rules

A work packet is ready only when all applicable readiness conditions are satisfied.

Readiness checklist:

```text
[ ] Purpose is clear.
[ ] Source inputs are identified.
[ ] Related baseline documents or ADRs are listed.
[ ] Scope is bounded.
[ ] Non-goals are explicit.
[ ] Affected files are listed or intentionally marked as to be discovered.
[ ] Acceptance criteria are observable.
[ ] Verification plan is defined.
[ ] Security and privacy notes are considered.
[ ] Recommended atomic commit is present.
[ ] No blocking open question remains unresolved.
```

A packet that fails readiness remains `draft` or `blocked`.

---

## 10. Completion Rules

A work packet may be marked `complete` only when:

1. All in-scope work is complete.
2. Acceptance criteria are satisfied.
3. Verification is `passed`, `limited`, or `skipped` with rationale.
4. Failed verification is not hidden.
5. Completion record is filled in.
6. Files created or modified are listed.
7. Known limitations are recorded.
8. Follow-up work is recorded.
9. Recommended commit is still accurate or has been revised.
10. The packet status is updated.

Generated files alone do not prove completion.

---

## 11. Verification Rules

Every packet must define verification before execution.

Verification may include:

1. File existence checks.
2. Markdown/frontmatter checks.
3. ADR index checks.
4. Documentation consistency checks.
5. Repo tree checks.
6. Local script checks.
7. Unit tests.
8. Integration tests.
9. Security checks.
10. Manual review.
11. `git diff --check`.

Verification result statuses:

1. `not_run`
2. `passed`
3. `failed`
4. `blocked`
5. `skipped`
6. `limited`

A packet must not claim verification passed unless verification actually ran.

---

## 12. Commit Linkage

Each work packet should generally result in one atomic Conventional Commit.

Commit rules:

1. One packet should produce one logical commit when practical.
2. Do not combine unrelated work.
3. Do not hide failed verification.
4. Do not include secrets.
5. Do not use vague messages.
6. The commit message must match actual changed files.

Examples:

```text
docs(work-packets): add work packet index
docs(work-packets): add work packet template
docs(work-packets): add baseline inventory packet
docs(domain): add initial domain model
docs(planning): add planning index
chore(verify): add repository verification baseline
docs(adr): normalize adr index references
```

---

## 13. Relationship to Existing ADRs

The baseline contains the following ADR lineage:

```text
ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002: Repository-Based Context Continuity
ADR-0003: Repository Topology — Bounded Monorepos Over Monolith or Full Fragmentation
ADR-0004: Access Tier Model — Four-Tier Repository Classification
ADR-0005: Clean Room Architecture and Pattern Adoption
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0008: Foundry Control Plane
ADR-0011: Dependency Pinning Policy — Exact Lockfiles Committed for All Ecosystems
ADR-0013: Polyglot Persistence and Qdrant Retrieval
ADR-0014: Polyglot Language Strategy
ADR-0015: Polyglot Persistence and Qdrant Retrieval
ADR-0016: Worktree-Based Parallel Execution
ADR-0017: Foundry Event Bus and Notification Router
ADR-0018: Work Packet Lifecycle
ADR-0019: Primary Package Managers — uv, cargo, and pnpm
ADR-0020: Directive Compiler and Work Protocols
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

Work packets must respect this existing ADR lineage.

If a future work packet needs to resolve an ADR gap, duplicate, overlap, or inconsistency, it must do so explicitly.

---

## 14. Relationship to Baseline Directories

The uploaded baseline includes these expansion directories:

```text
docs/domain/
docs/planning/
docs/work-packets/
```

Their purpose is:

1. `docs/domain/` — domain model, bounded contexts, entity model, invariants.
2. `docs/planning/` — epics, requirements map, backlog, milestones.
3. `docs/work-packets/` — executable work packets and packet governance.

This index is the first file in `docs/work-packets/`.

---

## 15. Initial Work Packet Sequence

The initial sequence should stabilize the baseline before product implementation continues.

| Work Packet | Title | Status | Purpose |
| --- | --- | --- | --- |
| `WP-0001` | Work Packet Template | Planned | Create the reusable template for future packets. |
| `WP-0002` | Baseline Inventory and Consistency Review | Planned | Record the uploaded tree as baseline and identify intentional gaps/duplicates. |
| `WP-0003` | Domain Model Baseline | Planned | Populate `docs/domain/` with the first domain model aligned to current ADRs. |
| `WP-0004` | Planning Baseline | Planned | Populate `docs/planning/` with epics, requirements map, backlog, and milestone plan. |
| `WP-0005` | Repository Verification Baseline | Planned | Add a local verification contract for baseline files and docs. |
| `WP-0006` | ADR Index Normalization Review | Planned | Review ADR numbering gaps, duplicates, and index consistency without changing decisions silently. |
| `WP-0007` | Repo Contract Testing Baseline | Planned | Add initial contract tests aligned with ADR-0021. |
| `WP-0008` | Context Continuity Baseline | Planned | Add AI/current-state/handoff documentation aligned with ADR-0002 and ADR-0006. |

This sequence preserves the uploaded baseline while making the repository more governable.

---

## 16. Work Packet File Index

As packets are created, this table should be updated.

| Work Packet | File | Status |
| --- | --- | --- |
| `WP-0001` | `docs/work-packets/WP-0001-work-packet-template.md` | Planned |
| `WP-0002` | `docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md` | Planned |
| `WP-0003` | `docs/work-packets/WP-0003-domain-model-baseline.md` | Planned |
| `WP-0004` | `docs/work-packets/WP-0004-planning-baseline.md` | Planned |
| `WP-0005` | `docs/work-packets/WP-0005-repository-verification-baseline.md` | Planned |
| `WP-0006` | `docs/work-packets/WP-0006-adr-index-normalization-review.md` | Planned |
| `WP-0007` | `docs/work-packets/WP-0007-repo-contract-testing-baseline.md` | Planned |
| `WP-0008` | `docs/work-packets/WP-0008-context-continuity-baseline.md` | Planned |

---

## 17. Baseline Cleanup Rule

Cleanup is allowed only through explicit work packets.

Examples of cleanup that require a packet:

1. Removing duplicate ADR content.
2. Filling ADR number gaps.
3. Renaming ADR files.
4. Moving architecture files.
5. Adding root `README.md` if missing.
6. Removing the `tree` baseline file.
7. Adding verification scripts.
8. Adding repo contract tests.
9. Introducing package manager files.
10. Changing package manager strategy.

This prevents accidental baseline drift.

---

## 18. Updating This Index

Update this index when:

1. A new work packet is created.
2. A work packet changes status.
3. A work packet is completed.
4. A work packet is superseded.
5. A work packet is cancelled.
6. A work packet file is renamed.
7. The initial sequence changes.
8. A milestone or planning document changes the roadmap.

Index updates should be committed with the related packet unless the index update is itself the work.

---

## 19. Work Packet System Acceptance Criteria

The work packet system is ready when:

1. This index exists.
2. A reusable work packet template exists.
3. The uploaded tree baseline is acknowledged.
4. Work packet numbering rules are documented.
5. Work packet statuses are documented.
6. Readiness rules are documented.
7. Completion rules are documented.
8. Verification linkage is documented.
9. Commit linkage is documented.
10. Initial work packet sequence is documented.

---
