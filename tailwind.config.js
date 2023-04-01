/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx,ts}",
    "./app/**/*.{js,jsx,tsx,ts}",
    "./components/**/*.{js,jsx,tsx,ts}",
    "./styles/**/*.{js,jsx,tsx,ts}",
  ],
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
        35: "8.75rem",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

// background: "#11162B",
// primary: "#0EE6B8",
// secondary: "#72D8FE",
