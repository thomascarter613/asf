import { validateWorkPacketFile } from "@asf/work-packet-core";
import { WORK_PACKET_CLI_EXIT_CODES } from "./exit-codes";
import {
  formatWorkPacketValidationResult,
  type WorkPacketCliOutputFormat,
} from "./format";

export interface WorkPacketCliResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

interface ValidateArgsParseResult {
  format: WorkPacketCliOutputFormat;
  helpRequested: boolean;
  path?: string;
  error?: string;
}

const ROOT_HELP = `Agentic Software Framework Work Packet CLI

Usage:
  bun run work-packet --help
  bun run work-packet help
  bun run work-packet validate <path> [--format text|json]

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
  bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md --format json
`;

const VALIDATE_HELP = `Validate a work-packet Markdown file.

Usage:
  bun run work-packet validate <path>
  bun run work-packet validate <path> --format text
  bun run work-packet validate <path> --format json
  bun run work-packet validate <path> --format=json
  bun run work-packet validate --help

Arguments:
  path              Path to one work-packet Markdown file.

Options:
  --format text     Print human-readable plain-text output. This is the default.
  --format json     Print machine-readable JSON validation output.
  --format=json     Equivalent to --format json.

Output:
  PASS              The work-packet file is valid in text mode.
  FAIL              The work-packet file is invalid in text mode.
  JSON              A validation result object in json mode.

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

function isWorkPacketCliOutputFormat(
  value: string | undefined,
): value is WorkPacketCliOutputFormat {
  return value === "text" || value === "json";
}

function unsupportedFormatError(value: string): string {
  return `Unsupported output format: ${value}. Expected "text" or "json".`;
}

export function parseValidateArgs(args: string[]): ValidateArgsParseResult {
  if (args.some((arg) => isHelpArg(arg))) {
    return {
      format: "text",
      helpRequested: true,
    };
  }

  const paths: string[] = [];
  let format: WorkPacketCliOutputFormat = "text";

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--format") {
      const value = args[index + 1];

      if (value === undefined || value.trim().length === 0) {
        return {
          format,
          helpRequested: false,
          error: "Missing required value for --format.",
        };
      }

      if (!isWorkPacketCliOutputFormat(value)) {
        return {
          format,
          helpRequested: false,
          error: unsupportedFormatError(value),
        };
      }

      format = value;
      index += 1;
      continue;
    }

    if (arg.startsWith("--format=")) {
      const value = arg.slice("--format=".length);

      if (!isWorkPacketCliOutputFormat(value)) {
        return {
          format,
          helpRequested: false,
          error: unsupportedFormatError(value),
        };
      }

      format = value;
      continue;
    }

    if (arg.startsWith("-")) {
      return {
        format,
        helpRequested: false,
        error: `Unknown option: ${arg}`,
      };
    }

    paths.push(arg);
  }

  if (paths.length === 0) {
    return {
      format,
      helpRequested: false,
      error: "Missing required path argument.",
    };
  }

  if (paths.length > 1) {
    return {
      format,
      helpRequested: false,
      error: "The validate command accepts exactly one path.",
    };
  }

  return {
    format,
    helpRequested: false,
    path: paths[0],
  };
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

    const parsedValidateArgs = parseValidateArgs(rest);

    if (parsedValidateArgs.helpRequested) {
      return success(VALIDATE_HELP);
    }

    if (parsedValidateArgs.error !== undefined) {
      return validateUsageError(parsedValidateArgs.error);
    }

    if (parsedValidateArgs.path === undefined) {
      return validateUsageError("Missing required path argument.");
    }

    const validation = await validateWorkPacketFile(parsedValidateArgs.path);
    const stdout = formatWorkPacketValidationResult(validation, {
      format: parsedValidateArgs.format,
    });

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
