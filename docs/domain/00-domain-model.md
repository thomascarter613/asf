---
title: "Domain Model"
description: "Initial domain model baseline for the Agentic Software Framework, aligned to the uploaded repository tree, product documents, architecture overview, and current ADR lineage."
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
document_type: "domain-model"
canonical: false
related_documents:
  - "tree"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/work-packets/WP-0001-work-packet-template.md"
  - "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
  - "docs/work-packets/WP-0003-domain-model-baseline.md"
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
  - "docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md"
  - "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
  - "docs/adr/ADR-0016-worktree-based-parallel-execution.md"
  - "docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md"
  - "docs/adr/ADR-0018-work-packet-lifecycle.md"
  - "docs/adr/ADR-0020-directive-compiler-and-work-protocols.md"
  - "docs/adr/ADR-0021-repo-contract-testing.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
---

# Domain Model

## 1. Purpose

This document defines the initial domain model baseline for the **Agentic Software Framework**.

The uploaded repository tree is the active baseline.

This domain model translates the current baseline into explicit domain language:

1. Bounded contexts.
2. Core entities.
3. Entity responsibilities.
4. Ownership and containment relationships.
5. Lifecycle states.
6. Domain events.
7. Domain invariants.
8. Verification and contract concepts.
9. Repository context-continuity concepts.
10. Work packet execution concepts.
11. Foundry Control Plane concepts.
12. Evaluation Harness concepts.
13. Open questions and follow-up work.

This document is conceptual. It is not yet a database schema, API contract, package layout, implementation plan, or test suite.

---

## 2. Baseline Rule

The uploaded repository tree is the active baseline.

This means:

1. Existing ADRs are treated as the current architectural lineage.
2. Existing ADR number gaps are preserved.
3. Existing topic overlaps are recorded as open questions, not silently resolved.
4. Existing product and architecture documents are source inputs.
5. Empty directories are treated as expansion points.
6. Future cleanup must occur through explicit work packets.
7. This domain model must not rename, delete, renumber, or supersede existing ADRs.
8. This domain model must not claim implementation exists where the repository only contains planning documentation.

---

## 3. Domain Mission

The Agentic Software Framework domain exists to support disciplined AI-assisted software development.

The product is concerned with converting loosely structured intent into governed, durable, verifiable software delivery artifacts.

The domain should support this flow:

```text
Product intent
→ repository baseline
→ architecture decisions
→ context continuity
→ work protocols
→ work packets
→ implementation units
→ verification evidence
→ repository contracts
→ evaluation harness
→ handoff and retrieval
```

The domain must preserve:

1. Human accountability.
2. Architectural traceability.
3. Repository-based context continuity.
4. Durable decisions.
5. Work packet lifecycle discipline.
6. Clean-room pattern adoption boundaries.
7. Access-tier separation.
8. Polyglot implementation boundaries.
9. Persistence and retrieval responsibilities.
10. Foundry Control Plane orchestration.
11. Event bus and notification routing.
12. Directive compiler and work protocol semantics.
13. Repo Contract testing.
14. Evaluation Harness feedback.

---

## 4. Domain Principles

## 4.1 Repository Memory Is Canonical

The repository is the durable project memory baseline.

Important product, architecture, planning, work packet, verification, and handoff artifacts should live in the repository unless explicitly scoped elsewhere.

## 4.2 ADRs Are First-Class Constraints

Architecture Decision Records are domain objects, not incidental documentation.

Accepted ADRs constrain future recommendations, work packets, implementation, and evaluation.

## 4.3 Work Packets Govern Execution

Implementation should not proceed from loose prompts or broad intentions.

A WorkPacket is the bounded execution unit that connects intent, scope, files, verification, and atomic commits.

## 4.4 Context Continuity Is a Product Capability

The domain must support continuity across humans, AI sessions, tools, repositories, and future execution environments.

Context continuity is not only a documentation concern; it is a product behavior.

## 4.5 Clean-Room Pattern Adoption Protects Legitimacy

External patterns may be studied and adapted, but protected code or proprietary implementation details must not be copied.

The domain must preserve source attribution, decision rationale, and clean-room boundaries.

## 4.6 Verification Is Not Optional

Work is not complete merely because files were produced.

Completion requires verification, accepted limitations, or explicit follow-up.

