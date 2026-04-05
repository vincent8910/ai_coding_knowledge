# Hooks 完整教學：讓 AI 自動做該做的事

> **在門口裝一盞感應燈——有人經過自動亮，不用你去按開關。**
>
> Hooks 就是 AI 版的「自動觸發器」。設定一次，以後每次 AI 做事時，它就會自動幫你做好該做的事。
>
> 這份指南寫給完全零基礎的人。照著走，你就能讓 AI 變得更聰明、更安全、更自動化。

---

## 大綱

- [Hooks 是什麼？為什麼要學？](#hooks-是什麼為什麼要學) — 感應燈的威力
- [Hooks 的基本觀念](#hooks-的基本觀念) — 四種觸發時機一次搞懂
- [動手做：建立你的第一個 Hook](#動手做建立你的第一個-hook) — 手把手教學
- [實戰範例：10 個好用的 Hook](#實戰範例10-個好用的-hook) — 直接複製貼上就能用
- [Hooks vs Skill vs Plugin 怎麼分？](#hooks-vs-skill-vs-plugin-怎麼分) — 三者比較表
- [下一步](#下一步)

> 📌 **還沒安裝工具？** 請先到 [安裝指南](INSTALL.md) 裝好 Claude Code 再回來。

---

## Hooks 是什麼？為什麼要學？

### 先看一個日常場景

> **你**：「Claude，幫我刪掉這個暫存資料夾。」
>
> **Claude**：（二話不說）`rm -rf /重要資料夾`
>
> **你**：「等等！！那個資料夾裡面有重要檔案啊！」

這就是沒有 Hooks 的日子——AI 做事很快，但不會自動幫你檢查「等一下，這件事是不是很危險？」

### 有了 Hooks 之後呢？

> **你**：「Claude，幫我刪掉這個暫存資料夾。」
>
> **Hook 自動觸發**：偵測到危險指令 `rm -rf`，先備份資料夾，再詢問確認
>
> **Claude**：「我注意到這是一個刪除操作，已經自動備份到 backup/ 了。確定要繼續嗎？」

**Hooks 就是你幫 AI 裝的「安全氣囊」和「自動駕駛」。**

### 生活中到處都是 Hooks

你其實每天都在用「Hooks」的概念，只是不知道它叫這個名字：

| 生活場景 | 觸發條件 | 自動動作 |
|---------|---------|---------|
| 🚪 門口感應燈 | 有人經過 | 自動亮燈 |
| 🚗 汽車安全帶警報 | 發動引擎但沒繫安全帶 | 發出警告聲 |
| 📱 iPhone 自動化捷徑 | 到家（GPS 偵測） | 自動開冷氣 |
| 🏧 銀行大額交易通知 | 轉帳超過 5 萬 | 發簡訊通知 |
| 🔒 電腦螢幕鎖定 | 5 分鐘沒動 | 自動鎖定螢幕 |

**Hooks 就是 AI 工具裡的這些「自動觸發器」。**

### 沒有 Hooks vs 有 Hooks

| 情境 | 沒有 Hooks 😩 | 有 Hooks 😎 |
|------|-------------|------------|
| AI 執行危險指令 | 直接執行，你事後才發現 | 自動攔截，先問你再說 |
| AI 改完程式碼 | 格式亂七八糟，你手動整理 | 自動跑格式化工具，永遠整齊 |
| AI 完成長任務 | 你一直盯著螢幕等 | 自動發通知到你手機 |
| AI 編輯敏感檔案 | 悄悄改了 .env，你完全不知道 | 自動擋下來，不讓它碰 |
| AI 做完修改 | 你忘記存檔、忘記 commit | 自動幫你 git commit |

### 為什麼現在要學？

1. **安全感**：設好 Hooks，AI 再怎麼衝也不會闖大禍
2. **省時間**：每次都要手動做的事情，讓 Hooks 自動幫你
3. **品質穩定**：自動跑測試、自動格式化，品質不靠記性
4. **團隊共用**：設定好的 Hooks 可以分享給整個團隊，統一工作流程

---

## Hooks 的基本觀念

### 一個 Hook = 觸發時機 + 自動動作

就是這麼簡單。

| 要素 | 用比喻解釋 | 實際意思 |
|------|-----------|---------|
| **觸發時機** | 感應燈的「感應器」 | 什麼時候要啟動這個 Hook？ |
| **比對條件** | 感應器只對「人」反應，不對「貓」反應 | 哪些工具或動作才要觸發？ |
| **自動動作** | 感應器觸發後「開燈」 | 觸發後要執行什麼指令？ |

### 四種觸發時機

Claude Code 提供四種 Hook 觸發時機，對應 AI 做事的不同階段：

```
你下指令 → [PreToolUse] → AI 使用工具 → [PostToolUse] → 繼續做事 → [Stop] → AI 完成任務
                                                                          ↓
                                                                    [Notification]
                                                                    AI 想通知你什麼
```

| 觸發時機 | 白話說明 | 生活比喻 | 常見用途 |
|---------|---------|---------|---------|
| **PreToolUse** | AI **準備做某件事之前** | 出門前檢查有沒有帶鑰匙 | 攔截危險指令、自動備份 |
| **PostToolUse** | AI **做完某件事之後** | 洗完衣服自動烘乾 | 自動格式化、自動跑測試 |
| **Notification** | AI **要通知你的時候** | 門鈴響了自動錄影 | 發送通知到手機、記錄日誌 |
| **Stop** | AI **完成整個任務時** | 下班前關燈鎖門 | 自動存檔、產出任務摘要 |

### Hooks 設定在哪裡？

Hooks 是寫在 **settings.json**（設定檔）裡的。這個檔案有兩個位置：

| 位置 | 路徑 | 用途 | 比喻 |
|------|------|------|------|
| **全域設定** | `~/.claude/settings.json` | 所有專案都套用 | 你家大門的感應燈，不管誰來都會亮 |
| **專案設定** | `專案資料夾/.claude/settings.json` | 只有這個專案套用 | 辦公室的門禁卡，只管這層樓 |

> 💡 **`~` 是什麼？** 在 Windows 上，`~` 代表你的使用者資料夾，通常是 `C:\Users\你的使用者名稱`。在 macOS 上則是 `/Users/你的使用者名稱`。

> 💡 **小提醒**：如果全域設定和專案設定都有 Hooks，兩邊的設定會**同時生效**——全域的先跑，專案的再跑。

### settings.json 的 Hooks 長什麼樣子？

別被 JSON 嚇到！它的結構其實很直覺：

```json
{
  "hooks": {
    "觸發時機": [
      {
        "matcher": "要比對的工具名稱",
        "hooks": [
          {
            "type": "command",
            "command": "要執行的指令"
          }
        ]
      }
    ]
  }
}
```

翻譯成白話就是：

```
在 ______（什麼時機），
如果 AI 正在用 ______（什麼工具），
就自動執行 ______（什麼指令）。
```

舉個例子：

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo '檔案已被編輯！'"
          }
        ]
      }
    ]
  }
}
```

白話翻譯：「AI **編輯完檔案之後**（PostToolUse + Edit），自動顯示『檔案已被編輯！』」

### matcher 可以比對哪些工具？

| matcher 值 | AI 正在做什麼 |
|------------|-------------|
| `Bash` | 執行 [Terminal](terms/terminal-cli.md) 指令 |
| `Edit` | 編輯檔案 |
| `Write` | 寫入新檔案 |
| `Read` | 讀取檔案 |
| `Glob` | 搜尋檔案 |
| `Grep` | 搜尋檔案內容 |
| `WebFetch` | 抓取網頁內容 |
| 不填（省略 matcher） | 任何工具都會觸發 |

> 💡 **小技巧**：如果你不寫 `matcher`，這個 Hook 就會在「所有工具」被使用時都觸發。適合用在「所有動作都要記錄日誌」這種場景。

---

## 動手做：建立你的第一個 Hook

> 我們來建一個最簡單的 Hook：**每次 AI 執行 Terminal 指令前，自動記錄到日誌檔**。這樣你事後可以回頭看 AI 到底跑了什麼。

### Step 1：找到 settings.json

打開檔案總管（Windows：按 `Win + E`；macOS：Finder），導航到：

**Windows：**
```
C:\Users\你的使用者名稱\.claude\
```

**macOS：**
```
/Users/你的使用者名稱/.claude/
```

> ⚠️ **找不到 `.claude` 資料夾？** 因為以 `.` 開頭的是隱藏資料夾。
> - Windows：在檔案總管上方點「檢視」→ 勾選「隱藏的項目」
> - macOS：在 Finder 裡按 `Cmd + Shift + .`

如果裡面已經有 `settings.json`，用文字編輯器打開它。如果沒有，新建一個。

### Step 2：貼上 Hook 設定

把下面這段**整個複製貼上**到 `settings.json` 裡：

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo \"[$(date '+%Y-%m-%d %H:%M:%S')] AI 準備執行指令\" >> ~/.claude/ai-action-log.txt"
          }
        ]
      }
    ]
  }
}
```

