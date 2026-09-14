// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://mateuscerejo.com',
  adapter: cloudflare(),
  i18n: {
    locales: ["pt", "en", "jp"],
    defaultLocale: "en",
  }
});