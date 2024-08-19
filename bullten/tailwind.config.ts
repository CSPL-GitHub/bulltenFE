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
        "bullt-primary": "#212121",
        "bullt-secondary": "#535E73",
        "bullt-tertiary": "#132d8b",
        "bullt-quaternary": "#080F2C",
        "bullt-quinary": "#A0ACA5",
        "bullt-background": "#FAFAFA",
        "bullt-text-primary": "#1A202C",
        "bullt-text-secondary": "#CCCCCC",
        "bullt-text-tertiary": "#ffffff",
        "bullt-text-quaternary": "#535E73",
        "bullt-text-quinary": "#B2955D",
      },
    },
  },
  plugins: [],
};
export default config;
