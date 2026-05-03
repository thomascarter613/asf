# Work Packet Core

`@asf/work-packet-core` is the first runtime package for the Agentic Software Framework.

It provides typed work-packet domain models and validation utilities.

## Runtime Status

Runtime implementation has started with this bounded package.

This package is intentionally small. It does not implement a workflow engine, agent runtime, database, API service, web UI, vector retrieval system, or deployment path.

## Current Public API

```text
WORK_PACKET_STATUSES
REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS
WORK_PACKET_ID_PATTERN
isWorkPacketStatus
validateWorkPacketMetadata
validateWorkPacketMarkdown
validateWorkPacketDocument
loadWorkPacketFile
validateWorkPacketFile
```

## Current Validation Scope

The package currently validates:

work-packet ID presence;
work-packet ID format;
title presence;
status presence;
allowed status;
version presence;
owner presence;
recommended commit presence;
required Markdown sections.

## Hardening Coverage

The package now explicitly tests:

1. whitespace-only IDs;
2. lowercase work-packet IDs;
3. invalid ID formats;
4. whitespace-only recommended commit values;
5. whitespace-only Markdown;
6. numbered required Markdown headings;
7. unnumbered required Markdown headings;
8. required Markdown section constants;
9. the exported work-packet ID pattern.

## Test Command

Run from the repository root:
```bash
bun test packages/work-packet-core
```

## Boundary

This package must remain dependency-free until a future work packet justifies dependencies.

## Work Packet Document Validation

The package includes a full work-packet Markdown document validator.

Current document validation API:

```text
validateWorkPacketDocument
```

The validator composes:

```text
parseWorkPacketFrontmatter
validateWorkPacketMetadata
validateWorkPacketMarkdown
```

The validator returns:

```text
valid
metadata
body
errors
warnings
```

The validator does not read files from disk. It validates caller-provided Markdown strings only.

The validator does not add dependencies, access the network, evaluate parsed values, or write files.

## Work Packet File Loading and Validation

The package includes dependency-free file loading for caller-provided work-packet Markdown file paths.

Current file APIs:

```text
loadWorkPacketFile
validateWorkPacketFile
```

The file validator composes:

```text
loadWorkPacketFile
validateWorkPacketDocument
```

The file validator returns:

```text
valid
path
metadata
body
errors
warnings
```

Missing or unreadable files return:

```text
file-read-error
```

The file-loading runtime slice does not walk directories, recursively scan repositories, read `.env` files by default, inspect secrets, access the network, execute file contents, or introduce CLI behavior.