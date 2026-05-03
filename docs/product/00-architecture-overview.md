---
title: "Architecture Overview"
description: "Initial architecture overview for the Agentic Software Framework, defining system context, product surfaces, architectural principles, major components, domain boundaries, data ownership, integration boundaries, AI provider boundaries, verification boundaries, security boundaries, deployment posture, risks, and required ADRs."
file: docs/architecture/00-architecture-overview.md
status: "proposed"
version: "0.1.0"
created: "2026-05-02"
updated: "2026-05-02"
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
document_type: "architecture-overview"
canonical: false
related_documents:
  - "docs/product/00-product-inception-brief.md"
  - "docs/product/01-product-charter.md"
  - "docs/product/02-stakeholder-and-user-model.md"
  - "docs/product/03-software-requirements-specification.md"
  - "docs/adr/README.md"
  - "docs/domain/00-domain-model.md"
---

# Architecture Overview

## 1. Purpose

This document defines the initial architecture overview for the **Agentic Software Framework**.

It establishes the system shape before implementation begins. It is intentionally architectural rather than code-specific. Its purpose is to define the major product surfaces, logical components, system boundaries, data ownership rules, integration boundaries, AI provider boundaries, verification responsibilities, security posture, and early architecture risks.

This document also identifies the first Architecture Decision Records required before implementation.

---

## 2. Architecture Objective

The architecture must support the product mission:

> Help humans and AI agents move from product vision to verified implementation through disciplined planning, architecture, documentation, work packets, repository memory, validation, and atomic commits.

The architecture must make AI-assisted software development:

1. Structured.
2. Auditable.
3. Traceable.
4. Verifiable.
5. Repository-centered.
6. Human-governed.
7. Exportable.
8. Security-conscious.
9. Maintainable.
10. Extensible.

The system must not become a generic chatbot, thin project board, documentation generator, or uncontrolled autonomous coding agent.

---

## 3. Architectural North Star

The architecture should be a **repository-centered AI SDLC control plane**.

The system should provide a SaaS control plane and eventually optional local tooling, but project truth must remain exportable and reconstructable from durable artifacts.

The core architectural stance is:

> The SaaS coordinates, generates, validates, visualizes, and governs. The repository remains a durable, portable source of truth.

This means:

1. Artifacts must be exportable.
2. Markdown must be first-class.
3. Repository-ready file paths must be stable.
4. AI context must be generated from durable artifacts, not fragile chat history.
5. Work packets must be explicit execution units.
6. Verification must be recorded and tied to work.
7. Significant decisions must be captured in ADRs.
8. Human approval gates must protect sensitive operations.
9. Repository writes must never be silent.
10. Architecture must resist drift.

---

## 4. Recommended MVP Architecture Posture

The recommended MVP posture is:

> SaaS-first control plane with repository-ready Markdown export, GitHub integration added cautiously, and local/CLI capability treated as a near-term companion rather than the first required surface.

Reasoning:

1. A SaaS control plane best supports guided onboarding, artifact review, project dashboards, collaboration, billing, and future team workflows.
2. Repository-ready Markdown export preserves trust and reduces lock-in.
3. GitHub integration is strategically important but should begin with least-privilege read/export behavior before repository mutation.
4. A local CLI is valuable, but it should not block validation of the core product workflow.
5. Hosted code execution and autonomous repo mutation are intentionally deferred.

This recommendation must be captured in an ADR before implementation.

---

## 5. System Context

The Agentic Software Framework sits between humans, AI providers, project repositories, verification workflows, and generated SDLC artifacts.

```text
Human Builder / Team
        |
        v
Agentic Software Framework Control Plane
        |
        |-- Project artifacts
        |-- Requirements
        |-- Architecture decisions
        |-- Work packets
        |-- Verification records
        |-- Context packs
        |
        |--> AI Provider Boundary
        |--> Repository Boundary
        |--> Verification Boundary
        |--> Export Boundary
        |--> Billing/Auth Boundary
```

The system must coordinate the following:

1. Human intent.
2. Product artifacts.
3. AI-generated drafts and recommendations.
4. Architecture decisions.
5. Requirements and planning artifacts.
6. Work packets.
7. Repository state.
8. Verification commands and evidence.
9. Context continuity artifacts.
10. Export and handoff artifacts.

---

## 6. Primary Actors

## 6.1 Human User

