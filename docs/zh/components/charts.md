# 图表 [ G2 ]

::: tip
此文档仅对 `1.1.0` 及其以下版本有效，`1.1.1` 开始变更了图表库
:::

## 介绍

D2Admin 集成了由蚂蚁金服出品的 **G2** 图表库

## 实现方式

`src/components/charts/register.js` 为注册图表组件的文件

`src/components/charts/G2` 为图表组件存放位置

`src/components/charts/G2/mixins/G2.js` 是图表最主要的文件，这是一个所有的图表组件都会使用的 mixin，这个 mixin 主要有以下用途

 - 将 G2 和 DataSet 绑定到 data 上，方便组件使用，省去重复 `import G2 from '@antv/g2'` 等
 - 将 [G2 Chart类](http://antv.alipay.com/zh-cn/g2/3.x/api/chart.html#_Chart) 的属性全部暴露为 Vue 组件参数，这些参数会在初始化图表时用到
 - 提供了额外的设置参数，比如自动高度，自动初始化，初始化延时
 - 关闭 G2 的体验改进计划打点请求
 - data 上的 chart 对象
 - 自动初始化(或者不初始化)图表
 - `creatChart` 方法，根据参数设置生成 data 上的 chart 对象
 - `resize` 方法

在图表组件中使用这个 mixin 示例

``` vue
<template>
  <!-- 如果需要开启自动高度功能 需要在这里设置 style="height: 100%;" -->
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
// 引入公用 mixin
import G2 from '@/components/charts/G2/mixins/G2.js'
export default {
  mixins: [
    G2
  ],
  methods: {
    // 初始化图表
    init () {
      // mixin 中提供 creatChart 方法，这部分每个图表都一样
      this.creatChart()
      // 本组件的特殊设置 这部分每个图表不一样 你只需要改这部分内容
      this.chart.source(this.data)
      this.chart.coord().transpose()
      this.chart.interval().position('x*y')
      // 最后一步 渲染图表 这部分每个图表都一样
      this.chart.render()
    },
    // 数据源改变 重新渲染新的数据
    changeData () {
      this.chart.changeData(this.data)
    }
  }
}
</script>
```

上面的代码段展示了如何使用 mixin 快速制作一个图表组件，只需根据某个图表的个性化需要，在组件中重新定义 `init` 和 `changeData` 方法即可

你可以修改这个 mixin 去实现更多的功能，同时影响所有的图表组件

::: tip
这只仅仅是作者个人对于图表封装的一个实现思路
:::

## 为什么没有选择其他产品

G2 完全可以胜任一般的后台界面报表图表需求，而且官网文档清晰友好

如果你需要更酷炫的图表，也完全可以剔除集成的库，换用 百度的[echarts](http://echarts.baidu.com/) 或者超级强大的 [d3.js](https://d3js.org/)