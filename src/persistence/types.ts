export type PersistenceClientName = "postgres" | "mongodb" | "qdrant";

export type PersistenceHealthStatus = "ok" | "error";

export type PersistenceHealthCheck = {
  readonly name: PersistenceClientName;
  readonly status: PersistenceHealthStatus;
  readonly message: string;
};

export type PersistenceHealthReport = {
  readonly status: PersistenceHealthStatus;
  readonly checks: readonly PersistenceHealthCheck[];
};

export interface ManagedPersistenceClient {
  readonly name: PersistenceClientName;
  health(): Promise<PersistenceHealthCheck>;
  close(): Promise<void>;
}
