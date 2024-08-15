/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#dd0a13",
        secondary: "#9b0e15",
        light: "#f7f7f7",
        dark: "#333",
        dark2: "#999",
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "2rem",
          lg : "4rem",
          xl : "5rem",
          "2xl" : "6rem",
        },
      },
    },
  },
  plugins: [],
}

