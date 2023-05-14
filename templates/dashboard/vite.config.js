import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'

const pages = {
  index: {
    template: '/index.html',
    data: {
      icon: d2LogoSvg
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
