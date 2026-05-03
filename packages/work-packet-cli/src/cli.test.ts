import { mkdir, mkdtemp, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, expect, test } from "bun:test";
import { parseValidateArgs, runWorkPacketCli } from "./cli";
import { WORK_PACKET_CLI_EXIT_CODES } from "./exit-codes";
import { WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION } from "./format";
import { resolveSafeWorkPacketPath } from "./path-policy";

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

interface ParsedJsonValidationResult {
  schemaVersion: string;
  command: string;
  result: string;
  valid: boolean;
  path: string;
  metadata: {
    id?: string;
    title?: string;
  };
  summary: {
    errorCount: number;
    warningCount: number;
  };
  errors: Array<{
    code: string;
    message: string;
    path: string;
    severity: string;
  }>;
  warnings: Array<{
    code: string;
    message: string;
    path: string;
    severity: string;
  }>;
}

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

function parseJsonValidationResult(stdout: string): ParsedJsonValidationResult {
  return JSON.parse(stdout) as ParsedJsonValidationResult;
}

describe("resolveSafeWorkPacketPath", () => {
  test("allows relative paths inside the configured working directory", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "docs/WP-0001.md", validDocument);

      const result = await resolveSafeWorkPacketPath("docs/WP-0001.md", {
        cwd: root,
      });

      expect(result.ok).toBe(true);
      expect(result.displayPath).toBe("docs/WP-0001.md");
      expect(result.resolvedPath).toBe(path);
    });
  });

  test("allows absolute paths inside the configured working directory", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "docs/WP-0001.md", validDocument);

      const result = await resolveSafeWorkPacketPath(path, { cwd: root });

      expect(result.ok).toBe(true);
      expect(result.displayPath).toBe(path);
      expect(result.resolvedPath).toBe(path);
    });
  });

  test("rejects relative paths that resolve outside the configured working directory", async () => {
    await withTempWorkspace(async (root) => {
      const inside = join(root, "inside");
      await mkdir(inside, { recursive: true });

      const result = await resolveSafeWorkPacketPath("../outside.md", {
        cwd: inside,
      });

      expect(result.ok).toBe(false);
      expect(result.error).toContain("inside the current working directory");
    });
  });

  test("rejects absolute paths outside the configured working directory", async () => {
    const parent = await createTempWorkspace();

    try {
      const root = join(parent, "repo");
      await mkdir(root, { recursive: true });
      const outsidePath = await writeTempFile(
        parent,
        "outside/WP-0001.md",
        validDocument,
      );

      const result = await resolveSafeWorkPacketPath(outsidePath, {
        cwd: root,
      });

      expect(result.ok).toBe(false);
      expect(result.error).toContain("inside the current working directory");
    } finally {
      await rm(parent, { force: true, recursive: true });
    }
  });

  test("rejects NUL-byte paths", async () => {
    await withTempWorkspace(async (root) => {
      const result = await resolveSafeWorkPacketPath("docs/WP-0001.md\0", {
        cwd: root,
      });

      expect(result.ok).toBe(false);
      expect(result.error).toContain("NUL bytes");
    });
  });

  test("rejects symlinks that resolve outside the configured working directory", async () => {
    const parent = await createTempWorkspace();

    try {
      const root = join(parent, "repo");
      const outside = join(parent, "outside");
      await mkdir(root, { recursive: true });
      await mkdir(outside, { recursive: true });

      const outsidePath = await writeTempFile(
        outside,
        "WP-0001.md",
        validDocument,
      );
      const symlinkPath = join(root, "linked-outside.md");

      await symlink(outsidePath, symlinkPath);

      const result = await resolveSafeWorkPacketPath("linked-outside.md", {
        cwd: root,
      });

      expect(result.ok).toBe(false);
      expect(result.error).toContain("Symlink escapes are not allowed");
    } finally {
      await rm(parent, { force: true, recursive: true });
    }
  });
});

