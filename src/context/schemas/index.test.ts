import { describe, expect, test } from "bun:test";
import {
  ContextChunkSchema,
  ContextDocumentSchema,
  IndexingManifestSchema,
  QdrantContextPayloadSchema,
  SourceProvenanceSchema,
} from ".";

const now = "2026-04-30T12:00:00Z";
const contentHash = "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

const validSource = {
  sourceKind: "git_file",
  sourcePath: "docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md",
  commitSha: "abc1234",
  lineStart: 1,
  lineEnd: 25,
} as const;

describe("context schema contracts", () => {
  test("accepts valid source provenance", () => {
    const result = SourceProvenanceSchema.parse(validSource);

    expect(result.sourceKind).toBe("git_file");
    expect(result.sourcePath).toBe(
      "docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md",
    );
  });

  test("rejects source provenance without any resolvable source pointer", () => {
    expect(() =>
      SourceProvenanceSchema.parse({
        sourceKind: "manual_entry",
      }),
    ).toThrow();
  });

  test("accepts a valid context document", () => {
    const result = ContextDocumentSchema.parse({
      documentId: "asf-spec-polyglot-persistence-and-retrieval-architecture",
      tenantId: "tenant_default",
      projectId: "agentic-software-foundry",
      title: "Polyglot Persistence and Retrieval Architecture Specification",
      documentVersion: "0.1.0",
      status: "accepted",
      canonical: true,
      superseded: false,
      domains: ["architecture", "data", "retrieval"],
      classification: "internal",
      source: validSource,
      frontmatter: {
        canonical: true,
      },
      contentHash,
      createdAt: now,
      updatedAt: now,
    });

    expect(result.status).toBe("accepted");
    expect(result.canonical).toBe(true);
  });

  test("rejects a superseded document that is not marked superseded", () => {
    expect(() =>
      ContextDocumentSchema.parse({
        documentId: "doc_01",
        tenantId: "tenant_default",
        projectId: "agentic-software-foundry",
        title: "Old Document",
        documentVersion: "0.1.0",
        status: "superseded",
        canonical: false,
        superseded: false,
        domains: ["documentation"],
        classification: "internal",
        source: validSource,
        frontmatter: {},
        contentHash,
        createdAt: now,
        updatedAt: now,
      }),
    ).toThrow();
  });

  test("accepts a valid context chunk", () => {
    const result = ContextChunkSchema.parse({
      chunkId: "chunk_01",
      documentId: "doc_01",
      tenantId: "tenant_default",
      projectId: "agentic-software-foundry",
      documentVersion: "0.1.0",
      chunkIndex: 0,
      text: "This is a valid chunk of context.",
      contentHash,
      headingPath: ["Architecture", "Persistence"],
      tokenEstimate: 8,
      lineStart: 10,
      lineEnd: 12,
      canonical: true,
      superseded: false,
      classification: "internal",
      source: validSource,
      createdAt: now,
      updatedAt: now,
    });

    expect(result.chunkIndex).toBe(0);
    expect(result.headingPath).toEqual(["Architecture", "Persistence"]);
  });

  test("rejects a chunk whose line range is inverted", () => {
    expect(() =>
      ContextChunkSchema.parse({
        chunkId: "chunk_01",
        documentId: "doc_01",
        tenantId: "tenant_default",
        projectId: "agentic-software-foundry",
        documentVersion: "0.1.0",
        chunkIndex: 0,
        text: "This is a valid chunk of context.",
        contentHash,
        headingPath: [],
        lineStart: 20,
        lineEnd: 10,
        canonical: true,
        superseded: false,
        classification: "internal",
        source: validSource,
        createdAt: now,
        updatedAt: now,
      }),
    ).toThrow();
  });

  test("accepts a valid indexing manifest", () => {
    const result = IndexingManifestSchema.parse({
      manifestId: "manifest_01",
      runId: "run_01",
      tenantId: "tenant_default",
      projectId: "agentic-software-foundry",
      sourcePath: "docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md",
      commitSha: "abc1234",
      documentIds: ["doc_01"],
      chunkIds: ["chunk_01"],
      status: "succeeded",
      stages: [
        {
          stage: "discovered",
          status: "succeeded",
          startedAt: now,
          completedAt: now,
        },
      ],
      startedAt: now,
      completedAt: now,
    });

    expect(result.status).toBe("succeeded");
    expect(result.documentIds).toEqual(["doc_01"]);
  });

  test("rejects a failed indexing manifest without an error message", () => {
    expect(() =>
      IndexingManifestSchema.parse({
        manifestId: "manifest_01",
        runId: "run_01",
        tenantId: "tenant_default",
        projectId: "agentic-software-foundry",
        sourcePath: "docs/example.md",
        documentIds: [],
        chunkIds: [],
        status: "failed",
        stages: [],
        startedAt: now,
      }),
    ).toThrow();
  });

  test("accepts a valid Qdrant payload", () => {
    const result = QdrantContextPayloadSchema.parse({
      canonical_store: "mongodb",
      canonical_id: "chunk_01",
      source_kind: "git_file",
      source_path: "docs/architecture/specifications/polyglot-persistence-and-retrieval-architecture.md",
      commit_sha: "abc1234",
      document_id: "doc_01",
      document_version: "0.1.0",
      chunk_id: "chunk_01",
      tenant_id: "tenant_default",
      project_id: "agentic-software-foundry",
      domain: "architecture",
      classification: "internal",
      canonical: true,
      superseded: false,
      created_at: now,
      embedding_model: "text-embedding-model-name",
      embedding_dimension: 1536,
      index_schema_version: "1",
    });

    expect(result.canonical_store).toBe("mongodb");
    expect(result.superseded).toBe(false);
  });

  test("rejects a superseded Qdrant payload that is still canonical", () => {
    expect(() =>
      QdrantContextPayloadSchema.parse({
        canonical_store: "mongodb",
        canonical_id: "chunk_01",
        source_kind: "git_file",
        source_path: "docs/example.md",
        commit_sha: "abc1234",
        document_id: "doc_01",
        document_version: "0.1.0",
        chunk_id: "chunk_01",
        tenant_id: "tenant_default",
        project_id: "agentic-software-foundry",
        domain: "architecture",
        classification: "internal",
        canonical: true,
        superseded: true,
        created_at: now,
        embedding_model: "text-embedding-model-name",
        embedding_dimension: 1536,
        index_schema_version: "1",
      }),
    ).toThrow();
  });
});
