<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <PageHeader
        slot="header"
        title="数据模板"
        url="https://github.com/nuysoft/Mock">
      </PageHeader>
      <Markdown url="/static/markdownFiles/article/插件 - mock演示页面介绍.md"></Markdown>
    </el-card>
    <MockDemoCard
      v-for="(item, index) in settingDTD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)">
    </MockDemoCard>
    <MockDemoCard
      :title="fn.title"
      :code="fn.code"
      :mock="fn.mocked"
      @reload="fnMock()">
    </MockDemoCard>
    <MockDemoCard
      :title="regexp.title"
      :code="regexp.code"
      :mock="regexp.mocked"
      @reload="regexpMock()">
    </MockDemoCard>
  </Container>
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
    MockDemoCard: () => import('./components/MockDemoCard')
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
