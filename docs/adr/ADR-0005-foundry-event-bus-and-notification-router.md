---
title: "ADR-0005: Foundry Event Bus and Notification Router"
description: "Accepts a local-first Event Bus and Notification Router for recording activity and surfacing operator-visible status."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0005"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
  - events
  - notifications
---

# ADR-0005: Foundry Event Bus and Notification Router

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

## 1. Context

The Agentic Software Foundry is intended to coordinate long-running AI-assisted software work.

The system will produce many important events:

1. directives received;
2. work packets created;
3. context packs generated;
4. runs started;
5. runs completed;
6. verification started;
7. verification passed;
8. verification failed;
9. memory candidates created;
10. handoff packets generated;
11. policy gates required;
12. policy gates approved;
13. policy gates rejected;
14. scaffold generation started;
15. scaffold generation completed;
16. vector indexing started;
17. vector indexing completed;
18. agent role transitions;
19. operator notifications;
20. errors and recovery actions.

These events matter because the Foundry must be auditable, resumable, inspectable, and operator-friendly.

The Foundry must also avoid wasting the coding agent’s context window on monitoring, status formatting, delivery routing, and notification mechanics.

Monitoring and notification routing are operational concerns. They should live outside the coding agent’s reasoning context.

This ADR establishes the Foundry Event Bus and Notification Router.

## 2. Problem

Without an event bus and notification router, the Foundry risks several problems.

### 2.1 Hidden Runtime Activity

If important activity is not recorded, future sessions cannot reliably determine what happened.

This weakens auditability, debugging, handoff, and evaluation.

### 2.2 Context Window Pollution

If coding agents are responsible for formatting status updates, watching process output, routing notifications, or maintaining operator dashboards, their limited context window is wasted on operational noise.

### 2.3 Weak Operator Awareness

The human operator needs to know:

1. what started;
2. what completed;
3. what failed;
4. what requires review;
5. what was generated;
6. what was verified;
7. what needs attention;
8. what can be ignored;
9. what comes next.

This should not depend on manually reading every file or chat message.

### 2.4 Poor Resumability

A later session needs structured evidence of past activity.

Raw prose summaries are not enough.

### 2.5 Hard-to-Test Automation

If events are not explicit, it becomes harder to test directive compilation, run lifecycle, verification loops, policy gates, and handoff generation.

### 2.6 Tight Coupling to Notification Channels

The Foundry should not make Discord, Slack, GitHub comments, email, or any specific channel part of its core architecture.

Notification delivery must be adapter-based and optional.

## 3. Decision

The Agentic Software Foundry will include a **Foundry Event Bus** and **Notification Router**.

The Event Bus records structured events.

The Notification Router selects events, renders them into human-readable messages, and delivers them to configured sinks.

The v1.0 implementation will be local-first and file-backed.

The initial event log will be an append-only JSONL file:

```text
.foundry/events/events.jsonl
````

The initial notification sinks will be:

1. console;
2. filesystem.

External sinks such as Discord, Slack, email, GitHub comments, webhooks, and desktop notifications are deferred until after the first local Foundry loop is proven.

## 4. Decision Summary

The accepted model is:

```text
Subsystem activity
  ↓
Typed Foundry event
  ↓
Append-only event log
  ↓
Notification router
  ↓
Renderer
  ↓
Sink
  ↓
Operator-visible status
```

The Event Bus provides structure and auditability.

The Notification Router provides operator visibility.

The coding agent should not be responsible for low-level notification delivery.

## 5. Architecture

The Foundry Event and Notification subsystem will live under:

```text
.foundry/
├── events/
│   ├── events.jsonl
│   ├── schemas/
│   └── README.md
├── router/
│   ├── routes.json
│   └── README.md
├── sources/
│   └── README.md
├── renderers/
│   └── README.md
└── sinks/
    └── README.md
