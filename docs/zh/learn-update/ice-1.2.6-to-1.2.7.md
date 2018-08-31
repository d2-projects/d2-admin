# ICE 1.2.6 TO 1.2.7

> D2Admin ICE 1.2.6 是基于 D2Admin 1.1.5 版本简化而来。

> D2Admin ICE 1.2.7 是基于 D2Admin 1.2.0 版本简化而来。

D2Admin 1.1.5 - 1.2.0 之间修复了一些之前的错误，有一些小的功能改进，也有较大的升级。新功能介绍见 [《D2Admin 8月更新: 高级数据持久化|标签页右键|模块化等》](https://juejin.im/post/5b7d9640f265da436631a5a7)

::: tip 旧版文档
如果您暂时不想升级到新版本，旧版本文档会一直为您保留，[文档地址](http://app.d3collection.cn/d2-admin-doc/1.1.11/zh/)
:::

## 如何升级

### 备份旧项目

首先将您的旧项目整体复制一份到其它位置，防止修改失败丢失文件。

### 下载新版本 D2Admin ICE

初始化成功后您应该有两个项目：

![](http://fairyever.qiniudn.com/20180826155154.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

### 移动页面文件

如果您使用飞冰创建的页面，您的业务页面应该在 pages 目录下，例如下图中的 page6 文件夹：

![](http://fairyever.qiniudn.com/20180826155652.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

将您的业务代码文件全部转移至新版项目的 pages 目录：

![](http://fairyever.qiniudn.com/20180826160031.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

### 更新路由和菜单

将旧版本中的 menuConfig.js 和 routerConfig.js 移动到新项目中的同样位置，替换新版本初始化时的默认文件：

![](http://fairyever.qiniudn.com/20180826160219.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

移动到新文件夹：

![](http://fairyever.qiniudn.com/20180826160642.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

选择替换已有文件：

![](http://fairyever.qiniudn.com/20180826160659.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

### 更新 package.json

由于您之前的项目中会使用一些区块，区块在创建在您的项目里时会自动在 package.json 文件中新增相关依赖，现在您需要手动将这些依赖添加到新的项目中：

![](http://fairyever.qiniudn.com/20180826161511.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

::: tip
lodash.uniqueid 这个插件不需要添加到新的项目中，新项目中全量引入了 lodash
:::

### 重新安装依赖

![](http://fairyever.qiniudn.com/20180826160847.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

### 启动新的项目

重新安装依赖完成后启动新的项目，即完成了旧项目的升级工作。

![](http://fairyever.qiniudn.com/20180826162202.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 特殊情况

如果您修改了包含但不仅限于以下文件时，您需要注意将您以前的修改更新至新的项目：

* pages 目录下的首页和登录页面
* 公用样式和主题
* HeaderAside 布局组件
* store

## store 更新说明

此版本对 store 文件夹下的设置进行了拆分：

旧版的 d2admin 模块所有代码写在了一个文件中：

![](http://fairyever.qiniudn.com/20180826162820.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

导致这个模块看起来足够混乱以至于在修改某些功能时很不容易找到相关的代码。

新版的 D2Admin ICE 针对这部分做了优化，将这个模块根据功能进行了拆分：

![](http://fairyever.qiniudn.com/20180826163056.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

这样在您需要修改某些功能时可以更快速地找到对应的代码位置。但是相应而来的是模块中的方法在调用时的方法都发生了变化，以登录为例：

旧版（示例）：

``` vue {5-14}
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'd2adminLogin'
    ]),
    submit () {
      this.d2adminLogin({
        vm: this,
        username: '',
        password: ''
      })
    }
  }
}
</script>
```

新版（示例）：

``` vue {5-14}
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    submit () {
      this.login({
        vm: this,
        username: '',
        password: ''
      })
    }
  }
}
</script>
```

::: tip 规律
在调用 vuex D2Admin 系统模块时，无论是直接操作还是使用：

* `mapState`
* `mapActions`
* `mapMutations`

都要注意现在的方法和数据都根据功能模块化了，如果您之前业务代码中使用了相关的数据和方法，请注意。
:::

## 数据持久化更新说明

旧版的数据持久化文档 [VUEX 实用工具](http://app.d3collection.cn/d2-admin-doc/1.1.11/zh/plugins/vuex.html)

新版的数据持久化更加强大，文档见 [数据持久化](http://app.d3collection.cn/d2-admin-doc/lastest/zh/sys-db/)

请在业务代码中注意将您使用的数据持久化方法升级。

## 需要帮助

[交流群](/zh/communication-group-chat/)