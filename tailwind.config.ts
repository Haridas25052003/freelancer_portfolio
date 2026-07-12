import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#0F172A",
        accent: "#06B6D4",
      },
    },
  },
  plugins: [],
};
export default config;
