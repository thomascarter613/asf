---
title: "Implementation Readiness Plan"
description: "Implementation readiness plan for the Agentic Software Framework, defining readiness gates, current readiness status, blockers, approved next work, prohibited premature work, and the ordered path from baseline stabilization into package tooling, CI, evaluation harness planning, and runtime implementation."
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
document_type: "implementation-readiness-plan"
canonical: false
related_documents:
  - "README.md"
  - "tree"
  - "docs/adr/README.md"
  - "docs/domain/00-domain-model.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/02-adr-normalization-review.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/planning/04-baseline-tree-artifact-policy.md"
  - "docs/planning/05-persistence-adr-overlap-review.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/verification/02-evaluation-harness-baseline.md"
  - "docs/ai/00-current-state.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/work-packets/WP-0018-implementation-readiness-planning.md"
  - "tools/check-repo-contract.sh"
---

# Implementation Readiness Plan

## 1. Purpose

This document defines the implementation readiness plan for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

The purpose of this plan is to define what must be true before the project moves from baseline stabilization into package tooling, CI, runtime implementation, executable evaluation harness work, persistence/retrieval implementation, and first product code.

This document is planning-only.

It does not create:

1. Package-manager files.
2. CI workflows.
3. Runtime implementation code.
4. Database schema.
5. API contracts.
6. Vector retrieval code.
7. Qdrant collections.
8. Embedding pipelines.
9. Agent runtime code.
10. Executable evaluation harness code.

It defines the readiness gates and ordered work sequence that must precede those actions.

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

Implementation readiness must proceed from the actual accepted repository state, not an idealized or rewritten structure.

Therefore:

1. Existing ADR files are preserved.
2. Existing ADR number gaps are preserved.
3. Existing ADR topic overlap is preserved until resolved through explicit work.
4. Both architecture overview files remain accepted baseline artifacts.
5. The root `tree` file remains a captured historical baseline artifact.
6. Runtime implementation has not started.
7. Package-manager setup does not exist yet.
8. CI workflows do not exist yet.
9. Executable evaluation harness implementation does not exist yet.
10. Work packets remain the required unit of non-trivial change.

---

## 3. Current Readiness Status

Current phase:

```text
Baseline Stabilization transitioning toward Implementation Readiness.
```

Current readiness summary:

```text
The repository is ready to begin implementation-readiness planning. It is not yet ready for runtime implementation.
```

Current state:

| Area | Status | Notes |
| --- | --- | --- |
| Product documents | Ready enough for readiness planning | Product inception, charter, stakeholder/user model, SRS, and product architecture overview exist. |
| Architecture documents | Partially ready | Architecture overview exists, but duplicate placement remains caveated. |
| ADR governance | Ready for readiness planning | ADR index, template, inventory, gap annotations, and caveat rules exist. |
| Domain model | Ready for readiness planning | Initial domain model exists. |
| Work-packet governance | Ready | Work-packet index, template, and sequence exist. |
| Baseline inventory | Ready | Uploaded tree baseline is documented. |
| Context continuity | Ready for planning | Current-state, handoff template, and context source rules exist. |
| Repo contract baseline | Ready | Documentation-level baseline exists. |
| Repo contract script | Ready locally | `tools/check-repo-contract.sh` exists and is non-mutating. |
| Evaluation harness baseline | Ready at documentation level | Executable harness is not implemented. |
| Package tooling | Not ready | No package-manager files yet. |
| CI | Not ready | No CI workflows yet. |
| Runtime implementation | Not ready | No source-code slice has begun. |
| Persistence/retrieval implementation | Not ready | ADR-0013/ADR-0015 relationship remains unresolved. |

---

## 4. Readiness Gates

Implementation should proceed through gates.

A gate is a condition that must be satisfied, explicitly deferred, or accepted as a known risk before dependent work begins.

The gates are:

