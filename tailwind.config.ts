import { on } from "events";
import type { Config } from "tailwindcss";

const config = {
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
        background: "var(--background)",
        onbackground: "var(--onbackground)",
        onsurface: "var(--onsurface)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--onprimary)",
          inverse: "var(--primary-inverse)",
          container: "var(--primarycontainer)",
          "container-foreground": "var(--onprimarycontainer)",
          fixed: "var(--primaryfixed)",
          "fixed-foreground": "var(--onprimaryfixed)",
          fixeddim: "var(--primaryfixeddim)",
          fixedvariant: "var(--onprimaryfixedvariant)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--onsecondary)",
          container: "var(--secondarycontainer)",
          "on-container": "var(--onsecondarycontainer)",
          fixed: "var(--secondaryfixed)",
          "fixed-foreground": "var(--onsecondaryfixed)",
          fixeddim: "var(--secondaryfixeddim)",
          "fixed-variant-foreground": "var(--onsecondaryfixedvariant)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--ontertiary)",
          container: "var(--tertiarycontainer)",
          "on-container": "var(--ontertiarycontainer)",
          fixed: "var(--tertiaryfixed)",
          "fixed-foreground": "var(--ontertiaryfixed)",
          fixeddim: "var(--tertiaryfixeddim)",
          "fixed-variant-foreground": "var(--ontertiaryfixedvariant)",
        },
        error: {
          DEFAULT: "var(--error)",
          foreground: "var(--onerror)",
          container: "var(--errorcontainer)",
          "container-foreground": "var(--onerrorcontainer)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--onsuccess)",
          container: "var(--successcontainer)",
          "container-foreground": "var(--onsuccesscontainer)",
        },
        info: {
          DEFAULT: "var(--info)",
          foreground: "var(--oninfo)",
          container: "var(--infocontainer)",
          "container-foreground": "var(--oninfocontainer)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--onwarning)",
          container: "var(--warningcontainer)",
          "container-foreground": "var(--onwarningcontainer)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          variant: "var(--surfacevariant)",
          dim: "var(--surfacedim)",
          bright: "var(--surfacebright)",
          container: "var(--surfacecontainer)",
          containerhigh: "var(--surfacecontainerhigh)",
          containerhighest: "var(--surfacecontainerhighest)",
          containerlow: "var(--surfacecontainerlow)",
          containerlowest: "var(--surfacecontainerlowest)",
        },
        scrim: "var(--scrim)",
        outline: {
          DEFAULT: "var(--outline)",
          variant: "var(--outlinevariant)",
        },
        inverse: {
          surface: "var(--inversesurface)",
          foreground: "var(--oninverse)",
        },
        shadow: "var(--shadow)",
      },
      padding: {
        "2xs": "var(--2xs)",
        xs: "var(--xs)",
        sm: "var(--sm)",
        md: "var(--md)",
        lg: "var(--lg)",
        xl: "var(--xl)",
        "2xl": "var(--2xl)",
      },
      gap: {
        "2xs": "var(--2xs)",
        xs: "var(--xs)",
        sm: "var(--sm)",
        md: "var(--md)",
        lg: "var(--lg)",
        xl: "var(--xl)",
        "2xl": "var(--2xl)",
      },
      boxShadow: {
        sm: "0 0 1px 0 var(--shadow), 0 0 1px #727272",
        md: "0 4px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.11), 0 0 1px #727272",
        lg: "0 11px 15px -3px rgba(0, 0, 0, 0.11), 0 2px 6px rgba(0, 0, 0, 0.07), 0 0 1px #727272",
        xl: "0 20px 25px rgba(0, 0, 0, 0.09), 0 5px 11px rgba(0, 0, 0, 0.12), 0 0 1px #727272",
        "2xl":
          "0 25px 50px rgba(0, 0, 0, 0.23), 0 9px 18px rgba(0, 0, 0, 0.1), 0 0 1px #727272",
      },
      borderRadius: {
        "2xs": "var(--2xs)",
        xs: "var(--xs)",
        sm: "var(--sm)",
        md: "var(--md)",
        lg: "var(--lg)",
        xl: "var(--xl)",
        "2xl": "var(--2xl)",
        circle: "100em",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
