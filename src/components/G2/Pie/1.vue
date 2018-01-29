<template>
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2Mixin from '../mixins/G2'
export default {
  mixins: [
    G2Mixin
  ],
  data () {
    return {
      // [图表设置项] padding
      padding: [60, 60, 110, 60],
      // 在组件 mounted 后立即初始化图表
      // autoInit: false,
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
    initHandler () {
      this.chart = new this.G2.Chart({
        container: this.$refs.chart,
        forceFit: this.forceFit,
        height: this.G2.DomUtil.getHeight(this.$refs.chart),
        padding: this.padding
      })
      this.chart.source(this.dvMaker(), {
        percent: {
          formatter: val => {
            val = (val * 100) + '%'
            return val
          }
        }
      })
      this.chart.coord('theta', {
        radius: 0.75
      })
      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color}" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      this.chart.intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val
          }
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
      this.chart.render()
    },
    // 数据源改变 重新渲染新的数据
    changeData () {
      if (this.chart) {
        // 已经初始化过图表 更新数据
        console.log(1)
        this.chart.changeData(this.dvMaker())
      } else {
        // 没有图表 新创建一个实例
        console.log(2)
        this.initHandler()
      }
    }
  }
}
</script>