```text
Gate 1: Repository Baseline Ready
Gate 2: Decision Lineage Ready
Gate 3: Verification Ready
Gate 4: Package and Tooling Ready
Gate 5: CI Ready
Gate 6: Evaluation Ready
Gate 7: Runtime Slice Ready
Gate 8: Security and Exclusion Ready
Gate 9: Context Continuity Ready
```

---

## 5. Gate 1 — Repository Baseline Ready

## 5.1 Purpose

This gate confirms that the accepted repository baseline exists, is documented, and is protected against accidental drift.

## 5.2 Required Conditions

Repository baseline is ready when:

1. Required root files exist.
2. Required documentation directories exist.
3. Baseline inventory exists.
4. Root README exists.
5. Current-state document exists.
6. Work-packet governance exists.
7. Repo contract script passes.

## 5.3 Current Status

```text
Mostly ready.
```

Evidence:

```text
README.md
docs/planning/00-baseline-inventory.md
docs/ai/00-current-state.md
docs/work-packets/README.md
tools/check-repo-contract.sh
```

## 5.4 Remaining Work

After this plan is created, the repo contract script may need a follow-up update to include:

```text
docs/work-packets/WP-0018-implementation-readiness-planning.md
docs/planning/06-implementation-readiness-plan.md
```

Recommended follow-up:

```text
WP-0019: Repo Contract Script Planning Baseline Update
```

However, if the project chooses to proceed directly to package/tooling baseline, the script update can be included in the next script-maintenance packet.

---

## 6. Gate 2 — Decision Lineage Ready

## 6.1 Purpose

This gate confirms that architecture decisions are visible, durable, and safe to use for implementation planning.

## 6.2 Required Conditions

Decision lineage is ready when:

1. ADR index exists.
2. ADR template exists.
3. ADR inventory is visible.
4. ADR gaps are documented.
5. ADR overlap caveats are documented.
6. No unresolved ADR issue blocks the next implementation slice.
7. Future implementation knows which ADRs are authoritative for its slice.

## 6.3 Current Status

```text
Partially ready.
```

Ready:

1. ADR index exists.
2. ADR template exists.
3. ADR gaps are documented.
4. ADR-0013/ADR-0015 overlap is documented.
5. ADR caveats are preserved.

Not fully ready:

1. ADR-0013 and ADR-0015 relationship remains unresolved.
2. Architecture overview placement remains unresolved.

## 6.4 Blocking Impact

These unresolved items do **not** block package/tooling baseline.

They do **not** block CI baseline.

They do **not** block implementation-readiness planning.

They **may block** persistence/retrieval implementation.

They **may block** runtime slices that depend directly on persistence/retrieval decisions.

## 6.5 Required Follow-Up

Before persistence/retrieval runtime implementation:

```text
Persistence ADR Resolution must either resolve ADR-0013/ADR-0015 or explicitly accept them as complementary.
```

Before architecture documentation cleanup:

```text
Architecture Overview Resolution must decide whether both architecture overview files remain, are cross-linked, merged, renamed, or superseded.
```

---

## 7. Gate 3 — Verification Ready

## 7.1 Purpose

This gate confirms that the repository has local verification before implementation begins.

## 7.2 Required Conditions

Verification is ready when:

1. Verification baseline exists.
2. Repo contract baseline exists.
3. Executable repo contract script exists.
4. Script is local and non-mutating.
5. Script passes locally.
6. Verification result vocabulary is clear.
7. Failures are not hidden.

## 7.3 Current Status

```text
Ready for implementation-readiness planning.
```

