<template>
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2Mixin from '@/components/G2/mixins/G2.js'
export default {
  mixins: [
    G2Mixin
  ],
  data () {
    return {
      // 在组件 mounted 后立即初始化图表
      // autoInit: false,
      // [图表设置项] padding
      padding: [30, 40, 50, 50]
    }
  },
  methods: {
    // 初始化图表
    initHandler () {
      this.creatChart()
      this.chart.source(this.data)
      this.chart.scale('sales', {
        tickInterval: 20
      })
      this.chart.interval().position('year*sales')
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
