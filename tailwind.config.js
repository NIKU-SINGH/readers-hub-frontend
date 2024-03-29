/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins' : ['Poppins'],
      'Nunito': ['Nunito'],
    },
  },
  plugins: [require('@tailwindcss/forms')]
}