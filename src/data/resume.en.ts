// ===================================================================
// 英文版履歷內容（English version）。中文版在 resume.zh.ts，
// 兩邊的項目順序請保持一致。標示「TODO 確認」的地方是翻譯時推測的寫法。
// ===================================================================
import type { LocalizedResume } from './types';

const en: LocalizedResume = {
  profile: {
    name: 'Yu-Chieh Chang', // TODO 確認：護照上的英文姓名
    initial: 'Y',
    role: 'M.S. Student in Computer Science and Engineering, National Taiwan Ocean University',
    bio: "I'm a second-year master's student in Computer Science and Engineering at National Taiwan Ocean University. My research combines EventStorming with large language models to analyze workflows and build domain models. I interned as a test engineer at DXC Technology, running functional tests against requirement documents and tracking defects in Jira, and I've been a teaching assistant for Python and Java courses. My undergraduate capstone, a deepfake face-forgery detection system, received an Excellence Award in the department's project competition. I've also worked as a PM and pitch presenter on student startup teams in transportation, healthcare, and SaaS, which were selected for the FITI program and passed Phase 1 of U-start.",
    location: 'Keelung, Taiwan',
    graduation: 'M.S. expected Aug 2027',
  },

  // Experience: internship, student startups, part-time work — newest first
  // Student startup org format: "Team · Field · Student startup team"
  experience: [
    {
      title: 'PM / Business Model',
      org: 'CasDoc · SaaS · Student startup team',
      date: '2025.06 – 2026.02',
      points: ['Selected for the FITI entrepreneurship program', 'Led product management', 'Designed the business model'],
    },
    {
      title: 'Test Engineer Intern',
      org: 'DXC Technology',
      date: '2025.11 – 2026.01',
      points: [
        'Executed functional tests based on SA documents and test cases to ensure the system met its requirements',
        'Managed the defect lifecycle in Jira, tracking each defect through to resolution',
        'Quantified testing progress and produced reports to support project schedule control',
      ],
    },
    {
      title: 'PM / Developer',
      org: 'Rehabilitation Assistance Platform · Healthcare · Student startup team',
      date: '2025.04 – 2026.01',
      points: ['Developed part of the product features', 'Managed the project schedule and coordination', 'Delivered team pitches'],
    },
    {
      title: 'PM / QA',
      org: 'BusTaxi · Transportation · Student startup team',
      date: '2024.12 – 2025.11',
      points: [
        'Passed Phase 1 of the U-start entrepreneurship program',
        'Led product planning and requirements management',
        'Owned product testing and quality assurance',
        'Delivered team pitches',
      ],
    },
    {
      title: 'Math and Science Tutor',
      org: 'Hsin Hua Wen Cram School', // TODO 確認：補習班英文名稱
      date: '2021.01 – 2023.06',
      points: ['Graded exams', 'Provided after-class tutoring', 'Substitute teaching'],
    },
  ],

  education: [
    {
      title: 'M.S. in Computer Science and Engineering',
      org: 'National Taiwan Ocean University',
      date: '2025.09 – 2027.08 (expected)',
      points: [
        // TODO 確認：論文的正式英文題目
        'Thesis: Workflow Analysis and Domain Model Construction Based on EventStorming and Large Language Models',
        'Teaching Assistant, Java Programming (2026.02 – 2026.06)',
      ],
    },
    {
      title: 'B.S. in Computer Science and Engineering',
      org: 'National Taiwan Ocean University',
      date: '2021 – 2025',
      points: [
        'Capstone project "Unmasking Every Face": a deepfake face-forgery detection system\nExcellence Award, 2024 Department Project Competition',
        'Teaching Assistant, Introduction to Python Programming (2023.09 – 2024.01)',
      ],
    },
  ],

  skills: {
    languages: [],
    tools: [
      'Python',
      'Java',
      'Deep Learning (CNN / Transformer)',
      'YOLO',
      'Grad-CAM',
      'Large Language Models (LLM)',
      'EventStorming',
      'Jira',
      'Functional Testing',
      'Product Management',
      'Business Model Planning',
      'Pitching',
    ],
    others: [
      'Financial Insurance and Professional Ethics Certificate',
      'Life Insurance Agent License',
      'Property and Casualty Insurance Agent License',
    ],
    hobbies: ['🥋 Taekwondo (1st Dan black belt)', '🎮 Anime and games'],
  },

  projectCategories: [
    { key: 'research', label: 'Research' },
    { key: 'award', label: 'Awards' },
    { key: 'data', label: 'Data Analysis' },
    { key: 'web', label: 'Web' },
  ],

  projects: [
    {
      title: 'Domain Modeling with EventStorming × LLM',
      description:
        "Master's thesis: workflow analysis and domain model construction based on EventStorming and large language models.",
      category: 'research',
      tags: ['EventStorming', 'LLM'],
      icon: '🧩',
      gradient: 'from-blue-600 to-violet-500',
      links: [],
    },
    {
      title: 'Unmasking Every Face', // TODO 確認：專題英文名稱
      description:
        'A deepfake face-forgery detection system: YOLO detects multiple faces, facial regions such as eyes, nose, and lips are segmented, and CNN + Transformer models judge both global and local forgery traces, with Grad-CAM heatmaps highlighting suspected tampered areas. Undergraduate capstone (2023.03 – 2024.12); Excellence Award in the 2024 department project competition.',
      category: 'award',
      tags: ['Deepfake Detection', 'YOLO', 'CNN', 'Transformer', 'Grad-CAM', 'StyleGAN'],
      icon: '🎭',
      gradient: 'from-fuchsia-500 to-indigo-600',
      links: [{ label: 'Award announcement', url: 'https://cse.ntou.edu.tw/p/406-1063-108673,r1034.php?Lang=zh-tw' }],
    },
    {
      title: 'Personal Website',
      description:
        'A bilingual personal resume site built with Astro + Tailwind CSS, with light/dark themes and a printable resume, deployed to GitHub Pages via GitHub Actions.',
      category: 'web',
      tags: ['Astro', 'Tailwind'],
      icon: '🌐',
      gradient: 'from-amber-500 to-red-500',
      links: [],
    },
  ],
};

export default en;
