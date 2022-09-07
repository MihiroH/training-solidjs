import path from 'path'

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
})
