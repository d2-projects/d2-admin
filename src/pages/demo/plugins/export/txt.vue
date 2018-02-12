<template>
  <Container>
    <PageHeader
      slot="header"
      title="导出文本">
    </PageHeader>
    <el-input
      type="textarea"
      :autosize="{minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="text">
    </el-input>
    <div class="dd-mt dd-mb">
      <el-button @click="exportTxt">保存为 txt</el-button>
    </div>
    <Markdown url="/static/markdownFiles/article/插件 - 导出.md"></Markdown>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    exportTxt () {
      this.$export.txt({
        text: this.text,
        title: '文本'
      })
    }
  }
}
</script>
