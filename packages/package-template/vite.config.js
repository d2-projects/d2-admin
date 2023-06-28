import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      lib: resolve(__dirname, 'lib'),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'PackageTemplate',
      fileName: 'package-template',
    }
  }
})
