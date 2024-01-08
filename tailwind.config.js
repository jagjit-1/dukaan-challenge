/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter var", sans-serif']
      },
    colors: {
      secondary: "#1E2640",
      black85: "#D9D9D9",
      black95: "#F2F2F2",
      black90:"#E6E6E6",
      black98:"#fafafa",
      black30:"#4D4D4D",
      ...colors
    },
    extend: {},
  },
  plugins: [],
}