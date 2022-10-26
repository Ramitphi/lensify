/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#00501E",
        brandbutton: "#E5FFBE",
        lenstext: "#ABFE2C",
        webRgbColors: {},
      },
    },
  },
  plugins: [],
};
