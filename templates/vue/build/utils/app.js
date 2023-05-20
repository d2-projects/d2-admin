import { resolve } from 'path'
import glob from 'fast-glob'
import { options } from './options.js'
import { printAsciiObject, printAsciiTable } from '@d2-framework/utils'

const metaDefault = {
  title: '',
  version: '',
  description: '',
}

export async function scanProjects ({} = {}) {
  const entries = await glob('projects/*/index.html')
  const projects = await Promise.all(entries.map(async entry => {
    const name = entry.match(/projects\/(.+)\/index.html/)[1]
    const meta = await import(resolve(entry, '../project.js'))
    const join = options.project.length === 0 || options.project.includes(name)
    return {
      name,
      entry: '/' + entry,
      join,
      meta: Object.assign({}, metaDefault, meta),
      output: join ? name : '',
    }
  }))
  if (options.index && options.project.length === 1) {
    projects[projects.findIndex(project => project.name === options.project[0])].output = 'index'
  }
  printAsciiObject({
    title: 'arguments',
    data: options
  })
  printAsciiTable({
    title: 'projects',
    columns: [
      { label: 'project', key: 'name'   },
      { label: 'entry'  , key: 'entry'  },
      { label: 'join'   , key: 'join'   },
      { label: 'output' , key: 'output' },
    ],
    formatters: {
      join: value => value ? 'yes' : 'no',
      output: value => value || '-'
    },
    data: projects,
  })
  return projects
}
