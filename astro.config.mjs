// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://roadconsult.ro',
  integrations: [
    sitemap({
      filter: (page) => !/\/(multumim|thank-you|danke|concepte)\//.test(page),
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
