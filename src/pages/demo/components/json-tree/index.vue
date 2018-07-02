<template>
  <d2-container class="page">
    <tree-view :data="packJson" :options="options"></tree-view>
  </d2-container>
</template>

<script>
import packJson from '../../../../../package.json'
export default {
  data () {
    return {
      options: {
        maxDepth: 10,
        rootObjectKey: 'package.json',
        modifiable: false
      },
      packJson
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  // Your page style here
  // Do not use empty rulesets
  // If empty, delete it
}
</style>