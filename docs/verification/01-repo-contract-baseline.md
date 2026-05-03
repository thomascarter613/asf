---
title: "Repo Contract Baseline"
description: "Initial documentation-level repo contract baseline for the Agentic Software Framework, defining contract categories, expected files, expected directories, ADR expectations, work-packet expectations, allowed baseline exceptions, and future executable contract test direction."
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
document_type: "repo-contract-baseline"
canonical: false
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
  - "docs/work-packets/WP-0004-planning-baseline.md"
  - "docs/work-packets/WP-0005-repository-verification-baseline.md"
  - "docs/work-packets/WP-0006-adr-index-normalization-review.md"
  - "docs/work-packets/WP-0007-repo-contract-testing-baseline.md"
  - "docs/adr/README.md"
  - "docs/adr/ADR-TEMPLATE.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
---

# Repo Contract Baseline

## 1. Purpose

This document defines the initial repo contract baseline for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

A repo contract is a set of repository expectations that can eventually be checked automatically. At this stage, this document is documentation-level. It defines what future executable checks should verify.

This document does not create scripts, tests, CI workflows, runtime implementation, package-manager setup, or build tooling.

It defines:

1. Contract categories.
2. Root file contracts.
3. Directory contracts.
4. Product document contracts.
5. Architecture document contracts.
6. ADR contracts.
7. Work packet contracts.
8. Planning, domain, and verification contracts.
9. Known allowed exceptions.
10. Deferred contract categories.
11. Future executable check direction.

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

Repo contracts must therefore enforce the accepted baseline, not an idealized replacement.

Repo contracts must not silently require:

1. ADR renumbering.
2. ADR gap filling.
3. ADR deletion.
4. ADR deduplication.
5. Architecture document movement.
6. Removal of the root `tree` file.
7. Addition of a root `README.md`.
8. Runtime code.
9. CI workflows.
10. Package-manager files.

Those may become future requirements only through explicit work packets and accepted decisions.

---

## 3. Repo Contract Testing Philosophy

Repo contract testing exists to protect the repository as a durable project memory and execution environment.

The contract should help answer:

```text
Does the repository still contain the structural artifacts required for governed AI-assisted software development?
```

The contract should verify:

1. Required files exist.
2. Required directories exist.
3. Important documentation anchors exist.
4. ADR lineage is preserved.
5. Work-packet governance exists.
6. Baseline stabilization artifacts exist.
7. Known exceptions are allowed.
8. Whitespace and diff safety checks pass.

The contract should not:

1. Rewrite files.
2. Auto-fix structure.
3. Hide failures.
4. Delete old decisions.
5. Enforce decisions not yet made.
6. Claim runtime verification before runtime code exists.

---

## 4. Contract Categories

Initial contract categories are:

| Category | Purpose | Initial Status |
| --- | --- | --- |
| Root file contracts | Verify root governance and baseline files. | Defined |
| Directory contracts | Verify required documentation directories. | Defined |
| Product document contracts | Verify product artifacts exist. | Defined |
| Architecture document contracts | Verify architecture artifacts exist. | Defined |
| ADR contracts | Verify ADR support files and current ADR lineage. | Defined |
| Work packet contracts | Verify work-packet governance and current packets. | Defined |
| Planning contracts | Verify planning baseline artifacts. | Defined |
| Domain contracts | Verify domain model artifact. | Defined |
| Verification contracts | Verify verification artifacts. | Defined |
| Baseline exception contracts | Preserve known allowed exceptions. | Defined |
| Runtime contracts | Future implementation checks. | Deferred |
| Package contracts | Future package-manager and lockfile checks. | Deferred |
| CI contracts | Future CI workflow checks. | Deferred |

---

## 5. Root File Contracts

## 5.1 Required Root Files

The current baseline requires:

```text
CODEOWNERS
CONTRIBUTING.md
LICENSE
SECURITY.md
tree
```

Contract rule:

```text
Each required root file must exist.
```

Shell-checkable form:

```bash
test -f CODEOWNERS && \
test -f CONTRIBUTING.md && \
test -f LICENSE && \
test -f SECURITY.md && \
test -f tree
```

## 5.2 Root README Exception

The current baseline does not include:

```text
README.md
```

Contract rule:

