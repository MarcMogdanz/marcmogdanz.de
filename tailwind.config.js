// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrainsMono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
