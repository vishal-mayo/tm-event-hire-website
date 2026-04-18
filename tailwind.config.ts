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
        navy:  { DEFAULT: '#0D1F3C', light: '#1a3560', dark: '#08121f' },
        gold:  { DEFAULT: '#C9A84C', dark: '#a8882e' },
        cream: '#FAFAF8',
        stone: '#E8E0D5',
        grey:  { light: '#f0ede8', mid: '#9a9a9a' },
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-dm-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
