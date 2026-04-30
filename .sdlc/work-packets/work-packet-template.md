---
title: "Work Packet Template"
description: "Template for defining scoped, verifiable Foundry work packets."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
template: "work-packet"
tags:

* sdlc
* template
* work-packet

---

# Work Packet: <Title>

## Metadata

* ID: `<work-packet-id>`
* Status: `draft`
* Created: `<date>`
* Updated: `<date>`
* Directive: `<directive-id-or-text>`
* Owner: `project-owner`
* Risk: `low | medium | high | critical`
* Target Commit: `<conventional-commit-message>`

## Objective

Describe the specific outcome this work packet must produce.

## Rationale

Explain why this work matters now.

## Scope

This work packet includes:

1. item one;
2. item two;
3. item three.

## Non-Goals

This work packet does not include:

1. item one;
2. item two;
3. item three.

## Required Context

Read or include:

1. `path/to/context.md`;
2. `path/to/adr.md`;
3. `path/to/policy.md`.

## Files to Create

1. `path/to/new-file.md`

## Files to Modify

1. `path/to/existing-file.md`

## Files to Avoid

1. `path/to/avoid.md`

## Implementation Steps

1. Step one.
2. Step two.
3. Step three.

## Acceptance Criteria

The work is accepted when:

1. criterion one;
2. criterion two;
3. criterion three.

## Verification

Run:

```bash
<command>
```

Expected result:

```text
<expected-result>
```

## Verification Status

* Required: `yes | no`
* Method: `<manual inspection | command | repo contract | test suite>`
* Status: `not-run | passed | failed | partial | blocked`
* Evidence: `<evidence-or-pending>`

## Documentation Updates

Update or create:

1. `path/to/doc.md`

## Documentation Status

* Required: `yes | no`
* Status: `pending | complete | partial | not-required`
* Updated:

  * `path/to/doc.md`

## Event Emissions

Expected events:

1. `<event.name>`

## Policy Gates

Required policy gates:

1. `<policy-gate-or-none>`

## Handoff Requirements

The handoff should mention:

1. completed work;
2. verification result;
3. next recommended action.

## Handoff Status

* Required: `yes | no`
* Status: `pending | complete | not-required`
* Handoff Packet: `<path-or-pending>`

## Memory Candidate Expectations

This work may produce memory candidates for:

1. decision;
2. invariant;
3. project status.

## Memory Candidate Status

* Expected: `yes | no`
* Status: `pending | created | not-required`
* Candidates:

  * `<path-or-pending>`

## Rollback Plan

Describe how to revert this work if needed.

## Commit Status

* Status: `recommended | committed | not-required`
* Recommended Commit: `<type>(<scope>): <description>`
* Commit SHA: `<sha-or-pending>`

## Recommended Commit

```text
<type>(<scope>): <description>
```

## Lifecycle Log

* `<date>` — `draft` — Packet created.
