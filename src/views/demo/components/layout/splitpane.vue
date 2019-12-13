<template>
  <d2-container type="card">
    <template slot="header">区域划分</template>
    <div style="height: 400px; margin: -16px;">
      <SplitPane :min-percent='20' :default-percent='30' split="vertical">
        <template slot="paneL"><div style="margin: 10px;">左</div></template>
        <template slot="paneR">
          <SplitPane split="horizontal">
            <template slot="paneL"><div style="margin: 10px;">右上</div></template>
            <template slot="paneR"><div style="margin: 10px;">右下</div></template>
          </SplitPane>
        </template>
      </SplitPane>
    </div>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import SplitPane from 'vue-splitpane'
Vue.component('SplitPane', SplitPane)
export default {
  mounted () {
    // 加载完成后显示提示
    this.showInfo()
  },
  methods: {
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '在横向或者纵向的分割线上拖拽调整分区大小'
      })
    }
  }
}
</script>
