---
title: "ADR-0013: Repo Contract Testing"
description: "Accepts repo contract testing as the first-class verification layer for repository structure, manifests, policies, and invariants."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0013"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - repo-contracts
  - evaluation
---

# ADR-0013: Repo Contract Testing

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
- `docs/adr/ADR-0010-manifest-driven-project-contracts.md`
- `docs/adr/ADR-0011-work-packet-lifecycle.md`
- `docs/adr/ADR-0012-context-pack-and-handoff-lifecycle.md`

## 1. Context

The Agentic Software Foundry is intentionally documentation-heavy, manifest-driven, policy-gated, and architecture-first.

It depends on repository structure.

It depends on required files.

It depends on accepted ADRs.

It depends on Charon context directories.

It depends on AI SDLC work-packet directories.

It depends on Foundry Control Plane manifests, events, routes, runs, agents, adapters, policies, state, and worktree structures.

It depends on governance policies.

It depends on clean-room constraints.

It depends on safe defaults.

It depends on forbidden patterns being absent.

If the repository drifts away from the intended shape, the system becomes untrustworthy.

The Foundry therefore needs repo contract tests.

Repo contract tests verify that the repository satisfies its own architectural contract.

They do not replace unit tests, integration tests, type checks, linting, security scans, or runtime verification.

They answer a more foundational question:

> Does this repository still have the structure, files, policies, manifests, and invariants that the architecture says it must have?

## 2. Problem

Without repo contract tests, important architectural assumptions can silently break.

### 2.1 Missing Required Files

A critical file such as the project manifest, clean-room policy, context-pack template, work-packet template, or event log may be missing.

### 2.2 Missing Required Directories

A required subsystem directory such as `.foundry/`, `.charon/`, `.sdlc/`, `templates/`, or `evals/` may be absent.

### 2.3 Broken Manifest References

The project manifest may reference policies or ADR directories that do not exist.

### 2.4 Drift Between ADRs and Repository Shape

An ADR may accept a directory structure, but the repository may not contain it.

### 2.5 Unsafe Defaults

The manifest may accidentally enable unsafe behavior such as automatic remote push, automatic merge, external notifications, or silent canonical memory promotion.

### 2.6 Forbidden Tools

The repository may accidentally introduce forbidden tools, especially Bazel, which the project owner does not want by default.

### 2.7 Missing Lifecycle Templates

The system may claim to support work packets, context packs, handoffs, runs, or memory candidates, but the templates may be missing.

### 2.8 Weak Scaffold Verification

The Monorepo Factory may generate a project tree, but without repo contract tests there is no proof that the scaffold satisfies its declared profile.

### 2.9 Poor AI Handoff

A new session may assume files exist because prior documentation said they should, but the repository may not actually contain them.

### 2.10 Silent Architecture Erosion

Over time, small changes can erode the architecture unless the repository continuously proves its own shape.

## 3. Decision

The Agentic Software Foundry will include **Repo Contract Testing** as a first-class verification category.

Repo contract tests will validate required repository structure, required files, required manifest fields, safe defaults, forbidden tools, policy references, template sections, and key architectural invariants.

The Evaluation Harness will own repo contract tests.

The Monorepo Factory will generate repo contract tests for Foundry-ready projects.

The AI SDLC Framework will include repo contract verification in relevant work packets.

The Foundry Control Plane will record repo contract test events.

Repo contract tests will begin simple and local-first.

## 4. Decision Summary

The accepted model is:

```text
Architecture decisions
  ↓
Required repository contracts
  ↓
Repo contract tests
  ↓
Verification result
  ↓
Event log
  ↓
Work packet status
  ↓
Handoff and memory candidates if needed
```

Repo contract tests prove that the repository satisfies its structural and policy promises.

They are especially important for a system that generates other repositories.

## 5. Core Rule

The core rule is:

```text
A scaffold is not valid merely because files were generated.
A repository is valid only when it satisfies its declared contract.
```

For the Foundry itself, repo contract tests are part of the project’s definition of done.

## 6. Repo Contract Definition

A repo contract is a testable statement about the repository.

Examples:

```text
The repository must contain `docs/foundry/00-foundry-charter.md`.
```

```text
The repository must contain `governance/CLEAN_ROOM_POLICY.md`.
```

```text
The repository must contain `.foundry/manifests/foundry.project.json`.
```

```text
The project manifest must set `defaults.automaticRemotePush` to `false`.
```

```text
The repository must not contain Bazel files.
```

```text
The repository must contain `.charon/daedalus/context-packs/context-pack-template.md`.
```

```text
The work packet template must contain a `Verification` section.
```

A repo contract should be deterministic, local, and repeatable.

## 7. Repo Contract Test Categories

The Foundry will use several categories of repo contract tests.

### 7.1 Required Path Tests

Verify required files and directories exist.

### 7.2 Manifest Tests

Verify machine-readable manifests exist, parse correctly, and contain required fields.

### 7.3 Policy Tests

Verify required governance and policy documents exist.

### 7.4 ADR Tests

Verify required ADRs exist and use expected naming conventions.

### 7.5 Forbidden Pattern Tests

Verify forbidden tools, files, or behaviors are absent.

### 7.6 Template Tests

Verify required templates exist and contain required sections.

### 7.7 Safe Default Tests

Verify unsafe automation defaults are disabled.

### 7.8 Subsystem Consistency Tests

Verify enabled subsystems in manifests correspond to required directories.

### 7.9 Clean-Room Hygiene Tests

Verify no obvious forbidden leak-related paths or files are present.

### 7.10 Generated Scaffold Tests

Verify generated projects satisfy their selected template/profile contract.

## 8. Initial Location

Repo contract tests will live under:

```text
evals/repo-contracts/
```

Recommended v1.0 structure:

```text
evals/
└── repo-contracts/
    ├── README.md
    ├── repo-contract.manifest.json
    ├── required-paths.json
    ├── forbidden-paths.json
    ├── required-manifest-fields.json
    └── run-repo-contracts.md
```

When runtime tooling exists, executable tests may live under:

```text
tests/repo-contracts/
```

or:

```text
packages/repo-contracts/
```

For v1.0, the contract definitions can be created before executable code exists.

## 9. Evaluation Harness Ownership

The Evaluation Harness owns repo contract tests.

Expected future location:

```text
evals/
```

The Evaluation Harness should eventually include:

1. repo contract tests;
2. context continuity evaluations;
3. directive compilation evaluations;
4. work-packet lifecycle evaluations;
5. event routing evaluations;
6. agent coordination evaluations;
7. scaffold correctness evaluations;
8. policy compliance evaluations.

Repo contract tests are the first evaluation category because they are simple and foundational.

## 10. Relationship to Monorepo Factory

The Monorepo Factory must generate repo contract tests for serious project profiles.

A generated repository should not merely include files.

It should include tests that prove:

1. the required structure exists;
2. the required policies exist;
3. the required manifests exist;
4. the selected profile was honored;
5. forbidden tools are absent;
6. required scripts exist;
7. required docs exist;
8. required CI files exist;
9. required templates exist;
10. required governance files exist.

The Factory generates.

Repo contracts verify.

## 11. Relationship to Foundry Control Plane

The Foundry Control Plane coordinates repo contract verification.

It may:

1. create a run record for repo contract verification;
2. emit `repo_contract.started`;
3. invoke repo contract tests;
4. emit `repo_contract.passed`;
5. emit `repo_contract.failed`;
6. update latest status;
7. link verification records;
8. trigger follow-up work packets when contracts fail.

The Control Plane does not define the contracts alone.

Contracts derive from ADRs, manifests, policies, and templates.

## 12. Relationship to AI SDLC Framework

The AI SDLC Framework includes repo contract checks in relevant work packets.

Examples:

1. scaffold work packets should require repo contract verification;
2. manifest work packets should verify manifest fields;
3. Charon scaffold packets should verify Charon paths;
4. Event Bus scaffold packets should verify event paths;
5. SDLC scaffold packets should verify work-packet templates;
6. documentation scaffold packets should verify ADR and policy paths.

A work packet that changes repository structure should usually include a repo contract check.

## 13. Relationship to Charon

