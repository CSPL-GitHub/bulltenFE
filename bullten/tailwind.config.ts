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
        "bullt-quaternary": "#1E0342", // dark blue
        "bullt-quinary": "#3A1078", //purple
        "bullt-background": "#FAFAFA", //white
        "bullt-text-primary": "#01204E", //dark blue
        "bullt-text-secondary": "#FAFAFA", // gray
        "bullt-text-tertiary": "#ffffff", //white
        "bullt-text-quaternary": "#535E73",
        "bullt-text-quinary": "#B2955D",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #8f79d2 0%, #4529a3 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
