import { describe, expect, test } from "bun:test";
import type { PersistenceClients } from ".";
import { checkPersistenceHealth, closePersistenceClients } from ".";
import type { ManagedPersistenceClient, PersistenceClientName } from "./types";

function createFakeClient(name: PersistenceClientName, status: "ok" | "error"): ManagedPersistenceClient {
  return {
    name,

    async health() {
      return {
        name,
        status,
        message: `${name} ${status}`,
      };
    },

    async close() {
      // No-op fake client.
    },
  };
}

describe("persistence client boundaries", () => {
  test("reports ok when all clients are healthy", async () => {
    const clients = {
      postgres: createFakeClient("postgres", "ok"),
      mongodb: createFakeClient("mongodb", "ok"),
      qdrant: createFakeClient("qdrant", "ok"),
    } as PersistenceClients;

    const report = await checkPersistenceHealth(clients);

    expect(report.status).toBe("ok");
    expect(report.checks).toHaveLength(3);
    expect(report.checks.map((check) => check.name)).toEqual(["postgres", "mongodb", "qdrant"]);
  });

  test("reports error when any client is unhealthy", async () => {
    const clients = {
      postgres: createFakeClient("postgres", "ok"),
      mongodb: createFakeClient("mongodb", "error"),
      qdrant: createFakeClient("qdrant", "ok"),
    } as PersistenceClients;

    const report = await checkPersistenceHealth(clients);

    expect(report.status).toBe("error");
    expect(report.checks.find((check) => check.name === "mongodb")?.status).toBe("error");
  });

  test("closes all managed clients", async () => {
    const closed: PersistenceClientName[] = [];

    function createClosableFakeClient(name: PersistenceClientName): ManagedPersistenceClient {
      return {
        name,

        async health() {
          return {
            name,
            status: "ok",
            message: `${name} ok`,
          };
        },

        async close() {
          closed.push(name);
        },
      };
    }

    const clients = {
      postgres: createClosableFakeClient("postgres"),
      mongodb: createClosableFakeClient("mongodb"),
      qdrant: createClosableFakeClient("qdrant"),
    } as PersistenceClients;

    await closePersistenceClients(clients);

    expect(closed.sort()).toEqual(["mongodb", "postgres", "qdrant"]);
  });
});
