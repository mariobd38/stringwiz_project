import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from "vite-plugin-require";

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react({
      // Add this line
      include: "**/*.jsx",

    }), vitePluginRequire.default()],
    server: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                pathRewrite: { '^/api': '' },
            },
        },
    },
  };
});