<template>
  <Container type="ghost" :responsive="true">
    <ChartDemoCard v-bind="card" @resize="$refs.chart.resize()">
      <G2NightingaleRoseBase slot-scope="{data}" ref="chart" :data="data" v-bind="chart"></G2NightingaleRoseBase>
    </ChartDemoCard>
  </Container>
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
          url: '/api/chart/G2NightingaleRose',
          data: {
            type: 'base'
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
