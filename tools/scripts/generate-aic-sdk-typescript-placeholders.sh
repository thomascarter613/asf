#!/usr/bin/env bash
set -euo pipefail

ROOT="aic-sdk-typescript"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/src/resources/messages"
  "$ROOT/src/resources/batches"
  "$ROOT/src/types"

  "$ROOT/examples"

  "$ROOT/tests/api-resources"
)

files=(
  "$ROOT/.github/workflows/publish.yml"
  "$ROOT/.github/workflows/ci.yml"
  "$ROOT/.github/workflows/release-please.yml"
  "$ROOT/.github/CODEOWNERS"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/.editorconfig"
  "$ROOT/.nvmrc"
  "$ROOT/.node-version"
  "$ROOT/README.md"
  "$ROOT/CHANGELOG.md"
  "$ROOT/LICENSE"
  "$ROOT/CONTRIBUTING.md"
  "$ROOT/package.json"
  "$ROOT/pnpm-lock.yaml"
  "$ROOT/tsconfig.json"
  "$ROOT/tsconfig.build.json"
  "$ROOT/biome.json"
  "$ROOT/vitest.config.ts"
  "$ROOT/build.config.ts"

  "$ROOT/src/index.ts"
  "$ROOT/src/client.ts"
  "$ROOT/src/async-client.ts"
  "$ROOT/src/core.ts"
  "$ROOT/src/error.ts"
  "$ROOT/src/streaming.ts"
  "$ROOT/src/uploads.ts"
  "$ROOT/src/pagination.ts"
  "$ROOT/src/resource.ts"

  "$ROOT/src/resources/index.ts"
  "$ROOT/src/resources/messages/index.ts"
  "$ROOT/src/resources/messages/messages.ts"
  "$ROOT/src/resources/models.ts"
  "$ROOT/src/resources/batches/index.ts"
  "$ROOT/src/resources/batches/batches.ts"

  "$ROOT/src/types/index.ts"
  "$ROOT/src/types/shared.ts"

  "$ROOT/examples/basic_usage.ts"
  "$ROOT/examples/streaming.ts"
  "$ROOT/examples/tool_use.ts"

  "$ROOT/tests/api-resources/messages.test.ts"
  "$ROOT/tests/streaming.test.ts"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"