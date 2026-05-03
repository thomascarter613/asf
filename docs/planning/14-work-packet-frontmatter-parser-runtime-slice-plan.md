---
title: "Work Packet Frontmatter Parser Runtime Slice Plan"
description: "Plans the next work-packet-core runtime slice: parsing work-packet Markdown frontmatter into normalized WorkPacketMetadata without broadening runtime scope."
status: "active"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "engineering"
  - "architecture"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "planning"
canonical: false
related_adrs:
  - "ADR-0018"
  - "ADR-0021"
  - "ADR-0022"
  - "ADR-0023"
related_work_packets:
  - "WP-0036"
  - "WP-0037"
  - "WP-0038"
related_documents:
  - "docs/planning/13-work-packet-core-hardening.md"
  - "packages/work-packet-core/README.md"
  - "packages/work-packet-core/src/index.ts"
  - "packages/work-packet-core/src/work-packet.ts"
  - "packages/work-packet-core/src/work-packet-validation.ts"
  - "packages/work-packet-core/src/work-packet-validation.test.ts"
  - "tools/eval/run-evaluations.sh"
  - "tools/check-repo-contract.sh"
---

# Work Packet Frontmatter Parser Runtime Slice Plan

## 1. Purpose

This document plans the next runtime slice for the Agentic Software Framework work-packet core package.

The next runtime capability should parse Markdown frontmatter from work-packet documents into normalized `WorkPacketMetadata`.

This document does not implement the parser.

It defines the intended implementation scope for WP-0038.

## 2. Current Runtime Status

Runtime implementation has started with the bounded package:

```text
packages/work-packet-core/
```

Current runtime capability:

```text
Typed work-packet statuses, metadata types, validation result types, metadata validation, Markdown section validation, hardened validation constants, and validation edge-case coverage.
```

## 3. Next Runtime Slice Decision

The next runtime slice should be:

```text
WP-0038: Work Packet Frontmatter Parser Runtime Baseline
```

The target package remains:

```text
packages/work-packet-core/
```

The target capability is:

```text
Parse work-packet Markdown frontmatter into WorkPacketMetadata.
```

## 4. Why Frontmatter Parsing Comes Next

Frontmatter parsing is the correct next slice because:

1. existing work-packet documents use YAML-like frontmatter;
2. the runtime package already validates structured metadata;
3. the missing bridge is converting Markdown document text into metadata;
4. this can be implemented locally without external services;
5. this does not require a database;
6. this does not require vector retrieval;
7. this does not require a web UI;
8. this does not require an API service;
9. this directly supports future work-packet file validation;
10. this prepares the package for future CLI and repo-wide validation.

## 5. Dependency Decision

The first frontmatter parser should be dependency-free.

Do not add a YAML parser in WP-0038.

Rationale:

1. the repository’s current work-packet frontmatter is simple enough for a conservative first parser;
2. avoiding dependencies keeps the first runtime package small;
3. dependency-free parsing avoids expanding the package manager surface too early;
4. a future packet can introduce a YAML parser if real frontmatter complexity justifies it;
5. the parser can intentionally support only the subset required by current work-packet metadata.

## 6. Supported Frontmatter Subset

The first parser should support a deliberately small frontmatter subset:

```yaml
---
title: "WP-0036: Work Packet Core Hardening"
description: "..."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
document_type: "work-packet"
work_packet_id: "WP-0036"
milestone: "Runtime Implementation"
recommended_commit: "test(work-packet): harden core validation coverage"
---
```

Supported value forms:

1. quoted string values;
2. unquoted string values;
3. blank values as empty strings;
4. ignored unknown keys;
5. ignored array blocks.

Unsupported in the first parser:

1. nested objects;
2. multiline block scalars;
3. arrays as metadata values;
4. YAML anchors;
5. YAML aliases;
6. comments inside values;
7. duplicate-key conflict resolution beyond last-write or first-write policy.

## 7. Field Mapping

The parser should map frontmatter keys to `WorkPacketMetadata` fields.

| Frontmatter Key | Runtime Field |
| --- | --- |
| `work_packet_id` | `id` and `workPacketId` |
| `title` | `title` |
| `status` | `status` |
| `version` | `version` |
| `created` | `created` |
| `updated` | `updated` |
| `owner` | `owner` |
| `document_type` | `documentType` |
| `milestone` | `milestone` |
| `recommended_commit` | `recommendedCommit` |

If both `id` and `work_packet_id` are present, `id` should take precedence only if explicitly supported. For the first implementation, prefer `work_packet_id` because current work-packet files use that key.

## 8. Proposed Result Types

WP-0038 should add parser result types.

Suggested types:

```ts
export interface WorkPacketFrontmatterParseResult {
  metadata: Partial<WorkPacketMetadata>;
  body: string;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}
```

The parser should not throw for normal invalid input.

It should return errors and warnings.

## 9. Proposed Public API

WP-0038 should add:

```text
parseWorkPacketFrontmatter
hasWorkPacketFrontmatter
```

The package should export these from:

```text
packages/work-packet-core/src/index.ts
```

## 10. Proposed Files for WP-0038

WP-0038 should create:

```text
packages/work-packet-core/src/work-packet-frontmatter.ts
packages/work-packet-core/src/work-packet-frontmatter.test.ts
```

