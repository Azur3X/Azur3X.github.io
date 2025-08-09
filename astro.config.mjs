import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://azur3x.github.io",  // your site URL
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],  // remove tailwind integration here
});
