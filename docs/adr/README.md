---
title: "Architecture Decision Record Index"
description: "Index and operating rules for Architecture Decision Records in the Agentic Software Framework, including purpose, numbering, statuses, required fields, review rules, acceptance rules, and initial ADR sequence."
file: docs/adr/README.md
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
document_type: "adr-index"
canonical: false
related_documents:
  - "docs/product/00-product-inception-brief.md"
  - "docs/product/01-product-charter.md"
  - "docs/product/02-stakeholder-and-user-model.md"
  - "docs/product/03-software-requirements-specification.md"
  - "docs/architecture/00-architecture-overview.md"
  - "docs/adr/ADR-TEMPLATE.md"
---

# Architecture Decision Record Index

## 1. Purpose

This document is the Architecture Decision Record index for the **Agentic Software Framework**.

Architecture Decision Records exist to preserve the reasoning behind important product, architecture, technical, security, operational, repository, AI-provider, and workflow decisions.

The Agentic Software Framework depends on explicit decisions because the product itself is designed to prevent AI-assisted software development from becoming ad hoc, undocumented, unverifiable, or architecturally inconsistent.

This ADR system ensures that material decisions are:

1. Visible.
2. Numbered.
3. Reviewable.
4. Traceable.
5. Version-controlled.
6. Human-approved.
7. Connected to requirements and implementation.
8. Available to future humans and future AI sessions.

---

## 2. Why ADRs Matter for This Product

The Agentic Software Framework is not a simple application. It is a governed AI-native SDLC control plane.

The product will make or enforce decisions about:

1. Product delivery surface.
2. Application architecture.
3. Repository truth model.
4. Artifact formats.
5. AI provider boundaries.
6. Repository integration behavior.
7. Secrets detection and redaction.
8. Work packet execution.
9. Verification model.
10. Persistence strategy.
11. Authentication and account ownership.
12. Billing readiness.
13. Export behavior.
14. Human approval gates.
15. Future team and enterprise expansion.

Without ADRs, these decisions would drift into chat history, implementation assumptions, or hidden code behavior.

That is unacceptable for this product.

---

## 3. ADR Definition

An Architecture Decision Record is a durable document that records one material decision.

An ADR should explain:

1. The decision being made.
2. The context that made the decision necessary.
3. The options considered.
4. The chosen option.
5. The rationale.
6. The consequences.
7. The verification impact.
8. The implementation impact.
9. The follow-up work required.

An ADR does not need to be long, but it must be explicit.

---

## 4. What Requires an ADR

An ADR is required when a decision materially affects:

1. System architecture.
2. Product delivery model.
3. Repository structure.
4. Data model.
5. Persistence strategy.
6. Authentication or authorization.
7. Security posture.
8. AI provider integration.
9. Repository integration.
10. Verification model.
11. Deployment model.
12. Billing model.
13. Major dependency choice.
14. Source-of-truth rules.
15. Workflow governance.
16. Work packet execution.
17. Public API or integration contracts.
18. Future maintainability.

If changing the decision later would be expensive, risky, confusing, security-sensitive, or architecture-shaping, it needs an ADR.

---

## 5. What Does Not Require an ADR

An ADR is usually not required for:

1. Typo fixes.
2. Small documentation edits.
3. Minor copy changes.
4. Non-architectural refactors.
5. Routine test additions.
6. Small internal implementation details.
7. Formatting-only changes.
8. Non-material file moves.
9. Temporary implementation notes already captured in work packets.

When uncertain, prefer creating an ADR if the decision could affect future architecture, security, integration, or workflow.

---

## 6. ADR Numbering Convention

ADR files must use the following naming format:

