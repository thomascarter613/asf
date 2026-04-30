---
title: "ADR-0004: Polyglot Language Strategy: Python for ML, Rust for Serving, TypeScript for Product"
description: "Adopts a disciplined polyglot language strategy using Python for machine learning and data workflows, Rust for serving and performance-critical systems, and TypeScript for product, frontend, SDK, and developer-facing surfaces."
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
  - language-strategy
  - python
  - rust
  - typescript
  - polyglot
---

# ADR-0004: Polyglot Language Strategy: Python for ML, Rust for Serving, TypeScript for Product

## 1. Status

Accepted.

## 2. Context

The Agentic Software Foundry is expected to grow into a large, multi-domain software system.

It will likely include:

1. model-adjacent workflows;
2. evaluation tooling;
3. data processing;
4. local developer tooling;
5. service runtimes;
6. API gateways;
7. context assembly systems;
8. safety and policy services;
9. memory and retrieval services;
10. tool orchestration;
11. frontend product surfaces;
12. SDKs;
13. documentation tooling;
14. generated project templates;
15. deployment and operational infrastructure.

No single programming language is the best fit for all of these domains.

A one-language strategy would simplify tooling but would force some parts of the system into poor implementation choices.

An uncontrolled many-language strategy would make the project harder to maintain, harder to verify, harder to onboard into, and harder for AI-assisted sessions to reason about.

The project needs a deliberate, bounded polyglot strategy.

The strategy must support:

1. strong engineering discipline;
2. clear ownership boundaries;
3. efficient implementation in each domain;
4. repeatable local verification;
5. predictable package management;
6. long-term maintainability;
7. future repository contract enforcement;
8. AI-assisted context loading without unnecessary ambiguity.

## 3. Decision

The project will adopt a disciplined polyglot language strategy.

The primary language assignments are:

```text
Python     = machine learning, data, evaluations, scripting, research-adjacent workflows
Rust       = serving, runtime services, performance-critical systems, safety-sensitive infrastructure
TypeScript = product surfaces, frontend, SDKs, developer experience, documentation tooling
````

The project will not attempt to force every subsystem into one language.

The project will also not allow arbitrary language addition without architectural justification.

Language use must be domain-driven.

The default rule is:

```text id="rd5cap"
Use the language that best matches the subsystem's operational responsibility,
but keep the set of primary languages intentionally small.
```

## 4. Language Assignments

## 4.1 Python

Python is the primary language for:

1. machine learning workflows;
2. evaluation harnesses;
3. data pipeline orchestration;
4. dataset preparation;
5. experiment utilities;
6. analysis scripts;
7. model-adjacent tooling;
8. notebook-adjacent research workflows where appropriate;
9. repository validation scripts when dependency-free local tooling is preferred;
10. quick iteration around non-production ML logic.

Python is preferred where the ecosystem advantage matters.

This includes:

1. PyTorch;
2. NumPy;
3. pandas;
4. scientific computing tools;
5. evaluation frameworks;
6. dataset processing tools;
7. ML experimentation libraries;
8. scripting with the standard library.

Python should not be the default for latency-sensitive serving paths, high-concurrency network services, security-critical sandboxes, or hot runtime loops unless a specific ADR or work packet justifies it.

## 4.2 Rust

Rust is the primary language for:

1. serving infrastructure;
2. API gateway components where performance and safety matter;
3. tool orchestration runtimes;
4. sandboxing and execution boundaries;
5. low-latency services;
6. streaming services;
7. policy enforcement components;
8. high-concurrency network systems;
9. performance-critical local runtime helpers;
10. memory-safe systems programming;
11. components where predictable resource usage matters.

Rust is preferred where the project needs:

1. memory safety without garbage collection;
2. predictable performance;
3. safe concurrency;
4. strong type guarantees;
5. low runtime overhead;
6. robust error handling;
7. production-grade service behavior;
8. secure boundary enforcement.

Rust should not be used merely to make simple scripts feel more serious.

If a task is mostly file traversal, text validation, or lightweight local automation, Python may be the better initial choice.

## 4.3 TypeScript

TypeScript is the primary language for:

1. frontend applications;
2. web product surfaces;
3. developer consoles;
4. documentation sites;
5. SDKs for JavaScript and TypeScript users;
6. developer-facing tooling;
7. template rendering where the target ecosystem is web/product-oriented;
8. API client packages;
9. component libraries;
10. browser-based artifact rendering;
11. product prototyping;
12. Node-based documentation or build tooling when justified.

TypeScript is preferred where the system needs:

1. strong typing in the JavaScript ecosystem;
2. browser compatibility;
3. frontend framework support;
4. modern package distribution;
5. SDK ergonomics;
6. developer experience tooling;
7. rich UI integration.

TypeScript should not be used for performance-critical serving internals when Rust is the better fit.

TypeScript should also not become the default for ML workflows where Python’s ecosystem is stronger.

## 5. Non-Primary Languages

This ADR does not permanently forbid all other languages.

However, additional languages require explicit justification.

Possible additional languages may include:

1. SQL for database schema and queries;
2. shell for small glue scripts;
3. Markdown for documentation;
4. YAML or JSON for configuration;
5. Protocol Buffers for service schemas;
6. CUDA C++ for GPU kernels if the project reaches that level;
7. Go only if a future subsystem has a clear reason that outweighs Rust or TypeScript.

A new general-purpose implementation language should not be introduced casually.

A future ADR is required if the project adopts another major implementation language as a first-class ecosystem.

## 6. Rationale

The selected languages align with domain strengths.

Python is the industry-standard default for machine learning and data workflows.

Rust is a strong fit for secure, high-performance, high-concurrency serving infrastructure.

TypeScript is the dominant practical choice for browser-facing product work, modern web tooling, and JavaScript ecosystem SDKs.

Together, these languages cover the system’s major needs without allowing uncontrolled language sprawl.

The strategy balances:

1. ecosystem fit;
2. operational correctness;
3. developer productivity;
4. performance;
5. safety;
6. maintainability;
7. future hiring/onboarding;
8. AI-assisted development clarity.

## 7. Language Boundary Rules

### 7.1 Domain Ownership Rule

Each subsystem should have one primary implementation language.

Cross-language boundaries should be explicit.

A subsystem should not mix Python, Rust, and TypeScript in the same runtime path unless there is a clear boundary and a documented reason.

### 7.2 Interface Contract Rule

Cross-language communication must happen through explicit contracts.

Preferred contract mechanisms include:

1. Protocol Buffers;
2. OpenAPI;
3. JSON Schema;
4. database schemas;
5. command-line interfaces;
6. file-based manifest formats;
7. event schemas.

The project should not rely on informal object-shape agreement across languages.

### 7.3 No Polyglot Chaos Rule

The project is polyglot, not chaotic.

Language diversity must not produce:

1. duplicated business logic;
2. inconsistent validation;
3. divergent schema definitions;
4. multiple uncoordinated package systems for the same concern;
5. unreviewed runtime dependencies;
6. unclear ownership;
7. unverified generated code.

### 7.4 Shared Domain Logic Rule

When domain logic must be shared across language boundaries, the canonical contract should be defined in a language-neutral artifact where practical.

Examples:

1. Protocol Buffer schemas;
2. OpenAPI specifications;
3. JSON Schema files;
4. SQL schema definitions;
5. manifest schemas.

Generated clients may be produced for each language.

Hand-copying schemas into multiple languages should be avoided.

## 8. Repository Layout Implications

The bounded monorepo should organize language ecosystems clearly.

A future mature layout may include:

```text id="sgw6i7"
.
├── apps/
│   ├── web/
│   ├── console/
│   └── docs/
├── services/
│   ├── api-gateway/
│   ├── context-service/
│   ├── memory-service/
│   └── tool-orchestrator/
├── packages/
│   ├── ts/
│   ├── rust/
│   └── python/
├── contracts/
│   ├── proto/
│   ├── openapi/
│   └── json-schema/
├── evals/
├── tools/
├── docs/
└── governance/
```

This ADR does not require that exact layout immediately.

It establishes the language boundary principles future layouts should respect.

## 9. Package Management Relationship

Package manager decisions are separate ADRs.

This language strategy anticipates:

```text id="blpkq9"
Python     → uv
Rust       → Cargo
TypeScript → pnpm
```

The package-manager ADR will define the exact tool choices and lockfile requirements.

This ADR only assigns language responsibility.

## 10. Build and Verification Implications

Each language ecosystem must eventually have its own verification path.

Expected checks include:

### 10.1 Python

1. formatting;
2. linting;
3. type checking where appropriate;
4. unit tests;
5. dependency lock verification;
6. script execution checks;
7. evaluation harness checks.

### 10.2 Rust

1. `cargo fmt`;
2. `cargo clippy`;
3. `cargo test`;
4. security audit where appropriate;
5. feature flag validation;
6. integration tests;
7. performance-sensitive benchmarks where justified.

### 10.3 TypeScript

1. formatting;
2. linting;
3. type checking;
4. unit tests;
5. build verification;
6. browser or frontend tests;
7. package export checks.

The root verification command should eventually orchestrate all relevant ecosystem checks.

Early phases may use simpler verification while runtime code is still absent.

## 11. Service Boundary Implications

Rust services should expose explicit interfaces.

Internal service communication should avoid ad hoc JSON contracts when a stronger schema is required.

If gRPC and Protocol Buffers are adopted by later ADRs, Rust services should use generated interfaces rather than hand-written protocol bindings.

Python ML and evaluation systems should communicate with serving systems through explicit artifact or service contracts, not shared in-memory assumptions.

TypeScript product surfaces should consume APIs through generated or strongly typed clients where practical.

## 12. AI-Assisted Development Implications

The language strategy helps AI-assisted sessions choose the right implementation tool.

A work packet should specify the expected language when implementation is required.

Examples:

```text id="o1y8q7"
Add a new repo contract checker
→ likely Python, unless Rust CLI tooling already exists

