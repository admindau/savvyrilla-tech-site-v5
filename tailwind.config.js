/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        accent: "#00AEEF",
        gorilla: "#3E2F1C",
        bg: "#F5F7FA"
      }
    }
  },
  plugins: []
};
