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
        background: 'var(--bg-base)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-card': 'var(--bg-card)',
        'bg-card-hover': 'var(--bg-card-hover)',
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          quaternary: 'var(--accent-quaternary)',
        },
        text: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          dim: 'var(--text-dim)',
        },
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        'bento': '32px',
        'bento-sm': '20px',
      },
      backdropBlur: {
        'glass': '24px',
      },
      boxShadow: {
        'card': '0 12px 32px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 48px rgba(0, 0, 0, 0.06)',
        'float': '0 16px 40px rgba(0, 0, 0, 0.08)',
        'glow-primary': '0 8px 24px rgba(255, 90, 54, 0.3)',
        'glow-secondary': '0 8px 24px rgba(0, 212, 178, 0.3)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin 80s linear infinite',
        'spin-medium': 'spin 40s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};
