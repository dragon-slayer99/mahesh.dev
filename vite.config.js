import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add custom plugin for critical CSS
    {
      name: 'critical-css',
      writeBundle: async () => {
        if (process.env.NODE_ENV === 'production') {
          const critical = require('critical');

          try {
            await critical.generate({
              base: 'dist/',
              src: 'index.html',
              dest: 'index.html',
              width: 1300,
              height: 900,
              inline: true,
              minify: true,
              extract: true,
              penthouse: {
                blockJSRequests: false,
              }
            });
            console.log('✅ Critical CSS generated!');
          } catch (err) {
            console.error('❌ Critical CSS failed:', err);
          }
        }
      }
    }
  ],
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
