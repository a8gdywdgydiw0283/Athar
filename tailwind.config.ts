import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "athar-black": "#0A0A0A",
        "athar-surface": "#111111",
        "athar-border": "#1E1E1E",
        "athar-slash": "#C8FF00",
        "athar-white": "#F2F2F2",
        "athar-muted": "#6B6B6B",
      },
      fontFamily: {
        "display-ar": ["var(--font-cairo)", "sans-serif"],
        "display-en": ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-ibm-plex-arabic)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
