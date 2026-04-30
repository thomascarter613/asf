---
title: "ADR-0002: Repository Topology: Bounded Monorepos Over Monolith or Full Fragmentation"
description: "Adopts bounded monorepos as the default repository topology for the Agentic Software Foundry ecosystem, rejecting both a single universal monolith repository and excessive repository fragmentation."
status: "accepted"
version: "0.1.0"
created: "2026-04-30"
updated: "2026-04-30"
owner: "project-owner"
canonical: true
adr: "ADR-0002"
decision_date: "2026-04-30"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - repository-topology
  - monorepo
  - governance
---

# ADR-0002: Repository Topology: Bounded Monorepos Over Monolith or Full Fragmentation

## 1. Status

Accepted.

## 2. Context

The Agentic Software Foundry is not a single small application.

It is an ecosystem of related systems, tools, services, templates, policies, evaluation harnesses, memory artifacts, runtime adapters, developer-facing interfaces, and generated project structures.

The project may eventually include:

1. a Foundry Control Plane;
2. Charon context continuity components;
3. AI SDLC work-packet tooling;
4. Monorepo Factory generators;
5. evaluation harnesses;
6. local CLI tools;
7. service runtimes;
8. adapter packages;
9. templates;
10. SDKs;
11. documentation sites;
12. test fixtures;
13. examples;
14. deployment infrastructure;
15. policy and governance artifacts.

These parts are related, but they do not all have the same lifecycle, sensitivity, audience, runtime needs, access boundary, or release cadence.

A repository topology decision is therefore needed before the system grows.

The project needs a topology that supports:

1. strong architectural boundaries;
2. coherent development workflows;
3. shared tooling;
4. shared contracts;
5. repo-canonical documentation;
6. clear ownership;
7. dependency visibility;
8. CI/CD scalability;
9. access-control separation where needed;
10. future public/private split;
11. long-term maintainability;
12. AI-assisted context loading without uncontrolled bloat.

A naive single repository for everything would eventually become too broad, too sensitive, and too difficult to reason about.

A naive many-repository approach would create excessive coordination overhead, duplicated tooling, scattered documentation, weak context continuity, and harder local development.

The project needs a middle path.

## 3. Decision

The Agentic Software Foundry will use **bounded monorepos** as the default repository topology.

A bounded monorepo is a repository that contains multiple related packages, services, apps, tools, docs, contracts, and tests within one coherent domain boundary, but does not attempt to contain every system in the entire organization.

The project rejects two extremes:

1. one universal monolith repository for all possible systems;
2. excessive fragmentation into a separate repository for every service, package, tool, or document set.

The default topology is:

```text
one bounded monorepo per coherent product/system boundary
````

A bounded monorepo may contain:

```text
apps/
packages/
services/
contracts/
tools/
docs/
governance/
infra/
evals/
templates/
examples/
```

A separate repository may be created only when there is a meaningful boundary reason, such as:

1. different access tier;
2. different publication model;
3. different release lifecycle;
4. different legal/licensing boundary;
5. different security posture;
6. different operational ownership;
7. different audience;
8. materially different dependency regime;
9. large-scale infrastructure isolation;
10. independent open-source distribution.

The current `agentic-software-foundry` repository is one bounded monorepo for the Foundry system itself.

## 4. Definitions

### 4.1 Universal Monolith Repository

A universal monolith repository is a single repository that attempts to hold all systems, products, experiments, infrastructure, secrets-adjacent operational artifacts, internal tools, public SDKs, examples, and generated projects regardless of boundary.

This is rejected.

### 4.2 Full Fragmentation

Full fragmentation is a topology where every service, package, tool, UI, SDK, documentation set, or template lives in a separate repository by default.

This is rejected.

### 4.3 Bounded Monorepo

A bounded monorepo is a repository that groups strongly related components within a coherent architectural, operational, and governance boundary.

It allows shared tooling, shared contracts, shared docs, and local development coherence without forcing unrelated or differently governed systems into the same repository.

### 4.4 Repository Boundary

A repository boundary is a durable project boundary.

It affects:

1. access control;
2. CI/CD;
3. issue tracking;
4. code review;
5. dependency management;
6. release process;
7. documentation scope;
8. security posture;
9. context-pack assembly;
10. AI-assisted work boundaries.

Repository boundaries should be chosen deliberately.

## 5. Rationale

Bounded monorepos best fit the Foundry architecture because the system values both coherence and boundary discipline.

The Foundry needs the benefits of monorepos:

1. shared contracts;
2. shared tooling;
3. easier local development;
4. atomic cross-package changes;
5. consistent documentation;
6. unified evaluation harnesses;
7. repo contract testing;
8. simpler context rehydration;
9. easier onboarding;
10. fewer duplicated configuration files.

But it must avoid the dangers of one repository containing everything:

1. access-control leakage;
2. excessive context size;
3. unclear ownership;
4. bloated CI;
5. unrelated release coupling;
6. unsafe public/private mixing;
7. accidental exposure of restricted artifacts;
8. weak domain boundaries.

Bounded monorepos preserve the advantages while limiting the blast radius.

They also align with the Foundry’s architecture:

```text
Control Plane coordinates.
Charon remembers.
SDLC structures work.
Factory generates.
Evaluations prove.
Governance constrains.
```

Each bounded monorepo can contain the artifacts needed to make that boundary understandable, verifiable, and resumable.

## 6. Repository Boundary Rules

A new repository should be created when at least one of the following is true.

### 6.1 Access Boundary

The code or documentation requires a different access tier.

Examples:

1. restricted safety material;
2. sensitive internal infrastructure;
3. public SDKs;
4. open-source examples;
5. private operational runbooks.

### 6.2 Release Boundary

The component has a materially independent release lifecycle.

Examples:

1. public SDKs released independently from the platform;
2. a CLI with its own versioning;
3. a deployable service with independent operations;
4. generated quickstarts published independently.

### 6.3 Security Boundary

The component has materially different security requirements.

Examples:

1. production infrastructure;
2. secrets-handling tooling;
3. safety evaluation material;
4. incident response runbooks;
5. internal red-team artifacts.

### 6.4 Legal or Licensing Boundary

The component has a different licensing or distribution model.

Examples:

1. MIT-licensed SDKs;
2. proprietary internal services;
3. public documentation;
4. commercial templates;
5. third-party vendored material, if ever permitted.

### 6.5 Operational Boundary

The component is owned, deployed, or operated independently.

Examples:

1. a production data pipeline;
2. a model-serving cluster;
3. a public website;
4. an internal platform service;
5. a training infrastructure control plane.

### 6.6 Scale Boundary

The component becomes large enough that its build, test, dependency, or history profile materially harms the bounded monorepo.

Scale alone is not sufficient at small sizes.

Scale becomes a repository-boundary reason when it creates real operational harm.

## 7. Default Repository Structure Within a Bounded Monorepo

A bounded monorepo should prefer explicit top-level directories.

The standard pattern is:

```text
.
├── apps/
├── packages/
├── services/
├── contracts/
├── tools/
├── docs/
├── governance/
├── infra/
├── evals/
├── templates/
├── examples/
├── scripts/
├── tests/
├── assets/
├── config/
└── README.md
```

Not every bounded monorepo must contain every directory.

Directories should be present when they serve a real purpose.

Empty placeholder directories should be documented when they are part of the repository contract.

## 8. Current Foundry Repository Position

The current `agentic-software-foundry` repository is the bounded monorepo for the Foundry system.

Its current and near-term scope includes:

1. Foundry architecture documents;
2. ADRs;
3. governance policies;
4. Charon context continuity artifacts;
5. AI SDLC artifacts;
6. Foundry Control Plane local artifacts;
7. evaluation harnesses;
8. repo contract definitions;
9. local verification tooling;
10. templates;
11. future CLI implementation;
12. future local helper libraries;
13. future runtime prototypes.

It should not automatically absorb every future generated project.

A project generated by the Monorepo Factory may become its own bounded monorepo.

The Foundry repository may contain examples and templates for generated projects, but generated customer/product repositories should generally live outside the Foundry source repository unless explicitly part of tests or examples.

## 9. Relationship to Access Tiers

Repository topology is closely related to access classification.

The project will define access tiers separately.

Repository boundaries must support those tiers.

A repository should not mix unrestricted public materials with highly restricted internal materials unless the repository itself is governed at the higher restriction level.

For example:

1. public SDKs may live in public repositories;
2. internal runtime code may live in internal repositories;
3. restricted safety material may live in restricted repositories;
4. documentation intended for public distribution may be separated from private operational docs.

This ADR does not define the full access tier model.

It establishes that access tier differences are valid reasons for separate repositories.

## 10. Relationship to Charon

Charon depends on repository boundaries.

A bounded monorepo gives Charon a coherent context unit.

Charon can use each repository as a context domain with:

1. canonical memory;
2. ADRs;
3. work packets;
4. handoffs;
5. session chronicles;
6. repo contracts;
7. source artifacts;
8. documentation.

If all systems were fragmented into many small repositories, Charon would need to reconstruct context across too many disconnected stores.

If all systems were placed in one universal repository, Charon would face excessive context volume, weak access boundaries, and increased risk of loading irrelevant or restricted material.

Bounded monorepos provide the correct middle ground for context rehydration.

## 11. Relationship to Repo Contracts

Each bounded monorepo must have its own repository contract.

Repo contracts should define:

1. required paths;
2. forbidden paths;
3. required documentation;
4. required manifests;
5. required verification commands;
6. required governance files;
7. required CI gates;
8. allowed tooling;
9. forbidden tooling;
10. access-tier expectations.

A bounded monorepo is not considered healthy merely because it follows a directory convention.

It must satisfy its declared repository contract.

## 12. Relationship to AI Work Packets

Work packets should not cross repository boundaries casually.

A work packet should identify:

1. the repository it governs;
2. the bounded monorepo context;
3. affected paths;
4. affected packages or services;
5. affected contracts;
6. verification commands;
7. required ADRs;
8. required handoff updates.

If a task spans multiple repositories, the work should be split into coordinated work packets unless there is a clear reason to keep it together.

Multi-repository work requires stronger handoff and verification discipline.

## 13. Relationship to CI/CD

Bounded monorepos require CI/CD that can operate at repository scale.

The CI/CD system should eventually support:

1. whole-repository verification;
2. path-aware checks;
3. package-aware checks;
4. service-aware checks;
5. affected-test selection;
6. contract validation;
7. documentation validation;
8. security scanning;
9. evaluation gates;
10. manual production gates.

The repository topology should not assume every change requires every possible expensive check.

However, early versions may start with simpler full-repo verification until scale requires affected-check optimization.

## 14. Relationship to Package Management

A bounded monorepo may contain multiple language ecosystems.

Language-specific package management decisions are made in separate ADRs.

This ADR does not choose package managers.

It establishes that a bounded monorepo may contain multiple package-manager domains when the repository boundary is coherent.

For example, the same bounded monorepo may eventually contain:

1. Python packages;
2. Rust crates;
3. TypeScript packages;
4. shell scripts;
5. documentation;
6. infrastructure files.

Each ecosystem must have explicit boundaries and lockfile policy.

## 15. Relationship to Documentation

Every bounded monorepo should contain documentation that explains:

1. what the repository is;
2. what it owns;
3. what it does not own;
4. how it is structured;
5. how to verify it;
6. how to contribute;
7. how it relates to other repositories;
8. which ADRs govern it.

Documentation belongs with the repository it governs.

This supports the decision from ADR-0001 that ADRs are stored in the repository they govern.

## 16. Alternatives Considered

### 16.1 Single Universal Monorepo

The project could place everything into one repository.

Benefits:

1. one clone;
2. one issue surface;
3. one CI system;
4. easy atomic changes across all systems;
5. centralized documentation.

Rejected because:

1. access boundaries would be weak;
2. context would become too large;
3. restricted and public material would be difficult to separate;
4. CI would become expensive and complex;
5. ownership would become unclear;
6. unrelated release cycles would be coupled;
7. accidental exposure risk would increase;
8. the repository would become a governance and operational bottleneck.

### 16.2 Repository Per Service or Package

The project could create a separate repository for every deployable service, library, SDK, template set, documentation site, tool, and infrastructure component.

Benefits:

1. strong isolation;
2. small repositories;
3. independent release cycles;
4. simple access control per repository.

Rejected as the default because:

1. coordination overhead would be high;
2. local development would be harder;
3. shared contracts would fragment;
4. documentation would scatter;
5. AI context continuity would degrade;
6. cross-cutting changes would require many commits and PRs;
7. duplicated tooling would grow;
8. repo contract consistency would be harder to enforce.

### 16.3 Monorepo for Code, Separate Repo for Docs

The project could keep code and documentation in separate repositories.

Rejected as the default.

The Foundry treats documentation as part of the product and architecture.

Separating docs from the code they govern would weaken context continuity, reviewability, and repo-canonical truth.

Public documentation may eventually be published from a separate generated site or public mirror, but source documentation should live with the repository it governs.

### 16.4 Package Registry as Primary Boundary

The project could treat packages, rather than repositories, as the main architectural boundary.

Rejected as the primary topology decision.

Package boundaries are important, but repository boundaries affect access, governance, documentation, CI, and context continuity in ways package boundaries do not fully address.

## 17. Consequences

### 17.1 Positive Consequences

The bounded monorepo approach provides:

1. coherent local development;
2. strong context continuity;
3. shared documentation;
4. shared tooling;
5. shared repo contracts;
6. easier cross-package refactoring;
7. better AI-assisted session rehydration;
8. clearer product/system boundaries;
9. fewer duplicated configs;
10. better governance alignment.

### 17.2 Negative Consequences

The project accepts:

1. more complex repository-internal boundaries;
2. need for path-aware tooling over time;
3. potential CI scaling challenges;
4. risk of unrelated code accumulating in the same repository;
5. need for clear rules about when to split repositories;
6. need for CODEOWNERS or ownership policy in larger repositories.

### 17.3 Neutral Consequences

A bounded monorepo does not eliminate the need for modular architecture.

It also does not remove the need for package boundaries, service boundaries, access policy, or release discipline.

It is a repository topology decision, not a substitute for architecture.

## 18. Implementation Implications

The Foundry repository should maintain clear top-level boundaries.

As the repository grows, it should prefer explicit directories such as:

```text
apps/
packages/
services/
contracts/
tools/
docs/
governance/
infra/
evals/
templates/
examples/
```

The current repository already contains several non-runtime governance and proof directories.

Future implementation should add runtime directories only when justified by a work packet.

The repository should avoid uncontrolled top-level sprawl.

New top-level directories should usually require one of:

1. ADR support;
2. project manifest support;
3. repo contract update;
4. work-packet justification;
5. explicit human approval.

## 19. Verification Expectations

Repository topology should be enforced through repo contracts.

The checker should eventually validate:

1. required top-level directories;
2. forbidden top-level directories;
3. required README files for major boundaries;
4. required governance files;
5. required ADR index;
6. required verification tooling;
7. absence of forbidden build systems;
8. absence of secrets;
9. consistency between README and actual repository state;
10. consistency between repo contract and filesystem.

As the project matures, the repo contract checker should detect unapproved top-level directories.

## 20. Security Considerations

Repository boundaries are security boundaries.

A bounded monorepo must not casually mix materials with incompatible security requirements.

Security-sensitive materials may require separate repositories or stricter access controls.

Examples of materials that may require separation include:

1. incident response runbooks;
2. restricted safety evaluation material;
3. production infrastructure secrets-adjacent configuration;
4. proprietary customer-specific deployments;
5. internal red-team materials;
6. regulated data-handling code;
7. sensitive operational telemetry.

No repository topology may justify committing secrets.

## 21. Clean-Room Considerations

Bounded monorepos support clean-room compliance by making provenance and ownership easier to inspect.

Each repository should clearly state:

1. what it owns;
2. what it does not own;
3. what external sources influenced it;
4. what licenses apply;
5. whether generated or external material is present.

Repositories should not become dumping grounds for copied external material.

Any open-source reuse must be documented according to clean-room policy.

## 22. Operational Considerations

Bounded monorepos require repository hygiene.

The project should maintain:

1. clear README files;
2. consistent local verification commands;
3. stable directory contracts;
4. dependency lockfiles;
5. CI configuration;
6. ownership rules;
7. contribution guidance;
8. security policy;
9. release notes where applicable;
10. ADR index.

The repository must remain understandable to both humans and AI-assisted sessions.

## 23. Future Work

Future ADRs may define:

1. access tier model;
2. package managers;
3. dependency pinning;
4. CI/CD gate model;
5. CODEOWNERS enforcement;
6. repository visibility rules;
7. public/private split;
8. generated repository profiles;
9. monorepo factory output topology;
10. multi-repository context-pack strategy.

This ADR establishes the topology principle.

Later ADRs will refine operational details.

## 24. Acceptance Criteria

This ADR is accepted when:

1. bounded monorepos are recognized as the default topology;
2. universal repository monolith is rejected;
3. full fragmentation is rejected as the default;
4. repository splitting requires explicit boundary reasons;
5. the current Foundry repository is treated as the bounded monorepo for the Foundry system;
6. repo contracts are expected to enforce repository topology over time;
7. future generated projects may become their own bounded monorepos.

## 25. Decision Summary

The project will use bounded monorepos.

A bounded monorepo groups related systems within a coherent product, governance, access, operational, and development boundary.

The project will not place everything into one universal repository, and it will not create a separate repository for every small component by default.

Repository boundaries must be deliberate.

## 26. Commit Guidance

Recommended commit message:

```text
docs(adr): define bounded monorepo repository topology
```