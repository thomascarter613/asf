import type {
  WorkPacketMetadata,
  WorkPacketValidationIssue,
} from "./work-packet";

export interface WorkPacketFrontmatterParseResult {
  metadata: Partial<WorkPacketMetadata>;
  body: string;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}

const FRONTMATTER_DELIMITER = "---";

const SUPPORTED_FRONTMATTER_KEYS = new Set([
  "id",
  "title",
  "status",
  "version",
  "created",
  "updated",
  "owner",
  "document_type",
  "work_packet_id",
  "milestone",
  "recommended_commit",
]);

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

function splitLines(value: string): string[] {
  return value.split(/\r?\n/);
}

function stripWrappingQuotes(value: string): string {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function isUnsupportedComplexValue(value: string): boolean {
  const trimmed = value.trim();

  return (
    trimmed.startsWith("[") ||
    trimmed.startsWith("{") ||
    trimmed === "|" ||
    trimmed === ">"
  );
}

function setMetadataValue(
  metadata: Partial<WorkPacketMetadata>,
  key: string,
  value: string,
): void {
  switch (key) {
    case "id":
      metadata.id = value;
      break;
    case "work_packet_id":
      metadata.workPacketId = value;

      if (metadata.id === undefined || metadata.id.trim().length === 0) {
        metadata.id = value;
      }

      break;
    case "title":
      metadata.title = value;
      break;
    case "status":
      metadata.status = value as WorkPacketMetadata["status"];
      break;
    case "version":
      metadata.version = value;
      break;
    case "created":
      metadata.created = value;
      break;
    case "updated":
      metadata.updated = value;
      break;
    case "owner":
      metadata.owner = value;
      break;
    case "document_type":
      metadata.documentType = value;
      break;
    case "milestone":
      metadata.milestone = value;
      break;
    case "recommended_commit":
      metadata.recommendedCommit = value;
      break;
  }
}

export function hasWorkPacketFrontmatter(markdown: string): boolean {
  const lines = splitLines(markdown);

  return lines[0]?.trim() === FRONTMATTER_DELIMITER;
}

export function parseWorkPacketFrontmatter(
  markdown: string,
): WorkPacketFrontmatterParseResult {
  const metadata: Partial<WorkPacketMetadata> = {};
  const errors: WorkPacketValidationIssue[] = [];
  const warnings: WorkPacketValidationIssue[] = [];

  if (!hasWorkPacketFrontmatter(markdown)) {
    errors.push(
      createIssue(
        "missing-frontmatter",
        "Work packet Markdown must begin with frontmatter.",
        "frontmatter",
      ),
    );

    return {
      metadata,
      body: markdown,
      errors,
      warnings,
    };
  }

  const lines = splitLines(markdown);
  const closingDelimiterIndex = lines.findIndex(
    (line, index) => index > 0 && line.trim() === FRONTMATTER_DELIMITER,
  );

  if (closingDelimiterIndex === -1) {
    errors.push(
      createIssue(
        "unclosed-frontmatter",
        "Work packet frontmatter must include a closing delimiter.",
        "frontmatter",
      ),
    );

    return {
      metadata,
      body: "",
      errors,
      warnings,
    };
  }

  const frontmatterLines = lines.slice(1, closingDelimiterIndex);
  const body = lines.slice(closingDelimiterIndex + 1).join("\n").replace(/^\n/, "");

  frontmatterLines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.length === 0 || trimmed.startsWith("#")) {
      return;
    }

    if (trimmed.startsWith("- ")) {
      warnings.push(
        createIssue(
          "unsupported-frontmatter-value",
          "Array frontmatter values are not supported by the dependency-free parser.",
          `frontmatter.line.${index + 2}`,
          "warning",
        ),
      );

      return;
    }

    const separatorIndex = trimmed.indexOf(":");

    if (separatorIndex === -1) {
      warnings.push(
        createIssue(
          "unsupported-frontmatter-line",
          "Frontmatter line is not a supported key/value pair.",
          `frontmatter.line.${index + 2}`,
          "warning",
        ),
      );

      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();

    if (!SUPPORTED_FRONTMATTER_KEYS.has(key)) {
      warnings.push(
        createIssue(
          "unknown-frontmatter-key",
          `Unknown frontmatter key ignored: ${key}.`,
          `frontmatter.${key}`,
          "warning",
        ),
      );

      return;
    }

    if (isUnsupportedComplexValue(rawValue)) {
      warnings.push(
        createIssue(
          "unsupported-frontmatter-value",
          `Unsupported frontmatter value ignored for key: ${key}.`,
          `frontmatter.${key}`,
          "warning",
        ),
      );

      return;
    }

    setMetadataValue(metadata, key, stripWrappingQuotes(rawValue));
  });

  return {
    metadata,
    body,
    errors,
    warnings,
  };
}
