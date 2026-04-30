---
title: "ADR-0008: Worktree-Based Parallel Execution"
description: "Accepts Git worktrees as the preferred future isolation model for parallel work-packet and agent execution."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0008"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - git
  - worktrees
---

# ADR-0008: Worktree-Based Parallel Execution

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

## 1. Context

The Agentic Software Foundry is intended to support disciplined AI-assisted software development across human-directed work packets, multiple agent roles, verification loops, handoffs, and eventually parallel execution.

As the Foundry matures, more than one unit of work may be active at the same time.

Examples:

1. one agent implements an event writer;
2. another agent writes documentation;
3. another agent prepares repo contract tests;
4. another agent reviews generated scaffold structure;
5. another agent evaluates context-pack quality;
6. another agent repairs verification failures.

Parallel work can increase speed, but it also increases risk.

If multiple agents or tools modify the same working directory at the same time, the repository can become difficult to reason about. Files may conflict, verification results may become unreliable, and agents may accidentally overwrite each other’s work.

The Foundry therefore needs an isolation model for parallel or semi-parallel execution.

Git worktrees are a natural fit because they allow multiple working directories to share the same repository while isolating branches and file changes.

This ADR establishes worktree-based parallel execution as the Foundry’s preferred future model for isolated agent runs.

## 2. Problem

The Foundry must eventually support concurrent or independent execution without losing control.

Several problems arise when work is not isolated.

### 2.1 Shared Working Directory Collisions

If multiple agents edit the same working directory, one agent can overwrite or confuse another agent’s changes.

### 2.2 Unclear Ownership

Without isolation, it becomes unclear which run, agent, or work packet produced a file change.

### 2.3 Weak Verification

Verification results are only meaningful if the verified working tree corresponds to a known work packet and change set.

If unrelated changes are mixed together, verification evidence becomes ambiguous.

### 2.4 Difficult Review

Reviewers need to inspect a coherent unit of change.

Parallel edits in one working tree make review harder.

### 2.5 Poor Rollback

If multiple tasks are mixed together, rolling back one task may accidentally revert another.

### 2.6 Agent Contamination

One agent may read uncommitted or incomplete changes from another agent and treat them as accepted context.

### 2.7 Unsafe Autonomy

As the Foundry gains more autonomous runtime capability, isolation becomes essential for safety.

## 3. Decision

The Agentic Software Foundry will use **worktree-based parallel execution** as the preferred model for isolated agent and work-packet execution.

The expected future model is:

```text
one work packet
→ one branch
→ one worktree
→ one run
→ one scoped change set
→ one verification loop
→ one review decision
→ one merge, commit, or discard decision
```

The v1.0 implementation will not require full automated worktree orchestration.

However, the architecture, directory structure, manifests, run records, and future protocols will reserve space for worktree-based execution.

The Foundry Control Plane will coordinate worktree metadata.

The AI SDLC Framework will define the work packet and execution protocol.

The Multi-Agent Runtime will assign roles to isolated runs.

The Event Bus will record worktree lifecycle events.

Charon will preserve context, chronicles, handoffs, and memory candidates.

## 4. Decision Summary

The accepted model is:

```text
Directive
  ↓
Work packet
  ↓
Branch allocation
  ↓
Worktree allocation
  ↓
Agent run
  ↓
Local implementation
  ↓
Verification in isolated worktree
  ↓
Review
  ↓
Merge or discard
  ↓
Chronicle and handoff
```

The worktree is an execution workspace, not the canonical source of truth.

The repository history remains authoritative.

The work packet defines scope.

The run record links the worktree to the work.

The event log records lifecycle transitions.

## 5. Core Rule

The core rule is:

```text
Parallel work must be isolated by work packet, branch, run, and working tree before it is trusted, reviewed, or merged.
```

For v1.0, this rule is architectural.

For later versions, it should become enforceable by tooling.

## 6. Directory Implications

This ADR implies the future creation of:

```text
.foundry/
└── worktrees/
    ├── README.md
    ├── worktree-policy.md
    ├── allocation-policy.md
    ├── cleanup-policy.md
    └── worktree-manifest.example.json
```

It also implies that run records under `.foundry/runs/` should eventually be able to reference worktrees.

Example:

```text
.foundry/runs/run_20260428_000001/run.json
```

A future run record may reference:

1. work packet;
2. branch;
3. worktree path;
4. assigned agent role;
5. verification result;
6. merge status;
7. cleanup status.

## 7. Worktree Definition

A worktree is a separate working directory attached to the same Git repository.

In Foundry terms, a worktree is an isolated execution workspace for a specific run or work packet.

A worktree may be used by:

1. a human;
2. an Executor agent;
3. a Verifier agent;
4. a Reviewer agent;
5. a scaffold generator;
6. a repair loop;
7. an evaluation run.

A worktree is not itself canonical.

It is an isolated workspace whose changes must be reviewed and merged or discarded.

## 8. Branch Definition

A branch represents the version-control line for a unit of work.

The Foundry should prefer one branch per work packet or tightly scoped work run.

Branch naming should eventually be deterministic.

Example branch names:

```text
work/0001-foundry-event-bus-v0
work/0002-charon-skeleton
docs/adr-0008-worktree-execution
repair/0003-repo-contract-fix
eval/0004-context-continuity
```

The exact naming convention may be defined later.

## 9. Run Definition

A run is a bounded Foundry activity coordinated by the Control Plane.

A run may execute inside a worktree.

A run should know:

1. run ID;
2. work packet ID;
3. branch name;
4. worktree path;
5. assigned role or roles;
6. start time;
7. end time;
8. status;
9. verification result;
10. related events;
11. output artifacts;
12. handoff reference.

The run is the operational record.

The branch is the version-control line.

The worktree is the working directory.

The work packet is the scope contract.

## 10. Worktree Lifecycle

The Foundry will use the following worktree lifecycle:

```text
planned
→ allocated
→ initialized
→ active
→ verifying
→ review_ready
→ merged
→ archived
→ cleaned
```

Alternative terminal states:

```text
discarded
failed
cancelled
stale
conflicted
abandoned
```

For v1.0, this lifecycle may be documented only.

Later tooling should enforce or record it.

## 11. Branch Lifecycle

The Foundry will use the following branch lifecycle:

```text
planned
→ created
→ active
→ verified
→ review_ready
→ merged
→ deleted
```

Alternative terminal states:

```text
discarded
failed
stale
conflicted
abandoned
```

The branch lifecycle should be reflected in events and run metadata.

## 12. Parallel Execution Model

The preferred future parallel execution model is:

```text
main branch
  ├── worktree: ../foundry-worktrees/0001-event-bus
  │   └── branch: work/0001-event-bus
  ├── worktree: ../foundry-worktrees/0002-charon-skeleton
  │   └── branch: work/0002-charon-skeleton
  └── worktree: ../foundry-worktrees/0003-repo-contracts
      └── branch: work/0003-repo-contracts
```

Each worktree should correspond to a coherent unit of work.

Agents should not share one mutable workspace unless the run explicitly requires collaboration and the policy allows it.

## 13. One Work Packet Per Worktree

The default rule is:

```text
one work packet per worktree
```

This creates clear traceability.

Exceptions may be allowed for:

1. grouped documentation-only changes;
2. scaffolding runs that generate multiple related artifacts;
3. repair runs attached to a parent work packet;
4. evaluation runs that do not produce committed changes.

Exceptions should be explicit in the run record.

## 14. One Agent Run Per Worktree

The default future rule is:

```text
one executor run per worktree
```

Reviewer and Verifier roles may inspect the same worktree, but they should do so as separate role transitions recorded in the run.

If multiple Executor agents must collaborate, their participation should be recorded explicitly.

## 15. Worktree Manifest

A worktree manifest should eventually describe each active worktree.

Example:

