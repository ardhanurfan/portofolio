/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: { center: true, padding: "16px" },
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: { 950: "#0d0d0b", 900: "#161614", 800: "#1f1f1c", 700: "#34342f" },
        bone: { DEFAULT: "#ece7da", 200: "#e0daca", 300: "#cfc8b5" },
        signal: "#ff4d1c",
        volt: "#c6f432",
      },
    },
  },
  plugins: [],
};