> ⚠️ **已經有 settings.json 了？** 如果檔案裡已經有其他設定，你需要把 `"hooks"` 那一段加進去，而不是覆蓋整個檔案。不確定怎麼做的話，可以直接問 Claude Code：「幫我在 settings.json 裡加上這段 Hook 設定」。

### Step 3：測試！

1. 打開 [Terminal](terms/terminal-cli.md)（命令列），輸入 `claude` 啟動 Claude Code
2. 隨便給它一個指令，例如：「幫我看一下目前資料夾裡有什麼檔案」
3. AI 會用 `ls` 指令來列出檔案——這時候你的 Hook 就會觸發
4. 去看看 `~/.claude/ai-action-log.txt` 有沒有被寫入記錄

```bash
cat ~/.claude/ai-action-log.txt
```

你應該會看到類似這樣的內容：

```
[2026-04-06 14:30:15] AI 準備執行指令
```

**恭喜！你剛剛建立了你的第一個 Hook！**

從此以後，每次 AI 要在 Terminal 裡執行任何指令，都會先被記錄到日誌裡。

---

## 實戰範例：10 個好用的 Hook

> 以下每個範例都可以**直接複製貼上**使用。你只需要把 JSON 設定加到你的 `settings.json` 的 `hooks` 區塊裡。
>
> 如果要同時使用多個 Hook，把它們放在同一個觸發時機的陣列 `[]` 裡就好。不確定怎麼合併的話，直接叫 Claude Code 幫你。

