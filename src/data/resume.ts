// ===================================================================
// 網站的所有履歷內容都在這個檔案，修改這裡就能更新網頁。
// 部落格文章則放在 src/content/blog/ 底下，每篇一個 .md 檔。
// 欄位留空（'' 或 []）時，網頁上對應的按鈕或區塊會自動隱藏。
// ===================================================================

export const profile = {
  name: '張聿捷',
  initial: '捷', // 頭像沒有圖片時顯示的字
  avatar: 'avatar.jpg', // 放照片：把圖片放到 public/ 資料夾，例如 'avatar.jpg'
  role: '國立臺灣海洋大學 資訊工程系 碩士班二年級',
  bio: '我是國立臺灣海洋大學資訊工程系碩士班二年級學生，研究結合 EventStorming 與大型語言模型，從工作流程中分析並建構領域模型。曾在 DXC 擔任測試工程師實習生，熟悉依需求文件執行功能測試與以 Jira 追蹤缺陷，也擔任過 Python 與 Java 課程助教。大學畢業專題開發深偽人臉偵測系統，獲系上專題競賽優等；也參與過交通、醫療與 SaaS 領域的學生新創團隊，擔任 PM 並負責 Pitch，團隊曾入選 FITI 創新創業激勵計畫與 U-start 第一階段。',
  location: '基隆，台灣',
  email: 'momo060112@gmail.com',
  graduation: '碩士 2027 年 8 月畢業（預計）',
  links: {
    github: '', // 例如 'https://github.com/你的帳號'
    linkedin: '', // 例如 'https://www.linkedin.com/in/你的帳號'
  },
};

export type TimelineItem = {
  title: string;
  org: string;
  date: string;
  points: string[];
};

export const work: TimelineItem[] = [
  {
    title: 'Java 課程助教',
    org: '國立臺灣海洋大學',
    date: '2026.02 – 2026.06',
    points: [],
  },
  {
    title: '測試工程師（實習）',
    org: 'DXC Technology',
    date: '2025.11 – 2026.01',
    points: [
      '依 SA 文件與測試案例執行功能測試，確保系統需求一致性',
      '使用 Jira 管理缺陷生命週期，缺陷追蹤至修復結案',
      '量化測試進度並產出報表，協助專案時程控管',
    ],
  },
  {
    title: 'Python 程式設計入門課程助教',
    org: '國立臺灣海洋大學',
    date: '2023.09 – 2024.01',
    points: ['批改作業', '配合教授調整作業內容'],
  },
  {
    title: '數學理化輔導老師',
    org: '新華文補習班',
    date: '2021.01 – 2023.06',
    points: ['批改考卷', '課後輔導', '代課'],
  },
];

export const startups: TimelineItem[] = [
  {
    title: 'PM / 商業模式',
    org: 'CasDoc · SaaS · 學生新創團隊',
    date: '2025.06 – 2026.02',
    points: ['入選 FITI 創新創業激勵計畫', '負責產品管理', '規劃商業模式'],
  },
  {
    title: 'PM / 開發',
    org: '醫療復健輔助平台 · 醫療 · 學生新創團隊',
    date: '2025.04 – 2026.01',
    points: ['參與部分功能開發', '負責專案管理與進度協調', '負責團隊提案簡報（Pitch）'],
  },
  {
    title: 'PM / QA',
    org: 'BusTaxi · 交通運輸 · 學生新創團隊',
    date: '2024.12 – 2025.11',
    points: ['入選 U-start 創新創業計畫第一階段', '負責產品規劃與需求管理', '負責產品測試與品質把關', '負責團隊提案簡報（Pitch）'],
  },
];

