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

check_absent_file() {
  local path="$1"

  if [[ ! -e "$path" ]]; then
    pass "file is absent as required: $path"
  else
    fail "forbidden file exists: $path"
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

check_not_contains() {
  local path="$1"
  local pattern="$2"
  local label="$3"

  if [[ ! -f "$path" ]]; then
    fail "cannot check absence because file is missing: $path"
    return
  fi

  if grep -q -- "$pattern" "$path"; then
    fail "$label"
  else
    pass "$label"
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

print_header "Package and tooling root files"

check_file "package.json"
check_file "bun.lock"
check_absent_file "pnpm-workspace.yaml"
check_absent_file "pnpm-lock.yaml"

print_header "Package script contract"

check_contains "package.json" '"verify": "bun run verify:repo"' "package.json defines verify through bun"
check_contains "package.json" '"verify:repo": "bash tools/check-repo-contract.sh"' "package.json defines verify:repo through repo contract script"
check_not_contains "package.json" 'pnpm' "package.json does not reference pnpm"

print_header "CI baseline files"

check_dir ".github"
check_dir ".github/workflows"
check_file ".github/workflows/ci.yml"

print_header "CI workflow contract"

check_contains ".github/workflows/ci.yml" '^name: CI$' "CI workflow has expected name"
check_contains ".github/workflows/ci.yml" 'push:' "CI workflow runs on push"
check_contains ".github/workflows/ci.yml" 'pull_request:' "CI workflow runs on pull request"
check_contains ".github/workflows/ci.yml" 'branches:' "CI workflow constrains push branches"
check_contains ".github/workflows/ci.yml" 'main' "CI workflow references main branch"
check_contains ".github/workflows/ci.yml" 'contents: read' "CI workflow uses read-only contents permission"
check_contains ".github/workflows/ci.yml" 'actions/checkout@v4' "CI workflow checks out repository"
check_contains ".github/workflows/ci.yml" 'oven-sh/setup-bun@v2' "CI workflow sets up Bun"
check_contains ".github/workflows/ci.yml" 'bun install --frozen-lockfile' "CI workflow installs with frozen Bun lockfile"
check_contains ".github/workflows/ci.yml" 'bun run verify' "CI workflow runs Bun verification"
check_contains ".github/workflows/ci.yml" 'bash tools/eval/run-evaluations.sh' "CI workflow runs executable evaluation harness"
check_contains ".github/workflows/ci.yml" 'git diff --check' "CI workflow checks whitespace"
check_not_contains ".github/workflows/ci.yml" 'secrets\.' "CI workflow does not reference GitHub secrets"
check_not_contains ".github/workflows/ci.yml" 'deploy' "CI workflow does not deploy"
check_not_contains ".github/workflows/ci.yml" 'publish' "CI workflow does not publish packages"

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
check_dir "tools/eval"
check_dir "tools/eval/cases"
check_dir "tools/eval/results"

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
check_file "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md"

print_header "Allowed ADR gaps"

printf 'INFO: ADR-0007, ADR-0009, ADR-0010, and ADR-0012 are known allowed gaps and are not required by this script.\n'
pass "known ADR gaps are intentionally allowed"

print_header "ADR history and supersession anchors"

check_contains "docs/adr/README.md" 'ADR-0007' "ADR index records ADR-0007 gap"
check_contains "docs/adr/README.md" 'ADR-0009' "ADR index records ADR-0009 gap"
check_contains "docs/adr/README.md" 'ADR-0010' "ADR index records ADR-0010 gap"
check_contains "docs/adr/README.md" 'ADR-0012' "ADR index records ADR-0012 gap"
check_contains "docs/adr/README.md" 'ADR-0013' "ADR index records ADR-0013"
check_contains "docs/adr/README.md" 'ADR-0015' "ADR index records ADR-0015"
check_contains "docs/adr/README.md" 'ADR-0019' "ADR index records ADR-0019"
check_contains "docs/adr/README.md" 'ADR-0023' "ADR index records ADR-0023"
check_contains "docs/adr/README.md" 'superseded by ADR-0023' "ADR index records ADR-0019 supersession by ADR-0023"
check_contains "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md" 'Supersedes: ADR-0019' "ADR-0023 explicitly supersedes ADR-0019"
check_contains "docs/adr/ADR-0023-primary-package-managers-bun-uv-and-cargo.md" 'Bun is the canonical JavaScript/TypeScript package manager' "ADR-0023 makes Bun canonical"

print_header "Planning documents"

check_file "docs/planning/00-baseline-inventory.md"
check_file "docs/planning/01-planning-baseline.md"
check_file "docs/planning/02-adr-normalization-review.md"
check_file "docs/planning/03-architecture-overview-placement-review.md"
check_file "docs/planning/04-baseline-tree-artifact-policy.md"
check_file "docs/planning/05-persistence-adr-overlap-review.md"
check_file "docs/planning/06-implementation-readiness-plan.md"
check_file "docs/planning/07-package-and-tooling-baseline.md"
check_file "docs/planning/08-ci-baseline-planning.md"
check_file "docs/planning/09-executable-evaluation-harness-planning.md"
check_file "docs/planning/10-evaluation-harness-ci-integration-planning.md"

print_header "Domain documents"

check_file "docs/domain/00-domain-model.md"

print_header "Verification documents"

check_file "docs/verification/00-verification-baseline.md"
check_file "docs/verification/01-repo-contract-baseline.md"
check_file "docs/verification/02-evaluation-harness-baseline.md"

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
check_file "docs/work-packets/WP-0015-evaluation-harness-baseline.md"
check_file "docs/work-packets/WP-0016-repo-contract-script-baseline-update.md"
check_file "docs/work-packets/WP-0017-current-state-and-readme-status-update.md"
check_file "docs/work-packets/WP-0018-implementation-readiness-planning.md"
check_file "docs/work-packets/WP-0019-package-and-tooling-baseline.md"
check_file "docs/work-packets/WP-0020-repo-contract-script-readiness-update.md"
check_file "docs/work-packets/WP-0021-package-and-tooling-setup.md"
check_file "docs/work-packets/WP-0022-package-manager-adr-correction.md"
check_file "docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md"
check_file "docs/work-packets/WP-0024-current-state-and-readme-bun-tooling-status-update.md"
check_file "docs/work-packets/WP-0025-ci-baseline-planning.md"
check_file "docs/work-packets/WP-0026-ci-workflow-baseline.md"
check_file "docs/work-packets/WP-0027-current-state-and-readme-ci-status-update.md"
check_file "docs/work-packets/WP-0028-executable-evaluation-harness-planning.md"
check_file "docs/work-packets/WP-0029-executable-evaluation-harness-baseline.md"
check_file "docs/work-packets/WP-0030-evaluation-harness-ci-integration-planning.md"
check_file "docs/work-packets/WP-0031-evaluation-harness-ci-integration.md"

print_header "Executable evaluation harness files"

check_file "tools/eval/README.md"
check_file "tools/eval/run-evaluations.sh"
check_executable "tools/eval/run-evaluations.sh"
check_file "tools/eval/cases/README.md"
check_file "tools/eval/cases/EVAL-0001-active-baseline.json"
check_file "tools/eval/cases/EVAL-0002-adr-gap-preservation.json"
check_file "tools/eval/cases/EVAL-0003-package-manager-boundary.json"
check_file "tools/eval/cases/EVAL-0004-ci-baseline-presence.json"
check_file "tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json"
check_file "tools/eval/results/.gitkeep"

print_header "Executable evaluation harness contract"

check_contains "tools/eval/README.md" '^# Executable Evaluation Harness$' "evaluation harness README has expected heading"
check_contains "tools/eval/README.md" 'Runtime implementation has not started' "evaluation harness README preserves runtime boundary"
check_contains "tools/eval/README.md" 'The executable evaluation harness is not yet part of CI' "evaluation harness README records baseline local-only status"
check_contains "tools/eval/run-evaluations.sh" 'file_exists' "evaluation runner supports file_exists"
check_contains "tools/eval/run-evaluations.sh" 'file_absent' "evaluation runner supports file_absent"
check_contains "tools/eval/run-evaluations.sh" 'file_contains' "evaluation runner supports file_contains"
check_contains "tools/eval/run-evaluations.sh" 'file_not_contains' "evaluation runner supports file_not_contains"
check_contains "tools/eval/run-evaluations.sh" 'command_succeeds' "evaluation runner supports command_succeeds"
check_contains "tools/eval/cases/README.md" '^# Evaluation Cases$' "evaluation cases README has expected heading"
check_contains "tools/eval/cases/EVAL-0001-active-baseline.json" 'The uploaded repository tree is the active baseline' "EVAL-0001 checks active baseline"
check_contains "tools/eval/cases/EVAL-0002-adr-gap-preservation.json" 'ADR-0007' "EVAL-0002 checks ADR-0007 gap"
check_contains "tools/eval/cases/EVAL-0003-package-manager-boundary.json" 'bun.lock' "EVAL-0003 checks bun lockfile"
check_contains "tools/eval/cases/EVAL-0004-ci-baseline-presence.json" 'bun run verify' "EVAL-0004 checks CI Bun verification"
check_contains "tools/eval/cases/EVAL-0005-runtime-not-started-boundary.json" 'Runtime implementation has not started' "EVAL-0005 checks runtime boundary"

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
check_contains "docs/planning/06-implementation-readiness-plan.md" '^# Implementation Readiness Plan$' "implementation readiness plan has expected heading"
check_contains "docs/planning/07-package-and-tooling-baseline.md" '^# Package and Tooling Baseline$' "package and tooling baseline has expected heading"
check_contains "docs/planning/08-ci-baseline-planning.md" '^# CI Baseline Planning$' "CI baseline planning has expected heading"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" '^# Executable Evaluation Harness Planning$' "executable evaluation harness planning has expected heading"
check_contains "docs/planning/10-evaluation-harness-ci-integration-planning.md" '^# Evaluation Harness CI Integration Planning$' "evaluation harness CI integration planning has expected heading"
check_contains "docs/domain/00-domain-model.md" '^# Domain Model$' "domain model has expected heading"
check_contains "docs/verification/00-verification-baseline.md" '^# Verification Baseline$' "verification baseline has expected heading"
check_contains "docs/verification/01-repo-contract-baseline.md" '^# Repo Contract Baseline$' "repo contract baseline has expected heading"
check_contains "docs/verification/02-evaluation-harness-baseline.md" '^# Evaluation Harness Baseline$' "evaluation harness baseline has expected heading"
check_contains "docs/ai/00-current-state.md" '^# Current State$' "current state has expected heading"
check_contains "docs/ai/01-handoff-packet-template.md" '^# Handoff Packet Template$' "handoff packet template has expected heading"
check_contains "docs/ai/02-context-source-rules.md" '^# Context Source Rules$' "context source rules has expected heading"
check_contains "docs/work-packets/README.md" '^# Work Packet Index$' "work packet index has expected heading"
check_contains "docs/work-packets/WORK-PACKET-TEMPLATE.md" '^# WP-0000: Work Packet Title$' "work packet template has expected heading"

print_header "Baseline phrase anchors"

check_contains "README.md" 'The uploaded repository tree is the active baseline' "README records active baseline"
check_contains "README.md" 'Runtime implementation has not started' "README records runtime implementation status"
check_contains "docs/ai/00-current-state.md" 'The uploaded repository tree is the active baseline' "current state records active baseline"
check_contains "docs/ai/00-current-state.md" 'tools/check-repo-contract.sh' "current state records repo contract script"
check_contains "docs/ai/00-current-state.md" 'docs/verification/02-evaluation-harness-baseline.md' "current state records evaluation harness baseline"
check_contains "docs/ai/02-context-source-rules.md" 'Vector retrieval augments repository memory' "context source rules preserve vector retrieval boundary"
check_contains "docs/verification/01-repo-contract-baseline.md" 'Known Allowed Exceptions' "repo contract baseline records known allowed exceptions"
check_contains "docs/planning/03-architecture-overview-placement-review.md" 'Prohibited Automatic Actions' "architecture placement review records prohibited automatic actions"
check_contains "docs/planning/04-baseline-tree-artifact-policy.md" 'Prohibited Automatic Actions' "baseline tree policy records prohibited automatic actions"
check_contains "docs/planning/05-persistence-adr-overlap-review.md" 'Prohibited Automatic Actions' "persistence ADR overlap review records prohibited automatic actions"

print_header "Evaluation harness anchors"

check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Evaluation Categories' "evaluation harness baseline defines categories"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Evaluation Case Structure' "evaluation harness baseline defines case structure"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Expected Outcome' "evaluation harness baseline defines expected outcome"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Observed Outcome' "evaluation harness baseline defines observed outcome"
check_contains "docs/verification/02-evaluation-harness-baseline.md" 'Regression Handling' "evaluation harness baseline defines regression handling"

print_header "Implementation readiness anchors"

check_contains "docs/planning/06-implementation-readiness-plan.md" 'Readiness Gates' "implementation readiness plan defines readiness gates"
check_contains "docs/planning/06-implementation-readiness-plan.md" 'What Is Ready Now' "implementation readiness plan defines ready state"
check_contains "docs/planning/06-implementation-readiness-plan.md" 'What Is Not Ready Yet' "implementation readiness plan defines not-ready state"
check_contains "docs/planning/06-implementation-readiness-plan.md" 'Prohibited Premature Work' "implementation readiness plan defines prohibited premature work"

print_header "Package and tooling anchors"

check_contains "docs/planning/07-package-and-tooling-baseline.md" 'Bun' "package and tooling baseline references Bun"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'bun.lock' "package and tooling baseline references bun.lock"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'pnpm-workspace.yaml' "package and tooling baseline records forbidden pnpm workspace file"
check_contains "docs/planning/07-package-and-tooling-baseline.md" 'pnpm-lock.yaml' "package and tooling baseline records forbidden pnpm lockfile"
check_contains "docs/work-packets/WP-0021-package-and-tooling-setup.md" 'bun.lock' "WP-0021 references bun.lock"
check_contains "docs/work-packets/WP-0021-package-and-tooling-setup.md" 'bun run verify' "WP-0021 references bun run verify"
check_contains "docs/work-packets/WP-0022-package-manager-adr-correction.md" 'ADR-0023' "WP-0022 references ADR-0023"
check_contains "docs/work-packets/WP-0023-repo-contract-script-bun-tooling-update.md" 'Repo Contract Script Bun Tooling Update' "WP-0023 records repo contract Bun update"

print_header "CI planning anchors"

check_contains "docs/planning/08-ci-baseline-planning.md" 'GitHub Actions' "CI baseline planning selects GitHub Actions"
check_contains "docs/planning/08-ci-baseline-planning.md" 'bun install --frozen-lockfile' "CI baseline planning uses frozen Bun install"
check_contains "docs/planning/08-ci-baseline-planning.md" 'bun run verify' "CI baseline planning runs Bun verification"
check_contains "docs/planning/08-ci-baseline-planning.md" 'git diff --check' "CI baseline planning checks whitespace"
check_contains "docs/planning/08-ci-baseline-planning.md" 'Runtime implementation has not started' "CI baseline planning preserves runtime-not-started boundary"
check_contains "docs/work-packets/WP-0025-ci-baseline-planning.md" 'CI Baseline Planning' "WP-0025 records CI baseline planning"
check_contains "docs/work-packets/WP-0026-ci-workflow-baseline.md" 'CI Workflow Baseline' "WP-0026 records CI workflow baseline"

print_header "Executable evaluation planning anchors"

check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'Executable evaluation harness implementation does not exist yet' "executable evaluation planning preserves not-yet-implemented status"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'tools/eval/' "executable evaluation planning defines tools/eval layout"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'bash tools/eval/run-evaluations.sh' "executable evaluation planning defines runner command"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'file_exists' "executable evaluation planning defines file_exists"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'file_absent' "executable evaluation planning defines file_absent"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'file_contains' "executable evaluation planning defines file_contains"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'file_not_contains' "executable evaluation planning defines file_not_contains"
check_contains "docs/planning/09-executable-evaluation-harness-planning.md" 'command_succeeds' "executable evaluation planning defines command_succeeds"
check_contains "docs/work-packets/WP-0028-executable-evaluation-harness-planning.md" 'Executable Evaluation Harness Planning' "WP-0028 records executable evaluation harness planning"
check_contains "docs/work-packets/WP-0029-executable-evaluation-harness-baseline.md" 'Executable Evaluation Harness Baseline' "WP-0029 records executable evaluation harness baseline"

print_header "Evaluation harness CI integration anchors"

check_contains "docs/planning/10-evaluation-harness-ci-integration-planning.md" 'bash tools/eval/run-evaluations.sh' "evaluation harness CI planning defines runner command"
check_contains "docs/planning/10-evaluation-harness-ci-integration-planning.md" 'This document does not modify CI' "evaluation harness CI planning records planning-only boundary"
check_contains "docs/planning/10-evaluation-harness-ci-integration-planning.md" 'Runtime implementation has not started' "evaluation harness CI planning preserves runtime boundary"
check_contains "docs/work-packets/WP-0030-evaluation-harness-ci-integration-planning.md" 'Evaluation Harness CI Integration Planning' "WP-0030 records evaluation harness CI integration planning"
check_contains "docs/work-packets/WP-0031-evaluation-harness-ci-integration.md" 'Evaluation Harness CI Integration' "WP-0031 records evaluation harness CI integration"

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
