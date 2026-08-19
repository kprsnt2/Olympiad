/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olympiad: {
          imo: { DEFAULT: '#3B82F6', light: '#DBEAFE', dark: '#1E40AF' },
          iso: { DEFAULT: '#10B981', light: '#D1FAE5', dark: '#065F46' },
          icso: { DEFAULT: '#8B5CF6', light: '#EDE9FE', dark: '#5B21B6' },
          ieo: { DEFAULT: '#F59E0B', light: '#FEF3C7', dark: '#92400E' },
          igko: { DEFAULT: '#EC4899', light: '#FCE7F3', dark: '#9D174D' },
          isso: { DEFAULT: '#06B6D4', light: '#CFFAFE', dark: '#155E75' },
        },
        space: {
          900: '#0B0F19',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        comic: ['Fredoka', 'Comic Sans MS', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
