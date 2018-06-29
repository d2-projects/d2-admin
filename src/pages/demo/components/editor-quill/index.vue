<template>
  <d2-container>
    <d2-demo-page-header slot="header" title="基本示例"/>
    <d2-quill
      style="min-height: 200px;"
      v-model="value"
      @text-change="textChangeHandler"
      @selection-change="selectionChangeHandler"
      @editor-change="editorChangeHandler"/>
    <el-card shadow="never" class="d2-mt">
      <d2-highlight :code="formated"/>
    </el-card>
  </d2-container>
</template>

<script>
import htmlFormat from '@/libs/htmlFormat.js'
import value from './value'
export default {
  data () {
    return {
      htmlFormat,
      value
    }
  },
  computed: {
    formated () {
      return htmlFormat(this.value)
    }
  },
  methods: {
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
