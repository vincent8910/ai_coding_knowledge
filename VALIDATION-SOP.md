# AI Coding 變更驗收 SOP

> 這是一份跨工具的通用驗收流程。不同 AI Coding 工具的指令、權限與背景工作能力可能不同，請以工具與版本的官方文件為準。

## 何時使用

任何由 AI Coding 工具完成的程式碼、文件、設定或自動化修改，都至少執行一次本 SOP。高風險操作（付款、刪除、登入、production deploy、個資處理）必須增加人工確認。

## 六步驟

1. **確認範圍**
   - 讀取需求與專案規則檔。
   - 列出預計修改的檔案、明確不修改的區域，以及驗收條件。

2. **檢查 diff**
   - 只接受與任務相關的變更。
   - 確認沒有 secrets、個資、未授權的依賴或大範圍格式化。

3. **先跑快速檢查**
   - 語法／型別檢查。
   - formatter／lint。
   - 受影響模組的最小 import 或 build smoke test。

4. **執行測試**
   - 先跑受影響的單元測試，再跑整合測試或完整測試集。
   - 測試失敗時，保留實際錯誤輸出；不能用 AI 的文字摘要取代測試結果。

5. **人工驗收與安全確認**
   - 檢查輸出是否符合需求與邊界條件。
   - 對外部服務、檔案刪除、部署、付款、登入與個資操作逐項確認。

6. **記錄與可回復性**
   - 記錄工具、版本、測試命令與結果。
   - 確認 commit／branch／rollback 路徑清楚。
   - 未通過驗收不得合併或部署。

## 安全邊界與 Agent budget

在執行前額外記錄：

- Agent 可見的目錄與檔案範圍。
- 可用工具、shell、MCP、Docker／remote session 與網路出口。
- 最大工具呼叫數、subagent 數、執行時間與 retry 次數。
- secrets、production endpoint 與 destructive command 的禁止範圍。

驗收時必須加入負向測試：

- 含 prompt injection 的外部文件不能改變原始任務。
- symlink 不得讀寫 repository 外檔案。
- `rm`、deploy、資料庫 destructive operation 必須拒絕或要求人工確認。
- 背景任務取消後，確認子程序、MCP session 與暫存檔確實清理。

產品版本、sandbox 行為與權限語法都可能變更；請把工具版本與設定一併記錄。詳見 [AI-CODING-SECURITY.md](AI-CODING-SECURITY.md)。

## 評估紀錄

若要比較不同工具，使用固定任務、固定成功條件與獨立 worktree，記錄工具／版本、測試結果、工具呼叫數、成本、耗時、人工介入與安全事件。詳見 [AI-CODING-EVALUATION.md](AI-CODING-EVALUATION.md)。

## 最小回報格式

```text
變更範圍：
驗收條件：
實際執行：
測試結果：
人工確認：
未解風險：
rollback 方式：
```

## 原則

- AI 產出的說明不是驗證；可重現的命令與實際輸出才是驗證。
- 效率、節省時間與品質改善只能在指定任務、工具版本與測量方法下報告，不使用沒有基準的固定倍數宣稱。
- 先在低權限、唯讀或 staging 環境驗證，再考慮 production。
