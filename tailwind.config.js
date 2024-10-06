/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "Soft-blue": 'hsl(215, 51%, 70%)',
          Cyan: 'hsl(178, 100%, 50%)',
        },
        secodary: {
          mainBG: "hsl(217, 54%, 11%)",
          cardBG: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
          white: "hsl(0, 0%, 100%)",
        }
        
      },
      fontFamily: {
        outfit: ["Outfit, sans-serif"]
      }
    },
  },
  plugins: [],
}

