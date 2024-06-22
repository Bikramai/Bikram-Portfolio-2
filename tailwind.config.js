/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Figtree", "sans-serif"],
        secondary: ["Syne", "sans-serif"],
      },
      colors: {
        "dark-black": "#1C1C1C",
        "dark-color": "#35363a",
        "light-color": "#f4f4f4",
        "gray-color": "#707070",
        "light-gray": "#D9D9D9",
        "pink-color": "#F91A68",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
