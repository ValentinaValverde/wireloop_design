/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jasper: "#C05746",
        flame: "#D36135",
        pinkish: "#DBD3D8",
        grayish: "#eff1f3",
      },
    },
  },
  plugins: [],
};
