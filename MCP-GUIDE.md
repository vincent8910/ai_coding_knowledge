# MCP 教學：幫 AI 裝上感官器官

> **想像你雇了一個超級天才員工，但他被關在一間密室裡——沒有電話、沒有電腦、沒有窗戶。你只能從門縫塞紙條進去，他寫好再塞回來。MCP 就是幫這個天才裝上眼睛、耳朵和手，讓他可以自己打電話、上網、查資料。**

---

## 大綱

- [MCP 是什麼？](#mcp-是什麼) — 用生活比喻搞懂 AI 的「感官器官」
- [MCP 的基本觀念](#mcp-的基本觀念) — Server、Client、三分鐘搞懂架構
- [怎麼安裝 MCP Server？](#怎麼安裝-mcp-server) — Claude Code 跟 Antigravity 兩條路線
- [推薦 MCP Server：15 個最實用的](#推薦-mcp-server15-個最實用的) — 分四大類，附安裝指令
- [動手做：安裝你的第一個 MCP Server](#動手做安裝你的第一個-mcp-server) — 手把手帶你裝 Tavily 搜尋引擎
- [MCP 安全注意事項](#mcp-安全注意事項) — 別讓 AI 拿到不該拿的鑰匙
- [下一步](#下一步) — 裝好感官之後，接下來要幹嘛？

---

## MCP 是什麼？

### 先來一個生活比喻

你開了一家公司，找了一個超厲害的分析師（AI）。

**沒有 MCP 的時候：**

這個分析師被關在一間沒有窗戶的辦公室裡。他很聰明，但：

- 想查今天的新聞？「抱歉，我沒有網路。」
- 想看你的 Google 行事曆？「抱歉，我連不上去。」
- 想幫你發 Slack 訊息？「抱歉，我沒有 Slack 帳號。」
- 想查你的資料庫？「抱歉，我什麼都連不到。」

你只能自己把資料印出來、走進密室遞給他，等他看完再跟你說結論。**超累。**

**有了 MCP 之後：**

你在他的辦公室裝了電話、電腦、門禁卡、各種螢幕。現在他可以：

- 🔍 **眼睛**（搜尋引擎）：自己上網查最新資訊
- 📅 **手**（Google Calendar）：直接幫你排行程
- 💬 **嘴巴**（Slack）：幫你傳訊息給同事
- 🗄️ **觸覺**（資料庫）：自己去翻資料庫找答案

**一句話總結：MCP 就是幫 AI 裝上感官器官，讓它不再是個被關在密室裡的天才。**

### 沒有 MCP vs 有 MCP

| | 😶 沒有 MCP | 🦸 有 MCP |
|---|---|---|
| **查資料** | 你自己 Google，複製貼上給 AI | AI 自己搜尋網路，直接告訴你結果 |
| **看行事曆** | 你截圖、描述今天有哪些會 | AI 直接讀你的 Google Calendar |
| **查資料庫** | 你跑 SQL、把結果貼給 AI 分析 | AI 直接連上資料庫查詢 |
| **操作瀏覽器** | 你自己點來點去、截圖回報 | AI 用 Playwright 自動操作、截圖 |
| **傳訊息** | AI 寫好草稿，你自己去貼 | AI 直接幫你發 Slack / Email |
| **記住東西** | 每次對話都要重新交代背景 | AI 有長期記憶，記得你之前說過什麼 |

### MCP 是一個「標準規格」

這裡很重要：**MCP 不是某一個工具，而是一個標準**。

就像 USB 是一種接口標準——不管你的隨身碟是哪個牌子的，只要符合 USB 規格，都能插進你的電腦。

MCP 也一樣：不管是查網路、讀行事曆、還是操作瀏覽器，只要那個工具遵守 MCP 的規格，就能被 AI「插上去」使用。

```
USB 的世界：                    MCP 的世界：
┌──────────┐                   ┌──────────┐
│  電腦     │ ← USB 接口 →     │  AI      │ ← MCP 協議 →
├──────────┤                   ├──────────┤
│ 隨身碟   │                   │ 搜尋引擎  │
│ 滑鼠     │                   │ Google 日曆│
│ 鍵盤     │                   │ Slack     │
│ 印表機   │                   │ 資料庫    │
│ 外接硬碟  │                   │ 瀏覽器    │
└──────────┘                   └──────────┘
```

**所以：你不用等某家公司出特定的 AI 功能——只要有人做了 MCP Server，任何支援 MCP 的 AI 都能用。**

---

## MCP 的基本觀念

別被「Server」和「Client」這些詞嚇到，其實就三個角色：

### 1. MCP Server（外部工具的橋樑）

**比喻：翻譯官**

MCP Server 就像一個翻譯官，站在 AI 和外部服務之間。

AI 不會直接講 Google Calendar 的語言（[API](terms/api.md)），所以需要一個翻譯官幫忙：

```
AI：「我想看明天有什麼會議」
      ↓
MCP Server（翻譯官）：把這句話翻譯成 Google Calendar API 的格式
      ↓
Google Calendar：回傳會議資料
      ↓
MCP Server（翻譯官）：把資料翻譯成 AI 看得懂的格式
      ↓
AI：「你明天 10 點有跟客戶的會議，14 點有 1-on-1。」
```

每個 MCP Server 負責翻譯**一個服務**。想連更多服務？多裝幾個 MCP Server 就好。

### 2. MCP Client（AI 那一端）

**比喻：你的大腦**

MCP Client 就是使用這些感官器官的「大腦」。目前支援 MCP 的 Client 主要有：

| Client | 說明 |
|--------|------|
| **[Claude Code](terms/terminal-cli.md)** | Anthropic 官方的命令列工具，MCP 支援最完整 |
| **[Antigravity](terms/antigravity.md)** | Google 的 AI IDE，也支援 MCP |
| **Claude Desktop** | Anthropic 的桌面 App，支援部分 MCP |

你不用管 Client 怎麼跟 Server 溝通的——你只要負責「裝上去」就好，剩下的它們會自己搞定。

### 3. 整體架構（超簡單版）

```
┌─────────────┐     MCP 協議     ┌─────────────────┐     API      ┌──────────┐
│             │ ◄──────────────► │                 │ ◄──────────► │          │
│  你 + AI    │                  │  MCP Server     │              │ 外部服務  │
│ (Client)    │                  │  (翻譯官)       │              │          │
│             │                  │                 │              │          │
└─────────────┘                  └─────────────────┘              └──────────┘

  Claude Code                    Tavily MCP Server                 Google 搜尋
  / Antigravity                  Google Calendar MCP Server        Google Calendar
                                 Slack MCP Server                  Slack
                                 ...                               ...
```

**白話翻譯：** 你對 AI 說話 → AI 透過 MCP 叫翻譯官去跟外部服務溝通 → 翻譯官把結果帶回來 → AI 整理好告訴你。

---

## 怎麼安裝 MCP Server？

MCP Server 的安裝方式取決於你用的是哪個工具。以下分兩條路線：

### 路線 A：Claude Code 用戶

Claude Code 內建了 `claude mcp add` 指令，安裝 MCP Server 超簡單。

#### 方法一：用指令安裝（推薦）

打開 [Terminal（管家熱線）](terms/terminal-cli.md)，輸入：

```bash
# 安裝一個 MCP Server 的基本格式
claude mcp add <server名稱> -- <啟動指令>

# 範例：安裝 Tavily 搜尋引擎
claude mcp add tavily -- npx -y tavily-mcp@latest
```

就這樣。一行指令搞定。

Claude Code 會自動把設定寫進你的設定檔，下次啟動就會自動連接。

#### 方法二：手動編輯設定檔

如果你喜歡自己動手，也可以直接編輯設定檔。

設定檔位置：
- **全域設定**（所有專案都能用）：`~/.claude/settings.json`
- **專案設定**（只有這個專案用）：`專案資料夾/.claude/settings.json`

設定格式長這樣：

```json
{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "你的-api-key"
      }
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

> 💡 有些 MCP Server 需要 [API Key（員工證）](terms/api-key.md)，例如 Tavily 需要去他們官網申請一把金鑰。會在下面每個 Server 的介紹裡說明。

#### 查看目前裝了哪些 MCP Server

```bash
# 列出所有已安裝的 MCP Server
claude mcp list
```

#### 移除不要的 MCP Server

```bash
# 移除指定的 MCP Server
claude mcp remove <server名稱>
```

---

### 路線 B：Antigravity 用戶

[Antigravity](terms/antigravity.md) 也支援 MCP，設定方式如下：

1. 打開 Antigravity
2. 點擊左下角的 **齒輪圖示**（Settings）
3. 找到 **MCP Servers** 區塊
4. 點 **Add Server**
5. 填入 Server 的名稱和啟動指令

或者直接編輯設定檔（路徑根據你的系統可能不同）：

```json
{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "你的-api-key"
      }
    }
  }
}
```

> 📌 Antigravity 的 MCP 設定格式跟 Claude Code 基本相同，所以下面介紹的安裝指令兩邊都適用。

---

## 推薦 MCP Server：15 個最實用的

以下是我們精選的 15 個 MCP Server，按照功能分成四大類。

每個都會告訴你：它是什麼、能做什麼、怎麼裝、以及一個實際使用範例。

---

### 🔍 搜尋與資訊類

讓 AI 不再是個「斷網的天才」——裝上眼睛，讓它看見世界。

#### 1. Tavily — 讓 AI 能搜尋網路

| 項目 | 說明 |
|------|------|
| **它是什麼** | 專為 AI 設計的搜尋引擎，比一般 Google 搜尋更適合 AI 解析 |
| **比喻** | 幫 AI 裝了一雙能看見整個網路的眼睛 |
| **需要 API Key** | ✅ 需要（免費方案每月 1000 次查詢） |
| **API Key 申請** | [tavily.com](https://tavily.com) 註冊即可取得 |

**安裝指令：**
```bash
# 先設定 API Key（把 xxx 換成你的金鑰）
export TAVILY_API_KEY=xxx

# 安裝
claude mcp add tavily -- npx -y tavily-mcp@latest
```

**實際使用範例：**
```
你：幫我搜尋 2026 年最新的 AI 工具趨勢報告
AI：（透過 Tavily 搜尋網路）我找到了幾篇最新報告，以下是重點摘要...
```

---

#### 2. Context7 — 查官方技術文件

| 項目 | 說明 |
|------|------|
| **它是什麼** | 專門搜尋技術文件和官方文檔的 MCP Server |
| **比喻** | AI 專屬的圖書館員，專門查技術書 |
| **需要 API Key** | ❌ 不需要，免費使用 |

**安裝指令：**
```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
```

**實際使用範例：**
```
你：React 的 useEffect 怎麼用？幫我查官方文件
AI：（透過 Context7 查詢）根據 React 官方文件，useEffect 的用法是...
```

---

#### 3. Brave Search — 替代搜尋引擎

| 項目 | 說明 |
|------|------|
| **它是什麼** | Brave 瀏覽器提供的搜尋 API，注重隱私 |
| **比喻** | 另一雙眼睛，看的角度跟 Tavily 不太一樣 |
| **需要 API Key** | ✅ 需要（免費方案每月 2000 次查詢） |
| **API Key 申請** | [brave.com/search/api](https://brave.com/search/api/) |

**安裝指令：**
```bash
export BRAVE_API_KEY=xxx
claude mcp add brave-search -- npx -y @anthropic/mcp-brave-search@latest
```

**實際使用範例：**
```
你：搜尋台灣最近的 AI 相關法規新聞
AI：（透過 Brave Search 搜尋）以下是最近幾週的相關新聞...
```

---

### 📅 生產力工具類

讓 AI 接上你每天在用的工具——行事曆、文件、通訊軟體。

#### 4. Google Calendar — 讀寫行事曆

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 直接讀取和管理你的 Google 日曆 |
| **比喻** | 幫 AI 裝了一隻手，可以幫你翻日曆、寫行程 |
| **需要 API Key** | ✅ 需要 Google OAuth 認證 |
| **設定方式** | 需要先在 Google Cloud Console 建立 OAuth 憑證 |

**安裝指令：**
```bash
claude mcp add google-calendar -- npx -y @anthropic/mcp-google-calendar@latest
```

**實際使用範例：**
```
你：我明天有哪些會議？
AI：你明天有 3 個會議：10:00 週會、14:00 客戶簡報、16:00 1-on-1。
```

---

#### 5. Google Drive — 存取 Google 文件

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 讀取你的 Google Docs、Sheets、Slides |
| **比喻** | AI 可以自己去你的雲端檔案櫃翻資料 |
| **需要 API Key** | ✅ 需要 Google OAuth 認證 |

**安裝指令：**
```bash
claude mcp add google-drive -- npx -y @anthropic/mcp-google-drive@latest
```

**實際使用範例：**
```
你：幫我讀取「Q1 業績報告」那份 Google Sheet，然後做摘要
AI：（直接讀取 Google Drive）Q1 總營收為...，以下是重點摘要...
```

---

#### 6. Slack — 讀寫 Slack 訊息

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 可以讀取和發送 Slack 訊息 |
| **比喻** | 幫 AI 裝了嘴巴和耳朵，能在 Slack 上溝通 |
| **需要 API Key** | ✅ 需要 Slack Bot Token |
| **設定方式** | 需在 Slack App 管理頁面建立 Bot |

**安裝指令：**
```bash
export SLACK_BOT_TOKEN=xoxb-your-token
claude mcp add slack -- npx -y @anthropic/mcp-slack@latest
```

**實際使用範例：**
```
你：幫我在 #general 頻道發一則公告，說明天下午 2 點有全體會議
AI：已經在 #general 發送了公告訊息。
```

---

#### 7. Notion — 讀寫 Notion 頁面

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 存取你的 Notion 工作區 |
| **比喻** | AI 可以翻你的 Notion 筆記本、幫你寫新頁面 |
| **需要 API Key** | ✅ 需要 Notion Integration Token |
| **API Key 申請** | 在 Notion 的 Settings → Integrations 建立 |

**安裝指令：**
```bash
export NOTION_API_KEY=secret_xxx
claude mcp add notion -- npx -y @anthropic/mcp-notion@latest
```

**實際使用範例：**
```
你：幫我把今天的會議紀錄整理好，寫到 Notion 的「會議紀錄」頁面
AI：已經把會議紀錄整理好並寫入 Notion 了，這是連結...
```

---

### 📊 資料處理類

讓 AI 直接碰資料——不用你當中間人複製貼上。

#### 8. PostgreSQL / MySQL — 查詢資料庫

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 直接連上 [資料庫](terms/database.md) 查詢資料 |
| **比喻** | AI 拿到了資料庫的鑰匙，可以自己去查資料 |
| **需要設定** | 資料庫連線資訊（主機、帳號、密碼） |

**安裝指令（以 PostgreSQL 為例）：**
```bash
export DATABASE_URL=postgresql://user:password@localhost:5432/mydb
claude mcp add postgres -- npx -y @anthropic/mcp-postgres@latest
```

**實際使用範例：**
```
你：上個月有多少新註冊用戶？按照每週分組告訴我
AI：（直接查詢資料庫）上個月共有 1,234 位新用戶，週分佈如下...
```

> ⚠️ **安全提醒：** 強烈建議使用**唯讀帳號**連接資料庫。絕對不要讓 AI 連上正式環境（production）的管理員帳號。詳見 [安全注意事項](#mcp-安全注意事項)。

---

#### 9. GitHub — 管理程式碼倉庫

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 可以操作 [GitHub](terms/github.md)：看 Issue、開 PR、管理倉庫 |
| **比喻** | AI 拿到了 GitHub 的通行證，可以自己去看和處理 |
| **需要 API Key** | ✅ 需要 GitHub Personal Access Token |

**安裝指令：**
```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx
claude mcp add github -- npx -y @anthropic/mcp-github@latest
```

**實際使用範例：**
```
你：幫我看一下我們的 repo 有哪些還沒處理的 Issue
AI：目前有 7 個 open issues，其中 3 個是 bug、2 個是 feature request...
```

---

#### 10. Filesystem — 進階檔案管理

| 項目 | 說明 |
|------|------|
| **它是什麼** | 加強版的檔案系統存取，讓 AI 能更靈活地操作檔案 |
| **比喻** | 把 AI 的手升級——不只能拿放檔案，還能搜尋、整理、搬移 |
| **需要 API Key** | ❌ 不需要 |

**安裝指令：**
```bash
claude mcp add filesystem -- npx -y @anthropic/mcp-filesystem@latest /path/to/allowed/directory
```

**實際使用範例：**
```
你：幫我把 Downloads 資料夾裡所有的 PDF 搬到 Documents/Reports
AI：找到 15 個 PDF 檔案，已經全部搬過去了。
```

> 💡 注意：安裝時要指定 AI **能存取的資料夾路徑**，避免讓它碰到不該碰的地方。

---

### 🌐 自動化類

讓 AI 不只動腦，還能動手——自動操作瀏覽器、深度思考、記住東西。

#### 11. Playwright — 瀏覽器自動化

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 操控真正的瀏覽器——打開網頁、點按鈕、填表單、截圖 |
| **比喻** | AI 的遙控手臂，可以操作瀏覽器做任何你能做的事 |
| **需要 API Key** | ❌ 不需要 |

**安裝指令：**
```bash
claude mcp add playwright -- npx -y @anthropic/mcp-playwright@latest
```

**實際使用範例：**
```
你：幫我打開競品的官網，截圖他們的定價頁面
AI：（自動打開瀏覽器、導航到定價頁、截圖）截圖完成，以下是他們的定價方案...
```

---

#### 12. Puppeteer — 另一個瀏覽器自動化選擇

| 項目 | 說明 |
|------|------|
| **它是什麼** | Google 開發的瀏覽器自動化工具，跟 Playwright 類似 |
| **比喻** | 另一隻遙控手臂，功能差不多，風格不同 |
| **需要 API Key** | ❌ 不需要 |

**安裝指令：**
```bash
claude mcp add puppeteer -- npx -y @anthropic/mcp-puppeteer@latest
```

**實際使用範例：**
```
你：幫我自動登入公司內部系統，把今天的報表下載下來
AI：（自動操作瀏覽器）已經下載完成，報表在 Downloads 資料夾裡。
```

> 💡 **Playwright vs Puppeteer 怎麼選？** 建議先裝 Playwright——它支援更多瀏覽器（Chrome、Firefox、Safari），功能也比較新。Puppeteer 只支援 Chrome，但如果你有特殊需求也可以兩個都裝。

---

#### 13. Sequential Thinking — 深度思考引擎

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 把複雜問題拆成小步驟，一步一步推理 |
| **比喻** | 幫 AI 裝了一個「慢下來仔細想」的按鈕 |
| **需要 API Key** | ❌ 不需要 |

**安裝指令：**
```bash
claude mcp add sequential-thinking -- npx -y @anthropic/mcp-sequential-thinking@latest
```

**實際使用範例：**
```
你：幫我分析要不要進入日本市場，考慮所有層面
AI：（啟動 Sequential Thinking，拆成 8 個分析步驟）
    Step 1: 市場規模分析...
    Step 2: 競爭對手現況...
    Step 3: 法規限制...
    ...最終建議...
```

---

#### 14. Memory — 跨對話的長期記憶

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 在不同對話之間記住重要資訊 |
| **比喻** | AI 的筆記本——關掉對話再打開，它還記得你之前說過什麼 |
| **需要 API Key** | ❌ 不需要 |

**安裝指令：**
```bash
claude mcp add memory -- npx -y @anthropic/mcp-memory@latest
```

**實際使用範例：**
```
# 第一天的對話
你：我們公司叫「好棒科技」，主要產品是 SaaS 平台，客戶大多在東南亞

# 三天後的新對話
你：幫我寫一封開發信
AI：（從記憶中找到你的公司資訊）好的，針對好棒科技的 SaaS 平台，
    以東南亞客戶為目標，我幫你寫了這封開發信...
```

---

#### 15. Email — 收發電子郵件

| 項目 | 說明 |
|------|------|
| **它是什麼** | 讓 AI 可以讀取和發送電子郵件 |
| **比喻** | AI 的私人信箱——能幫你讀信、回信、寫信 |
| **需要設定** | ✅ 需要 Email 帳號授權 |

**安裝指令（以 Gmail 為例）：**
```bash
claude mcp add gmail -- npx -y @anthropic/mcp-gmail@latest
```

**實際使用範例：**
```
你：幫我看一下今天有沒有客戶的緊急郵件
AI：（讀取收件匣）你今天收到 23 封信，其中有 2 封來自客戶標記為「緊急」...
```

---

### 快速對照表：15 個 MCP Server 總覽

| # | 名稱 | 類別 | 需要 API Key | 一句話說明 |
|---|------|------|:---:|------|
| 1 | Tavily | 🔍 搜尋 | ✅ | AI 能搜尋全網路 |
| 2 | Context7 | 🔍 搜尋 | ❌ | AI 能查官方技術文件 |
| 3 | Brave Search | 🔍 搜尋 | ✅ | 注重隱私的替代搜尋 |
| 4 | Google Calendar | 📅 生產力 | ✅ | AI 能讀寫你的行事曆 |
| 5 | Google Drive | 📅 生產力 | ✅ | AI 能存取雲端文件 |
| 6 | Slack | 📅 生產力 | ✅ | AI 能收發 Slack 訊息 |
| 7 | Notion | 📅 生產力 | ✅ | AI 能讀寫 Notion 頁面 |
| 8 | PostgreSQL | 📊 資料 | ⚙️ | AI 能直接查資料庫 |
| 9 | GitHub | 📊 資料 | ✅ | AI 能管理 GitHub 倉庫 |
| 10 | Filesystem | 📊 資料 | ❌ | AI 能進階操作檔案 |
| 11 | Playwright | 🌐 自動化 | ❌ | AI 能操控瀏覽器 |
| 12 | Puppeteer | 🌐 自動化 | ❌ | AI 能操控 Chrome |
| 13 | Sequential Thinking | 🌐 自動化 | ❌ | AI 能深度逐步推理 |
| 14 | Memory | 🌐 自動化 | ❌ | AI 能跨對話記住東西 |
| 15 | Email | 🌐 自動化 | ✅ | AI 能收發電子郵件 |

---

## 動手做：安裝你的第一個 MCP Server

紙上談兵夠了，我們來實際裝一個。

選擇 **Tavily（網路搜尋）** 作為你的第一個 MCP Server——因為它最實用、設定最簡單、而且有免費方案。

### Step 1：確認前置條件

你需要已經安裝好以下東西（如果還沒裝，去看 [安裝指南](INSTALL.md)）：

- ✅ [Node.js](terms/nodejs.md)（辦公室水電）
- ✅ [Claude Code](terms/terminal-cli.md) 或 [Antigravity](terms/antigravity.md)

確認 Node.js 有裝好：

```bash
node --version
# 應該會顯示 v18.x.x 或更高
```

### Step 2：申請 Tavily API Key

1. 打開瀏覽器，前往 [tavily.com](https://tavily.com)
2. 點 **Sign Up**（註冊）
3. 用 Google 帳號或 Email 註冊
4. 登入後，在 Dashboard 頁面找到你的 **API Key**
5. 複製那一串長長的金鑰（像 `tvly-xxxxxxxxxxxxxxxxxx`）

> 💡 免費方案每月有 1,000 次搜尋，日常使用綽綽有餘。

### Step 3：安裝 MCP Server

打開 Terminal，輸入以下指令：

**方法 A：安裝時直接帶入 API Key**

```bash
TAVILY_API_KEY=tvly-你的金鑰 claude mcp add tavily -- npx -y tavily-mcp@latest
```

**方法 B：先設定環境變數，再安裝**

```bash
# Windows（Git Bash）
export TAVILY_API_KEY=tvly-你的金鑰

# macOS / Linux
export TAVILY_API_KEY=tvly-你的金鑰

# 然後安裝
claude mcp add tavily -- npx -y tavily-mcp@latest
```

> 📌 關於 [環境變數（隱形備忘錄）](terms/environment-variable.md) 的詳細說明，請看對應的術語頁面。

### Step 4：驗證安裝成功

```bash
# 查看已安裝的 MCP Server
claude mcp list
```

你應該會看到類似這樣的輸出：

```
tavily: npx -y tavily-mcp@latest
```

### Step 5：試用！

啟動 Claude Code：

```bash
claude
```

然後對它說：

```
幫我搜尋 2026 年 AI 產業最新趨勢
```

如果一切正常，Claude 會自動呼叫 Tavily 搜尋網路，然後把搜尋結果整理成摘要給你。

**恭喜！你的 AI 現在有眼睛了！** 🎉

### 如果出問題了？

| 問題 | 可能原因 | 解決方法 |
|------|---------|---------|
| `command not found: claude` | Claude Code 沒裝好 | 回去看 [安裝指南](INSTALL.md) |
| `npm ERR!` | [Node.js](terms/nodejs.md) 沒裝好 | 確認 `node --version` 有輸出 |
| AI 沒有使用搜尋 | API Key 可能沒設對 | 重新執行 Step 3 |
| 搜尋失敗 | API Key 過期或用完額度 | 去 Tavily Dashboard 檢查 |

---

## MCP 安全注意事項

MCP 很強大，但**能力越大，責任越大**。

因為 MCP Server 連接的是**真實的服務**——你的 Email、你的行事曆、你的資料庫——所以安全問題不能馬虎。

### 🔴 絕對不要做的事

| 危險行為 | 為什麼危險 | 你應該怎麼做 |
|---------|----------|------------|
| 用管理員帳號連資料庫 | AI 可能不小心刪除或修改重要資料 | 建立一個**唯讀帳號**給 AI 用 |
| 連上正式環境（Production） | 一個失誤就可能影響真實用戶 | 先在測試環境（[Staging](terms/staging-production.md)）試 |
| 把 API Key 貼在公開的地方 | 別人拿到你的金鑰就能用你的額度 | 用[環境變數](terms/environment-variable.md)存放 |
| 讓 AI 自動發送 Email/訊息 | 萬一 AI 理解錯你的意思... | 先讓 AI 「草擬」，你確認後再發送 |

### 🟡 建議的安全做法

1. **最小權限原則：** 每個 MCP Server 只給它需要的最低權限。能用唯讀就不要給讀寫。

2. **從測試環境開始：** 第一次連接新的 MCP Server，先用測試資料跑看看，確認行為正確再連正式環境。

3. **定期檢查已安裝的 Server：**
   ```bash
   claude mcp list
   ```
   不用的就移除，減少暴露面。

4. **API Key 管理：**
   - 不要把 API Key 寫在程式碼裡
   - 用[環境變數（隱形備忘錄）](terms/environment-variable.md)來存放
   - 定期換新金鑰

5. **敏感操作要人工確認：** 讓 AI 幫你「準備好」就好，最後一步（發送、刪除、修改）由你親自確認。

### 安全自我檢查表

在安裝新的 MCP Server 之前，問自己這幾個問題：

- [ ] 這個 Server 需要存取什麼資料？我願意讓 AI 看到嗎？
- [ ] 它需要寫入權限嗎？如果只是「看」，有沒有唯讀的選項？
- [ ] 我的 API Key 有沒有存放在安全的地方？
- [ ] 我先在測試環境跑過了嗎？

---

## 下一步

恭喜你讀完了 MCP 教學！現在你的 AI 已經從「被關在密室裡的天才」升級成「有眼有手的超級助手」了。

### 建議的學習路線

| 順序 | 主題 | 連結 | 說明 |
|:---:|------|------|------|
| 1 | 裝好你的第一個 MCP Server | 👆 你剛剛已經看完了 | Tavily 搜尋引擎 |
| 2 | 學會基本指令 | [指令速查卡](CHEATSHEET.md) | 日常操作的小抄 |
| 3 | 看看有哪些使用場景 | [實戰場景](USE_CASES.md) | 12 個真實案例 |
| 4 | 認識 [Skill](terms/skill.md) | [Skill 術語頁](terms/skill.md) | MCP 是感官器官，Skill 是專業證照 |
| 5 | 了解 [Plugin](terms/plugin.md) 生態 | [Plugin 術語頁](terms/plugin.md) | 更多擴充方式 |

### MCP 跟其他概念的關係

還記得我們的比喻嗎？

| 概念 | 比喻 | 跟 MCP 的關係 |
|------|------|--------------|
| **AI（Claude）** | 大腦 | MCP 幫大腦裝上感官器官 |
| **[MCP](terms/mcp.md)** | 感官器官 | 讓 AI 能看、聽、觸碰外面的世界 |
| **[Skill](terms/skill.md)** | 專業證照 | 讓 AI 擁有特定的專業知識 |
| **[Plugin](terms/plugin.md)** | 外掛配件 | 另一種擴充 AI 能力的方式 |
| **[SuperClaude](terms/superclaude.md)** | 員工培訓手冊 | 幫 AI 預裝好常用的 MCP 和設定 |

**一句話版：MCP 讓 AI 「碰得到」外面的世界，Skill 讓 AI 「懂得」特定領域的知識。兩個合在一起，AI 就是你的全能助手。**

---

**[← 回到首頁](README.md)** · **[什麼是 MCP？](terms/mcp.md)** · **[Plugin 教學 →](PLUGINS.md)**
