import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/mahesh.dev",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'animations': ['framer-motion'],
          'icons': ['lucide-react'],
          'vendor': ['react', 'react-dom']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    }
  },
  assetsInclude: ['**/*.webp', '**/*.avif'],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
