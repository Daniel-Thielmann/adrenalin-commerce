import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        adrenalin: {
          black: "#0a0a0a",
          dark: "#1a1a1a",
          gray: "#2a2a2a",
          light: "#8a8a8a",
          white: "#f5f5f5",
          yellow: "#E3FC02",
          "yellow-hover": "#c8e002",
          "yellow-dark": "#a0ab3c",
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["8rem", { lineHeight: "0.9", letterSpacing: "0.02em" }],
        display: ["6rem", { lineHeight: "0.95", letterSpacing: "0.02em" }],
        "display-md": ["4.5rem", { lineHeight: "1", letterSpacing: "0.02em" }],
        "display-sm": ["3.5rem", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "display-xs": ["2.5rem", { lineHeight: "1.1", letterSpacing: "0.02em" }],
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "scroll-reveal": "scrollReveal 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scrollReveal: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;