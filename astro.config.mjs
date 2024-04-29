import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  server: {
    host: true,
  },
  site: "https://ruta-simple.vercel.app",
});
