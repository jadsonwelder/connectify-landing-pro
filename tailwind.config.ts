
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0096FF",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1E293B",
          foreground: "#ffffff",
        },
        neon: {
          blue: "#00BFFF",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #0F172A, #1E293B)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