## 4.7 Repository Contracts Make Structure Enforceable

Repo Contract checks turn repository expectations into verifiable rules.

They should protect important files, directories, metadata, ADRs, work packets, and future implementation conventions.

## 4.8 Evaluation Harnesses Close the Feedback Loop

The Evaluation Harness should test whether context continuity, agent execution, work packet completion, and repository contracts actually work.

---

## 5. Bounded Contexts

## 5.1 Repository Governance Context

Owns the repository as a durable governance and implementation environment.

Responsibilities:

1. Repository structure.
2. Root governance files.
3. Documentation directories.
4. ADR directory.
5. Work-packet directory.
6. Baseline inventory.
7. Repository topology decisions.
8. Repo contract expectations.

Primary question:

> What must exist in the repository, and what rules govern its structure?

Core entities:

1. `Repository`
2. `RepositoryBaseline`
3. `RepositoryTreeSnapshot`
4. `RepositoryTopology`
5. `RepositoryContract`
6. `RepoContractCheck`
7. `GovernanceFile`

---

## 5.2 Architecture Decision Context

Owns the lifecycle and authority of ADRs.

Responsibilities:

1. ADR numbering.
2. ADR status.
3. ADR templates.
4. ADR index.
5. ADR supersession.
6. ADR constraints.
7. ADR gap and overlap review.

Primary question:

> Which decisions constrain future work, and what is their current status?

Core entities:

1. `ADR`
2. `ADRIndex`
3. `ADRTemplate`
4. `ArchitectureDecision`
5. `DecisionStatus`
6. `DecisionConstraint`
7. `SupersessionLink`
8. `ADRGap`
9. `ADROverlapFinding`

---

## 5.3 Context Continuity Context

Owns durable handoff, retrieval, and project memory continuity.

Responsibilities:

1. Repository-based context continuity.
2. Canonical memory.
3. Vector retrieval concepts.
4. Context rehydration.
5. Handoff packets.
6. Current-state summaries.
7. Retrieval indexes.
8. Context validation.

Primary question:

> How can future humans and AI agents resume work without losing decisions, assumptions, or state?

Core entities:

1. `ContextRepository`
2. `ContextArtifact`
3. `CurrentStateSnapshot`
4. `HandoffPacket`
5. `ContextPack`
6. `RetrievalIndex`
7. `VectorCollection`
8. `RetrievalRecord`
9. `ContextRehydrationRequest`

---

## 5.4 Foundry Control Plane Context

Owns orchestration of agentic software delivery workflows.

Responsibilities:

1. Work orchestration.
2. Execution policy.
3. Work packet coordination.
4. Agent/tool routing.
5. Human approval points.
6. Progress state.
7. Execution boundaries.
8. Workflow observability.

Primary question:

> How is governed agentic work coordinated without losing human control or architectural discipline?

Core entities:

1. `FoundryControlPlane`
2. `WorkOrchestrator`
3. `ExecutionPolicy`
4. `AgentRuntime`
5. `ToolInvocation`
6. `ApprovalGate`
7. `ExecutionSession`
8. `ExecutionEvent`
9. `ExecutionTrace`

---

## 5.5 Work Packet Context

Owns the lifecycle of bounded execution units.

Responsibilities:

1. Work packet creation.
2. Work packet readiness.
3. Work packet status.
4. Scope.
5. Non-goals.
6. Affected files.
7. Verification plan.
8. Completion record.
9. Atomic commit guidance.

Primary question:

> What exact unit of work is being executed, and what proves it is complete?

Core entities:

1. `WorkPacket`
2. `WorkPacketIndex`
3. `WorkPacketTemplate`
4. `ReadinessChecklist`
5. `CompletionRecord`
6. `AffectedFileSet`
7. `VerificationPlan`
8. `AtomicCommitRecommendation`
9. `FollowUpWorkItem`

---

## 5.6 Directive Compiler and Work Protocol Context

Owns structured directives, work protocols, and conversion of intent into executable instructions.

Responsibilities:

1. Directive representation.
2. Work protocol templates.
3. Policy-bound execution instructions.
4. Conversion of planning artifacts into work packets.
5. Validation of directive completeness.
6. Future machine-readable work plans.

Primary question:

> How does human/product intent become structured, policy-aware, executable work?

Core entities:

