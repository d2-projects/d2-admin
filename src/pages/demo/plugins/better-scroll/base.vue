<template>
  <d2-container @mounted="handleContainerMounted">
    <div ref="wrapper" class="demo-bs-wrapper">
      <ul class="content">
        <li v-for="n in 30" :key="n">n</li>
      </ul>
    </div>
  </d2-container>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      BS: null
    }
  },
  methods: {
    handleContainerMounted () {
      console.log(this.$refs.wrapper)
      let wrapper = this.$refs.wrapper
      this.BS = new BScroll(wrapper, {
        mouseWheel: true,
        scrollbar: {
          fade: true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-bs-wrapper {
  height: 200px;
  position: relative;
}
</style>

