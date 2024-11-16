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
        foreground: {
          DEFAULT: 'var(--foreground)',
          muted: 'var(--foreground-muted)',
        },
        card: 'var(--card)',
        primary: {
          DEFAULT: 'var(--primary)',
          muted: 'var(--primary-muted)',
        },
      },
      keyframes: {
        growAndShrink: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        spinHalf: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
        splashFade: {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.5)', opacity: '0' },
        },
      },
      animation: {
        'grow-and-shrink':
          'growAndShrink 1.5s cubic-bezier(0.4, 0, 0.6, 1) forwards',
        'spin-half': 'spinHalf 1s linear infinite',
        'splash-fade': 'splashFade 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards',
      },
    },
  },
  plugins: [
    animate,
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.container': {
          width: '90%',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    },
  ],
} satisfies Config
