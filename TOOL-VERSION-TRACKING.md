# AI Coding 工具版本追蹤表

> 這份表只記錄需要綁定版本的短期資訊；長期概念請放在主題文章。每次更新工具特定內容時，附官方來源與查證日期。

## 第一批正式比較對象

| 工具 | Stable／版本 | 查證日期 | 官方來源 | 穩定度與限制 |
|---|---|---|---|---|
| Claude Code | v2.1.263 stable | 2026-09-07 Asia/Taipei | [Anthropic v2.1.263](https://github.com/anthropics/claude-code/releases/tag/v2.1.263) · [Claude Code changelog](https://code.claude.com/docs/en/changelog) | stable；官方 release body 僅記載 bug fixes 與 reliability improvements，未提供可據以整理的功能變更細節；未在本專案重新執行行為實測，不把版本存在當成行為保證 |
| Gemini CLI | v0.58.0 stable；v0.59.0-preview.0 與 v0.60.0-nightly.20260905.g85aca163f 另列觀察 | 2026-09-06 Asia/Taipei | [Gemini v0.58.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0) · [preview](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0) · [nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f) · [release channels](https://github.com/google-gemini/gemini-cli#release-channels) | stable／preview／nightly 分開；stable release note 可確認 symlink ignore path 一致性、macOS Seatbelt 隔離 Docker／container runtime、workspace safety checkers 等變更；nightly release body 另確認 MCP OAuth RFC 9207 issuer identification、macOS Seatbelt temporary directory isolation、extension boundary validation 與移除硬編碼 CrUX API key，仍不納入穩定教學基準 |
| Codex CLI | v0.153.4 stable；v0.154.0-alpha.3 另列觀察 | 2026-09-06 Asia/Taipei | [Codex v0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4) · [v0.154.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.3) | stable／alpha 分開；v0.153.3／.4 release body 可確認 GPT-6-Astra 的 Bedrock catalog、非同步提問工具可用性提示、bundled model picker visibility 與預設模型修正；alpha.3 僅作觀察，未納入穩定教學基準，未在本專案重新執行 workflow 實測 |

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
| GitHub Copilot code review 的 Agent skills／MCP | generally available | 2026-08-29 Asia/Taipei | [GitHub Changelog 2026-07-29](https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available/) | 官方說明包含唯讀 MCP tool calls 與 skills；這是 GitHub Copilot code review 的產品能力，不可直接推論其他 client 具備相同行為 |
| GitHub Copilot in Slack | public preview | 2026-08-29 Asia/Taipei | [GitHub Changelog 2026-08-21](https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/) | 可從 Slack 對話啟動、導向與接續 Copilot agent session；限 Copilot Business／Enterprise 且需管理員啟用 cloud agent policy，未納入第一批 CLI 正式比較，也未在本專案實測 |
| GitHub Copilot app Customize tab | generally available | 2026-08-31 Asia/Taipei | [GitHub Changelog 2026-08-25](https://github.blog/changelog/2026-08-25-github-copilot-app-customize-tab-is-generally-available) | Copilot app 可集中探索 MCP servers、plugins、skills 與 canvases；這是 Copilot app 的產品能力，未納入第一批 CLI 正式比較，也未在本專案實測 |
| MCP Protocol | 2026-07-28 stable revision | 2026-09-06 Asia/Taipei | [MCP 2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28) · [official release](https://github.com/modelcontextprotocol/modelcontextprotocol/releases/tag/2026-07-28) | stable protocol revision；官方 release 明確標示為 stable，但不同 Client／Server／SDK 的採用速度仍需個別驗證；本專案未把 protocol release 當成 client 相容性證明 |
