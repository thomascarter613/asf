---
title: "ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact"
description: "Accepts Architecture Decision Records as mandatory, repository-native, reviewable engineering artifacts for all significant system decisions."
status: "accepted"
version: "0.1.0"
created: "2026-04-30"
updated: "2026-04-30"
owner: "project-owner"
canonical: true
adr: "ADR-0001"
decision_date: "2026-04-30"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - governance
  - documentation
  - decision-records
---

# ADR-0001: Adopt Architecture Decision Records as a First-Class Engineering Artifact

## 1. Status

Accepted.

## 2. Context

The Agentic Software Foundry is intended to be a serious, long-lived, governance-grade software engineering system.

It will contain many consequential architectural decisions across repository topology, access control, language strategy, model serving, data pipelines, safety systems, memory systems, tool orchestration, frontend product architecture, storage, security, observability, evaluations, SDKs, developer experience, and operational infrastructure.

Many of these decisions will affect:

1. system boundaries;
2. repository structure;
3. implementation sequencing;
4. runtime safety;
5. compliance posture;
6. developer workflow;
7. operational reliability;
8. long-term maintainability;
9. future extensibility;
10. cost and complexity.

The project is also being developed with AI assistance.

That makes durable decision capture more important, not less important.

Without explicit decision records, the project risks accumulating undocumented assumptions, forgotten trade-offs, repeated debates, conflicting implementation patterns, stale architectural claims, and tool-generated drift.

A chat transcript is not a sufficient architecture record.

A README is not a sufficient decision log.

Code alone does not explain why a path was chosen over its alternatives.

The repository needs a durable, reviewable, version-controlled mechanism for recording meaningful architectural decisions in the same place where the project is implemented.

## 3. Decision

The project will adopt Architecture Decision Records, abbreviated as ADRs, as first-class engineering artifacts.

Every meaningful architectural, operational, security, data, infrastructure, product, tooling, or governance decision must be captured in an ADR when the decision has durable consequences for the system.

ADRs will live in:

