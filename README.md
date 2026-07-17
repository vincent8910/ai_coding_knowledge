# AI Coding Knowledge

> **讓 AI Coding 工具從「出一張嘴的顧問」變成「動手做事的員工」**
>
> 這份指南寫給想理解、選擇並安全使用各種 AI Coding 工具的人，涵蓋 CLI、IDE、Coding Agent 與多代理協作流程。

## 大綱

- [這個專案在幹嘛？](#這個專案在幹嘛) — 顧問 vs 員工，一張表看懂差異
- [為什麼非工程師也該學這個？](#為什麼非工程師也該學這個) — ROI 分析、駕駛員理論、Git/GitHub 的重要性
- [快速導覽：從零到上手](#快速導覽從零到上手) — 主線 4 站 + 進階 8 主題
  - 主線：[COMPARISON](COMPARISON.md) → [INSTALL](INSTALL.md) → [USE_CASES](USE_CASES.md)
  - 進階：[Skill](SKILLS.md) · [Plugin](PLUGINS.md) · [Hooks](HOOKS.md) · [MCP](MCP-GUIDE.md) · [Subagent](SUBAGENTS.md) · [Computer Use](COMPUTER-USE.md) · [專案指令檔](PROJECT-INSTRUCTIONS.md) · [Agent Teams](AGENT-TEAMS.md) · [AI 安全與治理](terms/ai-sandbox.md) · [多代理系統](terms/multi-agent-system.md)
- [這份指南適合誰？](#這份指南適合誰) — 適合 / 不適合的人
- [核心觀念：AI 工具的三層進化](#核心觀念ai-工具的三層進化) — 顧問 → 員工 → 特遣隊
- [變更驗收 SOP](VALIDATION-SOP.md) — diff、測試、人工確認與 rollback
- [專有名詞速查](#-專有名詞速查不懂的詞來這裡查) — 常用術語速查 → [完整版](GLOSSARY.md)
---

## 本指南的定位

本專案不是單一產品的操作手冊，而是**多工具 AI Coding 知識庫**。內容會依工具與版本變化更新，並明確區分：

- 穩定的工程概念與可複用流程
- 產品特定、需要附版本與官方來源的功能
- 尚待實測的社群說法與效率估計

因此，文件中的時間、價格、模型能力與效率數字都不是保證；使用前請依官方文件與自己的任務做驗證。

---

## 這個專案在幹嘛？

你可能已經用過 ChatGPT 或 Claude.ai 網頁版——丟一段文字進去，它給你一段回覆。這就像請了一個**顧問**：很會分析、很會說，但你還是得自己動手。

這個專案要教你的是另一件事：**讓 AI 變成你的員工**。

不只是聊天，而是讓 AI 直接幫你讀檔案、改文件、跑分析、產報告。差別有多大？想像一下：

| | 顧問模式（網頁版 AI） | 員工模式（Claude Code） |
|---|---|---|
| 你說 | 「幫我寫一封信」 | 「幫我把這 20 封客訴信分類整理成報告」 |
| AI 做 | 給你一封範本，你自己貼上去 | 直接讀取檔案、分類、產出完整報告 |
| 你的工作 | 複製、貼上、手動調整 | 檢查成果、確認送出 |

**這不是科幻小說，這是現在就能做到的事。**

---

## 為什麼非工程師也該學這個？

### 真實的投資報酬率

| 任務 | 傳統做法 | 用 Claude Code | 節省 |
|------|---------|---------------|------|
| 整理會議紀錄 | 依資料量而定 | 需依任務實測 | 不提供固定保證 |
| 翻譯文件 | 依頁數、格式與審稿需求而定 | 需依任務實測 | 不提供固定保證 |
| 分析競品資料 | 依資料量與研究範圍而定 | 需依任務實測 | 不提供固定保證 |
| 產週報摘要 | 依資料量與驗收流程而定 | 需依任務實測 | 不提供固定保證 |

### 駕駛員理論：工具拉高下限，認知決定上限

這就像開車——

- **自排車**（Claude Code）讓你不用學換檔就能上路，**大幅降低門檻**
- 但要開得好、開得快，**還是要懂路況判斷**（你的專業知識）
- AI 工具讓每個人都能「上手」，但你的產業經驗和判斷力，決定了「天花板」在哪裡

**白話說：AI 是你最強的工具，但方向盤在你手上。**

### 附帶技能：為什麼 [Git](terms/git.md) 和 [GitHub](terms/github.md) 也值得學？

用 AI 做事，免不了會修改檔案。萬一改壞了怎麼辦？你需要一顆**後悔藥**——這就是 [Git](terms/git.md)。

而當你需要跟團隊協作（例如 PM 寫技術規格、行銷改網站文案），大家的文件得有個地方**同步**——這就是 [GitHub](terms/github.md)。

| 你的角色 | 為什麼要學 Git/GitHub |
|---------|---------------------|
| **PM** | 技術規格放在 GitHub 上跟程式碼一起管理，改規格用 [PR（Pull Request）](terms/pull-request.md) 讓工程師自動收到通知 |
| **行銷** | 網站文案、Landing Page 內容可以直接在 GitHub 上修改，不用等工程師排程 |
| **行政** | 學會 Git 的存檔機制，讓 AI 修改檔案時永遠有後悔的餘地 |

> 💡 不用一開始就精通，**會 5 個指令就夠日常使用了**：`git status`、`git add`、`git commit`、`git push`、`git pull --rebase`。詳細教學請看 [Git 說明](terms/git.md)。

---

## 快速導覽：從零到上手

### 主線：照順序走（4 站搞定基礎）

| 站 | 頁面 | 內容 |
|---|---|---|
| 🚉 **第一站** | **[README.md](README.md)**（你在這裡） | 了解全貌、搞懂為什麼值得學 |
| 🔍 **第二站** | **[COMPARISON.md](COMPARISON.md)** | 五大 AI 服務比較、訂閱方案怎麼選 |
| 🔧 **第三站** | **[INSTALL.md](INSTALL.md)** | 零基礎安裝手冊（Antigravity 或 Claude Code） |
| 🎯 **第四站** | **[USE_CASES.md](USE_CASES.md)** | 14 個實戰場景，找到你的第一個任務 |

### 進階主題：按需求挑選

走完主線後，根據你的需求挑有興趣的深入學習：

| 主題 | 頁面 | 一句話說明 |
|---|---|---|
| 🎓 **Skill** | [SKILLS.md](SKILLS.md) | 讓 AI 學會專業技能，一鍵重播 |
| 🔌 **Plugin** | [PLUGINS.md](PLUGINS.md) | 一鍵安裝 AI 擴充功能包 |
| ⚡ **Hooks** | [HOOKS.md](HOOKS.md) | 讓 AI 在特定時機自動執行動作 |
| 🔗 **MCP** | [MCP-GUIDE.md](MCP-GUIDE.md) | 幫 AI 裝上感官器官，連接外部工具 |
| 👥 **Subagent** | [SUBAGENTS.md](SUBAGENTS.md) | AI 的分身術，同時處理多件事 |
| 🖥️ **Computer Use** | [COMPUTER-USE.md](COMPUTER-USE.md) | AI 直接幫你操作電腦螢幕 |
| 📝 **專案指令檔** | [PROJECT-INSTRUCTIONS.md](PROJECT-INSTRUCTIONS.md) | 讓 AI 自動記住你的專案規則 |
| 🎖️ **Agent Teams** | [AGENT-TEAMS.md](AGENT-TEAMS.md) | 組建多 AI 特遣隊協作 |

### 工具書：隨時查閱

| 頁面 | 用途 |
|---|---|
| 📋 **[CHEATSHEET.md](CHEATSHEET.md)** | 指令速查卡，印出來貼螢幕旁 |
| 📖 **[GLOSSARY.md](GLOSSARY.md)** | 術語速查手冊，不懂的詞來這裡查 |

---

## 這份指南適合誰？

### ✅ 超級適合你，如果你是⋯

- **PM**：想讓 AI 幫你整理需求、追進度、產文件
- **行銷人員**：想讓 AI 幫你分析數據、批次處理內容、做競品研究
- **行政人員**：想讓 AI 幫你整理資料、自動化重複性工作
- **任何好奇的人**：聽過 AI 很厲害，但不知道具體能幫什麼忙

### ⚠️ 可能不太適合，如果你⋯

- 已經是資深工程師，熟悉 CLI 操作（你可能需要更進階的內容）
- 只想用網頁版 AI 聊天（那就繼續用，但你會錯過更多可能性）

---

## 核心觀念：AI 工具的三層進化

```
Level 1 ─ 網頁聊天（顧問）
           你問一句，它答一句。像 Line 問朋友。

Level 2 ─ Claude Code（員工）          ← 這份指南帶你到這裡
           它能讀你的檔案、改你的文件、跑你的任務。
           像請了一個 7-11 的店員，你說什麼他做什麼。

Level 3 ─ Agent 團隊（特遣隊）
           多個 AI 協作，一個當 PM、一個寫程式、一個做測試。
           像《乘風破浪》的任務小組，各司其職。

────────────────────────────────────────────────────
⚙️ 貫穿全程的基礎建設：Git + GitHub
   不管你在哪個 Level，都需要「存檔」和「協作」的能力。
   Git 是你的後悔藥，GitHub 是你的雲端協作平台。
```

---

## 📖 專有名詞速查（不懂的詞，來這裡查）

讀文件時遇到看不懂的詞？這裡列出最常碰到的，完整版請看 **[專有名詞速查手冊 →](GLOSSARY.md)**

| 詞彙 | 比喻 | 詳細說明 |
|------|------|---------|
| **Terminal / CLI** | 管家熱線 | [→ 詳細](terms/terminal-cli.md) |
| **Git** | 後悔藥 / 時光機 | [→ 詳細](terms/git.md) |
| **GitHub** | 程式碼的 Google Drive | [→ 詳細](terms/github.md) |
| **API Key** | 員工證 / 門禁卡 | [→ 詳細](terms/api-key.md) |
| **Prompt** | 跟同事交辦工作的那句話 | [→ 詳細](terms/prompt.md) |
| **MCP** | AI 的感官器官 | [→ 詳細](terms/mcp.md) |
| **Skill** | 專業證照 | [→ 詳細](terms/skill.md) |
| **Computer Use** | 遙控員工 | [→ 詳細](terms/computer-use.md) |
| **Hooks** | 門口的感應燈 | [→ 詳細](terms/hooks.md) |
| **Plugin** | 手機的 App | [→ 詳細](terms/plugin.md) |
| **AI Sandbox** | 沒有總鑰匙的工作室 | [→ 詳細](terms/ai-sandbox.md) |
| **Prompt Injection** | 藏在資料裡的假指令 | [→ 詳細](terms/prompt-injection.md) |
| **Multi-Agent System** | 分工明確的 AI 團隊 | [→ 詳細](terms/multi-agent-system.md) |

> 👉 以上只列最常見的 10 個，全部術語（含比喻對照總表）請看 **[完整速查手冊](GLOSSARY.md)**

---

## 下一步

準備好了嗎？前往 **[安裝指南 →](INSTALL.md)** 開始動手吧！

不想裝？先翻翻 **[使用場景 →](USE_CASES.md)** 看看 AI 能幫你做什麼，找到動力再回來。
