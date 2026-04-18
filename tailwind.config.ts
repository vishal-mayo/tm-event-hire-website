import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a3b82',
          light:   '#1a4fa0',
          dark:    '#071e50',
        },
        silver: {
          DEFAULT: '#A8B8CC',
          dark:    '#7A90A8',
          light:   '#D4DCE8',
        },
        cream: '#F5F7FA',
        stone: '#E4EAF2',
        grey:  { light: '#EEF2F8', mid: '#8A9BB0' },
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
