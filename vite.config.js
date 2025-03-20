import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Explicitly set terser as the minifier
    terserOptions: {
      compress: {
        // Add compress options here if needed
      }
    }
  }
}) 