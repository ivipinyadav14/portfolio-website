/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily : {
        'primary-font' : ['Poppins', 'sans-serif'],
        'my-name' : ['Lobster Two', 'sans-serif']
      },
    },
  },
  plugins: [],
}

