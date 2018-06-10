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
  data () {
    return {
      // DataView数据转换设置
      transformSetting: {
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
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
        percent: {
          formatter: val => (val * 100).toFixed(2) + '%'
        }
      })
      // 设置坐标系
      this.chart.coord('theta', {
        radius: 0.7
      })
      // tooltip 设置
      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color}" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 创建图形
      this.chart.intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: (val, item) => item.point.item + ': ' + val
        })
        .tooltip('item*percent', (item, percent) => ({
          name: item,
          value: (percent * 100).toFixed(2) + '%'
        }))
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
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