```json
{
  "schemaVersion": "0.1.0",
  "worktreeId": "wt_20260428_000001",
  "status": "active",
  "workPacket": ".sdlc/work-packets/active/0001-foundry-event-bus-v0.md",
  "runId": "run_20260428_000001",
  "branch": "work/0001-foundry-event-bus-v0",
  "path": "../foundry-worktrees/0001-foundry-event-bus-v0",
  "baseBranch": "main",
  "createdAt": "2026-04-28T00:00:00Z",
  "createdBy": "foundry-control-plane",
  "assignedRoles": ["executor", "verifier", "reviewer"],
  "verificationStatus": "pending",
  "mergeStatus": "not-ready"
}
```

For v1.0, an example manifest is sufficient.

## 16. Worktree Path Policy

Worktree paths should be predictable but not inside the main source tree.

Preferred pattern:

```text
../agentic-software-foundry-worktrees/<worktree-name>
```

Alternative local pattern:

```text
../.foundry-worktrees/<worktree-name>
```

The worktree directory should generally not be nested inside the repository root because nested Git working trees can create confusion.

The exact path policy may be refined later.

## 17. Worktree Naming Policy

Worktree names should be based on work packet ID and slug.

Example:

```text
0001-foundry-event-bus-v0
0002-charon-skeleton
0003-repo-contract-tests
```

The worktree name should be:

1. lowercase;
2. hyphen-separated;
3. stable enough for logs;
4. related to the work packet;
5. free of secrets or sensitive data.

## 18. Branch Naming Policy

Branch names should communicate purpose.

Recommended future prefixes:

```text
work/
docs/
feat/
fix/
repair/
eval/
scaffold/
experiment/
```

Examples:

```text
work/0001-foundry-event-bus-v0
docs/adr-0008-worktree-based-parallel-execution
scaffold/0002-charon-skeleton
test/0003-repo-contracts
```

The branch naming policy should eventually be enforced or validated.

## 19. Merge Policy

A worktree change should not be merged until:

1. the work packet scope is satisfied;
2. verification has passed or failure is documented;
3. review has completed;
4. policy gates are satisfied;
5. the change has an appropriate commit message;
6. handoff notes are produced if required;
7. memory candidates are generated if appropriate;
8. no forbidden files or secrets are present;
9. conflicts are resolved;
10. the human project owner or authorized policy approves the merge.

For v1.0, merge policy may be manual.

## 20. Cleanup Policy

Worktrees should not accumulate forever.

A worktree may be cleaned when:

1. its branch has been merged;
2. its changes have been discarded;
3. its run has been archived;
4. required handoff and chronicle artifacts have been preserved;
5. cleanup has been recorded.

Cleanup should not delete important uncommitted work without explicit confirmation or policy approval.

A cleanup event should be emitted when automated cleanup exists.

## 21. Worktree Events

The Event Bus should eventually support worktree events.

Potential event types:

```text
worktree.planned
worktree.allocated
worktree.initialized
worktree.active
worktree.verification_started
worktree.review_ready
worktree.merged
worktree.discarded
worktree.cleaned
worktree.failed
worktree.conflict_detected
```

Branch-related events may include:

```text
branch.created
branch.checked_out
branch.merged
branch.deleted
branch.conflict_detected
```

For v1.0, these events may be documented before they are emitted automatically.

## 22. Relationship to Foundry Control Plane

The Foundry Control Plane coordinates worktree usage.

It owns:

1. worktree manifests;
2. run-to-worktree mapping;
3. branch allocation policy;
4. worktree lifecycle events;
5. worktree cleanup records;
6. policy gates for merge or discard;
7. operator-visible worktree status.

The Control Plane does not own Git itself.

Git remains the underlying version-control system.

## 23. Relationship to AI SDLC Framework

The AI SDLC Framework defines the work packet.

The work packet should eventually specify whether worktree isolation is required.

Example:

```yaml
execution:
  isolation: worktree
  branch: work/0001-foundry-event-bus-v0
  verificationRequired: true
```

The work packet defines the scope.

The worktree isolates the execution.

## 24. Relationship to Multi-Agent Runtime

The Multi-Agent Runtime uses worktrees to isolate agent execution.