WP-0038 should modify:

```text
packages/work-packet-core/src/index.ts
packages/work-packet-core/README.md
tools/eval/README.md
tools/eval/cases/README.md
tools/eval/cases/
tools/check-repo-contract.sh
```

WP-0038 may also modify:

```text
.github/workflows/ci.yml
```

only if the existing package test command already covers the new parser tests and no workflow change is needed. In that case, no CI modification is required.

## 11. Parser Behavior

### 11.1 Valid Frontmatter

For valid frontmatter, the parser should:

1. detect opening `---`;
2. detect closing `---`;
3. parse supported key-value pairs;
4. normalize supported key names;
5. strip wrapping single or double quotes from values;
6. return `metadata`;
7. return Markdown body content;
8. return no errors for valid supported fields.

### 11.2 Missing Frontmatter

If Markdown does not begin with frontmatter, the parser should return:

1. empty metadata;
2. original body;
3. a non-throwing warning or error depending on chosen severity.

Recommended first behavior:

```text
missing frontmatter should be an error when calling parseWorkPacketFrontmatter.
```

Reason:

```text
Work-packet documents are expected to have frontmatter.
```

### 11.3 Unclosed Frontmatter

If opening frontmatter exists but no closing delimiter exists, the parser should return an error:

```text
unclosed-frontmatter
```

### 11.4 Unknown Keys

Unknown keys should be ignored with warnings.

Recommended warning code:

```text
unknown-frontmatter-key
```

### 11.5 Unsupported Complex Values

Unsupported arrays, objects, or multiline values should be ignored with warnings.

Recommended warning code:

```text
unsupported-frontmatter-value
```

## 12. Validation Integration

WP-0038 should not merge parsing and validation too aggressively.

Recommended sequence for callers:

```ts
const parsed = parseWorkPacketFrontmatter(markdown);
const validation = validateWorkPacketMetadata(parsed.metadata);
```

The parser should parse.

The validator should validate.

This keeps responsibilities clear.

## 13. Test Strategy

WP-0038 should test:

1. valid frontmatter parses metadata;
2. parser extracts Markdown body;
3. quoted string values are unquoted;
4. unquoted string values are accepted;
5. `work_packet_id` maps to `id` and `workPacketId`;
6. `document_type` maps to `documentType`;
7. `recommended_commit` maps to `recommendedCommit`;
8. missing frontmatter returns error;
9. unclosed frontmatter returns error;
10. unknown keys return warning;
11. unsupported array values return warning;
12. parsed metadata can pass `validateWorkPacketMetadata`;
13. existing validation tests still pass.

## 14. Evaluation Harness Strategy

WP-0038 should add:

```text
EVAL-0009 Work packet frontmatter parser exists
```

The case should check:

1. parser source file exists;
2. parser test file exists;
3. index exports `parseWorkPacketFrontmatter`;
4. index exports `hasWorkPacketFrontmatter`;
5. parser tests include missing frontmatter;
6. parser tests include unclosed frontmatter;
7. parser tests include `recommended_commit`;
8. `bun test packages/work-packet-core` succeeds.

## 15. Repo Contract Strategy

WP-0038 should update `tools/check-repo-contract.sh` to require:

```text
packages/work-packet-core/src/work-packet-frontmatter.ts
packages/work-packet-core/src/work-packet-frontmatter.test.ts
tools/eval/cases/EVAL-0009-work-packet-frontmatter-parser.json
```

It should also check anchors:

```text
parseWorkPacketFrontmatter
hasWorkPacketFrontmatter
missing-frontmatter
unclosed-frontmatter
recommendedCommit
```

## 16. Security Boundary

The parser must not:

1. read files from disk;
2. access the network;
3. execute parsed values;
4. evaluate expressions;
5. load environment variables;
6. inspect secrets;
7. write files;
8. import dependencies;
9. parse files outside caller-provided strings.

It should operate only on strings provided by the caller.

## 17. Runtime Boundary

WP-0038 must not add:

1. CLI commands;
2. repo-wide file walking;
3. database persistence;
4. vector retrieval;
5. agent runtime;
6. API server;
7. web UI;
8. deployment behavior.

Those are future slices.

## 18. Acceptance Criteria for WP-0038

WP-0038 is acceptable when:

1. parser source exists;
2. parser tests exist;
3. parser is dependency-free;
4. parser returns metadata and body;
5. parser maps supported frontmatter keys;
6. parser handles missing frontmatter;
7. parser handles unclosed frontmatter;
8. parser warns on unknown keys;
9. parser warns on unsupported values;
10. parser output can be validated by existing metadata validator;
11. index exports parser APIs;
12. tests pass locally;
13. evaluation harness passes locally;
14. repo contract passes locally;
15. CI remains green;
16. runtime scope remains bounded.

## 19. Verification Commands for WP-0038

Expected commands:

```bash
bun test packages/work-packet-core
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git diff --check
git status --short
```

## 20. Recommended Commit for WP-0038

Recommended commit:

```text
feat(work-packet): add frontmatter parser
```

## 21. Current Boundary

This document plans parser implementation.

It does not implement parser code.

It does not modify CI.

It does not add dependencies.