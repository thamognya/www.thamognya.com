import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte(), solidJs(), preact(), lit(), alpinejs(), tailwind({
    config: {
      path: "./tailwind.config.cjs"
    },
    config: {
      applyBaseStyles: false
    }
  }), mdx()],
  output: "server",
  adapter: vercel()
});