Evidence:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
tools/check-repo-contract.sh
```

Current verification command:

```bash
./tools/check-repo-contract.sh
git diff --check
```

## 7.4 Remaining Work

The script must be kept synchronized as new baseline artifacts are added.

Current likely next script update:

```text
Add WP-0018 and docs/planning/06-implementation-readiness-plan.md to tools/check-repo-contract.sh.
```

This should happen through a narrow follow-up packet or as part of the next verification-maintenance packet.

---

## 8. Gate 4 — Package and Tooling Ready

## 8.1 Purpose

This gate prepares the repository for source code without creating uncontrolled tooling drift.

## 8.2 Current Status

```text
Not ready.
```

Package-manager setup does not exist yet.

No package files currently exist.

No lockfiles currently exist.

No source-code layout has been created.

## 8.3 Required Future Decisions

The package/tooling baseline must define:

1. Primary package manager.
2. Runtime language boundaries.
3. Repository-level script conventions.
4. Lockfile policy.
5. Formatting strategy.
6. Linting strategy.
7. Typechecking strategy.
8. Test command conventions.
9. Tooling directory structure.
10. Verification command integration.
11. Whether package setup begins at root or in future packages.
12. How the repo contract script is exposed.

Relevant ADRs:

```text
ADR-0014: Polyglot Language Strategy
ADR-0019: Primary Package Managers
ADR-0011: Dependency Pinning Policy
```

## 8.4 Recommended Work Packet

```text
WP-0019: Package and Tooling Baseline
```

Expected output:

```text
docs/planning/07-package-and-tooling-baseline.md
```

Possible later outputs, only if explicitly authorized:

```text
package.json
bun.lock
tsconfig.json
biome.json
```

or other tooling files selected by the Project Steward.

This readiness plan does not create those files.

---

## 9. Gate 5 — CI Ready

## 9.1 Purpose

This gate ensures local verification is stable before remote automation is introduced.

## 9.2 Current Status

```text
Not ready.
```

CI workflows do not exist yet.

## 9.3 Required Conditions

CI is ready when:

1. Local verification command is stable.
2. Repo contract script passes locally.
3. Package/tooling baseline exists.
4. CI scope is defined.
5. CI does not claim runtime tests exist before runtime exists.
6. CI checks secrets and diff safety where appropriate.
7. CI is minimal and aligned with current maturity.

## 9.4 Recommended Work Packet

```text
WP-0020: CI Baseline
```

Expected output:

```text
docs/planning/08-ci-baseline.md
```

Possible later output, only if explicitly authorized:

```text
.github/workflows/ci.yml
```

This readiness plan does not create CI.

---

## 10. Gate 6 — Evaluation Ready

## 10.1 Purpose

This gate defines how the project evaluates repository-governed behavior, future retrieval behavior, and future agent execution behavior.

## 10.2 Current Status

```text
Partially ready.
```

Ready:

```text
docs/verification/02-evaluation-harness-baseline.md
```

Not ready:

```text
Executable evaluation harness implementation does not exist yet.
```

## 10.3 Required Future Conditions

Executable evaluation readiness requires:

1. Stable evaluation case format.
2. Evaluation case storage path.
3. Evaluation result storage path.
4. Local runner strategy.
5. Required versus optional gates.
6. Evidence capture policy.
7. Secret exclusion policy.
8. Integration with repo contract script.
9. Clear failure behavior.
10. CI integration plan, later.

## 10.4 Recommended Work Packet

```text
WP-0021: Executable Evaluation Harness Planning
```

Expected output:

```text
docs/planning/09-executable-evaluation-harness-plan.md
```

Executable harness code should come after that planning packet.

---

## 11. Gate 7 — Runtime Slice Ready

## 11.1 Purpose

This gate ensures the first runtime implementation slice is deliberate, narrow, verifiable, and aligned with the domain model.

## 11.2 Current Status

```text
Not ready.
```

Runtime implementation has not started.

## 11.3 Required Conditions

Runtime slice is ready when:

1. Package/tooling baseline exists.
2. CI baseline exists or is explicitly deferred.
3. Runtime slice scope is defined.
4. Source directory layout is defined.
5. First domain object or service boundary is selected.
6. Acceptance criteria are defined.
7. Verification command is defined.
8. Security constraints are defined.
9. Rollback or cleanup rules are defined.
10. Atomic commit scope is defined.

## 11.4 Recommended Work Packet

```text
WP-0022: Runtime Implementation Slice Plan
```

Expected output:

```text
docs/planning/10-runtime-implementation-slice-plan.md
```

Possible first runtime slices may include:

1. Work packet schema model.
2. Repo contract runner wrapper.
3. Evaluation case schema.
4. Context pack manifest model.
5. CLI command skeleton.

The project should choose the first slice after package/tooling and CI readiness are addressed.

---

## 12. Gate 8 — Security and Exclusion Ready

## 12.1 Purpose

This gate ensures implementation work does not introduce sensitive data exposure or unsafe context behavior.

## 12.2 Current Status

```text
Partially ready.
```

Ready:

1. `SECURITY.md` exists.
2. Context source exclusions exist.
3. Repo contract script avoids secret scanning and secret printing.
4. Evaluation baseline excludes secrets from evidence.

Not ready:

1. Automated secret scanning does not exist yet.
2. CI security checks do not exist yet.
3. Runtime access controls do not exist yet.
4. Threat model does not exist yet.

## 12.3 Required Future Work

Before serious runtime implementation, create:

```text
Security and Threat Model Baseline
```

Possible future packet:

```text
WP-0023: Security and Threat Model Baseline
```

Expected output:

```text
docs/security/00-threat-model-baseline.md
```

This plan does not create `docs/security/`.

---

## 13. Gate 9 — Context Continuity Ready

## 13.1 Purpose

This gate ensures future sessions can continue work safely and accurately.

## 13.2 Current Status

```text
Ready for planning.
```

Evidence:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
```

