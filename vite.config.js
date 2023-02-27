import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

//import { dependencies } from './package.json';

// for split into chunks dependencies
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

const __dirname = resolve();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@api': resolve(__dirname, 'src/api'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@context': resolve(__dirname, 'src/context'),
      '@models': resolve(__dirname, 'src/models'),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react'],
          //...renderChunks(dependencies),
        },
      },
    },
  },
});
