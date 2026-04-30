import { loadEnvironmentConfig } from "./src/config/env";
import { checkPersistenceHealth, closePersistenceClients, createPersistenceClients } from "./src/persistence";

const config = loadEnvironmentConfig();
const clients = createPersistenceClients(config);

try {
  const report = await checkPersistenceHealth(clients);

  console.log(JSON.stringify(report, null, 2));

  if (report.status !== "ok") {
    process.exitCode = 1;
  }
} finally {
  await closePersistenceClients(clients);
}
