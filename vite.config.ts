import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'CalcuFun!',
        short_name: 'CalcuFun',
        description:
          'CalcuFun is an educational and fun app designed to develop mental math skills for children.',
        theme_color: '#35654d',
        background_color: '#35654d',
        display: 'standalone',
        display_override: ['fullscreen', 'minimal-ui', 'standalone'],
        orientation: 'portrait',
        screenshots: [
          {
            src: 'screenshot.png',
            sizes: '347x719',
            type: 'image/webp',
            platform: 'mobile',
            form_factor: 'narrow',
          },
          {
            src: 'screenshot2.png',
            sizes: '347x719',
            type: 'image/png',
            platform: 'mobile',
            form_factor: 'narrow',
          },
          {
            src: 'screenshot3.png',
            sizes: '347x719',
            type: 'image/png',
            platform: 'mobile',
            form_factor: 'narrow',
          },
          {
            src: 'og.png',
            sizes: '710x630',
            type: 'image/png',
            platform: 'desktop',
            form_factor: 'wide',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff,woff2,ttf,otf,mp3}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@init': '/src/init',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
});
