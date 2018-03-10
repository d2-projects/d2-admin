<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <PageHeader
        slot="header"
        title="数据占位符"
        url="https://github.com/nuysoft/Mock">
      </PageHeader>
      <Markdown url="/static/markdownFiles/article/插件 - mock演示页面介绍.md"></Markdown>
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
import clone from '@/utils/clone.js'
import Mock from 'mockjs'
import settingDPD from './data/settingDPD'
export default {
  components: {
    MockDemoCard: () => import('./components/MockDemoCard')
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
