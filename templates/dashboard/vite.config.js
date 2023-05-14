import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { icon } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'

const pages = {
  index: {
    template: '/index.html',
    data: {
      icon
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    VirtualHtml({
      pages,
      indexPage: 'index',
    })
  ],
})
