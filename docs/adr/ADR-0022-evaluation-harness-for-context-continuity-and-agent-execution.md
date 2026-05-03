---
title: "ADR-0022: Evaluation Harness for Context Continuity and Agent Execution"
description: "Accepts the Evaluation Harness as the subsystem for proving context continuity, repo contracts, directive compilation, handoff quality, and agent execution behavior."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0022"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - evaluation
  - context-continuity
---

# ADR-0022: Evaluation Harness for Context Continuity and Agent Execution

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
- `docs/adr/ADR-0013-repo-contract-testing.md`

## 1. Context

The Agentic Software Foundry is designed to make AI-assisted software work durable, governable, repeatable, auditable, and resumable.

This requires more than code generation.

The Foundry must prove that its core promises actually work.

Those promises include:

1. repository-based context continuity;
2. clean-room architecture discipline;
3. manifest-driven project contracts;
4. directive-to-work-packet compilation;
5. work-packet lifecycle discipline;
6. context-pack generation;
7. handoff generation;
8. event logging;
9. notification routing;
10. memory candidate handling;
11. vector-assisted retrieval;
12. multi-agent role separation;
13. worktree execution readiness;
14. repo contract validation;
15. scaffold correctness.

A system that claims to improve AI-assisted development must itself be evaluated.

This ADR establishes the Evaluation Harness for context continuity and agent execution.

## 2. Problem

Without an evaluation harness, the Foundry’s claims remain aspirational.

The project needs repeatable ways to answer questions such as:

1. Can a new session recover project identity?
2. Can a new session identify the active work packet?
3. Can the system distinguish canonical memory from candidate memory?
4. Can a directive become a valid work packet?
5. Can a work packet define scope, non-goals, verification, and commit guidance?
6. Can a context pack include relevant context without dumping everything?
7. Can a handoff packet preserve enough state for continuation?
8. Can event logs reconstruct what happened?
9. Can repo contract tests detect missing required files?
10. Can agent roles preserve separation of responsibility?
11. Can the system avoid treating generated output as canonical truth?
12. Can the system reject unsafe or forbidden defaults?
13. Can a generated scaffold prove its own structure?
14. Can a failed verification produce a useful repair path?

The Foundry needs tests and evaluations for these capabilities.

## 3. Decision

The Agentic Software Foundry will include an **Evaluation Harness** as a first-class subsystem.

The Evaluation Harness will live under:

```text
evals/
```

The Evaluation Harness will begin with repo contract tests and expand to cover context continuity, directive compilation, work-packet lifecycle, event routing, handoff quality, scaffold correctness, policy compliance, and agent coordination.

The v1.0 implementation will focus on simple, local, deterministic evaluations.

The Foundry will not rely only on subjective confidence that the architecture is good.

It will create evidence.

## 4. Decision Summary

The accepted model is:

```text
Architecture promise
  ↓
Evaluation case
  ↓
Local check or scenario
  ↓
Result artifact
  ↓
Event log
  ↓
Verification record
  ↓
Repair work packet if failed
```

The Evaluation Harness exists to prove Foundry behavior.

Repo contract testing is the first evaluation category.

Context continuity and agent execution evaluations come next.

## 5. Core Rule

The core rule is:

```text
A Foundry capability is not mature until it can be evaluated.
```

The system may begin with documentation and manual workflows, but every important capability should eventually have an evaluation.

## 6. Evaluation Harness Scope

The Evaluation Harness will eventually cover:

1. repo contract tests;
2. context continuity evaluations;
3. directive compilation evaluations;
4. work-packet lifecycle evaluations;
5. context-pack quality evaluations;
6. handoff quality evaluations;
7. event-routing evaluations;
8. manifest consistency evaluations;
9. vector retrieval evaluations;
10. memory admission evaluations;
11. policy compliance evaluations;
12. clean-room hygiene evaluations;
13. scaffold correctness evaluations;
14. multi-agent role-separation evaluations;
15. worktree execution evaluations.

Not all categories are required for v1.0.

## 7. Initial Directory Structure

This ADR implies the future creation of:

