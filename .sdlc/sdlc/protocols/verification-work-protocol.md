---
title: "Verification Work Protocol"
description: "Protocol for verifying Foundry work."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* sdlc
* protocol
* verification

---

# Verification Work Protocol

## Purpose

This protocol governs verification work.

## Protocol

1. Identify the work packet.
2. Identify expected verification commands or manual checks.
3. Run the checks if possible.
4. Record actual results.
5. Distinguish passed, failed, skipped, blocked, partial, and not-run.
6. Do not treat unrun checks as passed.
7. Record evidence.
8. Recommend repair work if verification fails.
9. Emit or record verification events when applicable.
10. Update the work packet verification status.

## Status Values

```text
passed
failed
not-run
skipped
partial
blocked
```

## Rule

A failed verification result is useful project information.

It should produce a repair path, not be hidden.
