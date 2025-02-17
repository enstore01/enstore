import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0F1A3C",
        accent: "#3A6BDE",
        navy: "#0A1229",
        light: "#F8FAFC",
        silver: "#E8EDF5",
        gold: "#C5A47E",
        brand: "#00528f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        knight: ["Knight Vision", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
