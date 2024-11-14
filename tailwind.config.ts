import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { fontFamily, screens } from 'tailwindcss/defaultTheme'
import { PluginAPI } from 'tailwindcss/types/config'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        ...screens,
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        heading: ['var(--font-heading)', ...fontFamily.serif],
        decorative: ['var(--font-decorative)', ...fontFamily.sans],
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          darker: 'var(--background-darker)',
        },
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        primary: {
          DEFAULT: 'var(--primary)',
          muted: 'var(--primary-muted)',
        },
      },
    },
  },
  plugins: [
    animate,
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.container': {
          width: '90%',
          maxWidth: '1024px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    },
  ],
} satisfies Config
