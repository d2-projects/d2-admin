import ejs from 'ejs'
import { resolve } from 'path'
import { fromPairs } from 'lodash-es'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'
import { visualizer } from 'rollup-plugin-visualizer'
import { scanProjects } from './build/utils/app.js'

export default defineConfig(async () => {
  const projects = await scanProjects()
  return {
    plugins: [
      VirtualHtml({
        pages: fromPairs(projects.map(project => [project.name, project.entry])),
        indexPage: 'index',
        data: {
          icon: d2LogoSvg
        },
        render: (template, data) => ejs.render(template, data)
      }),
      Vue(),
      Jsx(),
      visualizer({
        open: false
      })
    ],
    resolve: {
      alias: {
        'projects': resolve(__dirname, 'projects')
      }
    }
  }
})
