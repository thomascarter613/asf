# Agentic Software Framework

The Agentic Software Framework is a repository-governed software product initiative for disciplined AI-assisted software development.

Its purpose is to help transform product intent, architecture decisions, context continuity, work protocols, work packets, verification evidence, and implementation work into a durable, auditable repository-centered system.

The uploaded repository tree is the active baseline.

Current phase:

```text
Baseline Stabilization / Implementation Readiness
```

Runtime implementation has not started.

This repository currently contains planning, architecture, ADR, domain, verification, work-packet, context-continuity, root orientation, local repo-contract, minimal Bun package/tooling, baseline CI workflow, and executable evaluation harness artifacts.

It does not yet contain runtime application code, database schema, vector retrieval implementation, Qdrant collections, embedding pipelines, agent runtime code, or runtime tests.

---

## Current Status

The repository is currently being stabilized before runtime implementation begins.

The current stabilization and implementation-readiness work has established:

1. Root governance files.
2. Product documents.
3. Architecture overview documents.
4. ADR index and ADR lineage.
5. Baseline inventory.
6. Domain model baseline.
7. Planning baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Executable local repo contract script.
11. Evaluation harness baseline.
12. Work-packet governance.
13. Context-continuity artifacts.
14. Root README.
15. Package/tooling baseline.
16. Bun package/tooling setup.
17. Bun-aware repo contract checks.
18. CI baseline planning.
19. CI workflow baseline.
20. Executable evaluation harness baseline.
21. Evaluation harness CI integration.

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
README.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md

docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
docs/planning/08-ci-baseline-planning.md
docs/planning/09-executable-evaluation-harness-planning.md
docs/planning/10-evaluation-harness-ci-integration-planning.md

tools/eval/README.md
tools/eval/run-evaluations.sh

docs/domain/00-domain-model.md

docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md

docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md

tools/check-repo-contract.sh
.github/workflows/ci.yml
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
18. Bun, uv, and cargo package-manager direction.

Known ADR caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 is preserved as historical context and superseded by ADR-0023 for active package-manager direction.
```

These caveats are accepted baseline facts. Do not renumber, delete, rename, fill, or supersede ADRs without an explicit work packet.

---

## Package and Tooling Status

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

Canonical local verification command:

```bash
bun run verify
```

Direct repo contract command:

```bash
./tools/check-repo-contract.sh
```

Package-manager ADR status:

```text
ADR-0023 supersedes ADR-0019 for active package-manager direction.
ADR-0019 remains preserved as historical context.
```

Future Python package/environment work should use `uv` unless a later ADR changes that direction.

Future Rust package/build work should use `cargo` unless a later ADR changes that direction.

---

## CI Status

CI workflow baseline exists.

Current CI workflow:

```text
.github/workflows/ci.yml
```

Current CI provider:

```text
GitHub Actions
```

Current CI triggers:

```text
push to main
pull_request
```

Current CI verification behavior:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

Current CI boundaries:

```text
CI does not deploy.
CI does not publish packages.
CI does not require secrets.
CI does not run runtime tests because runtime implementation has not started.
```

The CI workflow verifies the repository baseline. It does not verify runtime application behavior because runtime implementation has not started.

## Executable Evaluation Harness Status

Executable evaluation harness exists.

Current executable evaluation harness directory:

```text
tools/eval/
```

Current executable evaluation harness runner:

```text
tools/eval/run-evaluations.sh
```

Current local evaluation command:

```bash
bash tools/eval/run-evaluations.sh
```

Current executable evaluation case directory:

```text
tools/eval/cases/
```

Initial executable evaluation cases:

```text
EVAL-0001 active baseline is documented
EVAL-0002 ADR gap preservation is documented
EVAL-0003 package-manager boundary is enforced
EVAL-0004 CI baseline exists
EVAL-0005 runtime-not-started boundary is preserved
```

Current CI evaluation behavior:

```bash
bash tools/eval/run-evaluations.sh
```

The baseline CI workflow runs the executable evaluation harness after repository verification and before whitespace checking.

The executable evaluation harness currently evaluates repository-governed SDLC baseline behavior. It does not evaluate runtime application behavior because runtime implementation has not started.

Runtime tests do not exist yet.
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

Current baseline and readiness work packets include:

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
docs/work-packets/WP-0010-architecture-overview-placement-review.md
docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
docs/work-packets/WP-0013-persistence-adr-overlap-review.md
docs/work-packets/WP-0014-executable-repo-contract-script.md
docs/work-packets/WP-0015-evaluation-harness-baseline.md
docs/work-packets/WP-0016-repo-contract-script-baseline-update.md
docs/work-packets/WP-0017-current-state-and-readme-status-update.md
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/work-packets/WP-0019-package-and-tooling-baseline.md
docs/work-packets/WP-0020-repo-contract-script-readiness-update.md
docs/work-packets/WP-0021-package-and-tooling-setup.md
docs/work-packets/WP-0022-package-manager-adr-correction.md
docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md
docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md
docs/work-packets/WP-0025-ci-baseline-planning.md
docs/work-packets/WP-0026-ci-workflow-baseline.md
docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md
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
docs/planning/03-architecture-overview-placement-review.md
docs/planning/04-baseline-tree-artifact-policy.md
docs/planning/05-persistence-adr-overlap-review.md
docs/planning/06-implementation-readiness-plan.md
docs/planning/07-package-and-tooling-baseline.md
docs/planning/08-ci-baseline-planning.md
```

