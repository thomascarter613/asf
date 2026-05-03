---
title: "Handoff Packet Template"
description: "Reusable handoff packet template for transferring Agentic Software Framework repository context to a future human or AI session."
status: "proposed"
version: "0.1.0"
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
  - "docs/work-packets/README.md"
  - "docs/work-packets/WORK-PACKET-TEMPLATE.md"
  - "docs/verification/01-repo-contract-baseline.md"
---

# Handoff Packet Template

## 1. Purpose

This template defines the standard handoff format for transferring the Agentic Software Framework repository context to a future human or AI session.

A handoff packet should allow a future session to resume work from repository artifacts instead of relying on chat memory.

The uploaded repository tree is the active baseline unless a newer current-state artifact explicitly supersedes it.

---

## 2. Handoff Packet Metadata

Use this metadata block when creating a real handoff packet:

```yaml
---
title: "Handoff Packet"
description: "Session handoff packet for the Agentic Software Framework."
status: "proposed"
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
````

---

## 3. Handoff Summary

Summarize the current state in plain language.

Template:

```text
The repository is currently in [PHASE]. The active baseline is [BASELINE]. The active work packet is [WORK PACKET]. The most recent completed work is [COMPLETED WORK]. The next recommended step is [NEXT STEP].
```

Current baseline statement to preserve unless superseded:

```text
The uploaded repository tree is the active baseline.
```

---

## 4. Current Phase

Record the current phase:

```text
Baseline Stabilization
```

Allowed examples:

```text
Baseline Stabilization
Repository Verification
Repo Contract Implementation
Context Continuity
Planning
Runtime Implementation
Evaluation
Release Preparation
```

---

## 5. Active Work Packet

Record the active work packet.

Template:

```text
Active work packet:
WP-0000: Title
```

Include:

1. Path.
2. Status.
3. Purpose.
4. Files in scope.
5. Verification command.
6. Recommended commit.

---

## 6. Recently Completed Work

List recently completed work.

Template:

```text
Completed:
- WP-0000 Title — commit: type(scope): message
- Artifact path created or modified
- Verification status
```

Use actual commit hashes only when available.

Do not invent commit hashes.

---

## 7. Next Recommended Work

List the next recommended work.

Template:

```text
Next:
WP-0000: Title
Path: docs/work-packets/WP-0000-title.md
Reason: ...
Expected output: ...
Recommended commit: ...
```

Current next recommendation after WP-0008:

```text
WP-0009: Root README Baseline
```

---

## 8. Verification State

## 8.1 Verification Summary

Record current verification status:

```text
Verification status: not_run | passed | failed | blocked | skipped | limited
```

## 8.2 Commands Run

Record commands actually run:

```bash
# Example:
git diff --check
```

Do not claim commands ran unless they actually ran.

## 8.3 Results

Record results:

```text
Result:
...
```

## 8.4 Known Limitations

Record limitations:

```text
Known limitations:
...
```

---

## 9. Current Baseline Caveats

Preserve known caveats.

Current caveats:

```text
README.md is absent from the uploaded baseline.
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured baseline artifact.
Executable repo contract checks do not exist yet.
Runtime implementation has not started.
```

Do not silently fix these caveats in a handoff packet.

---

## 10. Source Documents to Read

A future session should read these first:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Then read active work packet and directly related ADRs.

---

## 11. ADR Context

Summarize ADR context relevant to the next step.

Template:

```text
Relevant ADRs:
- ADR-0000: Title — relevance
```

Do not summarize every ADR unless needed.

For context continuity work, relevant ADRs include:

```text
ADR-0002: Repository-Based Context Continuity
ADR-0006: Canonical Repository plus Vector Retrieval
ADR-0018: Work Packet Lifecycle
ADR-0021: Repo Contract Testing
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

---

## 12. Files Created or Modified in Current Session

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

---

## 13. Decisions Made in Current Session

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

---

## 14. Open Questions

Record unresolved questions:

```text
Open questions:
1. ...
2. ...
3. ...
```

Current standing open questions:

1. Should root `README.md` be added next?
2. Which architecture overview file should be authoritative?
3. What is the relationship between ADR-0013 and ADR-0015?
4. Should ADR gaps be documented in `docs/adr/README.md`?
5. Where should executable repo contract scripts live?

---

## 15. Risks and Warnings

Record active risks:

```text
Risks:
1. ...
2. ...
3. ...
```

Current standing risks:

1. Baseline drift before executable contract checks exist.
2. Future sessions accidentally normalize ADRs.
3. Context files become stale.
4. Runtime implementation begins before verification is ready.
5. Duplicate architecture overview files diverge further.

---

## 16. Do Not Do

Future sessions must not:

1. Silently rename ADRs.
2. Silently renumber ADRs.
3. Delete ADRs because they look duplicated.
4. Fill ADR number gaps without explicit approval.
5. Move architecture documents without a work packet.
6. Remove the root `tree` file without a work packet.
7. Claim runtime implementation exists before it exists.
8. Claim vector retrieval exists before it exists.
9. Claim repo contract tests exist before they exist.
10. Claim verification passed unless it actually ran.

---

## 17. Recommended Continuation Prompt

Use this prompt in a future session:

```text
You are continuing work on the Agentic Software Framework repository.

Treat the repository as the source of truth. Start by reading:

1. docs/ai/00-current-state.md
2. docs/ai/02-context-source-rules.md
3. docs/work-packets/README.md
4. docs/work-packets/WORK-PACKET-TEMPLATE.md
5. docs/planning/00-baseline-inventory.md
6. docs/planning/01-planning-baseline.md
7. docs/planning/02-adr-normalization-review.md
8. docs/domain/00-domain-model.md
9. docs/verification/00-verification-baseline.md
10. docs/verification/01-repo-contract-baseline.md

The uploaded repository tree is the active baseline unless a newer current-state document says otherwise.

Do not silently rename, delete, renumber, or normalize ADRs.

Continue from the active or next recommended work packet.
```

---

## 18. Handoff Acceptance Criteria

A handoff packet is acceptable when:

1. Current phase is recorded.
2. Active work packet is recorded.
3. Recently completed work is recorded.
4. Next recommended work is recorded.
5. Verification State is recorded.
6. Known baseline caveats are preserved.
7. Source documents are listed.
8. Open questions are listed.
9. Risks are listed.
10. “Do Not Do” constraints are listed.
11. The handoff does not invent verification results.
12. The handoff does not include secrets.

````