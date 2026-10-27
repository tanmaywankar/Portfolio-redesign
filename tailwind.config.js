/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        cobalt: '#002BFF',
        cobaltAccent: '#0047FF',
        ink: '#000000',
        subtle: '#666666',
        charcoal: '#0a0a0a',
        charcoalCard: '#121212',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px #000000',
        'brutalist-white': '4px 4px 0px 0px #FFFFFF',
        'brutalist-cobalt': '4px 4px 0px 0px #002BFF',
      },
    },
  },
  plugins: [],
};