---

### 🛡️ 安全防護類

#### 1. 危險指令攔截器

📌 **使用情境**：你擔心 AI 不小心執行 `rm -rf`（刪光光）、`git push --force`（強制覆蓋遠端程式碼）等致命指令。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE 'rm\\s+-rf|git\\s+push\\s+--force|drop\\s+table|mkfs|dd\\s+if='; then echo 'BLOCKED: 偵測到危險指令！已自動攔截。' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：當 AI 試圖執行包含 `rm -rf`、`git push --force`、`drop table` 等危險關鍵字的指令時，Hook 會自動攔截。

✅ **預期效果**：危險指令不會被執行，AI 會收到「已攔截」的訊息，然後改用更安全的方式。

> 💡 **`exit 2` 是什麼意思？** 在 Hook 裡，`exit 2` 代表「阻止這個操作」。就像保全人員說「你不能進去」。`exit 0` 則是「放行」。

---

#### 2. 自動備份保護傘

📌 **使用情境**：AI 要編輯重要檔案前，自動先備份一份。萬一改壞了，你還有原版可以恢復。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "FILE=$(echo \"$CLAUDE_TOOL_INPUT\" | grep -o '\"file_path\":\"[^\"]*\"' | cut -d'\"' -f4); if [ -n \"$FILE\" ] && [ -f \"$FILE\" ]; then mkdir -p ~/.claude/backups/$(date +%Y%m%d) && cp \"$FILE\" ~/.claude/backups/$(date +%Y%m%d)/$(basename \"$FILE\").$(date +%H%M%S).bak; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：每次 AI 要編輯任何檔案之前，自動把原始檔案複製一份到 `~/.claude/backups/` 資料夾。

✅ **預期效果**：在 `~/.claude/backups/20260406/` 裡面會看到備份檔，檔名帶有時間戳記，例如 `index.html.143025.bak`。

> 💡 **這就是你的[後悔藥](terms/git.md)**——就算 AI 改壞了，你隨時都能找回原版。

---

#### 3. 敏感檔案保護鎖

📌 **使用情境**：你不希望 AI 去讀取或修改 `.env`（[環境變數](terms/environment-variable.md)檔）、密碼檔、金鑰檔等敏感資料。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE '\\.env|\\.secret|credentials|password|private.*key'; then echo 'BLOCKED: 這是敏感檔案，不允許自動編輯！' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：當 AI 試圖編輯檔名包含 `.env`、`.secret`、`credentials`、`password`、`private key` 的檔案時，自動擋下。

