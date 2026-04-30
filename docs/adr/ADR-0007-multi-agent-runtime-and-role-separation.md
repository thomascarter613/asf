---
title: "ADR-0007: Multi-Agent Runtime and Role Separation"
description: "Accepts explicit agent roles, capabilities, handoffs, and responsibility separation for future multi-agent execution."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0007"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - agents
  - runtime
---

# ADR-0007: Multi-Agent Runtime and Role Separation

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

## 1. Context

The Agentic Software Foundry is intended to support disciplined AI-assisted software development across planning, implementation, verification, documentation, memory, handoff, and project generation.

As the Foundry matures, different kinds of work should be performed by different agent roles.

A single agent should not be responsible for every concern at once.

Planning is different from implementation.

Implementation is different from review.

Review is different from verification.

Verification is different from memory admission.

Memory admission is different from operator notification.

Operator notification is different from project authority.

The Foundry therefore needs a model for multi-agent runtime coordination and role separation.

The initial v1.0 system will define the runtime model, roles, capability boundaries, handoff expectations, and disagreement protocol, but it will not require full autonomous multi-agent execution.

## 2. Problem

If a single AI agent plans, implements, reviews, verifies, promotes memory, emits status, and decides when work is complete, the system becomes fragile.

This creates several risks.

### 2.1 Role Confusion

A coding agent may treat its own implementation as verified because it generated it.

A planner may over-specify implementation details.

A reviewer may silently rewrite instead of reviewing.

A memory writer may promote unreviewed assumptions into canonical memory.

An operator-status layer may consume implementation context with notification formatting.

### 2.2 Weak Review

If the same agent both writes and approves its own work, the system loses adversarial review.

The Foundry needs a separation between creation and review.

### 2.3 Weak Verification

If the same agent both claims completion and defines success after the fact, verification becomes unreliable.

Work must be evaluated against pre-declared acceptance criteria and verification commands.

### 2.4 Memory Pollution

If execution agents can directly mutate canonical memory, temporary observations may become durable truth.

Execution results should produce memory candidates, not canonical memory.

### 2.5 Unbounded Autonomy

Multi-agent systems can become dangerous or noisy when agents launch other agents, mutate files, send notifications, or perform external actions without policy boundaries.

The Foundry needs explicit capability limits.

### 2.6 Poor Handoff

If agent roles do not produce structured handoffs, work becomes difficult to resume, review, or audit.

## 3. Decision

The Agentic Software Foundry will include a **Multi-Agent Runtime and Role Separation** model.

The Foundry will define distinct agent roles, capability boundaries, handoff rules, disagreement protocols, and verification responsibilities.

The Foundry Control Plane will coordinate agent roles.

The AI SDLC Framework will define the work protocol.

Charon will provide context and receive memory candidates.

The Event Bus will record agent lifecycle events.

The v1.0 implementation will define the runtime structure and role documents, but full autonomous multi-agent execution is deferred.

## 4. Decision Summary

The accepted model is:

```text
Human project owner
  ↓
Foundry Control Plane
  ↓
Directive Compiler
  ↓
Work Packet
  ↓
Role-assigned agents
  ↓
Execution / Review / Verification
  ↓
Events and run records
  ↓
Chronicle and memory candidates
  ↓
Handoff packet
```

The Foundry will separate the following concerns:

```text
Architect
= plan and architecture alignment

Executor
= implementation

Reviewer
= critique and scope review

Verifier
= tests, checks, and acceptance evidence

Librarian
= documentation, memory candidates, context hygiene

Operator
= status, events, handoff visibility, human-facing run state

Policy Gate
= approval boundary for sensitive transitions

Human Project Owner
= final authority
```

## 5. Core Rule

The core rule is:

```text
No single agent should be trusted to plan, implement, verify, approve, canonicalize, and publish its own work without separation of responsibility.
```

For v1.0, this separation may be procedural and documented.

For later versions, it may be automated through runtime role assignment, tool permissions, and policy gates.

## 6. Directory Implications

This ADR implies the future creation of:

