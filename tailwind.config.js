/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "space": "Space Mono"
      },
      backgroundImage: {
        "gradient-blue": "radial-gradient(55.28% 55.28% at 50% 50%, rgba(57, 193, 211, 0.3) 0%, rgba(0, 23, 31, 0) 100%)",
        "gradient-purple": "radial-gradient(55.28% 55.28% at 50% 50%, rgba(80, 19, 118, 0.3) 0%, rgba(139, 33, 149, 0) 100%)"
      },
      colors:{
        backgroundColor: "#00171F",
        whiteish: "#EBEBEB",
        lighterBlue: "#003649",
        purpleCode: "#FF269B",
        blueCode: "#4FABFF",
        fadedWhite: "#A4A4A4",
        yellowCode: "#FFC700",
        redCode: "#FF4D77",
        redCircle: "#FF4949",
        yellowCircle: "#FFCF26",
        greenCircle: "#31FF52"
      }
    },
  },
  plugins: [],
}
