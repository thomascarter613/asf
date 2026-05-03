---
title: "ADR-0004: Access Tier Model: Four-Tier Repository Classification"
description: "Defines the repository access tier model for classifying repositories and repository contents by visibility, sensitivity, security posture, and publication boundary."
status: "accepted"
version: "0.1.0"
created: "2026-04-30"
updated: "2026-04-30"
owner: "project-owner"
canonical: true
adr: "ADR-0004"
decision_date: "2026-04-30"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - access-control
  - repository-governance
  - security
---

# ADR-0004: Access Tier Model: Four-Tier Repository Classification

## 1. Status

Accepted.

## 2. Context

The Agentic Software Foundry will contain repositories and repository artifacts with different visibility, sensitivity, audience, operational risk, legal exposure, and security requirements.

Some repositories may be suitable for public release.

Some repositories may be internal but broadly visible to project maintainers or organization members.

Some repositories may contain sensitive operational, security, safety, or infrastructure material that requires stricter access.

Some repositories may contain highly restricted material that should be visible only to explicitly authorized roles.

The project cannot safely treat all repositories as having the same access model.

The repository topology decision establishes bounded monorepos as the default repository shape, but bounded monorepos also require clear access classification.

Without an access tier model, the project risks:

1. mixing public and private materials;
2. exposing restricted operational details;
3. committing security-sensitive documentation to overly broad repositories;
4. weakening clean-room provenance;
5. confusing AI-assisted context retrieval about what may be loaded or shared;
6. allowing generated artifacts to cross publication boundaries;
7. making future open-source publication risky;
8. making CODEOWNERS, CI gates, and policy enforcement inconsistent;
9. making repository splitting decisions ad hoc;
10. weakening trust in the repository as a governed artifact.

The project therefore needs a simple, explicit, repository-native access tier model.

## 3. Decision

The project will classify repositories and repository subtrees using a four-tier access model.

The access tiers are:

```text
PUBLIC
INTERNAL
RESTRICTED
SEALED
````

These tiers define the expected audience, allowed contents, publication posture, default controls, and AI-context handling rules.

The short public-facing shorthand may refer to the main operating families as:

```text
PUBLIC / INTERNAL / RESTRICTED
```

However, the full classification model contains four tiers because some material requires a stronger boundary than ordinary restricted internal material.

The fourth tier is `SEALED`.

`SEALED` is reserved for the most sensitive material and is not expected to be common.

## 4. Tier Summary

```text
PUBLIC
= safe for public visibility and external distribution

INTERNAL
= private project or organization material visible to ordinary authorized maintainers

RESTRICTED
= sensitive material limited to explicitly approved roles

