import { validateWorkPacketFile } from "@asf/work-packet-core";
import { WORK_PACKET_CLI_EXIT_CODES } from "./exit-codes";
import { formatWorkPacketValidationResult } from "./format";

export interface WorkPacketCliResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

const ROOT_HELP = `Agentic Software Framework Work Packet CLI

Usage:
  bun run work-packet --help
  bun run work-packet help
  bun run work-packet validate <path>

Commands:
  validate <path>   Validate one work-packet Markdown file.
  help              Show this help text.

Exit Codes:
  0  SUCCESS
  1  VALIDATION_FAILED
  2  USAGE_ERROR
  3  UNEXPECTED_ERROR

Examples:
  bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
`;

const VALIDATE_HELP = `Validate a work-packet Markdown file.

Usage:
  bun run work-packet validate <path>
  bun run work-packet validate --help

Arguments:
  path              Path to one work-packet Markdown file.

Output:
  PASS              The work-packet file is valid.
  FAIL              The work-packet file is invalid.

Exit Codes:
  0  SUCCESS
  1  VALIDATION_FAILED
  2  USAGE_ERROR
  3  UNEXPECTED_ERROR
`;

function success(stdout: string): WorkPacketCliResult {
  return {
    exitCode: WORK_PACKET_CLI_EXIT_CODES.SUCCESS,
    stdout,
    stderr: "",
  };
}

function usageError(message: string): WorkPacketCliResult {
  return {
    exitCode: WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR,
    stdout: "",
    stderr: `${message}\n\n${ROOT_HELP}`,
  };
}

function validateUsageError(message: string): WorkPacketCliResult {
  return {
    exitCode: WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR,
    stdout: "",
    stderr: `${message}\n\n${VALIDATE_HELP}`,
  };
}

function unexpectedError(error: unknown): WorkPacketCliResult {
  const message = error instanceof Error ? error.message : String(error);

  return {
    exitCode: WORK_PACKET_CLI_EXIT_CODES.UNEXPECTED_ERROR,
    stdout: "",
    stderr: `Unexpected error: ${message}\n`,
  };
}

export function parseWorkPacketCliArgs(args: string[]): {
  command: string;
  rest: string[];
} {
  const [command = "", ...rest] = args;

  return {
    command,
    rest,
  };
}

function isHelpArg(value: string | undefined): boolean {
  return value === "--help" || value === "-h" || value === "help";
}

export async function runWorkPacketCli(
  args: string[],
): Promise<WorkPacketCliResult> {
  try {
    const { command, rest } = parseWorkPacketCliArgs(args);

    if (command === "" || isHelpArg(command)) {
      return success(ROOT_HELP);
    }

    if (command !== "validate") {
      return usageError(`Unknown command: ${command}`);
    }

    const [path, ...extra] = rest;

    if (isHelpArg(path)) {
      return success(VALIDATE_HELP);
    }

    if (path === undefined || path.trim().length === 0) {
      return validateUsageError("Missing required path argument.");
    }

    if (extra.length > 0) {
      return validateUsageError("The validate command accepts exactly one path.");
    }

    const validation = await validateWorkPacketFile(path);
    const stdout = formatWorkPacketValidationResult(validation);

    return {
      exitCode: validation.valid
        ? WORK_PACKET_CLI_EXIT_CODES.SUCCESS
        : WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED,
      stdout,
      stderr: "",
    };
  } catch (error) {
    return unexpectedError(error);
  }
}
