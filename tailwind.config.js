import colors from 'tailwindcss/colors'

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray
      }
    }
  }
}
