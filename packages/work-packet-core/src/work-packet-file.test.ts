import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, expect, test } from "bun:test";
import {
  loadWorkPacketFile,
  validateWorkPacketFile,
} from "./index";

const validDocument = `---
title: "WP-0043: Work Packet File Loading Runtime Baseline"
description: "Adds work-packet file loading and validation."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
document_type: "work-packet"
work_packet_id: "WP-0043"
milestone: "Runtime Implementation"
recommended_commit: "feat(work-packet): add file validation"
---

# WP-0043: Work Packet File Loading Runtime Baseline

## 1. Purpose

Validate a work-packet Markdown file.

## 2. Scope

Read caller-provided files and validate document content.

## 3. Non-Goals

Do not add CLI behavior.

## 4. Acceptance Criteria

File validation passes.

## 5. Verification Commands

Run Bun tests.

## 6. Recommended Atomic Commit

feat(work-packet): add file validation
`;

async function createTempWorkspace(): Promise<string> {
  return mkdtemp(join(tmpdir(), "asf-work-packet-core-"));
}

async function writeTempFile(
  root: string,
  relativePath: string,
  content: string,
): Promise<string> {
  const path = join(root, relativePath);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, "utf8");
  return path;
}

async function withTempWorkspace<T>(
  callback: (root: string) => Promise<T>,
): Promise<T> {
  const root = await createTempWorkspace();

  try {
    return await callback(root);
  } finally {
    await rm(root, { force: true, recursive: true });
  }
}

describe("loadWorkPacketFile", () => {
  test("returns path and content for a readable file", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "WP-0043.md", validDocument);

      const result = await loadWorkPacketFile(path);

      expect(result.path).toBe(path);
      expect(result.content).toContain(
        "# WP-0043: Work Packet File Loading Runtime Baseline",
      );
    });
  });
});

describe("validateWorkPacketFile", () => {
  test("valid work-packet file passes", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "WP-0043.md", validDocument);

      const result = await validateWorkPacketFile(path);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  test("returned result includes file path", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "WP-0043.md", validDocument);

      const result = await validateWorkPacketFile(path);

      expect(result.path).toBe(path);
    });
  });

  test("returned metadata includes id", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "WP-0043.md", validDocument);

      const result = await validateWorkPacketFile(path);

      expect(result.metadata.id).toBe("WP-0043");
      expect(result.metadata.workPacketId).toBe("WP-0043");
    });
  });

  test("returned body excludes frontmatter", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "WP-0043.md", validDocument);

      const result = await validateWorkPacketFile(path);

      expect(result.body).toContain(
        "# WP-0043: Work Packet File Loading Runtime Baseline",
      );
      expect(result.body).not.toContain("recommended_commit");
    });
  });

  test("missing file returns file-read-error", async () => {
    await withTempWorkspace(async (root) => {
      const path = join(root, "missing.md");

      const result = await validateWorkPacketFile(path);

      expect(result.valid).toBe(false);
      expect(result.path).toBe(path);
      expect(result.errors.some((error) => error.code === "file-read-error")).toBe(
        true,
      );
    });
  });

  test("invalid readable file returns document validation errors", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "invalid.md", "# No frontmatter");

      const result = await validateWorkPacketFile(path);

      expect(result.valid).toBe(false);
      expect(result.errors.some((error) => error.code === "missing-frontmatter")).toBe(
        true,
      );
    });
  });

  test("file validation composes document validation", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(
        root,
        "missing-section.md",
        `---
title: "WP-0043"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "WP-0043"
recommended_commit: "feat(work-packet): add file validation"
---

# WP-0043

## 1. Purpose

Validate a file.
`,
      );

      const result = await validateWorkPacketFile(path);

      expect(result.valid).toBe(false);
      expect(result.errors.some((error) => error.code === "missing-scope-section")).toBe(
        true,
      );
    });
  });
});
