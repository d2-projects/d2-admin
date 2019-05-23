const path = require('path')
const loaderUtils = require('loader-utils')

const { blockName, defaultPropName } = require('./config.js')

module.exports = function (content /*, map, meta */) {
  const loaderContext = this

  const {
    rootContext,
    resourcePath
  } = loaderContext

  const context = rootContext || process.cwd()
  const options = loaderUtils.getOptions(loaderContext) || {}
  const rawShortFilePath = path
    .relative(context, resourcePath)
    .replace(/^(\.\.[\/\\])+/, '')

  const propName = options.propName || defaultPropName

  content += `
<${blockName}>
export default function (Component) {
  Component.options.${propName} = ${JSON.stringify(rawShortFilePath.replace(/\\/g, '/'))}
}
</${blockName}>
`
  return content
}
