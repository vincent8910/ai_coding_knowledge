# 安裝指南：從零開始裝好你的 AI 工具

> **把它想成出國旅行前的行李打包——照清單一項一項來，保證不會少帶東西。**

---

## 先選你的工具

AI Coding 工具有兩大選擇，你可以選一個或兩個都裝：

| | [Claude Code](terms/terminal-cli.md) | [Google Antigravity](terms/antigravity.md) | Gemini CLI | Codex CLI |
|---|---|---|---|---|
| **長什麼樣** | 黑色文字畫面（Terminal） | 有按鈕的桌面軟體（IDE） | Terminal 裡的命令列工具 | Terminal 裡的命令列工具 |
| **比喻** | 管家熱線——用文字指揮 | AI 超級辦公桌——坐下來就能用 | Google 的命令列管家 | OpenAI 的命令列管家 |
| **學習門檻** | 要學一點指令 | 更直覺，像用一般軟體 | 需要基本 Terminal 與 Git | 需要基本 Terminal 與 Git |
| **費用／登入** | 訂閱登入或 API／provider，依方案而定 | 依 Google 帳號與方案 | 依 Google 帳號／方案與 CLI 政策 | 依 OpenAI 登入／provider 與方案而定 |
| **Skill／MCP** | ✅ 原生支援 | ✅ 相容 | 依版本與設定支援 | 依版本與設定支援 |
| **適合誰** | 想要更高控制力的人 | 不想碰 Terminal 的人 | 想用 Google CLI workflow 的人 | 想用 OpenAI CLI workflow 的人 |

> 💡 **不確定選哪個？** 建議先裝 **Antigravity**（免費、門檻低），等你熟悉了再嘗試 Claude Code。兩者的 [Skill（專業證照）](terms/skill.md) 是通用的，學一次就能帶著走。

---

## 行前檢查清單

| 項目 | 說明 | 怎麼確認 |
|------|------|---------|
| 💻 一台電腦 | macOS 或 Windows 都行 | 你正在用它讀這篇文章 ✅ |
| 🌐 網路連線 | 需要下載東西 | 你能打開這個頁面就行 ✅ |

**預計時間：15～30 分鐘**（取決於你的網速和手速）

---

## 路線 A：安裝 Antigravity（推薦新手）

