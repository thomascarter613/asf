import { validateWorkPacketFile } from "@asf/work-packet-core";
import { WORK_PACKET_CLI_EXIT_CODES } from "./exit-codes";
import {
  formatWorkPacketRepositoryValidationResult,
  formatWorkPacketValidationResult,
  type WorkPacketCliOutputFormat,
} from "./format";
import { resolveSafeWorkPacketPath } from "./path-policy";
import { validateRepositoryWorkPackets } from "./repository-validation";

export interface WorkPacketCliResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

export interface WorkPacketCliOptions {
  cwd?: string;
}

interface ValidateArgsParseResult {
  format: WorkPacketCliOutputFormat;
  helpRequested: boolean;
  path?: string;
  error?: string;
}

interface ValidateRepoArgsParseResult {
  format: WorkPacketCliOutputFormat;
  helpRequested: boolean;
  error?: string;
}

const ROOT_HELP = `Agentic Software Framework Work Packet CLI

Usage:
  bun run work-packet --help
  bun run work-packet help
  bun run work-packet validate <path> [--format text|json]
  bun run work-packet validate-repo [--format text|json]

Commands:
  validate <path>   Validate one work-packet Markdown file.
  validate-repo     Discover and validate repository work-packet files.
  help              Show this help text.

Exit Codes:
  0  SUCCESS
  1  VALIDATION_FAILED
  2  USAGE_ERROR
  3  UNEXPECTED_ERROR

Examples:
  bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md
  bun run work-packet validate docs/work-packets/WP-0043-work-packet-file-loading-runtime-baseline.md --format json
  bun run work-packet validate-repo
  bun run work-packet validate-repo --format json
`;

const VALIDATE_HELP = `Validate a work-packet Markdown file.

Usage:
  bun run work-packet validate <path>
  bun run work-packet validate <path> --format text
  bun run work-packet validate <path> --format json
  bun run work-packet validate <path> --format=json
  bun run work-packet validate --help

Arguments:
  path              Path to one work-packet Markdown file. The path must resolve inside the current working directory.

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

const VALIDATE_REPO_HELP = `Validate repository work-packet files.

Usage:
  bun run work-packet validate-repo
  bun run work-packet validate-repo --format text
  bun run work-packet validate-repo --format json
  bun run work-packet validate-repo --format=json
  bun run work-packet validate-repo --help

Discovery:
  docs/work-packets/ direct children matching WP-0000-descriptive-slug.md

Options:
  --format text     Print human-readable plain-text aggregate output. This is the default.
  --format json     Print machine-readable JSON aggregate validation output.
  --format=json     Equivalent to --format json.

Output:
  PASS              All discovered work-packet files are valid and no discovery errors exist.
  FAIL              One or more discovered files or discovery rules failed.
  JSON              A repository validation result object in json mode.

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

function validateRepoUsageError(message: string): WorkPacketCliResult {
  return {
    exitCode: WORK_PACKET_CLI_EXIT_CODES.USAGE_ERROR,
    stdout: "",
    stderr: `${message}\n\n${VALIDATE_REPO_HELP}`,
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

function parseFormatOption(args: string[]): {
  format: WorkPacketCliOutputFormat;
  rest: string[];
  error?: string;
} {
  const rest: string[] = [];
  let format: WorkPacketCliOutputFormat = "text";

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--format") {
      const value = args[index + 1];

      if (value === undefined || value.trim().length === 0) {
        return {
          format,
          rest,
          error: "Missing required value for --format.",
        };
      }

      if (!isWorkPacketCliOutputFormat(value)) {
        return {
          format,
          rest,
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
          rest,
          error: unsupportedFormatError(value),
        };
      }

      format = value;
      continue;
    }

    if (arg.startsWith("-")) {
      return {
        format,
        rest,
        error: `Unknown option: ${arg}`,
      };
    }

    rest.push(arg);
  }

  return {
    format,
    rest,
  };
}

