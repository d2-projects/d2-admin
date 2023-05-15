import { resolve } from 'path'
import glob from 'fast-glob'
import { options } from './options.js'

// projects
// [
//   {
//     name: 'app1',
//     entry: 'app1/main.js',
//     build: true,
//     output: 'app1'
//   }
// ]
export async function scanProjects ({} = {}) {
  const entries = await glob('projects/*/index.html')
  const projects = entries.map(entry => {
    const name = entry.match(/projects\/(.+)\/index.html/)[1]
    const meta = require(resolve(entry, '../meta.js'))
    const build = options.app.length === 0 || options.app.includes(name)
    return {
      name,
      entry: '/' + entry,
      build,
      meta: {
        name: meta.name || '',
        title: meta.title || '',
        version: meta.version || '',
        description: meta.description || '',
      },
      output: build ? name : ''
    }
  })
  if (options.index && options.app.length === 1) {
    projects[projects.findIndex(app => app.name === options.app[0])].output = 'index'
  }
  return projects
}
