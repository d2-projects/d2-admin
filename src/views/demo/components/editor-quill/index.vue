<template>
  <d2-container>
    <d2-quill
      style="min-height: 200px; margin-bottom: 20px;"
      v-model="value"
      @text-change="textChangeHandler"
      @selection-change="selectionChangeHandler"
      @editor-change="editorChangeHandler"/>
    <el-button
      type="primary"
      @click="handleAddRow">
      添加一行
    </el-button>
    <el-card shadow="never" class="d2-card d2-mt">
      <d2-highlight :code="value" format-html/>
    </el-card>
  </d2-container>
</template>

<script>
import value from './value'
export default {
  data () {
    return {
      value
    }
  },
  methods: {
    handleAddRow () {
      this.value += '<p style="color: #409EFF;">我是新增的行</p>'
    },
    textChangeHandler (delta, oldDelta, source) {
      // console.group('QuillEditor textChangeHandler')
      // console.log(delta, oldDelta, source)
      // console.groupEnd()
    },
    selectionChangeHandler (range, oldRange, source) {
      // console.group('QuillEditor selectionChangeHandler')
      // console.log(range, oldRange, source)
      // console.groupEnd()
    },
    editorChangeHandler (eventName, ...args) {
      // console.group('QuillEditor editorChangeHandler')
      // console.log(eventName, args)
      // console.groupEnd()
    }
  }
}
</script>
