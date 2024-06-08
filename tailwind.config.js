/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        title:['Freehand', 'cursive'],
        navtitle:['Sofia', 'cursive'],
      },
      colors:{
        'white':'#ffffff',
        'yellow':'#c59d5f',
        'red':'#ff2a00',
        'lightPink':'#c59d5f24',
        'lightBlack':'#555555e6',
        'paleYellow':'#f4f1ee',
        'lightBlack':'#212529'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

