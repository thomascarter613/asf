import type {
  WorkPacketFileValidationResult,
  WorkPacketValidationIssue,
} from "@asf/work-packet-core";

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

  return [
    `${heading}:`,
    ...issues.map((issue) => formatIssue(issue)),
  ];
}

export function formatWorkPacketValidationResult(
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
