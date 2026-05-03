import { describe, expect, test } from "bun:test";
import {
  isWorkPacketStatus,
  REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS,
  validateWorkPacketMarkdown,
  validateWorkPacketMetadata,
  WORK_PACKET_ID_PATTERN,
  WORK_PACKET_STATUSES,
} from "./index";

const validMetadata = {
  id: "WP-0034",
  title: "Work Packet Model and Validation Runtime Baseline",
  status: "ready",
  version: "0.1.0",
  owner: "Project Steward",
  recommendedCommit: "feat(work-packet): add core validation model",
} as const;

const validNumberedMarkdown = `# WP-0034: Work Packet Model and Validation Runtime Baseline

## 1. Purpose

Create the first runtime package.

## 2. Scope

Add typed work-packet validation.

## 3. Non-Goals

Do not add web UI.

## 4. Acceptance Criteria

Validation passes.

## 5. Verification Commands

Run Bun tests.

## 6. Recommended Atomic Commit

feat(work-packet): add core validation model
`;

const validUnnumberedMarkdown = `# WP-0036: Work Packet Core Hardening

## Purpose

Harden the work-packet core package.

## Scope

Add validation edge-case coverage.

## Non-Goals

Do not add frontmatter parsing.

## Acceptance Criteria

Validation passes.

## Verification Commands

Run Bun tests.

## Recommended Atomic Commit

test(work-packet): harden core validation coverage
`;

describe("work packet statuses", () => {
  test("contains expected baseline statuses", () => {
    expect(WORK_PACKET_STATUSES).toEqual([
      "draft",
      "ready",
      "active",
      "blocked",
      "completed",
      "superseded",
      "deprecated",
    ]);
  });

  test("identifies allowed statuses", () => {
    expect(isWorkPacketStatus("ready")).toBe(true);
    expect(isWorkPacketStatus("invalid")).toBe(false);
    expect(isWorkPacketStatus(undefined)).toBe(false);
  });
});

describe("work packet validation constants", () => {
  test("exports the work packet id pattern", () => {
    expect(WORK_PACKET_ID_PATTERN.test("WP-0001")).toBe(true);
    expect(WORK_PACKET_ID_PATTERN.test("wp-0001")).toBe(false);
    expect(WORK_PACKET_ID_PATTERN.test("WP-001")).toBe(false);
  });

  test("exports required Markdown section definitions", () => {
    const labels = REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS.map(
      (section) => section.label,
    );

    expect(labels).toContain("Purpose");
    expect(labels).toContain("Scope");
    expect(labels).toContain("Non-Goals");
    expect(labels).toContain("Acceptance Criteria");
    expect(labels).toContain("Verification Commands");
    expect(labels).toContain("Recommended Atomic Commit");
  });
});

describe("validateWorkPacketMetadata", () => {
  test("valid metadata passes", () => {
    const result = validateWorkPacketMetadata(validMetadata);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("missing id fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      id: "",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-work-packet-id")).toBe(true);
  });

  test("whitespace-only id fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      id: "   ",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-work-packet-id")).toBe(true);
  });

  test("invalid id format fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      id: "0034",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "invalid-work-packet-id")).toBe(true);
  });

  test("lowercase id format fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      id: "wp-0034",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "invalid-work-packet-id")).toBe(true);
  });

  test("invalid status fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      status: "review" as never,
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "invalid-status")).toBe(true);
  });

  test("missing recommended commit fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      recommendedCommit: "",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-recommended-commit")).toBe(true);
  });

  test("whitespace-only recommended commit fails", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      recommendedCommit: "   ",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-recommended-commit")).toBe(true);
  });

  test("mismatched workPacketId warns but does not fail", () => {
    const result = validateWorkPacketMetadata({
      ...validMetadata,
      workPacketId: "WP-9999",
    });

    expect(result.valid).toBe(true);
    expect(result.warnings.some((warning) => warning.code === "work-packet-id-mismatch")).toBe(true);
  });
});

describe("validateWorkPacketMarkdown", () => {
  test("numbered Markdown with required sections passes", () => {
    const result = validateWorkPacketMarkdown(validNumberedMarkdown);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("unnumbered Markdown with required sections passes", () => {
    const result = validateWorkPacketMarkdown(validUnnumberedMarkdown);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("Markdown missing required section fails", () => {
    const result = validateWorkPacketMarkdown(`# WP-0034

## 1. Purpose

Create the first runtime package.
`);

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "missing-scope-section")).toBe(true);
    expect(result.errors.some((error) => error.code === "missing-acceptance-criteria-section")).toBe(true);
  });

  test("empty Markdown fails", () => {
    const result = validateWorkPacketMarkdown("");

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "empty-markdown")).toBe(true);
  });

  test("whitespace-only Markdown fails", () => {
    const result = validateWorkPacketMarkdown("   \n\t ");

    expect(result.valid).toBe(false);
    expect(result.errors.some((error) => error.code === "empty-markdown")).toBe(true);
  });
});