```text
README.md is allowed to be absent in the current baseline.
```

Future work:

```text
WP-0009: Root README Baseline
```

## 5.3 Root Tooling File Exceptions

The following are not currently required:

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

Contract rule:

```text
Tooling files must not be required until their relevant setup packets exist.
```

---

## 6. Directory Contracts

## 6.1 Required Directories

The current baseline requires:

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

Contract rule:

```text
Each required directory must exist.
```

Shell-checkable form:

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

## 6.2 Directory Anchor Rule

Because Git does not preserve empty directories, important directories should have anchor documents.

Expected anchors:

```text
docs/domain/00-domain-model.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

---

## 7. Product Document Contracts

## 7.1 Required Product Documents

The current baseline requires:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
```

Contract rule:

```text
Each product document must exist.
```

Shell-checkable form:

```bash
test -f docs/product/00-product-inception-brief.md && \
test -f docs/product/01-product-charter.md && \
test -f docs/product/02-stakeholder-and-user-model.md && \
test -f docs/product/03-software-requirements-specification.md && \
test -f docs/product/00-architecture-overview.md
```

## 7.2 Product Heading Contract

Contract rule:

```text
Each product document should have a top-level Markdown heading.
```

Shell-checkable form:

```bash
grep -q '^# ' docs/product/00-product-inception-brief.md && \
grep -q '^# ' docs/product/01-product-charter.md && \
grep -q '^# ' docs/product/02-stakeholder-and-user-model.md && \
grep -q '^# ' docs/product/03-software-requirements-specification.md && \
grep -q '^# ' docs/product/00-architecture-overview.md
```

## 7.3 Product Frontmatter Contract

Target future contract:

```text
Durable Markdown documents should include YAML frontmatter unless explicitly exempted.
```

Initial status:

```text
Deferred until frontmatter policy is verified across existing baseline documents.
```

---

## 8. Architecture Document Contracts

## 8.1 Required Architecture Documents

The current baseline requires:

```text
docs/architecture/00-architecture-overview.md
```

Contract rule:

```text
The architecture overview under docs/architecture must exist.
```

Shell-checkable form:

```bash
test -f docs/architecture/00-architecture-overview.md
```

## 8.2 Architecture Duplication Exception

The current baseline also includes:

```text
docs/product/00-architecture-overview.md
```

Contract rule:

```text
Both architecture overview files are allowed to exist in the current baseline.
```

Future work:

```text
WP-0010: Architecture Overview Placement Review
```

---

## 9. ADR Contracts

## 9.1 ADR Support File Contracts

Required ADR support files:

```text
docs/adr/README.md
docs/adr/ADR-TEMPLATE.md
```

Contract rule:

```text
ADR index and ADR template must exist.
```

Shell-checkable form:

```bash
test -f docs/adr/README.md && \
test -f docs/adr/ADR-TEMPLATE.md
```

## 9.2 Current ADR Lineage Contract

The current baseline requires these ADR files:

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

Contract rule:

```text
Every ADR file present in the accepted baseline must remain present unless a later explicit ADR maintenance packet changes the lineage.
```

Shell-checkable form:

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

## 9.3 ADR Gap Contract

Known allowed gaps:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

Contract rule:

```text
Repo contract checks must not fail merely because these ADR numbers are absent.
```

## 9.4 ADR Overlap Contract

Known overlap candidate:

```text
ADR-0013
ADR-0015
```

Contract rule:

```text
Both ADR-0013 and ADR-0015 must remain present until a later explicit ADR maintenance packet changes their status.
```

---

## 10. Work Packet Contracts

## 10.1 Work Packet Governance Contracts

Required files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Contract rule:

```text
The work packet index and template must exist.
```

Shell-checkable form:

```bash
test -f docs/work-packets/README.md && \
test -f docs/work-packets/WORK-PACKET-TEMPLATE.md
```

## 10.2 Current Work Packet Contracts

Current required work packets:

```text
docs/work-packets/WP-0001-work-packet-template.md
docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md
docs/work-packets/WP-0003-domain-model-baseline.md
docs/work-packets/WP-0004-planning-baseline.md
docs/work-packets/WP-0005-repository-verification-baseline.md
docs/work-packets/WP-0006-adr-index-normalization-review.md
docs/work-packets/WP-0007-repo-contract-testing-baseline.md
```

