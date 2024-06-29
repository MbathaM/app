import path from "path";

import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     api: {
  //       target: "https://api.mbathamelusi.workers.dev",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
