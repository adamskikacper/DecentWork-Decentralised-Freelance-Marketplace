import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
    sans: ["Quicksand", "system-ui", "sans-serif"],
    heading: ["Quicksand", "system-ui", "sans-serif"],
    body: ["Quicksand", "system-ui", "sans-serif"],
    quicksand: ["Quicksand", "system-ui", "sans-serif"],
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
 plugins: [tailwindcssAnimate],
} satisfies Config;
