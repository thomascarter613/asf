---
title: "ADR-0010: Manifest-Driven Project Contracts"
description: "Accepts manifest-driven project contracts for explicit, machine-readable configuration and safe defaults."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0010"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - manifests
  - contracts
---

# ADR-0010: Manifest-Driven Project Contracts

## Status

Accepted

## Date

2026-04-28

## Decision Owner

Project Owner

## Related Documents

- `docs/foundry/00-foundry-charter.md`
- `governance/CLEAN_ROOM_POLICY.md`
- `docs/adr/ADR-0001-repository-based-context-continuity.md`
- `docs/adr/ADR-0002-clean-room-architecture-and-pattern-adoption.md`
- `docs/adr/ADR-0003-foundry-control-plane.md`
- `docs/adr/ADR-0004-canonical-repository-plus-vector-retrieval.md`
- `docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md`
- `docs/adr/ADR-0006-directive-compiler-and-work-protocols.md`
- `docs/adr/ADR-0007-multi-agent-runtime-and-role-separation.md`
- `docs/adr/ADR-0008-worktree-based-parallel-execution.md`
- `docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md`

## 1. Context

The Agentic Software Foundry is composed of multiple cooperating systems:

1. Foundry Control Plane;
2. Charon context continuity;
3. AI SDLC work protocol;
4. Monorepo Factory;
5. Event Bus and Notification Router;
6. Multi-Agent Runtime;
7. vector retrieval;
8. worktree execution;
9. evaluation and repo contract testing.

Each subsystem needs explicit configuration.

The project must avoid hidden defaults, implicit behavior, provider lock-in, and ambiguous runtime state.

The Foundry therefore needs machine-readable manifests that define project identity, enabled subsystems, safety defaults, profiles, policies, generated artifacts, work packets, context packs, runs, events, adapters, and templates.

A manifest-driven system is easier to inspect, validate, generate, test, and evolve.

This ADR establishes manifest-driven project contracts as a foundational Foundry pattern.

## 2. Problem

Without manifests, the Foundry risks becoming dependent on implicit conventions.

Implicit conventions create several problems.

### 2.1 Hidden Configuration

If important settings are scattered across prose, code, local runtime state, or undocumented defaults, the system becomes difficult to reason about.

### 2.2 Weak Automation

The Foundry cannot reliably generate scaffolds, validate repo contracts, assemble context packs, or coordinate runs if the project state is not machine-readable.

### 2.3 Poor Tool Interoperability

Different tools, agents, and adapters need a shared contract for understanding the project.

Without manifests, each tool invents its own interpretation.

### 2.4 Weak Verification

Repo contract tests need explicit expectations.

If expectations are only implied, tests become incomplete or brittle.

### 2.5 Drift

The implementation may drift away from the intended architecture if the intended architecture is not captured in durable contracts.

### 2.6 Unsafe Defaults

Autonomy mode, external notification delivery, memory promotion, remote push, dependency installation, and destructive changes must not be controlled by vague assumptions.

### 2.7 Poor Handoff

A new session should be able to inspect project manifests and quickly determine the project’s identity, current profile, enabled subsystems, and safety posture.

## 3. Decision

The Agentic Software Foundry will be **manifest-driven**.

Important project, subsystem, scaffold, work, context, runtime, adapter, and evaluation contracts will be represented as machine-readable manifest files.

The initial manifest format will be JSON for machine-readable contracts and Markdown for explanatory policy.

The Foundry Control Plane will own the primary project manifest.

Other subsystems may own subsystem-specific manifests.

Manifests must remain human-inspectable, versionable, and testable.

## 4. Decision Summary

The Foundry will use manifests to define:

1. project identity;
2. active profile;
3. enabled subsystems;
4. safety defaults;
5. forbidden tools and behaviors;
6. policy references;
7. adapter references;
8. work-packet contracts;
9. context-pack contracts;
10. run records;
11. event schemas;
12. scaffold manifests;
13. template manifests;
14. vector index manifests;
15. repo contract expectations.

