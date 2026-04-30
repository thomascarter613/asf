import { z } from "zod";
import { CommitShaSchema, IsoDateTimeSchema, NonEmptyStringSchema, StableIdSchema } from "./shared";

export const IndexingStageNameSchema = z.enum([
  "discovered",
  "parsed",
  "validated",
  "stored",
  "chunked",
  "embedded",
  "indexed",
]);

export const IndexingStageStatusSchema = z.enum(["pending", "running", "succeeded", "failed", "skipped"]);

export const IndexingRunStatusSchema = z.enum(["pending", "running", "succeeded", "failed"]);

export const IndexingStageRecordSchema = z
  .object({
    stage: IndexingStageNameSchema,
    status: IndexingStageStatusSchema,
    startedAt: IsoDateTimeSchema.optional(),
    completedAt: IsoDateTimeSchema.optional(),
    message: NonEmptyStringSchema.optional(),
    errorCode: NonEmptyStringSchema.optional(),
  })
  .strict();

export const IndexingManifestSchema = z
  .object({
    manifestId: StableIdSchema,
    runId: StableIdSchema,
    tenantId: StableIdSchema,
    projectId: StableIdSchema,
    sourcePath: NonEmptyStringSchema,
    commitSha: CommitShaSchema.optional(),
    documentIds: z.array(StableIdSchema),
    chunkIds: z.array(StableIdSchema),
    status: IndexingRunStatusSchema,
    stages: z.array(IndexingStageRecordSchema),
    startedAt: IsoDateTimeSchema,
    completedAt: IsoDateTimeSchema.optional(),
    errorCode: NonEmptyStringSchema.optional(),
    errorMessage: NonEmptyStringSchema.optional(),
  })
  .strict()
  .superRefine((value, context) => {
    if (value.status === "succeeded" && value.completedAt === undefined) {
      context.addIssue({
        code: "custom",
        message: "A succeeded indexing manifest must include completedAt.",
        path: ["completedAt"],
      });
    }

    if (value.status === "failed" && value.errorMessage === undefined) {
      context.addIssue({
        code: "custom",
        message: "A failed indexing manifest must include errorMessage.",
        path: ["errorMessage"],
      });
    }
  });

export type IndexingStageName = z.infer<typeof IndexingStageNameSchema>;
export type IndexingStageStatus = z.infer<typeof IndexingStageStatusSchema>;
export type IndexingRunStatus = z.infer<typeof IndexingRunStatusSchema>;
export type IndexingStageRecord = z.infer<typeof IndexingStageRecordSchema>;
export type IndexingManifest = z.infer<typeof IndexingManifestSchema>;
