import type {
  WorkPacketFileValidationResult,
  WorkPacketMetadata,
  WorkPacketValidationIssue,
} from "@asf/work-packet-core";
import type { WorkPacketRepositoryValidationResult } from "./repository-validation";

export const WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION =
  "asf.work-packet.validation-result.v1" as const;

export const WORK_PACKET_REPOSITORY_VALIDATION_JSON_SCHEMA_VERSION =
  "asf.work-packet.repository-validation-result.v1" as const;

export type WorkPacketCliOutputFormat = "text" | "json";

export interface WorkPacketValidationJsonResult {
  schemaVersion: typeof WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION;
  command: "validate";
  result: "pass" | "fail";
  valid: boolean;
  path: string;
  metadata: Partial<WorkPacketMetadata>;
  summary: {
    errorCount: number;
    warningCount: number;
  };
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}

export interface WorkPacketRepositoryValidationJsonResult {
  schemaVersion: typeof WORK_PACKET_REPOSITORY_VALIDATION_JSON_SCHEMA_VERSION;
  command: "validate-repo";
  result: "pass" | "fail";
  valid: boolean;
  root: string;
  discoveryRoot: string;
  resolvedDiscoveryRoot: string;
  summary: WorkPacketRepositoryValidationResult["summary"];
  files: Array<{
    id: string;
    path: string;
    result: "pass" | "fail";
    valid: boolean;
    metadata: Partial<WorkPacketMetadata>;
    summary: {
      errorCount: number;
      warningCount: number;
    };
    errors: WorkPacketValidationIssue[];
    warnings: WorkPacketValidationIssue[];
  }>;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}

export interface WorkPacketValidationFormatOptions {
  format?: WorkPacketCliOutputFormat;
}

function formatIssue(issue: WorkPacketValidationIssue): string {
  return `- [${issue.code}] ${issue.path}: ${issue.message}`;
}

function formatIssueSection(
  heading: string,
  issues: WorkPacketValidationIssue[],
): string[] {
  if (issues.length === 0) {
    return [];
  }

  return [`${heading}:`, ...issues.map((issue) => formatIssue(issue))];
}

function collectRepositoryErrors(
  result: WorkPacketRepositoryValidationResult,
): WorkPacketValidationIssue[] {
  return [
    ...result.errors,
    ...result.files.flatMap((file) => file.errors),
  ];
}

function collectRepositoryWarnings(
  result: WorkPacketRepositoryValidationResult,
): WorkPacketValidationIssue[] {
  return [
    ...result.warnings,
    ...result.files.flatMap((file) => file.warnings),
  ];
}

export function formatWorkPacketValidationTextResult(
  result: WorkPacketFileValidationResult,
): string {
  const lines: string[] = [];

  if (result.valid) {
    lines.push("PASS");
  } else {
    lines.push("FAIL");
  }

  lines.push(`Path: ${result.path}`);

  if (result.metadata.id !== undefined) {
    lines.push(`Work Packet ID: ${result.metadata.id}`);
  }

  if (result.metadata.title !== undefined) {
    lines.push(`Title: ${result.metadata.title}`);
  }

  lines.push(...formatIssueSection("Errors", result.errors));
  lines.push(...formatIssueSection("Warnings", result.warnings));

  return `${lines.join("\n")}\n`;
}

export function toWorkPacketValidationJsonResult(
  result: WorkPacketFileValidationResult,
): WorkPacketValidationJsonResult {
  return {
    schemaVersion: WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION,
    command: "validate",
    result: result.valid ? "pass" : "fail",
    valid: result.valid,
    path: result.path,
    metadata: result.metadata,
    summary: {
      errorCount: result.errors.length,
      warningCount: result.warnings.length,
    },
    errors: result.errors,
    warnings: result.warnings,
  };
}

export function formatWorkPacketValidationJsonResult(
  result: WorkPacketFileValidationResult,
): string {
  return `${JSON.stringify(toWorkPacketValidationJsonResult(result), null, 2)}\n`;
}

export function formatWorkPacketValidationResult(
  result: WorkPacketFileValidationResult,
  options: WorkPacketValidationFormatOptions = {},
): string {
  const format = options.format ?? "text";

  if (format === "json") {
    return formatWorkPacketValidationJsonResult(result);
  }

  return formatWorkPacketValidationTextResult(result);
}

export function formatWorkPacketRepositoryValidationTextResult(
  result: WorkPacketRepositoryValidationResult,
): string {
  const lines: string[] = [];

  lines.push(result.valid ? "PASS" : "FAIL");
  lines.push(`Command: validate-repo`);
  lines.push(`Discovery Root: ${result.discoveryRoot}`);
  lines.push(`Discovered Files: ${result.summary.discoveredFileCount}`);
  lines.push(`Validated Files: ${result.summary.validatedFileCount}`);
  lines.push(`Valid Files: ${result.summary.validFileCount}`);
  lines.push(`Invalid Files: ${result.summary.invalidFileCount}`);
  lines.push(`Errors: ${result.summary.errorCount}`);
  lines.push(`Warnings: ${result.summary.warningCount}`);

  if (result.files.length > 0) {
    lines.push("Files:");

    for (const file of result.files) {
      lines.push(`- ${file.valid ? "PASS" : "FAIL"} ${file.id} ${file.path}`);
    }
  }

  lines.push(
    ...formatIssueSection("Errors", collectRepositoryErrors(result)),
  );
  lines.push(
    ...formatIssueSection("Warnings", collectRepositoryWarnings(result)),
  );

  return `${lines.join("\n")}\n`;
}

export function toWorkPacketRepositoryValidationJsonResult(
  result: WorkPacketRepositoryValidationResult,
): WorkPacketRepositoryValidationJsonResult {
  return {
    schemaVersion: WORK_PACKET_REPOSITORY_VALIDATION_JSON_SCHEMA_VERSION,
    command: "validate-repo",
    result: result.valid ? "pass" : "fail",
    valid: result.valid,
    root: result.root,
    discoveryRoot: result.discoveryRoot,
    resolvedDiscoveryRoot: result.resolvedDiscoveryRoot,
    summary: result.summary,
    files: result.files.map((file) => ({
      id: file.id,
      path: file.path,
      result: file.valid ? "pass" : "fail",
      valid: file.valid,
      metadata: file.metadata,
      summary: {
        errorCount: file.errors.length,
        warningCount: file.warnings.length,
      },
      errors: file.errors,
      warnings: file.warnings,
    })),
    errors: result.errors,
    warnings: result.warnings,
  };
}

export function formatWorkPacketRepositoryValidationJsonResult(
  result: WorkPacketRepositoryValidationResult,
): string {
  return `${JSON.stringify(
    toWorkPacketRepositoryValidationJsonResult(result),
    null,
    2,
  )}\n`;
}

export function formatWorkPacketRepositoryValidationResult(
  result: WorkPacketRepositoryValidationResult,
  options: WorkPacketValidationFormatOptions = {},
): string {
  const format = options.format ?? "text";

  if (format === "json") {
    return formatWorkPacketRepositoryValidationJsonResult(result);
  }

  return formatWorkPacketRepositoryValidationTextResult(result);
}