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
          dark:    '#071e50',
          light:   '#1a4fa0',
          50:      '#eef3fc',
        },
        silver: {
          DEFAULT: '#A8B8CC',
          dark:    '#7A90A8',
          light:   '#D4DCE8',
          100:     '#F0F4F8',
        },
        slate: '#2d3f57',
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-dm-serif)', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float':   'float 6s ease-in-out infinite',
        'line-in': 'lineIn 0.8s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        lineIn: {
          '0%':   { width: '0' },
          '100%': { width: '3rem' },
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #071e50 0%, #0a3b82 60%, #1a4fa0 100%)',
        'silver-gradient': 'linear-gradient(135deg, #D4DCE8 0%, #A8B8CC 100%)',
      },
      boxShadow: {
        'navy-sm': '0 2px 20px rgba(10,59,130,0.12)',
        'navy-md': '0 8px 40px rgba(10,59,130,0.18)',
        'navy-lg': '0 20px 60px rgba(10,59,130,0.25)',
        'lift':    '0 20px 60px rgba(10,59,130,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
