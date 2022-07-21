/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
      },
    },
    screens: {
      sm: "480px",
      md: "800px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
