# 安裝指南：從零開始裝好 Claude Code

> **把它想成出國旅行前的行李打包——照清單一項一項來，保證不會少帶東西。**

---

## 行前檢查清單

在開始之前，先確認你有這些東西：

| 項目 | 說明 | 怎麼確認 |
|------|------|---------|
| 💻 一台電腦 | macOS 或 Windows 都行 | 你正在用它讀這篇文章 ✅ |
| 🌐 網路連線 | 需要下載東西 | 你能打開這個頁面就行 ✅ |
| 💳 Anthropic 帳號 | 取得 API Key（員工證）用 | 等下會教你申請 |

**預計時間：15～30 分鐘**（取決於你的網速和手速）

---

## 第一步：安裝 Node.js（辦公室的水電基礎建設）

Node.js 是什麼？你不需要真的懂它——就把它想成**辦公室的水電**。Claude Code 是你的員工，但員工需要有水有電的辦公室才能上班。Node.js 就是那個辦公室。

### macOS 用戶

**方法一：直接下載安裝（最簡單）**

1. 打開瀏覽器，前往 [Node.js 官網](https://nodejs.org/)
2. 點擊綠色的 **LTS**（長期支援版）按鈕下載
3. 打開下載的 `.pkg` 檔案
4. 一路點「繼續」→「同意」→「安裝」
5. 完成！

**方法二：用 Homebrew 安裝（如果你聽過 Homebrew 的話）**

打開 Terminal（終端機），輸入：

```bash
brew install node
```

> 💡 **Terminal 在哪裡？**
> 打開 Finder → 應用程式 → 工具程式 → 終端機
> 或者直接按 `Cmd + 空白鍵`，輸入「Terminal」就找到了。
> 把 Terminal 想成**管家熱線**——你用文字跟電腦直接對話的地方。

### Windows 用戶

1. 打開瀏覽器，前往 [Node.js 官網](https://nodejs.org/)
2. 點擊綠色的 **LTS** 按鈕下載
3. 打開下載的 `.msi` 檔案
4. 一路點「Next」→「I agree」→「Install」
5. 完成！

### 確認安裝成功

打開 Terminal（macOS）或命令提示字元（Windows），輸入：

```bash
node --version
```

看到類似 `v20.x.x` 或 `v22.x.x` 的數字就代表成功了 🎉

如果看到「command not found」，請關掉 Terminal 重新打開再試一次。

---

## 第二步：安裝 Claude Code（把員工請進辦公室）

辦公室蓋好了（Node.js），現在要把員工請進來。

在 Terminal 輸入：

```bash
npm install -g @anthropic-ai/claude-code
```

> 💡 **npm 是什麼？**
> npm 就像一個「軟體商店」，跟 App Store 類似。
> 安裝 Node.js 時它已經一起裝好了，你不用額外處理。

安裝完成後，輸入以下指令確認：

```bash
claude --version
```

看到版本號就代表安裝成功了！

---

## 第三步：取得 API Key（幫員工辦門禁卡）

Claude Code 需要一張「員工證」才能上班——這就是 **API Key**。

### 申請步驟

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

### 設定 API Key

Claude Code 第一次啟動時會自動引導你登入或輸入 API Key，照著畫面操作即可。

如果你想手動設定環境變數：

**macOS / Linux：**
```bash
export ANTHROPIC_API_KEY=你的API金鑰貼在這裡
```

> 💡 要讓設定永久生效，把上面這行加到你的 `~/.zshrc` 或 `~/.bashrc` 檔案裡。
> 不知道怎麼做？沒關係，第一次啟動時照畫面操作就好。

**Windows（命令提示字元）：**
```cmd
set ANTHROPIC_API_KEY=你的API金鑰貼在這裡
```

---

## 第四步：第一次啟動 Claude Code！

一切就緒，讓我們啟動你的 AI 員工：

```bash
claude
```

沒錯，就是這麼簡單。輸入 `claude` 然後按 Enter。

第一次啟動時，它會：
1. 問你要登入還是輸入 API Key → 照步驟操作
2. 顯示歡迎畫面
3. 出現提示符號，等你下指令

**試試你的第一個指令：**

```
幫我用繁體中文寫一封感謝信，感謝同事幫忙處理專案
```

看到它回覆了嗎？恭喜，你的 AI 員工正式上班了！ 🎉

### 離開 Claude Code

想結束對話時，輸入：

```
/exit
```

或直接按 `Ctrl + C`。

---

## 加裝進階裝備：SuperClaude（員工培訓手冊）

> 這一步**非必要**，但強烈推薦。

如果 Claude Code 是你的員工，**SuperClaude** 就是這個員工的**超級培訓手冊**——讓它更懂你的工作習慣、更會組織任務、更有效率。

### SuperClaude 是什麼？

一套開源的設定檔框架，裝好後你的 Claude Code 會：

- 🧠 更聰明地理解複雜指令
- 📋 自動把大任務拆成小步驟
- 🔧 善用各種專業工具（MCP 伺服器）
- 💬 更結構化地回報進度

### 在哪裡找？

👉 [SuperClaude GitHub](https://github.com/NomenAK/SuperClaude)

安裝方式請參考其官方 README，這裡就不重複細節了。SuperClaude 是獨立的開源專案，持續更新中。

---

## 常見問題排雷區（FAQ）

### 💥 `npm install` 時出現權限錯誤

**症狀：** 看到 `EACCES` 或 `permission denied`

**解法（macOS）：**
```bash
sudo npm install -g @anthropic-ai/claude-code
```
系統會要你輸入電腦密碼（輸入時畫面不會顯示，這是正常的）。

### 💥 `claude` 指令找不到

**症狀：** 看到 `command not found: claude`

**解法：**
1. 關掉 Terminal，重新打開
2. 還是不行？輸入 `npm list -g` 確認有安裝成功
3. 如果列表裡沒有 `@anthropic-ai/claude-code`，重新執行安裝指令

### 💥 API Key 無效

**症狀：** 看到 `Invalid API key` 或 `Authentication failed`

**解法：**
1. 回到 [Anthropic Console](https://console.anthropic.com/) 確認 Key 還在
2. 確認複製時沒有多餘的空格
3. 如果不確定，刪掉舊的、重新產一組新的

### 💥 網路問題

**症狀：** 安裝或使用時超級慢或連不上

**解法：**
1. 確認網路連線正常
2. 如果在公司內部，可能需要設定代理伺服器（Proxy），請洽 IT 部門

---

## 安全性提醒：你的後悔藥與安全網

### Git：你的後悔藥 🕐

如果你要讓 Claude Code 修改專案檔案，**強烈建議**先學會基本的 Git（版本控制工具）。

Git 就像**時光機**——不管 AI 改了什麼，你都可以「回到過去」。

幾個保命指令：
```bash
git status          # 看看現在改了什麼
git diff            # 看改動的細節
git checkout -- .   # 全部回復到上次存檔的狀態（後悔藥！）
```

> 💡 不熟 Git？沒關係，一開始先讓 Claude Code 幫你做不涉及檔案修改的任務（翻譯、摘要、分析），等你習慣了再進階。

### 權限詢問機制 🛡️

Claude Code 在做「危險操作」前會**先問你**：

```
Claude wants to run: rm old_file.txt
Allow? (y/n)
```

**看到這個提示時，先讀清楚它要做什麼，再決定要不要按 y（允許）。**

這就像員工跟你說：「老闆，我要把這份文件刪掉喔，可以嗎？」——你當然要先確認那份文件是不是真的該刪。

---

## 下一步

裝好了！接下來去拿你的小抄 👉 **[指令速查卡 →](CHEATSHEET.md)**

想直接看能做什麼？👉 **[使用場景 →](USE_CASES.md)**
