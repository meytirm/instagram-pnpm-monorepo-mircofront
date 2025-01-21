import {defineConfig} from 'vite'
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
      name: 'shell',
      remotes: {
        'auth': 'http://localhost:3001/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: 3000,
    cors: true,
  },
  preview: {
    port: 3000,
    cors: true
  }
})
