export const TOP_PROJECTS = [
  {
    id: 'grobot-ecosystem',
    schematicNumber: 'SCHEMATIC // 01',
    schematicLabel: 'TELEMETRY_ENGINE',
    schematicType: 'grobot',
    telemetryStream: 'SUB-50MS DUPLEX STREAM',
    status: 'STATUS: ACTIVE_NODE',
    portOrClock: 'PORT: 8080',
    title: 'Grobot Ecosystem',
    category: 'FULL-STACK IOT',
    period: 'Aug 2026–Present',
    description:
      'Full-stack IoT platform with real-time monitoring dashboards, sub-50ms telemetry streaming, and low-latency command dispatch.',
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    id: 'chip8-emulator',
    schematicNumber: 'MEM_MAP // 0x200',
    schematicLabel: '64x32 PIXELS',
    schematicType: 'chip8',
    telemetryStream: '60 FPS CYCLES / INSTRUCTION',
    status: 'OPCODE: 0x00E0 CLS',
    portOrClock: 'CLOCK: 500HZ',
    title: 'Web-Based CHIP-8 Emulator',
    category: 'PERSONAL',
    period: 'Dec 2025–Jan 2026',
    description:
      'A low-level C++ CPU interpreter compiled to WebAssembly with an HTML5 canvas rendering pipeline at smooth 60 FPS.',
    techStack: ['C++', 'WebAssembly', 'Vue.js'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
];

export const OTHER_PROJECTS = [
  {
    id: 'ente-contributor',
    thumbnailTag: 'SEC_SYNC',
    thumbnailDetail: 'E2EE AUTH',
    thumbnailVisual: 'key',
    title: 'Ente Web Contributor',
    category: 'SECURITY',
    description:
      'End-to-end encrypted desktop & web sync utilities, security auditing, and cryptographic key derivation workflows.',
    techStack: ['TypeScript', 'WebCrypto', 'Security'],
    linkUrl: 'https://github.com/ente-io',
  },
  {
    id: 'iot-command-daemon',
    thumbnailTag: 'SERIAL_IO',
    thumbnailDetail: '115200 BAUD',
    thumbnailVisual: 'serial',
    title: 'IoT Command Daemon',
    category: 'FIRMWARE',
    description:
      'High-frequency bi-directional serial bridge transmitting sensor frames with low packet overhead between MCUs and client engines.',
    techStack: ['Arduino C++', 'Serial Protocol', 'Node.js'],
    linkUrl: 'https://github.com',
  },
];

export const OPEN_SOURCE_CONTRIBUTIONS = [
  {
    id: 'frappe-gantt',
    thumbnailTag: 'SVG_PR',
    thumbnailDetail: '#812 MERGED',
    thumbnailVisual: 'gantt',
    title: 'Frappe Gantt',
    category: 'CONTRIBUTOR',
    description:
      'Contributed to the open-source SVG Gantt component, fixing timeline bar distortion and preventing edge-case re-render crashes.',
    techStack: ['Frappe', 'CSS', 'SVG Engine'],
    linkUrl: 'https://github.com/frappe/gantt',
  },
  {
    id: 'grobot-animator',
    thumbnailTag: 'F=-kx',
    thumbnailDetail: 'KINEMATICS',
    thumbnailVisual: 'wave',
    title: 'Grobot Animator & Library',
    category: 'OPEN SOURCE',
    description:
      "Browser-based procedural spring animation studio and Arduino C++ driver library utilizing Hooke's law physics.",
    techStack: ['JavaScript', 'Arduino', 'Canvas API'],
    linkUrl: 'https://github.com',
  },
];

