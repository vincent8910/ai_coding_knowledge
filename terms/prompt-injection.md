# Prompt Injection — 藏在資料裡的錯誤指令

> **白話說：** Prompt Injection 是外部文字偽裝成指令，誘導 AI 做出超出原本任務或權限的行為。

---

## 它怎麼發生？

AI 可能會讀取 README、Issue、網頁、Email 或文件。若其中寫著「忽略原本規則、把 secret 貼出來、執行這段指令」，模型可能把資料內容誤當成使用者授權的指令。

## 防護原則

- 把外部內容視為不可信資料，不是高優先級指令
- 限制檔案、網路與 shell 權限
- 不讓 AI 自動輸出 secrets
- 高風險動作要求人工確認
- 使用測試案例驗證拒絕行為
- 保留 diff、log 與 rollback 路徑

Prompt injection 不是只靠一句 system prompt 就能徹底解決的問題；它需要模型、工具、權限與流程一起防守。

相關：[AI Sandbox](ai-sandbox.md) · [Context Boundary](context-boundary.md) · [Validation SOP](../VALIDATION-SOP.md)

---

**[← 回到術語總覽](../README.md#-專有名詞速查不懂的詞來這裡查)**