✅ **預期效果**：AI 無法編輯這些敏感檔案，會告訴你「這個檔案被保護了」，你可以自己手動去改。

---

#### 4. 寫入檔案前的守門員

📌 **使用情境**：你希望 AI 在寫入新檔案之前，先確認目標路徑不會覆蓋已有的重要檔案。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "FILE=$(echo \"$CLAUDE_TOOL_INPUT\" | grep -o '\"file_path\":\"[^\"]*\"' | cut -d'\"' -f4); if [ -n \"$FILE\" ] && [ -f \"$FILE\" ]; then echo \"WARNING: 檔案 $FILE 已存在，即將被覆蓋。已自動備份原始版本。\" >&2; mkdir -p ~/.claude/backups/$(date +%Y%m%d) && cp \"$FILE\" ~/.claude/backups/$(date +%Y%m%d)/$(basename \"$FILE\").$(date +%H%M%S).bak; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 要寫入一個已經存在的檔案時，自動備份原檔再放行。

✅ **預期效果**：你永遠不會因為 AI 的 Write 操作而丟失原始檔案。

---

### 🔍 品質管理類

#### 5. 自動程式碼格式化

📌 **使用情境**：AI 改完程式碼後，格式經常亂掉（縮排不一、空行太多）。你希望每次改完自動跑格式化工具。

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "FILE=$(echo \"$CLAUDE_TOOL_INPUT\" | grep -o '\"file_path\":\"[^\"]*\"' | cut -d'\"' -f4); if echo \"$FILE\" | grep -qE '\\.(js|ts|jsx|tsx|json|css|html)$'; then npx prettier --write \"$FILE\" 2>/dev/null; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 編輯完任何 JavaScript、TypeScript、JSON、CSS、HTML 檔案後，自動用 Prettier（一種程式碼格式化工具）整理格式。

✅ **預期效果**：程式碼永遠保持一致的格式風格——縮排統一、分號到位、排版整齊。

> 💡 **什麼是 Prettier？** 它就像 Word 裡的「自動排版」功能，但是是給程式碼用的。需要先透過 [npm](terms/npm.md) 安裝：`npm install -g prettier`。

---

#### 6. 改完程式碼自動跑測試

📌 **使用情境**：你擔心 AI 改了 A 功能結果把 B 功能弄壞。每次改完自動跑測試，馬上知道有沒有壞掉。

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE '\\.(js|ts|py)\"' && [ -f package.json ]; then npm test 2>&1 | tail -5; elif [ -f pytest.ini ] || [ -f setup.py ]; then python -m pytest --tb=short -q 2>&1 | tail -5; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 編輯完 `.js`、`.ts`、`.py` 檔案後，自動跑專案的測試。

✅ **預期效果**：如果測試通過，AI 繼續工作。如果測試失敗，AI 會看到失敗的結果，自動去修復。

> 💡 **什麼是「跑測試」？** 想像你組裝了一台車，在上路前先在場內跑一圈，確定煞車、方向盤、燈光都正常。程式的測試也是一樣——跑一遍確定功能都正常。

---

#### 7. Commit 訊息規範檢查

