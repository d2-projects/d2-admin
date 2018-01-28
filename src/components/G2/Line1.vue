<template>
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2Mixin from './G2'
export default {
  mixins: [
    G2Mixin
  ],
  data () {
    return {
      // 在组件 mounted 后立即初始化图表
      mountedInit: false
    }
  },
  methods: {
    // 初始化图表
    initHandler () {
      this.creatChart()
      this.setChartTitle()
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
      this.chart.render()
    }
  }
}
</script>
