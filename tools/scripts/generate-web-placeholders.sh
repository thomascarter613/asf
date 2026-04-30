#!/usr/bin/env bash
set -euo pipefail

ROOT="web"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/apps/web/public"
  "$ROOT/apps/web/src/app/(auth)/login"
  "$ROOT/apps/web/src/app/(auth)/signup"
  "$ROOT/apps/web/src/app/(app)/chat/[id]"
  "$ROOT/apps/web/src/app/(app)/projects/[id]"
  "$ROOT/apps/web/src/app/(app)/settings/account"
  "$ROOT/apps/web/src/app/(app)/settings/privacy"
  "$ROOT/apps/web/src/app/(app)/settings/appearance"
  "$ROOT/apps/web/src/app/(app)/admin"
  "$ROOT/apps/web/src/app/api/auth/[...nextauth]"
  "$ROOT/apps/web/src/app/api/auth/session"
  "$ROOT/apps/web/src/app/api/conversations"
  "$ROOT/apps/web/src/app/api/messages"

  "$ROOT/apps/web/src/components/ui"
  "$ROOT/apps/web/src/components/chat"
  "$ROOT/apps/web/src/components/artifacts"
  "$ROOT/apps/web/src/components/markdown"
  "$ROOT/apps/web/src/components/sidebar"
  "$ROOT/apps/web/src/components/memory"
  "$ROOT/apps/web/src/components/tools"
  "$ROOT/apps/web/src/components/layout"

  "$ROOT/apps/web/src/hooks"
  "$ROOT/apps/web/src/lib"
  "$ROOT/apps/web/src/stores"
  "$ROOT/apps/web/src/types"

  "$ROOT/apps/desktop/src/main"
  "$ROOT/apps/desktop/src/preload"
  "$ROOT/apps/desktop/resources"

  "$ROOT/packages/design-system/src/tokens"
  "$ROOT/packages/design-system/src/components"
  "$ROOT/packages/design-system/stories"

  "$ROOT/packages/api-client/src"

  "$ROOT/packages/tsconfig"

  "$ROOT/tests/e2e/fixtures"
  "$ROOT/tests/e2e/specs"
  "$ROOT/tests/a11y"

  "$ROOT/infra"

  "$ROOT/docs"
)