Expected future pattern:

1. Architect prepares or approves work packet.
2. Control Plane allocates branch and worktree.
3. Executor works inside the worktree.
4. Verifier runs checks inside the worktree.
5. Reviewer reviews changes inside the worktree.
6. Human or policy gate approves merge.
7. Control Plane records result.
8. Charon receives chronicle and memory candidates.

This prevents agent roles from trampling shared state.

## 25. Relationship to Charon

Charon provides context to worktree-based runs through context packs and handoff packets.

A worktree run may receive:

1. a context pack;
2. active work packet;
3. relevant ADRs;
4. canonical memory;
5. current project state;
6. verification expectations.

After execution, the run may produce:

1. session chronicle;
2. handoff packet;
3. memory candidates;
4. context-pack improvement notes;
5. drift or conflict observations.

Charon should record the run’s durable context artifacts, not every temporary file in the worktree.

## 26. Relationship to Event Bus

The Event Bus records worktree and branch lifecycle events.

Events should connect:

1. worktree ID;
2. run ID;
3. branch name;
4. work packet path;
5. agent role;
6. verification status;
7. merge status;
8. cleanup status.

This makes parallel execution auditable.

## 27. Relationship to Monorepo Factory

The Monorepo Factory may use worktrees for scaffold generation experiments.

Example:

1. generate a scaffold in an isolated worktree;
2. run repo contract tests;
3. inspect generated output;
4. accept or discard the scaffold;
5. merge only if verified.

This is especially useful when generating large file trees.

## 28. Relationship to Vector Retrieval

Worktree content is not automatically canonical and should not automatically enter the vector index.

Indexing policy should distinguish:

1. canonical repository artifacts;
2. active branch/worktree artifacts;
3. candidate artifacts;
4. generated but unreviewed artifacts;
5. discarded artifacts.

By default, the vector index should prioritize mainline accepted repository content.

Worktree content may be indexed temporarily for run-local context, but it must be clearly labeled as non-canonical.

For v1.0, worktree indexing is deferred.

## 29. Relationship to Repo Contract Tests

Repo contract tests are especially important for worktree-based execution.

Each worktree can run repo contract tests independently.

A worktree should not be considered review-ready if required contract tests fail.

Examples:

1. required directories exist;
2. required ADRs exist;
3. required manifests exist;
4. forbidden tools are absent;
5. generated scaffold obeys profile;
6. clean-room policy exists;
7. Charon paths exist;
8. Foundry paths exist.

## 30. Safety Rules

The Foundry should follow these safety rules.

### 30.1 No Automatic Remote Push by Default

A worktree run must not push to a remote by default.

Remote push requires explicit policy approval.

### 30.2 No Automatic Merge by Default

A worktree run must not merge itself by default.

Merge requires verification and review.

### 30.3 No Silent Deletion

A worktree cleanup process must not delete uncommitted changes without explicit approval or documented policy.

### 30.4 No Canonical Memory Promotion from Worktree Alone

Worktree observations may produce memory candidates.

They must not become canonical memory automatically.

### 30.5 No Trusting Unverified Worktree State

Unverified worktree content must not be treated as accepted project truth.

### 30.6 No Indexing Worktree Content as Canonical

Worktree content must not enter the canonical retrieval index unless merged or explicitly admitted.

## 31. Conflict Handling

Worktree-based execution does not eliminate conflicts.

It makes them explicit.

Potential conflicts include:

1. Git merge conflicts;
2. overlapping file changes;
3. competing architecture changes;
4. duplicate work packets;
5. conflicting generated scaffolds;
6. divergent documentation updates.

Conflict handling protocol:

```text
1. Detect conflict.
2. Record conflict event.
3. Identify affected work packets.
4. Identify controlling ADRs or policies.
5. Ask Reviewer or Architect to evaluate.
6. Repair in a dedicated work packet if needed.
7. Verify after conflict resolution.
8. Record outcome.
```

Conflict resolution should not be hidden inside an agent run.

## 32. Stale Worktrees

