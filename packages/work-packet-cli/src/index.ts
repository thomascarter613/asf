import { runWorkPacketCli } from "./cli";

export type { WorkPacketCliResult } from "./cli";
export { parseValidateArgs, parseWorkPacketCliArgs, runWorkPacketCli } from "./cli";
export {
  WORK_PACKET_CLI_EXIT_CODES,
  type WorkPacketCliExitCode,
} from "./exit-codes";
export {
  WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION,
  formatWorkPacketValidationJsonResult,
  formatWorkPacketValidationResult,
  formatWorkPacketValidationTextResult,
  toWorkPacketValidationJsonResult,
  type WorkPacketCliOutputFormat,
  type WorkPacketValidationJsonResult,
  type WorkPacketValidationFormatOptions,
} from "./format";

const result = await runWorkPacketCli(process.argv.slice(2));

if (result.stdout.length > 0) {
  process.stdout.write(result.stdout);
}

if (result.stderr.length > 0) {
  process.stderr.write(result.stderr);
}

process.exit(result.exitCode);
