import type { EnvironmentConfig } from "../config/env";
import { createMongoDbClient, type MongoDbClientBoundary } from "./mongodb";
import { createPostgresClient, type PostgresClientBoundary } from "./postgres";
import { createQdrantClient, type QdrantClientBoundary } from "./qdrant";
import type { ManagedPersistenceClient, PersistenceHealthReport } from "./types";

export type PersistenceClients = {
  readonly postgres: PostgresClientBoundary;
  readonly mongodb: MongoDbClientBoundary;
  readonly qdrant: QdrantClientBoundary;
};

export function createPersistenceClients(config: EnvironmentConfig): PersistenceClients {
  return {
    postgres: createPostgresClient(config),
    mongodb: createMongoDbClient(config),
    qdrant: createQdrantClient(config),
  };
}

export async function checkPersistenceHealth(clients: PersistenceClients): Promise<PersistenceHealthReport> {
  const checks = await Promise.all([
    clients.postgres.health(),
    clients.mongodb.health(),
    clients.qdrant.health(),
  ]);

  const status = checks.every((check) => check.status === "ok") ? "ok" : "error";

  return {
    status,
    checks,
  };
}

export async function closePersistenceClients(clients: PersistenceClients): Promise<void> {
  const orderedClients: readonly ManagedPersistenceClient[] = [
    clients.qdrant,
    clients.mongodb,
    clients.postgres,
  ];

  await Promise.all(orderedClients.map((client) => client.close()));
}

export type {
  ManagedPersistenceClient,
  PersistenceClientName,
  PersistenceHealthCheck,
  PersistenceHealthReport,
  PersistenceHealthStatus,
} from "./types";
