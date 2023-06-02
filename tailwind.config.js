/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shalimar': 'var(--shalimar)',
        'spartan': 'var(--spartan)',
        'montserrat': 'var(--montserrat)',
        'silkserif': 'var(--silk-serif)'
      },
      colors: {
        'mainblack': 'var(--main-black)',
        'mainwhite':  'var(--main-white)',
        'maingray': 'var(--secondary-gray)',
        'mainred': 'var(--main-red)'
      }
    },
  },
  plugins: [],
}