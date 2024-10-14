import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      external: ["@fortawesome/fontawesome-svg-core", '@fortawesome/free-brands-svg-icons', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons'], // list all external packages here
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
