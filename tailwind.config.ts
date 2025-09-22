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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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

        // New color palette
        onyx: {
          DEFAULT: "#474448",
          100: "#0e0d0e",
          200: "#1c1b1c",
          300: "#2a282b",
          400: "#383539",
          500: "#474448",
          600: "#6c676d",
          700: "#918c93",
          800: "#b6b2b7",
          900: "#dad9db",
        },
        "raisin-black": {
          DEFAULT: "#2d232e",
          100: "#090709",
          200: "#120e13",
          300: "#1b151c",
          400: "#241c25",
          500: "#2d232e",
          600: "#5d485f",
          700: "#8d6d90",
          800: "#b39db5",
          900: "#d9ceda",
        },
        bone: {
          DEFAULT: "#e0ddcf",
          100: "#353122",
          200: "#6a6344",
          300: "#9e9367",
          400: "#bfb99b",
          500: "#e0ddcf",
          600: "#e7e5da",
          700: "#edebe3",
          800: "#f3f2ec",
          900: "#f9f8f6",
        },
        wenge: {
          DEFAULT: "#534b52",
          100: "#110f10",
          200: "#211e21",
          300: "#322d31",
          400: "#423c42",
          500: "#534b52",
          600: "#786d76",
          700: "#9b9099",
          800: "#bcb5bb",
          900: "#dedadd",
        },
        isabelline: {
          DEFAULT: "#f1f0ea",
          100: "#393626",
          200: "#726c4c",
          300: "#a59e78",
          400: "#cbc7b1",
          500: "#f1f0ea",
          600: "#f4f3ee",
          700: "#f6f6f2",
          800: "#f9f9f6",
          900: "#fcfcfb",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-warm": "var(--gradient-warm)",
        "gradient-earth": "var(--gradient-earth)",
        "gradient-hero": "var(--gradient-hero)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        elevation: "var(--shadow-elevation)",
      },
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
        bounce: "var(--transition-bounce)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
