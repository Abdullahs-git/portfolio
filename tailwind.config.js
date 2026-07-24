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
        anime: {
          bg: '#F5F8FF',
          card: '#FFFFFF',
          sky: '#E0F2FE',
          pink: '#FF758F',
          cyan: '#00B4D8',
          gold: '#FFB703',
          purple: '#7052FF',
          mint: '#2EC4B6',
          ink: '#1E293B',
          soft: '#64748B',
        }
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'anime': '0 8px 30px rgba(0, 180, 216, 0.15)',
        'anime-lg': '0 16px 40px rgba(112, 82, 255, 0.2)',
        'anime-pink': '0 10px 30px rgba(255, 117, 143, 0.25)',
        'anime-gold': '0 10px 30px rgba(255, 183, 3, 0.25)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'crane-swing': 'craneSwing 4s infinite ease-in-out',
        'hook-bounce': 'hookBounce 4s infinite ease-in-out',
        'stripe-move': 'stripeMove 1s linear infinite',
        'float-anime': 'floatAnime 5s infinite ease-in-out',
        'sakura-fall': 'sakuraFall 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        craneSwing: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        hookBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        stripeMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '28px 0' },
        },
        floatAnime: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        sakuraFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};
