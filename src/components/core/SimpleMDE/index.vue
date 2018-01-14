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
      mde: null
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    this.mde = null
  },
  methods: {
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
