<template>
  <d2-container>
    <template slot="header">一般</template>
    <div class="inner">
      <ve-gauge :data="chartData" v-bind="pubSetting"></ve-gauge>
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
    return {
      chartData: {
        columns: ['type', 'a', 'b', 'value'],
        rows: [
          { type: '速度', value: 80, a: 1, b: 2 }
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
