# d2-markdown

markdown 渲染器组件

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| url | markdown文件地址 | 非 | String |  | 无 |
| source | markdown内容 | 非 | String |  | 无 |
| highlight | 代码高亮 | 非 | Boolean |  | false |
| baidupan | 百度网盘分享链接显示优化 | 非 | Boolean |  | true |

## 使用方法

加载一个.md文件

``` vue
<d2-markdown url="/static/md/xxxx.md"/>
```

加载资源

```vue
<template>
  <d2-markdown :source="doc"/>
</template>

<script>
const doc = `
# Header

## title

text`.trim()

export default {
  data () {
    return {
      doc
    }
  }
}
</script>
```

D2Admin 已经帮你配置好 webpack，你可以使用以下方式加载 markdown 文件

```vue
<template>
  <d2-markdown :source="doc"/>
</template>

<script>
import doc from './md/doc.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
```

## 百度网盘分享链接优化

当书写类似下面的分享链接时

::: tip
需要 `baidupan = true`
:::

```
普通分享链接

> https://pan.baidu.com/s/1kW6uUwB

私密分享链接

> 链接: https://pan.baidu.com/s/1ggFW21l 密码: 877y
```

markdown 中引用部分的文本由于被识别为百度云的分享链接，所以不会被当做 `blockquote` 渲染（非百度云链接的引用行不会改变），会以一种特别的块来显示，效果见下

![效果](./image/baiduyun.png)

::: tip
了解 D2Admin 是如何在 markdown 中匹配百度云链接的？ [查看源码](https://github.com/d2-projects/d2-admin/blob/master/src/components/core/d2-markdown/index.vue)
:::