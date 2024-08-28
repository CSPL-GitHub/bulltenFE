import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      colors: {
        "bullt-primary": "#000000", //black
        "bullt-secondary": "#FFFF", //white
        "bullt-tertiary": "#f69b00", //yellow
        "bullt-quaternary": "#012EA3", // dark blue
        "bullt-quinary": "#012EA3", //purple
        "bullt-background": "#FAFAFA", //white
        "bullt-text-primary": "#012EA3", //dark blue
        "bullt-text-secondary": "#FAFAFA", // gray
        "bullt-text-tertiary": "#00008B", //white
        "bullt-text-quaternary": "#535E73",
        "bullt-text-quinary": "#f69b00",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #4529a3 0%, #261c3a 100%)", // Black to dark blue
        "secondary-gradient":
          "linear-gradient(180deg, #8f79d2 0%, #7154c6 100%)", // White to yellow
        "tertiary-gradient": "linear-gradient(90deg, #f69b00 0%, #4529a3 100%)", // Yellow to purple
        "quaternary-gradient":
          "linear-gradient(90deg, #01204E 0%, #535E73 100%)", // Dark blue to grayish blue
        "quinary-gradient": "linear-gradient(180deg, #4529a3 0%, #8f79d2 100%)", // Purple to lighter purple
        "senary-gradient": "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)", // White to light blue
      },
    },
  },
  plugins: [],
};
export default config;
