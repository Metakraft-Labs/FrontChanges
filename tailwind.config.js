/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#030510",
        secondary: "#379CFF",
        grey: "rgba(255, 255, 255, 0.54)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
      btnLink: "0px 0px 12px 0px rgba(55, 156, 255, 0.99) inset",

      }
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  },
  plugins: [],
}

