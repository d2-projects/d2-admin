<template>
  <!-- 如果需要开启自动高度功能 需要在这里设置 style="height: 100%" -->
  <div ref="chart" style="height: 100%"></div>
</template>

<script>
import G2 from '@/components/charts/G2/mixins/G2.js'
export default {
  mixins: [
    G2
  ],
  data () {
    return {
      // DataView数据转换设置
      transformSetting: {
        type: 'fold',
        fields: ['a', 'b'],
        key: 'key',
        value: 'value'
      }
    }
  },
  methods: {
    dvMaker () {
      return new this.DataSet.DataView().source(this.data).transform(this.transformSetting)
    },
    // 初始化图表
    init () {
      // mixin 中提供 creatChart
      this.creatChart()
      // 本组件的特殊设置
      this.chart.source(this.dvMaker(), {
        value: {
          min: 0,
          max: 80
        }
      })
      this.chart.coord('polar', {
        radius: 0.8
      })
      this.chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      })
      this.chart.axis('value', {
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          }
        }
      })
      this.chart.legend('key', {
        marker: 'circle',
        offset: 10
      })
      this.chart.line().position('item*value').color('key').size(2)
      this.chart.point().position('item*value').color('key').shape('circle').size(4).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
      })
      this.chart.area().position('item*value').color('key')
      // 渲染图表
      this.chart.render()
    },
    // 数据源改变 重新渲染新的数据
    changeData () {
      this.chart.changeData(this.dvMaker())
    }
  }
}
</script>
