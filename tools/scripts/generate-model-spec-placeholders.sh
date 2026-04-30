#!/usr/bin/env bash
set -euo pipefail

ROOT="model-spec"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/supplementary"

  "$ROOT/docs"
)

files=(
  "$ROOT/.github/workflows/validate.yml"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/README.md"
  "$ROOT/LICENSE"
  "$ROOT/CHANGELOG.md"

  "$ROOT/model-spec.md"

  "$ROOT/supplementary/operator-guidelines.md"
  "$ROOT/supplementary/usage-policy.md"
  "$ROOT/supplementary/safety-philosophy.md"

  "$ROOT/docs/faq.md"
  "$ROOT/docs/revision-history.md"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"