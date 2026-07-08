import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        mist: "#f3f6f7",
        line: "#d7e2e6",
        accent: "#0f5c67",
        accentSoft: "#c7dde0",
      },
      boxShadow: {
        card: "0 24px 60px rgba(16, 32, 51, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(16, 32, 51, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 32, 51, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
