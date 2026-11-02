/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFBF8',
          100: '#FAF8F3',
          200: '#F7F4EC', // base Warm Ivory
          300: '#EFE8D9',
          400: '#E4D9C3',
          DEFAULT: '#F7F4EC',
        },
        forest: {
          50: '#F0F6F3',
          100: '#DEECE6',
          200: '#BCD6CC',
          600: '#225445',
          700: '#1C4639',
          800: '#183D32', // base Deep Forest Green
          900: '#0F2921',
          950: '#0A1B16',
          DEFAULT: '#183D32',
        },
        gold: {
          50: '#FCF9F3',
          100: '#F8F2E4',
          200: '#EEDFBF',
          300: '#DDC599',
          400: '#C6A875', // base Champagne Gold
          500: '#B5945E',
          600: '#9B7B49',
          700: '#7E6036',
          DEFAULT: '#C6A875',
        },
        charcoal: {
          50: '#F6F7F6',
          100: '#E7E9E8',
          200: '#CED1CE',
          400: '#7D857F',
          600: '#4D544F',
          700: '#3A403C',
          800: '#2E3530',
          900: '#252B26', // base Charcoal
          950: '#181C19',
          DEFAULT: '#252B26',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(24, 61, 50, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(24, 61, 50, 0.14)',
        'gold-glow': '0 10px 30px -5px rgba(198, 168, 117, 0.3)',
      },
    },
  },
  plugins: [],
}
