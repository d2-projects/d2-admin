<template>
  <d2-container>
    <template slot="header">设置样式</template>
    <!-- <div class="inner">
      <ve-map :data="chartData" :settings="chartSettings" v-bind="pubSetting"></ve-map>
    </div> -->
    <!-- 大概由于 mock.js 和 v-charts 的网络请求冲突，本示例暂时无法展示 -->
    <template slot="footer">
      <d2-link-btn title="更多示例和文档" link="https://v-charts.js.org"/>
    </template>
  </d2-container>
</template>

<script>
import list from '@/pages/demo/charts/list/_mixin/list.js'
export default {
  mixins: [
    list
  ],
  data () {
    this.chartSettings = {
      position: 'china',
      label: false,
      itemStyle: {
        normal: {
          borderColor: '#00f'
        }
      },
      zoom: 1.2
    }
    return {
      chartData: {
        columns: ['位置', '人口'],
        rows: [
          { '位置': '吉林', ' 人口': 123 },
          { '位置': '北京', ' 人口': 1223 },
          { '位置': '上海', ' 人口': 2123 },
          { '位置': '浙江', ' 人口': 4123 }
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