1. `Directive`
2. `DirectiveCompiler`
3. `WorkProtocol`
4. `ProtocolStep`
5. `CompiledInstruction`
6. `InstructionConstraint`
7. `ProtocolValidationResult`

---

## 5.7 Persistence and Retrieval Context

Owns durable storage and retrieval concepts across structured, unstructured, and vector-backed stores.

Responsibilities:

1. Polyglot persistence concepts.
2. Canonical repository state.
3. Structured metadata.
4. Vector retrieval.
5. Qdrant collection concepts.
6. Retrieval evaluation.
7. Persistence boundaries.

Primary question:

> What information is stored where, and how is it retrieved accurately?

Core entities:

1. `PersistenceBoundary`
2. `DocumentStore`
3. `RelationalRecord`
4. `VectorCollection`
5. `EmbeddingRecord`
6. `RetrievalQuery`
7. `RetrievalResult`
8. `PersistencePolicy`
9. `StorageAdapter`

---

## 5.8 Access Tier and Repository Classification Context

Owns repository classification and access tiers.

Responsibilities:

1. Four-tier repository classification.
2. Access policies.
3. Visibility boundaries.
4. Repository sensitivity.
5. User/team access.
6. AI access constraints.

Primary question:

> Who or what may access which repository tier, and under what constraints?

Core entities:

1. `AccessTier`
2. `RepositoryClassification`
3. `AccessPolicy`
4. `Principal`
5. `PermissionGrant`
6. `SensitiveBoundary`
7. `AccessReview`

---

## 5.9 Clean-Room Pattern Adoption Context

Owns safe use of external patterns and architecture references.

Responsibilities:

1. External pattern intake.
2. Clean-room review.
3. Attribution notes.
4. Prohibited copying boundaries.
5. Pattern abstraction.
6. Adoption decisions.

Primary question:

> How can external ideas inform architecture without copying protected implementation?

Core entities:

1. `ExternalPattern`
2. `PatternSource`
3. `CleanRoomReview`
4. `AdoptionDecision`
5. `PatternAbstraction`
6. `AttributionNote`
7. `ProhibitedMaterialBoundary`

---

## 5.10 Event Bus and Notification Router Context

Owns event-driven communication and notification routing concepts.

Responsibilities:

1. Domain events.
2. Event routing.
3. Notification policies.
4. Subscriber registration.
5. Event audit.
6. Future integration hooks.

Primary question:

> How do important changes become events and notifications without coupling every subsystem?

Core entities:

1. `DomainEvent`
2. `EventBus`
3. `EventSubscriber`
4. `NotificationRouter`
5. `NotificationPolicy`
6. `DeliveryAttempt`
7. `EventEnvelope`

---

## 5.11 Evaluation Harness Context

Owns testing of agentic execution, context continuity, retrieval quality, and repository contract behavior.

Responsibilities:

1. Evaluation cases.
2. Scenario fixtures.
3. Expected outputs.
4. Agent execution evaluation.
5. Context continuity evaluation.
6. Retrieval evaluation.
7. Repo contract evaluation.
8. Regression tracking.

Primary question:

> How do we know the system actually preserves context, follows work protocols, and produces correct outputs?

Core entities:

1. `EvaluationHarness`
2. `EvaluationCase`
3. `EvaluationScenario`
4. `EvaluationRun`
5. `EvaluationResult`
6. `ExpectedOutcome`
7. `ObservedOutcome`
8. `RegressionRecord`
9. `QualityMetric`

---

## 5.12 Polyglot Implementation Context

Owns language boundaries and package-manager strategy.

Responsibilities:

1. Language roles.
2. Package manager strategy.
3. Lockfile policy.
4. Dependency pinning.
5. Runtime boundaries.
6. Build/test boundaries.

Primary question:

> Which language or ecosystem owns which responsibility, and how are dependencies controlled?

Core entities:

1. `LanguageRuntime`
2. `PackageManager`
3. `Lockfile`
4. `DependencyPolicy`
5. `BuildTarget`
6. `ServiceBoundary`
7. `RuntimeAdapter`

---

## 6. Core Entity Catalog

The initial domain entity catalog is:

