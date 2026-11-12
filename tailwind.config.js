/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: { center: true, padding: "16px" },
    extend: {
      fontFamily: {
        sans: ["Geist", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: { 950: "#09090b", 900: "#111113", 800: "#18181b" },
        accent: { DEFAULT: "rgb(var(--accent) / <alpha-value>)", ink: "rgb(var(--accent-ink) / <alpha-value>)" },
        gold: "#f59e0b",
      },
    },
  },
  plugins: [],
};