## 13.3 Required Conditions

Context continuity is ready when:

1. Current-state document exists.
2. Handoff template exists.
3. Context source rules exist.
4. Known caveats are preserved.
5. Next recommended work is stated.
6. Verification state is truthfully represented.
7. Context exclusions are clear.
8. Repository artifacts remain the source of truth.

## 13.4 Remaining Work

Update current-state after major readiness milestones:

1. Package/tooling baseline.
2. CI baseline.
3. Executable evaluation harness planning.
4. Runtime slice plan.
5. Runtime implementation start.

---

## 14. What Is Ready Now

The following are ready now:

1. Repository baseline orientation.
2. Product baseline documentation.
3. ADR governance baseline.
4. ADR gap annotation.
5. ADR overlap caveat documentation.
6. Domain model baseline.
7. Planning baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Executable local repo contract script.
11. Context-continuity baseline.
12. Evaluation harness baseline at documentation level.
13. Work-packet execution model.
14. Root README orientation.
15. Implementation-readiness planning.

---

## 15. What Is Not Ready Yet

The following are not ready yet:

1. Package-manager setup.
2. Root package scripts.
3. Lockfile policy execution.
4. CI workflows.
5. Runtime source-code layout.
6. Runtime implementation.
7. Executable evaluation harness.
8. Vector retrieval implementation.
9. Qdrant collections.
10. Embedding pipeline.
11. Database schema.
12. API contracts.
13. Agent runtime implementation.
14. Security threat model.
15. Production deployment plan.
16. Release process.

---

## 16. Current Blockers

## 16.1 Package/Tooling Blocker

Runtime code should not begin until package/tooling baseline is accepted.

Reason:

```text
The project needs stable local command conventions before source code is added.
```

## 16.2 CI Blocker

Remote automation should not be added until local verification expectations are clear.

Reason:

```text
CI should automate known local checks rather than invent new behavior.
```

## 16.3 Persistence/Retrieval Blocker

Persistence and retrieval implementation should not begin until ADR-0013 and ADR-0015 relationship is resolved or explicitly accepted as complementary.

Reason:

```text
Persistence/retrieval architecture affects storage boundaries, canonical memory rules, and future evaluation.
```

## 16.4 Runtime Slice Blocker

First runtime slice should not begin until a runtime implementation slice plan exists.

Reason:

```text
The first code slice should be narrow, testable, and aligned with the domain model.
```

## 16.5 Security Blocker

Security-sensitive runtime work should not begin until a threat model or security baseline exists.

Reason:

```text
Agentic repository tooling can touch sensitive files, context, execution, and automation boundaries.
```

---

## 17. Approved Next Work

Approved next work:

```text
WP-0019: Package and Tooling Baseline
```