A worktree can become stale when:

1. its base branch has moved significantly;
2. its work packet is superseded;
3. its run is abandoned;
4. its branch has unresolved conflicts;
5. required policies changed;
6. relevant ADRs changed;
7. verification expectations changed.

A stale worktree should be marked and either rebased, refreshed, archived, or discarded.

Stale worktree events may include:

```text
worktree.stale_detected
worktree.refresh_required
worktree.rebased
worktree.discard_recommended
```

## 33. v1.0 Scope

Required for v1.0:

1. `.foundry/worktrees/` exists;
2. worktree policy document exists;
3. allocation policy document exists;
4. cleanup policy document exists;
5. example worktree manifest exists;
6. worktree-based execution is documented as the future isolation model;
7. repo contract tests eventually verify required worktree paths.

Not required for v1.0:

1. automatic worktree creation;
2. automatic branch creation;
3. automatic cleanup;
4. parallel autonomous agents;
5. worktree indexing;
6. GitHub branch integration;
7. PR automation;
8. automatic merge;
9. automatic rebase;
10. daemon-based worktree monitoring.

## 34. Manual v1.0 Usage

Even before automation, the project may use manual worktree discipline.

Example manual workflow:

```bash
git worktree add ../agentic-software-foundry-worktrees/0001-event-bus -b work/0001-event-bus-v0
cd ../agentic-software-foundry-worktrees/0001-event-bus
```

After work is complete:

```bash
git status
git diff
# run verification
git add .
git commit -m "feat(foundry): add event bus jsonl writer"
```

Then merge from the main working tree according to project policy.

The exact command sequence will be documented later when implementation begins.

## 35. Git Worktree Constraints

Git worktrees have constraints that the Foundry must respect.

Important considerations:

1. one branch cannot be checked out in multiple worktrees at the same time;
2. worktrees need cleanup when removed manually;
3. nested worktrees can confuse tooling;
4. uncommitted work must be handled carefully;
5. some tools assume repository root location;
6. relative paths may behave differently from the main worktree;
7. environment files may need safe copying or explicit exclusion;
8. generated files can create large diffs.

The Foundry should document these constraints in its worktree policy.

## 36. Environment and Secrets

Worktrees must not encourage unsafe secret copying.

Rules:

1. do not copy secrets into worktrees by default;
2. do not commit `.env` files;
3. use example environment files where needed;
4. prefer local ignored files for secrets;
5. avoid logging secrets in worktree events;
6. avoid indexing secret-bearing files;
7. avoid routing secret-bearing status externally.

Secret policy will be refined later.

## 37. Clean-Room Considerations

Worktree-based execution is a general Git and software engineering pattern.

The Foundry may study public examples of worktree-based agent execution and parallel development.

The implementation must remain Foundry-native and comply with the Clean-Room Pattern Adoption Policy.

The Foundry must not copy private orchestration code, private branch policies, private agent run schemas, or proprietary runtime internals from external systems.

## 38. Evaluation Implications

Worktree-based execution enables future evaluations.

Possible evaluations:

1. can the Foundry allocate a worktree for a work packet?
2. can the run record reference the worktree?
3. can verification run inside the worktree?
4. can the system detect uncommitted changes?
5. can the system detect conflicting branches?
6. can the system produce review-ready status?
7. can the system discard a failed run safely?
8. can the system avoid indexing worktree content as canonical?
9. can the system preserve handoff after cleanup?
10. can the system merge only verified work?

These evaluations are deferred until after the core local Foundry loop is proven.

## 39. Repo Contract Implications

Future repo contract tests should verify:

1. `.foundry/worktrees/` exists;
2. `.foundry/worktrees/README.md` exists;
3. `.foundry/worktrees/worktree-policy.md` exists;
4. `.foundry/worktrees/allocation-policy.md` exists;
5. `.foundry/worktrees/cleanup-policy.md` exists;
6. `.foundry/worktrees/worktree-manifest.example.json` exists;
7. worktree policy references work packets;
8. cleanup policy forbids silent deletion of uncommitted work;
9. allocation policy forbids automatic remote push by default;
10. worktree content is not treated as canonical memory by default.

