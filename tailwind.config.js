/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        sage: {
          DEFAULT: "#5c7a66",
          light: "#7a967f",
        },
        forest: {
          DEFAULT: "#2d6a4f",
          light: "#40916c",
          dark: "#1b4332",
        },
        leaf: {
          DEFAULT: "#74c69d",
          muted: "rgba(45, 106, 79, 0.12)",
        },
        mint: {
          DEFAULT: "#d8f3dc",
          soft: "#e8f5e9",
        },
        fern: {
          DEFAULT: "#52b788",
          dark: "#2d6a4f",
        },
        jade: {
          DEFAULT: "#40916c",
          light: "#95d5b2",
        },
        pine: "#1a3c34",
        cream: {
          DEFAULT: "#f6faf8",
          alt: "#ecf4ef",
        },
        warm: {
          text: "#1e2d27",
          "text-secondary": "#4a5c54",
          "text-light": "#6b7d73",
          border: "#d4e4dc",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "hero-blob": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(18px, -14px) scale(1.06)" },
        },
        "hero-fade": {
          "0%": { opacity: "0.4" },
          "50%": { opacity: "0.75" },
          "100%": { opacity: "0.4" },
        },
        "hero-line": {
          "0%": { transform: "scaleX(0)", opacity: "0.6" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "hero-blob": "hero-blob 14s ease-in-out infinite",
        "hero-blob-slow": "hero-blob 22s ease-in-out infinite reverse",
        "hero-fade": "hero-fade 8s ease-in-out infinite",
        "hero-line": "hero-line 1.2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}