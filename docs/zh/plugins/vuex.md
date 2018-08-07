---
sidebarDepth: 3
---

# VUEX 实用工具

D2Admin 的 vuex 模块位置：`d2-admin/src/store/modules/d2admin.js`

下面列举您在开发中很有可能会用到的 D2Admin vuex 模块数据和方法。这并不是模块的全部内容，如果您有兴趣可以亲自浏览模块代码。

## state

::: tip 前置基础
如果您还不是很了解 vuex state，请浏览官方文档：[state](https://vuex.vuejs.org/zh/guide/state.html)
:::

### userInfo

**介绍：**

用户信息，在登陆时返回的用户数据建议保存在此处（您需要自己去完善 `d2adminLogin` action）

**使用示例：**

``` vue
<template>
  <d2-container>
    Hello {{userInfo.name}}
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      userInfo: state => state.d2admin.userInfo
    })
  }
}
</script>
```

### ua

**介绍：**

用户浏览器信息，假如您需要收集访问数据，这会很有用

**使用示例：**

``` vue
<template>
  <d2-container>
    <pre>{{uaStr}}</pre>
  </d2-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      ua: state => state.d2admin.ua
    }),
    uaStr () {
      return JSON.stringify(this.ua, null, 2)
    }
  }
}
</script>
```

## actions

::: tip 前置基础
如果您还不是很了解 vuex actions，请浏览官方文档：[actions](https://vuex.vuejs.org/zh/guide/actions.html)
:::

### d2adminLogin

**介绍：**

用户登陆

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| username | 用户名 | 必选 | String |  |  |
| password | 密码 | 必选 | String |  |  |

**使用示例：**

``` vue
// 省略了页面结构
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formLogin: {
        username: 'admin',
        password: 'admin',
        code: 'v9am'
      }
    }
  },
  methods: {
    ...mapActions([
      'd2adminLogin'
    ]),
    // 提交登陆信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.d2adminLogin({
            vm: this,
            username: this.formLogin.username,
            password: this.formLogin.password
          })
        } else {
          this.$message.error('表单校验失败')
        }
      })
    }
  }
}
</script>
```

### d2adminLogout

**介绍：**

用户注销

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| confirm | 确认操作 | 必选 | Boolean |  |  |

**使用示例：**

``` vue
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'd2adminLogout'
    ]),
    logOff () {
      this.d2adminLogout({
        vm: this,
        confirm: true
      })
    }
  }
}
</script>

```

## mutations

::: tip 前置基础
如果您还不是很了解 vuex mutations，请浏览官方文档：[mutations](https://vuex.vuejs.org/zh/guide/mutations.html)
:::

### d2adminUtilVuex2DbByUuid

**介绍：**

将 state 中某项 state 持久化，根据用户区分，不同用户登陆后进行此操作时数据自动区分存放

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| key | vuex state 名称 | 必选 | String |  |  |

**使用示例：**

``` js
// 将 state 上的 userInfo 字段持久化
this.commit('d2adminUtilVuex2DbByUuid', 'userInfo')
```

### d2adminUtilDb2VuexByUuid

**介绍：**

将当前用户已经持久化的数据存回 state

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| key | vuex state 名称 | 必选 | String |  |  |
| defaultValue | 没有取到值时的默认值 | 必选 |  |  |  |
| handleFunction | 处理函数 | 非 |  |  | `res => res` |

**使用示例：**

``` js
this.commit('d2adminUtilDb2VuexByUuid', {
  key: 'userInfo',
  defaultValue: {
    name: '请重新登陆'
  }
})
```

### d2adminUtilVuex2Db

**介绍：**

和上面的 d2adminUtilVuex2DbByUuid 类似，只不过不需要用户身份，所有用户的数据放置在一个地方，如果重复赋值会覆盖数据

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| key | vuex state 名称 | 必选 | String |  |  |

**使用示例：**

``` js
this.commit('d2adminUtilVuex2Db', 'allUserPublicData')
```

### d2adminUtilDb2Vuex

**介绍：**

和上面 d2adminUtilDb2VuexByUuid 类似，变为从所有用户公用的区域取值并保存到 state

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| key | vuex state 名称 | 必选 | String |  |  |
| defaultValue | 没有取到值时的默认值 | 必选 |  |  |  |
| handleFunction | 处理函数 | 非 |  |  | `res => res` |

**使用示例：**

``` js
this.commit('d2adminUtilDb2Vuex', {
  key: 'allUserPublicData',
  defaultValue: {
    key: 'value'
  }
})
```

### d2adminUtilDatabaseUser

**介绍：**

获得当前用户的数据存储区域，这个区域是此用户独享并且和 D2Admin 系统数据分开的，你可以随便操作这里的数据

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| fn | 回调函数 | 必选 | Function |  |  |

**使用示例：**

``` vue
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      // 当前用户所有的数据
      userDatabase: '',
      // 当前用户所有的数据 key
      keyNameList: ''
    }
  },
  methods: {
    ...mapMutations([
      'd2adminUtilDatabaseUser'
    ]),
    /**
     * 加载本地数据
     */
    load () {
      this.d2adminUtilDatabaseUser(database => {
        // 获得当前用户所有的数据
        this.userDatabase = JSON.stringify(database.value(), null, 2)
        // 获得当前用户所有的数据 key
        this.keyNameList = Object.keys(database.value()).map(k => ({
          value: k,
          label: k
        }))
      })
    },
    /**
     * 删除一个字段
     */
    handleDelete (name) {
      this.d2adminUtilDatabaseUser(database => {
        database
          .unset(name)
          .write()
      })
      this.load()
    },
    /**
     * 添加一个数据
     */
    handleSet (keyName, value) {
      if (this.keyName === '') {
        this.$message.error('字段名不能为空')
        return
      }
      this.d2adminUtilDatabaseUser(database => {
        database
          .set(keyName, value)
          .write()
      })
      this.load()
    }
  }
}
</script>
```

### d2adminUtilDatabaseUserClear

**介绍：**

访问本地数据库，清空用户单独空间。只负责删除，d2adminUtilDatabaseUser 在取值时如果发现没有初始化会自动初始化

**参数**

无

**使用示例：**

``` vue
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'd2adminUtilDatabaseUserClear'
    ]),
    /**
     * 清空当前用户的数据
     */
    handleClear () {
      this.d2adminUtilDatabaseUserClear()
    }
  }
}
</script>
```

### d2adminUtilDatabase

**介绍：**

和上面的 d2adminUtilDatabaseUser 类似，只不过不需要用户身份，所有用户的数据放置在一个地方，如果重复赋值会覆盖数据

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| fn | 回调函数 | 必选 | Function |  |  |

**使用示例：**

同 d2adminUtilDatabaseUser

### d2adminUtilDatabaseClear

**介绍：**

和上面的 d2adminUtilDatabaseUserClear 类似，只不过不需要用户身份，会清空所有用户的数据。只负责删除，d2adminUtilDatabase 在取值时如果发现没有初始化会自动初始化

**参数**

无

**使用示例：**

同 d2adminUtilDatabaseUserClear

### d2adminMenuHeaderSet

**介绍：**

设置顶栏菜单，你可以修改 D2Admin 默认的菜单更新逻辑，在任何地方使用这个方法更新菜单数据

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| menu | 菜单数据 | 必选 | Array |  |  |

**使用示例：**

``` js
this.$store.commit('d2adminMenuHeaderSet', menuHeader)
```

**数据格式**

| 字段名 | 介绍 | 必选 | 值类型 | 默认值 |
| --- | --- | --- | --- | --- |
| path | 路由 path | 非 | String | `lodash.uniqueid('d2-menu-empty-')` |
| title | 菜单名称 | 必选 | String | 未命名菜单 |
| icon | 菜单图标 | 非 | String | file-o |
| children | 子菜单数据 | 非 | Array |  |

示例

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

支持设置临时菜单，如果您在开发页面前需要先设计好菜单结构，可以只设置 title 字段，D2Admin 在生成菜单时会使用随机唯一 id 区分菜单项目，并且在点击时提示这是一个临时菜单

设置临时菜单的示例

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

### d2adminMenuAsideSet

**介绍：**

同 d2adminMenuHeaderSet

**参数**

同 d2adminMenuHeaderSet

**使用示例：**

同 d2adminMenuHeaderSet

### d2adminPageOpenNew

**介绍：**

打开一个新的页面（如果页面已经存在，会跳转到以前的页面）

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | 路由 name | 必选 | String |  |  |
| params | 路由 params | 必选 | Object |  |  |
| query | 路由 query | 必选 | Object |  |  |

**使用示例：**

``` js
router.afterEach(to => {
  // 需要的信息
  const app = router.app
  const { name, params, query } = to
  // 多页控制 打开新的页面
  app.$store.commit('d2adminPageOpenNew', { name, params, query })
})
```

### d2adminTagClose

**介绍：**

关闭一个 tag (关闭一个页面)

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |
| tagName | 路由 name | 必选 | String |  |  |

``` js
this.$store.commit('d2adminTagClose', {
  tagName: 'page-name',
  vm: this
})
```

### d2adminTagCloseLeft

**介绍：**

关闭当前标签左边的标签

**参数**

无

**使用示例：**

这些的示例写在一起

* d2adminTagCloseLeft
* d2adminTagCloseRight
* d2adminTagCloseOther
* d2adminTagCloseAll

见下

``` js
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'd2adminTagCloseLeft',
      'd2adminTagCloseRight',
      'd2adminTagCloseOther',
      'd2adminTagCloseAll'
    ]),
    /**
     * @description 接收点击关闭控制上选项的事件
     */
    handleControlItemClick (command) {
      switch (command) {
        case 'left':
          this.d2adminTagCloseLeft()
          break
        case 'right':
          this.d2adminTagCloseRight()
          break
        case 'other':
          this.d2adminTagCloseOther()
          break
        case 'all':
          this.d2adminTagCloseAll(this)
          break
        default:
          this.$message.error('无效的操作')
          break
      }
    }
  }
}
</script>
```

### d2adminTagCloseRight

**介绍：**

关闭当前标签右边的标签

**参数**

无

**使用示例：**

见 d2adminTagCloseLeft

### d2adminTagCloseOther

**介绍：**

关闭当前激活之外的 tag

**参数**

无

**使用示例：**

见 d2adminTagCloseLeft

### d2adminTagCloseAll

**介绍：**

关闭所有 tag

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| vm | vue 实例 | 必选 | Object |  |  |

**使用示例：**

见 d2adminTagCloseLeft

### d2adminMenuAsideCollapseSet

**介绍：**

设置侧边栏展开或者收缩

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| collapse | 展开或者收缩 | 必选 | Boolean |  |  |

**使用示例：**

``` js
// 展开侧边栏
this.$store.commit('d2adminMenuAsideCollapseSet', false)
```

### d2adminMenuAsideCollapseToggle

**介绍：**

切换侧边栏展开和收缩

**参数**

无

**使用示例：**

``` js
this.$store.commit('d2adminMenuAsideCollapseToggle')
```

### d2adminFullScreenSet

**介绍：**

设置全屏状态

**参数**

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| isFullScreen | 全屏 | 必选 | Boolean |  |  |

**使用示例：**

``` js
// 开启全屏
this.$store.commit('d2adminFullScreenSet', true)
```

### d2adminFullScreenToggle

**介绍：**

切换全屏

**参数**

无

**使用示例：**

``` js
this.$store.commit('d2adminFullScreenToggle')
```
