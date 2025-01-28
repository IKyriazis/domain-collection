// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 7006,
        host: true
    },
    preview: {
        port: 7006,
        host: true
    }
});
