// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    // css is purged directly via a gatsby plugin
    enabled: false,
  },
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
