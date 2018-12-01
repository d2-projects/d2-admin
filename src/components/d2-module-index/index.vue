<template>
  <div>
    <d2-module-index-banner v-bind="banner"/>
  </div>
</template>

<script>
import d2ModuleIndexBanner from './components/banner'
export default {
  components: {
    d2ModuleIndexBanner
  },
  props: {
    banner: {
      type: Object,
      default: () => ({
        title: '',
        subTitle: '',
        link: ''
      })
    }
  }
}
</script>
