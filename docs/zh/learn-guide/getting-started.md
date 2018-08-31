# 快速上手

本文将会带领您从 0 开始使用 D2Admin 创建下面的页面：

![](http://fairyever.qiniudn.com/20180729102354.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 下载项目

* 完整版仓库 [Github](https://github.com/d2-projects/d2-admin) | [码云](https://gitee.com/fairyever/d2-admin)

* 简化版起始模板 [Github](https://github.com/d2-projects/d2-admin-start-kit) | [码云](https://gitee.com/fairyever/d2-admin-start-kit)

挑选一个您喜欢的网站 Fork 代码到您的仓库，然后下载或克隆。

::: tip
如果使用 Github 下载过慢，请参考 [常见问题](/zh/question/)。
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

```
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

```
npm install -g nrm
```

查看所有可用源：

```
nrm ls
* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  rednpm -- http://registry.mirror.cqupt.edu.cn
  skimdb -- https://skimdb.npmjs.com/registry
```

切换源：

```
nrm use taobao
```

2. [cnpm](https://npm.taobao.org/)

安装：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装依赖

将终端切换到项目目录之后安装依赖：

```
npm i
```

如果遇到问题比如 node-sass 安装不上，请参考 [常见问题](/zh/question/)。

## 开发调试

在项目目录内启动项目：

```
npm run dev
```

或者使用：

```
npm start
```

也可以使用 cli3 新推荐的命令：

```
npm run serve
```

以上每种方式效果都是一样的，只是为了照顾不同人的习惯起了三个名字，实质上都是运行了 `vue-cli-service serve --open`。

成功运行后会显示登录界面：

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

上面的代码生成了一个带有 header 和 footer 的页面，页面内容只有一句话，如果您好奇为什么这么写，可以参考 [页面容器](../sys-components/container.md)

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
D2Admin 现在将顶栏和侧边栏菜单分别存放然后赋值的逻辑只是一个最简单的演示，请根据您的需要自己修改菜变化逻辑，您可以只用一行代码就可以动态更新菜单，方法见 [vuex menu 模块](/zh/sys-vuex/#menu)。
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
