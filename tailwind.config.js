// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#80AEC9",
        "primary-dark": "#3d718f",
        background: "#f5f5f5",
      },
      fontFamily: {
        mono: ["JetBrainsMono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
