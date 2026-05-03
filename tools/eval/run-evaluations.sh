#!/usr/bin/env bash

set -Eeuo pipefail

checks_run=0
cases_run=0
passed_cases=0
failed_cases=0
blocked_cases=0
skipped_cases=0
limited_cases=0
not_run_cases=0
required_failures=0

print_header() {
  printf '\n==> %s\n' "$1"
}

print_check_pass() {
  printf '  PASS: %s\n' "$1"
}

print_check_fail() {
  printf '  FAIL: %s\n' "$1"
}

json_file_string_value() {
  local file="$1"
  local key="$2"

  sed -nE "s/.*\"${key}\"[[:space:]]*:[[:space:]]*\"([^\"]*)\".*/\1/p" "$file" | head -n 1
}

json_file_bool_value() {
  local file="$1"
  local key="$2"

  sed -nE "s/.*\"${key}\"[[:space:]]*:[[:space:]]*(true|false).*/\1/p" "$file" | head -n 1
}

json_line_string_value() {
  local line="$1"
  local key="$2"

  printf '%s\n' "$line" | sed -nE "s/.*\"${key}\"[[:space:]]*:[[:space:]]*\"([^\"]*)\".*/\1/p"
}

require_repo_root() {
  if ! git rev-parse --show-toplevel >/dev/null 2>&1; then
    printf 'FAIL: this script must be run inside a Git repository.\n'
    exit 1
  fi

  local repo_root
  repo_root="$(git rev-parse --show-toplevel)"
  cd "$repo_root"
}

run_check() {
  local check_line="$1"

  local check_type
  local path
  local pattern
  local command

  check_type="$(json_line_string_value "$check_line" "type")"
  path="$(json_line_string_value "$check_line" "path")"
  pattern="$(json_line_string_value "$check_line" "pattern")"
  command="$(json_line_string_value "$check_line" "command")"

  checks_run=$((checks_run + 1))

  case "$check_type" in
    file_exists)
      if [[ -f "$path" ]]; then
        print_check_pass "file exists: $path"
        return 0
      fi

      print_check_fail "missing file: $path"
      return 1
      ;;

    file_absent)
      if [[ ! -e "$path" ]]; then
        print_check_pass "file absent as required: $path"
        return 0
      fi

      print_check_fail "forbidden path exists: $path"
      return 1
      ;;

    file_contains)
      if [[ ! -f "$path" ]]; then
        print_check_fail "cannot check content because file is missing: $path"
        return 1
      fi

      if grep -Fq -- "$pattern" "$path"; then
        print_check_pass "$path contains required pattern: $pattern"
        return 0
      fi

      print_check_fail "$path is missing required pattern: $pattern"
      return 1
      ;;

    file_not_contains)
      if [[ ! -f "$path" ]]; then
        print_check_fail "cannot check forbidden content because file is missing: $path"
        return 1
      fi

      if grep -Fq -- "$pattern" "$path"; then
        print_check_fail "$path contains forbidden pattern: $pattern"
        return 1
      fi

      print_check_pass "$path does not contain forbidden pattern: $pattern"
      return 0
      ;;

    command_succeeds)
      if [[ -z "$command" ]]; then
        print_check_fail "command_succeeds check is missing command"
        return 1
      fi

      if bash -c "$command"; then
        print_check_pass "command succeeds: $command"
        return 0
      fi

      print_check_fail "command failed: $command"
      return 1
      ;;

    "")
      print_check_fail "check is missing type"
      return 1
      ;;

    *)
      print_check_fail "unsupported check type: $check_type"
      return 1
      ;;
  esac
}

run_case() {
  local case_file="$1"

  local id
  local title
  local category
  local status
  local required

  id="$(json_file_string_value "$case_file" "id")"
  title="$(json_file_string_value "$case_file" "title")"
  category="$(json_file_string_value "$case_file" "category")"
  status="$(json_file_string_value "$case_file" "status")"
  required="$(json_file_bool_value "$case_file" "required")"

  if [[ -z "$id" ]]; then
    id="$(basename "$case_file")"
  fi

  if [[ -z "$title" ]]; then
    title="Untitled evaluation case"
  fi

  if [[ -z "$category" ]]; then
    category="uncategorized"
  fi

  if [[ -z "$status" ]]; then
    status="active"
  fi

  if [[ -z "$required" ]]; then
    required="true"
  fi

  print_header "${id} — ${title}"
  printf 'Category: %s\n' "$category"
  printf 'Status: %s\n' "$status"
  printf 'Required: %s\n' "$required"

  if [[ "$status" != "active" ]]; then
    printf 'Result: skipped\n'
    skipped_cases=$((skipped_cases + 1))
    return 0
  fi

  local check_count=0
  local case_failed=0

  while IFS= read -r check_line; do
    if [[ -z "$check_line" ]]; then
      continue
    fi

    check_count=$((check_count + 1))

    if ! run_check "$check_line"; then
      case_failed=1
    fi
  done < <(grep -E '"type"[[:space:]]*:' "$case_file" || true)

  if [[ "$check_count" -eq 0 ]]; then
    printf 'Result: blocked\n'
    printf 'Reason: no checks found in case file.\n'
    blocked_cases=$((blocked_cases + 1))

    if [[ "$required" == "true" ]]; then
      required_failures=$((required_failures + 1))
    fi

    return 1
  fi

  cases_run=$((cases_run + 1))

  if [[ "$case_failed" -eq 0 ]]; then
    printf 'Result: passed\n'
    passed_cases=$((passed_cases + 1))
    return 0
  fi

  printf 'Result: failed\n'
  failed_cases=$((failed_cases + 1))

  if [[ "$required" == "true" ]]; then
    required_failures=$((required_failures + 1))
  fi

  return 1
}

main() {
  require_repo_root

  local cases_dir="tools/eval/cases"

  printf 'Agentic Software Framework executable evaluation harness\n'
  printf 'This runner is read-only by default and does not modify repository files.\n'

  if [[ ! -d "$cases_dir" ]]; then
    printf 'FAIL: missing evaluation cases directory: %s\n' "$cases_dir"
    exit 1
  fi

  shopt -s nullglob

  local case_files=("$cases_dir"/*.json)

  if [[ "${#case_files[@]}" -eq 0 ]]; then
    printf 'FAIL: no evaluation case files found in %s\n' "$cases_dir"
    exit 1
  fi

  local case_file

  for case_file in "${case_files[@]}"; do
    if ! run_case "$case_file"; then
      :
    fi
  done

  print_header "Summary"

  printf 'Cases discovered: %s\n' "${#case_files[@]}"
  printf 'Cases run: %s\n' "$cases_run"
  printf 'Checks run: %s\n' "$checks_run"
  printf 'Passed cases: %s\n' "$passed_cases"
  printf 'Failed cases: %s\n' "$failed_cases"
  printf 'Blocked cases: %s\n' "$blocked_cases"
  printf 'Skipped cases: %s\n' "$skipped_cases"
  printf 'Limited cases: %s\n' "$limited_cases"
  printf 'Not-run cases: %s\n' "$not_run_cases"
  printf 'Required failures: %s\n' "$required_failures"

  if [[ "$required_failures" -eq 0 ]]; then
    printf 'Executable evaluation harness checks pass.\n'
    exit 0
  fi

  printf 'Executable evaluation harness checks failed.\n'
  exit 1
}

main "$@"