const path = require('path')

// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/d2-admin-preview/', // 根据你的实际情况更改这里
  lintOnSave: true,
  devServer: {
    publicPath: '/d2-admin-preview/' // 和 baseUrl 保持一致
  },
  // webpack 设置
  chainWebpack: config => {
    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
    // i18n
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'd2-[name]'
      })
      .end()
    // image
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
  }
}
