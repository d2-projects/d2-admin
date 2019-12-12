const CompressionWebpackPlugin = require('compression-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

const VueFilenameInjector = require('@d2-projects/vue-filename-injector')

const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

// 基础路径 注意发布之前要先修改这里
let publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'

module.exports = {
  // 根据你的实际情况更改这里
  publicPath,
  lintOnSave: true,
  devServer: {
    publicPath // 和 publicPath 保持一致
  },
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        data: `@import '~@/assets/style/public.scss';`
      }
    }
  },
  configureWebpack: {
    // 关闭文件过大提示，利于打包加快速度
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
    // 公共代码抽离和代码分割
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            minSize: 30000,
            minChunks: 1,
            chunks: 'initial',
            priority: 1 // 设置处理的优先级，数值越大越优先处理
          },
          commons: {
            test: /[\\/]src[\\/]common[\\/]/,
            name: 'commons',
            minSize: 30000,
            minChunks: 3,
            chunks: 'initial',
            priority: -1,
            reuseExistingChunk: true // 允许使用已经存在的代码块
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      },
      minimizer: [
        // 自定义js优化配置，将会覆盖默认配置
        new UglifyJsPlugin({
          exclude: /\.min\.js$/, // 过滤掉以 '.min.js' 结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
          cache: true,
          parallel: true, // 开启并行压缩，充分利用cpu
          sourceMap: false,
          extractComments: false, // 移除注释
          uglifyOptions: {
            compress: {
              unused: true,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            },
            output: {
              comments: false
            },
            warnings: false
          }
        }),
        // 用于优化css文件
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessorOptions: {
            safe: true,
            autoprefixer: { disable: true }, 
            mergeLonghand: false,
            discardComments: {
              removeAll: true // 移除注释
            }
          },
          canPrint: true
        })
      ]
    },
    plugins: [
      // runtime 相关的代码嵌入 indexe.html
      new HtmlWebpackPlugin({
        title: 'fle-cli',
        filename: 'index.html',
        inject: true,
        chunks: ['runtime', 'app'],
        chunksSortMode: 'dependency',
        minify: {/* */}
      }),
      new InlineManifestWebpackPlugin('runtime'),
      // gzip
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        test: new RegExp('\\.(js|css|svg|woff|ttf|json|html)$'),
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ]
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins
      .delete('prefetch')
      .delete('preload')
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
      .symlinks(true)
    config
      .plugin('theme-color-replacer')
      .use(ThemeColorReplacer, [{
        fileName: 'css/theme-colors.[contenthash:8].css',
        matchColors: [
          ...forElementUI.getElementUISeries(process.env.VUE_APP_ELEMENT_COLOR) // Element-ui主色系列
        ],
        externalCssFiles: [ './node_modules/element-ui/lib/theme-chalk/index.css' ], // optional, String or string array. Set external css files (such as cdn css) to extract colors.
        changeSelector: forElementUI.changeSelector
      }])
    config
      // 开发环境
      .when(process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )
      // 预览环境构建 vue-loader 添加 filename
      .when(process.env.VUE_APP_SCOURCE_LINK === 'TRUE',
        VueFilenameInjector(config, {
          propName: process.env.VUE_APP_SOURCE_VIEWER_PROP_NAME
        })
      )
    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
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
    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
    // 重新设置 alias
    config.resolve.alias
      .set('@api', resolve('src/api'))
    // 判断环境加入模拟数据
    const entry = config.entry('app')
    if (process.env.VUE_APP_BUILD_MODE !== 'NOMOCK') {
      entry
        .add('@/mock')
        .end()
    }
  },
  // 不输出 map 文件
  productionSourceMap: false,
  // i18n
  pluginOptions: {
    i18n: {
      locale: 'zh-chs',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