```text
evals/
├── README.md
├── repo-contracts/
│   ├── README.md
│   ├── repo-contract.manifest.json
│   ├── required-paths.json
│   ├── forbidden-paths.json
│   └── required-manifest-fields.json
├── context-continuity/
│   ├── README.md
│   └── scenarios/
├── directive-compilation/
│   ├── README.md
│   └── scenarios/
├── work-packet-lifecycle/
│   ├── README.md
│   └── scenarios/
├── event-routing/
│   ├── README.md
│   └── scenarios/
├── agent-coordination/
│   ├── README.md
│   └── scenarios/
├── scaffold-correctness/
│   ├── README.md
│   └── scenarios/
└── policy-compliance/
    ├── README.md
    └── scenarios/
```

The v1.0 implementation may create only the directories and documentation needed for the first Foundry loop.

## 8. Evaluation Categories

### 8.1 Repo Contract Evaluations

Repo contract evaluations verify repository structure, required files, forbidden files, manifest fields, templates, and architectural invariants.

Examples:

1. required files exist;
2. required directories exist;
3. forbidden Bazel files are absent;
4. project manifest exists;
5. clean-room policy exists;
6. work-packet template contains required sections;
7. context-pack template contains required sections;
8. handoff template contains required sections.

### 8.2 Context Continuity Evaluations

Context continuity evaluations verify whether a new session can resume work from repository artifacts.

Examples:

1. identify project identity from charter and manifest;
2. identify accepted ADRs;
3. identify active work packet;
4. identify latest handoff;
5. identify next recommended action;
6. distinguish canonical memory from candidate memory;
7. avoid stale context;
8. assemble a context pack with relevant sources.

### 8.3 Directive Compilation Evaluations

Directive compilation evaluations verify whether short human directives become valid work packets.

Examples:

1. directive produces objective;
2. directive produces scope;
3. directive produces non-goals;
4. directive identifies required context;
5. directive identifies verification;
6. directive recommends commit message;
7. directive identifies policy gates.

### 8.4 Work Packet Lifecycle Evaluations

Work-packet lifecycle evaluations verify that work packets use valid states and do not claim completion prematurely.

Examples:

1. `implemented` does not equal `verified`;
2. closed packet includes verification status;
3. blocked packet includes blocker reason;
4. superseded packet references replacement;
5. packet includes lifecycle log;
6. packet includes recommended commit.

### 8.5 Context Pack Evaluations

Context-pack evaluations verify quality, scope, source traceability, and budget discipline.

Examples:

1. pack identifies purpose;
2. pack identifies target work packet;
3. pack includes source artifacts;
4. pack distinguishes critical from supporting context;
5. pack labels stale or disputed context;
6. pack excludes irrelevant material;
7. pack does not include secrets;
8. pack does not treat itself as canonical memory.

### 8.6 Handoff Evaluations

Handoff evaluations verify whether future sessions can resume from the handoff.

Examples:

1. handoff summarizes completed work;
2. handoff lists changed files;
3. handoff records verification status;
4. handoff records commit status;
5. handoff identifies active work packet;
6. handoff identifies risks;
7. handoff provides next recommended action;
8. handoff includes bootstrap guidance.

### 8.7 Event-Routing Evaluations

Event-routing evaluations verify that important activities emit and route events.

Examples:

1. directive received event emitted;
2. work packet created event emitted;
3. run started event emitted;
4. verification failed event emitted;
5. handoff generated event emitted;
6. latest status is updated;
7. external sinks are disabled by default.

### 8.8 Manifest Consistency Evaluations

Manifest consistency evaluations verify that manifests match repository state.

Examples:

1. enabled subsystems have required directories;
2. safe defaults are present;
3. forbidden tools are listed;
4. policy references point to existing files;
5. event router settings are local-first;
6. automatic push and merge are false.

### 8.9 Vector Retrieval Evaluations

Vector retrieval evaluations verify retrieval behavior once the retrieval layer exists.

Examples:

1. every vector result has source pointer;
2. no orphan vectors exist;
3. retrieval prefers canonical over candidate memory;
4. stale context is labeled;
5. query returns relevant ADRs;
6. context pack cites retrieved sources.

For v1.0, vector retrieval evaluations may be documented but not executable.

### 8.10 Memory Admission Evaluations

Memory admission evaluations verify that generated notes do not become canonical automatically.

Examples:

1. memory candidate is created;
2. candidate includes source reference;
3. candidate has status;
4. canonical promotion requires policy;
5. rejected memory is not treated as active;
6. superseded memory is labeled.

### 8.11 Policy Compliance Evaluations

Policy compliance evaluations verify safe behavior.

Examples:

