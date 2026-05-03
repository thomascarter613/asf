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

## Exit Codes

```text
SUCCESS = 0
VALIDATION_FAILED = 1
USAGE_ERROR = 2
UNEXPECTED_ERROR = 3
```

## Output

Valid files print:

```text
PASS
```

Invalid files print:

```text
FAIL
```

Errors and warnings are printed as plain text.

## Boundary

The CLI validates exactly one caller-provided file path.

It does not walk directories, validate globs, recursively scan repositories, read `.env` files by default, inspect secrets, access the network, execute file contents, or evaluate parsed values.
