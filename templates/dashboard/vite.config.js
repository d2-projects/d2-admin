import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'

const res = path => resolve(__dirname, path)

const pages = {
  index: '/projects/index/index.html'
}

export default defineConfig({
  plugins: [
    vue(),
    VirtualHtml({
      pages,
      indexPage: 'index',
      data: {
        icon: d2LogoSvg
      }
    })
  ],
  resolve: {
    alias: {
      'projects': res('projects')
    }
  }
})
