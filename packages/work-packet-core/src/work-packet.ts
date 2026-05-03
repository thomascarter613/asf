import type { WorkPacketStatus } from "./work-packet-status";

export type WorkPacketValidationIssueSeverity = "error" | "warning";

export interface WorkPacketMetadata {
  id: string;
  title: string;
  status: WorkPacketStatus;
  version: string;
  created?: string;
  updated?: string;
  owner: string;
  documentType?: string;
  workPacketId?: string;
  milestone?: string;
  recommendedCommit: string;
}

export interface WorkPacketValidationIssue {
  code: string;
  message: string;
  path: string;
  severity: WorkPacketValidationIssueSeverity;
}

export interface WorkPacketValidationResult {
  valid: boolean;
  errors: WorkPacketValidationIssue[];
  warnings: WorkPacketValidationIssue[];
}
