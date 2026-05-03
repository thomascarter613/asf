---
id: WP-0053
title: Repo-Wide Validation Integration Audit
status: ready
version: 0.1.0
created: 2026-05-03
updated: 2026-05-03
owner: ASF Architecture Council
document_type: work-packet
work_packet_id: WP-0053
milestone: Runtime Hardening
recommended_commit: "docs(work-packet): audit repo-wide validation integration"
canonical: true
description: >
  Audit the new repo-wide work-packet validation command against the actual ASF
  repository before making repo-wide validation a hard CI or repo-contract gate.
audience:
  - maintainers
  - contributors
  - qa-reviewers
  - ci-maintainers
  - principal-engineering-reviewers
related_documents:
  - docs/work-packets/WP-0051-repository-work-packet-discovery-policy.md
  - docs/work-packets/WP-0052-repo-wide-work-packet-validation-command.md
affected_files:
  - docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md
---

# WP-0053: Repo-Wide Validation Integration Audit

## 1. Purpose

Audit the repo-wide work-packet validation command against the actual ASF repository.

WP-0052 added the `validate-repo` command. That command is now available as a runtime surface, but it should not become a hard CI or repo-contract gate until ASF knows whether the current historical work-packet corpus passes the new repository-wide validation policy.

This packet records the integration audit step before the command becomes a release gate.

## 2. Scope

WP-0053 includes:

- running the repo-wide validation command against the actual repository,
- running text and JSON output modes,
- classifying any failures,
- deciding whether failures are document drift, policy gaps, or implementation defects,
- deciding the correct next packet after the audit.

This packet is documentation and audit only.

## 3. Non-Goals

WP-0053 does not add:

- new CLI commands,
- new validation rules,
- new discovery rules,
- CI enforcement,
- repo-contract enforcement,
- work-packet document normalization,
- automatic fixing,
- Markdown rewriting,
- frontmatter rewriting,
- glob support,
- recursive traversal.

Those changes require later work packets.

## 4. Current Context

ASF now has:

- single-file work-packet validation,
- plain-text validation output,
- JSON validation output,
- CLI safe-path policy,
- repository work-packet discovery policy,
- repo-wide work-packet validation command.

The next question is whether the current repository corpus is ready to be held to that command as a hard release gate.

## 5. Audit Commands

Run from the repository root:

```bash
bun run work-packet validate-repo
```

Then run:

```bash
bun run work-packet validate-repo --format json
```

If the command exits with `0`, repo-wide validation passes.

If the command exits with `1`, repo-wide validation completed successfully but found validation failures.

If the command exits with `2`, there is a usage or discovery-root problem.

If the command exits with `3`, there is an unexpected runtime error.

## 6. Expected Outcomes

### 6.1 Passing Outcome

The ideal outcome is:

```text
PASS
Command: validate-repo
```

with:

```text
Errors: 0
```

A passing outcome means ASF can proceed toward making repo-wide validation a CI and repo-contract gate.

### 6.2 Failing Validation Outcome

A validation failure outcome is acceptable during this audit.

It likely means the new validator found historical work-packet drift such as:

- missing required frontmatter,
- missing required Markdown sections,
- filename/frontmatter ID mismatch,
- duplicate work-packet IDs,
- malformed work-packet filenames,
- parser warnings that should be ignored,
- legacy packet documents created before the current validation policy.

A validation failure should not be treated as a CLI crash.

### 6.3 Usage Error Outcome

A usage error likely means the command was run outside the expected repository root or the expected discovery root does not exist.

That should be fixed before using the command as a release gate.

### 6.4 Unexpected Runtime Error Outcome

An unexpected runtime error means the implementation likely needs a runtime hardening fix before corpus cleanup.

## 7. Failure Classification

If repo-wide validation fails, classify each issue into one of the following categories.

| Category | Meaning | Likely Next Packet |
| --- | --- | --- |
| Historical document drift | Old work packets do not satisfy the current validator. | Normalize historical work packets. |
| Policy mismatch | The validator enforces something the policy did not require. | Clarify policy or adjust implementation. |
| Parser gap | The dependency-free parser warns on accepted ASF metadata. | Harden frontmatter parser. |
| Discovery issue | File discovery includes or excludes the wrong files. | Harden repository discovery. |
| Output issue | Text or JSON output is unclear or unstable. | Harden repo-wide output. |
| Runtime defect | Command crashes or returns wrong exit code. | Fix CLI runtime. |

## 8. Audit Record Template

Paste the observed repo-wide text result below after running the command.

```text
Observed text result:
<replace with command output>
```

Paste the observed repo-wide JSON summary below after running the JSON command.

```json
{
  "observed": "replace with relevant JSON summary"
}
```

If the full JSON output is too large, preserve at least:

- `schemaVersion`,
- `command`,
- `result`,
- `valid`,
- `summary`,
- top-level `errors`,
- the first several failing `files`.

## 9. Decision Rule

After the audit:

- If repo-wide validation passes, proceed to a packet that adds repo-wide validation to CI and repo-contract anchors.
- If repo-wide validation fails because of historical document drift, proceed to a packet that normalizes the historical work-packet corpus.
- If repo-wide validation fails because of implementation defects, proceed to a focused runtime fix packet.
- If repo-wide validation fails because of unclear policy, proceed to a policy clarification packet.

Do not add CI enforcement until the actual repository passes repo-wide validation.

## 10. Recommended Next Packet Paths

Possible next packets:

```text
WP-0054: Normalize Historical Work-Packet Corpus
WP-0054: Add Repo-Wide Validation CI Gate
WP-0054: Harden Repo-Wide Discovery Behavior
WP-0054: Harden Repo-Wide Validation Output
```

The correct WP-0054 depends on the observed audit result.

## 11. Acceptance Criteria

WP-0053 is complete when:

- this audit document exists,
- the repo-wide validation command has been run in text mode,
- the repo-wide validation command has been run in JSON mode,
- the observed result has been classified,
- the next packet direction is clear,
- no runtime behavior is changed by this packet,
- repository verification passes before commit.

## 12. Verification Commands

Run from the repository root:

```bash
git status --short
git diff --check
bun run work-packet validate docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md
bun run work-packet validate docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md --format json
bun run work-packet validate-repo --help
bun test packages/work-packet-core
bun test packages/work-packet-cli
bash tools/eval/run-evaluations.sh
bun run verify
./tools/check-repo-contract.sh
git status --short
```

The full repo-wide validation audit commands are expected to be run and reviewed, but they should not yet be added as hard verification gates in this packet unless they pass.

## 13. Recommended Atomic Commit

If verification passes and the only intended change is this document, commit with:

```bash
git add docs/work-packets/WP-0053-repo-wide-validation-integration-audit.md
git commit -m "docs(work-packet): audit repo-wide validation integration"
git push
```
