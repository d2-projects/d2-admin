# 可配置组合表单

本案例将会讲解如何使用 vue.js + ElementUI 开发一个简单的 **可配置组合表单 Demo**。

![](http://fairyever.qiniudn.com/20180801111723.png)

示例源代码 [github](https://github.com/d2-projects/d2-demos/tree/master/combinable-questionnaire)

操作演示：

![](http://fairyever.qiniudn.com/20180801093848.gif)

在左侧新建表单区块，选择区块标题和表单组件类型后点击确定，会在中间区域生成一个块新的表单，右侧展示了所有表单的数据合并结果。

在本示例中你主要可以看到以下知识点的运用：

* vue.js 单文件组件，
* 组件传参
* 自定义 v-model
* 数据监听
* 数据合并
* 批量自动注册组件
* 使用 mixin 抽取公用代码
* sass 语法
* BEM 规范
* 尽量避免使用 for 循环的写法
* `<component>` 组件
* 动态绑定 v-model 到一组数据

> 上面列举的这些是因为以前有群里朋友询问相关的实现方法，在此列出，可能正在读这篇文章的你已经都掌握了，恭喜你！（本篇文章的起因也是群友提问）

下面开始正文

## 总览

这个 demo 的所有组件和逻辑如果写在一个文件中大概会有几百行，维护起来会有麻烦，所以首先设计这样的目录结构：

![](http://fairyever.qiniudn.com/20180801100402.jpg)

## 搭建基本框架

为了快速开发页面本项目使用 ElementUI 和 D2Admin 快速搭建，以下示例中组件都来自这两个开源项目，如果你不认识这些组件也没有关系，大致了解意思就可。

首先写出页面的大致框架：

``` vue
<template>
  <d2-container>
    <template slot="header">可配置问卷示例</template>
    <div class="questionnaire">
      <el-container>
        <!-- 左侧位置 -->
        <!-- 中间位置 -->
        <!-- 右侧位置 -->
      </el-container>
    </div>
    <template slot="footer">从左侧选择要添加的表单块，右侧查看结果</template>
  </d2-container>
</template>
```

``` vue
<script>
export default {
  name: 'page1',
  components: {
    // 这里以后要要注册表单区块 左侧边栏 右侧边栏
  },
  data () {
    return {
      formList: [], // 所有注册的表单区块
      forms: [] // 用户已经选择的表单区块
    }
  }
}
</script>
```

css / sass 暂时先忽略，在最后会展示样式代码

## 表单区块

新建 `page1/components/Form/Form1.vue` 作为第一个表单区块

``` vue
<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="姓名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-radio-group v-model="form.usersex">
        <el-radio :label="1">男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Form1',
  props: {
    value: {
      default: () => ({
        username: '',
        usersex: 1
      })
    }
  },
  data () {
    return {
      form: {
        username: '',
        usersex: 1
      }
    }
  },
  watch: {
    form: {
      // 处理方法
      handler (value) {
        this.$emit('input', value)
      },
      // 深度 watch
      deep: true,
      // 首先自己执行一次
      immediate: true
    }
  }
}
</script>
```

这是用 ElementUI 构建的很简单的一个表单，甚至没有校验。

然后我们在页面组件上注册这个表单区块：

``` vue
<script>
components: {
  // 注册组件
  Form1: () => import('./components/Form/Form1.vue')
},
data () {
  return {
    // 注册到数据
    formList: [
      {
        title: '基础',
        name: 'Form1'
      }
    ]
  }
}
</script>
```

等等，假如我有 20 个区块，难道要写 20 遍注册，在 formList 里手动加 20 个对象吗？

所以我们先新建了 7 个区块，区块内容都大同小异，并将代码稍加改造：

表单区块示例

``` vue {17-22}
<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="姓名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-radio-group v-model="form.usersex">
        <el-radio :label="1">男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  // 排序使用
  index: 1,
  // 组件标题
  title: '基础',
  // 组件名
  name: 'Form1',
  props: {
    value: {
      default: () => ({
        username: '',
        usersex: 1
      })
    }
  },
  data () {
    return {
      form: {
        username: '',
        usersex: 1
      }
    }
  },
  watch: {
    form: {
      handler (value) {
        this.$emit('input', value)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
```

页面组件（只展示重点部分）

``` vue
<script>
import { sortBy } from 'lodash'
const req = context => context.keys().map(context)
const forms = req(require.context('./components/Form/', false, /\.vue$/))
const components = {}
const formList = []
sortBy(forms.map(e => {
  const component = e.default
  const { index, title, name } = component
  return { component, title, index, name }
}), ['index']).forEach(form => {
  const { component, title, name } = form
  components[name] = component
  formList.push({ title, name })
})
export default {
  components,
  data () {
    return {
      formList
    }
  }
}
</script>
```

你可能要问，上面这一大坨是什么鬼 ？？？

首先介绍 webpack 的 [require-context](https://webpack.js.org/guides/dependency-management/#require-context) 你可以点击链接查看官方文档。

简单通俗来讲这个方法就是为了方便引入大量文件用的，它接收三个参数

* 你要引入文件的目录
* 是否要查找该目录下的子级目录
* 匹配要引入的文件

然后会返回一个 require 对象，对象有三个属性：resolve 、keys、id

* resolve: 是一个函数，他返回的是被解析模块的id
* keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成
* id：上下文模块的id

所以在上面代码中

``` js
const req = context => context.keys().map(context)
const forms = req(require.context('./components/Form/', false, /\.vue$/))
```

最后得到的 forms 就是 `./components/Form/` 目录下所有的 vue 文件对象

然后通过

``` js
sortBy(forms.map(e => {
  const component = e.default
  const { index, title, name } = component
  return { component, title, index, name }
}), ['index']).forEach(form => {
  const { component, title, name } = form
  components[name] = component
  formList.push({ title, name })
})
```

处理 forms 对象，得到 vue 注册组件时需要的的 components 格式，并且将所有的组件信息保存进 formList 供页面逻辑使用。具体的转换方式请查看上面的代码。

这样不管我们在 `./components/Form/` 下写了多少单文件组件，webpack 都会自动帮我们引入并通过我们的代码注册到页面中。

大量组件注册的问题解决了，接下来我们还要一个需要优化的问题：

不管是 Form1 还是 Form2 还是 FormN，大家会发现其实代码里有一些重复内容，还有一些是有逻辑关系的重复内容，下面我们通过写一个 mixin 来减少重复代码：

mixin.js：

``` js
export default function (form) {
  return {
    props: {
      value: {
        default: () => form
      }
    },
    data () {
      return {
        form
      }
    },
    watch: {
      form: {
        handler (value) {
          this.$emit('input', value)
        },
        deep: true,
        immediate: true
      }
    }
  }
}
```

这个 js 文件导出了一个函数，该函数接收一个 form 参数，并将这个参数赋值给 value prop 以及 data 中的 form 字段并返回一个对象。

然后我们将这个 mixin 注册进每个 Form 组件中，并且改造每个 Form 组件：

``` vue
<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="姓名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-radio-group v-model="form.usersex">
        <el-radio :label="1">男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 1,
  title: '基础',
  name: 'Form1',
  mixins: [
    mixin({
      username: '',
      usersex: 1
    })
  ]
}
</script>
```

这样每个 Form 组件都节省下了十几行代码，关键是这些代码是重复冗余的。

最后页面组件是这个样子：

``` vue
<template>
  <d2-container>
    <template slot="header">
      可配置问卷示例
    </template>
    <div class="questionnaire">
      <el-container>
        <aside-left
          :all="formListUseful"
          :selected="forms"
          @select="handleAsideSelect"
          @remove="handleAsideRemove"/>
        <el-main class="questionnaire__main">
          <div class="questionnaire__container">
            <el-card
              v-for="(form, index) in forms"
              :key="index"
              shadow="never"
              class="questionnaire__card">
              <template slot="header">
                {{form.title}}
              </template>
              <div style="margin-bottom: -20px;">
                <component
                  :is="form.name"
                  v-model="forms[index].data"/>
              </div>
            </el-card>
          </div>
        </el-main>
        <aside-right :res="res"/>
      </el-container>
    </div>
    <template slot="footer">
      从左侧选择要添加的表单块，右侧查看结果
    </template>
  </d2-container>
</template>

<script>
import { sortBy } from 'lodash'
const req = context => context.keys().map(context)
const forms = req(require.context('./components/Form/', false, /\.vue$/))
const components = {}
const formList = []
sortBy(forms.map(e => {
  const component = e.default
  const { index, title, name } = component
  return { component, title, index, name }
}), ['index']).forEach(form => {
  const { component, title, name } = form
  components[name] = component
  formList.push({ title, name })
})
export default {
  name: 'page1',
  components: {
    ...components,
    AsideLeft: () => import('./components/AsideLeft'),
    AsideRight: () => import('./components/AsideRight')
  },
  data () {
    return {
      formList,
      forms: []
    }
  },
  computed: {
    // 合并最后结果
    res () {
      return Object.assign({}, ...this.forms.map(e => e.data))
    },
    formListUseful () {
      return this.formList.filter(e => !this.forms.find(f => f.name === e.name))
    }
  },
  methods: {
    handleAsideSelect (val) {
      this.forms.push({
        ...val
      })
    },
    handleAsideRemove (index) {
      this.forms.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.questionnaire {
  @extend %full;
  .el-container {
    @extend %full;
  }
  .questionnaire__aside--left {
    border-right: 1px solid #cfd7e5;
    padding: 20px;
  }
  .questionnaire__aside--right {
    border-left: 1px solid #cfd7e5;
    padding: 20px;
    .questionnaire__res-key {
      font-size: 12px;
      line-height: 14px;
      color: $color-text-sub;
    }
    .questionnaire__res-value {
      font-size: 14px;
      line-height: 20px;
      color: $color-text-normal;
      margin-bottom: 10px;
    }
  }
  .questionnaire__main {
    background-color: rgba(#000, .05);
  }
  .questionnaire__container {
    max-width: 400px;
    margin: 0px auto;
    .questionnaire__card {
      border: 1px solid #cfd7e5;
      margin-bottom: 20px;
      .el-form-item__label {
        line-height: 16px;
      }
    }
  }
}
</style>
```

## 左侧页面组件

左侧右侧组件不是重点内容，所以一次性展示出带有注释的代码

新建 `page1/components/AsideLeft/index.vue` 作为左侧页面组件

``` vue
<template>
  <el-aside
    width="200px"
    class="questionnaire__aside--left">
    <!-- 已经选择的区块列表 点击每个按钮后开始删除响应的区块 -->
    <div
      v-for="(item, index) in selected"
      :key="index"
      class="d2-mb-10">
      <el-button
        @click="handleRemove(item, index)"
        style="width: 100%;">
        {{item.title}}
      </el-button>
    </div>
    <!-- 新建区块按钮 -->
    <div>
      <el-button
        type="primary"
        style="width: 100%;"
        @click="dialogVisible = true">
        <d2-icon name="plus"/> 新增
      </el-button>
    </div>
    <!-- 选择区块界面 -->
    <el-dialog
      title="选择区块"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible">
      <p class="d2-mt-0">区块标题</p>
      <el-input v-model="title"></el-input>
      <p>区块组件</p>
      <el-alert
        v-if="all.length === 0"
        type="error"
        title="没有可用区块"/>
      <el-radio-group
        v-else
        v-model="name"
        size="small">
        <el-radio-button
          v-for="(item, index) in all"
          :key="index"
          :label="item.name">
          {{item.title}}
        </el-radio-button>
      </el-radio-group>
      <span slot="footer">
        <el-button
          @click="dialogVisible = false">
          取 消
        </el-button>
        <!-- 如果没有区块可用 不显示确定按钮 -->
        <el-button
          v-if="all.length !== 0"
          type="primary"
          @click="handleSelect">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-aside>
</template>

<script>
export default {
  name: 'AsideLeft',
  data () {
    return {
      // 新建区块的 dialog 显示控制
      dialogVisible: false,
      // 新建区块时设置的区块标题
      title: '新区块',
      // 新建区块时选择的区块
      name: ''
    }
  },
  props: {
    // 所有可选区块
    all: {
      default: () => []
    },
    // 用户已经选择的区块
    selected: {
      default: () => []
    }
  },
  watch: {
    // 用户选择一个区块后，标题自动改为这个区块的默认标题
    name (value) {
      this.title = this.all.find(e => e.name === value).title
    }
  },
  methods: {
    // 用户选择区块完毕
    handleSelect () {
      // 关闭 dialog
      this.dialogVisible = false
      // 发送事件
      this.$emit('select', {
        name: this.name,
        title: this.title,
        data: {}
      })
    },
    // 用户删除区块
    handleRemove (item, index) {
      this.$confirm(`删除 "${item.title}" 区块吗`, '确认操作', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 发送事件
        this.$emit('remove', index)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
```

## 右侧页面组件

左侧右侧组件不是重点内容，所以一次性展示出带有注释的代码

新建 `page1/components/AsideRight/index.vue` 作为右侧页面组件

``` vue
<template>
  <el-aside
    width="200px"
    class="questionnaire__aside--right">
    <div
      v-for="(item, index) in reslist"
      :key="index">
      <div
        class="questionnaire__res-key">
        {{item.keyName}}
      </div>
      <div
        class="questionnaire__res-value">
        {{item.value === '' ? '未填写' : item.value}}
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  props: {
    // 接收表单结果
    res: {
      default: () => ({})
    }
  },
  computed: {
    // 处理数据格式
    reslist () {
      return Object.keys(this.res).map(keyName => ({
        keyName,
        value: this.res[keyName]
      }))
    }
  }
}
</script>
```

所有代码就结束了，其实我们就写了五个文件

* 页面组件
* 两个侧边栏
* 表单区块
* 表单区块 mixin

这是一个很小但是涉及知识还不算少的小例子，如果上面的代码你有疑惑，可以来 D2 Projects 的 QQ 交流群 806395827 提问。

<img src="http://fairyever.qiniudn.com/20180801111951.JPG" style="width: 200px;"/>

本文首发于 D2 开源项目组官方公众号 D2 Projects

<img src="http://fairyever.qiniudn.com/20180801111123.jpg" style="width: 200px;"/>

## 参考

| 地址 | 描述 |
| --- | --- |
| [掘金专栏](https://juejin.im/user/57a48b632e958a006691b946/posts) | 掘金专栏 |
| [团队主页](https://github.com/d2-projects) | 开源团队主页 |
| [D2Admin 中文文档](http://app.d3collection.cn/d2-admin-doc/lastest/zh/) | 中文文档 |
| [D2Admin 预览地址](https://fairyever.gitee.io/d2-admin-preview/#/index) | 完整版 预览地址 |
| [D2Admin github](https://github.com/d2-projects/d2-admin) | 完整版 Github 仓库 |
| [ElementUI](http://element.eleme.io/#/zh-CN) | ElementUI 组件库 |