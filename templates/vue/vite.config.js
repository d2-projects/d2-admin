import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'
import { visualizer } from 'rollup-plugin-visualizer'
import { scanProjects } from './build/utils/app.js'

const res = path => resolve(__dirname, path)

const pages = {
  index: '/projects/index/index.html'
}

export default defineConfig(async () => {
  const apps = await scanProjects()
  console.log(apps)
  return {
    plugins: [
      Vue(),
      Jsx(),
      VirtualHtml({
        pages,
        indexPage: 'index',
        data: {
          icon: d2LogoSvg
        }
      }),
      visualizer({
        open: false
      })
    ],
    resolve: {
      alias: {
        'projects': res('projects')
      }
    }
  }
})
