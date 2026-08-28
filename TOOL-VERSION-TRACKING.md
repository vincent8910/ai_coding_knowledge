# AI Coding 工具版本追蹤表

> 這份表只記錄需要綁定版本的短期資訊；長期概念請放在主題文章。每次更新工具特定內容時，附官方來源與查證日期。

## 第一批正式比較對象

| 工具 | Stable／版本 | 查證日期 | 官方來源 | 穩定度與限制 |
|---|---|---|---|---|
| Claude Code | v2.1.250 stable；v2.1.239 為前次查證 | 2026-08-28 Asia/Taipei | [Anthropic v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250) | stable；本次只確認官方 release tag 與發布時間，未取得可供摘要的 release body，也未在本專案重新執行 sandbox、nested subagent 與 workflow 實測；不把版本存在當成行為保證 |
| Gemini CLI | v0.57.0 stable；v0.58.0-preview.0 與 v0.59.0-nightly.20260827.g3c311beac 另列觀察 | 2026-08-28 Asia/Taipei | [Gemini v0.57.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0) · [preview](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0-preview.0) · [nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260827.g3c311beac) | stable／preview／nightly 分開；stable release note 可確認為 v0.56.0 → v0.57.0，未把 preview 與 nightly 納入穩定教學基準 |
| Codex CLI | v0.150.1 stable；v0.151.0-alpha.7 另列觀察 | 2026-08-28 Asia/Taipei | [Codex v0.150.1](https://github.com/openai/codex/releases/tag/rust-v0.150.1) · [alpha](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7) | stable／alpha 分開；v0.150.1 release note 可確認為保留影像壓縮預算修正的 backport，未在本專案重新執行 workflow 實測；alpha 只作觀察，不推論永久能力 |

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
| GitHub Agent Plugins 1.0 | generally available | 2026-08-28 Asia/Taipei | [GitHub Changelog 2026-08-12](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/) | 開放標準可將 skills 與 MCP server 打包，並由相容 client 共用；本專案尚未對 VS Code、Copilot CLI 或 Copilot app 做安裝／相容性實測，不列入 Claude Code、Gemini CLI、Codex CLI 的正式比較結論 |
| GitHub Copilot code review 的 Agent skills／MCP | generally available | 2026-08-28 Asia/Taipei | [GitHub Changelog 2026-07-29](https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available/) | 官方說明包含唯讀 MCP tool calls 與 skills；這是 GitHub Copilot code review 的產品能力，不可直接推論其他 client 具備相同行為 |
