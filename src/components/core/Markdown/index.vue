<template>
  <div class="component-markdown">
    <div class="spin-group" v-if="!markedHTML">
      <div>正在加载</div>
    </div>
    <div class="markdown-body" v-html="markedHTML"></div>
  </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    md: {
      type: String,
      required: false,
      default: ''
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false
    },
    // 百度网盘分享链接特殊样式
    baidupan: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      getReadmePublicPath: '',
      markedHTML: ''
    }
  },
  mounted () {
    if (this.url) {
      this.initWithUrl()
    } else if (this.md) {
      this.initWithMd()
    } else {
      console.log('not mounted init')
    }
  },
  methods: {
    // 使用 md 初始化
    initWithMd () {
      this.markedHTML = this.marked(this.md)
    },
    // 使用 url 初始化
    async initWithUrl () {
      this.markedHTML = await this.getReadme(this.url)
    },
    // 从 url 加载原始数据
    async getReadme (name) {
      const data = await this.$axios.get(name)
      return this.marked(data)
    },
    marked (data) {
      const renderer = new marked.Renderer()
      renderer.blockquote = (quote) => {
        const _quote = quote.replace(/<[^<>]+>/g, '').trim()
        const bdShareUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i
        const bdShareUrlPwd = /^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i
        if (bdShareUrl.test(_quote)) {
          return `<div style="color: red;">${_quote}</div>`
        }
        if (bdShareUrlPwd.test(_quote)) {
          const url = _quote.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i)
          const pwd = _quote.match(/[a-z0-9]{4}$/i)
          return `<div style="color: blue;">${url[0]} - ${pwd[0]}</div>`
        }
        // 一般的
        return `<blockquote>${quote}</blockquote>`
      }
      return marked(data, {
        ...this.highlight ? {highlight: (code) => highlight.highlightAuto(code).value} : {},
        renderer
      })
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.component-markdown {
  .spin-group {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color-primary;
  }
}
</style>

