---
title: "Baseline Tree Artifact Policy"
description: "Policy artifact for the root tree baseline file in the Agentic Software Framework repository, preserving it as a captured baseline artifact while defining risks, prohibited actions, future options, and repo contract implications."
status: "proposed"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
audience:
  - "project-steward"
  - "principal-engineering-partner"
  - "product-manager"
  - "technical-program-manager"
  - "engineering"
  - "architecture"
  - "documentation"
  - "security"
  - "qa"
  - "devops"
  - "future-contributors"
  - "future-ai-agents"
document_type: "baseline-tree-artifact-policy"
canonical: false
related_documents:
  - "README.md"
  - "tree"
  - "docs/ai/00-current-state.md"
  - "docs/ai/02-context-source-rules.md"
  - "docs/planning/00-baseline-inventory.md"
  - "docs/planning/01-planning-baseline.md"
  - "docs/planning/03-architecture-overview-placement-review.md"
  - "docs/domain/00-domain-model.md"
  - "docs/verification/00-verification-baseline.md"
  - "docs/verification/01-repo-contract-baseline.md"
  - "docs/work-packets/WP-0011-baseline-tree-artifact-policy.md"
---

# Baseline Tree Artifact Policy

## 1. Purpose

This document defines the current policy for the root-level `tree` file in the Agentic Software Framework repository.

The uploaded repository tree is the active baseline.

The repository currently contains a root-level file:

```text
tree
```

This file is treated as a captured baseline artifact from the accepted uploaded repository tree.

This document explains:

1. What the `tree` file currently means.
2. Why it is preserved.
3. What risks it creates.
4. What actions are prohibited without explicit approval.
5. What future options exist.
6. How repo contract checks should treat it.
7. When the policy should be revisited.

This policy does not modify, move, delete, rename, regenerate, or replace the root `tree` file.

---

## 2. Current Policy Statement

The root `tree` file is currently preserved as a historical baseline artifact.

Current policy:

```text
Keep the root tree file unchanged until an explicit future work packet authorizes a change.
```

The file should be treated as:

```text
captured baseline evidence
```

not as:

```text
live generated repository state
```

This distinction matters because the repository will continue to evolve after the captured tree was accepted.

---

## 3. Baseline Rule

The uploaded repository tree is the active baseline.

Therefore:

1. The root `tree` file is part of the accepted baseline.
2. It must not be deleted silently.
3. It must not be moved silently.
4. It must not be regenerated silently.
5. It must not be replaced silently.
6. It must not be treated as always-current repository state.
7. Any future change to it must occur through an explicit work packet.

---

## 4. Current Role of the Root `tree` File

The current role of the root `tree` file is to preserve the repository shape that was accepted as the baseline during stabilization.

It helps answer:

```text
What did the Project Steward accept as the baseline tree when stabilization began?
```

It does not necessarily answer:

```text
What does the repository look like right now?
```

For live repository state, use commands such as:

```bash
tree
find . -maxdepth 4 -type f | sort
git status --short
```

For historical baseline state, use the root `tree` file until a newer baseline artifact supersedes it.

---

## 5. Why the File Is Preserved

The root `tree` file is preserved because it provides:

1. Baseline traceability.
2. Evidence of the accepted uploaded tree.
3. A simple reference for early stabilization.
4. A source input for baseline inventory.
5. A reference point for repo contract discussions.
6. A warning against silently replacing the repository shape.
7. A bridge between the uploaded baseline and later repository-governed artifacts.

Preserving it is especially useful while the repository is still in:

```text
Baseline Stabilization
```

---

## 6. Risks of Keeping the File at Root

Keeping the file at root has risks.

## 6.1 Staleness Risk

The file can become stale as the repository evolves.

Example:

```text
A new README.md is added, but the original tree file may not show it.
```

Mitigation:

```text
Treat tree as historical baseline, not live state.
```

## 6.2 Confusion Risk

Future readers may assume the file reflects current repository state.

Mitigation:

```text
This policy explains that tree is a captured baseline artifact.
```

## 6.3 Root Clutter Risk

A root file named `tree` may look unusual or temporary.

Mitigation:

```text
A future packet may move or supersede it after baseline stabilization.
```

## 6.4 Contract Overfitting Risk

Repo contract checks may overfit to the historical snapshot.

Mitigation:

```text
Initial repo contracts should check presence only, not exact live equality with current repository state.
```

---

## 7. Risks of Premature Deletion or Movement

Deleting or moving the root `tree` file too early also has risks.

## 7.1 Loss of Baseline Evidence

The repository would lose a simple artifact representing the accepted uploaded baseline.

## 7.2 Broken References

Existing documents reference the root `tree` file, including:

```text
README.md
docs/ai/00-current-state.md
docs/planning/00-baseline-inventory.md
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

Moving or deleting the file would require updating references.

## 7.3 Baseline Drift

Removing the artifact without a packet would weaken the project’s baseline preservation discipline.

## 7.4 Repo Contract Confusion

Current repo contract baseline allows and expects the root `tree` file.

Changing it without updating repo contract policy would create inconsistency.

---

## 8. Prohibited Automatic Actions

Do not automatically:

1. Delete the root `tree` file.
2. Move the root `tree` file.
3. Rename the root `tree` file.
4. Regenerate the root `tree` file.
5. Replace the root `tree` file with newer output.
6. Treat the root `tree` file as live current state.
7. Require the root `tree` file to match current `tree` command output.
8. Remove references to the root `tree` file.
9. Update repo contract checks to stop allowing the root `tree` file.
10. Move the file into `docs/` or `.artifacts/` without a work packet.
11. Commit a new generated tree snapshot without documenting why.

Any of these actions requires explicit future work.

---

## 9. Current Repo Contract Treatment

The current repo contract baseline should continue to treat the root `tree` file as required.

Current contract behavior:

```text
test -f tree
```

Meaning:

```text
The captured baseline tree artifact exists.
```

It should not mean:

```text
The file exactly matches the live repository state.
```

Future executable repo contract scripts should preserve this distinction.

---

## 10. Current Verification Treatment

The verification baseline should continue to check that the file exists.

Current expected check:

```bash
test -f tree
```

Recommended interpretation:

```text
The historical baseline artifact is present.
```

Not recommended:

```text
Diff live tree output against the historical tree file.
```

Live tree comparison can be added later only if the project creates a formal generated baseline snapshot policy.

---

## 11. Future Options

## 11.1 Option A — Preserve at Root

Description:

```text
Keep the root tree file where it is.
```

Pros:

1. Minimal change.
2. Preserves current references.
3. Keeps baseline artifact obvious.

Cons:

1. Root remains slightly cluttered.
2. Future readers may misunderstand it.
3. Requires documentation to explain its role.

Recommended status:

```text
Acceptable for now.
```

---

## 11.2 Option B — Move Under `docs/planning/`

Possible path:

```text
docs/planning/baseline-tree.txt
```

Pros:

1. Places the artifact near baseline inventory.
2. Reduces root clutter.
3. Makes documentation purpose clearer.

Cons:

1. Requires file move.
2. Requires reference updates.
3. Requires repo contract updates.

Recommended status:

```text
Possible later through explicit packet.
```

---

## 11.3 Option C — Move Under `.artifacts/`

Possible path:

```text
.artifacts/baseline/tree.txt
```

Pros:

1. Treats the file as an artifact rather than documentation.
2. Scales to future generated outputs.
3. Keeps root clean.

Cons:

1. `.artifacts/` does not currently exist.
2. Artifact retention policy would be needed.
3. Requires repo contract and documentation updates.

Recommended status:

```text
Possible later if artifact structure is introduced.
```

---

## 11.4 Option D — Supersede With Baseline Inventory

Description:

```text
Keep docs/planning/00-baseline-inventory.md as the durable baseline record and eventually remove or archive the root tree file.
```

Pros:

1. Replaces raw tree output with structured documentation.
2. Reduces root clutter.
3. Improves maintainability.

Cons:

1. Loses the raw captured tree artifact unless archived.
2. Requires careful reference updates.
3. Requires explicit decision.

Recommended status:

```text
Possible later, not now.
```

---

## 11.5 Option E — Regenerate as Versioned Snapshots

Possible paths:

```text
docs/planning/baseline-tree-2026-05-03.txt
docs/planning/baseline-tree-current.txt
```

Pros:

1. Makes snapshot dates explicit.
2. Supports baseline comparison over time.
3. Avoids ambiguous root file.

Cons:

1. Requires naming policy.
2. Requires generation rules.
3. Requires maintenance discipline.
4. May create noisy diffs.

Recommended status:

```text
Defer until repo contract or artifact tooling exists.
```

---

## 12. Recommended Near-Term Policy

Recommended near-term policy:

```text
Preserve the root tree file unchanged as a captured baseline artifact.
```

Do not move it yet.

Do not regenerate it yet.

Do not delete it yet.

Do not require it to match live repository state.

Recommended next review point:

```text
After executable repo contract script work begins.
```

Rationale:

Once executable repo contract checks exist, the project can decide whether the root `tree` file should remain a required historical artifact, move to an artifact directory, or be superseded by generated contract output.

---

## 13. Future Work Packet Recommendation

If the Project Steward chooses to change the root `tree` file policy later, create a new packet.

Suggested packet:

```text
WP-0016: Baseline Tree Artifact Resolution
```

Possible scope:

1. Decide whether to keep, move, rename, archive, regenerate, or remove the root `tree` file.
2. Update references in README.
3. Update current-state documents.
4. Update context source rules.
5. Update verification baseline.
6. Update repo contract baseline.
7. Update executable repo contract scripts if they exist.
8. Preserve historical traceability.

---

## 14. Impact on README

Current README correctly treats `tree` as a known baseline caveat.

If policy changes later, update:

```text
README.md
```

Possible updates:

1. Remove root `tree` caveat.
2. Point to new artifact location.
3. Explain whether historical tree snapshots are retained.
4. Update recommended verification references.

This policy does not modify README.

---

## 15. Impact on Context Continuity

Current context-continuity artifacts reference the root `tree` file as part of the accepted baseline.

If policy changes later, update:

```text
docs/ai/00-current-state.md
docs/ai/02-context-source-rules.md
```

Future sessions should not assume the `tree` file is live current state.

They should treat it as:

```text
historical baseline artifact
```

until this policy changes.

---

## 16. Impact on Verification and Repo Contracts

Current verification and repo contract documents should continue checking the root `tree` file exists.

If policy changes later, update:

```text
docs/verification/00-verification-baseline.md
docs/verification/01-repo-contract-baseline.md
```

If executable scripts exist by then, update those scripts too.

Potential future contract behavior after resolution:

```text
Either root tree exists,
or approved replacement baseline artifact exists.
```

Do not implement that behavior yet.

---

## 17. Security and Privacy Considerations

A tree output can reveal file names.

File names may sometimes expose sensitive information.

Therefore:

1. Do not regenerate tree output blindly.
2. Do not include ignored secrets or private files.
3. Do not include `.env` paths.
4. Do not include private local paths.
5. Do not include generated dependency directories.
6. Do not include private operational artifacts.
7. Do not publish tree snapshots without review.

Current root `tree` file is accepted as part of the baseline, but future regeneration should be done carefully.

---

## 18. Policy Summary

Current policy:

```text
The root tree file is preserved unchanged as a captured historical baseline artifact.
```

The file is:

```text
allowed
required by current baseline checks
historical
not live state
not to be regenerated automatically
not to be deleted automatically
not to be moved automatically
```

Future changes require:

```text
an explicit work packet
reference updates
verification updates
repo contract updates
current-state updates
```

---

## 19. Baseline Tree Artifact Policy Acceptance Criteria

This policy is complete for the current phase when:

1. It states that the uploaded repository tree is the active baseline.
2. It references the root `tree` file.
3. It explains the current role of the root `tree` file.
4. It identifies risks of staleness.
5. It identifies risks of premature deletion or movement.
6. It defines Prohibited Automatic Actions.
7. It defines future options.
8. It recommends preserving the file for now.
9. It explains repo contract treatment.
10. It explains verification treatment.
11. It explains context-continuity impact.
12. It explains security and privacy considerations.
13. It does not modify the root `tree` file.
14. It does not require immediate cleanup.

---

## 20. Verification

Run:

```bash
test -f docs/work-packets/WP-0011-baseline-tree-artifact-policy.md && \
test -f docs/planning/04-baseline-tree-artifact-policy.md && \
test -f tree && \
grep -q '^title: "WP-0011: Baseline Tree Artifact Policy"$' docs/work-packets/WP-0011-baseline-tree-artifact-policy.md && \
grep -q '^# WP-0011: Baseline Tree Artifact Policy$' docs/work-packets/WP-0011-baseline-tree-artifact-policy.md && \
grep -q '^title: "Baseline Tree Artifact Policy"$' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q '^# Baseline Tree Artifact Policy$' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q 'The uploaded repository tree is the active baseline' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q 'root `tree` file' docs/planning/04-baseline-tree-artifact-policy.md && \
grep -q 'Prohibited Automatic Actions' docs/planning/04-baseline-tree-artifact-policy.md && \
git diff --check
```

Expected result:

```text
All checks pass.
```

Manual verification:

1. Confirm the root `tree` file was not modified.
2. Confirm the root `tree` file was not moved.
3. Confirm the root `tree` file was not deleted.
4. Confirm no ADRs were modified.
5. Confirm no existing baseline documents were modified.
6. Confirm this policy is review/policy-only.

---

## 21. Recommended Atomic Commit

```bash
git add docs/planning/04-baseline-tree-artifact-policy.md docs/work-packets/WP-0011-baseline-tree-artifact-policy.md
git commit -m "docs(planning): add baseline tree artifact policy"
```

If `WP-0011` was already committed separately, use:

```bash
git add docs/planning/04-baseline-tree-artifact-policy.md
git commit -m "docs(planning): add baseline tree artifact policy"
```

---

## 22. Next Step

Next create:

```text
docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md
```

Then execute it by updating:

```text
docs/adr/README.md
```

only if the packet explicitly authorizes that edit.
````