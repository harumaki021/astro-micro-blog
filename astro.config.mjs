import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import rehypeFigure from "@microflash/rehype-figure";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  site: "https://harumakizaemon.net",
  compressHTML: true,
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      shikiConfig: {
        theme: "css-variables",
      },
      remarkRehype: {
        footnoteLabel: " ",
        footnoteLabelProperties: { className: [""] },
        footnoteLabelTagName: "hr",
      },
      rehypePlugins: [rehypeFigure],
    }),
  },
});
