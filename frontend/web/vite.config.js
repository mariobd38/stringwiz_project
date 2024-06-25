import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from "vite-plugin-require";

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react({
      include: "**/*.jsx",

    }), vitePluginRequire.default()],
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                pathRewrite: { '^/api': '' },
            },
            '/api/upload': {
              target: 'http://localhost:8080',
              changeOrigin: true,
              secure: false,
              pathRewrite: { '^/api/upload': '/api/upload' },
          },
        },
        
    },
  };
});