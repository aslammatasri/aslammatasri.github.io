// Edit this file to change all site content.
// Set true to show the Services tab, page and home section again.
export const showServices = false

export const profile = {
  name: 'Muhammad Aslam Bin Mat Asri',
  shortName: 'Aslam',
  wordmark: ['ASLAM'],
  role: 'Full-Stack Developer',
  timezone: 'Asia/Kuala_Lumpur',
  city: 'KL',
  statement: 'Junior full-stack developer building reliable web systems with Laravel and Vue.js.',
  email: 'aslammatasri@gmail.com',
  phone: '014-8357667',
  location: 'Cheras, Selangor',
  availability: 'Open to full-stack opportunities and freelance work.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aslam-mat-asri-aa7a571a5/' },
    { label: 'GitHub', href: 'https://github.com/aslammatasri' }
  ],
  bio: [
    'I am a junior full-stack developer with hands-on experience in Laravel and Vue.js, contributing to production systems in both government and private sectors.',
    'I work across the full development cycle: feature development, API testing, bugfixes, and UAT sessions with clients. I care about clean code and keep learning from the senior developers around me.'
  ],
  personal: 'Based in Cheras, Selangor. English (C2) and Bahasa Melayu (native).',
  skills: ['PHP', 'JavaScript', 'HTML5 / CSS3', 'Laravel', 'Vue.js',],
  tools: ['Git', 'GitLab', 'GitHub', 'Bitbucket', 'SourceTree', 'Postman', 'Figma'],
  experience: [
    { years: 'Jan 2025 — Now', role: 'Junior Programmer', place: 'SAB System Sdn Bhd' },
    { years: 'Aug 2023 — Feb 2024', role: 'Web Developer Intern', place: 'Ejen2U International Sdn Bhd' },
    { years: 'Nov 2020 — Feb 2021', role: 'IT Intern', place: 'ANBOT Store' }
  ],
  education: [
    { years: '2021 — 2024', title: 'Bachelor of Computer Science (Software Engineering) with Honours', place: 'Universiti Malaysia Pahang' },
    { years: '2018 — 2021', title: 'Diploma of Computer Science', place: 'Universiti Malaysia Pahang' },
    { years: 'Graduated 2017', title: 'Sijil Pelajaran Malaysia (SPM)', place: 'SMKA Wataniah' }
  ],
  services: [
    { title: 'Full-stack development', text: 'Features built end to end with Laravel on the back end and Vue.js on the front end.' },
    { title: 'REST API development', text: 'Laravel RESTful APIs designed, tested, and validated with Postman.' },
    { title: 'Bugfixes and hotfixes', text: 'Fast, careful fixes in production systems that keep uptime stable.' },
    { title: 'Testing and UAT support', text: 'Test cases with QA teams and UAT sessions with clients to refine systems.' }
  ],
  process: ['Intro call', 'Scope and plan', 'Build and test', 'Deliver and support']
}

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  client: string
  role: string
  tone: number // 0-3, picks placeholder pattern
  cover?: string // optional, e.g. '/work/eaudit-v2/cover.webp' (file in public/). Replaces the placeholder tile.
  shots?: { src: string; alt: string }[] // optional screenshots shown under Process
  overview: { problem: string; goal: string }
  process: string[]
  results: { value: string; label: string }[]
  learnings: string[]
}

export const projects: Project[] = [
  {
    slug: 'eaudit-v2',
    title: 'eAudit v2',
    category: 'Government',
    year: '2025',
    client: 'Jabatan Audit Negara',
    role: 'Junior Programmer',
    tone: 0,
    overview: {
      problem: 'The National Audit Department needed a modern audit management system for government-grade use.',
      goal: 'Help the senior team build eAudit v2 with Laravel and Vue.js, and refine it with direct client feedback.'
    },
    process: [
      'Worked with senior developers on features in Laravel and Vue.js.',
      'Created feature branches and committed bugfixes through GitLab.',
      'Joined System Testing (ST) and User Acceptance Testing (UAT) sessions with government clients.'
    ],
    results: [{ value: 'v2', label: 'Government audit system' }, { value: 'ST + UAT', label: 'Testing sessions joined' }],
    learnings: ['Clear Git workflow keeps a large team safe.', 'Talking to clients in UAT shows what really needs fixing.']
  },
  {
    slug: 'ejengo',
    title: 'EjenGo Platform',
    category: 'Web App',
    year: '2023',
    client: 'Ejen2U International',
    role: 'Web Developer Intern',
    tone: 1,
    overview: {
      problem: 'Agents needed a smoother workflow, and the production platform needed fast fixes when bugs appeared.',
      goal: 'Add new features with Vue.js and Laravel, and keep the platform stable.'
    },
    process: [
      'Built new features with Vue.js and Laravel to improve agent workflow efficiency.',
      'Designed, tested, and validated Laravel RESTful APIs with Postman.',
      'Resolved critical bugfixes and hotfixes in production.',
      'Wrote test cases together with the QA team.'
    ],
    results: [{ value: 'REST', label: 'APIs tested in Postman' }, { value: 'QA', label: 'Test cases written with team' }],
    learnings: ['Test an API on its own before the front end depends on it.', 'Hotfixes need calm, small, well-checked changes.']
  },
]

export const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
