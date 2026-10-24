# 個人網站

以 [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) 打造的個人履歷網站，包含經歷時間軸、技能、作品集與部落格，並透過 GitHub Actions 自動部署到 GitHub Pages。

## 本機開發

```bash
npm install
npm run dev
```

打開 http://localhost:4321 預覽，存檔後頁面會自動更新。

## 修改內容

| 想改什麼 | 檔案 |
| --- | --- |
| 姓名、簡介、經歷、技能、作品 | `src/data/resume.ts` |
| 新增文章 | 在 `src/content/blog/` 新增一個 `.md` 檔（可複製現有文章當範本） |
| 大頭照 | 把圖片放到 `public/`，再把 `resume.ts` 的 `avatar` 改成檔名 |
| 網頁圖示 | `public/favicon.svg` |

文章開頭的格式：

```md
---
title: 文章標題
description: 一句話摘要
date: 2026-10-24
draft: false   # 設成 true 就不會公開
---
```

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的 repository。
   - 取名 `<你的帳號>.github.io` → 網址為 `https://<你的帳號>.github.io/`
   - 取其他名稱（例如 `personal-website`）→ 網址為 `https://<你的帳號>.github.io/personal-website/`
2. 把這個資料夾推上去：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
   git push -u origin main
   ```
3. 到 repository 的 **Settings → Pages**，把 **Source** 設為 **GitHub Actions**。
4. 之後每次 push 到 `main`，網站都會自動更新（可在 **Actions** 分頁查看進度）。

網址的子路徑會在建置時自動判斷，不需要修改 `astro.config.mjs`。
