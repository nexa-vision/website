import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: '/', // important for S3 routing
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // ✅ Only real plugins here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
