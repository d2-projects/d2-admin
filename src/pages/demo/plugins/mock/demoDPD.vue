<template>
  <Container type="ghost">
    <el-card class="mb">
      <Markdown url="/static/markdownFiles/article/mock演示页面介绍.md"></Markdown>
    </el-card>
    <MockDemoCard
      v-for="(item, index) in settingDPD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)">
    </MockDemoCard>
  </Container>
</template>

<script>
import Vue from 'vue'
import * as tool from '@/assets/library/tool/tool.js'
import Mock from 'mockjs'
import settingDPD from './data/settingDPD'
import MockDemoCard from './componnets/MockDemoCard'
export default {
  components: {
    MockDemoCard
  },
  data () {
    return {
      mockResult: [],
      settingDPD,
      settingDPDClone: tool.clone(settingDPD)
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
