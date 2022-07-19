/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir"],
      },
      colors: {
        YELLOW: "#FFF80A",
        ORENG: "#F66B0E",
        RED: "#CD1818",
        BLUE: "#34B3F1",
        JACARTA: "#293462",
        accentDark: "#7444FF",
        accentLight: "#9E7CFF",
        accentLighter: "#B9A0FF",
      },
    },
  },
  plugins: [],
};
