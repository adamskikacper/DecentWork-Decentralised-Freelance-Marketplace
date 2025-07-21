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
   fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    heading: ["Inter", "system-ui", "sans-serif"],
    body: ["Inter", "system-ui", "sans-serif"],
    inter: ["Inter", "system-ui", "sans-serif"],
   },
   fontSize: {
    // Display sizes
    "display-lg": [
     "4.5rem",
     { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" },
    ],
    "display-md": [
     "3.75rem",
     { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" },
    ],
    "display-sm": [
     "3rem",
     { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "600" },
    ],

    // Heading sizes
    "heading-1": [
     "4rem",
     { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "700" },
    ],
    "heading-2": [
     "2.25rem",
     { lineHeight: "1.25", letterSpacing: "-0.025em", fontWeight: "600" },
    ],
    "heading-3": [
     "1.875rem",
     { lineHeight: "1.3", letterSpacing: "0em", fontWeight: "600" },
    ],
    "heading-4": [
     "1.5rem",
     { lineHeight: "1.375", letterSpacing: "0em", fontWeight: "600" },
    ],
    "heading-5": [
     "1.25rem",
     { lineHeight: "1.4", letterSpacing: "0em", fontWeight: "500" },
    ],
    "heading-6": [
     "1.125rem",
     { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "500" },
    ],

    // Body text sizes
    "body-lg": [
     "1.125rem",
     { lineHeight: "1.75", letterSpacing: "0em", fontWeight: "400" },
    ],
    "body-md": [
     "1rem",
     { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
    ],
    "body-sm": [
     "0.875rem",
     { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
    ],

    // Label sizes
    "label-lg": [
     "0.875rem",
     { lineHeight: "1.25", letterSpacing: "0em", fontWeight: "500" },
    ],
    "label-md": [
     "0.75rem",
     { lineHeight: "1.25", letterSpacing: "0em", fontWeight: "500" },
    ],
    "label-sm": [
     "0.6875rem",
     { lineHeight: "1.25", letterSpacing: "0.025em", fontWeight: "500" },
    ],

    // Caption sizes
    "caption-md": [
     "0.75rem",
     { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
    ],
    "caption-sm": [
     "0.6875rem",
     { lineHeight: "1.5", letterSpacing: "0.025em", fontWeight: "400" },
    ],
   },
   fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
   },
   lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
   },
   letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
   },
   colors: {
    border: "var(--border)",
    input: "var(--input)",
    ring: "var(--ring)",
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: {
     DEFAULT: "var(--primary)",
     foreground: "var(--primary-foreground)",
    },
    secondary: {
     DEFAULT: "var(--secondary)",
     foreground: "var(--secondary-foreground)",
    },
    destructive: {
     DEFAULT: "var(--destructive)",
     foreground: "var(--destructive-foreground)",
    },
    muted: {
     DEFAULT: "var(--muted)",
     foreground: "var(--muted-foreground)",
    },
    accent: {
     DEFAULT: "var(--accent)",
     foreground: "var(--accent-foreground)",
    },
    popover: {
     DEFAULT: "var(--popover)",
     foreground: "var(--popover-foreground)",
    },
    card: {
     DEFAULT: "var(--card)",
     foreground: "var(--card-foreground)",
    },
    sidebar: {
     DEFAULT: "var(--sidebar-background)",
     foreground: "var(--sidebar-foreground)",
     primary: "var(--sidebar-primary)",
     "primary-foreground": "var(--sidebar-primary-foreground)",
     accent: "var(--sidebar-accent)",
     "accent-foreground": "var(--sidebar-accent-foreground)",
     border: "var(--sidebar-border)",
     ring: "var(--sidebar-ring)",
    },
    success: {
     DEFAULT: "var(--success)",
     foreground: "var(--success-foreground)",
    },
    warning: {
     DEFAULT: "var(--warning)",
     foreground: "var(--warning-foreground)",
    },
    info: {
     DEFAULT: "var(--info)",
     foreground: "var(--info-foreground)",
    },
    chart: {
     1: "var(--chart-1)",
     2: "var(--chart-2)",
     3: "var(--chart-3)",
     4: "var(--chart-4)",
     5: "var(--chart-5)",
     6: "var(--chart-6)",
    },
    shadow: {
     light: "var(--shadow-light)",
     medium: "var(--shadow-medium)",
     heavy: "var(--shadow-heavy)",
    },
    vibrantBlue: "#3B82F6",
    emeraldGreen: "#10B981",
    sunnyYellow: "#F59E0B",
    deepPurple: "#8B5CF6",
   },
   backgroundImage: {
    "gradient-primary-secondary":
     "linear-gradient(to right, var(--color-vibrantBlue), var(--color-emeraldGreen))",
    "gradient-accent-highlight":
     "linear-gradient(to right, var(--color-sunnyYellow), var(--color-deepPurple))",
   },
   borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
   },
   boxShadow: {
    soft: "0 2px 8px var(--shadow-light)",
    medium: "0 4px 16px var(--shadow-medium)",
    strong: "0 8px 32px var(--shadow-heavy)",
   },
  },
 },
 plugins: [],
} satisfies Config;
