// ===================================================================
// 網站的履歷內容：
//   - 中文內容：resume.zh.ts
//   - 英文內容：resume.en.ts
//   - 兩種語言共用的資料（Email、照片、連結）：在下面的 shared
// 部落格文章放在 src/content/blog/ 底下，每篇一個 .md 檔。
// ===================================================================
import zh from './resume.zh';
import en from './resume.en';
import type { Lang } from './types';

export type { Lang, TimelineItem, Project } from './types';

const shared = {
  email: 'momo060112@gmail.com',
  avatar: 'avatar.jpg', // 放照片：把圖片放到 public/ 資料夾，例如 'avatar.jpg'
  links: {
    github: '', // 例如 'https://github.com/你的帳號'
    linkedin: '', // 例如 'https://www.linkedin.com/in/你的帳號'
  },
};

const content = { zh, en };

export const getResume = (lang: Lang) => {
  const c = content[lang];
  return { ...c, profile: { ...c.profile, ...shared } };
};