files=(
  "$ROOT/.github/workflows/ci.yml"
  "$ROOT/.github/workflows/e2e.yml"
  "$ROOT/.github/workflows/a11y.yml"
  "$ROOT/.github/workflows/bundle-analysis.yml"
  "$ROOT/.github/workflows/deploy-staging.yml"
  "$ROOT/.github/workflows/deploy-production.yml"
  "$ROOT/.github/CODEOWNERS"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/.gitattributes"
  "$ROOT/.editorconfig"
  "$ROOT/.env.example"
  "$ROOT/.env.local.example"
  "$ROOT/.nvmrc"
  "$ROOT/.node-version"
  "$ROOT/.pre-commit-config.yaml"
  "$ROOT/README.md"
  "$ROOT/CONTRIBUTING.md"
  "$ROOT/PROPRIETARY"
  "$ROOT/package.json"
  "$ROOT/pnpm-lock.yaml"
  "$ROOT/pnpm-workspace.yaml"
  "$ROOT/turbo.json"
  "$ROOT/tsconfig.json"
  "$ROOT/tsconfig.base.json"
  "$ROOT/biome.json"
  "$ROOT/Makefile"

  "$ROOT/apps/web/package.json"
  "$ROOT/apps/web/tsconfig.json"
  "$ROOT/apps/web/next.config.ts"
  "$ROOT/apps/web/next-env.d.ts"
  "$ROOT/apps/web/tailwind.config.ts"
  "$ROOT/apps/web/postcss.config.mjs"
  "$ROOT/apps/web/middleware.ts"

  "$ROOT/apps/web/public/favicon.ico"
  "$ROOT/apps/web/public/logo.svg"
  "$ROOT/apps/web/public/robots.txt"
  "$ROOT/apps/web/public/manifest.json"

  "$ROOT/apps/web/src/app/layout.tsx"
  "$ROOT/apps/web/src/app/page.tsx"
  "$ROOT/apps/web/src/app/globals.css"

  "$ROOT/apps/web/src/app/(auth)/login/page.tsx"
  "$ROOT/apps/web/src/app/(auth)/signup/page.tsx"
  "$ROOT/apps/web/src/app/(auth)/layout.tsx"

  "$ROOT/apps/web/src/app/(app)/layout.tsx"
  "$ROOT/apps/web/src/app/(app)/chat/page.tsx"
  "$ROOT/apps/web/src/app/(app)/chat/[id]/page.tsx"
  "$ROOT/apps/web/src/app/(app)/projects/page.tsx"
  "$ROOT/apps/web/src/app/(app)/projects/[id]/page.tsx"
  "$ROOT/apps/web/src/app/(app)/settings/page.tsx"
  "$ROOT/apps/web/src/app/(app)/settings/account/page.tsx"
  "$ROOT/apps/web/src/app/(app)/settings/privacy/page.tsx"
  "$ROOT/apps/web/src/app/(app)/settings/appearance/page.tsx"
  "$ROOT/apps/web/src/app/(app)/admin/page.tsx"

  "$ROOT/apps/web/src/app/api/auth/[...nextauth]/route.ts"
  "$ROOT/apps/web/src/app/api/auth/session/route.ts"
  "$ROOT/apps/web/src/app/api/conversations/route.ts"
  "$ROOT/apps/web/src/app/api/messages/route.ts"

  "$ROOT/apps/web/src/components/ui/button.tsx"
  "$ROOT/apps/web/src/components/ui/input.tsx"
  "$ROOT/apps/web/src/components/ui/dialog.tsx"
  "$ROOT/apps/web/src/components/ui/dropdown-menu.tsx"
  "$ROOT/apps/web/src/components/ui/tooltip.tsx"
  "$ROOT/apps/web/src/components/ui/scroll-area.tsx"
  "$ROOT/apps/web/src/components/ui/separator.tsx"
  "$ROOT/apps/web/src/components/ui/skeleton.tsx"

  "$ROOT/apps/web/src/components/chat/ChatWindow.tsx"
  "$ROOT/apps/web/src/components/chat/MessageList.tsx"
  "$ROOT/apps/web/src/components/chat/MessageBubble.tsx"
  "$ROOT/apps/web/src/components/chat/AssistantMessage.tsx"
  "$ROOT/apps/web/src/components/chat/UserMessage.tsx"
  "$ROOT/apps/web/src/components/chat/ComposerBar.tsx"
  "$ROOT/apps/web/src/components/chat/ComposerTextarea.tsx"
  "$ROOT/apps/web/src/components/chat/AttachmentPicker.tsx"
  "$ROOT/apps/web/src/components/chat/ToolCallDisplay.tsx"
  "$ROOT/apps/web/src/components/chat/ToolResultDisplay.tsx"
  "$ROOT/apps/web/src/components/chat/ThinkingIndicator.tsx"
  "$ROOT/apps/web/src/components/chat/StopButton.tsx"

  "$ROOT/apps/web/src/components/artifacts/ArtifactContainer.tsx"
  "$ROOT/apps/web/src/components/artifacts/ArtifactSandbox.tsx"
  "$ROOT/apps/web/src/components/artifacts/ArtifactToolbar.tsx"
  "$ROOT/apps/web/src/components/artifacts/CodeArtifact.tsx"
  "$ROOT/apps/web/src/components/artifacts/HtmlArtifact.tsx"
  "$ROOT/apps/web/src/components/artifacts/ReactArtifact.tsx"
  "$ROOT/apps/web/src/components/artifacts/SvgArtifact.tsx"
  "$ROOT/apps/web/src/components/artifacts/MermaidArtifact.tsx"

  "$ROOT/apps/web/src/components/markdown/MarkdownRenderer.tsx"
  "$ROOT/apps/web/src/components/markdown/CodeBlock.tsx"
  "$ROOT/apps/web/src/components/markdown/MathBlock.tsx"
  "$ROOT/apps/web/src/components/markdown/Citation.tsx"

  "$ROOT/apps/web/src/components/sidebar/Sidebar.tsx"
  "$ROOT/apps/web/src/components/sidebar/ConversationList.tsx"
  "$ROOT/apps/web/src/components/sidebar/ProjectList.tsx"
  "$ROOT/apps/web/src/components/sidebar/SidebarHeader.tsx"

  "$ROOT/apps/web/src/components/memory/MemoryPanel.tsx"
  "$ROOT/apps/web/src/components/memory/MemoryItem.tsx"

  "$ROOT/apps/web/src/components/tools/ToolToggle.tsx"
  "$ROOT/apps/web/src/components/tools/McpConnector.tsx"

  "$ROOT/apps/web/src/components/layout/Header.tsx"
  "$ROOT/apps/web/src/components/layout/Shell.tsx"
  "$ROOT/apps/web/src/components/layout/MobileNav.tsx"

  "$ROOT/apps/web/src/hooks/useChat.ts"
  "$ROOT/apps/web/src/hooks/useStream.ts"
  "$ROOT/apps/web/src/hooks/useConversations.ts"
  "$ROOT/apps/web/src/hooks/useMemory.ts"
  "$ROOT/apps/web/src/hooks/useArtifact.ts"
  "$ROOT/apps/web/src/hooks/useAuth.ts"

  "$ROOT/apps/web/src/lib/api.ts"
  "$ROOT/apps/web/src/lib/stream-parser.ts"
  "$ROOT/apps/web/src/lib/auth.ts"
  "$ROOT/apps/web/src/lib/analytics.ts"
  "$ROOT/apps/web/src/lib/constants.ts"

  "$ROOT/apps/web/src/stores/conversation.ts"
  "$ROOT/apps/web/src/stores/ui.ts"
  "$ROOT/apps/web/src/stores/user.ts"

  "$ROOT/apps/web/src/types/api.ts"
  "$ROOT/apps/web/src/types/conversation.ts"
  "$ROOT/apps/web/src/types/artifact.ts"

  "$ROOT/apps/desktop/package.json"
  "$ROOT/apps/desktop/tsconfig.json"
  "$ROOT/apps/desktop/electron-builder.yaml"
  "$ROOT/apps/desktop/src/main/index.ts"
  "$ROOT/apps/desktop/src/main/updater.ts"
  "$ROOT/apps/desktop/src/main/tray.ts"
  "$ROOT/apps/desktop/src/preload/index.ts"
  "$ROOT/apps/desktop/resources/icon.icns"
  "$ROOT/apps/desktop/resources/icon.ico"
  "$ROOT/apps/desktop/resources/icon.png"

  "$ROOT/packages/design-system/package.json"
  "$ROOT/packages/design-system/tsconfig.json"
  "$ROOT/packages/design-system/src/index.ts"
  "$ROOT/packages/design-system/src/tokens/colors.ts"
  "$ROOT/packages/design-system/src/tokens/typography.ts"
  "$ROOT/packages/design-system/src/tokens/spacing.ts"

  "$ROOT/packages/api-client/package.json"
  "$ROOT/packages/api-client/tsconfig.json"
  "$ROOT/packages/api-client/src/index.ts"
  "$ROOT/packages/api-client/src/client.ts"
  "$ROOT/packages/api-client/src/types.ts"

  "$ROOT/packages/tsconfig/package.json"
  "$ROOT/packages/tsconfig/base.json"
  "$ROOT/packages/tsconfig/nextjs.json"

  "$ROOT/tests/e2e/playwright.config.ts"
  "$ROOT/tests/e2e/auth.setup.ts"
  "$ROOT/tests/e2e/specs/chat.spec.ts"
  "$ROOT/tests/e2e/specs/artifacts.spec.ts"
  "$ROOT/tests/e2e/specs/settings.spec.ts"
  "$ROOT/tests/a11y/axe.spec.ts"

  "$ROOT/infra/Dockerfile"
  "$ROOT/infra/nginx.conf"

  "$ROOT/docs/architecture.md"
  "$ROOT/docs/component-guide.md"
  "$ROOT/docs/deployment.md"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"