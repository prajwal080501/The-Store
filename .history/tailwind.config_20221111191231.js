/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin')
  ],
}