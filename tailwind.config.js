/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rose: colors.rose,
      green: colors.green,
    }, 
    extend: {
      colors: {
        'primary':{
          'pink':'hsl(322, 100%, 66%)',
          'light-pink':'hsl(321, 100%, 78%)',
          'light-red':'hsl(0, 100%, 63%)',
        },
        'neutral':{
          'very-dark-cyan':'hsl(192, 100%, 9%)',
          'very-pale-blue':'hsl(207, 100%, 98%)',
        }
      },
    },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },

  },
  plugins: [],
}