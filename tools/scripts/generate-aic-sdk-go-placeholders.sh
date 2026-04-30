#!/usr/bin/env bash
set -euo pipefail

ROOT="aic-sdk-go"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/internal/apijson"
  "$ROOT/internal/apiquery"

  "$ROOT/examples/basic_usage"
  "$ROOT/examples/streaming"
)

files=(
  "$ROOT/.github/workflows/ci.yml"
  "$ROOT/.github/workflows/publish.yml"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/README.md"
  "$ROOT/CHANGELOG.md"
  "$ROOT/LICENSE"
  "$ROOT/go.mod"
  "$ROOT/go.sum"

  "$ROOT/aic.go"
  "$ROOT/client.go"
  "$ROOT/messages.go"
  "$ROOT/models.go"
  "$ROOT/streaming.go"
  "$ROOT/errors.go"
  "$ROOT/pagination.go"
  "$ROOT/options.go"

  "$ROOT/examples/basic_usage/main.go"
  "$ROOT/examples/streaming/main.go"

  "$ROOT/messages_test.go"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"