import sleep from '@/utils/sleep.js'

export default {
  mounted () {
    this.keyboardExtentInit()
  },
  methods: {
    // 初始化
    async keyboardExtentInit () {
      await sleep(1000)
      for (const propName in this.$refs) {
        if (this.$refs.hasOwnProperty(propName)) {
          console.log(propName, this.$refs[propName])
        }
      }
    },
    // 返回ref名称
    keyboardExtentRefNameMaker (scope) {
      return `kb-${scope.$index}-${scope.column.property}-kb`
    }
  }
}
