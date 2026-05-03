import { realpath } from "node:fs/promises";
import { isAbsolute, relative, resolve } from "node:path";

export interface WorkPacketCliSafePathPolicyOptions {
  cwd?: string;
}

export interface SafeWorkPacketPathResult {
  ok: boolean;
  inputPath: string;
  displayPath: string;
  resolvedPath?: string;
  error?: string;
}

function isPathInsideRoot(root: string, target: string): boolean {
  const relativePath = relative(root, target);

  return (
    relativePath === "" ||
    (!relativePath.startsWith("..") && !isAbsolute(relativePath))
  );
}

async function realpathIfExists(path: string): Promise<string | undefined> {
  try {
    return await realpath(path);
  } catch {
    return undefined;
  }
}

export async function resolveSafeWorkPacketPath(
  inputPath: string,
  options: WorkPacketCliSafePathPolicyOptions = {},
): Promise<SafeWorkPacketPathResult> {
  const displayPath = inputPath.trim();

  if (displayPath.length === 0) {
    return {
      ok: false,
      inputPath,
      displayPath,
      error: "Path must be a non-empty string.",
    };
  }

  if (displayPath.includes("\0")) {
    return {
      ok: false,
      inputPath,
      displayPath,
      error: "Path must not contain NUL bytes.",
    };
  }

  const root = await realpath(options.cwd ?? process.cwd());
  const lexicallyResolvedPath = resolve(root, displayPath);

  if (!isPathInsideRoot(root, lexicallyResolvedPath)) {
    return {
      ok: false,
      inputPath,
      displayPath,
      error:
        "Path must resolve inside the current working directory. Directory traversal outside the working directory is not allowed.",
    };
  }

  const realResolvedPath = await realpathIfExists(lexicallyResolvedPath);

  if (
    realResolvedPath !== undefined &&
    !isPathInsideRoot(root, realResolvedPath)
  ) {
    return {
      ok: false,
      inputPath,
      displayPath,
      error:
        "Path must not resolve outside the current working directory. Symlink escapes are not allowed.",
    };
  }

  return {
    ok: true,
    inputPath,
    displayPath,
    resolvedPath: realResolvedPath ?? lexicallyResolvedPath,
  };
}
