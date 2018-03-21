<template>
  <Container type="ghost" :responsive="true">
    <ChartDemoCard class="dd-mb" v-bind="card" @resize="$refs.chart.resize()">
      <G2ColumnBase slot-scope="{data}" ref="chart" :data="data" v-bind="chart"></G2ColumnBase>
    </ChartDemoCard>
    <el-card>
      <Markdown url="/static/md/组件 - 图表.md"></Markdown>
    </el-card>
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
          url: '/api/chart/G2Column',
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
