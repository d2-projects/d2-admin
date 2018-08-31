---
sidebar: auto
---

# VUEX

vuex 系统模块目录 `d2-admin/src/store/modules/d2admin/modules`。

所有模块：

| 模块名 | 介绍 | 跳转 |
| --- | --- | --- |
| account | 账户 | [link](#account) |
| db | 持久化 | [link](#db) |
| fullscreen | 全屏 | [link](#fullscreen) |
| gray | 灰度 | [link](#gray) |
| log | 日志 | [link](#log) |
| menu | 菜单 | [link](#menu) |
| page | 页面和多标签 | [link](#page) |
| releases | 版本 | [link](#releases) |
| theme | 主题 | [link](#theme) |
| search | 页面搜索 | [link](#search) |
| transition | 页面过渡动画 | [link](#transition) |
| ua | user agent | [link](#ua) |
| user | 用户信息 | [link](#user) |

下面是每个模块的介绍：

## account

account 负责实现用户的登录和注销逻辑。

### actions.login

#### 介绍

用户登录，通常情况下您需要适当修改这个方法来适配您的特殊需要。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| username | 账号 | 必选 | String |  |  |
| password | 密码 | 必选 | String |  |  |
| route | 重定向 | 非 | Object |  | `{ name: 'index' }` |

#### 示例

``` js
this.$store.dispatch('d2admin/account/login', {
  vm: this,
  username: this.formLogin.username,
  password: this.formLogin.password
})
```

登录后重定向到指定页面：

``` js
this.$store.dispatch('d2admin/account/login', {
  vm: this,
  username: this.formLogin.username,
  password: this.formLogin.password,
  route: {
    name: 'your-page'
  }
})
```

route 字段会这样被调用：

``` js
vm.$router.replace(route)
```

route 的值可以是任何 [vue-router](https://router.vuejs.org/zh/) replace 方法的 location 参数支持的数据格式。详见 [编程式的导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

route 字段的值在下面的情况下会失效：用户在试图访问某个页面（例如：/demo/page1）时被检查到非登录状态，会被自动定向到登录页面，这时候在用户完成登录后会自动跳转到 /demo/page1 继续浏览。

### actions.logout

#### 介绍

用户注销，通常情况下您需要适当修改这个方法来适配您的特殊需要。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| confirm | 注销确认 | 非 | Boolean |  | false |

#### 示例

``` js
this.$store.dispatch('d2admin/account/logout', {
  vm: this,
  confirm: true
})
```

### mutations.load

#### 介绍

用户登录后从持久化数据加载一系列的设置，例如：

* 用户名
* 主题
* 页面过渡效果设置
* 上次退出时的多页列表
* 侧边栏折叠状态

如果你扩展了系统功能并且涉及到设置项的数据持久化，不要忘了更新这里。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/account/load')
```

## db

### actions.set

#### 介绍

将数据存储到指定位置 | 路径不存在会自动初始化。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 持久化数据分区名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| value | 需要存储的值 | 非 | String |  | 空字符串 |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

``` js
this.$store.dispatch('d2admin/db/set', {
  dbName: 'database',
  path: 'demo.sometext',
  value: 'Hello World'
})
```

### actions.get

#### 介绍

效果类似于取值 dbName.path || defaultValue。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 持久化数据分区名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| defaultValue | 取值失败的默认值 | 非 | String |  | 空字符串 |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

``` js
const value = await this.$store.dispatch('d2admin/db/get', {
  dbName: 'database',
  path: 'demo.sometext',
  defaultValue: 'Hello World'
})
```

### actions.database

#### 介绍

获取持久化数据对象。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/database')
db
  .set('keyName', 'value')
  .write()
```

区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
db
  .set('keyName', 'value')
  .write()
```

### actions.databaseClear

#### 介绍

清空持久化数据对象。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databaseClear')
```

区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databaseClear', {
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.$store.dispatch('d2admin/db/databaseClear')
db
  .set('keyName', 'value')
  .write()
```

### actions.databasePage

#### 介绍

获取持久化数据对象 [ 区分页面 ]。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | name |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
db
  .set('keyName', 'value')
  .write()
```

区分用户存储：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this,
  user: true
})
db
  .set('keyName', 'value')
  .write()
```

### actions.databasePageClear

#### 介绍

清空持久化数据对象 [ 区分页面 ]。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | name |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databasePageClear', {
  vm: this
})
```

区分用户清空：

``` js
this.$store.dispatch('d2admin/db/databasePageClear', {
  vm: this,
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePageClear')
db
  .set('keyName', 'value')
  .write()
```

### actions.pageSet

#### 介绍

快速将页面当前的数据 ( $data ) 持久化。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | name |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户存储：

``` js
this.$store.dispatch('d2admin/db/pageSet', {
  vm: this
})
```

区分用户存储：

``` js
this.$store.dispatch('d2admin/db/pageSet', {
  vm: this,
  user: true
})
```

### actions.pageGet

#### 介绍

快速获取页面快速持久化的数据。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | name |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户获取：

``` js
// 获取数据
const data = await this.$store.dispatch('d2admin/db/pageGet', {
  vm: this
})
// 将数据还原到页面
for (const key in data) {
  if (data.hasOwnProperty(key)) this[key] = data[key]
}
```

区分用户获取：

``` js
// 获取数据
const data = await this.$store.dispatch('d2admin/db/pageGet', {
  vm: this,
  user: true
})
// 将数据还原到页面
for (const key in data) {
  if (data.hasOwnProperty(key)) this[key] = data[key]
}
```

### actions.pageClear

#### 介绍

清空页面快照。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| basis | 页面区分依据 | 非 | name, path, fullPath |  | name |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户清空：

``` js
this.$store.dispatch('d2admin/db/pageClear', {
  vm: this
})
```

区分用户清空：

``` js
this.$store.dispatch('d2admin/db/pageClear', {
  vm: this,
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.$store.dispatch('d2admin/db/pageClear')
db
  .set('keyName', 'value')
  .write()
```

## fullscreen

### state.active

当前的全屏状态激活标识

### mutations.toggle

#### 介绍

切换全屏。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/fullscreen/toggle')
```

### mutations.set

#### 介绍

设置全屏状态。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

#### 示例

``` js
// 打开全屏
this.$store.commit('d2admin/fullscreen/set', true)
// 关闭全屏
this.$store.commit('d2admin/fullscreen/set', false)
```

## gray

### state.active

当前的灰度状态激活标识

### mutations.toggle

#### 介绍

切换灰度模式。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/gray/toggle')
```

### mutations.set

#### 介绍

设置灰度模式。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

#### 示例

``` js
// 打开灰度模式
this.$store.commit('d2admin/gray/set', true)
// 关闭灰度模式
this.$store.commit('d2admin/gray/set', false)
```

## log

### state.list

当前的日志记录

### getters.length

#### 介绍

返回现存 log (all) 的条数。

#### 参数

无

#### 示例

``` js
this.$store.getters['d2admin/log/length']
```

### getters.lengthError

#### 介绍

返回现存 log (error) 的条数。

#### 参数

无

#### 示例

``` js
this.$store.getters['d2admin/log/lengthError']
```

### mutations.clean

#### 介绍

清空日志。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/log/clean')
```

### actions.add

#### 介绍

添加一个日志。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 日志类型 | 非 | String | log, error | log |
| err | 错误对象 | 非 | Error |  |  |
| vm | vue 实例 | 非 | Object |  |  |
| info | 信息 | 非 | String |  |  |

#### 示例

记录日志：

``` js
this.$store.dispatch('d2admin/log/add', {
  info: 'this is a log'
})
```

记录错误：

``` js
import store from '@/store'
export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (err, vm, info) {
      Vue.nextTick(() => {
        store.dispatch('d2admin/log/add', {
          type: 'error',
          err,
          vm,
          info
        })
      })
    }
  }
}
```

## menu

### state.header

顶栏菜单

### state.aside

侧边栏菜单

### state.asideCollapse

侧边栏的折叠状态

### mutations.headerSet

#### 介绍

设置顶栏菜单。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 菜单 | 必选 | Array |  |  |

#### 示例

``` js
this.$store.commit('d2admin/menu/headerSet', menu)
```

#### menu 数据格式

| 字段名 | 介绍 | 必选 | 值类型 | 默认值 |
| --- | --- | --- | --- | --- |
| path | 路由 path | 非 | String | `lodash.uniqueId('d2-menu-empty-')` |
| title | 菜单名称 | 必选 | String | 未命名菜单 |
| icon | 菜单图标 | 非 | String | file-o |
| children | 子菜单数据 | 非 | Array |  |

示例：

``` js
[
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    path: '/demo',
    title: '示例',
    icon: 'puzzle-piece',
    children: [
      {
        path: '/demo/plugins',
        title: '插件',
        icon: 'plug'
      }
    ]
  }
]
```

#### 临时菜单

支持设置临时菜单，如果您在开发页面前需要先设计好菜单结构，可以只设置 title 字段，D2Admin 在生成菜单时会使用随机唯一 id 区分菜单项目，并且在点击时提示这是一个临时菜单。

设置临时菜单的示例：

``` js
[
  {
    title: '空菜单演示',
    icon: 'folder-o',
    children: [
      {
        title: '正在开发 1',
        children: [
          { title: '正在开发 1-1' },
          { title: '正在开发 1-2' }
        ]
      },
      { title: '正在开发 2' },
      { title: '正在开发 3' }
    ]
  }
]
```

#### 外部链接

支持设置外部链接，您可以直接这样写：

``` js
[
  {
    title: '跳转外部链接',
    icon: 'link',
    children: [
      {
        path: 'https://github.com/d2-projects/d2-admin',
        title: 'D2Admin Github',
        icon: 'github'
      },
      {
        path: 'https://juejin.im/user/57a48b632e958a006691b946/posts',
        title: '掘金',
        icon: 'globe'
      }
    ]
  }
]
```

以 `https://` 或者 `http://` 开头的 path 会被当做外部链接处理。

#### svg 图标

如果您不满足于 fontawesome 图表库，或者需要自己定制菜单图标，可以在菜单中增加 iconSvg 字段：

``` js
{
  title: 'svg 菜单图标',
  iconSvg: 'd2admin',
  children: [
    { title: 'add', iconSvg: 'add' },
    { title: 'alarm', iconSvg: 'alarm' }
  ]
}
```

iconSvg 字段可选值同 [icon-svg](/zh/sys-components/icon-svg.md) 的 name 属性。

### mutations.asideSet

#### 介绍

设置侧边栏菜单。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 菜单 | 必选 | Array |  |  |

#### 示例

``` js
this.$store.commit('d2admin/menu/asideSet', menu)
```

menu 的格式同 mutations.headerSet

### mutations.asideCollapseSet

#### 介绍

设置侧边栏展开或者收缩。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| collapse | 新的值 | 必选 | Boolean |  |  |

#### 示例

``` js
// 折叠侧边栏菜单
this.$store.commit('d2admin/menu/asideCollapseSet', true)
// 展开侧边栏菜单
this.$store.commit('d2admin/menu/asideCollapseSet', false)
```

### mutations.asideCollapseToggle

#### 介绍

切换侧边栏展开和收缩。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/menu/asideCollapseToggle')
```

### mutations.asideCollapseLoad

#### 介绍

从持久化数据读取侧边栏展开或者收缩。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/menu/asideCollapseLoad')
```

## page

### state.pool

可以在多页 tab 模式下显示的页面

### state.opened

当前显示的多页面列表

### state.current

当前页面

### getters.keepAlive

#### 介绍

从当前所有打开的多标签页里返回需要缓存的页面 name。

#### 参数

无

#### 示例

``` js
this.$store.getters['d2admin/page/keepAlive']
```

### mutations.open

#### 介绍

打开一个新的页面。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | route name | 必选 | String |  |  |
| params | route params | 非 | Object |  |  |
| query | route query | 非 | Object |  |  |

#### 示例

``` js
router.afterEach(to => {
  // 需要的信息
  const app = router.app
  const { name, params, query } = to
  // 多页控制 打开新的页面
  app.$store.commit('d2admin/page/open', { name, params, query })
})
```

### mutations.currentSet

#### 介绍

设置当前激活的页面 name。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | route name | 必选 | String |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/currentSet', 'route-name')
```

### mutations.openedUpdate

#### 介绍

更新页面列表上的某一项。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| index | 已经打开的页面的位置 | 必选 | Number |  |  |
| params | route params | 非 | Object |  |  |
| query | route query | 非 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/openedUpdate', {
  index: 2,
  params: {
    name: 'new-name'
  },
  query: {
    value: 'new-value'
  }
})
```

### mutations.opend2db

#### 介绍

将 opened 属性赋值并持久化。

::: tip
在这之前请先确保已经更新了 state.opened。
:::

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/page/opend2db')
```

### mutations.openedLoad

#### 介绍

从持久化数据载入分页列表。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/page/openedLoad')
```

### mutations.add

#### 介绍

新增一个 tag。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| tag | { name, path, meta } | state.pool 中的某项 | Object |  |  |
| params | route params | 非 | Object |  |  |
| query | route query | 非 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/add', {
  tag: {
    name: 'route-name',
    path: 'route-path',
    meta: {}
  },
  params: {},
  query: {}
})
```

### mutations.close

#### 介绍

关闭一个 tag。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| tagName | 要关闭的标签名字 | 必选 | String |  |  |
| vm | vue 实例 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/close', {
  tagName: 'route-name',
  vm: this
})
```

### mutations.closeLeft

#### 介绍

关闭当前标签左边的标签。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| pageSelect | 当前选中的 tagName | 必选 | String |  |  |
| vm | vue 实例 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/closeLeft', {
  pageSelect: 'route-name',
  vm: this
})
```

### mutations.closeRight

#### 介绍

关闭当前标签右边的标签。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| pageSelect | 当前选中的 tagName | 必选 | String |  |  |
| vm | vue 实例 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/closeRight', {
  pageSelect: 'route-name',
  vm: this
})
```

### mutations.closeOther

#### 介绍

关闭当前激活之外的标签。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| pageSelect | 当前选中的 tagName | 必选 | String |  |  |
| vm | vue 实例 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/closeOther', {
  pageSelect: 'route-name',
  vm: this
})
```

### mutations.closeAll

#### 介绍

关闭所有标签。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/page/closeAll', {
  vm: this
})
```

### mutations.init

#### 介绍

初始化多页面功能，将路由设置转化为 store 中的预备数据

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| routes | 路由设置 | 必选 | Array |  |  |

#### 示例

``` js
import { frameInRoutes } from '@/router/routes'
this.$store.commit('d2admin/page/init', frameInRoutes)
```

## releases

### state.version

当前版本

### state.latest

最新版本的信息

### state.update

有新版本

### actions.checkUpdate

#### 介绍

检查版本更新。

#### 参数

无

#### 示例

``` js
this.$store.dispatch('d2admin/releases/checkUpdate')
```

### mutations.updateSet

#### 介绍

设置是否有新的 D2Admin 版本。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| update | 是否有新版本 | 必选 | Boolean |  |  |

#### 示例

``` js
this.$store.commit('d2admin/releases/updateSet', true)
```

### mutations.latestSet

#### 介绍

设置最新版本的信息。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| latest | 最新版本的信息 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/releases/latestSet', {})
```

## theme

### state.list

所有注册的主题

### state.activeName

当前激活的主题名称

### getters.activeSetting

#### 介绍

返回当前的主题信息，不是一个名字，而是当前激活主题的所有数据。

#### 参数

无

#### 示例

``` js
this.$store.getters['d2admin/theme/activeSetting']
```

### mutations.set

#### 介绍

激活一个主题。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| themeName | 需要激活的主题名称 | 必选 | String |  |  |

#### 示例

``` js
this.$store.commit('d2admin/theme/set', 'd2')
```

### mutations.load

#### 介绍

从持久化数据加载主题设置。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/theme/load')
```

### mutations.dom

#### 介绍

将 vuex 中的主题应用到 dom。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/theme/dom')
```

## search

### state.active

搜索面板激活状态

### state.hotkey

快捷键设置

### state.pool

所有可以搜索的页面

### mutations.toggle

#### 介绍

切换激活状态。

#### 参数

无

#### 示例

``` js
// 切换搜索面板的激活状态
this.$store.commit('d2admin/search/toggle')
```

### mutations.set

#### 介绍

设置搜索面板的激活状态。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

#### 示例

``` js
// 打开搜索面板
this.$store.commit('d2admin/search/set', true)
// 关闭搜索面板
this.$store.commit('d2admin/search/set', false)
```

### mutations.init

#### 介绍

初始化。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 候选菜单 | 必选 | Array |  |  |

#### 示例

``` js
this.$store.commit('d2admin/search/init', menu)
```

menu 的数据类型和菜单的数据类型一致 [menu 数据格式](#menu-数据格式)

## transition

### state.active

是否开启页面过度动画

### mutations.set

#### 介绍

设置页面动画开启状态。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| active | 新的值 | 必选 | Boolean |  |  |

#### 示例

``` js
// 打开页面动画
this.$store.commit('d2admin/transition/set', true)
// 关闭页面动画
this.$store.commit('d2admin/transition/set', false)
```

### mutations.load

#### 介绍

从持久化数据读取页面过渡动画设置。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/transition/load')
```

## ua

### state.data

用户 UA 信息

### mutations.get

#### 介绍

记录 UA。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/ua/get')
```

## user

### state.info

用户信息

### mutations.set

#### 介绍

设置用户数据。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| info | 用户数据 | 必选 | Object |  |  |

#### 示例

``` js
this.$store.commit('d2admin/user/set', {
  name: 'my-name'
})
```

### mutations.load

#### 介绍

从持久化数据读取用户数据。

#### 参数

无

#### 示例

``` js
this.$store.commit('d2admin/user/load')
```