/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#151d44',
          2: '#273364',
          dark: '#0e1430',
          muted: '#536087'
        },
        cream: {
          DEFAULT: '#fffdf8',
          paper: '#fff8ee',
          darker: '#f5f0e6'
        },
        sun: '#ffd93e',
        mint: '#a7ead1',
        lilac: '#d8c8ff',
        coral: '#ff795f',
        sky: '#c6dcff',
        line: '#d9d9e7',
        brand: {
          imo: '#ffd93e',
          iso: '#a7ead1',
          icso: '#c6dcff',
          ieo: '#d8c8ff',
          igko: '#ff795f',
          isso: '#ffe0a3'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Fredoka', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'ink-sm': '0 3px 0 #151d44',
        'ink': '0 5px 0 #0a1031',
        'ink-lg': '5px 6px 0 #151d44',
        'flat-yellow': '4px 4px 0 #f5b700',
        'flat-coral': '4px 4px 0 #d94f34',
        'flat-mint': '4px 4px 0 #57b897'
      }
    },
  },
  plugins: [],
}
