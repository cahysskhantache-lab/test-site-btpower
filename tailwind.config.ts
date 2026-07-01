import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#4E4E4E",
        muted: "#6f6d6a",
        line: "#ddd8cf",
        paper: "#F6F3EC",
        steel: "#ebe6dc",
        electric: "#1ACD54",
        deepblue: "#123821",
        safety: "#8AAE92",
        signal: "#1ACD54",
        logoGray: "#989491",
        slate: "#4E4E4E",
        cream: "#F6F3EC"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(18, 56, 33, 0.13)",
        panel: "0 18px 50px rgba(26, 205, 84, 0.14)"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Lato", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
