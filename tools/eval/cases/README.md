# Evaluation Cases

This directory contains executable evaluation case definitions for the Agentic Software Framework.

The initial case format is JSON.

The runner is intentionally simple and expects each check object to appear on a single line.

## Case Format

Example:

```json
{
  "id": "EVAL-0000",
  "title": "Example evaluation",
  "category": "example",
  "status": "active",
  "required": true,
  "purpose": "Describe what this evaluation checks.",
  "checks": [
    { "type": "file_exists", "path": "README.md" },
    { "type": "file_contains", "path": "README.md", "pattern": "Agentic Software Framework" }
  ]
}
````

## Supported Check Types

```text
file_exists
file_absent
file_contains
file_not_contains
command_succeeds
```

## Status Values

Supported case status values:

```text
active
draft
deprecated
```

Only `active` cases are executed.

Non-active cases are skipped.

## Required Cases

Cases are required by default.

A required active case failure causes the runner to exit non-zero.

## Security Boundary

Cases must only inspect explicitly listed repository-relative files.

Do not add cases that inspect secrets, credentials, tokens, private keys, environment files, dependency directories, generated caches, or files outside the repository.