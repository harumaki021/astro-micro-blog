import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import rehypeFigure from "@microflash/rehype-figure";

// https://astro.build/config
export default defineConfig({
  site: "https://harumakizaemon.net",
  integrations: [tailwind(), sitemap(), embeds(), mdx(), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
    remarkRehype: {
      footnoteLabel: " ",
      footnoteLabelProperties: { className: [""] },
      footnoteLabelTagName: "hr",
    },
    rehypePlugins: [rehypeFigure],
  },
});
