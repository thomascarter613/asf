---
title: "Verification Record Template"
description: "Template for recording Foundry verification results."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
template: "verification-record"
tags:

* sdlc
* verification
* template

---

# Verification Record: <Title>

## Metadata

* ID: `<verification-id>`
* Status: `draft`
* Created: `<date>`
* Work Packet: `<path-or-none>`
* Run: `<run-id-or-none>`
* Verifier: `<person-or-role>`

## Purpose

Explain what this verification record verifies.

## Verification Scope

This verification covers:

1. item one;
2. item two;
3. item three.

## Commands or Checks

### Check 1

```bash
<command-or-manual-check>
```

Expected result:

```text
<expected-result>
```

Actual result:

```text
<actual-result>
```

Status:

```text
passed | failed | not-run | skipped | partial | blocked
```

## Summary Result

```text
passed | failed | not-run | skipped | partial | blocked
```

## Evidence

Describe evidence for the result.

## Failures

List failures, if any.

## Skipped or Not-Run Checks

List checks not run and explain why.

## Follow-Up Required

1. follow-up item one;
2. follow-up item two.

## Related Artifacts

1. `path/to/artifact.md`

## Lifecycle Log

* `<date>` — `draft` — Record created.
