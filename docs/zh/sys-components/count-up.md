# d2-count-up

数字动画组件

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| start | 起始值 | 非 | Number |  | 0 |
| end | 结束值 | 是 | Number |  | 0 |
| decimals | 小数位数 | 非 | Number |  | 0 |
| duration | 持续时间 | 非 | Number |  | 2 |
| options | 设置项 | 非 | Object |  | 空对象 |
| callback | 回调函数 | 非 | Function |  | 空函数 |

## 示例

``` vue
// 基本使用方法
<d2-count-up :end="100"/>

// 设置始末值
<d2-count-up :start="14" :end="100"/>

// 设置动画时间
<d2-count-up :end="100" :decimals="2"/>
```

组件会在页面上渲染 `<span>` 标签

组件根据 [countUp.js](https://github.com/inorganik/countUp.js) 封装，`options` 参数详见原始插件文档