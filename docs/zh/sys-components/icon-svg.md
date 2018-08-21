# d2-icon-svg

SVG 图标组件

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| name | 图标名称 | 非 | String | src/assets/icons/svg 中 .svg 文件名 | 空 |

## 使用方法

首先将下载的 .svg 图标放入 `src/assets/icons/svg` 文件夹下

然后使用组件

``` vue
<d2-icon-svg name="刚才的svg文件名"/>
```

## 获取已经注册的所有图标

你已经发现了，只需要将图标文件放入项目中就会自动注册

这是因为已经对 `webpack` 和 `svg-sprite-loader` 进行了相关设置，`src/assets/icons/svg` 文件夹中的图标会自动注册到项目中，文件全部打包成 svg-sprite，名称注册到 `Vue.$IconSvg` 属性中

所以如果你需要检查项目中已经注册的所有图标，可以通过如下方式

``` js
// 在 vue 单文件组件中
console.log(this.$IconSvg)
```

## 参考

演示图标来源 [iconfont.cn @龙正昆《常用的50个4px双色图标库》](http://iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=4878)