Purpose:

```text
Define package-manager setup, local command conventions, tooling files, formatting/linting/typechecking direction, lockfile expectations, and how local verification should be invoked.
```

Expected output:

```text
docs/planning/07-package-and-tooling-baseline.md
```

Possible code/tooling files should be created only if the packet explicitly authorizes them.

---

## 18. Prohibited Premature Work

Do not begin the following yet:

1. Runtime application code.
2. Source directory scaffolding.
3. Database schema.
4. API contracts.
5. CLI implementation.
6. Web UI implementation.
7. Vector retrieval implementation.
8. Qdrant setup.
9. Embedding pipeline.
10. Agent runtime implementation.
11. Executable evaluation harness implementation.
12. CI workflows.
13. Package-manager setup without a package/tooling baseline packet.
14. Production deployment planning.
15. ADR mutation for persistence/retrieval without explicit resolution packet.
16. Architecture overview movement or deletion.
17. Root `tree` movement, deletion, or regeneration.

---

## 19. Recommended Packet Sequence

The recommended next sequence is:

```text
WP-0019: Package and Tooling Baseline
WP-0020: CI Baseline
WP-0021: Executable Evaluation Harness Planning
WP-0022: Runtime Implementation Slice Plan
WP-0023: Security and Threat Model Baseline
WP-0024: First Runtime Slice
```

Possible additional maintenance packets:

```text
Repo Contract Script Readiness Plan Update
Current State Update After Implementation Readiness
Persistence ADR Resolution
Architecture Overview Resolution
Baseline Tree Artifact Resolution
ADR Status Metadata Review
```

---

## 20. Implementation Readiness Decision

Current decision:

```text
The repository may proceed from baseline stabilization into implementation-readiness planning and package/tooling planning.
```

Current non-decision:

```text
The repository is not yet approved for runtime implementation.
```

Implementation approval requires at minimum:

1. Package/tooling baseline accepted.
2. Local verification command accepted.
3. CI baseline accepted or explicitly deferred.
4. Runtime slice plan accepted.
5. Security constraints accepted.
6. Relevant ADR blockers resolved or explicitly deferred.

---

## 21. Verification

Run:

```bash
test -f docs/planning/06-implementation-readiness-plan.md && \
grep -q '^title: "Implementation Readiness Plan"$' docs/planning/06-implementation-readiness-plan.md && \
grep -q '^# Implementation Readiness Plan$' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'Readiness Gates' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'What Is Ready Now' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'What Is Not Ready Yet' docs/planning/06-implementation-readiness-plan.md && \
grep -q 'Prohibited Premature Work' docs/planning/06-implementation-readiness-plan.md && \
./tools/check-repo-contract.sh && \
git diff --check
```

Expected result:

```text
Repo contract checks pass, readiness plan exists, and whitespace checks pass.
```

Known caveat:

```text
The current repo contract script may not yet check WP-0018 or this plan until a future script update packet adds them.
```

Manual verification:

1. Confirm no runtime code was created.
2. Confirm no package-manager files were created.
3. Confirm no CI workflows were created.
4. Confirm no ADR files were modified.
5. Confirm no verification documents were modified.
6. Confirm `tools/check-repo-contract.sh` was not modified.
7. Confirm no secrets, credentials, tokens, private keys, or environment values are present.

---

## 22. Recommended Atomic Commit

```bash
git add docs/planning/06-implementation-readiness-plan.md docs/work-packets/WP-0018-implementation-readiness-planning.md
git commit -m "docs(planning): add implementation readiness plan"
```

If `WP-0018` was already committed separately, use:

```bash
git add docs/planning/06-implementation-readiness-plan.md
git commit -m "docs(planning): add implementation readiness plan"
```

---

## 23. Next Step

Next create:

```text
docs/work-packets/WP-0019-package-and-tooling-baseline.md
```

Expected execution output:

```text
docs/planning/07-package-and-tooling-baseline.md
```

Possible later tooling files should be created only if explicitly authorized by WP-0019.
```