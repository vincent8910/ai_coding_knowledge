#!/usr/bin/env node

/**
 * build-site-simple.js
 *
 * 零外部依賴的 Markdown → HTML 轉換器。
 * 產生 docs/pages.json 與 docs/terms.json 供網站使用。
 *
 * 用法: node scripts/build-site-simple.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const OUT_PAGES = path.join(DOCS, 'pages.json');
const OUT_TERMS = path.join(DOCS, 'terms.json');

// 主線頁面（必修，照順序走）
const MAIN_PAGES = [
  { id: 'readme', file: 'README.md', title: '總覽', emoji: '🚉', desc: '了解全貌，搞懂為什麼值得學' },
  { id: 'comparison', file: 'COMPARISON.md', title: '選你的 AI', emoji: '🔍', desc: '五大 AI 服務比較' },
  { id: 'install', file: 'INSTALL.md', title: '裝起來', emoji: '🔧', desc: '零基礎安裝手冊' },
  { id: 'use-cases', file: 'USE_CASES.md', title: '開始做事', emoji: '🎯', desc: '14 個實戰場景' },
];

// 進階分支頁面（選修，按需求挑）
const BRANCH_PAGES = [
  { id: 'skills', file: 'SKILLS.md', title: 'Skill 教學', emoji: '🎓', desc: '建立你的 AI 專業證照' },
  { id: 'plugins', file: 'PLUGINS.md', title: 'Plugin 教學', emoji: '🔌', desc: '一鍵安裝 AI 擴充功能' },
  { id: 'hooks', file: 'HOOKS.md', title: 'Hooks 教學', emoji: '⚡', desc: '讓 AI 自動做該做的事' },
  { id: 'mcp-guide', file: 'MCP-GUIDE.md', title: 'MCP 教學', emoji: '🔗', desc: '幫 AI 裝上感官器官' },
  { id: 'subagents', file: 'SUBAGENTS.md', title: 'Subagent 教學', emoji: '👥', desc: 'AI 的分身術' },
  { id: 'computer-use', file: 'COMPUTER-USE.md', title: 'Computer Use', emoji: '🖥️', desc: 'AI 直接操控你的電腦' },
  { id: 'project-instructions', file: 'PROJECT-INSTRUCTIONS.md', title: '專案指令檔', emoji: '📝', desc: '讓 AI 記住專案規則' },
  { id: 'agent-teams', file: 'AGENT-TEAMS.md', title: 'Agent Teams', emoji: '🎖️', desc: '組建 AI 特遣隊' },
];

// 工具書（不在主線也不在分支，但可從側邊存取）
const TOOL_PAGES = [
  { id: 'cheatsheet', file: 'CHEATSHEET.md', title: '指令速查卡', emoji: '📋', desc: '小抄帶著走' },
];

// 合併所有頁面（供建構使用）
const PAGES = [...MAIN_PAGES, ...BRANCH_PAGES, ...TOOL_PAGES];

// 頁面檔名 → 頁面 ID 對應表
const FILE_TO_PAGE = {};
PAGES.forEach(p => {
  FILE_TO_PAGE[p.file] = p.id;
  FILE_TO_PAGE[p.file.toLowerCase()] = p.id;
});

// ---------------------------------------------------------------------------
// Simple Markdown → HTML converter (no dependencies)
// ---------------------------------------------------------------------------

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function convertInline(text) {
  // Images: ![alt](src)
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
  // Links: [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // Bold + italic: ***text*** or ___text___
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  // Bold: **text** or __text__
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.+?)__/g, '<strong>$1</strong>');
  // Italic: *text* or _text_ (but not inside words for _)
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  text = text.replace(/(?<!\w)_(.+?)_(?!\w)/g, '<em>$1</em>');
  // Inline code: `code` (must come after other inline processing to avoid conflicts)
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Strikethrough: ~~text~~
  text = text.replace(/~~(.+?)~~/g, '<del>$1</del>');
  return text;
}

function markdownToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // --- Fenced code block ---
    const fenceMatch = line.match(/^```(\w*)/);
    if (fenceMatch) {
      const lang = fenceMatch[1];
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      i++; // skip closing ```
      const langAttr = lang ? ` class="language-${lang}"` : '';
      out.push(`<pre><code${langAttr}>${codeLines.join('\n')}</code></pre>`);
      continue;
    }

    // --- Horizontal rule ---
    if (/^(-{3,}|_{3,}|\*{3,})\s*$/.test(line)) {
      out.push('<hr>');
      i++;
      continue;
    }

    // --- Heading ---
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = convertInline(headingMatch[2].replace(/\s*#+\s*$/, '')); // strip trailing #
      // Generate an id from heading text for anchoring
      const id = headingMatch[2]
        .replace(/[^\w\u4e00-\u9fff\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
      out.push(`<h${level} id="${id}">${text}</h${level}>`);
      i++;
      continue;
    }

    // --- Table ---
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*[-:]+[-|:\s]+$/.test(lines[i + 1])) {
      const tableLines = [];
      // Collect all table rows
      let ti = i;
      while (ti < lines.length && lines[ti].includes('|')) {
        tableLines.push(lines[ti]);
        ti++;
      }
      if (tableLines.length >= 2) {
        out.push(parseTable(tableLines));
        i = ti;
        continue;
      }
    }

    // --- Blockquote ---
    if (line.startsWith('>')) {
      const bqLines = [];
      while (i < lines.length && (lines[i].startsWith('>') || (lines[i].trim() !== '' && bqLines.length > 0 && !lines[i].startsWith('#')))) {
        if (!lines[i].startsWith('>')) break;
        bqLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      const inner = markdownToHtml(bqLines.join('\n'));
      out.push(`<blockquote>${inner}</blockquote>`);
      continue;
    }

    // --- Unordered list ---
    if (/^\s*[-*+]\s+/.test(line)) {
      const result = parseList(lines, i, 'ul');
      out.push(result.html);
      i = result.nextIndex;
      continue;
    }

    // --- Ordered list ---
    if (/^\s*\d+\.\s+/.test(line)) {
      const result = parseList(lines, i, 'ol');
      out.push(result.html);
      i = result.nextIndex;
      continue;
    }

    // --- Empty line ---
    if (line.trim() === '') {
      i++;
      continue;
    }

    // --- Paragraph (collect consecutive non-empty lines) ---
    const pLines = [];
    while (i < lines.length && lines[i].trim() !== '' &&
           !lines[i].startsWith('#') &&
           !lines[i].startsWith('>') &&
           !lines[i].startsWith('```') &&
           !/^\s*[-*+]\s+/.test(lines[i]) &&
           !/^\s*\d+\.\s+/.test(lines[i]) &&
           !/^(-{3,}|_{3,}|\*{3,})\s*$/.test(lines[i]) &&
           !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*[-:]+[-|:\s]+$/.test(lines[i + 1]))) {
      pLines.push(lines[i]);
      i++;
    }
    if (pLines.length > 0) {
      const text = convertInline(pLines.join('\n'));
      out.push(`<p>${text}</p>`);
    }
  }

  return out.join('\n');
}

function parseList(lines, startIndex, type) {
  const items = [];
  let i = startIndex;
  const listPattern = type === 'ul' ? /^\s*[-*+]\s+(.*)/ : /^\s*\d+\.\s+(.*)/;
  const baseIndent = lines[i].match(/^(\s*)/)[1].length;

  while (i < lines.length) {
    const currentIndent = lines[i].match(/^(\s*)/)[1].length;
    const match = lines[i].match(listPattern);

    if (match && currentIndent === baseIndent) {
      items.push(convertInline(match[1]));
      i++;
      // Check for nested list
      if (i < lines.length) {
        const nextIndent = lines[i].match(/^(\s*)/)[1].length;
        if (nextIndent > baseIndent && (/^\s*[-*+]\s+/.test(lines[i]) || /^\s*\d+\.\s+/.test(lines[i]))) {
          const nestedType = /^\s*\d+\.\s+/.test(lines[i]) ? 'ol' : 'ul';
          const nested = parseList(lines, i, nestedType);
          items[items.length - 1] += nested.html;
          i = nested.nextIndex;
        }
      }
    } else if (currentIndent > baseIndent && items.length > 0) {
      // Continuation line of current item
      items[items.length - 1] += ' ' + convertInline(lines[i].trim());
      i++;
    } else {
      break;
    }
  }

  const lis = items.map(item => `<li>${item}</li>`).join('\n');
  return { html: `<${type}>\n${lis}\n</${type}>`, nextIndex: i };
}

function parseTable(tableLines) {
  const rows = tableLines.map(line => {
    return line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map(cell => cell.trim());
  });

  if (rows.length < 2) return '';

  // Parse alignment from separator row
  const aligns = rows[1].map(cell => {
    if (/^:-+:$/.test(cell)) return 'center';
    if (/^-+:$/.test(cell)) return 'right';
    return 'left';
  });

  let html = '<table>\n<thead>\n<tr>';
  rows[0].forEach((cell, ci) => {
    const align = aligns[ci] || 'left';
    html += `<th style="text-align:${align}">${convertInline(cell)}</th>`;
  });
  html += '</tr>\n</thead>\n<tbody>';

  for (let r = 2; r < rows.length; r++) {
    html += '\n<tr>';
    rows[r].forEach((cell, ci) => {
      const align = aligns[ci] || 'left';
      html += `<td style="text-align:${align}">${convertInline(cell || '')}</td>`;
    });
    html += '</tr>';
  }

  html += '\n</tbody>\n</table>';
  return html;
}

// ---------------------------------------------------------------------------
// Link transformation
// ---------------------------------------------------------------------------

function processLinks(html) {
  return html
    // terms/xxx.md 或 ../terms/xxx.md → #term-xxx
    .replace(/href="(?:\.\.\/)?terms\/([^"]+?)\.md"/g, (match, name) => {
      return `href="#term-${name}" data-term="${name}"`;
    })
    // ../README.md#xxx 或 ../GLOSSARY.md 等 → 對應頁面
    .replace(/href="\.\.\/([A-Z_-]+)\.md(?:#[^"]*)?"/g, (match, name) => {
      const pageId = FILE_TO_PAGE[name + '.md'] || FILE_TO_PAGE[name.toLowerCase() + '.md'];
      if (pageId) return `href="#page-${pageId}" data-page="${pageId}"`;
      return match;
    })
    // 同級 XXX.md → 對應頁面
    .replace(/href="([A-Z_-]+)\.md(?:#[^"]*)?"/g, (match, name) => {
      const pageId = FILE_TO_PAGE[name + '.md'] || FILE_TO_PAGE[name.toLowerCase() + '.md'];
      if (pageId) return `href="#page-${pageId}" data-page="${pageId}"`;
      return match;
    })
    // README.md（無路徑）→ 首頁
    .replace(/href="README\.md(?:#[^"]*)?"/g, 'href="#page-readme" data-page="readme"');
}

// ---------------------------------------------------------------------------
// Build functions
// ---------------------------------------------------------------------------

function buildPages() {
  const pages = [];

  for (const page of PAGES) {
    const filePath = path.join(ROOT, page.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`  找不到 ${page.file}，跳過`);
      continue;
    }

    const raw = fs.readFileSync(filePath, 'utf-8');
    let html = markdownToHtml(raw);
    html = processLinks(html);

    const group = MAIN_PAGES.find(p => p.id === page.id) ? 'main'
      : BRANCH_PAGES.find(p => p.id === page.id) ? 'branch'
      : 'tool';

    pages.push({
      id: page.id,
      title: page.title,
      emoji: page.emoji,
      desc: page.desc,
      group,
      content: html,
    });
  }

  return pages;
}

function buildTerms() {
  const termsDir = path.join(ROOT, 'terms');
  if (!fs.existsSync(termsDir)) {
    console.warn('  找不到 terms/ 資料夾');
    return {};
  }

  const terms = {};
  const files = fs.readdirSync(termsDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const id = path.basename(file, '.md');
    const raw = fs.readFileSync(path.join(termsDir, file), 'utf-8');

    // 提取標題
    const titleMatch = raw.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : id;

    // 移除標題行（UI 會另外顯示）
    const contentWithoutTitle = raw.replace(/^#\s+.+\n*/m, '');
    let html = markdownToHtml(contentWithoutTitle);
    html = processLinks(html);

    // 移除底部導覽連結
    html = html.replace(/<p><strong><a[^>]*>← 回到術語總覽<\/a><\/strong>[^<]*<\/p>/g, '');
    html = html.replace(/<p>\s*<strong>\s*<a[^>]*>←[^<]*<\/a>\s*<\/strong>\s*[\s\S]*?<\/p>\s*$/g, '');

    terms[id] = { title, content: html };
  }

  return terms;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!fs.existsSync(DOCS)) {
    fs.mkdirSync(DOCS, { recursive: true });
  }

  console.log('正在建構網站內容（簡易版，無外部依賴）...');

  const pages = buildPages();
  const terms = buildTerms();

  fs.writeFileSync(OUT_PAGES, JSON.stringify(pages, null, 0), 'utf-8');
  fs.writeFileSync(OUT_TERMS, JSON.stringify(terms, null, 0), 'utf-8');

  const pagesKB = (fs.statSync(OUT_PAGES).size / 1024).toFixed(1);
  const termsKB = (fs.statSync(OUT_TERMS).size / 1024).toFixed(1);
  const termCount = Object.keys(terms).length;

  console.log('網站內容已建構完成');
  console.log(`   ${pages.length} 個主頁面 → pages.json (${pagesKB} KB)`);
  console.log(`   ${termCount} 個術語頁 → terms.json (${termsKB} KB)`);
}

main();
