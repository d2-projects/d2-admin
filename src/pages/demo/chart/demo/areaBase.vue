<template>
  <Container type="ghost" :responsive="true">
    <ChartDemoCard v-bind="card">
      <template slot-scope="{data}">
        <G2AreaBase :data="data" v-bind="chart"></G2AreaBase>
      </template>
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
          url: '/api/chart/G2Area',
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