1. clean-room policy exists;
2. leaked-code ingestion is forbidden;
3. external notifications are disabled by default;
4. automatic remote push is disabled;
5. automatic merge is disabled;
6. destructive changes require policy gate;
7. secrets are not stored in manifests.

### 8.12 Agent Coordination Evaluations

Agent coordination evaluations verify role separation and handoffs.

Examples:

1. Architect does not claim verification;
2. Executor does not approve own work;
3. Verifier records evidence;
4. Librarian produces memory candidates but does not canonicalize them;
5. Operator surfaces status without mutating code;
6. disagreement protocol escalates unresolved issues.

For v1.0, these may be scenario documents.

### 8.13 Scaffold Correctness Evaluations

Scaffold correctness evaluations verify generated project structures.

Examples:

1. generated repo includes required docs;
2. generated repo includes governance policies;
3. generated repo includes manifest;
4. generated repo includes repo contract tests;
5. generated repo excludes forbidden tools;
6. generated repo matches selected profile.

### 8.14 Worktree Execution Evaluations

Worktree execution evaluations verify future isolation behavior.

Examples:

1. worktree manifest exists;
2. run record references worktree;
3. branch naming policy is followed;
4. automatic merge is disabled;
5. automatic push is disabled;
6. uncommitted changes are detected before cleanup.

For v1.0, these remain documentation-level scenarios.

## 9. Evaluation Case Format

Each evaluation case should eventually include:

1. evaluation ID;
2. title;
3. category;
4. purpose;
5. preconditions;
6. input artifacts;
7. steps;
8. expected result;
9. pass criteria;
10. failure meaning;
11. related ADRs;
12. related work packets;
13. repair guidance.

Example:

```markdown
# Evaluation: Context Continuity — Active Work Packet Recovery

## Metadata

- ID: `eval-context-0001`
- Category: `context-continuity`
- Status: `draft`
- Related ADRs:
  - `docs/adr/ADR-0001-repository-based-context-continuity.md`
  - `docs/adr/ADR-0012-context-pack-and-handoff-lifecycle.md`

## Purpose

Verify that a new session can identify the active work packet from repository artifacts.

## Preconditions

1. `.sdlc/work-packets/active/` exists.
2. `.foundry/state/latest-status.md` exists.

## Steps

1. Inspect `.foundry/state/latest-status.md`.
2. Inspect `.sdlc/work-packets/active/`.
3. Identify the active work packet.

## Expected Result

The active work packet is clearly identifiable.

## Failure Meaning

The Foundry cannot reliably resume work from repository state.
```

For v1.0, evaluation cases may be Markdown scenario files.

## 10. Evaluation Result Format

Evaluation results should eventually be recorded.

A result should include:

1. evaluation ID;
2. run ID;
3. timestamp;
4. status;
5. expected result;
6. actual result;
7. evidence;
8. related artifacts;
9. failure notes;
10. recommended repair.

Possible statuses:

```text
passed
failed
not-run
skipped
partial
blocked
```

For v1.0, evaluation results may be recorded as verification records.

## 11. Events

Evaluation activity should emit events.

Potential events:

```text
evaluation.started
evaluation.passed
evaluation.failed
evaluation.skipped
evaluation.blocked
evaluation.result_recorded
```

Repo contract tests may use more specific events:

```text
repo_contract.started
repo_contract.passed
repo_contract.failed
```

For v1.0, simple event recording is enough.

## 12. Relationship to Repo Contract Testing

Repo contract tests are the first Evaluation Harness implementation.

They are foundational because they prove repository shape and safe defaults.

The Evaluation Harness owns repo contract tests.

Repo contract tests are not the entire Evaluation Harness.

They are the starting point.

## 13. Relationship to Foundry Control Plane

The Foundry Control Plane coordinates evaluation runs.

It may:

1. create a run record;
2. invoke evaluation checks;
3. record events;
4. update latest status;
5. attach results to work packets;
6. create follow-up repair work packets.

The Control Plane does not define truth alone.

Evaluation cases derive from ADRs, policies, manifests, templates, and work packets.

## 14. Relationship to Charon

Charon uses evaluation results as context.

Evaluation results may inform:

1. session chronicles;
2. handoff packets;
3. memory candidates;
4. Athena drift reports;
5. future context packs;
6. repair work packets.

Evaluation results do not automatically become canonical memory.

Durable lessons may become memory candidates.

## 15. Relationship to AI SDLC Framework

The AI SDLC Framework uses evaluations as verification mechanisms.

A work packet may require:

