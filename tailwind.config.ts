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
        navy: { DEFAULT: '#0D1F3C', light: '#1a3560', dark: '#081428' },
        gold:  { DEFAULT: '#F5C518', dark: '#d4a900' },
        grey:  { light: '#f5f5f3', mid: '#9a9a9a' },
      },
      fontFamily: {
        sans:    ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