Charon uses repo contract results as context.

A failed repo contract may produce:

1. a session chronicle note;
2. a memory candidate;
3. a handoff warning;
4. a follow-up work packet;
5. an Athena drift observation.

Charon does not own repo contract tests, but it records their significance when they affect continuity.

## 14. Relationship to Event Bus

Repo contract testing should emit events.

Potential event types:

```text
repo_contract.started
repo_contract.passed
repo_contract.failed
repo_contract.rule.passed
repo_contract.rule.failed
repo_contract.manifest.invalid
repo_contract.forbidden_path.detected
repo_contract.required_path.missing
```

For v1.0, a simple pass/fail event is sufficient.

## 15. Relationship to Manifest-Driven Contracts

Repo contract tests are the enforcement companion to manifest-driven architecture.

If the project manifest says a subsystem is enabled, repo contract tests should verify its required structure.

Example:

```json
{
  "subsystems": {
    "charon": true
  }
}
```

Then repo contract tests should expect:

```text
.charon/
.charon/mnemosyne/
.charon/daedalus/
.charon/argos/
.charon/hephaestus/
```

If the manifest says external notifications are disabled, repo contract tests should verify the default route does not enable an external sink.

## 16. Relationship to Work Packet Lifecycle

Repo contract failures should affect work packet status.

If a work packet requires repo contract verification and tests fail, the packet must not be marked `verified`.

Possible result:

```text
implemented
→ verifying
→ failed
```

or:

```text
implemented
→ verifying
→ blocked
```

depending on the nature of the failure.

## 17. Relationship to Context Pack and Handoff Lifecycle

A handoff packet should mention repo contract failures when relevant.

A context pack for a repair task may include failed repo contract results.

Repo contract failures are valuable context for future sessions.

## 18. Required Path Contracts

The first class of repo contracts will verify required paths.

Initial required documentation paths:

```text
docs/foundry/00-foundry-charter.md
governance/CLEAN_ROOM_POLICY.md
docs/adr/
```

Initial required future system paths:

```text
.foundry/
.charon/
.sdlc/
templates/
evals/
```

Initial required future subsystem paths are defined by the accepted ADRs and will be created during scaffolding.

## 19. Required ADR Contracts

The repository should verify that accepted foundational ADRs exist.

Initial required ADRs:

```text
docs/adr/ADR-0001-repository-based-context-continuity.md
docs/adr/ADR-0002-clean-room-architecture-and-pattern-adoption.md
docs/adr/ADR-0003-foundry-control-plane.md
docs/adr/ADR-0004-canonical-repository-plus-vector-retrieval.md
docs/adr/ADR-0005-foundry-event-bus-and-notification-router.md
docs/adr/ADR-0006-directive-compiler-and-work-protocols.md
docs/adr/ADR-0007-multi-agent-runtime-and-role-separation.md
docs/adr/ADR-0008-worktree-based-parallel-execution.md
docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md
docs/adr/ADR-0010-manifest-driven-project-contracts.md
docs/adr/ADR-0011-work-packet-lifecycle.md
docs/adr/ADR-0012-context-pack-and-handoff-lifecycle.md
docs/adr/ADR-0013-repo-contract-testing.md
```

Future ADR-0014 will cover the evaluation harness.

## 20. Required Foundry Control Plane Contracts

When `.foundry/` is scaffolded, repo contract tests should verify:

```text
.foundry/README.md
.foundry/manifests/
.foundry/manifests/foundry.project.json
.foundry/events/
.foundry/events/events.jsonl
.foundry/events/schemas/
.foundry/router/
.foundry/router/routes.json
.foundry/runs/
.foundry/agents/
.foundry/worktrees/
.foundry/adapters/
.foundry/policies/
.foundry/state/
```

## 21. Required Charon Contracts

When `.charon/` is scaffolded, repo contract tests should verify:

```text
.charon/README.md
.charon/mnemosyne/
.charon/mnemosyne/canonical/
.charon/mnemosyne/candidates/
.charon/mnemosyne/superseded/
.charon/clio/
.charon/clio/sessions/
.charon/argos/
.charon/argos/retrieval-policy.md
.charon/argos/chunking-policy.md
.charon/argos/ranking-policy.md
.charon/argos/index-manifest.json
.charon/argos/query-contract.json
.charon/hephaestus/
.charon/hephaestus/indexing-pipeline.md
.charon/hephaestus/embedding-policy.md
.charon/hephaestus/reindexing-policy.md
.charon/hephaestus/source-artifact-manifest.json
.charon/anamnesis/
.charon/daedalus/
.charon/daedalus/context-packs/
.charon/daedalus/context-packs/context-pack-template.md
.charon/daedalus/handoff-packets/
.charon/daedalus/handoff-packets/handoff-packet-template.md
.charon/athena/
.charon/themis/
```

## 22. Required SDLC Contracts

When `.sdlc/` is scaffolded, repo contract tests should verify:

```text
.sdlc/README.md
.sdlc/directives/
.sdlc/work-packets/
.sdlc/work-packets/drafts/
.sdlc/work-packets/active/
.sdlc/work-packets/completed/
.sdlc/work-packets/superseded/
.sdlc/work-packets/work-packet-template.md
.sdlc/protocols/
.sdlc/protocols/default-work-protocol.md
.sdlc/protocols/documentation-work-protocol.md
.sdlc/protocols/implementation-work-protocol.md
.sdlc/protocols/verification-work-protocol.md
.sdlc/verification/
.sdlc/checklists/
.sdlc/implementation-order/
.sdlc/commit-plan/
.sdlc/retrospectives/
```

## 23. Required Agent Runtime Contracts

When agent runtime paths are scaffolded, repo contract tests should verify:

```text
.foundry/agents/README.md
.foundry/agents/roles/
.foundry/agents/roles/architect.md
.foundry/agents/roles/executor.md
.foundry/agents/roles/reviewer.md
.foundry/agents/roles/verifier.md
.foundry/agents/roles/librarian.md
.foundry/agents/roles/operator.md
.foundry/agents/capabilities/
.foundry/agents/capabilities/default-capabilities.md
.foundry/agents/routing/
.foundry/agents/routing/routing-policy.md
.foundry/agents/disagreement/
.foundry/agents/disagreement/disagreement-protocol.md
.foundry/agents/handoffs/
.foundry/agents/handoffs/agent-handoff-template.md
```

## 24. Required Worktree Contracts

When worktree paths are scaffolded, repo contract tests should verify:

```text
.foundry/worktrees/README.md
.foundry/worktrees/worktree-policy.md
.foundry/worktrees/allocation-policy.md
.foundry/worktrees/cleanup-policy.md
.foundry/worktrees/worktree-manifest.example.json
```

## 25. Required Template Contracts

When templates are scaffolded, repo contract tests should verify:

```text
templates/
templates/README.md
```

Later template-specific tests should verify:

```text
templates/<template-name>/template.manifest.json
templates/<template-name>/README.md
```

## 26. Required Eval Contracts

The evaluation harness should verify its own structure.

Initial expected paths:

```text
evals/
evals/README.md
evals/repo-contracts/
evals/repo-contracts/README.md
evals/repo-contracts/repo-contract.manifest.json
evals/repo-contracts/required-paths.json
evals/repo-contracts/forbidden-paths.json
```

Executable implementation may come later.

## 27. Manifest Field Contracts

Repo contract tests should eventually verify project manifest fields.

Required fields:

```text
schemaVersion
projectId
projectName
status
profile
description
subsystems
defaults
forbidden
policies
adrs
```

Required default values:

```text
defaults.autonomyMode = safe-by-default
defaults.localFirst = true
defaults.verificationRequired = true
defaults.canonicalMemoryRequiresAdmission = true
defaults.externalNotificationsEnabled = false
defaults.automaticRemotePush = false
defaults.automaticMerge = false
```

Required forbidden values:

```text
forbidden.tools includes bazel
forbidden.behaviors includes silent-canonical-memory-promotion
forbidden.behaviors includes unreviewed-destructive-file-change
forbidden.behaviors includes automatic-remote-push
forbidden.behaviors includes automatic-merge
forbidden.behaviors includes external-notification-without-policy
forbidden.behaviors includes leaked-code-ingestion
```