1. repo contract evaluation;
2. context continuity evaluation;
3. directive compilation evaluation;
4. event routing evaluation;
5. scaffold correctness evaluation.

A work packet should not be marked verified if required evaluations fail.

## 16. Relationship to Monorepo Factory

The Monorepo Factory should generate evaluation assets for generated repositories.

A generated repo should include repo contract tests appropriate to its profile.

A governance-grade generated repo should include stronger evaluations than a minimal generated repo.

The Factory should treat evaluations as part of scaffold quality.

## 17. Relationship to Event Bus

Evaluations emit events.

Events make evaluation results visible to:

1. latest-status summaries;
2. handoff packets;
3. run records;
4. operator notifications;
5. future dashboards.

## 18. Relationship to Multi-Agent Runtime

The Multi-Agent Runtime should eventually be evaluated.

Evaluations may test:

1. role assignment;
2. capability boundaries;
3. handoff quality;
4. disagreement protocol;
5. verifier independence;
6. reviewer behavior;
7. memory candidate discipline.

For v1.0, these evaluations may be scenario documents.

## 19. Relationship to Worktree Execution

Worktree execution should eventually be evaluated.

Evaluations may test:

1. worktree allocation;
2. branch naming;
3. run-to-worktree mapping;
4. verification inside worktree;
5. merge policy;
6. cleanup policy;
7. no automatic remote push;
8. no automatic merge.

For v1.0, worktree execution evaluations are deferred.

## 20. Relationship to Vector Retrieval

Vector retrieval should eventually be evaluated.

Evaluations may test:

1. source pointer presence;
2. no orphan vectors;
3. retrieval relevance;
4. trust-aware ranking;
5. stale context labeling;
6. context-pack source traceability.

For v1.0, a vector adapter stub and documentation are enough.

## 21. v1.0 Scope

Required for v1.0:

1. `evals/` exists;
2. `evals/README.md` exists;
3. `evals/repo-contracts/` exists;
4. repo contract definitions exist;
5. evaluation categories are documented;
6. the first repo contract checker exists or is planned in a work packet;
7. at least one Foundry loop produces a verification/evaluation record;
8. evaluation results can be referenced in handoff packets.

Not required for v1.0:

1. full automated evaluation runner;
2. LLM-based grading;
3. benchmark suite;
4. web dashboard;
5. production telemetry;
6. full vector retrieval evaluation;
7. full multi-agent simulation;
8. automated worktree evaluation;
9. cross-project evaluation registry;
10. CI integration from day one.

## 22. Initial Evaluation Harness Files

The first scaffold should include:

```text
evals/README.md
evals/repo-contracts/README.md
evals/repo-contracts/repo-contract.manifest.json
evals/repo-contracts/required-paths.json
evals/repo-contracts/forbidden-paths.json
evals/repo-contracts/required-manifest-fields.json
```

Later implementation should add an executable checker.

## 23. Evaluation Readiness Levels

The Foundry may classify evaluations by readiness.

Initial levels:

```text
documented
manual
scripted
automated
ci-enforced
```

Meanings:

1. `documented` means the evaluation is described but not executable;
2. `manual` means a human can run it by following steps;
3. `scripted` means a local script can run it;
4. `automated` means it is part of the local verification command;
5. `ci-enforced` means it runs in CI.

For v1.0, repo contract tests should reach at least `scripted` by the end of MVP.

Other categories may remain `documented` or `manual`.

## 24. Failure Handling

When an evaluation fails, the system should:

1. record the failure;
2. identify the failed check;
3. identify related artifacts;
4. identify likely cause;
5. recommend repair;
6. create or suggest a follow-up work packet;
7. avoid marking work as verified.

A failed evaluation is not merely an error.

It is useful project information.

## 25. Repair Work Packets

Evaluation failures may produce repair work packets.

Example:

```text
repo contract failure
  ↓
missing `.charon/argos/index-manifest.json`
  ↓
repair work packet:
    "Add missing Argos index manifest"
```

This closes the loop between evaluation and SDLC execution.

## 26. Clean-Room Considerations

The Evaluation Harness must comply with the Clean-Room Pattern Adoption Policy.

Evaluation cases and tests must be independently authored.

The Foundry may study public testing and evaluation patterns, but must not copy private benchmark suites, proprietary tests, private prompts, private schemas, or leaked material.

The Evaluation Harness should eventually help enforce clean-room hygiene.

## 27. Security Considerations

