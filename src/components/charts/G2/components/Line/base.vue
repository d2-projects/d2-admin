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
  methods: {
    // 初始化图表
    init () {
      // mixin 中提供 creatChart
      this.creatChart()
      // 本组件的特殊设置
      this.chart.source(this.data)
      this.chart.scale('value', {
        min: 0
      })
      this.chart.scale('year', {
        range: [0, 1]
      })
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart.line().position('year*value')
      this.chart.point().position('year*value').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
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
