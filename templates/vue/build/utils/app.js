import { resolve } from 'path'
import glob from 'fast-glob'
import { options } from './options.js'
import { objectToAscii, tableToAscii } from '@d2-framework/utils'

const metaDefault = {
  title: '',
  version: '',
  description: '',
}

export async function scanProjects ({} = {}) {
  const entries = await glob('projects/*/index.html');
  const projects = await Promise.all(entries.map(async entry => {
    const name = entry.match(/projects\/(.+)\/index.html/)[1];
    const { default: meta } = await import(resolve(entry, '../project.js'));
    console.log('meta')
    console.log(meta);
    const build = options.project.length === 0 || options.project.includes(name);
    return {
      name,
      entry: '/' + entry,
      build,
      meta: Object.assign({}, metaDefault, meta),
      output: build ? name : '',
    };
  }));
  if (options.index && options.project.length === 1) {
    projects[projects.findIndex(project => project.name === options.project[0])].output = 'index';
  }
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
  return projects;
}
