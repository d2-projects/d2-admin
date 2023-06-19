import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'D2PackageTemplate',
      fileName: 'd2-package-template',
    }
  }
})
