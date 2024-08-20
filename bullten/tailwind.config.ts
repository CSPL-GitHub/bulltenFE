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
        "bullt-primary": "#000000", //black
        "bullt-secondary": "#FAFAFA", //white
        "bullt-tertiary": "#FFBF00", //yellow
        "bullt-quaternary": "#01204E", // dark blue
        "bullt-quinary": "#3A1078", //purple
        "bullt-background": "#FAFAFA", //white
        "bullt-text-primary": "#01204E", //dark blue
        "bullt-text-secondary": "#CCCCCC", // gray
        "bullt-text-tertiary": "#ffffff", //white
        "bullt-text-quaternary": "#535E73",
        "bullt-text-quinary": "#B2955D",
      },
    },
  },
  plugins: [],
};
export default config;
