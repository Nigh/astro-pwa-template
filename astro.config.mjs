// astro.config.mjs
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  integrations: [
    svelte(),
    AstroPWA({
      registerType: 'prompt',
      manifest: {
        name: 'Astro PWA Starter',
        short_name: 'AstroPWA',
        description: 'Astro + Svelte + Tailwind + DaisyUI PWA',
        theme_color: '#353535',
        background_color: '#353535',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/$/],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
