/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "16px", sm: "24px", lg: "32px" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px", "2xl": "1280px" },
    },
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
