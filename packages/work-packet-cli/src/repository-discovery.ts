import { readdir, realpath } from "node:fs/promises";
import { join } from "node:path";
import type { WorkPacketValidationIssue } from "@asf/work-packet-core";
import { isPathInsideRoot } from "./path-policy";

export const WORK_PACKET_DISCOVERY_ROOT = "docs/work-packets";

export const WORK_PACKET_FILENAME_PATTERN =
  /^(WP-\d{4})-[a-z0-9][a-z0-9-]*\.md$/;

export const WORK_PACKET_DISCOVERY_EXCLUDED_FILENAMES = new Set([
  "README.md",
  "WORK-PACKET-TEMPLATE.md",
]);

export interface WorkPacketRepositoryDiscoveryOptions {
  cwd?: string;
}

export interface DiscoveredWorkPacketFile {
  id: string;
  filename: string;
  path: string;
  resolvedPath: string;
}

export interface WorkPacketRepositoryDiscoveryResult {
  root: string;
  discoveryRoot: string;
  resolvedDiscoveryRoot: string;
  discoveryRootFound: boolean;
  files: DiscoveredWorkPacketFile[];
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}

function createIssue(
  code: string,
  message: string,
  path: string,
  severity: WorkPacketValidationIssue["severity"] = "error",
): WorkPacketValidationIssue {
  return {
    code,
    message,
    path,
    severity,
  };
}

function compareDiscoveredWorkPacketFiles(
  left: DiscoveredWorkPacketFile,
  right: DiscoveredWorkPacketFile,
): number {
  const leftNumber = Number(left.id.slice("WP-".length));
  const rightNumber = Number(right.id.slice("WP-".length));

  if (leftNumber !== rightNumber) {
    return leftNumber - rightNumber;
  }

  return left.filename.localeCompare(right.filename);
}

async function realpathIfExists(path: string): Promise<string | undefined> {
  try {
    return await realpath(path);
  } catch {
    return undefined;
  }
}

function shouldIgnoreNonCandidate(filename: string): boolean {
  if (WORK_PACKET_DISCOVERY_EXCLUDED_FILENAMES.has(filename)) {
    return true;
  }

  if (filename.startsWith(".")) {
    return true;
  }

  if (!filename.endsWith(".md")) {
    return true;
  }

  return !filename.startsWith("WP-") && !filename.startsWith("wp-");
}

export async function discoverRepositoryWorkPackets(
  options: WorkPacketRepositoryDiscoveryOptions = {},
): Promise<WorkPacketRepositoryDiscoveryResult> {
  const root = await realpath(options.cwd ?? process.cwd());
  const resolvedDiscoveryRoot = join(root, WORK_PACKET_DISCOVERY_ROOT);
  const errors: WorkPacketValidationIssue[] = [];
  const warnings: WorkPacketValidationIssue[] = [];
  const files: DiscoveredWorkPacketFile[] = [];

  if (!isPathInsideRoot(root, resolvedDiscoveryRoot)) {
    errors.push(
      createIssue(
        "work-packet-discovery-root-outside-repository",
        "Work-packet discovery root must resolve inside the configured working directory.",
        WORK_PACKET_DISCOVERY_ROOT,
      ),
    );

    return {
      root,
      discoveryRoot: WORK_PACKET_DISCOVERY_ROOT,
      resolvedDiscoveryRoot,
      discoveryRootFound: false,
      files,
      errors,
      warnings,
    };
  }

  const discoveryRootRealpath = await realpathIfExists(resolvedDiscoveryRoot);

  if (discoveryRootRealpath === undefined) {
    errors.push(
      createIssue(
        "missing-work-packet-discovery-root",
        "Work-packet discovery root was not found: docs/work-packets/.",
        WORK_PACKET_DISCOVERY_ROOT,
      ),
    );

    return {
      root,
      discoveryRoot: WORK_PACKET_DISCOVERY_ROOT,
      resolvedDiscoveryRoot,
      discoveryRootFound: false,
      files,
      errors,
      warnings,
    };
  }

  if (!isPathInsideRoot(root, discoveryRootRealpath)) {
    errors.push(
      createIssue(
        "work-packet-discovery-root-symlink-escape",
        "Work-packet discovery root must not resolve outside the configured working directory.",
        WORK_PACKET_DISCOVERY_ROOT,
      ),
    );

    return {
      root,
      discoveryRoot: WORK_PACKET_DISCOVERY_ROOT,
      resolvedDiscoveryRoot: discoveryRootRealpath,
      discoveryRootFound: true,
      files,
      errors,
      warnings,
    };
  }

  const entries = await readdir(discoveryRootRealpath, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const filename = entry.name;
    const path = `${WORK_PACKET_DISCOVERY_ROOT}/${filename}`;

    if (shouldIgnoreNonCandidate(filename)) {
      continue;
    }

    const filenameMatch = filename.match(WORK_PACKET_FILENAME_PATTERN);

    if (filenameMatch === null) {
      errors.push(
        createIssue(
          "malformed-work-packet-filename",
          "Work-packet filenames must match WP-0000-descriptive-slug.md.",
          path,
        ),
      );
      continue;
    }

    if (entry.isDirectory()) {
      errors.push(
        createIssue(
          "work-packet-candidate-is-directory",
          "Work-packet candidates must be Markdown files, not directories.",
          path,
        ),
      );
      continue;
    }

    const unresolvedPath = join(discoveryRootRealpath, filename);
    let resolvedPath = unresolvedPath;

    if (entry.isSymbolicLink()) {
      const symlinkRealpath = await realpathIfExists(unresolvedPath);

      if (symlinkRealpath === undefined) {
        errors.push(
          createIssue(
            "broken-work-packet-symlink",
            "Work-packet candidate symlink could not be resolved.",
            path,
          ),
        );
        continue;
      }

      if (!isPathInsideRoot(root, symlinkRealpath)) {
        errors.push(
          createIssue(
            "work-packet-symlink-escape",
            "Work-packet candidate symlink must not resolve outside the configured working directory.",
            path,
          ),
        );
        continue;
      }

      resolvedPath = symlinkRealpath;
    }

    files.push({
      id: filenameMatch[1],
      filename,
      path,
      resolvedPath,
    });
  }

  files.sort(compareDiscoveredWorkPacketFiles);

  return {
    root,
    discoveryRoot: WORK_PACKET_DISCOVERY_ROOT,
    resolvedDiscoveryRoot: discoveryRootRealpath,
    discoveryRootFound: true,
    files,
    errors,
    warnings,
  };
}