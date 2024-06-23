// vite.config.ts
import path from "path"
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "api": {
        target: 'api.mbathamelusi.workers.dev',
        // target: 'http://127.0.0.1:8787',
        changeOrigin: true
      }
    }
  }
})