## 40. Alternatives Considered

### 40.1 Shared Working Directory

The Foundry could use one working directory for all agents and work packets.

This was rejected because it makes parallel execution unsafe, review difficult, and verification ambiguous.

### 40.2 Branches Without Worktrees

The Foundry could use branches only.

This is useful but insufficient for parallel local execution because only one branch can be active in a working directory at a time.

Branches remain part of the model, but worktrees provide separate working directories.

### 40.3 Full Clone Per Agent

The Foundry could create a full repository clone per agent.

This provides isolation but is heavier and less convenient than Git worktrees.

It may be useful for remote or sandboxed execution later, but worktrees are the preferred local-first model.

### 40.4 Container Per Agent

The Foundry could use containers for each agent run.

This may be useful later for sandboxing, reproducibility, and security.

However, containers alone do not solve Git branch/change tracking.

The likely future model may combine worktrees and containers.

For v1.0, full containerized execution is deferred.

### 40.5 No Parallel Execution

The Foundry could avoid parallel execution entirely.

This would simplify the system, but it would limit future multi-agent capability.

The Foundry will support sequential v1.0 execution while designing for worktree-based parallelism later.

## 41. Consequences

### 41.1 Positive Consequences

This decision provides:

1. safer parallel execution;
2. clearer work ownership;
3. cleaner review;
4. better rollback;
5. stronger verification boundaries;
6. future multi-agent readiness;
7. better branch discipline;
8. clearer run-to-change traceability;
9. safer scaffold experiments;
10. stronger operator visibility.

### 41.2 Negative Consequences

This decision adds:

1. Git worktree complexity;
2. branch lifecycle management;
3. cleanup requirements;
4. path management concerns;
5. possible tool compatibility issues;
6. future automation complexity;
7. additional policy documentation.

These costs are accepted because isolation is necessary for serious multi-agent execution.

## 42. Risk Mitigations

The Foundry will mitigate risk by:

1. deferring automation until after v1.0 loop works;
2. documenting manual worktree policy first;
3. forbidding automatic remote push by default;
4. forbidding automatic merge by default;
5. requiring verification before merge;
6. requiring review before merge;
7. requiring cleanup policy;
8. preserving handoff and chronicle artifacts before cleanup;
9. keeping worktree content non-canonical until merged or admitted.

## 43. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.foundry/worktrees/README.md`;
2. `.foundry/worktrees/worktree-policy.md`;
3. `.foundry/worktrees/allocation-policy.md`;
4. `.foundry/worktrees/cleanup-policy.md`;
5. `.foundry/worktrees/worktree-manifest.example.json`;
6. repo contract tests validating required worktree paths;
7. documentation stating that worktree automation is deferred for v1.0;
8. documentation stating that automatic remote push and automatic merge are disabled by default.

Full automated worktree orchestration is not required for this ADR to be accepted.

## 44. Future Work

This decision creates future work on:

1. worktree policy document;
2. allocation policy document;
3. cleanup policy document;
4. worktree manifest schema;
5. branch naming policy;
6. manual worktree runbook;
7. automated worktree creation command;
8. automated worktree cleanup command;
9. run-to-worktree mapping;
10. worktree lifecycle events;
11. merge policy;
12. conflict handling protocol;
13. stale worktree detection;
14. worktree-aware verification;
15. worktree-aware agent runtime;
16. container plus worktree execution model.

## 45. Decision

Accepted.

The Agentic Software Foundry will use worktree-based parallel execution as the preferred future model for isolated agent and work-packet execution.

The default model is one work packet, one branch, one worktree, one run, one verification loop, and one review decision.

The v1.0 implementation will document and reserve the structure for this model but will not require full automated worktree orchestration.

The Foundry will remain safe-by-default.

No automatic remote push.

No automatic merge.

No silent deletion.

No canonical memory promotion from worktree observations alone.

Parallel execution must be isolated before it is trusted.