Add a streaming API gateway endpoint
→ likely Rust

Add a web console page
→ likely TypeScript

Add an evaluation dataset validator
→ likely Python

Add a public TypeScript SDK method
→ TypeScript

Add a manifest schema
→ JSON Schema or Protocol Buffers, with generated code as needed
```

This reduces tool-generated drift.

## 13. Relationship to Clean-Room Policy

Language choice does not permit copying external implementations.

Python, Rust, and TypeScript code must be independently authored unless direct reuse is explicitly allowed by license and documented.

The project may study public patterns and public documentation.

It must not copy leaked or private implementation details in any language.

The language strategy must support independent implementation.

## 14. Relationship to Charon

Charon may index and retrieve artifacts from all primary language ecosystems.

However, context packs should be language-aware.

A TypeScript frontend task should not load irrelevant Python training code by default.

A Rust serving task should not load unrelated product UI files by default.

A Python evaluation task should not load frontend implementation details unless relevant.

The language strategy helps Charon select task-specific context.

## 15. Relationship to Work Packets

Work packets should declare:

1. primary language;
2. affected ecosystem;
3. affected package or service;
4. required verification commands;
5. relevant contracts;
6. cross-language boundaries;
7. generated code expectations.

For example:

```yaml id="e12x4h"
primary_language: "rust"
ecosystem: "serving"
contracts:
  - "contracts/proto/context_service.proto"
verification:
  - "cargo test"
  - "cargo clippy"
