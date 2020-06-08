<template>
  <div style="cursor: pointer">
    <el-tag :type="type" @click.native="handleClick">{{ text }}</el-tag>
  </div>
</template>

<script>
import '../install'
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    scope: {
      default: null
    },
    myProps: {
      default: null
    }
  },
  computed: {
    type () {
      return this.value ? 'success' : 'danger'
    },
    text () {
      if (this.scope.$index === 1) {
        return this.myProps
      } else if (this.scope.$index === 3) {
        return '通过scope拿到了当前行日期：' + this.scope.row.date
      }
      return this.value ? '是' : '否'
    }
  },
  mounted () {
    console.log(this.scope)
    console.log(this.myProps)
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>