The human user owns product intent, approves major decisions, reviews generated outputs, controls repository access, and remains accountable for final acceptance.

Examples:

1. Solo founder.
2. Consultant.
3. Indie builder.
4. Agency delivery lead.
5. Startup technical lead.

## 6.2 AI Provider

The AI provider generates drafts, summaries, implementation guidance, review notes, context packs, and reasoning support.

The AI provider must be treated as an external integration boundary, not the source of truth.

## 6.3 Repository Provider

The repository provider stores project artifacts, source code, commits, issues, and pull requests.

GitHub is the recommended first provider, but this must be confirmed by ADR.

## 6.4 Verification Runtime

The verification runtime may be the user’s local machine, CI environment, or future hosted sandbox.

For MVP, verification can be guided and recorded without requiring hosted execution.

## 6.5 Future AI Session

A future AI session consumes generated context packs and durable artifacts to continue the project without relying on previous chat history.

---

## 7. Product Surfaces

## 7.1 Web Control Plane

The web control plane is the recommended primary MVP surface.

Responsibilities:

1. Project creation.
2. Product onboarding.
3. Artifact generation.
4. Artifact review and editing.
5. Artifact status management.
6. Work packet creation.
7. Readiness checks.
8. Next-step guidance.
9. Verification record entry.
10. Export generation.
11. Activity visibility.
12. Basic account and project ownership.

The web app should not hide the underlying artifact model. Users should understand what documents and records are being created.

## 7.2 Repository Export Surface

The repository export surface produces repo-ready artifacts.

Responsibilities:

1. Export Markdown documents.
2. Preserve canonical file paths.
3. Include YAML frontmatter.
4. Export ADRs, work packets, verification records, and handoff packets.
5. Avoid sensitive data inclusion by default.
6. Allow users to commit exported artifacts manually.

This is a trust-building surface because it proves the project does not depend entirely on proprietary SaaS storage.

## 7.3 GitHub Integration Surface

The GitHub integration surface should be added carefully.

Initial responsibilities:

1. Connect GitHub account or app installation.
2. List accessible repositories.
3. Read repository metadata.
4. Detect existing documentation structure.
5. Propose repository-ready changes.
6. Export files or open pull requests later.

Initial non-responsibilities:

1. Silent repository mutation.
2. Direct production deployment.
3. Broad write permissions by default.
4. Unreviewed dependency changes.

## 7.4 Future CLI Surface

A CLI is a strong future companion surface.

Potential responsibilities:

1. Initialize local project artifacts.
2. Validate repository contracts.
3. Generate context packs locally.
4. Run documentation checks.
5. Sync with SaaS.
6. Export/import project state.
7. Execute work packet verification locally.

The CLI should not be required for MVP unless the first product direction changes from SaaS-first to local-first by ADR.

## 7.5 Future IDE Surface

IDE plugins may eventually support inline work packet context, code review, verification, and artifact navigation.

IDE support is out of scope for MVP.

---

## 8. Logical Architecture

The logical MVP architecture should be decomposed into the following major components:

```text
Web Application
        |
Application API
        |
Domain Services
        |
Persistence Layer
        |
External Integration Boundaries
```

Detailed logical components:

1. Identity and Account Service.
2. Project Workspace Service.
3. Artifact Service.
4. Requirement Service.
5. ADR Service.
6. Architecture/Domain Model Service.
7. Planning Service.
8. Work Packet Service.
9. Verification Service.
10. AI Orchestration Service.
11. Context Pack Service.
12. Repository Integration Service.
13. Export Service.
14. Security and Redaction Service.
15. Activity/Audit Service.
16. Billing/Plan Service.

---

## 9. Recommended Component Model

## 9.1 Identity and Account Component

Purpose:

Manage users, authentication, account ownership, and basic authorization.

Responsibilities:

1. User identity.
2. Login/logout.
3. Project ownership.
4. Account status.
5. Plan association.
6. Later team/workspace membership.

MVP notes:

Authentication is required if SaaS-first. If an export-first prototype is built first, identity may be deferred, but a paid SaaS MVP requires it.

## 9.2 Project Workspace Component

Purpose:

Represent one software product or client project.

Responsibilities:

1. Project creation.
2. Project metadata.
3. Project lifecycle phase.
4. Current state.
5. Next recommended step.
6. Open questions.
7. Blockers.
8. Active work packet.

