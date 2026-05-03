---
title: "Handoff Packet Template"
description: "Reusable handoff packet template for transferring Agentic Software Framework repository context to a future human or AI session."
status: "active"
version: "0.2.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "future-ai-agents"
  - "future-contributors"
document_type: "handoff-packet-template"
canonical: false
related_documents:
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/ai/03-runtime-mvp-handoff.md"
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/verification/01-repo-contract-baseline.md"
---

# Handoff Packet Template

## 1. Purpose

This template defines the standard handoff format for transferring Agentic Software Framework repository context to a future human or AI session.

A handoff packet should allow a future session to resume work from repository artifacts instead of relying on chat memory.

## 2. Required Metadata

Use this metadata block when creating a real handoff packet:

```yaml
---
title: "Handoff Packet"
description: "Session handoff packet for the Agentic Software Framework."
status: "active"
version: "0.1.0"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
owner: "Project Steward"
document_type: "handoff-packet"
canonical: false
source_current_state: "docs/ai/00-current-state.md"
active_work_packet: ""
next_recommended_work_packet: ""
verification_status: "not_run"
---
```

## 3. Handoff Summary

Summarize the current state in plain language.

Template:

```text
The repository is currently in [PHASE]. The latest completed packet is [WORK PACKET]. The current verification gate is [VERIFICATION]. The next recommended work is [NEXT STEP].
```

## 4. Current Phase

Record the current phase.

Current expected phase after WP-0057:

```text
Runtime MVP Hardening / v1.0 MVP Readiness
```

## 5. Latest Completed Work

Record recently completed work.

Template:

```text
Completed:
- WP-0000 Title — commit: type(scope): message
- Verification status: passed | failed | not_run | partial
```

Use actual commit hashes only when available.

Do not invent commit hashes.

## 6. Next Recommended Work

Record the next recommended work.

Template:

```text
Next:
WP-0000: Title
Path: docs/work-packets/WP-0000-title.md
Reason: ...
Expected output: ...
Recommended commit: ...
```

Current next recommendation after WP-0057:

```text
WP-0058: v1.0 MVP Readiness Review
```

## 7. Verification State

Record current verification status:

```text
Verification status: not_run | passed | failed | blocked | skipped | limited
```

Record commands actually run:

```bash
bun run verify
bun run work-packet validate-repo
bash tools/eval/run-evaluations.sh
git diff --check
```

Do not claim commands ran unless they actually ran.

## 8. Source Documents to Read

A future session should read these first:

```text
docs/ai/00-current-state.md
docs/ai/03-runtime-mvp-handoff.md
docs/ai/02-context-source-rules.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
README.md
```

Then read the active or next recommended work packet and directly related ADRs.

## 9. Current Verification Gate

Record the current verification gate.

Current expected gate:

```bash
bun run verify
```

Meaning:

```text
Repo contract checks pass.
Repo-wide work-packet validation passes.
```

Additional checks:

```bash
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
git diff --check
```

## 10. ADR Context

Summarize ADR context relevant to the next step.

For runtime MVP readiness work, relevant ADRs include:

```text
ADR-0002: Repository-Based Context Continuity
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
ADR-0023: Primary Package Managers: Bun, uv, and cargo
```

## 11. Files Created or Modified in Current Session

Record files changed:

```text
Created:
- path/to/file.md

Modified:
- path/to/file.md

Deleted:
- none
```

If nothing was deleted, explicitly write:

```text
Deleted:
- none
```

## 12. Decisions Made in Current Session

Record decisions:

```text
Decision:
- ...
Rationale:
- ...
Source:
- ...
```

Do not record speculative ideas as accepted decisions.

## 13. Open Questions

Record unresolved questions.

Current standing open questions:

```text
1. Does the local repo-governed baseline qualify as v1.0 MVP?
2. Should WP-0058 produce a release checklist, tag recommendation, or both?
3. Which post-MVP productization layer should follow: SaaS UI, agent orchestration runtime, persistence, or GitHub integration?
```

## 14. Risks and Warnings

Record active risks.

Current standing risks:

```text
1. Context files become stale after rapid packet progression.
2. Repo-contract anchors may lag behind new runtime capabilities.
3. Future sessions may confuse the local runtime MVP with a SaaS product MVP.
4. Vector retrieval and agent orchestration remain future work.
```

## 15. Do Not Do

Future sessions must not:

1. Silently rename ADRs.
2. Silently renumber ADRs.
3. Delete ADRs because they look duplicated.
4. Fill ADR number gaps without explicit approval.
5. Move architecture documents without a work packet.
6. Remove the root `tree` file without a work packet.
7. Claim vector retrieval exists before it exists.
8. Claim SaaS productization exists before it exists.
9. Claim verification passed unless it actually ran.
10. Add deployment or publishing CI without a work packet.

## 16. Recommended Continuation Prompt

Use this prompt in a future session:

```text
You are continuing work on the Agentic Software Framework repository.

Treat the repository as the source of truth. Start by reading:

1. docs/ai/00-current-state.md
2. docs/ai/03-runtime-mvp-handoff.md
3. docs/ai/02-context-source-rules.md
4. docs/work-packets/README.md
5. docs/work-packets/WORK-PACKET-TEMPLATE.md
6. README.md

The current phase is Runtime MVP Hardening / v1.0 MVP Readiness.

The canonical verification command is:

bun run verify

Do not claim verification passed unless it actually ran.

Continue from the active or next recommended work packet.
```

## 17. Handoff Acceptance Criteria

A handoff packet is acceptable when:

1. Current phase is recorded.
2. Latest completed work is recorded.
3. Next recommended work is recorded.
4. Verification state is recorded.
5. Source documents are listed.
6. Open questions are listed.
7. Risks are listed.
8. “Do Not Do” constraints are listed.
9. The handoff does not invent verification results.
10. The handoff does not include secrets.