```

The structure may evolve, but the responsibility boundaries are accepted by this ADR.

## 6. Core Concepts

### 6.1 Event

An event is a structured record that something happened.

Events should be append-only, timestamped, typed, and associated with a run or artifact when possible.

Example event types:

```text
foundry.project.initialized
directive.received
directive.compiled
work_packet.created
context_pack.generated
run.started
run.completed
run.failed
verification.started
verification.passed
verification.failed
handoff.generated
memory_candidate.created
policy_gate.required
policy_gate.approved
policy_gate.rejected
notification.emitted
```

### 6.2 Event Source

An event source is anything that produces events.

Initial event sources may include:

1. Foundry CLI commands;
2. directive compiler;
3. work-packet generator;
4. context-pack generator;
5. handoff generator;
6. verification runner;
7. repo contract tests;
8. Charon memory candidate pipeline;
9. indexing pipeline;
10. human operator actions.

Future event sources may include:

1. Git commits;
2. Git branch changes;
3. GitHub issues;
4. GitHub pull requests;
5. tmux sessions;
6. running agents;
7. CI systems;
8. vector indexing workers;
9. notification callbacks;
10. external webhooks.

### 6.3 Event Log

The event log is the durable local record of events.

For v1.0, the event log is:

```text
.foundry/events/events.jsonl
```

Each line is one JSON event.

The log is append-only in normal operation.

### 6.4 Notification Route

A route defines which events should be delivered to which sinks.

Example route concept:

```json
{
  "routeId": "local-status",
  "enabled": true,
  "match": {
    "types": [
      "run.started",
      "run.completed",
      "verification.failed",
      "handoff.generated"
    ]
  },
  "renderers": ["plain-text"],
  "sinks": ["console", "filesystem"]
}
```

### 6.5 Renderer

A renderer converts an event into a human-readable message.

Renderers should be separate from sinks.

This allows the same event to be rendered differently for console, Markdown, GitHub comments, Slack, Discord, or future dashboards.

### 6.6 Sink

A sink delivers a rendered notification.

Initial sinks:

1. console;
2. filesystem.

Future sinks:

1. Discord;
2. Slack;
3. email;
4. GitHub comments;
5. webhooks;
6. desktop notifications;
7. web dashboard;
8. terminal UI.

## 7. Core Rule

The core rule is:

```text
Events record what happened.
Routes decide what matters.
Renderers format messages.
Sinks deliver messages.
Agents should not own notification delivery.
```

This keeps status routing outside the coding agent’s context window.

## 8. Event Schema Requirements

A Foundry event should eventually include:

1. event ID;
2. schema version;
3. event type;
4. timestamp;
5. actor;
6. run ID;
7. source subsystem;
8. subject;
9. status;
10. severity;
11. payload;
12. related artifacts;
13. policy references;
14. trust level;
15. correlation ID;
16. parent event ID where relevant.

For v1.0, the schema may be simple.

Minimum v1.0 event fields:

```json
{
  "id": "evt_20260428_000001",
  "schemaVersion": "0.1.0",
  "type": "run.started",
  "timestamp": "2026-04-28T00:00:00Z",
  "actor": "human",
  "source": "foundry",
  "runId": "run_20260428_000001",
  "message": "Started run run_20260428_000001.",
  "relatedArtifacts": []
}
```

## 9. Event ID Strategy

Event IDs should be stable enough for local audit and debugging.

For v1.0, event IDs may use a timestamp plus sequence format:

```text
evt_YYYYMMDD_NNNNNN
```

Example:

```text
evt_20260428_000001
```

Later versions may use ULIDs or UUIDs.

The precise ID generator is not critical for v1.0 as long as events are unique enough for local operation.

## 10. Event Severity

Events should support severity.

Initial severity levels:

```text
debug
info
notice
warning
error
critical
```

Default severity should be `info`.

Examples:

1. `directive.received` → `info`;
2. `run.completed` → `notice`;
3. `verification.failed` → `error`;
4. `policy_gate.rejected` → `warning` or `error`;
5. `secret.detected` → `critical`.

## 11. Event Families

The Foundry should organize event types by family.

### 11.1 Foundry Events

Examples:

```text
foundry.project.initialized
foundry.manifest.updated
foundry.profile.selected
foundry.policy.loaded
```

### 11.2 Directive Events

Examples:

```text
directive.received
directive.parsed
directive.compiled
directive.rejected
directive.superseded
```

### 11.3 Work Packet Events

Examples:

```text
work_packet.created
work_packet.ready
work_packet.started
work_packet.implemented
work_packet.verified
work_packet.closed
work_packet.failed
```

### 11.4 Run Events

Examples:

```text
run.created
run.started
run.waiting_for_policy
run.completed
run.failed
run.cancelled
run.archived
```

### 11.5 Verification Events

Examples:

```text
verification.started
verification.passed
verification.failed
verification.skipped
verification.recorded
```

### 11.6 Charon Events

Examples:

```text
context_pack.generated
handoff.generated
session_chronicle.written
memory_candidate.created
memory_candidate.reviewed
memory.canonical.admitted
memory.superseded
```

### 11.7 Retrieval Events

Examples:

```text
indexing.started
indexing.completed
indexing.failed
retrieval.requested
retrieval.completed
retrieval.no_results
vector_index.stale
```

### 11.8 Factory Events

Examples:

```text
scaffold.started
scaffold.completed
scaffold.failed
template.selected
repo_contract.started
repo_contract.passed
repo_contract.failed
```

### 11.9 Agent Runtime Events

Examples:

```text
agent.role.assigned
agent.run.started
agent.run.completed
agent.run.failed
agent.disagreement.detected
agent.review.requested
```

### 11.10 Notification Events

Examples:

```text
notification.routed
notification.rendered
notification.emitted
notification.failed
```

## 12. Relationship to the Foundry Control Plane

The Event Bus is part of the Foundry Control Plane.

The Control Plane owns:

1. event log location;
2. event schema registry;
3. routing configuration;
4. sink configuration;
5. run/event correlation;
6. policy for which events require review.

The Event Bus does not own Charon memory, work-packet semantics, template generation, or vector retrieval.

It records and routes activity from those systems.

## 13. Relationship to Charon

Charon emits events for context-continuity activity.

Examples:

1. context pack generated;
2. handoff packet generated;
3. session chronicle written;
4. memory candidate created;
5. canonical memory admitted;
6. memory superseded;
7. conflict detected;
8. drift detected;
9. retrieval completed.

Charon events should reference repository artifacts.

Example:

```json
{
  "type": "handoff.generated",
  "source": "charon.daedalus",
  "relatedArtifacts": [
    ".charon/daedalus/handoff-packets/handoff-2026-04-28.md"
  ]
}
```

The event log is not canonical memory.

It is an audit trail and operational record.

## 14. Relationship to the AI SDLC Framework

The AI SDLC Framework emits events for directive and work-packet activity.

Examples:

1. directive received;
2. directive compiled;
3. work packet created;
4. work packet started;
5. work packet verified;
6. work packet closed;
7. verification failed;
8. commit recommended.

These events support resumability and operator visibility.

## 15. Relationship to the Monorepo Factory

The Monorepo Factory emits events for scaffolding and repo-contract activity.

Examples:

1. scaffold started;
2. template selected;
3. feature enabled;
4. feature disabled;
5. file generated;
6. repo contract started;
7. repo contract passed;
8. repo contract failed.

These events make generation auditable.

## 16. Relationship to Vector Retrieval

Argos and Hephaestus emit events for retrieval and indexing.

Examples:

1. index rebuild started;
2. source artifact discovered;
3. source artifact excluded;
4. chunk created;
5. embedding created;
6. vector upserted;
7. query received;
8. results returned;
9. stale index detected.

These events make the derived retrieval layer inspectable.

## 17. Relationship to Agent Runtime

The Agent Runtime emits events for agent lifecycle and coordination.

Examples:

1. agent role assigned;
2. agent run started;
3. agent run completed;
4. agent run failed;
5. reviewer requested changes;
6. verifier failed verification;
7. disagreement detected;
8. disagreement resolved.

For v1.0, agent runtime events may be defined before real autonomous agents exist.

## 18. Notification Router Responsibilities

The Notification Router owns:

1. reading or receiving events;
2. matching events against routes;
3. selecting renderers;
4. selecting sinks;
5. rendering messages;
6. delivering messages;
7. recording notification result events.

The Notification Router does not decide canonical truth.

The Notification Router does not mutate work packets.

The Notification Router does not bypass policy gates.

The Notification Router does not perform coding work.

## 19. Renderer Responsibilities

A renderer transforms an event into a message format.

Initial renderer:

```text
plain-text
```

Future renderers may include:

1. Markdown;
2. GitHub comment;
3. Slack block kit;
4. Discord embed;
5. HTML;
6. JSON webhook payload;
7. terminal UI line;
8. email body.

Renderer output should be deterministic where practical.

## 20. Sink Responsibilities

A sink delivers rendered output.

Initial sinks:

### 20.1 Console Sink

Prints selected notifications to standard output.

### 20.2 Filesystem Sink

Writes selected notifications to local files such as:

```text
.foundry/events/notifications.log
```

or:

```text
.foundry/state/latest-status.md
```

Future sinks may deliver to external systems.

External sinks must be opt-in and policy-aware.

## 21. Routing Policy

Routes should be explicit.

For v1.0, one simple default route is acceptable.

Example route behavior:

1. log all events to `events.jsonl`;
2. print important events to console;
3. write important status to `.foundry/state/latest-status.md`;
4. do not deliver to external services.

Important events may include:

1. run started;
2. run completed;
3. run failed;
4. verification failed;
5. policy gate required;
6. handoff generated.

## 22. Local-First v1.0 Position

The v1.0 Event Bus and Notification Router must be local-first.

Required v1.0 behavior:

1. write events to JSONL;
2. preserve event order as written;
3. support simple event type names;
4. support simple severity;
5. support related artifact paths;
6. write a latest-status file;
7. support a console-style rendered message;
8. include repo contract tests for required event paths.

Not required for v1.0:

1. daemon process;
2. background watcher;
3. tmux integration;
4. GitHub integration;
5. Discord delivery;
6. Slack delivery;
7. email delivery;
8. retry queues;
9. distributed event processing;
10. event replay engine;
11. web dashboard;
12. long-term event database.

## 23. Append-Only Log Rule

The normal event log behavior is append-only.

Events should not be edited in place during normal operation.

If correction is needed, the system should append a correcting event rather than rewriting history.

Example:

```text
policy_gate.approved
policy_gate.approval_revoked
```

For v1.0, strict append-only enforcement may be manual.

Later versions may enforce this through tooling.

## 24. Event Log and Git

The v1.0 event log is a repository file, but this creates a design trade-off.

Keeping events in Git improves inspectability and auditability.

However, high-volume runtime logs can create noisy commits.

The v1.0 event volume will be low, so a repository-backed event log is acceptable.

Later versions may distinguish:

1. committed milestone events;
2. local uncommitted runtime events;
3. archived run logs;
4. external event stores.

The Foundry should eventually define which events belong in version control and which remain local runtime artifacts.

## 25. Commit Hygiene Position

Not every runtime event must be committed.

The repository should preserve important project artifacts and milestone records.

For v1.0, events may be committed when they are part of a tutorial demonstration or proof of the Foundry loop.

Future policy should distinguish:

1. durable audit events;
2. local runtime noise;
3. generated status;
4. archived run evidence;
5. ignored temporary logs.

## 26. Policy Gates

Certain events indicate policy gates.

Examples:

```text
policy_gate.required
policy_gate.approved
policy_gate.rejected
policy_gate.waived
```

Events do not themselves grant permission.

A `policy_gate.approved` event records a decision that occurred through policy.

The policy authority remains the human/project policy layer.

## 27. Security and Privacy

The Event Bus may contain sensitive operational information.

Risks include:

1. logging secrets;
2. logging private paths;
3. logging command output containing credentials;
4. logging personal data;
5. logging vulnerability details;
6. routing sensitive events externally;
7. committing sensitive runtime logs;
8. leaking project internals to notification channels.

Mitigations:

1. local-first v1.0;
2. no external sinks by default;
3. redaction policy later;
4. event payload minimization;
5. sink-specific policy gates;
6. secret scanning later;
7. explicit routing configuration;
8. conservative event payload design.

Events should avoid storing secrets.

If an event must refer to sensitive material, it should use a safe artifact reference and not include the secret value.

## 28. Clean-Room Considerations

The Event Bus and Notification Router may be informed by public event-router patterns and open-source examples.

The implementation must be Foundry-native and independently authored.

The project must not copy private event schemas, private routing implementations, private notification templates, or proprietary agent lifecycle internals from external systems.

This subsystem is especially inspired by the general pattern that monitoring and delivery should live outside the coding agent’s context window.

The Foundry adopts that pattern in its own architecture.

## 29. Evaluation Implications

The Event Bus makes several evaluations possible.

Future tests can verify:

1. directive compilation emits events;
2. work-packet creation emits events;
3. context-pack generation emits events;
4. handoff generation emits events;
5. verification failure emits an error event;
6. important events route to local status;
7. events reference related artifacts;
8. no external sink is enabled by default;
9. event log file exists;
10. event schema is valid.

This supports the Foundry’s broader evaluation harness.

## 30. Repo Contract Implications

Future repo contract tests should verify:

1. `.foundry/events/` exists;
2. `.foundry/events/events.jsonl` exists;
3. `.foundry/events/schemas/` exists;
4. `.foundry/router/` exists;
5. `.foundry/router/routes.json` exists;
6. `.foundry/renderers/` exists;
7. `.foundry/sinks/` exists;
8. `.foundry/state/` exists;
9. default external sinks are disabled;
10. event-related documentation exists.

## 31. Alternatives Considered

### 31.1 No Event Bus

The Foundry could rely on prose summaries and final outputs.

This was rejected because structured events are necessary for auditability, routing, status, testing, and resumption.

### 31.2 Agent-Managed Notifications

The coding agent could format and deliver all status updates.

This was rejected because notification delivery should not consume the agent’s reasoning context or couple implementation to operator channels.

### 31.3 External Notification Tool First

The Foundry could begin with Discord, Slack, or GitHub comments as the primary status channel.

This was rejected because v1.0 should be local-first and avoid external dependencies.

### 31.4 Full Daemon First

The Foundry could begin with a background daemon watching Git, tmux, GitHub, and agent processes.

This was rejected as too much for v1.0.

The architecture reserves room for daemon behavior later, but the first implementation should be a simple local event log and router.

### 31.5 Database Event Store First

The Foundry could store events in SQLite, Postgres, or another database.

This is deferred because JSONL is simpler, inspectable, and sufficient for the first local Foundry loop.

## 32. Consequences

### 32.1 Positive Consequences

This decision provides:

1. structured audit trail;
2. better operator visibility;
3. cleaner agent context;
4. easier handoff generation;
5. better debugging;
6. better evaluation;
7. notification channel flexibility;
8. future daemon compatibility;
9. clear separation of routing and execution;
10. stronger runtime architecture.

### 32.2 Negative Consequences

This decision adds:

1. event schema design;
2. more files;
3. routing configuration;
4. potential log noise;
5. future redaction concerns;
6. event versioning concerns;
7. distinction between committed and local runtime logs.

These costs are accepted because event-driven observability is central to a trustworthy Foundry.

## 33. Risk Mitigations

The Foundry will mitigate risk by:

1. using JSONL for v1.0;
2. keeping events minimal;
3. avoiding external sinks by default;
4. separating renderers from sinks;
5. recording artifact references instead of large payloads;
6. adding repo contract tests;
7. adding redaction policy later;
8. treating event log as audit/status, not canonical memory.

## 34. Acceptance Criteria

This ADR is satisfied when the repository eventually contains:

1. `.foundry/events/README.md`;
2. `.foundry/events/events.jsonl`;
3. `.foundry/events/schemas/`;
4. `.foundry/router/README.md`;
5. `.foundry/router/routes.json`;
6. `.foundry/sources/README.md`;
7. `.foundry/renderers/README.md`;
8. `.foundry/sinks/README.md`;
9. `.foundry/state/latest-status.md`;
10. repo contract tests validating required event and router paths;
11. at least one local event emitted during the first end-to-end Foundry loop;
12. at least one notification-renderable status artifact produced.

The full daemon, external delivery integrations, and advanced routing are not required for this ADR to be accepted.

## 35. Future Work

This decision creates future work on:

1. event schema;
2. route schema;
3. renderer interface;
4. sink interface;
5. JSONL event writer;
6. event reader;
7. local router;
8. latest-status writer;
9. redaction policy;
10. secret-safe event payloads;
11. external sink policy gates;
12. Git event source;
13. GitHub event source;
14. tmux/process event source;
15. agent lifecycle event source;
16. notification retry policy;
17. event replay;
18. event archival;
19. event evaluation tests;
20. event dashboard.

## 36. Decision

Accepted.

The Agentic Software Foundry will include a Foundry Event Bus and Notification Router.

The Event Bus records structured events.

The Notification Router selects, renders, and delivers operator-visible status.

The v1.0 implementation will be local-first, file-backed, and simple.

Events will be written to JSONL.

Notifications will initially support console and filesystem sinks.

External notification delivery, daemon behavior, tmux watching, GitHub automation, and full agent lifecycle monitoring are deferred until after the first local Foundry loop is proven.

Monitoring and delivery belong outside the coding agent’s context window.

The coding agent should implement work.

The Event Bus should record what happened.

The Notification Router should tell the operator what matters.
