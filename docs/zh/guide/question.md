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