The planning baseline currently recommends continuing through implementation-readiness work before runtime implementation.

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
docs/verification/02-evaluation-harness-baseline.md
```

Current executable local verification script:

```text
tools/check-repo-contract.sh
```

The script is local, executable, read-only, and non-mutating. It checks required repository files, directories, ADRs, planning documents, verification documents, work packets, AI/context-continuity files, package/tooling files, forbidden pnpm artifacts, CI workflow files, and key content anchors.

Current verification status:

```text
Documentation-level verification baseline exists.
Documentation-level repo contract baseline exists.
Executable local repo contract script exists.
Bun-aware repo contract checks exist.
CI workflow baseline exists.
Executable evaluation harness exists.
Executable evaluation harness runs in CI.
Runtime tests do not exist yet because runtime implementation has not started.
```

Run local verification with:

```bash
bun run verify
```

Run the repo contract directly with:

```bash
./tools/check-repo-contract.sh
```

CI runs baseline verification with:

```bash
bun install --frozen-lockfile
bun run verify
git diff --check
```

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

## Evaluation Harness

The evaluation harness baseline lives at:

```text
docs/verification/02-evaluation-harness-baseline.md
```

This document defines how future evaluation should assess:

1. Context continuity.
2. Work-packet discipline.
3. Repo-contract compliance.
4. Verification truthfulness.
5. ADR preservation.
6. Baseline caveat preservation.
7. Future retrieval quality.
8. Future agent execution.
9. Future runtime behavior.
10. Security and exclusion compliance.

The evaluation harness baseline is documentation-level only.

Executable evaluation harness implementation does not exist yet.

---

## Known Baseline Caveats

The following caveats are known and intentional for the current baseline:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 remains preserved as historical context and is superseded by ADR-0023 for active package-manager direction.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured baseline artifact.
Runtime implementation has not started.
Executable evaluation harness implementation does not exist yet.
Vector retrieval implementation does not exist yet.
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
6. Do not delete ADR-0019.
7. Do not move architecture documents without a work packet.
8. Do not remove the root `tree` file without a work packet.
9. Do not claim verification passed unless it actually ran.
10. Do not claim runtime implementation exists before it exists.
11. Do not claim executable evaluation harness implementation exists before it exists.
12. Do not introduce `pnpm-workspace.yaml`.
13. Do not introduce `pnpm-lock.yaml`.
14. Do not introduce secrets, credentials, tokens, private keys, or sensitive operational values.
15. Do not add deployment or package-publishing CI without an explicit work packet.

---

## Recommended Next Work

After `WP-0032: Current State and README Evaluation Harness CI Status Update`, the recommended next work is:

WP-0033: Runtime Implementation Slice Plan
Rationale:

Baseline stabilization has produced core orientation, planning, ADR, verification, context, repo-contract, package/tooling, CI, and executable evaluation harness artifacts.
Local Bun verification now exists.
CI baseline verification now exists.
Executable evaluation harness verification now exists locally and in CI.
Runtime implementation has not started.
The next readiness step should define the first actual product/runtime implementation slice before writing product code.

Recommended later work:

Recommended later work:

WP-0034: Work Packet Model and Validation Runtime Baseline

---

## Current Minimal Verification

Run:

```bash
bun install --frozen-lockfile
bun run verify
bash tools/eval/run-evaluations.sh
git diff --check
```

Expected result:

```text
Repo contract checks pass.
```

Do not claim this result unless the commands actually ran locally.
