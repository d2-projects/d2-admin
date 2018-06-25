# 常见问题

本章总结收到的用户反馈问题，集中展示，方便后续用户自助解决问题

## 无法启动项目

首先建议您升级 node 版本 > 8，在以下环境测试可用

```
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

## 删除页面右上角 github 链接

在 `src/components/demo/d2-demo-page-cover/index.vue` 中删除相关代码即可

## el-scrollbar 组件

el-scrollbar 组件是 ElementUI 自带的一个隐藏组件，没有写入文档，详见 [https://github.com/ElemeFE/element/issues/2238](https://github.com/ElemeFE/element/issues/2238)

## 兼容性

首先 vue.js 和 ElementUI 做不到兼容的，D2Admin 肯定也兼容不了，实测在 macOS 下 Chrome 和新版本的火狐浏览器以及 Safari 都正常使用，这类管理系统一般是内部使用，通常不必太纠结兼容低版本浏览器，如果你发现了显示的 bug，可以加 QQ 群反应，如果你可以修复这个 bug 使其在你的浏览器上显示正常，欢迎你的 pr。