/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        flow: ["Flow Block", "cursive"],
      },
      fontSize: {
        mini: "12px",
        "80px": "80px",
        "42px": "42px",
      },
      spacing: {
        "2px": "2px",
      },
      boxShadow: {
        "3xl": "0 10px 30px 0 #b7afff33",
      },
      borderRadius: {
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
