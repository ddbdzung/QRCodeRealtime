const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/views/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
