export default {
  mounted () {
    // 写法 1 测试有效
    window.onload = () => {
      console.log(this.$refs)
      console.log('----')
      for (let prop in this.$refs) {
        console.log(this.$refs[prop])
      }
    }
  },
  methods: {
    // 初始化
    keyboardExtentInit () {
      //
    },
    // 返回ref名称
    keyboardExtentRefNameMaker (scope) {
      return `${scope.$index}${scope.column.property}`
    }
  }
}
