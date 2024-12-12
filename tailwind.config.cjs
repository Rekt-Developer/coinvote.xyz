/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#2B608C",
        secondary : "#3E7CAD",
        tertiary: "#488BC0",
        redPrimary: "#D65243",
        background: "#FFFFFF",
        hover: "#646464",
        gray: "#4B4B4B",
        hover: '#B5CDE1'
      }
    },
  },
  plugins: [],
}
