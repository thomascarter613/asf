---
title: "Context Source Rules"
description: "Rules for selecting, prioritizing, excluding, and updating repository context sources for future Agentic Software Framework human and AI sessions."
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
document_type: "context-source-rules"
canonical: false
related_documents:
  - "docs/ai/00-current-state.md"
  - "docs/ai/01-handoff-packet-template.md"
  - "docs/adr/ADR-0002-repository-based-context-continuity.md"
  - "docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md"
  - "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"
---

# Context Source Rules

## 1. Purpose

This document defines rules for selecting repository context sources for future Agentic Software Framework work.

The uploaded repository tree is the active baseline.

The goal is to help future humans and AI sessions determine which files to read, which files to trust, which files to treat as caveated, and which files to exclude from context.

These rules support repository-based context continuity and future retrieval systems.

---

## 2. Core Rule

Repository artifacts are the durable source of truth.

Vector retrieval augments repository memory; it does not replace it.

This means:

1. Repository files are canonical context sources.
2. Retrieval indexes are discovery aids.
3. AI chat history is not the durable source of truth.
4. Current-state documents help orient the next session.
5. Work packets control non-trivial changes.
6. ADRs constrain architecture and planning.
7. Verification documents define what has and has not been checked.

---

## 3. Source Priority

## 3.1 Priority 0: Current State and Handoff

Read first:

