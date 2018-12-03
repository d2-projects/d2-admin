<template>
  <transition name="fade-transverse">
    <div v-if="show" class="d2-module-index-menu">
      <d2-module-index-menu-group
        v-for="(item, index) in menu.children"
        :key="index"
        :menu="item"/>
    </div>
  </transition>
</template>

<script>
import d2ModuleIndexMenuGroup from './components/group'
export default {
  components: {
    d2ModuleIndexMenuGroup
  },
  props: {
    menu: {
      default: () => ({
        children: []
      })
    }
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 300)
  }
}
</script>

<style lang="scss">
.d2-module-index-menu {
  @extend %unable-select;
  margin-top: 20px;
}
</style>
