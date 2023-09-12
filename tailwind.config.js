/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.8rem, min(1.5dvw, 1.5dvh), 8rem)",
      },
      fontFamily: {
        headings: ["DM Serif Display", "serif"],
        others: ["Karla", "sans-serif"],
      },
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "greyish-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-greyish-violet": "hsl(273, 4%, 51%)",
        "very-light-grey": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
