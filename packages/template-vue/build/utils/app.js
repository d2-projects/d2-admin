import { resolve } from 'path'
import { fromPairs } from 'lodash-es'
import glob from 'fast-glob'
import { options } from './options.js'
import { printAsciiObject, printAsciiTable } from '@d2-framework/utils'

const metaDefault = {
  title: '',
  version: '',
  description: '',
}

export async function scanProjects ({} = {}) {
  console.log(1)
  const entries = await glob('projects/*/index.html')
  console.log(entries)
  const projects = await Promise.all(entries.map(async entry => {
    const name = entry.match(/projects\/(.+)\/index.html/)[1]
    const meta = await import(resolve(entry, '../project.js'))
    const join = options.projects.length === 0 || options.projects.includes(name)
    return {
      name,
      entry: '/' + entry,
      join,
      meta: Object.assign({}, metaDefault, meta),
      output: join ? name : '',
    }
  }))
  if (options.index && options.projects.length === 1) {
    projects[projects.findIndex(p => p.name === options.projects[0])].output = 'index'
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
      join: value => value ? 'yes' : '-',
      output: value => value || '-'
    },
    data: projects,
  })
  const pages = fromPairs(
    projects
      .filter(project => project.join)
      .map(project => [
        project.output,
        project.entry
      ])
  )
  return {
    projects,
    pages,
  }
}
