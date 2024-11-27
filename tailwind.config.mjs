import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ヒラギノ丸ゴ ProN",
          "Hiragino Maru Gothic ProN",
          "ヒラギノ角ゴ ProN W3",
          "Hiragino Kaku Gothic ProN",
          "BIZ UDPGothic",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "M PLUS 1 Code Variable",
          "sans-serif",
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
