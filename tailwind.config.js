/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile : "425px",
      tablet : "768px",
      desktop : "1440px"
    }
  },
  plugins: [],
}