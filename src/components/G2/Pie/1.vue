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
      const { DataView } = this.dataSet
      const data = [
        { item: '事例一', count: 40 },
        { item: '事例二', count: 21 },
        { item: '事例三', count: 17 },
        { item: '事例四', count: 13 },
        { item: '事例五', count: 9 }
      ]
      const dv = new DataView()
      dv.source(data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      this.chart = new this.G2.Chart({
        container: this.$refs.chart,
        forceFit: this.forceFit,
        height: this.G2.DomUtil.getHeight(this.$refs.chart),
        padding: this.padding
      })
      this.chart.source(dv, {
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
      // this.chart = new this.G2.Chart({
      //   container: this.$refs.chart,
      //   forceFit: this.forceFit,
      //   height: this.G2.DomUtil.getHeight(this.$refs.chart),
      //   padding: this.padding
      // })
      // this.chart.guide().text({
      //   top: true,
      //   position: ['min', 'max'],
      //   content: this.title,
      //   style: {
      //     fill: '#666', // 文本颜色
      //     fontSize: '16', // 文本大小
      //     fontWeight: 'bold' // 文本粗细
      //   },
      //   offsetX: 0,
      //   offsetY: 0
      // })
      // this.chart.source(this.data)
      // this.chart.scale('value', {
      //   min: 0
      // })
      // this.chart.scale('year', {
      //   range: [0, 1]
      // })
      // this.chart.tooltip({
      //   crosshairs: {
      //     type: 'line'
      //   }
      // })
      // this.chart.line().position('year*value')
      // this.chart.point().position('year*value').size(4).shape('circle').style({
      //   stroke: '#fff',
      //   lineWidth: 1
      // })
      // this.chart.render()
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
