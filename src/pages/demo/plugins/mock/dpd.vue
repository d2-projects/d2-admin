<template>
  <d2-container type="ghost">
    <el-card shadow="never" class="d2-mb">
      <d2-demo-page-header slot="header" title="数据占位符"/>
      <d2-markdown url="/static/md/插件 - mock演示页面介绍.md"/>
    </el-card>
    <d2-demo-mock-card
      v-for="(item, index) in settingDPD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)">
    </d2-demo-mock-card>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import clone from '@/utils/clone.js'
import Mock from 'mockjs'
import settingDPD from './data/settingDPD'
export default {
  components: {
    'd2-demo-mock-card': () => import('./components/d2-demo-mock-card')
  },
  data () {
    return {
      mockResult: [],
      settingDPD,
      settingDPDClone: clone(settingDPD)
    }
  },
  mounted () {
    this.settingDPD.forEach((e, i) => {
      this.doMock(i)
    })
  },
  methods: {
    doMock (n = 0) {
      Vue.set(this.mockResult, n, JSON.stringify(Mock.mock(this.settingDPDClone[n].json), null, 2))
    }
  }
}
</script>
