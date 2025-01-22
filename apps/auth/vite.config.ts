import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  esbuild: {
    target: 'esnext',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  plugins: [
    react(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './Auth': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3001,
    cors: true,
  },
  preview: {
    port: 3001,
    cors: true,
  },
})
