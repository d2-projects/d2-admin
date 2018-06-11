<template>
  <d2-container type="ghost" :responsive="true">
    <d2-demo-chart-card v-bind="card" @resize="$refs.chart.resize()">
      <d2-chart-line-step slot-scope="{data}" ref="chart" :data="data" v-bind="chart"></d2-chart-line-step>
    </d2-demo-chart-card>
  </d2-container>
</template>

<script>
import publicMixin from './mixins/public'
export default {
  mixins: [
    publicMixin
  ],
  data () {
    return {
      // 给卡片容器的参数
      card: {
        api: {
          url: '/api/chart/G2Line',
          data: {
            type: 'step'
          }
        }
      },
      // 给图表的参数
      chart: {
        // 图表设置
      }
    }
  }
}
</script>
