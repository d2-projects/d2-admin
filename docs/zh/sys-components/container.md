# d2-container

页面容器组件

::: tip 提示
`<d2-container>` 是 D2Admin 构建页面最重要的组件，请仔细阅读本文档
:::

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 容器模式 | 非 | String | full card ghost | full |
| better-scroll | 使用自定义滚动条 | 非 | Boolean |  | false |
| better-scroll-options | 自定义滚动条配置 | 非 | Object | [better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | 见下 |

* better-scroll-options 默认值

``` js
{
	mouseWheel: true,
	scrollbar: {
	  fade: true,
		interactive: false
	}
}
```
设置的参数值会和默认值使用 `Object.assign` 合并，最后在初始化 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 时传入

下面的介绍中 **主区域** 范围见下

![](http://fairyever.qiniudn.com/20180723081251.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

原生滚动条和自定义滚动条的区别

![](http://fairyever.qiniudn.com/20180723082800.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

::: tip
为了美观，每种模式的布局都会自动在右侧保留 20px 的外边距，见上图蓝色边框右侧区域
:::

## full

full 模式会生成一个无论内容多少，都会填满主区域的页面容器。

页面内容较少时，d2-container 也会填满主区域：

``` vue
<template>
  <d2-container>
    内容
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_normal_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

页面有较多内容时会在侧面产生滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_normal_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

支持 header 和 footer 插槽，两个区域分别会固定在主体区域的顶部和底部，内容压缩至中间

``` vue
<template>
  <d2-container>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_slot_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，滚动条会出现在 header 和 footer 之间

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_slot_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

设置 better-scroll 属性可以启用自定义滚动条，自定义滚动条在内容不满一屏时不会显示

``` vue
<template>
  <d2-container better-scroll>
    内容
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_bs_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

超出一屏后在滚动时显示自定义滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_bs_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会出现在 header 和 footer 之间

``` vue
<template>
  <d2-container better-scroll>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Header</template>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_bs_long-slot@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## card

卡片模式适用于简单的小页面，可以方便地实现下面的布局效果：

``` vue
<template>
  <d2-container type="card">
    内容
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_normal_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果内容超出一屏长度，会在右侧显示滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_normal_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果内容超出一屏，滚动条滚动到底部后主体区域会距离底部 20px 距离

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_normal_long-scroll-end@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

支持 header 和 footer 插槽，header 区域会固定在顶部，footer 区域会固定在底部

``` vue
<template>
  <d2-container type="card">
    <template slot="header">Header</template>
    <d2-demo-article/>
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_slot_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，滚动条会在 header 和 footer 之间显示

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_slot_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，滚动条滚动到底部后主体区域依然会距离底部 20px 距离

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_slot_long-end@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

设置 better-scroll 属性可以启用自定义滚动条，滚动条在内容不满一屏时不会显示

``` vue
<template>
  <d2-container type="card" better-scroll>
    内容
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_bs_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

超出一屏后在滚动时显示自定义滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_bs_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会在 header 和 footer 之间显示

``` vue
<template>
  <d2-container type="card" better-scroll>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/2018-07-22-autorename-1-2018-07-22-12-03-45-long-slot@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，自定义滚动条滚动到底部后主体区域依然会距离底部 20px 距离

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_bs_long-slot-end@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## ghost

ghost 模式适合对页面有定制需求的用户，此模式生成一个没有背景颜色的页面区域

``` vue
<template>
  <d2-container type="ghost">
    内容
  </d2-container>
</template>
```

该模式默认没有内边距，示例中的内边距样式需要自行添加，比如可以在组件内嵌添加一层带有 .d2-pt 和 .d2-pb class 的 div，像下面这样

``` vue
<template>
  <d2-container type="ghost">
    <div class="d2-pt d2-pb">
      内容
    </div>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_normal_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果内容超出一屏长度，会在右侧显示滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_normal_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

支持 header 和 footer 插槽，header 区域会固定在顶部，footer 区域会固定在底部

``` vue
<template>
  <d2-container type="ghost">
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

如果你希望有内边距：

``` vue
<template>
  <d2-container type="ghost">
    <template slot="header">Header</template>
    <div class="d2-pt d2-pb">
      内容
    </div>
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_slot_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，滚动条会出现在 header 和 footer 之间

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_slot_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

设置 better-scroll 属性可以启用自定义滚动条，自定义滚动条在内容不满一屏时不会显示

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    内容
  </d2-container>
</template>
```

同样，如果你希望有内边距：

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    <div class="d2-pt d2-pb">
      内容
    </div>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_bs_short@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

超出一屏后在滚动时显示自定义滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_bs_long@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会在 header 和 footer 之间显示

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    <template slot="header">Header</template>
    内容
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

有内边距：

``` vue
<template>
  <d2-container type="ghost" better-scroll>
    <template slot="header">Header</template>
    <div class="d2-pt d2-pb">
      内容
    </div>
    <template slot="footer">Footer</template>
  </d2-container>
</template>
```

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_bs_long-slot@2x.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

## 如何选择

如果不是纯展示型页面，通常建议不要开启 better-scroll 属性，除非你可以通过设置 better-scroll-options 解决你遇到的问题

::: tip 开启 better-scroll 属性可能会带来的问题
* 页面文字无法选中
* 表单控件失灵
* 拖拽相关操作失灵
* ...

上述问题理论上都可以通过配置 better-scroll-options 解决，better-scroll-options 参数设置的对象在和默认值合并后会作为 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 配置参数传入。D2Admin 暂时只对 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 做了简单设置，如果你遇到了相关问题请 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 相关设置文档
:::

## 注

本文插图为 [@FairyEver](https://github.com/FairyEver) 专为此文档设计，未经授权不得转载或者修改使用

![](http://fairyever.qiniudn.com/20180723083604.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)

![](http://fairyever.qiniudn.com/20180723084030.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100|imageslim)