```text
.foundry/
└── agents/
    ├── README.md
    ├── roles/
    │   ├── architect.md
    │   ├── executor.md
    │   ├── reviewer.md
    │   ├── verifier.md
    │   ├── librarian.md
    │   └── operator.md
    ├── capabilities/
    │   ├── README.md
    │   └── default-capabilities.md
    ├── routing/
    │   ├── README.md
    │   └── routing-policy.md
    ├── disagreement/
    │   ├── README.md
    │   └── disagreement-protocol.md
    └── handoffs/
        ├── README.md
        └── agent-handoff-template.md
```

The exact structure may evolve, but role separation is accepted.

## 7. Role: Architect

The Architect role is responsible for planning and architectural alignment.

The Architect may:

1. interpret the directive;
2. identify relevant ADRs;
3. identify affected subsystems;
4. identify architectural risks;
5. propose implementation order;
6. identify policy gates;
7. define acceptance criteria;
8. recommend agent roles;
9. identify non-goals;
10. prevent scope drift.

The Architect must not:

1. silently implement changes outside the work packet;
2. approve its own plan as complete implementation;
3. promote memory directly into canonical state;
4. bypass the human project owner on architectural changes;
5. overwrite accepted ADRs without explicit amendment.

## 8. Role: Executor

The Executor role is responsible for implementation.

The Executor may:

1. create scoped files;
2. modify scoped files;
3. run allowed local commands;
4. implement the work packet;
5. record implementation notes;
6. produce candidate memory;
7. report blockers;
8. request clarification through the Control Plane;
9. prepare a verification request;
10. propose a commit message.

The Executor must not:

1. expand scope silently;
2. claim verification without evidence;
3. approve its own work as final;
4. promote canonical memory;
5. perform destructive actions without policy approval;
6. push remotely by default;
7. enable external integrations by default;
8. modify security policy without explicit authorization.

## 9. Role: Reviewer

The Reviewer role is responsible for critique, scope review, and alignment checking.

The Reviewer may:

1. compare implementation against the work packet;
2. check for scope creep;
3. check architectural boundary violations;
4. inspect documentation updates;
5. identify missing tests;
6. identify missing events;
7. identify missing handoff notes;
8. recommend changes;
9. approve review conditionally;
10. request rework.

The Reviewer must not:

1. silently rewrite implementation while acting as reviewer;
2. ignore failed verification;
3. approve work outside scope;
4. approve policy violations;
5. treat generated output as correct without inspection.

## 10. Role: Verifier

The Verifier role is responsible for evidence of correctness.

The Verifier may:

1. run verification commands;
2. inspect test output;
3. validate repo contract checks;
4. validate generated file presence;
5. validate schemas;
6. record pass/fail results;
7. report skipped checks;
8. identify reproducibility problems;
9. request repair work;
10. emit verification events.

The Verifier must not:

1. invent passing results;
2. hide skipped tests;
3. treat unrun checks as passed;
4. redefine acceptance criteria after implementation;
5. suppress verification failures.

## 11. Role: Librarian

The Librarian role is responsible for documentation, context hygiene, and memory candidate preparation.

The Librarian may:

1. update documentation;
2. prepare session chronicles;
3. prepare memory candidates;
4. identify stale context;
5. identify superseded context;
6. identify missing links between documents;
7. help assemble context packs;
8. help assemble handoff packets;
9. maintain terminology consistency;
10. recommend canonical memory admission.

The Librarian must not:

1. directly promote canonical memory without admission;
2. erase superseded context without policy;
3. treat candidate memory as canonical;
4. hide disputed context;
5. rewrite history to make a run appear cleaner.

## 12. Role: Operator

The Operator role is responsible for human-facing runtime visibility.

The Operator may:

1. summarize run status;
2. render event summaries;
3. write latest-status files;
4. prepare operator notifications;
5. identify required human action;
6. surface policy gates;
7. report failures;
8. report next recommended actions;
9. coordinate handoff visibility;
10. keep operational noise outside the coding context.

The Operator must not:

1. perform implementation;
2. mutate canonical memory;
3. approve policy gates;
4. hide failed events;
5. send external notifications unless enabled by policy;
6. treat notification delivery as project completion.

## 13. Role: Policy Gate

The Policy Gate is not an ordinary agent.

It is a boundary for sensitive decisions.

Policy gates apply to:

1. canonical memory promotion;
2. architecture amendment;
3. clean-room policy changes;
4. destructive file changes;
5. dependency additions;
6. external notification delivery;
7. remote push;
8. release publication;
9. secret handling;
10. enabling autonomous execution.

