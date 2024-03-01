// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs', // Output directory
    assetsDir: '.', // Assets directory (relative to outDir)
  },
});