## 28. Forbidden Path Contracts

The repository should forbid obvious Bazel-related paths by default.

Forbidden paths may include:

```text
WORKSPACE
WORKSPACE.bazel
MODULE.bazel
BUILD
BUILD.bazel
.bazelrc
.bazelversion
```

The project owner prefers not to use Bazel, so Bazel-related config files should not appear unless a future explicit decision supersedes this rule.

The repository should also eventually detect suspicious leak-related artifacts.

Examples of suspicious paths may include:

```text
leaked/
leaks/
claude-code-leak/
source-map-dump/
```

The exact forbidden path list should be conservative to avoid false positives.

## 29. Template Section Contracts

Repo contract tests should eventually verify that templates contain required sections.

### 29.1 Work Packet Template Required Sections

Required sections:

```text
Metadata
Objective
Rationale
Scope
Non-Goals
Required Context
Files to Create
Files to Modify
Files to Avoid
Implementation Steps
Acceptance Criteria
Verification
Documentation Updates
Event Emissions
Policy Gates
Handoff Requirements
Memory Candidate Expectations
Rollback Plan
Recommended Commit
Lifecycle Log
```

### 29.2 Context Pack Template Required Sections

Required sections:

```text
Metadata
Purpose
Use This Context For
Do Not Use This Context For
Critical Context
Supporting Context
Canonical Memory Included
ADRs Included
Policies Included
Work Packets Included
Chronicles or Handoffs Included
Excluded Material
Stale, Superseded, or Disputed Context
Context Budget Notes
Source Traceability
Usage Instructions
Lifecycle Log
```

### 29.3 Handoff Template Required Sections

Required sections:

```text
Metadata
Project Identity
Summary
Completed Work
Changed Files
Verification Status
Documentation Status
Commit Status
Active Work Packet
Open Risks or Blockers
Memory Candidates Produced
Context for Next Session
Next Recommended Action
New-Session Bootstrap Guidance
Lifecycle Log
```

## 30. Initial Contract Representation

For v1.0, repo contract definitions may be represented as JSON.

Example `required-paths.json`:

```json
{
  "schemaVersion": "0.1.0",
  "requiredPaths": [
    "docs/foundry/00-foundry-charter.md",
    "governance/CLEAN_ROOM_POLICY.md",
    "docs/adr",
    ".foundry",
    ".charon",
    ".sdlc",
    "templates",
    "evals"
  ]
}
```

Example `forbidden-paths.json`:

```json
{
  "schemaVersion": "0.1.0",
  "forbiddenPaths": [
    "WORKSPACE",
    "WORKSPACE.bazel",
    "MODULE.bazel",
    ".bazelrc",
    ".bazelversion"
  ]
}
```

These files can exist before executable tooling.

## 31. Initial Test Implementation Options

The first executable repo contract test may be implemented using:

1. TypeScript;
2. Python;
3. shell;
4. Go;
5. Rust.

Given the likely project stack, TypeScript is a reasonable first choice once tooling is initialized.

However, before package tooling exists, documentation and JSON contract files are enough.

The implementation language should be chosen during the first implementation milestone, not in this ADR.

## 32. Repo Contract Results

Repo contract test results should eventually produce a verification record.

Expected future location:

```text
.sdlc/verification/
```

A result should include:

1. test run ID;
2. timestamp;
3. command;
4. passed count;
5. failed count;
6. failed rule IDs;
7. notes;
8. related work packet;
9. related run;
10. recommended follow-up.

## 33. Events

Repo contract test execution should emit events.

Minimum future events:

```text
repo_contract.started
repo_contract.passed
repo_contract.failed
```

Optional detailed events:

```text
repo_contract.rule.passed
repo_contract.rule.failed
repo_contract.required_path.missing
repo_contract.forbidden_path.detected
repo_contract.manifest.invalid
repo_contract.template_section.missing
```

## 34. Failure Handling

A repo contract failure must not be hidden.

If a required path is missing, the system should:

1. record the failure;
2. identify the missing path;
3. identify the related contract;
4. identify the likely responsible subsystem;
5. recommend a repair work packet.

If a forbidden path is detected, the system should:

1. record the failure;
2. identify the forbidden path;
3. identify the rule;
4. recommend removal or ADR review.

## 35. Contract Severity

Repo contracts may have severity levels.

Initial severity levels:

```text
required
recommended
advisory
forbidden
```

Meanings:

1. `required` means the repo fails if absent;
2. `recommended` means warning if absent;
3. `advisory` means informational;
4. `forbidden` means the repo fails if present.

For v1.0, required and forbidden are enough.

## 36. Contract IDs

Each contract rule should eventually have an ID.

Example IDs:

```text
repo.required.foundry-charter
repo.required.clean-room-policy
repo.required.project-manifest
repo.forbidden.bazel-workspace
repo.default.no-automatic-remote-push
repo.template.work-packet.verification-section
```

Rule IDs improve reporting and repair guidance.

## 37. Contract Source

Each contract should eventually be traceable to its source.

Sources may include:

1. Foundry Charter;
2. Clean-Room Policy;
3. ADR;
4. project manifest;
5. template profile;
6. user preference;
7. security policy;
8. package convention.

Example:

```json
{
  "id": "repo.forbidden.bazel-workspace",
  "source": "user-preference",
  "description": "Bazel configuration files are forbidden by default."
}
```

For v1.0, this may be documented but not fully implemented.

## 38. Contract Drift

Repo contract tests should detect drift.

Examples:

1. manifest enables Charon but `.charon/` is missing;
2. ADR accepts Event Bus but `.foundry/events/` is missing;
3. template says verification is required but work packet template lacks a verification section;
4. clean-room policy exists but forbidden leak-ingestion behavior is absent from manifest;
5. Bazel files appear despite project preference.

Drift detection is central to keeping the architecture honest.

## 39. Clean-Room Considerations

Repo contract tests should support the Clean-Room Pattern Adoption Policy.

They may eventually check for:

1. suspicious leak-related filenames;
2. known forbidden directories;
3. missing license records for vendored code;
4. missing attribution records when direct reuse exists;
5. forbidden source-map dumps;
6. unauthorized private material markers.

For v1.0, simple forbidden path checks are sufficient.

Repo contract tests themselves must be independently authored.

## 40. Security Considerations

Repo contract tests should eventually support security hygiene.

Possible future checks:

1. `.env` is ignored;
2. `.env.example` exists where needed;
3. no private keys are committed;
4. no obvious token files are present;
5. security policy exists;
6. dependency policy exists;
7. external notification sinks are disabled by default;
8. automatic remote push is disabled by default.

Full secret scanning is deferred.

## 41. CI Integration

Repo contract tests should eventually run in CI.

Initial CI behavior:

```text
lint
typecheck
test
repo-contract
```

The exact command will be defined later.

For v1.0, local verification is sufficient.

CI integration should occur after package tooling is initialized.

## 42. Relationship to Generated Repositories

The Monorepo Factory should emit repo contracts for generated repositories.

For example, a governance-grade generated repo should include tests asserting:

1. ADR directory exists;
2. clean-room policy exists;
3. security policy exists;
4. docs structure exists;
5. CI exists;
6. package manager config exists;
7. forbidden tools are absent;
8. Charon-compatible files exist if enabled;
9. SDLC files exist if enabled;
10. manifest matches generated structure.

This makes every generated repo self-verifying.

## 43. Relationship to Tutorial Documentation

Tutorial steps should include repo contract checks at natural points.

Example:

```text
After creating the Foundry scaffold, run repo contract tests.
Expected result: all required Foundry, Charon, SDLC, and governance paths pass.
```

This teaches users that generation is not completion.

Verification is completion evidence.

## 44. v1.0 Scope

Required for v1.0:

1. document repo contract testing architecture;
2. create `evals/repo-contracts/`;
3. create repo contract manifest;
4. create required path contract file;
5. create forbidden path contract file;
6. create initial documentation for running repo contracts;
7. later add a simple executable checker;
8. verify foundational paths once scaffold exists.

Not required for v1.0:

