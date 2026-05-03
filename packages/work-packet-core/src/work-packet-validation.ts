import { isWorkPacketStatus } from "./work-packet-status";
import type {
  WorkPacketMetadata,
  WorkPacketValidationIssue,
  WorkPacketValidationResult,
} from "./work-packet";

export const WORK_PACKET_ID_PATTERN = /^WP-\d{4}$/;

export const REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS = [
  {
    code: "missing-purpose-section",
    label: "Purpose",
    path: "markdown.sections.Purpose",
    pattern: /^##\s+(?:\d+\.\s+)?Purpose\s*$/im,
  },
  {
    code: "missing-scope-section",
    label: "Scope",
    path: "markdown.sections.Scope",
    pattern: /^##\s+(?:\d+\.\s+)?Scope\s*$/im,
  },
  {
    code: "missing-non-goals-section",
    label: "Non-Goals",
    path: "markdown.sections.Non-Goals",
    pattern: /^##\s+(?:\d+\.\s+)?Non-Goals\s*$/im,
  },
  {
    code: "missing-acceptance-criteria-section",
    label: "Acceptance Criteria",
    path: "markdown.sections.Acceptance Criteria",
    pattern: /^##\s+(?:\d+\.\s+)?Acceptance Criteria\s*$/im,
  },
  {
    code: "missing-verification-commands-section",
    label: "Verification Commands",
    path: "markdown.sections.Verification Commands",
    pattern: /^##\s+(?:\d+\.\s+)?Verification Commands\s*$/im,
  },
  {
    code: "missing-recommended-atomic-commit-section",
    label: "Recommended Atomic Commit",
    path: "markdown.sections.Recommended Atomic Commit",
    pattern: /^##\s+(?:\d+\.\s+)?Recommended Atomic Commit\s*$/im,
  },
] as const;

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

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeString(value: string): string {
  return value.trim();
}

function resultFromIssues(
  issues: WorkPacketValidationIssue[],
): WorkPacketValidationResult {
  const errors = issues.filter((issue) => issue.severity === "error");
  const warnings = issues.filter((issue) => issue.severity === "warning");

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

export function validateWorkPacketMetadata(
  metadata: Partial<WorkPacketMetadata>,
): WorkPacketValidationResult {
  const issues: WorkPacketValidationIssue[] = [];

  if (!isNonEmptyString(metadata.id)) {
    issues.push(
      createIssue(
        "missing-work-packet-id",
        "Work packet metadata must include a non-empty id.",
        "metadata.id",
      ),
    );
  } else {
    const id = normalizeString(metadata.id);

    if (!WORK_PACKET_ID_PATTERN.test(id)) {
      issues.push(
        createIssue(
          "invalid-work-packet-id",
          "Work packet id must match WP-0000 format.",
          "metadata.id",
        ),
      );
    }
  }

  if (!isNonEmptyString(metadata.title)) {
    issues.push(
      createIssue(
        "missing-title",
        "Work packet metadata must include a non-empty title.",
        "metadata.title",
      ),
    );
  }

  if (!isNonEmptyString(metadata.status)) {
    issues.push(
      createIssue(
        "missing-status",
        "Work packet metadata must include a non-empty status.",
        "metadata.status",
      ),
    );
  } else if (!isWorkPacketStatus(normalizeString(metadata.status))) {
    issues.push(
      createIssue(
        "invalid-status",
        "Work packet status is not one of the allowed statuses.",
        "metadata.status",
      ),
    );
  }

  if (!isNonEmptyString(metadata.version)) {
    issues.push(
      createIssue(
        "missing-version",
        "Work packet metadata must include a non-empty version.",
        "metadata.version",
      ),
    );
  }

  if (!isNonEmptyString(metadata.owner)) {
    issues.push(
      createIssue(
        "missing-owner",
        "Work packet metadata must include a non-empty owner.",
        "metadata.owner",
      ),
    );
  }

  if (!isNonEmptyString(metadata.recommendedCommit)) {
    issues.push(
      createIssue(
        "missing-recommended-commit",
        "Work packet metadata must include a recommended atomic commit.",
        "metadata.recommendedCommit",
      ),
    );
  }

  if (
    isNonEmptyString(metadata.workPacketId) &&
    isNonEmptyString(metadata.id) &&
    normalizeString(metadata.workPacketId) !== normalizeString(metadata.id)
  ) {
    issues.push(
      createIssue(
        "work-packet-id-mismatch",
        "workPacketId should match id when both are provided.",
        "metadata.workPacketId",
        "warning",
      ),
    );
  }

  return resultFromIssues(issues);
}

export function validateWorkPacketMarkdown(
  markdown: string,
): WorkPacketValidationResult {
  const issues: WorkPacketValidationIssue[] = [];

  if (!isNonEmptyString(markdown)) {
    issues.push(
      createIssue(
        "empty-markdown",
        "Work packet Markdown must be a non-empty string.",
        "markdown",
      ),
    );

    return resultFromIssues(issues);
  }

  for (const section of REQUIRED_WORK_PACKET_MARKDOWN_SECTIONS) {
    if (!section.pattern.test(markdown)) {
      issues.push(
        createIssue(
          section.code,
          `Work packet Markdown must include a ${section.label} section.`,
          section.path,
        ),
      );
    }
  }

  return resultFromIssues(issues);
}