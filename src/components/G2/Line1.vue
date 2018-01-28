<template>
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import G2Mixin from './G2'
export default {
  mixins: [
    G2Mixin
  ],
  methods: {
    initHandler () {
      const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
      ]
      this.creatChart()
      this.chart.source(data)
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
      this.setChartTitle('历史趋势')
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
