/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        gold: "#d4af37",
        accent: "#1a1a1a",
      },
    },
  },
  plugins: [],
};