#!/usr/bin/env bash
set -euo pipefail

ROOT="aic-quickstarts"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/computer-use-demo/src"
  "$ROOT/customer-support-agent/src"
  "$ROOT/tool-use-visualizer/src"
  "$ROOT/multimodal-demo/src"
)

files=(
  "$ROOT/.github/workflows/ci.yml"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/README.md"
  "$ROOT/LICENSE"

  "$ROOT/computer-use-demo/README.md"
  "$ROOT/computer-use-demo/pyproject.toml"
  "$ROOT/computer-use-demo/Dockerfile"
  "$ROOT/computer-use-demo/src/.gitkeep"

  "$ROOT/customer-support-agent/README.md"
  "$ROOT/customer-support-agent/package.json"
  "$ROOT/customer-support-agent/src/.gitkeep"

  "$ROOT/tool-use-visualizer/README.md"
  "$ROOT/tool-use-visualizer/src/.gitkeep"

  "$ROOT/multimodal-demo/README.md"
  "$ROOT/multimodal-demo/src/.gitkeep"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"