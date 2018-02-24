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
      // 获取去掉HTML标签的内容
      const _quote = quote.replace(/<[^<>]+>/g, '').trim()
      // 分享链接地址
      const bdShareUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i
      // 带密码的分享链接
      const bdShareUrlPwd = /^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i
      // 如果是一般的分享链接
      if (bdShareUrl.test(_quote)) {
        return `<div style="color: red;">${_quote}</div>`
      }
      // 如果是带有密码的分享链接
      if (bdShareUrlPwd.test(_quote)) {
        const url = _quote.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i)
        const pwd = _quote.match(/[a-z0-9]{4}$/i)
        return `<div style="color: blue;">${url[0]} - ${pwd[0]}</div>`
      }
      // 一般的
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