Owned data:

1. Project.
2. Project status.
3. Current phase.
4. Current next step.
5. Project settings.

## 9.3 Artifact Component

Purpose:

Manage durable SDLC artifacts.

Responsibilities:

1. Create artifacts.
2. Store artifact content.
3. Track artifact type.
4. Track artifact status.
5. Track artifact version.
6. Track canonical flag.
7. Track related documents.
8. Export artifacts.

Artifact types include:

1. Product inception brief.
2. Product charter.
3. Stakeholder and user model.
4. SRS.
5. Architecture overview.
6. ADR.
7. Domain model.
8. Epic document.
9. Backlog document.
10. Milestone plan.
11. Work packet.
12. Verification record.
13. Handoff packet.
14. Current state document.

## 9.4 Requirement Component

Purpose:

Manage structured requirements derived from product artifacts.

Responsibilities:

1. Store requirements.
2. Classify requirements.
3. Track priority.
4. Track acceptance criteria.
5. Link requirements to source artifacts.
6. Link requirements to epics, backlog, work packets, and verification.

Requirement categories:

1. Functional.
2. Non-functional.
3. Security.
4. Data.
5. Integration.
6. UX.
7. AI behavior.
8. Verification.
9. Operational.

## 9.5 ADR Component

Purpose:

Manage architecture decisions.

Responsibilities:

1. Create ADRs.
2. Track ADR status.
3. Link ADRs to requirements and work packets.
4. Generate ADR index.
5. Identify implementation constraints from accepted ADRs.
6. Warn when proposed work conflicts with accepted ADRs.

ADR statuses:

1. Draft.
2. Proposed.
3. Accepted.
4. Superseded.
5. Deprecated.

## 9.6 Planning Component

Purpose:

Convert requirements into epics, backlog items, milestones, and work sequencing.

Responsibilities:

1. Generate epics.
2. Generate backlog items.
3. Generate milestone plans.
4. Map requirements to planning items.
5. Track priority.
6. Identify dependencies.
7. Identify readiness gaps.

## 9.7 Work Packet Component

Purpose:

Manage controlled implementation units.

Responsibilities:

1. Create work packets.
2. Track work packet status.
3. Evaluate readiness.
4. Store scope and non-goals.
5. Store affected files.
6. Store implementation steps.
7. Store acceptance criteria.
8. Store verification commands.
9. Store risks.
10. Store commit recommendations.
11. Generate completion records.

Work packet statuses:

1. Draft.
2. Ready.
3. Blocked.
4. In progress.
5. Verifying.
6. Complete.
7. Superseded.

## 9.8 Verification Component

Purpose:

Define and record how work is verified.

Responsibilities:

1. Store verification command registry.
2. Attach verification commands to work packets.
3. Store manual acceptance checks.
4. Record verification results.
5. Track known limitations.
6. Generate verification summaries.
7. Support future CI ingestion.

MVP verification may be user-reported rather than executed by the SaaS.

## 9.9 AI Orchestration Component

Purpose:

Coordinate AI-assisted generation and review.

Responsibilities:

1. Prepare prompts from source artifacts.
2. Select AI provider.
3. Generate artifact drafts.
4. Generate implementation guidance.
5. Generate context packs.
6. Generate summaries.
7. Preserve assumptions and unknowns.
8. Prevent unsupported claims where possible.
9. Apply redaction before provider calls.

This component must not own canonical truth. It produces drafts and recommendations.

## 9.10 Context Pack Component

Purpose:

Generate durable rehydration artifacts.

Responsibilities:

1. Generate current state document.
2. Generate AI context pack.
3. Generate fresh-session handoff.
4. Include relevant decisions.
5. Include current phase.
6. Include next step.
7. Include active work packet.
8. Exclude secrets and sensitive files.
9. Regenerate from durable project state.

## 9.11 Repository Integration Component

Purpose:

Integrate with repository providers.

Responsibilities:

1. Connect repository provider.
2. Read repository metadata.
3. Scan relevant files.
4. Detect existing artifact structure.
5. Propose repository-ready file changes.
6. Support export.
7. Later support pull request creation.

Security restrictions:

1. Least-privilege access.
2. Read-only first where possible.
3. No silent writes.
4. Human approval required for mutations.
5. Secrets detection before AI context inclusion.

## 9.12 Export Component