Contract rule:

```text
Current work packets must exist.
```

Shell-checkable form:

```bash
test -f docs/work-packets/WP-0001-work-packet-template.md && \
test -f docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
test -f docs/work-packets/WP-0003-domain-model-baseline.md && \
test -f docs/work-packets/WP-0004-planning-baseline.md && \
test -f docs/work-packets/WP-0005-repository-verification-baseline.md && \
test -f docs/work-packets/WP-0006-adr-index-normalization-review.md && \
test -f docs/work-packets/WP-0007-repo-contract-testing-baseline.md
```

## 10.3 Work Packet Heading Contracts

Contract rule:

```text
Work packet documents must have expected top-level headings.
```

Shell-checkable form:

```bash
grep -q '^# Work Packet Index$' docs/work-packets/README.md && \
grep -q '^# WP-0000: Work Packet Title$' docs/work-packets/WORK-PACKET-TEMPLATE.md && \
grep -q '^# WP-0001: Work Packet Template$' docs/work-packets/WP-0001-work-packet-template.md && \
grep -q '^# WP-0002: Baseline Inventory and Consistency Review$' docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
grep -q '^# WP-0003: Domain Model Baseline$' docs/work-packets/WP-0003-domain-model-baseline.md && \
grep -q '^# WP-0004: Planning Baseline$' docs/work-packets/WP-0004-planning-baseline.md && \
grep -q '^# WP-0005: Repository Verification Baseline$' docs/work-packets/WP-0005-repository-verification-baseline.md && \
grep -q '^# WP-0006: ADR Index Normalization Review$' docs/work-packets/WP-0006-adr-index-normalization-review.md && \
grep -q '^# WP-0007: Repo Contract Testing Baseline$' docs/work-packets/WP-0007-repo-contract-testing-baseline.md
```

---

## 11. Planning Contracts

