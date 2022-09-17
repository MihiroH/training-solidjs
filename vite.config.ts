import path from 'path'

import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import vitePluginRequire from 'vite-plugin-require'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin(),
    vitePluginRequire(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Anton',
          },
          {
            name: 'Noto Sans JP',
            styles: 'wght@500;700',
          },
        ],
      },
    }),
  ],
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
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/styles";',
      },
    },
  },
})
