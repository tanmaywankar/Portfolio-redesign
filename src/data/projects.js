export const TOP_PROJECTS = [
  {
    id: 'grobot-ecosystem',
    title: 'Grobot Ecosystem',
    category: 'FULL-STACK IOT',
    period: 'Aug 2026 – Present',
    description:
      'Full-stack IoT platform with real-time monitoring dashboards, sub-50ms duplex telemetry streaming, in-memory stream buffer reducing database compute by up to 90%, and low-latency command dispatch.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Better Auth', 'WebSockets', 'React.js'],
    githubUrl: 'https://github.com/tanmaywankar/grobot-ecosystem',
    liveUrl: null,
    imageSrc: '/images/Grobot_Ecosystem.png',
    canvasBg: '#000000',
    schematicNumber: 'SCHEMATIC // 01',
    schematicLabel: 'TELEMETRY_ENGINE',
    schematicType: 'grobot',
    telemetryStream: 'SUB-50MS DUPLEX STREAM',
    status: 'STATUS: ACTIVE_NODE',
    portOrClock: 'PORT: 8080',
  },
  {
    id: 'chip8-emulator',
    title: 'Web-Based CHIP-8 Emulator',
    category: 'WEBASSEMBLY // SYSTEMS',
    period: 'Dec 2025 – Jan 2026',
    description:
      'A low-level C++ CPU interpreter compiled to WebAssembly via Emscripten, driving an HTML5 canvas rendering pipeline and 16-key keypad input at smooth 60 FPS.',
    techStack: ['WebAssembly', 'Emscripten', 'C++', 'JavaScript (ES6+)', 'HTML5 Canvas'],
    githubUrl: 'https://github.com/tanmaywankar/chip8',
    liveUrl: 'https://tanmaywankar.github.io/chip8/',
    imageSrc: '/images/Chip8.png',
    canvasBg: '#050505',
    schematicNumber: 'MEM_MAP // 0x200',
    schematicLabel: '64x32 PIXELS',
    schematicType: 'chip8',
    telemetryStream: '60 FPS CYCLES / INSTRUCTION',
    status: 'OPCODE: 0x00E0 CLS',
    portOrClock: 'CLOCK: 500HZ',
  },
];

export const OTHER_PROJECTS = [
  {
    id: 'sneakerdrop',
    thumbnailTag: 'CRUD_CMS',
    thumbnailDetail: 'SUPABASE DB',
    thumbnailVisual: 'sneaker',
    title: 'SneakerDrop',
    category: 'FULL-STACK // E-COMMERCE',
    period: '2026',
    description:
      'Editorial sneaker showcase platform featuring real-time catalog hydration from Supabase and an authenticated admin management portal with full inventory CRUD workflows.',
    techStack: ['Vue.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tanmaywankar/sneakerdrop',
    linkUrl: 'https://sneakerdrop-dxs.pages.dev/',
  },
  {
    id: 'swapnil-traders',
    thumbnailTag: 'COMMERCE',
    thumbnailDetail: '95+ LIGHTHOUSE',
    thumbnailVisual: 'catalog',
    title: 'Swapnil Traders',
    category: 'CLIENT CONTRACT',
    period: 'May 2025',
    description:
      'Commercial catalog website built for Swapnil Traders to replace manual inventory queries with a digital presence, automated CI/CD on Cloudflare Pages, and sub-second load times.',
    techStack: ['JavaScript', 'Tailwind CSS', 'Cloudflare Pages'],
    githubUrl: null,
    linkUrl: 'https://swapniltraders.pages.dev/',
  },
];

export const OPEN_SOURCE_CONTRIBUTIONS = [
  {
    id: 'grobot-animator',
    thumbnailTag: 'PHYSICS',
    thumbnailDetail: 'SPRING CURVES',
    thumbnailVisual: 'wave',
    title: 'Grobot Animator & Library',
    category: 'OPEN SOURCE // HARDWARE',
    period: 'Feb 2026 – Present',
    description:
      'Browser visual studio in Vue & Canvas to tune parametric eye designs, plus an accompanying open-source C++ ESP32 driver library rendering procedural curves with spring physics.',
    techStack: ['Vue.js', 'HTML5 Canvas', 'C++', 'ESP32', 'CSS3'],
    githubUrl: 'https://github.com/tanmaywankar/Grobot_Animations/',
    linkUrl: 'https://tanmaywankar.github.io/GrobotAnimator',
    starsRepo: 'tanmaywankar/Grobot_Animations',
    initialStars: 15,
  },
  {
    id: 'frappe-gantt',
    thumbnailTag: 'UPSTREAM_PR',
    thumbnailDetail: 'MERGED PRs',
    thumbnailVisual: 'gantt',
    title: 'Frappe Gantt',
    category: 'OPEN SOURCE CONTRIBUTOR',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Collaborated with upstream maintainers to fix timeline bar distortion by capping CSS border-radius and resolved runtime hydrate crashes by pre-populating sensible default values.',
    techStack: ['JavaScript', 'Frappe', 'SVG Engine', 'CSS'],
    githubUrl: 'https://github.com/frappe/gantt/',
    linkUrl: 'https://github.com/frappe/gantt/pulls?q=author%3Atanmaywankar',
  },
];
