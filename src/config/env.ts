export type AppEnvironment = "local" | "test" | "development" | "staging" | "production";

export type EnvironmentConfig = {
  readonly app: {
    readonly env: AppEnvironment;
    readonly isLocal: boolean;
    readonly isTest: boolean;
    readonly isProduction: boolean;
  };
  readonly postgres: {
    readonly host: string;
    readonly port: number;
    readonly database: string;
    readonly user: string;
    readonly password: string;
    readonly databaseUrl: string;
  };
  readonly mongodb: {
    readonly host: string;
    readonly port: number;
    readonly database: string;
    readonly rootUsername: string;
    readonly rootPassword: string;
    readonly uri: string;
  };
  readonly qdrant: {
    readonly host: string;
    readonly httpPort: number;
    readonly grpcPort: number;
    readonly url: string;
  };
};

type RawEnv = Record<string, string | undefined>;

const VALID_APP_ENVIRONMENTS: ReadonlySet<AppEnvironment> = new Set([
  "local",
  "test",
  "development",
  "staging",
  "production",
]);

export class EnvironmentConfigurationError extends Error {
  public readonly issues: readonly string[];

  public constructor(issues: readonly string[]) {
    super(`Invalid environment configuration:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
    this.name = "EnvironmentConfigurationError";
    this.issues = issues;
  }
}

export function loadEnvironmentConfig(rawEnv: RawEnv = process.env): EnvironmentConfig {
  const issues: string[] = [];

  const appEnv = readAppEnvironment(rawEnv, "ASF_ENV", "local", issues);

  const postgresHost = readRequiredString(rawEnv, "POSTGRES_HOST", issues);
  const postgresPort = readRequiredPort(rawEnv, "POSTGRES_PORT", issues);
  const postgresDatabase = readRequiredString(rawEnv, "POSTGRES_DB", issues);
  const postgresUser = readRequiredString(rawEnv, "POSTGRES_USER", issues);
  const postgresPassword = readRequiredString(rawEnv, "POSTGRES_PASSWORD", issues);
  const databaseUrl = readRequiredUrl(rawEnv, "DATABASE_URL", ["postgresql:"], issues);

  const mongodbHost = readRequiredString(rawEnv, "MONGODB_HOST", issues);
  const mongodbPort = readRequiredPort(rawEnv, "MONGODB_PORT", issues);
  const mongodbDatabase = readRequiredString(rawEnv, "MONGODB_DATABASE", issues);
  const mongodbRootUsername = readRequiredString(rawEnv, "MONGODB_ROOT_USERNAME", issues);
  const mongodbRootPassword = readRequiredString(rawEnv, "MONGODB_ROOT_PASSWORD", issues);
  const mongodbUri = readRequiredUrl(rawEnv, "MONGODB_URI", ["mongodb:", "mongodb+srv:"], issues);

  const qdrantHost = readRequiredString(rawEnv, "QDRANT_HOST", issues);
  const qdrantHttpPort = readRequiredPort(rawEnv, "QDRANT_HTTP_PORT", issues);
  const qdrantGrpcPort = readRequiredPort(rawEnv, "QDRANT_GRPC_PORT", issues);
  const qdrantUrl = readRequiredUrl(rawEnv, "QDRANT_URL", ["http:", "https:"], issues);

  if (issues.length > 0) {
    throw new EnvironmentConfigurationError(issues);
  }

  return {
    app: {
      env: appEnv,
      isLocal: appEnv === "local",
      isTest: appEnv === "test",
      isProduction: appEnv === "production",
    },
    postgres: {
      host: postgresHost,
      port: postgresPort,
      database: postgresDatabase,
      user: postgresUser,
      password: postgresPassword,
      databaseUrl,
    },
    mongodb: {
      host: mongodbHost,
      port: mongodbPort,
      database: mongodbDatabase,
      rootUsername: mongodbRootUsername,
      rootPassword: mongodbRootPassword,
      uri: mongodbUri,
    },
    qdrant: {
      host: qdrantHost,
      httpPort: qdrantHttpPort,
      grpcPort: qdrantGrpcPort,
      url: qdrantUrl,
    },
  };
}

function readAppEnvironment(
  rawEnv: RawEnv,
  key: string,
  fallback: AppEnvironment,
  issues: string[],
): AppEnvironment {
  const value = rawEnv[key]?.trim() || fallback;

  if (!VALID_APP_ENVIRONMENTS.has(value as AppEnvironment)) {
    issues.push(
      `${key} must be one of: ${Array.from(VALID_APP_ENVIRONMENTS).join(", ")}; received "${value}"`,
    );
    return fallback;
  }

  return value as AppEnvironment;
}

function readRequiredString(rawEnv: RawEnv, key: string, issues: string[]): string {
  const value = rawEnv[key]?.trim();

  if (!value) {
    issues.push(`${key} is required`);
    return "";
  }

  return value;
}

function readRequiredPort(rawEnv: RawEnv, key: string, issues: string[]): number {
  const rawValue = readRequiredString(rawEnv, key, issues);

  if (!rawValue) {
    return 0;
  }

  if (!/^\d+$/.test(rawValue)) {
    issues.push(`${key} must be an integer port; received "${rawValue}"`);
    return 0;
  }

  const value = Number.parseInt(rawValue, 10);

  if (!Number.isSafeInteger(value) || value < 1 || value > 65_535) {
    issues.push(`${key} must be between 1 and 65535; received "${rawValue}"`);
    return 0;
  }

  return value;
}

function readRequiredUrl(
  rawEnv: RawEnv,
  key: string,
  allowedProtocols: readonly string[],
  issues: string[],
): string {
  const value = readRequiredString(rawEnv, key, issues);

  if (!value) {
    return "";
  }

  try {
    const parsedUrl = new URL(value);

    if (!allowedProtocols.includes(parsedUrl.protocol)) {
      issues.push(
        `${key} must use one of these protocols: ${allowedProtocols.join(", ")}; received "${parsedUrl.protocol}"`,
      );
    }
  } catch {
    issues.push(`${key} must be a valid URL; received "${value}"`);
  }

  return value;
}
