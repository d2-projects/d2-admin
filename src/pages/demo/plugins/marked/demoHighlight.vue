<template>
  <Container type="ghost">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <PageHeader
            slot="header"
            title="代码高亮"
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
import highlight from 'highlight.js'
export default {
  data () {
    return {
      mdSource: '',
      markedHTML: ''
    }
  },
  async mounted () {
    this.mdSource = await this.getReadme(this.url)
    this.markedHTML = marked(this.mdSource, {
      highlight: (code) => {
        return highlight.highlightAuto(code).value
      }
    })
  },
  methods: {
    async getReadme () {
      const { data } = await this.$http.get('/static/markdownFiles/demo/baseMarkdowmFile.md')
      return data
    }
  }
}
</script>