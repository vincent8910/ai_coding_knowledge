#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const OUT_PAGES = path.join(DOCS, 'pages.json');
const OUT_TERMS = path.join(DOCS, 'terms.json');

// 主要頁面定義（學習路徑順序）
const PAGES = [
  { id: 'readme', file: 'README.md', title: '總覽', emoji: '🚉', desc: '了解全貌，搞懂為什麼值得學' },
  { id: 'comparison', file: 'COMPARISON.md', title: '選你的 AI', emoji: '🔍', desc: '五大 AI 服務比較' },
  { id: 'install', file: 'INSTALL.md', title: '裝起來', emoji: '🔧', desc: '零基礎安裝手冊' },
  { id: 'cheatsheet', file: 'CHEATSHEET.md', title: '小抄', emoji: '📋', desc: '指令速查卡' },
  { id: 'use-cases', file: 'USE_CASES.md', title: '開始做事', emoji: '🎯', desc: '12 個實戰場景' },
  { id: 'skills', file: 'SKILLS.md', title: 'Skill 教學', emoji: '🎓', desc: '建立你的 AI 專業證照' },
  { id: 'glossary', file: 'GLOSSARY.md', title: '術語速查', emoji: '📖', desc: '不懂的詞來這裡查' },
];

// 頁面檔名 → 頁面 ID 對應表
const FILE_TO_PAGE = {};
PAGES.forEach(p => {
  FILE_TO_PAGE[p.file] = p.id;
  FILE_TO_PAGE[p.file.toLowerCase()] = p.id;
});

/**
 * 處理 HTML 中的內��連結
 * - terms/xxx.md → #term-xxx（術語側邊面板）
 * - XXX.md → #page-xxx（主頁面切換）
 * - ../README.md#xxx → #page-readme
 */
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

function buildPages() {
  const pages = [];

  for (const page of PAGES) {
    const filePath = path.join(ROOT, page.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  找不到 ${page.file}，跳過`);
      continue;
    }

    const raw = fs.readFileSync(filePath, 'utf-8');
    let html = marked(raw);
    html = processLinks(html);

    pages.push({
      id: page.id,
      title: page.title,
      emoji: page.emoji,
      desc: page.desc,
      content: html,
    });
  }

  return pages;
}

function buildTerms() {
  const termsDir = path.join(ROOT, 'terms');
  if (!fs.existsSync(termsDir)) {
    console.warn('⚠️  找不到 terms/ 資料夾');
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

    // 轉 HTML（移除標題行，UI 會另外顯示）
    const contentWithoutTitle = raw.replace(/^#\s+.+\n*/m, '');
    let html = marked(contentWithoutTitle);
    html = processLinks(html);

    // 隱藏底部的導覽連結（「← 回到術語總覽」之類的）
    html = html.replace(/<p><strong><a[^>]*>← 回到術語總覽<\/a><\/strong>[^<]*<\/p>/g, '');
    // 也隱藏最後一段含有多個導覽連結的 paragraph
    html = html.replace(/<p>\s*<strong>\s*<a[^>]*>←[^<]*<\/a>\s*<\/strong>\s*·[\s\S]*?<\/p>\s*$/g, '');

    terms[id] = { title, content: html };
  }

  return terms;
}

function main() {
  // 確保 docs 目錄存在
  if (!fs.existsSync(DOCS)) {
    fs.mkdirSync(DOCS, { recursive: true });
  }

  const pages = buildPages();
  const terms = buildTerms();

  fs.writeFileSync(OUT_PAGES, JSON.stringify(pages, null, 0), 'utf-8');
  fs.writeFileSync(OUT_TERMS, JSON.stringify(terms, null, 0), 'utf-8');

  const pagesKB = (fs.statSync(OUT_PAGES).size / 1024).toFixed(1);
  const termsKB = (fs.statSync(OUT_TERMS).size / 1024).toFixed(1);
  const termCount = Object.keys(terms).length;

  console.log('✅ 網站內容已建構');
  console.log(`   ${pages.length} 個主頁面 → pages.json (${pagesKB} KB)`);
  console.log(`   ${termCount} 個術語頁 → terms.json (${termsKB} KB)`);
}

main();
