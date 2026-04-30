import { z } from "zod";
import { SourceKindSchema } from "./source-provenance";
import {
  CanonicalStoreSchema,
  ClassificationSchema,
  CommitShaSchema,
  DomainSchema,
  IsoDateTimeSchema,
  NonEmptyStringSchema,
  SemanticVersionSchema,
  StableIdSchema,
} from "./shared";

export const QdrantContextPayloadSchema = z
  .object({
    canonical_store: CanonicalStoreSchema,
    canonical_id: StableIdSchema,
    source_kind: SourceKindSchema,
    source_path: NonEmptyStringSchema.optional(),
    commit_sha: CommitShaSchema.optional(),
    document_id: StableIdSchema,
    document_version: SemanticVersionSchema,
    chunk_id: StableIdSchema,
    tenant_id: StableIdSchema,
    project_id: StableIdSchema,
    domain: DomainSchema,
    classification: ClassificationSchema,
    canonical: z.boolean(),
    superseded: z.boolean(),
    created_at: IsoDateTimeSchema,
    embedding_model: NonEmptyStringSchema,
    embedding_dimension: z.number().int().positive(),
    index_schema_version: NonEmptyStringSchema,
  })
  .strict()
  .superRefine((value, context) => {
    if (value.canonical_store === "git") {
      context.addIssue({
        code: "custom",
        message: "Qdrant payloads should resolve to canonical operational records, not directly to Git alone.",
        path: ["canonical_store"],
      });
    }

    if (value.superseded && value.canonical) {
      context.addIssue({
        code: "custom",
        message: "A superseded Qdrant payload must not be canonical.",
        path: ["canonical"],
      });
    }
  });

export type QdrantContextPayload = z.infer<typeof QdrantContextPayloadSchema>;