The primary project manifest will live at:

```text
.foundry/manifests/foundry.project.json
```

The project manifest is not a replacement for the charter or ADRs.

The charter explains purpose.

ADRs explain decisions.

Manifests encode operational contracts.

## 5. Core Rule

The core rule is:

```text
Important behavior must be declared before it is automated.
```

A subsystem should not rely on hidden defaults for consequential behavior.

If a behavior affects memory, architecture, generated files, verification, events, autonomy, external communication, or repository mutation, it should eventually be represented in a manifest, policy, or ADR.

## 6. Manifest Principles

### 6.1 Explicit Over Implicit

The Foundry should prefer explicit manifest fields over hidden assumptions.

### 6.2 Human-Inspectable

Manifests should be readable in ordinary text editors.

### 6.3 Machine-Validatable

Manifests should eventually have schemas or repo contract tests.

### 6.4 Versioned

Manifests should include schema versions.

### 6.5 Source-Controlled

Important manifests should live in the repository.

### 6.6 Minimal at First

The v1.0 manifests should be simple.

They should not attempt to model the entire future system.

### 6.7 Policy-Aware

Manifests should reference policy documents where behavior requires governance.

### 6.8 Adapter-Friendly

Provider-specific configuration should live behind adapter references, not inside core architecture.

### 6.9 Safe-by-Default

Manifests should default to safe local behavior unless explicitly configured otherwise.

### 6.10 Testable

Repo contract tests should validate required manifests and critical fields.

## 7. Manifest Types

The Foundry will eventually support several manifest types.

### 7.1 Foundry Project Manifest

Defines the project identity and enabled Foundry capabilities.

Expected path:

```text
.foundry/manifests/foundry.project.json
```

### 7.2 Foundry Profile Manifest

Defines profile-level defaults for project maturity and behavior.

Expected future path:

```text
.foundry/manifests/foundry.profile.json
```

### 7.3 Run Manifest

Defines an execution run.

Expected future path:

```text
.foundry/runs/<run-id>/run.json
```

### 7.4 Event Schema Manifest

Defines event schema and event families.

Expected future path:

```text
.foundry/events/schemas/event.schema.json
```

### 7.5 Route Manifest

Defines notification routes.

Expected future path:

```text
.foundry/router/routes.json
```

### 7.6 Agent Capability Manifest

Defines role capabilities and restrictions.

Expected future path:

```text
.foundry/agents/capabilities/default-capabilities.json
```

Markdown may be used first for v1.0 role descriptions.

### 7.7 Work Packet Manifest

Defines work-packet metadata.

Expected future path:

```text
.sdlc/work-packets/<state>/<work-packet-id>.json
```

For v1.0, Markdown work packets may contain structured metadata.

### 7.8 Context Pack Manifest

Defines context-pack metadata.

Expected future path:

```text
.charon/daedalus/context-packs/<context-pack-id>.json
```

For v1.0, Markdown context packs may contain structured metadata.

### 7.9 Handoff Manifest

Defines handoff metadata.

Expected future path:

```text
.charon/daedalus/handoff-packets/<handoff-id>.json
```

For v1.0, Markdown handoff packets may contain structured metadata.

### 7.10 Memory Candidate Manifest

Defines proposed memory metadata.

Expected future path:

```text
.charon/mnemosyne/candidates/<candidate-id>.json
```

For v1.0, Markdown memory candidates may contain structured metadata.

### 7.11 Vector Index Manifest

Defines retrieval index state and policy references.

Expected path:

```text
.charon/argos/index-manifest.json
```

### 7.12 Source Artifact Manifest

Defines indexable source artifacts.

Expected path:

```text
.charon/hephaestus/source-artifact-manifest.json
```

### 7.13 Scaffold Manifest

Defines generated files and template provenance.

Expected future path:

```text
.foundry/runs/<run-id>/scaffold-manifest.json
```

### 7.14 Template Manifest

Defines Monorepo Factory templates.

Expected future path:

```text
templates/<template-name>/template.manifest.json
```

### 7.15 Repo Contract Manifest

Defines repository invariants.

Expected future path:

```text
evals/repo-contracts/repo-contract.manifest.json
```

## 8. Primary Project Manifest

The primary project manifest identifies the project.

Expected path:

```text
.foundry/manifests/foundry.project.json
```

Initial v1.0 example:

```json
{
  "schemaVersion": "0.1.0",
  "projectId": "agentic-software-foundry",
  "projectName": "Agentic Software Foundry",
  "status": "pre-mvp",
  "profile": "governance-grade",
  "description": "A repo-canonical, vector-assisted, policy-gated, model-agnostic system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.",
  "subsystems": {
    "foundryControlPlane": true,
    "charon": true,
    "aiSdlcFramework": true,
    "monorepoFactory": true,
    "eventBus": true,
    "notificationRouter": true,
    "multiAgentRuntime": true,
    "vectorRetrieval": true,
    "worktreeExecution": true,
    "evaluationHarness": true
  },
  "defaults": {
    "autonomyMode": "safe-by-default",
    "localFirst": true,
    "verificationRequired": true,
    "canonicalMemoryRequiresAdmission": true,
    "externalNotificationsEnabled": false,
    "automaticRemotePush": false,
    "automaticMerge": false
  },
  "forbidden": {
    "tools": [
      "bazel"
    ],
    "behaviors": [
      "silent-canonical-memory-promotion",
      "unreviewed-destructive-file-change",
      "automatic-remote-push",
      "automatic-merge",
      "external-notification-without-policy",
      "leaked-code-ingestion"
    ]
  },
  "policies": {
    "charter": "docs/foundry/00-foundry-charter.md",
    "cleanRoom": "governance/CLEAN_ROOM_POLICY.md"
  },
  "adrs": {
    "directory": "docs/adr"
  }
}
```

The exact schema may evolve.

The v1.0 manifest should be intentionally clear and conservative.

## 9. Manifest Schema Versioning

Every machine-readable manifest should include:

```json
{
  "schemaVersion": "0.1.0"
}
```

Schema versions allow later migration.

For v1.0, schema enforcement may be simple or manual.

Later versions should include JSON Schema or TypeScript/Zod validation.

## 10. Project Identity Fields

The project manifest should include:

1. `projectId`;
2. `projectName`;
3. `description`;
4. `status`;
5. `profile`;
6. `createdAt` eventually;
7. `updatedAt` eventually;
8. `owner` eventually;
9. `repository` eventually.

The project ID should be stable and machine-safe.

Example:

```json
{
  "projectId": "agentic-software-foundry",
  "projectName": "Agentic Software Foundry"
}
```

## 11. Profile Fields

The `profile` field declares the maturity and discipline level.

Initial profile:

```json
{
  "profile": "governance-grade"
}
```

Future profiles may include:

1. `minimal`;
2. `standard`;
3. `serious`;
4. `governance-grade`;
5. `enterprise`;
6. `research`;
7. `documentation-first`;
8. `library`;
9. `service`;
10. `platform`.

The project owner’s default for this project is `governance-grade`.

## 12. Subsystem Fields

The `subsystems` object declares enabled architectural subsystems.

Example:

```json
{
  "subsystems": {
    "foundryControlPlane": true,
    "charon": true,
    "aiSdlcFramework": true,
    "monorepoFactory": true,
    "eventBus": true,
    "notificationRouter": true,
    "multiAgentRuntime": true,
    "vectorRetrieval": true,
    "worktreeExecution": true,
    "evaluationHarness": true
  }
}
```

An enabled subsystem should have corresponding repository structure and documentation.

Repo contract tests should eventually verify this.

## 13. Default Behavior Fields

