import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        ceksurat: resolve(__dirname, 'ceksurat.html'),
        faq: resolve(__dirname, 'faq.html'),
        kebijakanPrivasi: resolve(__dirname, 'kebijakan-privasi.html'),
      },
    },
  },
});
