import type { Config } from "tailwindcss";

/**
 * Design System — Borders Vilas Boas
 * Paleta extraída do logo: verde-sálvia, creme, verde-floresta e caramelo (tan).
 * Clima: farmhouse americano — claro, acolhedor, orgânico.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        cream: {
          50: "#FBF8F1",
          100: "#F5EFE2",
          200: "#ECE3D0",
          300: "#DECFB3",
        },
        sage: {
          100: "#E8ECDD",
          200: "#D4DCC2",
          300: "#B8C59C",
          400: "#9AAC7E",
          500: "#7F9265",
          600: "#677A50",
          700: "#52613F",
        },
        tan: {
          100: "#F1E6D2",
          200: "#E4CFA8",
          300: "#D3B47E",
          400: "#C29A57",
          500: "#A87F3F",
          600: "#8A6731",
        },
        forest: {
          600: "#46553D",
          700: "#3A4733",
          800: "#2C3727",
          900: "#1F271C",
        },
        ink: "#2B2A26",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(43, 42, 38, 0.04), 0 8px 24px rgba(43, 42, 38, 0.06)",
        lift: "0 12px 40px rgba(43, 42, 38, 0.12)",
        ring: "0 0 0 1px rgba(58, 71, 51, 0.08)",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
