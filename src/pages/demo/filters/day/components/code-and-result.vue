<template>
  <div class="d2-mb-10">
    <el-button-group>
      <el-button
        v-for="(label, index) in labelList"
        :key="index"
        :class="buttonClass(index)"
        size="mini"
        type="primary"
        @click="handleClip(label)">
        {{label}}
      </el-button>
    </el-button-group>
    <d2-icon name="arrow-right" class="code-and-result--arrow-right"/>
    {{value}}
  </div>
</template>

<script>
import clipboard from 'clipboard-polyfill'
export default {
  props: {
    label: {
      default: ''
    },
    value: {
      default: ''
    }
  },
  computed: {
    labelList () {
      return this.label.split('|')
    }
  },
  methods: {
    buttonClass (index) {
      if (index === 0) {
        return 'code-and-result--button__first'
      } else if (index === this.labelList.length - 1) {
        return 'code-and-result--button__last'
      } else {
        return 'code-and-result--button'
      }
    },
    handleClip (value) {
      clipboard.writeText(value)
      this.$notify({
        title: '成功',
        message: `${value} 已经复制到剪贴板`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.code-and-result--button {
  padding-left: 5px;
  padding-right: 5px;
}
.code-and-result--button__first {
  padding-right: 5px;
  padding-left: 10px;
}
.code-and-result--button__last {
  padding-left: 5px;
  padding-right: 10px;
}
.code-and-result--arrow-right {
  color: $color-info;
  margin: 0px 20px;
}
.code-and-result--value {
  line-height: 32px;
}
</style>
