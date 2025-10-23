import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  server: {
    // Prefer 5174; if it's occupied Vite will bump to the next. We'll list 5174-5176 to allow small range.
    port: 5174,
    proxy: {
      '/api': {
        // Point to local backend started by run_server.py
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
      '/static': {
        // Proxy static uploads (avatars, product images) to backend FastAPI static mount
        target: 'http://localhost:8001',
        changeOrigin: true,
      }
    }
  }
})


