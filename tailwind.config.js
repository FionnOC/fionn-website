/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      other: "1.2rem",
      lg: `${18 / 16}rem`,
      xl: `${20 / 16}rem`,
      "2xl": `${24 / 16}rem`,
      "3xl": `${32 / 16}rem`,
      "4xl": `${48 / 16}rem`,
      "5xl": `${72 / 16}rem`,
      "6xl": `${90 / 16}rem`,
      "7xl": `${140 / 16}rem`,
      "8xl": `${180 / 16}rem`,
      0: "0",
    },
    colors: {
      black: colors.black,
      white: colors.white,
      red: colors.red,
      yellow: colors.yellow,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,

      blue: colors.blue,

      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
  },
  plugins: [],
};
