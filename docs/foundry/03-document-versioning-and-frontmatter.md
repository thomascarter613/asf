---
title: "Document Versioning and Frontmatter Standard"
description: "Defines the Markdown frontmatter and document versioning standard for the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - foundry
  - documentation
  - frontmatter
  - versioning
---

# Document Versioning and Frontmatter Standard

## 1. Purpose

This document defines the Markdown frontmatter and document versioning standard for the Agentic Software Foundry.

The Foundry is documentation-first, repository-canonical, context-pack-driven, and handoff-preserving. Its documents will change frequently as the architecture matures, the implementation evolves, and the project moves from architectural lock into scaffolding, runtime implementation, evaluation, and v1.0 delivery.

Because these documents are durable project artifacts, every meaningful Markdown document should carry explicit metadata.

This standard exists to make documents easier to identify, sort, retrieve, index, validate, version, supersede, and include in context packs.

## 2. Core Rule

Every meaningful Markdown document in the repository must begin with YAML frontmatter unless the document is explicitly exempt.

The frontmatter must appear at the very beginning of the file.

Correct:

```yaml
---
title: "Example Document"
description: "Short description."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - example
---
````

Incorrect:

```markdown
# Example Document

---
title: "Example Document"
---
```

Frontmatter comes first.

## 3. Why This Standard Exists

Frontmatter helps the Foundry support:

1. document identity;
2. document versioning;
3. context retrieval;
4. source traceability;
5. Charon memory and context-pack assembly;
6. repo contract testing;
7. future documentation sites;
8. future indexes;
9. future search;
10. supersession and archival workflows.

Git remains the authoritative history of changes.

Frontmatter provides logical document metadata.

## 4. Versioning Model

The Foundry uses two layers of versioning.

```text
Git history
= authoritative change history

Document version field
= logical content maturity marker
```

Do not create filename versions such as:

```text
document-v1.md
document-v2.md
document-final.md
document-final-final.md
```

Keep stable filenames.

Use Git for history.

Use frontmatter `version` for logical document maturity.

## 5. Document Version Numbers

Document versions use simple semantic versioning.

```text
0.1.0 = initial accepted draft or first active version
0.2.0 = meaningful pre-v1 expansion
0.3.0 = another meaningful pre-v1 expansion
1.0.0 = stable v1 document
1.1.0 = backward-compatible refinement
2.0.0 = major conceptual change
```

For most foundational documents before the v1.0 MVP, the initial version is:

```text
0.1.0
```

## 6. When to Increment Versions

### 6.1 Patch Version

Increment the patch version for small corrections.

Examples:

1. typo fixes;
2. formatting fixes;
3. small wording corrections;
4. link corrections;
5. non-substantive cleanup.

Example:

```text
0.1.0 → 0.1.1
```

### 6.2 Minor Version

Increment the minor version for meaningful additions or refinements that preserve the document’s core decision or purpose.

Examples:

1. adding a new section;
2. expanding acceptance criteria;
3. clarifying a policy;
4. adding examples;
5. improving a lifecycle definition;
6. adding fields to a standard without breaking the concept.

Example:

```text
0.1.0 → 0.2.0
```

### 6.3 Major Version

Increment the major version for conceptual changes that alter the document’s meaning, authority, or decision.

Examples:

1. reversing an ADR decision;
2. changing a constitutional invariant;
3. changing canonical memory policy;
4. changing safe defaults;
5. replacing the subsystem boundary model;
6. changing v1.0 scope materially.

Example:

```text
1.0.0 → 2.0.0
```

For accepted ADRs, major conceptual changes should usually create a new ADR that supersedes the old one rather than rewriting history.

## 7. Standard Frontmatter Fields

Most Markdown documents should use these fields:

```yaml
---
title: "Document Title"
description: "Short description of the document."
status: "draft | active | accepted | superseded | archived"
version: "0.1.0"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
owner: "project-owner"
canonical: true
tags:
  - tag
---
```

## 8. Field Definitions

### 8.1 `title`

The human-readable document title.

Example:

```yaml
title: "System Boundaries"
```

### 8.2 `description`

A short description of what the document is for.

Example:

```yaml
description: "Defines subsystem ownership boundaries for the Agentic Software Foundry."
```

### 8.3 `status`

The document lifecycle status.

Allowed baseline statuses:

```text
draft
active
accepted
superseded
archived
```

Use:

```text
draft
```

for documents still being developed.

Use:

```text
active
```

for current operating documents, policies, standards, indexes, and guides.

Use:

```text
accepted
```

for accepted ADRs or decisions.

Use:

```text
superseded
```

for documents replaced by newer documents.

Use:

```text
archived
```

for documents preserved for history but no longer current.

### 8.4 `version`

The logical document version.

Example:

```yaml
version: "0.1.0"
```

Always quote the version string.

### 8.5 `created`

The date the document was created.

Example:

```yaml
created: "2026-04-28"
```

Use `YYYY-MM-DD`.

### 8.6 `updated`

The date the document was last meaningfully updated.

Example:

```yaml
updated: "2026-04-28"
```

Use `YYYY-MM-DD`.

For small typo-only edits, updating this field is optional. For meaningful content changes, update it.

### 8.7 `owner`

The person or role responsible for the document.

For now:

```yaml
owner: "project-owner"
```

### 8.8 `canonical`

Whether the document is treated as a canonical source artifact.

Example:

```yaml
canonical: true
```

Use `true` for foundational documents, accepted ADRs, policies, standards, and active architecture docs.

Use `false` for examples, temporary drafts, generated logs, or non-authoritative notes.

### 8.9 `tags`

Tags help retrieval, indexing, documentation grouping, and future context-pack assembly.

Example:

```yaml
tags:
  - foundry
  - architecture
  - documentation