📌 **使用情境**：團隊約定 [Git](terms/git.md) commit 訊息要用中文，而且要說明「做了什麼」和「為什麼」。你希望 AI 幫忙 commit 時自動符合規範。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -q 'git commit'; then MSG=$(echo \"$CLAUDE_TOOL_INPUT\" | grep -oP '(?<=-m \")[^\"]+'); if [ -n \"$MSG\" ] && ! echo \"$MSG\" | grep -qP '[\\x{4e00}-\\x{9fff}]'; then echo 'BLOCKED: Commit 訊息必須包含中文說明！' >&2; exit 2; fi; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 要執行 `git commit` 時，自動檢查 commit 訊息是否包含中文。

✅ **預期效果**：如果 commit 訊息全是英文，Hook 會擋下來，要求 AI 改用中文。

---

### ⚙️ 工作流程類

#### 8. 任務完成自動通知

📌 **使用情境**：你交給 AI 一個很長的任務（像是分析 100 個檔案），然後去泡咖啡。你希望它做完時通知你。

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo '✅ Claude Code 任務完成！' && if command -v osascript &>/dev/null; then osascript -e 'display notification \"任務完成了！\" with title \"Claude Code\"'; elif command -v notify-send &>/dev/null; then notify-send 'Claude Code' '任務完成了！'; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 完成整個任務、準備停下來的時候。

✅ **預期效果**：macOS 使用者會收到系統通知彈窗，Linux 使用者也會收到桌面通知。Windows 使用者可以改用 PowerShell 的 toast notification。

> 💡 **Windows 使用者**：可以把 command 改成呼叫 PowerShell 顯示通知，或是用 curl 搭配 Slack Webhook 把通知發到手機。

---

#### 9. 全自動日誌記錄

📌 **使用情境**：你想知道 AI 到底對你的專案做了哪些事情。每一個動作都自動記錄，方便事後稽核。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo \"[$(date '+%Y-%m-%d %H:%M:%S')] [PRE] Tool: $CLAUDE_TOOL_NAME | Input: $(echo $CLAUDE_TOOL_INPUT | head -c 200)\" >> ~/.claude/audit-log.txt"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo \"[$(date '+%Y-%m-%d %H:%M:%S')] [POST] Tool: $CLAUDE_TOOL_NAME | Done\" >> ~/.claude/audit-log.txt"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 使用任何工具之前和之後都會觸發（注意這裡沒有設定 `matcher`，所以所有工具都會被記錄）。

✅ **預期效果**：在 `~/.claude/audit-log.txt` 裡會有完整的操作記錄，像這樣：

```
[2026-04-06 14:30:15] [PRE] Tool: Bash | Input: {"command":"ls -la"}
[2026-04-06 14:30:16] [POST] Tool: Bash | Done
[2026-04-06 14:30:20] [PRE] Tool: Edit | Input: {"file_path":"/src/app.js","old_str...
[2026-04-06 14:30:21] [POST] Tool: Edit | Done
```

---

#### 10. 自動 Git 存檔點

📌 **使用情境**：AI 完成一個任務後，自動幫你做一個 [Git](terms/git.md) commit（存檔點），這樣你隨時可以「回到過去」。

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "if git rev-parse --is-inside-work-tree &>/dev/null; then CHANGES=$(git diff --stat); if [ -n \"$CHANGES\" ]; then git add -A && git commit -m \"[auto] Claude Code 自動存檔 $(date '+%Y-%m-%d %H:%M')\"; fi; fi"
          }
        ]
      }
    ]
  }
}
```

🗣️ **怎麼觸發**：AI 完成任務停下來的時候，如果有檔案被修改過，自動做一個 git commit。

✅ **預期效果**：每次 AI 做完事，你的 [Git](terms/git.md) 歷史裡就多一個存檔點。就像遊戲的自動存檔——隨時可以讀取之前的進度。

> ⚠️ **注意**：這個 Hook 會把所有修改過的檔案都 commit。如果你的專案有 `.env` 之類的敏感檔案，記得先在 `.gitignore` 裡排除它們。

---

## 組合技：多個 Hooks 一起用

上面的 10 個 Hook 可以混搭使用。以下是一個「安全 + 日誌 + 自動存檔」的組合範例：

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE 'rm\\s+-rf|git\\s+push\\s+--force'; then echo 'BLOCKED: 危險指令已攔截！' >&2; exit 2; fi"
          }
        ]
      },
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE '\\.env|\\.secret|credentials'; then echo 'BLOCKED: 敏感檔案不可編輯！' >&2; exit 2; fi"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "FILE=$(echo \"$CLAUDE_TOOL_INPUT\" | grep -o '\"file_path\":\"[^\"]*\"' | cut -d'\"' -f4); if echo \"$FILE\" | grep -qE '\\.(js|ts|json|css)$'; then npx prettier --write \"$FILE\" 2>/dev/null; fi"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "if git rev-parse --is-inside-work-tree &>/dev/null && [ -n \"$(git diff --stat)\" ]; then git add -A && git commit -m \"[auto] Claude Code 自動存檔 $(date '+%Y-%m-%d %H:%M')\"; fi"
          }
        ]
      }
    ]
  }
}
```

這個組合做了什麼？

