import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  server: {
    // Use 5174 to avoid conflicts and match current setup
    port: 5174,
    proxy: {
      '/api': {
        // Point to local backend started by run_server.py
        target: 'http://localhost:8001',
        changeOrigin: true,
      }
    }
  }
})


