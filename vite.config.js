import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRouter from 'vite-plugin-react-router'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react-icons/Ai','react-icons/Bs' ,'./react-router-dom', './react-router']
    }
  },
  plugins: [react(), reactRouter() ],
})
