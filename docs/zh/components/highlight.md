# 代码高亮

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| code | 代码字符串 | 非 | String |  | console.log('you lost code prop') |
| format-html | 是否格式化 HTML | 非 | Boolean |  | false |

::: tip
format 建议只在内容为 HTML 的时候打开，如果内容不是 HTML，设置为 true 会有负面效果
:::

## 示例

``` vue
<d2-highlight code="alert('Hello')"/>
```

::: tip
本框架只是提供代码高亮的简单实现，如需实现更高级的设置请修改组件代码
:::