# Multi-Agent System（多代理系統）— 一支分工明確的 AI 團隊

> **白話說：** Multi-Agent System 不是把多個 AI 放在同一個聊天室，而是讓多個有角色、權限、任務與回報規則的 Agent 協作完成工作。

---

## 它和 Subagent 有什麼不同？

- **Agent**：一個能規劃並執行任務的 AI
- **Subagent**：由主 Agent 委派出來、通常服務於單一主流程的分身
- **Multi-Agent System**：多個相對獨立的 Agent，透過協調、訊息、共享狀態或工作佇列合作

真正的多代理系統需要處理：

- 任務如何分派
- Agent 如何交換結果
- 共享資料誰可以讀寫
- 失敗、超時與重試怎麼處理
- 誰負責最後驗收
- 成本與並發數如何控制

## 生活比喻

像一個專案團隊：PM 負責拆解與排程，工程師負責實作，測試人員負責驗收，安全人員負責檢查權限。每個角色不是只「講不同風格的話」，而是有不同職責與可用工具。

## 常見架構

```text
Orchestrator / PM Agent
        │
   ┌────┼────┐
研究 Agent  Coding Agent  QA Agent
   └────┼────┘
     統一驗收與回報
```

## 重要原則

1. 角色邊界要清楚，避免所有 Agent 都能修改所有檔案。
2. 結果要有格式，不能只靠自然語言猜測是否完成。
3. 每個子任務都要可追蹤、可重試、可取消。
4. 最後仍需由明確的驗收步驟確認，而不是多數 Agent 說「完成」就算完成。

相關：[Agent](agent.md) · [Subagent](subagent.md) · [Agent Teams](../AGENT-TEAMS.md) · [AI Sandbox](ai-sandbox.md)

---

**[← 回到術語總覽](../README.md#-專有名詞速查不懂的詞來這裡查)**