> 📌 如果你選的是 Claude Code，請跳到 **[路線 B](#路線-b安裝-claude-code)**。

### 什麼是 Antigravity？

把它想成一張 **AI 超級辦公桌**——桌上有螢幕、有資料夾、有文具，還內建一個隨時待命的 AI 助手。打開軟體，坐下來就能開始工作。

### Step 1：下載

1. 打開瀏覽器，前往 [Antigravity 官網](https://antigravity.google/)
2. 點擊 **Download for Windows**（或 macOS）按鈕
3. 等待下載完成（檔案大約幾百 MB，視網速而定）

### Step 2：安裝

**Windows：**
1. 打開下載的安裝檔（`.exe`）
2. 如果 Windows 跳出「Windows 已保護您的電腦」提示，點「其他資訊」→「仍要執行」
3. 一路點 **Next** → **I Agree** → **Install**
4. 安裝完成，點 **Finish**

**macOS：**
1. 打開下載的 `.dmg` 檔案
2. 把 Antigravity 拖進「應用程式」資料夾
3. 完成！

### Step 3：登入

1. 打開 Antigravity（從桌面捷徑或開始選單 / 應用程式找到它）
2. 用你的 **Google 帳號**登入
3. 登入之後，你會看到主畫面——一個有側邊欄和聊天區的介面

### Step 4：確認安裝成功

在 Antigravity 的聊天區輸入：

```
你好，請自我介紹
```

如果 AI 回覆了，恭喜，安裝成功！ 🎉

### 常見問題排雷

| 問題 | 解法 |
|------|------|
| 下載很慢 | 公司網路可能有限制，請洽 IT 或換用手機熱點 |
| 安裝時被防毒軟體擋住 | 暫時關閉防毒，或加入白名單 |
| 登入失敗 | 確認 Google 帳號正常，試試用 Chrome 瀏覽器登入 |
| 畫面一片空白 | 關掉重開，或檢查是否需要更新顯示卡驅動 |

> ✅ 裝好 Antigravity 了？跳到 **[安全性提醒](#安全性提醒你的後悔藥與安全網)** 繼續。

---

## 路線 B：安裝 Claude Code

> 📌 如果你已經裝好 Antigravity，可以跳過這段。

Claude Code 是在 [Terminal（管家熱線）](terms/terminal-cli.md) 裡操作的 AI 工具。安裝需要多幾個步驟，但它的控制力更強。

### 第一步：安裝 Node.js（辦公室的水電基礎建設）

[Node.js](terms/nodejs.md) 是什麼？你不需要真的懂它——就把它想成**辦公室的水電**。Claude Code 是你的員工，但員工需要有水有電的辦公室才能上班。Node.js 就是那個辦公室。

**macOS 用戶：**

1. 打開瀏覽器，前往 [Node.js 官網](https://nodejs.org/)
2. 點擊綠色的 **LTS**（長期支援版）按鈕下載
3. 打開下載的 `.pkg` 檔案
4. 一路點「繼續」→「同意」→「安裝」
5. 完成！

> 💡 **Terminal 在哪裡？**
> 打開 Finder → 應用程式 → 工具程式 → 終端機
> 或者直接按 `Cmd + 空白鍵`，輸入「Terminal」就找到了。

**Windows 用戶：**

1. 打開瀏覽器，前往 [Node.js 官網](https://nodejs.org/)
2. 點擊綠色的 **LTS** 按鈕下載
3. 打開下載的 `.msi` 檔案
4. 一路點「Next」→「I agree」→「Install」
5. 完成！

**安裝 Git Bash（Windows 強烈推薦）：**

Windows 還需要一個好用的 [Terminal（終端機）](terms/terminal-cli.md)。建議裝 **[Git Bash](terms/git-bash.md)**——它會同時幫你裝好 [Git（後悔藥）](terms/git.md)，一舉兩得。

1. 前往 [Git for Windows 官網](https://gitforwindows.org/) 下載
2. 安裝過程一路用預設值，點「Next」到底
3. 安裝完成後，在開始選單找到 **Git Bash** 並打開

> 💡 詳細說明請看 **[什麼是 Git Bash？](terms/git-bash.md)**

**確認 Node.js 安裝成功：**

打開 Terminal（macOS）或 **Git Bash**（Windows），輸入：

```bash
node --version
```

看到類似 `v20.x.x` 或 `v22.x.x` 的數字就代表成功了 🎉

### 第二步：安裝 Claude Code（把員工請進辦公室）

在 Terminal 輸入：

```bash
npm install -g @anthropic-ai/claude-code
```

> 💡 **[npm](terms/npm.md) 是什麼？**
> npm 就像一個「軟體商店」，跟 App Store 類似。
> 安裝 Node.js 時它已經一起裝好了，你不用額外處理。

安裝完成後，確認：

```bash
claude --version
```

看到版本號就代表安裝成功了！

### 第三步：取得 API Key（幫員工辦門禁卡）

Claude Code 需要一張「員工證」才能上班——這就是 **[API Key](terms/api-key.md)**。

1. 前往 [Anthropic Console](https://console.anthropic.com/)
2. 註冊或登入帳號
3. 點擊左側選單的 **API Keys**
4. 點擊 **Create Key**
5. 取一個名字（例如「my-claude-code」）
6. **立刻複製這組金鑰！** 它只會顯示一次，像演唱會門票一樣，關掉就看不到了

> 🔒 **安全提醒：API Key 就像你的門禁卡**
>
> - **絕對不要**把它貼到公開的地方（GitHub、Slack、Email）
> - **絕對不要**傳給別人
> - 如果不小心外洩了，立刻回到 Console 刪除舊的、產一組新的

Claude Code 第一次啟動時會自動引導你登入或輸入 API Key，照著畫面操作即可。

### 第四步：第一次啟動 Claude Code！

```bash
claude
```

沒錯，就是這麼簡單。輸入 `claude` 然後按 Enter。

**試試你的第一個指令：**

```
幫我用繁體中文寫一封感謝信，感謝同事幫忙處理專案
```

看到它回覆了嗎？恭喜，你的 AI 員工正式上班了！ 🎉

想結束對話時，輸入 `/exit` 或按 `Ctrl + C`。

### Claude Code 常見問題

| 問題 | 解法 |
|------|------|
| `npm install` 權限錯誤（EACCES） | macOS 加 `sudo`：`sudo npm install -g @anthropic-ai/claude-code` |
| `command not found: claude` | 關掉 Terminal 重開。還是不行就重裝 |
| API Key 無效 | 回 [Anthropic Console](https://console.anthropic.com/) 確認 Key 還在，重新複製 |
| 安裝或使用超慢 | 確認網路正常，公司內部可能需洽 IT 設定 Proxy |

---

## 路線 C：安裝 Gemini CLI

> 📌 這條路線適合想用 Google 的命令列 Agent workflow；stable、preview、nightly 請分開看待。

Gemini CLI 官方 repository 與 release：
[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/releases)

### 安裝

請依官方 README 的目前安裝方式執行。常見 Node.js 路線是：

```bash
npm install -g @google/gemini-cli
```

確認版本：

```bash
gemini --version
```

### 登入與 smoke test

```bash
gemini
```

第一次啟動依畫面完成 Google 登入或 provider 設定，然後在 temporary repository 執行低風險測試：

```text
請只讀取目前目錄的 README，列出三個重點；不要修改檔案，也不要執行其他命令。
```

記錄 CLI 版本、登入方式、OS、sandbox／workspace trust 設定與實際輸出。Preview／nightly 不作穩定教學基準。

### 移除

```bash
npm uninstall -g @google/gemini-cli
```

實際套件名稱或登入方式若隨版本變更，請以官方文件為準。

---

## 路線 D：安裝 Codex CLI

> 📌 這條路線適合想用 OpenAI Codex 的命令列 Agent workflow。stable 與 alpha 必須分開記錄。

官方來源：
[openai/codex releases](https://github.com/openai/codex/releases)

### 安裝

請依官方 repository 的最新安裝說明選擇平台與 provider。若使用 npm 發布版本，常見形式為：

```bash
npm install -g @openai/codex
```

確認版本：

```bash
codex --version
```

> ⚠️ 套件名稱、登入方式與執行檔名稱可能依 release 改變；若命令不存在，不要猜測替代套件，請回到官方 release／README 查證。

### 登入與 smoke test

```bash
codex
```

先在 temporary repository 執行唯讀任務：

```text
只讀取目前目錄的 README，列出三個重點；不要修改檔案、不要執行 shell 命令、不要連線外部服務。
```

記錄 CLI 版本、模型／provider、sandbox、network policy、可見路徑與實際結果。alpha 版本只作觀察，不納入穩定安裝主線。

### 移除

```bash
npm uninstall -g @openai/codex
```

實際套件與移除方式以官方 repository 的當前說明為準。

---

## 安全性提醒：你的後悔藥與安全網

> 不管你用的是 Antigravity 還是 Claude Code，這段都要看。

### Git：你的後悔藥 🕐

如果你要讓 AI 修改專案檔案，**強烈建議**先學會基本的 [Git（版本控制工具）](terms/git.md)。

Git 就像**時光機**——不管 AI 改了什麼，你都可以「回到過去」。

幾個保命指令：
```bash
git status          # 看看現在改了什麼
git diff            # 看改動的細節
git checkout -- .   # 全部回復到上次存檔的狀態（後悔藥！）
```

> 💡 不熟 Git？沒關係，一開始先讓 AI 幫你做不涉及檔案修改的任務（翻譯、摘要、分析），等你習慣了再進階。

### 權限詢問機制 🛡️

不管是 Claude Code 還是 Antigravity，AI 在做「危險操作」前都會**先問你**：

```
Claude wants to run: rm old_file.txt
Allow? (y/n)
```

**看到這個提示時，先讀清楚它要做什麼，再決定要不要允許。**

這就像員工跟你說：「老闆，我要把這份文件刪掉喔，可以嗎？」——你當然要先確認那份文件是不是真的該刪。

---

## 下一步

裝好了！接下來去拿你的小抄 👉 **[指令速查卡 →](CHEATSHEET.md)**

想直接看能做什麼？👉 **[使用場景 →](USE_CASES.md)**

想學 Skill？👉 **[Skill 完整教學 →](SKILLS.md)**
