<template>
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2Mixin from '../mixins/G2'
export default {
  mixins: [
    G2Mixin
  ],
  methods: {
    // 初始化图表
    initHandler () {
      this.chart = new this.G2.Chart({
        container: this.$refs.chart,
        forceFit: this.forceFit,
        height: this.G2.DomUtil.getHeight(this.$refs.chart),
        padding: this.padding
      })
      this.chart.guide().text({
        top: true,
        position: ['min', 'max'],
        content: this.title,
        style: {
          fill: '#666', // 文本颜色
          fontSize: '16', // 文本大小
          fontWeight: 'bold' // 文本粗细
        },
        offsetX: 0,
        offsetY: 0
      })
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
    },
    // 数据源改变 重新渲染新的数据
    changeData () {
      if (this.chart) {
        // 已经初始化过图表 更新数据
        this.chart.changeData(this.data)
      } else {
        // 没有图表 新创建一个实例
        this.initHandler()
      }
    }
  }
}
</script>
