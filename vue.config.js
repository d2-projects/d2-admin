const CompressionWebpackPlugin = require('compression-webpack-plugin')

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

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'element-ui': 'ELEMENT',
  'js-cookie': 'Cookies',
  'nprogress': 'NProgress',
  'vue-i18n': 'VueI18n',
  'better-scroll': 'BScroll',
  'mockjs': 'Mock',
  'dayjs': 'dayjs',
  'fuse.js': 'Fuse',
  'ua-parser-js': 'UAParser',
  'hotkeys-js': 'hotkeys'
}

// 引入文件的 cdn 链接
const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css',
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.css',
      'https://unpkg.com/flex.css@1.1.7/dist/flex.css'
    ],
    js: [

    ]
  },
  // 生产环境
  build: {
    css: [
      'https://unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css',
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css',
      'https://unpkg.com/flex.css@1.1.7/dist/flex.css'
    ],
    js: [
      'https://unpkg.com/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/element-ui/lib/index.js',
      'https://cdn.bootcss.com/js-cookie/2.2.0/js.cookie.min.js',
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js',
      'https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js',
      'https://unpkg.com/vue-i18n@7.4.2/dist/vue-i18n.min.js',
      'https://unpkg.com/better-scroll@1.12.1/dist/bscroll.min.js',
      'https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js',
      'https://unpkg.com/mockjs@1.0.1-beta3/dist/mock.js',
      'https://unpkg.com/dayjs@1.6.7/dayjs.min.js',
      'https://unpkg.com/fuse.js@3.2.1/dist/fuse.js',
      'https://cdn.jsdelivr.net/npm/ua-parser-js@0.7.18/dist/ua-parser.min.js',
      'https://unpkg.com/hotkeys-js@3.3.6/dist/hotkeys.min.js'
    ]
  }
}

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
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: externals,
        plugins: [
          // gzip
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            test: new RegExp('\\.(js|css|svg|woff|ttf|json|html)$'),
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
          })
        ]
      }
    } else {
      return {
        devServer: {
          disableHostCheck: true
        }
      }
    }
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    /**
     * 添加CDN参数到 htmlWebpackPlugin 配置中
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
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
