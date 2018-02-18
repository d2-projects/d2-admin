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
      this.chart.scale('y', {
        tickInterval: 20
      })
      this.chart.interval().position('x*y')
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
