// 提供滚动方面的功能
// 非滚动优化模式通用

import { throttle } from 'lodash'

/**
 * 根据配置输出 mixin 设置
 * @param {String} ref 滚动容器 ref 名称
 */
export default function ({ ref }) {
  return {
    data () {
      return {
        throttledHandleScroll: throttle(() => {
          console.log(this.$refs[ref].scrollTop)
        }, 300)
      }
    },
    mounted () {
      this.$refs[ref].addEventListener('scroll', this.throttledHandleScroll)
    },
    beforeDestroy () {
      this.$refs[ref].removeEventListener('scroll', this.throttledHandleScroll)
    }
  }
}