export const education: TimelineItem[] = [
  {
    title: '資訊工程 碩士',
    org: '國立臺灣海洋大學',
    date: '2025.09 – 2027.08（預計）',
    points: ['論文：基於 EventStorming 與大型語言模型之工作流程分析與領域模型建構方法'],
  },
  {
    title: '資訊工程 學士',
    org: '國立臺灣海洋大學',
    date: '2021 – 2025',
    points: ['畢業專題「讓每張臉露出真面目」：深偽人臉篡改偵測系統，獲 113 年資工系專題競賽優等'],
  },
  {
    title: '高中',
    org: '國立基隆女子高級中學',
    date: '2018 – 2021',
    points: [],
  },
  {
    title: '國中',
    org: '基隆市立銘傳國民中學',
    date: '2015 – 2018',
    points: ['第 57 屆全國中小學科展 化學科「最佳團隊合作獎」'],
  },
];

export const skills = {
  // 熟練度 value 為 0–100，決定長條長度
  languages: [] as { name: string; level: string; value: number }[],
  tools: [
    'Python',
    'Java',
    '深度學習（CNN / Transformer）',
    'YOLO',
    'Grad-CAM',
    '大型語言模型（LLM）',
    'EventStorming',
    'Jira',
    '功能測試',
    '產品管理（PM）',
    '商業模式規劃',
    '提案簡報（Pitch）',
  ],
  others: ['金融保險與職業道德證照', '人身保險（壽險）業務員證照', '財產保險（產險）業務員證照'] as string[], // 證照（之後也可加語言能力，例如 '英文 TOEIC 800'）
  hobbies: ['🥋 跆拳道一段', '🎮 動漫與遊戲'],
};

// 作品分類：key 用於篩選，label 顯示在按鈕上（沒有作品的分類不會顯示）
export const projectCategories = [
  { key: 'research', label: '研究' },
  { key: 'award', label: '競賽獲獎' },
  { key: 'data', label: '資料分析' },
  { key: 'web', label: '網頁' },
] as const;

export type Project = {
  title: string;
  description: string;
  category: (typeof projectCategories)[number]['key'];
  tags: string[];
  icon: string;
  gradient: string; // Tailwind 漸層顏色 class
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: 'EventStorming × LLM 領域模型建構',
    description: '碩士論文：基於 EventStorming 與大型語言模型之工作流程分析與領域模型建構方法。',
    category: 'research',
    tags: ['EventStorming', '大型語言模型'],
    icon: '🧩',
    gradient: 'from-blue-600 to-violet-500',
    links: [],
  },
  {
    title: '讓每張臉露出真面目',
    description:
      '深偽（Deepfake）人臉篡改偵測系統：以 YOLO 偵測多張人臉，分割眼睛、鼻子、嘴唇等五官，結合 CNN 與 Transformer 判斷整體與局部的偽造痕跡，並以 Grad-CAM 熱圖標示疑似篡改區域。大學畢業專題（2023.03 – 2024.12），獲 113 年資工系專題競賽優等。',
    category: 'award',
    tags: ['Deepfake 偵測', 'YOLO', 'CNN', 'Transformer', 'Grad-CAM', 'StyleGAN'],
    icon: '🎭',
    gradient: 'from-fuchsia-500 to-indigo-600',
    links: [{ label: '得獎公告', url: 'https://cse.ntou.edu.tw/p/406-1063-108673,r1034.php?Lang=zh-tw' }],
  },
  {
    title: '「氯」化了沒？烏濕一把罩',
    description:
      '探討氯化亞鐵和氯化鐵在課堂實驗的可行性。第 57 屆全國中小學科展（民國 106 年）化學科，獲最佳團隊合作獎；與林肯韞共同完成，指導老師陳金善。',
    category: 'award',
    tags: ['化學', '氯化亞鐵', '雙氧水', '亞甲藍液'],
    icon: '🧪',
    gradient: 'from-emerald-500 to-teal-500',
    links: [{ label: '科展作品頁', url: 'https://www.ntsec.edu.tw/science/detail.aspx?a=21&cat=82&sid=13558' }],
  },
  {
    title: '個人網站',
    description: '就是你正在看的這個網站：Astro + Tailwind CSS，透過 GitHub Actions 自動部署到 GitHub Pages。',
    category: 'web',
    tags: ['Astro', 'Tailwind'],
    icon: '🌐',
    gradient: 'from-amber-500 to-red-500',
    links: [],
  },
];
