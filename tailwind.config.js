/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        circle: "url('/circle.svg')",
      },
      colors: {
        "red-blood": "#CD3E3E",
        "almost-black": "#0A0A0A",
        "almost-white": "#F5F5F5",
        "lavender-blue": "#C3C1FE",
        "red-ruby": "#802626",
        "somewhat-green": "#008A21",
        "somewhat-blue": "#007CFF",
      },
      animation: {
        toLeft: "moveLeft 5s infinite linear",
        toRight: "moveRight 5s infinite linear",
        popUp: "popUp 0.2s ease-in forwards",
        popUpReverse: "popUpReverse 0.2s ease-in forwards",
      },
      keyframes: {
        moveLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        moveRight: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        popUp: {
          "0%": {
            transform: "translateX(0%) translateY(0%)",
          },
          "50%": {
            transform: "translateX(-2%) translateY(-4%)",
          },
          "100%": {
            transform: "translateX(-1%) translateY(-2%)",
          },
        },
        popUpReverse: {
          "0%": {
            transform: "translateX(-1%) translateY(-2%)",
          },
          "50%": {
            transform: "translateX(-2%) translateY(-4%)",
          },
          "100%": {
            transform: "translateX(0%) translateY(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
