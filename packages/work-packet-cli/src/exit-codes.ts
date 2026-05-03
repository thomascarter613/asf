export const WORK_PACKET_CLI_EXIT_CODES = {
  SUCCESS: 0,
  VALIDATION_FAILED: 1,
  USAGE_ERROR: 2,
  UNEXPECTED_ERROR: 3,
} as const;

export type WorkPacketCliExitCode =
  (typeof WORK_PACKET_CLI_EXIT_CODES)[keyof typeof WORK_PACKET_CLI_EXIT_CODES];
