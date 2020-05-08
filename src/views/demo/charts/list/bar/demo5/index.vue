<template>
  <d2-container>
    <template slot="header">纵轴为连续的数值轴</template>
    <div class="inner">
      <ve-bar :data="chartData" :settings="chartSettings" v-bind="pubSetting"></ve-bar>
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
      yAxisType: 'value'
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: 1, 访问用户: 1393 },
          { 日期: 2, 访问用户: 3530 },
          { 日期: 5, 访问用户: 2923 },
          { 日期: 10, 访问用户: 1723 },
          { 日期: 15, 访问用户: 3792 },
          { 日期: 36, 访问用户: 4593 }
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
