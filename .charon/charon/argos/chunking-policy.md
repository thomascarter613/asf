---
title: "Chunking Policy"
description: "Policy for future source chunking used by Charon retrieval indexes."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* argos
* chunking
* retrieval

---

# Chunking Policy

## Purpose

This policy defines the initial rules for breaking repository artifacts into retrievable chunks.

## Rules

1. Markdown should prefer heading-aware chunks.
2. Chunks should preserve source file path.
3. Chunks should preserve heading path where practical.
4. Chunks should preserve lifecycle and trust metadata where practical.
5. Chunks should avoid splitting small policy statements unnecessarily.
6. Code chunking is deferred.
7. Generated logs should not be indexed by default.

## Initial Position

For v1.0, chunking is documented but not automated.

A future implementation may begin with simple Markdown heading-based chunking.
