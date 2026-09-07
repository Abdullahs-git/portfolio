/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.04em', fontWeight: '900' }],
        'display-lg': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '900' }],
        'display': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '500' }],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tight': '-0.03em',
        'wide': '0.1em',
        'wider': '0.15em',
        'widest': '0.2em',
      },
      borderRadius: {
        'none': '0',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.25, 0, 0.1, 1)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};