```text
Repository
RepositoryBaseline
RepositoryTreeSnapshot
GovernanceFile
ADR
ADRIndex
ADRTemplate
ArchitectureDecision
DecisionConstraint
ContextRepository
ContextArtifact
CurrentStateSnapshot
HandoffPacket
ContextPack
RetrievalIndex
VectorCollection
FoundryControlPlane
WorkOrchestrator
ExecutionPolicy
AgentRuntime
ToolInvocation
ApprovalGate
ExecutionSession
WorkPacket
WorkPacketIndex
WorkPacketTemplate
ReadinessChecklist
CompletionRecord
VerificationPlan
VerificationRecord
Directive
DirectiveCompiler
WorkProtocol
CompiledInstruction
PersistenceBoundary
DocumentStore
RelationalRecord
EmbeddingRecord
RetrievalQuery
RetrievalResult
AccessTier
RepositoryClassification
AccessPolicy
ExternalPattern
CleanRoomReview
AdoptionDecision
DomainEvent
EventBus
NotificationRouter
EvaluationHarness
EvaluationCase
EvaluationRun
EvaluationResult
RepoContract
RepoContractCheck
LanguageRuntime
PackageManager
Lockfile
DependencyPolicy
```

---

## 7. Core Entity Definitions

## 7.1 Repository

A `Repository` is the durable home for project memory, governance artifacts, source code, work packets, ADRs, and verification material.

Responsibilities:

1. Preserve canonical artifacts.
2. Preserve implementation history.
3. Preserve work packet history.
4. Support repo contract checks.
5. Serve as a continuity anchor.

Important relationships:

1. A `Repository` has one or more `RepositoryBaseline` records.
2. A `Repository` contains `GovernanceFile` records.
3. A `Repository` contains `ADR` records.
4. A `Repository` contains `WorkPacket` records.
5. A `Repository` is classified by `RepositoryClassification`.

---

## 7.2 RepositoryBaseline

A `RepositoryBaseline` is an accepted snapshot of the repository state at a point in time.

Responsibilities:

1. Identify what files exist.
2. Identify what directories exist.
3. Identify known gaps.
4. Identify intentional expansion points.
5. Prevent silent drift.

Current baseline:

```text
The uploaded repository tree is the active baseline.
```

---

## 7.3 RepositoryTreeSnapshot

A `RepositoryTreeSnapshot` is a captured representation of repository structure.

In the current baseline, the root `tree` file acts as a baseline snapshot artifact.

Responsibilities:

1. Capture directory structure.
2. Support baseline inventory.
3. Support future contract checks.
4. Identify drift when compared to expected structure.

---

## 7.4 GovernanceFile

A `GovernanceFile` is a root or documentation file that governs how the repository should be used.

Examples:

1. `CODEOWNERS`
2. `CONTRIBUTING.md`
3. `LICENSE`
4. `SECURITY.md`
5. Future `README.md`

Responsibilities:

1. Define contribution rules.
2. Define ownership.
3. Define security posture.
4. Define licensing status.
5. Orient humans and future AI sessions.

---

## 7.5 ADR

An `ADR` is an Architecture Decision Record.

Responsibilities:

1. Record an architecture-shaping decision.
2. Preserve decision rationale.
3. Constrain future work.
4. Support traceability.
5. Support future review and supersession.

Current baseline ADRs include:

1. ADR governance.
2. Repository-based context continuity.
3. Repository topology.
4. Access tiers.
5. Clean-room adoption.
6. Canonical repository plus vector retrieval.
7. Foundry Control Plane.
8. Dependency pinning.
9. Persistence/retrieval.
10. Polyglot language strategy.
11. Worktree execution.
12. Event bus and notification routing.
13. Work packet lifecycle.
14. Package managers.
15. Directive compiler and work protocols.
16. Repo Contract testing.
17. Evaluation harness.

---

## 7.6 WorkPacket

A `WorkPacket` is the canonical bounded unit of execution.

Responsibilities:

1. Define purpose.
2. Define source inputs.
3. Define scope.
4. Define non-goals.
5. Define affected files.
6. Define implementation plan.
7. Define acceptance criteria.
8. Define verification plan.
9. Define security and privacy notes.
10. Define completion record.
11. Define recommended atomic commit.

Lifecycle states:

1. `draft`
2. `ready`
3. `blocked`
4. `in_progress`
5. `verifying`
6. `complete`
7. `superseded`
8. `cancelled`

---

## 7.7 FoundryControlPlane

