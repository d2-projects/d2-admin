import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      'lib': '/lib'
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      name: 'D2Assets',
      fileName: 'index',
    }
  }
})
