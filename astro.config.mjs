// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // This fixes the "Invalid URL" error
  site: "https://sanjeewa.dev",

  integrations: [sitemap()]
});