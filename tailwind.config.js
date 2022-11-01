/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