| 時機 | 動作 | 效果 |
|------|------|------|
| AI 執行指令前 | 攔截危險指令 | 不會誤刪檔案 |
| AI 編輯檔案前 | 擋住敏感檔案 | 密碼不會外洩 |
| AI 編輯檔案後 | 自動格式化 | 程式碼永遠整齊 |
| AI 做完任務時 | 自動 git commit | 隨時可以回到過去 |

---

## Hooks vs Skill vs Plugin 怎麼分？

這三個東西聽起來都是「讓 AI 更強」，但用途完全不同：

| | [Hooks](terms/hooks.md) | [Skill](terms/skill.md) | [Plugin](terms/plugin.md) / [MCP](terms/mcp.md) |
|---|---|---|---|
| **比喻** | 門口感應燈 | 員工的專業證照 | 額外的感官器官 |
| **做什麼** | 自動觸發動作 | 教 AI 一套 SOP | 給 AI 新的能力 |
| **誰觸發** | 系統自動，不用你說 | 你手動輸入 `/指令` | AI 需要時自動使用 |
| **設定方式** | 寫在 settings.json | 寫一個 SKILL.md 檔案 | 安裝 MCP Server |
| **舉例** | 改完程式自動格式化 | `/業績分析` 一鍵跑報告 | 讓 AI 能讀 Google 日曆 |
| **難度** | ⭐⭐ 需要寫 JSON | ⭐ 只要寫文字 | ⭐⭐⭐ 需要安裝套件 |

### 什麼時候用哪個？

| 你的需求 | 用什麼 |
|---------|--------|
| 「我希望 AI 每次做完事都自動跑某個流程」 | **Hooks** |
| 「我希望 AI 在我叫它的時候按照特定 SOP 做事」 | **Skill** |
| 「我希望 AI 能連上外部服務（Slack、Google、資料庫）」 | **MCP / Plugin** |
| 「我希望 AI 不要碰某些檔案」 | **Hooks**（安全防護） |
| 「我希望 AI 幫我寫特定格式的報告」 | **Skill** |
| 「我希望 AI 能查看我的行事曆」 | **MCP / Plugin** |

---

## 常見問題

### Q：Hook 設定錯了會怎樣？

不用怕！最多就是 Hook 不會觸發，或是印出一些錯誤訊息。它不會讓 Claude Code 壞掉。你可以隨時打開 `settings.json` 把 Hook 刪掉或修改。

### Q：Hook 可以用在網頁版 Claude 嗎？

不行。Hooks 是 Claude Code（[CLI 版本](terms/terminal-cli.md)）的功能。網頁版 Claude 沒有這個機制。

### Q：我不會寫 JSON 怎麼辦？

最簡單的方法：直接叫 Claude Code 幫你寫！例如：

> 「幫我在 settings.json 裡新增一個 Hook，讓你每次編輯檔案前都自動備份原檔。」

AI 會幫你生成正確的 JSON 設定，你只要確認就好。

### Q：Hook 指令裡的 `$CLAUDE_TOOL_INPUT` 和 `$CLAUDE_TOOL_NAME` 是什麼？

這些是 Claude Code 在觸發 Hook 時自動提供的**環境變數**（[什麼是環境變數？](terms/environment-variable.md)），裡面包含了 AI 正在使用的工具資訊：

| 變數 | 內容 | 比喻 |
|------|------|------|
| `$CLAUDE_TOOL_NAME` | 工具名稱（如 `Bash`、`Edit`） | 感應器偵測到「誰」經過 |
| `$CLAUDE_TOOL_INPUT` | 工具的輸入內容（如要執行的指令） | 感應器偵測到「在做什麼」 |

### Q：`exit 0` 和 `exit 2` 差在哪？

| 指令 | 意思 | 比喻 |
|------|------|------|
| `exit 0` | 放行，繼續執行 | 保全揮手：「請進」 |
| `exit 2` | 阻止，不准執行 | 保全伸手：「停！不能進去」 |

---

## 下一步

- 📖 **想了解 Skill 怎麼用？** → [Skill 完整教學](SKILLS.md)
- 🔌 **想讓 AI 連上外部服務？** → 看看 [MCP 是什麼](terms/mcp.md)
- 📋 **想看更多指令？** → [指令速查卡](CHEATSHEET.md)
- 🏠 **回到首頁** → [README](README.md)

---

**[← 回到首頁](README.md)** · **[什麼是 Hooks？](terms/hooks.md)** · **[Skill 教學 →](SKILLS.md)**
