<template>
  <div class="markdown-editor">
    <textarea ref="mde"></textarea>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
export default {
  data () {
    return {
      // 编辑器实例
      mde: null
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
      this.mde = new SimpleMDE({
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
