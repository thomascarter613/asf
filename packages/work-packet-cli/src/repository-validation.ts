import type {
  WorkPacketMetadata,
  WorkPacketValidationIssue,
} from "@asf/work-packet-core";
import { validateWorkPacketFile } from "@asf/work-packet-core";
import {
  discoverRepositoryWorkPackets,
  type WorkPacketRepositoryDiscoveryOptions,
} from "./repository-discovery";

export interface WorkPacketRepositoryFileValidationResult {
  id: string;
  path: string;
  valid: boolean;
  metadata: Partial<WorkPacketMetadata>;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}

export interface WorkPacketRepositoryValidationSummary {
  discoveredFileCount: number;
  validatedFileCount: number;
  validFileCount: number;
  invalidFileCount: number;
  errorCount: number;
  warningCount: number;
}

export interface WorkPacketRepositoryValidationResult {
  valid: boolean;
  root: string;
  discoveryRoot: string;
  resolvedDiscoveryRoot: string;
  discoveryRootFound: boolean;
  files: WorkPacketRepositoryFileValidationResult[];
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
  summary: WorkPacketRepositoryValidationSummary;
}

export type WorkPacketRepositoryValidationOptions =
  WorkPacketRepositoryDiscoveryOptions;

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

function issueCountForFiles(
  files: WorkPacketRepositoryFileValidationResult[],
  severity: WorkPacketValidationIssue["severity"],
): number {
  return files.reduce((count, file) => {
    const issues =
      severity === "error" ? file.errors.length : file.warnings.length;

    return count + issues;
  }, 0);
}

function createDuplicateIdIssues(
  files: WorkPacketRepositoryFileValidationResult[],
): WorkPacketValidationIssue[] {
  const pathsById = new Map<string, string[]>();

  for (const file of files) {
    const id = file.metadata.id ?? file.id;
    const paths = pathsById.get(id) ?? [];
    paths.push(file.path);
    pathsById.set(id, paths);
  }

  return [...pathsById.entries()]
    .filter(([, paths]) => paths.length > 1)
    .map(([id, paths]) =>
      createIssue(
        "duplicate-work-packet-id",
        `Work-packet id ${id} appears in multiple files: ${paths.join(", ")}.`,
        `repository.workPackets.${id}`,
      ),
    );
}

function createFilenameIdMismatchIssue(
  expectedId: string,
  actualId: string,
  path: string,
): WorkPacketValidationIssue {
  return createIssue(
    "work-packet-filename-id-mismatch",
    `Work-packet filename id ${expectedId} does not match frontmatter id ${actualId}.`,
    path,
  );
}

export async function validateRepositoryWorkPackets(
  options: WorkPacketRepositoryValidationOptions = {},
): Promise<WorkPacketRepositoryValidationResult> {
  const discovery = await discoverRepositoryWorkPackets(options);
  const files: WorkPacketRepositoryFileValidationResult[] = [];

  for (const discoveredFile of discovery.files) {
    const validation = await validateWorkPacketFile(discoveredFile.resolvedPath);
    const errors = [...validation.errors];
    const warnings = [...validation.warnings];

    if (
      validation.metadata.id !== undefined &&
      validation.metadata.id !== discoveredFile.id
    ) {
      errors.push(
        createFilenameIdMismatchIssue(
          discoveredFile.id,
          validation.metadata.id,
          discoveredFile.path,
        ),
      );
    }

    files.push({
      id: discoveredFile.id,
      path: discoveredFile.path,
      valid: errors.length === 0,
      metadata: validation.metadata,
      errors,
      warnings,
    });
  }

  const duplicateIdIssues = createDuplicateIdIssues(files);
  const errors = [...discovery.errors, ...duplicateIdIssues];
  const warnings = [...discovery.warnings];

  const invalidFileCount = files.filter((file) => !file.valid).length;
  const validFileCount = files.length - invalidFileCount;
  const errorCount = errors.length + issueCountForFiles(files, "error");
  const warningCount = warnings.length + issueCountForFiles(files, "warning");

  return {
    valid: errorCount === 0,
    root: discovery.root,
    discoveryRoot: discovery.discoveryRoot,
    resolvedDiscoveryRoot: discovery.resolvedDiscoveryRoot,
    discoveryRootFound: discovery.discoveryRootFound,
    files,
    errors,
    warnings,
    summary: {
      discoveredFileCount: discovery.files.length,
      validatedFileCount: files.length,
      validFileCount,
      invalidFileCount,
      errorCount,
      warningCount,
    },
  };
}