export function parseValidateArgs(args: string[]): ValidateArgsParseResult {
  if (args.some((arg) => isHelpArg(arg))) {
    return {
      format: "text",
      helpRequested: true,
    };
  }

  const parsed = parseFormatOption(args);

  if (parsed.error !== undefined) {
    return {
      format: parsed.format,
      helpRequested: false,
      error: parsed.error,
    };
  }

  if (parsed.rest.length === 0) {
    return {
      format: parsed.format,
      helpRequested: false,
      error: "Missing required path argument.",
    };
  }

  if (parsed.rest.length > 1) {
    return {
      format: parsed.format,
      helpRequested: false,
      error: "The validate command accepts exactly one path.",
    };
  }

  return {
    format: parsed.format,
    helpRequested: false,
    path: parsed.rest[0],
  };
}

export function parseValidateRepoArgs(
  args: string[],
): ValidateRepoArgsParseResult {
  if (args.some((arg) => isHelpArg(arg))) {
    return {
      format: "text",
      helpRequested: true,
    };
  }

  const parsed = parseFormatOption(args);

  if (parsed.error !== undefined) {
    return {
      format: parsed.format,
      helpRequested: false,
      error: parsed.error,
    };
  }

  if (parsed.rest.length > 0) {
    return {
      format: parsed.format,
      helpRequested: false,
      error: "The validate-repo command does not accept path arguments.",
    };
  }

  return {
    format: parsed.format,
    helpRequested: false,
  };
}

async function runValidateCommand(
  args: string[],
  options: WorkPacketCliOptions,
): Promise<WorkPacketCliResult> {
  const parsedValidateArgs = parseValidateArgs(args);

  if (parsedValidateArgs.helpRequested) {
    return success(VALIDATE_HELP);
  }

  if (parsedValidateArgs.error !== undefined) {
    return validateUsageError(parsedValidateArgs.error);
  }

  if (parsedValidateArgs.path === undefined) {
    return validateUsageError("Missing required path argument.");
  }

  const safePath = await resolveSafeWorkPacketPath(parsedValidateArgs.path, {
    cwd: options.cwd,
  });

  if (!safePath.ok || safePath.resolvedPath === undefined) {
    return validateUsageError(safePath.error ?? "Unsafe path rejected.");
  }

  const validation = await validateWorkPacketFile(safePath.resolvedPath);
  const stdout = formatWorkPacketValidationResult(
    {
      ...validation,
      path: safePath.displayPath,
    },
    {
      format: parsedValidateArgs.format,
    },
  );

  return {
    exitCode: validation.valid
      ? WORK_PACKET_CLI_EXIT_CODES.SUCCESS
      : WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED,
    stdout,
    stderr: "",
  };
}

async function runValidateRepoCommand(
  args: string[],
  options: WorkPacketCliOptions,
): Promise<WorkPacketCliResult> {
  const parsedValidateRepoArgs = parseValidateRepoArgs(args);

  if (parsedValidateRepoArgs.helpRequested) {
    return success(VALIDATE_REPO_HELP);
  }

  if (parsedValidateRepoArgs.error !== undefined) {
    return validateRepoUsageError(parsedValidateRepoArgs.error);
  }

  const validation = await validateRepositoryWorkPackets({
    cwd: options.cwd,
  });

  if (!validation.discoveryRootFound) {
    return validateRepoUsageError(
      "Missing work-packet discovery root: docs/work-packets/.",
    );
  }

  const stdout = formatWorkPacketRepositoryValidationResult(validation, {
    format: parsedValidateRepoArgs.format,
  });

  return {
    exitCode: validation.valid
      ? WORK_PACKET_CLI_EXIT_CODES.SUCCESS
      : WORK_PACKET_CLI_EXIT_CODES.VALIDATION_FAILED,
    stdout,
    stderr: "",
  };
}

export async function runWorkPacketCli(
  args: string[],
  options: WorkPacketCliOptions = {},
): Promise<WorkPacketCliResult> {
  try {
    const { command, rest } = parseWorkPacketCliArgs(args);

    if (command === "" || isHelpArg(command)) {
      return success(ROOT_HELP);
    }

    if (command === "validate") {
      return await runValidateCommand(rest, options);
    }

    if (command === "validate-repo") {
      return await runValidateRepoCommand(rest, options);
    }

    return usageError(`Unknown command: ${command}`);
  } catch (error) {
    return unexpectedError(error);
  }
}