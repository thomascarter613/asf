# Agentic Software Framework

The Agentic Software Framework is a repository-governed software product initiative for disciplined AI-assisted software development.

Its purpose is to transform product intent, architecture decisions, context continuity, work protocols, work packets, verification evidence, and implementation work into a durable, auditable repository-centered system.

The uploaded repository tree is the active baseline as a historical baseline artifact, and the current continuation point is the latest committed work-packet sequence on `main`.

Current phase:

```text
Runtime MVP Hardening / v1.0 MVP Readiness
```

Runtime implementation has started.

Historical superseded baseline phrase retained for repo-contract traceability:

```text
Runtime implementation has not started.
```

The superseded phrase above is historical only. Current runtime implementation includes work-packet core validation and CLI packages.

---

## Current Status

The repository is now moving toward a local v1.0 MVP baseline.

Current established capabilities include:

1. Root governance files.
2. Product documents.
3. Architecture overview documents.
4. ADR index and ADR lineage.
5. Baseline inventory.
6. Domain model baseline.
7. Planning baseline.
8. Verification baseline.
9. Repo contract baseline.
10. Executable local repo contract script.
11. Evaluation harness baseline.
12. Executable evaluation harness.
13. Work-packet governance.
14. Context-continuity artifacts.
15. Root README.
16. Bun package/tooling setup.
17. Bun-aware repo contract checks.
18. CI workflow baseline.
19. Evaluation harness CI integration.
20. Work-packet core runtime validation.
21. Work-packet CLI runtime.
22. Single-file work-packet validation.
23. JSON validation output.
24. CLI safe-path policy.
25. Repo-wide work-packet validation.
26. Historical work-packet corpus normalization.
27. Frontmatter parser warning hardening.
28. Repo-wide work-packet validation as part of `bun run verify`.

The repository should continue to evolve through explicit work packets.

---

## Start Here

Future humans and AI sessions should start with:

```text
docs/ai/00-current-state.md
docs/ai/03-runtime-mvp-handoff.md
docs/ai/02-context-source-rules.md
```

Then read:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

These files define the current continuation point, context rules, and governed execution model.

---

## Verification

Canonical local verification:

```bash
bun install --frozen-lockfile
bun run verify
bash tools/eval/run-evaluations.sh
git diff --check
```

`bun run verify` currently runs:

```text
bun run verify:repo
bun run verify:work-packets
```

Direct verification commands:

```bash
./tools/check-repo-contract.sh
bun run work-packet validate-repo
bun test packages/work-packet-core
bun test packages/work-packet-cli
```

Expected work-packet corpus result:

```text
PASS
```

Do not claim verification passed unless these commands actually ran.

---

## Work-Packet CLI

The repository includes a work-packet CLI:

```bash
bun run work-packet --help
bun run work-packet validate <path>
bun run work-packet validate <path> --format json
bun run work-packet validate-repo
bun run work-packet validate-repo --format json
```

The CLI validates individual work-packet files and the canonical repository work-packet corpus under:

```text
docs/work-packets/
```

---

## Canonical Orientation Documents

Important orientation documents:

```text
README.md
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/ai/03-runtime-mvp-handoff.md

docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md

docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
docs/verification/02-evaluation-harness-baseline.md

tools/check-repo-contract.sh
tools/eval/README.md
tools/eval/run-evaluations.sh

package.json
.github/workflows/ci.yml
```

---

## Package and Tooling Status

Bun is canonical for JavaScript/TypeScript package management and script execution.

Current package/tooling files:

```text
package.json
bun.lock
```

Forbidden package/tooling files:

```text
pnpm-workspace.yaml
pnpm-lock.yaml
```

Package-manager ADR status:

```text
ADR-0023 supersedes ADR-0019 for active package-manager direction.
ADR-0019 remains preserved as historical context.
```

Future Python package/environment work should use `uv` unless a later ADR changes that direction.

Future Rust package/build work should use `cargo` unless a later ADR changes that direction.

---

## CI Status

CI workflow:

```text
.github/workflows/ci.yml
```

CI provider:

```text
GitHub Actions
```

CI triggers:

```text
push to main
pull_request
```

CI currently runs:

```bash
bun install --frozen-lockfile
bun run verify
bun test packages/work-packet-core
bun test packages/work-packet-cli
bun run verify:work-packets
bash tools/eval/run-evaluations.sh
git diff --check
```

CI boundaries:

```text
CI does not deploy.
CI does not publish packages.
CI does not require secrets.
```

---

## Architecture Decision Records

ADRs live in:

```text
docs/adr/
```

Known ADR caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 is preserved as historical context and superseded by ADR-0023 for active package-manager direction.
```

These caveats are accepted baseline facts. Do not renumber, delete, rename, fill, or supersede ADRs without an explicit work packet.

---

## Work Packets

Work packets live in:

```text
docs/work-packets/
```

Work packets are the repository’s governed execution unit.

Current work-packet governance files:

```text
docs/work-packets/README.md
docs/work-packets/WORK-PACKET-TEMPLATE.md
```

Repo-wide validation command:

```bash
bun run work-packet validate-repo
```

Non-trivial work should proceed through a work packet.

---

## AI and Context Continuity

Context-continuity artifacts live in:

```text
docs/ai/
```

Current files:

```text
docs/ai/00-current-state.md
docs/ai/01-handoff-packet-template.md
docs/ai/02-context-source-rules.md
docs/ai/03-runtime-mvp-handoff.md
```

These files exist so future humans and AI sessions can resume from repository artifacts instead of relying on chat memory.

Important context rule:

```text
Vector retrieval augments repository memory; it does not replace it.
```

Vector retrieval has not been implemented yet.

---

## Known Baseline Caveats

Known accepted caveats:

```text
ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are absent.
ADR-0013 and ADR-0015 appear to overlap by topic.
ADR-0019 remains preserved as historical context and is superseded by ADR-0023.
docs/product/00-architecture-overview.md and docs/architecture/00-architecture-overview.md both exist.
tree exists at the repository root as a captured baseline artifact.
Vector retrieval implementation does not exist yet.
SaaS UI does not exist yet.
Database persistence does not exist yet.
Multi-user authentication does not exist yet.
```

Do not silently fix these caveats. Use explicit work packets.

---

## Recommended Next Work

Recommended next work:

```text
WP-0058: v1.0 MVP Readiness Review
```

Purpose:

```text
Determine whether the local repository-governed ASF baseline qualifies as v1.0 MVP or whether any blocking gaps remain.
```