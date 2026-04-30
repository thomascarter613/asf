import { QdrantClient } from "@qdrant/js-client-rest";
import type { EnvironmentConfig } from "../config/env";
import type { ManagedPersistenceClient, PersistenceHealthCheck } from "./types";

export type QdrantClientBoundary = ManagedPersistenceClient & {
  readonly client: QdrantClient;
  readonly url: string;
};

export function createQdrantClient(config: EnvironmentConfig): QdrantClientBoundary {
  const url = config.qdrant.url;
  const client = new QdrantClient({ url });

  return {
    name: "qdrant",
    client,
    url,

    async health(): Promise<PersistenceHealthCheck> {
      try {
        const response = await fetch(`${url}/healthz`);

        if (!response.ok) {
          return {
            name: "qdrant",
            status: "error",
            message: `Qdrant health endpoint returned HTTP ${response.status}.`,
          };
        }

        return {
          name: "qdrant",
          status: "ok",
          message: "Qdrant responded to health endpoint.",
        };
      } catch (error) {
        return {
          name: "qdrant",
          status: "error",
          message: error instanceof Error ? error.message : "Unknown Qdrant health check error.",
        };
      }
    },

    async close(): Promise<void> {
      // The Qdrant REST client does not require an explicit close operation.
    },
  };
}
