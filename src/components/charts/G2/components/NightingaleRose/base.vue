<template>
  <!-- 如果需要开启自动高度功能 需要在这里设置 style="height: 100%;" -->
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2 from '@/components/charts/G2/mixins/G2.js'
export default {
  mixins: [
    G2
  ],
  // 新加参数 或者覆盖 mixin 中的默认参数
  props: {
    padding: {
      required: false,
      default: () => [40, 40, 40, 40]
    }
  },
  methods: {
    // 初始化图表
    init () {
      // mixin 中提供 creatChart
      this.creatChart()
      // 本组件的特殊设置
      this.chart.source(this.data)
      this.chart.coord('polar')
      this.chart.axis(false)
      // tooltip 设置
      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color}" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 创建图形
      this.chart.interval().position('item*count')
        .color('item', this.G2.Global.colors_pie_16)
        .label('count', {
          formatter: (val, item) => item.point.item + ': ' + val
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
      // 渲染图表
      this.chart.render()
    },
    // 数据源改变 重新渲染新的数据
    changeData () {
      this.chart.changeData(this.data)
    }
  }
}
</script>
