// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 在 GitHub Actions 上建置時，GITHUB_REPOSITORY 會是 "帳號/repo名稱"，
// 這裡自動推算 GitHub Pages 的網址與子路徑，不需要手動修改。
//   - repo 名稱是 <帳號>.github.io → 網址 https://<帳號>.github.io/
//   - 其他 repo 名稱               → 網址 https://<帳號>.github.io/<repo>/
const [owner = '', repo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  base: !repo || isUserSite ? '/' : `/${repo}`,
  vite: {
    plugins: [tailwindcss()],
  },
});
