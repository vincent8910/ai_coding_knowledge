# AI 服務比較：訂閱方案 & IDE vs CLI

> **該訂哪一家？IDE 跟 CLI 差在哪？這篇幫你整理清楚。**
>
- **整理版本：2026 年 7 月**（價格、方案與產品能力變動快速；請以各家官方頁面為準）

---

## 先搞懂兩個概念：IDE 和 CLI

在比較各家服務之前，先弄清楚兩種使用 AI 的方式：

### [IDE](terms/ide.md)（整合開發環境）— 像全配的辦公室

**IDE** 是 **Integrated Development Environment** 的縮寫。你可以把它想成一間**全配的辦公室**——有桌子（程式編輯器）、有白板（預覽視窗）、有助手（AI）、有檔案櫃（專案管理），全部整合在一個視窗裡。

代表產品：**Cursor**、**Google Antigravity**、**[VS Code](terms/vscode.md) + GitHub Copilot**

### CLI（命令列工具）— 像管家熱線

**[CLI](terms/terminal-cli.md)** 就是在 [Terminal](terms/terminal-cli.md) 裡用文字指令操作 AI。沒有花俏的介面，但**速度快、彈性大、能做的事更多**。

代表產品：**Claude Code**、**Gemini CLI**、**OpenAI Codex CLI**、**Grok CLI**、**Cursor CLI**

---

## IDE vs CLI：優缺點比較

| | IDE（圖形介面） | CLI（命令列） |
|---|---|---|
| **比喻** | 附導航的自排車 | 手排賽車 |
| **上手難度** | ⭐ 低——看得到按鈕，點就對了 | ⭐⭐⭐ 中高——要記指令 |
| **適合誰** | 視覺型學習者、初學者、前端開發 | 效率控、自動化需求、進階用戶 |
| **操作速度** | 中——需要點選、等畫面載入 | 快——打字直接執行，沒有介面延遲 |
| **自動化能力** | 弱——大多需要手動操作 | 強——可以寫腳本批次執行 |
| **電腦資源** | 較吃資源（要跑整個編輯器） | 輕量（只跑一個 Terminal 視窗） |
| **檔案操作** | 方便——拖拉就好 | 強大——批次處理、正則搜尋 |
| **協作功能** | 較好——有分享、即時協作 | 較弱——主要是單人使用 |
| **客製化** | 中——靠外掛擴充 | 高——腳本 + MCP + Hook 無限可能 |
| **離線能力** | 部分支援 | 部分支援（仍需連 API） |

### 一句話總結

> **IDE 像餐廳吃飯**——菜單清楚、服務到位、舒適方便
> **CLI 像自己下廚**——前置功夫多一點，但想做什麼都可以、更快、更省錢

### 我該選哪個？

```
你完全不會寫程式？
├─ 是 → 先用 IDE（Cursor 或 Antigravity）熟悉 AI 輔助
│        等習慣後再試 CLI 解鎖更多可能性
└─ 否 → 直接上 CLI，效率更高
         IDE 當作輔助使用

你的主要需求是？
├─ 寫程式 / 前端開發 → IDE 為主，CLI 為輔
├─ 資料處理 / 自動化 → CLI 為主
├─ 文件整理 / 翻譯 → CLI 就夠了
└─ 都想要 → 很多服務同時提供 IDE 和 CLI，可以混用
```

---

## 五大 AI 服務訂閱方案比較

### 總覽表

> 💡 以下方案名稱與價格欄位是文件整理時的參考快照，以美金計價；AI 產品價格變動頻繁，請在購買前直接核對各家官方頁面。

