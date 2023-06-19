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
      name: 'D2DesignAssets',
      fileName: 'd2-design-assets',
    }
  }
})
