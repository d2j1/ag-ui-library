/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earthy: {
          light: '#A3B18A',
          DEFAULT: '#6B705C',
          dark: '#2A2A2A',
        },
        nature: {
          light: '#D9D9D9',
          DEFAULT: '#A8DADC',
          dark: '#457B9D',
        },
      },
    },
  },
  plugins: [],
}
