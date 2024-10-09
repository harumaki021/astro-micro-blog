import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hiragino Maru Gothic Pro","BIZ UDGothic","M PLUS 1p","HelveticaNeue","Noto Color emoji", ...defaultTheme.fontFamily.sans],
        mono: ["Noto Color emoji", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
