'use strict'
// 检查依赖版本
require('./check-versions')()

// 设置 NODE_ENV
process.env.NODE_ENV = 'production'

// loading模块 https://www.npmjs.com/package/ora
const ora = require('ora')
// 删除模块 https://www.npmjs.com/package/rimraf
const rm = require('rimraf')
// path
const path = require('path')
// 输出彩色的文字 https://www.npmjs.com/package/chalk
const chalk = require('chalk')
// webpack
const webpack = require('webpack')
// 设置 这个文件里只用到了 config.build
const config = require('../config')
// webpack 生产环境的核心配置文件
const webpackConfig = require('./webpack.prod.conf')

// 定义一个 loading 并开始
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // if you are using ts-loader, setting this to true will make tyescript errors show up during build
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
