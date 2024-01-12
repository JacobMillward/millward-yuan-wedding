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
        burgundy: "#691126",
        khaki: "#c2a791",
        caramel: "#f9b988",
      },
      fontFamily: {
        serif: ["var(--font-satsify)"],
      },
    },
  },
  plugins: [],
};
export default config;
