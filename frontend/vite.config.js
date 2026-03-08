import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    proxy: {
      '/api/broadway': {
        target: 'https://www.broadway.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/broadway/, ''),
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Broadway Shows',
        short_name: 'Broadway',
        description: 'Browse and track Broadway shows in NYC',
        theme_color: '#1e40af',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // Skip waiting so new SW activates immediately
        skipWaiting: true,
        clientsClaim: true,
        // Don't precache index.html — always fetch fresh from network
        navigateFallback: null,
        runtimeCaching: [
          {
            // HTML pages: network first, fall back to cache
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages',
              expiration: { maxAgeSeconds: 60 * 60 }, // 1 hour
            },
          },
          {
            // JS/CSS with hashed filenames: cache first (hash ensures freshness)
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-assets',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 }, // 1 day
            },
          },
          {
            // Images: cache first with expiration
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 7 }, // 7 days
            },
          },
        ],
      },
    }),
  ],
})
