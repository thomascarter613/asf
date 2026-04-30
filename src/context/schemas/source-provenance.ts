import { z } from "zod";
import { CommitShaSchema, NonEmptyStringSchema } from "./shared";

export const SourceKindSchema = z.enum([
  "git_file",
  "uploaded_file",
  "generated_artifact",
  "external_url",
  "manual_entry",
]);

export const SourceProvenanceSchema = z
  .object({
    sourceKind: SourceKindSchema,
    sourcePath: NonEmptyStringSchema.optional(),
    sourceUri: z.string().url().optional(),
    commitSha: CommitShaSchema.optional(),
    objectStorageKey: NonEmptyStringSchema.optional(),
    lineStart: z.number().int().positive().optional(),
    lineEnd: z.number().int().positive().optional(),
  })
  .strict()
  .superRefine((value, context) => {
    if (!value.sourcePath && !value.sourceUri && !value.objectStorageKey) {
      context.addIssue({
        code: "custom",
        message: "At least one of sourcePath, sourceUri, or objectStorageKey is required.",
        path: ["sourcePath"],
      });
    }

    if (value.lineStart !== undefined && value.lineEnd !== undefined && value.lineEnd < value.lineStart) {
      context.addIssue({
        code: "custom",
        message: "lineEnd must be greater than or equal to lineStart.",
        path: ["lineEnd"],
      });
    }
  });

export type SourceKind = z.infer<typeof SourceKindSchema>;
export type SourceProvenance = z.infer<typeof SourceProvenanceSchema>;
