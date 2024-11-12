import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ヒラギノ丸ゴ ProN","Hiragino Maru Gothic ProN","Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","BIZ UDPGothic","Helvetica Neue","sans-serif"],
        mono: ["M PLUS 1 Code Variable","sans-serif", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'green-500': '#48bb78',
        'gray-300': '#e2e8f0',
      },
      spacing: {
        '12': '3rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
