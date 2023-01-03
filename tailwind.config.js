/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**.{php,html,js}"
  ],
  theme: {
    extend: {
      boxShadow:{
        'boxKiri' : '-10px -10px 30px rgba(0, 0, 0, 0.23)',
      }
    },
  },
  plugins: [],
}
