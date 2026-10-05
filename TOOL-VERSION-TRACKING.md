# AI Coding 工具版本追蹤表

> 這份表只記錄需要綁定版本的短期資訊；長期概念請放在主題文章。每次更新工具特定內容時，附官方來源與查證日期。

## 第一批正式比較對象

| 工具 | Stable／版本 | 查證日期 | 官方來源 | 穩定度與限制 |
|---|---|---|---|---|
| Claude Code | v2.1.289 stable | 2026-10-05 Asia/Taipei | [Anthropic v2.1.289](https://github.com/anthropics/claude-code/releases/tag/v2.1.289) · [Claude Code changelog](https://code.claude.com/docs/en/changelog) | stable；GitHub release API 查證於 2026-10-05；本版本存在與發布時間已由官方 release API 確認，但未在本專案重新執行行為實測，不把版本存在當成行為保證 |
| Gemini CLI | v0.62.0 stable；v0.63.0-preview.0 與 v0.64.0-nightly.20261003.gfb972b2f8 另列觀察 | 2026-10-05 Asia/Taipei | [Gemini v0.62.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0) · [preview](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-preview.0) · [nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261003.gfb972b2f8) · [release channels](https://github.com/google-gemini/gemini-cli#release-channels) | stable／preview／nightly 分開；官方 release API 查證 stable、preview 與 nightly 發布狀態；preview／nightly 僅作觀察，不納入穩定教學基準 |
| Codex CLI | v0.160.0 stable；v0.162.0-alpha.13 另列觀察 | 2026-10-05 Asia/Taipei | [Codex v0.160.0](https://github.com/openai/codex/releases/tag/rust-v0.160.0) · [alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.13) | stable／alpha 分開；官方 release API 查證 stable 與 alpha 發布狀態；alpha 僅作觀察，不納入穩定教學基準；未在本專案重新執行 workflow 實測 |

## 每次更新必記錄

- 查證日期與時區
- 工具版本、模型名稱與 provider
- 作業系統、sandbox／permission 設定
- 官方 release URL 或原始 commit
- 影響的 workflow、flag、API 或安全行為
- 是否 stable、preview、nightly 或 alpha
- 重新執行哪些 benchmark 與測試
- 下一次檢查條件

## 編輯規則

1. Release note 只能證明該版本的變更，不代表所有工具的共通能力。
2. preview／nightly／alpha 必須明確標示，不得放進穩定安裝主線。
3. 價格、方案、額度與 CLI 使用資格需另外記錄地區與方案前提。
4. 版本變更若影響權限、sandbox、背景任務或 MCP，必須同步檢查 Security、Validation 與 Agent Workflow 文件。

## 外部生態觀察（不納入第一批穩定比較基準）

| 項目 | 狀態 | 查證日期 | 官方來源 | 解讀邊界 |
|---|---|---|---|---|
| GitHub Agent Plugins 1.0 | generally available | 2026-08-29 Asia/Taipei | [GitHub Changelog 2026-08-12](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/) | 開放標準可將 skills 與 MCP server 打包，並由相容 client 共用；本專案尚未對 VS Code、Copilot CLI 或 Copilot app 做安裝／相容性實測，不列入 Claude Code、Gemini CLI、Codex CLI 的正式比較結論 |
| GitHub Copilot code review 的 Agent skills／MCP | generally available | 2026-10-02 Asia/Taipei | [GitHub Changelog 2026-07-29](https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available/) | 官方說明包含唯讀 MCP tool calls、repository／organization skills 與 attribution；這是 GitHub Copilot code review 的產品能力，不可直接推論其他 client 具備相同行為；本次以官方 Changelog 重查，未在本專案實測 |
| GitHub Copilot in Slack | public preview | 2026-08-29 Asia/Taipei | [GitHub Changelog 2026-08-21](https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/) | 可從 Slack 對話啟動、導向與接續 Copilot agent session；限 Copilot Business／Enterprise 且需管理員啟用 cloud agent policy，未納入第一批 CLI 正式比較，也未在本專案實測 |
| GitHub Copilot app Customize tab | generally available | 2026-08-31 Asia/Taipei | [GitHub Changelog 2026-08-25](https://github.blog/changelog/2026-08-25-github-copilot-app-customize-tab-is-generally-available) | Copilot app 可集中探索 MCP servers、plugins、skills 與 canvases；這是 Copilot app 的產品能力，未納入第一批 CLI 正式比較，也未在本專案實測 |
| GitHub Copilot content exclusions in app／CLI | generally available | 2026-09-08 Asia/Taipei | [GitHub Changelog 2026-09-02](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli) | 官方公告為 Copilot app 與 CLI 的 content exclusions GA；未在本專案對方案、組織政策或實際排除效果做測試，不納入第一批 CLI 正式比較結論 |
| GitHub Copilot selected model deprecations | deprecated 2026-10-02 | 2026-10-03 Asia/Taipei | [GitHub Changelog 2026-10-02](https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated) | 官方已確認 Gemini 3.5 Flash、Gemini 3.6 Flash、Kimi K2.7 Code、Claude Opus 4.7 在 GitHub Copilot 全部體驗淘汰，並提供替代模型；這是 GitHub Copilot 產品生命週期資訊，不推論 Claude Code、Gemini CLI 或 Codex CLI 的模型可用性 |
| GitHub Copilot computer use | public preview；macOS／Windows | 2026-10-03 Asia/Taipei | [GitHub Changelog 2026-10-01](https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps) | Copilot CLI 與 Copilot app 可操作桌面應用程式；需使用者核准，macOS 需 Accessibility／Screen Recording 權限，組織政策可停用；未在本專案實測，不納入第一批 CLI 正式比較結論 |
| GitHub App installation tokens | generally available | 2026-10-05 Asia/Taipei | [GitHub Changelog 2026-10-02](https://github.blog/changelog/2026-10-02-stateless-github-app-installation-tokens-rolled-out) | GitHub App installation token API 已推出 stateless token；這是 GitHub API／App authentication 的平台能力，未在本專案實測，不推論其他 agent client 的 credential 行為 |
| GitHub Copilot code review API／effort | generally available | 2026-10-05 Asia/Taipei | [GitHub Changelog 2026-10-02](https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level) | 可透過 REST／GraphQL API 請求 Copilot code review，並為每次請求設定 effort；Balanced 成為預設 effort。這是 GitHub Copilot code review 的產品能力，未在本專案實測，不納入第一批 CLI 正式比較結論 |
| GitHub Enterprise Server 3.22 | generally available；Copilot CLI with GHES 為 technical preview | 2026-09-14 Asia/Taipei | [GitHub Changelog 2026-09-08](https://github.blog/changelog/2026-09-08-github-enterprise-server-3-22-is-now-generally-available) · [GHES 3.22 release notes](https://docs.github.com/enterprise-server@3.22/admin/release-notes) | GHES 3.22 已 GA；離線／air-gapped 環境的 Copilot CLI 整合仍是 technical preview，不納入穩定 CLI 比較結論 |
| GitHub Copilot managed agent permissions | generally available | 2026-09-15 Asia/Taipei | [GitHub Changelog 2026-09-09](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations) | Enterprise／Business 管理員可集中控制 agent 的 shell、檔案讀寫與 network domain 操作為阻擋、需核准或免提示；官方公告涵蓋 Copilot app、Copilot CLI 與 VS Code Agent Host，未在本專案實測，不推論其他 client 的 permission 行為 |
| GitHub Copilot auto model selection cost／quality controls | generally available | 2026-09-15 Asia/Taipei | [GitHub Changelog 2026-09-14](https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection) | 可調整 Copilot auto model selection 的 cost／quality 偏好；這是 GitHub Copilot 產品能力，未在本專案實測，不推論其他 client 的模型路由或品質行為 |
| GitHub Copilot weekly releases — September 14 | release；2026-09-18 公告 | 2026-09-19 Asia/Taipei | [GitHub Changelog 2026-09-18](https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14) | 官方週報涵蓋 auto model selection 的 cost／quality／response-time tiers、code review 更新、Sentry canvas、VS Code Agent Host／Dev Containers 與 PR workflow；未在本專案實測，不納入第一批 CLI 正式比較結論 |
| GitHub Copilot agentic CLI customization metrics | generally available | 2026-09-19 Asia/Taipei | [GitHub Changelog 2026-09-17](https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api) | Enterprise／organization usage metrics 新增 skills、custom agents、MCP、slash commands 與 plugins 的 top-five activity 及 distinct-use 欄位；customer-defined 名稱會聚合為 `other`，未在本專案實測，不推論其他 CLI 的 telemetry 行為 |
| GitHub Actions workflow execution protections | generally available | 2026-09-19 Asia/Taipei | [GitHub Changelog 2026-09-17](https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available) | 可按 actor、event 與 workflow file 設定 allowlist，並以 evaluate mode／Insights／REST API 先觀察；公開 repository 的 `pull_request_target` 預設保護預計 2026-11-02 強制執行，需檢查現有 workflow，不把公告當成已完成本專案安全驗證 |
| GitHub MCP Server secret scanning | public preview | 2026-09-19 Asia/Taipei | [GitHub Changelog 2026-03-17](https://github.blog/changelog/2026-03-17-secret-scanning-in-ai-coding-agents-via-the-github-mcp-server) | GitHub MCP Server 可在 commit／PR 前由相容 agent 觸發 secret scanning；需啟用 Secret Protection。這是 GitHub MCP Server 的 preview 能力，未在本專案實測，不能推論其他 MCP client 或 repository 都可用 |
| GitHub Copilot weekly releases — September 21 | release；2026-09-25 公告 | 2026-09-26 Asia/Taipei | [GitHub Changelog 2026-09-25](https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21) | 官方週報列出 Copilot 新模型、Copilot app local sandboxing（public preview）、OpenTelemetry、Slack／Teams 工作流與 JetBrains／VS Code 更新；未在本專案實測，不納入第一批 CLI 正式比較結論 |
| GPT-6.1 Sol in GitHub Copilot | generally available；逐步 rollout | 2026-09-30 Asia/Taipei | [GitHub Changelog 2026-09-29](https://github.blog/changelog/2026-09-29-gpt-6-1-sol-in-github-copilot) | GitHub Copilot 的產品／模型可用性資訊；官方列出 Pro+、Max、Business、Enterprise 與多個 client surface，但 rollout 可能尚未完成，且採 provider list pricing usage-based billing；未在本專案實測，不納入第一批 CLI 正式比較結論 |
| Claude Sonnet 5.5 in GitHub Copilot | generally available；逐步 rollout | 2026-09-30 Asia/Taipei | [GitHub Changelog 2026-09-28](https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot) | GitHub Copilot 的產品／模型可用性資訊；官方列出 Pro、Pro+、Max、Business、Enterprise 與多個 client surface，但 rollout 可能尚未完成；未在本專案實測，不納入第一批 CLI 正式比較結論 |
| GitHub Copilot in Slack／Microsoft Teams updates | public preview；Business／Enterprise | 2026-09-26 Asia/Taipei | [GitHub Changelog 2026-09-25](https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams) | 支援更多 Slack／Teams conversation context、切換模型、相似 issue 檢查與長任務可靠性改善；部分能力逐步 rollout，需管理員政策與既有 entitlement，未在本專案實測 |
| MCP Protocol | 2026-07-28 stable revision | 2026-10-05 Asia/Taipei | [MCP 2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28) · [specification changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) · [official announcement](https://blog.modelcontextprotocol.io/posts/2026-07-28) | stable protocol revision；官方公告明確描述移除 protocol-level session／`Mcp-Session-Id`、stateless request、`server/discover`、`subscriptions/listen`、MRTR 與 extension／deprecation lifecycle；不同 Client／Server／SDK 的採用速度仍需個別驗證，本專案未把 protocol release 當成 client 相容性證明 |
