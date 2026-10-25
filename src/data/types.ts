// 履歷資料的型別：resume.zh.ts 與 resume.en.ts 都要符合這個格式

export type Lang = 'zh' | 'en';

export type TimelineItem = {
  title: string;
  org: string;
  date: string;
  points: string[]; // 同一點內要換行時用 \n
};

export type ProjectCategoryKey = 'research' | 'award' | 'data' | 'web';

export type Project = {
  title: string;
  description: string;
  category: ProjectCategoryKey;
  tags: string[];
  icon: string;
  gradient: string; // Tailwind 漸層顏色 class
  links: { label: string; url: string }[];
};

// 各語言各自填寫的內容（Email、照片、連結等共用資料在 resume.ts）
export type LocalizedResume = {
  profile: {
    name: string;
    initial: string; // 頭像沒有圖片時顯示的字
    role: string;
    bio: string;
    location: string;
    graduation: string;
  };
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: {
    // 熟練度 value 為 0–100，決定長條長度
    languages: { name: string; level: string; value: number }[];
    tools: string[];
    others: string[]; // 證照、語言能力
    hobbies: string[];
  };
  // 作品分類：key 用於篩選，label 顯示在按鈕上（沒有作品的分類不會顯示）
  projectCategories: { key: ProjectCategoryKey; label: string }[];
  projects: Project[];
};