SEALED
= highly sensitive material requiring exceptional handling and explicit human approval
```

The default tier for a new repository is:

```text
INTERNAL
```

A repository may be classified as `PUBLIC` only through explicit decision.

A repository may contain `RESTRICTED` or `SEALED` material only when the repository and tooling are configured to protect that material.

## 5. Tier 1: PUBLIC

### 5.1 Definition

`PUBLIC` repositories and artifacts are safe for open publication.

They may be visible to:

1. external users;
2. open-source contributors;
3. prospective customers;
4. public documentation readers;
5. package consumers;
6. auditors;
7. portfolio reviewers.

### 5.2 Allowed Material

`PUBLIC` material may include:

1. open-source code intended for release;
2. public documentation;
3. public examples;
4. public SDKs;
5. public quickstarts;
6. public templates;
7. public architecture summaries;
8. public changelogs;
9. license files;
10. non-sensitive issue templates;
11. public contribution guides.

### 5.3 Forbidden Material

`PUBLIC` material must not include:

1. secrets;
2. private keys;
3. production credentials;
4. internal hostnames;
5. private operational runbooks;
6. restricted safety test material;
7. unreleased proprietary implementation details not intended for publication;
8. customer-specific private data;
9. private incident reports;
10. private red-team scenarios;
11. private prompts;
12. internal model weights;
13. non-public vendor terms;
14. private infrastructure topology;
15. sealed or restricted artifacts.

### 5.4 Default Controls

A `PUBLIC` repository should have:

1. license file;
2. security policy;
3. contribution guidelines;
4. public-safe README;
5. automated secret scanning;
6. dependency scanning;
7. CI gate;
8. branch protection where appropriate;
9. issue and PR templates;
10. explicit publication review before release.

### 5.5 AI Context Rule

AI-assisted sessions may load `PUBLIC` material freely, subject to normal copyright, license, and security constraints.

AI may summarize, quote within acceptable limits, transform, and reason about `PUBLIC` artifacts.

AI must still avoid introducing secrets, license-incompatible material, or private claims into public repositories.

## 6. Tier 2: INTERNAL

### 6.1 Definition

`INTERNAL` repositories and artifacts are private to the project owner, organization, or authorized development group.

They are not intended for public publication by default.

Most active product development repositories begin as `INTERNAL`.

### 6.2 Allowed Material

`INTERNAL` material may include:

1. internal product architecture;
2. private planning documents;
3. unreleased source code;
4. internal tooling;
5. internal templates;
6. non-public ADRs;
7. non-public roadmap documents;
8. local verification tooling;
9. internal CI/CD definitions;
10. development infrastructure definitions that do not contain secrets;
11. non-sensitive operational notes;
12. AI handoff documents;
13. work packets;
14. context packs;
15. memory candidates.

### 6.3 Forbidden Material

`INTERNAL` material must not include:

1. plaintext secrets;
2. production credentials;
3. private keys;
4. sensitive customer data without explicit authorization;
5. highly sensitive safety material;
6. active incident response secrets;
7. sealed memory artifacts;
8. materials legally barred from broad internal distribution.

### 6.4 Default Controls

An `INTERNAL` repository should have:

1. private visibility;
2. access limited to authorized maintainers;
3. branch protection for main branches where appropriate;
4. CI verification;
5. secret scanning;
6. dependency scanning;
7. conventional commit discipline;
8. CODEOWNERS where ownership matters;
9. documented repository contract;
10. clear README and governance documents.

### 6.5 AI Context Rule

AI-assisted sessions may use `INTERNAL` material only within authorized project contexts.

AI must not reproduce internal material into public outputs unless explicitly asked and the material is safe to publish.

AI-generated summaries of `INTERNAL` material remain internal unless reviewed and approved for public release.

## 7. Tier 3: RESTRICTED

### 7.1 Definition

`RESTRICTED` repositories and artifacts contain sensitive material that should be available only to explicitly approved roles.

Restricted material may create security, privacy, safety, legal, operational, or reputational risk if exposed.

### 7.2 Allowed Material

`RESTRICTED` material may include:

1. security-sensitive architecture;
2. infrastructure details that could aid compromise;
3. production deployment details;
4. safety classifier configuration;
5. evaluation sets with sensitive prompts;
6. vulnerability reports;
7. private operational runbooks;
8. incident response procedures;
9. access control policy details;
10. sensitive model or data pipeline metadata;
11. customer-specific private implementation notes;
12. compliance evidence;
13. internal audit material.

### 7.3 Forbidden Material

`RESTRICTED` repositories still must not contain:

1. plaintext secrets unless explicitly allowed by a secrets-management policy;
2. private keys;
3. raw credential dumps;
4. unauthorized customer data;
5. illegal material;
6. leaked proprietary third-party code;
7. non-consensual sensitive personal data;
8. material requiring sealed handling.

### 7.4 Default Controls

A `RESTRICTED` repository should have:

1. private visibility;
2. explicit allowlist access;
3. CODEOWNERS enforcement;
4. mandatory review;
5. branch protection;
6. required status checks;
7. secret scanning;
8. audit logging;
9. stricter pull request review;
10. no public issue tracker by default;
11. no automatic publication;
12. no broad AI ingestion without context scoping;
13. stronger local handling expectations.

### 7.5 AI Context Rule

AI-assisted sessions may use `RESTRICTED` material only when the user has authority and the task requires it.

AI should minimize reproduction of restricted content.

AI should summarize rather than quote when possible.

AI should not include restricted details in generated public documentation, public examples, or public code comments.

Restricted context must not be loaded into unrelated tasks.

Context packs containing restricted material must be labeled.

## 8. Tier 4: SEALED

### 8.1 Definition

`SEALED` repositories and artifacts contain exceptionally sensitive material requiring special handling.

This tier is reserved for material where exposure could create severe security, legal, safety, privacy, operational, or governance harm.

`SEALED` should be rare.

### 8.2 Possible Material

`SEALED` material may include:

1. active incident response material during a critical event;
2. highly sensitive security investigations;
3. severe vulnerability exploit details before remediation;
4. sensitive red-team material;
5. extremely sensitive safety evaluation prompts;
6. legal privileged materials;
7. regulated data requiring strict containment;
8. confidential third-party materials under restrictive terms;
9. sensitive model misuse analysis;
10. emergency access procedures;
11. sealed memory or governance material requiring explicit owner admission.

### 8.3 Forbidden Material

Even `SEALED` repositories must not contain:

1. unauthorized secrets;
2. leaked proprietary third-party source code;
3. illegal material;
4. data the project is not authorized to possess;
5. materials that violate the clean-room policy;
6. materials that cannot be safely stored in Git.

Some material may be too sensitive for Git at all.

The `SEALED` tier does not mean “anything may be committed.”

### 8.4 Default Controls

A `SEALED` repository or subtree should have:

1. explicit human project owner approval;
2. minimal access;
3. strongest available repository access controls;
4. mandatory CODEOWNERS;
5. mandatory signed commits if supported;
6. mandatory review by authorized roles;
7. no external publication;
8. no broad indexing;
9. no default AI ingestion;
10. no automatic context pack inclusion;
11. no public issue references;
12. no generated summaries without explicit approval;
13. short retention policy where appropriate;
14. external secure storage if Git is not appropriate.

### 8.5 AI Context Rule

AI-assisted access to `SEALED` material requires explicit human instruction in the current task.

`SEALED` material must never be loaded into context by default.

Generated outputs derived from `SEALED` material must remain sealed unless explicitly sanitized and approved.

The default behavior is exclusion.

## 9. Classification Scope

The access tier model applies to:

1. entire repositories;
2. repository subtrees;
3. documentation;
4. source code;
5. work packets;
6. context packs;
7. handoff packets;
8. memory candidates;
9. canonical memory;
10. evaluation data;
11. templates;
12. infrastructure configuration;
13. CI/CD configuration;
14. generated artifacts;
15. issue templates;
16. SDKs;
17. examples;
18. logs intended for persistence.

A repository has a default classification.

Subtrees may have stricter classifications than the repository default.

Subtrees should not have looser classifications than the repository unless the repository is explicitly designed for mixed-publication output.

## 10. Classification Metadata

Every repository should eventually declare its default access tier in a repository manifest.

For Foundry-managed repositories, the manifest should include a field similar to:

```json id="7cir24"
{
  "accessTier": "INTERNAL"
}
```

For subtree-level classification, a future manifest may include:

```json id="279vmb"
{
  "pathClassifications": [
    {
      "path": "docs/public",
      "accessTier": "PUBLIC"
    },
    {
      "path": "security",
      "accessTier": "RESTRICTED"
    }
  ]
}
```

The exact manifest schema may be defined in a later ADR or repo contract.

## 11. Default Classification Rules

Unless otherwise stated:

1. new repositories are `INTERNAL`;
2. new documentation is `INTERNAL`;
3. new runtime source code is `INTERNAL`;
4. new examples are `INTERNAL` until reviewed for public release;
5. new SDKs are `INTERNAL` until explicitly prepared for publication;
6. new safety material is at least `RESTRICTED`;
7. new security material is at least `RESTRICTED`;
8. new incident response material is at least `RESTRICTED`;
9. new sealed investigations are `SEALED`;
10. generated handoffs inherit the highest tier of their included source material.

## 12. Access Tier Escalation

When in doubt, classify material at the higher tier.

The project may later downgrade classification after review.

Downgrading requires explicit review because publication mistakes are harder to undo than overclassification.

A safe default is:

```text id="51n4lu"
PUBLIC only when intentionally public.
INTERNAL by default.
RESTRICTED when sensitivity is plausible.
SEALED when exposure would be severe.
```

## 13. Relationship to Repository Topology

Repository boundaries should respect access tiers.

A repository should not mix `PUBLIC` and `RESTRICTED` material casually.

If a bounded monorepo contains mixed-tier material, it must be governed at the highest tier unless tooling and policy support safe subtree separation.

A `PUBLIC` repository must not contain `INTERNAL`, `RESTRICTED`, or `SEALED` material.

An `INTERNAL` repository may contain limited `RESTRICTED` material only if access controls and contributor expectations support it.

A `RESTRICTED` repository may contain restricted and internal material, but it should not be used for public collaboration.

A `SEALED` repository should contain only sealed or directly related material.

## 14. Relationship to Charon

Charon must respect access tiers.

Context packs must inherit or declare the highest access tier of included material.

Handoff packets must not accidentally lower classification.

Memory candidates must preserve source classification.

Canonical memory admission must consider access tier.

Retrieval must not return restricted or sealed material into lower-tier contexts.

A future Charon retrieval system should apply classification filters before ranking.

The vector index must not contain untraceable restricted or sealed content.

## 15. Relationship to AI-Assisted Work

AI-assisted work must preserve access boundaries.

When generating output, an AI session should not move material from a higher tier to a lower tier unless explicitly instructed and the output is sanitized.

Examples:

1. `RESTRICTED` runbook details should not be copied into `PUBLIC` docs;
2. `INTERNAL` implementation plans should not be pasted into public examples without review;
3. `SEALED` materials should not be summarized into ordinary handoffs by default;
4. public release notes must be checked for accidental internal detail disclosure.

Work packets should declare the expected access tier when relevant.

## 16. Relationship to Repo Contracts

Repo contracts should eventually validate access classification.

Possible checks include:

1. required `accessTier` in repository manifest;
2. no restricted paths in public repositories;
3. no forbidden file patterns;
4. no secrets;
5. no public docs referencing restricted paths;
6. context packs declare classification;
7. handoff packets declare classification;
8. memory candidates preserve source tier;
9. public artifacts do not reference internal-only files;
10. sealed material is excluded from ordinary verification reports.

This ADR establishes the model.

Implementation may begin with documentation and later add enforcement.

## 17. Relationship to CODEOWNERS

Access tiers inform ownership and review rules.

`PUBLIC` repositories may use CODEOWNERS for maintainership.

`INTERNAL` repositories should use CODEOWNERS when multiple maintainers or domains exist.

`RESTRICTED` repositories should use CODEOWNERS for mandatory review.

`SEALED` repositories must use the strictest available ownership and approval rules if hosted in Git.

CODEOWNERS enforcement is defined separately.

## 18. Relationship to Clean-Room Policy

Access tier classification does not override clean-room restrictions.

A `RESTRICTED` or `SEALED` repository may not contain leaked proprietary code merely because it is private.

Forbidden material remains forbidden at every tier.

The clean-room policy applies across all access tiers.

## 19. Relationship to Publication

Publication means moving material to a lower access tier, usually from `INTERNAL` to `PUBLIC`.

Publication requires review.

Before publication, the project should check:

1. no secrets;
2. no internal hostnames;
3. no private runbooks;
4. no restricted safety material;
5. no customer-specific details;
6. no sealed material;
7. license compatibility;
8. clean-room compliance;
9. correct public README;
10. correct security policy.

A repository should not be made public merely because it builds successfully.

## 20. Relationship to Generated Projects

The Monorepo Factory may generate repositories with declared access tiers.

Generated project manifests should include the access tier.

Generated public templates should avoid internal references.

Generated internal templates may include stronger governance scaffolding.

Generated restricted repositories should include stricter policy, CODEOWNERS, and verification requirements.

The Factory must not generate public repositories from restricted source material unless the output is explicitly sanitized.

## 21. Alternatives Considered

### 21.1 No Access Tier Model

The project could rely on repository visibility alone.

Rejected.

Visibility is not enough.

A private repository can still contain material with different sensitivity levels.

A public repository can accidentally include private material.

The project needs explicit classification.

### 21.2 Two-Tier Model: Public and Private

The project could classify repositories only as public or private.

Rejected.

This is too coarse.

Private repositories may contain ordinary internal code, sensitive security runbooks, or highly restricted sealed materials.

Those require different handling.

### 21.3 Three-Tier Model: Public, Internal, Restricted

The project could use only three tiers.

Rejected as the full model because some material requires exceptional handling beyond ordinary restricted access.

However, the three terms `PUBLIC`, `INTERNAL`, and `RESTRICTED` remain the primary day-to-day classification families.

`SEALED` is added as the exceptional fourth tier.

### 21.4 Per-File ACLs Only

The project could attempt to manage access at file level without repository or subtree classification.

Rejected as the primary model.

Fine-grained ACLs are difficult to reason about in Git workflows and can fail when files are copied, summarized, indexed, or included in context packs.

Repository and subtree classification must come first.

### 21.5 External Document Classification Only

The project could classify documents in an external tool and leave repositories unclassified.

Rejected.

The repository must be self-describing.

External systems may mirror or supplement classification, but the repository needs local metadata.

## 22. Consequences

### 22.1 Positive Consequences

The project gains:

1. clearer repository governance;
2. safer publication workflow;
3. better AI context handling;
4. stronger security posture;
5. better repo contract possibilities;
6. clearer repository split criteria;
7. stronger Charon retrieval filtering;
8. better handoff classification;
9. fewer accidental exposures;
10. better alignment between documentation and access control.

### 22.2 Negative Consequences

The project accepts:

1. more metadata overhead;
2. more review work before publication;
3. need to classify generated artifacts;
4. risk of overclassification;
5. need for tooling to enforce classification over time;
6. need to keep classification metadata current.

These costs are acceptable because access mistakes can be severe.

### 22.3 Neutral Consequences

Access tiers do not replace authentication, authorization, secret management, encryption, CODEOWNERS, branch protection, or review processes.

They guide those controls.

## 23. Implementation Implications

The project should eventually add access tier metadata to:

1. repository manifests;
2. context packs;
3. handoff packets;
4. memory candidates;
5. verification records;
6. generated repository templates;
7. repo contract definitions.

For the current Foundry repository, the default classification should be:

```text id="yllf9g"
INTERNAL
```

If the repository remains public for portfolio or demonstration purposes, then the effective rule is:

```text id="98xdpl"
Only PUBLIC-safe material may be committed.
```

That means any future restricted, sealed, secret-adjacent, or private operational material must live elsewhere or be excluded.

## 24. Verification Expectations

Future verification should check:

1. repository manifest includes an access tier;
2. access tier value is one of `PUBLIC`, `INTERNAL`, `RESTRICTED`, or `SEALED`;
3. public repositories do not contain forbidden private patterns;
4. context packs declare access tier;
5. handoff packets declare access tier;
6. memory candidates declare source tier;
7. public docs do not reference restricted files;
8. no sealed paths are indexed by default;
9. generated artifacts inherit highest source tier;
10. tier downgrades require explicit approval metadata.

## 25. Risks

### 25.1 Risk: False Sense of Security

A tier label alone does not enforce access.

Mitigation:

1. use repository visibility controls;
2. use CODEOWNERS;
3. use CI checks;
4. use secret scanning;
5. use review gates;
6. use repo contracts.

### 25.2 Risk: Overclassification

Too much material may be classified as restricted or sealed, slowing development.

Mitigation:

1. default ordinary work to `INTERNAL`;
2. reserve `SEALED` for exceptional cases;
3. allow review-based downgrades;
4. document classification rationale.

### 25.3 Risk: Underclassification

Sensitive material may be treated as ordinary internal material.

Mitigation:

1. when in doubt, classify upward;
2. enforce security review for sensitive areas;
3. add repo contract checks;
4. require work packet classification for sensitive tasks.

### 25.4 Risk: AI Context Leakage

AI context packs may accidentally include restricted material in lower-tier sessions.

Mitigation:

1. require context pack access tier;
2. filter retrieval by tier;
3. label restricted handoffs;
4. exclude sealed material by default;
5. review generated public outputs.

## 26. Acceptance Criteria

This ADR is accepted when:

1. the four access tiers are defined;
2. `PUBLIC`, `INTERNAL`, `RESTRICTED`, and `SEALED` have clear meanings;
3. `INTERNAL` is the default repository tier;
4. public release requires explicit review;
5. restricted and sealed material receive stronger handling;
6. Charon and work packets are expected to preserve tier metadata;
7. repo contracts are expected to validate tier metadata over time.

## 27. Decision Summary

The project adopts a four-tier repository access model:

```text id="1f4e8o"
PUBLIC
INTERNAL
RESTRICTED
SEALED
```

The model gives the project a clear way to classify repositories and artifacts by sensitivity, audience, and publication boundary.

`INTERNAL` is the default.

`PUBLIC` requires publication review.

`RESTRICTED` requires explicit access control.

`SEALED` is reserved for exceptional sensitivity and is excluded from ordinary AI context loading by default.

## 28. Commit Guidance

Recommended commit message:

```text id="tn6srn"
docs(adr): define repository access tier model
```