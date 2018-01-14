<template>
  <div ref="chart" style="height: 100%;"></div>
</template>

<script>
import echarts from 'echarts'
import chartsMixin from '@/components/charts/chartsMixin.js'
export default {
  mixins: [
    chartsMixin
  ],
  props: {
    name: { default: '未命名图表' },
    data: {
      default: () => {
        return []
      }
    },
    ready: { default: true },
    size: {
      default: () => {
        return {
          height: 300,
          width: 300
        }
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  computed: {
    style () {
      return {
        height: this.size.height + 'px',
        width: this.size.width + 'px'
      }
    }
  },
  watch: {
    ready (value) {
      if (value) {
        console.log(`pie/type1 [${this.name}] [ready]`)
        this.init()
      }
    },
    size (value) {
      if (this.chart === null) {
        return
      }
      this.dispose()
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    dispose () {
      // 销毁
      this.chart.dispose()
    },
    init () {
      let option = {
        title: {
          text: this.name,
          textStyle: {
            color: '#FFF'
          },
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        dataRange: {
          show: false,
          color: [
            '#51F0E0',
            '#7351F0',
            '#51F06F',
            '#51C4F0',
            '#5451F0',
            '#B751F0'
          ]
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        calculable: true,
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          }
        ]
      }
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart)
        this.chart.setOption(option)
        console.log(`pie/type1 [${this.name}] [图表实例化完毕]`)
      })
    }
  }
}
</script>
