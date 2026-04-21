import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        'otj-black': '#080808',
        'otj-bg': '#FAFAFA',
        'otj-bg2': '#F0F0F0',
        'otj-border': '#E0E0E0',
      },
    },
  },
  plugins: [],
}

export default config
