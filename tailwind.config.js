const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
};
