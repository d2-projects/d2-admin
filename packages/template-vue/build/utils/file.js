import fs from 'fs-extra'
import glob from 'fast-glob'

export async function folderScan ({ pattern = '**/*' } = {}) {
  const cwd = process.cwd()
  const files = (
    await glob(pattern, {
      absolute: true,
      ignore: [
        'node_modules/**',
        'dist/**'
      ]
    })
  )
    .map(file => file.replace(new RegExp(`^${cwd}/`), ''))
    .sort()
  return files
}

export async function readFile (filePath) {
  return (await fs.readFile(filePath)).toString()
}
