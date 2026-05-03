---
title: "Verification Baseline"
description: "Initial repository verification baseline for the Agentic Software Framework, defining documentation-level checks for the uploaded repository tree, required files, required directories, ADRs, work packets, planning artifacts, domain artifacts, and whitespace safety."
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
document_type: "verification-baseline"
canonical: false
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/domain/00-domain-model.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/work-packets/WP-0005-repository-verification-baseline.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
---

# Verification Baseline

## 1. Purpose

This document defines the initial repository verification baseline for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

This verification baseline defines what should be checked locally before the repository proceeds deeper into repo contract testing, context continuity work, or runtime implementation.

This document is intentionally documentation-level. It does not yet introduce executable verification scripts, CI workflows, package-manager configuration, runtime tests, or repo contract test code.

It defines:

1. Root file checks.
2. Directory checks.
3. Product document checks.
4. Architecture document checks.
5. ADR checks.
6. Work packet checks.
7. Planning document checks.
8. Domain document checks.
9. Verification document checks.
10. Whitespace safety checks.
11. Manual review checks.
12. Deferred checks.
13. Follow-up work for repo contract testing.

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

Verification must therefore check the current baseline as accepted, not a different imagined structure.

Verification must not:

1. Rename files.
2. Delete files.
3. Move files.
4. Renumber ADRs.
5. Fill ADR gaps.
6. Deduplicate ADRs.
7. Rewrite architecture documents.
8. Remove the root `tree` file.
9. Add runtime implementation code.
10. Claim repo contract testing exists before it does.

Verification may identify issues and recommend follow-up work.

---

## 3. Verification Philosophy

The project should use verification to make repository expectations explicit and repeatable.

The verification model should follow these principles:

1. Verify what exists before changing what exists.
2. Prefer explicit checks over assumptions.
3. Treat failed checks as useful signals.
4. Do not hide known limitations.
5. Keep early checks simple and local.
6. Move from documentation-level checks to executable repo contract tests.
7. Preserve architectural traceability.
8. Require work packets for meaningful changes.
9. Avoid claiming automation before automation exists.
10. Protect against accidental baseline drift.

---

## 4. Verification Layers

The repository should eventually support multiple verification layers.

## 4.1 Documentation-Level Verification

Current layer.

Purpose:

```text
Define expected files, directories, and manual checks.
```

Status:

```text
Active in this document.
```

## 4.2 Shell-Checkable Verification

Future layer.

Purpose:

```text
Provide local commands that check required baseline files and documentation structure.
```

Status:

```text
Planned.
```

## 4.3 Repo Contract Testing

Future layer.

Purpose:

```text
Convert repository expectations into executable contract tests.
```

Status:

```text
Planned under ADR-0021.
```

## 4.4 CI Verification

Future layer.

Purpose:

```text
Run verification automatically on push and pull request.
```

Status:

```text
Deferred.
```

## 4.5 Runtime Verification

Future layer.

Purpose:

```text
Test application code, services, integrations, persistence, retrieval, and execution behavior.
```

Status:

```text
Deferred until runtime implementation exists.
```

---

## 5. Root File Checks

## 5.1 Required Root Files

