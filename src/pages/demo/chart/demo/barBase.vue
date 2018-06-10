<template>
  <d2-container type="ghost" :responsive="true">
    <ChartDemoCard class="d2-mb" v-bind="card" @resize="$refs.chart.resize()">
      <d2-chart-bar-base slot-scope="{data}" ref="chart" :data="data" v-bind="chart"></d2-chart-bar-base>
    </ChartDemoCard>
    <el-card>
      <d2-markdown url="/static/md/组件 - 图表.md"/>
    </el-card>
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
          url: '/api/chart/G2Bar',
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