```text
ADR-0001-short-kebab-case-title.md
ADR-0002-short-kebab-case-title.md
ADR-0003-short-kebab-case-title.md
````

Rules:

1. ADR numbers are sequential.
2. ADR numbers are never reused.
3. Superseded ADRs keep their original numbers.
4. New decisions that replace old decisions get new ADR numbers.
5. File names must be lowercase kebab-case after the ADR number.
6. The ADR number must match the title and frontmatter.

Example:

```text
docs/adr/ADR-0001-product-delivery-surface.md
```

---

## 7. ADR Status Values

ADR status must be one of:

1. `draft`
2. `proposed`
3. `accepted`
4. `superseded`
5. `deprecated`
6. `rejected`

## 7.1 Draft

The ADR is being shaped and is not ready for decision.

## 7.2 Proposed

The ADR is complete enough for review, but the decision is not yet binding.

## 7.3 Accepted

The ADR is binding and must constrain future product, architecture, and implementation work.

## 7.4 Superseded

The ADR was once accepted but has been replaced by a later ADR.

## 7.5 Deprecated

The ADR is no longer recommended or relevant, but it has not necessarily been replaced by a direct successor.

## 7.6 Rejected

The ADR records an option that was considered and intentionally not chosen.

---

## 8. Canonical ADR Rule

An ADR becomes canonical only when:

1. Its status is `accepted`.
2. Its frontmatter has `canonical: true`.
3. It records a clear decision.
4. It identifies consequences.
5. It identifies verification impact.
6. It has been reviewed by the Project Steward.
7. Any superseded decision is explicitly linked.

AI-generated ADRs must begin as `draft` or `proposed`.

No AI-generated ADR is canonical merely because it exists.

---

## 9. Required ADR Frontmatter

Every ADR must include YAML frontmatter.

Minimum required frontmatter:

```yaml
---
title: ""
description: ""
status: "proposed"
version: "0.1.0"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "engineering"
document_type: "architecture-decision-record"
canonical: false
adr_number: "ADR-0000"
decision_date: ""
supersedes: ""
superseded_by: ""
related_documents: []
related_requirements: []
related_work_packets: []
---
```

Additional fields may be added when useful.

---

## 10. Required ADR Sections

Every ADR should include these sections:

1. Title.
2. Status.
3. Decision.
4. Context.
5. Problem.
6. Decision Drivers.
7. Options Considered.
8. Chosen Option.
9. Rationale.
10. Consequences.
11. Security Impact.
12. Verification Impact.
13. Implementation Impact.
14. Migration or Reversal Plan.
15. Follow-up Work.
16. Related Documents.
17. Acceptance Criteria.

For small decisions, sections may be concise, but they should not be omitted without reason.

---

## 11. ADR Review Rules

Before an ADR is accepted, review it against these questions:

1. Does the decision advance the product mission?
2. Does it preserve architectural integrity?
3. Does it reduce ambiguity?
4. Does it improve traceability?
5. Does it preserve exportability where relevant?
6. Does it respect security and trust constraints?
7. Does it avoid unnecessary complexity?
8. Does it avoid premature enterprise overbuild?
9. Does it have a verification path?
10. Does it identify consequences honestly?
11. Does it avoid hidden vendor lock-in?
12. Does it keep human approval where needed?
13. Does it preserve future optionality where practical?

---

## 12. ADR Acceptance Rules

An ADR may be accepted only when:

1. The decision is clear.
2. The chosen option is explicit.
3. The alternatives are listed.
4. The rationale is documented.
5. Consequences are documented.
6. Security impact is documented.
7. Verification impact is documented.
8. Implementation impact is documented.
9. Follow-up work is documented.
10. The Project Steward has reviewed it.

Acceptance should be represented by:

```yaml
status: "accepted"
canonical: true
decision_date: "YYYY-MM-DD"
```

Until then, ADRs remain proposed.

---

## 13. ADR and Implementation Relationship

Accepted ADRs constrain implementation.

Implementation work must not contradict accepted ADRs without one of the following:

1. A new ADR superseding the prior decision.
2. A documented exception approved by the Project Steward.
3. A temporary implementation note with a clear rollback or correction path.

Work packets must reference relevant ADRs when they implement or depend on architecture decisions.

---

## 14. ADR and Work Packet Relationship

Work packets should reference ADRs when they:

1. Implement an architectural decision.
2. Depend on an architectural decision.
3. Change a major system boundary.
4. Add a dependency.
5. Add an integration.
6. Affect security posture.
7. Affect data ownership.
8. Affect repository behavior.
9. Affect verification behavior.

A work packet that conflicts with an accepted ADR is not ready.

---

## 15. ADR and Verification Relationship

Every ADR should explain how the decision affects verification.

Examples:

1. A persistence ADR should affect database tests and migration checks.
2. A repository integration ADR should affect permission tests and security checks.
3. A verification model ADR should affect work packet completion rules.
4. An artifact format ADR should affect export and documentation checks.
5. An AI provider ADR should affect redaction, provider metadata, and generation records.

If a decision cannot be verified directly, the ADR should explain how conformance will be inspected or reviewed.

---

## 16. ADR and AI Behavior Relationship

Future AI sessions must respect accepted ADRs.

AI-generated recommendations must not casually override accepted decisions.

When an AI recommendation conflicts with an accepted ADR, the correct behavior is:

1. Surface the conflict.
2. Explain the issue.
3. Recommend whether a new ADR is needed.
4. Avoid implementing the conflicting change until the decision is resolved.

This rule is central to preventing architectural drift.

---

## 17. Initial ADR Sequence

The initial ADR sequence is derived from the Product Charter, SRS, Architecture Overview, and resolved SRS open questions.

### ADR-0001: Product Delivery Surface

File:

```text
docs/adr/ADR-0001-product-delivery-surface.md
```

Decision:

Should the first implementation be SaaS-first, CLI-first, repository-template-first, or hybrid?

Recommended direction:

SaaS-first web control plane with repository-ready Markdown export and future CLI companion.

### ADR-0002: Modular Monolith Architecture

File:

```text
docs/adr/ADR-0002-modular-monolith-architecture.md
```

Decision:

Should the MVP begin as a modular monolith or multiple services?

Recommended direction:

Start with a modular monolith and explicit internal domain boundaries.

### ADR-0003: Repository as Durable Source of Truth

File:

```text
docs/adr/ADR-0003-repository-as-durable-source-of-truth.md
```

Decision:

How strongly should the repository be treated as canonical relative to SaaS database state?

Recommended direction:

The SaaS stores structured operational state, but durable artifacts must be exportable and repository-ready.

### ADR-0004: Artifact Format and Metadata

File:

```text
docs/adr/ADR-0004-artifact-format-and-metadata.md
```

Decision:

What format should durable artifacts use?

Recommended direction:

Markdown with YAML frontmatter as first-class export format, with structured internal representation where needed.

### ADR-0005: AI Provider Abstraction

File:

```text
docs/adr/ADR-0005-ai-provider-abstraction.md
```

Decision:

Should the system bind to one AI provider or use an abstraction?

Recommended direction:

Use provider abstraction from the beginning.

### ADR-0006: GitHub Integration Strategy

File:

```text
docs/adr/ADR-0006-github-integration-strategy.md
```

Decision:

How should repository integration begin?

Recommended direction:

GitHub-first, least-privilege, read/export before write, no silent mutation.

### ADR-0007: Secrets Detection and Redaction Boundary

File:

```text
docs/adr/ADR-0007-secrets-detection-and-redaction-boundary.md
```

Decision:

How should sensitive files and secrets be handled?

Recommended direction:

Use path denylist, pattern detection, redaction before AI context, warnings on sensitive files, and explicit approval for sensitive export.

### ADR-0008: Work Packet Execution Model

File:

```text
docs/adr/ADR-0008-work-packet-execution-model.md
```

Decision:

What is the canonical unit of controlled implementation?

Recommended direction:

Work packet is the atomic execution unit.

### ADR-0009: Verification Model

File:

```text
docs/adr/ADR-0009-verification-model.md
```

Decision:

Should verification be guided, executed, or ingested in MVP?

Recommended direction:

MVP supports guided verification and evidence recording; hosted execution and CI ingestion come later.

### ADR-0010: Initial Persistence Strategy

File:

```text
docs/adr/ADR-0010-initial-persistence-strategy.md
```

Decision:

What storage architecture should support projects, artifacts, requirements, work packets, verification, and traceability?

Recommended direction:

Use relational persistence for core structured entities, with exportable Markdown artifacts.

### ADR-0011: Authentication and Account Model

File:

```text
docs/adr/ADR-0011-authentication-and-account-model.md
```

Decision:

What is the initial authentication and account ownership model for SaaS MVP?

Recommended direction:

Basic user, account, workspace, and project ownership model first; teams and enterprise identity later.

### ADR-0012: Billing Readiness

File:

```text
docs/adr/ADR-0012-billing-readiness.md
```

Decision:

Should billing be implemented in MVP or merely designed for?

Recommended direction:

Represent plan and usage concepts early; defer full paid billing integration until paid beta or launch milestone unless needed sooner.

---

## 18. ADR Index Table

| ADR      | Title                                    | Status  | File                                                            |
| -------- | ---------------------------------------- | ------- | --------------------------------------------------------------- |
| ADR-0001 | Product Delivery Surface                 | Planned | `docs/adr/ADR-0001-product-delivery-surface.md`                 |
| ADR-0002 | Modular Monolith Architecture            | Planned | `docs/adr/ADR-0002-modular-monolith-architecture.md`            |
| ADR-0003 | Repository as Durable Source of Truth    | Planned | `docs/adr/ADR-0003-repository-as-durable-source-of-truth.md`    |
| ADR-0004 | Artifact Format and Metadata             | Planned | `docs/adr/ADR-0004-artifact-format-and-metadata.md`             |
| ADR-0005 | AI Provider Abstraction                  | Planned | `docs/adr/ADR-0005-ai-provider-abstraction.md`                  |
| ADR-0006 | GitHub Integration Strategy              | Planned | `docs/adr/ADR-0006-github-integration-strategy.md`              |
| ADR-0007 | Secrets Detection and Redaction Boundary | Planned | `docs/adr/ADR-0007-secrets-detection-and-redaction-boundary.md` |
| ADR-0008 | Work Packet Execution Model              | Planned | `docs/adr/ADR-0008-work-packet-execution-model.md`              |
| ADR-0009 | Verification Model                       | Planned | `docs/adr/ADR-0009-verification-model.md`                       |
| ADR-0010 | Initial Persistence Strategy             | Planned | `docs/adr/ADR-0010-initial-persistence-strategy.md`             |
| ADR-0011 | Authentication and Account Model         | Planned | `docs/adr/ADR-0011-authentication-and-account-model.md`         |
| ADR-0012 | Billing Readiness                        | Planned | `docs/adr/ADR-0012-billing-readiness.md`                        |

---

## 19. Updating This Index

This index must be updated when:

1. A new ADR is added.
2. An ADR changes status.
3. An ADR is superseded.
4. An ADR is deprecated.
5. A planned ADR is renamed.
6. A new ADR category becomes necessary.
7. ADR conventions change.

Index updates should be committed with the ADR they describe unless the index update is itself a separate governance change.

---

## 20. ADR Acceptance Criteria

The ADR system is ready when:

1. This index exists.
2. The ADR template exists.
3. ADR numbering rules are documented.
4. ADR statuses are documented.
5. ADR acceptance rules are documented.
6. The initial ADR sequence is documented.
7. ADRs can be linked to requirements, architecture, work packets, and verification.
8. Future AI sessions know that accepted ADRs constrain future implementation.

---

## 21. Next Artifact

The next artifact should be:

```text
docs/adr/ADR-TEMPLATE.md
```

After the template is created, the next ADR should be:

```text
docs/adr/ADR-0001-product-delivery-surface.md
```

ADR-0001 should decide whether the MVP begins as SaaS-first, CLI-first, repository-template-first, or hybrid.

````

## Action required on your end

Create the file:

```bash
mkdir -p docs/adr
nano docs/adr/README.md
````

Paste the full contents above.

## Verification command

From the repository root, run:

```bash
test -f docs/adr/README.md && \
grep -q '^title: "Architecture Decision Record Index"$' docs/adr/README.md && \
grep -q '^# Architecture Decision Record Index$' docs/adr/README.md && \
grep -q 'ADR-0001-product-delivery-surface.md' docs/adr/README.md && \
grep -q 'ADR-TEMPLATE.md' docs/adr/README.md && \
git diff --check
```

Expected result: the command exits successfully and `git diff --check` reports no whitespace errors.

## Recommended atomic commit

After verification passes:

```bash
git add docs/adr/README.md
git commit -m "docs(adr): add architecture decision record index"
```
