import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      //add react-icons to external
      external: ['react-icons/Ai', 'react-router-dom', 'react-router', 'react', 'react-dom'],
    },
  },
})
