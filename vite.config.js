import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react': 'https://cdn.skypack.dev/react@17',
      'react-dom': 'https://cdn.skypack.dev/react-dom@17',
      'react-router-dom': 'https://cdn.skypack.dev/react-router-dom@5',
      'react-icons': 'https://cdn.skypack.dev/react-icons@4',
    }
  },
  plugins: [react()],
  server: { port: 3000 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
