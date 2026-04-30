import { z } from "zod";
import { SourceProvenanceSchema } from "./source-provenance";
import {
  ClassificationSchema,
  DomainSchema,
  IsoDateTimeSchema,
  SemanticVersionSchema,
  Sha256Schema,
  StableIdSchema,
} from "./shared";

export const ContextDocumentStatusSchema = z.enum(["draft", "accepted", "superseded", "deleted"]);

export const ContextDocumentSchema = z
  .object({
    documentId: StableIdSchema,
    tenantId: StableIdSchema,
    projectId: StableIdSchema,
    title: z.string().trim().min(1),
    documentVersion: SemanticVersionSchema,
    status: ContextDocumentStatusSchema,
    canonical: z.boolean(),
    superseded: z.boolean(),
    domains: z.array(DomainSchema).min(1),
    classification: ClassificationSchema,
    source: SourceProvenanceSchema,
    frontmatter: z.record(z.string(), z.unknown()),
    contentHash: Sha256Schema,
    createdAt: IsoDateTimeSchema,
    updatedAt: IsoDateTimeSchema,
  })
  .strict()
  .superRefine((value, context) => {
    if (value.status === "superseded" && !value.superseded) {
      context.addIssue({
        code: "custom",
        message: "A document with status superseded must have superseded=true.",
        path: ["superseded"],
      });
    }

    if (value.status === "deleted" && value.canonical) {
      context.addIssue({
        code: "custom",
        message: "A deleted document must not be canonical.",
        path: ["canonical"],
      });
    }
  });

export type ContextDocumentStatus = z.infer<typeof ContextDocumentStatusSchema>;
export type ContextDocument = z.infer<typeof ContextDocumentSchema>;
