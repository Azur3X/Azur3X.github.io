import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://Azur3X.github.io", // your GitHub Pages URL or custom domain
  base: "/", // use "/" for user/organization pages, or "/repo-name/" for project pages
  integrations: [tailwind()],
});