```text
docs/ai/00-current-state.md
````

Read when transferring sessions:

```text
docs/ai/01-handoff-packet-template.md
```

Purpose:

```text
Orient the session quickly and preserve the current continuation point.
```

## 3.2 Priority 1: Context Source Rules

Read next:

```text
docs/ai/02-context-source-rules.md
```

Purpose:

```text
Determine which files should be trusted and how to handle baseline caveats.
```

## 3.3 Priority 2: Work Packet System

Read:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Then read the active work packet.

Purpose:

```text
Understand execution rules and current scope.
```

## 3.4 Priority 3: Baseline Planning and Domain

Read:

```text
docs/planning/00-baseline-inventory.md
docs/planning/01-planning-baseline.md
docs/planning/02-adr-normalization-review.md
docs/domain/00-domain-model.md
```

Purpose:

```text
Understand baseline structure, planning direction, ADR caveats, and domain vocabulary.
```

## 3.5 Priority 4: Verification and Repo Contract Baselines

Read:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

Purpose:

```text
Understand what is checked, what is not checked, and what future executable checks should enforce.
```

## 3.6 Priority 5: Product and Architecture Documents

Read as needed:

```text
docs/product/00-product-inception-brief.md
docs/product/01-product-charter.md
docs/product/02-stakeholder-and-user-model.md
docs/product/03-software-requirements-specification.md
docs/product/00-architecture-overview.md
docs/architecture/00-architecture-overview.md
```

Purpose:

```text
Understand product mission, users, requirements, and architecture.
```

## 3.7 Priority 6: ADRs

Read directly relevant ADRs.

Important ADRs for baseline stabilization:

```text
ADR-0001
ADR-0002
ADR-0006
ADR-0018
ADR-0021
ADR-0022
```

Read all ADRs only when performing architecture or ADR maintenance work.

---

## 4. Inclusion Rules

Include a document as context when:

1. It is directly referenced by the active work packet.
2. It constrains the current task.
3. It records current state.
4. It records accepted baseline structure.
5. It defines verification expectations.
6. It defines ADR or architecture constraints.
7. It defines work-packet rules.
8. It contains domain vocabulary needed for the task.
9. It is the artifact being created, updated, or reviewed.

---

## 5. Exclusion Rules

Do not include as context unless explicitly required and safe:

```text
.env
.env.*
*.pem
*.key
*.p12
*.pfx
id_rsa
id_dsa
id_ecdsa
id_ed25519
credentials.json
secrets.*
*.secrets.*
```

Do not include generated or bulky directories as default context:

```text
.git/
node_modules/
dist/
build/
coverage/
vendor/
tmp/
.temp/
.cache/
target/
```

Do not include:

1. Secrets.
2. Tokens.
3. Private keys.
4. Credentials.
5. Personal private data.
6. Private local absolute paths.
7. Raw logs containing sensitive values.
8. Production infrastructure secrets.

---

## 6. Baseline Caveat Rules

Future sessions must preserve these known caveats:

```text
README.md is absent from the uploaded baseline.
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root.
Executable repo contract checks do not exist yet.
Runtime implementation has not started.
```

Do not silently “fix” these.

Use explicit work packets.

---

## 7. Staleness Rules

A context document may be stale when:

1. A work packet has completed since it was last updated.
2. ADRs have changed.
3. Baseline files have moved.
4. Verification scripts have been added.
5. Runtime implementation has begun.
6. Root README has been added.
7. Architecture overview placement has been resolved.
8. Repo contract checks have become executable.
9. CI has been added.

When in doubt:

```text
Prefer the most recent committed repository state and update docs/ai/00-current-state.md.
```

---

## 8. Update Triggers

Update context-continuity artifacts when:

1. A work packet changes status to complete.
2. A new active work packet starts.
3. A new planning artifact is added.
4. A new verification artifact is added.
5. ADR index changes.
6. ADR status changes.
7. Baseline caveats are resolved.
8. Runtime implementation begins.
9. Repo contract script is added.
10. Evaluation harness work begins.

---

## 9. Relationship to Vector Retrieval

Vector retrieval is a future capability.

Current status:

```text
Not implemented.
```

Rule:

```text
Vector retrieval augments repository memory and does not replace it.
```

Future retrieval systems should:

1. Index repository artifacts.
2. Preserve source paths.
3. Return citations or file references.
4. Respect context source priority.
5. Exclude sensitive files.
6. Avoid treating embeddings as canonical truth.
7. Support evaluation through future evaluation harness work.

---

## 10. Relationship to Evaluation

Context continuity should eventually be evaluated.

Future evaluation should test:

1. Whether future sessions identify the correct current state.
2. Whether future sessions choose the correct source documents.
3. Whether ADR caveats are preserved.
4. Whether work packets are followed.
5. Whether verification state is reported truthfully.
6. Whether no secrets are included.
7. Whether baseline drift is detected.
8. Whether next steps are derived from repository artifacts.

Relevant ADR:

```text
ADR-0022: Evaluation Harness for Context Continuity and Agent Execution
```

---

## 11. Future Context Pack Rules

A future context pack should include:

1. Current state.
2. Active work packet.
3. Work packet index.
4. Context source rules.
5. Relevant planning artifact.
6. Relevant domain artifact.
7. Relevant verification artifact.
8. Relevant ADRs.
9. Known caveats.
10. Next recommended action.

A context pack should not include:

1. Irrelevant ADRs.
2. Secrets.
3. Generated dependency directories.
4. Raw logs unless redacted.
5. Runtime implementation files unrelated to the task.
6. Old handoff packets unless historically relevant.

---

## 12. Source Conflict Rules

When sources conflict:

1. Prefer the most recent explicitly accepted current-state document for continuation status.
2. Prefer ADRs for architecture decisions.
3. Prefer work packets for active execution scope.
4. Prefer verification documents for checks and verification state.
5. Prefer baseline inventory for uploaded-tree baseline facts.
6. Prefer domain model for conceptual vocabulary.
7. Treat chat memory as lower authority than committed repository artifacts.

If conflict remains unresolved, create or recommend a work packet.

---

## 13. Context Source Rules Acceptance Criteria

These context source rules are complete for the current phase when:

1. They define Source Priority.
2. They define inclusion rules.
3. They define exclusion rules.
4. They preserve baseline caveats.
5. They define staleness rules.
6. They define update triggers.
7. They state that vector retrieval augments repository memory.
8. They define relationship to evaluation.
9. They define future context pack rules.
10. They define source conflict rules.
11. They do not claim retrieval implementation exists.
12. They do not include secrets.

````