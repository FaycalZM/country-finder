/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-dm': 'hsl(209, 23%, 22%)',
        'very-dark-blue-dm': 'hsl(207, 26%, 17%)',
        'very-dark-blue-lm': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      screens: {
        'laptop': '1280px',
        'tablet': '768px',
      }
    },
  },
  plugins: [],
}