```

This metadata may be informal at first and formalized later.

## 16. Relationship to Repo Contracts

Repo contracts should eventually verify language boundaries.

Possible checks include:

1. required lockfiles exist;
2. forbidden package managers are absent;
3. Python code stays in approved directories;
4. Rust code stays in approved directories;
5. TypeScript code stays in approved directories;
6. root verification command runs ecosystem checks;
7. generated code is not manually edited where forbidden;
8. contract files are present for cross-language APIs;
9. no unapproved language ecosystem appears;
10. package metadata is consistent.

This ADR provides the policy basis for those checks.

## 17. Alternatives Considered

### 17.1 Single-Language Python

The project could use Python for everything.

Benefits:

1. fast iteration;
2. strong ML ecosystem;
3. simple scripting;
4. easier early prototyping.

Rejected because:

1. Python is not ideal for high-performance serving;
2. Python is weaker for browser product surfaces;
3. concurrency and deployment constraints may become harder;
4. runtime safety boundaries may be weaker;
5. frontend and SDK work would still require JavaScript or TypeScript.

### 17.2 Single-Language TypeScript

The project could use TypeScript for everything.

Benefits:

1. full-stack web development simplicity;
2. strong frontend support;
3. good developer experience;
4. unified package tooling.

Rejected because:

1. TypeScript is not the best fit for ML workflows;
2. TypeScript is not ideal for low-level serving infrastructure;
3. GPU/model/data ecosystems are Python-centered;
4. safety-critical runtime components may benefit from Rust.

### 17.3 Single-Language Rust

The project could use Rust for everything.

Benefits:

1. performance;
2. memory safety;
3. strong type system;
4. deployment-friendly binaries.

Rejected because:

1. ML and data workflows would be unnecessarily difficult;
2. frontend product work still requires TypeScript or JavaScript;
3. iteration speed for research-adjacent tasks would suffer;
4. ecosystem fit would be poor for many product surfaces.

### 17.4 Go for Serving as the Primary Systems Language

Go was considered as a possible serving and orchestration language.

Benefits:

1. simple deployment;
2. strong network service ecosystem;
3. fast builds;
4. straightforward concurrency model;
5. good operational tooling.

Not adopted as the primary serving language in this ADR because Rust provides stronger memory safety guarantees, more explicit resource control, and better fit for performance-sensitive and sandbox-adjacent components.

Go may still be reconsidered for a future orchestration layer if justified by a separate ADR.

### 17.5 Unrestricted Polyglot

The project could allow any language whenever convenient.

Rejected.

Unrestricted polyglot development creates long-term maintenance risk.

The project needs disciplined language boundaries.

## 18. Consequences

### 18.1 Positive Consequences

The project gains:

1. good ecosystem fit per domain;
2. strong ML support through Python;
3. strong serving support through Rust;
4. strong product support through TypeScript;
5. clearer work-packet implementation guidance;
6. better future repo contract enforcement;
7. better cross-language contract discipline;
8. stronger maintainability than unrestricted polyglot development;
9. better AI-assisted task routing;
10. better alignment between architecture and implementation.

### 18.2 Negative Consequences

The project accepts:

1. multiple toolchains;
2. multiple package managers;
3. cross-language build complexity;
4. more onboarding surface;
5. need for interface contracts;
6. need for multi-ecosystem CI;
7. possible duplication if boundaries are not enforced;
8. more complex release engineering.

These costs are acceptable because the project spans domains where one language would be a poor fit.

### 18.3 Neutral Consequences

This ADR does not require every ecosystem to be initialized immediately.

Tooling should be introduced when the repository contains real code that needs it.

Documentation-only phases may avoid package initialization until justified.

## 19. Security Considerations

Rust is preferred for components where memory safety, sandboxing, request handling, and boundary enforcement are important.

Python code must be treated carefully when used for data processing, scripting, or evaluation because dynamic behavior and dependency risk can be significant.

TypeScript product code must be checked for browser security, dependency risk, supply-chain risk, and artifact sandboxing concerns.

All ecosystems require dependency scanning and lockfile discipline.

Language choice does not replace security review.

## 20. Operational Considerations

Production services should minimize runtime ambiguity.

Rust services should produce predictable build artifacts.

Python ML workflows should be reproducible with locked dependencies.

TypeScript product surfaces should have deterministic builds.

The root verification system should make it clear which language ecosystem failed.

Operational logs, metrics, traces, and errors should follow shared cross-language standards defined by observability ADRs.

## 21. Documentation Requirements

Each language ecosystem should eventually have documentation explaining:

1. where code lives;
2. how to install dependencies;
3. how to run tests;
4. how to build artifacts;
5. how to format and lint;
6. how contracts are generated;
7. how dependency updates are managed;
8. how security checks are run.

The root README should summarize the language strategy when runtime code exists.

## 22. Future Work

Future ADRs should define:

1. package managers;
2. lockfile policy;
3. internal service communication;
4. schema language;
5. build artifacts;
6. CI/CD gates;
7. SDK generation;
8. frontend framework choices;
9. Rust service framework choices;
10. Python ML framework choices;
11. dependency scanning;
12. release automation.

This ADR establishes the language strategy.

## 23. Acceptance Criteria

This ADR is accepted when:

1. Python is adopted as the primary language for ML, data, and evaluations;
2. Rust is adopted as the primary language for serving and performance-critical runtime systems;
3. TypeScript is adopted as the primary language for product, frontend, SDK, and developer-facing surfaces;
4. unrestricted polyglot development is rejected;
5. single-language implementation is rejected;
6. cross-language boundaries must use explicit contracts;
7. future package manager and CI decisions align with this strategy.

## 24. Decision Summary

The project adopts a disciplined polyglot strategy:

```text id="j18p05"
Python     for ML, data, evaluations, and scripting
Rust       for serving, runtime, performance, and safety-sensitive systems
TypeScript for product, frontend, SDKs, and developer-facing surfaces
```

This strategy preserves ecosystem fit while limiting language sprawl.

The project is polyglot by design, but not polyglot by accident.

## 25. Commit Guidance

Recommended commit message:

```text id="7o4e0b"
docs(adr): define polyglot language strategy
```