Purpose:

Produce portable artifacts.

Responsibilities:

1. Export Markdown.
2. Export JSON metadata where appropriate.
3. Preserve file paths.
4. Preserve frontmatter.
5. Include traceability references.
6. Package project bundle.
7. Exclude sensitive data by default.

## 9.13 Security and Redaction Component

Purpose:

Protect sensitive data and enforce trust boundaries.

Responsibilities:

1. Detect likely secrets.
2. Redact sensitive content.
3. Warn on sensitive files.
4. Enforce repository access restrictions.
5. Enforce approval gates.
6. Support provider transparency.
7. Support audit records.

## 9.14 Activity and Audit Component

Purpose:

Record important project actions.

Responsibilities:

1. Project creation records.
2. Artifact generation records.
3. Artifact status changes.
4. ADR acceptance records.
5. Work packet status changes.
6. Repository connection records.
7. Export records.
8. Approval records.
9. Verification records.

## 9.15 Billing and Plan Component

Purpose:

Represent commercial plan and usage.

Responsibilities:

1. Plan tier.
2. Usage limits.
3. Project limits.
4. AI usage credits.
5. Subscription state.
6. Future billing provider integration.

MVP note:

Billing can be deferred until paid launch, but the data model should avoid making billing difficult later.

---

## 10. Domain Boundaries

The architecture should separate the following domain boundaries.

## 10.1 Project Governance Domain

Owns:

1. Projects.
2. Project state.
3. Current phase.
4. Next step.
5. Blockers.
6. Assumptions.
7. Open questions.

This domain answers:

> Where is this project in the governed SDLC?

## 10.2 Artifact Domain

Owns:

1. Documents.
2. Artifact metadata.
3. Artifact status.
4. Artifact versions.
5. Canonical flag.
6. Related document references.

This domain answers:

> What durable artifacts exist, what status are they in, and how do they relate?

## 10.3 Requirements and Planning Domain

Owns:

1. Requirements.
2. Epics.
3. Backlog items.
4. Milestones.
5. Priorities.
6. Dependencies.

This domain answers:

> What needs to be built, why, and in what order?

## 10.4 Architecture Governance Domain

Owns:

1. ADRs.
2. Architecture constraints.
3. Technology decisions.
4. Forbidden patterns.
5. Approved patterns.
6. Drift warnings.

This domain answers:

> What decisions constrain future work?

## 10.5 Work Execution Domain

Owns:

1. Work packets.
2. Work packet status.
3. Readiness checks.
4. Scope.
5. Non-goals.
6. Implementation instructions.
7. Completion records.

This domain answers:

> What controlled unit of work is being executed, and what does done mean?

## 10.6 Verification Domain

Owns:

1. Verification commands.
2. Manual checks.
3. Verification results.
4. Evidence summaries.
5. Known limitations.

This domain answers:

> What proves this work is acceptable?

## 10.7 Context Continuity Domain

Owns:

1. Current state documents.
2. AI context packs.
3. Handoff packets.
4. Session summaries.
5. Rehydration inputs.

This domain answers:

> How can a future human or AI session resume correctly?

## 10.8 Integration Domain

Owns:

1. GitHub connection.
2. Repository metadata.
3. Export packages.
4. Provider metadata.
5. External references.

This domain answers:

> How does the product interact with external systems?

## 10.9 Trust and Security Domain

Owns:

1. Secrets detection.
2. Redaction.
3. Approval gates.
4. Audit events.
5. Provider transparency.
6. Permission boundaries.

This domain answers:

> What prevents unsafe or untrusted behavior?

---

## 11. Data Ownership Rules

## 11.1 Project Owns Project State

Project state must be owned by the Project Workspace component.

Other components may read project state but should not silently mutate lifecycle phase, blockers, or next-step state without going through project governance logic.

## 11.2 Artifacts Own Document Content and Metadata

The Artifact component owns durable document content, frontmatter-equivalent metadata, status, version, and related document references.

## 11.3 Requirements Own Acceptance Criteria

Requirements and their acceptance criteria should be stored structurally, even if exported into Markdown.

## 11.4 ADRs Own Architecture Constraints

Accepted ADRs must become constraints that AI guidance and work packet readiness checks can consult.

## 11.5 Work Packets Own Execution Scope

Work packets own implementation scope, non-goals, file impact, verification commands, and commit recommendation.

