import { readFile } from "node:fs/promises";
import type {
  WorkPacketMetadata,
  WorkPacketValidationIssue,
} from "./work-packet";
import {
  type WorkPacketDocumentValidationResult,
  validateWorkPacketDocument,
} from "./work-packet-document";

export interface WorkPacketFileLoadResult {
  path: string;
  content: string;
}

export interface WorkPacketFileValidationResult
  extends WorkPacketDocumentValidationResult {
  path: string;
}

function createFileReadError(path: string, cause: unknown): WorkPacketValidationIssue {
  const causeMessage = cause instanceof Error ? cause.message : String(cause);

  return {
    code: "file-read-error",
    message: `Unable to read work packet file: ${causeMessage}`,
    path,
    severity: "error",
  };
}

export async function loadWorkPacketFile(
  path: string,
): Promise<WorkPacketFileLoadResult> {
  const content = await readFile(path, "utf8");

  return {
    path,
    content,
  };
}

export async function validateWorkPacketFile(
  path: string,
): Promise<WorkPacketFileValidationResult> {
  try {
    const file = await loadWorkPacketFile(path);
    const validation = validateWorkPacketDocument(file.content);

    return {
      path: file.path,
      ...validation,
    };
  } catch (error) {
    return {
      valid: false,
      path,
      metadata: {} satisfies Partial<WorkPacketMetadata>,
      body: "",
      errors: [createFileReadError(path, error)],
      warnings: [],
    };
  }
}
