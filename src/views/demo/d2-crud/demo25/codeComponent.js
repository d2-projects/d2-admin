export default `<template>
  <div style="cursor: pointer">
    <el-tag :type="type" @click.native="handleClick">{{ text }}</el-tag>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    // 本行的所有数据，此字段不需要额外配置
    scope: {
      default: null
    },
    // 通过 component 中 props 字段传过来的数据，此字段需要先在 component 中配置
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
</script>`
