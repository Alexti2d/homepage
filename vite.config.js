// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        colibri: resolve(__dirname, 'background/colibri/index.html'),
        cube: resolve(__dirname, 'background/cube/index.html'),
        emoji: resolve(__dirname, 'background/emoji/index.html'),
        gradient: resolve(__dirname, 'background/gradient/index.html'),
        matrice: resolve(__dirname, 'background/matrice/index.html'),
        rocketman: resolve(__dirname, 'background/rocketman/index.html'),
        stars: resolve(__dirname, 'background/stars/index.html'),
        synthwave: resolve(__dirname, 'background/synthwave/index.html'),
        travel: resolve(__dirname, 'background/travel/index.html'),
        voiture: resolve(__dirname, 'background/voiture/index.html'),
      },
    },
  },
})