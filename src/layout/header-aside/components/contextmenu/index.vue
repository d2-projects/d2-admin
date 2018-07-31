<template>
  <div class="d2-contextmenu" v-show="flag" :style="style">
    <slot />
  </div>
</template>
<style>
  .d2-contextmenu {
    position: absolute;
    padding: 5px;
    z-index: 2018;
    background: white;
    border: 1px solid #cfd7e5;
    border-radius: 3px;
    box-shadow: 0px 0px 5px #ccc;
  }
</style>
<script>
export default {
  name: 'd2-contextmenu',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  computed: {
    flag: {
      get () {
        console.log('change flag')
        if (this.visible) {
          // 注册全局监听事件[目前只考虑鼠标解除触发]
          window.addEventListener('mousedown', this.watchContextmenu)
        }
        return this.visible
      },
      set (newVal) {
        this.$emit('update:visible', newVal)
      }
    },
    style () {
      return {
        left: this.x + 'px',
        top: this.y + 'px',
        display: this.visible === true ? 'block' : 'none '
      }
    }
  },
  methods: {
    watchContextmenu () {
      this.flag = false
      window.removeEventListener('mousedown', this.watchContextmenu)
    }
  },
  mounted () {
    // 将菜单放置到body下
    document.querySelector('body').appendChild(this.$el)
  }
}
</script>
