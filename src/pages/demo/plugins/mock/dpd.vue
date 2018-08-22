<template>
  <d2-container>
    <template slot="header">数据占位符</template>
    <d2-markdown :source="doc" class="d2-mb"/>
    <d2-demo-mock-card
      v-for="(item, index) in settingDPD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      style="margin-bottom: 0px !important;"
      @reload="doMock(index)">
    </d2-demo-mock-card>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import { cloneDeep } from 'lodash'
import Mock from 'mockjs'
import settingDPD from './data/settingDPD'
import doc from './md/doc.md'
export default {
  components: {
    'd2-demo-mock-card': () => import('./components/d2-demo-mock-card')
  },
  data () {
    return {
      mockResult: [],
      settingDPD,
      settingDPDClone: cloneDeep(settingDPD),
      doc
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
