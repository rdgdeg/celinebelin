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
        /** Marque — verts PEPS + pastels (mist / sky / lavender) */
        brand: {
          DEFAULT: "#16965c",
          light: "#22c77a",
          dark: "#0d4a32",
        },
        /** Accent « frais » (peps) + pastels très doux */
        sky: {
          DEFAULT: "#3ecf8f",
          light: "#c5f0dc",
        },
        mist: {
          DEFAULT: "#d4f0e3",
          soft: "#ecf8f1",
        },
        /** Secondaire doux type sauge pastel */
        lavender: {
          DEFAULT: "#6fa882",
          light: "#a8d4b8",
        },
        ink: "#0f2419",
        cream: {
          DEFAULT: "#f6fcf9",
          alt: "#eaf6f0",
        },
        warm: {
          text: "#13261c",
          "text-secondary": "#3d5248",
          "text-light": "#5c6e62",
          border: "#c0e0d0",
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
        card: "0 6px 28px rgba(13, 74, 50, 0.07)",
        "card-hover": "0 14px 40px rgba(13, 74, 50, 0.12)",
        nav: "0 2px 20px rgba(13, 74, 50, 0.08)",
        blog: "0 8px 32px rgba(13, 74, 50, 0.08)",
        "blog-hover": "0 16px 48px rgba(13, 74, 50, 0.14)",
        cta: "0 4px 22px rgba(22, 199, 122, 0.38)",
        "hero-frame": "0 28px 60px -12px rgba(13, 74, 50, 0.28)",
        banner: "0 12px 40px rgba(13, 74, 50, 0.2)",
        animal: "0 4px 18px rgba(13, 74, 50, 0.06)",
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
