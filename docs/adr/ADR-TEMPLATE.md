
---
title: "ADR-0000: Decision Title"
description: "Short description of the architectural, product, security, workflow, integration, or operational decision being recorded."
file: docs/adr/ADR-TEMPLATE.md
status: "proposed"
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

# ADR-0000: Decision Title

## 1. Status

Proposed.

Allowed status values:

1. `draft`
2. `proposed`
3. `accepted`
4. `superseded`
5. `deprecated`
6. `rejected`

This ADR becomes binding only when:

1. `status` is set to `accepted`.
2. `canonical` is set to `true`.
3. `decision_date` is filled in.
4. The Project Steward has reviewed and accepted the decision.

---

## 2. Decision

State the decision clearly and directly.

Use this form:

> We will [chosen decision] because [short rationale].

Example:

> We will use a SaaS-first web control plane with repository-ready Markdown export because the MVP needs guided onboarding, artifact review, project state, and future commercial/team readiness while preserving user trust through portable artifacts.

---

## 3. Context

Explain the situation that made this decision necessary.

Include:

1. Product context.
2. Architecture context.
3. User needs.
4. Constraints.
5. Existing documents that inform the decision.
6. Timing or sequencing concerns.

This section should answer:

> Why does this decision need to be made now?

---

## 4. Problem

State the specific problem this ADR resolves.

A good problem statement should make the decision boundary clear.

Example:

> The product needs an initial delivery surface. We must decide whether the first implementation should be SaaS-first, CLI-first, repository-template-first, or hybrid before we can define the implementation architecture, persistence model, authentication model, repository integration strategy, and MVP roadmap.

---

## 5. Decision Drivers

List the forces that influenced the decision.

Common decision drivers:

1. Product mission alignment.
2. MVP delivery speed.
3. User trust.
4. Architectural integrity.
5. Maintainability.
6. Security.
7. Verification path.
8. Exportability.
9. Repository-centered truth.
10. Future extensibility.
11. Operational simplicity.
12. Commercial readiness.
13. Avoidance of premature enterprise complexity.

Use only the drivers relevant to the decision.

---

## 6. Options Considered

List meaningful options considered.

Each option should include strengths, weaknesses, and when it would be best.

### Option A: Name

Strengths:

1. Strength 1.
2. Strength 2.
3. Strength 3.

Weaknesses:

1. Weakness 1.
2. Weakness 2.
3. Weakness 3.

Best when:

1. Condition 1.
2. Condition 2.

### Option B: Name

Strengths:

1. Strength 1.
2. Strength 2.
3. Strength 3.

Weaknesses:

1. Weakness 1.
2. Weakness 2.
3. Weakness 3.

Best when:

1. Condition 1.
2. Condition 2.

### Option C: Name

Strengths:

1. Strength 1.
2. Strength 2.
3. Strength 3.

Weaknesses:

1. Weakness 1.
2. Weakness 2.
3. Weakness 3.

Best when:

1. Condition 1.
2. Condition 2.

---

## 7. Chosen Option

State the chosen option.

Use this form:

> Chosen option: [Option name].

Then summarize the decision in one paragraph.

---

## 8. Rationale

Explain why the chosen option is preferred.

A strong rationale should cover:

1. Why this best supports the product mission.
2. Why this best fits the MVP.
3. Why this avoids unnecessary complexity.
4. Why this preserves future optionality.
5. Why this is safer or more maintainable than alternatives.
6. Why this can be verified.

---

## 9. Consequences

Document the consequences honestly.

### Positive Consequences

1. Positive consequence 1.
2. Positive consequence 2.
3. Positive consequence 3.

### Negative Consequences

1. Negative consequence 1.
2. Negative consequence 2.
3. Negative consequence 3.

### Neutral Consequences

1. Neutral consequence 1.
2. Neutral consequence 2.

---

## 10. Security Impact

Describe how this decision affects security.

Consider:

1. Authentication.
2. Authorization.
3. Secrets.
4. Repository access.
5. AI provider exposure.
6. Data retention.
7. Auditability.
8. Human approval gates.
9. Sensitive operations.
10. Threat surface.

Use this structure:

```text
Security impact: Low / Medium / High

Security notes:
- ...
- ...
- ...
````

---

## 11. Privacy and Data Impact

Describe how this decision affects user data, project data, repository content, AI context, and exports.

Consider:

1. What data is stored.
2. What data is exported.
3. What data may be sent to AI providers.
4. What data must be redacted.
5. Whether users can delete or export the data.
6. Whether the decision increases vendor lock-in.

---

## 12. Verification Impact

Describe how this decision will be verified.

Examples:

1. Documentation checks.
2. Unit tests.
3. Integration tests.
4. Contract tests.
5. Repository contract checks.
6. Security tests.
7. Manual acceptance checks.
8. CI checks.
9. Export validation.
10. Architecture review.

Use this structure:

```text
Verification approach:
- ...

Required checks:
- ...

Manual acceptance:
- ...
```

---

## 13. Implementation Impact

Describe how this decision affects implementation.

Include:

1. Components affected.
2. Data model implications.
3. API implications.
4. UI implications.
5. Repository structure implications.
6. Integration implications.
7. Testing implications.
8. Documentation implications.
9. Migration implications.

---

## 14. Operational Impact

Describe how this decision affects operations.

Consider:

1. Local development.
2. Deployment.
3. CI/CD.
4. Observability.
5. Background jobs.
6. Support burden.
7. Failure modes.
8. Rollback.
9. Maintenance.

---

## 15. AI Behavior Impact

Describe how future AI sessions and AI-generated recommendations must behave because of this decision.

Include:

1. What AI must respect.
2. What AI must not recommend without a superseding ADR.
3. What assumptions AI may make.
4. What conflicts AI must surface.
5. How this decision affects context packs and handoff.

Example:

> Future AI sessions must treat this ADR as binding once accepted. Recommendations that conflict with this decision must be surfaced as conflicts and must not be implemented without a superseding ADR.

---

## 16. Migration or Reversal Plan

Explain how the decision could be changed later.

Include:

1. What would trigger reconsideration.
2. How reversal would happen.
3. What data or code would need migration.
4. What documentation would need updating.
5. What risks reversal would create.

If reversal is difficult, say so plainly.

---

## 17. Follow-up Work

List follow-up tasks, documents, work packets, or ADRs.

Use this format:

```text
- [ ] Follow-up item 1
- [ ] Follow-up item 2
- [ ] Follow-up item 3
```

---

## 18. Related Documents

List related documents.

Examples:

1. `docs/product/00-product-inception-brief.md`
2. `docs/product/01-product-charter.md`
3. `docs/product/02-stakeholder-and-user-model.md`
4. `docs/product/03-software-requirements-specification.md`
5. `docs/architecture/00-architecture-overview.md`
6. `docs/adr/README.md`

---

## 19. Related Requirements

List related requirement IDs.

Examples:

1. `FR-001`
2. `FR-024`
3. `SEC-001`
4. `AI-003`
5. `VER-002`

Use `None yet` if no requirement IDs exist yet.

---

## 20. Related Work Packets

List related work packets.

Examples:

1. `WP-0001`
2. `WP-0002`

Use `None yet` if no work packets exist yet.

---

## 21. Acceptance Criteria

This ADR is ready for acceptance when:

1. The decision is stated clearly.
2. Context is documented.
3. The problem is documented.
4. Decision drivers are documented.
5. Options are compared.
6. The chosen option is explicit.
7. Rationale is documented.
8. Consequences are documented.
9. Security impact is documented.
10. Privacy and data impact are documented.
11. Verification impact is documented.
12. Implementation impact is documented.
13. Operational impact is documented.
14. AI behavior impact is documented.
15. Reversal or migration path is documented.
16. Follow-up work is documented.
17. Related documents are listed.
18. The Project Steward has reviewed the ADR.

````

## Action required on your end

Create the file:

```bash
mkdir -p docs/adr
nano docs/adr/ADR-TEMPLATE.md
````

Paste the full contents above.

## Verification command

From the repository root, run:

```bash
test -f docs/adr/ADR-TEMPLATE.md && \
grep -q '^title: "ADR-0000: Decision Title"$' docs/adr/ADR-TEMPLATE.md && \
grep -q '^# ADR-0000: Decision Title$' docs/adr/ADR-TEMPLATE.md && \
grep -q '## 12. Verification Impact' docs/adr/ADR-TEMPLATE.md && \
grep -q '## 15. AI Behavior Impact' docs/adr/ADR-TEMPLATE.md && \
git diff --check
```

Expected result: the command exits successfully and `git diff --check` reports no whitespace errors.

## Recommended atomic commit

After verification passes:

```bash
git add docs/adr/ADR-TEMPLATE.md
git commit -m "docs(adr): add architecture decision record template"
```