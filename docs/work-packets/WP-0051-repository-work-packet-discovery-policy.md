---
id: WP-0051
title: Repository Work-Packet Discovery Policy
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0051
milestone: Runtime Hardening
recommended_commit: "docs(work-packet): define repository discovery policy"
canonical: true
description: >
  Define the repository work-packet discovery policy that will govern future
  repo-wide validation behavior before implementing any directory traversal,
  glob support, or repository-wide validation command.
audience:
  - maintainers
  - contributors
  - security-reviewers
  - qa-reviewers
  - ci-maintainers
related_documents:
  - docs/work-packets/WP-0048-cli-output-contract-and-compatibility-policy.md
  - docs/work-packets/WP-0049-json-output-mode-for-single-file-validation.md
  - docs/work-packets/WP-0050-work-packet-cli-safe-path-policy.md
affected_files:
  - docs/work-packets/WP-0051-repository-work-packet-discovery-policy.md
---

# WP-0051: Repository Work-Packet Discovery Policy

## 1. Purpose

Define the repository work-packet discovery policy for the ASF work-packet CLI.

The CLI currently validates one caller-provided work-packet Markdown file. Before adding a repo-wide validation command, ASF needs a clear policy for which files count as repository work packets, how they are discovered, which files are excluded, and how deterministic ordering should work.

This packet is documentation and policy only.

It does not add runtime behavior.

## 2. Scope

WP-0051 defines:

- the canonical work-packet directory,
- the initial candidate file naming policy,
- excluded files,
- deterministic ordering,
- duplicate identifier handling expectations,
- malformed filename handling expectations,
- safe-path and repository-boundary expectations,
- symlink expectations,
- future repo-wide validation behavior,
- future JSON summary behavior,
- test and evaluation expectations for the later implementation packet.

The policy created here is intended to guide WP-0052.

## 3. Non-Goals

WP-0051 does not add:

- a repo-wide validation command,
- recursive directory traversal,
- glob support,
- file discovery code,
- filesystem walking code,
- JSON summary output,
- automatic fixing,
- work-packet index generation,
- Markdown rewriting,
- frontmatter rewriting,
- Git repository root detection,
- network access,
- external CLI dependencies.

Those capabilities require later work packets.

## 4. Discovery Root

The canonical work-packet discovery root is:

```text
docs/work-packets/
```

For the first repo-wide validation implementation, discovery should be limited to this directory.

The implementation should not search the entire repository by default.

The implementation should not search outside the current working directory or configured repository root.

## 5. Candidate File Policy

A repository work-packet candidate is a Markdown file directly under:

```text
docs/work-packets/
```

with a filename matching this pattern:

```text
WP-0000-descriptive-slug.md
```

The concrete filename policy is:

```text
^WP-[0-9]{4}-[a-z0-9][a-z0-9-]*\.md$
```

Examples of valid candidate filenames:

```text
WP-0049-json-output-mode-for-single-file-validation.md
WP-0050-work-packet-cli-safe-path-policy.md
WP-0051-repository-work-packet-discovery-policy.md
```

Examples of files that should not be treated as work-packet candidates:

```text
README.md
WORK-PACKET-TEMPLATE.md
WP-0051.md
WP-51-example.md
WP-0051_underscore.md
wp-0051-lowercase-prefix.md
WP-0051-UPPERCASE-SLUG.md
notes.md
```

## 6. Excluded Files

The following files under `docs/work-packets/` are known support files and must be excluded from work-packet discovery:

```text
README.md
WORK-PACKET-TEMPLATE.md
```

The following should also be excluded:

- hidden files,
- editor swap files,
- backup files,
- non-Markdown files,
- directories,
- broken symlinks,
- symlinks that resolve outside the allowed repository boundary.

## 7. Recursion Policy

The first repository discovery implementation should be non-recursive.

Only direct children of `docs/work-packets/` should be considered.

Subdirectories under `docs/work-packets/` should not be traversed until a later packet explicitly defines recursive behavior.

This avoids premature complexity around nested packets, archival folders, generated outputs, and future package-specific packet directories.

## 8. Symlink Policy

Discovery should not follow symlinks outside the configured repository boundary.

The safe-path policy introduced for single-file validation should guide the future repository discovery implementation.

If a candidate path is a symlink, the implementation should reject or skip it unless it can prove that the real resolved path remains inside the allowed repository boundary.

A later implementation packet may decide whether unsafe symlinks are:

- hard errors,
- warnings,
- skipped entries.

For the first repo-wide validation implementation, unsafe symlink behavior should prefer explicit failure over silent skipping.

## 9. Deterministic Ordering

Discovered work packets must be ordered deterministically.

The default ordering should be:

1. ascending numeric work-packet number,
2. filename as a tie-breaker.

For example:

```text
WP-0001-work-packet-template.md
WP-0002-baseline-inventory-and-consistency-review.md
WP-0049-json-output-mode-for-single-file-validation.md
WP-0050-work-packet-cli-safe-path-policy.md
WP-0051-repository-work-packet-discovery-policy.md
```

Deterministic ordering is required so local output, CI output, and JSON summaries remain stable.