1. full JSON Schema validation;
2. CI integration;
3. secret scanning;
4. license scanning;
5. web UI;
6. advanced drift detection;
7. automatic repair;
8. full template-section validation;
9. cross-repo contract management;
10. production-grade policy engine.

## 45. Initial MVP Contract List

The first executable repo contract test should probably check:

1. `docs/foundry/00-foundry-charter.md` exists;
2. `governance/CLEAN_ROOM_POLICY.md` exists;
3. `docs/adr/` exists;
4. `.foundry/` exists;
5. `.charon/` exists;
6. `.sdlc/` exists;
7. `templates/` exists;
8. `evals/` exists;
9. `.foundry/manifests/foundry.project.json` exists;
10. no Bazel config files exist.

This is enough to prove the first structural contract.

## 46. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `evals/README.md`;
2. `evals/repo-contracts/README.md`;
3. `evals/repo-contracts/repo-contract.manifest.json`;
4. `evals/repo-contracts/required-paths.json`;
5. `evals/repo-contracts/forbidden-paths.json`;
6. documentation explaining repo contract testing;
7. later, an executable repo contract checker;
8. at least one repo contract verification result;
9. Event Bus entries for repo contract verification.

The executable checker does not need to exist at the moment this ADR is committed.

This ADR establishes the decision and contract model.

## 47. Future Work

This decision creates future work on:

1. repo contract manifest;
2. required path contract file;
3. forbidden path contract file;
4. required manifest field contract file;
5. template section contract file;
6. executable repo contract checker;
7. repo contract result format;
8. repo contract events;
9. repo contract CI integration;
10. scaffold-generated repo contracts;
11. clean-room hygiene checks;
12. forbidden tool checks;
13. manifest drift checks;
14. automatic repair recommendations;
15. repo contract evaluation reports.

## 48. Alternatives Considered

### 48.1 No Repo Contract Tests

The Foundry could rely on human review.

This was rejected because the system’s structure is too important to leave entirely to manual inspection.

### 48.2 Unit Tests Only

The Foundry could rely on ordinary code unit tests.

This was rejected because unit tests do not prove repository architecture, documentation structure, policies, manifests, or scaffold invariants.

### 48.3 CI-Only Validation

The Foundry could wait until CI exists and put all validation there.

This was rejected because the project should be locally verifiable from the beginning.

### 48.4 Full Policy Engine First

The Foundry could implement a full policy engine immediately.

This was rejected as too heavy for v1.0.

Simple repo contract tests are enough to begin.

### 48.5 Convention-Only Structure

The Foundry could rely on directory conventions without tests.

This was rejected because conventions drift without verification.

## 49. Consequences

### 49.1 Positive Consequences

This decision provides:

1. structural verification;
2. scaffold proof;
3. drift detection;
4. safer generation;
5. stronger documentation discipline;
6. better handoff confidence;
7. better CI foundation;
8. better portfolio quality;
9. stronger governance-grade posture;
10. clearer definition of done.

### 49.2 Negative Consequences

This decision adds:

1. more test artifacts;
2. contract maintenance;
3. possible false positives;
4. extra setup work;
5. need to update tests when architecture evolves.

These costs are accepted because the repository is the artifact and must prove its own shape.

## 50. Risk Mitigations

The Foundry will mitigate risks by:

1. starting with simple required and forbidden path checks;
2. keeping contract files human-readable;
3. evolving checks gradually;
4. tying contracts to ADRs and manifests;
5. using clear rule IDs;
6. documenting false positive handling later;
7. keeping v1.0 local-first.

## 51. Decision

Accepted.

The Agentic Software Foundry will include Repo Contract Testing as a first-class verification category.

Repo contract tests verify required structure, required files, required manifests, safe defaults, forbidden tools, policy references, template sections, and architectural invariants.

The Evaluation Harness owns repo contract tests.

The Monorepo Factory generates repo contracts for serious scaffolds.

The AI SDLC Framework includes repo contract verification in work packets.

The Foundry Control Plane records repo contract runs and events.

A generated scaffold is not valid merely because files exist.

A repository is valid only when it satisfies its declared contract.
