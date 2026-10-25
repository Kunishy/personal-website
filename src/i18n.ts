// 介面文字（按鈕、標題等）的中英對照。履歷內容本身在 src/data/resume.*.ts
import type { Lang } from './data/types';
import { url } from './utils';

export const ui = {
  zh: {
    htmlLang: 'zh-Hant',
    pageTitle: (name: string) => `${name}｜個人履歷`,
    pageDescription: (name: string) => `${name}的個人網站：履歷、作品集與文章。`,
    nav: { about: '關於', experience: '經歷', skills: '技能', projects: '作品', blog: '文章', contact: '聯絡' },
    switchLang: 'EN',
    switchLangLabel: 'Switch to English',
    toggleTheme: '切換深淺色',
    openMenu: '開啟選單',
    viewResume: '查看履歷',
    downloadPdf: '下載 PDF',
    experience: '經歷與學歷',
    tabs: { experience: '經歷', edu: '學歷' },
    skills: '技能',
    skillGroups: { languages: '程式語言', tools: '工具與框架', others: '證照', hobbies: '興趣與其他' },
    projects: '作品集',
    projectsNote: '精選專案',
    all: '全部',
    latestPosts: '最新文章',
    allPosts: '全部文章 →',
    contactTitle: '一起合作吧',
    contactText: '歡迎實習、專案合作或研究交流的邀約。',
    emailMe: '寄信給我',
    footer: '以 Astro + Tailwind CSS 打造',
    print: {
      education: '學歷',
      experience: '經歷',
      projects: '作品與獲獎',
      skills: '技能',
      tools: '工具與框架',
      others: '證照',
      hobbies: '興趣',
      keywords: '關鍵字：',
      listSep: '、',
      colon: '：',
    },
  },
  en: {
    htmlLang: 'en',
    pageTitle: (name: string) => `${name} | Resume`,
    pageDescription: (name: string) => `${name}'s personal website: resume, projects, and writing.`,
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
    switchLang: '中文',
    switchLangLabel: '切換為中文',
    toggleTheme: 'Toggle dark mode',
    openMenu: 'Open menu',
    viewResume: 'View Resume',
    downloadPdf: 'Download PDF',
    experience: 'Experience & Education',
    tabs: { experience: 'Experience', edu: 'Education' },
    skills: 'Skills',
    skillGroups: { languages: 'Programming Languages', tools: 'Tools & Frameworks', others: 'Certifications', hobbies: 'Interests' },
    projects: 'Projects',
    projectsNote: 'Selected work',
    all: 'All',
    latestPosts: 'Latest Posts',
    allPosts: 'All posts →',
    contactTitle: "Let's work together",
    contactText: 'Open to internships, project collaborations, and research discussions.',
    emailMe: 'Email me',
    footer: 'Built with Astro + Tailwind CSS',
    print: {
      education: 'EDUCATION',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS & AWARDS',
      skills: 'SKILLS',
      tools: 'Tools & Frameworks',
      others: 'Certifications',
      hobbies: 'Interests',
      keywords: 'Keywords: ',
      listSep: ', ',
      colon: ': ',
    },
  },
} as const;

export const t = (lang: Lang) => ui[lang];

// 各語言的站內連結：中文在根目錄，英文在 /en/ 底下
export const localeUrl = (lang: Lang, path = '') => url(lang === 'zh' ? path : `en/${path}`);

export const otherLang = (lang: Lang): Lang => (lang === 'zh' ? 'en' : 'zh');
