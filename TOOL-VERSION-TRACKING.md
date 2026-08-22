# AI Coding 工具版本追蹤表

> 這份表只記錄需要綁定版本的短期資訊；長期概念請放在主題文章。每次更新工具特定內容時，附官方來源與查證日期。

## 第一批正式比較對象

| 工具 | Stable／版本 | 查證日期 | 官方來源 | 穩定度與限制 |
|---|---|---|---|---|
| Claude Code | v2.1.239 stable；v2.1.238 為前次查證 | 2026-08-22 Asia/Taipei | [Anthropic v2.1.239](https://github.com/anthropics/claude-code/releases/tag/v2.1.239) | stable；release note 宣稱成本估算納入美國境內推理加成、`/claude-api upgrade`、同步 plugin 標記與多項 proxy／MCP／session 修正；未在本專案重新執行 sandbox、nested subagent 與 workflow 實測，不把 release note 當成行為保證 |
| Gemini CLI | v0.56.0 stable；v0.57.0-preview.0 與 nightly 另列觀察 | 2026-08-22 Asia/Taipei | [Gemini v0.56.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0) · [preview](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0) · [nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260821.g30573d2e4) | stable／preview／nightly 分開；preview 與 nightly 不作穩定教學基準；目前未觀察到新的 stable release |
| Codex CLI | v0.149.0 stable；v0.150.0-alpha.6 另列觀察 | 2026-08-22 Asia/Taipei | [Codex v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) · [alpha](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.6) | stable／alpha 分開；stable release note 宣稱新增 `codex agents` dashboard、`/cd`／`/pwd`／`/cwd`、`codex queue` 與改善 `codex doctor`；alpha 只作觀察，不推論永久能力 |

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
