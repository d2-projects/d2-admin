import { resolve } from 'path'
import { fromPairs } from 'lodash-es'
import { defineConfig } from 'vite'
import ejs from 'ejs'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'
import { d2LogoSvg } from '@d2-framework/assets'
import VirtualHtml from 'vite-plugin-virtual-html'
import { visualizer } from 'rollup-plugin-visualizer'
import { objectToAscii, tableToAscii } from '@d2-framework/utils'
import { options } from './build/utils/options.js'
import { scanProjects } from './build/utils/app.js'

const res = path => resolve(__dirname, path)

export default defineConfig(async () => {
  const projects = await scanProjects()
  console.log(projects)
  console.log(objectToAscii({
    title: 'arguments',
    data: options
  }))
  console.log(tableToAscii({
    title: 'projects',
    columns: [
      { label: 'project', key: 'name'   },
      { label: 'entry'  , key: 'entry'  },
      { label: 'build'  , key: 'build'  },
      { label: 'output' , key: 'output' },
    ],
    formatters: {
      build: value => value ? 'yes' : 'no',
      output: value => value || '-'
    },
    data: projects,
  }))
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
        'projects': res('projects')
      }
    }
  }
})
