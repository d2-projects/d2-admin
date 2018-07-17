# 常见问题

本章总结收到的用户反馈问题，集中展示，方便后续用户自助解决问题

## 无法启动项目

如果在 `run dev` 或者 `npm i` 的过程中报错，首先建议您升级 node 版本 > 8，在以下环境测试可用

``` {10}
➜  ~ npm -v
5.6.0
➜  ~ node -v
v8.11.1
➜  ~ nrm -V
1.0.2
➜  ~ nrm ls
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

::: tip
推荐使用 [nrm](https://github.com/Pana/nrm) 管理 npm 源，不建议使用 cnpm
:::

在正在开发的 1.2.x 版本（也有可能在你看到这的时候版本已经比 1.2.x 更晚）中，我们不再使用 npm 作为推荐的包安装工具，取而代之的是使用 [yarn](https://yarnpkg.com/zh-Hans/)，使用方法如下

```
// 安装依赖
yarn
// 启动调试服务
yarn run serve
```

## node-sass 安装失败

由于某些不可描述的原因，利用 npm 进行安装模块的时候会发生包下载失败的情况，node-sass 尤其的频繁，或者说 node-sass 的二进制文件是接近百分百失败的，即使用 yarn 安装也依旧在这个点失败，给出以下建议

**方法1**

首先，需要提前下载 node-sass 的二进制文件，这个文件可以去 cnpm 仓库下载或者 node-sass 的 github 上去下载，在下载之前我们需要先查看电脑的系统的版本，来确定适合哪个版本的二进制文件，查看版本的指令如下：

``` sh
node -p "[process.platform, process.arch, process.versions.modules].join('-')"
```

输入这个指令后会弹出一个系统版本，然后在下面两个地址中选择一个去下载对应系统版本的后缀为 .node 的 node-sass 文件

[cnpm https://npm.taobao.org/mirrors/node-sass/](https://npm.taobao.org/mirrors/node-sass/)

[github https://github.com/sass/node-sass/releases](https://github.com/sass/node-sass/releases)

下载完保存到任意位置，最好放置到 package.json 所在位置。然后我们需要手动指定 node-sass 二进制文件的下载源为下载的那个文件，以下是npm与yanr的指令：

npm

``` sh
npm config set sass-binary-path 你存放刚才下载的二进制文件的目录
// 例如 npm config set sass-binary-path e:/web/win32-x64-48_binding.node
```

yarn

``` sh
yarn config set sass-binary-path 你存放刚才下载的二进制文件的目录
// 例如 yarn config set sass-binary-path e:/web/win32-x64-48_binding.node
```

然后我们即可用正常指令下载了

::: tip 注意
此方法会绑定为本地文件，即无法更新 node-sass 了。如果不希望这样，请使用第二种方法
:::

**方法2**

此方案将把下载源指定为cnpm仓库，更建议使用这种方法

全部的下载源指向cnpm的指令

npm

``` sh
npm config set registry http://registry.npm.taobao.org
```

yarn

``` sh
yarn config set registry http://registry.npm.taobao.org
```

只指定node-sass的下载源（建议使用）

npm

``` sh
npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```

yarn

``` sh
yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```

## 无法跳转路由

有可能你在 D2Admin 的基础上进行你的开发时，发现在登陆页面进行

``` js
this.$router.push({ name: 'index' })
```

跳转的时候页面并没有跳转，这是因为你很有可能没有进行下面的操作：

``` js
Cookies.set('token', res.token, setting)
```

原因根源是在 `src/router/index.js` 中有如下一段代码，根据 `token` 判断用户是否登陆

``` js {3-9}
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (Cookies.get('token')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})
```

所以如果你没有存 token 字段在 cookie 中，路由鉴权机制将会重定向到登录页

如果你想修改基于 token 验证用户登陆状态的机制，请在 `./src` 下搜索 `token` 关键字并修改他们，但是我**十分不建议你修改它们**

最好的做法是在登陆后返回本次登陆的 token 并且存储在 cookie 中，然后在每次 ajax 请求时都携带这个 token 给后端做权限验证（必要的话你可以还可以增加 token 的更新机制）

::: tip 同样需要注意的地方
除了需要在 cookie 中保存 token，你还要保存 uuid 字段，意为“用户唯一标识”

``` js
Cookies.set('uuid', res.uuid, setting)
```

D2Admin 会在很多地方使用 cookie 中的此字段区分用户，比如不同用户选择的不同主题的数据持久化，还有不同用户打开的多标签页数据的持久化存储。
:::

## 文档运行报错

这里目前还有一个小遗憾，d2admin 使用的 webpack 版本不能符合 vuepress 的要求，所以如果你想在本地启动文档站点的服务，需要按下述步骤

首先将 vuepress 安装到全局

``` sh
npm i -g vuepress
```

启动服务

``` sh
npm run doc:dev
```

::: tip
你可能会发现项目目录中有一个 deploy 文件夹，这个文件是为了方便发布和提交代码用的，通常你并不需要使用它
:::

## 删除页面右上角 github 链接

在 `src/components/demo/d2-demo-page-cover/index.vue` 中删除相关代码即可

## 兼容性

首先 vue.js 和 ElementUI 做不到兼容的，D2Admin 肯定也兼容不了，实测在 macOS 下 Chrome 和新版本的火狐浏览器以及 Safari 都正常使用，这类管理系统一般是内部使用，通常不必太纠结兼容低版本浏览器，如果你发现了显示的 bug，可以加 QQ 群反应，如果你可以修复这个 bug 使其在你的浏览器上显示正常，欢迎你的 pr。

## 删除项目里的 G2 图表库

出于为用户考虑，作者个人实现的图表集成方案肯定不如其它专门做这方面的开源产品（这是肯定的，客观来讲作者的个人水平和 v-charts 的团队水平不在一个等级），所以G2 图表库在 `1.1.1` 版本删除，后续版本换成 `v-charts`。如果你在开始使用 D2Admin 是在 `1.1.0` 以及之前，你的项目里应该有 G2 图表库，如果你不想保留，下面的向导将会指导你删除它

::: tip
下面的教程都是在 `1.1.0` 版本（行号为下载后没进行任何改动的行号）基础上
:::

1. 删除相关路由

删除文件 `src/router/index.js` 中 **34 ~ 53** 行代码

``` js
{
  path: '/demo/chart',
  name: 'demo-chart',
  meta,
  redirect: { name: 'demo-chart-index' },
  component: () => import('@/components/core/d2-layout-main'),
  children: (pre => [
    ...
  ])('demo-chart-')
},
```

2. 删除菜单

删除文件 `src/menu/index.js` 中 **119 ~ 143** 以及 **240** 和 **256** 行代码

``` js
// 路由菜单 图表
const demoChart = {
  path: '/demo/chart',
  title: '图表 G2',
  icon: 'pie-chart',
  children: (pre => [
    ...
  ])('/demo/chart/')
}
```

``` js {5,12}
export const side = [
  demoPlugins,
  demoComponents,
  demoElement,
  demoChart // <- 注意这里
]
// 修改为
export const side = [
  demoPlugins,
  demoComponents,
  demoElement
  // 删除了 demoChart
]
```

``` js {13,31}
export default [
  {
    path: '/index',
    title: '首页'
  },
  {
    path: '/demo',
    title: '集成功能',
    children: [
      demoPlugins,
      demoComponents,
      demoElement,
      demoChart, // <- 注意这里
      {
        title: '空菜单演示',
        icon: 'folder-o',
        children: [ ...
// 修改为
export default [
  {
    path: '/index',
    title: '首页'
  },
  {
    path: '/demo',
    title: '集成功能',
    children: [
      demoPlugins,
      demoComponents,
      demoElement,
      // 删除了 demoChart
      {
        title: '空菜单演示',
        icon: 'folder-o',
        children: [ ...
```

3. 删除文件

* 删除 `src/components/charts` 目录

* 删除 `src/components/index.js` 中的相关内容（高亮部分）

```js {5-6}
// 核心组件
import './core/register'
// 非核心组件 只是在很多演示页面中用到的组件
import './demo/register'
// 图表组件
import './charts/register'
```

* 删除 `src/mock/chart` 目录

* 删除 `src/mock/register.js` 中的相关内容（高亮部分）

```js {7}
import Mock from 'mockjs'

import '@/mock/ajax-demo'

import '@/mock/login'

import '@/mock/chart/register.js'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})
```

* 删除 `src/pages/demo/chart` 目录

4. 删除依赖

打开终端 cd 到项目文件夹，执行

``` sh
npm remove @antv/data-set -S
npm remove @antv/g2 -S
```

## 项目里有未完成的代码

有些示例（比如 v-charts 和 ElementUI）是很方便就可以找到官网示例和文档的，这些插件和组件的示例在本项目中就可能处于未完成的状态，但是以后会完成