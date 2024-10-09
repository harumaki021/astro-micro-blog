import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ヒラギノ丸ゴ ProN","Hiragino Maru Gothic ProN","Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","BIZ UDGothic","M PLUS 1p","Helvetica Neue","Noto Color emoji", ...defaultTheme.fontFamily.sans],
        mono: ["Noto Color emoji", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
