import { throttle } from 'lodash'
import { mapState } from 'vuex'
import menuMixin from '../mixin/menu'
import { elMenuItem, elSubmenu } from '../libs/util.menu'

export default {
  name: 'd2-layout-header-aside-menu-header',
  mixins: [
    menuMixin
  ],
  render (createElement) {
    return createElement('div', {
      attrs: { flex: 'cross:center' },
      class: { 'd2-theme-header-menu': true, 'is-scrollable': this.isScroll },
      ref: 'page'
    }, [
      createElement('div', {
        attrs: { class: 'd2-theme-header-menu__content', flex: '', 'flex-box': '1' },
        ref: 'content'
      }, [
        createElement('div', {
          attrs: { class: 'd2-theme-header-menu__scroll', 'flex-box': '0' },
          style: { transform: `translateX(${this.currentTranslateX}px)` },
          ref: 'scroll'
        }, [
          createElement('el-menu', {
            props: { mode: 'horizontal', defaultActive: this.active },
            on: { select: this.handleMenuSelect }
          }, this.header.map(menu => (menu.children === undefined ? elMenuItem : elSubmenu).call(this, createElement, menu)))
        ])
      ]),
      ...this.isScroll ? [
        createElement('div', {
          attrs: { class: 'd2-theme-header-menu__prev', flex: 'main:center cross:center', 'flex-box': '0' },
          on: { click: () => this.scroll('left') }
        }, [
          createElement('i', { attrs: { class: 'el-icon-arrow-left' } })
        ]),
        createElement('div', {
          attrs: { class: 'd2-theme-header-menu__next', flex: 'main:center cross:center', 'flex-box': '0' },
          on: { click: () => this.scroll('right') }
        }, [
          createElement('i', { attrs: { class: 'el-icon-arrow-right' } })
        ])
      ] : []
    ])
  },
  computed: {
    ...mapState('d2admin/menu', [
      'header'
    ])
  },
  data () {
    return {
      active: '',
      isScroll: false,
      scrollWidth: 0,
      contentWidth: 0,
      currentTranslateX: 0,
      throttledCheckScroll: null
    }
  },
  watch: {
    '$route.matched': {
      handler (val) {
        this.active = val[val.length - 1].path
      },
      immediate: true
    }
  },
  methods: {
    scroll (direction) {
      if (direction === 'left') {
        // 向右滚动
        this.currentTranslateX = 0
      } else {
        // 向左滚动
        if (this.contentWidth * 2 - this.currentTranslateX <= this.scrollWidth) {
          this.currentTranslateX -= this.contentWidth
        } else {
          this.currentTranslateX = this.contentWidth - this.scrollWidth
        }
      }
    },
    checkScroll () {
      let contentWidth = this.$refs.content.clientWidth
      let scrollWidth = this.$refs.scroll.clientWidth
      if (this.isScroll) {
        // 页面依旧允许滚动的情况，需要更新width
        if (this.contentWidth - this.scrollWidth === this.currentTranslateX) {
          // currentTranslateX 也需要相应变化【在右端到头的情况时】
          this.currentTranslateX = contentWidth - scrollWidth
          // 快速的滑动依旧存在判断和计算时对应的contentWidth变成正数，所以需要限制一下
          if (this.currentTranslateX > 0) {
            this.currentTranslateX = 0
          }
        }
        // 更新元素数据
        this.contentWidth = contentWidth
        this.scrollWidth = scrollWidth
        // 判断何时滚动消失: 当scroll > content
        if (contentWidth > scrollWidth) {
          this.isScroll = false
        }
      }
      // 判断何时滚动出现: 当scroll < content
      if (!this.isScroll && contentWidth < scrollWidth) {
        this.isScroll = true
        // 注意，当isScroll变为true，对应的元素盒子大小会发生变化
        this.$nextTick(() => {
          contentWidth = this.$refs.content.clientWidth
          scrollWidth = this.$refs.scroll.clientWidth
          this.contentWidth = contentWidth
          this.scrollWidth = scrollWidth
          this.currentTranslateX = 0
        })
      }
    }
  },
  mounted () {
    // 初始化判断
    // 默认判断父元素和子元素的大小，以确定初始情况是否显示滚动
    window.addEventListener('load', this.checkScroll)
    // 全局窗口变化监听，判断父元素和子元素的大小，从而控制isScroll的开关
    this.throttledCheckScroll = throttle(this.checkScroll, 300)
    window.addEventListener('resize', this.throttledCheckScroll)
  },
  beforeDestroy () {
    // 取消监听
    window.removeEventListener('resize', this.throttledCheckScroll)
    window.removeEventListener('load', this.checkScroll)
  }
}
