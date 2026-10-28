/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Semantic Surface Mappings */
        canvas: "var(--bg-canvas)",
        "surface-elevated": "var(--bg-surface-elevated)",
        "surface-card": "var(--bg-surface-card)",
        "surface-overlay": "var(--bg-surface-overlay)",
        "surface-recessed": "var(--ny-primitive-obsidian-750)",

        /* Obsidian Chamber Palettes (Exact Specs: #080B11, #0D111A, #131926, #1A2234) */
        court: {
          950: "#080B11",
          900: "#080B11", /* Primary Obsidian Void */
          850: "#0D111A", /* Chamber Floor / Canvas Base */
          800: "#131926", /* Dossier Slate / Card Surface */
          750: "#1A2234", /* Raised Tactical Panel */
          700: "#232C42", /* Recessed / Structural Divider */
          650: "#2F3B55", /* High-contrast Border */
          600: "#425273",
        },
        obsidian: {
          950: "#080B11",
          900: "#0D111A",
          850: "#131926",
          800: "#1A2234",
          750: "#232C42",
          700: "#2F3B55",
        },

        /* Judicial Gold & Burnished Brass (Exact Specs: #FFE082, #E5C07B, #D4AF37, #B8860B) */
        gold: {
          300: "#FFE082",
          400: "#E5C07B",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#8C6508",
          900: "#3D2C04",
        },
        brass: {
          light: "#FFE082",
          DEFAULT: "#E5C07B",
          dark: "#B8860B",
        },

        /* Fatal Impeachment Crimson (Exact Specs: #FF4D4D, #DC2626, #7F1D1D) */
        crimson: {
          400: "#FF4D4D",
          500: "#DC2626",
          700: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },

        /* Material Variation Amber (Exact Specs: #F59E0B, #78350F) */
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          700: "#B45309",
          800: "#78350F",
          950: "#451A03",
        },

        /* Evidence Azure & Cyan (Exact Specs: #38BDF8, #0284C7) */
        azure: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          900: "#0C4A6E",
        },
        cyan: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          900: "#0C4A6E",
        },

        /* Courtroom Parchment White (Exact Specs: #F8FAFC, #E2E8F0, #94A3B8) */
        parchment: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
          400: "#94A3B8",
          600: "#64748B",
          800: "#334155",
        },

        /* Semantic Verdict Tokens */
        verdict: {
          fatal: "#DC2626",
          fatalFlare: "#FF4D4D",
          material: "#F59E0B",
          minor: "#38BDF8",
          safe: "#10B981",
        },
      },
      fontFamily: {
        /* Headings & Court Bench */
        serif: ["Cinzel", "Instrument Serif", "Georgia", "serif"],
        bench: ["Cinzel", "serif"],
        display: ["Space Grotesk", "sans-serif"],

        /* Body & Tactical Interactivity */
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],

        /* Statutory Citations & Evidentiary Identifiers */
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "gold-glow": "0 0 15px rgba(212, 175, 55, 0.22)",
        "crimson-glow": "0 0 20px rgba(220, 38, 38, 0.32)",
        "cyan-glow": "0 0 15px rgba(56, 189, 248, 0.25)",
        "obsidian-card": "0 8px 24px -4px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "fatal-pulse": "fatal-impeachment-glow 2.5s infinite ease-in-out",
        "brass-shimmer": "brass-shimmer 4s infinite linear",
      },
      borderColor: {
        court: {
          subtle: "rgba(47, 59, 85, 0.45)",
          default: "#1A2234",
          prominent: "#2F3B55",
          gold: "rgba(212, 175, 55, 0.35)",
        },
      },
    },
  },
  plugins: [],
};
