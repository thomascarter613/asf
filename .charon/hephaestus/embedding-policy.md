---
title: "Embedding Policy"
description: "Defines the future embedding policy for Charon retrieval indexes."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* charon
* hephaestus
* embeddings

---

# Embedding Policy

## Purpose

This policy defines how embeddings will eventually be selected, recorded, and governed.

## Rules

1. The embedding provider must be recorded.
2. The embedding model must be recorded.
3. The embedding dimension should be recorded.
4. The chunking version must be recorded.
5. The source content hash must be recorded.
6. The vector store must not become authoritative.
7. Sensitive material must not be embedded unless policy allows it.
8. Embedding configuration must not contain secrets.

## V1.0 Position

The v1.0 implementation may use a stub vector adapter.

Production embedding integration is deferred.
