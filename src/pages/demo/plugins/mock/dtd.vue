<template>
  <d2-container type="ghost">
    <el-card shadow="never" class="d2-mb">
      <d2-demo-page-header slot="header" title="数据模板"/>
      <d2-markdown url="/static/md/插件 - mock演示页面介绍.md"/>
    </el-card>
    <d2-demo-mock-card
      v-for="(item, index) in settingDTD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)">
    </d2-demo-mock-card>
    <d2-demo-mock-card
      :title="fn.title"
      :code="fn.code"
      :mock="fn.mocked"
      @reload="fnMock()">
    </d2-demo-mock-card>
    <d2-demo-mock-card
      :title="regexp.title"
      :code="regexp.code"
      :mock="regexp.mocked"
      @reload="regexpMock()">
    </d2-demo-mock-card>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import clone from '@/utils/clone.js'
import Mock from 'mockjs'
import settingDTD from './data/settingDTD'
import regexp from './mixins/regexp'
import fn from './mixins/function'
export default {
  mixins: [
    regexp,
    fn
  ],
  components: {
    'd2-demo-mock-card': () => import('./components/d2-demo-mock-card')
  },
  data () {
    return {
      mockResult: [],
      settingDTD,
      settingDTDClone: clone(settingDTD)
    }
  },
  mounted () {
    this.settingDTD.forEach((e, i) => {
      this.doMock(i)
    })
    this.fnMock()
    this.regexpMock()
  },
  methods: {
    doMock (n = 0) {
      Vue.set(this.mockResult, n, JSON.stringify(Mock.mock(this.settingDTDClone[n].json), null, 2))
    }
  }
}
</script>
