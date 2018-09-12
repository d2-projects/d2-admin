<template>
  <div class="d2-layout-header-aside-menu-side">
    <el-menu
      :collapse="asideCollapse"
      :unique-opened="true"
      :default-active="active"
      ref="menu"
      @select="handleMenuSelect">
      <template v-for="(menu, menuIndex) in aside">
        <d2-layout-header-aside-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex"/>
        <d2-layout-header-aside-menu-sub v-else :menu="menu" :key="menuIndex"/>
      </template>
    </el-menu>
    <div v-if="aside.length === 0 && !asideCollapse" class="d2-layout-header-aside-menu-empty" flex="dir:top main:center cross:center">
      <d2-icon name="inbox"/>
      <span>没有侧栏菜单</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import menuMixin from '../mixin/menu'
import d2LayoutMainMenuItem from '../components/menu-item/index.vue'
import d2LayoutMainMenuSub from '../components/menu-sub/index.vue'
import BScroll from 'better-scroll'
export default {
  name: 'd2-layout-header-aside-menu-side',
  mixins: [
    menuMixin
  ],
  components: {
    'd2-layout-header-aside-menu-item': d2LayoutMainMenuItem,
    'd2-layout-header-aside-menu-sub': d2LayoutMainMenuSub
  },
  data () {
    return {
      active: '',
      asideHeight: 300,
      BS: null
    }
  },
  computed: {
    ...mapState('d2admin/menu', [
      'aside',
      'menuAside',
      'asideCollapse'
    ])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse (val) {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    },
    // 监听路由 控制侧边栏激活状态
    '$route.matched': {
      handler (val) {
        this.active = val[val.length - 1].name
        let _side = []
        try {
          val.forEach(router => {
            _side = this.menuAside.filter(menu => menu.name === router.name)
            if (_side.length > 0) {
              throw new Error('找到侧栏，跳出循环')
            }
          })
        } catch (err) {
          console.log(err.message)
        }
        this.asideSet(_side.length > 0 ? _side[0].children : [])
        this.$nextTick(() => {
          if (this.aside.length > 0) {
            this.$refs.menu.activeIndex = this.active
          }
        })
      },
      immediate: true
    }
  },
  mounted () {
    this.scrollInit()
  },
  beforeDestroy () {
    this.scrollDestroy()
  },
  methods: {
    ...mapMutations('d2admin/menu', [
      'asideSet'
    ]),
    scrollInit () {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true
        // 如果你愿意可以打开显示滚动条
        // scrollbar: {
        //   fade: true,
        //   interactive: false
        // }
      })
    },
    scrollDestroy () {
      // https://github.com/d2-projects/d2-admin/issues/75
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    }
  }
}
</script>
