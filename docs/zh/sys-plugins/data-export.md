# 表格导出

本框架集成了数据导出功能，并包装成插件

## 注册插件

``` js
import pluginExport from '@/plugin/export'
Vue.use(pluginExport)
```

之后就可以在组件中使用 `this.$export` 来调用导出功能

::: tip
d2admin 已经帮你注册好，可以直接使用，无需写上面的代码
:::

## 导出 csv

此方法将数据以 `csv` 格式导出，并且返回一个 `Promise` 对象

使用

``` js
this.$export.csv({
  columns,
  data
})
  .then(() => {
    // ...可选回调
  })
```

参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| columns | 列 | 非 | Array |  | 空数组 |
| data | 行数据 | 非 | Array |  | 空数组 |
| title | 文件名 | 非 | String |  | table |
| noHeader | 不导出表头 | 非 | Boolean |  | false |
| separator | 数据分隔符 | 非 | String |  | , |
| quoted | 每项数据是否加引号 | 非 | Boolean |  | false |

示例

``` js
const columns = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]
const data = [
  {
    name: 'lucy',
    age: 24
  },
  {
    name: 'bob',
    age: 26
  }
]
this.$export.csv({
  columns,
  data
})
```

## 导出 xlsx

此方法将数据以 `xlsx` 格式导出，并且返回一个 `Promise` 对象

使用

``` js
this.$export.excel({
  columns,
  data
})
  .then(() => {
    // ...可选回调
  })
```

参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| columns | 列 | 非 | Array |  | 空数组 |
| data | 行数据 | 非 | Array |  | 空数组 |
| title | 文件名 | 非 | String |  | table |

示例

``` js
const columns = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]
const data = [
  {
    name: 'lucy',
    age: 24
  },
  {
    name: 'bob',
    age: 26
  }
]
this.$export.excel({
  columns,
  data
})
```

## 导出 txt

此方法将数据以 `txt` 格式导出，并且返回一个 `Promise` 对象

使用

``` js
this.$export.txt({
  text: '文本内容',
  title: '文件名'
})
  .then(() => {
    // ...可选回调
  })
```

参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| text | 文件内容 | 非 | String |  | 空 |
| title | 文件名 | 非 | String |  | 文本 |
