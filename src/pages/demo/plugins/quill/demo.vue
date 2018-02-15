<template>
  <Container type="ghost">
    <el-card class="dd-mb">
      <QuillEditor
        style="min-height: 200px;"
        v-model="value"
        @text-change="textChangeHandler"
        @selection-change="selectionChangeHandler"
        @editor-change="editorChangeHandler">
      </QuillEditor>
    </el-card>
    <p>输出</p>
    <el-card>
      <Highlight :code="formated"></Highlight>
    </el-card>
  </Container>
</template>

<script>
import htmlFormat from '@/utils/htmlFormat.js'
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