The `defaults` object declares safety-critical behavior.

Example:

```json
{
  "defaults": {
    "autonomyMode": "safe-by-default",
    "localFirst": true,
    "verificationRequired": true,
    "canonicalMemoryRequiresAdmission": true,
    "externalNotificationsEnabled": false,
    "automaticRemotePush": false,
    "automaticMerge": false
  }
}
```

These defaults are intentionally conservative.

## 14. Forbidden Tools and Behaviors

The `forbidden` object declares project-level prohibitions.

Example:

```json
{
  "forbidden": {
    "tools": [
      "bazel"
    ],
    "behaviors": [
      "silent-canonical-memory-promotion",
      "unreviewed-destructive-file-change",
      "automatic-remote-push",
      "automatic-merge",
      "external-notification-without-policy",
      "leaked-code-ingestion"
    ]
  }
}
```

This captures architectural constraints in machine-readable form.

## 15. Policy References

The project manifest should reference controlling policies.

Example:

```json
{
  "policies": {
    "charter": "docs/foundry/00-foundry-charter.md",
    "cleanRoom": "governance/CLEAN_ROOM_POLICY.md"
  }
}
```

Future policy references may include:

1. memory admission policy;
2. redaction policy;
3. worktree policy;
4. external notification policy;
5. dependency policy;
6. release policy;
7. security policy;
8. adapter policy.

## 16. ADR References

The manifest may reference the ADR directory.

Example:

```json
{
  "adrs": {
    "directory": "docs/adr"
  }
}
```

Later versions may include an ADR index.

For v1.0, the directory reference is enough.

## 17. Adapter References

The manifest should eventually reference adapters without embedding secrets.

Example future structure:

```json
{
  "adapters": {
    "models": {
      "default": "manual",
      "available": []
    },
    "vectorStore": {
      "default": "stub",
      "config": ".foundry/adapters/vector-store.stub.json"
    },
    "notifications": {
      "default": "local",
      "externalEnabled": false
    }
  }
}
```

Secrets must not be stored in manifests.

## 18. Manifest and Secrets

Manifests must not contain secrets.

Forbidden manifest contents include:

1. API keys;
2. tokens;
3. passwords;
4. private keys;
5. credentials;
6. secret URLs;
7. private customer data;
8. sensitive vulnerability details;
9. non-public third-party material.

Manifests may reference environment variable names or local ignored config paths, but not secret values.

## 19. Manifest and Clean-Room Policy

Manifests must respect the Clean-Room Pattern Adoption Policy.

The manifest may record:

1. approved pattern sources;
2. clean-room enforcement enabled;
3. forbidden leaked-code ingestion;
4. external code reuse policy;
5. license review requirement.

But the manifest must not store unauthorized material.

## 20. Manifest and Charon

Charon uses manifests to understand:

1. project identity;
2. enabled memory mode;
3. retrieval mode;
4. context-pack policy;
5. canonical memory admission requirement;
6. trust-level policy references;
7. index manifests.

Charon-specific manifest files may live under:

```text
.charon/
.charon/argos/
.charon/hephaestus/
.charon/daedalus/
.charon/themis/
```

The project manifest coordinates Charon at a high level.

Charon owns Charon-specific contracts.

## 21. Manifest and AI SDLC

The AI SDLC Framework uses manifests to understand:

1. active work protocol;
2. verification requirement;
3. commit policy;
4. work-packet locations;
5. directive locations;
6. risk-level policy;
7. policy-gate references.

The project manifest identifies that the AI SDLC Framework is enabled.

SDLC-specific templates and schemas live under:

```text
.sdlc/
```

## 22. Manifest and Monorepo Factory

The Monorepo Factory uses manifests to understand:

1. project profile;
2. selected templates;
3. enabled features;
4. disabled features;
5. forbidden features;
6. generated files;
7. scaffold provenance;
8. repo contract expectations.

The Factory should produce scaffold manifests whenever it generates files.

