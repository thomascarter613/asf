---
title: "WP-0000: Work Packet Title"
description: "Reusable template for bounded, verifiable work packets in the Agentic Software Framework baseline."
status: "draft"
version: "0.1.0"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "product-manager"
  - "technical-program-manager"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "work-packet"
canonical: false
work_packet_id: "WP-0000"
milestone: ""
backlog_refs: []
adr_refs: []
related_documents: []
affected_files: []
recommended_commit: ""
---

# WP-0000: Work Packet Title

## 1. Purpose

Describe the purpose of this work packet.

This section should answer:

1. What are we doing?
2. Why are we doing it now?
3. What baseline file, ADR, document, backlog need, or implementation concern justifies it?
4. What repo capability or product capability does it advance?

Example:

```text
This work packet creates the reusable work packet template for the current repository baseline. It establishes the required metadata, scope, readiness, verification, completion, and commit structure that future work packets must follow.
````

---

## 2. Current Status

Current status:

```text
draft
```

Allowed status values:

1. `draft`
2. `ready`
3. `blocked`
4. `in_progress`
5. `verifying`
6. `complete`
7. `superseded`
8. `cancelled`

Status notes:

```text
Explain why the packet is in its current status.
```

---

## 3. Source Inputs

List the sources that justify this work packet.

## 3.1 Baseline Context

```text
The uploaded repository tree is the active baseline.
```

## 3.2 Related Work Packet Index

```text
docs/work-packets/README.md
```

## 3.3 Related ADRs

```text
ADR-0000
```

## 3.4 Related Product or Architecture Documents

```text
docs/product/path.md
docs/architecture/path.md
```

## 3.5 Related Existing Files

```text
path/to/file.md
```

---

## 4. Scope

Define exactly what is in scope.

In scope:

1. Item 1.
2. Item 2.
3. Item 3.

This section should be specific enough that unrelated work can be rejected.

---

## 5. Non-Goals

Define what is explicitly out of scope.

Out of scope:

1. Item 1.
2. Item 2.
3. Item 3.

Non-goals prevent scope creep and protect atomic commits.

---

## 6. Assumptions

List assumptions this packet relies on.

Assumptions:

1. Assumption 1.
2. Assumption 2.
3. Assumption 3.

If an assumption is risky, list it again under Risks.

---

## 7. Constraints

List constraints that must be respected.

Baseline constraints:

1. The uploaded repository tree is the active baseline.
2. Existing ADR numbering, naming, and gaps must not be changed silently.
3. Existing files must not be renamed, deleted, or rewritten unless this packet explicitly authorizes it.
4. Proposed cleanup must happen through explicit work packets.
5. Work must remain atomic and commit-ready.
6. Verification must be defined before completion.
7. No secrets or sensitive values may be introduced.
8. Commit messages must follow Conventional Commit style.

Packet-specific constraints:

1. Constraint 1.
2. Constraint 2.
3. Constraint 3.

---

## 8. Risks

| Risk              | Severity        | Mitigation              |
| ----------------- | --------------- | ----------------------- |
| Risk description. | Low/Medium/High | Mitigation description. |

---

## 9. Readiness Checklist

This packet is ready for execution only when all applicable items are checked.

```text
[ ] Purpose is clear.
[ ] Source inputs are identified.
[ ] Related baseline documents or ADRs are listed.
[ ] Scope is bounded.
[ ] Non-goals are explicit.
[ ] Affected files are listed or intentionally marked as to be discovered.
[ ] Acceptance criteria are observable.
[ ] Verification plan is defined.
[ ] Security and privacy notes are considered.
[ ] Recommended atomic commit is present.
[ ] No blocking open question remains unresolved.
```

Readiness notes:

```text
Add readiness notes here.
```

---

## 10. Affected Files

List files expected to be created, modified, reviewed, or intentionally not touched.

## 10.1 Files to Create

```text
path/to/new-file.md
```

## 10.2 Files to Modify

```text
path/to/existing-file.md
```

## 10.3 Files to Review

```text
path/to/reference-file.md
```

## 10.4 Files Intentionally Not Touched

```text
path/to/out-of-scope-file.md
```

---

## 11. Implementation Plan

Describe the step-by-step implementation plan.

1. Step 1.
2. Step 2.
3. Step 3.
4. Step 4.
5. Step 5.

Each step should be concrete enough to execute, but not so broad that it hides unrelated work.

---

## 12. Acceptance Criteria

This work packet is acceptable when:

1. Criterion 1.
2. Criterion 2.
3. Criterion 3.
4. Criterion 4.
5. Criterion 5.

Acceptance criteria must be observable.

Avoid vague criteria such as:

```text
The file is good.
The implementation is clean.
The UX is nice.
```

Prefer criteria such as:

```text
The file exists at the expected path.
The document includes required YAML frontmatter.
The verification command exits successfully.
The generated artifact includes the required heading.
```

---

## 13. Verification Plan

Verification must be performed before the packet can be marked complete.

## 13.1 Automated Checks

Run:

```bash
git diff --check
```

Add packet-specific commands:

```bash
# Add command here.
```

## 13.2 Manual Checks

Manual verification:

1. Check 1.
2. Check 2.
3. Check 3.

## 13.3 Expected Verification Result

Expected result:

```text
All listed verification checks pass, or any limitations are explicitly recorded in the Completion Record.
```

## 13.4 Verification Result Status

Use one of:

1. `not_run`
2. `passed`
3. `failed`
4. `blocked`
5. `skipped`
6. `limited`

Current result:

```text
not_run
```

---

## 14. Security and Privacy Notes

Describe security and privacy implications.

Consider:

1. Does this packet touch authentication?
2. Does this packet touch authorization?
3. Does this packet touch repository access?
4. Does this packet touch AI context?
5. Does this packet touch secrets or redaction?
6. Does this packet touch logs?
7. Does this packet touch exports?
8. Does this packet touch billing or usage records?
9. Does this packet create public-facing documentation?
10. Does this packet create sensitive operational detail?

Security notes:

```text
Add notes here.
```

Privacy notes:

```text
Add notes here.
```

---

## 15. Documentation Updates

List documentation updates required by this packet.

Required documentation updates:

1. Update 1.
2. Update 2.
3. Update 3.

Documentation intentionally deferred:

1. Deferred item 1 and rationale.
2. Deferred item 2 and rationale.

---

## 16. Completion Record

This section must be completed before the packet is marked `complete`.

## 16.1 Completion Summary

```text
Not completed yet.
```

## 16.2 Files Created

```text
None yet.
```

## 16.3 Files Modified

```text
None yet.
```

## 16.4 Acceptance Criteria Result

```text
Not evaluated yet.
```

## 16.5 Verification Commands Run

```bash
# Not run yet.
```

## 16.6 Verification Result

```text
not_run
```

## 16.7 Known Limitations

```text
None recorded yet.
```

## 16.8 Follow-up Work Created

```text
None yet.
```

## 16.9 Completion Actor

```text
Not completed yet.
```

## 16.10 Completion Date

```text
Not completed yet.
```

---

## 17. Recommended Atomic Commit

Recommended command:

```bash
git add <paths>
git commit -m "type(scope): concise description"
```

Commit message:

```text
type(scope): concise description
```

Commit guidance:

1. The commit must match this packet’s actual scope.
2. Do not include unrelated files.
3. Do not include failed or incomplete work as complete.
4. Do not include secrets.
5. Run verification before committing.
6. Update this packet’s Completion Record before marking it complete.

---

## 18. Follow-up Work

List follow-up work discovered during this packet.

Follow-up items:

1. Item 1.
2. Item 2.
3. Item 3.

If there is no follow-up work, write:

```text
No follow-up work identified.
```

---

## 19. Packet Acceptance Criteria

This work packet is complete when:

1. All in-scope work is finished.
2. All acceptance criteria are satisfied or explicitly deferred with rationale.
3. Verification is `passed`, `limited`, or `skipped` with accepted rationale.
4. Failed verification is not hidden.
5. Completion Record is filled in.
6. Recommended commit is accurate.
7. Follow-up work is recorded.
8. The packet status is updated to `complete`.

---

## 20. Notes

Add any additional notes here.

```text
No additional notes yet.
```