## 11.6 Verification Owns Evidence

Verification records must be separate from work packet text so that verification evidence can be updated without rewriting the packet.

## 11.7 Context Packs Are Generated Artifacts

Context packs should be generated from canonical project state and artifacts. They are not the source of truth.

## 11.8 SaaS Storage Is Not the Only Truth

The system may store structured state in a database, but must support export of meaningful project memory.

---

## 12. Initial Data Architecture

The initial data architecture should support both structured storage and portable document export.

Recommended approach:

1. Store canonical structured records in application persistence.
2. Generate Markdown artifacts from structured records or store Markdown with structured metadata.
3. Preserve stable IDs for traceability.
4. Export repository-ready Markdown and metadata.
5. Avoid depending on chat history for project truth.

Initial core entities:

1. User.
2. Account.
3. Workspace.
4. Project.
5. Artifact.
6. Requirement.
7. ADR.
8. Epic.
9. Backlog Item.
10. Milestone.
11. Work Packet.
12. Verification Command.
13. Verification Record.
14. Traceability Link.
15. Approval.
16. Activity Event.
17. Repository Connection.
18. Export Bundle.
19. AI Generation Record.
20. Context Pack.

This data architecture requires a later domain model and data model document.

---

## 13. AI Provider Boundary

AI providers must be treated as external, replaceable services.

The AI provider boundary must enforce:

1. Provider abstraction.
2. Redaction before provider calls.
3. Prompt construction from approved source artifacts.
4. Recording of generation metadata.
5. Clear distinction between AI draft and human-approved artifact.
6. Assumption preservation.
7. Unknowns preservation.
8. No provider as canonical source of truth.

AI outputs should be categorized as:

1. Draft artifact.
2. Recommendation.
3. Review comment.
4. Implementation guidance.
5. Summary.
6. Context pack.
7. Verification suggestion.

AI outputs should not automatically become canonical unless a human approval rule permits it.

---

## 14. Repository Boundary

The repository boundary is strategically critical because the product is repository-centered.

MVP repository posture should follow these rules:

1. Repository export is required.
2. GitHub should be the first integration, pending ADR.
3. Read-only repository access is preferred initially.
4. Repository writes require explicit human approval.
5. The system must explain what files it proposes to create or modify.
6. Sensitive files must be detected before inclusion in AI context.
7. Repository mutation should be later than artifact export unless the ADR approves otherwise.

Repository operations should be classified:

1. Export local bundle.
2. Read repository metadata.
3. Read selected repository files.
4. Scan repository structure.
5. Propose file changes.
6. Create branch.
7. Open pull request.
8. Write files.
9. Merge pull request.
10. Deploy.

For MVP, only the first four are safe defaults. File writes and PRs should require explicit design and approval.

---

## 15. Verification Boundary

Verification must be a first-class architecture boundary.

The system should distinguish:

1. Verification definition.
2. Verification guidance.
3. Verification execution.
4. Verification evidence.
5. Verification reporting.

MVP should support verification definition, guidance, evidence entry, and reporting.

MVP does not need hosted execution.

Verification sources may include:

1. User-entered command results.
2. Local command guidance.
3. CI status later.
4. Repository contract checks later.
5. Documentation checks.
6. Manual acceptance checks.
7. Security scan results later.

The Verification component must support both automated and manual verification because not all early checks can be executed by the product.

---

## 16. Security Architecture

## 16.1 Security Principles

The system must follow these principles:

1. No silent repository mutation.
2. Least-privilege repository access.
3. Human approval for sensitive operations.
4. Secrets redaction before AI context use.
5. Provider transparency.
6. Audit important actions.
7. Export without lock-in.
8. Clear permission boundaries.
9. Safe failure behavior.
10. Explicit data deletion and retention behavior.

## 16.2 Sensitive Data Handling

Sensitive data includes:

1. API keys.
2. Access tokens.
3. Private keys.
4. Passwords.
5. `.env` files.
6. Credentials.
7. Customer secrets.
8. Private repository content.
9. Billing data.
10. Authentication data.

The system must not casually include sensitive data in AI prompts, exports, logs, or activity summaries.

## 16.3 Approval Gates

Approval gates are required for:

