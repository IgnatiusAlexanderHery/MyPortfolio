/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      screens: {
        "-xs": "320px",
      },
    },
  },
  plugins: [],
};
