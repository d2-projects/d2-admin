<template>
  <d2-container>
    <template slot="header">设置城市</template>
    <div class="inner">
      <ve-map :data="chartData" :settings="chartSettings" v-bind="pubSetting"></ve-map>
    </div>
    <d2-link-btn
      slot="footer"
      title="更多示例和文档"
      link="https://v-charts.js.org"/>
  </d2-container>
</template>

<script>
import list from '@/views/demo/charts/list/_mixin/list.js'
import mapOrigin from '@/views/demo/charts/list/_data/beijing'
export default {
  mixins: [
    list
  ],
  data () {
    return {
      chartSettings: {
        position: 'province/beijing',
        mapOrigin
      },
      chartData: {
        columns: ['位置', '人口'],
        rows: [
          { 位置: '延庆区', 人口: 123 },
          { 位置: '密云区', 人口: 1223 },
          { 位置: '平谷区', 人口: 2123 },
          { 位置: '海淀区', 人口: 4123 }
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
