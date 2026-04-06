# Plugin 教學：幫 AI 裝上專業 App

> **你的手機沒有 App 就只是一塊會打電話的磚頭。AI 也一樣——Plugin 就是讓它從「基本款」變成「什麼都能做」的關鍵。**

---

## 大綱

- [Plugin 是什麼？跟 Skill 差在哪？](#plugin-是什麼跟-skill-差在哪) — 手機 App vs 快捷指令
- [Plugin 的結構](#plugin-的結構) — 打開一個 Plugin 看看裡面裝了什麼
- [怎麼安裝 Plugin？](#怎麼安裝-plugin) — 三種安裝方式，最快 10 秒搞定
- [去哪裡找好用的 Plugin？](#去哪裡找好用的-plugin) — 推薦清單 + 安裝指令
- [動手做：建立你的第一個 Plugin](#動手做建立你的第一個-plugin) — 手把手帶你做一個
- [Plugin 管理](#plugin-管理) — 安裝、更新、移除、停用
- [下一步](#下一步) — 學完 Plugin 之後去哪裡

---

## Plugin 是什麼？跟 Skill 差在哪？

### 先從生活場景說起

你的 iPhone 上有兩種「自動化」的東西：

1. **快捷指令（捷徑）**：例如「到家後自動開冷氣」——一個小小的自動化動作，很單純。
2. **App**：例如整個 Uber Eats——裡面有介面、有帳號系統、有推播通知、有付款功能，是一整套東西。

在 AI 的世界裡：

- **[Skill](terms/skill.md) = 快捷指令**：一個 `SKILL.md` 檔案，告訴 AI「遇到這種任務就照這個步驟做」。
- **Plugin = App**：把 Skill、設定檔、[MCP 伺服器](terms/mcp.md)、[Hooks](terms/hooks.md)、範本檔案⋯⋯全部打包成一個完整的功能包，下載就能用。

**一句話：Skill 是一道菜的食譜，Plugin 是整個餐廳——有食譜、有食材、有廚具、有裝潢。**

### Skill vs Plugin 完整比較表

| 比較項目 | [Skill](terms/skill.md)（快捷指令） | Plugin（App） |
|---------|----------------------------------|--------------|
| **包含什麼** | 一個 `SKILL.md` 檔案 | Skill + 設定檔 + MCP + Hooks + 範本 |
| **檔案數量** | 1 個 | 通常 5～20 個 |
| **安裝方式** | 複製一個檔案到專案裡 | 一行指令從 GitHub 安裝 |
| **複雜度** | 像在手機設定一個鬧鐘 | 像下載一個完整的 App |
| **能做的事** | 單一任務自動化 | 複雜的多步驟工作流程 |
| **需要的知識** | 會打字就行 | 會貼指令就行（也不難） |
| **分享方式** | 傳一個檔案給同事 | 分享一個 GitHub 連結 |
| **更新方式** | 手動改檔案 | 一行指令自動更新 |
| **依賴其他工具** | 不需要 | 可能需要 MCP 伺服器、額外套件等 |
| **生活比喻** | iPhone 的「捷徑」 | iPhone 的「App」 |

### 什麼時候該用 Skill？什麼時候該用 Plugin？

| 你的需求 | 用 Skill | 用 Plugin |
|---------|---------|----------|
| 「幫我用固定格式寫週報」 | ✅ 一個 Skill 就搞定 | 殺雞用牛刀 |
| 「幫我自動分析股票，抓數據、畫圖表、產報告」 | ❌ 太複雜了 | ✅ 需要打包多個功能 |
| 「幫我把 email 用特定語氣回覆」 | ✅ 很適合 | 除非你還要自動讀信 |
| 「幫我管理整個專案：排程、追蹤、產文件」 | ❌ 太多事了 | ✅ 完整工作流程 |
| 「我只想讓 AI 記住我喜歡的格式」 | ✅ 最簡單的 Skill | 不需要 |
| 「團隊 10 個人都要用同一套工作流程」 | 可以但散 | ✅ 打包分享最方便 |

### 實際例子

#### 例子一：Email 助手

**只用 Skill 的版本：**
- 一個 `email-writer.md`，告訴 AI「用這種語氣寫 email，結尾加問候語」
- AI 按照你的指示寫出一封信，你自己複製貼上去寄

**用 Plugin 的版本：**
- Skill：寫信的指令和語氣設定
- MCP 伺服器：直接連上你的 Gmail，自動讀取收件匣
- Hooks：收到新信時自動提醒你要不要回覆
- 範本：不同場景的 email 模板（客訴回覆、合作邀約、會議邀請⋯⋯）
- 設定檔：你的簽名檔、偏好的語氣設定

**差別**：Skill 像是教助手「怎麼寫信」，Plugin 像是直接裝一個「秘書系統」。

#### 例子二：數據分析

**只用 Skill：**
- 一個 `data-analyst.md`，告訴 AI 怎麼分析 CSV 檔案

**用 Plugin：**
- Skill：分析步驟和報告格式
- MCP 伺服器：自動連接公司的資料庫或 Google Sheets
- 範本：報告的固定格式模板
- Hooks：分析完自動把報告存到指定資料夾
- 設定檔：常用的欄位名稱對照表

---

## Plugin 的結構

### 打開一個 Plugin 看看裡面有什麼

Plugin 就是一個資料夾，裡面按照規定的格式擺好檔案。就像你去 IKEA 買家具——打開箱子，裡面有零件、螺絲、說明書，各歸各位。

一個典型的 Plugin 資料夾長這樣：

```
my-awesome-plugin/          ← 整個 Plugin 的資料夾（就像 App 的安裝包）
├── plugin.json             ← 「說明書」：Plugin 的名字、版本、作者
├── skills/                 ← 「功能區」：放所有的 Skill 檔案
│   ├── write-email.md      ← Skill 1：教 AI 怎麼寫 email
│   └── reply-email.md      ← Skill 2：教 AI 怎麼回 email
├── mcp/                    ← 「外接設備」：MCP 伺服器設定
│   └── gmail-server.json   ← 讓 AI 能連上 Gmail
├── hooks/                  ← 「自動觸發器」：設定自動化動作
│   └── auto-format.sh      ← 寫完信自動排版
├── templates/              ← 「模板庫」：預先做好的範本
│   ├── formal-email.md     ← 正式信件模板
│   └── casual-email.md     ← 輕鬆語氣模板
└── README.md               ← 「使用手冊」：教你怎麼用這個 Plugin
```

別被這些檔案嚇到！**你不需要自己建這些**——大多數時候你只要用一行指令安裝別人做好的 Plugin 就行了。

### plugin.json：Plugin 的「身分證」

每個 Plugin 都有一個 `plugin.json` 檔案，就像 App 在 App Store 上的介紹頁面：

```json
{
  "name": "email-assistant",
  "version": "1.2.0",
  "description": "AI 秘書：自動讀信、寫信、分類信件",
  "author": "你的名字",
  "skills": [
    "skills/write-email.md",
    "skills/reply-email.md"
  ],
  "mcp_servers": [
    "mcp/gmail-server.json"
  ],
  "hooks": {
    "post_response": "hooks/auto-format.sh"
  },
  "settings": {
    "default_tone": "professional",
    "signature": "Best regards"
  }
}
```

翻譯成白話：

| 欄位 | 白話意思 | 像什麼 |
|------|---------|--------|
| `name` | 這個 Plugin 叫什麼名字 | App 名稱 |
| `version` | 現在是第幾版 | App 版本號（1.2.0） |
| `description` | 這個 Plugin 做什麼用的 | App Store 裡的一句話介紹 |
| `author` | 誰做的 | App 開發者 |
| `skills` | 裡面包含哪些 Skill | App 裡有哪些功能 |
| `mcp_servers` | 需要連接哪些外部工具 | App 需要的權限（相機、GPS⋯⋯） |
| `hooks` | 什麼時候自動觸發什麼動作 | App 的通知設定 |
| `settings` | 預設的偏好設定 | App 的預設語言、主題色 |

### Plugin 怎麼把 Skill、MCP、Hooks 串在一起？

想像你開一間餐廳：

- **Skill**（食譜）：告訴廚師怎麼做每道菜
- **[MCP](terms/mcp.md)**（食材供應商）：自動幫你進貨，不用自己去市場
- **[Hooks](terms/hooks.md)**（排班表）：客人來了自動叫廚師上菜，不用你盯
- **Settings**（餐廳風格）：你偏好的辣度、份量、擺盤

Plugin 就是把這四樣東西打包成一個「餐廳加盟包」。別人拿到這個加盟包，按照說明裝好，馬上就能開一間一模一樣的餐廳。

---

## 怎麼安裝 Plugin？

安裝 Plugin 比安裝手機 App 還簡單——不用去 App Store 搜尋，不用輸入密碼，不用等下載。

> 💡 以下操作都是在 [Terminal](terms/terminal-cli.md)（管家熱線）裡進行。如果你還不知道 Terminal 是什麼，先去看 [Terminal 說明](terms/terminal-cli.md)。

### 方法一：從 GitHub 安裝（最常用）

**GitHub 就像 Plugin 的「App Store」。** 大多數好用的 Plugin 都放在 GitHub 上，一行指令就能裝。

```bash
claude plugin add https://github.com/作者名/plugin名稱
```

**實際範例：**

```bash
# 安裝一個幫你寫技術文件的 Plugin
claude plugin add https://github.com/example/doc-writer-plugin

# 安裝一個自動分析數據的 Plugin
claude plugin add https://github.com/example/data-analyzer-plugin
```

**步驟拆解：**

1. 在 GitHub 上找到你要的 Plugin（就像在 App Store 搜尋 App）
2. 複製那個 Plugin 的 GitHub 網址
3. 打開 Terminal
4. 輸入 `claude plugin add` 後面貼上網址
5. 按 Enter
6. 等幾秒鐘，安裝完成

就這樣。真的就這樣。比泡一杯咖啡還快。

### 方法二：從本地安裝

如果你已經把 Plugin 的檔案下載到電腦上了（例如同事用隨身碟給你的），可以直接從本地資料夾安裝：

```bash
claude plugin add /path/to/my-plugin
```

**實際範例：**

```bash
# 假設 Plugin 在你的「下載」資料夾裡
claude plugin add ~/Downloads/email-assistant-plugin

# 假設 Plugin 在桌面上
claude plugin add ~/Desktop/team-workflow-plugin
```

**什麼時候用本地安裝？**

| 場景 | 為什麼用本地安裝 |
|------|----------------|
| 同事傳給你的 Plugin | 不一定有放在 GitHub 上 |
| 你自己開發的 Plugin | 還在測試階段 |
| 公司內部的私有 Plugin | 不方便公開在 GitHub |
| 沒有網路的時候 | 離線也能裝 |

### 方法三：用 npx 安裝

如果 Plugin 有發布到 [npm](terms/npm.md)（軟體商店），可以用 npx 安裝：

```bash
npx claude-plugin-installer 作者名/plugin名稱
```

**實際範例：**

```bash
npx claude-plugin-installer @team/project-manager-plugin
```

> 💡 **新手建議**：先用方法一（GitHub 安裝）就好，這是最常用也最簡單的方式。方法二和方法三是進階選項，等你熟悉了再考慮。

---

## 去哪裡找好用的 Plugin？

### 三個主要管道

| 管道 | 網址 | 像什麼 |
|------|------|--------|
| **GitHub Awesome Lists** | 搜尋 `awesome-claude-plugins` | 美食部落客的「必吃清單」 |
| **SkillHub.club** | [skillhub.club](https://skillhub.club) | 像一個小型 App Store |
| **GitHub 搜尋** | 在 GitHub 搜尋 `claude plugin` | 直接去市場自己挖寶 |

### 推薦 Plugin 清單

以下是不同用途的好用 Plugin，按照類別分類。每個都附上安裝指令，複製貼上就能裝。

---

#### 開發類 Plugin

適合需要寫程式或管理專案的人（工程師、技術 PM）。

| Plugin 名稱 | 做什麼用的 | 安裝指令 |
|-------------|-----------|---------|
| **Doc Writer** | 自動產生技術文件，幫你把程式碼變成人看得懂的說明 | `claude plugin add https://github.com/example/doc-writer` |
| **Test Generator** | 自動幫程式碼寫測試，確保功能不會壞掉 | `claude plugin add https://github.com/example/test-generator` |
| **Code Reviewer** | 像一個嚴格的前輩幫你看程式碼，挑出問題 | `claude plugin add https://github.com/example/code-reviewer` |
| **Git Workflow** | 自動處理 [Git](terms/git.md) 相關操作，幫你管理版本 | `claude plugin add https://github.com/example/git-workflow` |

#### 生產力 Plugin

適合所有人——PM、行銷、行政、主管都能用。

| Plugin 名稱 | 做什麼用的 | 安裝指令 |
|-------------|-----------|---------|
| **Meeting Notes** | 自動整理會議紀錄：重點摘要 + 待辦事項 + 負責人 | `claude plugin add https://github.com/example/meeting-notes` |
| **Report Builder** | 自動產週報 / 月報，從你的工作紀錄中自動彙整 | `claude plugin add https://github.com/example/report-builder` |
| **Task Manager** | 追蹤專案進度，自動提醒你哪些事情快到期了 | `claude plugin add https://github.com/example/task-manager` |
| **Email Drafter** | 根據你的語氣偏好自動草擬 email，還能自動分類來信 | `claude plugin add https://github.com/example/email-drafter` |

#### 數據分析 Plugin

適合需要看數字做決策的人（分析師、行銷、財務）。

| Plugin 名稱 | 做什麼用的 | 安裝指令 |
|-------------|-----------|---------|
| **CSV Analyzer** | 丟一個 CSV 檔案進去，自動跑統計分析和趨勢圖 | `claude plugin add https://github.com/example/csv-analyzer` |
| **Survey Parser** | 問卷調查結果自動分析，幫你找出有意義的發現 | `claude plugin add https://github.com/example/survey-parser` |
| **Financial Report** | 自動分析財務數據，產出包含圖表的分析報告 | `claude plugin add https://github.com/example/financial-report` |

#### 寫作 / 內容創作 Plugin

適合需要大量產出文字內容的人（行銷、編輯、社群小編）。

| Plugin 名稱 | 做什麼用的 | 安裝指令 |
|-------------|-----------|---------|
| **Blog Writer** | 根據大綱自動寫部落格文章，符合 SEO 規範 | `claude plugin add https://github.com/example/blog-writer` |
| **Social Media Pack** | 一次產出多平台的社群貼文（FB、IG、LinkedIn） | `claude plugin add https://github.com/example/social-media-pack` |
| **Translation Pro** | 翻譯文件並保持原本的格式不變（Markdown、HTML 都支援） | `claude plugin add https://github.com/example/translation-pro` |
| **Content Calendar** | 自動規劃內容日曆，幫你安排一整個月的發文計畫 | `claude plugin add https://github.com/example/content-calendar` |

> 💡 **小提醒**：上面的 Plugin 名稱和網址是示範用的。實際安裝時，請到 GitHub 或 SkillHub.club 搜尋最新可用的 Plugin。AI 工具生態圈發展超快，每個月都有新的好東西冒出來。

---

## 動手做：建立你的第一個 Plugin

好了，看了這麼多別人的 Plugin，來自己做一個吧！

### 我們要做什麼？

我們要做一個「Email 寫手」Plugin，功能包括：

- 一個 Skill：教 AI 用你喜歡的語氣寫 email
- 一個範本檔案：正式 email 的格式模板
- 一個設定檔：你的偏好設定（簽名檔、預設語氣）

**預計花費時間：10 分鐘**（比你猶豫中午吃什麼還快）

### 第一步：建立資料夾結構

打開 Terminal，輸入以下指令：

```bash
# 建立 Plugin 資料夾和子資料夾
mkdir -p my-email-plugin/skills
mkdir -p my-email-plugin/templates
```

這就像在電腦上建立一個新資料夾，然後在裡面再建兩個小資料夾。

### 第二步：建立 plugin.json（Plugin 的身分證）

在 `my-email-plugin` 資料夾裡，建立一個 `plugin.json` 檔案：

```json
{
  "name": "email-writer",
  "version": "1.0.0",
  "description": "AI Email 寫手：根據你的風格自動撰寫各種 email",
  "author": "你的名字",
  "skills": [
    "skills/write-email.md"
  ],
  "settings": {
    "default_tone": "professional-friendly",
    "language": "zh-TW"
  }
}
```

**白話翻譯**：

- 這個 Plugin 叫做 `email-writer`
- 第一版（1.0.0）
- 裡面有一個 Skill 叫做 `write-email`
- 預設語氣是「專業但友善」
- 預設語言是繁體中文

### 第三步：建立 Skill 檔案（教 AI 怎麼寫信）

在 `skills` 資料夾裡，建立 `write-email.md`：

```markdown
# Email 寫手

## 觸發條件
當使用者要求寫 email、草擬信件、回覆郵件時自動啟用。

## 工作步驟

1. 先確認以下資訊：
   - 收件人是誰？（客戶、同事、主管、廠商）
   - 信件目的是什麼？（邀約、回覆、感謝、催促、道歉）
   - 語氣要求？（正式、輕鬆、嚴肅）

2. 根據收件人和目的選擇適當的模板。

3. 撰寫信件時遵守以下規則：
   - 開頭先稱呼對方
   - 第一段說明來意（不超過 2 句）
   - 中間段落說明細節
   - 結尾明確告知下一步行動
   - 附上簽名檔

4. 寫完後自動檢查：
   - 有沒有錯字
   - 語氣是否一致
   - 有沒有遺漏重要資訊
```

### 第四步：建立範本檔案

在 `templates` 資料夾裡，建立 `formal-email.md`：

```markdown
# 正式 Email 模板

---

{收件人稱呼}您好：

{開頭：說明來意，1-2 句}

{主文：詳細內容}

{結尾：下一步行動}

如有任何問題，歡迎隨時與我聯繫。

{簽名檔}
```

### 第五步：安裝你的 Plugin

回到 Terminal，在 Plugin 資料夾的**上一層**，輸入：

```bash
claude plugin add ./my-email-plugin
```

完成！你的第一個 Plugin 就裝好了。

### 第六步：測試看看

啟動 Claude Code，試著說：

```
幫我寫一封 email 給客戶王經理，感謝他上週的會議，
並確認下週二下午 2 點的後續會議。語氣正式但友善。
```

AI 會自動使用你的 Plugin 裡的 Skill 和模板來寫信。

### 怎麼分享給團隊？

做好的 Plugin 要分享給同事，有兩種方式：

**方式一：直接傳資料夾**
把整個 `my-email-plugin` 資料夾壓縮成 ZIP，傳給同事。同事解壓縮後用本地安裝：

```bash
claude plugin add ~/Downloads/my-email-plugin
```

**方式二：放到 GitHub（推薦）**
把 Plugin 上傳到 [GitHub](terms/github.md)，同事用一行指令就能安裝：

```bash
# 你上傳到 GitHub 之後
claude plugin add https://github.com/你的帳號/my-email-plugin

# 同事只要貼這行指令就能安裝，超方便
```

> 💡 **分享到 GitHub 的好處**：
> - 同事不用跟你要檔案，自己裝就好
> - 你更新了 Plugin，同事可以一鍵更新
> - 其他人也能用，搞不好你會紅（？）

---

## Plugin 管理

裝了 Plugin 之後，你可能需要查看、更新、移除或暫時停用。就像管理手機上的 App 一樣。

### 查看已安裝的 Plugin

```bash
claude plugin list
```

這會列出你目前安裝的所有 Plugin，像這樣：

```
已安裝的 Plugin：
✅ email-writer (v1.0.0) — AI Email 寫手
✅ meeting-notes (v2.1.0) — 會議紀錄整理
✅ csv-analyzer (v1.3.2) — CSV 數據分析
⏸️ blog-writer (v1.0.0) — 部落格寫手 [已停用]
```

### 更新 Plugin

Plugin 的作者可能會修 bug 或加新功能。更新就像更新手機 App 一樣：

```bash
# 更新指定的 Plugin
claude plugin update email-writer

# 一次更新所有 Plugin
claude plugin update --all
```

> 💡 **建議**：定期更新你的 Plugin（就像定期更新手機 App），才能享受最新功能和修正。

### 移除 Plugin

不想用了？直接移除：

```bash
claude plugin remove email-writer
```

**移除前 AI 會問你確認**，不用怕按錯。

就像從手機刪除 App 一樣，移除 Plugin 不會影響你已經產生的檔案和成果。

### 停用 / 啟用 Plugin

有時候你不想完全刪掉 Plugin，只是暫時不需要它。就像手機上的「卸載 App 但保留資料」：

```bash
# 暫時停用（Plugin 還在，只是不會被使用）
claude plugin disable email-writer

# 重新啟用
claude plugin enable email-writer
```

**什麼時候會想停用？**

| 場景 | 為什麼停用而不是移除 |
|------|-------------------|
| Plugin 跟另一個 Plugin 衝突了 | 先停一個試試看，確認是誰的問題 |
| 這個 Plugin 特定專案才用得到 | 做其他專案時先關掉，避免干擾 |
| Plugin 好像有 bug | 先停用，等作者修好再啟用 |
| 想對比有沒有 Plugin 的差異 | 停用後測試一下效果 |

### Plugin 管理速查表

| 你想做的事 | 指令 | 說明 |
|-----------|------|------|
| 安裝（GitHub） | `claude plugin add <GitHub 網址>` | 最常用的安裝方式 |
| 安裝（本地） | `claude plugin add <資料夾路徑>` | 離線安裝 |
| 列出所有 Plugin | `claude plugin list` | 查看安裝了哪些 |
| 更新指定 Plugin | `claude plugin update <名稱>` | 更新到最新版 |
| 更新全部 | `claude plugin update --all` | 懶人一鍵更新 |
| 移除 Plugin | `claude plugin remove <名稱>` | 徹底刪除 |
| 停用 Plugin | `claude plugin disable <名稱>` | 暫時關閉 |
| 啟用 Plugin | `claude plugin enable <名稱>` | 重新打開 |

---

## 常見問題 FAQ

### Q：安裝 Plugin 會不會把我的東西弄壞？

**A：不會。** Plugin 只是增加功能，不會動到你原本的檔案。就像裝一個手機 App 不會影響你已有的照片和訊息。

### Q：Plugin 會不會讀取我的隱私資料？

**A：要看 Plugin 的設定。** 安裝前建議看一下 Plugin 的 README，了解它需要哪些權限。就像安裝手機 App 時，它會告訴你「需要存取你的相機 / 通訊錄」——你可以選擇接受或拒絕。

### Q：Plugin 跟 [MCP](terms/mcp.md) 有什麼關係？

**A：** MCP 是 AI 的「感官器官」，讓 AI 能連接外部工具。Plugin 可以「包含」一個或多個 MCP 設定，讓你不用自己去設定 MCP，裝 Plugin 就自動搞定。

### Q：我完全不會寫程式，能用 Plugin 嗎？

**A：當然可以！** 安裝和使用 Plugin 完全不需要寫程式。你只需要會在 Terminal 裡貼指令就行了。只有「自己開發 Plugin」才需要一點點技術知識——但這也可以請 AI 幫你做。

### Q：Plugin 要付費嗎？

**A：目前大多數 Plugin 都是免費的。** 它們是社群開發者分享的開源作品。不過未來可能會出現付費的 Premium Plugin，就像手機 App 有免費和付費的一樣。

---

## 下一步

恭喜你！現在你已經知道 Plugin 是什麼、怎麼裝、怎麼用、甚至怎麼自己做一個了。

接下來你可以：

| 你的下一步 | 去哪裡 |
|-----------|--------|
| 想先學基礎的 Skill | **[Skill 教學 →](SKILLS.md)** |
| 想了解 MCP 是什麼 | **[MCP 說明](terms/mcp.md)** |
| 想了解 Hooks 怎麼用 | **[Hooks 說明](terms/hooks.md)** |
| 想看更多使用場景 | **[14 個實戰場景](USE_CASES.md)** |
| 想回首頁看全貌 | **[回到首頁](README.md)** |
| 想查其他術語 | **[專有名詞速查](GLOSSARY.md)** |

> 💡 **學習建議**：如果你是完全的新手，建議先去學 [Skill](terms/skill.md)，因為 Skill 是 Plugin 的基礎。就像先學會做一道菜（Skill），再考慮開餐廳（Plugin）。

---

**[← 回到首頁](README.md)** · **[什麼是 Plugin？](terms/plugin.md)** · **[Skill 教學 →](SKILLS.md)**
