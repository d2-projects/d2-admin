# 页面容器

## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 容器模式 | 非 | string | full card ghost | full |
| scroll | 使用自定义滚动条 | 非 | boolean |  | false |

下面的介绍中 **主区域** 范围见下

![](http://fairyever.qiniudn.com/2018-07-22-autorename-1-2018-07-22-12-06-18-space-main@2x.png)

## full

full 模式会生成一个无论内容多少，都会填满主区域的页面容器。

页面内容较少时，container 也会填满主区域：

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_normal_short@2x.png)

页面有较多内容时会在侧面产生滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_normal_long@2x.png)

支持 header 和 footer 插槽，两个区域分别会固定在主体区域的顶部和底部，内容压缩至中间

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_slot_short@2x.png)

如果使用插槽后内容超出一屏，滚动条会出现在 header 和 footer 之间

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_slot_long@2x.png)

设置 scroll 属性可以启用自定义滚动条，自定义滚动条在内容不满一屏时不会显示

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_bs_short@2x.png)

超出一屏后在滚动时显示自定义滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_bs_long@2x.png)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会出现在 header 和 footer 之间

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_full_bs_long-slot@2x.png)

## card

卡片模式适用于简单的小页面，可以方便地实现下面的布局效果：

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_normal_short@2x.png)

如果内容超出一屏长度，会在右侧显示滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_normal_long@2x.png)

如果内容超出一屏，滚动条滚动到底部后主体区域会距离底部 20px 距离

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_normal_long-scroll-end@2x.png)

支持 header 和 footer 插槽，header 区域会固定在顶部，footer 区域会固定在底部

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_slot_short@2x.png)

如果使用插槽后内容超出一屏，滚动条会在 header 和 footer 之间显示

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_slot_long@2x.png)

如果使用插槽后内容超出一屏，滚动条滚动到底部后主体区域依然会距离底部 20px 距离

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_slot_long-end@2x.png)

设置 scroll 属性可以启用自定义滚动条，滚动条在内容不满一屏时不会显示

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_bs_short@2x.png)

超出一屏后在滚动时显示自定义滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_bs_long@2x.png)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会在 header 和 footer 之间显示

![](http://fairyever.qiniudn.com/2018-07-22-autorename-1-2018-07-22-12-03-45-long-slot@2x.png)

如果使用插槽后内容超出一屏，自定义滚动条滚动到底部后主体区域依然会距离底部 20px 距离

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_card_bs_long-slot-end@2x.png)

## ghost

ghost 模式适合对页面有定制需求的用户，此模式生成一个没有背景颜色的页面区域

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_normal_short@2x.png)

如果内容超出一屏长度，会在右侧显示滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_normal_long@2x.png)

支持 header 和 footer 插槽，header 区域会固定在顶部，footer 区域会固定在底部

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_slot_short@2x.png)

如果使用插槽后内容超出一屏，滚动条会出现在 header 和 footer 之间

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_slot_long@2x.png)

设置 scroll 属性可以启用自定义滚动条，自定义滚动条在内容不满一屏时不会显示

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_bs_short@2x.png)

超出一屏后在滚动时显示自定义滚动条

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_bs_long@2x.png)

如果使用插槽后内容超出一屏，发生滚动时自定义滚动条会在 header 和 footer 之间显示

![](http://fairyever.qiniudn.com/d2-container-guide-201807221232AM_ghost_bs_long-slot@2x.png)

## 注

本文插图为 [@FairyEver](https://github.com/FairyEver) 为此文档设计，未经授权不得转载或者修改使用

![](http://fairyever.qiniudn.com/2018-07-22-Snip20180722_2.png)

![](http://fairyever.qiniudn.com/2018-07-22-Snip20180722_6.png)