| 廠商 | 免費方案 | 基本付費 | 進階方案 | 旗艦方案 | 官網 |
|------|---------|---------|---------|---------|------|
| **OpenAI** | ChatGPT Free | Go $8/月 · Plus $20/月 | Pro $200/月 | Enterprise（洽詢） | [chatgpt.com/pricing](https://chatgpt.com/pricing/) |
| **Anthropic** | Claude Free | Pro $20/月 | Max 5x $100/月 | Max 20x $200/月 | [claude.com/pricing](https://claude.com/pricing) |
| **Google** | Gemini Free | AI Pro $19.99/月 | AI Ultra ~$42/月 | Enterprise（洽詢） | [gemini.google/subscriptions](https://gemini.google/subscriptions/) |
| **xAI** | Grok Free | SuperGrok $30/月 | SuperGrok Heavy $300/月 | — | [grok.com/plans](https://grok.com/plans) |
| **Cursor** | Cursor Free | Pro $20/月 | Pro+ $60/月 | Ultra $200/月 | [cursor.com/pricing](https://www.cursor.com/pricing) |

---

### 各家詳細比較

#### 1. OpenAI（ChatGPT + Codex CLI）

| 方案 | 月費 | 你能用什麼 |
|------|------|-----------|
| **Free** | $0 | ChatGPT 網頁聊天（有次數限制）、基本模型、含有限 [Codex](terms/codex.md) 使用 |
| **Go** | $8 | 入門付費方案、GPT-5.3 存取（含廣告） |
| **Plus** | $20 | GPT-5.3 全功能、Deep Research、Codex CLI + Codex App |
| **Pro** | $200 | 無限使用頂級模型、延伸推理、最高優先級 |
| **Team** | $25-30/人 | 團隊協作空間、管理功能 |

**IDE 工具：** 無自有 IDE（透過 VS Code + GitHub Copilot 整合）
**CLI 工具：** [Codex CLI](https://github.com/openai/codex)（開源，`npm i -g @openai/codex`）— Plus 以上方案即可使用
**桌面 App：** [Codex App](terms/codex.md)（macOS + Windows）— 可同時管理多個 Agent 平行運作

---

#### 2. Anthropic（Claude + Claude Code CLI）

| 方案 | 月費 | 你能用什麼 |
|------|------|-----------|
| **Free** | $0 | Claude 網頁聊天（有次數限制） |
| **Pro** | $20 | 更高用量、Claude Code CLI、[Computer Use（電腦操控）](terms/computer-use.md) |
| **Max 5x** | $100 | Pro 的 5 倍用量、優先存取、持久記憶 |
| **Max 20x** | $200 | Pro 的 20 倍用量、最高優先級 |
| **Team** | $25-30/人 | 團隊協作、管理後台（$150/人含 Claude Code） |

**IDE 工具：** 無自有 IDE（可搭配 Cursor / VS Code 使用 Claude 模型）
**CLI 工具：** [Claude Code](https://docs.anthropic.com/en/docs/claude-code)（`npm i -g @anthropic-ai/claude-code`）— Pro 以上方案或 API 額度即可使用
**最新亮點：** [Computer Use](terms/computer-use.md)（AI 直接操控你的電腦）、[排程任務](terms/hooks.md)（AI 在背景自動工作）、[Subagent](terms/subagent.md)（多分身平行處理）

> 💡 **這份指南的主角就是 Claude Code！** 訂閱 Pro 方案後，你就能直接在 Terminal 使用，不需要額外購買 API 額度。

---

#### 3. Google（Gemini + Antigravity IDE + Gemini CLI）

| 方案 | 月費 | 你能用什麼 |
|------|------|-----------|
| **Free** | $0 | Gemini 網頁聊天、Gemini CLI 基本用量 |
| **AI Pro** | $19.99 | Gemini 進階模型、Antigravity IDE、Gemini CLI 進階、5TB 雲端 |
| **AI Ultra** | ~$42/月（$124.99/季） | 最高等級模型、25,000 AI credits |
| **Enterprise** | 洽詢 | 企業管理、合規、自訂部署 |

**IDE 工具：** [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)（基於 VS Code 改造的 AI-First IDE，AI Pro 以上方案適用）
**CLI 工具：** [Gemini CLI](https://github.com/google-gemini/gemini-cli)（開源，免費帳號即有基本用量）

> 💡 **CP 值亮點：** Google AI Pro 除了 AI 功能，還附 2TB Google 雲端空間，如果你本來就在用 Google 全家桶，這個方案很划算。

---

#### 4. xAI（Grok + Grok CLI）

| 方案 | 月費 | 你能用什麼 |
|------|------|-----------|
| **Free** | $0 | Grok 網頁聊天（有限制） |
| **X Premium+** | $40（或 $350/年） | 優先 Grok 存取、無廣告 X 瀏覽 |
| **SuperGrok** | $30 | 進階 Grok 模型、更高用量 |
| **SuperGrok Heavy** | $300 | 最高等級存取、超大用量上限 |

**IDE 工具：** 無自有 IDE
**CLI 工具：** [Grok CLI](https://github.com/superagent-ai/grok-cli)（社群開源版）— xAI 官方 Grok Code 開發中

> ⚠️ **注意：** xAI 的 CLI 工具目前以社群版為主，官方的 Grok Code（CLI 版）仍在開發中。生態系成熟度不如其他家。

---

#### 5. Cursor（IDE + CLI 一體）

| 方案 | 月費 | 你能用什麼 |
|------|------|-----------|
| **Free** | $0 | 基本 AI 輔助、有限次數 |
| **Pro** | $20 | 進階 AI 模型、更高用量 |
| **Pro+** | $60 | 更高用量上限 |
| **Ultra** | $200 | 最高等級用量 |
| **Teams** | $40/人 | 團隊功能、集中管理 |

**IDE 工具：** Cursor IDE 本身（主打產品，基於 VS Code）
**CLI 工具：** Cursor CLI（2026 年 1 月推出，與 IDE 共享用量額度）

> 💡 **特殊之處：** Cursor 是唯一「IDE 優先」的服務。CLI 和 IDE 共用同一份訂閱額度，但 CLI 沒有 Auto 模式（IDE 的無限使用模式），所以 CLI 重度使用者要注意額度消耗。
>
> Cursor 的另一大優勢是**多模型支援**——你可以在 Cursor 裡用 Claude、GPT、Gemini 等不同模型，不被單一廠商綁定。

---

## 各家 IDE 與 CLI 工具對照表

| 廠商 | 網頁聊天（顧問） | IDE（圖形員工） | CLI（命令列員工） |
|------|----------------|----------------|-----------------|
| **OpenAI** | ChatGPT | ❌（靠第三方） | ✅ Codex CLI |
| **Anthropic** | Claude.ai | ❌（靠第三方） | ✅ Claude Code |
| **Google** | Gemini | ✅ Antigravity | ✅ Gemini CLI |
| **xAI** | Grok | ❌ | 🔄 Grok CLI（開發中） |
| **Cursor** | ❌ | ✅ Cursor IDE | ✅ Cursor CLI |

---

## 非工程師怎麼選？決策指南

### 如果你只是想試試看（預算 $0）

**推薦：Google Gemini Free + Gemini CLI**

理由：免費額度最大方，CLI 開源免費，Google 帳號就能用。

### 如果你願意付一份訂閱（預算 $20/月）

**推薦：Anthropic Claude Pro**

理由：
- $20 含 Claude Code CLI 使用權（本指南教的就是這個）
- Claude 在文字處理、分析、程式碼方面表現頂級
- 生態系成熟，教學資源豐富

**備選：OpenAI ChatGPT Plus**
- 如果你已經習慣用 ChatGPT，Plus 含 Codex CLI 使用權

### 如果你主要需要寫程式

**推薦：Cursor Pro（$20/月）或 Google AI Pro（$19.99/月）**

理由：
- Cursor 的 IDE 體驗是最完整的，適合需要大量寫程式的人
- Google AI Pro 包含 Antigravity IDE + Gemini CLI，一個訂閱兩種用法

### 如果你是重度使用者

**推薦：Anthropic Claude Max 5x（$100/月）+ Cursor Pro（$20/月）**

理由：
- Claude Max 給你大量 CLI 使用額度，處理大量文件和自動化
- Cursor IDE 用來寫程式，還能在裡面用 Claude 模型
- 兩者搭配，覆蓋所有使用場景

---

## 一張圖看懂

```
                    便宜 ←————————→ 貴

  純聊天     ChatGPT Free ─ Claude Free ─ Gemini Free ─ Grok Free
  （顧問）        $0              $0           $0           $0

  有 CLI     Claude Pro ── ChatGPT Plus ── Gemini AI Pro
  （員工）      $20            $20            $20

  有 IDE     Cursor Pro ── Antigravity（含在 AI Pro）
  （辦公室）    $20            $20

  全都要     Claude Max ─── SuperGrok Heavy ── ChatGPT Pro
  （VIP）      $100-200         $300             $200
```

---

## 下一步

確定要用 Claude Code？回到 **[安裝指南 →](INSTALL.md)** 開始動手！

想先看看能做什麼？翻翻 **[使用場景 →](USE_CASES.md)**

查指令？**[速查卡 →](CHEATSHEET.md)**

回首頁？**[README →](README.md)**
