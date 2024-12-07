import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: 'modern',
      }
    }
  },
  server: {
    open: !process.env.CI,
    port: 9000,
  },
  esbuild: {
    target: 'es2022'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.html': 'text',
      },
    },
  },
  plugins: [
    aurelia({
      useDev: true,
    }),
  ],
});
