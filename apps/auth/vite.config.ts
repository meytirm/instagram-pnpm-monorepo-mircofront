import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: "es2022"
  },
  esbuild: {
    target: "es2022"
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    }
  },
  plugins: [
    react(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './Auth': './src/App.tsx'
      },
      shared: ['react', 'react-dom']
    })],
  server: {
    port: 3001,
    cors: true
  },
  preview: {
    port: 3001,
    cors: true
  }
})
