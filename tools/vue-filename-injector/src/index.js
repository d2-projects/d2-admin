const { blockName } = require('./lib/config.js')

// for chainWebpack
module.exports = function(config, options) {
  config.module
    .rule('vue')
    .use('vue-filename-injector')
    .loader(require.resolve('./lib/injector.js'))
    .options(options)
    .after('vue-loader')
    .end()
  config.module
    .rule('')
    .resourceQuery(new RegExp(`blockType=${blockName}`))
    .use('vue-filename-injector-loader')
    .loader(require.resolve('./lib/loader.js'))
    .end()
}
