// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: process.env.NODE_ENV === 'production' ? 'https://luneflu.github.io' : undefined,
    base: process.env.NODE_ENV === 'production' ? '/Calina' : undefined,
    vite: {
        plugins: [tailwindcss()],
    },
});