A `FoundryControlPlane` is the orchestration layer for governed agentic software delivery.

Responsibilities:

1. Coordinate work packets.
2. Enforce execution policies.
3. Route work to humans, tools, and agents.
4. Maintain execution traces.
5. Integrate with event and notification routing.
6. Preserve human approval boundaries.
7. Support future automation while preventing uncontrolled execution.

The Foundry Control Plane does not mean autonomous unrestricted execution. It means governed orchestration.

---

## 7.8 DirectiveCompiler

A `DirectiveCompiler` converts intent, documentation, ADR constraints, and work protocols into structured instructions.

Responsibilities:

1. Parse or assemble directives.
2. Apply work protocol rules.
3. Include relevant ADR constraints.
4. Include verification expectations.
5. Produce executable or reviewable instructions.
6. Preserve constraints and non-goals.

---

## 7.9 RepoContract

A `RepoContract` defines expected repository structure and rules.

Responsibilities:

1. Assert required files exist.
2. Assert required directories exist.
3. Assert metadata conventions.
4. Assert ADR/work-packet expectations.
5. Assert package-manager and lockfile expectations when applicable.
6. Prevent accidental drift.

A Repo Contract should be testable through `RepoContractCheck` records or scripts.

---

## 7.10 EvaluationHarness

An `EvaluationHarness` validates that the system behaves correctly across important scenarios.

Responsibilities:

1. Run evaluation cases.
2. Compare expected and observed outcomes.
3. Evaluate context continuity.
4. Evaluate retrieval quality.
5. Evaluate work packet execution.
6. Evaluate repo contract behavior.
7. Track regressions.

---

## 7.11 ContextArtifact

A `ContextArtifact` is a durable artifact used to preserve state across humans, AI sessions, and execution environments.

Examples:

1. Product documents.
2. Architecture documents.
3. ADRs.
4. Work packets.
5. Current-state summaries.
6. Handoff packets.
7. Baseline inventories.

---

## 7.12 VectorCollection

A `VectorCollection` represents vector-backed retrieval storage.

Responsibilities:

1. Store embeddings.
2. Support semantic retrieval.
3. Support context rehydration.
4. Support retrieval evaluation.
5. Stay subordinate to canonical repository memory.

Important rule:

```text
Vector retrieval augments repository memory; it does not replace canonical repository artifacts.
```

---

## 8. Relationship Model

## 8.1 Repository Relationships

```text
Repository
  → has RepositoryBaseline
  → has RepositoryTreeSnapshot
  → contains GovernanceFile
  → contains ADR
  → contains WorkPacket
  → contains ContextArtifact
  → is checked by RepoContract
```

## 8.2 ADR Relationships

```text
ADR
  → records ArchitectureDecision
  → creates DecisionConstraint
  → may supersede ADR
  → may be referenced by WorkPacket
  → may be checked by RepoContract
```

## 8.3 Work Packet Relationships

```text
WorkPacket
  → references ADR
  → references ContextArtifact
  → defines VerificationPlan
  → produces CompletionRecord
  → recommends AtomicCommit
  → may create FollowUpWorkItem
```

## 8.4 Context Continuity Relationships

```text
ContextArtifact
  → contributes to ContextPack
  → contributes to CurrentStateSnapshot
  → contributes to HandoffPacket
  → may be indexed by RetrievalIndex
  → may be embedded into VectorCollection
```

## 8.5 Foundry Relationships

```text
FoundryControlPlane
  → coordinates WorkPacket
  → applies ExecutionPolicy
  → invokes AgentRuntime
  → invokes ToolInvocation
  → emits DomainEvent
  → routes through EventBus
  → may require ApprovalGate
```

## 8.6 Evaluation Relationships

```text
EvaluationHarness
  → contains EvaluationCase
  → executes EvaluationRun
  → records EvaluationResult
  → checks ExpectedOutcome against ObservedOutcome
  → may create RegressionRecord
```

## 8.7 Repo Contract Relationships

```text
RepoContract
  → defines RepoContractCheck
  → checks Repository
  → checks ADRIndex
  → checks WorkPacketIndex
  → checks required files
  → checks required directories
```

---

## 9. Lifecycle Models

## 9.1 ADR Lifecycle

```text
draft
  → proposed
  → accepted
  → superseded

draft
  → rejected

proposed
  → rejected

accepted
  → deprecated
```

