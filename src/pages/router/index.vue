<template>
  <transition :name="transitionActive ? 'fade-transverse' : ''">
    <keep-alive :include="keepAlive">
      <router-view/>
    </keep-alive>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin', {
      keepAlive: state => state.page.keepAlive,
      transitionActive: state => state.transition.active
    })
  }
}
</script>
