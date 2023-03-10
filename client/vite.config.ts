import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    // ! using open: true will cause docker to fail
    // open: true
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