## 10. Work-Packet Identifier Expectations

The filename identifier and frontmatter identifier should eventually agree.

For a file named:

```text
WP-0051-repository-work-packet-discovery-policy.md
```

the expected frontmatter should include:

```yaml
id: WP-0051
work_packet_id: WP-0051
```

The repository-wide validation implementation should eventually detect:

- duplicate work-packet IDs,
- mismatched filename and frontmatter IDs,
- invalid filename IDs,
- missing frontmatter IDs,
- missing `work_packet_id` values where required by policy.

The current core validator already supports metadata validation and work-packet ID mismatch warnings. This policy does not require changing that validator in WP-0051.

## 11. Malformed Filename Policy

Files in `docs/work-packets/` that appear to be work packets but do not match the canonical filename pattern should be treated as policy violations by the future repo-wide command.

Examples:

```text
WP-51-example.md
WP-0051.md
WP-0051_bad_slug.md
WP-0051-Bad-Slug.md
```

The future repo-wide command should report malformed candidate filenames separately from document validation failures.

This keeps file discovery policy distinct from Markdown document validation policy.

## 12. Missing Directory Policy

If the canonical discovery root does not exist, the future repo-wide command should fail clearly.

The expected future behavior is:

- exit code `2` if the user invoked a repo-wide command in a location that does not contain the expected discovery root,
- clear error message explaining that `docs/work-packets/` was not found,
- no fallback to scanning the entire filesystem or repository.

## 13. Output Policy for Future Repo-Wide Validation

The future repo-wide validation command should preserve the CLI output rules defined before this packet.

Plain-text output should remain human-readable.

JSON output should remain explicit.

Repo-wide JSON output should not reuse the exact single-file JSON shape without adding a clear aggregate schema version.

The future aggregate JSON shape should include:

- schema version,
- command name,
- root path,
- discovery root,
- result,
- summary counts,
- discovered files,
- validation results,
- discovery errors,
- warnings.

The exact JSON schema is deferred to the implementation packet.

## 14. Future Command Shape

The recommended future command shape is:

```bash
bun run work-packet validate-repo
```

Possible later aliases may include:

```bash
bun run work-packet validate --repo
bun run work-packet validate docs/work-packets
```

However, WP-0051 recommends starting with a distinct repo-wide command rather than overloading single-file validation.

This keeps the existing single-file command stable:

```bash
bun run work-packet validate <path>
```

## 15. Security Considerations

Repository discovery must avoid unsafe filesystem behavior.

Future implementation should not:

- scan arbitrary parent directories,
- follow symlinks outside the repository boundary,
- traverse hidden directories,
- read `.env` files,
- inspect secrets,
- execute file contents,
- evaluate Markdown as code,
- write files during validation,
- silently ignore unsafe path escapes.

Discovery is read-only.

Validation is read-only.

Any future automatic fixing behavior must be designed in a separate packet.

## 16. Testing Expectations for WP-0052

The implementation packet should include tests for:

- discovering valid work-packet files,
- excluding `README.md`,
- excluding `WORK-PACKET-TEMPLATE.md`,
- excluding non-Markdown files,
- excluding or failing malformed filenames according to policy,
- deterministic ordering,
- duplicate ID detection,
- filename/frontmatter ID mismatch detection,
- missing discovery root behavior,
- symlink escape behavior,
- repo-wide plain-text output,
- repo-wide JSON output if implemented in that packet.

WP-0052 should keep implementation focused and avoid adding glob support unless explicitly scoped.

## 17. Evaluation Expectations for WP-0052

The implementation packet should add or update evaluation cases that anchor:

- discovery module existence,
- repo-wide command existence,
- discovery root policy,
- non-recursive discovery behavior,
- stable command tests,
- no glob support unless intentionally added,
- no directory traversal outside the repository boundary.

Evaluation cases should verify externally meaningful behavior, not private implementation details.

## 18. Runtime Boundary

After WP-0051, the runtime boundary remains unchanged.

The CLI still supports:

```bash
bun run work-packet validate <path>
```

The CLI still validates one caller-provided file.

No repo-wide command exists as a result of this packet.

## 19. Acceptance Criteria

WP-0051 is complete when:

- this policy document exists,
- the canonical discovery root is defined,
- candidate filename rules are defined,
- excluded files are defined,
- deterministic ordering is defined,
- symlink and safe-path expectations are defined,
- malformed filename expectations are defined,
- future repo-wide command shape is recommended,
- the packet remains documentation-only,
- repository verification passes before commit.

## 20. Verification Commands

Run from the repository root:

```bash
git status --short
git diff --check
bun run work-packet validate docs/work-packets/WP-0051-repository-work-packet-discovery-policy.md
bun run work-packet validate docs/work-packets/WP-0051-repository-work-packet-discovery-policy.md --format json
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git status --short
```

Do not claim verification passed unless the command output proves it.

## 21. Recommended Atomic Commit

If verification passes and the only intended change is this document, commit with:

```bash
git add docs/work-packets/WP-0051-repository-work-packet-discovery-policy.md
git commit -m "docs(work-packet): define repository discovery policy"
git push
```