Notes:

1. The current baseline may use statuses defined in existing ADR files.
2. This domain model does not normalize ADR statuses.
3. Future ADR normalization should be handled explicitly.

---

## 9.2 Work Packet Lifecycle

```text
draft
  → ready
  → in_progress
  → verifying
  → complete

draft
  → blocked

ready
  → blocked

in_progress
  → blocked

draft/ready/in_progress
  → superseded

draft/ready/in_progress
  → cancelled
```

Completion requires:

1. Acceptance criteria result.
2. Verification result.
3. Completion record.
4. Known limitations.
5. Follow-up work.
6. Accurate recommended commit.

---

## 9.3 Repository Baseline Lifecycle

```text
captured
  → reviewed
  → accepted
  → superseded
```

Current state:

```text
accepted as active baseline by Project Steward instruction
```

---

## 9.4 Repo Contract Check Lifecycle

```text
defined
  → runnable
  → passing
  → failing
  → updated
```

Notes:

1. Repo contract tests do not yet exist in the baseline.
2. ADR-0021 makes this a first-class future concern.

---

## 9.5 Evaluation Run Lifecycle

```text
planned
  → running
  → completed
  → reviewed
  → archived
```

Result values may include:

1. `passed`
2. `failed`
3. `blocked`
4. `inconclusive`
5. `needs_review`

---

## 10. Domain Events

## 10.1 Repository Events

1. `RepositoryBaselineCaptured`
2. `RepositoryBaselineAccepted`
3. `RepositoryTreeChanged`
4. `GovernanceFileAdded`
5. `RepoContractDefined`
6. `RepoContractCheckPassed`
7. `RepoContractCheckFailed`

## 10.2 ADR Events

1. `ADRCreated`
2. `ADRProposed`
3. `ADRAccepted`
4. `ADRSuperseded`
5. `ADRGapIdentified`
6. `ADROverlapIdentified`
7. `ADRIndexUpdated`

## 10.3 Work Packet Events

1. `WorkPacketCreated`
2. `WorkPacketMarkedReady`
3. `WorkPacketStarted`
4. `WorkPacketBlocked`
5. `WorkPacketEnteredVerification`
6. `WorkPacketCompleted`
7. `WorkPacketSuperseded`
8. `WorkPacketCancelled`

## 10.4 Context Continuity Events

1. `ContextArtifactCreated`
2. `CurrentStateSnapshotGenerated`
3. `HandoffPacketGenerated`
4. `ContextPackGenerated`
5. `RetrievalIndexUpdated`
6. `ContextRehydrationRequested`

## 10.5 Foundry Control Plane Events

1. `ExecutionSessionStarted`
2. `ExecutionPolicyApplied`
3. `ToolInvocationRequested`
4. `ApprovalGateOpened`
5. `ApprovalGateApproved`
6. `ApprovalGateRejected`
7. `ExecutionSessionCompleted`

## 10.6 Evaluation Events

1. `EvaluationCaseCreated`
2. `EvaluationRunStarted`
3. `EvaluationRunCompleted`
4. `EvaluationFailed`
5. `RegressionDetected`
6. `RegressionResolved`

---

## 11. Domain Invariants

## 11.1 Baseline Invariants

1. The uploaded repository tree remains the active baseline until superseded.
2. Baseline cleanup requires an explicit work packet.
3. ADR number gaps must not be silently filled.
4. Existing files must not be silently renamed.
5. Existing ADRs must not be silently rewritten.

## 11.2 ADR Invariants

1. ADR numbers are never reused.
2. ADR files preserve decision history.
3. ADR overlaps require explicit review.
4. ADR supersession must be recorded.
5. ADRs constrain future work when accepted or otherwise marked authoritative by project rules.

## 11.3 Work Packet Invariants

1. Work packets must have scope.
2. Work packets must have non-goals.
3. Work packets must have affected files or an explicit discovery note.
4. Work packets must have verification plans.
5. Work packets must have completion records.
6. Work packets must not hide failed verification.
7. Work packets must recommend atomic commits.

## 11.4 Context Continuity Invariants

1. Repository artifacts remain the durable memory baseline.
2. Retrieval indexes augment, not replace, repository memory.
3. Handoff artifacts must not contradict accepted decisions.
4. Current-state artifacts must distinguish facts from assumptions.
5. Context packs must avoid secrets and sensitive data.

