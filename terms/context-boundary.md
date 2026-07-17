# Context Boundary（上下文邊界）— 決定 AI 能看見什麼

> **白話說：** Context Boundary 是 AI 任務的資料邊界：哪些檔案、資料夾、歷史訊息與工具結果可以被納入上下文，哪些必須排除。

---

## 為什麼重要？

AI 看得越多不一定越好。把 secrets、巨大 build artifacts、暫存檔或不相關的公司資料塞進上下文，可能造成：

- 敏感資料外洩風險
- 上下文被雜訊佔滿
- AI 依賴過期或錯誤的檔案
- 成本與延遲增加
- Prompt injection 藏在不該讀的文件中

## 建立邊界的基本做法

- 明確指定工作目錄與允許讀取的路徑
- 排除 `.env`、憑證、金鑰、個人資料與大型生成檔
- 把 build、cache、vendor、log 等暫態資料列入 ignore
- 對 MCP 與外部工具使用最小權限
- 在任務開始時確認上下文來源，在結果中保留來源與限制

## 生活比喻

像把文件交給顧問前先整理一個「本次會議資料夾」：不是把整間公司的檔案櫃搬進會議室，而是只提供完成這個決策必要的資料。

Context Boundary 應和 [AI Sandbox](ai-sandbox.md)、[Prompt Injection](prompt-injection.md) 與 [Project Instructions](project-instructions.md) 一起理解。

---

**[← 回到術語總覽](../README.md#-專有名詞速查不懂的詞來這裡查)**
