---
title: "Documentation Work Protocol"
description: "Protocol for documentation-focused Foundry work."
status: "active"
version: "0.1.0"
created: "2026-04-28"
updated: "2026-04-28"
owner: "project-owner"
canonical: true
tags:

* sdlc
* protocol
* documentation

---

# Documentation Work Protocol

## Purpose

This protocol governs documentation-focused work.

## Protocol

1. Identify where the document belongs.
2. Identify the controlling ADRs, policies, or standards.
3. Add YAML frontmatter.
4. Define purpose before mechanics.
5. Preserve terminology consistency.
6. Distinguish current decisions from future work.
7. Avoid placeholder prose where a real explanation is needed.
8. Verify that Markdown starts with frontmatter.
9. Recommend an atomic documentation commit.

## Required Frontmatter

Every meaningful Markdown document must begin with YAML frontmatter.

## Verification

At minimum, run the frontmatter check:

```bash
for file in $(find . -name "*.md" -not -path "./.git/*"); do
  first_line="$(head -n 1 "$file")"
  if [ "$first_line" != "---" ]; then
    echo "Missing frontmatter: $file"
  fi
done
```

Expected output: no output.
