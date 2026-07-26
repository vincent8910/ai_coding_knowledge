# AI Coding 工具版本追蹤表

> 這份表只記錄需要綁定版本的短期資訊；長期概念請放在主題文章。每次更新工具特定內容時，附官方來源與查證日期。

## 第一批正式比較對象

| 工具 | Stable／版本 | 查證日期 | 官方來源 | 穩定度與限制 |
|---|---|---|---|---|
| Claude Code | 依最新 release 更新 | 待查證 | [Anthropic releases](https://github.com/anthropics/claude-code/releases) | 背景 Agent、sandbox、subagent 行為需綁版本 |
| Gemini CLI | 依 stable／preview 分列 | 待查證 | [Gemini CLI releases](https://github.com/google-gemini/gemini-cli/releases) | preview／nightly 不作穩定教學基準 |
| Codex CLI | 依 stable／alpha 分列 | 待查證 | [OpenAI Codex releases](https://github.com/openai/codex/releases) | alpha 只作觀察，不推論永久能力 |

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
