#!/usr/bin/env bash
set -euo pipefail

ROOT="security"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/src/python/secret_scanner"
  "$ROOT/src/python/dep_auditor"
  "$ROOT/src/python/threat_model"
  "$ROOT/src/go/vault_sync"

  "$ROOT/threat-models"

  "$ROOT/pen-tests"

  "$ROOT/policies"
)

files=(
  "$ROOT/.github/workflows/dependency-scan.yml"
  "$ROOT/.github/workflows/container-scan.yml"
  "$ROOT/.github/workflows/sast.yml"
  "$ROOT/.github/CODEOWNERS"
  "$ROOT/.github/SECURITY.md"

  "$ROOT/.gitignore"
  "$ROOT/.env.example"
  "$ROOT/README.md"
  "$ROOT/PROPRIETARY"
  "$ROOT/pyproject.toml"
  "$ROOT/uv.lock"
  "$ROOT/go.mod"
  "$ROOT/go.sum"
  "$ROOT/Makefile"

  "$ROOT/threat-models/api-gateway.md"
  "$ROOT/threat-models/memory-service.md"
  "$ROOT/threat-models/mcp-proxy.md"

  "$ROOT/pen-tests/README.md"
  "$ROOT/pen-tests/.gitignore"

  "$ROOT/policies/incident-response.md"
  "$ROOT/policies/access-control.md"
  "$ROOT/policies/data-classification.md"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"