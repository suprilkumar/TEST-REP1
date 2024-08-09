/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily:{
        custom: ['rubik']
      },
    },
  },
  plugins: [],
}

