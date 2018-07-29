# 快速上手

本文将会带领您从 0 开始使用 D2Admin 创建下面的页面：

![](http://fairyever.qiniudn.com/20180729102354.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 前置知识

使用 D2Admin 首先组要有以下前置知识：

* 首先需要熟悉 web 开发基础三样：[HTML CSS JavaScript](http://www.w3school.com.cn/)
* 会使用 [vue.js](https://cn.vuejs.org/)

如果您了解以下技术，在使用本项目进行您的开发时会更加得心应手：

* [ES6](http://es6.ruanyifeng.com/)
* [sass](https://www.sass.hk/guide/)

## 准备

在上手之前，建议您先大致浏览以下章节，对整个系统有大致了解：

* 每个页面最基础的构成部分：[页面容器](../components/container.md)
* 一些会用到的全局数据和方法：[VUEX 实用工具](../plugins/vuex.md)
* 一些会用到的公用方法：[Util 实用工具](../plugins/util.md)

如果想了解更多 D2Admin 相关的教程和更新文章，可以参阅 [文章](../article/)

## 下载项目

* 完整版仓库 [Github](https://github.com/d2-projects/d2-admin) | [码云](https://gitee.com/fairyever/d2-admin)

* 简化版起始模板 [Github](https://github.com/d2-projects/d2-admin-start-kit) | [码云](https://gitee.com/fairyever/d2-admin-start-kit)

挑选一个您喜欢的网站 Fork 代码到您的仓库，然后下载或克隆。

::: tip
如果使用 Github 下载过慢，请参考 [常见问题](question.md)。
:::

我的建议是使用 **简化版起始模板** 因为在完整版的基础上做减法，要比在简化版基础上做加法复杂。

下面的步骤都以简化版起始模板为基础演示如何使用。

下载完成后您会得到这些资源（以 1.1.5 版本为例）：

![](http://fairyever.qiniudn.com/20180729091149.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 安装环境

::: tip
如果您以前运行过 webpack 项目，并且本机 node 版本为 8，可以忽略这一步。
:::

### node

在 [node.js 官网](https://nodejs.org/en/download/) 下载合适您系统的 node.js。

![](http://fairyever.qiniudn.com/20180729091640.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

安装完毕后检查版本（最好使用 node 8 版本）。

``` sh
node -v
v8.11.1
npm -v
5.6.0
```

### nrm or cnpm

由于网络原因，npm 在国内使用比较慢，建议切换 npm 源到国内镜像。

有两种比较方便的方式切换您的 npm 源：

1. [nrm](https://www.npmjs.com/package/nrm) [ 建议 ]

安装：

``` sh
npm install -g nrm
```

查看所有可用源：

``` sh
nrm ls
* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  rednpm -- http://registry.mirror.cqupt.edu.cn
  skimdb -- https://skimdb.npmjs.com/registry
```

切换源：

``` sh
nrm use taobao
```

2. [cnpm](https://npm.taobao.org/)

安装：

``` sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装依赖

将终端切换到项目目录之后安装依赖：

``` sh
npm i
```

如果遇到问题比如 node-sass 安装不上，请参考 [常见问题](question.md)。

## 开发调试

在项目目录内启动项目：

``` sh
npm run dev
```

或者使用：

``` sh
npm start
```

也可以使用 cli3 新推荐的命令：

``` sh
npm run serve
```

以上每种方式效果都是一样的，只是为了照顾不同人的习惯起了三个名字，实质上都是运行了 `vue-cli-service serve --open`。

成功运行后会显示登陆界面：

![](http://fairyever.qiniudn.com/20180729094841.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 新建页面

`src/pages` 目录是页面存放目录，在此目录下新建目录，例如 **page-demo**：

![](http://fairyever.qiniudn.com/20180729095509.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

然后在文件夹内新建 **index.vue** 文件：

``` vue
<template>
  <d2-container>
    <template slot="header">header</template>
    Hello World
    <template slot="footer">footer</template>
  </d2-container>
</template>
```

上面的代码生成了一个带有 header 和 footer 的页面，页面内容只有一句话，如果您好奇为什么这么写，可以参考 [页面容器](../components/container.md)

![](http://fairyever.qiniudn.com/20180729095919.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 设置路由

`src/router/routes.js` 是路由配置文件。

在 `frameIn` 变量最后添加：

``` js
{
  path: '/page-demo',
  name: 'page-demo',
  component: () => import('@/pages/page-demo'),
  meta: { meta, title: '新建示例' }
}
```

最后 `frameIn` 变量应该是这样：

``` js {20-25}
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      },
      // ...
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/pages/page3'),
        meta: { meta, title: '页面 3' }
      },
      {
        path: '/page-demo',
        name: 'page-demo',
        component: () => import('@/pages/page-demo'),
        meta: { meta, title: '新建示例' }
      }
    ]
  }
]
```

## 设置菜单

`src/menu` 目录是菜单存放目录，里面的两个文件分别存放顶栏和侧边栏的菜单。

::: tip
D2Admin 现在将顶栏和侧边栏菜单分别存放然后赋值的逻辑只是一个最简单的演示，请根据您的需要自己修改菜变化逻辑，您可以只用一行代码就可以动态更新菜单，方法见 [VUEX 实用工具](../plugins/vuex.md)。
:::

打开 `src/menu/header.js` 添加新的菜单（高亮行）：

``` js {10}
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' },
      { path: '/page-demo', title: '新建示例' }
    ]
  }
]
```

打开 `src/menu/aside.js` 添加新的菜单（高亮行）：

``` js {10}
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' },
      { path: '/page-demo', title: '新建示例' }
    ]
  }
]
```

## 效果

经过上述步骤您得到了一个具有顶栏和底栏的页面，这个页面的入口在顶栏菜单和侧边栏菜单都会显示，并且打开此页面时浏览器 title 也会做出相应更新。

![](http://fairyever.qiniudn.com/20180729101736.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

![](http://fairyever.qiniudn.com/20180729101708.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

上述教程只是介绍了 D2Admin 的冰山一角，更多的配置项和组件文档请查阅本文档其它板块。

如果您有疑问，请加 QQ 群 **806395827** 反馈。

## 资源

下面是一些在开发过程会用到的文档，列举在这里方便大家快速查看：

组件库：

* [element-ui](http://element.eleme.io/#/zh-CN/component/quickstart)

项目基础：

| 名称 | 介绍 |
| --- | --- |
| [vue.js](https://cn.vuejs.org/v2/guide/) | 框架基础 |
| [vuex](https://vuex.vuejs.org/zh/guide/) | 全局状态管理 |
| [vue-router](https://router.vuejs.org/zh/guide/) | 路由控制 |
| [sass](https://www.sass.hk/guide/) | CSS 预处理语言 |

脚手架：

| 名称 | 介绍 |
| --- | --- |
| [vue-cli3](https://github.com/vuejs/vue-docs-zh-cn/tree/master/vue-cli) | 项目脚手架 |
| [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) | vue-cli3 中 webpack 的配置语法 |

插件：

| 名称 | 介绍 |
| --- | --- |
| [axios](https://github.com/axios/axios) | 最流行的网络请求库 |
| [better-scroll](https://github.com/ustbhuangyi/better-scroll) | [d2-container](../components/container.md) 的自定义滚动条依赖 |
| [dayjs](https://github.com/iamkun/dayjs) | 日期处理库 |
| [v-charts](https://v-charts.js.org/#/props) | vue 版本的 echarts 由饿了么开发 |
| [echarts](http://echarts.baidu.com/index.html) | v-charts 的核心 |
| [lowdb](https://github.com/typicode/lowdb) | D2Admin 操作本地数据的依赖 |
| [mockjs](https://github.com/nuysoft/Mock/wiki) | 模拟请求依赖 |
| [vue-i18n](https://kazupon.github.io/vue-i18n/guide/started.html) | 多国语依赖 |
| [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout) | 网格布局组件 |
| [vue-splitpane](https://www.npmjs.com/package/vue-splitpane) | 切分布局组件 |

上面只是一些猜您会用到的链接，还有一些项目中用到但是这里没有列举的，如果您觉得有必要，可以提 pr 修改本篇文档。