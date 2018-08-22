---
sidebar: auto
---

# 菜单

D2Admin 的顶栏菜单和侧边栏菜单相互独立互不影响。

## 数据源

顶栏数据使用 `$store.state.d2admin.menu.header` 作为数据源。[API](../sys-vuex/#state-header)

侧栏数据使用 `$store.state.d2admin.menu.aside` 作为数据源。[API](../sys-vuex/#state-aside)

## 设置菜单

顶栏使用 `$store.commit('d2admin/menu/headerSet', menu)` 更新数据源。[API](../sys-vuex/#mutations-headerset)

侧栏使用 `$store.commit('d2admin/menu/asideSet', menu)` 更新数据源。[API](../sys-vuex/#mutations-asideset)

menu 的数据格式见 [menu 数据格式](../sys-vuex/#mutations-headerset)

## 菜单联动

首先请明确一点，D2Admin 完整版的菜单联动只是一个简单方案，不要拘泥于此演示，下面介绍完整版联动的实现帮助您更快速实现自己的联动方案：

设置数据源

在 `d2-admin/src/menu/index.js` 中导出了两个变量，分别是：

* menuAside 预备侧边栏菜单
* menuHeader 顶栏菜单

在 main.js 中使用下面的方式导入

``` js
import { menuHeader, menuAside } from '@/menu'
```

menuHeader 在初始化根实例时在 created 生命周期直接赋值给顶栏菜单

``` js
this.$store.commit('d2admin/menu/headerSet', menuHeader)
```

然后在根实例中添加 $route.matched 的监听器

``` js
watch: {
  '$route.matched' (val) {
    const _side = menuAside.filter(menu => menu.path === val[0].path)
    this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
  }
}
```

这段代码的作用是当路由改变时，根据当前的路由找到 menuAside 中匹配当前路由对象中顶级路由的那个项目，并且赋值给侧边栏菜单达到联动效果。

您可以删除这部分代码，随意使用 vuex 中提供的顶栏和侧边栏菜单的设置方法来实现自己的菜单联动。