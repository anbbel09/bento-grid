/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.{html,js}"],
  theme: {
    extend: {
      colors:{
        'whitee':' hsl(0, 0%, 100%)',
        'yellow-light':'hsl(31, 66%, 93%)',
        'purple-light':'hsl(254, 88%, 90%)',
        'yellow-dark':'hsl(39, 100%, 71%)',
        'purple-dark':'hsl(256, 67%, 59%)',
      },
      fontFamily: {
        'title': ['Sofia-bold'],
        'subtitle': ['Sofia-Semibold'],
        'text': ['Sofia-Regular'],   
        'text-md': ['Sofia-Medium'], 
      },
    },
  },
  plugins: [],
}

