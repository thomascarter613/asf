---
title: "Reindexing Policy"
description: "Defines when and how Charon retrieval indexes should be rebuilt or refreshed."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* hephaestus
* reindexing

---

# Reindexing Policy

## Purpose

This policy defines when the derived retrieval index should be refreshed.

## Reindexing Triggers

Reindexing may be required when:

1. accepted ADRs change;
2. canonical memory changes;
3. policies change;
4. context-pack templates change;
5. handoff templates change;
6. work-packet structure changes;
7. source artifact hashes no longer match;
8. retrieval policies change;
9. embedding model changes;
10. chunking policy changes.

## Rule

If the index and repository disagree, the repository wins.

## Status

Reindexing is documented.

No executable reindexer exists yet.
