// tailwind will be bundled via postcss
// eslint-disable-next-line import/no-extraneous-dependencies
//import tailwindcss from "tailwindcss";

module.exports = () => ({
  // eslint-disable-next-line
  plugins: [require("tailwindcss")],
});
