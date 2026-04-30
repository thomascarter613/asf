---
title: "Work Packet 0001: Initial Foundry Loop"
description: "Work packet for proving the first complete local Foundry loop through repository-backed artifacts."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: false
tags:

* sdlc
* work-packet
* initial-foundry-loop

---

# Work Packet: Initial Foundry Loop

## Metadata

* ID: `wp-0001`
* Status: `verified`
* Created: `2026-04-28`
* Updated: `2026-04-28`
* Directive: `.sdlc/directives/dir-0001-initial-foundry-loop.md`
* Owner: `project-owner`
* Risk: `low`
* Target Commit: `docs(foundry): add initial foundry loop artifacts`

## Objective

Create the first complete local Foundry loop using repository-backed artifacts.

## Rationale

The Foundry must prove that its architecture can operate locally before adding autonomous agents, runtime daemons, external integrations, vector databases, or web interfaces.

This work packet demonstrates the core continuity loop:

```text
directive
→ work packet
→ context pack
→ run record
→ event log
→ verification record
→ session chronicle
→ memory candidate
→ handoff packet
→ latest status
```

## Scope

This work packet includes:

1. creating a directive record;
2. creating this work packet;
3. creating an initial context pack;
4. creating a run record;
5. recording local JSONL events;
6. creating a verification record;
7. creating a session chronicle;
8. creating a memory candidate;
9. creating a handoff packet;
10. updating latest status;
11. running the repo contract checker.

## Non-Goals

This work packet does not include:

1. implementing autonomous agents;
2. implementing a daemon;
3. implementing external notifications;
4. implementing a production vector database;
5. implementing automatic directive compilation;
6. implementing automatic memory admission;
7. implementing automatic Git commits;
8. adding package tooling.

## Required Context

Read or include:

1. `README.md`;
2. `docs/foundry/00-foundry-charter.md`;
3. `docs/foundry/01-system-boundaries.md`;
4. `docs/foundry/02-v1-mvp-definition.md`;
5. `docs/foundry/03-document-versioning-and-frontmatter.md`;
6. `governance/PROJECT_CONSTITUTION.md`;
7. `governance/CLEAN_ROOM_POLICY.md`;
8. `docs/adr/ADR-0009-charon-sdlc-factory-runtime-integration.md`;
9. `docs/adr/ADR-0011-work-packet-lifecycle.md`;
10. `docs/adr/ADR-0012-context-pack-and-handoff-lifecycle.md`;
11. `docs/adr/ADR-0013-repo-contract-testing.md`;
12. `docs/adr/ADR-0014-evaluation-harness-for-context-continuity-and-agent-execution.md`.

## Files to Create

1. `.sdlc/directives/dir-0001-initial-foundry-loop.md`
2. `.sdlc/work-packets/active/wp-0001-initial-foundry-loop.md`
3. `.charon/daedalus/context-packs/ctx-0001-initial-foundry-loop.md`
4. `.foundry/runs/run-0001-initial-foundry-loop/run.md`
5. `.sdlc/verification/verification-0001-initial-foundry-loop.md`
6. `.charon/clio/sessions/session-0001-initial-foundry-loop.md`
7. `.charon/mnemosyne/candidates/candidate-0001-initial-foundry-loop.md`
8. `.charon/daedalus/handoff-packets/handoff-0001-initial-foundry-loop.md`

## Files to Modify

1. `.foundry/events/events.jsonl`
2. `.foundry/state/latest-status.md`

## Files to Avoid

1. Any package manager files;
2. Any dependency lockfiles;
3. Any external notification configuration;
4. Any Bazel configuration;
5. Any secret-bearing files.

## Implementation Steps

1. Create the directive record.
2. Create the work packet.
3. Create the context pack.
4. Create the run record.
5. Write local JSONL events.
6. Create the verification record.
7. Create the session chronicle.
8. Create the memory candidate.
9. Create the handoff packet.
10. Update latest status.
11. Run the repo contract checker.
12. Commit the work atomically.