A scaffold without a manifest is less auditable.

## 23. Manifest and Event Bus

The Event Bus uses manifests to understand:

1. event schema version;
2. route configuration;
3. sink configuration;
4. external sink enablement;
5. local event log path;
6. event severity policy.

The project manifest declares that the Event Bus is enabled.

Routing details live in:

```text
.foundry/router/routes.json
```

## 24. Manifest and Multi-Agent Runtime

The Multi-Agent Runtime uses manifests to understand:

1. available roles;
2. capability boundaries;
3. routing policy;
4. disagreement protocol;
5. autonomy mode;
6. model/tool adapters.

For v1.0, role definitions may be Markdown.

Later versions may add JSON capability manifests.

## 25. Manifest and Worktree Execution

Worktree execution uses manifests to understand:

1. worktree allocation policy;
2. branch naming policy;
3. cleanup policy;
4. run-to-worktree mapping;
5. automatic merge setting;
6. automatic remote push setting.

The project manifest must default automatic merge and push to false.

Worktree-specific manifests live under:

```text
.foundry/worktrees/
```

## 26. Manifest and Vector Retrieval

Vector retrieval uses manifests to understand:

1. index ID;
2. vector store provider;
3. authoritative status;
4. chunking policy;
5. ranking policy;
6. embedding policy;
7. last indexed timestamp;
8. source artifact manifest;
9. query contract.

Argos and Hephaestus own these manifests.

The project manifest declares vector retrieval enabled.

## 27. Manifest and Evaluation Harness

The Evaluation Harness uses manifests to understand expected project structure and behavior.

Repo contract tests may read:

1. project manifest;
2. subsystem flags;
3. required paths;
4. forbidden tools;
5. forbidden behaviors;
6. policy references;
7. ADR directory.

The evaluation harness should eventually fail if the manifest claims a subsystem is enabled but required files are missing.

## 28. Manifest Validation

Manifest validation should evolve in stages.

### 28.1 Stage 1: Manual Inspection

For early documentation-only work, manifests are inspected manually.

### 28.2 Stage 2: Repo Contract Tests

Repo contract tests verify required files and critical fields.

### 28.3 Stage 3: JSON Schema

Machine-readable schemas validate manifest shape.

### 28.4 Stage 4: Type-Safe Runtime

Runtime code uses typed manifest parsers.

### 28.5 Stage 5: Migration Support

Schema changes include migration tooling.

For v1.0, Stage 2 is sufficient.

## 29. Manifest Location Rules

Manifest files should live near the subsystem they govern.

Examples:

```text
.foundry/manifests/foundry.project.json
.charon/argos/index-manifest.json
.charon/hephaestus/source-artifact-manifest.json
.foundry/router/routes.json
templates/<template-name>/template.manifest.json
```

The primary project manifest lives under `.foundry/manifests/`.

## 30. Manifest Naming Rules

Manifest names should be explicit.

Good:

```text
foundry.project.json
index-manifest.json
source-artifact-manifest.json
template.manifest.json
repo-contract.manifest.json
```

Avoid vague names:

```text
config.json
settings.json
data.json
stuff.json
```

The name should explain the contract.

## 31. Manifest Commit Policy

Changes to manifests should be committed atomically.

Manifest changes often alter behavior.

Recommended commit examples:

```text
chore(foundry): add project manifest
chore(charon): add vector index manifest
chore(factory): add template manifest
chore(events): add notification route manifest
test(repo): validate foundry project manifest
```

Architecture-affecting manifest changes may require ADR updates.

## 32. Manifest Change Policy

Changing a manifest may require review if it affects:

1. autonomy mode;
2. memory admission;
3. external notifications;
4. automatic push;
5. automatic merge;
6. forbidden tools;
7. security policy;
8. clean-room policy;
9. enabled subsystems;
10. release behavior.

For v1.0, this review is manual.

Later versions may enforce this through policy gates.

## 33. Manifest Drift

