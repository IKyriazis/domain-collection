// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  server: {
      port: 7006,
      host: true
  },

  preview: {
      port: 7006,
      host: true
  },

  adapter: node({
    mode: 'standalone'
  })
});