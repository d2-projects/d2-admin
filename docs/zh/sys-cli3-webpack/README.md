---
sidebar: auto
---

# cli 和 webpack 配置

## vue.config.js

这里列出来所有可用的选项及其默认值 (所有的选项都不是必选项)

``` js
module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  baseUrl: '/',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: '',

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  compiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。
  // 通过这个选项可以显式转译一个依赖。
  transpileDependencies: [/* string or regex */],

  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {}
  },

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
```

## 配置 webpack

### 基础配置

调整 webpack 配置最简单的方式就是在 `vue.config.js` 中的 `configureWebpack` 选项提供一个对象：

``` js
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```

该对象将会被 [webpack-merge](https://github.com/survivejs/webpack-merge) 合并入最终的 webpack 配置。

如果你需要有条件的基于环境配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：

``` js
// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
```

### 操作链 (高级)

webpack 内部的配置是通过 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 维护的。这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。

它允许我们更细粒度的控制其内部配置。这里有一些例子：

#### 编译一个依赖模块

默认情况下 Babel 配置会跳过：

``` js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('js')
        .include
          .add(/some-module-to-transpile/)
  }
}
```

#### 修改 Loader 选项

``` js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('scss')
      .use('sass-loader')
      .tap(options =>
        merge(options, {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        })
      )
  }
}
```


#### 替换已有的基础的 Loader

如果你想要替换一个已有的 [基础 loader](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js)，例如为内联的 SVG 文件使用 `vue-svg-loader` 而不是加载这个文件：

``` js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
        .loader('vue-svg-loader')
  }
}
```

#### 修改插件选项

``` js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        return [/* new args to pass to html-webpack-plugin's constructor */]
      })
  }
}
```

你需要熟悉 [webpack-chain 的 API](https://github.com/mozilla-neutrino/webpack-chain#getting-started) 并[阅读一些源码](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config)以便了解如何权衡这个选项的全部能量，但是它给了你比直接修改 webpack 配置中的值更生动且安全的方式。

比方说你想要将 `index.html` 默认的路径从 */Users/username/proj/public/index.html* 改为 */Users/username/proj/app/templates/index.html*。通过参考 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options) 你能看到一个可以传入的选项列表。我们可以下列配置传入一个新的模板路径来改变它：

``` js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = '/Users/username/proj/app/templates/index.html'
        return args
      })
  }
}
```

你可以通过我们接下来要讨论的 **`vue inspect`** 实用工具来确认变更。

### 审查项目的 webpack 配置

因为 `@vue/cli-service` 抽象了 webpack 配置，所以理解配置中包含的东西会比较困难，尤其是当你打算自行对其调整的时候。

`vue-cli-service` 暴露了 `inspect` 命令用于审查解析好的 webpack 配置。那个全局的 `vue` 可执行程序同样提供了 `inspect` 命令，这个命令只是简单的把 `vue-cli-service inspect` 代理到了你的项目中。

默认情况下该命令会打印到 stdout，当然为了更易于查阅你可以将其重定向到一个文件：

``` sh
vue inspect > output.js
```

注意它输出的并不是一个有效的 webpack 配置文件，而是一个用于审查的被序列化的格式。

你也可以审查某一个路径来缩小配置的范围：

``` sh
# 只审查第一条规则
vue inspect module.rules.0
```

### 以一个文件的方式使用解析好的配置

有些外部工具可能需要通过一个文件访问解析好的 webpack 配置，比如那些需要提供 webpack 配置路径的 IDE 或 CLI。在这种情况下你可以使用如下路径：

```
<projectRoot>/node_modules/@vue/cli-service/webpack.config.js
```

该文件会动态解析并输出 `vue-cli-service` 命令中使用的相同的 webpack 配置，包括那些来自插件甚至是你自定义的配置。

## 处理静态资源

### 相对路径导入

当你在 JavaScript、CSS 或 `*.vue` 文件中使用相对路径引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 `<img src="...">`、`background: url(...)` 和 CSS `@import` 的资源 URL **都会被解析为一个模块依赖**。

例如，`url(./image.png)` 会被翻译为 `require('./image.png')`，而：

``` html
<img src="../image.png">
```

将会被编译到：

``` js
createElement('img', { attrs: { src: require('../image.png') }})
```

在其内部，我们通过 `file-loader` 用哈希版本和正确的公共基础路径来决定最终的文件路径，再用 `url-loader` 将小于 10kb 的资源有条件的内联，以减少 HTTP 请求的数量。

#### URL 转换规则

- 如果 URL 是一个绝对路径 (例如 `/images/foo.png`)，它将会被保留为原有的样子。

- 如果 URL 以 `.` 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。

- 如果 URL 以 `~` 开头，其后的任何内容都会作为一个模块请求被解释。这意味着你甚至可以引用 node 模块中的资源：

  ``` html
  <img src="~/some-npm-package/foo.png">
  ```

- 如果 URL 以 `@` 开头，它也会作为一个模块请求被解释。它的用处在于 Vue CLI 默认会设置一个指向 `<projectRoot>/src` 的别名 `@`。

### `public` 文件夹

任何放置在 `public` 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们。

注意我们推荐将资源作为你的模块依赖图的一部分导入，这样它们会通过 webpack 的处理并获得如下好处：

- 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。
- 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。
- 最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们到老版本。

`public` 目录提供的是一个**逃生通道**，当你通过绝对路径引用它时，你需要留意你的应用将会部署到哪里。如果你的应用没有部署在域名的根部，那么你需要为你的 URL 配置基础路径前缀：

- 在 `public/index.html` 中，你需要通过 `<%= webpackConfig.output.publicPath %>` 设置链接前缀：

  ``` html
  <link rel="shortcut icon" href="<%= webpackConfig.output.publicPath %>favicon.ico">
  ```

- 在模板中，你首先需要向你的组件传入基础 URL：

  ``` js
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
  ```

  Then:

  ``` html
  <img :src="`${baseUrl}my-image.png`">
  ```

#### 何时使用 `public` 文件夹

- 你需要在构建输出中指定一个文件的名字。
- 你有上千个图片，需要动态引用它们的路径。
- 有些库可能和 webpack 不兼容，这时你除了将其用一个独立的 `<script>` 标签引入没有别的选择。

## 环境变量和模式

### 概述

你可以替换你的项目根目录中的下列文件来指定环境变量：

``` sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

一个环境文件只包含环境变量的“键=值”对：

```
FOO=bar
VUE_APP_SECRET=secret
```

被载入的变量将会对 `vue-cli-service` 的所有命令、插件和依赖可用。

### 模式

**模式**是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：

- `development` 模式用于 `vue-cli-service serve`
- `production` 模式用于 `vue-cli-service build` 和 `vue-cli-service test:e2e`
- `test` 模式用于 `vue-cli-service test:unit`

注意模式不同于 `NODE_ENV`，因为一个模式可以包含多个环境变量。说到这里，每个模式都会将 `NODE_ENV` 的值设置为模式的名称——比如在 development 模式下 `NODE_ENV` 的值会被设置为 `"development"`。

你可以通过为 `.env` 文件增加后缀来设置某个模式下的环境变量。比如，如果你在项目根目录创建一个名为 `.env.development` 的文件，那么在这个文件里声明过的变量就只会在 development 模式下被载入。

你可以通过传递 `--mode` 选项标记为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，请在你的 `package.json` 脚本中加入：

```
"dev-build": "vue-cli-service build --mode development",
```

### 在客户端侧代码中使用环境变量

只有以 `VUE_APP_` 开头的变量会被 `webpack.DefinePlugin` 静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：

``` js
console.log(process.env.VUE_APP_SECRET)
```

在构建过程中，`process.env.VUE_APP_SECRET` 将会被相应的值所取代。在 `VUE_APP_SECRET=secret` 的情况下，它会被替换为 `"sercet"`。

除了 `VUE_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

- `NODE_ENV` - 会是 `"development"`、`"production"` 或 `"test"` 中的一个。具体的值取决于应用运行的[模式](#模式)。
- `BASE_URL` - 会和 `vue.config.js` 中的 `baseUrl` 选项相符，即你的应用会部署到的基础路径。

### Index HTML 中的环境变量

通过 [lodash 模板插入](https://lodash.com/docs/4.17.5#template)，所有解析出来的环境变量在 `public/index.html` 是可用的：

- `<%= VAR %>` 用于非转义插入；
- `<%- VAR %>` 用于 HTML 转义后的插入；
- `<% expression %>` 用于 JavaScript 控制流。

举个例子，为了引用被拷贝到 `public` 根目录的静态资源，你会用到 `BASE_URL` 变量：

``` html
<link rel="shortcut icon" href="<%= BASE_URL %>favicon.ico">
```

### 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 `.env.local` 文件取而代之。本地环境文件默认会被忽略，且出现在 `.gitignore` 中。

`.local` 也可以加在指定模式的环境文件上，比如 `.env.development.local` 将会在 development 模式下被载入，且被 git 忽略。

::: tip
为了方便 D2Admin 的开发者更快速上手 vue-cli3 的配置方式，摘抄了 [vue-docs-zh-cn](https://github.com/vuejs/vue-docs-zh-cn) 项目中有用的几个部分，几乎没有修改，望读着知悉。

移至 [vue-cli3 官方网站](https://cli.vuejs.org/zh/) 查阅完整 vue-cli3 官方文档。
:::