# 页面容器

页面容器组件是每个页面的基础，为了在整个项目中统一效果，它应该是 `<template>` 组件的直接子组件

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 容器类型 | 非 | String | card ghost card-full | card |
| responsive | 响应式宽度 | 非 | Boolean |  | false |

::: tip
`responsive` 参数设置只在 `type` 等于 `card` 或 `ghost` 时生效
:::

## 使用方法

一个基础单文件页面组件的示例

``` vue
<template>
  <Container>
    <template slot="header">
      可选的 header 内容 ...
    </template>
    主体内容 ...
  </Container>
</template>

<script>
export default {
  name: 'your-component-name'
}
</script>

<style lang="scss">
// 需要的话引入
@import '~@/assets/style/public.scss';
</style>
```

## 基础页面容器

高度根据内容适应

``` vue
<Container>
  主体内容
</Container>
```

使用 `slot`

``` vue
<Container>
  <template slot="header">我是插入到 header 中的内容</template>
  主体内容
</Container>
```

## 自适应填充页面容器

无论内容高度多少，都会自动撑满页面，并有可选的 `header` 和 `footer` 插槽

示例：

``` vue
<template>
  <Container type="card-full">
    <template slot="header">
      可选的 header 内容 ...
    </template>
    主体内容 ...
    <template slot="footer">
      可选的 footer 内容 ...
    </template>
  </Container>
</template>
```

## 隐形页面容器

不显示任何背景色和边框

``` vue
<Container type="ghost">
  主体内容
</Container>
```