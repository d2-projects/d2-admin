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
import bandupan from './plugin/baidupan'
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
        // 百度网盘
        return bandupan(quote) || `<blockquote>${quote}</blockquote>`
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
$baidupanHeight: 30px;
.baidupan {
  overflow: hidden;
  margin-bottom: 16px;
  .container {
    height: $baidupanHeight + 20px;
    border-radius: 4px;
    border: 1px solid #dfe2e5;
    padding: 10px;
    float: left;
    cursor: pointer;
    &:hover {
      border: 1px solid $color-primary;
    }
    .icon {
      float: left;
      height: $baidupanHeight;
      text-align: center;
      width: 40px;
      margin-right: 10px;
      img {
        width: 40px;
      }
    }
    .url {
      float: left;
      height: $baidupanHeight;
      line-height: $baidupanHeight;
    }
    .pwd {
      float: left;
      height: $baidupanHeight;
      line-height: $baidupanHeight;
      margin-left: 10px;
    }
  }
}
</style>

