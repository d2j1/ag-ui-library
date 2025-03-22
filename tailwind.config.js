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
        forest: {
          50: '#e3f9e5',
          100: '#c1eac5',
          200: '#a3d9a5',
          300: '#7bc47f',
          400: '#57ae5b',
          500: '#3f9142',
          600: '#2f8132',
          700: '#207227',
          800: '#0e5814',
          900: '#05400a',
        },
        soil: {
          50: '#f5e8e4',
          100: '#e6c7bc',
          200: '#d7a696',
          300: '#c8856f',
          400: '#b96a4a',
          500: '#a5512e',
          600: '#8c3d22',
          700: '#733017',
          800: '#5a2410',
          900: '#42190a',
        },
        wheat: {
          50: '#fdf6e3',
          100: '#f7e8b5',
          200: '#f3db87',
          300: '#efce58',
          400: '#eac12a',
          500: '#d4a514',
          600: '#a67f0f',
          700: '#79590a',
          800: '#4b3405',
          900: '#1e0f00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}
