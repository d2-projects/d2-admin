# 常见问题

本章总结收到的用户反馈问题，集中展示，方便后续用户自助解决问题

## 无法启动项目

首先建议您升级 node 版本 > 8，在以下环境测试可用

```{10}
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

## 文档运行报错

这里目前还有一个小遗憾，d2admin 使用的 webpack 版本不能符合 vuepress 的要求，所以如果你想在本地启动文档站点的服务，需要按下述步骤

首先将 vuepress 安装到全局

```
npm i -g vuepress
```

启动服务

```
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

``` js{5,12}
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

``` js{13,31}
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

```js{5-6}
// 核心组件
import './core/register'
// 非核心组件 只是在很多演示页面中用到的组件
import './demo/register'
// 图表组件
import './charts/register'
```

* 删除 `src/mock/chart` 目录

* 删除 `src/mock/register.js` 中的相关内容（高亮部分）

```js{7}
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

```
npm remove @antv/data-set -S
npm remove @antv/g2 -S
```

## 项目里有未完成的代码

有些示例（比如 v-charts 和 ElementUI）是很方便就可以找到官网示例和文档的，这些插件和组件的示例在本项目中就可能处于未完成的状态，但是以后会完成