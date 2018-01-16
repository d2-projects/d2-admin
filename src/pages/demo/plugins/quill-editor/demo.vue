<template>
  <Container type="ghost">
    <el-card class="mb">
      <QuillEditor
        v-model="value"
        @text-change="textChangeHandler"
        @selection-change="selectionChangeHandler"
        @editor-change="editorChangeHandler">
      </QuillEditor>
    </el-card>
    <el-card>
      <Highlight :code="format"></Highlight>
    </el-card>
  </Container>
</template>

<script>
import HTMLFormat from './fn'
import value from './value'
export default {
  data () {
    return {
      HTMLFormat,
      value
    }
  },
  computed: {
    format () {
      return HTMLFormat(this.value)
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
