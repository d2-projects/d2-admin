# 常见问题

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