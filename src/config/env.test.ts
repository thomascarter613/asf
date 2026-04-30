import { describe, expect, test } from "bun:test";
import { EnvironmentConfigurationError, loadEnvironmentConfig } from "./env";

const validEnv = {
  ASF_ENV: "local",

  POSTGRES_HOST: "localhost",
  POSTGRES_PORT: "55432",
  POSTGRES_DB: "asf",
  POSTGRES_USER: "asf",
  POSTGRES_PASSWORD: "asf_local_password",
  DATABASE_URL: "postgresql://asf:asf_local_password@localhost:55432/asf",

  MONGODB_HOST: "localhost",
  MONGODB_PORT: "27017",
  MONGODB_DATABASE: "asf",
  MONGODB_ROOT_USERNAME: "asf",
  MONGODB_ROOT_PASSWORD: "asf_local_password",
  MONGODB_URI: "mongodb://asf:asf_local_password@localhost:27017/asf?authSource=admin",

  QDRANT_HOST: "localhost",
  QDRANT_HTTP_PORT: "6333",
  QDRANT_GRPC_PORT: "6334",
  QDRANT_URL: "http://localhost:6333",
};

describe("loadEnvironmentConfig", () => {
  test("loads a valid local environment configuration", () => {
    const config = loadEnvironmentConfig(validEnv);

    expect(config.app.env).toBe("local");
    expect(config.app.isLocal).toBe(true);
    expect(config.postgres.port).toBe(55432);
    expect(config.mongodb.port).toBe(27017);
    expect(config.qdrant.httpPort).toBe(6333);
    expect(config.qdrant.url).toBe("http://localhost:6333");
  });

  test("defaults ASF_ENV to local when omitted", () => {
    const { ASF_ENV: _unused, ...envWithoutAppEnv } = validEnv;

    const config = loadEnvironmentConfig(envWithoutAppEnv);

    expect(config.app.env).toBe("local");
  });

  test("rejects missing required values", () => {
    const { DATABASE_URL: _unused, ...envWithoutDatabaseUrl } = validEnv;

    expect(() => loadEnvironmentConfig(envWithoutDatabaseUrl)).toThrow(EnvironmentConfigurationError);
  });

  test("rejects invalid ports", () => {
    expect(() =>
      loadEnvironmentConfig({
        ...validEnv,
        POSTGRES_PORT: "not-a-port",
      }),
    ).toThrow(EnvironmentConfigurationError);

    expect(() =>
      loadEnvironmentConfig({
        ...validEnv,
        POSTGRES_PORT: "70000",
      }),
    ).toThrow(EnvironmentConfigurationError);
  });

  test("rejects invalid URL protocols", () => {
    expect(() =>
      loadEnvironmentConfig({
        ...validEnv,
        DATABASE_URL: "mysql://asf:asf_local_password@localhost:55432/asf",
      }),
    ).toThrow(EnvironmentConfigurationError);

    expect(() =>
      loadEnvironmentConfig({
        ...validEnv,
        QDRANT_URL: "ftp://localhost:6333",
      }),
    ).toThrow(EnvironmentConfigurationError);
  });
});
