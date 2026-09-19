import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path aliases — use @/ instead of ../../
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Dev server config
  server: {
    port: 5173,
    open: true,       // auto-open browser
    strictPort: false, // try next port if 5173 is busy
  },

  // Production build options
  build: {
    outDir: 'dist',
    sourcemap: false,   // disable sourcemaps in prod (hides source code)
    minify: 'esbuild',  // fast minification
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  // Preview server (for testing the prod build locally)
  preview: {
    port: 4173,
  },
})
