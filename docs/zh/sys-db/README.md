---
sidebar: auto
---

# 数据持久化

D2Admin 对数据持久化做了更清晰的包装。

## 总览

D2Admin 数据持久化依赖浏览器的 LocalStorage，使用 [lowdb](https://github.com/typicode/lowdb) API 加自己的取值包装实现了便捷的的操作和取值方法，通过不同的接口可以访问到持久化数据不同的内容，例如不同用户独有的存储区域，系统存储区域，公用存储，根据路由自动划分的存储区域等。

在 `src/store/modules/d2admin/modules/db.js` 文件中提供了4组共9个方法读写持久化数据

![](http://fairyever.qiniudn.com/20180820235417.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 我应该选择哪种方式

有可能您会对如何选择持久化存储的 API 感到困惑，下图会帮助您在存储数据时，根据您的需要选择合适的存储方法：

![](http://fairyever.qiniudn.com/20180822223058.png)

如果是希望读取数据，依旧遵循上图的选择条件。具体的方法介绍见本页面其它章节，具体 API 详见 [vuex db 模块](/zh/sys-vuex/#db)

## 概念

D2Admin 数据持久化主要有以下概念：

### 存储实例

首先请先对 [lowdb](https://github.com/typicode/lowdb) 有一定的了解，[lowdb](https://github.com/typicode/lowdb) 通过 [lodash](https://lodash.com/) 实现了对数据操作的封装，下面的例子演示了 lowdb 在浏览器中的使用方式：

``` js {5}
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('db')
const db = low(adapter)

db.defaults({ posts: [] })
  .write()

db.get('posts')
  .push({ title: 'lowdb' })
  .write()
```

D2Admin 中的存储实例指的是上述代码中 `db` 那一步（高亮行），在获得了存储实例后你可以使用 [lodash](https://lodash.com/) 语法直接操作存储实例，最后使用 [lowdb](https://github.com/typicode/lowdb) 的 `write` API 将变化同步回浏览器的 LocalStorage。

### 用户私有

用户私有指不同的用户使用同一个 api 访问到的存储实例指向的存储位置，例如 A 用户使用下面的代码存储了一段信息：

``` js {5}
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
db
  .set('myName', 'userA')
  .write()
```

B 用户使用下面的代码存储了一段信息：

``` js {5}
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
db
  .set('myName', 'userB')
  .write()
```

请注意代码的前三行都是一样的，两个用户使用的获取存储实例接口是同一个接口，只不过保存的数据不同。

然后 A 和 B 使用同样的取值代码取值：

``` js {4}
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
const myName = db.get('myName').value()
```

这次是使用完全一样的代码，但是 A 用户登录的情况下取得的值是 `myName = userA`，B 用户登录的情况下取得的值是 `myName = userB`。

上面介绍的特性即为“用户私有”，**在 D2Admin 中，所有的数据持久化 API 都支持数据私有配置**。

### 路由存储

路由存储含义和上面介绍的“用户私有”相像，区别如下：

| 概念 | 数据区分依据 |
| --- | --- |
| 用户私有 | 用户 uuid |
| 路由存储 | `route.name` 或者 `path` 或者 `fullPath` |

举例说明：

在 **页面1** 中使用下面的代码存储一段信息：

``` js {5}
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
db
  .set('pageName', 'page1')
  .write()
```

在 **页面2** 中使用同样的代码存储一段不同的信息：

``` js {5}
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
db
  .set('pageName', 'page2')
  .write()
```

然后在 **页面1** 和 **页面2** 上使用完全相同的代码取值：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
const pageName = db.get('pageName').value()
```

在 **页面1** 中会取到 `pageName = page1`，在 **页面2** 中会取到 `pageName = page2`。证明数据被依据路由划分。

::: tip
“路由存储”同时也支持“用户私有”，您可以将两者结合使用，使用下面的代码即可获得用户私有的路由存储：

``` js {3}
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this,
  user: true
})
```
:::

### 数据格式

首先展示完整的 D2Admin 数据存储格式：

::: tip
不要被这张图吓到，在您使用过程中根本不会对这个结构有任何感知，API 会直接返回供您操作的节点。
:::

![](http://fairyever.qiniudn.com/20180821090300.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

这张图体现了数据的普通存储、用户存储、路由存储、私有路由存储、路由快照以及私有路由快照的存储位置，现在您会感觉很乱，但是请注意以下几点：

* sys 模块您在业务代码中不会访问
* database 中的存储结构您绝不会使用某一个 API 全部获得，每次您操作的只是某个节点下的一部分数据，D2Admin 通过不同 API 来简化您在上述数数据中快速定位到需要的数据节点

## 使用方式

### root 级别方法

root 级别的方法有两个，分别为：

* [d2admin/db/set](../sys-vuex/#actions-set)
* [d2admin/db/get](../sys-vuex/#actions-get)

调用方式为：

``` js
// 写入数据
this.$store.dispatch('d2admin/db/set', {
  dbName: 'database',
  path: 'demo.sometext',
  value: 'Hello World'
})
```

``` js
// 读取数据
const value = await this.$store.dispatch('d2admin/db/get', {
  dbName: 'database',
  path: 'demo.sometext',
  defaultValue: 'Hello World'
})
```

这两个方法可以在持久化数据中的任意位置（也就是上面“数据格式”章节中展示的图片上所有节点）进行读写操作，D2Admin 内部模块使用此 API 访问持久化数据，**不建议在业务代码中使用**，除非您非常清楚您正在做什么。

### 获得存储实例

要想向持久化数据中写入数据或者读取数据，第一步就是获得存储实例。可以通过 `d2admin/db/get` 获得存储实例。

#### 公用

使用如下代码获取公用存储实例：

``` js
const db = await this.$store.dispatch('d2admin/db/database')
```

您将获得下图所示节点（绿色高亮区域）：

![](http://fairyever.qiniudn.com/20180821091548.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

写入：

``` js
const db = await this.$store.dispatch('d2admin/db/database')
db
  .set('keyName', 'value')
  .write()
```

结果：

![](http://fairyever.qiniudn.com/20180821092216.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

取值：

``` js
const db = await this.$store.dispatch('d2admin/db/database')
db.get('keyName').value() // 'value'
```

#### 私有

如果需要，您也可以获取根据用户区分的私有存储实例：

``` js
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
```

假设当前登录用户的 uuid 为 uuid-A，您将获得下图所示节点（绿色高亮区域）：

![](http://fairyever.qiniudn.com/20180821092920.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

写入：

``` js
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
db
  .set('keyName', 'value')
  .write()
```

结果：

![](http://fairyever.qiniudn.com/20180821093132.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

取值：

``` js
const db = await this.$store.dispatch('d2admin/db/database', {
  user: true
})
db.get('keyName').value() // 'value'
```

如果是不同用户分别进行了存储（获取实例方法一样，但是存储了不同的值），存储结果将是：

![](http://fairyever.qiniudn.com/20180821093321.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

取值时将分别取到 value1，value2，value3

### 清空存储实例

使用下面的代码清空存储实例：

#### 公有

``` js
this.$store.dispatch('d2admin/db/databaseClear')
```

#### 私有

``` js
this.$store.dispatch('d2admin/db/databaseClear', {
  user: true
})
```

### 获得路由存储实例

#### 公用

假设当前页面路由信息为：

``` js
{
  name: 'page-1',
  path: '/page1',
  component: component
}
```

使用如下代码获取公用路由存储实例：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
```

您将获得下图所示节点（绿色高亮区域）：

![](http://fairyever.qiniudn.com/20180821094404.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

写入：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
db
  .set('pageName', 'page-1')
  .write()
```

结果：

![](http://fairyever.qiniudn.com/20180821094549.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

取值：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this
})
db.get('pageName').value() // page-1
```

假设在下列页面中都进行存储操作（获取实例方法一样，但是存储了不同的值）：

``` js
{
  name: 'page-1',
  path: '/page1',
  component: component
},
{
  name: 'page-2',
  path: '/page2',
  component: component
},
{
  name: 'page-3',
  path: '/page3',
  component: component
}
```

结果：

![](http://fairyever.qiniudn.com/20180821095545.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

三个页面取值时也会分别取到 page-1，page-2，page-3

#### 私有

路由存储支持私有化，即每个用户的路由存储相互区分，使用方法和普通的路由存储基本一致，只是在获取存储实例时增加一个参数：

``` js
const db = await this.$store.dispatch('d2admin/db/databasePage', {
  vm: this,
  user: true
})
```

这样在每个用户进行路由存储操作的时候数据会相互隔离。

例如 **用户 A** 在 **页面1** 中使用上述代码取得的存储实例指向位置为：

![](http://fairyever.qiniudn.com/20180821100933.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

**用户 B** 在 **页面1** 中使用上述代码取得的存储实例指向位置为：

![](http://fairyever.qiniudn.com/20180821101019.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果 **用户 A**，**用户 B** 在 **页面1**，**页面2** 分别都存储了数据，最后结果大致这样：

![](http://fairyever.qiniudn.com/20180821101536.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

### 清空路由存储实例

#### 公有

``` js
this.$store.dispatch('d2admin/db/databasePageClear', {
  vm: this
})
```

#### 私有

``` js
this.$store.dispatch('d2admin/db/databasePageClear', {
  vm: this,
  user: true
})
```

### 路由快照

路由快照操作相当于路由存储的一个快捷操作方式，旨在**快速将当前页面的 $data 数据持久化**。

路由快照将会存储到当前路由存储的 $data 字段下。

#### 公有

假设当前页面路由信息为：

``` js
{
  name: 'page-1',
  path: '/page1',
  component: component
}
```

使用如下代码存储当前页面快照：

``` js
this.$store.dispatch('d2admin/db/pageSet', {
  vm: this
})
```

结果：

![](http://fairyever.qiniudn.com/20180821102036.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

使用如下代码将快照数据还原回页面：

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

假设在下列页面中都进行快照操作：

``` js
{
  name: 'page-1',
  path: '/page1',
  component: component
},
{
  name: 'page-2',
  path: '/page2',
  component: component
},
{
  name: 'page-3',
  path: '/page3',
  component: component
}
```

每个页面的快照将会区分存放：

![](http://fairyever.qiniudn.com/20180821102520.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

#### 私有

路由快照支持私有化，即每个用户的路由快照相互区分，使用方法和普通的路由快照基本一致，只是在操作快照时增加一个参数：

存储快照：

``` js
this.$store.dispatch('d2admin/db/pageSet', {
  vm: this,
  user: true
})
```

读取快照：

``` js
// 获取数据
const data = await this.$store.dispatch('d2admin/db/pageGet', {
  vm: this,
  user: true
})
```

这样在每个用户进行路由快照操作的时候数据会相互隔离。

例如 **用户 A** 在 **页面1** 中存储了快照：

![](http://fairyever.qiniudn.com/20180821103126.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

**用户 B** 在 **页面1** 中存储了快照：

![](http://fairyever.qiniudn.com/20180821103205.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果 **用户 A**，**用户 B** 在 **页面1**，**页面2** 分别都存储了数据，最后结果大致这样：

![](http://fairyever.qiniudn.com/20180821103306.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

### 路由快照清空

#### 公有

``` js
this.$store.dispatch('d2admin/db/pageClear', {
  vm: this
})
```

#### 私有

``` js
this.$store.dispatch('d2admin/db/pageClear', {
  vm: this,
  user: true
})
```