1. Accepting Product Charter as canonical.
2. Accepting SRS as canonical.
3. Accepting ADRs.
4. Introducing new dependencies.
5. Connecting repositories.
6. Sending repository content to AI providers.
7. Writing to repositories.
8. Marking work packets complete.
9. Exporting bundles that include sensitive data.
10. Changing project-level constraints.

## 16.4 Audit Events

The system should audit:

1. Project creation.
2. Artifact generation.
3. Artifact status changes.
4. ADR acceptance.
5. Work packet status changes.
6. Verification record creation.
7. Repository connection.
8. Export creation.
9. AI generation.
10. Approval decisions.

---

## 17. Deployment Architecture

The initial deployment architecture should be simple enough to implement and operate while preserving future growth.

Recommended MVP deployment shape:

```text
Browser
  |
  v
Web Application
  |
  v
Application API
  |
  |-- Database
  |-- Object/File Storage
  |-- Job Queue / Worker
  |-- AI Provider APIs
  |-- GitHub API
  |-- Billing Provider
```

MVP deployment principles:

1. Prefer a small number of deployable units.
2. Avoid microservices until justified.
3. Keep domain boundaries in code even if deployed as a modular monolith.
4. Use background workers for long-running AI generation, exports, and repository scans.
5. Keep integration credentials isolated.
6. Make local development reproducible.
7. Add observability from the beginning if practical.

Recommended deployable units for MVP:

1. Web/API application.
2. Worker process.
3. Database.
4. Optional object storage.
5. Optional queue.

A modular monolith is the preferred starting architecture unless an ADR determines otherwise.

---

## 18. Modular Monolith Recommendation

The recommended MVP implementation architecture is a **modular monolith**.

Reason:

1. The domain is complex, but the team/product is early.
2. Multiple services would create unnecessary operational overhead.
3. Strong internal boundaries can preserve architecture without distributed-system complexity.
4. Most product workflows require coordinated access to projects, artifacts, requirements, work packets, verification, and AI generation.
5. A modular monolith can later split into services if scale or team boundaries require it.

The modular monolith should still enforce boundaries between:

1. Project governance.
2. Artifacts.
3. Requirements.
4. ADRs.
5. Planning.
6. Work packets.
7. Verification.
8. AI orchestration.
9. Repository integration.
10. Security.
11. Billing.

This decision requires an ADR.

---

## 19. Architecture Flow: Product Idea to Work Packet

The core MVP flow:

```text
User enters product idea
        |
        v
Project Workspace created
        |
        v
Product Inception Brief generated
        |
        v
Product Charter generated and reviewed
        |
        v
Stakeholder and User Model generated
        |
        v
SRS generated
        |
        v
Architecture Overview generated
        |
        v
ADRs created and accepted
        |
        v
Domain Model generated
        |
        v
Epics, Backlog, Milestones generated
        |
        v
Work Packet created
        |
        v
Readiness checked
        |
        v
Implementation guidance generated
        |
        v
Verification recorded
        |
        v
Commit recommendation generated
        |
        v
Context/Handoff packet generated
```

This flow must remain visible in the product experience.

---

## 20. Architecture Flow: AI Generation

AI generation should follow a controlled path:

```text
User requests generation
        |
        v
System identifies source artifacts
        |
        v
Security/redaction check
        |
        v
Prompt/context assembly
        |
        v
AI provider request
        |
        v
Draft output returned
        |
        v
System validates structure
        |
        v
User reviews output
        |
        v
User accepts, edits, rejects, or leaves draft
        |
        v
Activity record stored
```

Important rules:

1. AI output is draft until accepted.
2. AI must not invent project facts where unknowns should be preserved.
3. AI generation must be source-grounded when possible.
4. Sensitive context must be excluded or redacted.
5. Provider usage must be transparent.

---

## 21. Architecture Flow: Work Packet Verification

Verification should follow this path:

```text
Work Packet created
        |
        v
Verification commands/checks defined
        |
        v
User performs checks locally or externally
        |
        v
Verification result recorded
        |
        v
Known limitations recorded
        |
        v
Work Packet marked verifying or complete
        |
        v
Completion record generated
```

MVP may rely on user-entered verification evidence. Future versions may ingest CI results or execute checks in controlled environments.

---

## 22. Architecture Flow: Export

Export should follow this path:

```text
User requests export
        |
        v
System selects artifacts
        |
        v
System validates metadata
        |
        v
Security check for sensitive content
        |
        v
Markdown files generated
        |
        v
Paths preserved
        |
        v
Bundle generated
        |
        v
Activity record stored
```