```text
docs/adr/
````

The ADR catalogue will be maintained in:

```text
docs/adr/index.md
```

Each ADR must be committed to the repository and treated as part of the project’s canonical architecture record.

ADRs are not optional commentary.

They are governing technical artifacts.

## 4. Scope of ADR Requirement

An ADR is required when a decision affects one or more of the following:

1. repository topology;
2. service boundaries;
3. language or framework selection;
4. package manager selection;
5. runtime architecture;
6. model serving architecture;
7. training infrastructure;
8. data pipeline architecture;
9. safety and policy systems;
10. authentication or authorization;
11. storage technology;
12. network or infrastructure topology;
13. deployment model;
14. observability architecture;
15. evaluation methodology;
16. SDK generation and release strategy;
17. public API behavior;
18. internal API schema strategy;
19. security posture;
20. compliance posture;
21. developer workflow;
22. CI/CD gating;
23. secret handling;
24. environment configuration;
25. dependency management;
26. build artifact strategy;
27. production reliability;
28. memory architecture;
29. tool orchestration;
30. any decision likely to be expensive to reverse.

Minor implementation details do not require an ADR unless they establish a reusable precedent or constrain future work.

## 5. ADR Format

Each ADR must include, at minimum:

1. YAML frontmatter;
2. title;
3. status;
4. context;
5. decision;
6. rationale;
7. alternatives considered;
8. consequences;
9. implementation implications;
10. verification expectations;
11. lifecycle notes.

The required frontmatter pattern is:

```yaml
---
title: "ADR-0001: Example Decision"
description: "Short description of the decision."
status: "accepted"
version: "0.1.0"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
owner: "project-owner"
canonical: true
adr: "ADR-0001"
decision_date: "YYYY-MM-DD"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
---
```

ADRs may include additional sections when appropriate, especially for security-sensitive, safety-sensitive, compliance-sensitive, or high-cost decisions.

## 6. ADR Numbering

ADRs will use stable numeric identifiers.

The canonical identifier format is:

```text
ADR-NNNN
```

Examples:

```text
ADR-0001
ADR-0002
ADR-0101
ADR-1401
```

ADR numbers must not be reused for different decisions after publication.

If an ADR is superseded, the original ADR remains in place and is marked as superseded.

The replacing ADR references the older ADR in `supersedes`.

The older ADR references the replacing ADR in `superseded_by`.

Renumbering is allowed only during early catalogue reconciliation before the affected ADRs are treated as stable canonical records.

After the ADR catalogue is stabilized, renumbering should be avoided except through an explicit repository-maintenance decision.

## 7. ADR Status Values

The baseline ADR status values are:

```text
proposed
accepted
superseded
rejected
deprecated
```

Use:

```text
proposed
```

when an ADR is drafted but not yet accepted.

Use:

```text
accepted
```

when the decision is active and governing.

Use:

```text
superseded
```

when a newer ADR replaces the decision.

Use:

```text
rejected
```

when the ADR records a considered decision that was intentionally not adopted.

Use:

```text
deprecated
```

when the decision remains historically relevant but should not guide new implementation.

## 8. ADR Authority

Accepted ADRs are canonical project architecture unless they conflict with a higher-authority document.

The authority order is:

1. current explicit instruction from the human project owner;
2. project constitution;
3. clean-room and security policies;
4. accepted ADRs;
5. project manifest;
6. repository contracts;
7. implementation code;
8. active work packets;
9. handoff packets;
10. generated summaries.

If an accepted ADR conflicts with the project constitution or clean-room policy, the conflict must be resolved before implementation continues.

If implementation code conflicts with an accepted ADR, the conflict must be handled in one of these ways:

1. update the implementation to match the ADR;
2. write a new ADR that supersedes the old one;
3. explicitly document the implementation as non-compliant and block completion until resolved.

## 9. Rationale

ADRs are adopted because they provide a durable record of why the system is shaped the way it is.

The project needs ADRs because it is:

1. large enough to accumulate many architectural decisions;
2. long-lived enough for decision context to be forgotten;
3. AI-assisted enough to require explicit guardrails against drift;
4. governance-grade enough to require traceability;
5. multi-domain enough to require decision grouping;
6. safety-sensitive enough to require careful rationale;
7. likely to evolve through many implementation phases;
8. intended to be understandable by future sessions, future maintainers, and future agents.

ADRs support the Foundry’s core principles:

1. repository-canonical truth;
2. explicit over implicit;
3. verification before completion;
4. documentation as product;
5. auditability;
6. source traceability;
7. context continuity;
8. human-governed architecture.

## 10. Alternatives Considered

### 10.1 No Formal Decision Records

The project could rely on source code, README files, and chat history.

This was rejected.

Source code records what exists, but not why the decision was made.

README files explain the project at a high level, but they are not suitable as a detailed decision ledger.

Chat history is ephemeral, difficult to review, difficult to search reliably, and not canonical.

### 10.2 Centralized Architecture Document Only

The project could maintain one large architecture document containing every major decision.

This was rejected as the sole mechanism.

A centralized document is useful for summaries, but it becomes hard to review, hard to diff, hard to supersede, and hard to link to specific decisions.

The project may still maintain high-level architecture summaries, but individual decisions need stable ADRs.

### 10.3 External Decision Tracker

The project could store decisions in Notion, Linear, Jira, Confluence, GitHub Issues, or another external system.

This was rejected as the canonical mechanism.

External trackers may be useful for discussion, but the repository must remain the durable source of truth.

ADRs may reference external discussions if needed, but the accepted decision must live in the repo.

### 10.4 Comments in Code

The project could document decisions inline in implementation comments.

This was rejected as the primary strategy.

Code comments are useful for local explanation, but architecture decisions often span many files, services, and repositories.

Important decisions need a stable artifact that can be reviewed independently of any single implementation.

### 10.5 Only Use Work Packets

The project could rely on work packets to capture decision context.

This was rejected.

Work packets are execution-scoping artifacts.

ADRs are durable architecture artifacts.

A work packet may produce an ADR, implement an ADR, or update an ADR, but it does not replace the ADR system.

## 11. Consequences

### 11.1 Positive Consequences

The project gains:

1. durable architecture memory;
2. clearer implementation guidance;
3. reduced repeated debate;
4. easier onboarding;
5. better context rehydration for AI sessions;
6. stronger auditability;
7. explicit trade-off capture;
8. a structured way to supersede prior decisions;
9. a reliable way to align documentation, code, and verification;
10. a better foundation for repo contract checks.

### 11.2 Negative Consequences

The project accepts:

1. more documentation overhead;
2. more review surface;
3. a need to maintain ADR accuracy;
4. a risk of stale ADRs if not updated;
5. a need to reconcile numbering and index accuracy;
6. slower decision-making for significant changes.

These costs are acceptable because the project values correctness, continuity, governance, and long-term maintainability over short-term speed.

### 11.3 Neutral Consequences

Not every small implementation choice needs an ADR.

The ADR requirement applies to meaningful decisions with durable consequences.

Engineering judgment is still required.

## 12. Implementation Implications

The repository must contain:

```text
docs/adr/
docs/adr/index.md
```

Each ADR should be stored as a Markdown file.

The preferred filename pattern is:

```text
ADR-NNNN-short-kebab-case-title.md
```

Example:

```text
ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md
```

The ADR index must list all known ADRs and remain truthful.

When ADR files are added, removed, renamed, renumbered, superseded, or accepted, the index must be updated in the same commit unless there is a documented reason not to do so.

Existing ADRs may need to be renumbered if their current numbering conflicts with the accepted ADR catalogue.

Renumbering must preserve decision history and should be handled as a deliberate repository-maintenance change.

## 13. Verification Expectations

The repository should eventually verify ADR integrity through tooling.

The verification system should check:

1. every ADR listed in `docs/adr/index.md` exists as a file or is explicitly marked as planned;
2. every ADR file has valid frontmatter;
3. every ADR file has a matching `adr` field;
4. every ADR file has a matching title;
5. ADR numbers are unique;
6. ADR filenames match ADR numbers;
7. accepted ADRs include `decision_date`;
8. supersession links are reciprocal where applicable;
9. no ADR file is orphaned from the index unless intentionally marked;
10. required ADR sections are present.

Until tooling is complete, ADR verification may be manual.

## 14. Relationship to Charon

Charon may use ADRs as high-trust source artifacts for context rehydration.

Accepted ADRs should rank higher than:

1. handoff packets;
2. session chronicles;
3. memory candidates;
4. generated summaries;
5. raw chat-derived notes.

When a context pack includes architecture context, relevant ADRs should be included or cited by path.

If Charon detects conflict between an ADR and a handoff, the ADR should usually win unless the handoff reflects a newer explicit human instruction that has not yet been formalized.

## 15. Relationship to Work Packets

Work packets may reference ADRs as governing context.

A work packet that implements an ADR should include:

1. ADR path;
2. relevant decision summary;
3. implementation obligations;
4. verification obligations;
5. any known risks or unresolved questions.

A work packet that changes architecture should usually create or update an ADR.

A work packet should not silently alter architectural direction without ADR review.

## 16. Relationship to Repo Contracts

Repo contracts should eventually enforce the existence and structure of ADRs.

The ADR system itself becomes part of the repository contract.

At minimum, the repo contract checker should eventually validate:

1. `docs/adr/index.md` exists;
2. required ADR files exist;
3. ADR frontmatter is present;
4. ADR identifiers are unique;
5. the ADR index and ADR files do not materially disagree.

## 17. Clean-Room Considerations

ADRs must comply with the project clean-room policy.

An ADR may discuss public architecture patterns, public documentation, open-source projects, or general engineering practices.

An ADR must not include:

1. leaked proprietary source code;
2. copied private implementation details;
3. copied proprietary prompts;
4. copied proprietary tests;
5. unauthorized secrets;
6. private schemas;
7. license-incompatible material.

When an ADR is materially influenced by an external public source or pattern, it should describe the influence at the pattern level and preserve independent implementation intent.

## 18. Lifecycle Rules

An ADR may evolve as follows:

```text
proposed → accepted
proposed → rejected
accepted → superseded
accepted → deprecated
```

Accepted ADRs should not be rewritten to hide history.

Minor clarifications may be made in place with version increments.

Major conceptual changes should usually create a new ADR that supersedes the prior ADR.

When an ADR is superseded:

1. update the old ADR status to `superseded`;
2. update `superseded_by`;
3. add or update the replacing ADR;
4. update the index;
5. include the reason for supersession;
6. commit the change atomically.

## 19. Risks

### 19.1 Risk: ADR Sprawl

The project may create too many ADRs and make the decision system hard to navigate.

Mitigation:

1. group ADRs by domain;
2. keep the index accurate;
3. avoid ADRs for trivial implementation choices;
4. use concise titles;
5. maintain stable numbering.

### 19.2 Risk: Stale ADRs

ADRs may become stale if implementation evolves without updating them.

Mitigation:

1. require ADR review during significant work packets;
2. add repo contract checks;
3. use Charon drift analysis;
4. update or supersede ADRs when needed.

### 19.3 Risk: Documentation Without Enforcement

The project may document decisions without verifying implementation alignment.

Mitigation:

1. connect ADRs to repo contracts;
2. reference ADRs in work packets;
3. add verification criteria for ADR-governed work;
4. treat ADR conflicts as blocking unless explicitly waived.

### 19.4 Risk: Premature Over-Specification

The project may make decisions too early.

Mitigation:

1. use `proposed` status when uncertain;
2. record open questions;
3. defer decisions when appropriate;
4. supersede decisions honestly when learning changes.

## 20. Acceptance Criteria

This ADR is accepted when:

1. `docs/adr/` exists;
2. `docs/adr/index.md` exists;
3. ADR files use stable identifiers;
4. ADRs include required frontmatter;
5. ADRs are treated as canonical architecture artifacts;
6. future meaningful decisions are captured as ADRs;
7. ADR index maintenance is treated as part of normal repository hygiene.

## 21. Related Documents

Related documents include:

```text
docs/adr/index.md
docs/foundry/03-document-versioning-and-frontmatter.md
governance/PROJECT_CONSTITUTION.md
governance/CLEAN_ROOM_POLICY.md
evals/repo-contracts/
```

## 22. Decision Summary

The project will use Architecture Decision Records as first-class, repository-native, canonical engineering artifacts.

ADRs are required for meaningful decisions with durable architectural, operational, security, infrastructure, product, or governance consequences.

The repository, not chat history or external tools, is the canonical home of accepted decisions.

## 23. Commit Guidance

Recommended commit message:

```text
docs(adr): add decision record governance
```