import { z } from "zod";
import { NonEmptyStringSchema } from "../../context/schemas";

export const QDRANT_CONTEXT_COLLECTION_NAME = "asf_context_chunks_v1";
export const QDRANT_CONTEXT_COLLECTION_SCHEMA_VERSION = "1";

export const QDRANT_CONTEXT_DENSE_VECTOR_NAME = "context_dense";
export const QDRANT_CONTEXT_SPARSE_VECTOR_NAME = "context_sparse";

export const QDRANT_CONTEXT_DENSE_VECTOR_SIZE = 1536;
export const QDRANT_CONTEXT_DENSE_VECTOR_DISTANCE = "Cosine";

export const QdrantDistanceMetricSchema = z.enum(["Cosine", "Dot", "Euclid", "Manhattan"]);

export const QdrantPayloadIndexFieldTypeSchema = z.enum([
  "keyword",
  "integer",
  "float",
  "bool",
  "datetime",
  "text",
  "uuid",
]);

export const QdrantPayloadFieldNameSchema = z
  .string()
  .trim()
  .regex(/^[a-z][a-z0-9_]*$/, "Qdrant payload field names must be snake_case.");

export const QdrantDenseVectorContractSchema = z
  .object({
    vectorName: QdrantPayloadFieldNameSchema,
    size: z.number().int().positive(),
    distance: QdrantDistanceMetricSchema,
  })
  .strict();

export const QdrantSparseVectorContractSchema = z
  .object({
    vectorName: QdrantPayloadFieldNameSchema,
  })
  .strict();

export const QdrantPayloadIndexContractSchema = z
  .object({
    fieldName: QdrantPayloadFieldNameSchema,
    fieldType: QdrantPayloadIndexFieldTypeSchema,
    requiredForAccessControl: z.boolean(),
    requiredForSupersessionFiltering: z.boolean(),
    requiredForSourceResolution: z.boolean(),
    purpose: NonEmptyStringSchema,
  })
  .strict();

export const QdrantContextCollectionContractSchema = z
  .object({
    collectionName: z
      .string()
      .trim()
      .regex(/^[a-z][a-z0-9_]*$/, "Qdrant collection names must be snake_case."),
    schemaVersion: NonEmptyStringSchema,
    denseVector: QdrantDenseVectorContractSchema,
    sparseVector: QdrantSparseVectorContractSchema,
    payloadIndexes: z.array(QdrantPayloadIndexContractSchema).min(1),
    defaultExclusionFilters: z
      .object({
        canonicalOnly: z.boolean(),
        excludeSuperseded: z.boolean(),
      })
      .strict(),
  })
  .strict()
  .superRefine((value, context) => {
    const requiredPayloadFields = new Set([
      "tenant_id",
      "project_id",
      "classification",
      "canonical",
      "superseded",
      "canonical_store",
      "canonical_id",
      "source_kind",
      "source_path",
      "commit_sha",
      "document_id",
      "document_version",
      "chunk_id",
      "domain",
      "embedding_model",
      "embedding_dimension",
      "index_schema_version",
    ]);

    const actualPayloadFields = new Set(value.payloadIndexes.map((index) => index.fieldName));

    for (const requiredPayloadField of requiredPayloadFields) {
      if (!actualPayloadFields.has(requiredPayloadField)) {
        context.addIssue({
          code: "custom",
          message: `Missing required Qdrant payload index field: ${requiredPayloadField}`,
          path: ["payloadIndexes"],
        });
      }
    }

    const accessControlFields = value.payloadIndexes
      .filter((index) => index.requiredForAccessControl)
      .map((index) => index.fieldName);

    for (const requiredAccessControlField of ["tenant_id", "project_id", "classification"]) {
      if (!accessControlFields.includes(requiredAccessControlField)) {
        context.addIssue({
          code: "custom",
          message: `Payload field must be marked requiredForAccessControl: ${requiredAccessControlField}`,
          path: ["payloadIndexes"],
        });
      }
    }

    const supersessionFields = value.payloadIndexes
      .filter((index) => index.requiredForSupersessionFiltering)
      .map((index) => index.fieldName);

    for (const requiredSupersessionField of ["canonical", "superseded"]) {
      if (!supersessionFields.includes(requiredSupersessionField)) {
        context.addIssue({
          code: "custom",
          message: `Payload field must be marked requiredForSupersessionFiltering: ${requiredSupersessionField}`,
          path: ["payloadIndexes"],
        });
      }
    }

    const sourceResolutionFields = value.payloadIndexes
      .filter((index) => index.requiredForSourceResolution)
      .map((index) => index.fieldName);

    for (const requiredSourceResolutionField of [
      "canonical_store",
      "canonical_id",
      "source_kind",
      "source_path",
      "commit_sha",
      "document_id",
      "chunk_id",
    ]) {
      if (!sourceResolutionFields.includes(requiredSourceResolutionField)) {
        context.addIssue({
          code: "custom",
          message: `Payload field must be marked requiredForSourceResolution: ${requiredSourceResolutionField}`,
          path: ["payloadIndexes"],
        });
      }
    }

    if (!value.defaultExclusionFilters.canonicalOnly) {
      context.addIssue({
        code: "custom",
        message: "Default retrieval must require canonicalOnly=true.",
        path: ["defaultExclusionFilters", "canonicalOnly"],
      });
    }

    if (!value.defaultExclusionFilters.excludeSuperseded) {
      context.addIssue({
        code: "custom",
        message: "Default retrieval must require excludeSuperseded=true.",
        path: ["defaultExclusionFilters", "excludeSuperseded"],
      });
    }
  });

