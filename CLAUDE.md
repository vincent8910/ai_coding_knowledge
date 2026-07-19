# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A documentation-only repository (pure Markdown, no code) teaching users how to choose and safely use **multiple AI Coding tools** (CLI, IDE, Coding Agent and multi-agent workflows). All content is in **繁體中文（台灣）**.

## Writing Guidelines

- **Target audience**: People who have never used a terminal. Zero jargon tolerance — every technical term must have a life-analogy explanation on first use.
- **Tone**: Humorous, approachable, yet professionally accurate. Use metaphors consistently (see metaphor system below).
- **Technical terms**: When a term appears, link to its dedicated page in `terms/`. If no page exists yet, create one following the existing format.
- **Each page ends with**: navigation links back to README glossary and to related term pages.

## Metaphor System (must be consistent across all files)

| Technical Concept | Metaphor |
|---|---|
| Web AI (ChatGPT/Claude.ai) | 出一張嘴的顧問 |
| Claude Code (CLI) | 動手做事的員工 / 管家熱線 |
| MCP | 感官器官 |
| Skill | 專業證照 |
| SuperClaude | 員工培訓手冊 / 超級裝備包 |
| Git | 後悔藥 / 時光機 |
| Agent Teams | 特遣隊 |
| API Key | 員工證 / 門禁卡 |
| Node.js | 辦公室基礎建設（水電） |
| Terminal / CLI | 管家熱線（直撥電話） |
| npm | 軟體商店 |
| Environment Variable | 隱形備忘錄 |

## Document Architecture

```
README.md          — 專案門面，快速導覽（主線 + 進階 + 工具書）+ 常見術語速查（僅列最常見 10 詞）
COMPARISON.md      — AI 服務訂閱比較 & IDE vs CLI 分析
INSTALL.md         — 零基礎安裝手冊（macOS + Windows + Git Bash）
CHEATSHEET.md      — 指令速查卡（基礎操作 / SuperClaude / MCP / 旗標）
USE_CASES.md       — 14 個使用場景（初級→中級→進階），按角色推薦
VALIDATION-SOP.md  — AI Coding 變更驗收 SOP（diff / 測試 / 人工確認 / rollback）
AI-CODING-SECURITY.md — AI Coding 安全與治理（sandbox / context boundary / prompt injection）
AI-CODING-EVALUATION.md — 固定 benchmark 與跨工具任務評估框架
GLOSSARY.md        — 完整術語速查手冊（8 大分類 + 比喻對照總表）
terms/             — 42 個專有名詞獨立說明頁（每頁：白話解釋 + 比喻 + 官方連結）
```

**Navigation flow**（README 快速導覽三區塊）:
- 主線 4 站：README → COMPARISON → INSTALL → USE_CASES
- 進階 8 主題：SKILLS / PLUGINS / HOOKS / MCP-GUIDE / SUBAGENTS / COMPUTER-USE / PROJECT-INSTRUCTIONS / AGENT-TEAMS
- 工具書：CHEATSHEET、GLOSSARY。All pages cross-link.

**術語三層架構**:
- `README.md` 底部：精選 10 個最常見術語（入口），連結到 GLOSSARY.md
- `GLOSSARY.md`：全部 42 個術語的分類表格（索引），連結到各 terms/*.md
- `terms/*.md`：每個術語的完整說明頁（內容）

## Commit Conventions

- 每個任務獨立一個 commit
- Commit message 用中文撰寫，說明「做了什麼」和「為什麼」
- 結尾加 `Co-Authored-By: Claude <noreply@anthropic.com>`
- 不加 `🤖 Generated with Claude Code` 行
- 完成後不自動 push，等用戶確認

## Key Constraints

- COMPARISON.md 的價格資訊會過時 — 修改時需 WebSearch 查最新定價，並更新「最後更新」日期
- `terms/` 頁面底部的 README 錨點連結指向 `../README.md#-專有名詞速查不懂的詞來這裡查`
- 新增術語頁面時，必須同步在 README.md 的術語表中加入對應列