describe("parseValidateArgs", () => {
  test("defaults to text format", () => {
    const result = parseValidateArgs(["docs/work-packets/WP-0001.md"]);

    expect(result.error).toBeUndefined();
    expect(result.path).toBe("docs/work-packets/WP-0001.md");
    expect(result.format).toBe("text");
  });

  test("parses --format json after the path", () => {
    const result = parseValidateArgs([
      "docs/work-packets/WP-0001.md",
      "--format",
      "json",
    ]);

    expect(result.error).toBeUndefined();
    expect(result.path).toBe("docs/work-packets/WP-0001.md");
    expect(result.format).toBe("json");
  });

  test("parses --format json before the path", () => {
    const result = parseValidateArgs([
      "--format",
      "json",
      "docs/work-packets/WP-0001.md",
    ]);

    expect(result.error).toBeUndefined();
    expect(result.path).toBe("docs/work-packets/WP-0001.md");
    expect(result.format).toBe("json");
  });

  test("parses --format=json", () => {
    const result = parseValidateArgs([
      "docs/work-packets/WP-0001.md",
      "--format=json",
    ]);

    expect(result.error).toBeUndefined();
    expect(result.path).toBe("docs/work-packets/WP-0001.md");
    expect(result.format).toBe("json");
  });

  test("rejects unsupported format values", () => {
    const result = parseValidateArgs([
      "docs/work-packets/WP-0001.md",
      "--format",
      "xml",
    ]);

    expect(result.error).toContain("Unsupported output format");
  });

  test("rejects missing format values", () => {
    const result = parseValidateArgs([
      "docs/work-packets/WP-0001.md",
      "--format",
    ]);

    expect(result.error).toContain("Missing required value for --format.");
  });

  test("rejects unknown options", () => {
    const result = parseValidateArgs([
      "docs/work-packets/WP-0001.md",
      "--unknown",
    ]);

    expect(result.error).toContain("Unknown option");
  });
});

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
    expect(result.stdout).toContain("--format json");
    expect(result.stdout).toContain("current working directory");
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

  test("validate with unsupported format exits usage error", async () => {
    const result = await runWorkPacketCli([
      "validate",
      "one.md",
      "--format",
      "xml",
    ]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR);
    expect(result.stderr).toContain("Unsupported output format");
  });

  test("validate with missing format value exits usage error", async () => {
    const result = await runWorkPacketCli(["validate", "one.md", "--format"]);

    expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR);
    expect(result.stderr).toContain("Missing required value for --format.");
  });

  test("validate rejects paths outside the configured working directory", async () => {
    await withTempWorkspace(async (root) => {
      const inside = join(root, "inside");
      await mkdir(inside, { recursive: true });

      const result = await runWorkPacketCli(["validate", "../outside.md"], {
        cwd: inside,
      });

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR);
      expect(result.stderr).toContain("inside the current working directory");
    });
  });

  test("valid file exits success and prints PASS by default", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "valid.md", validDocument);

      const result = await runWorkPacketCli(["validate", path], { cwd: root });

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(result.stdout).toContain("PASS");
      expect(result.stdout).toContain("Work Packet ID: WP-0046");
      expect(result.stdout).toContain(
        "Title: WP-0046: Work Packet CLI Runtime Baseline",
      );
    });
  });

  test("valid file exits success and prints PASS with explicit text format", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "valid.md", validDocument);

      const result = await runWorkPacketCli(
        ["validate", path, "--format", "text"],
        { cwd: root },
      );

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(result.stdout).toContain("PASS");
      expect(result.stdout).toContain("Path:");
    });
  });

  test("valid file exits success and prints JSON with explicit json format", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "valid.md", validDocument);

      const result = await runWorkPacketCli(
        ["validate", path, "--format", "json"],
        { cwd: root },
      );
      const json = parseJsonValidationResult(result.stdout);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(json.schemaVersion).toBe(
        WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION,
      );
      expect(json.command).toBe("validate");
      expect(json.result).toBe("pass");
      expect(json.valid).toBe(true);
      expect(json.path).toBe(path);
      expect(json.metadata.id).toBe("WP-0046");
      expect(json.metadata.title).toBe(
        "WP-0046: Work Packet CLI Runtime Baseline",
      );
      expect(json.summary.errorCount).toBe(0);
      expect(json.summary.warningCount).toBe(0);
      expect(json.errors).toHaveLength(0);
      expect(json.warnings).toHaveLength(0);
    });
  });

  test("valid file exits success and prints JSON with equals format syntax", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "valid.md", validDocument);

      const result = await runWorkPacketCli(["validate", path, "--format=json"], {
        cwd: root,
      });
      const json = parseJsonValidationResult(result.stdout);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(json.result).toBe("pass");
      expect(json.valid).toBe(true);
    });
  });

  test("invalid file exits validation failure and prints FAIL", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "invalid.md", invalidDocument);

      const result = await runWorkPacketCli(["validate", path], { cwd: root });

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED);
      expect(result.stdout).toContain("FAIL");
      expect(result.stdout).toContain("Errors:");
      expect(result.stdout).toContain("missing-frontmatter");
    });
  });

  test("invalid file exits validation failure and prints JSON", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "invalid.md", invalidDocument);

      const result = await runWorkPacketCli(
        ["validate", path, "--format", "json"],
        { cwd: root },
      );
      const json = parseJsonValidationResult(result.stdout);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED);
      expect(json.result).toBe("fail");
      expect(json.valid).toBe(false);
      expect(json.path).toBe(path);
      expect(json.summary.errorCount).toBeGreaterThan(0);
      expect(json.errors.some((issue) => issue.code === "missing-frontmatter"))
        .toBe(true);
    });
  });

  test("missing file exits validation failure and reports file-read-error", async () => {
    await withTempWorkspace(async (root) => {
      const path = join(root, "missing.md");

      const result = await runWorkPacketCli(["validate", path], { cwd: root });

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED);
      expect(result.stdout).toContain("FAIL");
      expect(result.stdout).toContain("file-read-error");
    });
  });

  test("missing file exits validation failure and reports file-read-error in JSON", async () => {
    await withTempWorkspace(async (root) => {
      const path = join(root, "missing.md");

      const result = await runWorkPacketCli(
        ["validate", path, "--format", "json"],
        { cwd: root },
      );
      const json = parseJsonValidationResult(result.stdout);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED);
      expect(json.result).toBe("fail");
      expect(json.summary.errorCount).toBe(1);
      expect(json.errors[0]?.code).toBe("file-read-error");
    });
  });

  test("warnings are included when present", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "warning.md", warningDocument);

      const result = await runWorkPacketCli(["validate", path], { cwd: root });

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(result.stdout).toContain("PASS");
      expect(result.stdout).toContain("Warnings:");
      expect(result.stdout).toContain("unknown-frontmatter-key");
    });
  });

  test("warnings are included in JSON when present", async () => {
    await withTempWorkspace(async (root) => {
      const path = await writeTempFile(root, "warning.md", warningDocument);

      const result = await runWorkPacketCli(
        ["validate", path, "--format", "json"],
        { cwd: root },
      );
      const json = parseJsonValidationResult(result.stdout);

      expect(result.exitCode).toBe(WORK_PACKET_CLI_EXIT_CODES.SUCCESS);
      expect(json.result).toBe("pass");
      expect(json.summary.errorCount).toBe(0);
      expect(json.summary.warningCount).toBe(1);
      expect(json.warnings[0]?.code).toBe("unknown-frontmatter-key");
    });
  });
});
