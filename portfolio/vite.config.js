import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Check if we are on Vercel
const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: isVercel
        ? [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome',
            'vuetify',
            'vuetify/components',
            'vuetify/directives',
            'vuetify/styles',
          ]
        : [],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
