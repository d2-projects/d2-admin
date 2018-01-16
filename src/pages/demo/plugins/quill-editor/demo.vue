<template>
  <Container type="ghost">
    <el-card>
      <QuillEditor
        v-model="value"
        @text-change="textChangeHandler"
        @selection-change="selectionChangeHandler"
        @editor-change="editorChangeHandler">
      </QuillEditor>
      {{value}}
    </el-card>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      value: '<p><strong style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);">Hello</strong> <strong style="color: rgb(255, 255, 255); background-color: rgb(102, 163, 224);">World</strong></p>'
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
