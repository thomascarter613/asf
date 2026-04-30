import { Pool } from "pg";
import type { EnvironmentConfig } from "../config/env";
import type { ManagedPersistenceClient, PersistenceHealthCheck } from "./types";

export type PostgresClientBoundary = ManagedPersistenceClient & {
  readonly pool: Pool;
};

export function createPostgresClient(config: EnvironmentConfig): PostgresClientBoundary {
  const pool = new Pool({
    connectionString: config.postgres.databaseUrl,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });

  pool.on("error", (error: Error) => {
    console.error("Unexpected PostgreSQL pool error", error);
  });

  return {
    name: "postgres",
    pool,

    async health(): Promise<PersistenceHealthCheck> {
      try {
        const result = await pool.query<{ ok: number }>("select 1 as ok");
        const ok = result.rows[0]?.ok === 1;

        return {
          name: "postgres",
          status: ok ? "ok" : "error",
          message: ok ? "PostgreSQL responded to health query." : "PostgreSQL health query returned an unexpected result.",
        };
      } catch (error) {
        return {
          name: "postgres",
          status: "error",
          message: error instanceof Error ? error.message : "Unknown PostgreSQL health check error.",
        };
      }
    },

    async close(): Promise<void> {
      await pool.end();
    },
  };
}
