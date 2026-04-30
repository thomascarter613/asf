#!/usr/bin/env bash
set -euo pipefail

ROOT="aic-sdk-python"

dirs=(
  "$ROOT/.github/workflows"
  "$ROOT/.github/ISSUE_TEMPLATE"

  "$ROOT/src/aic/_utils"
  "$ROOT/src/aic/resources/messages"
  "$ROOT/src/aic/resources/batches"
  "$ROOT/src/aic/types/shared"

  "$ROOT/examples"

  "$ROOT/tests/api_resources"
)

files=(
  "$ROOT/.github/workflows/publish.yml"
  "$ROOT/.github/workflows/ci.yml"
  "$ROOT/.github/workflows/release-please.yml"
  "$ROOT/.github/CODEOWNERS"
  "$ROOT/.github/pull_request_template.md"
  "$ROOT/.github/ISSUE_TEMPLATE/bug_report.md"
  "$ROOT/.github/ISSUE_TEMPLATE/feature_request.md"

  "$ROOT/.gitignore"
  "$ROOT/.pre-commit-config.yaml"
  "$ROOT/.python-version"
  "$ROOT/README.md"
  "$ROOT/CHANGELOG.md"
  "$ROOT/LICENSE"
  "$ROOT/CONTRIBUTING.md"
  "$ROOT/pyproject.toml"
  "$ROOT/uv.lock"
  "$ROOT/Makefile"

  "$ROOT/src/aic/__init__.py"
  "$ROOT/src/aic/_client.py"
  "$ROOT/src/aic/_async_client.py"
  "$ROOT/src/aic/_base_client.py"
  "$ROOT/src/aic/_streaming.py"
  "$ROOT/src/aic/_exceptions.py"
  "$ROOT/src/aic/_files.py"
  "$ROOT/src/aic/_models.py"
  "$ROOT/src/aic/_response.py"

  "$ROOT/src/aic/_utils/__init__.py"
  "$ROOT/src/aic/_utils/_headers.py"
  "$ROOT/src/aic/_utils/_retry.py"

  "$ROOT/src/aic/resources/__init__.py"
  "$ROOT/src/aic/resources/messages/__init__.py"
  "$ROOT/src/aic/resources/messages/messages.py"
  "$ROOT/src/aic/resources/models.py"
  "$ROOT/src/aic/resources/batches/__init__.py"
  "$ROOT/src/aic/resources/batches/batches.py"

  "$ROOT/src/aic/types/__init__.py"
  "$ROOT/src/aic/types/message.py"
  "$ROOT/src/aic/types/message_param.py"
  "$ROOT/src/aic/types/model.py"
  "$ROOT/src/aic/types/shared/__init__.py"

  "$ROOT/examples/basic_usage.py"
  "$ROOT/examples/streaming.py"
  "$ROOT/examples/tool_use.py"
  "$ROOT/examples/async_usage.py"

  "$ROOT/tests/conftest.py"
  "$ROOT/tests/api_resources/test_messages.py"
  "$ROOT/tests/api_resources/test_batches.py"
  "$ROOT/tests/test_streaming.py"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"