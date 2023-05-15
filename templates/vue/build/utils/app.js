import { resolve } from 'path'
import glob from 'fast-glob'
import { options } from './options.js'

const metaDefault = {
  title: '',
  version: '',
  description: '',
}

// projects
// [
//   {
//     name: 'project1',
//     entry: 'project1/main.js',
//     build: true,
//     output: 'project1'
//   }
// ]
export async function scanProjects ({} = {}) {
  const entries = await glob('projects/*/index.html')
  const projects = entries.map(entry => {
    const name = entry.match(/projects\/(.+)\/index.html/)[1]
    const meta = require(resolve(entry, '../project.js'))
    const build = options.project.length === 0 || options.project.includes(name)
    return {
      name,
      entry: '/' + entry,
      build,
      meta: Object.assign({}, metaDefault, meta),
      output: build ? name : ''
    }
  })
  if (options.index && options.project.length === 1) {
    projects[projects.findIndex(project => project.name === options.project[0])].output = 'index'
  }
  return projects
}
