import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        void: {
          950: "#050506",
          900: "#0a0a0b",
          800: "#101013",
          700: "#161619",
          600: "#1c1c21",
        },
        bone: {
          50: "#f7f6f2",
          100: "#eceae3",
          200: "#d4d3cc",
          300: "#9b9b9f",
          400: "#6b6b70",
          500: "#4a4a50",
        },
        oxide: {
          500: "#c8161d",
          400: "#e02127",
          300: "#f13a3f",
          700: "#891013",
        },
        ember: {
          500: "#ff6a1a",
          400: "#ff8a3a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Anton", "Impact", "sans-serif"],
        stencil: [
          "var(--font-stencil)",
          "Barlow Condensed",
          "Oswald",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "Barlow",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        panel:
          "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.5)",
        bevel:
          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.55)",
        oxide: "0 10px 30px -8px rgba(200,22,29,0.55)",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
