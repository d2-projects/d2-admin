<template>
  <div class="markdown-editor">
    <textarea ref="mde"></textarea>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
export default {
  props: {
    // 配置参数
    config: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      // 编辑器实例
      mde: null,
      // 编辑器默认参数
      // 详见 https://github.com/sparksuite/simplemde-markdown-editor#configuration
      defaultConfig: {
        autoDownloadFontAwesome: false
      }
    }
  },
  mounted () {
    // 初始化
    this.init()
  },
  destroyed () {
    // 在组件销毁后销毁实例
    this.mde = null
  },
  methods: {
    // 初始化
    init () {
      const config = Object.assign({}, this.defaultConfig, this.config)
      this.mde = new SimpleMDE({
        ...config,
        element: this.$refs.mde
      })
    }
  }
}
</script>

<style lang="scss">
.markdown-editor {
  .markdown-body {
    padding: 0.5em;
  }
}
.markdown-editor {
  .editor-preview-active {
    display: block;
  }
  .editor-preview-active-side {
    display: block;
  }
}
</style>
