# Agentic Software Framework

The Agentic Software Framework is a repository-governed software product initiative for disciplined AI-assisted software development.

Its purpose is to help transform product intent, architecture decisions, context continuity, work protocols, work packets, verification evidence, and implementation work into a durable, auditable repository-centered system.

The uploaded repository tree is the active baseline.

Current phase:

```text
Baseline Stabilization
````

Runtime implementation has not started.

This repository currently contains planning, architecture, ADR, domain, verification, work-packet, and context-continuity artifacts. It does not yet contain runtime application code, executable repo contract scripts, CI workflows, package-manager setup, database schema, vector retrieval implementation, or evaluation harness implementation.

---

## Current Status

The repository is currently being stabilized before runtime implementation begins.

The current stabilization work has established:

1. Root governance files.
2. Product documents.
3. Architecture overview documents.
4. ADR index and ADR lineage.
5. Baseline inventory.
6. Domain model baseline.
7. Planning baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Work-packet governance.
11. Context-continuity artifacts.

The repository should continue to evolve through explicit work packets.

---

## Start Here

Future humans and AI sessions should start with:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
```

These files explain the current continuation point and the rules for choosing repository context.

Then read:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

These files define how non-trivial work should be scoped, verified, completed, and committed.

---

## Canonical Orientation Documents

The most important current orientation documents are:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

---

## Product Documents

Product artifacts live in:

```text
docs/product/
```

Current product documents:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
```

These documents describe the product idea, mission, user model, requirements, and product-level architecture direction.

---

## Architecture Documents

Architecture artifacts live in:

```text
docs/architecture/
```

Current architecture document:

```text
docs/architecture/00-architecture-overview.md
```

Known caveat:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Both architecture overview files exist in the accepted baseline. They should not be moved, deleted, or merged without a future explicit work packet.

---

## Architecture Decision Records

ADRs live in:

```text
docs/adr/
```

Current ADR support files:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

Current ADR lineage includes decisions about:

1. ADRs as first-class engineering artifacts.
2. Repository-based context continuity.
3. Repository topology.
4. Access tier classification.
5. Clean-room architecture and pattern adoption.
6. Canonical repository plus vector retrieval.
7. Foundry Control Plane.
8. Dependency pinning.
9. Polyglot persistence and Qdrant retrieval.
10. Polyglot language strategy.
11. Worktree-based parallel execution.
12. Event bus and notification routing.
13. Work packet lifecycle.
14. Package manager strategy.
15. Directive compiler and work protocols.
16. Repo contract testing.
17. Evaluation harness.

Known ADR caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
```

These caveats are accepted baseline facts. Do not renumber, delete, rename, fill, or supersede ADRs without an explicit work packet.

---

## Work Packets

Work packets live in:

```text
docs/work-packets/
```

Work packets are the repository’s governed execution unit.

A work packet defines:

1. Purpose.
2. Source inputs.
3. Scope.
4. Non-goals.
5. Assumptions.
6. Constraints.
7. Risks.
8. Readiness checklist.
9. Affected files.
10. Implementation plan.
11. Acceptance criteria.
12. Verification plan.
13. Security and privacy notes.
14. Completion record.
15. Recommended atomic commit.
16. Follow-up work.

Current work-packet governance files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Current baseline work packets:

```text
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
docs/work-packets/WP-0006-adr-index-normalization-review.md
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
docs/work-packets/WP-0008-context-continuity-baseline.md
docs/work-packets/WP-0009-root-readme-baseline.md
```

Non-trivial work should proceed through a work packet.

---

## Planning

Planning artifacts live in:

```text
docs/planning/
```

Current planning documents:

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
```

The planning baseline currently recommends continuing with baseline stabilization before runtime implementation.

---

## Domain Model

Domain artifacts live in:

```text
docs/domain/
```

Current domain model:

```text
docs/domain/00-domain-model.md
```

The domain model defines the current conceptual model, including repository governance, ADRs, context continuity, Foundry Control Plane, work packets, directive compiler concepts, persistence and retrieval, repo contract testing, evaluation harness concepts, access tiers, and clean-room pattern adoption.

---

## Verification

Verification artifacts live in:

```text
docs/verification/
```

Current verification documents:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

Current verification status:

```text
Documentation-level verification baseline exists.
Documentation-level repo contract baseline exists.
Executable repo contract checks do not exist yet.
CI verification does not exist yet.
Runtime tests do not exist yet because runtime implementation has not started.
```

The current repo contract baseline is documentation-only.

---

## AI and Context Continuity

Context-continuity artifacts live in:

```text
docs/ai/
```

Current files:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

These files exist so future humans and AI sessions can resume from repository artifacts instead of relying on chat memory.

Important context rule:

```text
Vector retrieval augments repository memory; it does not replace it.
```

Vector retrieval has not been implemented yet.

---

## Known Baseline Caveats

The following caveats are known and intentional for the current baseline:

```text
README.md was absent from the uploaded baseline and is added by WP-0009.
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured baseline artifact.
Executable repo contract checks do not exist yet.
CI workflows do not exist yet.
Package-manager files do not exist yet.
Runtime implementation has not started.
```

Do not silently fix these caveats.

Use explicit work packets.

---

## Current Rules for Future Work

Future work must follow these rules:

1. Treat the uploaded repository tree as the active baseline until a newer baseline supersedes it.
2. Use work packets for non-trivial changes.
3. Preserve existing ADR numbering and filenames.
4. Do not fill ADR number gaps automatically.
5. Do not delete or supersede duplicate-looking ADRs without review.
6. Do not move architecture documents without a work packet.
7. Do not remove the root `tree` file without a work packet.
8. Do not claim verification passed unless it actually ran.
9. Do not claim runtime implementation exists before it exists.
10. Do not introduce secrets, credentials, tokens, private keys, or sensitive operational values.

---

## Recommended Next Work

After `WP-0009: Root README Baseline`, the recommended next work is:

```text
WP-0010: Architecture Overview Placement Review
```

Rationale:

1. Architecture overview content currently exists in both `docs/product/` and `docs/architecture/`.
2. The repository should clarify whether both files are intentional, whether one is canonical, or whether one should later be superseded.
3. This should be review-only first and should not silently move or delete either file.

Recommended later work:

```text
WP-0011: Baseline Tree Artifact Policy
WP-0012: ADR Index Gap and Status Annotation
WP-0013: Persistence ADR Overlap Review
WP-0014: Executable Repo Contract Script
WP-0015: Evaluation Harness Baseline
```