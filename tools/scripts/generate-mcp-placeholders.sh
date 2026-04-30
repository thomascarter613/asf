## Placeholder Scaffold Generator for `mcp/`

set -euo pipefail

ROOT="mcp"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/spec/server-features"
  "$ROOT/spec/client-features"
  "$ROOT/spec/schema"

  "$ROOT/sdk/typescript/src/client"
  "$ROOT/sdk/typescript/src/server"
  "$ROOT/sdk/typescript/tests"

  "$ROOT/sdk/python/src/mcp/server"
  "$ROOT/sdk/python/src/mcp/client"

  "$ROOT/examples/servers/filesystem"
  "$ROOT/examples/servers/github"
  "$ROOT/examples/servers/sqlite"
  "$ROOT/examples/clients/simple-client"

  "$ROOT/docs"
)

files=(
  "$ROOT/.github/workflows/ci.yml"
  "$ROOT/.github/workflows/publish-spec.yml"
  "$ROOT/.github/workflows/sdk-tests.yml"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/README.md"
  "$ROOT/LICENSE"
  "$ROOT/CHANGELOG.md"
  "$ROOT/package.json"
  "$ROOT/pnpm-lock.yaml"
  "$ROOT/pnpm-workspace.yaml"

  "$ROOT/spec/README.md"
  "$ROOT/spec/overview.md"
  "$ROOT/spec/transports.md"
  "$ROOT/spec/lifecycle.md"
  "$ROOT/spec/server-features/tools.md"
  "$ROOT/spec/server-features/resources.md"
  "$ROOT/spec/server-features/prompts.md"
  "$ROOT/spec/client-features/sampling.md"
  "$ROOT/spec/schema/schema.json"
  "$ROOT/spec/schema/schema.ts"

  "$ROOT/sdk/typescript/package.json"
  "$ROOT/sdk/typescript/tsconfig.json"
  "$ROOT/sdk/typescript/src/index.ts"
  "$ROOT/sdk/typescript/src/client/index.ts"
  "$ROOT/sdk/typescript/src/client/sse.ts"
  "$ROOT/sdk/typescript/src/server/index.ts"
  "$ROOT/sdk/typescript/src/server/sse.ts"
  "$ROOT/sdk/typescript/src/types.ts"
  "$ROOT/sdk/typescript/src/protocol.ts"
  "$ROOT/sdk/typescript/tests/server.test.ts"

  "$ROOT/sdk/python/pyproject.toml"
  "$ROOT/sdk/python/src/mcp/__init__.py"
  "$ROOT/sdk/python/src/mcp/server/__init__.py"
  "$ROOT/sdk/python/src/mcp/server/fastmcp.py"
  "$ROOT/sdk/python/src/mcp/server/stdio.py"
  "$ROOT/sdk/python/src/mcp/client/__init__.py"
  "$ROOT/sdk/python/src/mcp/client/sse.py"
  "$ROOT/sdk/python/src/mcp/types.py"

  "$ROOT/docs/quickstart.md"
  "$ROOT/docs/building-servers.md"
  "$ROOT/docs/building-clients.md"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"