## 11.5 Repo Contract Invariants

1. Repo contracts should be executable.
2. Required governance files should be checked.
3. Required ADR/work-packet files should be checked.
4. Contract failures must be visible.
5. Contract updates require intentional work.

## 11.6 Evaluation Harness Invariants

1. Evaluation cases must define expected outcomes.
2. Evaluation runs must record observed outcomes.
3. Failed evaluations must not be hidden.
4. Evaluation scenarios should be reproducible.
5. Evaluation results should create follow-up work when they expose defects.

## 11.7 Security and Access Invariants

1. Access tiers must be respected.
2. Sensitive material must not be exposed to unauthorized users or tools.
3. Clean-room boundaries must be preserved.
4. Secrets must not be committed.
5. AI/tool access should be constrained by repository classification and policy.

---

## 12. Access Tier Model

The domain recognizes an access-tier model from the ADR lineage.

Conceptual tiers should distinguish:

1. Public material.
2. Internal project material.
3. Restricted/sensitive material.
4. Highly controlled material.

The exact tier names and semantics should be taken from ADR-0004 during implementation.

Domain rule:

```text
AccessTier influences repository visibility, AI access, tool access, retrieval inclusion, and export behavior.
```

---

## 13. Persistence and Retrieval Model

The baseline ADR lineage includes canonical repository plus vector retrieval and polyglot persistence concepts.

The conceptual model is:

```text
Repository artifacts
  → canonical durable memory

Structured persistence
  → operational metadata and relationships

Vector retrieval
  → semantic access and context rehydration

Evaluation harness
  → validates retrieval quality and continuity
```

Important rules:

1. The repository remains canonical for durable project memory.
2. Vector retrieval supports discovery and rehydration.
3. Qdrant or another vector store should not become the sole source of truth.
4. Persistence boundaries should be explicit.
5. Retrieval quality should be evaluated.

---

## 14. Worktree Execution Model

The ADR lineage includes worktree-based parallel execution.

Conceptual model:

```text
WorkPacket
  → may allocate Worktree
  → executes bounded change
  → verifies result
  → returns completion record
  → produces atomic commit or reviewable diff
```

Domain concerns:

1. Worktree identity.
2. Work packet ownership.
3. Parallel execution safety.
4. Conflict detection.
5. Completion verification.
6. Merge/commit discipline.

---

## 15. Event and Notification Model

The ADR lineage includes an event bus and notification router.

Conceptual model:

```text
DomainEvent
  → EventBus
  → NotificationRouter
  → Subscriber / Human / Agent / System
```

Important event categories:

1. Work packet changes.
2. ADR changes.
3. Repo contract failures.
4. Evaluation failures.
5. Approval requests.
6. Execution events.
7. Retrieval/index updates.

---

## 16. Clean-Room Pattern Adoption Model

The domain supports clean-room pattern adoption.

Conceptual flow:

```text
ExternalPattern
  → CleanRoomReview
  → PatternAbstraction
  → AdoptionDecision
  → ADR / WorkPacket / Implementation
```

Rules:

1. Protected code must not be copied.
2. Architectural patterns may be described abstractly.
3. Adoption decisions should be documented.
4. Source material boundaries should be clear.
5. Implementation must be original.

---

## 17. Package Manager and Dependency Model

The ADR lineage includes explicit package manager and dependency pinning decisions.

Conceptual entities:

1. `PackageManager`
2. `Lockfile`
3. `DependencyPolicy`
4. `DependencyUpdate`
5. `DependencyAudit`

Domain rules:

1. Package managers should align with ADR-0019.
2. Lockfiles should be committed where required by ADR-0011.
3. Dependency changes should be reviewable.
4. Dependency drift should be detectable.
5. Package-manager changes require ADR review.

---

## 18. Repo Contract Testing Model

Repo Contract testing is a first-class domain concept.

A Repo Contract should define checks such as:

1. Required root files.
2. Required documentation directories.
3. Required ADR index.
4. Required ADR template.
5. Required work-packet index.
6. Required work-packet template.
7. Required frontmatter fields.
8. Required package lockfiles when package ecosystems exist.
9. Prohibited sensitive files.
10. Expected baseline structure.

A Repo Contract Check should produce:

