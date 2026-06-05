/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo glow
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Cyan accent
          dark: '#0891b2',
        },
        accent: {
          DEFAULT: '#8b5cf6', // Violet accent
          dark: '#7c3aed',
        },
        darkBg: '#030712', // Deep slate-950 background
        darkCard: 'rgba(15, 23, 42, 0.35)', // Premium glass card
        darkBorder: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
