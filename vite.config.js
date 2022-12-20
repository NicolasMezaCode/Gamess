import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react({
    input: './src/main.jsx',
  })],
  server: { port: 3000 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react-icons/Ai','react-icons/Bs' ,'react-router-dom', 'react-router', 'react', 'react-dom'],
      output: {
        globals:{
          react: 'React',
          'react-router-dom': 'ReactRouterDOM',
          'react-router': 'ReactRouter',
          'react-dom': 'ReactDOM'
        }},
    },
  },
})