Evaluations must avoid leaking secrets.

Evaluation artifacts should not store:

1. API keys;
2. tokens;
3. passwords;
4. private keys;
5. sensitive command output;
6. private endpoints;
7. personal data;
8. forbidden external material.

Security-related evaluations should use safe synthetic fixtures.

## 28. Tutorial Documentation

Evaluation should be part of the tutorial.

Each build step should eventually say:

1. what changed;
2. what evaluation applies;
3. how to run it;
4. what result to expect;
5. what failure means;
6. whether to commit.

This reinforces the Foundry principle that verification is completion evidence.

## 29. Commit Discipline

Evaluation-related changes should be committed atomically.

Examples:

```text
docs(adr): define evaluation harness
chore(evals): add repo contract definitions
test(repo): add repo contract checker
test(repo): validate foundry scaffold contract
docs(evals): document context continuity scenarios
```

## 30. Alternatives Considered

### 30.1 No Evaluation Harness

The Foundry could rely on architecture documents and human judgment.

This was rejected because the system needs evidence that its promises work.

### 30.2 Repo Contract Tests Only

The Foundry could stop at repo contract tests.

This was rejected because repo contracts prove structure, not context continuity, handoff quality, directive compilation, or agent behavior.

### 30.3 Full Benchmark Suite First

The Foundry could begin with an extensive benchmark suite.

This was rejected as too heavy for v1.0.

The Evaluation Harness should start simple and expand.

### 30.4 External Evaluation Platform First

The Foundry could adopt an external evaluation platform.

This is deferred because the initial evaluations should be local-first and Foundry-native.

### 30.5 LLM Judge First

The Foundry could rely on an LLM judge for evaluation quality.

This is deferred because v1.0 should prefer deterministic checks where possible.

LLM-assisted evaluation may be useful later but should not be the foundation.

## 31. Consequences

### 31.1 Positive Consequences

This decision provides:

1. evidence-based architecture;
2. better scaffold confidence;
3. stronger context continuity;
4. clearer failure handling;
5. better tutorial quality;
6. better CI foundation;
7. better portfolio credibility;
8. safer automation;
9. better agent discipline;
10. stronger definition of done.

### 31.2 Negative Consequences

This decision adds:

1. more files;
2. more test design;
3. evaluation maintenance;
4. possible false positives;
5. possible evaluation drift;
6. more work before feature expansion.

These costs are accepted because a Foundry that cannot evaluate itself is not trustworthy.

## 32. Risk Mitigations

The Foundry will mitigate risks by:

1. starting with repo contract tests;
2. keeping v1.0 local-first;
3. preferring deterministic checks;
4. documenting non-executable scenarios before automating them;
5. tying evaluations to ADRs and manifests;
6. recording failures as useful project artifacts;
7. evolving evaluations incrementally.

## 33. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `evals/README.md`;
2. `evals/repo-contracts/README.md`;
3. `evals/repo-contracts/repo-contract.manifest.json`;
4. `evals/repo-contracts/required-paths.json`;
5. `evals/repo-contracts/forbidden-paths.json`;
6. `evals/repo-contracts/required-manifest-fields.json`;
7. documentation of evaluation categories;
8. at least one repo contract evaluation;
9. at least one verification record produced by a Foundry loop;
10. a handoff packet referencing evaluation status.

The full automated evaluation harness is not required at the moment this ADR is committed.

This ADR establishes the evaluation architecture.

## 34. Future Work

This decision creates future work on:

1. evaluation directory scaffold;
2. repo contract definitions;
3. repo contract checker;
4. evaluation result format;
5. evaluation events;
6. verification record integration;
7. context continuity scenario files;
8. directive compilation scenario files;
9. work-packet lifecycle scenario files;
10. event-routing scenario files;
11. scaffold correctness scenario files;
12. policy compliance scenario files;
13. agent coordination scenario files;
14. CI integration;
15. evaluation dashboard later.

## 35. Decision

Accepted.

The Agentic Software Foundry will include an Evaluation Harness.

The Evaluation Harness will begin with repo contract tests and expand to context continuity, directive compilation, work-packet lifecycle, context-pack quality, handoff quality, event routing, manifest consistency, vector retrieval, memory admission, policy compliance, scaffold correctness, agent coordination, and worktree execution.

A Foundry capability is not mature until it can be evaluated.

The repository is the artifact.

The evaluation harness proves the artifact satisfies its contract.
