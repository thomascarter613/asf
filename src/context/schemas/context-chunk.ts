import { z } from "zod";
import { SourceProvenanceSchema } from "./source-provenance";
import {
  ClassificationSchema,
  IsoDateTimeSchema,
  SemanticVersionSchema,
  Sha256Schema,
  StableIdSchema,
} from "./shared";

export const ContextChunkSchema = z
  .object({
    chunkId: StableIdSchema,
    documentId: StableIdSchema,
    tenantId: StableIdSchema,
    projectId: StableIdSchema,
    documentVersion: SemanticVersionSchema,
    chunkIndex: z.number().int().nonnegative(),
    text: z.string().trim().min(1),
    contentHash: Sha256Schema,
    headingPath: z.array(z.string().trim().min(1)),
    tokenEstimate: z.number().int().nonnegative().optional(),
    lineStart: z.number().int().positive().optional(),
    lineEnd: z.number().int().positive().optional(),
    canonical: z.boolean(),
    superseded: z.boolean(),
    classification: ClassificationSchema,
    source: SourceProvenanceSchema,
    createdAt: IsoDateTimeSchema,
    updatedAt: IsoDateTimeSchema,
  })
  .strict()
  .superRefine((value, context) => {
    if (value.lineStart !== undefined && value.lineEnd !== undefined && value.lineEnd < value.lineStart) {
      context.addIssue({
        code: "custom",
        message: "lineEnd must be greater than or equal to lineStart.",
        path: ["lineEnd"],
      });
    }

    if (value.superseded && value.canonical) {
      context.addIssue({
        code: "custom",
        message: "A superseded chunk must not be canonical.",
        path: ["canonical"],
      });
    }
  });

export type ContextChunk = z.infer<typeof ContextChunkSchema>;
