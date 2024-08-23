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
        "bullt-secondary": "#FFFF", //white
        "bullt-tertiary": "#f69b00", //yellow
        "bullt-quaternary": "#01204E", // dark blue
        "bullt-quinary": "#4529a3", //purple
        "bullt-background": "#FAFAFA", //white
        "bullt-text-primary": "#01204E", //dark blue
        "bullt-text-secondary": "#FAFAFA", // gray
        "bullt-text-tertiary": "#191970", //white
        "bullt-text-quaternary": "#535E73",
        "bullt-text-quinary": "#f69b00",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #4529a3 0%, #261c3a 100%)", // Black to dark blue
        "secondary-gradient":
          "linear-gradient(270deg, #FAFAFA 0%, #f69b00 100%)", // White to yellow
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
