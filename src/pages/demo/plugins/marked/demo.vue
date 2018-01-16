<template>
  <Container type="ghost">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <PageHeader
            slot="header"
            title="基本示例"
            url="https://github.com/chjj/marked">
          </PageHeader>
          <pre>{{mdSource}}</pre>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template slot="header">解析结果</template>
          <div class="markdown-body" v-html="markedHTML"></div>
        </el-card>
      </el-col>
    </el-row>
  </Container>
</template>

<script>
import marked from 'marked'
export default {
  data () {
    return {
      mdSource: '',
      markedHTML: ''
    }
  },
  async mounted () {
    this.mdSource = await this.getReadme(this.url)
    this.markedHTML = marked(this.mdSource)
  },
  methods: {
    async getReadme () {
      const { data } = await this.$axios.get('/static/markdownFiles/demo/baseMarkdowmFile.md')
      return data
    }
  }
}
</script>