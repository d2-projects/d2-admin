<template>
  <Container type="ghost">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <p slot="title">markdown 源码</p>
          <pre>{{mdSource}}</pre>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <p slot="title">markdown 解析结果 代码高亮显示</p>
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
      const { data } = await this.$axios.get('/static/markdownFiles/demo/baseMarkdowmFile.md')
      return data
    }
  }
}
</script>