Manifest drift occurs when manifests claim one thing and the repository does another.

Examples:

1. manifest says Charon is enabled but `.charon/` is missing;
2. manifest says Event Bus is enabled but `events.jsonl` is missing;
3. manifest forbids Bazel but Bazel files exist;
4. manifest says external notifications are disabled but a Discord sink is active;
5. manifest says verification is required but work packets omit verification.

Repo contract tests should detect drift.

## 34. Manifest as Contract, Not Suggestion

Manifests are contracts.

They are not mere comments.

If a manifest says a subsystem is enabled, the required structure should exist.

If a manifest forbids a behavior, the system should not perform that behavior.

If a manifest enables a profile, generated scaffolds should honor that profile.

If a manifest references a policy, the policy should exist.

## 35. v1.0 Scope

Required for v1.0:

1. `.foundry/manifests/` exists;
2. `.foundry/manifests/foundry.project.json` exists;
3. the project manifest identifies the project;
4. the project manifest declares enabled subsystems;
5. the project manifest declares safe defaults;
6. the project manifest forbids Bazel;
7. the project manifest forbids unsafe behaviors;
8. the project manifest references the charter;
9. the project manifest references the clean-room policy;
10. repo contract tests eventually validate the manifest.

Not required for v1.0:

1. full JSON Schema validation;
2. manifest migration tooling;
3. web UI editing;
4. external adapter configs;
5. secret management integration;
6. multi-project registry;
7. full template manifest registry;
8. automated policy enforcement for all manifest fields.

## 36. Initial Project Manifest Content

When the initial scaffold is created, the first project manifest should contain at least:

```json
{
  "schemaVersion": "0.1.0",
  "projectId": "agentic-software-foundry",
  "projectName": "Agentic Software Foundry",
  "status": "pre-mvp",
  "profile": "governance-grade",
  "description": "A repo-canonical, vector-assisted, policy-gated, model-agnostic system for generating, executing, verifying, documenting, remembering, and resuming serious software work with AI.",
  "subsystems": {
    "foundryControlPlane": true,
    "charon": true,
    "aiSdlcFramework": true,
    "monorepoFactory": true,
    "eventBus": true,
    "notificationRouter": true,
    "multiAgentRuntime": true,
    "vectorRetrieval": true,
    "worktreeExecution": true,
    "evaluationHarness": true
  },
  "defaults": {
    "autonomyMode": "safe-by-default",
    "localFirst": true,
    "verificationRequired": true,
    "canonicalMemoryRequiresAdmission": true,
    "externalNotificationsEnabled": false,
    "automaticRemotePush": false,
    "automaticMerge": false
  },
  "forbidden": {
    "tools": [
      "bazel"
    ],
    "behaviors": [
      "silent-canonical-memory-promotion",
      "unreviewed-destructive-file-change",
      "automatic-remote-push",
      "automatic-merge",
      "external-notification-without-policy",
      "leaked-code-ingestion"
    ]
  },
  "policies": {
    "charter": "docs/foundry/00-foundry-charter.md",
    "cleanRoom": "governance/CLEAN_ROOM_POLICY.md"
  },
  "adrs": {
    "directory": "docs/adr"
  }
}
```

This manifest should be created later during the initial scaffold step.

This ADR defines the decision before implementation.

## 37. Clean-Room Considerations

Manifest patterns are general software architecture patterns.

The Foundry may learn from public examples of manifest-driven systems, but all Foundry manifests must be Foundry-native.

The project must not copy private schemas, proprietary configuration files, private implementation details, private tests, or unauthorized material from external systems.

## 38. Evaluation Implications

Manifest-driven contracts enable strong evaluations.

Future tests can verify:

1. manifest exists;
2. manifest parses as JSON;
3. schema version exists;
4. project ID matches expected value;
5. required subsystems are enabled;
6. safe defaults are present;
7. forbidden tools include Bazel;
8. forbidden behaviors include automatic remote push;
9. policy references point to existing files;
10. enabled subsystems have required directories.

