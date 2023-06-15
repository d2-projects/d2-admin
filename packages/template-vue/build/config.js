import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
// packages
import ejs from 'ejs'
// vite
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import VirtualHtml from 'vite-plugin-virtual-html'
import { visualizer as Visualizer } from 'rollup-plugin-visualizer'
// assets
import { d2LogoSvg } from '@d2-framework/design-assets'
import { scanProjects } from './utils/app.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(async () => {
  const { pages } = await scanProjects()
  return {
    plugins: [
      VirtualHtml({
        pages,
        indexPage: 'index',
        data: {
          icon: d2LogoSvg
        },
        render: (template, data) => ejs.render(template, data)
      }),
      Vue(),
      Jsx(),
      Visualizer({
        open: false
      })
    ],
    resolve: {
      alias: {
        'projects': resolve(__dirname, '../projects'),
      }
    }
  }
})
