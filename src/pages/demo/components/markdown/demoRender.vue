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
export default {
  data () {
    return {
      mdSource: '',
      markedHTML: ''
    }
  },
  async mounted () {
    this.mdSource = await this.getReadme(this.url)
    const renderer = new marked.Renderer()
    renderer.blockquote = (quote) => {
      // 链接: https://pan.baidu.com/s/1pMNNDZP 密码: vc95
      // https://pan.baidu.com/s/1c3gQGxE
      // 获取去掉HTML标签的内容
      const quoteText = quote.replace(/<[^<>]+>/g, '').trim()
      // 分享链接地址
      const bdShareUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i
      if (bdShareUrl.test(quoteText)) {
        return `<div style="color: red;">${quoteText}</div>`
      }
      return `<blockquote>${quote}</blockquote>`
    }
    this.markedHTML = marked(this.mdSource, {
      renderer
    })
  },
  methods: {
    async getReadme () {
      const data = await this.$axios.get('/static/markdownFiles/demo/baiduyun.md')
      return data
    }
  }
}
</script>