```

Use lowercase hyphenated tags.

## 9. ADR Frontmatter

ADRs require additional fields.

ADR frontmatter pattern:

```yaml
---
title: "ADR-0001: Repository-Based Context Continuity"
description: "Accepts repository-backed context continuity as the canonical memory foundation for the Foundry."
status: "accepted"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
adr: "ADR-0001"
decision_date: "2026-04-28"
supersedes: []
superseded_by: []
tags:
  - adr
  - architecture
---
```

## 10. ADR-Specific Fields

### 10.1 `adr`

The ADR identifier.

Example:

```yaml
adr: "ADR-0001"
```

### 10.2 `decision_date`

The date the decision was accepted.

Example:

```yaml
decision_date: "2026-04-28"
```

### 10.3 `supersedes`

A list of earlier ADRs this ADR supersedes.

Example:

```yaml
supersedes:
  - "ADR-0004"
```

Use an empty list if none:

```yaml
supersedes: []
```

### 10.4 `superseded_by`

A list of later ADRs that supersede this ADR.

Example:

```yaml
superseded_by:
  - "ADR-0021"
```

Use an empty list if none:

```yaml
superseded_by: []
```

## 11. Policy and Governance Frontmatter

Governance documents should use:

```yaml
---
title: "Project Constitution"
description: "Constitutional governance document defining non-negotiable principles and authority boundaries for the Agentic Software Foundry."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:
  - governance
  - constitution
  - policy
---
```

Governance documents should normally be canonical.

## 12. Template Frontmatter

Templates should also use frontmatter when they are Markdown files.

Example:

```yaml
---
title: "Work Packet Template"
description: "Template for defining scoped, verifiable work packets."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
template: "work-packet"
tags:
  - sdlc
  - template
  - work-packet
---
```

## 13. Generated Artifact Frontmatter

Generated durable artifacts should use frontmatter when possible.

Examples:

1. work packets;
2. context packs;
3. handoff packets;
4. session chronicles;
5. memory candidates;
6. verification records.

Runtime logs may be exempt if they are not Markdown or not intended as durable documents.

## 14. Exemptions

The following may be exempt from frontmatter:

1. trivial `.gitkeep` files;
2. raw JSON manifests;
3. JSONL event logs;
4. generated machine output;
5. temporary local notes excluded from Git;
6. binary files;
7. files where frontmatter would break the format;
8. third-party files kept exactly as vendored, if ever allowed by policy.

Markdown files should generally not be exempt unless there is a clear reason.

## 15. Required Practice Going Forward

From this point forward:

1. every new meaningful Markdown document must include frontmatter;
2. frontmatter must include document versioning metadata;
3. accepted ADRs must include ADR-specific fields;
4. meaningful document changes should update `updated`;
5. meaningful document changes should increment `version`;
6. superseded documents should be labeled explicitly;
7. new templates should include frontmatter;
8. repo contract tests should eventually verify required frontmatter.

## 16. Repo Contract Implications

Future repo contract tests should verify:

1. Markdown files start with `---`;
2. required frontmatter fields exist;
3. ADRs include `adr`, `decision_date`, `supersedes`, and `superseded_by`;
4. versions are quoted strings;
5. statuses use allowed values;
6. canonical documents set `canonical: true`;
7. frontmatter parses as valid YAML;
8. required tags exist for certain document types.

The first repo contract checker may start by verifying only that Markdown files begin with frontmatter.

## 17. Validation Command

Until an executable repo contract checker exists, use this shell check:

```bash
for file in $(find . -name "*.md" -not -path "./.git/*"); do
  first_line="$(head -n 1 "$file")"
  if [ "$first_line" != "---" ]; then
    echo "Missing frontmatter: $file"
  fi
done
```

Expected output:

```text
```

No output means every Markdown file begins with frontmatter.

## 18. Commit Guidance

The initial metadata pass should use:

```text
docs: add frontmatter metadata to foundational documents
```

This standard should use:

```text
docs(foundry): define document versioning and frontmatter standard
```

Future document metadata-only changes should use:

```text
docs: update document metadata
```

or a narrower scope:

```text
docs(adr): update adr metadata
```

## 19. Status

This standard is active.

It applies to all future meaningful Markdown documents in the Agentic Software Foundry repository.
