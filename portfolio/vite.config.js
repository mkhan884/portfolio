import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    rollupOptions: {
      external: []
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@fortawesome/fontawesome-svg-core': '/node_modules/@fortawesome/fontawesome-svg-core/index.js',
      '@fortawesome/free-solid-svg-icons': '/node_modules/@fortawesome/free-solid-svg-icons/index.js',
      '@fortawesome/free-brands-svg-icons': '/node_modules/@fortawesome/free-brands-svg-icons/index.js',
      '@fortawesome/vue-fontawesome': '/node_modules/@fortawesome/vue-fontawesome/index.js'
    },
    },
  });
