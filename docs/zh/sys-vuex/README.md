---
sidebar: auto
sidebarDepth: 2
---

# VUEX

vuex 系统模块目录 `d2-admin/src/store/modules/d2admin/modules`。

所有模块：

| 模块名 | 介绍 |
| --- | --- |
| account | 账户 |
| db | 持久化 |
| fullscreen | 全屏 |
| gray | 灰度 |
| log | 日志 |
| menu | 菜单 |
| page | 页面和多标签 |
| releases | 版本 |
| theme | 主题 |
| transition | 页面过渡动画 |
| ua | user agent |
| user | 用户信息 |

下面是每个模块的介绍：

## account

account 负责实现用户的登陆和注销逻辑。

### actions.login

#### 介绍

用户登陆，通常情况下您需要适当修改这个方法来适配您的特殊需要。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| username | 账号 | 必选 | String |  |  |
| password | 密码 | 必选 | String |  |  |

#### 示例

``` js
this.$store.dispatch('d2admin/account/login', {
  vm: this,
  username: this.formLogin.username,
  password: this.formLogin.password
})
```

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

用户登陆后从数据库加载一系列的设置，例如：

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

### mutations.set

#### 介绍

将数据存储到指定位置 | 路径不存在会自动初始化。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 数据库名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| value | 需要存储的值 | 非 | String |  | 空字符串 |

#### 示例

``` js
this.commit('d2admin/db/set', {
  dbName: 'database',
  path: 'demo.sometext',
  value: 'Hello World'
})
```

### mutations.setByUser

#### 介绍

将数据存储到指定位置 | 路径不存在会自动初始化 [ 区分用户 ]。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 数据库名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| value | 需要存储的值 | 非 | String |  | 空字符串 |

#### 示例

``` js
this.commit('d2admin/db/setByUser', {
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
| dbName | 数据库名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| defaultValue | 取值失败的默认值 | 非 | String |  | 空字符串 |

#### 示例

``` js
const value = await this.dispatch('d2admin/db/get', {
  dbName: 'database',
  path: 'demo.sometext',
  defaultValue: 'Hello World'
})
```

### actions.getByUser

#### 介绍

效果类似于取值 dbName.path[user] || defaultValue。

::: warning 注意
不建议在业务代码中使用此方法，此方法可以访问到任何的持久化数据位置，只在开发系统模块时调用，并且使用时您应该十分清楚您正在做什么。
:::

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| dbName | 数据库名称 | 非 | String | database, sys | database |
| path | 存储路径 | 非 | String |  | 空字符串 |
| defaultValue | 取值失败的默认值 | 非 | String |  | 空字符串 |

#### 示例

``` js
const value = await this.dispatch('d2admin/db/getByUser', {
  dbName: 'database',
  path: 'demo.sometext',
  defaultValue: 'Hello World'
})
```

### actions.database

#### 介绍

获取存储数据库对象。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户存储：

``` js
const db = await this.dispatch('d2admin/db/database')
db
  .set('keyName', 'value')
  .write()
```

区分用户存储：

``` js
const db = await this.dispatch('d2admin/db/database', {
  user: true
})
db
  .set('keyName', 'value')
  .write()
```

### actions.databaseClear

#### 介绍

清空存储数据库对象。

#### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| user | 是否区分用户 | 非 | Boolean |  | false |

#### 示例

不区分用户清空：

``` js
this.dispatch('d2admin/db/databaseClear')
```

区分用户清空：

``` js
this.dispatch('d2admin/db/databaseClear', {
  user: true
})
```

如果您想进行后续操作，可以接受返回值，返回值为可以直接操作的 db 对象：

``` js
const db = await this.dispatch('d2admin/db/databaseClear')
db
  .set('keyName', 'value')
  .write()
```

### actions.databasePage

#### 介绍

获取存储数据库对象 [ 区分页面 ]。

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

清空存储数据库对象 [ 区分页面 ]。

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
const db = await this.dispatch('d2admin/db/databasePageClear')
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

### actions.pageLoad

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
const data = await this.pageLoad({
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
const data = await this.pageLoad({
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
const db = await this.dispatch('d2admin/db/pageClear')
db
  .set('keyName', 'value')
  .write()
```

## fullscreen
## gray
## log
## menu
## page
## releases
## theme
## transition
## ua
## user