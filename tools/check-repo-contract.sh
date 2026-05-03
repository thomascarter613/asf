#!/usr/bin/env bash

set -Eeuo pipefail

failures=0
checks=0

print_header() {
  printf '\n==> %s\n' "$1"
}

pass() {
  checks=$((checks + 1))
  printf 'PASS: %s\n' "$1"
}

fail() {
  checks=$((checks + 1))
  failures=$((failures + 1))
  printf 'FAIL: %s\n' "$1"
}

check_file() {
  local path="$1"

  if [[ -f "$path" ]]; then
    pass "file exists: $path"
  else
    fail "missing file: $path"
  fi
}

check_dir() {
  local path="$1"

  if [[ -d "$path" ]]; then
    pass "directory exists: $path"
  else
    fail "missing directory: $path"
  fi
}

check_executable() {
  local path="$1"

  if [[ -x "$path" ]]; then
    pass "file is executable: $path"
  else
    fail "file is not executable: $path"
  fi
}

check_contains() {
  local path="$1"
  local pattern="$2"
  local label="$3"

  if [[ ! -f "$path" ]]; then
    fail "cannot check content because file is missing: $path"
    return
  fi

  if grep -q -- "$pattern" "$path"; then
    pass "$label"
  else
    fail "$label"
  fi
}