This is one of the first repo contract test targets.

## 39. Repo Contract Implications

Future repo contract tests should validate:

1. `.foundry/manifests/foundry.project.json` exists;
2. it contains `schemaVersion`;
3. it contains `projectId`;
4. it contains `projectName`;
5. it contains `profile`;
6. it contains `subsystems`;
7. it contains `defaults`;
8. it contains `forbidden`;
9. referenced policy files exist;
10. forbidden tools are absent from the repository.

Manifest validation becomes a foundational repo contract.

## 40. Alternatives Considered

### 40.1 Prose-Only Configuration

The Foundry could rely on Markdown documentation only.

This was rejected because prose is not enough for reliable automation, testing, validation, and tool interoperability.

### 40.2 Code-Only Configuration

The Foundry could encode project configuration inside source code.

This was rejected because project contracts should be visible before runtime code exists and should be readable by humans and tools.

### 40.3 Environment Variables as Primary Configuration

The Foundry could use environment variables for core project configuration.

This was rejected because environment variables are poor durable project contracts.

Environment variables may configure local secrets or runtime adapters, but not canonical project identity and architecture.

### 40.4 Database-Only Configuration

The Foundry could store project contracts in a database.

This was rejected for v1.0 because the project is repo-canonical, local-first, and documentation-driven.

A database may later serve as a projection or UI backend, but not the initial contract source.

### 40.5 Convention-Only Configuration

The Foundry could infer everything from directory presence.

This was rejected because convention alone does not capture safety defaults, forbidden behaviors, enabled profiles, or policy references.

## 41. Consequences

### 41.1 Positive Consequences

This decision provides:

1. explicit project contracts;
2. better automation;
3. better repo contract testing;
4. safer defaults;
5. easier handoff;
6. better adapter integration;
7. better scaffolding;
8. better validation;
9. reduced drift;
10. stronger product discipline.

### 41.2 Negative Consequences

This decision adds:

1. manifest files;
2. schema design work;
3. validation requirements;
4. risk of manifest drift;
5. need for migration later;
6. extra maintenance.

These costs are accepted because manifest-driven contracts are central to a serious Foundry.

## 42. Risk Mitigations

The Foundry will mitigate risk by:

1. starting with one primary manifest;
2. keeping v1.0 schema simple;
3. validating only critical fields at first;
4. using repo contract tests;
5. avoiding secrets in manifests;
6. keeping manifests human-readable;
7. evolving schemas gradually;
8. documenting manifest changes through commits and ADRs when needed.

## 43. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.foundry/manifests/`;
2. `.foundry/manifests/foundry.project.json`;
3. project ID;
4. project name;
5. schema version;
6. enabled subsystem declarations;
7. safe defaults;
8. forbidden tools;
9. forbidden behaviors;
10. policy references;
11. repo contract tests validating required manifest fields.

Full schema validation and migration tooling are not required for this ADR to be accepted.

## 44. Future Work

This decision creates future work on:

1. project manifest file;
2. project manifest schema;
3. profile manifest;
4. event schema manifest;
5. route manifest;
6. work packet schema;
7. context pack schema;
8. run schema;
9. scaffold manifest schema;
10. template manifest schema;
11. repo contract manifest;
12. manifest validator;
13. manifest drift checks;
14. policy gate integration;
15. manifest migration tooling.

## 45. Decision

Accepted.

The Agentic Software Foundry will be manifest-driven.

The primary project manifest will live at:

```text
.foundry/manifests/foundry.project.json
```

Manifests will define project identity, enabled subsystems, safe defaults, forbidden tools, forbidden behaviors, policy references, adapters, templates, runs, context packs, events, scaffolds, and repo contracts where appropriate.

The charter explains purpose.

ADRs explain decisions.

Manifests encode operational contracts.

Important behavior must be declared before it is automated.
