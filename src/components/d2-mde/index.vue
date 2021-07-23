<template>
  <textarea ref="mde"></textarea>
</template>

<script>
import { merge } from 'lodash'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'

export default {
  name: 'd2-mde',
  props: {
    // 值
    value: {
      type: String,
      required: false,
      default: ''
    },
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
      // 合并参数
      const config = merge({}, this.defaultConfig, this.config)
      // 初始化
      this.mde = new SimpleMDE({
        ...config,
        // 初始值
        initialValue: this.value,
        // 挂载元素
        element: this.$refs.mde
      })
      this.mde.codemirror.on('change', () => {
        this.$emit('input', this.mde.value())
      })
    }
  }
}
</script>
