import { MongoClient } from "mongodb";
import type { EnvironmentConfig } from "../config/env";
import type { ManagedPersistenceClient, PersistenceHealthCheck } from "./types";

export type MongoDbClientBoundary = ManagedPersistenceClient & {
  readonly client: MongoClient;
  readonly databaseName: string;
};

export function createMongoDbClient(config: EnvironmentConfig): MongoDbClientBoundary {
  const client = new MongoClient(config.mongodb.uri, {
    connectTimeoutMS: 5_000,
    serverSelectionTimeoutMS: 5_000,
  });

  return {
    name: "mongodb",
    client,
    databaseName: config.mongodb.database,

    async health(): Promise<PersistenceHealthCheck> {
      try {
        await client.connect();
        const result = await client.db("admin").command({ ping: 1 });
        const ok = result.ok === 1;

        return {
          name: "mongodb",
          status: ok ? "ok" : "error",
          message: ok ? "MongoDB responded to ping." : "MongoDB ping returned an unexpected result.",
        };
      } catch (error) {
        return {
          name: "mongodb",
          status: "error",
          message: error instanceof Error ? error.message : "Unknown MongoDB health check error.",
        };
      }
    },

    async close(): Promise<void> {
      await client.close();
    },
  };
}
