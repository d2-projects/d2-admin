<template>
  <Container type="ghost">
    <el-card class="mb">
      <QuillEditor
        style="min-height: 200px;"
        v-model="value"
        @text-change="textChangeHandler"
        @selection-change="selectionChangeHandler"
        @editor-change="editorChangeHandler">
      </QuillEditor>
    </el-card>
    <el-card>
      <Highlight :code="formated"></Highlight>
    </el-card>
  </Container>
</template>

<script>
import formator from '@/assets/library/tool/format.js'
import value from './value'
export default {
  data () {
    return {
      formator,
      value
    }
  },
  computed: {
    formated () {
      return formator(this.value)
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