Policy gates may be implemented manually in v1.0.

The human project owner remains final authority.

## 14. Human Project Owner Authority

The human project owner is the final authority for:

1. project direction;
2. architectural commitments;
3. canonical memory admission;
4. policy changes;
5. security posture;
6. external publication;
7. release decisions;
8. destructive operations;
9. scope changes;
10. final acceptance of major work.

Agents may recommend.

Agents may execute scoped work.

Agents may verify.

Agents may critique.

Agents may not become sovereign authorities.

## 15. Capability Boundaries

Each agent role must have declared capabilities.

A future capability file may define:

```yaml
role: executor
can:
  - read_context_pack
  - read_work_packet
  - create_scoped_files
  - modify_scoped_files
  - run_allowed_local_commands
  - produce_implementation_notes
  - propose_commit_message
cannot:
  - promote_canonical_memory
  - approve_policy_gate
  - push_remote
  - publish_release
  - delete_unscoped_files
  - enable_external_sink
```

For v1.0, capabilities may be documented rather than enforced by a runtime sandbox.

Later versions should enforce capabilities more strictly.

## 16. Agent Routing

The Foundry Control Plane may eventually route work to agent roles based on work-packet type.

Example mapping:

```text
ADR work
→ Architect + Reviewer + Librarian

Implementation work
→ Architect + Executor + Verifier + Reviewer

Documentation work
→ Librarian + Reviewer

Scaffold work
→ Architect + Executor + Verifier

Handoff work
→ Librarian + Operator

Policy work
→ Architect + Reviewer + Human Project Owner
```

For v1.0, this routing may be manual and documented.

## 17. Disagreement Protocol

Agents may disagree.

Disagreement is expected and useful.

The Foundry should not treat disagreement as failure.

The Foundry should provide a protocol for convergence.

Initial disagreement protocol:

```text
1. Identify the disagreement.
2. Identify the affected artifact.
3. Identify the controlling source: charter, ADR, policy, work packet, or human instruction.
4. Compare each position against the controlling source.
5. Prefer the position that preserves accepted architecture and safety.
6. If unresolved, escalate to the human project owner.
7. Record the decision or create a follow-up work packet.
```

Disagreement should produce events when material.

Potential events:

```text
agent.disagreement.detected
agent.disagreement.resolved
agent.disagreement.escalated
```

## 18. Handoff Between Agents

Agent handoff must be explicit.

An agent handoff should include:

1. source role;
2. target role;
3. work packet;
4. current state;
5. files changed;
6. assumptions made;
7. risks;
8. open questions;
9. verification status;
10. requested action.

Example handoff:

```markdown
# Agent Handoff

- From: Executor
- To: Verifier
- Work Packet: `.sdlc/work-packets/active/0001-event-bus-v0.md`
- Status: implementation complete
- Files changed:
  - `packages/foundry-events/src/writer.ts`
- Verification requested:
  - `bun test`
- Known risks:
  - Event ID format is simple and may need replacement later.
```

For v1.0, handoffs may be written manually or generated as part of the session chronicle.

## 19. Wisdom Accumulation

Execution can produce reusable lessons.

Examples:

1. a command failed and the repair is reusable;
2. a repo contract rule caught a missing file;
3. a context pack omitted required context;
4. a work packet was too large;
5. an agent role boundary was unclear;
6. a verification command needs adjustment.

These lessons should enter Charon as memory candidates.

They must not become canonical automatically.

Flow:

```text
agent observation
→ execution lesson
→ memory candidate
→ Themis admission review
→ Athena conflict/drift check
→ Mnemosyne canonical memory, if accepted
```

## 20. Relationship to the Foundry Control Plane

The Foundry Control Plane coordinates the Multi-Agent Runtime.

The Control Plane owns:

1. agent role registration;
2. agent capability references;
3. agent routing configuration;
4. run-to-role assignment;
5. agent lifecycle events;
6. policy gate coordination;
7. adapter coordination.

The Control Plane does not make agents sovereign.

It coordinates role execution within project policy.

## 21. Relationship to the AI SDLC Framework

The AI SDLC Framework owns work packets and protocols.

Agent roles execute or review work according to those protocols.

The work packet defines scope.

