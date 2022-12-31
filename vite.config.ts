import { defineConfig } from 'vite'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  appType: 'mpa',
  esbuild: {
    target: 'es2020',
    sourcemap: false,
    sourcesContent: false,
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
})
