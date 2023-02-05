/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        ipod: '728px',
        phone: '420px'
      }
    },
  },
  plugins: [],
}
