---
sidebar: auto
---

# 路由

## 数据

完整版的 D2Admin 路由设置文件在 `d2-admin/src/router/routes.js`。

需要注意的是大多数路由设置要写在 frameIn 下。frameIn 中的页面会在嵌套在一个包含顶栏和侧边栏的页面布局中显示。

## 路由配置

路由注册和钩子设置文件为 `d2-admin/src/router/index.js`，此文件中将 `routes.js` 中导出的 routes 变量注册到路由，并且设置后续的路由拦截和登陆状态判断，多页面的新建页面事件触发也来自这里。该文件再导出注册了所有页面的路由实例，在 `main.js` 中注册到 vue 根实例。