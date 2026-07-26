# Agent Workflow：Issue → Agent → Draft PR

> 這是一條跨工具的工程治理流程。Claude Code、Gemini CLI、Codex CLI、GitHub Copilot cloud agent 或其他工具的指令不同，但都應遵守相同的驗收邊界。

## 兩種學習路徑中的位置

- **入門路徑**：先完成低風險、可回復的文件或小型測試任務。
- **工程治理路徑**：再學 isolated workspace、權限、budget、背景任務、測試、人工 review 與 rollback。

## 標準流程

```text
Issue／需求
   ↓
確認範圍與成功條件
   ↓
建立 temporary clone 或 isolated worktree
   ↓
Agent 分析與提出計畫
   ↓
限制權限、資料範圍與 budget
   ↓
Agent 修改並執行測試
   ↓
檢查 diff、secret、路徑與安全事件
   ↓
建立 draft PR
   ↓
人工 review 與必要修正
   ↓
通過 CI 後才 merge／deploy
```

## 三種 Agent 模式

| 模式 | 例子 | 主要風險 | 必要 gate |
|---|---|---|---|
| 本機前景 Agent | CLI／IDE 內互動修改 | 權限過寬、修改範圍失控 | diff、測試、人工確認 |
| 背景／多代理 | subagent、Agent Teams | budget、巢狀 spawn、cleanup | timeout、並行上限、process cleanup |
| 非同步雲端 Agent | Issue 指派後產生 draft PR | 外部資料、secret、分支與 workflow 權限 | ephemeral workspace、最小權限、draft PR、人工 merge |

## 最低紀錄

每次任務至少記錄：

- Issue／需求與成功條件
- 工具、模型、版本與執行模式
- workspace、branch 與可見資料範圍
- 最大時間、工具呼叫數、subagent 數與費用 budget
- 測試命令與實際結果
- 人工批准、修改與 review 次數
- 安全事件、失敗原因與 rollback 方式

## 失敗復原

- 測試失敗：保留錯誤輸出，禁止用文字摘要取代測試。
- Agent timeout：取消背景工作，確認 worker、MCP session 與暫存檔已清理。
- 產生越權修改：停止任務、刪除 temporary workspace，重新建立乾淨 worktree。
- Draft PR 不符合需求：不要直接 merge；回到需求與成功條件重新驗收。

搭配 [VALIDATION-SOP.md](VALIDATION-SOP.md)、[AI-CODING-SECURITY.md](AI-CODING-SECURITY.md) 與 [AI-CODING-EVALUATION.md](AI-CODING-EVALUATION.md) 使用。
