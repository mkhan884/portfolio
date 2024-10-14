import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Check if we're in production
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: []
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
