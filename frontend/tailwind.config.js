/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Color primario
        secondary: '#9333EA', // Color secundario
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Fuente sans-serif
        serif: ['Georgia', 'serif'], // Fuente serif
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
