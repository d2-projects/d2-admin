import { resolve } from 'path'
import { fromPairs } from 'lodash'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'
import { visualizer } from 'rollup-plugin-visualizer'
import { objectToAscii } from '@d2-framework/utils'
import { scanProjects } from './build/utils/app.js'

console.log(objectToAscii({
  title: 'Vite config',
  data: {
    name: 'Liy'
  }
}))

// https://github.com/vuejs/core/issues/8303
var __defProp = Object.defineProperty
var __name = (target, value) => __defProp(target, 'name', { value, configurable: true })
globalThis.__name = __name

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
