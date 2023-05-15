import { resolve } from 'path'
import { fromPairs } from 'lodash'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'
import { visualizer } from 'rollup-plugin-visualizer'
import { scanProjects } from './build/utils/app.js'

const res = path => resolve(__dirname, path)

export default defineConfig(async () => {
  const projects = await scanProjects()
  console.log()
  return {
    plugins: [
      Vue(),
      Jsx(),
      VirtualHtml({
        pages: fromPairs(projects.map(project => [project.name, project.entry])),
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
