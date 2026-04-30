#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

find_python() {
  if command -v python3 >/dev/null 2>&1; then
    printf '%s\n' "python3"
    return 0
  fi

  if command -v python >/dev/null 2>&1; then
    printf '%s\n' "python"
    return 0
  fi

  printf '%s\n' "ERROR: Neither python3 nor python was found on PATH." >&2
  return 1
}

PYTHON_BIN="$(find_python)"

run_required() {
  local label="$1"
  shift

  printf '\n==> %s\n' "$label"
  "$@"
}

run_optional_python_script() {
  local script_path="$1"
  local label="$2"

  if [[ -f "$script_path" ]]; then
    run_required "$label" "$PYTHON_BIN" "$script_path"
  else
    printf '\n==> %s\n' "$label"
    printf 'Skipped: %s does not exist yet.\n' "$script_path"
  fi
}

printf 'Agentic Software Foundry local verification\n'
printf 'Repository root: %s\n' "$ROOT_DIR"

run_required \
  "Repo contract checker" \
  "$PYTHON_BIN" \
  "evals/repo-contracts/check-repo-contracts.py"

run_optional_python_script \
  "tools/scripts/check-file-hygiene.py" \
  "File hygiene checker"

run_optional_python_script \
  "tools/scripts/check-frontmatter.py" \
  "Markdown frontmatter checker"

run_optional_python_script \
  "tools/scripts/check-jsonl.py" \
  "JSONL event checker"

run_optional_python_script \
  "tools/scripts/check-local-state.py" \
  "Local state checker"

run_optional_python_script \
  "tools/scripts/check-markdown-sections.py" \
  "Markdown required sections checker"

printf '\nAll local verification checks passed.\n'
