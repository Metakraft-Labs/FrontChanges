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
      box: "0px 0px 16px 0px #379CFF",
      box2: "0px 0px 6px 0px rgba(55, 156, 255, 0.99)"

      },
      
  },
  screens: {
    xs: {min:"320px", max:"620px"},
    ss: {min:"620px", max:"768px"},
    sm: {min:"768px", max:"1060px"},
    md: {min:"1060px", max:"1200px"},
    lg: {min:"1200px", max:"1700px"},
    xl: "1700px",
  },
  },
  plugins: [],
}

