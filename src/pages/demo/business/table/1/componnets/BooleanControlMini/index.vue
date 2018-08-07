<template>
  <span slot="reference">
    <d2-icon
      v-if="disabled"
      name="hourglass-start"
      style="font-size: 14px; line-height: 32px; color: #909399;"/>
    <span @click="handleClick">
      <slot
        v-if="!disabled && value"
        name="active"/>
      <slot
        v-if="!disabled && !value"
        name="inactive"/>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      default: false
    }
  },
  data () {
    return {
      currentValue: false,
      disabled: false
    }
  },
  watch: {
    value: {
      handler (val) {
        this.currentValue = val
      },
      immediate: true
    }
  },
  methods: {
    handleClick () {
      // 这里先赋值是为了和 TypeControl 使用一样的 handleChange
      this.currentValue = !this.currentValue
      this.handleChange(this.currentValue)
    },
    handleChange (val) {
      this.disabled = true
      this.$message({
        message: '正在发送请求',
        type: 'info'
      })
      // 请将 setTimeout 修改为您的异步请求
      setTimeout(() => {
        this.disabled = false
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.$emit('change', val)
        // 如果修改失败的话需要在这里手动将 currentValue 复原
      }, 1000)
    }
  }
}
</script>
