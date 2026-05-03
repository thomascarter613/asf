import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, expect, test } from "bun:test";
import { runWorkPacketCli } from "./cli";
import { WORK_PACKET_CLI_EXIT_CODES } from "./exit-codes";

const validDocument = `---
title: "WP-0046: Work Packet CLI Runtime Baseline"
description: "Adds work-packet CLI validation."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
document_type: "work-packet"
work_packet_id: "WP-0046"
milestone: "Runtime Implementation"
recommended_commit: "feat(work-packet): add validation cli"
---

# WP-0046: Work Packet CLI Runtime Baseline

## 1. Purpose

Validate a work-packet file through a CLI.

## 2. Scope

Add one-file CLI validation.

## 3. Non-Goals

Do not add repo-wide discovery.

## 4. Acceptance Criteria

CLI validation passes.

## 5. Verification Commands

Run Bun tests.

## 6. Recommended Atomic Commit

feat(work-packet): add validation cli
`;

const invalidDocument = `# Invalid Work Packet

No frontmatter and no required sections.
`;

const warningDocument = `---
title: "WP-0046"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "WP-0046"
recommended_commit: "feat(work-packet): add validation cli"
unknown_key: "warning"
---

# WP-0046

## 1. Purpose

Validate a work-packet file through a CLI.

## 2. Scope

Add one-file CLI validation.

## 3. Non-Goals

Do not add repo-wide discovery.

## 4. Acceptance Criteria

CLI validation passes.

## 5. Verification Commands

Run Bun tests.

## 6. Recommended Atomic Commit

feat(work-packet): add validation cli
`;

async function createTempWorkspace(): Promise<string> {
  return mkdtemp(join(tmpdir(), "asf-work-packet-cli-"));
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

describe("runWorkPacketCli", () => {
  test("--help exits success", async () => {
    const result = await runWorkPacketCli(["--help"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
    expect(result.stdout).toContain("Usage:");
    expect(result.stdout).toContain("validate <path>");
  });

  test("help exits success", async () => {
    const result = await runWorkPacketCli(["help"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
    expect(result.stdout).toContain("Agentic Software Framework Work Packet CLI");
  });

  test("validate --help exits success", async () => {
    const result = await runWorkPacketCli(["validate", "--help"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
    expect(result.stdout).toContain("Validate a work-packet Markdown file.");
  });

  test("unknown command exits usage error", async () => {
    const result = await runWorkPacketCli(["unknown"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR);
    expect(result.stderr).toContain("Unknown command");
  });

  test("validate without path exits usage error", async () => {
    const result = await runWorkPacketCli(["validate"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR);
    expect(result.stderr).toContain("Missing required path argument.");
  });

  test("validate with extra arguments exits usage error", async () => {
    const result = await runWorkPacketCli(["validate", "one.md", "two.md"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR);
    expect(result.stderr).toContain("exactly one path");
  });

  test("valid file exits success and prints PASS", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "valid.md", validDocument);

      const result = await runWorkPacketCli(["validate", path]);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(result.stdout).toContain("PASS");
      expect(result.stdout).toContain("Work Packet ID: WP-0046");
      expect(result.stdout).toContain("Title: WP-0046: Work Packet CLI Runtime Baseline");
    });
  });

  test("invalid file exits validation failure and prints FAIL", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "invalid.md", invalidDocument);

      const result = await runWorkPacketCli(["validate", path]);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED);
      expect(result.stdout).toContain("FAIL");
      expect(result.stdout).toContain("Errors:");
      expect(result.stdout).toContain("missing-frontmatter");
    });
  });

  test("missing file exits validation failure and reports file-read-error", async () => {
    await withTempWorkspace(async (root) => {
      const path = join(root, "missing.md");

      const result = await runWorkPacketCli(["validate", path]);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED);
      expect(result.stdout).toContain("FAIL");
      expect(result.stdout).toContain("file-read-error");
    });
  });

  test("warnings are included when present", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "warning.md", warningDocument);

      const result = await runWorkPacketCli(["validate", path]);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(result.stdout).toContain("PASS");
      expect(result.stdout).toContain("Warnings:");
      expect(result.stdout).toContain("unknown-frontmatter-key");
    });
  });
});
