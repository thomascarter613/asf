import { runWorkPacketCli } from "./cli";

export type { WorkPacketCliOptions, WorkPacketCliResult } from "./cli";
export {
  parseValidateArgs,
  parseValidateRepoArgs,
  parseWorkPacketCliArgs,
  runWorkPacketCli,
} from "./cli";
export {
  WORK_PACKET_CLI_EXIT_CODES,
  type WorkPacketCliExitCode,
} from "./exit-codes";
export {
  WORK_PACKET_REPOSITORY_VALIDATION_JSON_SCHEMA_VERSION,
  WORK_PACKET_VALIDATION_JSON_SCHEMA_VERSION,
  formatWorkPacketRepositoryValidationJsonResult,
  formatWorkPacketRepositoryValidationResult,
  formatWorkPacketRepositoryValidationTextResult,
  formatWorkPacketValidationJsonResult,
  formatWorkPacketValidationResult,
  formatWorkPacketValidationTextResult,
  toWorkPacketRepositoryValidationJsonResult,
  toWorkPacketValidationJsonResult,
  type WorkPacketCliOutputFormat,
  type WorkPacketRepositoryValidationJsonResult,
  type WorkPacketValidationFormatOptions,
  type WorkPacketValidationJsonResult,
} from "./format";
export {
  resolveSafeWorkPacketPath,
  type SafeWorkPacketPathResult,
  type WorkPacketCliSafePathPolicyOptions,
} from "./path-policy";
export {
  WORK_PACKET_DISCOVERY_EXCLUDED_FILENAMES,
  WORK_PACKET_DISCOVERY_ROOT,
  WORK_PACKET_FILENAME_PATTERN,
  discoverRepositoryWorkPackets,
  type DiscoveredWorkPacketFile,
  type WorkPacketRepositoryDiscoveryOptions,
  type WorkPacketRepositoryDiscoveryResult,
} from "./repository-discovery";
export {
  validateRepositoryWorkPackets,
  type WorkPacketRepositoryFileValidationResult,
  type WorkPacketRepositoryValidationOptions,
  type WorkPacketRepositoryValidationResult,
  type WorkPacketRepositoryValidationSummary,
} from "./repository-validation";

const result = await runWorkPacketCli(process.argv.slice(2));

if (result.stdout.length > 0) {
  process.stdout.write(result.stdout);
}

if (result.stderr.length > 0) {
  process.stderr.write(result.stderr);
}

process.exit(result.exitCode);