check_git_diff_whitespace() {
  if git diff --check; then
    pass "git diff --check"
  else
    fail "git diff --check"
  fi
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

require_repo_root

printf 'Agentic Software Framework repo contract check\n'
printf 'This script is read-only and does not modify repository files.\n'

print_header "Root files"

check_file "CODEOWNERS"
check_file "CONTRIBUTING.md"
check_file "LICENSE"
check_file "SECURITY.md"
check_file "README.md"
check_file "tree"

print_header "Required directories"

check_dir "docs"
check_dir "docs/adr"
check_dir "docs/architecture"
check_dir "docs/domain"
check_dir "docs/planning"
check_dir "docs/product"
check_dir "docs/verification"
check_dir "docs/work-packets"
check_dir "docs/ai"
check_dir "tools"

print_header "Product documents"

check_file "docs/product/00-product-inception-brief.md"
check_file "docs/product/01-product-charter.md"
check_file "docs/product/02-stakeholder-and-user-model.md"
check_file "docs/product/03-software-requirements-specification.md"
check_file "docs/product/00-architecture-overview.md"

print_header "Architecture documents"

check_file "docs/architecture/00-architecture-overview.md"

print_header "ADR support files"

check_file "docs/adr/README.md"
check_file "docs/adr/ADR-TEMPLATE.md"

print_header "ADR files"

check_file "docs/adr/ADR-0001-adopt-architecture-decision-records-as-a-first-class-engineering-artifact.md"
check_file "docs/adr/ADR-0002-repository-based-context-continuity.md"
check_file "docs/adr/ADR-0003-repository-topology-bounded-monorepos-over-monolith-or-full-fragmentation.md"
check_file "docs/adr/ADR-0004-access-tier-model-four-tier-repository-classification.md"
check_file "docs/adr/ADR-0005-clean-room-architecture-and-pattern-adoption.md"
check_file "docs/adr/ADR-0006-canonical-repository-plus-vector-retrieval.md"
check_file "docs/adr/ADR-0008-foundry-control-plane.md"
check_file "docs/adr/ADR-0011-dependency-pinning-policy-exact-lockfiles-committed-for-all-ecosystems.md"
check_file "docs/adr/ADR-0013-polyglot-persistence-and-qdrant-retrieval.md"
check_file "docs/adr/ADR-0014-polyglot-language-strategy-python-for-ml-rust-for-serving-typescript-for-product.md"
check_file "docs/adr/ADR-0015-polyglot-persistence-and-qdrant-retrieval.md"
check_file "docs/adr/ADR-0016-worktree-based-parallel-execution.md"
check_file "docs/adr/ADR-0017-foundry-event-bus-and-notification-router.md"
check_file "docs/adr/ADR-0018-work-packet-lifecycle.md"
check_file "docs/adr/ADR-0019-primary-package-managers-uv-cargo-and-pnpm.md"
check_file "docs/adr/ADR-0020-directive-compiler-and-work-protocols.md"
check_file "docs/adr/ADR-0021-repo-contract-testing.md"
check_file "docs/adr/ADR-0022-evaluation-harness-for-context-continuity-and-agent-execution.md"

print_header "Allowed ADR gaps"

printf 'INFO: ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are known allowed gaps and are not required by this script.\n'
pass "known ADR gaps are intentionally allowed"

print_header "Planning documents"

check_file "docs/planning/00-baseline-inventory.md"
check_file "docs/planning/01-planning-baseline.md"
check_file "docs/planning/02-adr-normalization-review.md"
check_file "docs/planning/03-architecture-overview-placement-review.md"
check_file "docs/planning/04-baseline-tree-artifact-policy.md"
check_file "docs/planning/05-persistence-adr-overlap-review.md"

print_header "Domain documents"

check_file "docs/domain/00-domain-model.md"

print_header "Verification documents"

check_file "docs/verification/00-verification-baseline.md"
check_file "docs/verification/01-repo-contract-baseline.md"

print_header "AI and context-continuity documents"

check_file "docs/ai/00-current-state.md"
check_file "docs/ai/01-handoff-packet-template.md"
check_file "docs/ai/02-context-source-rules.md"

print_header "Work packet governance files"

check_file "docs/work-packets/README.md"
check_file "docs/work-packets/WORK-PACKET-TEMPLATE.md"

print_header "Work packet files"

check_file "docs/work-packets/WP-0001-work-packet-template.md"
check_file "docs/work-packets/WP-0002-baseline-inventory-and-consistency-review.md"
check_file "docs/work-packets/WP-0003-domain-model-baseline.md"
check_file "docs/work-packets/WP-0004-planning-baseline.md"
check_file "docs/work-packets/WP-0005-repository-verification-baseline.md"
check_file "docs/work-packets/WP-0006-adr-index-normalization-review.md"
check_file "docs/work-packets/WP-0007-repo-contract-testing-baseline.md"
check_file "docs/work-packets/WP-0008-context-continuity-baseline.md"
check_file "docs/work-packets/WP-0009-root-readme-baseline.md"
check_file "docs/work-packets/WP-0010-architecture-overview-placement-review.md"
check_file "docs/work-packets/WP-0011-baseline-tree-artifact-policy.md"
check_file "docs/work-packets/WP-0012-adr-index-gap-and-status-annotation.md"
check_file "docs/work-packets/WP-0013-persistence-adr-overlap-review.md"
check_file "docs/work-packets/WP-0014-executable-repo-contract-script.md"

print_header "Script self-check"

check_file "tools/check-repo-contract.sh"
check_executable "tools/check-repo-contract.sh"

print_header "Heading anchors"

check_contains "README.md" '^# Agentic Software Framework$' "README has project heading"
check_contains "docs/adr/README.md" '^# ADR Index$' "ADR index has expected heading"
check_contains "docs/planning/00-baseline-inventory.md" '^# Baseline Inventory$' "baseline inventory has expected heading"
check_contains "docs/planning/01-planning-baseline.md" '^# Planning Baseline$' "planning baseline has expected heading"
check_contains "docs/planning/02-adr-normalization-review.md" '^# ADR Normalization Review$' "ADR normalization review has expected heading"
check_contains "docs/planning/03-architecture-overview-placement-review.md" '^# Architecture Overview Placement Review$' "architecture placement review has expected heading"
check_contains "docs/planning/04-baseline-tree-artifact-policy.md" '^# Baseline Tree Artifact Policy$' "baseline tree artifact policy has expected heading"
check_contains "docs/planning/05-persistence-adr-overlap-review.md" '^# Persistence ADR Overlap Review$' "persistence ADR overlap review has expected heading"
check_contains "docs/domain/00-domain-model.md" '^# Domain Model$' "domain model has expected heading"
check_contains "docs/verification/00-verification-baseline.md" '^# Verification Baseline$' "verification baseline has expected heading"
check_contains "docs/verification/01-repo-contract-baseline.md" '^# Repo Contract Baseline$' "repo contract baseline has expected heading"
check_contains "docs/ai/00-current-state.md" '^# Current State$' "current state has expected heading"
check_contains "docs/ai/01-handoff-packet-template.md" '^# Handoff Packet Template$' "handoff packet template has expected heading"
check_contains "docs/ai/02-context-source-rules.md" '^# Context Source Rules$' "context source rules has expected heading"
check_contains "docs/work-packets/README.md" '^# Work Packet Index$' "work packet index has expected heading"
check_contains "docs/work-packets/WORK-PACKET-TEMPLATE.md" '^# WP-0000: Work Packet Title$' "work packet template has expected heading"

print_header "Baseline phrase anchors"

check_contains "README.md" 'The uploaded repository tree is the active baseline' "README records active baseline"
check_contains "README.md" 'Runtime implementation has not started' "README records runtime implementation status"
check_contains "docs/ai/00-current-state.md" 'The uploaded repository tree is the active baseline' "current state records active baseline"
check_contains "docs/ai/02-context-source-rules.md" 'Vector retrieval augments repository memory' "context source rules preserve vector retrieval boundary"
check_contains "docs/adr/README.md" 'ADR-0007' "ADR index records ADR-0007 gap"
check_contains "docs/adr/README.md" 'ADR-0009' "ADR index records ADR-0009 gap"
check_contains "docs/adr/README.md" 'ADR-0010' "ADR index records ADR-0010 gap"
check_contains "docs/adr/README.md" 'ADR-0012' "ADR index records ADR-0012 gap"
check_contains "docs/adr/README.md" 'ADR-0013' "ADR index records ADR-0013"
check_contains "docs/adr/README.md" 'ADR-0015' "ADR index records ADR-0015"
check_contains "docs/verification/01-repo-contract-baseline.md" 'Known Allowed Exceptions' "repo contract baseline records known allowed exceptions"
check_contains "docs/planning/03-architecture-overview-placement-review.md" 'Prohibited Automatic Actions' "architecture placement review records prohibited automatic actions"
check_contains "docs/planning/04-baseline-tree-artifact-policy.md" 'Prohibited Automatic Actions' "baseline tree policy records prohibited automatic actions"
check_contains "docs/planning/05-persistence-adr-overlap-review.md" 'Prohibited Automatic Actions' "persistence ADR overlap review records prohibited automatic actions"

print_header "Whitespace safety"

check_git_diff_whitespace

print_header "Summary"

printf 'Checks run: %s\n' "$checks"
printf 'Failures: %s\n' "$failures"

if [[ "$failures" -eq 0 ]]; then
  printf 'Repo contract checks pass.\n'
  exit 0
fi

printf 'Repo contract checks failed.\n'
exit 1