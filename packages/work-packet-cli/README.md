# Work Packet CLI

`@asf/work-packet-cli` provides the developer-facing command surface for validating Agentic Software Framework work-packet Markdown files.

The package is dependency-free except for the internal workspace dependency on `@asf/work-packet-core`.

## Current Command

Run from the repository root:

```bash
bun run work-packet validate <path>
```

Example:

```bash
bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
```

## Help

Supported help commands:

```bash
bun run work-packet --help
bun run work-packet help
bun run work-packet validate --help
```

## Path Safety Policy

The CLI validates exactly one caller-provided file path.

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

## Output Formats

The default output format is human-readable plain text:

```bash
bun run work-packet validate <path>
bun run work-packet validate <path> --format text
```

The CLI also supports explicit JSON validation output for one caller-provided file:

```bash
bun run work-packet validate <path> --format json
bun run work-packet validate <path> --format=json
```

The JSON output mode is intended for automation and includes:

- schema version,
- command name,
- pass/fail result,
- validity boolean,
- validated path,
- parsed metadata,
- summary counts,
- validation errors,
- validation warnings.

Usage errors and unexpected runtime errors remain plain text in the current baseline.

## Exit Codes

```text
SUCCESS = 0
VALIDATION_FAILED = 1
USAGE_ERROR = 2
UNEXPECTED_ERROR = 3
```

Unsafe paths are usage errors and exit with `USAGE_ERROR = 2`.

Validation failures for safe paths exit with `VALIDATION_FAILED = 1`.

## Plain-Text Output

Valid files print:

```text
PASS
```

Invalid files print:

```text
FAIL
```

Errors and warnings are printed as plain text.

## JSON Output

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

Invalid files in JSON mode still exit with `VALIDATION_FAILED = 1`.

## Boundary

The CLI validates exactly one caller-provided file path.

It does not walk directories, validate globs, recursively scan repositories, read `.env` files by default, inspect secrets, access the network, execute file contents, evaluate parsed values, write output files, or automatically fix Markdown.
