import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#650D1B",
          burgundy: "#4A101B",
          gold: "#C18A32",
          warmGold: "#D8A84E",
          ivory: "#FFF9F0",
          beige: "#F5EBDD",
          cream: "#FAF4E8",
          cardBg: "#FFF9F0",
          text: "#241B19",
          muted: "#65564E",
          highlight: "#F8D261",
          border: "#E7D6C1",
          goldBorder: "rgba(193, 138, 50, 0.45)",
          darkMaroon: "#3B0811",
        },
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', '"Inter"', '"Lato"', "system-ui", "-apple-system", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', '"Inter"', '"Lato"', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'royal': '0 4px 15px -1px rgba(101, 13, 27, 0.08), 0 2px 6px -1px rgba(193, 138, 50, 0.12)',
        'royal-hover': '0 10px 25px -3px rgba(101, 13, 27, 0.15), 0 4px 10px -2px rgba(193, 138, 50, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
