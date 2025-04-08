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
          DEFAULT: '#F9AA33',
          light: '#FBCB83',
          dark: '#E09020'
        },
        secondary: {
          DEFAULT: '#4A6572',
          light: '#718792',
          dark: '#344955'
        },
        accent: '#F8F8F8'
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
