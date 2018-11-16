// 组件
import d2ContainerFull from './components/d2-container-full.vue'
import d2ContainerFullBs from './components/d2-container-full-bs.vue'
import d2ContainerGhost from './components/d2-container-ghost.vue'
import d2ContainerGhostBs from './components/d2-container-ghost-bs.vue'
import d2ContainerCard from './components/d2-container-card.vue'
import d2ContainerCardBs from './components/d2-container-card-bs.vue'
import d2Source from './components/d2-source.vue'

export default {
  name: 'd2-container',
  props: {
    // 容器样式
    type: {
      type: String,
      required: false,
      default: 'full'
    },
    // 滚动优化
    betterScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    // 始终返回渲染组件
    component () {
      if (this.type === 'card' && !this.betterScroll) return d2ContainerCard
      if (this.type === 'card' && this.betterScroll) return d2ContainerCardBs
      if (this.type === 'ghost' && !this.betterScroll) return d2ContainerGhost
      if (this.type === 'ghost' && this.betterScroll) return d2ContainerGhostBs
      if (this.type === 'full' && !this.betterScroll) return d2ContainerFull
      if (this.type === 'full' && this.betterScroll) return d2ContainerFullBs
      else {
        return 'div'
      }
    }
  },
  render (h) {
    const slots = [
      h('div', this.$slots.default)
    ]
    if (this.$slots.header) slots.push(h('div', { slot: 'header' }, [ this.$slots.header ]))
    if (this.$slots.footer) slots.push(h('div', { slot: 'footer' }, [ this.$slots.footer ]))
    return h('div', {
      ref: 'container',
      class: 'container-component'
    }, [
      h(this.component, {
        ref: 'component',
        props: this.$attrs,
        on: {
          scroll: e => this.$emit('scroll', e)
        }
      }, slots),
      // 只在预览和开发模式下显示源码按钮
      process.env.VUE_APP_BUILD_MODE === 'TRAVIS' || process.env.NODE_ENV === 'development' ? h(d2Source, {
        props: this.$attrs
      }) : undefined
    ])
  },
  methods: {
    // 返回顶部
    scrollToTop () {
      this.$refs.component.scrollToTop()
    }
  }
}