The protocol defines discipline.

The agent role defines responsibility.

The Control Plane coordinates runtime.

## 22. Relationship to Charon

Charon provides the context required by agents.

Agents may read:

1. context packs;
2. handoff packets;
3. ADRs;
4. policies;
5. canonical memory;
6. work-packet history;
7. session chronicles.

Agents may produce:

1. session notes;
2. implementation observations;
3. verification records;
4. memory candidates;
5. handoff inputs.

Agents must not directly promote canonical memory unless the role and policy explicitly allow it.

For v1.0, canonical promotion remains manual and policy-gated.

## 23. Relationship to Event Bus

The Multi-Agent Runtime should emit events.

Potential events:

```text
agent.role.assigned
agent.run.started
agent.run.completed
agent.run.failed
agent.review.requested
agent.review.completed
agent.verification.requested
agent.disagreement.detected
agent.disagreement.resolved
agent.handoff.created
```

Events improve auditability and operator awareness.

## 24. Relationship to Vector Retrieval

Agents may use vector-assisted retrieval through Charon.

Agents should not query the vector database as an authority.

They should consume retrieval results through Argos, Anamnesis, and context packs so that trust, lifecycle, and source pointers remain visible.

## 25. Relationship to Monorepo Factory

The Monorepo Factory may be invoked by an Executor role through a work packet.

The Architect role should confirm scaffold scope.

The Verifier role should run repo contract tests.

The Reviewer role should inspect generated structure for boundary violations.

The Librarian role may record generated scaffold documentation and memory candidates.

## 26. Relationship to Worktrees

Future multi-agent execution should use branch or worktree isolation.

A later ADR will define worktree-based parallel execution.

The expected model is:

```text
one work packet
→ one branch or worktree
→ one agent run
→ one verification loop
→ one review decision
→ one merge or discard decision
```

For v1.0, worktree automation is deferred.

## 27. v1.0 Scope

Required for v1.0:

1. `.foundry/agents/` structure exists;
2. role documents exist for Architect, Executor, Reviewer, Verifier, Librarian, and Operator;
3. default capability policy exists;
4. routing policy exists;
5. disagreement protocol exists;
6. agent handoff template exists;
7. work packets can reference suggested roles;
8. events can represent agent lifecycle activity;
9. repo contract tests verify required agent-runtime paths.

Not required for v1.0:

1. real autonomous multi-agent execution;
2. model routing;
3. background agents;
4. tmux-based agent orchestration;
5. automatic worktree allocation;
6. cross-agent message bus;
7. self-launching agent teams;
8. automatic remote push;
9. automatic canonical memory promotion;
10. production sandbox enforcement.

## 28. Safe Default

The Foundry v1.0 default is role-aware but not fully autonomous.

The safe default is:

```text
human-directed
work-packet scoped
local-first
policy-gated
reviewable
verification-first
no automatic remote push
no automatic release
no unbounded agent spawning
no silent canonical memory promotion
```

Autonomous modes may be added later as explicit profiles.

## 29. Clean-Room Considerations

This subsystem may be informed by public multi-agent orchestration patterns.

The Foundry may study public ideas such as planner/executor/reviewer separation, disagreement resolution, model routing, and accumulated execution lessons.

The implementation must be Foundry-native.

The Foundry must not copy private prompts, private role definitions, private orchestration code, private schemas, private tests, or proprietary implementation details.

## 30. Evaluation Implications

The Multi-Agent Runtime enables future evaluations.

Possible evaluations:

1. does the work packet identify appropriate roles?
2. does the Executor stay within scope?
3. does the Reviewer catch scope creep?
4. does the Verifier report failed checks accurately?
5. does the Librarian produce memory candidates without promoting them?
6. does the Operator surface required human action?
7. does disagreement escalate correctly?
8. do agent events get recorded?
9. do handoffs contain required fields?
10. do roles preserve responsibility boundaries?

These evaluations are deferred but should shape the design.

## 31. Repo Contract Implications

Future repo contract tests should verify:

1. `.foundry/agents/` exists;
2. `.foundry/agents/roles/architect.md` exists;
3. `.foundry/agents/roles/executor.md` exists;
4. `.foundry/agents/roles/reviewer.md` exists;
5. `.foundry/agents/roles/verifier.md` exists;
6. `.foundry/agents/roles/librarian.md` exists;
7. `.foundry/agents/roles/operator.md` exists;
8. `.foundry/agents/capabilities/default-capabilities.md` exists;
9. `.foundry/agents/routing/routing-policy.md` exists;
10. `.foundry/agents/disagreement/disagreement-protocol.md` exists;
11. `.foundry/agents/handoffs/agent-handoff-template.md` exists.

## 32. Alternatives Considered

### 32.1 Single General Agent

The Foundry could use one general agent for planning, implementation, review, verification, memory, and handoff.

This was rejected because it weakens separation of responsibility and increases the risk of unchecked errors.

### 32.2 Fully Autonomous Multi-Agent Runtime First

The Foundry could begin with full multi-agent automation.

This was rejected as too much for v1.0.

The first version should define the model and prove the Foundry loop before enabling broad autonomy.

### 32.3 External Multi-Agent Framework First

The Foundry could adopt an existing multi-agent framework immediately.

This is deferred because the Foundry needs to establish its own role model, policy boundaries, and clean-room architecture first.

External frameworks may become adapters later.

### 32.4 Human-Only Role Separation

The Foundry could define roles only as human process roles.

This was rejected because the system is intended to support AI-assisted and eventually multi-agent execution.

However, v1.0 may implement the roles procedurally before automating them.

## 33. Consequences

### 33.1 Positive Consequences

This decision provides:

1. clearer responsibility boundaries;
2. stronger review discipline;
3. better verification discipline;
4. safer memory handling;
5. better handoff quality;
6. future multi-agent readiness;
7. better event modeling;
8. stronger policy-gated autonomy;
9. more testable workflows;
10. better operator visibility.

### 33.2 Negative Consequences

This decision adds:

1. more process;
2. more role documents;
3. more coordination overhead;
4. more lifecycle concepts;
5. more future implementation complexity.

These costs are accepted because the Foundry is designed for serious AI-assisted software work.

## 34. Risk Mitigations

The Foundry will mitigate risks by:

1. defining roles before automating them;
2. keeping v1.0 human-directed;
3. avoiding unbounded agent spawning;
4. requiring work-packet scope;
5. requiring policy gates for sensitive actions;
6. treating verification as evidence, not assertion;
7. routing memory through candidates;
8. recording material agent events;
9. deferring full autonomous execution until the core loop works.

## 35. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.foundry/agents/README.md`;
2. `.foundry/agents/roles/architect.md`;
3. `.foundry/agents/roles/executor.md`;
4. `.foundry/agents/roles/reviewer.md`;
5. `.foundry/agents/roles/verifier.md`;
6. `.foundry/agents/roles/librarian.md`;
7. `.foundry/agents/roles/operator.md`;
8. `.foundry/agents/capabilities/default-capabilities.md`;
9. `.foundry/agents/routing/routing-policy.md`;
10. `.foundry/agents/disagreement/disagreement-protocol.md`;
11. `.foundry/agents/handoffs/agent-handoff-template.md`;
12. repo contract tests validating required agent-runtime paths.

Full autonomous multi-agent execution is not required for this ADR to be accepted.

## 36. Future Work

This decision creates future work on:

1. agent role documents;
2. capability schema;
3. routing policy;
4. disagreement protocol;
5. handoff template;
6. agent lifecycle events;
7. role assignment in work packets;
8. policy-gated runtime execution;
9. model adapter routing;
10. worktree-based execution;
11. sandboxed tool capabilities;
12. multi-agent evaluation cases;
13. autonomous runtime profile;
14. human approval workflow.

## 37. Decision

Accepted.

The Agentic Software Foundry will include a Multi-Agent Runtime and Role Separation model.

The Foundry will distinguish Architect, Executor, Reviewer, Verifier, Librarian, Operator, Policy Gate, and Human Project Owner responsibilities.

The Foundry Control Plane coordinates agent roles.

The AI SDLC Framework defines work protocol.

Charon provides context and receives memory candidates.

The Event Bus records agent lifecycle events.

The v1.0 implementation will define roles, capabilities, routing, disagreement, and handoff documents.

Full autonomous multi-agent execution is deferred.

The Foundry will not allow a single agent to plan, implement, verify, approve, canonicalize, and publish its own work without separation of responsibility.
