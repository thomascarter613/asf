import type {
  WorkPacketFileValidationResult,
  WorkPacketMetadata,
  WorkPacketValidationIssue,
} from "@asf/work-packet-core";

export const WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION =
  "asf.work-packet.validation-result.v1" as const;

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
