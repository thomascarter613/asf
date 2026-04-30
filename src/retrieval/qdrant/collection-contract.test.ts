import { describe, expect, test } from "bun:test";
import {
  QDRANT_CONTEXT_COLLECTION_CONTRACT,
  QDRANT_CONTEXT_COLLECTION_NAME,
  QDRANT_CONTEXT_DENSE_VECTOR_NAME,
  QDRANT_CONTEXT_DENSE_VECTOR_SIZE,
  QDRANT_CONTEXT_PAYLOAD_INDEXES,
  QDRANT_CONTEXT_SPARSE_VECTOR_NAME,
  QdrantContextCollectionContractSchema,
  QdrantPayloadFieldNameSchema,
} from ".";

describe("Qdrant context collection contract", () => {
  test("defines the canonical context collection name", () => {
    expect(QDRANT_CONTEXT_COLLECTION_NAME).toBe("asf_context_chunks_v1");
  });

  test("defines named dense and sparse vectors", () => {
    expect(QDRANT_CONTEXT_COLLECTION_CONTRACT.denseVector.vectorName).toBe(QDRANT_CONTEXT_DENSE_VECTOR_NAME);
    expect(QDRANT_CONTEXT_COLLECTION_CONTRACT.denseVector.size).toBe(QDRANT_CONTEXT_DENSE_VECTOR_SIZE);
    expect(QDRANT_CONTEXT_COLLECTION_CONTRACT.denseVector.distance).toBe("Cosine");

    expect(QDRANT_CONTEXT_COLLECTION_CONTRACT.sparseVector.vectorName).toBe(QDRANT_CONTEXT_SPARSE_VECTOR_NAME);
  });

  test("validates the default collection contract", () => {
    const result = QdrantContextCollectionContractSchema.parse(QDRANT_CONTEXT_COLLECTION_CONTRACT);

    expect(result.collectionName).toBe("asf_context_chunks_v1");
    expect(result.schemaVersion).toBe("1");
    expect(result.defaultExclusionFilters.canonicalOnly).toBe(true);
    expect(result.defaultExclusionFilters.excludeSuperseded).toBe(true);
  });

  test("requires snake_case payload field names", () => {
    expect(QdrantPayloadFieldNameSchema.parse("tenant_id")).toBe("tenant_id");

    expect(() => QdrantPayloadFieldNameSchema.parse("tenantId")).toThrow();
    expect(() => QdrantPayloadFieldNameSchema.parse("TenantId")).toThrow();
    expect(() => QdrantPayloadFieldNameSchema.parse("tenant-id")).toThrow();
  });

  test("includes required access-control fields", () => {
    const accessControlFields = QDRANT_CONTEXT_PAYLOAD_INDEXES.filter(
      (index) => index.requiredForAccessControl,
    ).map((index) => index.fieldName);

    expect(accessControlFields).toContain("tenant_id");
    expect(accessControlFields).toContain("project_id");
    expect(accessControlFields).toContain("classification");
  });

  test("includes required supersession filter fields", () => {
    const supersessionFields = QDRANT_CONTEXT_PAYLOAD_INDEXES.filter(
      (index) => index.requiredForSupersessionFiltering,
    ).map((index) => index.fieldName);

    expect(supersessionFields).toContain("canonical");
    expect(supersessionFields).toContain("superseded");
  });

  test("includes required source-resolution fields", () => {
    const sourceResolutionFields = QDRANT_CONTEXT_PAYLOAD_INDEXES.filter(
      (index) => index.requiredForSourceResolution,
    ).map((index) => index.fieldName);

    expect(sourceResolutionFields).toContain("canonical_store");
    expect(sourceResolutionFields).toContain("canonical_id");
    expect(sourceResolutionFields).toContain("source_kind");
    expect(sourceResolutionFields).toContain("source_path");
    expect(sourceResolutionFields).toContain("commit_sha");
    expect(sourceResolutionFields).toContain("document_id");
    expect(sourceResolutionFields).toContain("chunk_id");
  });

  test("rejects a contract missing a required payload index", () => {
    const invalidContract = {
      ...QDRANT_CONTEXT_COLLECTION_CONTRACT,
      payloadIndexes: QDRANT_CONTEXT_COLLECTION_CONTRACT.payloadIndexes.filter(
        (index) => index.fieldName !== "tenant_id",
      ),
    };

    expect(() => QdrantContextCollectionContractSchema.parse(invalidContract)).toThrow();
  });

  test("rejects a contract with non-canonical default retrieval filters", () => {
    expect(() =>
      QdrantContextCollectionContractSchema.parse({
        ...QDRANT_CONTEXT_COLLECTION_CONTRACT,
        defaultExclusionFilters: {
          canonicalOnly: false,
          excludeSuperseded: true,
        },
      }),
    ).toThrow();

    expect(() =>
      QdrantContextCollectionContractSchema.parse({
        ...QDRANT_CONTEXT_COLLECTION_CONTRACT,
        defaultExclusionFilters: {
          canonicalOnly: true,
          excludeSuperseded: false,
        },
      }),
    ).toThrow();
  });

  test("rejects an invalid dense vector size", () => {
    expect(() =>
      QdrantContextCollectionContractSchema.parse({
        ...QDRANT_CONTEXT_COLLECTION_CONTRACT,
        denseVector: {
          ...QDRANT_CONTEXT_COLLECTION_CONTRACT.denseVector,
          size: 0,
        },
      }),
    ).toThrow();
  });
});