Required planning files:

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
```

Contract rule:

```text
Current planning baseline files must exist.
```

Shell-checkable form:

```bash
test -f docs/planning/00-baseline-inventory.md && \
test -f docs/planning/01-planning-baseline.md && \
test -f docs/planning/02-adr-normalization-review.md
```

Heading checks:

```bash
grep -q '^# Baseline Inventory$' docs/planning/00-baseline-inventory.md && \
grep -q '^# Planning Baseline$' docs/planning/01-planning-baseline.md && \
grep -q '^# ADR Normalization Review$' docs/planning/02-adr-normalization-review.md
```

---

## 12. Domain Contracts

Required domain files:

```text
docs/domain/00-domain-model.md
```

Contract rule:

```text
Domain model baseline must exist.
```

Shell-checkable form:

```bash
test -f docs/domain/00-domain-model.md && \
grep -q '^# Domain Model$' docs/domain/00-domain-model.md
```

Content anchor checks:

```bash
grep -q 'Bounded Contexts' docs/domain/00-domain-model.md && \
grep -q 'WorkPacket' docs/domain/00-domain-model.md && \
grep -q 'Foundry Control Plane' docs/domain/00-domain-model.md && \
grep -q 'Repo Contract' docs/domain/00-domain-model.md && \
grep -q 'Evaluation Harness' docs/domain/00-domain-model.md
```

---

## 13. Verification Contracts

Required verification files:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

Contract rule:

```text
Verification baseline and repo contract baseline must exist.
```

Shell-checkable form:

```bash
test -f docs/verification/00-verification-baseline.md && \
test -f docs/verification/01-repo-contract-baseline.md
```

Heading checks:

```bash
grep -q '^# Verification Baseline$' docs/verification/00-verification-baseline.md && \
grep -q '^# Repo Contract Baseline$' docs/verification/01-repo-contract-baseline.md
```

---

## 14. Baseline Phrase Contracts

Baseline stabilization documents should explicitly reference the active baseline.

Contract rule:

```text
Baseline stabilization documents must state that the uploaded repository tree is the active baseline.
```

Shell-checkable form:

```bash
grep -q 'The uploaded repository tree is the active baseline' docs/planning/00-baseline-inventory.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/01-planning-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/02-adr-normalization-review.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/domain/00-domain-model.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/00-verification-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/01-repo-contract-baseline.md
```

---

## 15. Known Allowed Exceptions

The following are allowed by the current repo contract.

## 15.1 Missing Root README

Allowed:

```text
README.md absent
```

Reason:

```text
The uploaded baseline does not contain README.md.
```

Future packet:

```text
WP-0009: Root README Baseline
```

## 15.2 ADR Number Gaps

Allowed:

```text
ADR-0007 absent
ADR-0009 absent
ADR-0010 absent
ADR-0012 absent
```

Reason:

```text
These gaps exist in the accepted baseline.
```

Future packet:

```text
WP-0012: ADR Index Gap and Status Annotation
```

## 15.3 ADR-0013 and ADR-0015 Topic Overlap

Allowed:

```text
ADR-0013 present
ADR-0015 present
```

Reason:

```text
Both exist in the accepted baseline. Their relationship requires future content-level review.
```

Future packet:

```text
WP-0013: Persistence ADR Overlap Review
```

## 15.4 Duplicate Architecture Overview Placement

Allowed:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Reason:

```text
Both exist in the accepted baseline.
```

Future packet:

```text
WP-0010: Architecture Overview Placement Review
```

## 15.5 Root `tree` File

Allowed:

```text
tree
```

Reason:

```text
The root tree file is treated as a captured baseline artifact.
```

Future packet:

```text
WP-0011: Baseline Tree Artifact Policy
```

## 15.6 No Package-Manager Files Yet

Allowed absent:

```text
package.json
pnpm-lock.yaml
pyproject.toml
uv.lock
Cargo.toml
Cargo.lock
```

Reason:

```text
Runtime/package setup has not begun.
```

## 15.7 No CI Yet

Allowed absent:

```text
.github/workflows/*
```

Reason:

```text
Local verification and repo contract baseline precede CI.
```

---

## 16. Deferred Contract Categories

The following contract categories are deferred.

## 16.1 Executable Script Contract

Deferred until a future packet creates a script such as:

```text
tools/check-repo-contract.sh
```

or an equivalent location chosen by the Project Steward.

## 16.2 CI Contract

Deferred until local checks are stable.

Potential future path:

```text
.github/workflows/ci.yml
```

## 16.3 Package Manager Contract

Deferred until package-manager setup exists.

Relevant ADRs:

```text
ADR-0011
ADR-0019
```

## 16.4 Runtime Module Contract

Deferred until implementation module layout exists.

## 16.5 Test Harness Contract

Deferred until runtime or repo contract testing tools exist.

## 16.6 Evaluation Harness Contract

Deferred until the evaluation harness baseline is created.

Relevant ADR:

```text
ADR-0022
```

## 16.7 Context Continuity Contract

Deferred until context continuity baseline is created.

Relevant ADRs:

```text
ADR-0002
ADR-0006
```

---

## 17. Future Executable Check Direction

The first executable repo contract check should be simple.

Recommended future file:

```text
tools/check-repo-contract.sh
```

Alternative acceptable paths:

```text
tools/verify-repository-baseline.sh
tools/repo-contract/check.sh
scripts/check-repo-contract.sh
```

A future work packet should decide the location.

The initial script should check:

1. Required root files.
2. Required directories.
3. Product documents.
4. Architecture documents.
5. ADR support files.
6. Current ADR files.
7. Work packet governance files.
8. Current work packet files.
9. Planning files.
10. Domain files.
11. Verification files.
12. Known allowed exceptions.
13. `git diff --check`.

The script should not:

1. Modify files.
2. Auto-format files.
3. Rename files.
4. Delete files.
5. Fill ADR gaps.
6. Create missing ADRs.
7. Install dependencies.
8. Require package-manager setup.

---

## 18. Contract Failure Behavior

When a contract check fails, the system or script should report:

1. Check name.
2. Expected file or condition.
3. Actual missing or failing condition.
4. Suggested remediation.
5. Whether failure is blocking.
6. Related work packet or document.

A failure should not auto-fix the repository.

Example:

```text
FAIL: required work packet file missing
Expected: docs/work-packets/WP-0007-repo-contract-testing-baseline.md
Remediation: create the packet or update the contract through an explicit work packet.
```

---

## 19. Minimal Combined Contract Command

A future script can derive from this command:

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
test -f docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md && \
test -f docs/work-packets/README.md && \
test -f docs/work-packets/WORK-PACKET-TEMPLATE.md && \
test -f docs/work-packets/WP-0001-work-packet-template.md && \
test -f docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md && \
test -f docs/work-packets/WP-0003-domain-model-baseline.md && \
test -f docs/work-packets/WP-0004-planning-baseline.md && \
test -f docs/work-packets/WP-0005-repository-verification-baseline.md && \
test -f docs/work-packets/WP-0006-adr-index-normalization-review.md && \
test -f docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
test -f docs/planning/00-baseline-inventory.md && \
test -f docs/planning/01-planning-baseline.md && \
test -f docs/planning/02-adr-normalization-review.md && \
test -f docs/domain/00-domain-model.md && \
test -f docs/verification/00-verification-baseline.md && \
test -f docs/verification/01-repo-contract-baseline.md && \
grep -q '^# Work Packet Index$' docs/work-packets/README.md && \
grep -q '^# WP-0000: Work Packet Title$' docs/work-packets/WORK-PACKET-TEMPLATE.md && \
grep -q '^# Baseline Inventory$' docs/planning/00-baseline-inventory.md && \
grep -q '^# Planning Baseline$' docs/planning/01-planning-baseline.md && \
grep -q '^# ADR Normalization Review$' docs/planning/02-adr-normalization-review.md && \
grep -q '^# Domain Model$' docs/domain/00-domain-model.md && \
grep -q '^# Verification Baseline$' docs/verification/00-verification-baseline.md && \
grep -q '^# Repo Contract Baseline$' docs/verification/01-repo-contract-baseline.md && \
git diff --check
```

Expected result:

```text
No output and exit code 0.
```

---

## 20. Repo Contract Baseline Acceptance Criteria

This repo contract baseline is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It defines Contract Categories.
3. It defines Root File Contracts.
4. It defines directory contracts.
5. It defines product document contracts.
6. It defines architecture document contracts.
7. It defines ADR Contracts.
8. It defines Work Packet Contracts.
9. It defines planning contracts.
10. It defines domain contracts.
11. It defines verification contracts.
12. It defines Known Allowed Exceptions.
13. It identifies deferred contract categories.
14. It identifies future executable check direction.
15. It defines contract failure behavior.
16. It includes a minimal combined contract command.
17. It does not claim executable contract testing exists yet.
18. It does not modify any existing baseline files.

---

## 21. Verification

Run:

```bash
test -f docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
test -f docs/verification/01-repo-contract-baseline.md && \
grep -q '^title: "WP-0007: Repo Contract Testing Baseline"$' docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
grep -q '^# WP-0007: Repo Contract Testing Baseline$' docs/work-packets/WP-0007-repo-contract-testing-baseline.md && \
grep -q '^title: "Repo Contract Baseline"$' docs/verification/01-repo-contract-baseline.md && \
grep -q '^# Repo Contract Baseline$' docs/verification/01-repo-contract-baseline.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Contract Categories' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Root File Contracts' docs/verification/01-repo-contract-baseline.md && \
grep -q 'ADR Contracts' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Work Packet Contracts' docs/verification/01-repo-contract-baseline.md && \
grep -q 'Known Allowed Exceptions' docs/verification/01-repo-contract-baseline.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```

Manual verification:

1. Confirm this document does not create scripts.
2. Confirm this document does not claim CI exists.
3. Confirm this document allows known ADR gaps.
4. Confirm this document preserves ADR-0013 and ADR-0015.
5. Confirm this document does not require a root README yet.
6. Confirm no baseline files were modified.

---

## 22. Recommended Atomic Commit

```bash
git add docs/verification/01-repo-contract-baseline.md docs/work-packets/WP-0007-repo-contract-testing-baseline.md
git commit -m "docs(verification): add repo contract testing baseline"
```

If `WP-0007` was already committed separately, use:

```bash
git add docs/verification/01-repo-contract-baseline.md
git commit -m "docs(verification): add repo contract testing baseline"
```

---

## 23. Next Step

Next create:

```text
docs/work-packets/WP-0008-context-continuity-baseline.md
```

Then execute it by creating initial context-continuity artifacts under:

```text
docs/ai/
```
