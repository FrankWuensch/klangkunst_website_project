const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        neutral: {
          750: "#393939",
        },
        orange: {
          250: "#ffce89",
        }
      }
    },
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
};
