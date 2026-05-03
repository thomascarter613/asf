import { describe, expect, test } from "bun:test";
import { validateWorkPacketDocument } from "./index";

const validDocument = `---
title: "WP-0040: Work Packet File Validation Runtime Baseline"
description: "Adds full work-packet Markdown document validation."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
document_type: "work-packet"
work_packet_id: "WP-0040"
milestone: "Runtime Implementation"
recommended_commit: "feat(work-packet): add document validator"
---

# WP-0040: Work Packet File Validation Runtime Baseline

## 1. Purpose

Validate a full work-packet document.

## 2. Scope

Compose frontmatter parsing, metadata validation, and Markdown validation.

## 3. Non-Goals

Do not add file loading.

## 4. Acceptance Criteria

Document validation passes.

## 5. Verification Commands

Run Bun tests.

## 6. Recommended Atomic Commit

feat(work-packet): add document validator
`;

const validUnnumberedDocument = `---
title: "WP-0040: Work Packet File Validation Runtime Baseline"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "WP-0040"
recommended_commit: "feat(work-packet): add document validator"
---

# WP-0040: Work Packet File Validation Runtime Baseline

## Purpose

Validate a full work-packet document.

## Scope

Compose validators.

## Non-Goals

Do not add file loading.

## Acceptance Criteria

Document validation passes.

## Verification Commands

Run Bun tests.

## Recommended Atomic Commit

feat(work-packet): add document validator
`;

describe("validateWorkPacketDocument", () => {
  test("valid document passes", () => {
    const result = validateWorkPacketDocument(validDocument);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("returns parsed metadata", () => {
    const result = validateWorkPacketDocument(validDocument);

    expect(result.metadata.id).toBe("WP-0040");
    expect(result.metadata.workPacketId).toBe("WP-0040");
    expect(result.metadata.recommendedCommit).toBe(
      "feat(work-packet): add document validator",
    );
  });

  test("returns body without frontmatter", () => {
    const result = validateWorkPacketDocument(validDocument);

    expect(result.body).toContain(
      "# WP-0040: Work Packet File Validation Runtime Baseline",
    );
    expect(result.body).toContain("## 1. Purpose");
    expect(result.body).not.toContain("recommended_commit");
  });

  test("missing frontmatter fails", () => {
    const result = validateWorkPacketDocument(`# WP-0040

## 1. Purpose

Validate a document.

## 2. Scope

Compose validators.

## 3. Non-Goals

No file loading.

## 4. Acceptance Criteria

Validation fails because frontmatter is missing.

## 5. Verification Commands

Run tests.

## 6. Recommended Atomic Commit

feat(work-packet): add document validator
`);

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-frontmatter")).toBe(true);
  });

  test("unclosed frontmatter fails", () => {
    const result = validateWorkPacketDocument(`---
title: "Broken"

# Body
`);

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "unclosed-frontmatter")).toBe(true);
  });

  test("invalid metadata fails", () => {
    const result = validateWorkPacketDocument(`---
title: "Invalid"
status: "review"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "wp-0040"
recommended_commit: "feat(work-packet): add document validator"
---

# WP-0040

## 1. Purpose

Validate.

## 2. Scope

Compose validators.

## 3. Non-Goals

No file loading.

## 4. Acceptance Criteria

Validation fails.

## 5. Verification Commands

Run tests.

## 6. Recommended Atomic Commit

feat(work-packet): add document validator
`);

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "invalid-status")).toBe(true);
    expect(result.errors.some((error) => error.code === "invalid-work-packet-id")).toBe(true);
  });

  test("missing Markdown section fails", () => {
    const result = validateWorkPacketDocument(`---
title: "WP-0040"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "WP-0040"
recommended_commit: "feat(work-packet): add document validator"
---

# WP-0040

## 1. Purpose

Validate a document.
`);

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-scope-section")).toBe(true);
    expect(result.errors.some((error) => error.code === "missing-acceptance-criteria-section")).toBe(true);
  });

  test("unknown frontmatter key warning is preserved", () => {
    const result = validateWorkPacketDocument(`---
title: "WP-0040"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "WP-0040"
recommended_commit: "feat(work-packet): add document validator"
custom_key: "ignored"
---

# WP-0040

## 1. Purpose

Validate a document.

## 2. Scope

Compose validators.

## 3. Non-Goals

No file loading.

## 4. Acceptance Criteria

Validation passes with warning.

## 5. Verification Commands

Run tests.

## 6. Recommended Atomic Commit

feat(work-packet): add document validator
`);

    expect(result.valid).toBe(true);
    expect(result.warnings.some((warning) => warning.code === "unknown-frontmatter-key")).toBe(true);
  });

  test("metadata warning is preserved", () => {
    const result = validateWorkPacketDocument(`---
id: "WP-0040"
work_packet_id: "WP-9999"
title: "WP-0040"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
recommended_commit: "feat(work-packet): add document validator"
---

# WP-0040

## 1. Purpose

Validate a document.

## 2. Scope

Compose validators.

## 3. Non-Goals

No file loading.

## 4. Acceptance Criteria

Validation passes with warning.

## 5. Verification Commands

Run tests.

## 6. Recommended Atomic Commit

feat(work-packet): add document validator
`);

    expect(result.valid).toBe(true);
    expect(result.warnings.some((warning) => warning.code === "work-packet-id-mismatch")).toBe(true);
  });

  test("valid document with unnumbered headings passes", () => {
    const result = validateWorkPacketDocument(validUnnumberedDocument);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("document validation composes parser metadata and Markdown validators", () => {
    const result = validateWorkPacketDocument(validDocument);

    expect(result.metadata.id).toBe("WP-0040");
    expect(result.body).toContain("## 2. Scope");
    expect(result.valid).toBe(true);
  });
});
