# Work Packet CLI

`@asf/work-packet-cli` provides the developer-facing command surface for validating Agentic Software Framework work-packet Markdown files.

The package is dependency-free except for the internal workspace dependency on `@asf/work-packet-core`.

## Current Commands

Validate one file:

```bash
bun run work-packet validate <path>
```

Validate repository work packets:

```bash
bun run work-packet validate-repo
```

## Help

Supported help commands:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate --help
bun run work-packet validate-repo --help
```

## Path Safety Policy

The single-file `validate <path>` command validates exactly one caller-provided file path.

Before reading the file, the CLI requires the path to resolve inside the current working directory.

Allowed path examples from the repository root:

```bash
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
bun run work-packet validate ./docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
```

Rejected path examples:

```bash
bun run work-packet validate ../outside.md
bun run work-packet validate /tmp/outside.md
```

Existing symlink paths that resolve outside the current working directory are rejected.

Missing files inside the current working directory are safe to attempt and are reported as validation failures with `file-read-error`.

## Repository Discovery Policy

The `validate-repo` command discovers direct child files under:

```text
docs/work-packets/
```

Candidate work-packet filenames must match:

```text
WP-0000-descriptive-slug.md
```

The initial discovery implementation is non-recursive.

Known support files are excluded:

```text
README.md
WORK-PACKET-TEMPLATE.md
```

The command reports malformed `WP-*` Markdown filenames, duplicate work-packet IDs, and filename/frontmatter ID mismatches.

## Output Formats

The default output format is human-readable plain text:

```bash
bun run work-packet validate <path>
bun run work-packet validate <path> --format text
bun run work-packet validate-repo
bun run work-packet validate-repo --format text
```

The CLI also supports explicit JSON output:

```bash
bun run work-packet validate <path> --format json
bun run work-packet validate <path> --format=json
bun run work-packet validate-repo --format json
bun run work-packet validate-repo --format=json
```

Usage errors and unexpected runtime errors remain plain text in the current baseline.

## Exit Codes

```text
SUCCESS = 0
VALIDATION_FAILED = 1
USAGE_ERROR = 2
UNEXPECTED_ERROR = 3
```

Unsafe single-file paths are usage errors and exit with `USAGE_ERROR = 2`.

Validation failures for safe paths exit with `VALIDATION_FAILED = 1`.

Repository validation failures also exit with `VALIDATION_FAILED = 1`.

## Plain-Text Single-File Output

Valid files print:

```text
PASS
```

Invalid files print:

```text
FAIL
```

Errors and warnings are printed as plain text.

## JSON Single-File Output

Valid files in JSON mode print a JSON object with this general shape:

```json
{
  "schemaVersion": "asf.work-packet.validation-result.v1",
  "command": "validate",
  "result": "pass",
  "valid": true,
  "path": "docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md",
  "metadata": {
    "id": "WP-0043",
    "title": "Work Packet File Loading Runtime Baseline"
  },
  "summary": {
    "errorCount": 0,
    "warningCount": 0
  },
  "errors": [],
  "warnings": []
}
```

## JSON Repository Output

Repository validation in JSON mode prints a JSON object with this general shape:

```json
{
  "schemaVersion": "asf.work-packet.repository-validation-result.v1",
  "command": "validate-repo",
  "result": "pass",
  "valid": true,
  "discoveryRoot": "docs/work-packets",
  "summary": {
    "discoveredFileCount": 1,
    "validatedFileCount": 1,
    "validFileCount": 1,
    "invalidFileCount": 0,
    "errorCount": 0,
    "warningCount": 0
  },
  "files": [],
  "errors": [],
  "warnings": []
}
```

## Boundary

The CLI validates caller-provided work-packet files and canonical repository work-packet files.

It does not walk arbitrary directories, validate globs, recursively scan repositories, read `.env` files by default, inspect secrets, access the network, execute file contents, evaluate parsed values, write output files, or automatically fix Markdown.