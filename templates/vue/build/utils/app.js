import { resolve } from 'path'
import glob from 'fast-glob'
import { options } from './options.js'

const isPlayground = name => name.startsWith('playground')

// apps
// [
//   {
//     name: 'app1',
//     entry: 'app1/main.js',
//     build: true,
//     output: 'app1'
//   }
// ]
export async function scanApps () {
  const entries = await glob('projects/*/index.html')
  console.log(entries)
  const apps = entries.map(entry => {
    const name = entry.match(/projects\/(.+)\/index.html/)[1]
    console.log(name)
    console.log(resolve(entry, '../define.js'))
    const meta = require(resolve(entry, '../define.js'))
    console.log(meta)
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
    apps[apps.findIndex(app => app.name === options.app[0])].output = 'index'
  }
  // 将所有 playground 开头的子项目移动到最后
  apps.sort((a, b) => {
    if (isPlayground(a.name) && !isPlayground(b.name)) return 1
    if (!isPlayground(a.name) && isPlayground(b.name)) return -1
    return 0
  })
  return apps
}
