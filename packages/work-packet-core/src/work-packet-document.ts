import type {
  WorkPacketMetadata,
  WorkPacketValidationIssue,
} from "./work-packet";
import { parseWorkPacketFrontmatter } from "./work-packet-frontmatter";
import {
  validateWorkPacketMarkdown,
  validateWorkPacketMetadata,
} from "./work-packet-validation";

export interface WorkPacketDocumentValidationResult {
  valid: boolean;
  metadata: Partial<WorkPacketMetadata>;
  body: string;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}

function combineIssues(
  ...issueGroups: WorkPacketValidationIssue[][]
): WorkPacketValidationIssue[] {
  return issueGroups.flat();
}

export function validateWorkPacketDocument(
  markdown: string,
): WorkPacketDocumentValidationResult {
  const parsed = parseWorkPacketFrontmatter(markdown);
  const metadataValidation = validateWorkPacketMetadata(parsed.metadata);

  const bodyForMarkdownValidation =
    parsed.body.trim().length > 0 ? parsed.body : markdown;

  const markdownValidation = validateWorkPacketMarkdown(
    bodyForMarkdownValidation,
  );

  const errors = combineIssues(
    parsed.errors,
    metadataValidation.errors,
    markdownValidation.errors,
  );

  const warnings = combineIssues(
    parsed.warnings,
    metadataValidation.warnings,
    markdownValidation.warnings,
  );

  return {
    valid: errors.length === 0,
    metadata: parsed.metadata,
    body: parsed.body,
    errors,
    warnings,
  };
}
