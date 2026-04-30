---
title: "Redaction Policy"
description: "Policy for excluding or redacting sensitive material from Charon context and retrieval artifacts."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* themis
* redaction
* security

---

# Redaction Policy

## Purpose

This policy defines the initial redaction posture for Charon.

## Do Not Include

Charon context artifacts should not include:

1. API keys;
2. tokens;
3. passwords;
4. private keys;
5. credentials;
6. secret URLs;
7. personal data not required for the task;
8. private customer data;
9. unauthorized third-party material;
10. leaked proprietary material.

## Rules

1. Do not index secrets.
2. Do not include secrets in context packs.
3. Do not include secrets in handoff packets.
4. Do not include secrets in memory candidates.
5. Prefer artifact references over sensitive payloads.
6. If sensitive material is discovered, stop and remove it from durable artifacts.

## Status

Manual redaction rules are active.

Automated redaction is deferred.