## Acceptance Criteria

The work is accepted when:

1. all Initial Foundry Loop artifacts exist;
2. all Markdown files begin with frontmatter;
3. JSON files still parse;
4. the local event log contains the required loop events;
5. the verification record exists;
6. the handoff packet exists;
7. latest status references Milestone 8;
8. repo contract checker returns `Failed: 0`.

## Verification

Run:

```bash
python evals/repo-contracts/check-repo-contracts.py
```

Expected result:

```text
Failed: 0
```

## Verification Status

* Required: `yes`
* Method: `repo contract checker`
* Status: `passed`
* Evidence: `.sdlc/verification/verification-0001-initial-foundry-loop.md`

## Documentation Updates

Update or create:

1. Initial Foundry Loop directive;
2. work packet;
3. context pack;
4. run record;
5. verification record;
6. session chronicle;
7. memory candidate;
8. handoff packet;
9. latest status.

## Documentation Status

* Required: `yes`
* Status: `complete`
* Updated:

  * `.sdlc/directives/dir-0001-initial-foundry-loop.md`
  * `.sdlc/work-packets/active/wp-0001-initial-foundry-loop.md`
  * `.charon/daedalus/context-packs/ctx-0001-initial-foundry-loop.md`
  * `.foundry/runs/run-0001-initial-foundry-loop/run.md`
  * `.sdlc/verification/verification-0001-initial-foundry-loop.md`
  * `.charon/clio/sessions/session-0001-initial-foundry-loop.md`
  * `.charon/mnemosyne/candidates/candidate-0001-initial-foundry-loop.md`
  * `.charon/daedalus/handoff-packets/handoff-0001-initial-foundry-loop.md`
  * `.foundry/state/latest-status.md`

## Event Emissions

Expected events:

1. `directive.received`
2. `work_packet.created`
3. `context_pack.generated`
4. `run.started`
5. `verification.recorded`
6. `session_chronicle.written`
7. `memory_candidate.created`
8. `handoff.generated`
9. `run.completed`

## Policy Gates

Required policy gates:

1. none.

## Handoff Requirements

The handoff should mention:

1. completed loop artifacts;
2. repo contract verification result;
3. next recommended action;
4. commit recommendation.

## Handoff Status

* Required: `yes`
* Status: `complete`
* Handoff Packet: `.charon/daedalus/handoff-packets/handoff-0001-initial-foundry-loop.md`

## Memory Candidate Expectations

This work may produce memory candidates for:

1. the Initial Foundry Loop as the first local proof of the Foundry model;
2. the repo contract checker as first executable verification tool.

## Memory Candidate Status

* Expected: `yes`
* Status: `created`
* Candidates:

  * `.charon/mnemosyne/candidates/candidate-0001-initial-foundry-loop.md`

## Rollback Plan

Revert the commit that adds the Initial Foundry Loop artifacts.

If reverting manually, remove:

1. the directive record;
2. this work packet;
3. the context pack;
4. the run record;
5. the verification record;
6. the session chronicle;
7. the memory candidate;
8. the handoff packet;
9. Milestone 8 event entries;
10. latest status changes.

## Commit Status

* Status: `recommended`
* Recommended Commit: `docs(foundry): add initial foundry loop artifacts`
* Commit SHA: `pending`

## Recommended Commit

```text
docs(foundry): add initial foundry loop artifacts
```

## Lifecycle Log

* `2026-04-28` — `draft` — Packet created.
* `2026-04-28` — `ready` — Scope and verification defined.
* `2026-04-28` — `in_progress` — Initial loop artifacts created.
* `2026-04-28` — `implemented` — Required artifacts written.
* `2026-04-28` — `verifying` — Repo contract checker selected as verification.
* `2026-04-28` — `verified` — Verification record created for repo contract checker.