Export must never require proprietary software to interpret the core project artifacts.

---

## 23. Initial Repository File Map

The product should export artifacts into predictable paths.

Initial recommended paths:

```text
docs/
  product/
    00-product-inception-brief.md
    01-product-charter.md
    02-stakeholder-and-user-model.md
    03-software-requirements-specification.md
  architecture/
    00-architecture-overview.md
  adr/
    README.md
    ADR-0001-*.md
  domain/
    00-domain-model.md
  planning/
    00-epics.md
    01-requirements.md
    02-backlog.md
    03-milestone-plan.md
  work-packets/
    README.md
    WP-0001-*.md
  verification/
    00-verification-strategy.md
    records/
  ai/
    current-state.md
    context-pack.md
    handoff-packet.md
```

This map is preliminary and must be refined before implementation.

---

## 24. Architecture Decisions Required Before Implementation

The following ADRs are required before writing product implementation code.

## ADR-0001: Product Delivery Surface

Decision needed:

Should the first implementation be SaaS-first, CLI-first, repository-template-first, or hybrid?

Recommended decision:

SaaS-first control plane with repository-ready Markdown export and future CLI companion.

## ADR-0002: Modular Monolith Versus Service-Oriented Architecture

Decision needed:

Should MVP begin as a modular monolith or multiple services?

Recommended decision:

Start with a modular monolith and explicit internal domain boundaries.

## ADR-0003: Repository as Durable Source of Truth

Decision needed:

How strongly should the repository be treated as canonical relative to SaaS database state?

Recommended decision:

The SaaS stores structured operational state, but durable artifacts must be exportable and repository-ready.

## ADR-0004: Artifact Format and Metadata

Decision needed:

What format should durable artifacts use?

Recommended decision:

Markdown with YAML frontmatter as first-class export format, with structured internal representation where needed.

## ADR-0005: AI Provider Abstraction

Decision needed:

Should the system bind to one AI provider or use an abstraction?

Recommended decision:

Use provider abstraction from the beginning.

## ADR-0006: GitHub Integration Strategy

Decision needed:

How should repository integration begin?

Recommended decision:

GitHub-first, least-privilege, read/export before write, no silent mutation.

## ADR-0007: Secrets Detection and Redaction Boundary

Decision needed:

How should sensitive files and secrets be handled?

Recommended decision:

Redact secrets before AI context, warn on sensitive files, and require explicit approval for sensitive exports.

## ADR-0008: Work Packet Execution Model

Decision needed:

What is the canonical unit of controlled implementation?

Recommended decision:

Work packet is the atomic execution unit.

## ADR-0009: Verification Model

Decision needed:

Should verification be guided, executed, or ingested in MVP?

Recommended decision:

MVP supports guided verification and evidence recording; hosted execution and CI ingestion come later.

## ADR-0010: Initial Persistence Strategy

Decision needed:

What storage architecture should support projects, artifacts, requirements, work packets, verification, and traceability?

Recommended decision:

Use relational persistence for core structured entities, with exportable Markdown artifacts.

## ADR-0011: Authentication and Account Model

Decision needed:

What is the initial auth/account model for SaaS MVP?

Recommended decision:

Basic user/account/project ownership model first; teams and enterprise identity later.

## ADR-0012: Billing Readiness

Decision needed:

Should billing be implemented in MVP or merely designed for?

Recommended decision:

Represent plan/usage concepts early; defer full paid billing integration until commercial launch milestone unless needed sooner.

---

## 25. Architecture Risks

## 25.1 Risk: Overbuilding the Platform Too Early

The system could become too large before the core workflow is validated.

Mitigation:

1. Start with modular monolith.
2. Build the core governed SDLC loop first.
3. Defer enterprise controls.
4. Defer hosted execution.
5. Defer advanced integrations.

## 25.2 Risk: Documentation Becomes Detached From Structured Data

Markdown exports may drift from internal data if not carefully designed.

Mitigation:

1. Define artifact ownership clearly.
2. Decide source of truth per artifact type.
3. Preserve stable IDs.
4. Generate exports consistently.
5. Track versions and status.

## 25.3 Risk: AI Outputs Become Trusted Too Quickly

Users may accept generated artifacts without review.

Mitigation:

1. Make generated content reviewable.
2. Mark outputs as draft/proposed.
3. Require approval for canonical state.
4. Preserve assumptions and unknowns.

## 25.4 Risk: GitHub Integration Introduces Security Complexity

Repository access can become a high-trust boundary.

Mitigation:

1. Use least privilege.
2. Start read/export first.
3. Avoid silent mutation.
4. Add secrets scanning.
5. Require approval for writes.

## 25.5 Risk: Product Feels Too Bureaucratic

The architecture may expose too much process to users.

Mitigation:

1. Use next-step guidance.
2. Use progressive disclosure.
3. Hide optional depth until needed.
4. Keep first-run experience lightweight.
5. Use templates.

## 25.6 Risk: Traceability Becomes Too Complex

Traceability can become heavy if modeled too granularly too early.

Mitigation:

1. Start with simple traceability links.
2. Link artifacts at the requirement, epic, work packet, and verification level.
3. Add file-level and commit-level traceability incrementally.

## 25.7 Risk: Verification Is Claimed but Not Real

If verification is only text, users may lose trust.

Mitigation:

1. Clearly distinguish guided verification from executed verification.
2. Record evidence.
3. Add repository contract checks early.
4. Add CI integration later.
5. Avoid overstating verification guarantees.

---

## 26. Architecture Constraints

The following constraints are binding unless changed by ADR.

1. No silent repository mutation.
2. No AI output becomes canonical without human approval.
3. Durable artifacts must be exportable.
4. Markdown must be first-class for durable documents.
5. Structured metadata must be preserved.
6. Work packets are the unit of controlled implementation.
7. Verification must be attached to work packets.
8. ADRs must capture material architecture decisions.
9. Repository integration must be least-privilege.
10. Secrets must be redacted before AI context use.
11. AI provider integration must be abstracted.
12. MVP must avoid enterprise-first complexity.
13. Modular monolith is preferred unless ADR says otherwise.
14. Hosted code execution is out of scope for MVP.
15. GitHub write operations require explicit approval.

---

## 27. Architecture Acceptance Criteria

This Architecture Overview is complete for the current phase when:

1. System context is defined.
2. Product surfaces are defined.
3. Major logical components are identified.
4. Domain boundaries are identified.
5. Data ownership rules are identified.
6. AI provider boundary is identified.
7. Repository boundary is identified.
8. Verification boundary is identified.
9. Security boundaries are identified.
10. Deployment posture is recommended.
11. Initial architecture risks are documented.
12. Required ADRs are identified.
13. The next artifact is clear.

---

## 28. Next Artifact

The next artifact should be:

```text
docs/adr/README.md
```

The ADR index should define:

1. ADR purpose.
2. ADR numbering convention.
3. ADR status values.
4. ADR required fields.
5. ADR review rules.
6. ADR relationship to architecture and implementation.
7. Initial ADR list.
8. ADR template reference.

After the ADR index, create:

```text
docs/adr/ADR-TEMPLATE.md
```

Then begin with:

```text
docs/adr/ADR-0001-product-delivery-surface.md
```

ADR-0001 should decide whether the MVP begins as SaaS-first, CLI-first, repository-template-first, or hybrid.
````

## Action required on your end

Create the file:

```bash
mkdir -p docs/architecture
nano docs/architecture/00-architecture-overview.md
```

Paste the full contents above.

## Verification command

From the repository root, run:

```bash
test -f docs/architecture/00-architecture-overview.md && \
grep -q '^title: "Architecture Overview"$' docs/architecture/00-architecture-overview.md && \
grep -q '^# Architecture Overview$' docs/architecture/00-architecture-overview.md && \
grep -q 'ADR-0001: Product Delivery Surface' docs/architecture/00-architecture-overview.md && \
grep -q 'docs/adr/README.md' docs/architecture/00-architecture-overview.md && \
git diff --check
```

Expected result: the command exits successfully and `git diff --check` reports no whitespace errors.

## Recommended atomic commit

After verification passes:

```bash
git add docs/architecture/00-architecture-overview.md
git commit -m "docs(architecture): add architecture overview"
```

## Next logical step

Next we create:

```text
docs/adr/README.md
```

Then:

```text
docs/adr/ADR-TEMPLATE.md
```

Then:

```text
docs/adr/ADR-0001-product-delivery-surface.md
```