The current baseline expects these root files:

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
tree
```

Check:

```bash
test -f CODEOWNERS && \
test -f CONTRIBUTING.md && \
test -f LICENSE && \
test -f SECURITY.md && \
test -f tree
```

## 5.2 Root README Status

The uploaded baseline does not include:

```text
README.md
```

Current verification behavior:

```text
README.md is not required by the current baseline.
```

Finding:

```text
A root README would improve orientation but should be added through a future work packet.
```

Possible future packet:

```text
WP-0009: Root README Baseline
```

## 5.3 Root Tooling Files Not Yet Required

The following files are not yet required:

```text
.gitignore
.gitattributes
.editorconfig
.github/workflows/*
package.json
pnpm-lock.yaml
pyproject.toml
uv.lock
Cargo.toml
Cargo.lock
```

These should become required only when the relevant tooling or package-manager work packets are executed.

---

## 6. Directory Checks

## 6.1 Required Documentation Directories

The current baseline expects these directories:

```text
docs/
docs/adr/
docs/architecture/
docs/domain/
docs/planning/
docs/product/
docs/work-packets/
docs/verification/
```

Check:

```bash
test -d docs && \
test -d docs/adr && \
test -d docs/architecture && \
test -d docs/domain && \
test -d docs/planning && \
test -d docs/product && \
test -d docs/work-packets && \
test -d docs/verification
```

## 6.2 Empty Directory Note

Git does not track empty directories.

The following directories should contain at least one file after baseline stabilization:

```text
docs/domain/
docs/planning/
docs/work-packets/
docs/verification/
```

Current expected anchor files:

```text
docs/domain/00-domain-model.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/verification/00-verification-baseline.md
```

---

## 7. Product Document Checks

## 7.1 Required Product Documents

The current baseline expects these product documents:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
```

Check:

```bash
test -f docs/product/00-product-inception-brief.md && \
test -f docs/product/01-product-charter.md && \
test -f docs/product/02-stakeholder-and-user-model.md && \
test -f docs/product/03-software-requirements-specification.md && \
test -f docs/product/00-architecture-overview.md
```

## 7.2 Product Document Heading Checks

Recommended checks:

```bash
grep -q '^# ' docs/product/00-product-inception-brief.md && \
grep -q '^# ' docs/product/01-product-charter.md && \
grep -q '^# ' docs/product/02-stakeholder-and-user-model.md && \
grep -q '^# ' docs/product/03-software-requirements-specification.md && \
grep -q '^# ' docs/product/00-architecture-overview.md
```

## 7.3 Product Frontmatter Checks

Recommended future repo contract behavior:

```text
All durable Markdown documents should include YAML frontmatter unless explicitly exempted.
```

Current behavior:

```text
Frontmatter should be checked manually until repo contract testing exists.
```

---

## 8. Architecture Document Checks

## 8.1 Required Architecture Documents

The current baseline expects:

```text
docs/architecture/00-architecture-overview.md
```

Check:

```bash
test -f docs/architecture/00-architecture-overview.md
```

## 8.2 Architecture Placement Finding

Both files exist:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Current verification behavior:

```text
Both files are allowed because both exist in the accepted uploaded baseline.
```

Future review:

```text
WP-0010: Architecture Overview Placement Review
```

---

## 9. ADR Checks

## 9.1 ADR Support Files

Required ADR support files:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

Check:

```bash
test -f docs/adr/README.md && \
test -f docs/adr/ADR-TEMPLATE.md
```

## 9.2 Current ADR File Checks

The current baseline expects these ADR files:

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
```

Check:

```bash
test -f docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md && \
test -f docs/adr/ADR-0002-repository-based-context-continuity.md && \
test -f docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md && \
test -f docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md && \
test -f docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md && \
test -f docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md && \
test -f docs/adr/ADR-0008-foundry-control-plane.md && \
test -f docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md && \
test -f docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md && \
test -f docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md && \
test -f docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md && \
test -f docs/adr/ADR-0016-worktree-based-parallel-execution.md && \
test -f docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md && \
test -f docs/adr/ADR-0018-work-packet-lifecycle.md && \
test -f docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md && \
test -f docs/adr/ADR-0020-directive-compiler-and-work-protocols.md && \
test -f docs/adr/ADR-0021-repo-contract-testing.md && \
test -f docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md
```

## 9.3 ADR Number Gap Behavior

Known missing numbers:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

Current verification behavior:

```text
These gaps are allowed.
```

Verification must not fail merely because these ADR numbers are absent.

Future review:

```text
WP-0006: ADR Index Normalization Review
```

## 9.4 ADR Overlap Behavior

Potential overlap:

```text
ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

Current verification behavior:

```text
Both files are allowed because both exist in the accepted uploaded baseline.
```

Future review:

```text
WP-0006: ADR Index Normalization Review
```

---

## 10. Work Packet Checks

## 10.1 Required Work Packet System Files

Required work-packet governance files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Check:

```bash
test -f docs/work-packets/README.md && \
test -f docs/work-packets/WORK-PACKET-TEMPLATE.md
```

## 10.2 Required Initial Work Packets

Required current work packets:

```text
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
```

Check:

```bash
test -f docs/work-packets/WP-0001-work-packet-template.md && \
test -f docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
test -f docs/work-packets/WP-0003-domain-model-baseline.md && \
test -f docs/work-packets/WP-0004-planning-baseline.md && \
test -f docs/work-packets/WP-0005-repository-verification-baseline.md
```

## 10.3 Work Packet Heading Checks

Check:

```bash
grep -q '^# Work Packet Index$' docs/work-packets/README.md && \
grep -q '^# WP-0000: Work Packet Title$' docs/work-packets/WORK-PACKET-TEMPLATE.md && \
grep -q '^# WP-0001: Work Packet Template$' docs/work-packets/WP-0001-work-packet-template.md && \
grep -q '^# WP-0002: Baseline Inventory and Consistency Review$' docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
grep -q '^# WP-0003: Domain Model Baseline$' docs/work-packets/WP-0003-domain-model-baseline.md && \
grep -q '^# WP-0004: Planning Baseline$' docs/work-packets/WP-0004-planning-baseline.md && \
grep -q '^# WP-0005: Repository Verification Baseline$' docs/work-packets/WP-0005-repository-verification-baseline.md
```

---

## 11. Planning and Domain Checks

## 11.1 Required Planning Files

Required planning files:

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
```

Check:

```bash
test -f docs/planning/00-baseline-inventory.md && \
test -f docs/planning/01-planning-baseline.md
```

## 11.2 Required Domain Files

Required domain files:

```text
docs/domain/00-domain-model.md
```

Check:

```bash
test -f docs/domain/00-domain-model.md
```

## 11.3 Planning and Domain Heading Checks

Check:

```bash
grep -q '^# Baseline Inventory$' docs/planning/00-baseline-inventory.md && \
grep -q '^# Planning Baseline$' docs/planning/01-planning-baseline.md && \
grep -q '^# Domain Model$' docs/domain/00-domain-model.md
```

---

## 12. Verification Document Checks

## 12.1 Required Verification Files

Required verification files:

```text
docs/verification/00-verification-baseline.md
```

Check:

```bash
test -f docs/verification/00-verification-baseline.md
```

## 12.2 Verification Heading Checks

Check:

```bash
grep -q '^# Verification Baseline$' docs/verification/00-verification-baseline.md
```

---

## 13. Baseline Content Checks

Certain baseline phrases should appear in stabilization documents.

Check:

```bash
grep -q 'The uploaded repository tree is the active baseline' docs/planning/00-baseline-inventory.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/01-planning-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/domain/00-domain-model.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/00-verification-baseline.md
```

Work-packet baseline phrase check:

```bash
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/README.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/WORK-PACKET-TEMPLATE.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/WP-0001-work-packet-template.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/WP-0003-domain-model-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/WP-0004-planning-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/work-packets/WP-0005-repository-verification-baseline.md
```

---

## 14. Whitespace Safety Checks

Run:

```bash
git diff --check
```

Expected result:

```text
No whitespace errors.
```

If committed state is being checked, also run:

```bash
git status --short
```

Expected result after committing:

```text
No output.
```

---

## 15. Combined Manual Verification Command

The following command checks the current documentation baseline without requiring runtime tooling:

```bash
test -f CODEOWNERS && \
test -f CONTRIBUTING.md && \
test -f LICENSE && \
test -f SECURITY.md && \
test -f tree && \
test -d docs && \
test -d docs/adr && \
test -d docs/architecture && \
test -d docs/domain && \
test -d docs/planning && \
test -d docs/product && \
test -d docs/work-packets && \
test -d docs/verification && \
test -f docs/product/00-product-inception-brief.md && \
test -f docs/product/01-product-charter.md && \
test -f docs/product/02-stakeholder-and-user-model.md && \
test -f docs/product/03-software-requirements-specification.md && \
test -f docs/product/00-architecture-overview.md && \
test -f docs/architecture/00-architecture-overview.md && \
test -f docs/adr/README.md && \
test -f docs/adr/ADR-TEMPLATE.md && \
test -f docs/work-packets/README.md && \
test -f docs/work-packets/WORK-PACKET-TEMPLATE.md && \
test -f docs/work-packets/WP-0001-work-packet-template.md && \
test -f docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
test -f docs/work-packets/WP-0003-domain-model-baseline.md && \
test -f docs/work-packets/WP-0004-planning-baseline.md && \
test -f docs/work-packets/WP-0005-repository-verification-baseline.md && \
test -f docs/planning/00-baseline-inventory.md && \
test -f docs/planning/01-planning-baseline.md && \
test -f docs/domain/00-domain-model.md && \
test -f docs/verification/00-verification-baseline.md && \
grep -q '^# Work Packet Index$' docs/work-packets/README.md && \
grep -q '^# WP-0000: Work Packet Title$' docs/work-packets/WORK-PACKET-TEMPLATE.md && \
grep -q '^# Baseline Inventory$' docs/planning/00-baseline-inventory.md && \
grep -q '^# Planning Baseline$' docs/planning/01-planning-baseline.md && \
grep -q '^# Domain Model$' docs/domain/00-domain-model.md && \
grep -q '^# Verification Baseline$' docs/verification/00-verification-baseline.md && \
git diff --check
```

Expected result:

```text
No output and exit code 0.
```

---

## 16. Manual Review Checklist

In addition to shell-checkable verification, perform manual review.

## 16.1 Baseline Review

Check:

1. The repository still matches the accepted uploaded baseline plus intentional new stabilization files.
2. No old files were silently deleted.
3. No ADRs were silently renamed.
4. No product documents were silently rewritten.
5. No architecture documents were silently moved.
6. The root `tree` file still exists.

## 16.2 ADR Review

Check:

1. ADR index exists.
2. ADR template exists.
3. ADR number gaps are visible and accepted as baseline facts.
4. ADR overlap between ADR-0013 and ADR-0015 is not silently resolved.
5. ADR normalization is deferred to a future packet.

## 16.3 Work Packet Review

Check:

1. Work packet index exists.
2. Work packet template exists.
3. Work packets are numbered.
4. Work packets include acceptance criteria.
5. Work packets include verification plans.
6. Work packets include recommended atomic commits.

## 16.4 Security Review

Check:

1. No secrets are present in newly created documentation.
2. No local absolute paths reveal private information.
3. No private repository URLs are embedded.
4. No real tokens, keys, credentials, or environment values appear.
5. Security-sensitive implementation is not introduced.

## 16.5 Implementation Review

Check:

1. No runtime code was introduced by baseline stabilization.
2. No package-manager files were introduced by this packet.
3. No CI workflow was introduced by this packet.
4. No executable scripts were introduced by this packet.
5. Repo contract testing is still a follow-up, not falsely claimed as complete.

---

## 17. Deferred Checks

The following checks are intentionally deferred.

## 17.1 Executable Repo Contract Tests

Deferred to:

```text
WP-0007: Repo Contract Testing Baseline
```

## 17.2 ADR Normalization Checks

Deferred to:

```text
WP-0006: ADR Index Normalization Review
```

## 17.3 Context Continuity Checks

Deferred to:

```text
WP-0008: Context Continuity Baseline
```

## 17.4 Root README Checks

Deferred to:

```text
WP-0009: Root README Baseline
```

## 17.5 CI Checks

Deferred until local verification and repo contract checks are stable.

## 17.6 Runtime Tests

Deferred until runtime implementation exists.

## 17.7 Package Manager Checks

Deferred until package manager setup exists.

---

## 18. Verification Result Vocabulary

Future verification records should use these statuses:

1. `not_run`
2. `passed`
3. `failed`
4. `blocked`
5. `skipped`
6. `limited`

Definitions:

## 18.1 Not Run

The check has not been executed.

## 18.2 Passed

The check ran and satisfied expectations.

## 18.3 Failed

The check ran and did not satisfy expectations.

## 18.4 Blocked

The check could not run because a dependency, file, tool, or decision is missing.

## 18.5 Skipped

The check was intentionally not run, with rationale.

## 18.6 Limited

The check ran partially or with known limitations.

---

## 19. Verification Baseline Acceptance Criteria

This verification baseline is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It defines Root File Checks.
3. It defines directory checks.
4. It defines product document checks.
5. It defines architecture document checks.
6. It defines ADR Checks.
7. It defines Work Packet Checks.
8. It defines planning and domain checks.
9. It defines verification document checks.
10. It defines whitespace safety checks.
11. It includes a combined manual verification command.
12. It includes manual review checks.
13. It identifies deferred checks.
14. It identifies Repo Contract Testing as follow-up work.
15. It does not claim scripts, CI, runtime code, or repo contract tests exist yet.

---

## 20. Recommended Atomic Commit

```bash
git add docs/verification/00-verification-baseline.md docs/work-packets/WP-0005-repository-verification-baseline.md
git commit -m "docs(verification): add repository verification baseline"
```

If `WP-0005` was already committed separately, use:

```bash
git add docs/verification/00-verification-baseline.md
git commit -m "docs(verification): add repository verification baseline"
```

---

## 21. Next Step

Next create:

```text
docs/work-packets/WP-0006-adr-index-normalization-review.md
```

Then execute it by creating:

```text
docs/planning/02-adr-normalization-review.md
```
