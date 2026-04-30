---
title: "Foundry Adapters"
description: "Directory for future adapter configuration and adapter boundary documentation."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - adapters
  - integration
---

# Foundry Adapters

## Purpose

This directory reserves the adapter boundary for external tools and providers.

Adapters allow the Foundry to integrate with external systems without making those systems the core architecture.

Possible future adapters include:

1. ChatGPT;
2. Claude;
3. Codex-like CLIs;
4. local LLMs;
5. GitHub;
6. vector stores;
7. notification channels;
8. shell;
9. tmux;
10. Docker.

## Rules

Adapters must not:

1. define the Foundry core identity;
2. store secrets in committed files;
3. bypass policy gates;
4. create provider lock-in;
5. silently mutate canonical memory.

## Status

No adapters are implemented yet.