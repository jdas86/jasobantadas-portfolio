import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(56,189,248,0.14)",
        panel: "0 20px 80px rgba(2,6,23,0.30)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        mesh: "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.16), transparent 25%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.14), transparent 28%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.1), transparent 25%)"
      }
    }
  },
  plugins: []
};

export default config;
