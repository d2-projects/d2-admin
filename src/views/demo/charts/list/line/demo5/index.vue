<template>
  <d2-container>
    <template slot="header">设置别名</template>
    <div class="inner">
      <ve-line :data="chartData" :settings="chartSettings" v-bind="pubSetting"></ve-line>
    </div>
    <d2-link-btn
      slot="footer"
      title="更多示例和文档"
      link="https://v-charts.js.org"/>
  </d2-container>
</template>

<script>
import list from '@/views/demo/charts/list/_mixin/list.js'
export default {
  mixins: [
    list
  ],
  data () {
    this.chartSettings = {
      labelMap: {
        PV: '访问用户',
        Order: '下单用户'
      },
      legendName: {
        访问用户: '访问用户 total: 10000'
      }
    }
    return {
      chartData: {
        columns: ['date', 'PV', 'Order', 'OrderRate'],
        rows: [
          { date: '1/1', PV: 1393, Order: 1093, OrderRate: 0.32 },
          { date: '1/2', PV: 3530, Order: 3230, OrderRate: 0.26 },
          { date: '1/3', PV: 2923, Order: 2623, OrderRate: 0.76 },
          { date: '1/4', PV: 1723, Order: 1423, OrderRate: 0.49 },
          { date: '1/5', PV: 3792, Order: 3492, OrderRate: 0.323 },
          { date: '1/6', PV: 4593, Order: 4293, OrderRate: 0.78 }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  position: absolute;
  top: 20px;
  right:  20px;
  bottom: 20px;
  left: 20px;
}
</style>