export type QdrantDistanceMetric = z.infer<typeof QdrantDistanceMetricSchema>;
export type QdrantPayloadIndexFieldType = z.infer<typeof QdrantPayloadIndexFieldTypeSchema>;
export type QdrantPayloadIndexContract = z.infer<typeof QdrantPayloadIndexContractSchema>;
export type QdrantDenseVectorContract = z.infer<typeof QdrantDenseVectorContractSchema>;
export type QdrantSparseVectorContract = z.infer<typeof QdrantSparseVectorContractSchema>;
export type QdrantContextCollectionContract = z.infer<typeof QdrantContextCollectionContractSchema>;

export const QDRANT_CONTEXT_PAYLOAD_INDEXES: readonly QdrantPayloadIndexContract[] = [
  {
    fieldName: "tenant_id",
    fieldType: "keyword",
    requiredForAccessControl: true,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Limits retrieval to the authorized tenant scope.",
  },
  {
    fieldName: "project_id",
    fieldType: "keyword",
    requiredForAccessControl: true,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Limits retrieval to the authorized project scope.",
  },
  {
    fieldName: "classification",
    fieldType: "keyword",
    requiredForAccessControl: true,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Supports policy-aware retrieval by information classification.",
  },
  {
    fieldName: "canonical",
    fieldType: "bool",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: true,
    requiredForSourceResolution: false,
    purpose: "Allows default retrieval to include only canonical records.",
  },
  {
    fieldName: "superseded",
    fieldType: "bool",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: true,
    requiredForSourceResolution: false,
    purpose: "Allows default retrieval to exclude superseded chunks.",
  },
  {
    fieldName: "canonical_store",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Identifies the canonical store that owns the retrieved record.",
  },
  {
    fieldName: "canonical_id",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Identifies the canonical record within the canonical store.",
  },
  {
    fieldName: "source_kind",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Identifies whether the retrieved record came from Git, upload, generated artifact, URL, or manual entry.",
  },
  {
    fieldName: "source_path",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Resolves retrieved records back to repository or artifact paths.",
  },
  {
    fieldName: "commit_sha",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Resolves retrieved records back to the Git source version where applicable.",
  },
  {
    fieldName: "document_id",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Groups chunks by canonical document identity.",
  },
  {
    fieldName: "document_version",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Supports document version filtering and provenance display.",
  },
  {
    fieldName: "chunk_id",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: true,
    purpose: "Resolves the retrieved vector point to the canonical chunk.",
  },
  {
    fieldName: "domain",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Supports domain-scoped retrieval such as architecture, retrieval, security, or operations.",
  },
  {
    fieldName: "embedding_model",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Supports embedding model migration and retrieval quality analysis.",
  },
  {
    fieldName: "embedding_dimension",
    fieldType: "integer",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Records the dimensionality used to create the vector.",
  },
  {
    fieldName: "index_schema_version",
    fieldType: "keyword",
    requiredForAccessControl: false,
    requiredForSupersessionFiltering: false,
    requiredForSourceResolution: false,
    purpose: "Supports retrieval index schema migrations.",
  },
];

export const QDRANT_CONTEXT_COLLECTION_CONTRACT = QdrantContextCollectionContractSchema.parse({
  collectionName: QDRANT_CONTEXT_COLLECTION_NAME,
  schemaVersion: QDRANT_CONTEXT_COLLECTION_SCHEMA_VERSION,
  denseVector: {
    vectorName: QDRANT_CONTEXT_DENSE_VECTOR_NAME,
    size: QDRANT_CONTEXT_DENSE_VECTOR_SIZE,
    distance: QDRANT_CONTEXT_DENSE_VECTOR_DISTANCE,
  },
  sparseVector: {
    vectorName: QDRANT_CONTEXT_SPARSE_VECTOR_NAME,
  },
  payloadIndexes: QDRANT_CONTEXT_PAYLOAD_INDEXES,
  defaultExclusionFilters: {
    canonicalOnly: true,
    excludeSuperseded: true,
  },
});