1. Check name.
2. Check category.
3. Expected condition.
4. Actual result.
5. Status.
6. Failure message.
7. Remediation guidance.

---

## 19. Evaluation Harness Model

The Evaluation Harness should validate important product capabilities over time.

Evaluation categories:

1. Context continuity.
2. Retrieval accuracy.
3. Work packet completeness.
4. Agent execution discipline.
5. Repo contract compliance.
6. Directive compiler output quality.
7. Clean-room boundary preservation.
8. Handoff quality.
9. Regression detection.

An Evaluation Case should define:

1. Scenario.
2. Input artifacts.
3. Expected output.
4. Evaluation method.
5. Pass/fail criteria.
6. Known limitations.

---

## 20. Open Domain Questions

The following questions remain open and must be resolved through future work packets or ADR review.

## 20.1 ADR Number Gaps

Missing ADR numbers in the visible baseline:

```text
ADR-0007
ADR-0009
ADR-0010
ADR-0012
```

Open question:

> Are these gaps intentional retired decisions, omitted files, or future placeholders?

## 20.2 Persistence ADR Overlap

Potential overlap:

```text
ADR-0013-polyglot-persistence-and-qdrant-retrieval.md
ADR-0015-polyglot-persistence-and-qdrant-retrieval.md
```

Open question:

> Are these duplicate decisions, revisions, or separate decisions with similar titles?

## 20.3 Architecture Overview Placement

Both files exist:

```text
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Open question:

> Which file is authoritative, or do they serve different purposes?

## 20.4 Root README Absence

The uploaded baseline does not include:

```text
README.md
```

Open question:

> Should the root README be added immediately, and what should it reference as the canonical starting point?

## 20.5 Work Packet and Planning Sequencing

The work-packet system is now being added, while the baseline already has a mature ADR set.

Open question:

> Should future planning derive from the ADR lineage first, the product SRS first, or a combined planning reconciliation document?

## 20.6 Repo Contract Test Scope

ADR-0021 establishes repo contract testing as important.

Open question:

> What is the smallest useful repo contract check set for the current baseline?

## 20.7 Evaluation Harness Scope

ADR-0022 establishes an Evaluation Harness.

Open question:

> What first evaluation cases should exist before runtime implementation begins?

---

## 21. MVP Domain Slice for Current Baseline

The first useful domain slice should focus on baseline stabilization, not runtime product code.

Priority concepts:

1. Repository baseline.
2. ADR lineage.
3. Work packet lifecycle.
4. Domain model.
5. Planning baseline.
6. Repo contract testing.
7. Context continuity.
8. Evaluation harness.

Recommended immediate sequence:

```text
WP-0003 Domain Model Baseline
→ WP-0004 Planning Baseline
→ WP-0005 Repository Verification Baseline
→ WP-0006 ADR Index Normalization Review
→ WP-0007 Repo Contract Testing Baseline
→ WP-0008 Context Continuity Baseline
```

---

## 22. Domain Model Acceptance Criteria

This domain model is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It defines Bounded Contexts.
3. It defines core entities.
4. It defines WorkPacket as a core execution entity.
5. It references repository context continuity.
6. It references the Foundry Control Plane.
7. It references Repo Contract testing.
8. It references Evaluation Harness concepts.
9. It defines relationships.
10. It defines lifecycle states.
11. It defines domain events.
12. It defines invariants.
13. It identifies access tier concerns.
14. It identifies persistence and retrieval concerns.
15. It identifies open domain questions.
16. It identifies the next planning step.
17. It does not rename, delete, or rewrite baseline files.
18. It does not claim runtime implementation exists.

---

## 23. Verification

Run:

```bash
test -f docs/domain/00-domain-model.md && \
grep -q '^title: "Domain Model"$' docs/domain/00-domain-model.md && \
grep -q '^# Domain Model$' docs/domain/00-domain-model.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/domain/00-domain-model.md && \
grep -q 'Bounded Contexts' docs/domain/00-domain-model.md && \
grep -q 'WorkPacket' docs/domain/00-domain-model.md && \
grep -q 'Foundry Control Plane' docs/domain/00-domain-model.md && \
grep -q 'Repo Contract' docs/domain/00-domain-model.md && \
grep -q 'Evaluation Harness' docs/domain/00-domain-model.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```

---
