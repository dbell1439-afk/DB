import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium, trustworthy, veteran-informed palette
        navy: {
          DEFAULT: "#0a1f3c",
          50: "#eef2f8",
          100: "#d4def0",
          700: "#13315c",
          800: "#0d2747",
          900: "#0a1f3c",
        },
        federal: {
          DEFAULT: "#1d4e89",
          light: "#2f6fb3",
          dark: "#143a66",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e3c45a",
          soft: "#f3e6b3",
        },
        ivory: {
          DEFAULT: "#fbf8f1",
          warm: "#f6f1e6",
        },
        slate: {
          DEFAULT: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(10,31,60,0.08), 0 8px 24px rgba(10,31,60,0.06)",
        lift: "0 8px 30px rgba(10,31,60,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
