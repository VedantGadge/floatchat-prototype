import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Vite config for Vercel
// - Use outDir 'dist' (Vercel Vite preset expects 'dist')
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [
      {
        // Strip version suffix like "package@1.2.3" -> "package"
        find: /^(.*)@\d+(?:\.\d+){1,2}$/,
        replacement: '$1',
      },
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    target: 'esnext',
  },
})