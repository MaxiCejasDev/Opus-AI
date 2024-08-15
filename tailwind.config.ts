import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-border': '#333333',
        'black-secondary-bold': '#151515',
        'black-secondary-light': '#101010',
        'black-primary-bold': '#050505',
        'black-primary-light': '#080808',
        'grey': '#888888'

      }
    },
  },
  plugins: [],
};
export default config;
