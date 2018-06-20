# 常见问题

## 项目为什么无法启动

首先建议您升级 node 版本 >8，在以下环境测试可用

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

## 如何启动文档的开发环境

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
你可能会发现项目目录中有一个 deploy.sh 文件，这个文件是为了方便发布文档用的，你并不需要使用它
:::