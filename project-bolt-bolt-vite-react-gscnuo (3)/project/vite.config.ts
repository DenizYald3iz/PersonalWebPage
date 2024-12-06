import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/editor.scss";`
      }
    }
  }
})