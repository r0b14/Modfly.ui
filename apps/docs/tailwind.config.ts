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
        background: "var(--background)",
        foreground: "var(--foreground)",
        modfly: {
          blue: "#298bca",
          green: "#649753",
          orange: "#c66a4a",
          yellow: "#f5c542",
          pink: "#ed1b69",
          purple: "#6c4ab6",
          dark: "#0f0e0c",
          light: "#f6f3ec"
        }
      },
    },
  },
  plugins: [],
};
export default config;
